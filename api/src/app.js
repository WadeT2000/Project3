const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV || "development"]);

const SECRET_KEY = "my_secret_key"; 

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/verify", async (req, res) => {
    const { user, pass, type } = req.body;
    let query = await knex('users').select("*").where("username", user);

    
    if (type === "login") {
        if (query.length === 1 && await bcrypt.compare(pass, query[0].password)) {
            const token = jwt.sign({ username: user }, SECRET_KEY, { expiresIn: '1d' });
            res.cookie('auth_token', token, { httpOnly: true, secure: false });
            res.status(200).json({ message: "Logging you in", token });
        } else {
            res.status(404).json({ message: "Incorrect username or password" });
        }
    } else if (type === "create") {
        if (query.length === 0) {
            const hashedPassword = await bcrypt.hash(pass, 10);
            await knex('users').insert({ username: user, password: hashedPassword });
            res.status(200).json({ message: "User created" });
        } else {
            res.status(401).json({ message: "User exists with that username already" });
        }
    } else {
        res.status(404).json({ message: "Invalid operation" });
    }
});

app.get('/protected-route', (req, res) => {
    const token = req.cookies.auth_token;
    if (!token) return res.status(401).json("Access denied");

    try {
        const verified = jwt.verify(token, SECRET_KEY);
        res.status(200).json("Access granted");
    } catch (err) {
        res.status(400).json("Invalid token");
    }
});

app.get('/', (req, res) => {
    res.status(200).json('This is not the endpoint you are looking for. Try /cities or /activities. Or /verify. Or /activities/details. Or /killyourself')
})

app.get('/killyourself', (req, res) => {
    res.status(200).send("You Should Really KYS")
})

app.get('/users', (req, res) => {
    knex('users')
    .select('*')
    .then(data => res.status(200).json(data))
})

app.get('/cities', async (req, res) => {
    const { search } = req.query;

    try {
        if (search) {
            const cityActivities = await knex('cities')
                .join('city_activity', 'cities.id', '=', 'city_activity.city_id')
                .join('activities', 'city_activity.activities_id', '=', 'activities.id')
                .select('cities.name as city_name', 'activities.name as activity_name', 'activities.*')
                .where('cities.id', search);

            const result = {
                name: cityActivities[0].city_name,
                activities: cityActivities.map(activity => ({
                    id: activity.id,
                    name: activity.activity_name,
                    description: activity.description,
                    beach: activity.beach,
                    mountain: activity.mountain,
                    forest: activity.forest,
                    downtown: activity.downtown,
                    countryside: activity.countryside,
                    suburbia: activity.suburbia,
                    meal: activity.meal,
                    entertainment: activity.entertainment,
                    social: activity.social,
                    before_sunrise: activity.before_sunrise,
                    late_morning: activity.late_morning,
                    noon: activity.noon,
                    afternoon: activity.afternoon,
                    evening: activity.evening,
                    night: activity.night,
                    photo: activity.photo
                }))
            };

            res.status(200).json(result);
        } else {
            const cities = await knex('cities').select('id', 'name');
            const cityActivities = await Promise.all(cities.map(async (city) => {
                const activities = await knex('city_activity')
                    .join('activities', 'city_activity.activities_id', '=', 'activities.id')
                    .select('activities.name', 'activities.description', 'activities.*')
                    .where('city_activity.city_id', city.id);

                return {
                    id: city.id,
                    name: city.name,
                    activities: activities.map(activity => ({
                        id: activity.id,
                        name: activity.name,
                        description: activity.description,
                        beach: activity.beach,
                        mountain: activity.mountain,
                        forest: activity.forest,
                        downtown: activity.downtown,
                        countryside: activity.countryside,
                        suburbia: activity.suburbia,
                        meal: activity.meal,
                        entertainment: activity.entertainment,
                        social: activity.social,
                        before_sunrise: activity.before_sunrise,
                        late_morning: activity.late_morning,
                        noon: activity.noon,
                        afternoon: activity.afternoon,
                        evening: activity.evening,
                        night: activity.night,
                        photo: activity.photo
                    }))
                };
            }));
            res.status(200).json(cityActivities);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/activities', (req, res) => {
    knex('activities')
    .select('*')
    .then(data => res.status(200).json(data))
})


app.get('/activities/details', (req, res) => {
    knex('activity_details')
    .select('*')
    .then(data => res.status(200).json(data))
})


app.get('/activitynames', (req, res) => {
    knex('activities')
    .select('name')
    .then(data => res.status(200).json(data))
})

app.listen(port, () => console.log(`Express server listening on port ${port}`))
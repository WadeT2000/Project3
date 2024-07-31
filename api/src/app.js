const express = require('express');
const app = express();
const port = process.env.port || 8080;
const cors = require('cors')
const bodyParser = require('body-parser')
const jsonparser = bodyParser.json()

const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV || "development"]);

// app.use(express.json());

app.use(cors())
//app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).json('This is not the endpoint you are looking for. Try /cities or /activities. Or /verify. Or /killyourself')
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

app.post("/verify", bodyParser.json(), async (req, res) => {
    const { user, pass, type } = req.body;
    //console.log(user, pass, type)
    let query = await knex('users').select("*").where("username", user);
    console.log(query.length);

    if(type === "login"){
        if (query.length == 1 && pass == query[0].password) {
            //console.log("test")
            res.status(200).json("Logging you in");
        }
        else {
            res.status(404).json("Incorrect username or password");
        }
        
    } else if (type === "create"){
        if (query.length == 0){
            await knex('users')
            .insert({username: user, password: pass});
            res.status(200).json("User created");
        }
        else {
            res.status(400).json("User exists with that username already");
        }
        
    } else {
        res.status(404).json("INVALID USERNAME/ PASSWORD");
    }
})




app.listen(port, () => console.log(`Express server listening on port ${port}`))
# BackEnd of the application

    1. The dependencies are already installed
    2. Create your data base in the terminal withing the api/ directory
        - ` docker build -t dockerapi . `
    3. Using knex commands create your database with migrations and seeds.
    4. Upon completion of your database change the start script in the package.json to reflect
        - ` knex migrate:rollback && knex migrate:latest && knex seed:run && node ./src/app.js `
    5. Find your running local database
        - ` docker container ls `
    6. Stop and Remove the container
        - ` docker container stop <Container Name> `
        - ` docker container rm <Container Name> `
    7. Navigate you the main README.md to start your fullstack application.


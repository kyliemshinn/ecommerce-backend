# ecommerce-backend

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

![GitHub language count](https://img.shields.io/github/languages/count/kyliemshinn/ecommerce-backend)

## Table of Contents

- [Description](#description)
- [Criteria](#criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)
- [Questions](#questions)
- [License](#license)

## Description

As a user, this program is designed to run to display the backend of E-commerce websites that use the lates technologies. This was done by modifying existing starter code and using Express.js, MySQL, Sequelize, among many other tools to help this backend program run. This program uses API routes that point to each of the standard CRUD operations for each data group. The routes can be used to create, view, and update the categories, products and tags, establish associations between different entities, and delete data entries.


## Criteria

GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database


## Installation

Node.js and MySQL must be installed on the user computer for this webapp to function. The user will need to then clone it down to their local computer. Once the files are cloned down, the user will need to run `npm install` to get all necessary packages for the program to run. The user then will need to run `npm run seed` and then `node server.js` in the terminal. The user will also need to creat their own .env file for the following:

```
DB_NAME=library_db
DB_PASSWORD=
DB_USER=root
```

## Usage

For proper usage, the user must first follow all steps in the [Installation](#installation) section to get the app to run. Once the message `App listening on port 3001!` is presented in the terminal, the user will need to navigate to Insomnia to run the routes of the program. Please reference the demo video for a step by step tutorial on proper usage of Ecommerce Backend.


## Technologies Used

- Javascript
- Node.js
- Express.js
- MySQL
- Dotenv
- Sequelize

## Contributors

The starter code of the web app was created by UC Berkeley Full Stack Extension School. 
The routes, models, and server was created by Kylie Shinn.

- GitHub: [github](https://github.com/kyliemshinn)
- LinkedIn: [linkedin](https://www.linkedin.com/feed/)

## Questions

For additional information please contact me at:
Email: kyliemshinn@gmail.com

## License

MIT License

Copyright (c) [2022] [Kylie Shinn]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// Create connection to our database, pass in your MySQL information for username and password
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}
module.exports = sequelize;

if (process.env.JAWSDB_URL) {
       sequelize = new Sequelize(process.env.JAWSDB_URL);
   } else {
       sequelize = new Sequelize
       process.env.DB_NAME, 
       process.env.DB_USER, 
       process.env.DB_PW, 
       {
           host: process.env.DB_HOST,
           port: process.env.DB_PORT,
           dialect: 'mysql',
       };
   }

  
  //to test the connection 
   sequelize
       .authenticate()
       .then(() => {
           console.log('Connection has been established successfully.');
       })
       .catch(err => {
          console.error('Unable to connect to the database:', err);
       });
  
  
   if (process.env.JAWSDB_URL) {
       sequelize = new Sequelize(process.env.JAWSDB_URL)
   } else {
       sequelize = new Sequelize(
           process.env.DB_APP_DATABASE,
           process.env.DB_USER,
           process.env.DB_PASS, {
               host: process.env.DB_HOST,
               port: process.env.DB_PORT,
               dialect: 'mysql',
         });
   }
  
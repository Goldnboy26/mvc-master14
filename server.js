// Dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = require('hbs');
const routes = require('./controllers/');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.DB_SESSION_SECRET,
    cookie: {
        maxAge: 280
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
hbs = exphbs.create({
    helpers
});
app.engine('handlebars', hbs.engine);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('view engine', 'hbs');
app.use(session(sess));

app.use(express.json());

app.use(express.urlencoded
    ({
        extended: true
    }));

app.use(express.static(path.join(__dirname, 'public')));
//path to the routes
app.use(routes);

console.log(`Database name: ${sequelize.config.tech_blog_db} \n running on port: ${sequelize.config.PORT} \n 
under hostname: ${sequelize.config.localhost}`);

sequelize.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    }
    )
})
    ;
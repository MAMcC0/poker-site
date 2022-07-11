import path from 'path';
const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
import express from 'express';
import session from 'express-session';
import engine from 'express-handlebars';
import create from 'express-handlebars';
import Router from './controllers/index.js';
// import {helpers} from './utils/helpers.js';

import sequelize from './config/connection.js';
import SequelizeStore from 'connect-session-sequelize';

const Store = SequelizeStore(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
//how to import
const hbs = create();

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  Store: new Store({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(Router);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

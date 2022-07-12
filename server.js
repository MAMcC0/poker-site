import path from 'path';
import { dirname } from 'path'
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url))
//const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
//const __dirname = `C:\\Users\\mered\\Documents\\bootcamp-lessons\\Projects\\Beginner's-luck\\poker-site`
import express from 'express';
import session from 'express-session';
import engine from 'express-handlebars';
import create from 'express-handlebars';
import Router from './controllers/index.js';
// import {helpers} from './utils/helpers.js';
console.log(__dirname)

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// Inform Express.js on which template engine to use
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


app.use(Router);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

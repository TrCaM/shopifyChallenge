'use strict';

import express from 'express';
// import graphqlHTTP from 'express-graphql';
// import {buildSchema} from 'graphql';
import Sequelize from 'sequelize';
import bodyParser from 'body-parser';
import logger from './bin/server';

/* Create connection with mysql database */
const sequelize = new Sequelize('simpleShop', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  poll: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize.authenticate()
    .then(() => {
      logger.info('Connection has been established successfully.');
    })
    .catch(err => {
      logger.error('Unable to connect to the database', err);
    });

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   context: { mysql, connection },
//   graphiql: true,
// }));

export default app;

'use strict';

import express from 'express';
import graphqlHTTP from 'express-graphql';
import dataStore from './models/dataStore';
import config from './config/config';
import bodyParser from 'body-parser';
import logger from './bin/server';
import schema from './graphql/schema';

require('dotenv').config();
/* Create connection with mysql database */
const models = dataStore.getModels(config[process.env.NODE_ENV], true);
models.sequelize.authenticate()
    .then(() => {
      logger.info('Connection has been established successfully.');
    })
    .catch(err => {
      logger.error('Unable to connect to the database', err);
    });

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  context: { models },
  graphiql: true,
}));

export default app;

import Sequelize from 'sequelize';
import lineItem from './lineitem';
import product from './product';
import order from './order';
import shop from './shop';

let models = {};

function getModels (config, force = false) {
  if (Object.keys(models).length && !force) {
    return models;
  }
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );

  let modules = [lineItem, product, order, shop];

  // Initialize models
  modules.forEach((module) => {
    const model = module(sequelize, Sequelize, config);
    models[model.name] = model;
  });

  // Apply associations
  Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });

  models.sequelize = sequelize;
  models.Sequelize = Sequelize;

  return models;
}

export default { getModels };
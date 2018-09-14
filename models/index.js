import Sequelize from 'sequelize';
var pg = require('pg');
const sequelize = new Sequelize('slack', 'sejuti', 'sejuti8',{
   dialect: 'postgres',
   protocol: 'postgres',
   operatorsAliases: false,
   define: {
        underscored: true,
    },
   host:'127.0.0.1 ',
   port: 5432
});

const models = {
  User: sequelize.import('./user'),
  Message: sequelize.import('./message'),
  Channel: sequelize.import('./channel'),
  Team: sequelize.import('./team'),
  // member: sequelize.import('./member'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
export {sequelize};

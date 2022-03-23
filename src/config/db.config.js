const { Sequelize, Model, DataTypes } = require("sequelize");
const logger = require('../logger/api.logger');

const connect = () => {

    const hostName = process.env.PG_HOST;
    const userName = process.env.PG_USER;
    const password = process.env.PASSWORD;
    const database = process.env.PG_DATABASE;
    const dialect = process.env.PG_DIALECT;

    console.log('dialect ', dialect)

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect,
        operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.tasks = require("../model/task.model")(sequelize, DataTypes, Model);

    return db;

}

module.exports = {
    connect
}
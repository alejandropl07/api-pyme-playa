import { Sequelize } from 'sequelize';

const db = new Sequelize ('bd_unevol', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true
      }

});

export default db;
import { Sequelize } from 'sequelize';

const db = new Sequelize ('unevol_db', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true
      }

});

export default db;
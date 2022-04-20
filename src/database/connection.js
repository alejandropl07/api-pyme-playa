import { Sequelize } from 'sequelize';

const db = new Sequelize ('unevol_db', 'root', 'rndc960604',{
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true
      }

});

export default db;
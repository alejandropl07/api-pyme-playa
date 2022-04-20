import { Sequelize } from 'sequelize';

const db = new Sequelize ('node_db', 'root', 'rndc960604',{
    host: 'localhost',
    dialect: 'mysql'

});

export default db;
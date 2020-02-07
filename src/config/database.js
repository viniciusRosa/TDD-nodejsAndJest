require('dotenv/config')
module.exports = {
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true
  }

}

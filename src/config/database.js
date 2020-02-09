require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

module.exports = {
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: 5432,
  dialect: process.env.DB_DIALECT || 'postgres',
  storage: './__tests__/database.sqlite',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true
  }

}

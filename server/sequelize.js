const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
  "postgres://zbcqtpejuhkxvi:daec9a7efff581a5c869de9502526f7815621abfa03457d170631c6d020fbfbc@ec2-18-234-17-166.compute-1.amazonaws.com:5432/d13nsp8jdh4lqk",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
)

module.exports = sequelize
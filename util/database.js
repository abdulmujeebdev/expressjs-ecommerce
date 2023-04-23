const Sequelize = require("sequelize");

const sequelize = new Sequelize("express_product", "mujeeb", "Aqua11212211!", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;

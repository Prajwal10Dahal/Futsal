const Sequelize = require("sequelize");
const sequelize = new Sequelize("prajwol","root","",{ 
    host:"localhost",
    dialect:"mysql"
});

module.exports = sequelize
const User = require("./user-model");
const sequelize = require("../config/db-connection");

const connectToDatabase = async ()=>{
    await sequelize.authenticate();
    await sequelize.sync({alter:true});
}
module.exports = {User,connectToDatabase}
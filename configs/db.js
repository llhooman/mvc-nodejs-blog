const { Sequelize } = require("sequelize");
const db = new Sequelize("personalblog", "root", "hooman123", {
    host: "localhost",
    dialect: "mysql"
});
try {
    db.authenticate();
} catch (error) {
    console.error("Unable to connect to the database:", error);
}
module.exports = db;

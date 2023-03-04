const { DataTypes } = require("sequelize");
const db = require("../configs/db");
const bcrypt = require("bcrypt");
const User = db.define(
    "users",
    {
        // Model attributes are defined here
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.NUMBER
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    },
    {
        // Other model options go here
    }
);
User.validatePassword = (user, pwd) => {
    return bcrypt.compareSync(pwd, user.password);
};
User.encryptPassword = async (myPlaintextPassword) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hash = await bcrypt.hashSync(myPlaintextPassword, salt);
    return hash;
};
module.exports = User;

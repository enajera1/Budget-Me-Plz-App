const User = require("./user");
const Bills = require("./bills");
const sequelize = require("../Config/connection");

User.hasMany(Bills, {
    foreignkey: "user_id",
    onDelete: "CASCADE",
});
Bills.belongsTo(User, {
    foreignKey: "user_id",
});

module.exports = { User, Bills };
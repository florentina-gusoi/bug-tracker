'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        timestamps: false //to stop the model from requiring createdAt and updatedAt columns
    });
    User.associate = function (models) {
        User.belongsToMany(models.Project, {through: 'UserProject', foreignKey: 'userId'})
    };
    return User;
};
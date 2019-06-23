'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    course: DataTypes.STRING,
    phone: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    tableName:'Student'
  });
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
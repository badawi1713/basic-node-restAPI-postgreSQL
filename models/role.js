module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  role.associate = function (models) {
    role.hasMany(models.user, {
      foreignKey: 'role_id',
    })
  };
  return role;
};

// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const role = sequelize.define('role', {
//     name: DataTypes.STRING,
//     code: DataTypes.STRING
//   }, {});
//   role.associate = function(models) {
//     // associations can be defined here
//   };
//   return role;
// };
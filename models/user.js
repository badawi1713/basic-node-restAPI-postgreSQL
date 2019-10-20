module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  //relasi role_id milik atau merujuk pada tabel 'ROLE'
  user.associate = function (models) {
    user.belongsTo(models.role, {
      foreignKey: 'role_id',
    })
  };
  return user;
};

// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const user = sequelize.define('user', {
//     name: DataTypes.STRING,
//     age: DataTypes.INTEGER,
//     role_id: DataTypes.INTEGER
//   }, {});
//   user.associate = function(models) {
//     // associations can be defined here
//   };
//   return user;
// };
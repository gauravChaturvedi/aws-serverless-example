"use strict";
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      item_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      weight: DataTypes.FLOAT
    },
    {}
  );
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};

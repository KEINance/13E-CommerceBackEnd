const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {                         // 2
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER, // 2
      references: {
        model: "product",
        key: "id"
      }
//refences product model id
    },
    tag_id: {                  // 1
      type: DataTypes.INTEGER,
//refernces tag model id
  references: {
      model: "tag",
      key: "id"
}
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

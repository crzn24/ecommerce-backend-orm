const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, // Manually define the primary key
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product, // reference to Product model
        key: 'id', // column name of the referenced model
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag, // reference to Tag model
        key: 'id', // column name of the referenced model
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

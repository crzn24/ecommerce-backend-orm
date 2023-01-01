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
        model: 'product', // reference to Product model 'product'
        key: 'id', // column name of the referenced model
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag', // reference to Tag model 'tag'
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

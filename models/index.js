// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category (a product can only belong to one category ONE TO ONE)
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products (a category can have multiple products ONE TO MANY)
Category.hasMany(Product, {
  foreignKey: 'category_id',
  // onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag) ---- products have multiple tags ONE TO MANY
Product.belongsToMany(Tag, { through: ProductTag });
// Tag.hasMany(Product, {
//   foreignKey: 'tag_id',
// })

// Tags belongToMany Products (through ProductTag) ---- tags have many products ONE TO MANY
Tag.belongsToMany(Product, { through: ProductTag });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

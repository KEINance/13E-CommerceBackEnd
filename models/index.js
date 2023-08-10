// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsto(Category, {

});

// Categories have many Products
Categories.havemany(Products, {

});

// Products belongToMany Tags (through ProductTag)
Products.belongToMany(Tags, {

});

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {

});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

const router = require('express').Router();
const { Category, Product } = require('../../models');
const { findOne } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll( {
    include: [{model: Product}],
  })
  .then(dbData => res.json(dbData))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne( {
    include: [{model: Product}],
  })
  .then(dbData => res.json(dbData))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
})
    .then(dbData => res.json(dbData))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update( {
    category_name: req.body.category_name,
  },
  {
    where: {
      id: req.params.id,
    }
  })
    res.json(dbData);
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json(dbData);
});

module.exports = router;

const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll({
      inlclude: [{model: Product}]
    });
    res.status(200).json(allTags); // 200 status code means the request is successful
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findByPk(req.params.id, {
      include: [{model: Product, through: ProductTag}]
    });

    if (!allTags) {
      res.status(404).json({ message: 'No tag associated with that id!' }); // 400 status code means the server could not understand the request
      return;
    }

    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((tag) => {
    res.status(200).json(tag);
  })
  .catch((err) => {
    console.log(400).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value

});

module.exports = router;

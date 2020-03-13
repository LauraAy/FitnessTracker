const router = require('express').Router()
const { Exercise } = require('../models')

// GET all exercises
router.get('/exercises', (req, res) => Exercise.find()
.then(exercises => res.json(exercises))
.catch(e => console.error(e)))

//POST one exercise
router.post('/exercises'
, (req, res) => Exercise.create(req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))

// PUT one exercise
router.put('/exercises/:id', (req, res) => Exercise.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))

// DELETE one exercise 
router.delete('/items/:id', (req, res) => Item.findByIdAndDelete(req.params.id)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))
 
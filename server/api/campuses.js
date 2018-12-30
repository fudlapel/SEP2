'use strict';

const router = require('express').Router();
const { Student, Campus } = require('../db');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findAll({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Student,
        },
      ],
    });
    res.json(campus);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const createdCampus = await Campus.create(req.body);
    res.json(createdCampus);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedCampus = await Campus.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deletedCampus);
  } catch (err) {
    next(err);
  }
});

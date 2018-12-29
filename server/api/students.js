const router = require('express').Router();
const { Student, Campus } = require('../db');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const student = await Student.findAll({
      where: {
        id: req.params.id,
      },
      include: [{ model: Campus }],
    });
    res.json(student);
  } catch (err) {
    next(err);
  }
});

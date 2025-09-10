
const { createStudent, getAll, getOne } = require('../controller/studentController');

const router = require('express').Router();

router.post('/create',createStudent);
router.get('/get-All',getAll);
router.get('/get-One',getOne);

module.exports = router
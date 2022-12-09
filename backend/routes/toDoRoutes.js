const express = require('express');
const {
    getToDos,
    getToDo,
    createToDo,
    deleteToDo,
    updateToDo
} = require('../controllers/toDoController');
const router = express.Router();

const app = express();

// Allow CORS
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

// GET all to-dos
router.get('/', getToDos);

// GET a single to-do
router.get('/:id', getToDo);

// POST a new to-do
router.post('/', createToDo);

// DELETE a to-do
router.delete('/:id', deleteToDo);

// UPDATE a to-do
router.patch('/:id', updateToDo);

module.exports = router;
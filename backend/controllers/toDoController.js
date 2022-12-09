const ToDo = require('../models/toDoModel');
const mongoose = require('mongoose');

// GET all to-dos
const getToDos = async(req, res, next) => {
    const toDos = await ToDo.find({}).sort({createdAt: -1});

    res.status(200).json(toDos);
};

// GET a single to-do
const getToDo = async(req, res, next) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such todo'});
    };

    const toDo = await ToDo.findById(id);

    if(!toDo){
        return res.status(404).json({error: 'No such todo'});
    };

    res.status(200).json(toDo);
};

// CREATE a new to-do
const createToDo = async(req, res, next) => {
    const {title, description} = req.body;

    try {
        const toDo = await ToDo.create({ title, description });
        res.status(200).json(toDo);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

// DELETE a to-do
const deleteToDo = async(req, res, next) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such todo'});
    };

    const toDo = await ToDo.findOneAndDelete({_id: id});

    if(!toDo){
        return res.status(404).json({error: 'No such todo'});
    };

    res.status(200).json(toDo);
};

// UPDATE a to-do
const updateToDo = async(req, res, next) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such todo'});
    };

    const toDo = await ToDo.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if(!toDo){
        return res.status(404).json({error: 'No such todo'});
    };

    res.status(200).json(toDo);
};

module.exports = {
    getToDos,
    getToDo,
    createToDo,
    deleteToDo,
    updateToDo
};
const express = require('express');

const Actions = require('../data/helpers/actionModel');

const router = express.Router();

// Gets list of all actions
router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get();
        res.status(200).json(actions);
    } catch(error){
        console.log(error);
        res.status(500).json({ message: "Error retrieving list of actions"});
    }
})

// Gets action by id
router.get('/:id', async (req, res) => {
    try {
        const action = await Actions.get(req.params.id);
        if (action){
            res.status(200).json(action);
        } else {
            res.status(404).json({ message: "The action with the specified ID could not be found"});
        }
    } catch {
        res.status(500).json({ message: "The action info could not be retrieved"});
    }
})

// Add an action
router.post('/', async (req, res) => {
    try {
        const { project_id, description, notes, completed } = req.body;
        if (!project_id || !description || !notes ){
            res.status(400).json({ message: "You must have an existing project ID, a description, and notes attached to this input"});
        } else {
            const newAction = await Actions.insert(req.body);
            res.status(201).json(newAction);
        }
    } catch {
        res.status(500).json({ message: "The action could not be added."});
    }
})

module.exports = router;
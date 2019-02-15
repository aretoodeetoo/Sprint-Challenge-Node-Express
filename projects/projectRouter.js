const express = require('express');

const Projects = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get();
        res.status(200).json(projects);
    } catch(error){
        console.log(error);
        res.status(500).json({ message: "Error retrieving list of projects"});
    }
})

// Gets project by ID
router.get('/:id', async (req, res) => {
    try{
        const project = await Projects.get(req.params.id);
        if (project){
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: "The project by this ID could not be found"});
        }
    } catch {
        res.status(500).json({ message: "Error retrieving this project"});
    }
})

module.exports = router;
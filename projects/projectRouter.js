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

// Get actions from a specific project
router.get('/actions/:projectID', (req, res) => {
    const { projectID } = req.params;
    Projects
        .getProjectActions(projectID)
        .then(projectActions => {
            if (projectActions === 0){
                res.status(404).json({ message: "No actions for this project"});
            } else {
                res.status(200).json(projectActions);
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Error retrieving project actions"});
        })
})

// Add a project
router.post('/', async (req, res) => {
    try{
        const { name, description } = req.body;
        if (!name || !description){
            res.status(400).json({ message: "Please provide both a name and description for this project"});
        } else {
            newProject = await Projects.insert(req.body);
            res.status(201).json(newProject);
        }
    } catch {
        res.status(500).json({ message: "The project could not be added to our DB. Sorry."});
    }
})

module.exports = router;
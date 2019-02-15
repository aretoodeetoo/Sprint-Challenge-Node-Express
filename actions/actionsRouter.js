const express = require('express');

const Actions = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get();
        res.status(200).json(actions);
    } catch(error){
        console.log(error);
        res.status(500).json({ message: "Error retrieving list of actions"});
    }
})

module.exports = router;
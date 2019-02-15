// imports
const express = require('express');
// const helmet = require('helmet');
// const morgan = require('morgan');

// const actionsRouter = require('./actions/actionsRouter');
// const projectRouter = require('./projects/projectRouter');

// server commands
const server = express();
server.use(express.json());
// server.use(helmet());
// server.use(morgan('dev'));

// // server use specific endpoints
// server.use('/api/actions', actionsRouter);
// server.use('/api/projects', projectRouter);

server.get('/', async (req, res) => {
    res.send(`
    <h2>Initial test!</h2>`);
})

module.exports = server;
const express = require('express');
const projectsController = require('./controllers/ProjectsController');
const bugsController = require('./controllers/BugsController');
const projectsBugsController = require('./controllers/ProjectsBugsController');
const authenticationController = require('./controllers/AuthenticationController');
const usersController = require('./controllers/UsersController');
const usersProjectController = require('./controllers/UsersProjectController');

const authenticationMiddleware = require('./middlewares/authentication');

const router = express.Router();
//requires authentication to use the routes
router.use('/projects', authenticationMiddleware);
router.use('/bugs', authenticationMiddleware);
router.use('/projects/:projectId/bugs', authenticationMiddleware);
router.use('/users', authenticationMiddleware);
//USERS

router.get('/users', usersController.index);
router.post('/users', usersController.create);
router.get('/users/:id', usersController.show);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);

//PROJECTS
router.get('/projects', projectsController.index);
router.post('/projects', projectsController.create);
router.get('/projects/:id', projectsController.show);
router.put('/projects/:id', projectsController.update);
router.delete('/projects/:id', projectsController.delete);

//USERSPROJECTS
router.get('/usersprojects', usersProjectController.index);
router.get('/users/:userId/projects', usersProjectController.show);

//BUGS
router.get('/bugs', bugsController.index);
router.post('/bugs', bugsController.create);
router.get('/bugs/:id', bugsController.show);
router.put('/bugs/:id', bugsController.update);
router.delete('/bugs/:id', bugsController.delete);

//PROJECTS&BUGS
router.get('/projects/:projectId/bugs', projectsBugsController.show); //shows all the bugs for a project
router.post('/projects/:projectId/bugs', projectsBugsController.create); //adds a bug to a project

//authentication
router.post('/login', authenticationController.login);

module.exports = router;

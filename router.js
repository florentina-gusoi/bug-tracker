const express = require('express');
const projectsController = require('./controllers/ProjectsController');
const bugsController = require('./controllers/BugsController');
const projectsBugsController = require('./controllers/ProjectsBugsController');


const router = express.Router();

router.get('/projects', projectsController.index);
router.post('/projects', projectsController.create);
router.get('/projects/:id', projectsController.show);
router.put('/projects/:id', projectsController.update);
router.delete('/projects/:id', projectsController.delete);

router.get('/bugs', bugsController.index);
router.post('/bugs', bugsController.create);
router.get('/bugs/:id', bugsController.show);
router.put('/bugs/:id', bugsController.update);
router.delete('/bugs/:id', bugsController.delete);

router.get('/projects/:projectId/bugs', projectsBugsController.show);
router.post('/projects/:projectId/bugs', projectsBugsController.create);
module.exports = router;

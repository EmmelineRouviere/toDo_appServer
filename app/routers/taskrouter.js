const {Router} = require('express'); 
const taskController = require('../controllers/taskController'); 

const router = new Router(); 


router.get('/tasks', taskController.getTasks); 
// la roote prend deux paramètres à sa création : le endpoint et ce que va retourner le endpoint 

router.get('/tasks/:id', taskController.getTaskById);

router.post('/tasks', taskController.createTask);

router.patch('/tasks/:id', taskController.updateTask);

router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router; 
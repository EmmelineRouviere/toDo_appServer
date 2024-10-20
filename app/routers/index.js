const {Router} = require('express'); 
const mainRouter = new Router(); 
const taskRouter = require('./taskrouter'); 

mainRouter.use(taskRouter); 


module.exports = mainRouter; 



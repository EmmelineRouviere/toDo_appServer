const task = [
    {
        id: 1, 
        name: "tache 1", 
        description : "faire les courses"
    }, 
    {
        id: 2, 
        name: "tache 2", 
        description : "menage"
    }
]


function generateNextId(array) {
    if (array.length === 0) return 1;
    
    const maxId = Math.max(...array.map(item => item.id));
    return maxId + 1;
}

// const getTasks = (req, res) => {
//     res.json({"name": "ma route"});
// }

const getTasks = (req, res) => {
    res.json(task);
}


const getTaskById = (req, res) => {
    // console.log(req); 
    const id = req.params.id; 
    const foundTask = task.find((task) => task.id ===  Number(id));

    if(!foundTask){
        res.json({message: "L'élément n'a pas été trouvé"}); 
    }

    res.json(foundTask); 
}


const createTask = (req, res) => {
    const body = req.body; 
    console.log(body.name); 

    const newTask = { name : body.name, 
        description : body.description, 
        id : generateNextId(task)
    }; 
    task.push(newTask);
    res.json(newTask); 
}

const updateTask = (req, res) => {

    const id = req.params.id; 
    const body = req.body; 
    const foundTask = task.find((task) => task.id ===  Number(id));

    if(foundTask){    
        foundTask.name = body.name; 
        foundTask.description = body.description; 
        res.json(foundTask);

    }else{
        res.json({message: "L'élément n'a pas pu être modifié"}); 
    }

}

const deleteTask = (req, res) => {
    const id = req.params.id; 
    const foundTask = task.find((task) => task.id ===  Number(id));

    if(foundTask){  
        const arrayIndex = foundTask.id - 1;   
        task.splice(arrayIndex, 1);
        res.json({message: "task supprimé"});

    }else{
        res.json({message: "L'élément n'a pas pu être supprimé"}); 
    }


}




 module.exports = {getTasks, getTaskById, createTask, updateTask, deleteTask}; 
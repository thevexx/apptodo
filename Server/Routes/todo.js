const router = require('express').Router();
const mongoose = require('mongoose');
//const ObjectId = require('mongoose').ObjectId;

mongoose.connect('mongodb://localhost:27017/appTodoDb', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const userSchema = require('../Models/user')
const userModel = mongoose.model('users', userSchema); // import model

// get todo by user id

router.get('/:id', async (req, res) => {
    const result = await userModel.findOne({_id : req.params.id});
    res.send(result.todo);
    
})

// post todo by user id

router.post('/:id', async (req, res)=>{
    
        const result = await userModel.update({_id: req.params.id},
        { $push:{
            "todo": req.body
        } } );
        res.send(result);
    
})
    
// update todo by user id and index

router.put('/:id/:indextodo', async (req, res) => {

    const result = await userModel.updateOne({_id : req.params.id}, {$set : {["todo."+req.params.indextodo] : req.body}} );
    res.send(result);
})

// delete todo by user id and index

router.delete('/:id/:indextodo', async (req, res) => {
   /// methode 1
   
    const todos = await userModel.findOne({_id : req.params.id});  
    const result = await userModel.update({_id: req.params.id}, {$pull: {todo : todos.todo[req.params.indextodo]}});

///methode 2
    //const result = await userModel.update({_id: req.params.id}, {$unset: {["todo."+req.params.indextodo]: 0000}});
    
    //const result2 = await userModel.update({_id: req.params.id}, {$pull: {"todo": null}}); //supprimer un element avec une condition

    res.send(result);    
})


module.exports = router;
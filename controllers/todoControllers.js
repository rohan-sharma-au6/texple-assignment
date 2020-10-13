const Todo = require("../models/Todos")

module.exports={
    createTodo(req,res){
        const title = req.body.title;
        const todo= new Todo({title})
        todo.save().then(result=>{
            res.send(result)
        }).catch(err=>{
            console.log(err)
        })

    },
    allTodos(req,res){
        Todo.find().then(result=>{
            res.json({result})
        })
    },
    
    deleteTodo(req,res){
        Todo.findByIdAndDelete({_id:req.params.id})
        .then(result=>
            res.json({result}))
        .catch(err=>{
            res.json(err)
        })
    },
    editTodo(req,res){
        Todo.findByIdAndUpdate({_id:req.params.id},{
            title:req.body.title
        },(err,result)=>{
            if(err){
                res.json({error:err})
            }else{
                res.json({result})
            }
        }
            )
    }
}
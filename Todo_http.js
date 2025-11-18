const express=require('express')
const app=express();
const fs=require('fs')
const {Todo,ChangeStatus,deletetask,Read_tasks}=require('./operations')

app.use(express.json())

app.get('/todo',(req,res)=>{
    const data=Read_tasks()
    res.send(data)
})
app.post('/addtodo',(req,res)=>{
  const inputdata=req.body.task;
  Todo(inputdata)
  res.send({
    message:"Todo Added Successfully !"
  })

})
app.delete('/delete/:id',(req,res)=>{
   const y=Number(req.params.id)
    deletetask(y)
    res.send({
        message:"Deleted OK DONE"
    })
})
app.put('/update/:id',(req,res)=>{
    const y=Number(req.params.id)
    
    ChangeStatus(y,"Kar liya")
    res.send({
        message:"Update OK DONE"
    })
})


app.listen(3001)
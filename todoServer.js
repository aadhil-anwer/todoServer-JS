
const express = require('express');
const bodyParser = require('body-parser');
const PORT=3000;
const cors=require("cors")
const app = express();
app.use(bodyParser.json());
app.use(cors());
let todoArray=[];
var id0=0
function createTodo(req, res){
  data=req.body;
  data.id= id0;
  id0++;
  todoArray.push(data);
  res.status(201).json({ id: data.id })
  console.log(todoArray)

}
function getTodo(req, res){
  res.status(200).json(todoArray);
}
function getTodobyID(req,res){
  var id=req.params.id;
  for(var i=0;i<todoArray.length;i++){
    if(todoArray[i].id==id){
      return res.status(200).json(todoArray[i]);
    }
  }

  res.status(404).json({ error: 'Todo not found' });
    


}
function deleteTodo(req, res){
  var id= req.params.id;
  for (let i = 0; i < todoArray.length; i++) {
    if(id==todoArray[i].id){
      todoArray.splice(i,1);
      return res.status(200).send("Deleted Succcesfully");
    }
    
    
  }
  res.status(204).send("no such task")
}
app.delete('/delete/:id', deleteTodo)
app.post('/todos', createTodo)
app.get('/todos', getTodo)
app.get('/todos/:id', getTodobyID)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

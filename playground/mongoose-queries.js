const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c6836da60464c20e4df317e';

User.findById(id).then((user)=>{
  if(!user){
    return console.log('User not found');
  }
  console.log('User', user);
}).catch((err)=> console.log(err));

// var id = '5c68b7b1832e2933a8aeb5a811';
//
// if(!ObjectID.isValid(id)){
//   console.log('Id not found');
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos ' , todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((err)=> console.log(err));

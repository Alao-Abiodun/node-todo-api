const {MongoClient,ObjectID} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
     if(err){
        return console.log('Unable to connect to the MongoDB Server');
     }
        console.log('connected to the MongoDB Server ');

        const db = client.db('TodoApp');

        // db.collection('Todos').findOneAndUpdate({
        //   _id:new ObjectID('5c67a9e32107d9fecd49ac54')
        // },{
        //    $set:{
        //      completed:false
        //    }
        // },{
        //   returnOriginal:false
        // }).then((result)=>{
        //   console.log(result);
        // });

        db.collection('Users').findOneAndUpdate({
          _id:new ObjectID('5c67a8ac6238902af40ab944')
        },{
          $set:{
            name:'Abiodun'
          },
          $inc:{
            age:1
          }
        },{
          returnOriginal:false
        }).then((docs)=>{
          console.log(docs);
        },(err)=>{
          console.log('Unable to update the data in the users',err);
        })

                // client.close();
});

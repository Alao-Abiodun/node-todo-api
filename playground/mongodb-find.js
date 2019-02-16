const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
     if(err){
        return console.log('Unable to connect to the MongoDB Server');
     }
        console.log('connected to the MongoDB Server ');

        const db = client.db('TodoApp');


         // db.collection('Todos').find().toArray().then((docs)=>{
         //      console.log('Todos');
         //      console.log(JSON.stringify(docs, undefined, 2));
         // },(err)=>{
         //    console.log('Unable to fetch the todo data',err);
         // });


         // db.collection('Todos').find().count().then((count)=>{
         //    console.log(`Todos count: ${count}`);
         // },(err)=>{
         //   console.log('Unable to find the count of the data',err);
         // });

          db.collection('Users').find({name:'Abiodun'}).toArray().then((docs)=>{
                  console.log(JSON.stringify(docs, undefined, 2));
          },(err)=>{
            console.log('Unable to find the query specified in the fine() method',err);
          });

        // client.close();
});

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
     if(err){
        return console.log('Unable to connect to the MongoDB Server');
     }
        console.log('connected to the MongoDB Server ');

        const db = client.db('TodoApp');

        // db.collection('Todos').insertOne({
        //   text:"Something to do",
        //   complete:false
        // },(err,result)=>{
        //   if(err){
        //       return console.log('Unable to insert todo',err);
        //   }
        //     console.log(JSON.stringify(result.ops, undefined, 2));
        // });

         db.collection('Users').insertOne({
           name:'Abiodun',
           age:22,
           location:'Orokun'
         },(err,docs)=>{
              if(err){
                  return console.log('Unable to insert user',err);
              }
                console.log(JSON.stringify(docs.ops, undefined, 2));
         });

        client.close();
});

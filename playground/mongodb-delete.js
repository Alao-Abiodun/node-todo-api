const {MongoClient,ObjectID} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
     if(err){
        return console.log('Unable to connect to the MongoDB Server');
     }
        console.log('connected to the MongoDB Server ');

        const db = client.db('TodoApp');

        //    deleteMany
        // db.collection('Todos').deleteMany({text:'Eat breakfast'}).then((docs)=>{
        //     console.log(docs);
        // },(err)=>{
        //   console.log('Unable to delete the todos',err);
        // });\

        // deleteOne
        // db.collection('Todos').deleteOne({text:'Eat breakfast'}).then((docs)=>{
        //   console.log(docs);
        // },(err)=>{
        //   console.log('Unable to delete',err);
        // });

        //findOneAndDelete
        // db.collection('Todos').findOneAndDelete({completed:false}).then((docs)=>{
        //   console.log(docs);
        // },(err)=>{
        //   console.log('Unable to delete',err);
        // });

        // db.collection('Users').deleteMany({name:'Abiodun'}).then((result)=>{
        //   console.log(JSON.stringify(result));
        // },(err)=>{
        //   console.log('Unable to deleter',err);
        // });

    db.collection('Users').deleteOne({
      _id:new ObjectID('5c67ac37e5c0b229b464214f')
    }).then((result)=>{
      console.log(result);
    },(err)=>{
      console.log('Uable to delete',errt);
    })
        // client.close();
});

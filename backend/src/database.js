const mongoose = require('mongoose');

//console.log(process.env.MONGODB_URI);

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI  
                                    :'mongodb://localhost/databasetest';



//const  URI = 'mongodb://localhost/mernstack';

mongoose.connect(URI,{
    //useNewUrlParse:true,
    //useCreateIndex:true

});

const connection = mongoose.connection;


connection.once('open',()=>{
    console.log('DB is connected');
});
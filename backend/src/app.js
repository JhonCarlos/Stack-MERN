const express = require('express');
const app = express();
const cors = require('cors');

//settings
app.set('port',process.env.PORT ||6000)


//middlewares
app.use(cors());
app.use(express.json());




//routes
app.use('/api/users',require('./routes/user'));
app.use('/api/notes',require('./routes/notes'));






module.exports = app;

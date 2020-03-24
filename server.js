const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static('public'));


//CONTROLLERS
const horrorController = require('./controllers/horror.js');
app.use('/horror', horrorController);

app.get('/', (req, res) => {
  res.send("Hello World");
});



mongoose.connect('mongodb://localhost:27017/meancrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...');
});

app.listen(3005, ()=>{
	console.log('listening, yo!');
});

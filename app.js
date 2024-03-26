require('dotenv').config();
const connectDB=require('./server/config/db')
const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT =5000|| process.env.PORT

//connect to DB
connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//templating engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');

app.use('/',require('./server/routes/main'));

app.listen(PORT,()=>{
    console.log("listening on port "+PORT);
});
const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connect Database 
connectDB(); 

//Middleware
app.use(express.json({extended:true}));

app.get('/',(req, res) =>{
    res.json({msg: 'welcome to the contacts_info API...'})
})

//Defines Routes
app.get('/api/users', require('./routes/users'));
app.get('/api/auth', require('./routes/auth'));
app.get('/api/contacts', require('./routes/contacts'));

const PORT =process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
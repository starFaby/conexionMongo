const mongoose = require('mongoose');
const URI ='mongodb://localhost/persona';
mongoose.connect('URI')
.then(db=>console.log('base de datos conectada'))
.catch(err0>console.error(err));
module.exports=mongoose;
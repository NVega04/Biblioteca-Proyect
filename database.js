const mongoose = require ('mongoose')

const MONGODB_URI = process.env.MONGODB_URI;

//Conexión con la BD de Mongo

mongoose.connect(MONGODB_URI, {
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log (err));
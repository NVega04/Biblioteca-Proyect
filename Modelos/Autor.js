const {Schema, model} = require ('mongoose');

const esquemaAutor = new Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    fecha_publicacion: {
        type: Date,
        required: true
    },
    premios: {
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    fecha_fallecimiento: {
        type: Date,
        required: false
    }
}, { 
    timestamps: true
})

module.exports = model('Autor', esquemaAutor);
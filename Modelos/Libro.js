const {Schema, model} = require ('mongoose');

const esquemaLibro = new Schema({
    isbn: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    fecha_edicion: {
        type: Date,
        required: true
    },
    numero_paginas: {
        type: Number,
        required: true
    },
    cantidad_ejemplares: {
        type: Number,
        required: true
    },
    ejemplares_disponibles: {
        type: Number,
        required: true
    },
    sinopsis: {
        type: String,
        required: true
    },
    presentacion_libro: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    }
}, { 
    timestamps: true
})

module.exports = model('Libro', esquemaLibro);
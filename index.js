require('dotenv').config(); //Configura las variables de entorno y que no queden credenciales en el código
const Libro = require('./Modelos/Libro')
const Autor = require('./Modelos/Autor')
const express = require('express')
const app = express();

app.use(express.json())
app.use(express.static('./public'))
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

require('./database');


app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})

//Creación de metodos para libros y gestión de libros

app.post('/libros', async (req, res) => {
    const libro = await Libro.create(req.body);
    res.status(201).json(libro)
})

app.get('/libros/', async (req, res) => {
    const libros = await Libro.find({});
    res.json(libros);
})

app.delete('/libros/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Libro.findByIdAndDelete(id)
        res.status(204).send();
    } catch (error) {
        res.status(500).send();
    }
})

app.get('/libros/buscar', async (req, res) => {
    const {isbn} = req.query;
    const libros = await Libro.find({isbn: isbn})
    res.status(200).json(libros);
})

// Creación de requerimientos para autores

app.post('/autores', async (req, res) =>{
    const autor = await Autor.create(req.body);
    res.status(201).json(autor)
})

app.get('/autores', async (req, res) => {
    const autores = await Autor.find({});
    res.json(autores);
})

app.delete('/autores/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Autor.findByIdAndDelete(id)
        res.status(204).send();
    } catch (error) {
        res.status(500).send();
    }
})

app.get('/autores/buscar', async (req, res) => { //falta este
    const {nombres} = req.query;
    const autores = await Autor.find({nombres: nombres})
    res.status(200).json(autores);
})
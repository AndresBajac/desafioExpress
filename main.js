const express = require('express')
const Container = require('./contenedor')

const app = express()
const file = new Container('./productos.json')
file.init()

const server = app.listen(process.env.PORT || 8080 , ()=>{
    try{
        console.log('run')
    }
    catch(err){
        console.log(err)
    }
})
app.get('/productos',(req, res) =>{
    try{
        const elements = file.getAll()
        res.send(` Los elementos del archivo son ${JSON.stringify(elements)}`)
    }
    catch(err){
        res.send(`Ocurrio un error al obtener los elementos: ${err}`)
    }
})
app.get('/productoRandom',(req, res) =>{
    const id = Math.floor(Math.random() * 4) + 1
    try{
        const elementoRandom = file.getById(id)
        res.send(`El elemento con id ${id}, es ${JSON.stringify(elementoRandom)}`)
    }
    catch(err){
        res.send(`Ocurrio un error al intentar obtener el elemento por id ${err}`)
    }
})
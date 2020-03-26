const express = require('express')
const Route = express.Router()
const {
getAnggota,
createAnggota,
editAnggota,
deleteAnggota
} = require('../controller/anggota')

Route
    .get('/', getAnggota)
    .post('/', createAnggota)
    .put('/:id', editAnggota)
    .delete('/:id', deleteAnggota)

module.exports = Route
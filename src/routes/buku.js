const express = require('express')
const Route = express.Router()
const {
getBuku,
createBuku,
editBuku,
deleteBuku
} = require('../controller/buku')

Route
    .get('/', getBuku)
    .post('/', createBuku)
    .put('/:id', editBuku)
    .delete('/:id', deleteBuku)

module.exports = Route
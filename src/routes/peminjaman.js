const express = require('express')
const Route = express.Router()
const {
    getPeminjaman,
    createPeminjaman,
    editPeminjaman,
    deletePeminjaman
} = require('../controller/peminjaman')

Route
    .get('/', getPeminjaman)
    .post('/', createPeminjaman)
    .put('/:id_peminjaman', editPeminjaman)
    .delete('/:id_peminjaman', deletePeminjaman)
module.exports = Route
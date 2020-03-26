const express = require('express')
const Route = express.Router()

const anggota = require('./routes/anggota')
const buku = require('./routes/buku')
const peminjaman = require('./routes/peminjaman')

Route
    .use('/anggota', anggota)
    .use('/buku', buku)
    .use('/peminjaman', peminjaman)

module.exports = Route
const {
    getPeminjaman,
    postPeminjaman,
    putPeminjaman,
    deletePeminjaman
} = require('../models/peminjaman')
const helper = require('../helper')
const rand = require('random-id')

module.exports = {
    getPeminjaman: async (req, res) => {
        const result = await getPeminjaman()
        const message = 'Data peminjaman berhasil diget'
        return helper.response(res, 200, message, result)
    },
    createPeminjaman: async (req, res) => {
        try {
            const invoice = rand(6, '0')
            const setData = {
                invoice: invoice,
                id_anggota: req.body.id_anggota,
                id_buku: req.body.id_buku,
                harga_sewa: req.body.harga_sewa
            }
            const result = await postPeminjaman(setData)
            const message = 'Data peminjaman berhasil ditambah'
            return helper.response(res, 200, message, result)
        } catch (error) {
            const message = 'Data peminjaman gagal ditambah'
            return helper.response(res, 400, message, error)
        }
    },
    editPeminjaman: async (req, res) => {
        try {
            const setData = {
                id_anggota: req.body.id_anggota,
                id_buku: req.body.id_buku,
                harga_sewa: req.body.harga_sewa
            }
            const id_peminjaman = req.params.id_peminjaman
            const result = await putPeminjaman(setData, id_peminjaman)
            const message = 'Data peminjaman berhasil diedit'
            return helper.response(res, 200, message, result)
        } catch (error) {
            const message = 'Data peminjaman gagal diedit'
            return helper.response(res, 400, message, error)
        }
    },
    deletePeminjaman: async (req, res) => {
        try {
            const id_peminjaman = req.params.id_peminjaman
            const result = await deletePeminjaman(id_peminjaman)
            const message = 'Data peminjaman berhasil dihapus'
            return helper.response(res, 200, message, result)
        } catch (error) {
            const message = 'Data peminjaman gagal dihapus'
            return helper.response(res, 400, message, error)
        }
    }

}
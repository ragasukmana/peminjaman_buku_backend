const {
    getBuku,
    postBuku,
    putBuku,
    deleteBuku
} = require('../models/buku')
const helper = require('../helper')

module.exports = {
    getBuku: async (req, res) => {
        const result = await getBuku()
        const message = 'Data buku berhasil diget'
        return helper.response(res, 200, message, result)
    },
    createBuku: async (req, res) => {
        try {
            const setData = {
                judul: req.body.judul,
                pengarang: req.body.pengarang,
                harga: req.body.harga
            }
            const result = await postBuku(setData)
            const message = 'Data buku berhasil ditambah'
            return helper.response(res, 200, message, result)
        } catch (error) {
            const message = 'Data buku gagal ditambah'
            return helper.response(res, 400, message, error)
        }
    },
    editBuku: async (req, res) => {
        try {
            const setData = {
                judul: req.body.judul,
                pengarang: req.body.pengarang,
                harga: req.body.harga
            }
            const id = req.params.id
            const result = await putBuku(setData, id)
            const message = 'Data buku berhasil diedit'
            return helper.response(res, 200, message, result)
        } catch (error) {
            const message = 'Data buku gagal diedit'
            return helper.response(res, 400, message, error)
        }
    },
    deleteBuku: async (req, res) => {
        try {
            const id = req.params.id
            const result = await deleteBuku(id)
            const message = 'Data buku berhasil dihapus'
            return helper.response(res, 200, message, result)
        } catch (error) {
            const message = 'Data buku gagal dihapus'
            return helper.response(res, 400, message, error)
        }
    }
}
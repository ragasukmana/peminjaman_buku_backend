const {
getAnggota,
postAnggota,
putAnggota,
deleteAnggota

} = require ('../models/anggota')
const helper = require('../helper')

module.exports = {
    getAnggota: async(req, res) => {
        const result = await getAnggota()
        const message = 'Data anggota berhasil diget'
        return helper.response(res, 200, message, result)
    },
    createAnggota: async(req, res) => {
        try {
            const setData = {
                nama_anggota : req.body.nama_anggota,
                kota: req.body.kota
            }
            const result = await postAnggota(setData)
            const message = 'Data anggota berhasil ditambah'
            return helper.response(res, 200, message, result)
        } catch (error) {
            const message = 'Data anggota gagal ditambah'
            return helper.response(res, 400, message, error)
        }
    },
    editAnggota: async(req, res) => {
        try {
            const setData = {
                nama_anggota: req.body.nama_anggota,
                kota: req.body.kota
            }
            const id = req.params.id
            const result = await putAnggota(setData, id)
            const message = 'Data anggota berhasil diedit'
            return helper.response(res, 200, message, result)
        } catch (error) {
            const message = 'Data anggota gagal diedit'
            return helper.response(res, 400, message, error)
        }
    },
    deleteAnggota: async(req,res) => {
        try {
            const id = req.params.id
            const result = await deleteAnggota(id)
            const message = 'Data anggota berhasil dihapus'
            return helper.response(res, 200, message, result)
        } catch (error) {
            const message = 'Data anggota gagal dihapus'
            return helper.response(res, 400, message, error)            
        }
    }
}
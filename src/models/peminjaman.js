const connection = require('../config/mysql')
const helper = require('../helper')

module.exports = {
    getPeminjaman: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT anggota.nama_anggota, peminjaman.*, buku.judul FROM peminjaman INNER JOIN anggota on anggota.id = peminjaman.id_anggota INNER JOIN buku on buku.id = peminjaman.id_buku', (error, result) => {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postPeminjaman: (setData) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO peminjaman SET?', setData, (error, result) => {
                if (!error) {
                    const newResult = {
                        ...setData
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    putPeminjaman: (setData, id_peminjaman) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE peminjaman SET? WHERE id_peminjaman=?', [setData, id_peminjaman], (error, result) => {
                if (!error) {
                    const newResult = {
                        ...setData
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    deletePeminjaman: (id_peminjaman) => {
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM peminjaman WHERE id_peminjaman=?', id_peminjaman, (error, result)=>{
                if (!error) {
                    const newResult = {
                        id_peminjaman
                    }
                    resolve(newResult)
                }else{
                    reject(new Error(error))
                }
            })
        })
    }
}
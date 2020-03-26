const connection = require('../config/mysql')

module.exports = {
    getBuku: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM buku', (error, result) => {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postBuku: (setData) => {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO buku SET?`, setData, (error, result) => {
                if (!error) {
                    const newResult = {
                        id: result.insertId,
                        ...setData
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    putBuku: (setData, id) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE buku SET? WHERE id=?', [setData, id], (error, result) => {
                if (!error) {
                    const newResult = {
                        id: id,
                        ...setData
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    deleteBuku:(id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM buku WHERE id=?', id, (error, result) => {
                if (!error) {
                    const newResult = {
                        id:id,
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    }
}
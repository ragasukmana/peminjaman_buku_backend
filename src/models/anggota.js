const connection = require('../config/mysql')

module.exports = {
    getAnggota: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM anggota`, (error, result) => {
                if(!error) {
                    resolve(result)
                }else{
                    reject(new Error(error))
                }
            })
        })
    },
    postAnggota:(setData) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO anggota SET ?', setData, (error, result) => {
                if(!error){
                    const newResult = {
                        id: result.insertId,
                        ...setData
                    }
                    resolve(newResult)
                }else{
                    reject(new Error(error))
                }
            })
        })
    },
    putAnggota:(setData, id) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE anggota SET ? WHERE id=?', [setData, id], (error, result) =>{
                if (!error) {
                    const newResult = {
                        id:id,
                        ...setData
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    deleteAnggota:(id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM anggota WHERE id=?', id, (error, result)=>{
                if (!error) {
                    const newResult = {
                        id:id
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    }
}
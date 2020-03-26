const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'project_raga'
})

connection.connect((error) => {
    if (error) throw error
    console.log("You are connected....")
})

module.exports = connection
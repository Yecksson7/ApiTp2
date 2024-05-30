import mysql from 'mysql2/promise'

const conex = await mysql.createConnection({
    host:'localhost',
    user:'root',
    port:"3306",
    database:'test',
    password:"",

})

conex.connect((err)=>{
if(err)throw err;
console.log("dbConectada")

})

export default conexion
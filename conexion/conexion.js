
import { Sequelize } from "sequelize";


const conexion = new Sequelize("test","root","",{

    host: "localhost",
    dialect:"mysql",
    port: 3306,

})

try{
    await conexion.authenticate()
    console.log("Conexion establecida")
}catch(error){

    console.log("Error conectando a la BD", error)
}



export default conexion

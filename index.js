import express from "express"
import enrutador from "./rutas/enrutador.js"
import conexion from "./conexion/conexion.js"
import { PORT } from "./config/config.js"

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(enrutador)

await conexion.sync({force:true})


app.listen(PORT,()=>{
    console.log('server ok http://localhost:8080')
})



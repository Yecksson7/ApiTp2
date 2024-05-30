import express from "express"
import enrutador from "./rutas/enrutador.js"
import conexion from "./conexion/conexion.js"

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(enrutador)




app.listen(8080,()=>{
    console.log('server ok http://localhost:8080')
})



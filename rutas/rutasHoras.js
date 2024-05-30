import{Router} from "express"


const rutasHoras=Router()

rutasHoras.get("/hora",(req, res)=>{
    res.send("hello desde horas")
})

export default rutasHoras
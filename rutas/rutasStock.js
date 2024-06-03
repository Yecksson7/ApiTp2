import{Router} from "express"


const rutasStock=Router()

rutasStock.get("/",(req, res)=>{
    res.send("hello desde stock")
})



export default rutasStock
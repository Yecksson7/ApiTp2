
import {Router} from "express";
import rutasItems from "./rutasItems.js";
import rutasStock from "./rutasStock.js";



const enrutador = Router()

enrutador.use("/Items",rutasItems)
enrutador.use("/stock",rutasStock)

export default enrutador
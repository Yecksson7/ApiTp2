import{Router} from "express"

import ItemsControllers from "../Controllers/ItemsControllers.js"

const itemsControllers= new ItemsControllers()
const rutasItems=Router()

rutasItems.get("/",itemsControllers.mostrarItems)
rutasItems.post("/",itemsControllers.crearProducto)

export default rutasItems
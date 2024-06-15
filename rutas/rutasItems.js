import{Router} from "express"

import ItemsControllers from "../Controllers/ItemsControllers.js"

const itemsControllers= new ItemsControllers()
const rutasItems=Router()

rutasItems.get("/",itemsControllers.mostrarItems)
rutasItems.post("/",itemsControllers.crearItem)
rutasItems.get("/:id", itemsControllers.mostrarItemPorId)
rutasItems.delete("/:id",itemsControllers.deleteItem)
rutasItems.put("/:id", itemsControllers.updatePrecioItem)

export default rutasItems
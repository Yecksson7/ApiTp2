import{Router} from "express"
import StockItemsControllers from "../Controllers/StockItemsControllers.js"



const rutasStock=Router()
const stockItemsControllers= new StockItemsControllers()
rutasStock.get("/",stockItemsControllers.mostrarStock)
rutasStock.get("/:id",stockItemsControllers.mostrarStockXItem)
rutasStock.post("/",stockItemsControllers.crearStockItem)
rutasStock.put("/:id",stockItemsControllers.updateStockItem)
rutasStock.delete("/:id",stockItemsControllers.deleteStockItem)




export default rutasStock
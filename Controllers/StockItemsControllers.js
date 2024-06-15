import { StockItems, Items } from "../Models/index.js"

class StockItemsControllers{

    constructor(){}


    mostrarStockXItem=async(req, res)=>{

      const {id} = req.params
      try{

       const data = await StockItems.findOne({
        where:{
          ItemId: id 
        },
        attributes: ["ItemId", "CantidadItem"]
       })
       res.status(200).send({sucess:true, message:data})
      }catch(error){
       res.status(500).send({sucess:false, message:error.mesage})
      } 

   }



    
 
     crearStockItem=async(req, res)=>{
 
         try{
 
             const{idItem,cantidadItem}=req.body
             const data= await StockItems.create({
                ItemId: idItem,
                cantidadItem
                
             })
             res.status(200).send({sucess:true, message:data})
 
         }catch(error){
 
             res.status(500).send({sucess:false, message:error.mesage})
         }
     }
     
     
       deleteStockItem = async (req, res) => {
         try {
           const { idItem } = req.params;
           const data = await StockItems.destroy({
             where: {
               idItem,
             },
           });
           res.status(200).send({ success: true, message: data });
         } catch (error) {
           res.status(500).send({ success: false, message: error.message });
         }
       };
 
 
       updateStockItem = async (req, res) => {
         try {
           const { itemId } = req.params;
           const {nuevoStock} = req.body;
           const data = await StockItems.update(
             {
              nuevoStock,
               
             },
             {
               where: {
                 ItemId:itemId
               },
             }
           );
           res.status(200).send({ success: true, message: data });
         } catch (error) {
           res.status(500).send({ success: false, message: error.message });
         }
       };


}
export default StockItemsControllers 
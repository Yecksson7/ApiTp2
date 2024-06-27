import { StockItems, Items } from "../Models/index.js"

class StockItemsControllers{

    constructor(){}




    mostrarStock=async(req, res)=>{

      try{

       const data = await StockItems.findAll()
       res.status(200).send({sucess:true, message:data})
      }catch(error){
       res.status(500).send({sucess:false, message:error.mesage})
      } 

   }


    mostrarStockXItem=async(req, res)=>{

      const {id} = req.params
      try{

       const data = await StockItems.findAll({ //cambie el find one
        where:{
          ItemId: id 
        },
        attributes: ["ItemId", "CantidadItem","Deposito"]
       })
       res.status(200).send({sucess:true, message:data})
      }catch(error){
       res.status(500).send({sucess:false, message:error.mesage})
      } 

   }



    
 
     crearStockItem=async(req, res)=>{
 
      
         try{
          console.log(req.body)
             const{idItem,CantidadItem,Deposito}=req.body
             const data= await StockItems.create({
                ItemId: idItem,
                CantidadItem,
                Deposito
                
             })
             res.status(200).send({sucess:true, message:data})
 
         }catch(error){
 
          console.log(req.body)
             res.status(500).send({sucess:false, message:error.message})
         }
     }
     
     
       deleteStockItem = async (req, res) => {
         try {
           const { id } = req.params;
           const data = await StockItems.destroy({
             where: {
               ItemId:id,
             },
           });
           res.status(200).send({ success: true, message: data });
         } catch (error) {
           res.status(500).send({ success: false, message: error.message });
         }
       };
 
 
       updateStockItem = async (req, res) => {
         try {
           const { id } = req.params;
           const {CantidadItem} = req.body;
           const data = await StockItems.update(
             {
              CantidadItem,
               
             },
             {
               where: {
                 ItemId: id
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
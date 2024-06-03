import Items from "../Models/Items.js";

class ItemsControllers{

    constructor(){}

    mostrarItems=async(req, res)=>{

       try{

        const data = await Items.findAll()
        res.status(200).send({sucess:true, message:data})
       }catch(error){
        res.status(500).send({sucess:false, message:error.mesage})
       } 

    }

    crearProducto=async(req, res)=>{

        try{

            const{descripcion, precioUnitario}=req.body
            const data= await Items.create({
                descripcion,
                precioUnitario
            })
            res.status(200).send({sucess:true, message:data})

        }catch(error){

            res.status(500).send({sucess:false, message:error.mesage})
        }
    }

}



export default ItemsControllers
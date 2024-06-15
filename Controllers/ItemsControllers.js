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

    crearItem=async(req, res)=>{

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
    
    mostrarItemPorId = async (req, res) => {
        try {
          const { id } = req.params;
          const data = await Items.findOne({
            where: {
              id,
            },
            attributes: ["id", "descripcion", "precioUnitario"]
            
          });
          res.status(200).send({ success: true, message: data });
        } catch (error) {
          res.status(500).send({ success: false, message: error.message });
        }
      };

      deleteItem = async (req, res) => {
        try {
          const { id } = req.params;
          const data = await Items.destroy({
            where: {
              id,
            },
          });
          res.status(200).send({ success: true, message: data });
        } catch (error) {
          res.status(500).send({ success: false, message: error.message });
        }
      };


      updatePrecioItem = async (req, res) => {
        try {
          const { id } = req.params;
          const { precioUnitario} = req.body;
          const data = await Items.update(
            {
                precioUnitario,
              
            },
            {
              where: {
                id,
              },
            }
          );
          res.status(200).send({ success: true, message: data });
        } catch (error) {
          res.status(500).send({ success: false, message: error.message });
        }
      };


}



export default ItemsControllers
import { DataTypes, Model } from "sequelize";
import conexion from "../conexion/conexion.js";

class Items extends Model{}

Items.init({

    descripcion:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    precioUnitario:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    }
},
{
    sequelize:conexion,
    modelName:"Items"
}




)



export default Items
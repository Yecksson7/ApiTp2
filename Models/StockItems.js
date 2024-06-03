import { DataTypes,Model} from "sequelize";
import conexion from "../conexion/conexion.js";

class StockItems extends Model {}


StockItems.init({

    IdItem:{
        type:DataTypes.INTEGER,
        allowNull:false,

    },
    CantidadItem:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},
{
    sequelize:conexion,
    modelName:"StockItems"
})
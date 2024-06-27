import { DataTypes,Model} from "sequelize";
import conexion from "../conexion/conexion.js";

class StockItems extends Model {}


StockItems.init({

    CantidadItem:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Deposito:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},
{
    sequelize:conexion,
    modelName:"StockItems"
})

export default StockItems

import Items from "./Items.js";
import StockItems from "./StockItems.js";

//Items.hasMany(StockItems)
//StockItems.belongsTo(Items)




Items.hasOne(StockItems)
StockItems.belongsTo(Items)


//StockItems.hasMany(Items)
//Items.belongsTo(StockItems)













export {Items, StockItems}
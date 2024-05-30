import { Router } from "express";
import rutasHoras from "./rutasHoras.js";
import rutasReporte from "./rutasReporte.js";

const enrutador = Router()

enrutador.use("/horas",rutasHoras)
enrutador.use("/reporte",rutasReporte)

export default enrutador()
const express = require("express");
const { GetRecords, PostRecord, GetState, PostKishanMorcha, PostObcMocrcha } = require("../controler/controler");
// const kishanmorchamodel = require("../model/kishanmorchamodel");




const route = express.Router();

route.get("/get", GetRecords);
route.get("/getstate", GetState);
route.post("/add", PostRecord);
route.post("/add/kishan", PostKishanMorcha);
route.post("/add/obc", PostObcMocrcha);



module.exports = route;
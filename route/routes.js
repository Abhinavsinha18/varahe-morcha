const express = require("express");
const { GetRecords, PostRecord, GetState } = require("../controler/controler");




const route = express.Router();

route.get("/get", GetRecords);
route.get("/getstate", GetState);
route.post("/add", PostRecord);



module.exports = route;
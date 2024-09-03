// const { default: app } = require("../config/firebase");
const connect = require("../database/db");
const ASmorchaModel = require("../model/asmorchamodel");
const Model = require("../model/model");
const Statemodel = require("../model/statemodel");


const GetRecords = async (req, res) => {
  try {
    await connect;
    // console.log("eweew");
    const records = await Model.find();
    // console.log(records);
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const GetState = async (req, res) => {
  try {
    await connect;
    // console.log("eweew");
    const records = await Statemodel.find();
    // console.log(records);
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Post Record

const PostRecord = async (req, res) => {
  try {
    const data = new ASmorchaModel(req.body);
    await data.save();
    res.status(201).json({ message: "Data Created", Status: true, data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = {
  GetRecords,
  PostRecord,
  GetState
};
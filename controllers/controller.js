const db = require("../models");
const user = db.user;

const adduser = async(req, res) => {
    let info = {
        username : req.body.username,
        password : req.body.password
    };
    const user = await user.create(info).catch((err) => console.log(err));
    res.status(200).send(user);
};

const getAllusers = async(req, res) => {
    let users = await user.findAll({}).catch((err) => console.log(err));
    res.status(200).send(users);
};

const getuser = async(req, res) => {
    let id = req.params.id;
    let user = await user.findOne({where : { id: id }}).catch((err) => console.log(err));
    res.status(200).send(user);
};

const updateuser = async(req, res) => {
    let id = req.params.id;
    const user = await user.update(req.body, {where : {id : id}}).catch((err) => console.log(err));
    res.status(200).send(user);
};

const deleteuser = async(req, res) => {
    let id = req.params.id;
    await user.destroy({where : {id: id}}).catch((err) => console.log(err));
    res.status(200).send("deleted");
};

module.exports = {
    adduser,
    getAllusers,
    getuser,
    updateuser,
    deleteuser
};
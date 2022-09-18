import {ModelNotas , ModelFechas} from '../models/models.js';

export const getAllNotas = async (req, res) => {
    try{
        const modelos = await ModelNotas.findAll();
        res.json(modelos);
    }catch(err){
        res.json({message: err.message});
    }
}

export const getNotas = async (req, res) => {
    try{
        const modelos = await ModelNotas.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(modelos);
    }catch(err){
        res.json({message: err.message});
    }
}

export const updateNotas = async (req, res) => {
    try{
        await ModelNotas.update(req.body , {
            where: {
                id: req.params.id
            }
        });
        res.json({"message":"actualizado con exitos"});
    }catch(err){
        res.json({message: err.message});
    }
}

export const createNotas = async (req, res) => {
    try{
        await ModelNotas.create(req.body);
        res.json({"message":"fue creado con exito" });
    }catch(err){
        res.json({message: err.message});
    }
}

export const deletNotas = async (req, res) => {
    try{
        await ModelNotas.destroy({
            where: {id: req.params.id}
        });
        res.json({"message":"fue eleminado con exito"});
    }catch(err){
        res.json({message: err.message});
    }
}

export const getAllFechas = async (req, res) => {
    try{
        const modelos = await ModelFechas.findAll();
        res.json(modelos);
    }catch(err){
        res.json({message: err.message});
    }
}

export const getFechas = async (req, res) => {
    try{
        const modelos = await ModelFechas.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(modelos);
    }catch(err){
        res.json({message: err.message});
    }
}

export const updateFechas = async (req, res) => {
    try{
        await ModelFechas.update(req.body , {
            where: {
                id: req.params.id
            }
        });
        res.json({"message":"actualizado con exitos"});
    }catch(err){
        res.json({message: err.message});
    }
}

export const createFechas = async (req, res) => {
    try{
        await ModelFechas.create(req.body);
        res.json({"message":"fue creado con exito" });
    }catch(err){
        res.json({message: err.message});
    }
}

export const deletFechas = async (req, res) => {
    try{
        await ModelFechas.destroy({
            where: {id: req.params.id}
        });
        res.json({"message":"fue eleminado con exito"});
    }catch(err){
        res.json({message: err.message});
    }
}
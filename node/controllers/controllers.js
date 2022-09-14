import Model from '../models/models.js';

export const getAll = async (req, res) => {
    try{
        const modelos = await Model.findAll();
        res.json(modelos);
    }catch(err){
        res.json({message: err.message});
    }
}

export const get = async (req, res) => {
    try{
        const modelos = await Model.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(modelos);
    }catch(err){
        res.json({message: err.message});
    }
}

export const update = async (req, res) => {
    try{
        await Model.update(req.body , {
            where: {
                id: req.params.id
            }
        });
        res.json({"message":"actualizado con exitos"});
    }catch(err){
        res.json({message: err.message});
    }
}

export const create = async (req, res) => {
    try{
        await Model.create(req.body);
        res.json({"message":"fue creado con exito" });
    }catch(err){
        res.json({message: err.message});
    }
}

export const delet = async (req, res) => {
    try{
        await Model.destroy({
            where: {id: req.params.id}
        });
        res.json({"message":"fue eleminado con exito"});
    }catch(err){
        res.json({message: err.message});
    }
}
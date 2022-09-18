import db from '../db/db.js'
import DataTypes from 'sequelize'

export const ModelNotas = db.define('Notas',{
    Name: {type: DataTypes.STRING },
    Father: {type: DataTypes.STRING },
    Text: {type: DataTypes.STRING },
})

export const ModelFechas = db.define('Fechas',{
    Id_dias: {type: DataTypes.NUMBER },
    Id_mes: {type: DataTypes.NUMBER },
    Nombre: {type: DataTypes.STRING },
})
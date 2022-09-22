import db from '../db/db.js'
import DataTypes from 'sequelize'

export const ModelNotas = db.define('Notas',{
    Name: {type: DataTypes.STRING },
    Father: {type: DataTypes.STRING },
    Text: {type: DataTypes.STRING },
    Id_user: {type: DataTypes.INTEGER}
})

export const ModelFechas = db.define('Fechas',{
    Id_dias: {type: DataTypes.INTEGER },
    Id_mes: {type: DataTypes.INTEGER },
    Nombre: {type: DataTypes.STRING },
    Id_user: {type: DataTypes.INTEGER}
})
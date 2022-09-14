import db from '../db/db.js'
import DataTypes from 'sequelize'

const Model = db.define('Notas',{
    Name: {type: DataTypes.STRING },
    Father: {type: DataTypes.STRING },
    Text: {type: DataTypes.STRING },
})

export default Model
import db from '../db/connection'
import { DataTypes } from 'sequelize'

const Formmodel = db.define('formulario',{
    rutaform:{
        type:DataTypes.STRING
    },
    catpreguntas:{
        type:DataTypes.INTEGER
    },
    rutaformresult:{
        type:DataTypes.STRING
    },
    cantparticipantes:{
        type:DataTypes.STRING
    },
    cantaprobados:{
        type:DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
})
export default Formmodel
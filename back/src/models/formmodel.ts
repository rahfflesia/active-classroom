import db from '../db/connection'
import { DataTypes } from 'sequelize'

const Formmodel = db.define('formulario',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    rutaform:{
        type:DataTypes.STRING
    },
   
    rutaformresult:{
        type:DataTypes.STRING
    },
    cantparticipantes:{
        type:DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
})
export default Formmodel
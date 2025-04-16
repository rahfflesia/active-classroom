import Formmodel from "../models/formmodel";
import Salamodel from "../models/salamodel";
import { User } from "./User";
import fs from 'fs'

export class Alumno extends User{
    
    async entrarasala(salaid:string){
        //busca la sala con el id que le das
        const formid = await Salamodel.findOne({
            attributes:['idformulario'],
            where:{
                id:salaid
            }
        })
        
        const idfomrilario = formid?.dataValues.idformulario
        console.log(idfomrilario)
        //busca la ruta del formulario
        const formularioruta = await Formmodel.findOne({
            attributes:['rutaform'],
            where:{
                id:idfomrilario
            }
        })
        
        const rutaformulario = formularioruta?.dataValues.rutaform
        console.log(rutaformulario)
        
        //recuperamos el contenido del json

        const rawform = fs.readFileSync(rutaformulario, 'utf-8')
        const jsonform = JSON.parse(rawform)

        console.log (jsonform)
        return jsonform
    }
/*
    enviarrespuestas(){

    }

    obtenerresultados(){
        
    }*/
}
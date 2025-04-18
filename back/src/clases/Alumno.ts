import Formmodel from "../models/formmodel";
import Participacionmodel from "../models/participacionmodel";
import Salamodel from "../models/salamodel";
import { User } from "./User";
import * as fs from 'fs'
import * as path from 'path'

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

    async enviarrespuestas(resultados: any, iduser:number, idsala:number, calificacion:number){
        const formsDir = path.resolve(__dirname, '..','..', 'forms', 'resultados') //sube dos niveles en los directorios
        const fileName = `resultado_formulario_${iduser}_${idsala}.json`
        const filePath = path.join(formsDir, fileName)
        try{
            if(!fs.existsSync(formsDir)){
                fs.mkdirSync(formsDir, {recursive:true})
            }
            const jsonString = JSON.stringify(resultados, null, 2)
            fs.writeFileSync(filePath, jsonString, 'utf-8')
            const participacion = await Participacionmodel.create({
            iduser:iduser,
            idsala:idsala,
            calificacion:calificacion,
            rutaresultados:filePath.toString()
            })
            return "añadida participacion del usuario: " + participacion.dataValues.id
        }catch(error){
            console.error("No se pudo guardar el formulario debido al siguiente error: ", error)
            return ("Error al crear el formulario")
        }
        
    }

/*    obtenerresultados(){
        
    }*/
}
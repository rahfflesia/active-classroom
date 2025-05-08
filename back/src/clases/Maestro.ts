import * as fs from 'fs'
import * as path from 'path'
import { User } from "./User";
import Formmodel from '../models/formmodel';
import Salamodel from '../models/salamodel';
import Salavistamodel from '../models/salavistamodel';

export class Maestro extends User{
    public id: number;

    constructor(id:number){
        super();
        this.id = id
    }
    async crearsala(salaid:number, idcreador:number, formid:number){
        try{
            await Salamodel.create({
                id:salaid,
                idcreador:idcreador,
                idformulario:formid,
                fechacreacion:`${new Date().getFullYear()}-${('0'+(new Date().getMonth()+1)).slice(-2)}-${new Date().getDate()}`,
                fechacierre:"",
                rankingruta:"",
                activo:'A'
            })
            
            return "Usuario Registrado"
        }catch(error){
            console.error(error)
            return "No se pudo añadir el usuario"
        }
    }

    async crearformulario(body:any){
        const formsDir = path.resolve(__dirname, '..','..', 'forms') //sube dos niveles en los directorios
        const fileName = `formulario_${this.id}_${Math.floor(Math.random() * 1000 + 1)}.json`
        const filePath = path.join(formsDir, fileName)
        
        
        try{
            if(!fs.existsSync(formsDir)){
                fs.mkdirSync(formsDir, {recursive:true})
            }
            const jsonString = JSON.stringify(body, null, 2)
            fs.writeFileSync(filePath, jsonString, 'utf-8')
            const formulario = await Formmodel.create({
                titulo: body.dataValues.tituloform,
                rutaform: filePath.toString(),
                rutaformresult: "",
                cantparticipantes: 0
            })
            console.log(formulario.dataValues.id)
            return (formulario.dataValues.id)
        }catch(error){
            console.error("No se pudo guardar el formulario debido al siguiente error: ", error)
            return ("Error al crear el formulario")
        }
        
    } 

    
 
    async obtenerlistasalas(){
        try {
            const participacion = await Salavistamodel.findOne({
                where:{
                    'Id de creador':this.id
                }
            })
    
            return participacion
            
        } catch (error) {
            console.error(error)
            return "No se pudieron obtener los datos"
        }
    }
    /*obtenerresultados(){
        
    }*/
}
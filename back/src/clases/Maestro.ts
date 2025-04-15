import * as fs from 'fs'
import * as path from 'path'
import { User } from "./User";

export class Maestro extends User{
    public id: number;

    constructor(id:number){
        super();
        this.id = id
    }
    crearsala(){

    }

    crearformulario(body:any){
        const formsDir = path.resolve(__dirname, '..','..', 'forms') //sube dos niveles en los directorios
        const fileName = `formulario_${this.id}_${Math.floor(Math.random() * 1000 + 1)}.json`
        const filePath = path.join(formsDir, fileName)
        
        if(!fs.existsSync(formsDir)){
            fs.mkdirSync(formsDir, {recursive:true})
        }
        const jsonString = JSON.stringify(body, null, 2)
        fs.writeFileSync(filePath, jsonString, 'utf-8')
    }

    obtenerresultados(){
        
    }
}
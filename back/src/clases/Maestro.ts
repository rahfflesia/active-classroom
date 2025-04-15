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
        const filePath =  path.join(__dirname, 'formulario' + this.id.toString() + (Math.floor(Math.random() * (10000 - 1 + 1)) + 1).toString() + '.json')
        const newData = body
        const jsonString = JSON.stringify(newData, null, 2)
        fs.writeFileSync(filePath)
    }

    obtenerresultados(){
        
    }
}
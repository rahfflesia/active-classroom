import * as fs from 'fs'


export class Formulario{
    obtenerrespuestas(rutasresultados:any){
        console.log("Esto recibe la funcion obtenerrespuestas", rutasresultados)
        let resupuestas: number[][] = []  //matriz donde se guardaran las respuestas. cada fila corresponde a un alumno y cada columna a una pregunta, el numero indica
        let i = 0                         //la repsuesta que eligió
        for(const element of rutasresultados){
            if (!resupuestas[i]) { 
                resupuestas[i] = [];
              }
            const rawresultado = fs.readFileSync(element, 'utf-8')
            const jsonresultado = JSON.parse(rawresultado)
            console.log("Esto se obtiene de las rutas", jsonresultado)
            let j = 0
            for(const pregunta of jsonresultado.questions){ //Accede al parametro question que hay en el json
                
                resupuestas[i][j] = pregunta.electionindex //accede al parametro electionindex de cada question
                j++ 
            }
       
            i++
        }
        return resupuestas
    }

    obtenertiempos(rutasresultados:any){
        console.log("Esto recibe la funcion obtenerrespuestas", rutasresultados)
        let tiempos: number[][] = []  //matriz donde se guardaran los tiempos. cada fila corresponde a un alumno y cada columna a una pregunta, el numero indica
        let i = 0                     //elt tiempo que eligio
        for(const element of rutasresultados){
            if (!tiempos[i]) { 
                tiempos[i] = [];
              }
            const rawresultado = fs.readFileSync(element, 'utf-8')
            const jsonresultado = JSON.parse(rawresultado)
            console.log("Esto se obtiene de las rutas", jsonresultado)
            let j = 0
            for(const pregunta of jsonresultado.questions){ //Accede al parametro question que hay en el json
                
                tiempos[i][j] = pregunta.tiempo //accede al parametro tiempo de cada question
                j++ 
            }
       
            i++
        }
        return tiempos
    }
    crearresultados(resultados:any, respuestas:number[][], tiempos:number[][]){
        let i = 0
        for (const usuario of resultados){
            let j = 0
            for(let j = 0; j < respuestas[i].length; j++){
                const nombreCampo = `Respuesta pregunta ${j}`
                usuario[nombreCampo] = respuestas[i][j]
                const campotiempo = `Tiempo pregunta ${j}`
                usuario[campotiempo] = tiempos[i][j] 
            }
            i++
        }
        //console.log(respuestas)
        console.log(resultados) 
        return(resultados)
    }
}
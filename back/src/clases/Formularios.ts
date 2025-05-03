import * as fs from 'fs'


export class Formulario{
    obtenerrespuestas(rutasresultados:any){
        //console.log(rutaoriginal)
        //console.log(rutasresultados)
        let resupuestas: number[][] = []
        
        //console.log (jsonformoriginal.questions)
        //console.log ("En el cuestionario hay ", jsonformoriginal.questions.length, " preguntas")
        //console.log(rutasresultados.length)
        let i = 0
        for(const element of rutasresultados){
            if (!resupuestas[i]) { 
                resupuestas[i] = [];
              }
            const rawresultado = fs.readFileSync(element, 'utf-8')
            const jsonresultado = JSON.parse(rawresultado)
            //console.log("revisado resultado ", jsonresultado.questions)
            let j = 0
            for(const pregunta of jsonresultado.questions){
                
                resupuestas[i][j] = pregunta.electionindex
                j++
            }
            //console.log(resupuestas)
            i++
        }
        return resupuestas
    }
    crearresultados(resultados:any, respuestas:number[][]){
        //const rawformoriginal = fs.readFileSync(rutaoriginal, 'utf-8')
        //const jsonformoriginal = JSON.parse(rawformoriginal)
        let i = 0
        for (const usuario of resultados){
            //console.log( `Datos de usuario ${i}: `, usuario)
            let j = 0
            for(let j = 0; j < respuestas[i].length; j++){
                const nombreCampo = `Respuesta pregunta ${j}`
                usuario[nombreCampo] = respuestas[i][j]
                //console.log(`respuesta de usuario ${i+1} en la pregunta ${j+1}: `, respuestas[i][j])
            }
            i++
        }
        //console.log(respuestas)
        console.log(resultados) 
        return(resultados)
    }
}
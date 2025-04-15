import { Request, Response } from "express"
import { User } from "../clases/User"
import { Maestro } from "../clases/Maestro";

//metdodo para el login
export const getUser = async (req: Request, res: Response) =>{
    try {
        //El metodo espera un objeto de tipo json con esos dos parametros como request, 
        const { username, password } = req.body;
        
        const user = new User();
        const usuario = await user.login(username, password); //Los dos parametros de la request los envia a la funcion login, si las credenciales son correctas devuelve los datos completos del usuario
        
        res.json(usuario);//Envia al cliente un objeto de tipo json con todos los datos del usuario
      } catch (error) {
        console.error('Error en getUser:', error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
      }
}

export const signup = (req: Request, res: Response) =>{
    const {body} = req;
    const user = new User();
    const registro = user.register(body)

    res.json({
        msg: registro
    }) 
}

export const getUsers = async (req: Request, res: Response) =>{
    const user = new User()
    const listausuarios = await user.listuser()
    res.json(listausuarios)
    
}

export const createsala = async (req:Request, res:Response) =>{
    const {body} = req
    const {username} = req.body
    const maestro = new Maestro(username)

    maestro.crearformulario(body)
    maestro.crearsala()
}
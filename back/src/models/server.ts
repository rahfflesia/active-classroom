import express,{Application, Request, Response} from 'express';
import routeUser from '../routes/login'


class Server{
    private app: Application;
    private port: string;
    constructor(){
        this.app = express()
        this.port = process.env.PORT ?? '3001' 
        this.listen();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Aplicacon corriendo en el puerto ${this.port}`)
        })
    }

    routes(){
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'Api working'
            })
        })
        this.app.use('/api/', routeUser)
    }
 
}

export default Server
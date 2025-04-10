import { Request, Response } from "express"

export const getUser = (req: Request, res: Response) =>{
    res.json({
        msg: 'Login'
    })
}

export const signup = (req: Request, res: Response) =>{
    res.json({
        msg: 'SignUp'
    }) 
}
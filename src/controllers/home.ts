import { Request, Response } from "express";

let counter = 0;
/**
 * GET /
 * Home page.
 */
export const index = (req: Request, res: Response) => {
    console.log(counter++);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Accept-Ch' , 'UA, Platform, Arch, Model, Mobile') 
    res.send({ test : "test" , headers : req.headers })
};
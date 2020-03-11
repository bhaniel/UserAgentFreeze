import { Request, Response } from "express";

let counter = 0;
/**
 * GET /
 * Home page.
 */
export const index = (req: Request, res: Response) => {
    console.log(counter++);
    // res.setHeader('Content-Type', 'text/html');
    res.header("Content-Type",'application/json');
    res.setHeader('Accept-Ch' , 'UA, Platform, Arch, Model, Mobile') 
    // res.setHeader('Accept-Ch-Lifetime' , '86400');
    res.send(JSON.stringify({ test : "test" , headers : req.headers }, null, 4))
    
};
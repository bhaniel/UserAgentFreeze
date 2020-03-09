import { Request, Response } from "express";

let counter = 0;
/**
 * GET /
 * Home page.
 */
export const index = (req: Request, res: Response) => {
    console.log(counter++);
    res.setHeader('Content-Type', 'text/html');
    console.log(req.headers);
    res.setHeader('Accept-Ch' , 'UA, Platform, Arch, Model, Mobile') 
    res.setHeader('Accept-Ch-Lifetime' , '86400');
    // res.send({ test : "test" , headers : req.headers })
    res.end();
};
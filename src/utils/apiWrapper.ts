import { NextFunction, Request, Response } from "express";

export const apiWrapper = (callback: Function) => {
    return async function(req: Request, res: Response, next: NextFunction) {
        try {
            return await callback(req, res, next);
        } catch (e) {
            //add custom logic
            next(e);
        }
    };
};

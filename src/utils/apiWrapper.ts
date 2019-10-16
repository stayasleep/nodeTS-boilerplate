import { NextFunction, Request, Response } from "express";

type AsyncFunction<A, O> = (...args: Array<A>) => O;
type A = Response | Request | NextFunction;

export const apiWrapper = (callback: AsyncFunction<A, void>) => {
    return async function(req: Request, res: Response, next: NextFunction) {
        try {
            return await callback(req, res, next);
        } catch (e) {
            //add custom logic
            next(e);
        }
    };
};

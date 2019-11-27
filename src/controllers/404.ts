import {Request, Response} from "express";

const get404 = (req: Request, res: Response) => {
    res.status(404).send('404 Not found');
};

export default get404;
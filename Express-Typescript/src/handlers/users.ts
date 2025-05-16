import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";

export function getUsers(req: Request, res: Response) {
    res.send([]);
}

export function getUserById(req: Request<{
    id: string;
}>, res: Response) {
    res.send({});
}

// Type annotation for the request body and query parameters and params
export function createUser(req: Request<{}, {}, CreateUserDto, CreateUserQueryParams>, res: Response<User>) {
    // req.body.email;
    // req.query.loginAfterCreate;
    req.customField = 'test'; // This is how you can add a custom field to the request object

    res.status(201).send({
        id: 1,
        username: 'test',
        email: 'abc@dev.com',
    });
}
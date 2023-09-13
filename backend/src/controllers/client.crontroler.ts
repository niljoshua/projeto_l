import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { client } from '../database/database';

const readnacidosvivod = async (req: Request, res: Response): Promise<Response> => {
    const queryResult: QueryResult = await client.query(`SELECT * FROM "nacidosvivod";`)

    return res.status(200).json(queryResult.rows);
}
const readobiyos2021 = async (req: Request, res: Response): Promise<Response> => {
    const queryResult: QueryResult = await client.query(`SELECT * FROM "obiyos2021";`)

    return res.status(200).json(queryResult.rows);
}


const retrivenacidosvivod = async (req: Request, res: Response): Promise<Response> => {
    const queryResult: QueryResult = await client.query(`SELECT * FROM "nacidosvivod" WHERE "localidade" = $1;`,[req.params.localidade])

    if(!queryResult.rows.length) {
        return res.status(404).json('Order not found.')
     }
 
    return res.status(200).json(queryResult.rows);
}
const retriveobiyos2021 = async (req: Request, res: Response): Promise<Response> => {
    const queryResult: QueryResult = await client.query(`SELECT * FROM "obiyos2021" WHERE "local" = $1;`,[req.params.local])

    if(!queryResult.rows.length) {
       return res.status(404).json('Order not found.')
    }

    return res.status(200).json(queryResult.rows);
}



export default { readnacidosvivod, readobiyos2021,retrivenacidosvivod, retriveobiyos2021 }
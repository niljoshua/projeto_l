
import express, { Application, json } from 'express'
import logics from './controllers/client.crontroler';
import cors from 'cors';

const app : Application = express()
app.use(json())
app.use(cors());

app.get("/nacidosvivod", logics.readnacidosvivod)
app.get("/obiyos2021", logics.readobiyos2021)

app.get("/nacidosvivod/:localidade", logics.retrivenacidosvivod)
app.get("/obiyos2021/:local", logics.retriveobiyos2021)

export default app;
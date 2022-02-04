import express, { Application } from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/country.schema'

require('dotenv').config();


// App de Express
const app: Application = express();

const port = process.env.PORT || '3000';
app.set('port', port);

// CORS
app.use(cors())


//Mis Rutas
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}));

export { app };
import express, { Application } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import routes from './routes';
import bodyParser from 'body-parser';

require('dotenv').config();


// App de Express
const app: Application = express();

const port = process.env.PORT || '3000';
app.set('port', port);

//Lectura y parseo del body
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use(cors())

//Swagger config
const swaggerDocument = YAML.load('./server/swagger/openapi.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Mis Rutas
app.use('/api', routes);

export { app };
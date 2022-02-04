import express from 'express';

import CountryRoutes from './country.routes';

const routerMain = express.Router();

routerMain.use('/', CountryRoutes);

export default routerMain;

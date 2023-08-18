import express from 'express';
import config from './config';
import articulosRoutes from './routes/articulos.routes';
import bancosRoutes from './routes/bancos.routes';

const app = express();

//settings
app.set('port', config.port || 3100);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.use(articulosRoutes);
app.use(bancosRoutes);


export default app;
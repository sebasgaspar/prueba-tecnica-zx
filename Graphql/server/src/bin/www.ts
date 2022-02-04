import { app } from '../app';
import http from 'http';

const port = process.env.PORT || 3000;
app.set('port', port);

// CREATE SERVER
var server = http.createServer(app);
server.listen(port);
server.on('listening', () => {
    console.log('Servidor corriendo en puerto', (process.env.PORT || 3000));
});

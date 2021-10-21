const express = require('express');
const app = express();

const port = 8080;

// Servir contenido estático
// Lo servirá de inmediato en el root, por eso se puede eliminar la ruta / en los gets
// Para distintos recursos estáticos, se pueden añadir sub-carpetas al public,
// y cuando se desea entrar a otra ruta, buscará una carpeta con ese mismo nombre
// estas carpetas tienen prioridad al igual que el root /, si no se encuentra,
// se buscarán las rutas definidas
app.use(express.static('templated-roadtrip'));

/* 
    A diferencia del paquete http, se le indica de inmediato la ruta a la que se se enviará una response
    Si esa ruta no existe, se enviará un mensaje de que no se encuentra
*/

app.get('/hola-mundo', (req, res) => {
    // send envía la respuesta de inmediato, no necesita end, y le agrega el cuerpo
    // según los argumentos que le enviemos
    res.send('Hello World');
});

// Cualquier ruta que no sea las anteriores, repsonderá con lo siguiente
app.get('*', (req, res) => {
    // Se puede enviar un recurso directamente
    // pero debe ser con sendFile y una ruta absoluta
    res.sendFile(`${__dirname}/public/404.html`);
});

// El callback no es obligatorio
app.listen(port, () => {
    console.log(`Example app is running at http://localhost:${port}`);
});
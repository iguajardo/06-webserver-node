const express = require('express');
const app = express();

const port = 8080;

/* 
    A diferencia del paquete http, se le indica de inmediato la ruta a la que se se enviará una response
    Si esa ruta no existe, se enviará un mensaje de que no se encuentra
*/
app.get('/', (req, res) => {

    // send envía la respuesta de inmediato, no necesita end, y le agrega el cuerpo
    // según los argumentos que le enviemos
    res.send('Home');
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hello World');
});

// Cualquier ruta que no sea las anteriores, repsonderá con lo siguiente
app.get('*', (req, res) => {
    res.send('404 | Page not found');
});

// El callback no es obligatorio
app.listen(port, () => {
    console.log(`Example app is running at http://localhost:${port}`);
});
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

app.set('view engine', 'hbs'); // handlebars buscará la carpeta views
hbs.registerPartials(`${__dirname}/views/partials`);


// Servir contenido estático
// Lo servirá de inmediato en el root, por eso se puede eliminar la ruta / en los gets
// Para distintos recursos estáticos, se pueden añadir sub-carpetas al public,
// y cuando se desea entrar a otra ruta, buscará una carpeta con ese mismo nombre
// estas carpetas tienen prioridad al igual que el root /, si no se encuentra,
// se buscarán las rutas definidas

app.use(express.static('public'));


// si se desea acceder a un recurso sin su extensión, además de lo que se hace más adelante
// se puede crear una carpeta dentro de public con el nombre de la ruta, y dentro de esa carpeta
// express buscará un index.html

/* 
    A diferencia del paquete http, se le indica de inmediato la ruta a la que se se enviará una response
    Si esa ruta no existe, se enviará un mensaje de que no se encuentra
*/

app.get('/', (req, res) => { // estos callbacks serían los controladores
    res.render('home', {
        nombre: 'Italo',
        titulo: 'Curso de Node'
    }); // objecto con todas las opciones
    // estos atributos llegarán como variables a la vista, y se podrán usar con {{}}
    // como en Angular y similar a React
});

app.get('/generic', (req, res) => {
    // send envía la respuesta de inmediato, no necesita end, y le agrega el cuerpo
    // según los argumentos que le enviemos
    res.render('generic', {
        nombre: 'Italo',
        titulo: 'Generic'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Italo',
        titulo: 'Elements'
    });
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
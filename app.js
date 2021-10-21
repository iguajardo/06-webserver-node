// paquete http que permite crear un servidor http usando node
// luego lo reemplazaremos con express
const http = require('http');

const port = 8080;

// crea un servidor y lo levanta de inmediato, si hay un error se cae, por eso se usa nodemon
http.createServer((request, response) => {

    // Se puede hacer un console.log a la request, para ver la request http que se recibe


    // response.writeHead(200, { 'Content-Type': 'application/json' });
    response.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    response.writeHead(200, { 'Content-Type': 'application/csv' });

    // const persona = {
    //     id: 1,
    //     nombre: 'Italo'
    // };

    // para enviar un body, se hace con write:
    // escribir distintos write, concatena el contenido al final
    response.write('id, nombre;');
    response.write('1, Italo;');
    response.write('2, Nati;');
    response.write('3, Ami;');
    response.write('4, Black;');

    // se debe terminar la respuesta para enviarla, o queda en espera.
    // además, la respuesta solo manda el text sin ninguna otra opción, como indicar que es un JSON
    // esto pasa porque por defecto uno envía en el header un "connection": "keep-alive", y quedará
    // pendiente con la conexión abierta hasta recibir una respuesta del servidor
    response.end();

}).listen(port); // abre el puerto

console.log('Escuchando el puerto', port);
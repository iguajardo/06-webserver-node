Cuando se sirve un recurso estático como el public u otra carpeta, con cada ruta se buscarán
archivos con el mismo nombre a esa ruta y se servirán, sin meterlos a carpeta.
Por ejemplo, si deseamos acceder a /generic, express buscará el archivo generic.html y lo servirá.
Si no existe, buscará en las rutas definidas con el método get
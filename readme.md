Cuando se sirve un recurso estático como el public u otra carpeta, con cada ruta se buscarán
archivos con el mismo nombre a esa ruta y su extensión y se servirán, sin meterlos a carpeta.
Para el root, siempre buscará un index.html, para distintos recursos, buscará esos archivos .html
y al servirlos los mostrará en la ruta.
Por ejemplo, si deseamos acceder a /generic.html, express buscará el archivo generic.html y lo servirá.
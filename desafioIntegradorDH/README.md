Script de importación se encuentra en el material dentro de /database

Esta base de datos está compuesta por las siguientes tablas

Artistas
Canciones
Albumes
Generos
Las relaciones están definidas de la siguiente forma

Una canción tiene un album

Un album tiene muchas canciones

Una canción tiene un genero

Un genero tiene muchas canciones

Una canción tiene un artista

Un artista tiene muchas canciones

API REST de la base de datos "Musicando"

** API MUSICANDO **


**ENDPOINTS**

/canciones (GET) que muestre un listado de las canciones con sus propiedades
/canciones (POST) para crear un nuevo registro de una canción 
/canciones/:id (GET) que muestre una canción 
/canciones/:id (PUT) para editar una canción 
/canciones/:id (DELETE) para eliminar una canción
/generos (GET) listado de todos los géneros con sus canciones
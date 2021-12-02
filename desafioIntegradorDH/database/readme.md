# Musicando

### Esta es la base de datos musicando, a continuación vas a ver como fue creada
_Esta base de datos está compuesta por las siguientes tablas_
- Artistas
- Canciones
- Albumes
- Generos

_Las relaciones están definidas de la siguiente forma_
- Una canción tiene un album
- Un albun tiene muchas canciones

- Una canción tiene un genero =
- Un genero tiene muchas canciones =

- Una canción tiene un artista
- Un artista tiene muchas canciones =


"Content-Type": "application/json"


Una canción tiene un album
Una canción tiene un genero = ok
Una canción tiene un artista

- Un album tiene muchas canciones
 Un genero tiene muchas canciones = ok 
 Un artista tiene muchas canciones =


"id": 1,
            "titulo": "nueva cancion",
            "duracion": 10,
            "album_id": 1,
            "genero_id": 1,
            "artista_id": 1,
            "created_at": "2211-01-01T03:00:00.000Z",
            "updated_at": "2211-01-01T03:00:00.000Z"
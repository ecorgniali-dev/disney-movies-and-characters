# API Rest Mundo Disney

- [Visi贸n general](#visi贸n-general)
- [1. 馃殌 Para comenzar](#1--para-comenzar)
  - [1.1 Requisitos previos](#11-requisitos-previos)
  - [1.2 Ejecutar de forma local](#12-ejecutar-de-forma-local)
- [2. 馃攼 Autenticaci贸n](#2--autenticaci贸n)
- [3. 馃搫 Documentaci贸n](#3--documentaci贸n-de-la-api)

## Visi贸n general

API para explorar el mundo de Disney, la cual permite conocer y modificar los
personajes que lo componen y ver en qu茅 pel铆culas estos participaron.

Caracteristicas principales de la API:
- Listado de todos los personajes con imagen y nombre
- Crear, editar y eliminar personajes.
- Info detallada de cada personaje, con sus atributos y series o peliculas relacionadas.
- Busqueda de personajes por nombre, edad, o peliculas/series.
- Listado de todas las peliculas/series con imagen, t铆tulo y fecha de creaci贸n
- Crear, editar y eliminar peliculas/series.
- Info detallada de cada pelicula/serie, con sus datos y personajes asociados a la misma.
- Busqueda de peliculas/series por nombre o genero y filtrado de resultados de forma ASC o DESC.
- Env铆o de email de bienvenida a cada usuario registrado.

## 1. 馃殌 Para comenzar

### 1.1 Requisitos previos

Antes de comenzar, aseg煤rese de tener instalado lo siguiente en su m谩quina
local:

- [NodeJS](https://nodejs.org/en/download/) (v14.17.4 o superior)
- Servidor Local para mySql:
  - [WampServer](https://www.wampserver.com/en/)
  - [XAMPP](https://www.apachefriends.org/es/download.html)
  - O similar.

### 1.2 Ejecutar de forma local

- Clonar repositorio

  ```
  git clone https://github.com/ecorgniali-dev/disney-movies-and-characters.git
  ```

- Generar un archivo duplicado de `.env.example` y renombrarlo a `.env`. Luego configure en dicho archivo todas las variables de entorno
  necesarias para ejecutar la API.
- Instale todas las dependencias ejecutando `npm i` o `npm install` en su
  terminal.
- Asegurese de tener previamente creada
  la base de datos a utilizar y el servidor mySql corriendo.
- Ejecutar el servidor Express mediante el siguiente comando:
  - `npm start`  

## 2. 馃攼 Autenticaci贸n

La API requiere autenticaci贸n mediante 
token de acceso. Para obtener su token de acceso, en primer lugar debe registrar
un nuevo usuario en la ruta `/auth/register` mediante una solicitud de tipo `POST`
como la siguiente:

**Ejemplo de solicitud de registro:**

```
{
  "username": "myusername",
  "password": "mypassword",
  "email": "correo@corre.com"
}
```

una vez registrado el usuario podra iniciar sesi贸n en la ruta `/auth/login` con
sus credenciales y recibira como respuesta el token de acceso

**Ejemplo de respuesta accessToken:**

```
{
  "accessToken": "......"
}
```

el token obtenido debe ser utilizado en el encabezado de cada petici贸n realizada
al servidor de la siguiente manera:

```
headers: {
  'Authorization': "<token>"
}
```

## 3. 馃搫 Documentaci贸n de la API

API Documentada mediante **swagger-jsdoc** y **swagger-ui-express**. A traves de
la ruta `/api-docs` de la aplicaci贸n se puede acceder a:

1. Endpoints disponibles (`/auth`, `/characters`, `/movies`, `/genres`) y
   operaciones de cada endpoint (`get`, `post`, `put`, `delete`).
2. Ver que par谩metros de operaci贸n (entrada y salida de datos) estan diponibles
   para cada operaci贸n.
3. M茅todo de autenticaci贸n (JWT) para probar y testear cada endpoint desde
   **swagger-ui-express**.

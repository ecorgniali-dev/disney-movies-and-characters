# API Rest Mundo Disney

- [Visión general](#visión-general)
- [1. 🚀 Para comenzar](#1--para-comenzar)
  - [1.1 Requisitos previos](#11-requisitos-previos)
  - [1.2 Ejecutar de forma local](#12-ejecutar-de-forma-local)
- [2. 🔐 Autenticación](#2--autenticación)
- [3. 📄 Documentación](#3--documentación-de-la-api)

## Visión general

API para explorar el mundo de Disney, la cual permite conocer y modificar los
personajes que lo componen y ver en qué películas estos participaron.

Caracteristicas principales de la API:
- Listado de todos los personajes con imagen y nombre
- Crear, editar y eliminar personajes.
- Info detallada de cada personaje, con sus atributos y series o peliculas relacionadas.
- Busqueda de personajes por nombre, edad, o peliculas/series.
- Listado de todas las peliculas/series con imagen, título y fecha de creación
- Crear, editar y eliminar peliculas/series.
- Info detallada de cada pelicula/serie, con sus datos y personajes asociados a la misma.
- Busqueda de peliculas/series por nombre o genero y filtrado de resultados de forma ASC o DESC.
- Envío de email de bienvenida a cada usuario registrado.

## 1. 🚀 Para comenzar

### 1.1 Requisitos previos

Antes de comenzar, asegúrese de tener instalado lo siguiente en su máquina
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

## 2. 🔐 Autenticación

La API requiere autenticación mediante 
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

una vez registrado el usuario podra iniciar sesión en la ruta `/auth/login` con
sus credenciales y recibira como respuesta el token de acceso

**Ejemplo de respuesta accessToken:**

```
{
  "accessToken": "......"
}
```

el token obtenido debe ser utilizado en el encabezado de cada petición realizada
al servidor de la siguiente manera:

```
headers: {
  'Authorization': "<token>"
}
```

## 3. 📄 Documentación de la API

API Documentada mediante **swagger-jsdoc** y **swagger-ui-express**. A traves de
la ruta `/api-docs` de la aplicación se puede acceder a:

1. Endpoints disponibles (`/auth`, `/characters`, `/movies`, `/genres`) y
   operaciones de cada endpoint (`get`, `post`, `put`, `delete`).
2. Ver que parámetros de operación (entrada y salida de datos) estan diponibles
   para cada operación.
3. Método de autenticación (JWT) para probar y testear cada endpoint desde
   **swagger-ui-express**.

# CatalogoProductosFull
Prueba Tecnica Dev Full Stack

# 🛠️ Catálogo de Productos API
Este proyecto implementa una API REST para gestionar un catálogo de productos, desarrollada con ASP.NET Core y la API REST expuesta mediante Swagger para facilitar su exploración y la interfaz del cliente mediante Angular Framework. (HTML CSS JS)

## 🚀 Requisitos Previos
- Docker instalado en el equipo
- Git (opcional, para clonar el repositorio)

## 📥 Clonación del Proyecto
Clona el repositorio en tu máquina local (o descarga el ZIP desde GitHub):

URL del repositorio: https://github.com/anderszzon/CatalogoProductosFull

Una vez descargado y/o descomprimido, dirigirse a la carpeta para ejecutar el servidor backend en Docker

🔧 Instrucciones para ejecutar el backend con Docker

Abre la terminal ó consola y navega hasta la carpeta del backend donde está ubicado el Dockerfile:

cd catalogoproductosfull/backend/CatalogoProductosAPI/

Ejecutar el siguiente comando para cargar la imagen en docker

docker build -t catalogo-productos-api .
![image](https://github.com/user-attachments/assets/604ba91d-679c-4446-a3d6-46266019aee2)

Despues Ejecutar el siguiente comando para cargar el contenedor en docker

docker run -p 8080:8080 -p 8081:8081 catalogo-productos-api
![image](https://github.com/user-attachments/assets/738b3454-a009-4dfb-8ec8-b6fc529474a1)

Finalmente, el servidor backend se habilita en la siguiente URL

http://localhost:8080/swagger/index.html

En caso que no este disponible el acceso, se puede ingresar medianta Docker Desktop, haciendo click como se observa en la siguiente imagen:
![image](https://github.com/user-attachments/assets/20370966-61af-4b92-be57-e60f49c76f61)

# 📦 API REST - Catálogo de Productos usando SWAGGER

Esta API REST permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre un catálogo de productos. Está construida en .NET 9 y se puede ejecutar usando Docker.

## 🚀 Endpoints disponibles

La API expone los siguientes endpoints bajo el controlador `ProductoControllers`:

| Método | Endpoint                  | Descripción                            |
|--------|---------------------------|----------------------------------------|
| GET    | `/api/productos`          | Obtiene la lista completa de productos |
| POST   | `/api/productos`          | Crea un nuevo producto                 |
| GET    | `/api/productos/{id}`     | Obtiene un producto por su ID          |
| PUT    | `/api/productos/{id}`     | Actualiza un producto existente        |
| DELETE | `/api/productos/{id}`     | Elimina un producto por su ID          |

---

## 🧪 Ejemplo del objeto JSON

```json
{
  "nombre": "Computador",
  "descripcion": "HP 1210",
  "precio": 1500000,
  "stock": true
}




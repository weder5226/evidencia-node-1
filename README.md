# Proyecto de Inicio de Sesión con NodeJS

Este ejercicio es un ejemplo sencillo de cómo implementar un sistema de inicio de sesión utilizando **NodeJS**, con una colección de usuarios en memoria y contraseñas almacenadas de manera segura mediante hash.

## Descripción

El proyecto proporciona una API básica para gestionar usuarios con inicio de sesión y autenticación. Utiliza **NestJS**, un framework basado en Node.js, y está configurado con **Swagger** para facilitar la revisión de los endpoints.

### Características principales:

- Gestión de usuarios.
- Almacenamiento de contraseñas.
- Validación de datos de entrada.
- Puerto por defecto en **8080**.

## Requisitos

- **Node.js** (v22.x o superior)
- **npm** (v10.x o superior)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/weder5226/evidencia-node-1.git
   cd evidencia-node-1
   ```

2. Instala las dependencias necesarias utilizando **npm**:

   ```bash
   npm install
   ```

3. Una vez que las dependencias estén instaladas, inicia el servidor de desarrollo:

   ```bash
   npm run start:dev
   ```

4. Accede con el navegador a la API a través de **http://localhost:8080**.

   - El servidor se ejecutará en el puerto por defecto **8080**.
   - Cuando accedas a la raíz (`/`), serás redirigido automáticamente a la interfaz de **Swagger**.

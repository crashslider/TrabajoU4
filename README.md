# Trabajo U4 Parte B - Taller de Dispositivos Moviles
## Descripción del Proyecto

Este proyecto es una aplicación móvil desarrollada con Ionic y Angular. La aplicación incluye varias páginas como Login, Home, Tramites, Eventos, Contacto y Emergencia, cada una con su funcionalidad específica. El objetivo principal es proporcionar una interfaz de usuario amigable y funcional para realizar diferentes tareas.

## Instalación
### Requisitos Previos
- Node.js (v12.x o superior)
- npm (v6.x o superior)
- Ionic CLI (v6.x o superior)

### Pasos de Instalación

1. Clona el repositorio:
```
git clone https://github.com/crashslider/TrabajoU4.git
```
2. Navega al directorio del proyecto:
```
cd APPU3
```
3. Instala las dependencias:
```
npm install
```

### Configuración
Asegúrate de tener configurados los archivos de entorno si el proyecto los requiere, como .env o cualquier otro archivo de configuración.

### Ejecución
Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:
```
ionic serve
```
Esto abrirá la aplicación en tu navegador predeterminado en http://localhost:8100/.

## Desarrollo
### Estructura del Proyecto
- src/app/pages: Contiene todas las páginas de la aplicación.
  - login: Página de inicio de sesión.
  - home: Página principal con navegación a otras secciones.
  - tramites: Página para gestionar trámites.
  - eventos: Página que muestra un calendario de eventos.
  - contacto: Página para contacto.
  - emergencia: Página para reportar emergencias.

### Características
- Login: Página de inicio de sesión con validación básica.
- Home: Página principal con botones de navegación a diferentes secciones.
- Tramites: Página con botones verticales y funcionalidad básica de navegación.
- Eventos: Página con un componente de calendario para mostrar eventos.
- Contacto: Página de contacto con formulario básico.
- Emergencia: Página para reportar emergencias con campos para título y descripción, además de botones para adjuntar archivos y enviar la información.

### Visuales
- Se mejoro el apartado visual, dejando igual como el trabajo de la Unidad 2.
- Los botones son mas simples a la vista, mejorando la experiencia.

### Complementos
- Se añadio la opcion de tomar fotografias.
- Se añadio la opcion de geolocalizacion.

### APK
- Se crea la primera APK de demo.



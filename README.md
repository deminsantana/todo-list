# TodoList: Una aplicación Angular para gestionar tareas

Esta aplicación, desarrollada con Angular, permite gestionar una lista de tareas, incluyendo la creación, edición, eliminación, filtrado y marcado como completadas y pendientes.  Se ha priorizado la claridad, eficiencia y buenas prácticas de programación.

## Características:

* **Interfaz de usuario sencilla e intuitiva:**  Permite una fácil interacción con la lista de tareas.
* **Creación y edición de tareas:**  Un formulario con validaciones asegura la integridad de los datos.  Se pueden agregar tareas con título, descripción y estado (pendiente/completado).
* **Marcar como completadas:**  Las tareas se pueden marcar como completadas seleccionando el Status en el Dropdown.
* **Eliminación de tareas:**  Las tareas se pueden eliminar de la lista.
* **Filtro de tareas:**  Permite filtrar la lista para mostrar solo tareas pendientes, completadas o todas.
* **Manejo de datos con servicios de Angular:**  La lógica de negocio está encapsulada en servicios para una mejor organización y mantenibilidad.
* **Estilos básicos con CSS:**  Se han aplicado estilos CSS para una presentación limpia y consistente.


## Instalación y ejecución:

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/deminsantana/todo-list.git

2. **Navegar al directorio del proyecto:**
  ```bash
  cd todo-list

3. **Instalar las dependencias:**
  ```bash
  npm install

4. **Ejecutar la aplicación:**
  ```bash
  ng serve o npm start

Esto iniciará un servidor de desarrollo. Abre tu navegador y visita http://localhost:4200/. La aplicación se recargará automáticamente cada vez que guardes cambios en los archivos fuente.

## Validaciones del formulario:
  El formulario de creación/edición de tareas incluye las siguientes validaciones:
    `*` Título: Campo requerido.
    `*` Descripción: Campo requerido.
    Ambos campos usar formularios reactivos con las validaciones siguientes:
      `+` Validación de campo requerido
      `+` Validación de longitud mínima (3 caracteres)
      `+` Validación de longitud máxima (100 caracteres)
      `+` Validación personalizada para evitar espacios en blanco al principio y al final

## Tecnologías utilizadas:
  `*` Angular: Framework de desarrollo frontend.
  `*` TypeScript: Lenguaje de programación.
  `*` HTML: Lenguaje de marcado.
  `*` CSS: Lenguaje de estilo.

## Estructura del proyecto:
  `*` src/app/components/: Contiene los componentes de la interfaz de usuario:
      `+` dropdown.component.ts: Este componente es un dropdown o menú desplegable genérico.
      `+` todo-filters.component.ts: es el encargado de filtrar la lista de tareas.
      `+` todo-form.component.ts: es el formulario para crear o editar una tarea.
      `+` todo-list.component.ts: es el encargado de mostrar la lista de tareas.
      `+` todo-list-item.component.ts: es el encargado de mostrar una única tarea en la lista y sus detalles.
      `+` todo-orders.component.ts: es el encargado de ordenar la lista de tareas.

  `*` src/app/config/: contiene la configuración de la interfaz de usuario:
      `+` options.ts: Define las opciones del formulario, de filtrado y de ordenamiento.

  `*` src/app/interfaces/: Contiene la estructura de los datos que se utilizan en la aplicación:
      `+` todos.interfaces.ts: Se encarga de asegurar la consistencia de los datos (tipado), definiendo la estructura de una tarea.

  `*` src/app/pipes/: Los Pipes permiten transformar los datos:
      `+` date.pipe.ts: Se encarga de formateo de fechas.

  `*` src/app/services/: Contiene los servicios para la lógica de negocio y la gestión de datos:
      `+` todos.service.ts: Tiene la responsabilidad del CRUD, almacenamiento de datos, filtrado y ordenamiento, comunicación con los componentes.

  `*` src/app/utils/: Contiene las utilidades y funciones auxiliares:
      `+` traductions.ts: Almacena los textos que se muestran en la interfaz de usuario.

  `*` src/assets/: Contiene las imagenes de la aplicación.

## Contribuciones:
Las contribuciones son bienvenidas. Por favor, abre un issue para reportar errores o solicitar nuevas funcionalidades.

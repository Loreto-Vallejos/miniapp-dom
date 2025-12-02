README — Mini-App DOM: Generador de Tarjetas de Usuarios

**🖥️ Descripción General**

Esta mini-aplicación fue creada como parte del Desafío de Manipulación del DOM, aplicando todas las técnicas fundamentales vistas en clase:

Selección avanzada con querySelector

Creación dinámica de elementos

Uso de plantillas (<template>)

Delegación de eventos

Modo oscuro con classList.toggle

Validación en tiempo real

Animaciones CSS

Consumo de API mediante fetch

Comportamiento dinámico con JavaScript puro

La aplicación permite crear tarjetas de usuario, ya sea ingresando un nombre manualmente o cargando datos reales desde la API pública randomuser.me.
El usuario puede eliminar tarjetas individualmente y cambiar toda la interfaz a modo oscuro.

🚀 Funcionalidades Principales
✔ 1. Creación dinámica de elementos

Las tarjetas de usuario se generan con:

document.createElement()
appendChild()


y usando un template clonado dinámicamente.

✔ 2. Uso de <template>

Se clonó una plantilla oculta para generar tarjetas:

nombre del usuario

email

avatar

botón eliminar

✔ 3. Delegación de eventos

La eliminación de tarjetas funciona incluso si fueron creadas después del load inicial.

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
        e.target.closest(".card").remove();
    }
});

✔ 4. Modo Oscuro

Se aplica a toda la interfaz con un simple toggle:

document.body.classList.toggle("dark-mode");

✔ 5. Validación en tiempo real

El input de nombre muestra:

borde verde si es válido

borde rojo si es inválido

mensaje instantáneo

✔ 6. Animaciones CSS

Las tarjetas aparecen con efecto fade-in suave.

✔ 7. Fetch API

Al presionar “Cargar Usuario Aleatorio”, se hace una petición a:

https://randomuser.me/api/


y se crea una tarjeta con avatar, nombre y email reales.

✔ 8. Uso moderno de querySelector / querySelectorAll

Toda la app utiliza selectores CSS para acceder a nodos del DOM.

📂 Archivos del Proyecto
/mi-miniapp-dom
│── index.html      → estructura HTML con template + contenedores
│── styles.css      → estilos, animaciones y dark mode
│── app.js          → lógica de la aplicación (DOM, eventos, fetch)
│── README.md       → documentación



🛠️ Tecnologías Utilizadas

HTML5

CSS3

JavaScript Vanilla

Fetch API

Animaciones CSS

DOM Avanzado

💡 Cómo usar la aplicación

Clona o descarga el proyecto.

Abre index.html en el navegador.

Opciones disponibles:

Ingresa un nombre y haz clic en Agregar Usuario

Haz clic en Cargar Usuario Aleatorio para traer datos reales

Haz clic en Eliminar para borrar una tarjeta

Usa Modo Oscuro para cambiar el tema

⭐ Conceptos aplicados (Checklist oficial)
Requisito	Estado
Crear 5+ elementos dinámicos	✔
Usar <template>	✔
Delegación de eventos	✔
Modo oscuro	✔
Validación en tiempo real	✔
Animaciones CSS	✔
querySelector / querySelectorAll	✔
fetch()	✔
3+ botones funcionales	✔

Éxito total: 10/10 requisitos cumplidos.

📌 Autor

Desarrollado por:
María Loreto Vallejos
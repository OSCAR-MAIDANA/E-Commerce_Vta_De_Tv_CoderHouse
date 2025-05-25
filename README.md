# 🛒 E-Commerce de TVs y Accesorios

¡Bienvenido al repositorio del proyecto "E-Commerce de TVs y Accesorios"! Esta aplicación es una casa digital de venta de televisores y sus accesorios, construida con un enfoque en la interactividad y la experiencia del usuario.

---

### 🚀 Funcionalidades Destacadas

* **Listado de Productos:** Visualización de todos los productos disponibles.
* **Detalle del Producto:** Vista individual para cada producto con información completa.
* **Carrito de Compras:** Gestión intuitiva de los ítems seleccionados por el usuario.
* **Proceso de Checkout:** Formulario para que el usuario ingrese sus datos y finalice la orden de compra.
* **Filtrado por Categoría:** Posibilidad de navegar y filtrar productos por categorías específicas.
* **Persistencia de Datos:** Utilización de Firebase para el almacenamiento y la gestión de la base de datos, asegurando la persistencia de la información del carrito y los productos.

---

### 🛠️ Tecnologías y Herramientas Utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías clave:

* **Frontend:**
    * **React:** Biblioteca principal para la construcción de la interfaz de usuario.
    * **JavaScript:** Lenguaje de programación principal para la lógica del frontend.
    * **CSS3:** Para el estilizado y diseño de la aplicación. (Si utilizas algún framework CSS específico como Bootstrap, Tailwind CSS, o preprocesadores como Sass, por favor, añade aquí el badge correspondiente).
    * **Hooks de React (useState, useEffect, etc.):** Para la gestión del estado y efectos secundarios en componentes funcionales.
    * **Uso de Arrays, Batch & writeBatch:** Para un manejo eficiente de datos y operaciones en la base de datos.
    * **Manejo de Eventos (preventDefault, onChange):** Para la interactividad robusta de la interfaz.
* **Base de Datos:**
    * **Firebase:** Plataforma backend-as-a-service (BaaS) utilizada para la base de datos (presumiblemente Firestore o Realtime Database, si sabes cuál, puedes especificarlo).

---

### 💻 Cómo Clonar y Ejecutar el Proyecto

Para configurar y ejecutar este proyecto en tu entorno local, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/OSCAR-MAIDANA/E-Commerce_Vta_De_Tv_CoderHouse.git](https://github.com/OSCAR-MAIDANA/E-Commerce_Vta_De_Tv_CoderHouse.git)
    ```
    *También puedes descargar el proyecto directamente desde [aquí](https://github.com/OSCAR-MAIDANA/E-Commerce_Vta_De_Tv_CoderHouse/archive/refs/heads/main.zip).*

2.  **Navegar al directorio del proyecto:**
    ```bash
    cd E-Commerce_Vta_De_Tv_CoderHouse
    ```

3.  **Instalar dependencias:**
    Este proyecto requiere Node.js y npm (o Yarn).
    ```bash
    npm install
    # o si usas Yarn
    # yarn install
    ```

4.  **Configurar Firebase:**
    * Asegúrate de tener un proyecto de Firebase configurado.
    * Crea un archivo `.env` en la raíz del proyecto y añade tus credenciales de Firebase API key, auth domain, project ID, etc. (Si tienes un archivo de ejemplo como `.env.example`, puedes mencionarlo aquí).

5.  **Iniciar la aplicación:**
    ```bash
    npm start
    # o si usas Yarn
    # yarn start
    ```
    Esto abrirá la aplicación en tu navegador predeterminado (usualmente `http://localhost:3000`).

---

### 🗺️ Rutas Principales de la Aplicación

* `/` : Página principal con el listado de todos los productos.
* `/detail/:id` : Muestra los detalles de un producto específico, donde `:id` es el ID del producto.
* `/cart` : Visualiza el carrito de compras con los productos seleccionados.
* `/checkout` : Muestra el formulario para completar la información del usuario y realizar la compra.
* `/category/:id` : Filtra y muestra los productos por una categoría específica, donde `:id` es el ID de la categoría.

---

### 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar este e-commerce o encuentras algún error, no dudes en:
1.  Hacer un "fork" de este repositorio.
2.  Crear una nueva "branch" (`git checkout -b feature/nombre-caracteristica` o `bugfix/nombre-arreglo`).
3.  Realizar tus cambios y hacer "commit".
4.  Enviar un "Pull Request".

---

### 📧 Contacto

Si tienes alguna pregunta sobre el proyecto o quieres saber más, no dudes en contactarme:

* **LinkedIn:** https://linkedin.com/in/oscar-maidana-bbb8942a8/)
* **Email:** odmaidana1@gmail.com

---

### 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

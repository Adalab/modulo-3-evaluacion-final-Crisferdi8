# RICK AND MORTY

Lista de Personajes de Rick and Morty
Este proyecto es una aplicación web desarrollada con React que permite visualizar un listado de personajes de la serie Rick and Morty. Incluye funcionalidades como búsqueda por nombre y visualización detallada de cada personaje utilizando rutas dinámicas con React Router.

Características
Listado de personajes:

Muestra los primeros 20 personajes de Rick and Morty utilizando la API oficial: Rick and Morty API.
Por cada personaje, se muestran:
Foto.
Nombre.
Especie.
Filtrado por nombre:

Incluye un input de búsqueda para filtrar los personajes por nombre.
La búsqueda es dinámica y no distingue entre mayúsculas y minúsculas.
Detalles de personajes:

Al hacer clic en un personaje, se accede a una página con información detallada:
Foto.
Nombre.
Especie.
Planeta de origen.
Número de episodios en los que aparece.
Estado (vivo, muerto o desconocido).
Implementado con rutas dinámicas utilizando React Router DOM.
Componentización:

Componentes principales:
Filters: Componente para el input de búsqueda.
CharacterList: Muestra el listado de personajes.
CharacterItem: Tarjeta individual para cada personaje.
UserDetails: Página de detalle para un personaje específico.


# # Instalación y Uso
1. Clonar el repositorio
bash
Copiar código
git clone https://github.com/tu-repositorio/rick-and-morty-app.git
cd rick-and-morty-app
2. Instalar dependencias
Asegúrate de tener Node.js instalado. Luego ejecuta:

bash
Copiar código
npm install
3. Ejecutar la aplicación
Inicia el servidor de desarrollo con:

bash
Copiar código
npm start
La aplicación estará disponible en http://localhost:3000.

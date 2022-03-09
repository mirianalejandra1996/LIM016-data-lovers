## ÍNDICE

- [1. PokeCompany](#1-pokeCompany)
- [2. Preámbulo](#2-preámbulo)
- [3. Resumen del proyecto](#3-resumen-del-proyecto)
- [4. Historias de Usuario](#4-historias-de-usuario)
- [5. Diseño de la Interfaz de Usuario](#5-consideraciones-generales)
- [6. Tecnologias empleadas](#6-hacker-edition)
- [7. Implementación de la Interfaz de Usuario (HTML/CSS/JS)](<#7-Implementación-Interfaz-Usuario-(HTML/CSS/JS)>)
- [8. Deploy Link](#8-deploy-link)
- [9. Authors](#9-authors)

---

## 1 POKECOMPANY

<p align="center">
  <img width="460" height="300" src="https://github.com/lucerogoga/Data-lovers-POKECOMPANY/blob/main/READMeImages/POKECOMPANY.svg">
</p>

## 2. Preámbulo

PokéCompany es una aplicación que muestra la data de los pokémones de manera interactiva. Esta aplicación está disponible en vista Desktop y en vista Mobile.

Los usuarios se convierten en** "investigadores de Pokémon"** y pueden:

📌 Visualizar las características únicas que determinan las decisiones que toma el usuario (tipo, debilidad, altura, CP, etc.)

📌 Los Pokémon tienen distintos tipos y debilidades de combate. Estas características son importantes
cuando el usuario elige al Pokémon más adecuado para su batalla. Hay veces que tiene que elegir a los que tienen menos cantidad de debilidades y saber de que tipo son.

📌 El usuario puede ordenarlos por estas 2 características (tipo, debilidad), y puede personalizar
la lista de pokemones del pokedex en orden alfabético (A-Z o de Z-A) o según número (superior o inferior)

📌 Los Pokémon evolucionan y es importante para un maestro Pokémon saber cuántas y cuáles son las evoluciones que tienen antes y después.

📌 Los Pokémon se alimentan de caramelos y un maestro Pokémon necesita saber qué tipo de caramelo necesita un Pokémon para evolucionar.

## 3. Resumen del proyecto

Aplicación de escritorio y móvil que permite al usuario visualizar y manipular la data de los pokemones, en una interfaz intuitiva que proporcione una agradable experiencia.

## 4. Historias de Usuario

Se realizó una investigación para conocer al usuario y la problemática que presenta al momento de querer escoger algún, ya que se le complica y se vuelve tedioso la búsqueda del pokemón en un listado muy extenso, es por ello que la implementación de este sistema busca facilitar la búsqueda mediante filtros especiales, y selectores que permitirá organizar la data de pokemones de una manera más sencilla y efectiva.

📝 HU01 - CARACTERÍSTICA (TIPO DE POKEMON) - Como: Entrenador Pokemón. Quiero: Saber de qué tipo es mi pokemón. Para: Poder Saber las características de mi pokemón (fuego, agua, electrico, etc)

📝 HU02 - DEBILIDAD DEL POKEMÓN - Cómo: Entrenador Pokemón. Quiero: Conocer las debilidades de mi pokemón. Para: poder definir una estrategia de pelea más efectiva (qué pokemón me conviene elegir para pelear)

📝 HU03 - CARACTERÍSTICAS (PESO Y TAMAÑO DEL POKEMÓN) - Como: Entrenador Pokemón. Quiero visualizar el peso y tamaño de mi pokemón. Para: Obtener mayor detalles de su contextura.

📝 HU04 - EVOLUCIONES DE CADA POKEMON - Como: Entrenador Pokemón. Quiero visualizar la evoluciones pasadas y futuras de mi pokemón. Para: saber con qué pokemón cuento en el futuro.

📝 HU05 - ORDENAMIENTO DE 2 CARACTERÍSTICAS. Como: Entrenador Pokemón. Quiero: Filtrar a los pokemones que tienen menos cantidad de características (debilidades) y tipo. Para: Elegir el mejor pokemón para mis batallas.

📝 HU06 - Vista Móvil. Como: Entrenador Pokemón. Quiero visualizar en mi teléfono la aplicación. Para tener acceso en cualquier momento sin mi computador

## 5. Diseño de la Interfaz de Usuario

El prototipo se basó en satisfacer las necesidades del usuario, es por ello que en nuestro prototipo de baja fidelidad se enfoca las siguientes .
Inspirado en el diseño flat design minimalista, con uso de paleta de colores verdes, y uso de tipografía "Poppins"

#### PROTOTIPOS DE BAJA FIDELIDAD [AQUÍ](https://github.com/lucerogoga/Data-lovers-POKECOMPANY/blob/main/READMeImages/LowFidelityWireframes.pdf)

#### PROTOTIPO DE ALTA FIDELIDAD [AQUÍ](https://github.com/lucerogoga/Data-lovers-POKECOMPANY/blob/main/READMeImages/HightFidelityWireframes.pdf)

## 6. Tecnologias empleadas

- Para la estructura y diseño:

* 🎯HTML5: Siguiendo las reglas del HTML semántico se estructuró con un header que contiene una barra de navegación, el main para englobar el contenido principal y en el footer se detalla los derechos de autor.

* 🎯CSS: Usada para definir el estilo visual del proyecto.
* 🎯Figma: Plataforma para crear las estructuras del prototipo (Wireframe, prototipo de alta fidelidad, mockups).

- Para el Testing:

* 🎯Jest: Framework para realizar los testing unitarios.
* 🎯Eslint: Herramienta de linting para analizar el código en busca de errores.

- Para la funcionalidad:

* 🎯JavaScript: Para dar la funcionalidad a la plataforma.

-Librerías:

- 🎯Chart.js: Para la creación de gráficos estadísticos.

## 7. Implementación de la Interfaz de Usuario (HTML/CSS/JS)

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.

<p align="center">
  <img width="460" height="250" src="https://user-images.githubusercontent.com/91838806/142975567-b4aaa48f-7bf3-4f52-9443-57a110b28b37.jpeg">
</p>
2. Permitir al usuario interactuar para obtener la infomación que necesita.

<p align="center">
  <img width="460" height="250" src="https://user-images.githubusercontent.com/91838806/142975542-2fd77978-6abd-4e77-b331-296043ba3063.jpeg">
</p>

3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
tamaños de pantallas: móviles, tablets y desktops.
<p align="center">
  <img width="260" height="600" src="https://user-images.githubusercontent.com/91838806/142975657-ac3db791-6aef-4895-aae4-924f3632d80d.jpeg">
</p>

4. Que la interfaz siga los fundamentos de _visual design_.
   Nuestro sistema cumple con los fundamentos de visual design, ya que mantenemos el contraste, la proximidad, la alineación, espaciado, entre otros para mantener un balance en el diseño.

## 8. Deploy Link

https://mirianalejandra1996.github.io/LIM016-data-lovers/src/index.html

## 9. Authors

- 🙎‍♀️ [Lucero Gonzales](https://github.com/lucerogoga)
- 🙎‍♀️ [Mirian Arevalo](https://github.com/mirianalejandra1996)

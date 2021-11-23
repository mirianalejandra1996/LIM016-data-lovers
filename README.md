# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

PokéCompany es una aplicación que muestra la data de los pokémones de manera interactiva. Esta aplicación está disponible en vista Desktop y en vista Mobile. 

Los usuarios se convierten en investigadores de Pokémon" y pueden:

-Visualizar las características únicas que determinan las decisiones que toma el usuario (tipo, debilidad, altura, CP, etc.)

-Los Pokémon tienen distintos tipos y debilidades de combate. Estas características son importantes
cuando el usuario elige al Pokémon más adecuado para su batalla. Hay veces que tiene que elegir a los que tienen menos cantidad de debilidades y saber de que tipo son. 

-El usuario puede ordenarlos por estas 2 características (tipo, debilidad), y puede personalizar 
la lista de pokemones del pokedex en orden alfabético (A-Z o de Z-A) o según número (superior o inferior)

-Los Pokémon evolucionan y es importante para un maestro Pokémon saber cuántas y cuáles son las evoluciones que tienen antes y después.

-Los Pokémon se alimentan de caramelos y un maestro Pokémon necesita saber qué tipo de caramelo necesita un Pokémon para evolucionar.

## 2. Resumen del proyecto

Aplicación de escritorio y móvil que permite al usuario visualizar y manipular la data de los pokemones, en una interfaz intuitiva que proporcione una agradable experiencia.

### Definición del producto

Se realizó una investigación para conocer al usuario y la problemática que presenta al momento de querer escoger algún, ya que se le complica y se vuelve tedioso la búsqueda del pokemón en un listado muy extenso, es por ello que la implementación de este sistema busca facilitar la búsqueda mediante filtros especiales, y selectores que permitirá organizar la data de pokemones de una manera más sencilla y efectiva.

### Historias de usuario

* HU01 - CARACTERÍSTICA (TIPO DE POKEMON) - Como: Entrenador Pokemón. Quiero: Saber de qué tipo es mi pokemón. Para: Poder Saber las características de mi pokemón (fuego, agua, electrico, etc)

* HU02 - DEBILIDAD DEL POKEMÓN - Cómo: Entrenador Pokemón. Quiero: Conocer las debilidades de mi pokemón. Para: poder definir una estrategia de pelea más efectiva (qué pokemón me conviene elegir para pelear)

* HU03 - CARACTERÍSTICAS (PESO Y TAMAÑO DEL POKEMÓN) - Como: Entrenador Pokemón. Quiero visualizar el peso y tamaño de mi pokemón. Para:  Obtener mayor detalles de su contextura.

* HU04 - EVOLUCIONES DE CADA POKEMON - Como: Entrenador Pokemón. Quiero visualizar la evoluciones pasadas y futuras de mi pokemón. Para: saber con qué pokemón cuento en el futuro.

* HU05 - ORDENAMIENTO DE 2 CARACTERÍSTICAS. Como: Entrenador Pokemón. Quiero: Filtrar a los pokemones que tienen menos cantidad de características (debilidades) y tipo. Para: Elegir el mejor pokemón para mis batallas.

* HU06 - Vista Móvil. Como: Entrenador Pokemón. Quiero visualizar en mi teléfono la aplicación. Para tener acceso en cualquier momento sin mi computador

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita.
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como
  [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## 7. Consideraciones técnicas


## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.


#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)


## 9. Checklist


* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.



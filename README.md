## ÍNDICE

- [1. PokeCompany](#1-pokeCompany)
- [2. Preámbulo](#2-preámbulo)
- [3. Resumen del proyecto](#3-resumen-del-proyecto)
- [4. Historias de Usuario](#4-historias-de-usuario)
- [5. Diseño de la Interfaz de Usuario](#5-consideraciones-generales)
- [6. Tecnologias empleadas](#6-hacker-edition)
- [7. Checklist](#7-checklist)

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

## 5 Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

El prototipo se basó en satisfacer las necesidades del usuario, es por ello que en nuestro prototipo de baja fidelidad se enfoca las siguientes .
Inspirado en el diseño flat design minimalista, con uso de paleta de colores verdes, y uso de tipografía "Poppins"

![paleta](https://user-images.githubusercontent.com/91838806/142975255-66aec199-2faa-4149-8d70-7ac203edecda.png)>

Vista Desktop

🖼️ Vista de Landing Page para visualizar a los pokemones destacados

<p align="center">
  <img width="460" height="300" src="https://user-images.githubusercontent.com/91838806/142973694-444ae707-4bbb-4734-a513-36c0d213efce.png">
</p>

🖼️ Vista Lista de los pokemones, con sección de buscado especial (filtros según tipo o debilidades, o por número o nombre del pokémon)

<p align="center">
  <img width="460" height="300" src="https://user-images.githubusercontent.com/91838806/142973959-77e86cbb-b050-4cb2-94c5-9db70a544e95.png">
</p>

🖼️ Vista Detalle, en el que visualiza datos básicos del pokemón

<p align="center">
  <img width="460" height="300" src="https://user-images.githubusercontent.com/91838806/142973731-6587723f-b0d7-4579-9c2b-885c94d5f550.png">
</p>

🖼️ Vista Detalle, en el que visualiza la evoluciones

<p align="center">
  <img width="460" height="300" src="https://user-images.githubusercontent.com/91838806/142973745-4acd9c55-2e5f-4814-a2d4-88cfa275de70.png">
</p>

🖼️ Vista Stats, en el que visualizará una gráfica de ciertos datos del pokemón seleccionado.

<p align="center">
  <img width="460" height="300" src="https://user-images.githubusercontent.com/91838806/142973758-63eda3a8-9b08-49b2-b2f7-e803cba50231.png">
</p>

#### Prototipo de alta fidelidad

Vista Desktop

Vista Landing Page
![data-lovers-definitivo](https://user-images.githubusercontent.com/91838806/142974266-fb7cb5ef-a6e4-4e59-8ae6-50ba4bf8afa4.png)

Visa Lista Pokedex
![data-lovers-definitivo2](https://user-images.githubusercontent.com/91838806/142974286-2b1c93ae-aec0-4a3c-af12-fef63406aa4c.png)

Visa Lista Pokedex (Tipo)
![data-lovers-definitivo3](https://user-images.githubusercontent.com/91838806/142974294-e0a6edb5-b0db-4f72-9937-e241696b3bac.png)

Vista Detalle Pokedex (Debilidades y SortBy)
![data-lovers-definitivo4](https://user-images.githubusercontent.com/91838806/142974307-4b237eec-b988-4476-b255-caa49737e915.png)

Vista Detalle Pokedex (About)
![data-lovers-definitivo5](https://user-images.githubusercontent.com/91838806/142974320-79236751-bd59-4920-88a5-cce29a85f9a8.png)

Vista Detalle Pokemon (Evoluciones Pikachu)
![data-lovers-definitivo6](https://user-images.githubusercontent.com/91838806/142974336-9f70f7a0-5f62-41ef-b86b-4013f3fac796.png)

Vista Detalle Pokedex (Stats)
![data-lovers-definitivo7](https://user-images.githubusercontent.com/91838806/142974346-32956ff2-cc5a-444a-a11a-75367e6d7c8c.png)

Vista Detalle Pokemon (Evoluciones Eevee)
![data-lovers-definitivo8](https://user-images.githubusercontent.com/91838806/142974354-4790d0b0-72bd-4695-acd2-b5fac7871e49.png)

Vista Mobile

Vista Landing
![WhatsApp Image 2021-11-23 at 00 06 07](https://user-images.githubusercontent.com/91838806/142974834-c73d39c2-da25-4bd8-a650-9b5cbd2b4da1.jpeg)

Vista Landing con navegador responsive
![WhatsApp Image 2021-11-23 at 00 06 23](https://user-images.githubusercontent.com/91838806/142974837-7f049021-809c-4140-9971-1e3fbfd7a53d.jpeg)

Vista Lista Pokedex
![WhatsApp Image 2021-11-23 at 00 06 33](https://user-images.githubusercontent.com/91838806/142974842-0cf4f36d-ca48-4185-8307-0ccfef7930f2.jpeg)

Vista Lista con Sección de Filtros desplegable
![WhatsApp Image 2021-11-23 at 00 06 44](https://user-images.githubusercontent.com/91838806/142974855-9510d23c-78b9-4dc3-8e51-4ce0b4b59530.jpeg)

Vista Detalle (descripción)
![WhatsApp Image 2021-11-23 at 00 06 55](https://user-images.githubusercontent.com/91838806/142974864-91300c31-c4bb-4dd6-b53c-a327120caf71.jpeg)

Vista Detalle (Evoluciones)
![WhatsApp Image 2021-11-23 at 00 07 07](https://user-images.githubusercontent.com/91838806/142974872-0fea8f40-b734-48d2-a8d0-5e03d81ddc42.jpeg)

## 6 Tecnologias empleadas

🎯JavaScript ES6 Vanilla
🎯HTML5
🎯CSS3
🎯Jest

#### Testeos de usabilidad

Mediante las presentaciones anteriores, recibimos feedbacks que nos permitió mejorar la experiencia al usuario, entre ellas destacaron:

-Los botones de tipo y Debilidades deben tener un reborde al momento de ser seleccionado.
-Los pokemones evolucionados pueden ser visualizados directamente en la misma vista

- Alineación de elementos para mantener la armonia visual.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
   ![WhatsApp Image 2021-11-23 at 00 30 45](https://user-images.githubusercontent.com/91838806/142975567-b4aaa48f-7bf3-4f52-9443-57a110b28b37.jpeg)
2. Permitir al usuario interactuar para obtener la infomación que necesita.
   ![WhatsApp Image 2021-11-23 at 00 09 27 (1)](https://user-images.githubusercontent.com/91838806/142975542-2fd77978-6abd-4e77-b331-296043ba3063.jpeg)

3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
   ![WhatsApp Image 2021-11-23 at 00 31 58](https://user-images.githubusercontent.com/91838806/142975657-ac3db791-6aef-4895-aae4-924f3632d80d.jpeg)

4. Que la interfaz siga los fundamentos de _visual design_.
   Nuestro sistema cumple con los fundamentos de visual design, ya que mantenemos el contraste, la proximidad, la alineación, espaciado, entre otros para mantener un balance en el diseño.

## Deploy Link

https://mirianalejandra1996.github.io/LIM016-data-lovers/src/index.html

//1. ALMACENAMIENTO DE LA CAJA CONTENEDORA
const charactersContainer = document.querySelector("#characters_container");

//2. ALMACENAMIENTO DE LA URL
const charactersURL = "https://starwars-server.vercel.app/characters";

let previousCharacters = "";

//3.ETAPA DE SINCRONISIDAD

const initCharacters = async () => {
  const characters = await getCharacters();
  mapCharacters(characters);
};

const getCharacters = async () => {
  const rawData = await fetch(charactersURL);
  const jsonData = await rawData.json();
  return jsonData;
};

//3. ETAPA DE MAPEO

const mapCharacters = (list) => {
  list.data.characters.map((item) => {
    return generateHTML({
      nombre: item.name,
      origen: item.origin,
      rol: item.role,
      imagen: item.image,
    });
  });
};

//4. ARMO HTML

const generateHTML = (item) => {
  console.log(item);
  const myFigure = ` 
  <figure class="figure_container">
    <h3>${item.nombre}</h3>
    <h4>${item.origen}</h4>
    <img src="${item.imagen}" alt="${item.nombre}" referrerpolicy="no-referrer"/>
    <h4>${item.rol}</h4>
    </figure>
    `;

  print(myFigure);
};

const print = (figure) => {
  charactersContainer.innerHTML += figure;
};

initCharacters();

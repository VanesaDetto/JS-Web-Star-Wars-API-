//1. ALMACENAMIENTO DE LA CAJA CONTENEDORA
const moviesContainer = document.querySelector("#movies_container");

//2. ALMACENAMIENTO DE LA URL
const moviesURL = "https://starwars-server.vercel.app/movies";

let previousMovies = "";

//3.ETAPA DE SINCRONISIDAD

const initmovies = async () => {
  const movies = await getMovies();
  mapMovies(movies);
};

const getMovies = async () => {
  const rawData = await fetch(moviesURL);
  const jsonData = await rawData.json();
  return jsonData;
};

//3. ETAPA DE MAPEO

const mapMovies = (list) => {
  list.data.movies.map((item) => {
    return generateHTML({
      numero: item.number,
      nombre: item.name,
      year: item.year,
      descripcion: item.crawl,
      poster: item.poster,
    });
  });
};

//4. ARMO HTML

const generateHTML = (item) => {
  const myFigure = `
  <figure class="card">
    <div class="face-back">
      <h3>${item.numero} - ${item.year}</h4>
      <h4>${item.nombre}</h3>
      <p>${item.descripcion}</p>
      <div class="link">
        <a href="#">Details</a>
      </div>
    </div>
    <div class="face-front">
      <img src= "${item.poster}" alt= "${item.nombre}" referrerpolicy="no-referrer"/>
    </div>
  </figure>
    `;
  print(myFigure);
};

const print = (figure) => {
  moviesContainer.innerHTML += figure;
};

initmovies();

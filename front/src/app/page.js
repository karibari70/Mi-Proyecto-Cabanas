// import Image from "next/image";
import "../styles/home.css";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Podés ajustar según lo que uses
  display: 'swap',
});


export default function Home() {
  return (

     <main className={roboto.className}>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/Imagenes/Inicio/inicio1.jpg"
              className="d-block w-100"
              alt="Imagen 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/Imagenes/Inicio/inicio2.jpg"
              className="d-block w-100"
              alt="Imagen 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/Imagenes/Inicio/inicio3.jpg"
              className="d-block w-100"
              alt="Imagen 3"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="contenedor1">
        <h2>BIENVENIDOS</h2>
        <p>
          En pleno Valle de El Bolsón, rodeados de bosque y montañas, Cabañas Arrayanes les da una cálida bienvenida. Contamos con 4 cabañas, para 4 y 6 personas. Construidas con piedra y madera, con increíbles vistas, piscina climatizada y hogar a leña. ¡Los esperamos en cualquier época del año!
        </p>
      </div>

      <div className="contenedor2">
        <div className="item_inicio">
          <h5>Naturaleza</h5>
          <img src="/Imagenes/Inicio/somosnaturaleza.jpg" alt="somos naturaleza" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, amet consequatur. Reprehenderit temporibus alias culpa iusto quod aperiam. Dicta ipsum debitis.
          </p>
        </div>

        <div className="item_inicio">
          <h5>Interior</h5>
          <img src="/Imagenes/Inicio/interiorjpg.jpg" alt="interior acogedor" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, amet consequatur. Reprehenderit temporibus alias culpa iusto quod aperiam. Dicta ipsum debitis.
          </p>
        </div>

        <div className="item_inicio">
          <h5>Piscina</h5>
          <img src="/Imagenes/Inicio/piscina.jpg" alt="piscina climatizada" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, amet consequatur. Reprehenderit temporibus alias culpa iusto quod aperiam. Dicta ipsum debitis.
          </p>
        </div>

        <div className="item_inicio">
          <h5>Descanso</h5>
          <img src="/Imagenes/Inicio/descanso.jpg" alt="zona de descanso" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, amet consequatur. Reprehenderit temporibus alias culpa iusto quod aperiam. Dicta ipsum debitis.
          </p>
        </div>
      </div>
    </main>
  );
}

   

  



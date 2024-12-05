import React from "react";
import { Link } from "react-router-dom";
import "../../index.css"; // Usa estilos específicos si es necesario

const CulturaIMA: React.FC = () => {
  return (
    <div className="container">
      <div className="info-asociacion">
        <img src="/img/Cultura_IMA.png" alt="Medios IMA" className="logo" />
        <div>
          <h1>Cultura IMA</h1>
          <h2>ASOCIACION</h2>
        </div>
      </div>
      <div className="main-content">
        <aside className="director-info">
          <img
            src="/img/sam.jpg"
            alt="Director General"
            className="director-photo"
          />
          <h2>Directora General</h2>
          <strong>
            <p>Avila Miguel Samanta Itayetzi</p>
          </strong>
          <h3>Contacto</h3>
          <a
            href="https://www.facebook.com/profile.php?id=100069721158270"
            className="contact-link"
          >
            Cultura IMA
          </a>
          <h3>Redes Sociales</h3>
          <div className="icon">
            <a href="https://www.facebook.com/profile.php?id=100069721158270">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.tiktok.com/@cultura_ima?_t=8r0ZYztljnR&_r=1">
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
          <br />
          <div>
            <button>
              <Link to="/artista">Nuestros Artistas</Link>
            </button>
          </div>
        </aside>
        <section className="about">
          <h2>Nosotros</h2>
          <h3>Descripcion</h3>
          <p>
            Fundado en marzo del 2022 con el Ballet folclórico “Ignacio Manuel
            Altamirano” en el centro universitario UAEM Texcoco, el cual nació
            con la finalidad de darle espacios de sana integración social a esta
            comunidad universitaria, durante esta etapa el ballet adquirió
            experiencia en la formación de bailarines presentado el trabajo
            realizado en lugares como: la escuela preparatoria oficial número
            188, la escuela preparatoria oficial número 100, en la expo Maíz
            2022 y la expo. Belleza 2022, ambos eventos celebrados en el Mercado
            Nacional de productores. <br />
            <br />
            Durante esta primera etapa es importante destacar el apoyo logístico
            y técnico que dimos a la escuela primaria estatal oficial “Narciso
            Mendoza” ubicada en la colonia el sol, en el municipio de
            Nezahualcóyotl Estado de México, para la formación de su ballet
            folclórico y la colaboración para la instauración de cursos de
            invierno en la biblioteca “Heriberto Enríquez Rodríguez, Ubicada en
            la colonia el pino, en el municipio de la Paz Estado de México, todo
            esto ocurrido en el primer año de nuestra fundación. <br />
            <br />
            En marzo del 2023 en el marco de nuestro primer año de integración,
            nace el proyecto “Medios. IMA” supeditando el trabajo cultural a la
            agenda de este nuevo proyecto, aún así continuamos creciendo, esto
            con la adhesión de la compaña universitaria de música, el día 23 de
            ese mismo mes también empieza sus funciones el Centro de desarrollo
            artístico “Luis Buñuel” gracias a un acuerdo celebrado entre el
            colectivo y la dirección del Centro Universitario UAEM Texcoco.{" "}
            <br />
            <br />
            En mayo de este año también se estrenó el “Ciclo de cine analítico”
            con el apoyo de catedráticos del centro universitario, esto con la
            finalidad de brindarles un espacio de pensamiento crítico a la
            juventud, aunque la apuesta más grande fue el inicio de
            colaboraciones con la Asociación civil “Cuauhcalli Chocholín A.C”
            para el establecimiento de “Centro cultural Cuauhcalli” en el
            municipio de Chimalhuacán estado de México, enviando apoyo técnico,
            mediático y logístico para el establecimiento de los talleres de
            música, danza, y filosofía aplicada, los cuales empezaron a
            funcionar en junio del año 2023. <br />
            <br />
            En septiembre del mismo año presentamos la gala artística “México
            lindo y querido” en la que presentamos un ensamble de música y danza
            mexicana para la inauguración y clausura de la “Expo. Pueblos
            mágicos” llevada a cabo en el Centro Universitario UAEM Texcoco, en
            octubre del mismo año participamos en el Recorrido Nocturno
            “Leyendas de CU. UAEM. Texcoco” donde presentamos un ensamble del
            estado de Veracruz, en el mismo mes también apoyamos a la
            licenciatura en ciencias políticas y administración pública del
            mismo centro universitario con un ensamble de danzas del estado de
            jalisco, para el intermedio un debate institucional. <br />
            <br />
            En noviembre cerramos nuestras actividades con el estreno de la gala
            “fiesta mexicana” presentada en la casona de Xicoténcatl, sede
            alterna del senado de la república, esto en el marco del inicio de
            actividades del “Congreso nacional de la ANECPAP” y un cuadro
            artístico en honor a Sinaloa, esto en el marco del 113 aniversario
            del inicio de la revolución mexicana, en la escuela preparatoria
            oficial del Estado de México número 188. <br />
            <br />
            <center>
              {" "}
              <strong>Cultura IMA: Arte que transforma.</strong>
            </center>
          </p>
        </section>
      </div>
    </div>
  );
};

export default CulturaIMA;

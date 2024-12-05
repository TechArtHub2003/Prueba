import React from "react";
import "../../index.css"; // Usa estilos específicos si es necesario

const MediosIMA: React.FC = () => {
  return (
    <div className="container">
      <div className="info-asociacion">
        <img src="/img/medIMA.png" alt="Medios IMA" className="logo" />
        <div>
          <h1>Medios IMA</h1>
          <h2>ASOCIACION</h2>
        </div>
      </div>
      <div className="main-content">
        <aside className="director-info">
          <img
            src="/img/mig.png"
            alt="Director General"
            className="director-photo"
          />
          <h2>Director General</h2>
          <strong>
            <p>Fabian Ortiz Miguel Alonso</p>
          </strong>
          <h3>Contacto</h3>
          <a href="#" className="contact-link">
            Medios IMA
          </a>
          <h3>Redes Sociales</h3>
          <div className="icon">
            <a href="https://www.facebook.com/libertaduaemtex001">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.tiktok.com/@mediosima?_t=8r0bVmJFy0T&_r=1">
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
        </aside>
        <section className="about">
          <h2>Nosotros</h2>
          <h3>Descripcion</h3>
          <p>
            Fundada el 28 de febrero del 2022 bajo el seudónimo de "Aires de
            libretad" buscando desde sus inicios, ser una opción informativa
            para las y los habitantes del oriente del Estado de México. <br />
            <br />
            Al trabajó qué se vio mermado por priorizar el trabajo cultural,
            trabajo que se retoma con la producción del programa “Panorama IMA”
            en abril del 2023, marcando así el nacimiento de este proyecto tal
            como lo conocemos. <br />
            <br />
            A lo largo de esta trayectoria se han integrado programas como "Sam
            & Sam" "IMA opina" siempre comprometidos con la pluralidad, la
            libertad de expresión y el respeto a la diversidad, dándole un
            espacio a las voces que conforman el día a día de la sociedad
            mexiquense. <br />
            <br />
            A lo largo de esta trayectoria hemos cubierto eventos, echo
            entrevistas, en las diversas colonias, parques, instituciones
            públicas, dándole voz a los actores qué forjan el acontecer de este
            país, llegando inclusive al cámara de senadores de la y la cámara de
            diputados, comprometidos siempre con la parcialidad y objetividad
            que nos exige el siglo XXI. <br />
            <br />
            <center>
              <strong>Medios IMA: Un Panorama Diferente.</strong>
            </center>
          </p>
        </section>
      </div>
    </div>
  );
};

export default MediosIMA;

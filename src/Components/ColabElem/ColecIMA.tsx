import React from "react";
import "../../index.css"; // Crea este archivo si necesitas estilos específicos para este componente.

const ColecIMA: React.FC = () => {
  return (
    <div className="container">
      {/* Sección del encabezado */}
      <div className="info-asociacion">
        <img src="/img/IMA.png" alt="Medios IMA" className="logo" />
        <div>
          <h1>Colectivo IMA</h1>
          <h2>FUNDADOR</h2>
        </div>
      </div>

      {/* Sección principal */}
      <div className="main-content">
        {/* Información del director */}
        <aside className="director-info">
          <img
            src="/img/huit.jpg"
            alt="Director General"
            className="director-photo"
          />
          <h2>Director General</h2>
          <strong>
            <p>Huitzilihuitl Reta Reyes</p>
          </strong>
          <h3>Contacto</h3>
          <a
            href="https://www.facebook.com/libertaduaemtex001"
            className="contact-link"
          >
            Colectivo IMA
          </a>
        </aside>

        {/* Sección de descripción */}
        <section className="about">
          <h2>Nosotros</h2>
          <h3>Descripcion:</h3>
          <p>
            <strong>Visión :</strong> Convertirnos en un medio social, que
            impulse diversos proyectos, siempre en beneficio de la sociedad
            mexicana siempre a la vanguardia, apoyando, respetando y
            fortaleciendo los tejidos sociales, para la formación de una
            ciudadanía respetuosa, incluyente, inovadora y siempre receptiva a
            un mundo en constante cambio.
          </p>
          <p>
            <strong>Misión :</strong> Apoyar y fortalecer, en conjunto a los
            diversos actores sociales, proyectos en pro de la sociedad, buscando
            colaborar con instituciones, públicas, privadas y de la sociedad
            civil, para impulsar redes de apoyo buscando apoyar en la creación
            de ambientes sanos y plurales.
          </p>
          <p>
            Como director artístico del colectivo cultural Ixueskatok, gestione
            vestuarios al ayuntamiento municipal de la paz, así como
            presentaciones den distintas organizaciones de carácter público y
            privado siendo la gira más importante, una realizada a la mixteca
            poblana, lo que es muestra de la calidad que se logró. <br /> <br />
            Desde la dirección general de Medios. IMA, he impulsado acuerdos con
            distintas organizaciones para la difusión de el arte en las
            comunidades más económicamente vulnerables. <br />
            <br />
            -Con la CMS sección los reyes la paz, se estableció un acuerdo para
            realizar cursos de invierno de música y danza en diciembre del 2022.{" "}
            <br />
            <br />
            - En mayo del 2023 establecimos un acuerdo de colaboración con la
            asociación civil CHUAUCHALLI - CHOCOLLIN A.C para el establecimiento
            de talleres en Chimalhuacán. <br />
            <br />
            - En noviembre del 2023 llegamos a un acuerdo con la ANECPAP
            (Asociación Nacional de Estudiantes de Ciencias Políticas y
            Administración Pública), para dar cobertura a su proceso de
            elecciones y el congreso nacional llevado a cabo en la CDMX, en las
            instalaciones del senado de la república. <br />
            <br />
            <br />
            Durante mi estancia en la dirección general de Medios. IMA, he
            logrado diversificar la oferta mediática con programas como
            “Panorama IMA”, estrenado en mayo del 2023 y “Sam & Sam” estrenado
            en julio del 2023. <br />
            <br />
            También la oferta cultural se diversifico, con la formación de una
            compañía artística, una de música y una de danza, que han impulsado
            artistas emergentes, cantando boleros, canciones rancheras, pop,
            rock y bailando tangos, música regional mexicana, jazz, música
            alternativa, etc.… muestra de este gran avance han sido las
            invitaciones para demostrar el potencial artístico de esta compañía
            artística. <br />
            <br />- En abril del 2023 la compañía artística se presentó en el
            auditorio “Arturo Márquez” de la faro, invitados por el ayuntamiento
            de Texcoco en conmemoración del día internacional de la danza.{" "}
            <br />
            <br />
            - En septiembre del 2022 fuimos invitados a la expo maíz del mercado
            nacional de productores en Texcoco.
            <br />
            <br />
            - En noviembre del 2023 fuimos invitados por la dirección de la
            escuela preparatoria numero 188, en el marco del 113 aniversario de
            la revolución mexicana. <br />
            <br />
            - En octubre del 2022 fuimos invitados por la dirección de la
            escuela preparatoria número 100 en su festival “recordando a los
            muertos” <br />
            <br />
            - En octubre del 2022 también fuimos invitados por la escuela
            primaria narciso Mendoza en Nezahualcóyotl estado de México. <br />
            <br />- En febrero del 2024 fuimos invitados por la dirección de la
            escuela primaria Melchor Ocampo en el marco de su aniversario.{" "}
            <br />
            <br />
            Este proyecto ha demostrado su potencial, y estamos en una etapa de
            crecimiento, dispuestos a colaborar con organizaciones públicas,
            privadas, qué estén comprometidas con una sociedad más humana,
            justa, solidaria u tolerante. <br />
            <br />
            <br />
            <center>
              {" "}
              <strong>
                {" "}
                En colectivo IMA estamos comprometidos a rescatar la memoria de
                nuestro pasado, moldear nuestro presente y proyectar un futuro
                formidable.
              </strong>
            </center>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ColecIMA;

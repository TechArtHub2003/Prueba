import React from "react";
import "../CompCss/ArtistasIMA.css"; // Usa estilos específicos si es necesario

const ArtistasIMA: React.FC = () => {
  return (
    <div className="artistasima-container">
      <div className="artistasima-info-asociacion">
        <img
          src="/img/Cultura_IMA.png"
          alt="Medios IMA"
          className="artistasima-logo"
        />
        <div>
          <h1>Cultura IMA</h1>
          <h2>ARTISTAS</h2>
        </div>
      </div>
      <div className="artistasima-main-content">
        {/* Sección de artistas */}
        <section className="artistasima-artistas">
          {/* Artista 1 */}
          <div className="artistasima-artista">
            <div className="artistasima-video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1U084oZVonU?si=Ao-L3bb8IJJWL6H5&controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="artistasima-datos-artista">
              <h3>Nombre Del Artista</h3>
              <p>
                <strong>Género:</strong> <br /> Música Folclórica
              </p>
              <p>
                <strong>Redes Sociales:</strong>
              </p>
              <div className="artistasima-social-icons">
                <a
                  href="https://www.facebook.com/juanperez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i> Facebook
                </a>
                <a
                  href="https://www.instagram.com/juanperez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Artista 2 */}
          <div className="artistasima-artista">
            <div className="artistasima-video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1U084oZVonU?si=Ao-L3bb8IJJWL6H5&controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="artistasima-datos-artista">
              <h3>Nombre Del Artista</h3>
              <p>
                <strong>Género:</strong> <br /> Danza Folklórica
              </p>
              <p>
                <strong>Redes Sociales:</strong>
              </p>
              <div className="artistasima-social-icons">
                <a
                  href="https://www.facebook.com/mariagonzalez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i> Facebook
                </a>
                <a
                  href="https://www.tiktok.com/@mariagonzalez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-tiktok"></i> TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Artista 3 */}
          <div className="artistasima-artista">
            <div className="artistasima-video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1U084oZVonU?si=Ao-L3bb8IJJWL6H5&controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="artistasima-datos-artista">
              <h3>Nombre Del Artista</h3>
              <p>
                <strong>Género:</strong> <br /> Música Mexicana
              </p>
              <p>
                <strong>Redes Sociales:</strong>
              </p>
              <div className="artistasima-social-icons">
                <a
                  href="https://www.facebook.com/joserodriguez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i> Facebook
                </a>
                <a
                  href="https://www.instagram.com/joserodriguez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArtistasIMA;

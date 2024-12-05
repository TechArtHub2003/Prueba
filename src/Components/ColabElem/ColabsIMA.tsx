import React from "react";
import "../CompCss/ColabsIMA.css";

// Definimos las propiedades de cada tarjeta
interface CardProps {
  imageSrc: string;
  title: string;
  phone: string;
  address: { label: string; url: string };
  description: string;
}

// Función para copiar el número de teléfono al portapapeles
const copyPhoneToClipboard = (phone: string) => {
  navigator.clipboard.writeText(phone).then(
    () => {
      alert("Número de teléfono copiado al portapapeles!");
    },
    (err) => {
      console.error("Error al copiar al portapapeles: ", err);
    }
  );
};

// Función para detectar si el usuario está en un dispositivo móvil
const isMobile = () => {
  const userAgent =
    navigator.userAgent || navigator.vendor || (window as any).opera;
  return /android/i.test(userAgent) || /iphone|ipod/i.test(userAgent);
};

// Componente de tarjeta individual
const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  phone,
  address,
  description,
}) => {
  // Función para manejar el clic en el número de teléfono
  const handlePhoneClick = (phone: string) => {
    if (isMobile()) {
      // Si estamos en un móvil, redirigir a la aplicación de teléfono
      const telLink = `tel:${phone}`;
      window.location.href = telLink; // Esto abrirá la aplicación de teléfono
    } else {
      // Si estamos en un PC, copiar al portapapeles
      copyPhoneToClipboard(phone);
    }
  };

  return (
    <div className="colab-card">
      <img src={imageSrc} alt={title} className="colab-card-image" />
      <div className="colab-card-content">
        <h3 className="colab-card-title">{title}</h3>
        <p className="colab-card-description">{description}</p>
        <center>
          <p
            className="colab-card-info"
            onClick={() => handlePhoneClick(phone)} // Al hacer clic se ejecuta la función
          >
            <strong>Teléfono:</strong>
            <br /> {phone}
          </p>
        </center>
        {/* Dirección como enlace */}
        <p className="red-so">
          <strong>Facebook</strong> <br />
          <br />
          <a href={address.url} target="_blank" rel="noopener noreferrer">
            {address.label}
          </a>
        </p>
      </div>
    </div>
  );
};

// Componente principal de ColabsIMA
export const ColabsIMA: React.FC = () => {
  // Datos de las tarjetas
  const cards: CardProps[] = [
    {
      imageSrc: "/img/colab_IMA/logo1.png",
      title: "Rehabilitando tu Salud A.C.",
      phone: "+52-5569164378",
      address: {
        label: "Rehabilitando tu Salud A.C.",
        url: "https://www.facebook.com/profile.php?id=61567436491164&mibextid=ZbWKwL",
      },
      description: "Una organización dedicada a mejorar la calidad de vida.",
    },
    {
      imageSrc: "/img/colab_IMA/logo2.png",
      title: "Amemus",
      phone: "+52-5560432340",
      address: {
        label: "Amemus",
        url: "https://www.facebook.com/Amemus.Mx?mibextid=ZbWKwL",
      },
      description: "Promoviendo el amor y apoyo mutuo en la comunidad.",
    },
    {
      imageSrc: "/img/colab_IMA/logo3.png",
      title: "Ruta5",
      phone: "+52-5551430100",
      address: {
        label: "Ruta 5 EdoMéx ",
        url: "https://www.facebook.com/profile.php?id=100095696015804&mibextid=ZbWKwL",
      },
      description: "Generando oportunidades para el desarrollo social.",
    },
    {
      imageSrc: "/img/colab_IMA/logo4.png",
      title: "Escuela Primaria Francisco Villa",
      phone: "+52-5618677295",
      address: {
        label: "Primaria Francisco Villa",
        url: "https://www.facebook.com/profile.php?id=61550945670576&mibextid=ZbWKwL",
      },
      description: "Educando a las generaciones del mañana.",
    },
  ];

  return (
    <div className="colabs-grid">
      {cards.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          phone={card.phone}
          address={card.address}
          description={card.description}
        />
      ))}
    </div>
  );
};

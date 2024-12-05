import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export const SectionButtons: React.FC = () => {
  return (
    <div className="section-buttons">
      <div className="button">
        <div className="circle">
          <Link to="/cultura">
            <img
              src="/img/Cultura_IMA.png"
              alt="culturaIMA"
              className="culturaIMA"
            />
          </Link>
        </div>
        <button className="bt">
          <Link to="/cultura">Cultura IMA</Link>
        </button>
      </div>
      <div className="button">
        <div className="circle">
          <Link to="/medios">
            <img src="/img/medIMA.png" alt="mediosIMA" className="mediosIMA" />
          </Link>
        </div>
        <button className="bt">
          <Link to="/medios">Medios IMA</Link>
        </button>
      </div>
    </div>
  );
};

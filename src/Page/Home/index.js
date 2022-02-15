import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./style.css";
import Graf1 from "../../components/Grafico";
import Graf2 from "../../components/Grafico2";
import Graf3 from "../../components/Grafico3";
import Graf4 from "../../components/Grafico4";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="containerhome">
        <div className="coluna">
          <div className="grafico">
            <p className="titulografico">Velocidade de Rotação</p>
            <Graf1 />
          </div>
          <div className="grafico">
            <p className="titulografico">Aquecimento da maquina</p>
            <Graf2 />
          </div>
        </div>
        <div className="coluna">
          <div className="grafico">
            <p className="titulografico">Velocidade de avanço</p>
            <Graf3 />
          </div>

          <div className="grafico">
            <p className="titulografico">Registros</p>
            <Graf4 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

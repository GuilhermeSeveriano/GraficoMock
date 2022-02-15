import "./index.css";
import logoSenai from "../../assets/img/logo-senai.jpg"
import suicobrasileiro from "../../assets/img/suicobrasil.png"

const Navbar = () => {
  return (
    <navbar className="cabecalho mt-auto py-3 bg-dark d-flex">
      <div className="container geral">
        <div className="logo"><img src={logoSenai} alt="logo senai" /></div>
        <div className="suicobrasil"><img src={suicobrasileiro} alt="bandeira brasileira com a bandeira da suiça" />/SuiçoBrasileira</div>
      </div>
    </navbar>
  );
};
export default Navbar;

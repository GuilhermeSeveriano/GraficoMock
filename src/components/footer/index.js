import './style.css'

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container d-flex p-2 d-flex flex-column align-items-center">
        <p className="text-light">
            Feito por{" "}
          <a className="cor" href="https://github.com/GuilhermeSeveriano" rel="noreferrer" target="_blank" >
            Guilherme Severiano
          </a>
        </p>
        <p className="text-light"><a className='cor' href='https://suicobrasileira.sp.senai.br/' alt="" rel="noreferrer"target="_blank"> Escola Senai Suíço-Brasileira Paulo Ernesto Tolle</a></p>
      </div>
    </footer>
  );
};

export default Footer;

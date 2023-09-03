import { Link } from "react-router-dom";

const Accueil = () => {
  return (
    <>
      <div>
        <section className="section1">
          <div className="overlay">
            <div className="content">
              <h2>Découvre tous les personnages</h2>
              <p>Explore une vaste galerie de personnages Marvel.</p>
              <Link className="link-home" to="/characters">
                Découvrir
              </Link>
            </div>
          </div>
        </section>

        <section className="section2">
          <div className="overlay">
            <div className="content">
              <h2>Explore les comics</h2>
              <p>Plonge dans l'univers fascinant des comics Marvel.</p>
              <Link className="link-home" link-home to="/comics">
                Découvrir
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Accueil;

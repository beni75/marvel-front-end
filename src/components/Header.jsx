import Logo from "../assets/marvel-logo.svg";
import { Link } from "react-router-dom";

const Header = ({ token, handleToken }) => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header-top-logo">
          <img style={{ width: "130px" }} src={Logo} alt="Logo Marvel" />
        </div>
      </Link>

      <div className="header-link-container">
        <Link className="link" to="/characters">
          Personnages
        </Link>
        <Link className="link" to="/comics">
          Comics
        </Link>
        {token ? (
          <>
            <Link className="link-favorite" to="/favorites">
              Mon dashboard
            </Link>
            <Link
              className="link-disconnect"
              onClick={() => {
                handleToken(null);
              }}
            >
              Déconnexion
            </Link>
          </>
        ) : (
          <>
            <Link className="link" to="/signup">
              S'inscrire
            </Link>
            <Link className="link" to="/login">
              Se connecter
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

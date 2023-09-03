import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://site--marvel-back-end--7hx8pjwzyskf.code.run/characters?name=${search}`
      );
      setCharacters(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <div className="loading-container">
      <div className="loading-spinner"></div>
    </div>
  ) : (
    <>
      <section className="section-characters-bottom">
        <div className="characters-bottom-wrapper">
          <h1 style={{ textAlign: "center" }}>Les personnages de Marvel</h1>
          <form>
            <input
              className="characters-input"
              type="text"
              placeholder="Recherche ton personnage préféré"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </form>
        </div>
      </section>

      <section className="character-section">
        {characters.map((character) => {
          const imagePath = `${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`;

          return (
            <div key={character.id} className="card">
              <Link to={`/character/${character.id}`}>
                <img src={imagePath} alt={character.name} />
              </Link>
              <h2>{character.name}</h2>
              <p>{character.description}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Characters;

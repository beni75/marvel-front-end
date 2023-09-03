import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://site--marvel-back-end--7hx8pjwzyskf.code.run/characters?name=${search}`
      );
      setCharacters(response.data);
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
          <form onSubmit={handleSubmit}>
            <input
              className="characters-input"
              type="text"
              placeholder="Recherche ton personnage préferé"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </form>
        </div>
      </section>
      <section className="character-section">
        {characters.results.map((character) => {
          const imagePath = `${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`;

          return (
            <div key={character._id} className="card">
              <Link to={`/character/${character._id}`}>
                <img src={imagePath} alt={character.name} />{" "}
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

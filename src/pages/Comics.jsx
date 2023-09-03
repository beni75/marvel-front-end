import axios from "axios";
import { useState, useEffect } from "react";

const Comics = () => {
  const [comics, setComics] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 100;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://site--marvel-back-end--7hx8pjwzyskf.code.run/comics?title=${search}&limit=${itemsPerPage}&skip=${
          (currentPage - 1) * itemsPerPage
        }`
      );
      setComics(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [search, currentPage]);

  return isLoading ? (
    <div className="loading-container">
      <div className="loading-spinner"></div>
    </div>
  ) : (
    <>
      <section className="section-characters-bottom">
        <div className="characters-bottom-wrapper">
          <h1 style={{ textAlign: "center" }}>Les comics de Marvel</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="comics-input"
              type="text"
              placeholder="Recherche ton comics"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </form>
          <div className="comics-btn-navigation-container">
            <button
              className="pagination-button"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Précédent
            </button>
            <span>Page {currentPage}</span>
            <button
              className="pagination-button"
              onClick={handleNextPage}
              disabled={comics.results.length < itemsPerPage}
            >
              Suivant
            </button>
          </div>
        </div>
      </section>
      <section className="character-section">
        {comics.results.map((comic) => {
          const imagePath = `${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`;
          return (
            <div key={comic._id} className="card">
              <img src={imagePath} alt={comic.title} />
              <h2>{comic.title}</h2>
              <p>{comic.description}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Comics;

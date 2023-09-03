import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const [characterData, setCharacterData] = useState({});
  const [comicsData, setComicsData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://site--marvel-back-end--7hx8pjwzyskf.code.run/character/${id}`
        );

        console.log(response);
        setCharacterData(response.data);

        const comicsIds = await response.data.comics;
        console.log(comicsIds);

        const comicsResponse = await Promise.all(
          comicsIds.map((comicId) =>
            axios.get(
              `http://site--marvel-back-end--7hx8pjwzyskf.code.run/comic/${comicId}`
            )
          )
        );
        const comicsDetails = comicsResponse.map(
          (comicResponse) => comicResponse.data
        );
        console.log(comicsResponse);
        setComicsData(comicsDetails);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="loading-container">
      <div className="loading-spinner"></div>
    </div>
  ) : (
    <section>
      <h1>Comics liés au personnage:</h1>
      {comicsData.map((comic) => (
        <div key={comic._id}>{comic.title}</div>
      ))}
    </section>
  );
};

export default Details;

import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

const Accueil = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <>
      <div>
        <swiper-container
          ref={swiperElRef}
          slides-per-view="1"
          navigation="true"
          pagination="true"
          effect="coverflow"
        >
          <swiper-slide>
            <section className="section-container">
              <div className="section1 over">
                <div className="section-contents-wrapper front">
                  <h2>Découvre tous les personnages</h2>
                  <p>Explore une vaste galerie de personnages Marvel</p>
                  <Link className="link-home" to="/characters">
                    Découvrir
                  </Link>
                </div>
              </div>
            </section>
          </swiper-slide>

          <swiper-slide>
            <section className="section-container">
              <div className="section2 over">
                <div className="section-contents-wrapper front">
                  <h2>Explore les comics</h2>
                  <p>Plonge dans l'univers fascinant des comics Marvel</p>
                  <Link className="link-home" link-home to="/comics">
                    Découvrir
                  </Link>
                </div>
              </div>
            </section>
          </swiper-slide>
        </swiper-container>
      </div>
    </>
  );
};

export default Accueil;

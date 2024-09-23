import "./NewRelease.css";
import data from "../data/new-release.js";
import Caraousel from "./atomic/Carousel.jsx";

function NewRelease() {
  const cardItems = data.map((item) => {
    return (
      <div className="card top-rating" key={item.id}>
        <img src={item.src} alt={item.alt} className="card__top-rating-img" />
      </div>
    );
  });
  return (
    <section className="section">
      <h2 className="section__title">Rilis Baru</h2>
      <Caraousel cardItems={cardItems} />
    </section>
  );
}
export default NewRelease;

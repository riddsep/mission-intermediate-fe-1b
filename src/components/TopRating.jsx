import "./TopRating.css";
import data from "../data/top-rating.js";
import Caraousel from "./atomic/Carousel.jsx";

function TopRating() {
  const cardItems = data.map((item) => {
    return (
      <div className="card top-rating" key={item.id}>
        <img src={item.src} alt={item.alt} className="card__top-rating-img" />
      </div>
    );
  });
  return (
    <section className="section">
      <h2 className="section__title">Top Rating Film dan Series Hari ini</h2>
      <Caraousel cardItems={cardItems} />
    </section>
  );
}
export default TopRating;

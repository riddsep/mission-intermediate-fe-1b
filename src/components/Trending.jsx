import "./Trending.css";
import data from "../data/trending.js";
import Caraousel from "./atomic/Carousel.jsx";

function Trending() {
  const cardItems = data.map((item) => {
    return (
      <div className="card top-rating" key={item.id}>
        <img src={item.src} alt={item.alt} className="card__top-rating-img" />
      </div>
    );
  });
  return (
    <section className="section">
      <h2 className="section__title">Film Trending</h2>
      <Caraousel cardItems={cardItems} />
    </section>
  );
}
export default Trending;

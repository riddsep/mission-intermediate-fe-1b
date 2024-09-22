import "./TopRating.css";
import data from "../data/top-rating.js";

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
      <div className="wrapper">
        <img src="/images/arrow-left.svg" alt="" className="scroll-left" />
        <div className="card__list">{cardItems}</div>
        <img src="/images/arrow-right.svg" alt="" className="scroll-right" />
      </div>
    </section>
  );
}
export default TopRating;

import "./Continue.css";
import data from "../data/film";

function Continue() {
  const cardItems = data.map((item) => {
    return (
      <div className="card continue" key={item.id}>
        <img src={item.src} alt={item.alt} className="card__img" />
        <div className="card__info">
          <div className="card__info__title">{item.title}</div>
          <div className="card__info__rating">&#9733; {item.rating}/5</div>
        </div>
      </div>
    );
  });
  return (
    <section className="section">
      <h2 className="section__title">Melanjutkan Tonton Film</h2>
      <div className="wrapper">
        <img src="/images/arrow-left.svg" alt="" className="scroll-left" />
        <div className="card__list">{cardItems}</div>
        <img src="/images/arrow-right.svg" alt="" className="scroll-right" />
      </div>
    </section>
  );
}
export default Continue;

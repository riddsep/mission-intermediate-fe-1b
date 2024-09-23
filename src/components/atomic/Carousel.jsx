import "./Carousel.css";

function Caraousel(props) {
  return (
    <div className="wrapper">
      <img src="/images/arrow-left.svg" alt="" className="scroll-left" />
      <div className="card__list">{props.cardItems}</div>
      <img src="/images/arrow-right.svg" alt="" className="scroll-right" />
    </div>
  );
}

export default Caraousel;

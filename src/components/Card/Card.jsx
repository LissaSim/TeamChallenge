<<<<<<< HEAD
import '../../scss/general.scss'
import './Card.scss'
import Stars from '../Stars/Stars'
import imgcard from '../../images/card1.jpg'
import heart from '../../images/heart.svg'


function Card() {
  return (
    <article className="card">
      <div className="card__img">
        <img src={imgcard} alt="" />
      </div>
      <div className="card__body">
        <div className="card__body-desc">
          <h4>Javascript for Beginners Learn</h4>
        </div>
        <div className="card__rait">
          <Stars />
          <div className="card__cost">
            <span>$69,99 </span>
            <span>
              <img src={heart} alt="heart" width="24"/>
            </span>
          </div>
        </div>
        <div className="card__text">
          <p>
            Аналітик — це спеціаліст, який розкладає дані на складові, щоб
            знайти відповіді на запитання, які хвилюють бізнес
            Аналітик — це спеціаліст, який розкладає дані на складові, щоб
            знайти відповіді на запитання, які хвилюють бізнес
          </p>
        </div>
      </div>
    </article>
  )
}
export default Card
=======

import "../../scss/general.scss";
import "./Card.scss";
import Stars from "../Stars/Stars";
import heart from "../../images/heart.svg";

const Card = (props) => {
  const { title, price, img, rating } = props;

  return (
      <article className="card">
        <div className="card__img">
          <img src={img} alt="" />
        </div>
        <div className="card__body">
          <div className="card__body-desc">
            <h4>{title}</h4>
          </div>
          <div className="card__rait">
            <Stars />
            {rating}
            <div className="card__cost">
              <span>{price}</span>
              <span>
                <img src={heart} alt="heart" width="24" />
              </span>
            </div>
          </div>
          <div className="card__text">
            <p>
              Аналітик — це спеціаліст, який розкладає дані на складові, щоб
              знайти відповіді на запитання, які хвилюють бізнес. Аналітик — це
              спеціаліст, який розкладає дані на складові, щоб знайти відповіді
              на запитання, які хвилюють бізнес.
            </p>
          </div>
        </div>
      </article>
  );
}

export default Card;

>>>>>>> master

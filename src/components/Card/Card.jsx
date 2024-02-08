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
                    <div className="card__rait-star">
                        <span>{rating}</span>
                        <Stars />
                    </div>
                    <div className="card__cost">
            <span>
              {price}
                <span className="card__cost-sale">sale</span>
            </span>
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
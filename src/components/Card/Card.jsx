import "../../scss/general.scss";
import "./Card.scss";
import Stars from "../Stars/Stars";

const Card = (props) => {
    const {title, price, img, rating, sale} = props;

    return (
        <article className="card">
            <div className="card__img">
                <img src={img} alt=""/>
            </div>
            <div className="card__body">
                <div className="card__body-desc">
                    <h4>{title}</h4>
                </div>
                <div className="card__rait">
                    <div className="card__rait-star">
                        <span>{rating}</span>
                        <Stars/>
                    </div>
                    <div className="card__cost">
            <span>
              {price}
                <span className="card__cost-sale">{price === 'Free' ? null : sale}</span>
            </span>
                        <span>
                            <button className="header__btns-heart">
                        <svg width="25" stroke="#5D59FF" height="23" viewBox="0 0 32 30" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="&#240;&#159;&#166;&#134; icon &#34;heart&#34;">
                                <path id="Vector"
                                      d="M30 10.2296C30 12.4937 29.1687 14.6684 27.6841 16.2771C24.2669 19.9813 20.9524 23.8439 17.4074 27.4139C16.5949 28.2203 15.3059 28.1908 14.5283 27.348L4.31526 16.2771C1.22825 12.9307 1.22825 7.52841 4.31526 4.18208C7.43261 0.802873 12.5111 0.802873 15.6284 4.18208L15.9997 4.58448L16.3707 4.18232C17.8654 2.56127 19.901 1.64697 22.0274 1.64697C24.1539 1.64697 26.1893 2.56119 27.6841 4.18208C29.1688 5.7909 30 7.96549 30 10.2296Z"
                                      stroke-width="3" stroke-linejoin="round"/>
                            </g>
                        </svg>


                    </button>
            </span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Card;

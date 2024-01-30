import "../../scss/general.scss";
import "./CardPopularArticles.scss";

const CardPopularArticles = ({id, img, name, description}) => {

    return (
        <article className="card" key={id}>
            <div className="card__img">
                <img src={img} alt=""/>
            </div>
            <div className="card__body">
                <div className="card__body-desc">
                    <h4>{name}</h4>
                </div>
                <div className="card__text">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default CardPopularArticles;


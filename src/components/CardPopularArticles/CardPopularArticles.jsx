import "../../scss/general.scss";
import "./CardPopularArticles.scss";

const CardPopularArticles = ({img, name, description}) => {

    return (
        <article className="card">
            <div>
                <img src={img} alt="" style={{width: "310px", height: "200px"}}/>
            </div>
            <div className="card__body">
                <div className="card__body-desc">
                    <h4>{name}</h4>
                </div>
                {/*<div className="card__text">*/}
                {/*    <p>*/}
                {/*        {description}*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
        </article>
    )
}

export default CardPopularArticles;


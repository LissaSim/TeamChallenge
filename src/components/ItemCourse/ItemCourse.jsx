import './ItemCourse.scss';
import Stars from '../Stars/Stars';
export const ItemCourse = ({price, img, avgRate, title, discount}) => {
    const discountPrice = discount ? <div><h5>{discount}</h5> <h4 className='price__discount'>{price}</h4></div> : null;
    const actualPrice = !discount ? <h5>{price}</h5> : null
    return (
        <article className="itemCourse">
            <div className="itemCourse__imag">
                <img src={img} alt=""/>
            </div>
            <div className="itemCourse__inner">
                <div className="itemCourse__desc">
                    <div className="itemCourse__text">
                        <h4>{title}</h4>
                        <div className="itemCourse__raite">
                            <span>{avgRate}</span>
                            <Stars/>
                        </div>

                    </div>
                    <div className="itemCourse__price">
                        {discountPrice}
                        {actualPrice}
                    </div>

                </div>
            </div>
        </article>
    )
}
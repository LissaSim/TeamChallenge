import './ItemCourse.scss';
import fon from './fon.png'
import Stars from '../Stars/Stars';
export const ItemCourse = () => {
    return (
        <article className="itemCourse">
            <div className="itemCourse__imag">
                <img src={fon} alt="" />
            </div>
            <div className="itemCourse__inner">
                <div className="itemCourse__desc">
                    <div className="itemCourse__text">
                    <h4>Javascript for Beginners</h4>
                    <p>Вивчіть javascript онлайн і покращіть свій веб-дизайн
                        за допомогою цього навчального курсу Javascript
                        для початківців.
                    </p>
                    <div className="itemCourse__raite">
                        <span>4,6</span>
                    <Stars/>
                    </div>
                 
                    </div>
                    <div className="itemCourse__price">
                        <h5>$69,99 </h5>

                    </div>
                   
                </div>
            </div>
        </article>
    )
} 
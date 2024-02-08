import './ItemCourse.scss';
import fon from './fon.png';
import Stars from '../Stars/Stars';
import Label from '../Label/Label';
import beginner from '../../assets/img/beginner.svg'; 
          
             

export const ItemCourse = ({price, sale, raite, name}) => {
    return (
        <article className={`itemCourse ${sale? 'active': ''}`}>
            <div className="itemCourse__imag">
                <img src={fon} alt="" />
            </div>
            <div className="itemCourse__inner">
                <div className="itemCourse__desc">
                    <div className="itemCourse__text">
                    <h4>{name}</h4>
                    <p>Вивчіть javascript онлайн і покращіть свій веб-дизайн
                        за допомогою цього навчального курсу Javascript
                        для початківців.
                    </p>
                    <Label img={beginner} text='Beginner'/>
                    <div className="itemCourse__raite">
                        <span>{raite}</span>
                    <Stars/>
                    </div>
                 
                    </div>
                    <div className="itemCourse__price">
                        <h5>{ sale? sale: price} </h5>
                        <span>{ sale? price: ''}</span>

                    </div>
                   
                </div>
            </div>
        </article>
    )
} 
import './courseBanner.scss';
import Stars from '../Stars/Stars';
import Button from '../Button/Button';
import { useState } from 'react';

import img from './img.png';

const CourseBanner = (props) => {
const {btnName} = props;
    return (
        <section className="courseBanner">
            <div className="courseBanner__wrap">
                <div className="courseBanner__inner">
                    <div className="courseBanner__block">
                        <h1 className="title-block">Javascript for Beginners</h1>
                        <p>Вивчіть javascript онлайн і покращіть свій веб-дизайн за допомогою цього навчального курсу Javascript для початківців.</p>
                        <div className="courseBanner__raite">
                            <Stars />
                            <span>(2,620 ratings)</span>
                        </div>
                    </div>
                    <div className="courseBanner__block">

                        <div className="courseBanner__cost">
                            <span className="courseBanner__cost-sale">
                                $11,99
                            </span>
                            <span className="courseBanner__cost-full">$69,99 </span>
                        </div>
                        <Button  content={btnName} classStyle='button--full'/> 

                    </div>

                </div>
                <div className="courseBanner__inner">
                    <div className="courseBanner__img">
                        <img src={img} alt="" />
                    </div>

                </div>
            </div>

        </section>
    )
};
export default CourseBanner;
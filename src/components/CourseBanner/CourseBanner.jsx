import './CourseBanner.scss';
import Stars from '../Stars/Stars';
import Button from '../Button/Button';
import certificate from '../../assets/img/certificate.svg';
import beginner from '../../assets/img/beginner.svg';
import Label from '../Label/Label';
import {Link} from "react-router-dom";

const CourseBanner = ({btnName, title, raiting, hasCertificate, img, price, level, discount, courseUrl, headline}) => {
    const getCertificate = hasCertificate ? <Label img = {certificate} text ='Сертифікат' /> : null;
    const forBeginners = level === "Beginner Level" || "All Levels" ?  <Label img = {beginner} text ='Beginner' /> :  <Label img = {beginner} text ='Advanced' />

    return (
        <section className="courseBanner">
            <div className="courseBanner__wrap">
                <div className="courseBanner__inner">
                    <div className="courseBanner__block">
                        <h1 className="title-block">{title}</h1>
                        <p>{headline}</p>
                        <div className="courseBanner__raite">
                            <span>{raiting}</span>
                            <Stars />
                            <span>(2,620 ratings)</span>
                        </div>
                    </div>
                    <div className="courseBanner__labels">
                        {getCertificate}
                        {forBeginners}
                    </div>
                    <div className="courseBanner__block">

                        <div className="courseBanner__cost">
                            <span className="courseBanner__cost-sale">
                                {discount}
                            </span>
                            <span className="courseBanner__cost-full">{price} </span>
                        </div>
                       <Link to={`${courseUrl}`}> <Button  content={btnName} classStyle='button--full'/> </Link>

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

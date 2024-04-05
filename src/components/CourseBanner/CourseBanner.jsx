import './CourseBanner.scss';
import Stars from '../Stars/Stars';
import Button from '../Button/Button';
import certificate from '../../assets/img/certificate.svg';
import beginner from '../../assets/img/beginner.svg';
import intermediate from '../../assets/img/intermediate.svg';
import expert from '../../assets/img/expert.svg';
import Label from '../Label/Label';
import {Link} from "react-router-dom";

const CourseBanner = ({btnName, title, raiting, hasCertificate, img, price, level, discount, courseUrl, headline, video}) => {
    const getCertificate = hasCertificate ? <Label img={certificate} text='Сертифікат'/> : null;
    const forBeginners = level === "Beginner Level" ? <Label img={beginner} text='Beginner'/> : null;
    const forIntermediate = level === "Intermediate Level" ? <Label img={intermediate} /> : null;
    const forExpert = level === "Expert Level" ? <Label img={expert}/> : null;
    const view = video ?
            <video controls style={{height: 270, width: 480}}>
            <source src={video} alt="" type="video/mp4"/>
            </video>
            : <img src={img} alt=""/>;

    return (
        <section className="courseBanner">
            <div className="courseBanner__wrap">
                <div className="courseBanner__inner">
                    <div className="courseBanner__block">
                        <h1 className="title-block">{title}</h1>
                        <p>{headline}</p>
                        <div className="courseBanner__raite">
                            <span>{raiting}</span>
                            <Stars/>
                            <span>(2,620 ratings)</span>
                        </div>
                    </div>
                    <div className="courseBanner__labels">
                        {getCertificate}
                        {forBeginners}
                        {forIntermediate}
                        {forExpert}
                    </div>
                    <div className="courseBanner__block">

                        <div className="courseBanner__cost">
                            <span className="courseBanner__cost-sale">
                                {discount}
                            </span>
                            <span className="courseBanner__cost-full">{price} </span>
                        </div>
                        <Link to={`${courseUrl}`}> <Button content={btnName} classStyle='button--full'/> </Link>
                    </div>

                </div>
                <div className="courseBanner__inner">
                    <div className="courseBanner__img">
                        {view}
                    </div>

                </div>
            </div>

        </section>
    )
};
export default CourseBanner;

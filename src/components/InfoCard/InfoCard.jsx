import './InfoCard.scss';

const InfoCard = ({students, duration, language, titleD, titleL, titleS, iconLanguage, iconYoutube,iconStudents, iconTests, titleT, tests}) => {
    return (
        <div className="infoCard">
            <img src={iconStudents} alt=""/>
            <img src={iconYoutube} alt=""/>
            <img src={iconLanguage} alt=""/>
            <img src={iconTests} alt=""/>
            <div className="infoCard__info">
                <h5>{students}</h5>
                <h5>{duration}</h5>
                <h5>{language}</h5>
                <h5>{tests}</h5>
                <span>{titleS}</span>
                <span>{titleD}</span>
                <span>{titleL}</span>
                <span>{titleT}</span>
            </div>
        </div>
    )
}
export default InfoCard
import './InfoCard.scss';
import svg from './people.svg'

const InfoCard = () =>{
    return (
        <div className="infoCard">
            <img src={svg} alt="" />
            <div className="infoCard__info">
                <h5>20k+</h5>
                <span>Студентів</span>
            </div>


        </div>
    )
}
export default InfoCard
import './Stars.scss';
import starFill from '../../images/starFill.svg';
import starPart from '../../images/starPart.svg';

function Stars (){
    return(
        <div className="stars">
        <span className="stars__rait"></span>
        <div className="stars__wrap ">
          <img src={starFill} alt="" />
          <img src={starFill} alt="" />
          <img src={starFill} alt="" />
          <img src={starFill} alt="" />
          <img src={starPart} alt="" />
        </div>
      </div>
    )
}
export default Stars;
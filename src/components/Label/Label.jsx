import './Label.scss';
const Label = ({img, text}) =>{
    return(
<div className="label">
    <div className="label__wrap">
<img src={img} alt="" /> <span>{text}</span>
    </div>
</div>
    )
}
export default Label;
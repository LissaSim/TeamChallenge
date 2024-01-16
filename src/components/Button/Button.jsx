import './Button.scss';

function Button(props) {
    const buttonStyle = props.classStyle;
 

    return (
       < button className = {`button ${buttonStyle}`}>
          {props.content}
        </button>
    )
}
export default Button;
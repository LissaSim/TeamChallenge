import './Button.scss';

function Button({classStyle,content}) {
    //const buttonStyle = props.classStyle;
    const style = `button ${classStyle}`
 

    return (
       < button  className = {style}>
          {content}
        </button>
    )
}
export default Button;
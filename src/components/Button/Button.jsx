import './Button.scss';

function Button({classStyle,content, loadingNewItems}) {
    //const buttonStyle = props.classStyle;
    const style = `button ${classStyle}`
 

    return (
       < button  className = {style} onClick={loadingNewItems}>
          {content}
        </button>
    )
}
export default Button;
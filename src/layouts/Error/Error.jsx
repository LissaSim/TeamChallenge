import './Error.scss';
import error from './Error.png';

const Error = ()=>{
    return (
        <div className="container error">
            <div className="error__img">
                <img src={error} alt="eror" />
            </div>

        </div>
    )
}
export default Error;
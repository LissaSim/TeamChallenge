import '../../scss/general.scss'
import './Block.scss';
import imgBlock from '../../images/3D.svg';


function Block() {
    return (
        <article className="block">
            <div className="block__img">
                <img src={imgBlock} alt="" />
            </div>
            <div className="block__body">
                <div className="block__body-desc">
                    <h4>3D та анімація</h4>
                </div>

                <div className="block__text">
                    <p>
                        Створення тривимірних моделей та їх рух 
                        через час для створення вражаючих візуальних
                         ефектів у фільмах, іграх та рекламі.
                    </p>
                </div>
            </div>
        </article>
    )
}
export default Block;

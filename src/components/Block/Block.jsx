import '../../scss/general.scss'
import './Block.scss';

const Block = ({name, description, img}) => {
        return(
            <>
                <div className="block__img">
                    <img src={img} alt="" />
                </div>
                <div className="block__body">
                    <div className="block__body-desc">
                        <h4>{name}</h4>
                    </div>

                    <div className="block__text">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </>
        )
}
export default Block;

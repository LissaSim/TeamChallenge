import '../../scss/general.scss';
import './Popular.scss';
import Card from '../Card/Card';


function Popular() {
    return (
        <section className="popular">
            <div className="container">
                <div className="line">
                    <h2 className="title-block">Популярні курси Udemy</h2>
                    <div className="popular__wrap">
                        <button className='popular__nav popular__nav--left'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                <path d="M6 1L1 6L6 11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className='popular__nav popular__nav--right active'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                <path d="M1 1L6 6L1 11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <div className="popular__track">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />

                        </div>


                    </div>
                </div>


            </div>


        </section>
    )
};
export default Popular;


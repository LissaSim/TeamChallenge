import '../../scss/general.scss';
import './CategoryArticles.scss';
import Block from '../Block/Block';
import Button from '../../components/Button/Button';
function CategoryArticles(props) {
    const btnName = props.btnName;
    const title = props.title
    return (
        <section className="category">
        <div className="container">
            <div className="line">
                <h2 className="title-block">{title}</h2>
                <div className="category__wrap">
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>

                </div>
                <div className="category__inner">
                <Button content={btnName } classStyle='button--line'/> 
                </div>
        
               
            </div>


        </div>


    </section>
    )
  }
  export default CategoryArticles;
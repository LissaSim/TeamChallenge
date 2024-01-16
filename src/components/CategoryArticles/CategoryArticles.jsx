import '../../scss/general.scss';
import './CategoryArticles.scss';
import Block from '../Block/Block';
import Button from '../../components/Button/Button';
<<<<<<< HEAD
function CategoryArticles(props) {
    const btnName = props.btnName;
    const title = props.title
=======
import {useState} from "react";
const CategoryArticles = (props) => {
    const btnName = props.btnName;
    const title = props.title;

>>>>>>> master
    return (
        <section className="category">
        <div className="container">
            <div className="line">
                <h2 className="title-block">{title}</h2>
                <div className="category__wrap">
<<<<<<< HEAD
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
=======
                    {/*<Block/>*/}
                    <Block/>
                    {/*<Block/>*/}
                    {/*<Block/>*/}
                    {/*<Block/>*/}
                    {/*<Block/>*/}
>>>>>>> master

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
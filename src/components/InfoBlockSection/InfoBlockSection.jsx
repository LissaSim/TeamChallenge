
import React from 'react';
import './InfoBlockSection.scss';
import InfoBlock from "../InfoBlock/InfoBlock";
import Button from '../Button/Button';
import {Link} from "react-router-dom";




const InfoBlockSection = (props) => {

    const button = props.btnName ? <Button content={props.btnName } classStyle='button--line'/> : '';

    return (
        <section className = {`infoBlockSection ${props.classWrap}`}>

            <div className="infoBlockSection__title-block">
                {
                    React.Children.map(props.children,(child,index)=>{


                        if(child.type == 'h2'){
                            return child;
                        }
                    })
                }
                {/* here we add link for going to site */}
                {props.link ? <Link to={props.courseUrl} >{props.link}</Link> : '' }

            </div>



            <div className="infoBlockSection__wrap">
                {
                    React.Children.map(props.children,(child,index)=>{

                        if(child.type !== 'h2' || child.type == 'button' ){
                            return (
                                <InfoBlock>
                                    {child}
                                </InfoBlock>
                            )

                        }
                    })
                }
                {/* <InfoBlock>
      <Comment/>
      </InfoBlock> */}



            </div>
            {button}


        </section>
    )
}
export default InfoBlockSection
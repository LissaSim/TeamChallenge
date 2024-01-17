
import React from 'react';
import './InfoBlockSection.scss';
import Comment from '../Comment/Comment';
import InfoBlock from '../infoBlock/InfoBlock';
import Button from '../Button/Button';




const InfoBlockSection = (props) => {
  
    const button = props.btnName ? <Button content={props.btnName } classStyle='button--line'/> : '';

  return (
    <section className = {`infoBlockSection ${props.classWrap}`}>
        {
        React.Children.map(props.children,(child,index)=>{
        

                if(child.type == 'h2'){
                return child;
                }
              })
        }
  
 
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

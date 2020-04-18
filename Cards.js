import React, {Component} from 'react';
import Card from "./CardUI";
import "./Card-style.css";
import img1 from "./SSC2.jpg";
import img2 from "./BANK PO.png";
import img3 from "./RRB.png";
import data from './CardUI';




  

class Cards extends Component {

    constructor(props){
      super(props);
       this.state ={
        data : [{
          title : 'SSC CHSL',
          imgsrc: {img1}
          
        },{
          title : 'BANK PO',
          imgsrc : {img2}
        },
        {
          title : 'RRB',
          imgsrc : {img3}
        },
        {
          title : 'SSC',
          imgsrc : {img1}
        }
        ]
      };
      
    }
componentDidMount(){}
  render(){
    
    return(

      <div className="container-fluid d-flex justify-content-centre">
        <div className="row">
          <div className="col-md-3">
          {this.state.data.map((item, index) => {
            
            return(
              
                <Card imgsrc={item.title}/>
                
            )
          })
           
            
  }
         </div>
         
      </div>
      </div>
            )
            
    
    
    
  }
}

export default Cards;
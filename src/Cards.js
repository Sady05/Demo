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
          imgsrc: require('./SSC2.jpg'),
          isLoginRequired: "true",
          noq : 100,
          type : 'MCQ',
          duration : '1 hour'
          
        },{
          title : 'BANK PO',
          imgsrc : require('./BANK PO.png'),
          noq : 150,
          type : 'MCQ',
          isLoginRequired: "true",
          duration : '1.5 hour'
        },
        {
          title : 'RRB',
          imgsrc : require('./RRB.png'),
          noq : '200',
          type : 'MCQ',
          isLoginRequired: "true",
          duration : '2 hour'
          
        },
        {
          title : 'SSC',
          imgsrc : require('./SSC2.jpg'),
          noq : 100,
          type : 'MCQ',
          isLoginRequired: "true",
          duration : '! hour'
        }
        ]
      };
      
    }
componentDidMount(){}
  render(){
    const {isLoginRequired} = this.state;
    return(
      
      

      <div className="container-fluid d-flex justify-content-centre">
        <div className="row">
        {this.state.data.map((item, index) => {
            
            return(
          <div className="col-md-3">
                <Card {...item}/>
          </div>
         
                
            )
           
                
          })
         
            
           }
       </div>
          </div>
    
        
     
      
        )     
            
    
    
    
  }
}

export default Cards;
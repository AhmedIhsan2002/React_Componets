import React, { Component } from 'react'

const info = {
    name: 'Ahmed',
    firstnme: 'ihsan',
    lastname: 'Qannan',
    age :20,
    hobby:'coding and playing games ',
    address:"Egypt",
    phoneNo:1987654321,
    say: function() {
      return 'hello from  ' + this.name;
    },
  };
  const styleDiv = {
    margin: '1rem auto',
    width: '800px'
    
  };
 class AboutSec extends Component {
    getFullName = ({firstnme  ,lastname}) => {
   
        return `${firstnme} , ${lastname}`
    };
  render() {
    const {  name , firstnme,  lastname , age , hobby , address ,  phoneNo , say } = info;
    return (
     <React.Fragment>
         <div style={styleDiv}>
        <h1>{info.say()}  </h1>
        <p>{this.getFullName(info)}</p>
        <p>Age:{info.age}</p>
        
        
      </div>

      <div style={styleDiv}>
      <p>Hobbies:{info.hobby}</p>
        <p>Address:{info.address}</p>
        <p>Phone No.{info.phoneNo}</p>
        
      </div>
     </React.Fragment>
    )
  }
}

export default AboutSec

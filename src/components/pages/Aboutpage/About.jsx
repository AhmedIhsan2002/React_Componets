import React, { Component } from 'react'
// import Header from '../../Header/Header';
// import Footer from '../../Footer/footer';
// import Image from '../../Img/image'
// import AboutSec from '../../About_Sec/About_Sec
import NAVBAR from '../../nav/nav';
import Aside  from '../../aside/aside';

const INFO = {
    firstname: 'Ahmed',
    lastname :'Mohamed ',
    age: 25,
    address: 'Cairo Egypt',
    email: '<EMAIL>',
    phone: '+01689745645',
    website: 'www.ahmedossama.com',
    github: 'https://github.com/AhmadOssama',
    linkedin: 'https://www.linkedin.com/in/ahmadossamaa/',
    twitter: 'https://twitter.com/@ahmadosssaaa',
    facebook: 'https://facebook.com/ahmad.ossama.7?ref=bookmarks',


};

const StyleDiv = {
  bottom: '20px'
}

 class Aboutpage extends Component {
  render() {
    return (
      <React.Fragment>
       

      <div>
        <NAVBAR />

      <Aside />
      </div>

      <div style={StyleDiv}>
          <p>firstName:{INFO.firstname}</p>
          <p>lastName:{INFO.lastname}</p>
          <p>age:{INFO.age}</p>
          <p>address:{INFO.address}</p>
          <p>email:{INFO.email}</p>
          <p>phone:{INFO.phone}</p>
          <p>website:{INFO.website}</p>
          <p>github:{INFO.github}</p>
          <p>linkedin:{INFO.linkedin}</p>
          <p>twitter:{INFO.twitter}</p>
          <p>facebook:{INFO.facebook}</p>
          
       
      </div> 
      </React.Fragment>
    )
  }
}

export default Aboutpage 

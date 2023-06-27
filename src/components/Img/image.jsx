import React from 'react'
import './image.css'


const IMAGE = 'https://pic.i7lm.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1%D8%A9-%D8%B4%D8%AC%D8%B1%D8%A9-%D8%AC%D8%B0%D8%A7%D8%A8%D8%A9.jpg';
const alt_img = 'three';
const title = 'three.jpg';
const Style = {
  display:'block'
};



 


const Image = () => {
  return (
    <div>
      <img src={IMAGE}  alt={alt_img} title={title} style={Style} />
    </div>
  )
}

export default Image




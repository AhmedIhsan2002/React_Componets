import React, { Component } from 'react'

const FaseBook = 'https://www.facebook.com/ahmeddalim';
const twitter = 'https://twitter.com/@dalim_ahmed';
const github = 'https://github.com/Dalim-Ahmad/';
 class Aside extends Component {

   
  render() {
    return (
      <div>
        <aside>
            <h4>Ahmed</h4>
            <p>email</p>
            <a href={FaseBook}>Facebook
            </a>
            <br />
            <a href={twitter}>Twitter</a>
            <br/>
            <a href={github}>Github</a>
         
            

        </aside>
      </div>
    )
  }
}

export default Aside
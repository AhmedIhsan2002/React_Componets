import React, { Component } from 'react'
// import Header from '../../Header/Header';
// import Footer  from '../../Footer/footer';
import NAVBAR from '../../nav/nav';
import Aside  from '../../aside/aside';
 class Homepage extends Component {
  render() {
    return (
      <div>
        {/* <Header/>
        <h3>Home_Page</h3>
        <Footer /> */}

        <NAVBAR />

        <Aside />
      </div>
    )
  }
}

export default Homepage

import React from 'react';
import '../styles/style.css'
import profile from '../img/home.jpg';

class Home extends React.Component {
  async componentDidMount() {
    // const url = 'http://localhost:3001/api/scg/findingRestaurant';
    // let response = await fetch(url);
    // let data = await response.json();
    // console.log('data', data);
  }

  render() {
    return (
      <div className="maincontrainer">
        <div className="row theme">
          <div className="col-8 home">
            <img className="homepic" src={profile} alt="Profile" />
          </div>

          <div className="col-4 sidehome">
            <h3 >Hello Welcome to my page, I'm</h3>
            <span className="name">Phadtharaded Sawankachirdwilai</span>
            <br />
            <div>Junior Web Application Developer </div>
            <br />
            <div>Email: phadtharaded-sawan.toon@hotmail.com</div>
            <div>Tel: 087-865xxxx</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;



import React from 'react';
import '../styles/style.css';
import profile from '../img/pic.jpg';
class FindCV extends React.Component {
  async componentDidMount() {
    // const url = 'http://localhost:3001/api/scg/findingRestaurant';
    // let response = await fetch(url);
    // let data = await response.json();
    // console.log('data', data);
  }

  render() {
    return (
      <div className="maincontrainer">
        <div className="mycv">
          <div className="topCV">
            <div className="row">
              <div className="col-3">
                <img className="profilepic" src={profile} alt="Profile" />
                <div className="tagname">MR. PHADTHARADED SAWANKACHIRDWILAI</div>
              </div>
              <div className="col-9 info">
                <h3>Personal Information</h3>
                <span>Hi my name is Phadtharaded Sawankachirdwilai</span> <br />
                <span>Age : 24 years old</span><br />
                <span>Nationality : Thai</span><br />
                <span>Gender : Male</span><br />
                <span>Date of birth : 27 October 1995</span><br />
                <span>Interested in : Software/Application Developer, Machine learning, Deep learning, data analystic, and security</span><br />
              </div>
            </div>
          </div>

          <div className="buttomCV">

          </div>

        </div>
      </div>
    )
  }
}

export default FindCV;

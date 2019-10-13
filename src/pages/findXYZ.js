import React from 'react';
import '../styles/style.css'
class FindXYZ extends React.Component {
  async componentDidMount() {
    // const url = 'http://localhost:3001/api/scg/findingRestaurant';
    // let response = await fetch(url);
    // let data = await response.json();
    // console.log('data', data);
  }

  render() {
    return (
      <div className="maincontrainer">
        <div>
          hello find xyz
        </div>
      </div>
    )
  }
}

export default FindXYZ;

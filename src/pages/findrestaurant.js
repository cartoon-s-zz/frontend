import React from 'react';
import '../styles/style.css'
class FindRestaurant extends React.Component {
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
          hello FindRestaurant
        </div>
      </div>
    )
  }
}

export default FindRestaurant;

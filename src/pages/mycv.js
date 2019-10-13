import React from 'react';
import '../styles/style.css'
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
        <div>
          hello my cv
        </div>
      </div>
    )
  }
}

export default FindCV;

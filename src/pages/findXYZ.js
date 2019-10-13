import React from 'react';
import '../styles/style.css'
class FindXYZ extends React.Component {
  constructor() {
    super();
    this.state = {
      showAnswer: false,
      data: [],
    }
  }
  async componentDidMount() {
    let result = this.findxyz();
    this.setState({
      data: result
    })
  }

  findxyz() {
    const arr = ['x', 5, 9, 15, 23, 'y', 'z'];
    let mul = 2;
    let indexOfX;
    let indexOfY;
    let indexOfZ;
    arr.find((value, index) => {
      console.log(value);
      console.log(index);
      if (value === 'x') {
        indexOfX = index;
        if (indexOfX > 0) {
          let value = arr[indexOfX - 1] + (mul * indexOfX);
          arr[indexOfX] = value;
        } else {
          let value = arr[indexOfX + 1] - (mul * (indexOfX + 1));
          arr[indexOfX] = value;
        }
      }
      if (value === 'y') {
        indexOfY = index;
        if (indexOfY > 0) {
          let value = arr[indexOfY - 1] + (mul * indexOfY);
          arr[indexOfY] = value;
        } else {
          let value = arr[indexOfY + 1] - (mul * (indexOfY + 1));
          arr[indexOfY] = value;
        }
      }
      if (value === 'z') {
        indexOfZ = index;
        if (indexOfZ > 0) {
          let value = arr[indexOfZ - 1] + (mul * indexOfZ);
          arr[indexOfZ] = value;
        } else {
          let value = arr[indexOfZ + 1] - (mul * (indexOfZ + 1));
          arr[indexOfZ] = value;
        }
      }
    })
    console.log('arr', arr);

    let data = {
      'x': arr[indexOfX],
      'y': arr[indexOfY],
      'z': arr[indexOfZ]
    }
    return data;
  }

  showAnswer() {
    this.setState({
      showAnswer: !this.state.showAnswer
    });
    console.log(this.state.showAnswer);
  }

  render() {

    return (
      <div className="maincontrainer">
        <div>
          <span>Question No. 1 : x, 5, 9, 15, 23, y, z. Find X Y Z</span>
        </div>
        <br />
        {
          this.state.showAnswer ? <div>X={this.state.data.x}, Y={this.state.data.y}, Z={this.state.data.z} </div> : ''
        }
        <div>
          <br />
          <button className="btn btn-info" onClick={this.showAnswer.bind(this)} >Calculate</button>
        </div>
      </div>
    )
  }
}

export default FindXYZ;

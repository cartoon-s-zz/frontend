import React from 'react';
import '../styles/style.css';
// import Table from '../components/table';
// import { thisExpression } from '@babel/types';
class FindRestaurant extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 13.804983,
      lng: 100.536200,
      data: []
    }
  }

  async componentWillMount() {

  }

  async searchRes() {
    const url = 'http://localhost:3001/api/scg/findingRestaurant';
    let response = await fetch(url);
    let dataRes = await response.json();
    this.setState({
      data: dataRes,
    });
  }

  render() {
    return (
      <div className="maincontrainer">
        <div>
          Find Restaurant Around Bangsue!
        </div>
        <form className="form-inline">
          <label className="sr-only" for="inlineFormInputGroup">Latitude  </label>
          <div className="input-group mb-2 mr-sm-2 mb-sm-0" style={{ padding: '10px' }}>
            <div className="input-group-addon" style={{ padding: '5px' }}>Latitude</div>
            <input disabled type="text" className="form-control" id="inlineFormInputGroup" placeholder="Latitude" value={this.state.lat} />
          </div>

          <label className="sr-only" for="inlineFormInputGroup">Longtitude  </label>
          <div className="input-group mb-2 mr-sm-2 mb-sm-0" style={{ padding: '10px' }}>
            <div className="input-group-addon" style={{ padding: '5px' }}>Longtitude</div>
            <input disabled type="text" className="form-control" id="inlineFormInputGroup" placeholder="Longtitude" value={this.state.lng} />
          </div>

          <button type="button" className="btn btn-primary" onClick={this.searchRes.bind(this)}>Search</button>
        </form>
        <div className="tableStyle">
          <div>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Rating</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((data, index) => (
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{data.name}</td>
                    <td>{data.vicinity}</td>
                    <td>{Number(data.rating).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div >
    )
  }
}

export default FindRestaurant;

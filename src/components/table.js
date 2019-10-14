import React from 'react';
import '../styles/style.css'
class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  async componentWillMount() {
    // console.log(this.props)
    let data = await this.props.data;
    this.setState({
      data: data,
    });
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="maincontrainer">
        <div>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Table;





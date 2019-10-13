import React from 'react';
import {
  Link,
} from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      home: true,
      findXYZ: false,
      findres: false,
      mycv: false,
    }
  }

  setActiveHome() {
    this.setState({
      home: true,
      findXYZ: false,
      findres: false,
      mycv: false,
    })
  }

  setActiveXYZ() {
    this.setState({
      home: false,
      findXYZ: true,
      findres: false,
      mycv: false,
    })
  }

  setActiveRes() {
    this.setState({
      home: false,
      findXYZ: false,
      findres: true,
      mycv: false,
    })
  }

  setActiveCV() {
    this.setState({
      home: false,
      findXYZ: false,
      findres: false,
      mycv: true,
    })
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to={'/'} onClick={this.setActiveHome.bind(this)}>SCG - COMPANY</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class={this.state.home ? "nav-item active" : "nav-item"}>
              <Link class="nav-link" to={'/'} onClick={this.setActiveHome.bind(this)}>Home</Link>
            </li>
            <li class={this.state.findXYZ ? "nav-item active" : "nav-item"}>
              <Link to={'/findxyz'} class="nav-link" href="#" onClick={this.setActiveXYZ.bind(this)}>FindXYZ</Link>
            </li>
            <li class={this.state.findres ? "nav-item active" : "nav-item"}>
              <Link class="nav-link" to={'/findres'} onClick={this.setActiveRes.bind(this)}>Find Restaurant</Link>
            </li>
            <li class={this.state.mycv ? "nav-item active" : "nav-item"}>
              <Link class="nav-link" to={'/mycv'} onClick={this.setActiveCV.bind(this)}>My CV</Link>
            </li>
            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
        </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */}
            {/* <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li> */}
          </ul>
          {/* <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </input>
          </form> */}
        </div>
      </nav >
    )
  }
}

export default Header;

import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      // <footer className='row' style={{ background: 'red' }}>
      //   <div class="container">
      //     hello detail
      //   </div>
      //   <div>© 2018 Copyright:
      //     <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
      //   </div>

      // </footer>
      <footer class="page-footer font-small mdb-color pt-4 bg-light">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left mt-3 pb-3">
            <div class="col-md-12 col-lg-12 col-xl-12 mx-auto mt-12">
              <h6 class="text-uppercase mb-4 font-weight-bold">SCG COMPANY</h6>
              <p>The Siam Cement Pcl. (Headquarter)
1 Siam Cement Road, Bangsue, Bangkok 10800 Thailand
Tel. 66 2586 4444</p>
            </div>
          </div>
        </div>

      </footer>
    )
  }
}

export default Footer;



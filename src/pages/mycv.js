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
      <div className="maincontrainercv">
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
            <div className="col-12 educated">
              <h3>Educated and Training</h3>
              <div className="row">
                <div className="col-3">
                  <div>Nexter Digital Co.,Ltd.</div>
                  <div>2017 - Present</div>
                </div>
                <div className="col-8">
                  1355 Wong Sawang, Bang Sur, Bangkok 10800.
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-3">
                  <div>Mirum Agency Thailand</div>
                  <div>2017</div>
                </div>
                <div className="col-8">
                  2525 FYI Center Building, 8th Floor, Rama IV Road, Klongtoey, Bangkok, Thailand 10110.
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-3">
                  <div>Computer Engineering</div>
                  <div>2014-2017</div>
                </div>
                <div className="col-8">
                  Thammasat University, 99 moo 18, Paholyothin Road, Klong Luang, Rangsit, Pathumthani, Thailand.
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-3">
                  <div>Internship</div>
                  <div>2017(Summer)</div>
                </div>
                <div className="col-8">
                  Sertis Health Co., Ltd. 10/95 6th Floor The Trinity Soi Sukhumvit13 Klongton Nua Wattana, Bangkok, Thailand.
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-3">
                  <div>Internship</div>
                  <div>2016(Summer)</div>
                </div>
                <div className="col-8">
                  BK-Birla Institute of Engineering and Technology, Pilani, India.
                </div>
              </div>
              <br />
            </div>

            <div className="col-12 educated">
              <h3>Experience</h3>
              <div className="row">
                <div className="col-3">
                  <div>Fulfillment System</div>
                  <div>2018 - Present</div>
                </div>
                <div className="col-8">
                  <div>- Developed Web Application using nodejs, express for backend, react for fontend, and database (NoSQL and MongoDB) </div>
                  <div>- Web application for fulfilment stock and order to dealer or partner</div>
                  <div>- Using agile methodology for working</div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-3">
                  <div>Mobile Application</div>
                  <div>2017</div>
                </div>
                <div className="col-8">
                  <div>- Developed AR Game on iOS application with javascript, html, css, canvas from adobe animate cc, and Wikitude platform (3D model).</div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-3">
                  <div>Skin Cancer screening test using image on smartphone application</div>
                  <div>2017</div>
                </div>
                <div className="col-8">
                  <div>- Developed iOS application by using Xcode (Swift language).</div>
                  <div>- Developed algorithm that uses acknowledge of Deep learning applied to classify skin cancer lesion by collaborated with Samitivej Hospital.</div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-3">
                  <div>Amulet classification</div>
                  <div>2016 - 2017</div>
                </div>
                <div className="col-8">
                  <div>- Developed algorithm that uses acknowledge of Deep learning to predict Amulet if it's real or counterfeit.</div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-3">
                  <div>Bullet classification</div>
                  <div>2016 - 2017</div>
                </div>
                <div className="col-8">
                  <div>- Developed algorithm that used acknowledge of image- processing to identify the bullet measurements for identifying if the bullet fired in the same weapon or not. By collaborated with Central Institute of Forensic Science.</div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-3">
                  <div>School web application</div>
                  <div>2016 (Summer)</div>
                </div>
                <div className="col-8">
                  <div>- Designed and Implemented Web application by using C# and Microsoft visual studio.</div>
                </div>
              </div>
              <br />
            </div>
          </div>

          <div className="col-12 educated">
            <div className="row">
              <div className="col-6">
                <h3>Skills</h3>
                <h4>Languages</h4>
                <div className="row">
                  <div className="col-12">- English</div>
                  <div className="col-6">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="col-12">- Thai</div>
                  <div className="col-6">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                </div>

                <br />
                <h3>Soft Skills</h3>
                <div className="row">
                  <div className="col-12">- Team work</div>
                  <div className="col-6">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div className="col-12">- Creative</div>
                  <div className="col-6">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="col-12">- Flexible</div>
                  <div className="col-6">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="col-12">- Managment</div>
                  <div className="col-6">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <h4>Computer skills</h4>
                <div className="row">
                  <div className="col-12">- NodeJS</div>
                  <div className="col-6">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="col-12">- Express</div>
                  <div className="col-6">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="col-12">- React</div>
                  <div className="col-6">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="col-12">- SQL</div>
                  <div className="col-6">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '96%' }}></div>
                    </div>
                  </div>
                  <div className="col-12">- Swift</div>
                  <div className="col-6">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="col-12">- Java</div>
                  <div className="col-6">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="col-12">- C</div>
                  <div className="col-6">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="col-12">- Adobe</div>
                  <div className="col-6">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div className="col-12">- Office</div>
                  <div className="col-6">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>


              </div>
            </div>

          </div>
          <br />
        </div>

      </div >
    )
  }
}

export default FindCV;

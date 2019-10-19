import React, { Component } from 'react';
import LegalCommon from '../../components/LegalCommon.js';
import '../../assets/css/legal.scss';
import { NavLink  } from 'react-router-dom';

class Legal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "header": "ScopeHub Terms & Policies",
        "selectedLink": "overview",
        "navHeader": "Getting started"
    }

  }
  render() {
      return (
        <div>
            <LegalCommon header={this.state.header} mainpage={true} navHeader={this.state.navHeader} selectedLink={this.state.selectedLink}>
              <div className="legal-grid">
                  <NavLink className="grid-card" to="/user-terms-of-service">
                      <header className="card-header">
                          <h2 className="card-heading">User terms of service</h2>
                          <p className="card-info">Agreement with a user who joins an existing team.</p>
                      </header>
                      <figure className="card-media bm-type_CTOS"><div className="user-tos-icon"></div></figure>
                      <div className="card-redirect"><span className="link">Read More<i className="fa fa-arrow-right"></i></span></div>
                  </NavLink>
                  <NavLink className="grid-card" to="/privacy-policy">
                    <header className="card-header">
                        <h2 className="card-heading">Privacy Policy</h2>
                        <p className="card-info">Our policy on what information we collect at ScopeHub, how we use it and what choices you have.</p>
                    </header>
                    <figure className="card-media bm-type_privacy"><div className="privacy-policy-icon"></div></figure>
                    <div className="card-redirect"><span className="link">Read More<i className="fa fa-arrow-right"></i></span></div>
                  </NavLink>
                  <NavLink className="grid-card" to="/security-overview">
                    <header className="card-header">
                        <h2 className="card-heading">Security overview</h2>
                        <p className="card-info">We take security seriously here at ScopeHub and we’re proud to exceed the industry standard when it comes to protecting your organisation.</p>
                    </header>
                    <figure className="card-media bm-type_security"><div className="security-icon"></div></figure>
                    <div className="card-redirect"><span className="link">Read More<i className="fa fa-arrow-right"></i></span></div>
                  </NavLink>
                  <NavLink className="grid-card" to="/acceptable-use-policy">
                    <header className="card-header">
                        <h2 className="card-heading">Acceptable use policy</h2>
                        <p className="card-info">A list of acceptable and unacceptable conduct for our Services.</p>
                    </header>
                    <figure className="card-media bm-type_aup"><div className="aup-icon"></div></figure>
                    <div className="card-redirect"><span className="link">Read More<i className="fa fa-arrow-right"></i></span></div>
                  </NavLink>
              </div>
            </LegalCommon>
        </div>
      );
}
}
export default Legal;

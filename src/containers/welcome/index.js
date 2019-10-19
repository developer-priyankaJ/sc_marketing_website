import React, { Component } from 'react';
import '../../assets/css/getStarted.scss';
import {setCookie, getApis} from '../../utils/utility.js';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(name){
    setCookie(name, true, 30);
    let links = getApis().links;
    window.location.href = links.SH_App;
  }
  render() {

      return (
          <div className="getcompany">
              <div className="plain-header sticky">
                <div className="logo"></div>
              </div>
              <div className="getcompany-container ">
                <div className="card-container bm-page_company">
                  <h1 className="card-heading text-center">You're all set!</h1>
                  <p>The quick 2-minute tour will show you the basics of interface.</p>
                    <div className="text-center">  <div className="button display-inline text-right"><input type="submit" onClick={(event) => this.handleSubmit(event.target.name)} name="quickTour" value="Quick Tour" className="submit-button"/></div>
                      <div className="button display-inline text-right"><input type="submit" onClick={(event) => this.handleSubmit(event.target.name)} name="quickStart" value="Skip Tour" className="submit-button"/></div>
                      </div>
                </div>
              </div>

          </div>
      );
}
}

export default Welcome;

import React, { Component } from 'react';
import 'react-dd-menu/dist/react-dd-menu.css';
import '../assets/css/home.scss';
import { Content  } from '../constants';
import * as Utility from '../utils/utility';

class HomeIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
          "email":""
    };
	this.submitform = this.submitform.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }
  updateEmail(ev){
    ev.preventDefault();
    var value = ev.target.value;
    this.setState((prevState, props) => {
      return { "email": value }
    });
  }
  submitform(event){
	  this.setState((prevState, props) => {
		 return { "email": "" }
	  });
	  this.props.submitForm(event, this.state.email);
  }
  render() {
    let links = Utility.getApis().links;
    return (
            <div className="home-intro">
               <div className="homeContainer">
                  <div className="content">

                      <div className="intro-part-1"><div className="intro-img"></div></div>

                      <div className="display-inline intro-part-2">
                          <h3 className="title">{Content.home.introTitle}</h3>
                          <p>ScopeHub is a supply chain collaborations & integration platform where you connect and share supply chain data with your partners. Within minutes, set yourself up for near real-time supply and demand visibility across multiple tiers of suppliers or customers.</p>
                          <p>Instead of relying on statistical assumptions, you now have data on actual supply and demand changes available in a timely manner.  Thereby, you and your partners are gaining a critical time and data advantage when forecasting, managing inventory, or deepening your customer engagements.</p>
                          <p>We are currently in a closed Beta phase.  If you are interested in joining our Beta program, please click <span onClick={this.props.openSignUp} className="underline">here</span>.  If you want to stay informed about our progress, please enter your email address below.</p>
                          <div className="group">
                          <form name="emailform" method="POST" onSubmit={(event) => this.submitform(event)}>
                            <div className="left">
                              <span className="left-content"><input required id="emailid" className="email" type="email" name="email" value={this.state.email} size="40" onChange={(event) => this.updateEmail(event)}  placeholder="Enter Your Email"/></span>
                            </div>
                            <div className="right">
                              <p className="right-content"><input type="submit" value="Keep Me Informed" className="submit-button"/></p>
                            </div>
                            </form>
                            </div>
                            <div className={ this.props.showError ? "visible error left-content" : "hidden" }>Email Already Registered. Please enter any other email.</div>

                          <div className="sub-text hidden"><span className="smallsp">Already Using ScopeHub? <a target="_blank" rel="noopener noreferrer" href={links.SH_App}><span className="underline">Sign in</span></a>.</span></div>
                      </div>
                  </div>
               </div>
            </div>
	       )
  }
}

export default HomeIntro;

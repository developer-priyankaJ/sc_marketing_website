import React, { Component } from 'react';
import '../../assets/css/getStarted.scss';
import * as Utils from '../../utils';
//import { Apis } from '../../constants';
import * as Utility from '../../utils/utility';
import Loaders from '../Loader';
import * as LoaderAction from '../Loader/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from '../../components/Footer.js';

class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getExistingAccount = this.getExistingAccount.bind(this);
    this.handleLaunch = this.handleLaunch.bind(this);
  }
  componentDidMount(){

  }
  handleLaunch(){
      let links = Utility.getApis().links;
      window.location.href = links.SH_App;
  }
  handleSubmit(){
    let email = this.props.location.state ? this.props.location.state.email : (sessionStorage.getItem('tempdata') ? JSON.parse(sessionStorage.getItem('tempdata')).email :"");
    var data = {
      "apiToken":"xlK6cQsQRkvKdhIYH9n15yuzIhaLuiug",
      "email":email
    }
    let Apis = Utility.getApis().apis;
   Utils.fetchService.call(this, {
        "method": "POST",
        "url": Apis.verifyEmailAPI,
        "body": JSON.stringify(data),
        "callBack": (result) => {
          this.props.history.push({
            pathname: '/confirmEmail',
            state: { "email": decodeURIComponent(email)}
          })
        }
      });

  }
 getExistingAccount(){
   let finalDiv ="";
   let directOnboardingEmail="", existingUser="";
   if(this.props.location.search){
     directOnboardingEmail= this.props.location.search.split("?username=")[1];
   }
   if(directOnboardingEmail){
     let obj = {"email":directOnboardingEmail};
     sessionStorage.setItem('tempdata', JSON.stringify(obj));
   }else{
     if(this.props.location.state && this.props.location.state.username){
       existingUser = this.props.location.state.username;
     }else if(sessionStorage.getItem('tempdata')){
        existingUser = JSON.parse(sessionStorage.getItem('tempdata')).username
     }
   }
   if(existingUser){
     finalDiv =
     <div>
       <p>You're already signed in to an existing account.</p>
       <button className="card-row bm-type_margin" onClick={this.handleLaunch} >

           <div className="logo-small display-inline "></div>

         <span className="card-row-text">
           <span className="head">{existingUser}</span>
           <span className="descrip">share.scopehub.org</span>
         </span>
         <input type="submit" className="submit-button" value="Launch"></input>
       </button>
    </div>
   }

    return finalDiv
 }
  render() {
    let directOnboardingEmail = "";
    let email = "";
    if(this.props.location.search){
      directOnboardingEmail= decodeURIComponent(this.props.location.search).split("?username=")[1];
    }
    if(directOnboardingEmail){
      email = directOnboardingEmail;
    }else{
      email = this.props.location.state ? this.props.location.state.email : (sessionStorage.getItem('tempdata') ? JSON.parse(sessionStorage.getItem('tempdata')).email :"");
    }
     return (
          <div className="getstarted">
            <Loaders/>
              <div className="plain-header sticky">
                <div className="logo"></div>
              </div>
              <div className="getstarted-container">
                <div className="card-container">
                  <h1 className="card-heading">Start with a new Scopehub account</h1>
                    <button className="card-row bm-type_margin" onClick={this.handleSubmit} >
                  		<span className="team-icon small-right-margin">
                  			<span className="bm-team_icon small-right-margin"><i className="icon-plus far fa-plus"></i></span>
                  		</span>
                  		<span className="card-row-text">
                  			<span className="head">Create a new Scopehub Account</span>
                  			<span className="descrip">Get your company or organization on Scopehub</span>
                  		</span>
                  		<i className="arrow right-arrow small-right-margin"></i>
                	  </button>
                    {this.getExistingAccount()}
                    <p className="info-txt">We will send a confirmation email to {email}</p>
                </div>
              </div>
              <div className="footer-area">
                <Footer/>
              </div>
          </div>
      );
}
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({},LoaderAction), dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetStarted);

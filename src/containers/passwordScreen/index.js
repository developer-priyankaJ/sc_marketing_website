import React, { Component } from 'react';
import '../../assets/css/getStarted.scss';
import * as Utils from '../../utils';
import { Countries } from '../../utils/countries';
//import { Apis } from '../../constants';
import * as Utility from '../../utils/utility';
import Select from 'react-select';
import Loaders from '../Loader';
import * as LoaderAction from '../Loader/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { load } from 'recaptcha-v3';
import {setCookie} from '../../utils/utility.js';
import * as JsEncryptModule from 'jsencrypt';

class PasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "location":"",
      "language":"",
      "password":"",
      "confirmPassword":"",
      "publicKey":""
    }
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.encryptPassword = this.encryptPassword.bind(this);

  }
  componentDidMount(){
    var that = this;
    let Apis = Utility.getApis().apis;
    Utils.fetchService.call(this, {
        "method": "GET",
        "url": Apis.publicKeyAPI,
        "callBack": (result) => {
          let key = result.publicKey ? result.publicKey.replace("-----BEGIN PUBLIC KEY-----\n","").replace("-----END PUBLIC KEY-----\n","") : "";
          that.setState((prevState, props) => {
            return { "publicKey": key }
          });
        }
      });
  }
  encryptPassword(password) {
    var encrypt = new JsEncryptModule.JSEncrypt();
    encrypt.setPublicKey(this.state.publicKey);
    return encrypt.encrypt(password);
  }
  handleSubmit(ev){
    ev.preventDefault();
    var tempData = sessionStorage.getItem('tempdata') ? JSON.parse(sessionStorage.getItem('tempdata')):{};
    let email = this.props.location.state ? this.props.location.state.email : tempData.email;
    let companyName = this.props.location.state ? this.props.location.state.companyName : tempData.companyName;
    let firstName = this.props.location.state ? this.props.location.state.firstName : tempData.firstName;
    let lastName = this.props.location.state ? this.props.location.state.lastName : tempData.lastName;
    if(!(this.state.password && this.state.confirmPassword)){
      alert("Password is empty. Please enter some value.");
    }else if(this.state.password!== this.state.confirmPassword){
      alert("passords are not same. kindly re-enter.");
    }else{
      setCookie("userId",email, 30);
      setCookie("password",this.encryptPassword(this.state.password), 30);
      setCookie("quickTour", false, 30);
      setCookie("quickStart", false, 30);
      load('6Le3QZwUAAAAALnpkqw_mr4GCVXRlF2aBVPWdX51').then((recaptcha) => {
        recaptcha.execute().then((token) => {
            console.log(token) // Will print the token
              let data = {
                "firstName":firstName,
                "lastName":lastName,
                "languageCultureCode":"en-US",
                "g-recaptcha-response":token,
                "password": this.encryptPassword(this.state.password),
                "confirmPassword":this.encryptPassword(this.state.confirmPassword),
                "email":email,
                "accountName":companyName,
                "fromWebsite":true,
              }
              let Apis = Utility.getApis().apis;
              Utils.fetchService.call(this, {
                  "method": "POST",
                  "url": Apis.signupAPI,
                  "body": JSON.stringify(data),
                  "callBack": (result) => {
                      this.props.history.push('/welcome')
                  }
                });
              });
            });
          }
        }
  updateField(event, name){
    var val="";
    if(name==="location"|| name==="language"){
      val = event
    }else{
      val = event.target.value;
    }
    this.setState((prevState, props) => {
      return { [name]: val }
    });
  }
  cancel(){
    sessionStorage.removeItem('tempdata');
    this.props.history.push( '/');
  }

  render() {
    /*  const countries = [
         { value: 'us', label: 'USA' }
      ]*/
      const languages = [
         { value: 'en-US', label: 'English' }
      ]
      return (
          <div className="passwordscreen">
          <Loaders/>
              <div className="plain-header sticky">
                <div className="logo"></div>
              </div>
              <div className="passwordscreen-container ">
                <div className="display-inline first-side ">
                <div className="card-container bm-page_password">
                  <h1 className="card-heading text-center">Your Location, Language Preference and Password</h1>
                  <div><p className="txt">Review your country, you can change this anytime</p></div>
                  <form onSubmit={(event) => this.handleSubmit(event)} >
                  <div ><Select
                    classNamePrefix="select"
                    defaultValue={Countries[0]}
                    isClearable={true}
                    name="location"
                    onChange={(event) => this.updateField(event,"location")}
                    options={Countries}
                  /></div>
                  <div><p className="txt">Select your language preference. you can change this anytime.</p></div>
                  <div ><Select

                    classNamePrefix="select"
                    defaultValue={languages[0]}
                    isClearable={true}
                    name="language"
                    onChange={(event) => this.updateField(event,"language")}
                    options={languages}
                  /></div>
                  <div><p className="txt">Please set your password. you can reset your password from login screen anytime.</p></div>
                  <div className="text-center"><input required id="password" className="inputbox" type="password" name="password" value={this.state.password} size="40" onChange={(event) => this.updateField(event,"password")}  placeholder="Password"/></div>
                  <div className="text-center"><input required id="confirmPassword" className="inputbox" type="password" name="confirmPassword" value={this.state.confirmPassword} size="40" onChange={(event) => this.updateField(event,"confirmPassword")}  placeholder="Confirm Password"/></div>
                  <div className="text-center">
                    <div className="display-inline  button text-right"><input type="submit" onClick={this.cancel}  value="Cancel" className="submit-button"/></div>
                    <div className="display-inline button text-right"><input type="submit"  value="Next" className="submit-button"/></div>
                  </div>

                  <div className="g-recaptcha" data-sitekey="6Le3QZwUAAAAALnpkqw_mr4GCVXRlF2aBVPWdX51"></div>
                  </form>
                </div>
                </div>
                <div className="other-side display-inline "><div className="app-mock"></div></div>
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
)(PasswordScreen);

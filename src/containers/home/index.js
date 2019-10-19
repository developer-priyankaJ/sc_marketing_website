import React, { Component } from 'react';
import MenuBar from '../../components/MenuBar.js';
import HomeIntro from '../../components/HomeIntro.js';
import SupplyHubInfo from '../../components/SupplyHubInfo.js';
import '../../assets/css/scss/fontawesome.scss';
import '../../assets/css/scss/solid.scss';
import Footer from '../../components/Footer.js';
import Modal from 'react-responsive-modal';
import * as Utils from '../../utils';
//import { Apis } from '../../constants';
import * as Utility from '../../utils/utility';
import Loaders from '../Loader';
import * as LoaderAction from '../Loader/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ConfirmCode from '../../components/ConfirmCode';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "email":"",
        "signUpModal": false,
        "formSubmitted":false,
        "showError": false
    }
    this.signUpRef =  React.createRef();
    this.submitForm = this.submitForm.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openSignUp = this.openSignUp.bind(this);
  }
  componentDidMount(){
    sessionStorage.removeItem("tempdata");
    console.log("env ==>",process.env.REACT_APP_PROJECT_ENV);
  }
  openSignUp(){
        this.signUpRef.current.click();
  }
  handleSubmit(){
    this.setState((prevState, props) => {
      return { "email": "", "formSubmitted":true }
    });
  }
  submitForm(event, value){
      event.preventDefault();
      var data = {
        "apiToken":"xlK6cQsQRkvKdhIYH9n15yuzIhaLuiug",
        "email":value,
        "informedFlag" : true
      }
      var that = this;
      let Apis = Utility.getApis().apis;
     Utils.fetchService.call(this, {
          "method": "POST",
          "url": Apis.verifyEmailAPI,
          "body": JSON.stringify(data),
          "callBack": (result) => {
            if(result && !result.isEmailExist){
              that.setState((prevState, props) => {
                return { "email": value, "signUpModal":true }
              });
            }else{
              that.setState((prevState, props) => {
                return { "showError":true }
              });
            }
          }
        });


    /*  let cookieVal = getCookie("username");
      let obj={};
      if(cookieVal){
        obj = {"email":value, "username":cookieVal};
      }else{
        obj = {"email":value};
      }
      sessionStorage.setItem('tempdata', JSON.stringify(obj));
      this.props.history.push({
              pathname: '/getStarted',
              state: obj
            });*/
      return false;
  }
  closeModal( name ){
    this.setState((prevState, props) => {
      return { [name]: false ,
      "formSubmitted": false}
    });
  }
  componentWillUnmount() {

  }
  render() {
      return (
          <div className="homepage-content">
           <MenuBar signUpRef={this.signUpRef}/>
           <Loaders/>
           <HomeIntro submitForm={this.submitForm} openSignUp={this.openSignUp} showError={this.state.showError}/>
           <SupplyHubInfo/>
           <div className="footer-area">
             <Footer/>
           </div>
           <Modal modalId="signup-modal" className="modal" closeOnOverlayClick={false} open={this.state.signUpModal} onClose={(event) => this.closeModal("signUpModal")} >
            <div className="modal-container bm-type_login">
               <div className={this.state.formSubmitted ? "hidden":"visible"}>
                   <ConfirmCode email={this.state.email} informedFlag={true} handleSubmit={this.handleSubmit} isModal={true}/>
                </div>
                <div className={this.state.formSubmitted ? "visible":"hidden"}>
                  <div className="text-center icon"><i className="fal fa-paper-plane"></i></div>
                  <h2 className="text-center"> Thank You! </h2>
                  <p className="text-center bm-type_thankyou">Thank you for your interest in ScopeHub and our solution. We will add you to our newsletter distribution list where we will provide news updates on our private Beta and availability of our "Free Plan". We are glad you are here with us!</p>
                  <p className="text-center bm-type_marginsmall">Best, </p>
                  <p className="text-center bm-type_marginlarge">Scopehub Team</p>
                  <div className="text-center">
                    <input defaultValue="CLOSE" type="button" className="close-button bm-type_thankyou" onClick={() => this.closeModal("signUpModal")}/>
                  </div>
                </div>
            </div>
          </Modal>
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
)(Home);

import React, { Component } from 'react';
import { NavLink  } from 'react-router-dom';
import DropdownMenu from 'react-dd-menu';
import 'react-dd-menu/dist/react-dd-menu.css';
import '../assets/css/menubar.scss';
import Modal from 'react-responsive-modal';
//import {Apis } from '../constants';
import * as Utility from '../utils/utility';
import * as Utils from '../utils';
import Loaders from '../containers/Loader';
import * as LoaderAction from '../containers/Loader/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../assets/css/scss/fontawesome.scss';
import '../assets/css/scss/light.scss';

class MenuBar extends Component {
  constructor() {
    super();
    this.state = {
          "whyScMenu":false,
          "solutionsMenu":false,
          "resourcesMenu":false,
          "mobileMenu":false,
          "whyScMobile": false,
          "solutionsMobile":false,
          "resourcesMobile":false,
          "signUpModal":false,
          "email":"",
          "formSubmitted": false
    };
    this.click = this.click.bind(this);
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.setMenuItem = this.setMenuItem.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.toggleSubMenu = this.toggleSubMenu.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  componentDidMount(){

  }
  updateEmail(value){
    this.setState((prevState, props) => {
      return {"email":value}
    });
  }
  submitForm(event){
    event.preventDefault();
    let Apis = Utility.getApis().apis;
    var data = {
       "apiToken":"xlK6cQsQRkvKdhIYH9n15yuzIhaLuiug",
       "email":this.state.email,
       "subject":"Pilot Participant Request",
       "question":"I want to know more about scopehub. please accept my request."
    }, that = this;
    Utils.fetchService.call(this, {
        "method": "POST",
        "url": Apis.contactApi,
        "body": JSON.stringify(data),
        "callBack": (result) => {
          that.setState((prevState, props) => {
            return {
            "email":"",
            "formSubmitted": true
           }
          });
        }
      });
    return false;
  }
  openModal( name ){
    this.setState((prevState, props) => {
      return { [name]: true }
    });
  }
  closeModal( name ){
    this.setState((prevState, props) => {
      return { [name]: false ,
      "formSubmitted": false}
    });
  }
  toggleMobileMenu(){
    this.setState((prevState, props) => {
      return { "mobileMenu": !this.state.mobileMenu }
    });
    this.setState((prevState, props) => {
      return { "whyScMobile": false }
    });
    this.setState((prevState, props) => {
      return { "solutionsMobile": false }
    });
    this.setState((prevState, props) => {
      return { "resourcesMobile": false }
    });
  }
  toggleSubMenu(key){
    this.setState((prevState, props) => {
      return { [key]: !this.state[key] }
    });
  }
  setMenuItem( data ){
    sessionStorage.setItem('selectedMenu', JSON.stringify({"key":data}));
    this.forceUpdate();
  }

  toggle( key ) {
    if(key!=="whyScMenu"){
      this.setState((prevState, props) => {
        return { "whyScMenu": false }
      });
    }
    if(key!=="solutionsMenu"){
      this.setState((prevState, props) => {
        return { "solutionsMenu": false }
      });
    }
    if(key!=="resourcesMenu"){
      this.setState((prevState, props) => {
        return { "resourcesMenu": false }
      });
    }
    this.setState((prevState, props) => {
      return { [key]: !this.state[key] }
    });
  }

  open(key){
    this.setState((prevState, props) => {
      return { [key]: true }
    });
  }
  close( key ) {
      this.setState((prevState, props) => {
        return { "whyScMenu": false }
      });

      this.setState((prevState, props) => {
        return { "solutionsMenu": false }
      });

      this.setState((prevState, props) => {
        return { "resourcesMenu": false }
      });

  }

  click() {
    console.log('You clicked an item');
  }

  render() {
    const menuOptions = {
      "whySc":{
        isOpen: this.state.whyScMenu,
        close: this.close,
        toggle: <NavLink to="/search" >Why ScopeHub?</NavLink>,
        align: 'left',
        closeOnInsideClick: false
      },
      "solutions":{
        isOpen: this.state.solutionsMenu,
        close: this.close,
        toggle: <NavLink to="/search">Solutions</NavLink>,
        align: 'left'
      },
      "resources":{
        isOpen: this.state.resourcesMenu,
        close: this.close,
        toggle: <NavLink to="/search" >Resources</NavLink>,
        align: 'left'
      }

    };
    var selectedMenu = JSON.parse(sessionStorage.getItem('selectedMenu'));
    if(!(selectedMenu && selectedMenu.key)){
      selectedMenu = {
        "key":""
      }
    }
    let links = Utility.getApis().links;
    return (
            <div className="menubar">
            <Loaders/>
              <div className="menu-container">
                <div className="logo"><a href="/" className="sc-logo"> </a></div>
                <div className="main-menu">
                    <div id="whyScMenu" onMouseEnter={(event) => {this.open(event.target.id)}} onMouseLeave={(event) => {this.close(event.target.id)}} className={selectedMenu.key==="whySc" ? "menubar__item selected":"menubar__item"}>
                      <DropdownMenu  {...menuOptions.whySc} onMouseEnter={(event) => {this.open("whyScMenu")}} onMouseLeave={(event) => {this.close("whyScMenu")}}>
                        <li><NavLink to="/home:entry" onClick={(event) => this.setMenuItem("whySc")}>About The Products</NavLink></li>
                        <li><NavLink to="/dateEntry" onClick={(event) => this.setMenuItem("whySc")}>How it Works</NavLink></li>
                        <li><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("whySc")}>Customers</NavLink></li>
                        <li><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("whySc")}>Security</NavLink></li>
                        </DropdownMenu>
                    </div>
                    <div id="solutionsMenu" onMouseEnter={(event) => {this.open(event.target.id)}} onMouseLeave={(event) => {this.close(event.target.id)}} className={selectedMenu.key==="solutions" ? "menubar__item selected hidden":"menubar__item hidden"}>
                      <DropdownMenu {...menuOptions.solutions} onMouseEnter={(event) => {this.open("solutionsMenu")}} onMouseLeave={(event) => {this.close("solutionsMenu")}}>
                        <li><NavLink to="/home:entry" onClick={(event) => this.setMenuItem("solutions")}>Overview</NavLink></li>
                        <li><NavLink to="/dateEntry" onClick={(event) => this.setMenuItem("solutions")}>Retail</NavLink></li>
                        <li><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("solutions")}>Discrete Manufacturing</NavLink></li>
                        <li><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("solutions")}>Process Industry</NavLink></li>
                        <li><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("solutions")}>Distribution</NavLink></li>
                        <li><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("solutions")}>Logistics</NavLink></li>
                        </DropdownMenu>
                    </div>
                    <div id="resourcesMenu" onMouseEnter={(event) => {this.open(event.target.id)}} onMouseLeave={(event) => {this.close(event.target.id)}} className={selectedMenu.key==="resources" ? "menubar__item selected":"menubar__item"}>
                      <DropdownMenu {...menuOptions.resources} onMouseEnter={(event) => {this.open("resourcesMenu")}} onMouseLeave={(event) => {"resourcesMenu"}}>
                        <li><NavLink to="/home:entry" onClick={(event) => this.setMenuItem("resources")}>About The Products</NavLink></li>
                        <li><NavLink to="/dateEntry" onClick={(event) => this.setMenuItem("resources")}>How it Works</NavLink></li>
                        <li><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("resources")}>Customers</NavLink></li>
                        <li><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("resources")}>Security</NavLink></li>
                        </DropdownMenu>
                    </div>
                    <div className={selectedMenu.key==="enterprise" ? "menubar__item no-dd selected":"menubar__item no-dd"}>
                      <NavLink to="/enterprise"  onClick={(event) => this.setMenuItem("enterprise")}>Enterprise</NavLink>
                    </div>
                    <div className={selectedMenu.key==="pricing" ? "menubar__item selected no-dd":"menubar__item no-dd"}>
                      <NavLink to="/pricing"  onClick={(event) => this.setMenuItem("pricing")}>Pricing</NavLink>
                    </div>
                    <div className="sign-in display-inline">
                        <div onClick={() => this.openModal("signUpModal")} ref={this.props.signUpRef} className="sign-in-button display-inline bm-type_beta wrapper-button">SIGN UP<div className="corner-ribbon bottom-right">BETA</div></div>
                        <input type="submit" value="SIGN IN" className="sign-in-button bm-type_signin" onClick={() => {var win = window.open(links.SH_App, '_blank');win.focus();}}/>
                    </div>
                </div>
                <div className="hamburger" onClick={this.toggleMobileMenu}><span></span><span></span><span></span></div>
                </div>
                <div className={this.state.mobileMenu ? "mobile-menu visible":" mobile-menu hidden"}>
                  <div className="mobile-menu-container">
                      <div className="text-center menu-item" onClick={(event)=>this.toggleSubMenu("whyScMobile")}>Why ScopeHub?</div>
                      <div className={this.state.whyScMobile ? "sub-menu visible":"sub-menu hidden" }>
                        <div>
                          <div className="sub-menu-link"><NavLink to="/home:entry" onClick={(event) => this.setMenuItem("whySc")}>About The Products</NavLink></div>
                          <div className="sub-menu-link"><NavLink to="/dateEntry" onClick={(event) => this.setMenuItem("whySc")}>How it Works</NavLink></div>
                          <div className="sub-menu-link"><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("whySc")}>Customers</NavLink></div>
                          <div className="sub-menu-link"><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("whySc")}>Security</NavLink></div>
                        </div>
                      </div>
                      <div className="text-center hidden menu-item" onClick={(event)=>this.toggleSubMenu("solutionsMobile")}>Solutions</div>
                      <div className={this.state.solutionsMobile ? "sub-menu visible":"sub-menu hidden" }>
                          <div>
                            <div className="sub-menu-link"><NavLink to="/home:entry" onClick={(event) => this.setMenuItem("solutions")}>Overview</NavLink></div>
                            <div className="sub-menu-link"><NavLink to="/dateEntry" onClick={(event) => this.setMenuItem("solutions")}>Retail</NavLink></div>
                            <div className="sub-menu-link"><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("solutions")}>Discrete Manufacturing</NavLink></div>
                            <div className="sub-menu-link"><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("solutions")}>Process Industry</NavLink></div>
                            <div className="sub-menu-link"><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("solutions")}>Distribution</NavLink></div>
                            <div className="sub-menu-link"><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("solutions")}>Logistics</NavLink></div>
                          </div>
                      </div>
                      <div className="text-center menu-item" onClick={(event)=>this.toggleSubMenu("resourcesMobile")}>Resources</div>
                      <div className={this.state.resourcesMobile ? "sub-menu visible":"sub-menu hidden" }>
                        <div>
                          <div className="sub-menu-link"><NavLink to="/home:entry" onClick={(event) => this.setMenuItem("resources")}>About The Products</NavLink></div>
                          <div className="sub-menu-link"><NavLink to="/dateEntry" onClick={(event) => this.setMenuItem("resources")}>How it Works</NavLink></div>
                          <div className="sub-menu-link"><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("resources")}>Customers</NavLink></div>
                          <div className="sub-menu-link"><NavLink to="/paymentEntry" onClick={(event) => this.setMenuItem("resources")}>Security</NavLink></div>
                        </div>
                      </div>
                      <div className="text-center menu-item" >  <NavLink to="/enterprise"  onClick={(event) => this.setMenuItem("enterprise")}>Enterprise</NavLink></div>
                      <div className="text-center menu-item" >  <NavLink to="/pricing"  onClick={(event) => this.setMenuItem("pricing")}>Pricing</NavLink></div>
                      <div className="sign-in ">
                          <div onClick={() => this.openModal("signUpModal")} ref={this.props.signUpRef} className="sign-in-button display-inline bm-type_beta wrapper-button">SIGN UP<div className="corner-ribbon bottom-right">BETA</div></div>
                          <input type="submit" value="SIGN IN" className="sign-in-button bm-type_signin" onClick={() => {var win = window.open(links.SH_App, '_blank');win.focus();}}/>
                      </div>
                  </div>
                </div>
                <Modal modalId="signup-modal" className="modal" closeOnOverlayClick={false} open={this.state.signUpModal} onClose={(event) => this.closeModal("signUpModal")} >
                 <div className="modal-container bm-type_login">
                    <div className={this.state.formSubmitted ? "hidden":"visible"}>
                        <p className="text-center">We are currently in a Closed beta phase.</p>
                        <p className="text-center">If you would like to participate in our Beta program, please drop us an email here and we will contact you. </p>
                        <div className="group text-center">
                        <form name="emailform" method="POST" onSubmit={this.submitForm}>
                          <div className="left">
                            <span className="left-content"><input required id="emailid" className="email" type="email" name="email" value={this.state.email} size="40" onChange={(event) => this.updateEmail(event.target.value)}  placeholder="Enter Your Email"/></span>
                          </div>
                          <div className="right">
                            <p className="right-content"><input type="submit" value="Contact Me" className="submit-button"/></p>
                          </div>
                          </form>
                        </div>
                     </div>
                     <div className={this.state.formSubmitted ? "visible":"hidden"}>
                       <div className="text-center icon"><i className="fal fa-paper-plane"></i></div>
                       <h2 className="text-center"> Thank You! </h2>
                       <p className="text-center bm-type_thankyou">One of our pilot team member will reach out to you very shortly.</p>
                       <p className="text-center bm-type_marginsmall">Best, </p>
                       <p className="text-center bm-type_marginlarge">Scopehub Support Team </p>
                       <div className="text-center">
                         <input defaultValue="CLOSE" type="button" className="close-button bm-type_thankyou" onClick={() => this.closeModal("signUpModal")}/>
                       </div>
                     </div>
                 </div>
               </Modal>
              </div>
	       )
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
)(MenuBar);

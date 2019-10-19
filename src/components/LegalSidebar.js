import React, { Component } from 'react';
import 'react-dd-menu/dist/react-dd-menu.css';
import '../assets/css/home.scss';
import '../assets/css/scss/fontawesome.scss';
import '../assets/css/scss/solid.scss';
import '../assets/css/scss/regular.scss';
import '../assets/css/scss/light.scss';
import { NavLink  } from 'react-router-dom';

class LegalSidebar extends Component {
  constructor(props) {
    super(props);
    this.mobileHeaderRef = React.createRef();
  }

  handleMobileNav(event, action){
    if(action==="expand"){
      this.mobileHeaderRef.current.classList.add("is-selected");
    }else{
      this.mobileHeaderRef.current.classList.remove("is-selected");
    }

  }
  render() {
    return (
            <div className="legal-sidebars">
                <div className="nav">
                    <button className="nav_mobile-header" ref={this.mobileHeaderRef}>
                        <span className="collapsed-text" onClick={(event) => this.handleMobileNav(event, "expand")}>
                            <span>{this.props.navHeader}</span>
                            <i className="fal fa-angle-down arrow-icon float-right"></i>
                        </span>
                        <span className="expanded-text" onClick={(event) => this.handleMobileNav(event, "collapse")}>
                            <i className="fal fa-angle-left arrow-icon float-left"></i>
                            <span>Close legal navigation </span>
                        </span>
                    </button>
                    <div className="sidebar-menu">
                        <h3 className="list-header">Getting Started</h3>
                        <ul className="nav-list">
                          <li className={this.props.selectedLink==="overview" ? "nav-list-item selected" : "nav-list-item"}><NavLink to="/legal">Overview</NavLink></li>
                        </ul>
                        <h3 className="list-header">Terms</h3>
                        <button className="nav_mobile-header"/>
                        <ul className="nav-list">
                          <li className={this.props.selectedLink==="terms-of-service" ? "nav-list-item selected" : "nav-list-item"}><NavLink to="/terms-of-service">Customer terms of service</NavLink></li>
                        {/*  <li className={this.props.selectedLink==="user-terms-of-service" ? "nav-list-item selected" : "nav-list-item"}><NavLink to="/user-terms-of-service">User terms of service</NavLink></li>
                          <li className={this.props.selectedLink==="api-terms-of-service" ? "nav-list-item selected" : "nav-list-item"}><NavLink to="/api-terms-of-service">API terms of service</NavLink></li>
                      */}  </ul>
                        <h3 className="list-header">Policies</h3>
                        <button className="nav_mobile-header"/>
                        <ul className="nav-list">
                          <li className={this.props.selectedLink==="privacy-policy" ? "nav-list-item selected" : "nav-list-item"}><NavLink to="/privacy-policy">ScopeHub privacy policy</NavLink></li>
                        {/*  <li className={this.props.selectedLink==="acceptable-use-policy" ? "nav-list-item selected" : "nav-list-item"}><NavLink to="/acceptable-use-policy">Acceptable use policy</NavLink></li> */}
                          <li className={this.props.selectedLink==="cookie-policy" ? "nav-list-item selected" : "nav-list-item"}><NavLink to="/cookie-policy">Cookie policy</NavLink></li>
                        {/*  <li className={this.props.selectedLink==="gdpr-commitment" ? "nav-list-item selected" : "nav-list-item"}><NavLink to="/gdpr-commitment">ScopeHub's GDPR Commitment</NavLink></li>*/}
                        </ul>
                        <h3 className="list-header">Security</h3>
                        <button className="nav_mobile-header"/>
                        <ul className="nav-list">
                      {/*    <li className={this.props.selectedLink==="security-overview" ? "nav-list-item selected" : "nav-list-item"}><NavLink to="/security-overview">Overview</NavLink></li>
                        */}   <li className={this.props.selectedLink==="security-practices" ? "nav-list-item selected" : "nav-list-item"}><NavLink to="/security-practices">Security practices</NavLink></li>
                         <li className={this.props.selectedLink==="report-vulnerability" ? "nav-list-item selected" : "nav-list-item"}><NavLink to="/report-vulnerability">Report a vulnerability</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
	       )
  }
}

export default LegalSidebar;

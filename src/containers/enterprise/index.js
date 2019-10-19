import React, { Component } from 'react';
import MenuBar from '../../components/MenuBar.js';
import Footer from '../../components/Footer.js';
import '../../assets/css/enterprise.scss';

class Enterprise extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    //sessionStorage.removeItem("tempdata");
  }

  handleSubmit(){
    this.props.history.push("/contactSales")
  }
  componentWillUnmount() {

  }
  render() {
      return (
          <div className="enterprise-content">
           <MenuBar/>
           <div className="content-container">
              <header className="display-inline first-half">
                <h1 className="heading">Efficient enterprises collaborate in ScopeHub</h1>
                <p className="header_text">Better business decisions happen faster in ScopeHub, the collaboration hub for connected enterprises.</p>
                <div className="button"><input type="submit" onClick={this.handleSubmit}  value="Contact Sales" className="submit-button"/></div>
              </header>
              <div className="display-inline second-half">
                  <div className="app-img"></div>
              </div>
           </div>
           <div className="enterprise-benefits">
              <div className="benefits-container">
                <div className="feature-grid v-three text-center">
                  <div className="grid-item text-left">
                    <div className="teamworkIcon"></div>
                    <h2 className="grid-item-title">Enable efficient teamwork</h2>
                    <p className="grid-item-copy">Work in ScopeBub happens in channels – a single place to communicate, share files and make decisions. Channels bring together cross-functional and cross-departmental teams so everyone always stays on the same page.</p>
                  </div>
                  <div className="grid-item text-left">
                    <div className="timeIcon"></div>
                    <h2 className="grid-item-title">Save time for smarter work</h2>
                    <p className="grid-item-copy">Working in ScopeHub provides faster access to people and information, reducing the number of meetings and emails it takes to get work done. Organised channels and powerful search put instant communication and knowledge at everyone’s fingertips. </p>
                  </div>
                  <div className="grid-item text-left">
                    <div className="collaborationIcon"></div>
                    <h2 className="grid-item-title">Put collaboration in motion</h2>
                    <p className="grid-item-copy">Collaborate from anywhere with the fast, secure and fully-featured mobile app. With on-the-go access to direct and group messaging, file sharing, calls and tools, you can move seamlessly from desktop to mobile and back again.</p>
                  </div>
                </div>
           </div>
           </div>
           <div className="footer-area">
             <Footer/>
           </div>
          </div>
      );
}
}

export default Enterprise;

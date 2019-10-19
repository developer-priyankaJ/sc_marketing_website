import React, { Component } from 'react';
import MenuBar from './MenuBar.js';
import '../assets/css/legal.scss';
import Footer from './Footer.js';
import LegalSidebar from './LegalSidebar.js';


class LegalCommon extends Component {
  render() {
      return (
        <div>
            <div className="legal-container">
                <MenuBar/>
                <section className={this.props.mainpage ? "legal-hero" : "legal-hero bm-type_color"}>
                    <div>
                        <h1  className="hero-header">{this.props.header}</h1>
                    </div>
                </section>
                <div className={this.props.mainpage ? "legal-main bm-type_color" : "legal-main"}>
                  <div className="legal-main-container">
                    <div className="feature-grid v-two-third">
                        <LegalSidebar selectedLink={this.props.selectedLink} navHeader={this.props.navHeader}/>
                        <div className={this.props.mainpage ? "legal-content bm-type_padding" : "legal-content"}>
                          {this.props.children}
                        </div>
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

export default LegalCommon;

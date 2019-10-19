import React, { Component } from 'react';
import MenuBar from '../../components/MenuBar.js';
import '../../assets/css/scss/fontawesome.scss';
import '../../assets/css/scss/light.scss';
import Footer from '../../components/Footer.js';

import '../../assets/css/pricing.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.signUpRef = React.createRef();
    this.submitForm = this.submitForm.bind(this);
  }
  componentDidMount(){
    //sessionStorage.removeItem("tempdata");
  }

  submitForm(event, key){
      event.preventDefault();
      if(key==="contactSales"){
        this.props.history.push('/contactSales');
      }else if(key==="signUp"){
          this.signUpRef.current.click();
      }
      return false;
  }
  componentWillUnmount() {

  }
  render() {
      return (
          <div className="pricing-content">
           <MenuBar signUpRef={this.signUpRef}/>
           <div className="main">
           <div className="tabs">
             <Tabs>
                 <TabList>
                   <Tab>ScopeHub for Teams</Tab>
                   <Tab>ScopeHub for Enterprise</Tab>
                 </TabList>
                 <TabPanel>
                 <section className="pricing-header">
                     <div className="header-content">
                       <h3 className="text-center heading">ScopeHub For Individuals & Teams</h3>
                       <p className="">
                         ScopeHub for Individuals & Teams provides Supply Chain Visibility Services for you, your team, or company. ScopeHub features a consumption-based pricing model with the mission to continuously enhance supply chain services and pass savings due to technology, volumes, or economies of scale back to our subscribers.  You only pay for the services you use.
                       </p>
                       <p className="">
                         We are currently in a private Beta phase.  Please click on the Sign Up (Beta) button below to join the free private Beta program.  Pilot customers will enjoy preferential pricing after their pilot engagement ends.
                       </p>
                       <p className="header-info"><strong>* We plan on entering our public Beta in the fall of 2019.</strong></p>
                       <p className="header-info"><strong>* Standard and Plus plans will become available starting with our public Beta. The pricing listed is subject to change pending Pilot feedback.</strong></p>
                     </div>
                 </section>
                 <section className="pricing-grid">
                     <div className="grid-content">
                         <div className="grid-column">
                         </div>
                         <div className="grid-column">
                             <h2 className="column-title text-center">Free</h2>
                             <h2 className="column-subtitle text-center">$0</h2>
                             <div className="info-content"></div>
                             <div className="sign-in bm-type_pricing">
                               <div onClick={(event) => this.submitForm(event,"signUp")} className="sign-in-button display-inline bm-type_beta wrapper-button bm-type_pricing">SIGN UP<div className="corner-ribbon bottom-right">BETA</div></div>
                             </div>
                             <p className="text-center">For anyone or any business with a single user to try out ScopeHub for an unlimited period of time.  Shared data access is limited to the most recent 5 GB of data shared.</p>

                         </div>
                         <div className="grid-column">
                             <h2 className="column-title text-center">Standard</h2>
                             <h2 className="column-subtitle text-center">$9.95</h2>
                             <div className="info-content">
                               <p className="info text-center">per user, per month</p>
                               <p className="info text-center">billed annually</p>
                               <p className="info text-center">$12 billed monthly</p>
                               <p className="info bm-type_other text-center"><strong>+$0.48/GB-month of shared data</strong></p>
                             </div>
                             <div className="sign-in bm-type_pricing">
                                 <input type="submit" disabled value="Buy Standard" className="submit-button disabled bm-type_pricing"/>
                             </div>
                             <p className="text-center">For businesses with one or more users who are ready to engage with their supply chain partners to address supply & demand visibility on an ongoing basis.</p>
                         </div>
                         <div className="grid-column">
                           <h2 className="column-title text-center">Plus</h2>
                           <h2 className="column-subtitle text-center">$14.95</h2>
                           <div className="info-content">
                             <p className="info text-center">per user, per month</p>
                             <p className="info text-center">billed annually</p>
                             <p className="info text-center">$18 billed monthly</p>
                             <p className="info bm-type_other text-center"><strong>+$0.48/GB-month of shared data (ready access)</strong></p>
                             <p className="info text-center"><strong>+$0.075/GB-month of shared data (archived access)</strong></p>
                           </div>
                           <div className="sign-in bm-type_pricing">
                               <input type="submit" disabled value="Buy Plus" className="bm-type_pricing disabled submit-button"/>
                           </div>
                           <p className="text-center">For individuals, teams, and businesses that have more extensive requirements as part of their supply chain partner engagement, for example, SSO, special shared data security (encryption), guaranteed uptime, blockchain-based change control, tiered storage, or API access.</p>
                         </div>
                     </div>
                 </section>
                 <div className="hidden">Feature 1</div>
                 <section className="hidden pricing-grid">
                     <div className="grid-content">
                         <div className="grid-column">
                         </div>
                         <div className="grid-column">
                         </div>
                         <div className="grid-column">
                         </div>
                         <div className="grid-column">
                         </div>
                      </div>
                  </section>
                 </TabPanel>
                 <TabPanel>
                 <section className="pricing-header">
                     <div className="header-content">
                       <h3 className="text-center heading">ScopeHub Enterprise</h3>
                        <p className="">
                          ScopeHub Enterprise integrates multiple services subscriptions at the enterprise level and provides provides additional administrative, functional, and scalability related features.
                        </p>
                       <p className="">For more information, please contact our sales team.</p>
                       <div className="text-center"><input type="submit" onClick={(event) => this.submitForm(event, "contactSales")} value="CONTACT SALES" className="submit-button  bm-type_pricing"/></div>
                      </div>
                 </section>

                 </TabPanel>
              </Tabs>
            </div>

           </div>
           <div className="footer-area">
             <Footer/>
           </div>
          </div>
      );
}
}

export default Pricing;

import React, { Component } from 'react';
import LegalCommon from '../../components/LegalCommon.js';
import '../../assets/css/legal.scss';
import { NavLink  } from 'react-router-dom';

class UserTermsOfService extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "header": "User terms of service",
        "selectedLink": "user-terms-of-service",
        "navHeader": "Terms"
    }

  }
  render() {
      return (
        <div>
            <LegalCommon header={this.state.header} navHeader={this.state.navHeader} selectedLink={this.state.selectedLink}>
            <p><strong>Effective date: 20 April 2018</strong></p>

            <p>These User Terms of Service (the <strong>“User Terms”</strong>) govern your access and use of our online workplace productivity tools and platform (the <strong>“Services”</strong>). Please read them carefully. Even though you are signing into an existing workspace, these User Terms apply to you as a user of the Services. Thanks for using ScopeHub.</p>

            <h2>First things first</h2>
            <h3>These User Terms are legally binding</h3>
            <p>These User Terms are a legally binding contract between you and us. As part of these User Terms, you agree to comply with the most recent version of our <NavLink to="/acceptable-use-policy">Acceptable Use Policy</NavLink>, which is incorporated by reference into these User Terms. If you access or use the Services, or continue accessing or using the Services after being notified of a change to the User Terms or the <NavLink to="/acceptable-use-policy">Acceptable Use Policy</NavLink>, you confirm that you have read, understand and agree to be bound by the User Terms and the <NavLink to="/acceptable-use-policy">Acceptable Use Policy</NavLink>. “We”, “our” and “us” currently refers to the applicable ScopeHub entity in the Contract (defined below).</p>

            <h2>The Customer’s choices and instructions</h2>
            <h3>You are an “Authorised User” of a workspace controlled by a “Customer”</h3>
            <p>An organisation or other third party that we refer to in these User Terms as <strong>the “Customer”</strong> has invited you to a workspace (i.e. a unique domain where a group of users may access the Services, as further described in our <a href="https://support.scopehub.org/">Help Centre</a> pages). If you are joining one of your employer’s workspaces, for example, the Customer is your employer. If you are joining a workspace created by your friend using her personal email address to work on her new startup idea, she is our Customer and she is authorising you to join her workspace.</p>

            <h3>What this means for You – and for Us</h3>
            <p>The Customer has separately agreed to our <NavLink to="/terms-of-service" >Customer Terms of Service</NavLink> or entered into a written agreement with us (in either case, the <strong>“Contract”</strong>) that permitted the Customer to create and configure a workspace so that you and others could join (each invitee granted access to the Services, including you, is an <strong>“Authorised User”</strong>). The Contract contains our commitment to deliver the Services to the Customer, who may then invite Authorised Users to join its workspace(s). When an Authorised User (including you) submits content or information to the Services, such as messages or files (<strong>“Customer Data”</strong>), you acknowledge and agree that the Customer Data is owned by the Customer and the Contract provides the Customer with many choices and control over that Customer Data. For example, the Customer may provide or withdraw access to the Services, enable or disable third-party integrations, manage permissions, retention and export settings, transfer or assign workspaces, share channels or consolidate your workspace or channels with other workspaces or channels, and these choices and instructions may result in the access, use, disclosure, modification or deletion of certain or all Customer Data. Please take a look at our <a href="https://support.scopehub.org/">Help Centre</a> pages for more information on our different Service subscriptions and the options available to the Customer.</p>

            <h3>The relationship between You, the Customer and Us</h3>
            <p>AS BETWEEN US AND THE CUSTOMER, YOU AGREE THAT IT IS SOLELY THE CUSTOMER’S RESPONSIBILITY TO (A) INFORM YOU AND ANY AUTHORISED USERS OF ANY RELEVANT CUSTOMER POLICIES AND PRACTICES AND ANY SETTINGS THAT MAY IMPACT THE PROCESSING OF CUSTOMER DATA; (B) OBTAIN ANY RIGHTS, PERMISSIONS OR CONSENTS FROM YOU AND ANY AUTHORISED USERS THAT ARE NECESSARY FOR THE LAWFUL USE OF CUSTOMER DATA AND THE OPERATION OF THE SERVICES; (C) ENSURE THAT THE TRANSFER AND PROCESSING OF CUSTOMER DATA UNDER THE CONTRACT IS LAWFUL; AND (D) RESPOND TO AND RESOLVE ANY DISPUTE WITH YOU AND ANY AUTHORISED USER RELATING TO OR BASED ON CUSTOMER DATA, THE SERVICES OR THE CUSTOMER’S FAILURE TO FULFIL THESE OBLIGATIONS. SLACK MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, TO YOU RELATING TO THE SERVICES, WHICH ARE PROVIDED TO YOU ON AN “AS IS” AND “AS AVAILABLE” BASIS.</p>

            <h2>A few ground rules</h2>
            <h3>You must be over the legal age</h3>
            <p>To the extent prohibited by applicable law, the Services are not intended for and should not be used by anyone under the age of 16. You represent that you are over the legal age and are the intended recipient of the Customer’s invitation to the Services. You may not access or use the Services for any purpose if either of the representations in the preceding sentence is not true. Without limiting the foregoing, you must be of legal working age.</p>

            <h3>While you’re here, you must follow the rules</h3>
            <p>To help ensure a safe and productive work environment, all Authorised Users must comply with our <NavLink to="/acceptable-use-policy">Acceptable Use Policy</NavLink> and any applicable policies established by the Customer. If you see inappropriate behaviour or content, please report it to your Primary Owner or employer.</p>

            <h3>You are here at the pleasure of the Customer (and Us)</h3>
            <p>These User Terms remain effective until the Customer’s subscription for you expires or terminates, or your access to the Services has been terminated by the Customer or us. Please contact the Customer if you at any time or for any reason wish to terminate your account, including due to a disagreement with any updates to these User Terms or the <NavLink to="/acceptable-use-policy">Acceptable Use Policy</NavLink>.</p>

            <h2>Limitation of liability</h2>
            <p>If we believe that there is a violation of the Contract, User Terms, the Acceptable Use Policy or any of our other policies that can simply be remedied by the Customer’s removal of certain Customer Data or taking other action, we will, in most cases, ask the Customer to take action rather than intervene. We may directly step in and take what we determine to be appropriate action (including disabling your account) if the Customer does not take appropriate action or we believe there is a credible risk of harm to us, the Services, Authorised Users or any third parties. IN NO EVENT WILL YOU OR WE HAVE ANY LIABILITY TO THE OTHER PARTY FOR ANY LOST PROFITS OR REVENUES OR FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, COVER OR PUNITIVE DAMAGES HOWEVER CAUSED, WHETHER IN CONTRACT, TORT OR UNDER ANY OTHER THEORY OF LIABILITY, AND WHETHER OR NOT THE PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. UNLESS YOU ARE ALSO A CUSTOMER (AND WITHOUT LIMITATION TO OUR RIGHTS AND REMEDIES UNDER THE CONTRACT), YOU WILL HAVE NO FINANCIAL LIABILITY TO US FOR A BREACH OF THESE USER TERMS. OUR MAXIMUM AGGREGATE LIABILITY TO YOU FOR ANY BREACH OF THE USER TERMS IS ONE HUNDRED US DOLLARS ($100) IN THE AGGREGATE. THE FOREGOING DISCLAIMERS WILL NOT APPLY TO THE EXTENT PROHIBITED BY APPLICABLE LAW AND DO NOT LIMIT EITHER PARTY’S RIGHT TO SEEK AND OBTAIN EQUITABLE RELIEF.</p>

            <h3>Application of consumer law</h3>
            <p>ScopeHub is a workplace tool intended for use by businesses and organisations and not for consumer purposes. To the maximum extent permitted by law, you hereby acknowledge and agree that consumer laws do not apply. If however any consumer laws (e.g. in Australia, the Competition and Consumer Act 2010 (Cth)) do apply and cannot otherwise be lawfully excluded, nothing in these User Terms will restrict, exclude or modify any statutory warranties, guarantees, rights or remedies you have and our liability is limited (at our option) to the replacement, repair or resupply of the Services or the pro-rata refund to the Customer of pre-paid fees for your subscription covering the remainder of the term.</p>

            <h3>Survival</h3>
            <p>The sections titled “The relationship between You, the Customer and Us”, “Limitation of liability” and “Survival” and all of the provisions under the general heading “General provisions” will survive any termination or expiry of the User Terms.</p>

            <h2>General provisions</h2>
            <h3>Email and ScopeHub messages</h3>
            <p>Except as otherwise set forth herein, all notices under the User Terms will be by email, although we may instead choose to provide notice to Authorised Users through the Services (e.g. a ScopeHubbot notification). Notices to ScopeHub should be sent to <a href="mailto:feedback@scopehub.com">feedback@scopehub.com</a>, except for legal notices, which must be sent to <a href="mailto:legal@scopehub.com">legal@scopehub.com</a>. A notice will be deemed to have been duly given (a) the day after it is sent, in the case of a notice sent by email; and (b) the same day, in the case of a notice sent through the Services. Notices under the Contract will be delivered solely to the Customer in accordance with the terms of that agreement.</p>

            <h3>Privacy policy</h3>
            <p>Please review our <NavLink to="/privacy-policy" >Privacy Policy</NavLink> for more information on how we collect and use data relating to the use and performance of our products.</p>

            <h3>Modifications</h3>
            <p>As our business evolves, we may change these User Terms or the <NavLink to="/acceptable-use-policy">Acceptable Use Policy</NavLink>. If we make a material change to the User Terms or the <NavLink to="/acceptable-use-policy">Acceptable Use Policy</NavLink>, we will provide you with reasonable notice prior to the change taking effect either by emailing the email address associated with your account or by messaging you through the Services. You can review the most current version of the User Terms at any time by visiting this page, and by visiting the following for the most current versions of the other pages that are referenced in these User Terms: <NavLink to="/acceptable-use-policy">Acceptable Use Policy</NavLink> and <a href="https://scopehub.com/intl/en-in/privacy-policy" >Privacy Policy</a>. Any material revisions to these User Terms will become effective on the date set forth in our notice and all other changes will become effective on the date we publish the change. If you use the Services after the effective date of any changes, that use will constitute your acceptance of the revised terms and conditions.</p>

            <h3>Waiver</h3>
            <p>No failure or delay by either party in exercising any right under the User Terms, including the <NavLink to="/acceptable-use-policy">Acceptable Use Policy</NavLink>, will constitute a waiver of that right. No waiver under the User Terms will be effective unless made in writing and signed by an authorised representative of the party being deemed to have granted the waiver.</p>

            <h3>Severability</h3>
            <p>The User Terms, including the <NavLink to="/acceptable-use-policy">Acceptable Use Policy</NavLink>, will be enforced to the fullest extent permitted under applicable law. If any provision of the User Terms is held by a court of competent jurisdiction to be contrary to law, the provision will be modified by the court and interpreted so as best to accomplish the objectives of the original provision to the fullest extent permitted by law, and the remaining provisions of the User Terms will remain in effect.</p>

            <h3>Assignment</h3>
            <p>You may not assign any of your rights or delegate your obligations under these User Terms, including the <NavLink to="/acceptable-use-policy">Acceptable Use Policy</NavLink>, whether by operation of law or otherwise, without the prior written consent of us (not to be unreasonably withheld). We may assign these User Terms in their entirety (including all terms and conditions incorporated herein by reference), without your consent, to a corporate affiliate or in connection with a merger, acquisition, corporate reorganisation or sale of all or substantially all of our assets.</p>

            <h3>Governing law, venue, fees</h3>
            <p>The User Terms, including the <NavLink to="/acceptable-use-policy">Acceptable Use Policy</NavLink>, and any disputes arising out of or related hereto, will be governed exclusively by the same applicable governing law of the Contract, without regard to conflicts of laws rules or the United Nations Convention on the International Sale of Goods. The courts located in the applicable venue of the Contract will have exclusive jurisdiction to adjudicate any dispute arising out of or relating to the User Terms, including the <NavLink to="/acceptable-use-policy">Acceptable Use Policy</NavLink>, or its formation, interpretation or enforcement.</p>

            <p>Each party hereby consents and submits to the exclusive jurisdiction of such courts. In any action or proceeding to enforce rights under the User Terms, the prevailing party will be entitled to recover its reasonable costs and legal fees.</p>

            <h3>Entire agreement</h3>
            <p>The User Terms, including any terms incorporated by reference into the User Terms, constitute the entire agreement between you and us and supersede all prior and contemporaneous agreements, proposals or representations, written or oral, concerning its subject matter. To the extent of any conflict or inconsistency between the provisions in these User Terms and any pages referenced in these User Terms, the terms of these User Terms will first prevail; provided, however, that if there is a conflict or inconsistency between the Contract and the User Terms, the terms of the Contract will first prevail, followed by the provisions in these User Terms, and then followed by the pages referenced in these User Terms (e.g. the Privacy Policy). The Customer will be responsible for notifying Authorised Users of those conflicts or inconsistencies and until such time the terms set forth herein will be binding.</p>

            <h3>Contacting ScopeHub</h3>
            <p>Please also feel free to contact us if you have any questions about ScopeHub’s user terms of service. You may contact us at <a href="mailto:feedback@scopehub.com">feedback@scopehub.com</a> or via our postal address below:</p>

            <p>For Customers and Authorised Users who use workspaces established for Customers in the US and Canada:</p>

            <p>ScopeHub Technologies<br/>500 Howard Street<br/>San Francisco, CA 94105<br/>United States</p>

            <p>For Customers and Authorised Users who use workspaces established for Customers outside the US and Canada:</p>

            <p>ScopeHub Technologies Limited<br/>4th Floor, One Park Place<br/>Hatch Street Upper<br/>Dublin 2, Ireland</p>




            </LegalCommon>
        </div>
      );
}
}
export default UserTermsOfService;

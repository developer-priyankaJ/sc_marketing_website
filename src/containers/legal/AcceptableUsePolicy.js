import React, { Component } from 'react';
import LegalCommon from '../../components/LegalCommon.js';
import '../../assets/css/legal.scss';


class AcceptableUsePolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "header": "Acceptable use policy",
        "selectedLink": "acceptable-use-policy",
        "navHeader": "Policies"
    }

  }
  render() {
      return (
        <div>
            <LegalCommon header={this.state.header} navHeader={this.state.navHeader} selectedLink={this.state.selectedLink}>
            <p><strong>Last updated: 9 April 2019</strong></p>

        <p>
          This Acceptable Use Policy sets out a list of acceptable and unacceptable conduct for our Services. If we believe a violation of the policy is deliberate, repeated or presents a credible risk of harm to other users, our customers, the Services or any third parties, we may suspend or terminate your access. This policy may change as ScopeHub grows and evolves, so please check here regularly for updates and changes. Capitalised terms used below but not defined in this policy have the meaning set out in the <a href="https://scopehub.com/intl/en-in/terms-of-service/user">User Terms of Service</a>.
        </p>

        <h2>Do:</h2>

        <ul>
          <li>comply with all User Terms of Service, including the terms of this Acceptable Use Policy;</li>

          <li>comply with all applicable laws and government regulations, including but not limited to all intellectual property, data, privacy and export control laws, and regulations promulgated by any government agencies, including but not limited to the US Securities and Exchange Commission, and any rules of any national and other securities exchanges;</li>

          <li>upload and disseminate only Customer Data to which the Customer owns all required rights under law and under contractual and fiduciary relationships (such as proprietary and confidential information learnt or disclosed as part of employment relationships or under non-disclosure agreements) and do so only in a manner consistent with applicable law;</li>

          <li>use commercially reasonable efforts to prevent unauthorised access to or use of the Services;</li>

          <li>keep passwords and all other login information confidential;</li>

          <li>monitor and control all activity conducted through your account in connection with the Services;</li>

          <li>promptly notify us if you become aware of or reasonably suspect any illegal or unauthorised activity or a security breach involving your accounts or teams, including any loss, theft or unauthorised disclosure or use of a username, password or account; and</li>

          <li>comply in all respects with all applicable terms of the third-party applications, including any that the Customer elects to integrate with the Services that you access or subscribe to in connection with the Services.</li>
        </ul>

        <h2>Do not:</h2>

        <ul>
          <li>permit any third party that is not an Authorised User to access or use a username or password for the Services;</li>

          <li>share, transfer or otherwise provide access to an account designated for you to another person;</li>

          <li>use the Services to store or transmit any Customer Data that may infringe upon or misappropriate someone else’s trademark, copyright or other intellectual property, or that may be tortious or unlawful;</li>

          <li>upload to or transmit from the Services any data, file, software or link that contains or redirects to a virus, Trojan horse, worm or other harmful component, or a technology that unlawfully accesses or downloads content or information stored within the Services or on the hardware of ScopeHub or any third party;</li>

          <li>attempt to reverse engineer, decompile, hack, disable, interfere with, disassemble, modify, copy, translate or disrupt the features, functionality, integrity or performance of the Services (including any mechanism used to restrict or control the functionality of the Services), any third-party use of the Services or any third-party data contained therein (except to the extent such restrictions are prohibited by applicable law);</li>

          <li>attempt to gain unauthorised access to the Services or related systems or networks or to defeat, avoid, bypass, remove, deactivate or otherwise circumvent any software protection or monitoring mechanisms of the Services;</li>

          <li>access the Services in order to build a similar or competitive product or service or copy any ideas, features, functions or graphics of the Services;</li>

          <li>use the Services in any manner that may harm minors or that interacts with or targets people under the age of thirteen;</li>

          <li>engage in activity that incites or encourages violence or hatred against individuals or groups;</li>

          <li>impersonate any person or entity including but not limited to an employee of ours, an “Administrator”, an “Owner” or any other Authorised User, or falsely state or otherwise misrepresent your affiliation with a person, organisation or entity;</li>

          <li>use the Services to provide material support or resources (or to conceal or disguise the nature, location, source or ownership of material support or resources) to any organisation(s) designated by the United States government as a foreign terrorist organisation pursuant to section 219 of the US Immigration and Nationality Act or other laws and regulations concerning national security, defence or terrorism;</li>

          <li>access, search or create accounts for the Services by any means other than our publicly supported interfaces (e.g. “scraping” or creating accounts in bulk);</li>

          <li>send unsolicited communications, promotions or advertisements, or spam;</li>

          <li>place any advertisements within a ScopeHub client;</li>

          <li>send altered, deceptive or false source-identifying information, including “spoofing” or “phishing”;</li>

          <li>abuse referrals or special offers to get more credit than deserved;</li>

          <li>sublicense, resell, time-share or similarly exploit the Services;</li>

          <li>use the Services for consumer purposes, since ScopeHub is intended for use by businesses and organisations;</li>

          <li>access or use the Services on behalf of, or for the benefit of, any patent assertion entity (as defined in the Customer-Specific Supplement);</li>

          <li>use contact or other user information obtained from the Services (including email addresses) to contact Authorised Users outside of the Services without their express permission or authority, or to create or distribute mailing lists or other collections of contact or user profile information for Authorised Users for use outside of the Services; or</li>

          <li>authorise, permit, enable, induce or encourage any third party to do any of the above.</li>
        </ul>

        <h3>Contacting ScopeHub</h3>

        <p>
          Please also feel free to contact us if you have any questions about ScopeHub’s Acceptable Use Policy.
          You may contact us at <a href="mailto:feedback@scopehub.com">feedback@scopehub.com</a> or
          via our postal address below:
        </p>

        <p>
          ScopeHub Technologies<br/>
500 Howard Street<br/>
San Francisco, CA, 94105<br/>
United States<br/>
        </p>
            </LegalCommon>
        </div>
      );
}
}
export default AcceptableUsePolicy;

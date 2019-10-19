import React, { Component } from 'react';
import LegalCommon from '../../components/LegalCommon.js';
import '../../assets/css/legal.scss';
import { NavLink  } from 'react-router-dom';

class CookiePolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "header": "Cookie policy",
        "selectedLink": "cookie-policy",
        "navHeader": "Policies"
    }

  }
  render() {
      return (
        <div>
            <LegalCommon header={this.state.header} navHeader={this.state.navHeader} selectedLink={this.state.selectedLink}>
                <p>At ScopeHub, we believe in being transparent about how we collect and use data. This policy provides information about how and when we use cookies for these purposes. Capitalised terms used in this policy but not defined have the meaning set out in our <NavLink to="/privacy-policy">Privacy policy</NavLink>, which also includes additional details about the collection and use of information at ScopeHub.</p>
                <h2>What is a cookie?</h2>
                <p>Cookies are small text files sent by us to your computer or mobile device which enable ScopeHub features and functionality. They are unique to your account or your browser. Session-based cookies last only while your browser is open and are automatically deleted when you close your browser. Persistent cookies last until you or your browser delete them or until they expire.</p><p> To find out more about cookies, visit <a href="http://www.allaboutcookies.org/">this site</a>. </p>
                <h2>Does ScopeHub use cookies?</h2>
                <p>Yes. ScopeHub uses cookies and similar technologies such as single-pixel gifs and web beacons. We use both session-based and persistent cookies. ScopeHub sets and accesses our own cookies on the domains operated by ScopeHub and its corporate affiliates (collectively, the “<strong>Sites</strong>”). We also use third-party cookies such as Google Analytics.</p>
                <h2>How does ScopeHub use cookies?</h2><p>Some cookies are associated with your account and personal information in order to remember that you are logged in and which workspaces you are logged in to. Other cookies are not linked to your account; these cookies are unique and allow us to perform analytics and customisation, among other actions.</p>
                <p>Cookies can be used to recognise you when you visit a Site or use our Services, remember your preferences and give you a personalised experience that is consistent with your settings. Cookies also make your interactions faster and more secure. </p>

                <table class="c-table v--responsive">
                  <thead>
                    <tr>
                      <th>Categories of use</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Authentication</th>
                      <td><p>If you’ve signed in to our Services, cookies help us show you the right information and personalise your experience.</p></td>
                    </tr>
                    <tr>
                      <th>Security</th>
                      <td><p>We use cookies to enable and support our security features, and also to help us detect malicious activity.</p></td>
                    </tr>
                    <tr>
                      <th>Preferences, features and services</th>
                      <td><p>Cookies can tell us which language you prefer and your communication preferences. They can help you complete forms on our Sites more easily. They also provide you with features, insights and customised content.</p></td>
                    </tr>
                    <tr>
                      <th>Marketing</th>
                      <td><p>We may use cookies to help us deliver marketing campaigns and track their performance (e.g. a user visited our Help Centre and then made a purchase). Similarly, our partners may use cookies to provide us with information about your interactions with their services, although use of those third-party cookies would be subject to the service provider’s policies.</p></td>
                    </tr>
                    <tr>
                      <th>Performance, analytics and research</th>
                      <td><p>Cookies help us to learn how well our Sites and Services perform. We also use cookies to understand, improve and research products, features and services, including creating logs and recording when you access our Sites and Services from different devices, such as your work computer or your mobile device.</p></td>
                    </tr>
                  </tbody>
                </table>
                <h2>What third-party cookies does ScopeHub use?</h2>

                <h2>How are cookies used for advertising purposes?</h2>
                <p>Cookies and other advertising technology such as beacons, pixels and tags help us market more effectively to users that we and our partners believe may be interested in ScopeHub. They also help provide us with aggregated auditing, research and reporting; in addition to this, they also know when content has been shown to you.</p>
                <h2>What can you do if you don’t want cookies to be set or want them removed, or if you want to opt out of interest-based targeting?</h2>
                <p>Some people prefer not to allow cookies, which is why most browsers give you the ability to manage cookies to suit you. In some browsers, you can set up rules to manage cookies on a site-by-site basis, giving you more nuanced control over your privacy. What this means is that you can disallow cookies from all sites except those that you trust.</p>
                <p>Browser manufacturers provide help pages relating to cookie management in their products. Please see below for more information.</p>

                <ul>
                  <li><a href="https://support.google.com/chrome/answer/95647?hl=en-GB">Google Chrome</a></li>
                  <li><a href="https://support.microsoft.com/en-us/kb/260971">Internet Explorer</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/en-us/guide/safari/manage-cookies-and-website-data-sfri11471/mac">Safari (desktop)</a></li>
                  <li><a href="https://support.apple.com/en-us/HT201265">Safari (mobile)</a></li>
                  <li><a href="http://support.google.com/ics/nexus/bin/answer.py?hl=en&amp;answer=2425067">Android Browser</a></li>
                  <li><a href="http://www.opera.com/help">Opera</a></li>
                  <li><a href="http://www.opera.com/help/mobile/android#privacy">Opera Mobile</a></li>
                </ul>
                <p>For other browsers, please consult the documentation provided by your browser manufacturer.</p>
                <p>You can opt out of interest-based targeting provided by participating ad servers through the Digital Advertising Alliance (<a href="http://youradchoices.com">http://youradchoices.com</a>). In addition, you can change your device settings on your iPhone, iPad or Android device to control whether you see online interest-based ads.</p><p>If you limit the ability of websites and applications to set cookies, you may worsen your overall user experience and/or lose the ability to access the services because they will no longer be personalised to you. Doing this may also stop you from saving customised settings, such as login information.</p>
                <h2>Does ScopeHub respond to “do not track” signals?</h2>
                <p>Our Sites and Services do not collect personal information about your online activities over time and across third-party websites or online services. As a consequence, “do not track” signals transmitted from web browsers do not apply to our Sites or Services and we do not alter any of our data collection and use practices if we receive such a signal.</p>
            </LegalCommon>
        </div>
      );
}
}
export default CookiePolicy;

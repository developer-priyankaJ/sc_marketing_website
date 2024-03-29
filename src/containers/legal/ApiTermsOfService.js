import React, { Component } from 'react';
import LegalCommon from '../../components/LegalCommon.js';
import '../../assets/css/legal.scss';


class ApiTermsOfService extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "header": "ScopeHub API Terms of Service",
        "selectedLink": "api-terms-of-service",
        "navHeader": "Terms"
    }

  }
  render() {
      return (
        <div>
            <LegalCommon header={this.state.header} navHeader={this.state.navHeader} selectedLink={this.state.selectedLink}>
            <p><strong>Effective: August 31, 2018</strong></p>

            <p>These ScopeHub API Terms of Service (the "<strong>API Terms</strong>") describe your rights and responsibilities when accessing our publicly available application programming interfaces (the "<strong>APIs</strong>") and related <a href="https://api.scopehub.com/" >API documentation</a>. Please read them carefully. We are grateful you're here.</p>

            <h2>First Things First</h2>
            <h3>Relationships &amp; Definitions</h3>
            <p>These API Terms, together with the <a href="https://api.scopehub.com/developer-policy" >ScopeHub Application Developer Policy</a> form a binding "<strong>Contract</strong>" between you and us. "<strong>We</strong>," "<strong>our</strong>" and "<strong>us</strong>" refers to the applicable ScopeHub entity in the section entitled "Which ScopeHub Entity are You Contracting With?" below, and "<strong>you</strong>," and "<strong>your</strong>," refers to the individual, company or legal entity that you represent. The Contract does not grant you any right to access or use our online workplace productivity tools and platform (the "<strong>Services</strong>") or any of our non-public application programming interfaces, which will be governed by a separate agreement with us (e.g., our <a href="https://scopehub.com/intl/en-in/terms-of-service" >Customer Terms of Service</a>). </p>

            <h3>The ScopeHub Extended Family</h3>
            <p>We may leverage our employees, those of our corporate affiliates and third party contractors (the "<strong>ScopeHub Extended Family</strong>") in exercising our rights and performing our obligations under the Contract. We will be responsible for the ScopeHub Extended Family’s compliance with our obligations under the Contract.</p>

            <h2>Access to Our APIs</h2>
            <h3>Your Applications</h3>
            <p>Subject to the restrictions below, we grant you a non-exclusive, worldwide, non-transferable (subject to the section titled "Assignment"), limited license to access our APIs and documentation only as necessary to develop, test and support an integration of your application (an "<strong>Application</strong>" or "<strong>App</strong>") with the Services. You may charge for your Application; however, you may not sell, rent, lease, sublicense, redistribute, or syndicate access to any of our APIs.</p>

            <h3>Here Are the Rules</h3>
            <p>Your license to access our APIs and documentation is limited and subject to compliance with the <a href="https://api.scopehub.com/developer-policy" >ScopeHub Application Developer Policy</a> and <a href="https://scopehub.com/intl/en-in/brand-guidelines" >ScopeHub’s Brand Guidelines</a>. Further, you will not: (A) access our APIs or documentation in violation of any law or regulation; (B) access our APIs in any manner that (i) compromises, breaks or circumvents any of our technical processes or security measures associated with the Services, (ii) poses a security vulnerability to customers or users of the Services, or (iii) tests the vulnerability of our systems or networks; (C) access our APIs or documentation in order to replicate or compete with the Services; (D) attempt to reverse engineer or otherwise derive source code, trade secrets, or know-how of our APIs or Services; or (E) attempt to use our APIs in a manner that exceeds rate limits, or constitutes excessive or abusive usage. </p>

            <h3>Transparency &amp; Reporting</h3>
            <p>If you offer your Application for use by others outside your organization, you must maintain a user agreement and privacy policy for your Application, which is prominently identified or located where users download or access your Application. Your privacy policy must meet applicable legal standards and describe the collection, use, storage and sharing of data in clear, understandable and accurate terms. You must promptly notify us in writing via email to <a href="mailto:security@scopehub.com" >security@scopehub.com</a> of any breaches of your user agreement or privacy policy that impact or may impact customers or users of the Services. Please review our <a href="https://scopehub.com/intl/en-in/privacy-policy" >Privacy Policy</a> for more information on how we collect and use data relating to the use and performance of our websites and products. </p>

            <h3>Our Right to Suspend Access and Audit</h3>
            <p>If we believe that there is a violation of the Contract that can simply be remedied by your modification or update of your Application, we will, in most cases, ask you to take direct action rather than intervene. In such instance, we may use your name, address and other contact details to contact you or provide this contact information to any third party that reasonably, in ScopeHub's sole determination, claims that you do not possess all of the necessary intellectual property rights. In some instances, we may directly step in and take what we determine to be appropriate action if you are not responsive, or if we believe there is a credible risk of harm to us, the Services, our customers or users or any third parties. ScopeHub also reserves a right to audit your application to ensure it does not violate our terms and policies. You agree that you will cooperate with inquiries related to such an audit and provide us with proof that your application complies with our terms and policies.</p>

            <h2>Ownership and Proprietary Rights</h2>
            <h3>Reservation of Rights</h3>
            <p>You retain your ownership rights in your Application and we own and will continue to own our APIs, documentation and Services, including all related intellectual property rights therein. All of our rights not expressly granted by the Contract are hereby retained.</p>

            <h3>Feedback is Welcome</h3>
            <p>The more suggestions our developers make, the better our APIs become. If you send us any feedback or suggestions regarding the APIs or documentation, there is a chance we will use it, so you grant us an unlimited, irrevocable, perpetual, sublicensable, transferable, royalty-free license to use any such feedback or suggestions for any purpose without any obligation or compensation to you. If we choose not to implement the suggestion, please don’t take it personally. We appreciate it nonetheless.</p>

            <h2>Termination</h2>
            <p>You may terminate the Contract by discontinuing use of our APIs. We may terminate the Contract with or without cause, and without notice to you. Upon termination of the Contract, all rights and licenses granted to you will terminate immediately. You understand that any APIs or documentation that are not made generally available but that are otherwise made available to you are the confidential information of ScopeHub. Upon termination of the Contract, you will promptly destroy copies of any documentation and any other ScopeHub information in your possession or control that was received under the Contract.</p>

            <h2>Representations; Disclaimer of Warranties</h2>
            <p>You represent and warrant that you have validly entered into the Contract and have the legal power to do so.</p>

            <p>EXCEPT AS EXPRESSLY PROVIDED FOR HEREIN, THE APIS, DOCUMENTATION AND ALL RELATED COMPONENTS AND INFORMATION ARE PROVIDED BY US ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, AND WE EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. YOU ACKNOWLEDGE THAT WE DO NOT WARRANT THAT THE APIS WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.</p>

            <h2>Limitation of Liability</h2>
            <p>IN NO EVENT WILL OUR OR THE SLACK EXTENDED FAMILY’S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THE CONTRACT (WHETHER IN CONTRACT OR TORT OR UNDER ANY OTHER THEORY OF LIABILITY) EXCEED US$100.</p>

            <p>IN NO EVENT WILL WE OR THE SLACK EXTENDED FAMILY HAVE ANY LIABILITY TO YOU OR TO ANY THIRD PARTY FOR ANY LOST PROFITS OR REVENUES OR FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, COVER OR PUNITIVE DAMAGES HOWEVER CAUSED, WHETHER IN CONTRACT, TORT OR UNDER ANY OTHER THEORY OF LIABILITY, AND WHETHER OR NOT YOU OR THE THIRD PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING DISCLAIMER WILL NOT APPLY TO THE EXTENT PROHIBITED BY APPLICABLE LAW.</p>

            <p>The limitations under this "Limitation of Liability" section apply with respect to all legal theories, whether in contract, tort or otherwise, and to the extent permitted by law. The provisions of this "Limitation of Liability" section allocate the risks under the Contract between the parties, and the parties have relied on these limitations in determining whether to enter into the Contract.</p>

            <h2>Application of Consumer Law</h2>
            <p>Our APIs and documentation are intended for use by businesses and organizations and not for consumer purposes. To the maximum extent permitted by law, you hereby acknowledge and agree that consumer laws do not apply. If however any consumer laws (e.g., in Australia, the Competition and Consumer Act 2010 (Cth)) do apply and cannot otherwise be lawfully excluded, nothing in these API Terms will restrict, exclude or modify any statutory warranties, guarantees, rights or remedies you have, and our liability is limited (at our option) to the replacement or repair of the APIs.</p>

            <h2>Your Indemnification of Us</h2>
            <p>You will defend us and the members of the ScopeHub Extended Family (collectively, the "<strong>ScopeHub Indemnified Parties</strong>") from and against any and all third party claims, actions, suits, proceedings, and demands arising from or related to your violation of the Contract or your violation of your user agreement or privacy policy (a "<strong>Claim Against Us</strong>"), and will indemnify the ScopeHub Indemnified Parties for all reasonable attorney’s fees incurred and damages and other costs finally awarded against a ScopeHub Indemnified Party in connection with or as a result of, and for amounts paid by a ScopeHub Indemnified Party under a settlement you approve of in connection with, a Claim Against Us. We must provide you with prompt written notice of any Claim Against Us and allow you the right to assume the exclusive defense and control, and cooperate with any reasonable requests assisting your defense and settlement of such matter. This section states your sole liability with respect to, and the ScopeHub Indemnified Parties’ exclusive remedy against you for, any Claim Against Us.</p>

            <h2>Limitations on Indemnifications</h2>
            <p>Notwithstanding anything contained in the preceding section, (a) we will always be free to choose our own counsel if we pay for the cost of such counsel; and (b) no settlement may be entered into by you, without our express written consent (such consent not to be unreasonably withheld), if: (i) the third party asserting the claim is a government agency, (ii) the settlement arguably involves the making of admissions, (iii) the settlement does not include a full release of liability, or (iv) the settlement includes terms other than a full release of liability and the payment of money.</p>

            <h2>Survival</h2>
            <p>The sections titled "Our Rights to Suspend Access and Audit," "Ownership &amp; Proprietary Rights," "Termination," "Representations; Disclaimer of Warranties," "Limitation of Liability," "Your Indemnification of Us," "Limitations on Indemnifications," and "Survival," as well as all of the provisions under the general heading "General Provisions," will survive any termination or expiration of the Contract.</p>

            <h2>General Provisions</h2>
            <h3>Publicity</h3>
            <p>You grant us the right to use your company name and logo as a reference for marketing or promotional purposes on our website and in other public or private communications with our existing or potential developers and customers, subject to your standard trademark usage guidelines as provided to us from time-to-time.</p>

            <h3>Force Majeure</h3>
            <p>Neither we nor you will be liable by reason of any failure or delay in the performance of its obligations on account of events beyond the reasonable control of a party, which may include denial-of-service attacks, a failure by a third party hosting provider or utility provider, strikes, shortages, riots, fires, acts of God, war, terrorism, and governmental action.</p>

            <h3>Relationship of the Parties; No Third Party Beneficiaries</h3>
            <p>The parties are independent contractors. The Contract does not create a partnership, franchise, joint venture, agency, fiduciary or employment relationship between the parties. There are no third party beneficiaries to the Contract.</p>

            <h3>Email and ScopeHub Messages</h3>
            <p>Except as otherwise set forth herein, all notices under the Contract will be by email, although if you have a Services account, we may instead choose to provide notice to you through the Services (e.g., a scopehubbot notification). Notices to ScopeHub will be sent to <a href="mailto:feedback@scopehub.com" >feedback@scopehub.com</a>, except for legal notices, such as notices of termination, which must be sent to <a href="mailto:legal@scopehub.com" >legal@scopehub.com</a>. Notices will be deemed to have been duly given (a) the day after they are sent, in the case of notices through email; and (b) the same day, in the case of notices through the Services. </p>

            <h3>Modifications to our APIs and Documentation</h3>
            <p>ScopeHub is still evolving, and so we need the flexibility to occasionally make changes to our APIs, including backwards incompatible changes. We will try to give notice of these changes, but you should consider following the @scopehubapi Twitter account or viewing our <a href="https://api.scopehub.com/changelog" >changelogs</a> for updates. Also, parts of our API are undocumented, including certain methods, events, and properties. Given that these undocumented aspects of our APIs may change at any time, you should not rely on their behaviors.</p>

            <h3>Modifications to the Contract</h3>
            <p>As our business evolves, we may change these API Terms and the other components of the Contract. If we make a material change to the Contract, we will provide you with reasonable notice prior to the change taking effect, either by emailing the email address associated with your account or by messaging you through the Services. You can review the most current version of the API Terms at any time by visiting this page and by visiting the most current versions of the other pages that are referenced in the Contract. The materially revised Contract will become effective on the date set forth in our notice, and all other changes will become effective upon posting of the change. If you access our APIs after the effective date, that access will constitute your acceptance of any revised terms and conditions.</p>

            <h3>Waiver</h3>
            <p>No failure or delay by either party in exercising any right under the Contract will constitute a waiver of that right. No waiver under the Contract will be effective unless made in writing and signed by an authorized representative of the party being deemed to have granted the waiver.</p>

            <h3>Severability</h3>
            <p>The Contract will be enforced to the fullest extent permitted under applicable law. If any provision of the Contract is held by a court of competent jurisdiction to be contrary to law, the provision will be modified by the court and interpreted so as best to accomplish the objectives of the original provision to the fullest extent permitted by law, and the remaining provisions of the Contract will remain in effect.</p>

            <h3>Assignment</h3>
            <p>Neither party may assign or delegate any of its rights or obligations hereunder, whether by operation of law or otherwise, without the prior written consent of the other party (not to be unreasonably withheld). Notwithstanding the foregoing, either party may assign the Contract in its entirety, without consent of the other party, to a corporate affiliate or in connection with a merger, acquisition, corporate reorganization, or sale of all or substantially all of its assets. Any purported assignment in violation of this section is void. A party’s sole remedy for any purported assignment by the other party in breach of this section will be, at the non-assigning party’s election, termination of the Contract upon written notice to the assigning party. Subject to the foregoing, the Contract will bind and inure to the benefit of the parties, their respective successors and permitted assigns.</p>

            <h3>Which ScopeHub Entity are You Contracting With?</h3>
            <p>All references to ‘ScopeHub,’ ‘we,’ or ‘us’ under the Contract, what law will apply in any dispute or lawsuit arising out of or in connection with the Contract, and which courts have jurisdiction over any such dispute or lawsuit, depend on where you are domiciled.</p>

            <table>
              <tbody>
                <tr>
                  <th><p><strong>Domicile</strong></p></th>
                  <th><p><strong>ScopeHub Contracting Entity</strong></p></th>
                  <th><p><strong>Governing Law</strong></p></th>
                  <th><p><strong>Venue</strong></p></th>
                </tr>
                <tr>
                  <td data-label="Domicile"><p>United States and Canada</p></td>
                  <td data-label="ScopeHub Contracting Entity"><p>ScopeHub Technologies, Inc.</p></td>
                  <td data-label="Governing Law"><p>California</p></td>
                  <td data-label="Venue"><p>San Francisco County, California</p></td>
                </tr>
                <tr>
                  <td data-label="Domicile"><p>Rest of World</p></td>
                  <td data-label="ScopeHub Contracting Entity"><p>ScopeHub Technologies Limited</p></td>
                  <td data-label="Governing Law"><p>Ireland</p></td>
                  <td data-label="Venue"><p>Dublin, Ireland</p></td>
                </tr>
              </tbody>
            </table>

            <p>The Contract, and any disputes arising out of or related hereto, will be governed exclusively by the applicable governing law above, without regard to conflicts of laws rules or the United Nations Convention on the International Sale of Goods. The courts located in the applicable venue above will have exclusive jurisdiction to adjudicate any dispute arising out of or relating to the Contract or its formation, interpretation or enforcement. Each party hereby consents and submits to the exclusive jurisdiction of such courts. <strong>Each party also hereby waives any right to jury trial in connection with any action or litigation in any way arising out of or related to the Contract.</strong> In any action or proceeding to enforce rights under the Contract, the prevailing party will be entitled to recover its reasonable costs and attorney’s fees.</p>

            <h3>Entire Agreement</h3>
            <p>The Contract, including these API Terms constitutes the entire agreement between the parties and supersedes all prior and contemporaneous agreements, proposals or representations, written or oral, concerning its subject matter. To the extent of any conflict or inconsistency between the provisions in these API Terms and any other documents or pages referenced in these API Terms, the following order of precedence will apply: (A) the API Terms, (B) <a href="https://api.scopehub.com/developer-policy" >ScopeHub Application Developer Policy</a>, and (C) any other documents or pages referenced in the Contract.</p>

            </LegalCommon>
        </div>
      );
}
}
export default ApiTermsOfService;

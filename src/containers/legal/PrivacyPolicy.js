import React, { Component } from 'react';
import LegalCommon from '../../components/LegalCommon.js';
import '../../assets/css/legal.scss';
import { NavLink  } from 'react-router-dom';

class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "header": "Privacy policy",
        "selectedLink": "privacy-policy",
        "navHeader": "Policies"
    }

  }
  render() {
      return (
        <div>
            <LegalCommon header={this.state.header} navHeader={this.state.navHeader} selectedLink={this.state.selectedLink}>
            <p><strong>Effective date: 31 July 2019</strong></p>

            <p>This Privacy Policy describes how ScopeHub collects, uses and discloses information and what choices you have with respect to the information.</p>

            <p>Updates in this version of the Privacy Policy reflect changes in data protection law. In addition, we have worked to make the Privacy Policy clearer and more understandable by:</p>
            <ul>
              <li>organising it into the sections listed in the table of contents below,</li>
              <li>providing a series of examples that help illustrate how the policies may be implemented by ScopeHub and</li>
              <li>defining and capitalising a few terms that are used more than once for simplicity and brevity.</li>
            </ul>

            <p>When we refer to “<strong>ScopeHub</strong>”, we mean the ScopeHub entity that acts as the controller or processor of your information, as explained in more detail in the “Identifying the Data Controller and Processor” section below.</p>

            {/*<h2>Table of contents:</h2>
            <ul>
              <li><a href="#applicability">Applicability of this Privacy Policy</a></li>
              <li><a href="#collect">Information we collect and receive</a></li>
              <li><a href="#information">How we use information</a></li>
              <li><a href="#retention">Data retention</a></li>
              <li><a href="#disclose">How we share and disclose information</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#limitations">Age limitations</a></li>
              <li><a href="#changes">Changes to this Privacy Policy</a></li>
              <li><a href="#international">International data transfers: Privacy Shield and contractual terms</a></li>
              <li><a href="#dpo">Data Protection Officer</a></li>
              <li><a href="#identifying">Identifying the Data Controller and Processor</a></li>
              <li><a href="#rights">Your rights</a></li>
              <li><a href="#dpa">Data Protection Authority</a></li>
              <li><a href="#contact">Contacting ScopeHub</a></li>
            </ul>
*/}
            <h2 id="applicability">Applicability of this Privacy Policy</h2>
            <p>This Privacy Policy applies to ScopeHub’s online workplace productivity tools and platform, including the associated ScopeHub mobile and desktop applications (collectively the “<strong>Services</strong>”), ScopeHub.com and other ScopeHub websites (collectively the “<strong>Websites</strong>”) and other interactions (e.g. customer service enquiries, user conferences, etc.) you may have with ScopeHub. If you do not agree with the terms, do not access or use the Services, Websites or any other aspect of ScopeHub’s business.</p>

            <p>This Privacy Policy does not apply to any third-party applications or software that integrate with the Services through the ScopeHub platform (“<strong>Third-Party Services</strong>”), or any other third-party products, services or businesses. In addition, a separate agreement governs delivery, access and use of the Services (the “<strong>Customer Agreement</strong>”), including the processing of any messages, files or other content submitted through Services accounts (collectively “<strong>Customer Data</strong>”). The organisation (e.g. your employer or another entity or person) that entered into the Customer Agreement (the “<strong>Customer</strong>”) controls their instance of the Services (their “<strong>Workspace</strong>”) and any associated Customer Data.</p>

            <h2 id="collect">Information we collect and receive</h2>
            <p>ScopeHub may collect and receive Customer Data and other information and data (“<strong>Other Information</strong>”) in a variety of ways:</p>
            <ul>
              <li><strong>Customer Data</strong>. Customers or individuals granted access to a Workspace by a Customer (“<strong>Authorised Users</strong>”) routinely submit Customer Data to ScopeHub when using the Services.</li>
              <li><strong>Other Information</strong>. ScopeHub also collects, generates and/or receives Other Information:<ol type="I">
              <li>Workspace and account information. To create or update a Workspace account, you or your Customer (e.g. your employer) supply ScopeHub with an email address, phone number, password, domain and/or similar account details. In addition, Customers that purchase a paid version of the Services provide ScopeHub (or its payment processors) with billing details such as credit card information, banking information and/or a billing address.</li>
              <li>Usage information.
                <ul>
                  <li>
                        <em>Services metadata</em>. When an Authorised User interacts with the Services, metadata is generated that provides additional context about the way Authorised Users work. For example, ScopeHub logs the Workspaces, channels, people, features, content and links you interact with, the types of files shared and what Third-Party Services are used (if any).</li>
                  <li><em>Log data</em>. As with most websites and technology services delivered over the Internet, our servers automatically collect information when you access or use our Websites or Services and record it in log files. This log data may include the Internet Protocol (IP) address, the address of the web page visited before using the Website or Services, browser type and settings, the date and time the Services were used, information about browser configuration and plugins, language preferences and cookie data.</li>
                  <li><em>Device information</em>. ScopeHub collects information about devices accessing the Services, including type of device, what operating system is used, device settings, application IDs, unique device identifiers and crash data. Whether we collect some or all of this Other Information often depends on the type of device used and its settings.</li>
                  <li><em>Location information</em>. We receive information from you, your Customer and other third-parties that helps us approximate your location. We may, for example, use a business address submitted by your employer or an IP address received from your browser or device to determine approximate location. ScopeHub may also collect location information from devices in accordance with the consent process provided by your device.</li>
                </ul>
              </li>
              <li>Cookie information. ScopeHub uses cookies and similar technologies in our Websites and Services that help us collect Other Information. The Websites and Services may also include cookies and similar tracking technologies of third parties, which may collect Other Information about you via the Websites and Services and across other websites and online services. For more details about how we use these technologies, please see our <NavLink to="/cookie-policy" >Cookie policy</NavLink>.</li>
              <li>Third-Party Services. The Customer can choose to permit or restrict Third-Party Services for their Workspace. Typically, Third-Party Services are software that integrate with our Services and the Customer can permit its Authorised Users to enable and disable these integrations for their Workspace. Once enabled, the provider of a Third-Party Service may share certain information with ScopeHub. For example, if a cloud storage application is enabled to permit files to be imported to a Workspace, we may receive the username and email address of Authorised Users, along with additional information that the application has elected to make available to ScopeHub to facilitate the integration. Authorised Users should check the privacy settings and notices in these Third-Party Services to understand what data may be disclosed to ScopeHub. When a Third-Party Service is enabled, ScopeHub is authorised to connect and access Other Information made available to ScopeHub in accordance with our agreement with the Third-Party Provider. We do not, however, receive or store passwords for any of these Third-Party Services when connecting them to the Services. </li>
              <li>Contact information. In accordance with the consent process provided by your device, any contact information that an Authorised User chooses to import (such as an address book from a device) is collected when using the Services.</li>
              <li>Third-Party Data. ScopeHub may receive data about organisations, industries, Website visitors, marketing campaigns and other matters related to our business from parent corporation(s), affiliates and subsidiaries, our partners or others that we use to make our own information better or more useful. This data may be combined with Other Information we collect and might include aggregate level data, such as which IP addresses correspond to postcodes or countries. Or it might be more specific: for example, how well an online marketing or email campaign performed.</li>
              <li>Additional information provided to ScopeHub. We receive Other Information when submitted to our Websites or if you participate in a focus group, contest, activity or event, apply for a job, request support, interact with our social media accounts or otherwise communicate with ScopeHub.</li>
            </ol>
            </li>
            </ul>

            <p>Generally, no one is under a statutory or contractual obligation to provide any Customer Data or Other Information (collectively “<strong>Information</strong>”). However, certain Information is collected automatically and if some Information, such as Workspace setup details, is not provided, we may be unable to provide the Services.</p>
            <h2 id="information">How we use information</h2>
            <p>Customer Data will be used by ScopeHub in accordance with the Customer’s instructions, including any applicable terms in the Customer Agreement and the Customer’s use of Services functionality, and as required by applicable law. ScopeHub is a Processor of Customer Data and the Customer is the Controller. The Customer may, for example, use the Services to grant and remove access to a Workspace, assign roles and configure settings, access, modify, export, share and remove Customer Data and otherwise apply its policies to the Services.</p>
            <p>ScopeHub uses Other Information in furtherance of our legitimate interests in operating our Services, Websites and business. More specifically, ScopeHub uses Other Information:</p>
            <ul>
              <li><strong>To provide, update, maintain and protect our Services, Websites and business.</strong> This includes use of Other Information to support delivery of the Services under a Customer Agreement, prevent or address service errors, security or technical issues, analyse and monitor usage, trends and other activities or at an Authorised User’s request.</li>
              <li><strong>As required by applicable law, legal process or regulation.</strong></li>
              <li><strong>To communicate with you by responding to your requests, comments and questions.</strong> If you contact us, we may use your Other Information to respond.</li>
              <li><strong>To develop and provide search, learning and productivity tools and additional features.</strong> ScopeHub tries to make the Services as useful as possible for specific Workspaces and Authorised Users. For example, we may improve search functionality by using Other Information to help determine and rank the relevance of content, channels or expertise to an Authorised User, make Services suggestions based on historical use and predictive models, identify organisational trends and insights, to customise a Services experience or create new productivity features and products.</li>
              <li><strong>To send emails and other communications.</strong> We may send you service, technical and other administrative emails, messages and other types of communications. We may also contact you to inform you about changes in our Services, our Services’ offerings and important Services-related notices, such as security and fraud notices. These communications are considered part of the Services and you may not opt out of them. In addition, we sometimes send emails about new product features, promotional communications or other news about ScopeHub. These are marketing messages so you can control whether you receive them.</li>
              <li><strong>For billing, account management and other administrative matters.</strong> ScopeHub may need to contact you for invoicing, account management and similar reasons and we use account data to administer accounts and keep track of billing and payments.</li>
              <li><strong>To investigate and help prevent security issues and abuse.</strong></li>
            </ul>

            <p>If Information is aggregated or de-identified so it is no longer reasonably associated with an identified or identifiable natural person, ScopeHub may use it for any business purpose. To the extent Information is associated with an identified or identifiable natural person and is protected as personal data under applicable data protection law, it is referred to in this Privacy Policy as “<strong>Personal Data</strong>.”</p>
            <h2 id="retention">Data retention</h2>
            <p>ScopeHub will retain Customer Data in accordance with a Customer’s instructions, including any applicable terms in the Customer Agreement and the Customer’s use of Services functionality, and as required by applicable law. Depending on the Services subscription, the Customer may be able to customise their retention settings and apply those customised settings at the Workspace level, channel level or other level. The Customer may also apply different settings to messages, files or other types of Customer Data. The deletion of Customer Data and other use of the Services by the Customer may result in the deletion and/or deidentification of certain associated Other Information. ScopeHub may retain Other Information pertaining to you for as long as necessary for the purposes described in this Privacy Policy. This may include keeping your Other Information after you have deactivated your account for the period of time needed for ScopeHub to pursue legitimate business interests, conduct audits, comply with (and demonstrate compliance with) legal obligations, resolve disputes and enforce our agreements.</p>
            <h2 id="disclose">How we share and disclose information</h2>
            <p>This section describes how ScopeHub may share and disclose Information. Customers determine their own policies and practices for the sharing and disclosure of Information. ScopeHub does not control how they or any other third parties choose to share or disclose Information.</p>
            <ul>
              <li><strong>The Customer’s instructions.</strong> ScopeHub will solely share and disclose Customer Data in accordance with a Customer’s instructions, including any applicable terms in the Customer Agreement and the Customer’s use of Services functionality and in compliance with applicable law and legal process.</li>
              <li><strong>Customer access.</strong> Owners, administrators, Authorised Users and other Customer representatives and personnel may be able to access, modify or restrict access to Other Information. This may include e.g. your employer using Service features to export logs of Workspace activity or accessing or modifying your profile details. </li>
              <li><strong>Third-Party service providers and partners.</strong> We may engage third-party companies or individuals as service providers or business partners to process Other Information and support our business. These third parties may e.g. provide virtual computing and storage services. Additional information about the subprocessors we use to support delivery of our Services is set out at ScopeHub subprocessors.</li>
              <li><strong>Third-Party Services.</strong> The Customer may enable or permit Authorised Users to enable Third-Party Services. When enabled, ScopeHub may share Other Information with Third-Party Services. Third-Party Services are not owned or controlled by ScopeHub and third parties that have been granted access to Other Information may have their own policies and practices for its collection and use. Please check the privacy settings and notices in these Third-Party Services or contact the provider for any questions.</li>
              <li><strong>Corporate affiliates.</strong> ScopeHub may share Other Information with its corporate affiliates, parents and/or subsidiaries.</li>
              <li><strong>During a change to ScopeHub’s business.</strong> If ScopeHub enters into merger, acquisition, insolvency, dissolution or reorganisation proceedings, or the sale of some or all of ScopeHub’s assets or stock, financing, public offering of securities, acquisition of all or a portion of our business, a similar transaction or proceeding, or steps in contemplation of such activities (e.g. due diligence), some or all Other Information may be shared or transferred, subject to standard confidentiality arrangements.</li>
              <li><strong>Aggregated or deidentified Data.</strong> We may disclose or use aggregated or deidentified Other Information for any purpose. For example, we may share aggregated or deidentified Other Information with prospects or partners for business or research purposes, such as telling a prospective ScopeHub customer the average amount of time spent within a typical Workspace.</li>
              <li><strong>To comply with laws.</strong> If we receive a request for information, we may disclose Other Information if we reasonably believe disclosure is in accordance with or required by any applicable law, regulation or legal process. </li>
              <li><strong>To enforce our rights, prevent fraud and for safety.</strong> To protect and defend the rights, property or safety of ScopeHub or third parties, including enforcing contracts or policies, or in connection with investigating and preventing fraud or security issues.</li>
              <li><strong>With consent.</strong> ScopeHub may share Other Information with third parties when we have consent to do so.</li>
            </ul>

            <h2 id="security">Security</h2>
            <p>ScopeHub takes security of data very seriously. ScopeHub works hard to protect Other Information you provide from loss, misuse and unauthorised access or disclosure. These steps take into account the sensitivity of the Other Information we collect, process and store and the current state of technology.  To learn more about current practices and policies regarding security and confidentiality of the Services, please see our <NavLink to="/security-practices" >Security practices</NavLink>. Given the nature of communications and information processing technology, ScopeHub cannot guarantee that Information, during transmission through the internet or while stored on our systems or otherwise in our care, will be absolutely safe from intrusion by others.</p>

            <h2 id="limitations">Age limitations</h2>
            <p>To the extent prohibited by applicable law, ScopeHub does not allow use of our Services and Websites by anyone younger than 16 years old. If you learn that anyone younger than 16 has unlawfully provided us with personal data, please contact us and we will take steps to delete such information.</p>

            <h2 id="changes">Changes to this Privacy Policy</h2>
            <p>ScopeHub may change this Privacy Policy from time to time. Laws, regulations and industry standards evolve, which may make those changes necessary or we may make changes to our business. We will post the changes to this page and encourage you to review our Privacy Policy to stay informed. If we make changes that materially alter your privacy rights, ScopeHub will provide additional notice, such as via email or through the Services. If you disagree with the changes to this Privacy Policy, you should deactivate your Services account. Contact the Customer if you wish to request the removal of Personal Data under their control.</p>

            <h2 id="international">International data transfers, Privacy Shield and contractual terms</h2>
            <p>ScopeHub may transfer your Personal Data to countries other than the one in which you live. We deploy the following safeguards if ScopeHub transfers Personal Data originating from the European Union or Switzerland to other countries not deemed adequate under applicable data protection law:</p>


            <h2 id="identifying">Identifying the Data Controller and Processor</h2>
            <p>Data protection law in certain jurisdictions differentiates between the “Controller” and “Processor” of information. In general, the Customer is the Controller of Customer Data. In general, ScopeHub is the Processor of Customer Data and the Controller of Other Information. Different ScopeHub entities provide the Services in different parts of the world. ScopeHub Technologies Limited, an Irish company based in Dublin, Ireland, is the Controller of Other Information and a Processor of Customer Data relating to Authorised Users who use Workspaces established for Customers outside of the US and Canada. ScopeHub Technologies, Inc., a US company based in San Francisco, California is the Controller of Other Information and a Processor of Customer Data relating to Authorised Users who use Workspaces established for Customers in the US and Canada.</p>

            <h2 id="rights">Your rights</h2>
            <p> Individuals located in certain countries, including the European Economic Area, have certain statutory rights in relation to their Personal Data. Subject to any exemptions provided by law, you may have the right to request access to Information as well as to seek to update, delete or correct this Information. You can usually do this using the settings and tools provided in your Services account. If you cannot use the settings and tools, contact the Customer for additional access and assistance. </p>
            <p>To the extent that ScopeHub’s processing of your Personal Data is subject to the General Data Protection Regulation, ScopeHub relies on its legitimate interests, described above, to process your data. ScopeHub may also process Other Information that constitutes your Personal Data for direct marketing purposes and you have a right to object to ScopeHub’s use of your Personal Data for this purpose at any time.</p>

            <h2 id="dpa">Data Protection Authority</h2>
            <p>Subject to applicable law, you also have the right to (i) restrict ScopeHub’s use of Other Information that constitutes your Personal Data and (ii) lodge a complaint with your local data protection authority or the Irish Data Protection Commissioner, which is ScopeHub’s lead supervisory authority in the European Union. If you are a resident of the European Economic Area and believe we maintain your Personal Data within the scope of the General Data Protection Regulation (GDPR), you may direct questions or complaints to our lead supervisory authority:</p>
            <p>Irish Data Protection Commissioner<br/>Office of the Data Protection Commissioner<br/>Canal House, Station Road, Portarlington, Co. Laois, R32 AP23, Ireland<br/>Phone: +353 57 868 4757<br/>Fax: +353 57 868 4757<br/>Email: <a href="mailto:info@dataprotection.ie">info@dataprotection.ie</a></p>

            </LegalCommon>
        </div>
      );
}
}
export default PrivacyPolicy;

import React, { Component } from 'react';
import LegalCommon from '../../components/LegalCommon.js';
import '../../assets/css/legal.scss';
import * as Utility from '../../utils/utility';

class SecurityPractices extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "header": "Security practices",
        "selectedLink": "security-practices",
        "navHeader": "Security"
    }

  }
  render() {
      return (
        <div>
            <LegalCommon header={this.state.header} navHeader={this.state.navHeader} selectedLink={this.state.selectedLink}>
            <p><strong>Effective date: 31 July 2019</strong></p>

             <p>We take the security of your data very seriously at ScopeHub. As transparency is one of the principles on which our company is built, we aim to be as clear and open as we can about the way we handle security.</p>
             <p>If you have additional questions regarding security, we are happy to answer them. Please write to <a href={Utility.getApis().links.feedbackEmail}>feedback@scopehub.com</a> and we will respond as quickly as we can.</p>
             <hr/>

             <h2 id="confidentiality">Confidentiality</h2>
             <p>
             We place strict controls over our employees’ access to the data you and your users make available via the ScopeHub services, as more specifically defined in your agreement with ScopeHub covering the use of the ScopeHub services (<strong>“Customer Data”</strong>). The operation of the ScopeHub services requires that some employees have access to the systems which store and process Customer Data. For example, in order to diagnose a problem you are having with the ScopeHub services, we may need to access your Customer Data. These employees are prohibited from using these permissions to view Customer Data unless it is necessary to do so. We have technical controls and audit policies in place to ensure that any access to Customer Data is logged.
             </p>

             <p>
             All of our employees and contract personnel are bound by our policies regarding Customer Data and we treat these issues as matters of the highest importance within our company.
             </p>

             <h2 id="personnelpractices">Personnel practices</h2>
             <p>
             ScopeHub conducts background checks on all employees before employment and employees receive privacy and security training during onboarding as well as on an ongoing basis. All employees are required to read and sign our comprehensive information security policy covering the security, availability and confidentiality of the ScopeHub services.
             </p>

             <h2 id="compliance">Compliance</h2>

             <p>
             The environment that hosts the ScopeHub services maintains multiple certifications for its data centres, including ISO 27001 compliance, FedRAMP authorisation, PCI certification and SOC reports. For more information about their certification and compliance, please visit the <a  href="https://aws.amazon.com/security/">AWS Security website</a>, <a  href="https://aws.amazon.com/compliance/">AWS Compliance website</a>, <a  href="https://cloud.google.com/security/">Google Security website</a> and <a  href="https://cloud.google.com/security/compliance/">Google Compliance website</a>.
             </p>

             <h2 id="securityfeatures">Security features for team members &amp; administrators</h2>
             <p>In addition to the work we do at the infrastructure level, we provide Team Administrators of paid versions of the ScopeHub services with additional tools to enable their own users to protect their Customer Data. </p>

             <h3>Access logging</h3>
             <p>Detailed access logs are available both to users and administrators of paid teams. We log every time an account signs in, noting the type of device used and the IP address of the connection.</p>
             <p>Team Administrators and owners of paid teams can review consolidated access logs for their whole team. We also make it easy for administrators to remotely terminate all connections and sign out all devices authenticated to the ScopeHub services at any time, on demand.</p>

             <h3>Single sign-on</h3>
             <p>Administrators of paid teams can integrate their ScopeHub services instance with a variety of single sign-on providers. Teams with the ‘Standard’ subscription can enable Google Apps for Domains as their authentication provider and teams with the ‘Plus’ subscription can enable SAML SSO with providers such as OneLogin, Okta, Centrify and Ping Identity.</p>

             <h3>Deletion of customer data</h3>
             <p>ScopeHub provides the option for workspace Primary Owners to delete Customer Data at any time during a subscription term. Within 24 hours of workspace Primary Owner-initiated deletion, ScopeHub hard deletes all information from currently running production systems (excluding team and channel names and search terms embedded in URLs in web server access logs). ScopeHub services backups are destroyed within 14 days.*</p>


             <h2 id="dataencryptionintransit">Data encryption in transit and at rest</h2>
             <p>The ScopeHub services support the latest recommended secure cypher suites and protocols to encrypt all traffic in transit. Customer Data is encrypted at rest.</p>

             <h2 id="availability">Availability</h2>
             <p>We understand that you rely on the ScopeHub services to work. We’re committed to making ScopeHub a highly available service that you can rely on. Our infrastructure runs on systems that are fault-tolerant, for failures of individual servers or even entire data centres. Our operations team tests disaster recovery measures regularly and has a 24-hour on-call team to quickly resolve unexpected incidents.</p>

             <h2 id="disasterrecovery">Disaster recovery</h2>
             <p>Customer Data is stored redundantly in multiple locations in our hosting provider’s data centres to ensure availability. We have well-tested backup and restoration procedures which allow recovery from a major disaster. Customer Data and our source code are automatically backed up every night. The operations team is alerted in the event of a failure in this system. Backups are fully tested at least every 90 days to confirm that our processes and tools work as expected.</p>

             <h2 id="networkprotection">Network protection</h2>
             <p>In addition to sophisticated system monitoring and logging, we have implemented two-factor authentication for all server access across our production environment. Firewalls are configured according to industry best practices and unnecessary ports are blocked by configuration with AWS security groups.</p>

             <h2 id="hostmanagement">Host management</h2>
             <p>We perform automated vulnerability scans on our production hosts and remediate any findings that present a risk to our environment. We enforce screen lockouts and the use of full disk encryption for company laptops.</p>

             <h2 id="securitylogging">Logging</h2>
             <p>ScopeHub maintains an extensive centralised logging environment in its production environment which contains information pertaining to security, monitoring, availability, access and other metrics about the ScopeHub services. These logs are analysed for security events via automated monitoring software, overseen by the security team.</p>

             <h2 id="incidentmanagementandresponse">Incident management &amp; response</h2>
             <p>In the event of a security breach, ScopeHub will promptly notify you of any unauthorised access to your Customer Data. ScopeHub has incident management policies and procedures in place to handle such an event.</p>

             <h2 id="externalsecurityaudits">External security audits</h2>
             <p>We engage respected external security firms who perform regular audits of the ScopeHub services to verify that our security practices are sound and to monitor the ScopeHub services for new vulnerabilities discovered by the security research community. In addition to periodic and targeted audits of the ScopeHub services and features, we also employ the use of continuous hybrid automated scanning of our web platform.</p>

             <h2 id="productsecurity">Product security practices</h2>
             <p>New features, functionality and design changes go through a security review process facilitated by the security team. In addition, our code is audited with automated static analysis software, tested and manually peer-reviewed prior to being deployed to production. The security team works closely with development teams to resolve any additional security concerns that may arise during development.</p>

             <br/>

             <p>*ScopeHub service backups are destroyed within 14 days, except that during an ongoing investigation of an incident, this period may be temporarily extended.</p>

          </LegalCommon>
        </div>
      );
}
}
export default SecurityPractices;

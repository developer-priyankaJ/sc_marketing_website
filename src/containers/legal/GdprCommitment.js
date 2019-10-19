import React, { Component } from 'react';
import LegalCommon from '../../components/LegalCommon.js';
import '../../assets/css/legal.scss';


class GdprCommitment extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "header": "ScopeHub's GDPR Commitment",
        "selectedLink": "gdpr-commitment",
        "navHeader": "Policies"
    }

  }
  render() {
      return (
        <div>
            <LegalCommon header={this.state.header} navHeader={this.state.navHeader} selectedLink={this.state.selectedLink}>
                <h2>Our commitment to you and the protection of your data</h2>
                <p>We’re committed to helping ScopeHub customers and users understand and, where applicable, comply with the General Data Protection Regulation (GDPR). The GDPR is the most comprehensive EU data privacy law in decades and came into effect on 25 May 2018.</p>
                <p>In addition to strengthening and standardising user data privacy across EU member states, it introduces new or additional obligations on all organisations that handle EU citizens’ personal data, regardless of where the organisations are located. On this page, we explain how we help our customers comply with the GDPR.</p>
                <ol type="I">
                  <li><a href="#preparing">GDPR compliance</a></li>
                  <li><a href="#security">Security infrastructure standards and certifications</a></li>
                  <li><a href="#data-transfers">International data transfers</a></li>
                  <li><a href="#stay-updated">Updates</a></li>
                </ol>
                <h2 id="preparing">GDPR compliance</h2>
                <p>The GDPR’s updated requirements are significant and our global team has adapted ScopeHub’s product offerings, operations and contractual commitments to help customers comply with the regulation. Measures we have implemented include:</p>
                <ul>
                  <li>Investments in our security infrastructure and certifications</li>
                  <li>Updates to relevant contractual terms</li>
                  <li>Support for international data transfers by maintaining our <a href="https://www.privacyshield.gov/participant?id=a2zt0000000GnMBAA0&amp;status=Active">Privacy Shield self-certifications</a> and by executing standard contractual clauses through our updated <a href="https://scopehub.com/intl/en-in/terms-of-service/data-processing">Data Processing Addendum</a></li>
                  <li>Offering data portability and data management tools including:
                    <ul>
                      <li><a href="https://get.scopehub.help/hc/en-gb/articles/204897248-guide-to-scopehub-data-exports?sid=zd-up-t024be7ld-w1w9l1jl9">Import and export tools</a>. Businesses and organisations may access, import and export their Customer Data using ScopeHub’s tools.</li>
                      <li><a href="https://get.scopehub.help/hc/en-gb/articles/360000360443?sid=zd-up-t024be7ld-w1w9l1jl9">Profile deletion tool</a>. Help customers respond to user requests to delete personal information, such as names and email addresses, from a ScopeHub account.</li>
                      <li><a href="https://get.scopehub.help/hc/en-gb/articles/360000355143?sid=zd-up-t024be7ld-w1w9l1jl9">Workspace settings center</a>. See your workspace’s subscription and settings or contact an admin who controls the workspace.</li>
                    </ul>
                  </li>
                </ul>
                <p>We also monitor the guidance around GDPR compliance from privacy-related regulatory bodies and update our product features and contractual commitments accordingly. We’ll provide you with regular updates so that you’re always up to date.</p>
                <h2 id="security">Our security infrastructure standards and certifications</h2>

                <p>Protecting our customers’ information and their users’ privacy is extremely important to us. As a cloud-based company entrusted with some of our customers’ most valuable data, we’ve set high standards for security. We’ve received several security certifications from the American Institute of Certified Public Accountants such as SOC 2 and <a href="https://a.scopehub-edge.com/78b2/marketing/downloads/security/ScopeHub_SOC_3_Report_2019.pdf">SOC 3</a>. ScopeHub has received internationally recognised security certifications for <a href="https://a.scopehub-edge.com/b436a3/marketing/downloads/security/ScopeHub_ISO_27001_Certificate_-_Issued.pdf">ISO 27001</a> (information security management system), <a href="https://a.scopehub-edge.com/cdbf3/marketing/downloads/security/ScopeHub_ISO_27017_Certificate_-_Issued.pdf">ISO 27017</a> (security controls for the provision and use of cloud services) and <a href="https://a.scopehub-edge.com/b436a3/marketing/downloads/security/ScopeHub_ISO_27018_Certificate_-_Issued.pdf">ISO 27018</a> (for protecting personal data in the cloud). </p>

                <p>ScopeHub has invested heavily in building a robust security team, one that can handle a variety of issues – everything from threat detection to building new tools. In accordance with GDPR requirements relating to security incident notifications, ScopeHub will continue to meet its obligations and offer contractual assurances.</p><p>If you’d like to learn more about ScopeHub’s security policies and procedures, please see our <a href="https://scopehub.com/intl/en-in/security">security page</a>. It provides detailed information on how we approach security, and includes a <a href="https://a.scopehub-edge.com/78b2/marketing/downloads/security/Security_White_Paper_2019.pdf">white paper</a> on how ScopeHub ensures user data security in particular.</p>

                <h2 id="data-transfers">International data transfers: Privacy Shield and contractual terms</h2>

                <p>To comply with EU data protection legislation on international data transfer mechanisms, we self-certify under the <a href="https://www.privacyshield.gov/participant?id=a2zt0000000GnMBAA0&amp;status=Active" data-no-clog="{true}">EU-US Privacy Shield</a> and the <a href="https://www.privacyshield.gov/participant?id=a2zt0000000GnMBAA0&amp;status=Active" data-no-clog="{true}">Swiss-US Privacy Shield</a>. These frameworks were developed to establish a way for companies to comply with data protection requirements when transferring personal data from the European Union and Switzerland to the United States.</p>

                <p>In addition, we offer European Union model clauses, also known as standard contractual clauses, to meet adequacy and security requirements for our customers who operate in the EU.</p>
                <h2 id="stay-updated">Updates</h2>
                <p>Fulfilling our privacy and data security commitments is important to us. Accordingly, we’re happy to comply and help you comply with the GDPR. If you have any questions about your rights under the GDPR as a User or how ScopeHub can help you with compliance as a Customer, please contact us at <a href="mailto:privacy@scopehub.com">privacy@scopehub.com</a></p>

                <h3>Resources</h3>
                <ul>
                  <li><a href="https://get.scopehub.help/hc/en-gb/articles/204897248-guide-to-scopehub-data-exports?sid=zd-uf-t4lmwkzt9-ujg06kr7w">Guide to ScopeHub data exports</a></li>
                  <li><a href="https://scopehub.com/intl/en-in/privacy-policy">ScopeHub’s privacy policy </a></li>
                  <li><a href="https://scopehub.com/intl/en-in/terms-of-service/user">ScopeHub’s user terms</a></li>
                  <li><a href="https://scopehub.com/intl/en-in/terms-of-service/data-processing">ScopeHub’s data processing addendum</a></li>
                  <li><a href="https://a.scopehub-edge.com/78b2/marketing/downloads/security/Security_White_Paper_2019.pdf">“ScopeHub’s Approach to Security” white paper [PDF]</a></li>
                  <li><a href="https://scopehub.com/intl/en-in/security">ScopeHub’s security page</a></li>
                  <li><a href="https://a.scopehub-edge.com/78b2/marketing/downloads/security/ScopeHub_SOC_3_Report_2019.pdf">ScopeHub and SOC compliance [PDF]</a></li>
                  <li><a href="https://www.privacyshield.gov/participant?id=a2zt0000000GnMBAA0&amp;status=Active">EU-US Privacy Shield and Swiss-US Privacy Shield</a></li>
                  <li><a href="https://gdpr-info.eu/">Full text of the GDPR</a></li>
                </ul>
            </LegalCommon>
        </div>
      );
}
}
export default GdprCommitment;

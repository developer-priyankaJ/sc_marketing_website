import React, { Component } from 'react';
import 'react-dd-menu/dist/react-dd-menu.css';
import '../assets/css/home.scss';
import { Content  } from '../constants';
import '../assets/css/scss/fontawesome.scss';
import '../assets/css/scss/solid.scss';
import '../assets/css/scss/regular.scss';

class SupplyHubInfo extends Component {
  constructor() {
    super();
    this.state = {
          "email":""
    };
  }
  render() {
    return (
            <div className="supply-info">
                <div className="supply-container">
                  <h3 className="title bm-type_supplyInfo">{Content.home.supplyhubInfo.title}</h3>
                  <p className="text-center sub-title">{Content.home.supplyhubInfo.subTitle}</p>
                  <div className="display-table bm-type_supplyInfo">
                    <div className="table-row bm-type_supplyInfo">
                        <div className="table-column display-inline">
                            <div className="text-center"><i className="sc-icon fas fa-share-square"></i></div>
                            <h4 className="text-center"> Sharing</h4>
                            <p>In ScopeHub, easily share supply chain data with your upstream suppliers and downstream customers on a regular or even real time basis.  ScopeHub makes it easy for you to manage the many operational details of data sharing, including audit, compliance, data ownership and blockchain-based data change control requirements.</p>
                        </div>
                        <div className="table-column display-inline">
                          <div className="text-center"><i className="sc-icon fas fa-handshake"></i></div>
                          <h4 className="text-center"> Collaboration</h4>
                          <p>ScopeHub's collaboration features make it easy to connect and communicate with your partners, protected by enterprise level security and audit controls.  Built-in sharing features like data localization, timezone, and unit-of-measure conversion allow you and your partners to focus and collaborate on the actual data, thereby planning and executing better-informed and faster.</p>
                        </div>
                        <div className="table-column display-inline">
                          <div className="text-center"><i className="sc-icon fas fa-cogs"></i></div>
                          <h4 className="text-center"> Integrations</h4>
                          <p>ScopeHub’s 500+ APIs, data imports, and connectors provide you with flexible integration options. For Amazon sellers, we provide a connector to import Amazon seller’s demand and inventory.  For ERP and other enterprise systems integration, existing data exports can be used to update inventory and demand data to ScopeHub at scale.</p>
                        </div>
                        <div className="table-column display-inline">
                          <div className="text-center"><i className="sc-icon fas fa-lock"></i></div>
                          <h4 className="text-center"> Security & Privacy</h4>
                          <p>The data is yours, protected using only proven, open-source security and privacy protection technologies.  We offer measures like 2FA, SSO, and optional client-side encryption.  Hence, even ScopeHub cannot decrypt or read your data.  Our storage and retrieval processes meet GDPR requirements and are implemented considering our infrastructure platform partners, Amazon Web Services (AWS) and Google Cloud Platform (GCP).</p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
	       )
  }
}

export default SupplyHubInfo;

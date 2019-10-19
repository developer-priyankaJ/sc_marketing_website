import React, { Component } from 'react';
import LegalCommon from '../../components/LegalCommon.js';
import '../../assets/css/legal.scss';


class SecurityOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "header": "ScopeHub Terms & Policies",
        "selectedLink": "overview",
        "navHeader": "Security"
    }

  }
  render() {
      return (
        <div>
            <LegalCommon header={this.state.header} navHeader={this.state.navHeader} selectedLink={this.state.selectedLink}>

            </LegalCommon>
        </div>
      );
}
}
export default SecurityOverview;

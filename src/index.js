import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, HashRouter , Switch } from 'react-router-dom';
import  configureStore from './store';
import App from './containers/app';
import Home from './containers/home/index';
import GetStarted from './containers/getStarted/index';
import GetCompany from './containers/getCompany/index';
import Welcome from './containers/welcome/index';
import ConfirmEmail from './containers/confirmEmail/index';
import PasswordScreen from './containers/passwordScreen/index';
import Enterprise from './containers/enterprise/index';
import Pricing from './containers/pricing/index';
import Contact from './containers/contactUs/index';
import ContactSales from './containers/contactUs/contactSales';
import AboutUs from './containers/aboutUs/index';
import Legal from './containers/legal/index';
import TermsOfService from './containers/legal/TermsOfService';
import UserTermsOfService from './containers/legal/UserTermsOfService';
import ApiTermsOfService from './containers/legal/ApiTermsOfService';
import PrivacyPolicy from './containers/legal/PrivacyPolicy';
import AcceptableUsePolicy from './containers/legal/AcceptableUsePolicy';
import CookiePolicy from './containers/legal/CookiePolicy';
import GdprCommitment from './containers/legal/GdprCommitment';
import SecurityOverview from './containers/legal/SecurityOverview';
import SecurityPractices from './containers/legal/SecurityPractices';
import ReportVulnerability from './containers/legal/ReportVulnerability';
import * as serviceWorker from './serviceWorker';
import './assets/css/index.scss';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  	<HashRouter>
    		<App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/getStarted" component={GetStarted} />
            <Route exact path="/confirmEmail" component={ConfirmEmail} />
            <Route exact path="/getCompany" component={GetCompany} />
            <Route exact path="/password" component={PasswordScreen} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/enterprise" component={Enterprise} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/contactSales" component={ContactSales} />
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/legal" component={Legal} />
            <Route exact path="/terms-of-service" component={TermsOfService} />
            <Route exact path="/user-terms-of-service" component={UserTermsOfService} />
            <Route exact path="/api-terms-of-service" component={ApiTermsOfService} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/acceptable-use-policy" component={AcceptableUsePolicy} />
            <Route exact path="/cookie-policy" component={CookiePolicy} />
            <Route exact path="/gdpr-commitment" component={GdprCommitment} />
            <Route exact path="/security-overview" component={SecurityOverview} />
            <Route exact path="/security-practices" component={SecurityPractices} />
            <Route exact path="/report-vulnerability" component={ReportVulnerability} />
          </Switch>
    		</App>
  	</HashRouter >
  </Provider>,document.getElementById('root')
);

serviceWorker.unregister();

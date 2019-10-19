import React, {Component} from 'react';
import { Config } from '../constants';
import * as Utility from '../utils/utility';
import '../assets/css/footer.scss';
import { NavLink  } from 'react-router-dom';
class Footer extends Component {
  docUrl(doc) {
      return Config.baseUrl + Config.docsUrl + doc;
  }

  pageUrl(doc) {
    return Config.baseUrl + doc;
  }

  render() {
    let urls = Utility.getApis().links;
    return (
      <footer id="footer">
        <div className="nav-footer" >
        <section className="sitemap">

          <a href="/" className="footer-icon"> </a>
          <div className="nav-footer-links">
            <div className="nav-block">
              <h5>PRODUCT</h5>
              <a href={this.docUrl('doc1.html')}>
                Why ScopeHub
              </a>
              <a href={this.docUrl('doc2.html')}>
                Enterprise
              </a>
              <a href={this.docUrl('doc3.html')}>
                Security
              </a>
              <a href={this.docUrl('doc3.html')}>
                Pricing
              </a>

            </div>
            <div className="hidden">
              <h5>SCOPEHUB BY INDUSTRY</h5>
              <a href={this.pageUrl('users.html')}>
                overview
              </a>
              <a
                href="http://stackoverflow.com/questions/tagged/"
                target="_blank"
                rel="noreferrer noopener">
                Retail Distribution
              </a>
              <a href="https://discordapp.com/">Discrete Manufacturing</a>
              <a href="https://discordapp.com/">Process Industries</a>
            </div>
            <div>
              <h5>RESOURCES</h5>
              <a href={this.pageUrl('users.html')}>
                Help Center
              </a>
              <a
                href="http://stackoverflow.com/questions/tagged/"
                target="_blank"
                rel="noreferrer noopener">
                Integrations
              </a>
              <a href="https://discordapp.com/">Partners</a>
            </div>
            <div>
              <h5>Company</h5>
              <NavLink to='/aboutUs'>About Us</NavLink>
              <a href="https://github.com/">Leadership</a>
              <a href="https://github.com/">
                Blog
              </a>
              <a href="https://github.com/">
                News
              </a>
              <a href="https://github.com/">
                Media Kit
              </a>
            </div>
          </div>
        </section>
        </div>
        <div className="copyright">
          <div className="copyright-content">
            <div className="display-inline links-grp">
                <div className="display-inline footer-link"><a href={urls.status} target="blank">Status</a></div>
                <div className="display-inline footer-link"><NavLink to="/legal">Privacy & terms</NavLink></div>
                <div className="display-inline footer-link"><NavLink to="/contact">Contact Us</NavLink></div>
            </div>
            <div className="display-inline social">
                <span className=""></span>
                <span className=""></span>
                <span className=""></span>
                <span className=""></span>
            </div>
          </div>
        </div>
      </footer>

    )};
  };

Footer.propTypes = {
};

export default Footer;

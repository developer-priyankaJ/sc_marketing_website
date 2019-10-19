import React, { Component } from 'react';
import MenuBar from '../../components/MenuBar.js';
import '../../assets/css/aboutUs.scss';
import Footer from '../../components/Footer.js';
import Loaders from '../Loader';
import * as LoaderAction from '../Loader/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
  componentDidMount(){

  }

  render() {
      return (
        <div>
            <div className="aboutUs-container">
                <Loaders/>
                <MenuBar/>
                <div className="aboutUs-content"></div>
            </div>
            <div className="footer-area">
                <Footer/>
            </div>
        </div>
      );
}
}
const mapStateToProps = (state, ownProps) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({},LoaderAction), dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutUs);

import React, { Component } from 'react';
import '../../assets/css/getStarted.scss';
import ConfirmCode from '../../components/ConfirmCode';
import Loaders from '../Loader';
import * as LoaderAction from '../Loader/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ConfirmEmail extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
      let email = this.props.location.state ? this.props.location.state.email : (sessionStorage.getItem('tempdata') ? JSON.parse(sessionStorage.getItem('tempdata')).email :"");
      this.props.history.push({
        pathname: '/getCompany',
        state: { "email": email }
      })
  }
  render() {
    const email = this.props.location.state ? this.props.location.state.email : (sessionStorage.getItem('tempdata') ? JSON.parse(sessionStorage.getItem('tempdata')).email :"");
      return (
          <div className="confirmemail">
              <Loaders/>
              <div className="plain-header sticky">
                <div className="logo"></div>
              </div>
              <div className="confirmemail-container ">
                <div className="card-container bm-page_confirmemail img-arrow">
                  <ConfirmCode email={email} handleSubmit={this.handleSubmit}/>
                </div>
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
)(ConfirmEmail);

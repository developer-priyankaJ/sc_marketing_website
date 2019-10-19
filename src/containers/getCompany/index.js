import React, { Component } from 'react';
import '../../assets/css/getStarted.scss';

class GetCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "companyName":"",
      "firstName":"",
      "lastName":""
    }
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    let email = this.props.location.state ? this.props.location.state.email : (sessionStorage.getItem('tempdata') ? JSON.parse(sessionStorage.getItem('tempdata')).email :"");
    sessionStorage.setItem('tempdata', JSON.stringify({"email":email,
                                          "companyName": this.state.companyName,
                                          "firstName":this.state.firstName,
                                          "lastName": this.state.lastName}));
    this.props.history.push({
      pathname: '/password',
      state: {
               "email":email,
               "companyName": this.state.companyName,
               "firstName":this.state.firstName,
               "lastName": this.state.lastName
            }
    })
  }
  updateField(event, name){
    var val = event.target.value;
    this.setState((prevState, props) => {
      return { [name]: val }
    });
  }

  render() {

      return (
          <div className="getcompany">
              <div className="plain-header sticky">
                <div className="logo"></div>
              </div>
              <div className="getcompany-container">
                  <div className="display-inline first-side ">
                    <div className="card-container bm-page_company">
                      <h1 className="card-heading text-center">Company Name</h1>
                      <div className="text-center"><input required id="companyName" className="inputbox" type="text" name="companyName" value={this.state.companyName} size="40" onChange={(event) => this.updateField(event,"companyName")}  placeholder="Company Name"/></div>
                      <div className="text-center"><input required id="firstName" className="inputbox" type="text" name="firstName" value={this.state.firstName} size="40" onChange={(event) => this.updateField(event,"firstName")}  placeholder="First Name"/></div>
                      <div className="text-center"><input required id="lastName" className="inputbox" type="text" name="lastName" value={this.state.lastName} size="40" onChange={(event) => this.updateField(event,"lastName")}  placeholder="Last Name"/></div>
                      <div className="button text-right"><input type="submit" onClick={this.handleSubmit}  value="Next" className="submit-button"/></div>
                    </div>
                  </div>
                  <div className="other-side display-inline "><div className="app-mock"></div></div>
              </div>
          </div>




      );
}
}

export default GetCompany;

import React, { Component } from 'react';
import { NavLink  } from 'react-router-dom';
import MenuBar from '../../components/MenuBar.js';
import '../../assets/css/contactUs.scss';
import Footer from '../../components/Footer.js';
import { Countries } from '../../utils/countries';
import { Keys } from '../../constants';
import * as Utility from '../../utils/utility';
import Select from 'react-select';
import * as Utils from '../../utils';
import Loaders from '../Loader';
import * as LoaderAction from '../Loader/actions';
import { bindActionCreators } from 'redux';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';

class ContactSales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "firstname": "",
      "lastname":"",
      "email":"",
      "company":"",
      "thankYouModal": false,
      "companySize":"",
      "country":"",
      "notes":"",
      "question": "",
      "checkbox":"",
      "submitSuccess":false,
      "firstnameError": "",
      "lastnameError":"",
      "emailError":"",
      "companyError":"",
      "companySizeError":"",
      "countryError":"",
      "questionError": "",
      "checkboxError":"",
    }
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateField = this.updateField.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount(){
    //sessionStorage.removeItem("tempdata");
  }
  openModal( name ){
    this.setState((prevState, props) => {
      return { [name]: true }
    });
  }
  closeModal( name ){
    this.setState((prevState, props) => {
      return { [name]: false}
    });
  }
  updateField(value, name){
    this.setState((prevState, props) => {
      return { [name]: value }
    });
  }
  validateFields(){
    let isValid = true;
    let isError = this.state.firstname ? false: true;
    this.setState((prevState, props) => {
      return { "firstnameError": isError }
    });
    let isError1 = this.state.lastname ? false: true;
    this.setState((prevState, props) => {
      return { "lastnameError": isError1 }
    });
    let isError2 = this.state.email ? false: true;
    this.setState((prevState, props) => {
      return { "emailError": isError2 }
    });
    let isError3 = this.state.country ? false: true;
    this.setState((prevState, props) => {
      return { "countryError": isError3 }
    });
    let isError4 = this.state.company ? false: true;
    this.setState((prevState, props) => {
      return { "companyError": isError4 }
    });
    let isError5 = this.state.companySize ? false: true;
    this.setState((prevState, props) => {
      return { "companySizeError": isError5 }
    });
    let isError6 = this.state.question ? false: true;
    this.setState((prevState, props) => {
      return { "questionError": isError6 }
    });
    let isError7 = this.state.checkbox ? false: true;
    this.setState((prevState, props) => {
      return { "checkboxError": isError7 }
    });

    if(isError || isError1 || isError2 || isError3 || isError4 || isError5 || isError6 || isError7 ){
      isValid= false;
    }
    return isValid;
  }
  submitForm(event, value){
      event.preventDefault();
      let Apis = Utility.getApis().apis;
      if(this.validateFields()){
        var data = {
           "apiToken":"xlK6cQsQRkvKdhIYH9n15yuzIhaLuiug",
           "firstName":this.state.firstname,
           "lastName":this.state.lastname,
           "email":this.state.email,
           "company":this.state.company,
           "companySize":this.state.companySize,
           "country":this.state.country,
           "question":this.state.question.value,
           "notes":this.state.notes,
           "termsAndConditionCheck":this.state.checkbox
        }, that = this;
        Utils.fetchService.call(this, {
            "method": "POST",
            "url": Apis.contactSalesAPI,
            "body": JSON.stringify(data),
            "callBack": (result) => {
              that.setState((prevState, props) => {
                return {
                  "submitSuccess": true,
                  "error":"",
                  "firstname": "",
                  "lastname":"",
                  "email":"",
                  "company":"",
                  "companySize":"",
                  "country":"",
                  "notes":"",
                  "question": "",
                  "checkbox":"",
                  "thankYouModal": true
               }
              });
            }
        });
        }
      return false;
  }
  componentWillUnmount() {

  }
  handleChange(name,value){
    this.setState((prevState, props) => {
      return { [name]: value }
    });
  }
  render() {
      let styles = {
        WebkitAlignItems: 'center',
        WebkitBoxAlign: 'center',
        MsFlexAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'hsl(0,0%,100%)',
        borderColor: 'hsl(0,0%,80%)',
        borderRadius: '4px',
        borderStyle: 'solid',
        borderWidth: '1px',
        cursor: 'default',
        display: 'flex',
        WebkitFlexWrap: 'wrap',
        MsFlexWrap: 'wrap',
        flexWrap: 'wrap',
        WebkitBoxPack: 'justify',
        WebkitJustifyContent: 'space-between',
        MsFlexPack: 'justify',
        justifyContent: 'space-between',
        minHeight: '38px',
        outline: '0 !important',
        position: 'relative'
      }
      let borderColor1 = this.state.companySizeError ? '#e01e5a !important':'hsl(0,0%,100%)';
      const customStyles1 = {
        control: () => (Object.assign({},styles,{"borderColor":borderColor1})),
        container: () => ({marginBottom: '.5rem', position: 'relative', boxSizing: 'border-box'})
      }
      let borderColor2 = this.state.countryError ? '#e01e5a !important':'hsl(0,0%,100%)';
      const customStyles2 = {
        control: () => (Object.assign({},styles,{"borderColor":borderColor2})),
        container: () => ({marginBottom: '.5rem', position: 'relative', boxSizing: 'border-box'})
      }
      let borderColor3 = this.state.questionError ? '#e01e5a !important':'hsl(0,0%,100%)';
      const customStyles3 = {
        control: () => (Object.assign({},styles,{"borderColor":borderColor3})),
        container: () => ({marginBottom: '.5rem', position: 'relative', boxSizing: 'border-box'})
      }
      return (
          <div className="contactUs-container">
          <Loaders/>
           <MenuBar/>
          <div className="contactUs-content">
              <section className="main bm-type_sales">
                <div className="content">
                  <h2 className="text-center bm-type_sales">Contact our sales team</h2>
                  <p className="text-center bm-type_sales">Our team are happy to answer your sales questions. Fill in the form and we’ll be in touch as soon as possible. </p>
                </div>
              </section>
              <div className="form-container">
                  <div className="wrapper">
                      <div className="box-container">
                          <form className="c-form" onSubmit={this.submitForm}>
                          <div className={this.state.submitSuccess ? "visible":"hidden"}><p>We’re looking forward to talking to you! Someone on our team will get in touch with you shortly based on your needs.</p></div>
                            <div className="c-form-field">
                                <label className="c-form__label" htmlFor="firstname">First Name<span className="required">*</span></label>
                                <input id="firstname" className={this.state.firstnameError ? "c-form__input error":"c-form__input"} type="text" name="firstname" value={this.state.firstname} onChange={(event) => this.handleChange(event.target.name, event.target.value)} autoComplete="off" placeholder="Your first name"  maxLength="100"/>
                                <span className={this.state.firstnameError ? "error visible":"error hidden"}>Please Let us know your First Name.</span>
                            </div>
                            <div className="c-form-field">
                                <label className="c-form__label" htmlFor="lastname">Last Name<span className="required">*</span></label>
                                <input id="lastname" className={this.state.lastnameError ? "c-form__input error":"c-form__input"} type="text" name="lastname" value={this.state.lastname} onChange={(event) => this.handleChange(event.target.name, event.target.value)} autoComplete="off" placeholder="Your last name"  maxLength="100"/>
                                  <span className={this.state.lastnameError ? "error visible":"error hidden"}>Please Let us know your Last Name.</span>
                            </div>
                            <div className="c-form-field">
                                <label className="c-form__label" htmlFor="email">Work email address<span className="required">*</span></label>
                                <input id="email" className={this.state.emailError ? "c-form__input error":"c-form__input"} type="text" name="email" value={this.state.email} onChange={(event) => this.handleChange(event.target.name, event.target.value)} autoComplete="off" placeholder="user@example.com"  maxLength="100"/>
                                <span className={this.state.emailError ? "error visible":"error hidden"}>Please Let us know your Email address.</span>
                            </div>
                            <div className="c-form-field">
                                <label className="c-form__label" htmlFor="request_title">Company<span className="required">*</span></label>
                                <input id="company" className={this.state.companyError ? "c-form__input error":"c-form__input"} type="text" name="company" value={this.state.company} onChange={(event) => this.handleChange(event.target.name, event.target.value)} autoComplete="off" placeholder="A1 marketing"  maxLength="100"/>
                                <span className={this.state.companyError ? "error visible":"error hidden"}>Please Let us know where you work.</span>
                            </div>
                            <div className="c-form-field">
                                <label className="c-form__label" htmlFor="country">Company size<span className="required">*</span></label>
                                <Select
                                  classNamePrefix="select"
                                  defaultValue=""
                                  value={this.state.companySize}
                                  isClearable={true}
                                  name="comapnySize"
                                  styles={customStyles1}
                                  onChange={(event) => this.updateField(event,"companySize")}
                                  options={Keys.companySize}
                                />
                                <span className={this.state.companySizeError ? "error visible":"error hidden"}>Please select a company size.<span className="required">*</span></span>
                            </div>
                            <div className="c-form-field">
                                <label className="c-form__label" htmlFor="country">Country<span className="required">*</span></label>
                                <Select
                                  classNamePrefix="select"
                                  defaultValue=""
                                  value={this.state.country}
                                  styles={customStyles2}
                                  isClearable={true}
                                  name="country"
                                  onChange={(event) => this.updateField(event,"country")}
                                  options={Countries}
                                />
                                <span className={this.state.countryError ? "error visible":"error hidden"}>Please Let us know where country.</span>
                            </div>
                            <div className="c-form-field">
                                <label className="c-form__label" htmlFor="question">How can our sales team help you?<span className="required">*</span></label>
                                <Select
                                  classNamePrefix="select"
                                  defaultValue=""
                                  value={this.state.question}
                                  isClearable={true}
                                  styles={customStyles3}
                                  name="question"
                                  onChange={(event) => this.updateField(event,"question")}
                                  options={Keys.salesQuestion}
                                />
                                <span className={this.state.questionError ? "error visible":"error hidden"}>Please select a sales team help option.</span>
                            </div>
                            <div className="c-form-field"><hr /></div>
                            <div className="c-form-field">
                                <label className="c-form__label" htmlFor="notes">Anything else? (optional)</label>
                                <textarea id="notes" name="notes" minLength="10" value={this.state.notes} onChange={(event) => this.handleChange(event.target.name, event.target.value)} placeholder="What challanges are you looking to overcome with Scopehub?" className="c-form__input textarea" data-value-missing="Please enter a brief description of your request!" data-value-invalid="Please enter a brief description of your request!" wrap="virtual"></textarea>
                            </div>
                            <div className="c-form-field">
                                <label className="c-form__checkbox ">
                                    <span className="c-form__label"> Please tick the box to indicate that you have read our <NavLink to="/termsAndConditions">terms &amp; conditions</NavLink>.</span>
                                    <input type="checkbox" checked={this.state.checkbox}  className={this.state.checkboxError ? "error": ""} id="checkbox" name="checkbox" value={this.state.checkbox} onChange={(event) => this.handleChange("checkbox", event.target.checked)}/>
                                    <span className="checkmark"></span>
                                </label>
                                <span className={this.state.checkboxError ? "error visible":"error hidden"}>Please agree to the terms and conditions.</span>
                            </div>
                            <div className="c-form-field">
                              <button type="submit" className="submit-button c-form__action">Submit</button>
                            </div>
                        </form>
                      </div>
                  </div>
              </div>
          </div>
          <Modal modalId="signup-modal" className="modal" closeOnOverlayClick={false} open={this.state.thankYouModal} onClose={(event) => this.closeModal("thankYouModal")} >
           <div className="modal-container bm-type_login">
               <div>
                 <div className="text-center icon"><i className="fal fa-paper-plane"></i></div>
                 <h2 className="text-center"> Thank You! </h2>
                 <p className="text-center bm-type_thankyou">One of our sales team member will reach out to you very shortly.</p>
                 <p className="text-center bm-type_marginsmall">Best, </p>
                 <p className="text-center bm-type_marginlarge">Scopehub Support Team </p>
                 <div className="text-center">
                   <input defaultValue="CLOSE" type="button" className="close-button bm-type_thankyou" onClick={() => this.closeModal("thankYouModal")}/>
                 </div>
               </div>
           </div>
         </Modal>
          <section className="support-content">
            <div className="text-center">
              <h2 className="display-as-h4">We’re here to help!</h2><p>If you have technical issues, please <a href="/help" rel="noopener">contact support</a>.</p>
              <p>For general queries, please fill in <NavLink to="/contact" rel="noopener">this form</NavLink>.</p>
            </div>
          </section>
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
)(ContactSales);

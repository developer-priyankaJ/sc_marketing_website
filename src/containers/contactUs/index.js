import React, { Component } from 'react';
import MenuBar from '../../components/MenuBar.js';
import '../../assets/css/contactUs.scss';
import Footer from '../../components/Footer.js';
import Dropzone from 'react-dropzone';
import {getCookie} from '../../utils/utility.js';
import * as Utility from '../../utils/utility';
import * as Utils from '../../utils';
import Loaders from '../Loader';
import * as LoaderAction from '../Loader/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink  } from 'react-router-dom';
import Modal from 'react-responsive-modal';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "error":"",
      "subject": "",
      "desc":"",
      "thankYouModal": false,
      "files": [],
      "showLayover":false,
      "email": "",
      "subjectError": "",
      "descError":"",
      "emailError": "",
      "uploadUrl":"",
      "showEmail": true
    }
    this.fileopener = React.createRef();
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.handleDropEvent = this.handleDropEvent.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount(){
      let cookieVal = getCookie("username");
      if(cookieVal){
        this.setState((prevState, props) => {
          return { "email": cookieVal }
        });
        this.setState((prevState, props) => {
          return { "showEmail": false }
        });
      }
  }
  openDialog(e){
    e.preventDefault();
    this.fileopener.current.click();
  }
  uploadImage(file){
    var that = this;
    Utils.fetchService.call(this, {
        "method": "PUT",
        "url": that.state.uploadUrl,
        "file": this.state.files[0],
        "Content-Type": this.state.files[0].type,
        "callBack": (result) => {
          console.log("uploaded");
          that.setState((prevState, props) => {
            return { "files": [] }
          });
        }
      });

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
  validateFields(){
    let isValid = true;
    let isError = this.state.subject ? false: true;
    this.setState((prevState, props) => {
      return { "subjectError": isError }
    });
    isError = this.state.desc ? false: true;
    this.setState((prevState, props) => {
      return { "descError": isError }
    });
    isError = this.state.email ? false: true;
    this.setState((prevState, props) => {
      return { "emailError": isError }
    });

    if(isError || this.state.subjectError || this.state.descError){
      isValid= false;
    }
    return isValid;
  }
  handleDropEvent(e){
      e.preventDefault();
      e.stopPropagation()
      this.setState((prevState, props) => {
        return { "showLayover": true }
      });
     console.log("handleDropEvent", e.target)
  }
  handleDrop( files){
      let fileArr = this.state.files;
      fileArr.push(files[0]);
      this.setState((prevState, props) => {
        return { fileArr }
      });
  }
  submitForm(event){
      event.preventDefault();
      if(this.validateFields()){

        var data = {
           "apiToken":"xlK6cQsQRkvKdhIYH9n15yuzIhaLuiug",
           "email":this.state.email,
           "subject":this.state.subject,
           "question":this.state.desc,
           "contactUs": true
        }, that = this;
        if(this.state.files && this.state.files.length>0){
          data.fileName =  ""+ this.state.files[0].lastModified +"_"+ this.state.files[0].name;
           data.fileSize = this.state.files[0].size;
        }
        let Apis = Utility.getApis().apis;
        Utils.fetchService.call(this, {
            "method": "POST",
            "url": Apis.contactApi,
            "body": JSON.stringify(data),
            "callBack": (result) => {
              that.setState((prevState, props) => {
                return {
                "subject": "",
                "thankYouModal": true,
                "desc":"",
                "email":"",
                "uploadUrl": result.url ? result.url : ""
               }
              });
              if(result.url){
                that.uploadImage(that.state.files);
              }
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
      return (
          <div className="contactUs-container">
          <Loaders/>
           <MenuBar/>
           <div className={this.state.showLayover ? "layover visble":"layover hidden"}></div>
          <div className="contactUs-content">
              <section className="main">
                <div className="content">
                  <h2 className="text-center">Contact Us</h2>
                  <p className="text-center">Questions, bug reports, feedback, feature requests – we’re here for it all. </p>
                  <p className={ this.state.showEmail ? "visible text-center bm-type_email" : "hidden text-center" }>Alraedy use ScopeHub? <a href={Utility.getApis().links.SH_App}>Sign in</a> so we can tailor your support experience. If that's not possible, we'd still like to hear from you. </p>
                </div>
              </section>
              <div className="form-container">
                  <div className="wrapper">
                      <div className="box-container">
                          <form className="c-form" onSubmit={this.submitForm}>
                            <div className="error-message">{this.state.error}</div>
                            <div className={ this.state.showEmail ? "visible c-form-field":" hidden c-form-field" }>
                                <label className="c-form__label" htmlFor="email">Your Email Address</label>
                                <input id="email" className={this.state.emailError ? "c-form__input error":"c-form__input"} type="text" name="email" value={this.state.email} onChange={(event) => this.handleChange(event.target.name, event.target.value)} autoComplete="off" placeholder="you@example.com" maxLength="100"/>
                                <span className={this.state.emailError ? "error visible":"error hidden"}>Please Let us know your Email address!</span>
                            </div>
                            <div className="c-form-field">
                                <label className="c-form__label" htmlFor="subject">Subject</label>
                                <input id="subject" className={this.state.subjectError ? "c-form__input error":"c-form__input"} type="text" name="subject" value={this.state.subject} onChange={(event) => this.handleChange(event.target.name, event.target.value)} autoComplete="off" placeholder=""  maxLength="100"/>
                                <span className={this.state.subjectError ? "error visible":"error hidden"}>Please fill out the subject field!</span>
                            </div>
                            <div className="c-form-field">
                                <label className="c-form__label" htmlFor="desc">How can we help?</label>
                                <textarea id="desc" name="desc" minLength="10" value={this.state.desc} onChange={(event) => this.handleChange(event.target.name, event.target.value)}  className={this.state.emailError ? "c-form__input textarea error":"c-form__input textarea"}  data-value-missing="Please enter a brief description of your request!" data-value-invalid="Please enter a brief description of your request!" wrap="virtual"></textarea>
                                <span className={this.state.emailError ? "error visible":"error hidden"}>Please enter a brief description of your request!</span>
                            </div>
                            <div className="c-form-field">
                              <label className="c-form__label" htmlFor="file_input_1562044642782"><strong>Attach files (optional)</strong></label>
                              <Dropzone
                                onDrop={this.handleDrop}
                                multiple={true}>
                                  {({getRootProps, getInputProps}) => {
                                    return (
                                      <div
                                        {...getRootProps({className: 'drop-zone'})}
                                      >
                                        <input {...getInputProps()} />
                                        <div>
                                          {this.state.files && this.state.files[0] ?
                                          <div>
                                            <p>{this.state.files[0].name}</p>
                                            <img src={this.state.files[0].path} alt="" />
                                          </div> : null}
                                        </div>

                                            <div className="drop-zone-text">
                                              <p>Try dropping some files here, or click to select files to upload.</p>
                                            </div>

                                      </div>
                                    )
                                }}
                              </Dropzone>
                          </div>
                            <div className="c-form-field">
                              <button type="submit" className="submit-button c-form__action">Submit</button>
                              <p><NavLink to="/privacy-policy">Privacy policy</NavLink></p>
                            </div>
                        </form>
                      </div>
                  </div>
              </div>
          </div>
          <Modal modalId="thankyou-modal" className="modal" closeOnOverlayClick={false} open={this.state.thankYouModal} onClose={(event) => this.closeModal("thankYouModal")} >
           <div className="modal-container bm-type_login">
               <div>
                 <div className="text-center icon"><i className="fal fa-paper-plane"></i></div>
                 <h2 className="text-center"> Thank You! </h2>
                 <p className="text-center bm-type_thankyou">One of our support team member will reach out to you very shortly.</p>
                 <p className="text-center bm-type_marginsmall">Best, </p>
                 <p className="text-center bm-type_marginlarge">Scopehub Support Team </p>
                 <div className="text-center">
                   <input defaultValue="CLOSE" type="button" className="close-button bm-type_thankyou" onClick={() => this.closeModal("thankYouModal")}/>
                 </div>
               </div>
           </div>
         </Modal>
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
)(Contact);

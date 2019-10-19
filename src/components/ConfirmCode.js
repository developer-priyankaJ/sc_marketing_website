import React, { Component } from 'react';
import 'react-dd-menu/dist/react-dd-menu.css';
import '../assets/css/home.scss';
import '../assets/css/scss/fontawesome.scss';
import '../assets/css/scss/regular.scss';
import * as Utils from '../utils';
//import { ENV_LINKS } from '../config';
//import { Apis } from '../constants';
import * as Utility from '../utils/utility';
import { load } from 'recaptcha-v3';
import Loaders from '../containers/Loader';
import * as LoaderAction from '../containers/Loader/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ConfirmCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "first":"",
      "second":"",
      "third":"",
      "fourth":"",
      "fifth":"",
      "sixth":"",
      "error": ""
    }
    this.first = React.createRef();
    this.second = React.createRef();
    this.third = React.createRef();
    this.fourth = React.createRef();
    this.fifth = React.createRef();
    this.sixth = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange =this.onInputChange.bind(this);
    this.goToNextInput = this.goToNextInput.bind(this);
    this.onPasteFunction = this.onPasteFunction.bind(this);
  }
  handleSubmit(){
    if(this.state.first === "" || this.state.second === "" || this.state.third==="" || this.state.fourth === "" || this.state.fifth === "" || this.state.sixth ===""){
      alert("missing Code");
      return false;
    }
    let code = "" + this.state.first + this.state.second + this.state.third + this.state.fourth + this.state.fifth + this.state.sixth;

    var that = this;
    let Apis = Utility.getApis().apis;
    load('6Le3QZwUAAAAALnpkqw_mr4GCVXRlF2aBVPWdX51').then((recaptcha) => {
      recaptcha.execute().then((token) => {
          console.log(token) // Will print the token
          var data = {
            "apiToken":"xlK6cQsQRkvKdhIYH9n15yuzIhaLuiug",
            "code":code,
            "informedFlag": this.props.informedFlag ? this.props.informedFlag : false,
            "g-recaptcha-response":token,
          }
          Utils.fetchService.call(this, {
              "method": "PATCH",
              "url": Apis.confirmCodeAPI,
              "body": JSON.stringify(data),
              "callBack": (result) => {
                  that.props.handleSubmit(result);
              },
              "error": (result) => {
                 if(result.error && result.error==="VERIFICATION_CODE_INVALID" ){
                   that.setState((prevState, props) => {
                     return { "error": "That code wasn't valid. Give it another go!" }
                   });
                 }
              }
            });
          });
        });
  }
  goToNextInput(name) {
    this[name].current.focus();
  }
  onPasteFunction(e){
     let input = e.clipboardData.getData('Text');
     input = input.replace("-","");
     console.log("input >",input);
     let inputArr = input.split("");
     var that = this;
     this.setState((prevState, props) => {
       return { "first": inputArr[0],
                "second":inputArr[1],
                "third": inputArr[2],
                "fourth": inputArr[3],
                "fifth": inputArr[4],
                "sixth": inputArr[5]
              }
     });
     setTimeout(function(){
       that.goToNextInput("sixth");
       that.handleSubmit();
     },200);
  }
  onInputChange(event){
    let arr = ["first","second","third","fourth","fifth","sixth"];
    let name = event.target.name,
        value = event.target.value;
    let count = 1;
   if(/^\d$/.test(value.toString())){
     this.setState((prevState, props) => {
       return { [name]: value }
     });
     var that = this;
     if(name==="sixth"){
        setTimeout(function(){
          that.handleSubmit();
        },100);
     }else{
        let next = arr[arr.indexOf(name)+count];
        if(this.state[next]!==""){
          count++;
          while(arr.indexOf(name)+count<6){
            if(this.state[next]!==""){
              count++;
            }else{
              next = arr[arr.indexOf(name)+count];
              break;
            }
          }
          this.goToNextInput(next);
        }else{
          this.goToNextInput(next);
        }
     }
   }else{
     this.setState((prevState, props) => {
       return { [name]: "" }
     });
   }
  }

  render() {
    return (
            <div>
            <Loaders/>
                  <h1 className="card-heading">Check your email!</h1>
                  <p className={this.props.isModal ? "bm-type_modal":""}>We've sent a 6-digit confirmation code to {this.props.email}. It will expire shortly, so enter it soon.</p>
                  <div className="text-center" >
                    <span><input  ref={this.first} onPaste={this.onPasteFunction} className="bm-type_first first code-input" name="first" value={this.state.first} type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" onChange={(event) => this.onInputChange(event)} />
                    <input ref={this.second} className="code-input" type="text" maxLength="1" name="second" value={this.state.second} size="1" min="0" max="9" pattern="[0-9]{1}" onChange={(event) => this.onInputChange(event)} />
                    <input ref={this.third} className="code-input bm-type_last" type="text" name="third" value={this.state.third} maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" onChange={(event) => this.onInputChange(event)}/></span>
                    <span> - </span>
                    <span><input ref={this.fourth} className="bm-type_first code-input" type="text" name="fourth" value={this.state.fourth} maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" onChange={(event) => this.onInputChange(event)}/>
                    <input ref={this.fifth} className="code-input" type="text" maxLength="1" name="fifth" value={this.state.fifth} size="1" min="0" max="9" pattern="[0-9]{1}" onChange={(event) => this.onInputChange(event)}/>
                    <input ref={this.sixth} className="bm-type_last code-input" type="text" name="sixth" value={this.state.sixth} maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" onChange={(event) => this.onInputChange(event)}/></span>
                  </div>
                  <p className={this.props.isModal ? "bm-type_modal info-txt":"info-txt"}>Keep this window open while checking for your code. Remember to try your spam folder!</p>
                  <div className={this.state.error ? "visible error-box" : "hidden"}>
                      <div className="error-sign"><i className="sign far fa-exclamation-triangle"></i>{this.state.error}</div>
                  </div>
                </div>

	       )
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
)(ConfirmCode);

//import moment from 'moment';
import { ENV_LINKS } from '../config';

export function toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

/*export function formatDate(date){
  var newDate;
  if (date) {
      newDate = moment(date, 'DD/MM/YYYY');
      if (!newDate.isValid()) {
        var d = new Date(date);
        if (isNaN(d.getTime())) {
          d = new Date();
        }
        newDate = moment(d);
      }
      newDate = moment(newDate).format("DD/MM/YYYY");
    }
    return newDate;
}*/
export function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;domain=.scopehub.org";
}
export function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
export function getApis(){
  let obj = {};
  //let env = process.env.REACT_APP_PROJECT_ENV;
  let env = "DEV";
  let location = window.location.href;
  if(location.indexOf("https://www.scopehub.com") >= 0){
    env = "PROD";
  }else if(location.indexOf("https://www.scopehub.net") >= 0){
    env = "QA";
  }
  obj = {
    apis: ENV_LINKS[env].Apis,
    links: ENV_LINKS[env].links
  }
  return obj;
}

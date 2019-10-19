export const ActionsTypes = {
  "UPDATE_USER": "UPDATE_USER",
  "LOADER_ACTION": "LOADER_ACTION"
}
export const Config = {
  "baseUrl": "/",
  "docsUrl": "/",
  "footerIcon": "assets/images/new_trans_dark.png",
  "title":"ScopeHub",
  "copyright": ""
}

export const Apis = {
   "signupAPI": 'https://test-be.scopehub.org/api/user/signup',
   "verifyEmailAPI": 'https://test-be.scopehub.org/api/user/wesite/verify/email',
   "confirmCodeAPI": 'https://test-be.scopehub.org/api/user/wesite/confirm/email',
   "contactSalesAPI": 'https://test-be.scopehub.org/api/contact-request',
   "contactApi": "https://test-be.scopehub.org/api/contact-request/contact-us/website",
   "publicKeyAPI":"https://test-be.scopehub.org/api/user/get-keys?apiToken=xlK6cQsQRkvKdhIYH9n15yuzIhaLuiug"
}

export const ErrorCode = {
  "SOMETHING_WRONG":""
}
export const Keys = {
  "companySize":[
    {"value":"100" , "label":"1-100"},
    {"value":"250" , "label":"101-250"},
    {"value":"1000" , "label":"251-1,000"},
    {"value":"7500" , "label":"1,001-7,500"},
    {"value":"7500+" , "label":"7,500+"}
  ],
  "salesQuestion":[
    {"value":"I want to evaluate Scopehub for my organization" , "label":"I want to evaluate Scopehub for my organization"},
    {"value":"I want to understand which Scopehub subscription is right for me" , "label":"I want to understand which Scopehub subscription is right for me"},
    {"value":"I want to buy licences or upgrade" , "label":"I want to buy licences or upgrade"},
    {"value":"I have a product question" , "label":"I have a product question"}
  ]
}

export const Content = {
  "home":{
    "introTitle":"We improve supply chain demand visibility - simply, securely, and at scale.",
    "introContent": "",
    "supplyhubInfo":{
      "title":"Your hub for multi-tier supply chain visibility",
      "subTitle": "Share inventory, demand, and dependent demand data with your supply chain partners.  Instantly inform your entire, multi-tier supply chain when and how demand changes, to ensure end customer demand and delivery expectations can be committed as early as possible."
    }
  }
}

export const Labels = {
  "heading" : {

  },
  "buttons" : {
  }

}

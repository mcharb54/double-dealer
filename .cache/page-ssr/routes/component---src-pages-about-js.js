exports.id = 682;
exports.ids = [682];
exports.modules = {

/***/ 9712:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
__webpack_unused_export__=Component=>Component;

/***/ }),

/***/ 8454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4584);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5482);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8273);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9865);
function SEO({description,lang,image,meta,keywords,title,pathname}){return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)(gatsby__WEBPACK_IMPORTED_MODULE_2__.StaticQuery,{query:detailsQuery,render:data=>{const metaDescription=description||data.site.siteMetadata.description;const metaImage=image&&image.src?`${data.site.siteMetadata.siteUrl}${image.src}`:null;const metaUrl=`${data.site.siteMetadata.siteUrl}${pathname}`;return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"],{htmlAttributes:{lang},title:title,titleTemplate:`%s | ${data.site.siteMetadata.title}`,meta:[{name:`description`,content:metaDescription},{property:`og:title`,content:title},{property:`og:url`,content:metaUrl},{property:`og:description`,content:metaDescription},{property:`og:type`,content:`website`}].concat(metaImage?[{property:`og:image`,content:metaImage},{property:`og:image:alt`,content:title},{property:"og:image:width",content:image.width},{property:"og:image:height",content:image.height}]:[]).concat(keywords.length>0?{name:`keywords`,content:keywords.join(`, `)}:[]).concat(meta)});}});}SEO.defaultProps={lang:`en`,meta:[],keywords:[],pathname:``};SEO.propTypes={description:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),lang:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),image:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),meta:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().array),keywords:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)),pathname:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),title:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string).isRequired};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);const detailsQuery="4085307986";

/***/ }),

/***/ 8678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(218);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4584);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7611);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5482);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6771);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8906);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8273);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6162);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9865);
function _EMOTION_STRINGIFIED_CSS_ERROR__(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const HeaderDiv=/*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("div", true?{target:"e9qlj7i0"}:0)( true?{name:"451hbq",styles:"margin:0;background-color:black;color:white"}:0);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({children})=>{const data=(0,gatsby__WEBPACK_IMPORTED_MODULE_4__.useStaticQuery)("3069259174");return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("div",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
        margin: 0;
      `},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet,null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("meta",{charSet:"utf-8"}),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("style",{type:"text/css"},`
          a {color: white;}
          .bg-custom-nav {
            background-color: black;
            color: white;
            font-family: 'Playfair Display', serif;
            margin: 0;
            padding: 0;
            padding-left: 20px;
            padding-right: 20px;
          }
    `)),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(HeaderDiv,null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("div",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
            margin: 0 auto;
            max-width: 1200px;
          `},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{bg:"custom-nav",bsPrefix:"navbar",variant:"dark",expand:"lg"},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Brand,{className:"mr-0",href:"/"},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(gatsby_image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{fixed:data.logo.childImageSharp.fixed})),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Collapse,{id:"responsive-navbar-nav"},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{className:"mx-auto"},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Link,{href:"/features"},"Features"),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Link,{href:"/fiction"},"Fiction"),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Link,{href:"/archives"},"Archives"),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Link,{href:"/latest"},"Latest"),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Link,{href:"/about"},"About")),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Brand,{className:"mr-0",css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
                  transform: scale(-1, 1);
                `,href:"/xedni"},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(gatsby_image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{fixed:data.logo.childImageSharp.fixed})))))),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("div",{className:"site",css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          max-width: 700px;
          padding: 0;
          background-color: white;
        `},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("div",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
             {
              flex-grow: 1;
              padding-top: 50px;
              padding-left: 20px;
              padding-right: 20px;
            }
          `,className:"site-content"},children),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("footer",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
            position: relative;
            padding-top: 40px;
          `},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("p",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
              float: left;
              color: black;
              font-style: normal;
              padding-right: 20px;
              padding-bottom: 20px;
            `},"Copyright \xA9 2019 The Double Dealer\u2122")," ",(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(gatsby__WEBPACK_IMPORTED_MODULE_4__.Link,{to:`/about/`,css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
              float: right;
              color: black;
              text-decoration: underline;
              font-style: normal;
              padding-right: 20px;
              padding-bottom: 20px;
            `},"About"))));});

/***/ }),

/***/ 3857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contact)
});

// EXTERNAL MODULE: external "/Users/martincharboneau/Documents/GitHub/double-dealer/node_modules/react/index.js"
var index_js_ = __webpack_require__(4584);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/SEO.js
var SEO = __webpack_require__(8454);
// EXTERNAL MODULE: ./node_modules/@emotion/core/dist/core.esm.js + 11 modules
var core_esm = __webpack_require__(7611);
// EXTERNAL MODULE: ./node_modules/gatsby-link/dist/index.modern.mjs
var index_modern = __webpack_require__(1562);
// EXTERNAL MODULE: ./src/components/layout.js
var layout = __webpack_require__(8678);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(5005);
;// CONCATENATED MODULE: ./src/images/icon.png
/* harmony default export */ const icon = ("/static/icon-4fed767bab70fde5297d16571dcd3e9a.png");
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.esm.js + 16 modules
var emotion_react_esm = __webpack_require__(9865);
;// CONCATENATED MODULE: ./src/pages/about.js
/* provided dependency */ var fetch = __webpack_require__(1515);
function encode(data){const formData=new FormData();for(const key of Object.keys(data)){formData.append(key,data[key]);}return formData;}class Contact extends (index_js_default()).Component{constructor(props){super(props);this.handleChange=e=>{this.setState({[e.target.name]:e.target.value});};this.handleAttachment=e=>{this.setState({[e.target.name]:e.target.files[0]});};this.handleSubmit=e=>{e.preventDefault();const form=e.target;fetch("/",{method:"POST",body:encode({"form-name":form.getAttribute("name"),...this.state})}).then(()=>(0,index_modern/* navigate */.c4)(form.getAttribute("action"))).catch(error=>alert(error));};this.state={};}render(){return (0,emotion_react_esm/* jsx */.tZ)(layout/* default */.Z,null,(0,emotion_react_esm/* jsx */.tZ)(SEO/* default */.Z,{title:"About"}),(0,emotion_react_esm/* jsx */.tZ)("h1",{css:(0,core_esm/* css */.iv)`
            display: inline-block;
            border-bottom: 1px solid;
            text-align: center;
            background-color: inherit;
            color: inherit;
          `},"About"),(0,emotion_react_esm/* jsx */.tZ)("br",null),(0,emotion_react_esm/* jsx */.tZ)("br",null),(0,emotion_react_esm/* jsx */.tZ)("p",null,"The Double Dealer is a literary magazine about the South created by two homesick expats."),(0,emotion_react_esm/* jsx */.tZ)("p",null,"We will soon be accepting submissions for fiction, poetry, essays and journalism."),(0,emotion_react_esm/* jsx */.tZ)("p",null,"While we are focused on the South, we are happy to consider ideas about any topic, in any form and from any individuals."),(0,emotion_react_esm/* jsx */.tZ)("p",null,"Consider it dealer's choice."),(0,emotion_react_esm/* jsx */.tZ)("p",null,(0,emotion_react_esm/* jsx */.tZ)("img",{alt:"Logo",src:icon,width:"50px",height:"30px",css:(0,core_esm/* css */.iv)`
              padding-right: 20px;
            `}),"\u2013\u2013The Double Dealer"),(0,emotion_react_esm/* jsx */.tZ)("br",null),(0,emotion_react_esm/* jsx */.tZ)("br",null),(0,emotion_react_esm/* jsx */.tZ)("h3",{css:(0,core_esm/* css */.iv)`
            border-bottom: 1px solid;
            text-align: center;
            background-color: inherit;
            color: inherit;
          `},"Sign up here to receive updates!"),(0,emotion_react_esm/* jsx */.tZ)("form",{name:"email-signup",method:"post",action:"/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit,css:(0,core_esm/* css */.iv)`
            text-align: center;
          `},(0,emotion_react_esm/* jsx */.tZ)("input",{type:"hidden",name:"form-name",value:"email-signup"}),(0,emotion_react_esm/* jsx */.tZ)("p",{hidden:true},(0,emotion_react_esm/* jsx */.tZ)("label",null,"Don\u2019t fill this out:"," ",(0,emotion_react_esm/* jsx */.tZ)("input",{name:"bot-field",onChange:this.handleChange}))),(0,emotion_react_esm/* jsx */.tZ)("p",null,(0,emotion_react_esm/* jsx */.tZ)("label",null,"Your name:",(0,emotion_react_esm/* jsx */.tZ)("br",null),(0,emotion_react_esm/* jsx */.tZ)("input",{css:(0,core_esm/* css */.iv)`
                  display: inline-block;
                  border-bottom: 1px solid;
                  text-align: center;
                  background-color: inherit;
                  color: inherit;
                `,type:"text",name:"name",onChange:this.handleChange}))),(0,emotion_react_esm/* jsx */.tZ)("p",null,(0,emotion_react_esm/* jsx */.tZ)("label",null,"Your email address:",(0,emotion_react_esm/* jsx */.tZ)("br",null),(0,emotion_react_esm/* jsx */.tZ)("input",{css:(0,core_esm/* css */.iv)`
                  display: inline-block;
                  border-bottom: 1px solid;
                  text-align: center;
                  background-color: inherit;
                  color: inherit;
                `,type:"text",name:"email",onChange:this.handleChange}))),(0,emotion_react_esm/* jsx */.tZ)("p",null,(0,emotion_react_esm/* jsx */.tZ)(Button/* default */.Z,{variant:"dark",type:"submit"},"Sign up!"))),(0,emotion_react_esm/* jsx */.tZ)("br",null),(0,emotion_react_esm/* jsx */.tZ)("br",null),(0,emotion_react_esm/* jsx */.tZ)("br",null),(0,emotion_react_esm/* jsx */.tZ)("br",null),(0,emotion_react_esm/* jsx */.tZ)("br",null),(0,emotion_react_esm/* jsx */.tZ)("br",null),(0,emotion_react_esm/* jsx */.tZ)("p",null,"The Double Dealer\u2122 is not affiliated with the journal of the same name previously published by Pirate's Alley Faulkner Society."," ",(0,emotion_react_esm/* jsx */.tZ)("a",{href:"https://faulknersociety.org",css:(0,core_esm/* css */.iv)`
              color: #0080c0;
              text-decoration: underline;
            `},"Click here")," ","to learn more about their bookshop and programming."));}}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-js.js.map
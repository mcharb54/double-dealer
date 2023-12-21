exports.id = 207;
exports.ids = [207];
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

/***/ 6532:
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
function _EMOTION_STRINGIFIED_CSS_ERROR__(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const HeaderDiv=/*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("div", true?{target:"ecaxy5v0"}:0)( true?{name:"vfyod4",styles:"margin:0;background-color:white;color:white"}:0);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({children})=>{const data=(0,gatsby__WEBPACK_IMPORTED_MODULE_4__.useStaticQuery)("1225017640");return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("div",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
        margin: 0;
        color: white;
        background-color: black;
      `},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet,null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("meta",{charSet:"utf-8"}),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("title",null,data.site.siteMetadata.title),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("style",{type:"text/css"},`
          body { background-color: black; color: white; }
          a {color: black; }
          .bg-custom-nav {
            background-color: white;
            color: black;
            font-family: 'Playfair Display', serif;
            max-width: 1200px;
            margin: 0;
            padding: 0;
            padding-left: 20px;
            padding-right: 20px;
          }
    `),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("link",{rel:"canonical",href:"https://thedoubledealer.com"})),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(HeaderDiv,null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("div",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
            margin: 0 auto;
            max-width: 1200px;
          `},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{bg:"custom-nav",bsPrefix:"navbar",variant:"light",expand:"lg"},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Brand,{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
                transform: scale(-1, 1);
              `,className:"mr-0",href:"/xedni"},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(gatsby_image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{fixed:data.logo.childImageSharp.fixed})),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Collapse,{id:"basic-navbar-nav"},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{className:"mx-auto"},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Link,{href:"/features2"},"Features"),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Link,{href:"/fiction2"},"Fiction"),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Link,{href:"/archives2"},"Archives"),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Link,{href:"/latest2"},"Latest"),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Link,{href:"/about"},"About")),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Brand,{href:"/",className:"mr-0"},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(gatsby_image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{fixed:data.logo.childImageSharp.fixed})))))),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("div",{className:"site",css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          background-color: black;
          color: white;
          max-width: 700px;
          padding: 0;
        `},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("div",{className:"site-content",css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
             {
              flex-grow: 1;
              padding-top: 50px;
              padding-left: 20px;
              padding-right: 20px;
            }
          `},children),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("footer",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
            position: relative;
            padding-top: 40px;
          `}," ",(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("p",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
              float: left;
              color: white;
              font-style: normal;
              padding-right: 20px;
              padding-bottom: 20px;
            `},"Copyright \xA9 2019 The Double Dealer\u2122")," ",(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(gatsby__WEBPACK_IMPORTED_MODULE_4__.Link,{to:`/about/`,css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)`
              float: right;
              color: white;
              text-decoration: underline;
              font-style: normal;
              padding-right: 20px;
              padding-bottom: 20px;
            `},"About"))));});

/***/ }),

/***/ 3918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4584);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8454);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8273);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7611);
/* harmony import */ var _utils_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9175);
/* harmony import */ var _components_tuoyal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6532);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9865);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({data})=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(_components_tuoyal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{title:"Latest"}),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("div",null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("h1",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__/* .css */ .iv)`
          display: inline-block;
          border-bottom: 1px solid;
          text-align: center;
          color: inherit;
        `},"Latest"),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("br",null),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("br",null),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{to:`/latest`,css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__/* .css */ .iv)`
          display: inline-block;
          font-style: normal;
        `},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("h5",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__/* .css */ .iv)`
            color: #0080c0;
            text-decoration: underline;
          `},"Light Theme")),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("br",null),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("br",null)),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("div",null,data.allMarkdownRemark.edges.map(({node})=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("div",{key:node.id},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{to:node.frontmatter.backroad,css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__/* .css */ .iv)`
              text-decoration: none;
              color: inherit;
              &:hover {
                text-decoration: underline;
                color: inherit;
                text-decoration-color: #0080c0;
              }
            `},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("h2",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__/* .css */ .iv)`
                margin-bottom: ${(0,_utils_typography__WEBPACK_IMPORTED_MODULE_4__.rhythm)(1/4)};
                color: inherit;
              `},node.frontmatter.title)),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("p",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__/* .css */ .iv)`
              color: grey;
            `},"By ",node.frontmatter.writer," \u2014 ",node.frontmatter.date),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("p",null,node.excerpt))))));const query="3403509947";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-latest-2-js.js.map
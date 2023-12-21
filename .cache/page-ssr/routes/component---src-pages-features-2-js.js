exports.id = 551;
exports.ids = [551];
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

/***/ 5999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4584);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8454);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5482);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8273);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7611);
/* harmony import */ var _components_tuoyal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6532);
/* harmony import */ var _utils_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9175);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6162);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(864);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9865);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({data})=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(_components_tuoyal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{title:"Features"}),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("div",null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet,null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("style",{type:"text/css"},`
          .card {
            font-family: 'Playfair Display', serif;
            background-color: inherit;
            color: white;
            width: 100%;
            margin: 0;
            padding: 0;
            border: none;
            border-bottom: 1px solid rgba(255, 255, 255,.875);
          }
    `)),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("h1",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__/* .css */ .iv)`
          display: inline-block;
          border-bottom: 1px solid;
          text-align: center;
          background-color: inherit;
          color: inherit;
        `},"Features"),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("br",null),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("br",null),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link,{to:`/features`,css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__/* .css */ .iv)`
          display: inline-block;
          font-style: normal;
        `},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("h5",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__/* .css */ .iv)`
            color: #0080c0;
            text-decoration: underline;
          `},"Light Theme")),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("br",null),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("br",null),data.allMarkdownRemark.edges.map(({node})=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("div",{key:node.id},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,{bsPrefix:"card"},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.Body,null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link,{to:node.fields.slug,css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__/* .css */ .iv)`
                  text-decoration: none;
                  color: inherit;
                  &:hover {
                    text-decoration: underline;
                    color: inherit;
                    text-decoration-color: #0080c0;
                  }
                `},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(gatsby_image__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{fluid:node.frontmatter.cover_image.childImageSharp.fluid}),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.Title,null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("h2",{css:(0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__/* .css */ .iv)`
                      margin-top: ${(0,_utils_typography__WEBPACK_IMPORTED_MODULE_6__.rhythm)(1/4)};
                      margin-bottom: ${(0,_utils_typography__WEBPACK_IMPORTED_MODULE_6__.rhythm)(1/4)};
                      text-align: center;
                      color: inherit;
                    `},node.frontmatter.title))),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.Subtitle,{className:"mb-2 text-muted text-center"},node.frontmatter.writer),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.Text,null,node.excerpt),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.Subtitle,{className:"mb-2 text-muted text-center"},node.frontmatter.date))))))));const query="1825244928";

/***/ }),

/***/ 864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ esm_Card)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: external "/Users/martincharboneau/Documents/GitHub/double-dealer/node_modules/react/index.js"
var index_js_ = __webpack_require__(4584);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__(6792);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/createWithBsPrefix.js + 1 modules
var createWithBsPrefix = __webpack_require__(4680);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/divWithClassName.js



/* harmony default export */ const divWithClassName = (function (className) {
  return /*#__PURE__*/index_js_default().forwardRef(function (p, ref) {
    return /*#__PURE__*/index_js_default().createElement("div", (0,esm_extends/* default */.Z)({}, p, {
      ref: ref,
      className: classnames_default()(p.className, className)
    }));
  });
});
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/CardContext.js
var CardContext = __webpack_require__(8154);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/CardImg.js


var _excluded = ["bsPrefix", "className", "variant", "as"];



var defaultProps = {
  variant: null
};
var CardImg = /*#__PURE__*/index_js_default().forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'img' : _ref$as,
      props = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref, _excluded);

  var prefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'card-img');
  return /*#__PURE__*/index_js_default().createElement(Component, (0,esm_extends/* default */.Z)({
    ref: ref,
    className: classnames_default()(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});
CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
/* harmony default export */ const esm_CardImg = (CardImg);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Card.js


var Card_excluded = ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"];







var DivStyledAsH5 = divWithClassName('h5');
var DivStyledAsH6 = divWithClassName('h6');
var CardBody = (0,createWithBsPrefix/* default */.Z)('card-body');
var CardTitle = (0,createWithBsPrefix/* default */.Z)('card-title', {
  Component: DivStyledAsH5
});
var CardSubtitle = (0,createWithBsPrefix/* default */.Z)('card-subtitle', {
  Component: DivStyledAsH6
});
var CardLink = (0,createWithBsPrefix/* default */.Z)('card-link', {
  Component: 'a'
});
var CardText = (0,createWithBsPrefix/* default */.Z)('card-text', {
  Component: 'p'
});
var CardHeader = (0,createWithBsPrefix/* default */.Z)('card-header');
var CardFooter = (0,createWithBsPrefix/* default */.Z)('card-footer');
var CardImgOverlay = (0,createWithBsPrefix/* default */.Z)('card-img-overlay');
var Card_defaultProps = {
  body: false
};
var Card = /*#__PURE__*/index_js_default().forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      bg = _ref.bg,
      text = _ref.text,
      border = _ref.border,
      body = _ref.body,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref, Card_excluded);

  var prefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'card');
  var cardContext = (0,index_js_.useMemo)(function () {
    return {
      cardHeaderBsPrefix: prefix + "-header"
    };
  }, [prefix]);
  return /*#__PURE__*/index_js_default().createElement(CardContext/* default */.Z.Provider, {
    value: cardContext
  }, /*#__PURE__*/index_js_default().createElement(Component, (0,esm_extends/* default */.Z)({
    ref: ref
  }, props, {
    className: classnames_default()(className, prefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border)
  }), body ?
  /*#__PURE__*/
  // @ts-ignore
  index_js_default().createElement(CardBody, null, children) : children));
});
Card.displayName = 'Card';
Card.defaultProps = Card_defaultProps;
Card.Img = esm_CardImg;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Body = CardBody;
Card.Link = CardLink;
Card.Text = CardText;
Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.ImgOverlay = CardImgOverlay;
/* harmony default export */ const esm_Card = (Card);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-features-2-js.js.map
"use strict";(self.webpackChunkdouble_dealer=self.webpackChunkdouble_dealer||[]).push([[682],{8454:function(t,e,n){n(7294);var a=n(5482),i=n(1883),o=n(4046);function r(t){let{description:e,lang:n,image:r,meta:s,keywords:c,title:d,pathname:u}=t;return(0,o.tZ)(i.StaticQuery,{query:l,render:t=>{const i=e||t.site.siteMetadata.description,l=r&&r.src?`${t.site.siteMetadata.siteUrl}${r.src}`:null,p=`${t.site.siteMetadata.siteUrl}${u}`;return(0,o.tZ)(a.ZP,{htmlAttributes:{lang:n},title:d,titleTemplate:`%s | ${t.site.siteMetadata.title}`,meta:[{name:"description",content:i},{property:"og:title",content:d},{property:"og:url",content:p},{property:"og:description",content:i},{property:"og:type",content:"website"}].concat(l?[{property:"og:image",content:l},{property:"og:image:alt",content:d},{property:"og:image:width",content:r.width},{property:"og:image:height",content:r.height}]:[]).concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(s)})}})}r.defaultProps={lang:"en",meta:[],keywords:[],pathname:""},e.Z=r;const l="4085307986"},9216:function(t,e,n){n.d(e,{Z:function(){return p}});var a=n(3330),i=(n(7294),n(6977)),o=n(5482),r=n(6771),l=n(8906),s=n(1883),c=n(6162),d=(n.p,n(4046));const u=(0,a.Z)("div",{target:"e9qlj7i0"})({name:"451hbq",styles:"margin:0;background-color:black;color:white"});var p=t=>{let{children:e}=t;const n=(0,s.useStaticQuery)("3069259174");return(0,d.tZ)("div",{css:i.iv`
        margin: 0;
      `},(0,d.tZ)(o.ql,null,(0,d.tZ)("meta",{charSet:"utf-8"}),(0,d.tZ)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}),(0,d.tZ)("style",{type:"text/css"},"\n          a {color: white;}\n          .bg-custom-nav {\n            background-color: black;\n            color: white;\n            font-family: 'Playfair Display', serif;\n            margin: 0;\n            padding: 0;\n            padding-left: 20px;\n            padding-right: 20px;\n          }\n    ")),(0,d.tZ)(u,null,(0,d.tZ)("div",{css:i.iv`
            margin: 0 auto;
            max-width: 1200px;
          `},(0,d.tZ)(r.Z,{bg:"custom-nav",bsPrefix:"navbar",variant:"dark",expand:"lg"},(0,d.tZ)(r.Z.Brand,{className:"mr-0",href:"/"},(0,d.tZ)(c.Z,{fixed:n.logo.childImageSharp.fixed})),(0,d.tZ)(r.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,d.tZ)(r.Z.Collapse,{id:"responsive-navbar-nav"},(0,d.tZ)(l.Z,{className:"mx-auto"},(0,d.tZ)(l.Z.Link,{href:"/features"},"Features"),(0,d.tZ)(l.Z.Link,{href:"/fiction"},"Fiction"),(0,d.tZ)(l.Z.Link,{href:"/archives"},"Archives"),(0,d.tZ)(l.Z.Link,{href:"/latest"},"Latest"),(0,d.tZ)(l.Z.Link,{href:"/about"},"About")),(0,d.tZ)(r.Z.Brand,{className:"mr-0",css:i.iv`
                  transform: scale(-1, 1);
                `,href:"/xedni"},(0,d.tZ)(c.Z,{fixed:n.logo.childImageSharp.fixed})))))),(0,d.tZ)("div",{className:"site",css:i.iv`
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          max-width: 700px;
          padding: 0;
          background-color: white;
        `},(0,d.tZ)("div",{css:i.iv`
             {
              flex-grow: 1;
              padding-top: 50px;
              padding-left: 20px;
              padding-right: 20px;
            }
          `,className:"site-content"},e),(0,d.tZ)("footer",{css:i.iv`
            position: relative;
            padding-top: 40px;
          `},(0,d.tZ)("p",{css:i.iv`
              float: left;
              color: black;
              font-style: normal;
              padding-right: 20px;
              padding-bottom: 20px;
            `},"Copyright © 2019 The Double Dealer™")," ",(0,d.tZ)(s.Link,{to:"/about/",css:i.iv`
              float: right;
              color: black;
              text-decoration: underline;
              font-style: normal;
              padding-right: 20px;
              padding-bottom: 20px;
            `},"About"))))}},5465:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var a=n(4578),i=n(7294),o=n(8454),r=n(6977),l=n(1562),s=n(9216),c=n(5005),d=n(8317),u=n(4046);function p(t){const e=new FormData;for(const n of Object.keys(t))e.append(n,t[n]);return e}let h=function(t){function e(e){var n;return(n=t.call(this,e)||this).handleChange=t=>{n.setState({[t.target.name]:t.target.value})},n.handleAttachment=t=>{n.setState({[t.target.name]:t.target.files[0]})},n.handleSubmit=t=>{t.preventDefault();const e=t.target;fetch("/",{method:"POST",body:p({"form-name":e.getAttribute("name"),...n.state})}).then((()=>(0,l.c4)(e.getAttribute("action")))).catch((t=>alert(t)))},n.state={},n}return(0,a.Z)(e,t),e.prototype.render=function(){return(0,u.tZ)(s.Z,null,(0,u.tZ)(o.Z,{title:"About"}),(0,u.tZ)("h1",{css:r.iv`
            display: inline-block;
            border-bottom: 1px solid;
            text-align: center;
            background-color: inherit;
            color: inherit;
          `},"About"),(0,u.tZ)("br",null),(0,u.tZ)("br",null),(0,u.tZ)("p",null,"The Double Dealer is a literary magazine about the South created by two homesick expats."),(0,u.tZ)("p",null,"We will soon be accepting submissions for fiction, poetry, essays and journalism."),(0,u.tZ)("p",null,"While we are focused on the South, we are happy to consider ideas about any topic, in any form and from any individuals."),(0,u.tZ)("p",null,"Consider it dealer's choice."),(0,u.tZ)("p",null,(0,u.tZ)("img",{alt:"Logo",src:d.Z,width:"50px",height:"30px",css:r.iv`
              padding-right: 20px;
            `}),"––The Double Dealer"),(0,u.tZ)("br",null),(0,u.tZ)("br",null),(0,u.tZ)("h3",{css:r.iv`
            border-bottom: 1px solid;
            text-align: center;
            background-color: inherit;
            color: inherit;
          `},"Sign up here to receive updates!"),(0,u.tZ)("form",{name:"email-signup",method:"post",action:"/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit,css:r.iv`
            text-align: center;
          `},(0,u.tZ)("input",{type:"hidden",name:"form-name",value:"email-signup"}),(0,u.tZ)("p",{hidden:!0},(0,u.tZ)("label",null,"Don’t fill this out:"," ",(0,u.tZ)("input",{name:"bot-field",onChange:this.handleChange}))),(0,u.tZ)("p",null,(0,u.tZ)("label",null,"Your name:",(0,u.tZ)("br",null),(0,u.tZ)("input",{css:r.iv`
                  display: inline-block;
                  border-bottom: 1px solid;
                  text-align: center;
                  background-color: inherit;
                  color: inherit;
                `,type:"text",name:"name",onChange:this.handleChange}))),(0,u.tZ)("p",null,(0,u.tZ)("label",null,"Your email address:",(0,u.tZ)("br",null),(0,u.tZ)("input",{css:r.iv`
                  display: inline-block;
                  border-bottom: 1px solid;
                  text-align: center;
                  background-color: inherit;
                  color: inherit;
                `,type:"text",name:"email",onChange:this.handleChange}))),(0,u.tZ)("p",null,(0,u.tZ)(c.Z,{variant:"dark",type:"submit"},"Sign up!"))),(0,u.tZ)("br",null),(0,u.tZ)("br",null),(0,u.tZ)("br",null),(0,u.tZ)("br",null),(0,u.tZ)("br",null),(0,u.tZ)("br",null),(0,u.tZ)("p",null,"The Double Dealer™ is not affiliated with the journal of the same name previously published by Pirate's Alley Faulkner Society."," ",(0,u.tZ)("a",{href:"https://faulknersociety.org",css:r.iv`
              color: #0080c0;
              text-decoration: underline;
            `},"Click here")," ","to learn more about their bookshop and programming."))},e}(i.Component)},5005:function(t,e,n){var a=n(7462),i=n(3366),o=n(4184),r=n.n(o),l=n(7294),s=n(6792),c=n(8358),d=["bsPrefix","variant","size","active","className","block","type","as"],u=l.forwardRef((function(t,e){var n=t.bsPrefix,o=t.variant,u=t.size,p=t.active,h=t.className,b=t.block,m=t.type,g=t.as,Z=(0,i.Z)(t,d),f=(0,s.vE)(n,"btn"),y=r()(h,f,p&&"active",o&&f+"-"+o,b&&f+"-block",u&&f+"-"+u);if(Z.href)return l.createElement(c.Z,(0,a.Z)({},Z,{as:g,ref:e,className:r()(y,Z.disabled&&"disabled")}));e&&(Z.ref=e),m?Z.type=m:g||(Z.type="button");var v=g||"button";return l.createElement(v,(0,a.Z)({},Z,{className:y}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=u},8317:function(t,e,n){e.Z=n.p+"static/icon-4fed767bab70fde5297d16571dcd3e9a.png"}}]);
//# sourceMappingURL=component---src-pages-about-js-459f3c1ad7d331332e50.js.map
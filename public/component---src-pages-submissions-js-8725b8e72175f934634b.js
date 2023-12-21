"use strict";(self.webpackChunkdouble_dealer=self.webpackChunkdouble_dealer||[]).push([[472],{8678:function(t,e,a){var n=a(3330),i=(a(7294),a(6977)),l=a(5482),r=a(6771),o=a(8906),s=a(1883),c=a(6162),d=a(4046);const u=(0,n.Z)("div",{target:"e9qlj7i0"})({name:"451hbq",styles:"margin:0;background-color:black;color:white"});e.Z=t=>{let{children:e}=t;const a=(0,s.useStaticQuery)("3069259174");return(0,d.tZ)("div",{css:i.iv`
        margin: 0;
      `},(0,d.tZ)(l.ql,null,(0,d.tZ)("meta",{charSet:"utf-8"}),(0,d.tZ)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}),(0,d.tZ)("style",{type:"text/css"},"\n          a {color: white;}\n          .bg-custom-nav {\n            background-color: black;\n            color: white;\n            font-family: 'Playfair Display', serif;\n            margin: 0;\n            padding: 0;\n            padding-left: 20px;\n            padding-right: 20px;\n          }\n    ")),(0,d.tZ)(u,null,(0,d.tZ)("div",{css:i.iv`
            margin: 0 auto;
            max-width: 1200px;
          `},(0,d.tZ)(r.Z,{bg:"custom-nav",bsPrefix:"navbar",variant:"dark",expand:"lg"},(0,d.tZ)(r.Z.Brand,{className:"mr-0",href:"/"},(0,d.tZ)(c.Z,{fixed:a.logo.childImageSharp.fixed})),(0,d.tZ)(r.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,d.tZ)(r.Z.Collapse,{id:"responsive-navbar-nav"},(0,d.tZ)(o.Z,{className:"mx-auto"},(0,d.tZ)(o.Z.Link,{href:"/features"},"Features"),(0,d.tZ)(o.Z.Link,{href:"/fiction"},"Fiction"),(0,d.tZ)(o.Z.Link,{href:"/archives"},"Archives"),(0,d.tZ)(o.Z.Link,{href:"/latest"},"Latest"),(0,d.tZ)(o.Z.Link,{href:"/about"},"About")),(0,d.tZ)(r.Z.Brand,{className:"mr-0",css:i.iv`
                  transform: scale(-1, 1);
                `,href:"/xedni"},(0,d.tZ)(c.Z,{fixed:a.logo.childImageSharp.fixed})))))),(0,d.tZ)("div",{className:"site",css:i.iv`
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
            `},"About"))))}},2998:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var n=a(4578),i=a(7294),l=a(5482),r=a(1562),o=a(6977),s=a(8678),c=a(5005),d=a(4046);function u(t){const e=new FormData;for(const a of Object.keys(t))e.append(a,t[a]);return e}let p=function(t){function e(e){var a;return(a=t.call(this,e)||this).handleChange=t=>{a.setState({[t.target.name]:t.target.value})},a.handleAttachment=t=>{a.setState({[t.target.name]:t.target.files[0]})},a.handleSubmit=t=>{t.preventDefault();const e=t.target;fetch("/",{method:"POST",body:u({"form-name":e.getAttribute("name"),...a.state})}).then((()=>(0,r.c4)(e.getAttribute("action")))).catch((t=>alert(t)))},a.state={},a}return(0,n.Z)(e,t),e.prototype.render=function(){return(0,d.tZ)(s.Z,null,(0,d.tZ)("div",null,(0,d.tZ)(l.ZP,null,(0,d.tZ)("meta",{charSet:"utf-8"}),(0,d.tZ)("title",null,"The Double Dealer"),(0,d.tZ)("link",{rel:"canonical",href:"https://thedoubledealer.com"}),(0,d.tZ)("script",{src:"https://identity.netlify.com/v1/netlify-identity-widget.js"})),(0,d.tZ)("h1",{css:o.iv`
              display: inline-block;
              border-bottom: 1px solid;
              text-align: center;
              background-color: inherit;
              color: inherit;
            `},"File Upload"),(0,d.tZ)("br",null),(0,d.tZ)("br",null),(0,d.tZ)("form",{name:"file-upload",method:"post",action:"/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},(0,d.tZ)("input",{type:"hidden",name:"form-name",value:"file-upload"}),(0,d.tZ)("p",{hidden:!0},(0,d.tZ)("label",null,"Don’t fill this out:"," ",(0,d.tZ)("input",{name:"bot-field",onChange:this.handleChange}))),(0,d.tZ)("p",null,(0,d.tZ)("label",null,"Your name:",(0,d.tZ)("br",null),(0,d.tZ)("input",{type:"text",name:"name",onChange:this.handleChange}))),(0,d.tZ)("p",null,(0,d.tZ)("label",null,"File:",(0,d.tZ)("br",null),(0,d.tZ)("input",{type:"file",name:"attachment",onChange:this.handleAttachment}))),(0,d.tZ)("p",null,(0,d.tZ)(c.Z,{variant:"dark",type:"submit"},"Send")))))},e}(i.Component)},5005:function(t,e,a){var n=a(7462),i=a(3366),l=a(4184),r=a.n(l),o=a(7294),s=a(6792),c=a(8358),d=["bsPrefix","variant","size","active","className","block","type","as"],u=o.forwardRef((function(t,e){var a=t.bsPrefix,l=t.variant,u=t.size,p=t.active,h=t.className,Z=t.block,f=t.type,m=t.as,b=(0,i.Z)(t,d),g=(0,s.vE)(a,"btn"),v=r()(h,g,p&&"active",l&&g+"-"+l,Z&&g+"-block",u&&g+"-"+u);if(b.href)return o.createElement(c.Z,(0,n.Z)({},b,{as:m,ref:e,className:r()(v,b.disabled&&"disabled")}));e&&(b.ref=e),f?b.type=f:m||(b.type="button");var y=m||"button";return o.createElement(y,(0,n.Z)({},b,{className:v}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=u}}]);
//# sourceMappingURL=component---src-pages-submissions-js-8725b8e72175f934634b.js.map
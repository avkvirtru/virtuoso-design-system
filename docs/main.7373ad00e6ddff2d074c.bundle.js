(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1509:function(t,e){},1521:function(t,e,r){r(482),r(629),r(1286),r(1444),r(1446),r(1458),r(1392),r(1423),r(1579),t.exports=r(1499)},1535:function(t,e){},1537:function(t,e){},1544:function(t,e){},1550:function(t,e){},1579:function(t,e,r){"use strict";r.r(e);var a=r(0),n=r(75),o=r(28),c="".concat("storybook-addons-assets","/panel"),s=(r(10),r(25),r(8),r(35),r(26),r(11),r(72),r(147),r(12),r(1511),r(1527),r(109)),i=r(3),u=Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"",NPM_TOKEN:"c14e436c-e40e-4fa6-a2cd-a6cc225eab4a",GH_TOKEN:"efd3a433a99592d8c6a469a304bfbb15aec22b43"}).STORYBOOK_ABSTRACT_APP_URL||"https://app.abstract.com",d=i.styled.iframe({width:"100%",height:"100%",border:"0 none"});function f(){var t=Object(s.useStorybookState)().storyId,e=Object(s.useParameter)("abstract");return a.useMemo((function(){if(!e)return null;var t=e.shareId;e.layerId;if("url"in e&&(t=function(t){if(t.match(/share.(?:go)?abstract.com\//)){var e=new URL(t).pathname.split("/");return e[e.length-1]}throw new Error("The provided url (".concat(t,') is not valid. The url must come from "https://share.abstract.com/" or "https://share.goabstract.com/".'))}(e.url)),!t)throw new Error('Could not infer share id from ShareDescriptor: "'.concat(JSON.stringify(e),'"'));var r=new URL("/embed/".concat(t),u);return a.createElement(d,{src:r.toString(),frameBorder:"0",allowFullScreen:!0})}),[e,t])}var l=a.createElement(f,null);n.addons.register("storybook-addons-assets",(function(){n.addons.add(c,{title:"Abstract",type:n.types.PANEL,render:function(t){var e=t.active,r=t.key;return a.createElement(o.AddonPanel,{active:e,key:r},l)},paramKey:"abstract"})}))},546:function(t,e){}},[[1521,1,2]]]);
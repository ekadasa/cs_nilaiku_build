(self.webpackChunkcs_nilaiku=self.webpackChunkcs_nilaiku||[]).push([[1296],{1296:(e,t,i)=>{"use strict";i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>y,keyboardDidClose:()=>w,keyboardDidOpen:()=>g,keyboardDidResize:()=>l,resetKeyboardAssist:()=>r,setKeyboardClose:()=>b,setKeyboardOpen:()=>c,startKeyboardAssist:()=>h,trackViewportChanges:()=>k});const s="ionKeyboardDidShow",o="ionKeyboardDidHide";let a={},d={},n=!1;const r=()=>{a={},d={},n=!1},h=e=>{p(e),e.visualViewport&&(d=y(e.visualViewport),e.visualViewport.onresize=()=>{k(e),g()||l(e)?c(e):w(e)&&b(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>c(e,t)),e.addEventListener("keyboardDidHide",()=>b(e))},c=(e,t)=>{u(e,t),n=!0},b=e=>{f(e),n=!1},g=()=>!n&&a.width===d.width&&(a.height-d.height)*d.scale>150,l=e=>n&&!w(e),w=e=>n&&d.height===e.innerHeight,u=(e,t)=>{const i=new CustomEvent(s,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(i)},f=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},k=e=>{a=Object.assign({},d),d=y(e.visualViewport)},y=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
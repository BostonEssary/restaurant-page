(()=>{"use strict";var t={};function e(){return document.getElementById("content")}function n(t){let e=document.createElement("h1");return e.textContent=t,e}function o(t,e){const n=document.createElement("button");return n.id=e,n.textContent=t,n}function c(){e().append(n("Restaurant Name"))}function u(){e().append(n("Menu Page"))}function d(){e().append(n("About Us"))}function m(t,e){t.addEventListener("click",(function(t){content.innerHTML="",e()}))}t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),function(){const t=document.createElement("nav"),e=o("Home","home-btn"),n=o("Menu","menu-btn"),c=o("About","about-btn");t.append(e,n,c),document.body.prepend(t)}(),c(),function(){document.getElementById("content");const t=document.getElementById("menu-btn"),e=document.getElementById("home-btn"),n=document.getElementById("about-btn");m(t,u),m(e,c),m(n,d)}()})();
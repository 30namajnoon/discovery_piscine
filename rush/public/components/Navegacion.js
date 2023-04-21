import createElement from "../js/createElement.js";
import appContext from "./appContext.js";

function Icon(container,data) {
    this.name = data.name;
    this.icon = createElement(container,{tagName:"span",className:"material-symbols-rounded",innerHtml:data.icon});
    this.icon.addEventListener("click",()=> {
        let p = document.getElementById(this.name).getBoundingClientRect(); 
        window.scroll({top:p.top,left:p.left,behavior:"smooth"});
    })
}

export default function Navegacion(data = []) {
    this.container = createElement(appContext.get("container"),{tagName:"div",className:"navegacion_container"});
    this.icons = data.map(d => new Icon(this.container,d));
}
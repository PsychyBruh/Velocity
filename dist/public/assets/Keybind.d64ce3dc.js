import{o as c}from"./index.e8530d6e.js";import{I as e,R as r}from"./index.596163ac.js";class d{id=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER);name;description;key;shift;ctrl;alt;meta;callback;constructor(t){if(typeof t.id>"u"||typeof t.id<"u"&&!e().find(a=>a.id===t.id))this.id=t.id??Math.floor(Math.random()*Number.MAX_SAFE_INTEGER),this.name=t.name,this.description=t.description,this.key=t.key,this.shift=t.shift??!1,this.ctrl=t.ctrl??!1,this.alt=t.alt??!1,this.meta=t.meta??!1,this.callback=t.callback,this.#t(this),r([...e(),this]);else return r(e().map(a=>(a.id===t.id&&(a.name=t.name??a.name,a.description=t.description??a.description,a.key=t.key??a.key,a.shift=t.shift??a.shift,a.ctrl=t.ctrl??a.ctrl,a.alt=t.alt??a.alt,a.meta=t.meta??a.meta,a.callback=t.callback||a.callback,this.#t(a)),a))),e().find(a=>a.id===t.id)}async#t(t){return await(await c("keybinds",1,{upgrade(s){s.createObjectStore("keybinds",{keyPath:"id"})}})).transaction("keybinds","readwrite").objectStore("keybinds").put(Object.assign({},t,{callback:void 0}))}toString(){let t="";return this.ctrl&&(t+="Ctrl + "),this.alt&&(t+="Alt + "),this.meta&&(t+="Meta + "),this.shift&&(t+="Shift + "),t+=this.key.charAt(0).toUpperCase()+this.key.slice(1),t}}export{d as K};
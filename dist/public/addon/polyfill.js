const e={};const s={_:[],addListener(e){this._.push(e)},removeListener(){},hasListener(){}};var t=Object.freeze({__proto__:null,getCurrent:function(){},update:function(){},reset:function(){},onUpdated:s});self.getBrowserObject=s=>{const n={};s.permissions?.includes("storage")&&Object.assign(n,{storage:e}),s.permissions?.includes("theme")&&Object.assign(n,{theme:t})};

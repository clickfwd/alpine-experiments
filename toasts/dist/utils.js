const t=(t,e={},n=(()=>{}))=>()=>({init:n,...t,...e}),e=t=>{Object.entries(t).filter((function([t]){return document.querySelector(`[x-data="${t}()"]`)})).forEach((function([t,e]){import(e).then(e=>window[t]=e.default)}))};export{t as buildComponent,e as registerComponents};

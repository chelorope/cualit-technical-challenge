var m=Object.defineProperty;var l=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var d=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,r=(t,e)=>{for(var a in e||(e={}))_.call(e,a)&&d(t,a,e[a]);if(l)for(var a of l(e))p.call(e,a)&&d(t,a,e[a]);return t};import{s as v,j as f,u as s,o as T,g as h,x as w,h as R}from"./vendor.a3bcd275.js";import{_ as x,u as y,a as E,r as V}from"./index.2f37c2ec.js";import{T as g}from"./TutorialEditCard.e7db71e4.js";const b={setup(t){const e=v(),a=f(),{data:o}=y(()=>a.params.id?`/tutorials/${a.params.id}`:void 0),n=async i=>{if(confirm("Desea guardar los cambios?")){const u=await E(r({id:o.value.id},i));e.push(`/tutoriales/${u.id}`)}},c=async()=>{confirm(`Desea eliminar el tutorial "${o.value.title}"`)&&(await V(o.value.id),e.push("/tutoriales"))};return(i,u)=>s(o)?(T(),h(g,w({key:0,cardTitle:"Edit Tutorial",class:"TutorialEditView"},r({video:s(o).video_url},s(o)),{onSubmit:n,onRemove:c,showRemove:""}),null,16)):R("",!0)}};var C=x(b,[["__scopeId","data-v-67186454"]]);export{C as default};
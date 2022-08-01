import{v as J,d as E,r as b,c as D,u as H,a as A,b as I,e as x,f as o,g as e,h as y,F as w,i as S,o as l,t as _,j as Z,w as G,p as W,k as Y,l as F,m as k,n as Q,q as X,s as ee,x as te,P as se,y as oe,z as le,A as ne,B as re,C as ie,D as ae,E as ce,G as de,H as ue,I as pe,J as ve,K as he}from"./vendor.7f1684ed.js";const me=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const v of c.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function r(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(i){if(i.ep)return;i.ep=!0;const c=r(i);fetch(i.href,c)}};me();const fe="100087b3bd25a77c425b",_e="https://reterw.github.io/index.html",ye="https://602vote.azurewebsites.net/api/auth",be="https://github.com/login/oauth/authorize";let N=localStorage.getItem("device-id");if(!N){const t=J();localStorage.setItem("device-id",t),N=t}const T=E("user",()=>{const t=b(""),s=b(N),r=b(""),u=b(""),i=D(()=>u.value.length>0),c=H();async function v(){console.log(`${c.code}`);const n=`${ye}?code=${c.code}&state=${N}`,a=await fetch(n,{mode:"cors"}),{userId:h,avatarUrl:p,accessToken:f}=await a.json();t.value=h,r.value=p,u.value=f}return c.code&&v(),{username:t,deviceId:s,avatarUrl:r,isLogined:i}}),ge=E("vote-topic",()=>{const t=b([]);async function s(){const n=T(),a=await(await fetch("https://602vote.azurewebsites.net/api/vote",{headers:{username:n.username}})).json();await Promise.all(a.map(async h=>{if(h.author!=="Anonymous"){const p=await fetch(`https://api.github.com/users/${h.author}`),{avatar_url:f}=await p.json();h.avatar=f}})),t.value=a}async function r(n,a){const h=T(),p={voteTopicId:n.id,voteChoiceId:a.id},f=await fetch("https://602vote.azurewebsites.net/api/vote",{method:"PUT",body:JSON.stringify(p),headers:{username:h.username},mode:"cors"}),{voteCount:d}=await f.json();a.voteCount=d,a.voted=!0}async function u(n){n.liked?n.liked=!1:n.liked=!0}async function i(n){n.saved=!n.saved}async function c(n){const a=T();await fetch("https://602vote.azurewebsites.net/api/vote",{method:"POST",body:JSON.stringify(n),headers:{username:a.username},mode:"cors"}),s()}async function v(n){const a=T();await fetch("https://602vote.azurewebsites.net/api/vote",{method:"DELETE",body:JSON.stringify({id:n.id}),headers:{username:a.username},mode:"cors"}),s()}return{refresh:s,votes:t,vote:r,like:u,save:i,create:c,remove:v}});var O=(t,s)=>{const r=t.__vccOpts||t;for(const[u,i]of s)r[u]=i;return r};const xe=A({setup(){let t=b([]),s=b(""),r=b("");const u=ge(),{push:i}=I();return{choices:t,choice:s,title:r,addChoice(){t.value.push(s.value),s.value!==""&&(s.value="")},deleteChoice(c){t.value.splice(t.value.indexOf(c),1)},submitVote(){u.create({title:r.value,choices:t.value,single:!1}),i("/")}}}}),ke={class:"mt-35 z-10"},$e={class:"flex flex-col w-full mt-10"},we={class:""},Se={class:"flex flex-col gap-2 text-xl mt-5 pt-10"},Ce={class:"flex items-center bg-dark-200 p-2 justify-between px-5 rounded-xl hover:cursor-pointer"},ze={class:""},Ve=["onClick"],Te={class:"flex items-center pt-5 sm:flex-row flex-col sm:h-auto h-full"},Oe={class:"inline-flex"},je=e("div",{class:"flex-grow"},null,-1),Ue=e("i",{class:"pi pi-check",style:{fontSize:"1.5rem"}},null,-1),Ae=e("div",{class:""},"submit",-1),Ie=[Ue,Ae];function Ne(t,s,r,u,i,c){const v=x("InputText");return l(),o("div",ke,[e("div",$e,[e("div",we,[y(v,{placeholder:"title",type:"text",class:"bg-dark-200 w-full text-light-300 rounded-xl",modelValue:t.title,"onUpdate:modelValue":s[0]||(s[0]=n=>t.title=n)},null,8,["modelValue"])]),e("div",Se,[(l(!0),o(w,null,S(t.choices,(n,a)=>(l(),o("div",Ce,[e("div",ze,_(a+1)+". "+_(n),1),e("i",{class:"pi pi-times",onClick:h=>t.deleteChoice(n)},null,8,Ve)]))),256))]),e("div",Te,[e("div",Oe,[y(v,{placeholder:"choice content",type:"text",class:"bg-dark-300 text-light-300 rounded-xl",modelValue:t.choice,"onUpdate:modelValue":s[1]||(s[1]=n=>t.choice=n)},null,8,["modelValue"]),e("i",{class:"pi pi-plus mx-5 my-5",style:{fontSize:"1.5rem"},onClick:s[2]||(s[2]=(...n)=>t.addChoice&&t.addChoice(...n))})]),je,e("div",{class:"flex gap-4 items-center cursor-pointer flex-shrink hover:bg-dark-300 rounded-xl sm:p-2 p-5 md:w-30 sm:p",style:{fontSize:"1.5rem"},onClick:s[3]||(s[3]=(...n)=>t.submitVote&&t.submitVote(...n))},Ie)])])])}var Le=O(xe,[["render",Ne]]);const q=(t,s,r,u)=>{const i=s.value;t.addEventListener("mouseenter",()=>{i.hovered=!0}),t.addEventListener("mouseleave",()=>{i.hovered=!1})};function Fe(){return Z({hovered:!1})}const Re=A({data(){return{items:[{label:"Survey",icon:"pi pi-fw pi-pencil",items:[{label:"Create Survey",icon:"pi pi-fw pi-plus",to:"/create-survey"},{label:"Survey List",icon:"pi pi-list",to:"/survey-list"}]}]}},props:{},directives:{hoverState:q},setup(){const t=Fe();let s=b("pi pi-thumbs-up"),r=b(!1);const u=T(),{push:i}=I();return{createVote(){i("/create-vote")},test(){alert("success")},user:u,push:i,changeIcon(){console.log(r.value),r.value==!1?(s.value="pi pi-check",r=b(!0)):(s.value="pi pi-thumbs-up",r.value=!1)},login(){window.location.href=`${be}?client_id=${fe}&redirect_uri=${_e}&state=${N}`},state:t,iconName:s}}}),z=t=>(W("data-v-044874dc"),t=t(),Y(),t),Be={class:"h-full grid grid-cols-12 text-light-50"},Ee={header:"",class:"fixed z-10 grid grid-cols-12 w-full sm:p-3 p-0 h-25 bg-dark-900"},Pe=z(()=>e("div",{class:"px-2 col-span-2 flex gap-3 items-center"},[e("i",{class:"pi pi-bell",style:{fontSize:"2rem"}}),e("div",{class:"text-xl lg:block hidden"},"We Vote")],-1)),Je={class:"col-start-4 col-span-6 flex justify-center"},qe={class:"p-input-icon-left w-200 flex items-center"},Ke=z(()=>e("i",{class:"pi pi-search",style:{fontSize:"1.5rem"}},null,-1)),Me={class:"col-start-10 col-span-3 flex justify-end gap-5 cursor-pointer p-2"},De=z(()=>e("i",{class:"pi pi-user",style:{fontSize:"1rem"}},null,-1)),He=z(()=>e("div",{class:"text-xl lg:block hidden"},"login",-1)),Ze=[De,He],Ge={key:1,class:"flex flex-row items-center gap-2 hover:bg-dark-300 rounded-xl p-2"},We={class:"text-xl lg:block hidden"},Ye=z(()=>e("div",null,null,-1)),Qe={sidebar:"",class:"lg:grid grid-cols-12 w-full mt-25 fixed"},Xe={class:"lg:col-start-2 lg:col-span-2 lg:p-0 col-span-1"},et={class:"pr-5 flex flex-col gap-5"},tt=z(()=>e("i",{class:"pi pi-home",style:{fontSize:"2rem"}},null,-1)),st=z(()=>e("div",{class:"text-2xl lg:block hidden"},"home",-1)),ot=[tt,st],lt=z(()=>e("i",{class:"pi pi-users",style:{fontSize:"2rem"}},null,-1)),nt=z(()=>e("div",{class:"text-2xl lg:block hidden"},"my page (can delete)",-1)),rt=[lt,nt],it=z(()=>e("i",{class:"pi pi-clone",style:{fontSize:"2rem"}},null,-1)),at=z(()=>e("div",{class:"text-2xl lg:block hidden"},"about app",-1)),ct=[it,at],dt=z(()=>e("a",{class:"flex flex-row gap-5 items-center hover:bg-dark-300 rounded-xl cursor-pointer p-2",href:"https://github.com/reterw/vvote"},[e("i",{class:"pi pi-github",style:{fontSize:"2rem"}}),e("div",{class:"text-2xl lg:block hidden"},"Github")],-1));function ut(t,s,r,u,i,c){const v=x("InputText"),n=x("router-link"),a=x("Menubar"),h=x("Avatar"),p=x("router-view");return l(),o("div",Be,[e("div",Ee,[Pe,e("span",Je,[e("span",qe,[Ke,y(v,{type:"text",placeholder:"type search",class:"bg-dark-100 w-full rounded-xl"})])]),e("div",Me,[y(a,{class:"h-10 p-0 mt-2",model:t.items},{default:G(()=>[y(n,{to:t.item.to,custom:""},null,8,["to"])]),_:1},8,["model"]),t.user.isLogined?(l(),o("div",Ge,[y(h,{image:t.user.avatarUrl},null,8,["image"]),e("div",We,_(t.user.username),1)])):(l(),o("div",{key:0,class:"flex flex-row items-center gap-2 hover:bg-dark-300 rounded-xl p-2",onClick:s[0]||(s[0]=(...f)=>t.login&&t.login(...f))},Ze))]),Ye]),e("div",Qe,[e("div",Xe,[e("div",et,[e("div",{class:"flex flex-row gap-5 items-center hover:bg-dark-300 rounded-xl cursor-pointer p-2",onClick:s[1]||(s[1]=f=>t.push("/"))},ot),e("div",{class:"flex flex-row gap-5 items-center hover:bg-dark-300 rounded-xl cursor-pointer p-2",onClick:s[2]||(s[2]=f=>t.push("/admin-page"))},rt),e("div",{class:"flex flex-row gap-5 items-center hover:bg-dark-300 rounded-xl cursor-pointer p-2",onClick:s[3]||(s[3]=f=>t.push("/about"))},ct),dt])])]),y(p,{content:"",class:"mt-15 flex justify-center lg:col-span-6 lg:col-start-4 col-span-10 col-start-3 px-5 relative"})])}var pt=O(Re,[["render",ut],["__scopeId","data-v-044874dc"]]),vt="/vvote/assets/602azureFunction.108458b2.jpg",ht="/vvote/assets/cusmosdb.20fb6121.jpg",mt="/vvote/assets/RestEndpoints.e07d7642.jpg",ft="/vvote/assets/githuboauth.a63fa0b0.jpg",_t="/vvote/assets/homepage.de221722.jpg",yt="/vvote/assets/mypage.92fd3167.jpg",bt="/vvote/assets/createvote.8f7a5fd7.jpg",gt="/vvote/assets/createvote2.74145964.jpg",xt="/vvote/assets/vote1.fa7e193c.jpg",kt="/vvote/assets/vote2.f88f95ac.jpg",$t="/vvote/assets/votecount.7f2f5ad5.jpg",wt="/vvote/assets/votehistory.bab89b62.jpg",St="/vvote/assets/restapi.bde22f86.jpg";const Ct={},zt={class:"grid"},Vt=e("br",null,null,-1),Tt=e("div",null,[e("div",null,[e("br"),e("label",{class:"text-6xl"},"Some details about this app"),e("br"),e("label",{class:"text-4xl"},"Azure function"),e("br"),e("label",{class:"text-2xl"},"My Server-Side functionality has been deployed on Microsoft Azure server"),e("br"),e("img",{src:vt}),e("label",{class:"text-4xl"},"Persistence"),e("br"),e("label",{class:"text-2xl"},"Im using CusmosDB provide by Azure to save my data, which also share the Mongo API"),e("br"),e("img",{src:ht}),e("label",{class:"text-4xl"},"Rest API endpoints"),e("br"),e("a",{class:"text-3xl text-yellow-200",href:"https://602vote.azurewebsites.net/api/vote"},"https://602vote.azurewebsites.net/api/vote"),e("img",{src:mt}),e("label",{class:"text-4xl"},"Log in with github Oauth"),e("br"),e("br"),e("img",{src:ft}),e("label",{class:"text-4xl"},"Home Page render all user's vote together, and the vote box does not have delete button"),e("br"),e("br"),e("img",{src:_t}),e("label",{class:"text-4xl"},"my page is for admin, after you login , you can render the vote create by you, and also delete them by click the button."),e("br"),e("br"),e("img",{src:yt}),e("label",{class:"text-4xl"},"for create vote, enter the title of the vote problem, and enter choice of it, then click submit."),e("br"),e("br"),e("img",{src:bt}),e("img",{src:gt}),e("label",{class:"text-4xl"},"click thumb to vote your choice."),e("br"),e("br"),e("img",{src:xt}),e("img",{src:kt}),e("label",{class:"text-4xl"},"vote count will change in data base, and each prople's vote are recorded."),e("br"),e("br"),e("img",{src:$t}),e("img",{src:wt}),e("label",{class:"text-4xl"},"using delete, get, post and put methods."),e("br"),e("br"),e("img",{src:St})])],-1),Ot=[Vt,Tt];function jt(t,s){return l(),o("div",zt,Ot)}var Ut=O(Ct,[["render",jt]]);const P=E("survey-store",()=>{const t=b([]),s=b([]);async function r(a){return await(await fetch("https://602serveyfunction.azurewebsites.net/api/createSurvery?code=78aQiRe8WvExraq2nH5eoD5-b7VV-ICqq3nntZfYSjovAzFusLN4IQ==",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},mode:"cors"})).json()}async function u(){return t.value=await(await fetch("https://602serveyfunction.azurewebsites.net/api/getAllSurveys?code=sJw6ZTArf2OgSYDk41__Zkfyh60hJWNYf4zvqumNTEgfAzFuWuqhbA==",{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json(),console.log(t,233),t}async function i(){return s.value=await(await fetch("https://602serveyfunction.azurewebsites.net/api/getSurveyResult?code=3Hkyl0b8KHOT-WFukKNLxTK6N25j8OCF1Z0LNeDspXISAzFu7ZuOcA==",{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json(),console.log(s,233),s}async function c(a){await fetch("https://602serveyfunction.azurewebsites.net/api/answerSurvey?code=x6EjEDPp5Ngzejb4rOlXkb6Bt6pnKKOLHej_xKY-n8RjAzFuB61CYg==",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},mode:"cors"})}async function v(a){await(await fetch("https://602serveyfunction.azurewebsites.net/api/getSurveysOfUser?code=5P0eRKMTU9xtMFJsdyP1SS-K_xnUp2BL-FqaY5e9ey6hAzFuoEo_xg==&user_id="+a.user_id,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json()}async function n(a){await fetch("https://602serveyfunction.azurewebsites.net/api/deleteSurvey?code=SOvM_BhyQjQKuHBbNxqqJOuKjniheXZZQn96sg-Q2rOHAzFuTfQQug==&questionnaire_id="+a.questionnaire_id,{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors"})}return{createSurvey:r,getAllSurveys:u,surveyForm:t,getAllSurveysResult:i,surveyResult:s,submitSurvey:c,getSurveyByUserId:v,deleteSurveyById:n}}),At=A({setup(){const{username:t}=T();F(()=>{t||(window.alert("Please login to create survey!"),n("/"))});const s=[{name:"Survey Name",value:-1},{name:"Single",value:0},{name:"Multiple",value:1},{name:"Input",value:2}],r=b(null);let u=b([]),i=b(""),c=b("");const v=P(),{push:n}=I();let a=b([]);return{types:s,selectedType:r,choices:u,choice:i,title:c,surveyList:a,addChoice(){!i.value||(u.value.push(i.value),i.value!==""&&(i.value=""))},deleteChoice(h){u.value.splice(u.value.indexOf(h),1)},addSurveyList(){var p,f,d,V,g;const h=a.value.filter(j=>j.type===-1);!c.value||(((p=r==null?void 0:r.value)==null?void 0:p.value)===0||((f=r==null?void 0:r.value)==null?void 0:f.value)===1)&&u.value.length===0||h.length>0&&((d=r==null?void 0:r.value)==null?void 0:d.value)===-1||a.value.length===0&&((V=r==null?void 0:r.value)==null?void 0:V.value)!==-1||(a.value.push({id:J(),type:JSON.parse(JSON.stringify((g=r==null?void 0:r.value)==null?void 0:g.value)),title:JSON.parse(JSON.stringify(c.value)),content:JSON.parse(JSON.stringify(u.value)),checked:!1,inputText:"",selectedChoices:[]}),c.value="",u.value.splice(0,u.value.length))},deleteSurveyList(h){a.value.splice(a.value.indexOf(h),1)},async createSurvey(){var f;const h=[];a.value.map(d=>{d.type!==-1&&h.push({title:d.title,type:d.type,options:d.content})});const p=await v.createSurvey({user_id:t,name:(f=a.value.filter(d=>d.type===-1)[0])==null?void 0:f.title,items:h});n("/survey/"+p._id)}}}}),It={class:"mt-35 z-10",style:{"z-index":"1"}},Nt={class:"flex flex-col w-full mt-10"},Lt={class:"inline-flex items-center mb-10"},Ft=e("div",{class:"mr-5"},"Please choose a type",-1),Rt={key:0},Bt={class:"flex flex-col gap-2 text-xl pt-10"},Et={class:""},Pt=["onClick"],Jt={key:1,class:"flex items-center pt-5 sm:flex-row flex-col sm:h-auto w-full h-full"},qt={class:"inline-flex w-full"},Kt={key:2,class:"flex gap-1 items-center cursor-pointer flex-shrink rounded-xl sm:p-2 p-5 md:w-40 sm:p mt-10 place-self-end",style:{fontSize:"1.5rem"}},Mt={class:"flex flex-col gap-2 text-xl mt-5 pt-10"},Dt={class:"flex-row mb-15 border-b-1 border-indigo-200"},Ht={class:"flex justify-between mb-10"},Zt={key:0,class:"w-full mb-20 text-center",style:{fontSize:"3rem"}},Gt={key:1,class:"grow"},Wt=["onClick"],Yt={key:0},Qt={class:"flex justify-between mb-10"},Xt={class:"flex-none mr-5",style:{fontSize:"2rem"}},es={class:"grow"},ts=["onClick"],ss={class:"flex mb-10"},os={key:0,class:"cursor-pointer field-radiobutton",style:{"line-height":"1"}},ls=["for"],ns={key:1,class:"cursor-pointer field-checkbox",style:{"line-height":"1"}},rs=["for"],is={key:0,class:"flex"},as={key:3,class:"mb-40 place-self-end",style:{fontSize:"1.5rem"}};function cs(t,s,r,u,i,c){var d,V,g,j,U;const v=x("Dropdown"),n=x("InputText"),a=x("Button"),h=x("RadioButton"),p=x("Checkbox"),f=x("Textarea");return l(),o("div",It,[e("div",Nt,[e("div",Lt,[Ft,y(v,{modelValue:t.selectedType,"onUpdate:modelValue":s[0]||(s[0]=m=>t.selectedType=m),options:t.types,optionLabel:"name",placeholder:"--Type--"},null,8,["modelValue","options"])]),((d=t.selectedType)==null?void 0:d.value)>-2?(l(),o("div",Rt,[y(n,{placeholder:"title",type:"text",class:"bg-dark-200 w-full text-light-300 rounded-xl",modelValue:t.title,"onUpdate:modelValue":s[1]||(s[1]=m=>t.title=m)},null,8,["modelValue"])])):k("",!0),e("div",Bt,[(l(!0),o(w,null,S(t.choices,(m,R)=>(l(),o("div",{key:m,class:"flex items-center bg-dark-200 p-2 justify-between px-5 rounded-xl hover:cursor-pointer"},[e("div",Et,_(R+1)+". "+_(m),1),e("i",{class:"pi pi-times",onClick:C=>t.deleteChoice(m)},null,8,Pt)]))),128))]),((V=t.selectedType)==null?void 0:V.value)===0||((g=t.selectedType)==null?void 0:g.value)===1?(l(),o("div",Jt,[e("div",qt,[y(n,{placeholder:"choice content",type:"text",class:"bg-dark-300 w-full text-light-300 rounded-xl",modelValue:t.choice,"onUpdate:modelValue":s[2]||(s[2]=m=>t.choice=m)},null,8,["modelValue"]),e("i",{class:"pi pi-plus mx-5 my-5 hover:bg-dark-200 cursor-pointer",style:{fontSize:"1.5rem"},onClick:s[3]||(s[3]=(...m)=>t.addChoice&&t.addChoice(...m))})])])):k("",!0),((j=t.selectedType)==null?void 0:j.value)>-2?(l(),o("div",Kt,[y(a,{onClick:t.addSurveyList,class:"md:w-40",label:"Add"},null,8,["onClick"])])):k("",!0),e("div",Mt,[(l(!0),o(w,null,S(t.surveyList,(m,R)=>(l(),o("div",Dt,[e("div",Ht,[m.type===-1?(l(),o("div",Zt,_(m.title),1)):k("",!0),m.type===-1?(l(),o("div",Gt,[e("i",{style:{fontSize:"1.5rem"},class:"pi pi-times cursor-pointer hover:bg-dark-300",onClick:C=>t.deleteSurveyList(m)},null,8,Wt)])):k("",!0)]),m.type!==-1?(l(),o("div",Yt,[e("div",Qt,[e("div",Xt,_(R)+". "+_(m.title),1),e("div",es,[e("i",{style:{fontSize:"1.5rem"},class:"pi pi-times cursor-pointer hover:bg-dark-300",onClick:C=>t.deleteSurveyList(m)},null,8,ts)])]),(l(!0),o(w,null,S(m.content,(C,Ds)=>(l(),o("div",ss,[m.type===0?(l(),o("div",os,[y(h,{class:"mr-2 pb-5",value:C,id:"singleOption"+C,name:m.title,modelValue:m.checked,"onUpdate:modelValue":B=>m.checked=B},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"singleOption"+C},_(C),9,ls)])):k("",!0),m.type===1?(l(),o("div",ns,[y(p,{class:"mr-2 pb-5",value:C,id:"multiOption"+C,name:m.title,modelValue:m.selectedChoices,"onUpdate:modelValue":B=>m.selectedChoices=B},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"multiOption"+C},_(C),9,rs)])):k("",!0)]))),256)),m.type===2?(l(),o("div",is,[y(f,{autoResize:!0,class:"mb-10 w-full",modelValue:m.inputText,"onUpdate:modelValue":C=>m.inputText=C,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])])):k("",!0)])):k("",!0)]))),256))]),((U=t.surveyList)==null?void 0:U.length)>1?(l(),o("div",as,[y(a,{onClick:t.createSurvey,class:"md:w-40",label:"Create"},null,8,["onClick"])])):k("",!0)])])}var ds=O(At,[["render",cs]]);const us=A({setup(){const{push:t}=I();let s=b([]);return F(async()=>{const r=await(await fetch("https://602serveyfunction.azurewebsites.net/api/getSurveyResult?code=3Hkyl0b8KHOT-WFukKNLxTK6N25j8OCF1Z0LNeDspXISAzFu7ZuOcA==",{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json();s.value=JSON.parse(JSON.stringify(r.reverse()))}),{surveyResult:s,navigateToSurvey(r){t("/survey/"+r)}}}}),ps={class:"mt-35 z-10 flex flex-col w-full",style:{"z-index":"1"}},vs=["onClick"],hs=e("div",{class:"mb-10",style:{fontSize:"1.5rem"}}," Q: ",-1),ms={class:"mb-5"},fs={class:"mt-10 mb-10",style:{fontSize:"1.5rem"}};function _s(t,s,r,u,i,c){return l(),o("div",ps,[(l(!0),o(w,null,S(t.surveyResult,v=>(l(),o("div",{key:v._id,class:"mt-20 bg-dark-900 border-1 border-dark-100 mb-20 rounded-3xl p-10"},[e("div",{class:"pb-5 w-full text-blue-400 cursor-pointer border-dark-100 border-b-1 text-center hover:underline",onClick:n=>t.navigateToSurvey(v._id),style:{fontSize:"2rem"}},_(v.name),9,vs),(l(!0),o(w,null,S(v.items,n=>(l(),o("div",{key:n.title,class:"mt-10 border-dark-100 border-b-1"},[hs,e("div",ms,_(n.title),1),(l(!0),o(w,null,S(n.options,a=>(l(),o("div",{class:"mb-5",key:a},_(a),1))),128))]))),128)),(l(!0),o(w,null,S(v.answers,(n,a)=>(l(),o("div",{key:n._id,class:"mt-10 border-dark-100 border-b-1"},[e("div",fs," A"+_(a+1)+": ",1),(l(!0),o(w,null,S(n.answerItems,h=>(l(),o("div",{key:h.answer,class:"mb-5 pb-5 border-dark-600 border-b-1"},_(h.answer),1))),128))]))),128))]))),128))])}var K=O(us,[["render",_s]]),L;(function(t){t[t.SingleChoice=0]="SingleChoice",t[t.MultipleChoice=1]="MultipleChoice",t[t.BlankFill=2]="BlankFill"})(L||(L={}));const ys=A({setup(){const{push:t,currentRoute:s}=I(),{submitSurvey:r}=P();let u=b([]);return F(async()=>{const i=await(await fetch("https://602serveyfunction.azurewebsites.net/api/getAllSurveys?code=sJw6ZTArf2OgSYDk41__Zkfyh60hJWNYf4zvqumNTEgfAzFuWuqhbA==",{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json();u.value=i.filter(c=>c._id===s.value.params.id)}),{surveyForm:u,async submitForm(){const i=u.value,c=[];i[0].items.map(n=>{n.type===L.SingleChoice?c.push({answer:n.checked}):n.type===L.MultipleChoice?c.push({answer:n.selectedChoices.join()}):n.type===L.BlankFill&&c.push({answer:n.inputText})});const v={questionnaire_id:s.value.params.id.toString(),answerItems:c};await r(v),t("/survey-list")}}}}),bs={class:"mt-35 z-10 flex flex-col w-full",style:{"z-index":"1"}},gs={class:"w-full mb-20 pb-10 text-center border-b-1 border-indigo-200",style:{fontSize:"3rem"}},xs={class:"flex flex-col gap-2 text-xl mt-5 pt-10"},ks={class:"w-full mb-10",style:{fontSize:"1.5rem"}},$s={key:0},ws={key:0,class:"cursor-pointer field-radiobutton",style:{"line-height":"1"}},Ss=["for"],Cs={key:1,class:"cursor-pointer field-checkbox",style:{"line-height":"1"}},zs=["for"],Vs={key:0,class:"flex"},Ts={key:0,class:"mb-40 place-self-end",style:{fontSize:"1.5rem"}};function Os(t,s,r,u,i,c){var p;const v=x("RadioButton"),n=x("Checkbox"),a=x("Textarea"),h=x("Button");return l(),o("div",bs,[(l(!0),o(w,null,S(t.surveyForm,f=>(l(),o("div",{key:f._id,class:"mt-20 bg-dark-900 border-1 border-dark-100 mb-20 rounded-3xl p-10"},[e("div",gs,_(f.name),1),e("div",xs,[(l(!0),o(w,null,S(f.items,(d,V)=>(l(),o("div",{key:V,class:"flex-row mb-15 border-b-1 border-indigo-200"},[e("div",ks,_(d.title),1),d.type!==-1?(l(),o("div",$s,[(l(!0),o(w,null,S(d.options,(g,j)=>(l(),o("div",{class:"flex mb-10",key:j},[d.type===0?(l(),o("div",ws,[y(v,{class:"mr-2 pb-5",value:g,id:"singleOption"+g,name:d.title,modelValue:d.checked,"onUpdate:modelValue":U=>d.checked=U},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"singleOption"+g},_(g),9,Ss)])):k("",!0),d.type===1?(l(),o("div",Cs,[y(n,{class:"mr-2 pb-5",value:g,id:"multiOption"+g,name:d.title,modelValue:d.selectedChoices,"onUpdate:modelValue":U=>d.selectedChoices=U},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"multiOption"+g},_(g),9,zs)])):k("",!0)]))),128)),d.type===2?(l(),o("div",Vs,[y(a,{autoResize:!0,class:"mb-10 w-full",modelValue:d.inputText,"onUpdate:modelValue":g=>d.inputText=g,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])])):k("",!0)])):k("",!0)]))),128))])]))),128)),((p=t.surveyForm)==null?void 0:p.length)>0?(l(),o("div",Ts,[y(h,{onClick:t.submitForm,class:"md:w-40",label:"Submit"},null,8,["onClick"])])):k("",!0)])}var js=O(ys,[["render",Os]]);const Us=A({setup(){const{go:t,push:s}=I(),{deleteSurveyById:r}=P(),{username:u}=T();let i=b([]);const c=async()=>await(await fetch("https://602serveyfunction.azurewebsites.net/api/getSurveysOfUser?code=5P0eRKMTU9xtMFJsdyP1SS-K_xnUp2BL-FqaY5e9ey6hAzFuoEo_xg==&user_id="+u,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json();return F(async()=>{u||(window.alert("Please login to delete survey!"),s("/")),i.value=await c()}),{async deleteSurvey(v){window.confirm("Are you sure to delete this survey?")&&(await r({questionnaire_id:v}),i.value=await c())},surveyForm:i}}}),As={class:"mt-35 z-10 flex flex-col w-full",style:{"z-index":"1"}},Is={class:"w-full mb-20 pb-10 text-center border-b-1 border-indigo-200",style:{fontSize:"3rem"}},Ns=["onClick"],Ls={class:"flex flex-col gap-2 text-xl mt-5 pt-10"},Fs={class:"w-full mb-10",style:{fontSize:"1.5rem"}},Rs={key:0},Bs={key:0,class:"cursor-pointer field-radiobutton",style:{"line-height":"1"}},Es=["for"],Ps={key:1,class:"cursor-pointer field-checkbox",style:{"line-height":"1"}},Js=["for"],qs={key:0,class:"flex"};function Ks(t,s,r,u,i,c){const v=x("RadioButton"),n=x("Checkbox"),a=x("Textarea");return l(),o("div",As,[(l(!0),o(w,null,S(t.surveyForm,h=>(l(),o("div",{key:h._id,class:"mt-20 bg-dark-900 border-1 border-dark-100 mb-20 rounded-3xl p-10"},[e("div",Is,[Q(_(h.name)+" ",1),e("i",{class:"pi pi-times cursor-pointer mt-7",onClick:p=>t.deleteSurvey(h._id),style:{fontSize:"2rem",float:"right"}},null,8,Ns)]),e("div",Ls,[(l(!0),o(w,null,S(h.items,(p,f)=>(l(),o("div",{key:f,class:"flex-row mb-15 border-b-1 border-indigo-200"},[e("div",Fs,_(p.title),1),p.type!==-1?(l(),o("div",Rs,[(l(!0),o(w,null,S(p.options,(d,V)=>(l(),o("div",{class:"flex mb-10",key:V},[p.type===0?(l(),o("div",Bs,[y(v,{class:"mr-2 pb-5",value:d,id:"singleOption"+d,name:p.title,modelValue:p.checked,"onUpdate:modelValue":g=>p.checked=g},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"singleOption"+d},_(d),9,Es)])):k("",!0),p.type===1?(l(),o("div",Ps,[y(n,{class:"mr-2 pb-5",value:d,id:"multiOption"+d,name:p.title,modelValue:p.selectedChoices,"onUpdate:modelValue":g=>p.selectedChoices=g},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"multiOption"+d},_(d),9,Js)])):k("",!0)]))),128)),p.type===2?(l(),o("div",qs,[y(a,{autoResize:!0,class:"mb-10 w-full",modelValue:p.inputText,"onUpdate:modelValue":d=>p.inputText=d,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])])):k("",!0)])):k("",!0)]))),128))])]))),128))])}var Ms=O(Us,[["render",Ks]]);const M=X({history:ee(),routes:[{path:"/create-vote",component:Le},{path:"/",component:K},{path:"/about",component:Ut},{path:"/admin-page",component:Ms},{path:"/create-survey",component:ds},{path:"/survey-list",component:K},{path:"/survey/:id",component:js}]});M.afterEach((t,s,r)=>{document.querySelector("body").setAttribute("style","overflow: auto !important;")});const $=te(pt);$.use(M);$.use(se);$.directive("hover",q);$.component("chips",oe);$.component("Button",le);$.component("InputText",ne);$.component("Fieldset",re);$.component("Checkbox",ie);$.component("Avatar",ae);$.component("SpeedDial",ce);$.component("Dropdown",de);$.component("RadioButton",ue);$.component("Textarea",pe);$.component("Menubar",ve);$.use(he());$.mount("#app");

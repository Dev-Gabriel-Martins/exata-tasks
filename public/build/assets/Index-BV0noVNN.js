import{o as n,f as i,b as e,r as q,s as O,k as _,x as I,i as V,y as L,z as E,a as o,u as S,w as u,F as j,Z as R,c as $,g as h,A as T,j as Z,d as c,B as G,t as x,e as H,C as F}from"./app-Dhpvmu4O.js";import{_ as J,F as K}from"./FlashMessage-8E85wZde.js";import{_ as p,a as C,b as D}from"./TextInput-DfTTC1p8.js";import{P as Q}from"./PrimaryButton-4Z7WkfWu.js";import{_ as W,D as M,a as U}from"./SecondaryButton-B4eWq7gO.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ApplicationTitle-z3y4q2dv.js";const Y={},ee={class:"my-4"},te={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},se={class:"overflow-hidden bg-white shadow-sm sm:rounded-lg"},ae={class:"p-6 text-gray-900"};function le(y,a){return n(),i("div",ee,[e("div",te,[e("div",se,[e("div",ae,[q(y.$slots,"default")])])])])}const oe=X(Y,[["render",le]]),de={__name:"TextAreaInput",props:{modelValue:{type:String,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(y,{expose:a}){const r=O(y,"modelValue"),d=_(null);return I(()=>{d.value.hasAttribute("autofocus")&&d.value.focus()}),a({focus:()=>d.value.focus()}),(f,m)=>V((n(),i("textarea",{class:"rounded-md border-gray-300 shadow-sm focus:border-[#f8a200] focus:ring-[#f8a200]","onUpdate:modelValue":m[0]||(m[0]=v=>r.value=v),ref_key:"textarea",ref:d,rows:"3"},null,512)),[[L,r.value]])}},ne={class:"flex inline items-center"},ie={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},re={class:"grid grid-cols-5 gap-3 md:grid-cols-5 lg:gap-5"},ue={class:"col-span-3"},me={class:"overflow-hidden bg-white shadow-sm sm:rounded-lg"},pe={key:0,class:"overflow-x-auto"},ce={class:"min-w-full divide-y divide-gray-200"},fe={class:"divide-y divide-gray-200"},ve=["onClick"],ge=["onClick"],xe={key:0,class:"bg-yellow-100 text-yellow-800 px-2.5 py-0.5 rounded"},_e={key:1,class:"bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded"},ye={key:2,class:"bg-green-100 text-green-800 px-2.5 py-0.5 rounded"},we=["onClick"],be=["onClick"],he={key:1,class:"p-6 text-gray-900"},Ce={class:"col-span-2"},Ve={class:"overflow-hidden bg-white shadow-sm sm:rounded-lg p-6"},ke={class:"text-lg font-semibold text-gray-900 mb-4"},$e={class:"flex gap-5 mb-4"},Te={class:"flex-2 w-3/5"},De={class:"flex-1 w-2/5"},Ae={class:"mb-4"},Ee={class:"mt-4 flex justify-start gap-4"},Se={key:0,class:"mt-4 overflow-hidden bg-white shadow-sm sm:rounded-lg p-6"},je={class:"flex justify-start gap-4"},Fe={class:"p-6"},Me={class:"mt-6 flex justify-end gap-4"},Ie={__name:"Index",setup(y){const a=E({id:null,title:"",description:"",status:0,username:""}),r=E({}),d=_(!1),f=_(!1),m=_(null),v=()=>{a.id=null,a.title="",a.description="",a.status=0,d.value=!1,Object.keys(r).forEach(l=>r[l]=null)},B=()=>{const l=d.value?`/tasks/${a.id}`:"/tasks",t=d.value?"put":"post";F[t](l,a,{onError:s=>{Object.assign(r,s)},onSuccess:()=>{v()}})},w=l=>{a.id=l.id,a.title=l.title,a.description=l.description,a.status=l.status,a.username=l.user.name,a.created_at=b(l.created_at),a.updated_at=b(l.updated_at),d.value=!0},z=l=>{m.value=l,f.value=!0},N=()=>{m.value&&F.delete(`/tasks/${m.value}`,{onSuccess:()=>{a.id===m.value&&(d.value=!1,v()),f.value=!1,m.value=null},onError:l=>{console.log(l),Object.assign(r,l)}})},A=()=>{f.value=!1,m.value=null},b=l=>{const t=new Date(l);return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}).format(t)},g=_({status:"",sort_by:""}),P=()=>{const l=Object.entries(g.value).filter(([t,s])=>s).map(([t,s])=>`${t}=${s}`).join("&");window.location.search=l};return(l,t)=>(n(),i(j,null,[o(S(R),{title:"Tasks"}),o(J,null,{header:u(()=>t[9]||(t[9]=[e("h2",{class:"text-xl font-semibold leading-tight text-gray-900"}," Tasks ",-1)])),default:u(()=>[l.$page.props.flash.message?(n(),$(K,{key:0,message:l.$page.props.flash.message},null,8,["message"])):h("",!0),o(oe,null,{default:u(()=>[e("div",ne,[o(p,{for:"status",value:"Status:",class:"mr-4"}),V(e("select",{"onUpdate:modelValue":t[0]||(t[0]=s=>g.value.status=s),class:"rounded-md border-gray-300 shadow-sm focus:border-[#f8a200] focus:ring-[#f8a200] mr-4"},t[10]||(t[10]=[e("option",{value:""},"Todos ",-1),e("option",{value:"0"},"Pendente",-1),e("option",{value:"1"},"Em Andamento",-1),e("option",{value:"2"},"Concluída",-1)]),512),[[T,g.value.status]]),o(p,{for:"status",value:"Data:",class:"mr-4"}),V(e("select",{"onUpdate:modelValue":t[1]||(t[1]=s=>g.value.sort_by=s),class:"rounded-md border-gray-300 shadow-sm focus:border-[#f8a200] focus:ring-[#f8a200] mr-4"},t[11]||(t[11]=[e("option",{value:""},"Nenhum",-1),e("option",{value:"created_at"},"Criação",-1),e("option",{value:"updated_at"},"Atualização",-1)]),512),[[T,g.value.sort_by]]),o(S(Z),{onClick:P,class:"mt-2"},{default:u(()=>t[12]||(t[12]=[c("Aplicar Filtros")])),_:1}),t[13]||(t[13]=e("div",{class:"mrl-30"},null,-1))])]),_:1}),e("div",ie,[e("div",re,[e("div",ue,[e("div",me,[l.$page.props.tasks.data.length?(n(),i("div",pe,[e("table",ce,[t[14]||(t[14]=e("thead",{class:"bg-gray-100"},[e("tr",null,[e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Título"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Status"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Criação "),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Atualização ")])],-1)),e("tbody",fe,[(n(!0),i(j,null,G(l.$page.props.tasks.data,s=>(n(),i("tr",{key:s.id,class:"hover:bg-gray-100 focus:bg-gray-100"},[e("td",{class:"px-6 py-4",onClick:k=>w(s)},x(s.title.length>25?s.description.slice(0,25)+"...":s.title),9,ve),e("td",{class:"px-6 py-4",onClick:k=>w(s)},[s.status===0?(n(),i("span",xe,"Pendente")):s.status===1?(n(),i("span",_e,"Em Andamento")):(n(),i("span",ye,"Concluída"))],8,ge),e("td",{class:"px-6 py-4",onClick:k=>w(s)},x(b(s.created_at)),9,we),e("td",{class:"px-6 py-4",onClick:k=>w(s)},x(b(s.updated_at)),9,be)]))),128))])])])):(n(),i("p",he,"Sem tarefas por enquanto"))])]),e("div",Ce,[e("div",Ve,[e("h3",ke,x(d.value?"Editar Tarefa":"Criar Tarefa"),1),e("form",{onSubmit:H(B,["prevent"]),class:"w-full"},[e("div",$e,[e("div",Te,[o(p,{for:"title",value:"Título"}),o(C,{modelValue:a.title,"onUpdate:modelValue":t[2]||(t[2]=s=>a.title=s),id:"title",type:"text",autofocus:"",class:"w-full"},null,8,["modelValue"]),o(D,{message:r.title},null,8,["message"])]),e("div",De,[o(p,{for:"status",value:"Status"}),V(e("select",{"onUpdate:modelValue":t[3]||(t[3]=s=>a.status=s),id:"status",class:"rounded-md border-gray-300 shadow-sm focus:border-[#f8a200] focus:ring-[#f8a200] w-full"},t[15]||(t[15]=[e("option",{value:"0"},"Pendente",-1),e("option",{value:"1"},"Em Andamento",-1),e("option",{value:"2"},"Concluída",-1)]),512),[[T,a.status]]),o(D,{message:r.status},null,8,["message"])])]),e("div",Ae,[o(p,{for:"description",value:"Descrição"}),o(de,{modelValue:a.description,"onUpdate:modelValue":t[4]||(t[4]=s=>a.description=s),id:"description",type:"text",class:"w-full"},null,8,["modelValue"]),o(D,{message:r.description},null,8,["message"])]),e("div",Ee,[o(Q,{type:"submit"},{default:u(()=>[c(x(d.value?"Atualizar":"Criar"),1)]),_:1}),d.value?(n(),$(M,{key:0,onClick:t[5]||(t[5]=s=>z(a.id))},{default:u(()=>t[16]||(t[16]=[c("Apagar ")])),_:1})):h("",!0),d.value?(n(),$(U,{key:1,onClick:v},{default:u(()=>t[17]||(t[17]=[c("Voltar")])),_:1})):h("",!0)])],32)]),d.value?(n(),i("div",Se,[e("div",je,[e("div",null,[o(p,{for:"title",value:"Usuário"}),o(C,{modelValue:a.username,"onUpdate:modelValue":t[6]||(t[6]=s=>a.username=s),id:"username",type:"text",class:"w-full",readonly:""},null,8,["modelValue"])]),e("div",null,[o(p,{for:"title",value:"Criação"}),o(C,{modelValue:a.created_at,"onUpdate:modelValue":t[7]||(t[7]=s=>a.created_at=s),id:"username",type:"text",class:"w-full",readonly:""},null,8,["modelValue"])]),e("div",null,[o(p,{for:"title",value:"Atualização"}),o(C,{modelValue:a.updated_at,"onUpdate:modelValue":t[8]||(t[8]=s=>a.updated_at=s),id:"username",type:"text",class:"w-full",readonly:""},null,8,["modelValue"])])])])):h("",!0)])])])]),_:1}),o(W,{show:f.value,onClose:A,"max-width":"md"},{default:u(()=>[e("div",Fe,[t[20]||(t[20]=e("h2",{class:"text-lg font-medium text-gray-900"},"Confirmação de Exclusão",-1)),t[21]||(t[21]=e("p",{class:"mt-4 text-sm text-gray-600"},"Você tem certeza que deseja excluir esta tarefa? Esta ação não pode ser desfeita.",-1)),e("div",Me,[o(U,{onClick:A},{default:u(()=>t[18]||(t[18]=[c("Cancelar")])),_:1}),o(M,{onClick:N},{default:u(()=>t[19]||(t[19]=[c("Confirmar")])),_:1})])])]),_:1},8,["show"])],64))}};export{Ie as default};

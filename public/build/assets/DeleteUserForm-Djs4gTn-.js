import{k as i,T as x,f as _,b as o,a,w as r,l as w,o as g,d as u,u as t,m as v,n as y}from"./app-Dhpvmu4O.js";import{D as m,_ as k,a as C}from"./SecondaryButton-B4eWq7gO.js";import{_ as D,a as V,b}from"./TextInput-DfTTC1p8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={class:"space-y-6"},E={class:"p-6"},U={class:"mt-6"},$={class:"mt-6 flex justify-end"},h={__name:"DeleteUserForm",setup(B){const l=i(!1),n=i(null),s=x({password:""}),p=()=>{l.value=!0,w(()=>n.value.focus())},c=()=>{s.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>d(),onError:()=>n.value.focus(),onFinish:()=>s.reset()})},d=()=>{l.value=!1,s.clearErrors(),s.reset()};return(T,e)=>(g(),_("section",q,[e[6]||(e[6]=o("header",null,[o("h2",{class:"text-lg font-medium text-gray-900"}," Excluir conta "),o("p",{class:"mt-1 text-sm text-gray-600"}," Depois que sua conta for excluída, todos os seus recursos e dados serão ser excluído permanentemente.Antes de excluir sua conta, por favor Faça o download de todos os dados ou informações que você deseja reter. ")],-1)),a(m,{onClick:p},{default:r(()=>e[1]||(e[1]=[u("Deletar conta")])),_:1}),a(k,{show:l.value,onClose:d},{default:r(()=>[o("div",E,[e[4]||(e[4]=o("h2",{class:"text-lg font-medium text-gray-900"}," Tem certeza de que deseja excluir sua conta? ",-1)),e[5]||(e[5]=o("p",{class:"mt-1 text-sm text-gray-600"}," Depois que sua conta é excluída, todos os seus recursos e dados será excluído permanentemente.Por favor, digite sua senha para Confirme que você gostaria de excluir permanentemente sua conta. ",-1)),o("div",U,[a(D,{for:"password",value:"Senha",class:"sr-only"}),a(V,{id:"password",ref_key:"passwordInput",ref:n,modelValue:t(s).password,"onUpdate:modelValue":e[0]||(e[0]=f=>t(s).password=f),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:v(c,["enter"])},null,8,["modelValue"]),a(b,{message:t(s).errors.password,class:"mt-2"},null,8,["message"])]),o("div",$,[a(C,{onClick:d},{default:r(()=>e[2]||(e[2]=[u(" Cancelar ")])),_:1}),a(m,{class:y(["ms-3",{"opacity-25":t(s).processing}]),disabled:t(s).processing,onClick:c},{default:r(()=>e[3]||(e[3]=[u(" Excluir conta ")])),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{h as default};
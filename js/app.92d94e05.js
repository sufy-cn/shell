(function(e){function t(t){for(var l,n,i=t[0],u=t[1],r=t[2],d=0,c=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&c.push(o[n][0]),o[n]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(e[l]=u[l]);p&&p(t);while(c.length)c.shift()();return s.push.apply(s,r||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],l=!0,i=1;i<a.length;i++){var u=a[i];0!==o[u]&&(l=!1)}l&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var l={},o={app:0},s=[];function n(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=l,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var r=0;r<i.length;r++)t(i[r]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var l=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("el-container",[a("el-header",{staticStyle:{color:"rgb(222,222,222)"}},[e._v("生成shell命令 ")]),a("el-main",[a("div",{staticClass:"app-inp"},[a("div",{staticClass:"el-inp-box"},[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.ip,callback:function(t){e.ip=t},expression:"ip"}},[a("template",{slot:"prepend"},[e._v("Ip")])],2)],1),a("div",{staticClass:"el-inp-box"},[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.port,callback:function(t){e.port=t},expression:"port"}},[a("template",{slot:"append"},[e._v("Port")])],2)],1),a("el-button",{staticStyle:{height:"40px",margin:"5px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.dialogFormVisible=!0,e.dialogTitle="添加shell指令"}}},[e._v("添加 ")]),a("el-button",{staticStyle:{height:"40px",margin:"5px"},attrs:{type:"primary"},on:{click:function(t){return e.export_file()}}},[e._v(" 导出文件 ")]),a("el-button",{staticStyle:{height:"40px",margin:"5px"},attrs:{type:"primary"},on:{click:function(t){e.dialogImport=!0}}},[e._v(" 导入json ")])],1),e._l(e.firstData,(function(t,l){return a("div",{key:l,staticClass:"card-box",on:{click:function(a){return e.copyLink(t,e.lastData[l])},mouseover:function(t){return e.overRun(t)},mouseleave:function(t){return e.leaveRun(t)}}},[a("span",{staticClass:"env-del-btn-span el-icon-delete",staticStyle:{display:"none"},on:{click:function(t){return e.domDele(l)}}}),a("span",{staticClass:"env-del-btn-span el-icon-edit-outline",staticStyle:{display:"none"},on:{click:function(t){return e.domRevise(l)}}}),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击复制",placement:"top"}},[a("el-scrollbar",{staticStyle:{height:"100%"}},[a("p",{staticStyle:{"font-size":"14px",color:"rgba(222,222,222)"}},[e._v(e._s(e.appData[l].name))]),a("span",{ref:"copy",refInFor:!0,staticClass:"item text"},[e._v(" "+e._s(t)+e._s(e.ip)+":"+e._s(e.port)+e._s(e.lastData[l])+" ")]),a("br")])],1)],1)}))],2)],1),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t},close:function(t){return e.dialog()}}},[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"name"},model:{value:e.tempName,callback:function(t){e.tempName=t},expression:"tempName"}}),a("div",{staticStyle:{margin:"20px 0"}}),a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"shell"},model:{value:e.tempShell,callback:function(t){e.tempShell=t},expression:"tempShell"}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1,e.addDataRun(),e.openFullScreen()}}},[e._v("确 定 ")])],1)],1),a("el-dialog",{attrs:{title:e.dialogImportTile,visible:e.dialogImport},on:{"update:visible":function(t){e.dialogImport=t}}},[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:e.placeholder},model:{value:e.importData,callback:function(t){e.importData=t},expression:"importData"}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogImport=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogImport=!1,e.import_file()}}},[e._v("确 定 ")])],1)],1)],1)},s=[],n=(a("a9e3"),a("d3b7"),a("159b"),a("ac1f"),a("841c"),a("fb6a"),a("e9c4"),a("b0c0"),a("d81d"),{name:"App",components:{},data:function(){return{ip:"192.168.1.1",port:"8088",importData:"",appData:[],firstData:[],lastData:[],dialogFormVisible:!1,dialogImport:!1,tempName:"",tempShell:"",dialogTitle:"添加shell指令",dialogImportTile:"导入数据",shellIndex:Number,placeholder:'请根据规范导入json文本，示例:[{"name":"测试指令","shell":"ipconfig/all #ip"}]'}},mounted:function(){var e=JSON.parse(localStorage.getItem("shell"));null!==e&&this.shellLocal(e)},methods:{run:function(){var e=this;this.firstData=[],this.lastData=[],this.appData.forEach((function(t){var a=t.shell,l=a.search("#ip"),o=Number(l+3);e.firstData.push(a.slice(0,l)),e.lastData.push(a.slice(o))}))},copyLink:function(e,t){var a=e+this.ip+":"+this.port+t,l=document.createElement("input");l.setAttribute("readonly","readonly"),l.setAttribute("value",a),document.body.appendChild(l),l.select();var o=document.execCommand("copy");return document.body.removeChild(l),o},shellLocal:function(){this.appData=JSON.parse(localStorage.getItem("shell")),this.run()},addDataRun:function(){var e={name:this.tempName,shell:this.tempShell};"添加shell指令"===this.dialogTitle?this.appData.push(e):this.appData[this.shellIndex]=e,localStorage.setItem("shell",JSON.stringify(this.appData)),this.run()},overRun:function(e){var t=e.currentTarget.getElementsByClassName("env-del-btn-span");t[0].style.cssText+="display:block",t[1].style.cssText+="display:block"},leaveRun:function(e){var t=e.currentTarget.getElementsByClassName("env-del-btn-span");t[0].style.cssText+="display:none",t[1].style.cssText+="display:none"},domDele:function(e){localStorage.setItem("shell",JSON.stringify(this.$delete(this.appData,e))),console.log(e),this.run()},domRevise:function(e){this.dialogTitle="修改"+this.appData[e].name;var t={name:this.appData[e].name,shell:this.appData[e].shell};this.tempName=t.name,this.tempShell=t.shell,this.shellIndex=e,this.dialogFormVisible=!0},openFullScreen:function(){var e=this,t=this.$loading({lock:!0,text:"加载中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout((function(){t.close(),e.$message({message:"恭喜你，这是一条成功消息",type:"success"})}),800)},dialog:function(){"生成shell命令"!==this.dialogTitle&&(this.tempName="",this.tempShell="")},export_file:function(){var e=JSON.stringify(this.appData),t="data:text/csv;charset=utf-8,\ufeff"+encodeURIComponent(e),a=document.createElement("a");a.href=t,a.download="shell指令合计.json",document.body.appendChild(a),a.click(),document.body.removeChild(a)},import_file:function(){var e=this,t=JSON.parse(this.importData);t.some((function(a,l){if(!a.name||!a.shell||""===a.name||""===a.shell)return e.$message({message:"数据格式不对请修改",type:"error"}),!0;l+1===t.length&&(t.map((function(t){var a={name:t.name,shell:t.shell};e.appData.push(a)})),localStorage.setItem("shell",JSON.stringify(e.appData)),e.openFullScreen(),e.run())}))}}}),i=n,u=(a("034f"),a("2877")),r=Object(u["a"])(i,o,s,!1,null,null,null),p=r.exports,d=a("5c96"),c=a.n(d),f=a("b311"),m=a.n(f);a("0fae");l["default"].prototype.clipboard=m.a,l["default"].use(d["Pagination"]),l["default"].use(d["Dialog"]),l["default"].use(d["Autocomplete"]),l["default"].use(d["Dropdown"]),l["default"].use(d["DropdownMenu"]),l["default"].use(d["DropdownItem"]),l["default"].use(d["Menu"]),l["default"].use(d["Submenu"]),l["default"].use(d["MenuItem"]),l["default"].use(d["MenuItemGroup"]),l["default"].use(d["Input"]),l["default"].use(d["InputNumber"]),l["default"].use(d["Radio"]),l["default"].use(d["RadioGroup"]),l["default"].use(d["RadioButton"]),l["default"].use(d["Checkbox"]),l["default"].use(d["CheckboxButton"]),l["default"].use(d["CheckboxGroup"]),l["default"].use(d["Switch"]),l["default"].use(d["Select"]),l["default"].use(d["Option"]),l["default"].use(d["OptionGroup"]),l["default"].use(d["Button"]),l["default"].use(d["ButtonGroup"]),l["default"].use(d["Table"]),l["default"].use(d["TableColumn"]),l["default"].use(d["DatePicker"]),l["default"].use(d["TimeSelect"]),l["default"].use(d["TimePicker"]),l["default"].use(d["Popover"]),l["default"].use(d["Tooltip"]),l["default"].use(d["Breadcrumb"]),l["default"].use(d["BreadcrumbItem"]),l["default"].use(d["Form"]),l["default"].use(d["FormItem"]),l["default"].use(d["Tabs"]),l["default"].use(d["TabPane"]),l["default"].use(d["Tag"]),l["default"].use(d["Tree"]),l["default"].use(d["Alert"]),l["default"].use(d["Slider"]),l["default"].use(d["Icon"]),l["default"].use(d["Row"]),l["default"].use(d["Col"]),l["default"].use(d["Upload"]),l["default"].use(d["Progress"]),l["default"].use(d["Spinner"]),l["default"].use(d["Badge"]),l["default"].use(d["Card"]),l["default"].use(d["Rate"]),l["default"].use(d["Steps"]),l["default"].use(d["Step"]),l["default"].use(d["Carousel"]),l["default"].use(d["CarouselItem"]),l["default"].use(d["Collapse"]),l["default"].use(d["CollapseItem"]),l["default"].use(d["Cascader"]),l["default"].use(d["ColorPicker"]),l["default"].use(d["Transfer"]),l["default"].use(d["Container"]),l["default"].use(d["Header"]),l["default"].use(d["Aside"]),l["default"].use(d["Main"]),l["default"].use(d["Footer"]),l["default"].use(d["Timeline"]),l["default"].use(d["TimelineItem"]),l["default"].use(d["Link"]),l["default"].use(d["Divider"]),l["default"].use(d["Image"]),l["default"].use(d["Calendar"]),l["default"].use(d["Backtop"]),l["default"].use(d["PageHeader"]),l["default"].use(d["CascaderPanel"]),l["default"].use(d["Loading"].directive),l["default"].prototype.$loading=d["Loading"].service,l["default"].prototype.$msgbox=d["MessageBox"],l["default"].prototype.$alert=d["MessageBox"].alert,l["default"].prototype.$confirm=d["MessageBox"].confirm,l["default"].prototype.$prompt=d["MessageBox"].prompt,l["default"].prototype.$notify=d["Notification"],l["default"].prototype.$message=d["Message"],l["default"].use(c.a),l["default"].config.productionTip=!1,new l["default"]({render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.92d94e05.js.map
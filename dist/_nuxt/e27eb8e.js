(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{442:function(e,t,r){"use strict";r.r(t);var n=r(22),o=(r(8),r(93),{data:function(){return{users:[],user:{id:"",fname:"",lname:"",username:"",avatar:""},snackbar:"",text:""}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("https://www.mecallapi.com/api/users");case 2:e.users=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{UserDelete:function(e){var t=this,data={id:e};fetch("https://www.mecallapi.com/api/users/delete",{method:"DELETE",headers:{Accept:"application/form-data","Content-Type":"application/json"},body:JSON.stringify(data)}).then((function(e){return e.json()})).then((function(e){e.status,t.snackbar=!0,t.text=e.message})).then((function(){t.refresh()}))},GetUser:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$axios.$get("https://www.mecallapi.com/api/users/".concat(e)).then((function(e){t.user.id=e.user.id,t.user.fname=e.user.fname,t.user.lname=e.user.lname,t.user.username=e.user.username,t.user.avatar=e.user.avatar}));case 2:case"end":return r.stop()}}),r)})))()},UserUpdate:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.mecallapi.com/api/users/update",{method:"PUT",headers:{Accept:"application/form-data","Content-Type":"application/json"},body:JSON.stringify(e.user)}).then((function(e){return e.json()})).then((function(t){t.status,e.snackbar=!0,e.text=t.message})).then((function(){e.$nuxt.$options.router.push("/")}));case 2:case"end":return t.stop()}}),t)})))()},refresh:function(){this.$nuxt.refresh()}}}),c=r(89),l=r(131),v=r.n(l),d=r(357),f=r(438),m=r(361),_=r(383),h=r(367),x=r(434),k=r(444),w=r(440),C=r(435),y=r(436),V=r(439),$=r(437),U=r(384),j=r(44),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[e._v("ID")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("Pic")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("Fname")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("Lname")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("Username")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("Edit")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("Delete")])])]),e._v(" "),r("tbody",e._l(e.users,(function(t){return r("tr",{key:t.name},[r("td",[e._v(e._s(t.id))]),e._v(" "),r("td",[r("v-avatar",[r("img",{attrs:{src:t.avatar,alt:""}})])],1),e._v(" "),r("td",[e._v(e._s(t.fname))]),e._v(" "),r("td",[e._v(e._s(t.lname))]),e._v(" "),r("td",[e._v(e._s(t.username))]),e._v(" "),r("td",[r("v-col",{attrs:{cols:"auto"}},[r("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"600"},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[r("v-btn",e._g(e._b({attrs:{color:"light-green darken-3"},on:{click:function(r){return e.GetUser(t.id)}}},"v-btn",c,!1),o),[e._v("Edit")])]}},{key:"default",fn:function(dialog){return[r("v-card",[r("v-toolbar",{attrs:{color:"primary",dark:""}},[e._v("Opening from the top")]),e._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{"sm-8":""}},[r("v-form",[e.user.id?r("v-text-field",{attrs:{label:"id",required:""},model:{value:e.user.id,callback:function(t){e.$set(e.user,"id",t)},expression:"user.id"}}):e._e(),e._v(" "),r("v-text-field",{attrs:{label:"fname",required:""},model:{value:e.user.fname,callback:function(t){e.$set(e.user,"fname",t)},expression:"user.fname"}}),e._v(" "),r("v-text-field",{attrs:{label:"lname",required:""},model:{value:e.user.lname,callback:function(t){e.$set(e.user,"lname",t)},expression:"user.lname"}}),e._v(" "),r("v-text-field",{attrs:{label:"username",required:""},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),e._v(" "),r("v-text-field",{attrs:{label:"avatar",required:""},model:{value:e.user.avatar,callback:function(t){e.$set(e.user,"avatar",t)},expression:"user.avatar"}}),e._v(" "),r("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:e.UserUpdate}},[e._v("\n                                "+e._s(e.user.id?"Edit":"Submit")+"\n                              ")])],1)],1)],1)],1)],1),e._v(" "),r("v-card-actions",{staticClass:"justify-end"},[r("v-btn",{attrs:{text:""},on:{click:function(e){dialog.value=!1}}},[e._v("Close")])],1)],1)]}}],null,!0)})],1)],1),e._v(" "),r("td",[r("v-btn",{attrs:{color:"red"},on:{click:function(r){return e.UserDelete(t.id)}}},[e._v("Delete")])],1)])})),0),e._v(" "),r("v-snackbar",{attrs:{timeout:2e3,top:"",color:"primary"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n        "+e._s(e.text)+"\n      ")])]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VApp:d.a,VAvatar:f.a,VBtn:m.a,VCard:_.a,VCardActions:h.a,VCardText:h.b,VCol:x.a,VContainer:k.a,VDialog:w.a,VForm:C.a,VRow:y.a,VSimpleTable:V.a,VSnackbar:$.a,VTextField:U.a,VToolbar:j.a})}}]);
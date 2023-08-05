"use strict";(self["webpackChunkoptinmonster_wordpress_plugin_vue_app"]=self["webpackChunkoptinmonster_wordpress_plugin_vue_app"]||[]).push([[3],{31220:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var a=function(){var e=this,t=e._self._c;return e.reachedCampaignLimit?t("templates-limit-exceeded"):t("core-page",{attrs:{classes:"templates-wrapper"}},[t("common-page-tabnav",{attrs:{current:"templates",tabs:e.tabs}}),t("h1",[e._v("Select a Campaign Type:")]),t("common-alerts",{attrs:{alerts:e.alerts}}),t("div",{staticClass:"templates-content"},[t("templates-types"),t("templates-filters"),t("div",{staticClass:"omapi-content-area"},[t("templates-upsell-alerts"),e.hasTemplates?t("div",{staticClass:"omapi-template-listing-wrap"},[t("templates-grid",{attrs:{templates:e.selectedTemplates}}),e.isLoading?t("svg-loading",{style:{margin:"0 auto"}}):e._e()],1):e.isLoading?t("div",{staticClass:"archie-loader-wrapper"},[t("div",[t("core-loading",{staticClass:"loader"})],1)]):t("div",{staticClass:"no-templates-available"},[t("core-alert",{attrs:{type:e.validType?"info":"warn"}},[t("div",{staticClass:"alert-message"},[e._v(" "+e._s(e.noTemplatesMessage)+" ")])])],1)],1)],1),t("campaigns-modal-create-campaign"),t("templates-modal-not-connected"),t("templates-modal-no-access")],1)},i=[],n=s(86080),r=(s(69826),s(41539),s(26699),s(32023),s(2707),s(57327),s(74916),s(64765),s(68309),s(21249),s(75472)),o=s.n(r),l=s(11700),p=s.n(l),c=s(20629),m=s(81566),d=s(30727),u={mixins:[m.s,d.v],computed:(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},(0,c.rn)("templates",["activeType","search","sort","popular","templates"])),(0,c.Se)(["reachedCampaignLimit"])),(0,c.Se)("templates",["typePermitted","featured","filters","filterGamified","validType"])),{},{alerts:function(){return this.$get("$store.state.alerts",[])},isLoading:function(){return this.$store.getters.isLoading("templates")},popularTemplates:function(){var e=this.popular[this.activeType];return e&&e.length?this.order(e):[]},featuredTemplates:function(){var e=this.featured[this.activeType];return e&&e.length?this.order(e):[]},showableTemplates:function(){var e=this,t=function(t,s){return!e.filters[t].length||!e.filters[t].find((function(e){return!s.includes(e)}))},s=["popular","featured"].includes(this.sort)?"".concat(this.sort,"Templates"):"templates",a=this[s].filter((function(t){return""===e.search||t.name.toLowerCase().includes(e.search.toLowerCase())})).filter((function(s){var a="mobile"===e.filters.device?s.mobile:!s.mobile;if(!a)return!1;var i=["goals","categories","tags"];return!i.find((function(e){return!t(e,s[e].map((function(e){return e.id})))}))}));return this.order(a)},selectedTemplates:function(){var e=this;return this.showableTemplates.filter((function(t){return e.filterGamified?t.tags.find((function(e){return 1===e.id})):t.type===e.activeType}))},hasTemplates:function(){return this.selectedTemplates.length},shouldShowUpsells:function(){return!!this.$store.getters.connected&&!this.typePermitted(this.activeType)},noTemplatesMessage:function(){return this.validType?"No templates available for your current selection.":"".concat(p()(this.activeType)," is not a valid type. Please select one of the options above.")}}),created:function(){this.$store.dispatch("campaigns/fetchDashboard")["catch"]((function(){})),this.loadApiScript("omwpapi-templates-apijs",this.$constants.TEMPLATES_PREVIEW_ACCOUNT,this.$constants.TEMPLATES_PREVIEW_USER)},mounted:function(){this.fetchTemplateData()["catch"]((function(){})),this.$bus.$emit("dashboard-view-mounted","templates")},methods:(0,n.Z)((0,n.Z)({},(0,c.nv)("templates",["fetchTemplateData"])),{},{applyFilters:function(e){this.$bus.$emit("applied-bulk-filter"),this.$store.commit("templates/appliedFilters",e)},order:function(e){var t=this;return o()(e,(function(e){return"recent"===t.sort||"featured"===t.sort?-t.$moment(e.created_at).valueOf():e.name}))}})},h=u,f=s(1001),v=(0,f.Z)(h,a,i,!1,null,null,null),g=v.exports},30727:function(e,t,s){s.d(t,{v:function(){return a}});var a={data:function(){return{tabs:{templates:{name:"Templates",route:{path:"templates",params:{tab:"popup"}}},playbooks:{name:"Playbooks",route:{path:"playbooks",params:{}}}}}}}},81566:function(e,t,s){s.d(t,{s:function(){return o}});var a=s(73421),i=s(7977),n=s(35562);const r=(e,t,s)=>{let a=document.getElementById(e);if(a)return a;const r=document.getElementsByTagName("head")[0]||document.documentElement;return a=document.createElement("script"),a.type="text/javascript",a.id=e,a.src=n.Z.apiJs(),a.async=!0,a.dataset.account=t,a.dataset.user=s,(0,i.isProduction)()||(a.dataset.env=(0,i.isDevelopment)()?"dev":i.currentEnv),r.appendChild(a),a},o={created(){this.listenApiLoaded(),(0,a.of)(),(0,a.ge)(),(0,a.O0)(),(0,a.vY)(),(0,a.Kp)(),this.$store.subscribe((e=>{const t=["templates/setLoadingPreview","templates/setPreviewing","templates/filterOptions","templates/templates","templates/permittedTypes","templates/recentTemplates","templates/popular","templates/setApiLoaded"],s=["route/ROUTE_CHANGED"];let a=e.type.startsWith("templates/")&&!t.includes(e.type);a||(a=s.includes(e.type)),a&&this.closeAllPreviews()}))},beforeDestroy(){(0,a.of)(!1),(0,a.ge)(!1),(0,a.vY)(!1),(0,a.O0)(!1),(0,a.Kp)(!1)},methods:{listenApiLoaded(e="addEventListener"){["om.Api.init","om.Main.init","om.Campaigns.init","om.Campaign.init"].forEach((t=>document[e](t,this.setApiLoaded)))},setApiLoaded(){this.listenApiLoaded("removeEventListener"),this.$store.commit("templates/setApiLoaded")},closeAllPreviews(){(0,a.IC)(),this.$store.commit("templates/setLoadingPreview",""),this.$store.commit("templates/setPreviewing","")},loadApiScript(e,t,s){return r(e,t,s)}}}}}]);
//# sourceMappingURL=templates-legacy.301da53a.js.map
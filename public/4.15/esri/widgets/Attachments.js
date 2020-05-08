// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../core/tsSupport/assignHelper dojo/i18n!./Attachments/nls/Attachments ../core/Error ../core/unitFormatUtils ../core/watchUtils ../core/accessorSupport/decorators ./Widget ./Attachments/AttachmentsViewModel ./Attachments/support/attachmentUtils ./support/widget".split(" "),function(C,D,z,d,E,F,m,h,k,A,t,f,B,u,v,b){var w={addButton:!0,addSubmitButton:!0,
cancelAddButton:!0,cancelUpdateButton:!0,deleteButton:!0,errorMessage:!0,progressBar:!0,updateButton:!0},q=window.CSS;return function(x){function c(a){a=x.call(this,a)||this;a.abilities=null;a.displayType="list";a.graphic=null;a.label=h.widgetLabel;a.selectedFile=null;a.submitting=!1;a.viewModel=new u;a.visibleElements=m({},w);a._supportsImageOrientation=q&&q.supports&&q.supports("image-orientation","from-image");a._addAttachmentForm=null;a._updateAttachmentForm=null;return a}z(c,x);c.prototype.postInitialize=
function(){var a=this;this.own(t.on(this,"viewModel.attachmentInfos","change",function(){return a.scheduleRender()}),t.init(this,"viewModel.mode",function(){return a._modeChanged()}))};c.prototype.castVisibleElements=function(a){return m({},w,a)};c.prototype.addAttachment=function(){var a=this,b=this._addAttachmentForm,c=this.viewModel;this._set("submitting",!0);this._set("error",null);return c.addAttachment(b).then(function(b){a._set("submitting",!1);a._set("error",null);c.mode="view";return b}).catch(function(b){a._set("submitting",
!1);a._set("error",new k("attachments:add-attachment",h.addErrorMessage,b));throw b;})};c.prototype.deleteAttachment=function(a){var b=this,c=this.viewModel;this._set("submitting",!0);this._set("error",null);return c.deleteAttachment(a).then(function(a){b._set("submitting",!1);b._set("error",null);c.mode="view";return a}).catch(function(a){b._set("submitting",!1);b._set("error",new k("attachments:delete-attachment",h.deleteErrorMessage,a));throw a;})};c.prototype.updateAttachment=function(){var a=
this,b=this.viewModel,c=this._updateAttachmentForm;this._set("submitting",!0);this._set("error",null);return b.updateAttachment(c).then(function(c){a._set("submitting",!1);a._set("error",null);b.mode="view";return c}).catch(function(b){a._set("submitting",!1);a._set("error",new k("attachments:update-attachment",h.updateErrorMessage,b));throw b;})};c.prototype.render=function(){var a=this.submitting,c=this.viewModel.state;return b.tsx("div",{class:this.classes("esri-attachments","esri-widget")},a?
this._renderProgressBar():null,"loading"===c?this._renderLoading():this._renderAttachments(),this._renderErrorMessage())};c.prototype._renderErrorMessage=function(){var a=this.error,c=this.visibleElements;return a&&c.errorMessage?b.tsx("div",{key:"error-message",class:"esri-attachments__error-message"},a.message):null};c.prototype._renderAttachments=function(){var a=this.viewModel,b=a.mode,a=a.activeAttachmentInfo;return"add"===b?this._renderAddForm():"edit"===b?this._renderDetailsForm(a):this._renderAttachmentContainer()};
c.prototype._renderLoading=function(){return b.tsx("div",{class:"esri-attachments__loader-container",key:"loader"},b.tsx("div",{class:"esri-attachments__loader"}))};c.prototype._renderProgressBar=function(){return this.visibleElements.progressBar?b.tsx("div",{class:"esri-attachments__progress-bar",key:"progress-bar"}):null};c.prototype._renderAddForm=function(){var a,c=this.submitting,g=this.selectedFile,e=c||!g,c=this.visibleElements.cancelAddButton?b.tsx("button",{type:"button",bind:this,disabled:c,
onclick:this._cancelForm,class:this.classes("esri-button","esri-button--tertiary","esri-button--small","esri-button--half",c&&"esri-button--disabled")},h.cancel):null,e=this.visibleElements.addSubmitButton?b.tsx("button",{type:"submit",disabled:e,class:this.classes("esri-button","esri-button--secondary","esri-button--small","esri-button--half",(a={},a["esri-button--disabled"]=e,a))},h.add):null;a=g?b.tsx("span",{key:"file-name",class:"esri-attachments__file-name"},g.name):null;g=b.tsx("form",{bind:this,
afterCreate:b.storeNode,afterRemoved:b.discardNode,"data-node-ref":"_addAttachmentForm",onsubmit:this._submitAddAttachment},b.tsx("fieldset",{class:"esri-attachments__file-fieldset"},a,b.tsx("label",{class:this.classes("esri-attachments__file-label","esri-button","esri-button--secondary")},g?h.changeFile:h.selectFile,b.tsx("input",{class:"esri-attachments__file-input",type:"file",name:"attachment",bind:this,onchange:this._handleFileInputChange}))),e,c);return b.tsx("div",{key:"add-form-container",
class:"esri-attachments__form-node"},g)};c.prototype._renderDetailsForm=function(a){var c=this,g,e,l,y=this.visibleElements,f=this.selectedFile,p=this.submitting,d=a.contentType,k=a.size,q=a.url,n=this.viewModel.abilities,m=p||!f,r=n.editing&&n.operations.delete&&y.deleteButton?b.tsx("button",{key:"delete-button",type:"button",disabled:p,bind:this,onclick:function(b){return c._submitDeleteAttachment(b,a)},class:this.classes("esri-button","esri-button--small","esri-button--tertiary","esri-attachments__delete-button",
(g={},g["esri-button--disabled"]=p,g))},h.delete):null;g=n.editing&&n.operations.update&&y.updateButton?b.tsx("button",{disabled:m,key:"update-button",type:"submit",class:this.classes("esri-button","esri-button--small","esri-button--third",(e={},e["esri-button--disabled"]=m,e))},h.update):null;e=this.visibleElements.cancelUpdateButton?b.tsx("button",{disabled:p,key:"cancel-button",type:"button",bind:this,onclick:this._cancelForm,class:this.classes("esri-button","esri-button--small","esri-button--tertiary",
"esri-button--third",(l={},l["esri-button--disabled"]=p,l))},h.cancel):null;l=f?b.tsx("span",{key:"file-name",class:"esri-attachments__file-name"},f.name):null;n=n.editing&&n.operations.update?b.tsx("fieldset",{key:"file",class:"esri-attachments__file-fieldset"},l,b.tsx("label",{class:this.classes("esri-attachments__file-label","esri-button","esri-button--secondary")},h.changeFile,b.tsx("input",{class:"esri-attachments__file-input",type:"file",name:"attachment",bind:this,onchange:this._handleFileInputChange}))):
null;k=b.tsx("fieldset",{key:"size",class:"esri-attachments__metadata-fieldset"},b.tsx("label",null,A.formatFileSize(k)));d=b.tsx("fieldset",{key:"content-type",class:"esri-attachments__metadata-fieldset"},b.tsx("label",null,d));r=b.tsx("form",{bind:this,afterCreate:b.storeNode,afterRemoved:b.discardNode,"data-node-ref":"_updateAttachmentForm",onsubmit:this._submitUpdateAttachment},b.tsx("div",{class:"esri-attachments__metadata"},k,d),n,b.tsx("div",{class:"esri-attachments__actions"},r,e,g));return b.tsx("div",
{key:"edit-form-container",class:"esri-attachments__form-node"},b.tsx("a",{class:"esri-attachments__item-link",href:q,rel:"noreferrer",target:"_blank",alt:name},this._renderImageMask({attachmentInfo:a,size:400}),b.tsx("div",{class:"esri-attachments__item-link-overlay"},b.tsx("span",{class:"esri-attachments__item-link-overlay-icon"},b.tsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},b.tsx("path",{d:"M28 13h1v16H3V3h16v1H4v24h24zm-5-9h4.293L15.646 15.638l.707.707L28 4.707V9h1V3h-6z"}),
b.tsx("path",{fill:"none",d:"M0 0h32v32H0z"}))))),r)};c.prototype._renderImageMask=function(a){var c=a.attachmentInfo,g=a.size,e,l;a=this.viewModel.supportsResizeAttachments;var h=c.contentType,f=c.url,d=a&&v.isSupportedImage(h),c=(c=this._getCSSTransform(c,d))?{transform:c,"image-orientation":"none"}:{},k=-1===f.indexOf("?")?"?":"\x26",g=d?""+f+k+"w\x3d"+g:v.getIconPath(h),d=(e={},e["esri-attachments__item-mask--icon"]=!d,e);e=(l={},l["esri-attachments__image--resizable"]=a,l);return b.tsx("div",
{class:this.classes(d,"esri-attachments__item-mask")},b.tsx("img",{styles:c,alt:"",src:g,class:this.classes(e,"esri-attachments__image")}))};c.prototype._renderAttachmentInfo=function(a){var c=this,g=a.attachmentInfo,e=this.viewModel.abilities,d=g.name,f=g.url;a=this._renderImageMask({attachmentInfo:g,size:"list"===a.displayType?48:400});var k=e.editing?b.tsx("span",{"aria-hidden":"true",class:this.classes("esri-attachments__item-chevron-icon",b.isRTL()?"esri-icon-left":"esri-icon-right")}):null,
d=b.tsx("label",{class:"esri-attachments__label"},b.tsx("span",{class:"esri-attachments__filename"},d||h.noTitle),k),d=[a,d],e=e.editing?b.tsx("button",{key:"details-button",bind:this,class:"esri-attachments__item-button",title:h.attachmentDetails,"aria-label":h.attachmentDetails,"data-attachment-info-id":g.id,onclick:function(){return c._startEditAttachment(g)}},d):b.tsx("a",{key:"details-link",class:"esri-attachments__item-button",href:f,target:"_blank"},d);return b.tsx("li",{class:"esri-attachments__item",
key:g},e)};c.prototype._renderAttachmentContainer=function(){var a=this,c,d=this.displayType,e=this.viewModel,f=this.visibleElements,k=e.attachmentInfos,m=e.abilities,p=k&&k.length,e=(c={},c["esri-attachments__container--list"]="preview"!==d,c["esri-attachments__container--preview"]="preview"===d,c);c=m.editing&&m.operations.add&&f.addButton?b.tsx("button",{bind:this,onclick:function(){return a._startAddAttachment()},class:this.classes("esri-button","esri-button--tertiary","esri-attachments__add-attachment-button")},
b.tsx("span",{"aria-hidden":"true",class:this.classes("esri-attachments__item-add-icon","esri-icon-plus")}),h.add):null;k=p?b.tsx("ul",{class:"esri-attachments__items"},k.toArray().map(function(b){return a._renderAttachmentInfo({attachmentInfo:b,displayType:d})})):b.tsx("div",{class:"esri-widget__content--empty"},h.noAttachments);return b.tsx("div",{key:"attachments-container",class:this.classes("esri-attachments__container",e)},k,c)};c.prototype._modeChanged=function(){this._set("error",null);this._set("selectedFile",
null)};c.prototype._handleFileInputChange=function(a){a=(a=a.target)&&a.files&&a.files.item(0);this._set("selectedFile",a)};c.prototype._submitDeleteAttachment=function(a,b){a.preventDefault();this.deleteAttachment(b)};c.prototype._submitAddAttachment=function(a){a.preventDefault();this.addAttachment()};c.prototype._submitUpdateAttachment=function(a){a.preventDefault();this.updateAttachment()};c.prototype._startEditAttachment=function(a){var b=this.viewModel;b.activeAttachmentInfo=a;b.mode="edit"};
c.prototype._startAddAttachment=function(){this.viewModel.mode="add"};c.prototype._cancelForm=function(a){a.preventDefault();this.viewModel.mode="view"};c.prototype._getCSSTransform=function(a,b){a=a.orientationInfo;return!this._supportsImageOrientation&&b&&a?[a.rotation?"rotate("+a.rotation+"deg)":"",a.mirrored?"scaleX(-1)":""].join(" "):""};d([f.aliasOf("viewModel.abilities")],c.prototype,"abilities",void 0);d([f.property(),b.renderable()],c.prototype,"displayType",void 0);d([f.aliasOf("viewModel.graphic")],
c.prototype,"graphic",void 0);d([f.property()],c.prototype,"label",void 0);d([f.property({readOnly:!0})],c.prototype,"selectedFile",void 0);d([b.renderable(),f.property({readOnly:!0})],c.prototype,"submitting",void 0);d([b.renderable(),f.property({readOnly:!0})],c.prototype,"error",void 0);d([f.property({type:u}),b.renderable("viewModel.activeAttachmentInfo viewModel.mode viewModel.state viewModel.supportsResizeAttachments viewModel.attachmentInfos viewModel.graphic viewModel.abilities viewModel.abilities.editing viewModel.abilities.operations".split(" "))],
c.prototype,"viewModel",void 0);d([f.property(),b.renderable()],c.prototype,"visibleElements",void 0);d([f.cast("visibleElements")],c.prototype,"castVisibleElements",null);return c=d([f.subclass("esri.widgets.Attachments")],c)}(f.declared(B))});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators".split(" "),function(k,l,f,c,g,h,b){return function(e){function a(a){a=e.call(this,a)||this;a.activeRange=null;a.currentRangeExtent=null;a.fullRangeExtent=null;return a}f(a,e);d=a;a.prototype.clone=function(){return new d(h.clone({activeRange:this.activeRange,currentRangeExtent:this.currentRangeExtent,fullRangeExtent:this.fullRangeExtent}))};
var d;c([b.property({type:String,nonNullable:!0,json:{read:{source:"activeRangeName"},write:{target:"activeRangeName",isRequired:!0}}})],a.prototype,"activeRange",void 0);c([b.property({type:[Number],json:{write:!0}})],a.prototype,"currentRangeExtent",void 0);c([b.property({type:[Number],json:{write:!0}})],a.prototype,"fullRangeExtent",void 0);return a=d=c([b.subclass("esri.webdoc.RangeInfo")],a)}(b.declared(g.JSONSupport))});
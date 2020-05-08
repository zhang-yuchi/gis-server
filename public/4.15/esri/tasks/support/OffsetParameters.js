// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../geometry/support/jsonUtils".split(" "),function(c,l,f,e,g,d,h,k){c=function(c){function b(a){a=c.call(this,a)||this;a.bevelRatio=null;a.geometries=null;a.offsetDistance=null;a.offsetHow=null;a.offsetUnit=null;return a}f(b,c);e([d.property({type:Number,json:{write:!0}})],b.prototype,"bevelRatio",
void 0);e([d.property({json:{read:{reader:function(a){return a?a.map(function(a){return k.fromJSON(a)}):null}},write:{writer:function(a,b){b.geometries=a.map(function(a){return a.toJSON()})}}}})],b.prototype,"geometries",void 0);e([d.property({type:Number,json:{write:!0}})],b.prototype,"offsetDistance",void 0);e([d.property({type:String,json:{write:!0}})],b.prototype,"offsetHow",void 0);e([d.property({type:String,json:{write:!0}})],b.prototype,"offsetUnit",void 0);return b=e([d.subclass("esri.tasks.support.OffsetParameters")],
b)}(d.declared(g.JSONSupport));c.from=h.default(c);return c});
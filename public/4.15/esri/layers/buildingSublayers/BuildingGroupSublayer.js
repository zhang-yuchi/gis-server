// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Collection ../../core/loadAll ../../core/Warning ../../core/accessorSupport/decorators ./BuildingComponentSublayer ./BuildingSublayer".split(" "),function(t,u,v,m,g,h,n,p,e,q,r){function k(b,a,c){if(b&&Array.isArray(b))return new h(b.map(function(d){var a="group"===d.layerType?f:q;if(a)return a=new a,a.read(d,c),a;c&&c.messages&&d&&c.messages.push(new p("building-scene-layer:unsupported-sublayer-type",
"Building scene sublayer of type '"+(d.type||"unknown")+"' are not supported",{definition:d,context:c}))}))}var l={type:h,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:k}}},read:!1}},f=function(b){function a(a){a=b.call(this,a)||this;a.type="building-group";a.listMode="show";a.sublayers=null;return a}m(a,b);c=a;a.prototype.loadAll=function(){var a=this;return n.loadAllChildren(this,function(b){return c.forEachSublayer(a.sublayers,function(a){"building-group"!==a.type&&b(a)})})};
var c;g([e.property({type:["hide","show","hide-children"],json:{write:!0}})],a.prototype,"listMode",void 0);g([e.property(l)],a.prototype,"sublayers",void 0);return a=c=g([e.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],a)}(e.declared(r));(function(b){function a(b,d){b.forEach(function(b){d(b);"building-group"===b.type&&a(b.sublayers,d)})}b.sublayersProperty=l;b.readSublayers=k;b.forEachSublayer=a})(f||(f={}));return f});
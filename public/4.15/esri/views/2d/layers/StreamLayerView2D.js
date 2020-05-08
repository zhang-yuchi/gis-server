// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/Error ../../../core/maybe ../../../core/accessorSupport/decorators ../../../tasks/support/FeatureSet ./FeatureLayerView2D ./support/util".split(" "),function(v,w,k,e,l,m,n,p,g,d,q,r,t){function u(c,a){if(g.isNone(c)&&g.isNone(a))return null;var b={};g.isSome(a)&&(b.geometry=
a.toJSON());g.isSome(c)&&(b.where=c);return b}return function(c){function a(){var b=null!==c&&c.apply(this,arguments)||this;b._enabledDataReceived=!1;b.errorString=null;b.connectionStatus="disconnected";return b}k(a,c);a.prototype.initialize=function(){var b=this;this.handles.add([this.layer.watch("purgeOptions",function(){return b._renderingConfigHashChanged()})])};a.prototype.destroy=function(){this.connectionStatus="disconnected"};Object.defineProperty(a.prototype,"connectionError",{get:function(){if(this.errorString)return new p("stream-controller",
this.errorString)},enumerable:!0,configurable:!0});a.prototype.on=function(b,a){"data-received"===b&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));var h=this.inherited(arguments,[b,a]),f=this;return{remove:function(){h.remove();"data-received"===b&&(f._proxy.closed||f.hasEventListener("data-received")||f._proxy.enableEvent("data-received",!1))}}};a.prototype.queryLatestObservations=function(b,a){var h=this;return this._proxy.queryLatestObservations(this._cleanUpQuery(b),
a).then(function(b){b=q.fromJSON(b);b.features.forEach(function(b){b.layer=h.layer;b.sourceLayer=h.layer});return b})};a.prototype._createClientOptions=function(){var b=this,a=this.inherited(arguments);return l({},a,{setProperty:function(a){b.set(a.propertyName,a.value)}})};a.prototype._createTileRendererHash=function(){var b=this.inherited(arguments),a=this.layer,c=JSON.stringify(a.geometryDefinition)+"."+a.definitionExpression,a=a.purgeOptions&&JSON.stringify(a.purgeOptions);return b+"."+c+"."+
a};a.prototype._createServiceOptions=function(){return n(this,void 0,void 0,function(){var b,a,c,f,d,e;return m(this,function(g){b=this.layer;a=b.objectIdField;c=b.fields.map(function(a){return a.toJSON()});f=t.toJSONGeometryType(b.geometryType);d=b.timeInfo&&b.timeInfo.toJSON()||null;e=b.spatialReference?b.spatialReference.toJSON():null;return[2,{type:"stream",fields:c,geometryType:f,objectIdField:a,timeInfo:d,source:this.layer.parsedUrl.path,content:this.layer.parsedUrl.query,serviceFilter:u(this.layer.definitionExpression,
this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:e}]})})};e([d.property()],a.prototype,"errorString",void 0);e([d.property({dependsOn:["errorString"],readOnly:!0})],a.prototype,"connectionError",null);e([d.property()],a.prototype,"connectionStatus",void 0);return a=e([d.subclass("esri.views.2d.layers.StreamLayerView2D")],a)}(d.declared(r))});
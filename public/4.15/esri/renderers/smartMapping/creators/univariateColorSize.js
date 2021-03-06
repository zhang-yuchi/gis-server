// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/Error ../../../core/maybe ./color ./size ./support/utils ../support/utils ../../support/AuthoringInfo".split(" "),function(D,q,f,l,p,m,r,x,t,u,n,y){function z(a){return p(this,void 0,void 0,function(){var b,d,e,k,c,g;return l(this,function(h){switch(h.label){case 0:if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))throw new m("univariate-colorsize-visual-variables:missing-parameters",
"'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new m("univariate-colorsize-visual-variables:missing-parameters","View is required when 'valueExpression' is specified");b=f({},a);d=[0,2,1,3];e=n.createLayerAdapter(b.layer,d);b.layer=e;if(!e)throw new m("univariate-colorsize-visual-variables:invalid-parameters","'layer' must be one of these types: "+n.getLayerTypeLabels(d).join(", "));k=r.isSome(b.signal)?{signal:b.signal}:
null;return[4,e.load(k)];case 1:return h.sent(),[4,n.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression})];case 2:c=h.sent();if(g=u.verifyBasicFieldValidity(e,c,"univariate-colorsize-visual-variables:invalid-parameters"))throw g;return[2,b]}})})}function v(a,b){a=f({},a);b=0===b?a.colorOptions:a.sizeOptions;delete a.sizeOptions;delete a.colorOptions;return f({},a,b)}function A(a){return p(this,void 0,void 0,function(){var b,d,e,k,c,g;return l(this,
function(h){switch(h.label){case 0:if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))throw new m("univariate-colorsize-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new m("univariate-colorsize-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");b=f({},a);b.symbolType=b.symbolType||"2d";d=[0,2,1,3];e=n.createLayerAdapter(b.layer,
d);b.layer=e;if(!e)throw new m("univariate-colorsize-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+n.getLayerTypeLabels(d).join(", "));k=r.isSome(b.signal)?{signal:b.signal}:null;return[4,e.load(k)];case 1:return h.sent(),[4,n.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression})];case 2:c=h.sent();if(g=u.verifyBasicFieldValidity(e,c,"univariate-colorsize-continuous-renderer:invalid-parameters"))throw g;return[2,b]}})})}
function B(a){a=f({},a);var b=f({},a.sizeOptions);delete a.sizeOptions;delete a.colorOptions;delete b.sizeOptimizationEnabled;return f({},a,b)}function C(a){a=f({},a);var b=a.symbolType,d=-1<b.indexOf("3d-volumetric");delete a.symbolType;delete a.defaultSymbolEnabled;if(a.worldScale=d)a.sizeOptions=f({},a.sizeOptions),a.sizeOptions.axis="3d-volumetric-uniform"===b?"all":"height";return a}function w(a){return p(this,void 0,void 0,function(){var b,d,e,k,c,g,h,f,m,n,p;return l(this,function(l){switch(l.label){case 0:return[4,
z(a)];case 1:return b=l.sent(),[4,x.createVisualVariable(v(b,0))];case 2:return e=l.sent(),k=v(b,1),k.statistics=e.statistics,d=e,[4,t.createVisualVariables(k)];case 3:return c=l.sent(),g=d.visualVariable,h=c.visualVariables,f=g.stops.length,h.forEach(function(a){null!=a.minDataValue&&(a.minDataValue=g.stops[0].value,a.maxDataValue=g.stops[f-1].value)}),m=d.authoringInfo.visualVariables[0],n=c.authoringInfo.visualVariables[0],p=new y({type:"univariate-color-size",visualVariables:[m.clone(),n.clone()]}),
[2,{basemapId:c.basemapId,basemapTheme:c.basemapTheme,statistics:d.statistics,defaultValuesUsed:d.defaultValuesUsed,color:{visualVariable:g,colorScheme:d.colorScheme},size:{visualVariables:h,sizeScheme:c.sizeScheme},authoringInfo:p}]}})})}Object.defineProperty(q,"__esModule",{value:!0});q.createVisualVariables=w;q.createContinuousRenderer=function(a){return p(this,void 0,void 0,function(){var b,d,e,k,c,g,h;return l(this,function(f){switch(f.label){case 0:return[4,A(a)];case 1:return b=f.sent(),[4,
t.createContinuousRenderer(B(b))];case 2:return e=f.sent(),k=C(b),k.statistics=e.statistics,d=e,[4,w(k)];case 3:return c=f.sent(),g=d.renderer,h=c.size.visualVariables.map(function(a){return a.clone()}),h.push(c.color.visualVariable.clone()),g.visualVariables=h,g.authoringInfo=c.authoringInfo&&c.authoringInfo.clone(),[2,{renderer:g,statistics:d.statistics,defaultValuesUsed:d.defaultValuesUsed,color:c.color,size:c.size,basemapId:c.basemapId,basemapTheme:c.basemapTheme}]}})})}});
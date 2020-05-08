// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/assignHelper ../.. ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../geometry/support/scaleUtils ./support/dotDensityUtils ./support/utils ../heuristics/outline ../statistics/spatialStatistics ../statistics/summaryStatisticsForAttributes ../statistics/support/attributeDensity ../support/utils ../symbology/dotDensity ../../support/AuthoringInfo".split(" "),
function(S,E,n,y,H,I,v,A,B,F,z,C,J,K,L,M,D,G,N){function O(b){return y(this,void 0,void 0,function(){var a,c,d,f,e;return n(this,function(g){switch(g.label){case 0:if(!(b&&b.layer&&b.view&&b.attributes&&b.attributes.length))throw new v("dot-density-renderer:missing-parameters","'layer', 'view' and 'attributes' parameters are required");if(8<b.attributes.length)throw new v("dot-density-renderer:invalid-parameters","Dot density renderer does not support more than 8 attributes");a=H({},b);c=[2,1];d=
D.createLayerAdapter(a.layer,c);a.layer=d;a.dotBlendingEnabled=null==a.dotBlendingEnabled?!0:a.dotBlendingEnabled;a.dotValueOptimizationEnabled=null==a.dotValueOptimizationEnabled?!0:a.dotValueOptimizationEnabled;if(!d)throw new v("dot-density-renderer:invalid-parameters","'layer' must be one of these types: "+D.getLayerTypeLabels(c).join(", "));f=A.isSome(a.signal)?{signal:a.signal}:null;return[4,B.all([a.view.when(),d.load(f)])];case 1:g.sent();e=d.geometryType;if("polygon"!==e)throw new v("dot-density-renderer:not-supported",
"Dot density renderer is supported for polygon layers only");return[2,a]}})})}function P(b){return y(this,void 0,void 0,function(){var a,c,d,f,e;return n(this,function(g){switch(g.label){case 0:return a=b.dotDensityScheme,d=c=null,[4,C.getBasemapInfo(b.basemap,b.view)];case 1:f=g.sent();c=A.isSome(f.basemapId)?f.basemapId:null;d=A.isSome(f.basemapTheme)?f.basemapTheme:null;if(a)return[2,{scheme:G.cloneScheme(a),basemapId:c,basemapTheme:d}];if(e=G.getSchemes({basemap:c,numColors:b.attributes.length,
basemapTheme:d}))a=e.primaryScheme,c=e.basemapId,d=e.basemapTheme;return[2,{scheme:a,basemapId:c,basemapTheme:d}]}})})}function Q(b){return y(this,void 0,void 0,function(){var a,c,d,f,e,g,p,q,l,h,k,t,r;return n(this,function(u){switch(u.label){case 0:return a=b.view,c=b.layer,d=b.attributes,f=b.signal,[4,c.getSampleFeatures({view:a,sampleSize:500,returnGeometry:!0,signal:f})];case 1:return e=u.sent(),[4,B.all([K({features:e,geometryType:c.geometryType}),L({layer:c,attributes:d,includeZeros:!1,includeNegatives:!1,
view:a,signal:f})])];case 2:g=u.sent();p=g[0];q=g[1];l="avgSize"in p&&p.avgSize;h=q.avg;if(!l)throw new v("dot-density-renderer:insufficient-info","Average polygon size is invalid");if(!h)throw new v("dot-density-renderer:insufficient-info","Average attribute value is invalid");k=F.getResolutionForScale(a.scale,a.spatialReference);t=l*l/(k*k)*.1;r=z.roundValue(h/t);return[2,{dotValue:r||1,referenceScale:a.scale,minSliderValue:1,maxSliderValue:z.roundValue(h)}]}})})}function R(b){return y(this,void 0,
void 0,function(){var a,c,d,f,e,g,p,q,l,h,k,t,r,u,w,x;return n(this,function(m){switch(m.label){case 0:a=b.view,c=b.layer,d=b.attributes,f=b.signal,e=[],g=0,p=d,m.label=1;case 1:if(!(g<p.length))return[3,4];q=p[g];return[4,D.getFieldsList({field:q.field,valueExpression:q.valueExpression})];case 2:l=m.sent(),e.push.apply(e,l),m.label=3;case 3:return g++,[3,1];case 4:return[4,c.getSampleFeatures({view:a,sampleSize:500,requiredFields:e,returnGeometry:!0,signal:f})];case 5:return h=m.sent(),[4,M({features:h,
attributes:d,includeZeros:!1,includeNegatives:!1,view:a})];case 6:k=m.sent();if(!k.avgDensity||!k.minDensity||!k.maxDensity)throw new v("dot-density-renderer:insufficient-info","Invalid density values");t=F.getResolutionForScale(a.scale,a.spatialReference);r=t*t;u=z.roundValue(k.minDensity*r);w=z.roundValue(k.maxDensity*r);x=z.roundValue(k.avgDensity*r*10)||1;x>w&&(x=w);return[2,{dotValue:x,referenceScale:a.scale,minSliderValue:u,maxSliderValue:w}]}})})}Object.defineProperty(E,"__esModule",{value:!0});
E.createRenderer=function(b){return y(this,void 0,void 0,function(){var a,c,d,f,e,g,p,q,l,h,k,t,r,u,w,x,m;return n(this,function(n){switch(n.label){case 0:return[4,O(b)];case 1:return a=n.sent(),c=a.layer,d=c.geometryType,[4,P(a)];case 2:e=(f=n.sent())&&f.scheme;if(!e)throw new v("dot-density-renderer:insufficient-info","Unable to find dot-density scheme");g={layer:c,view:a.view,attributes:a.attributes,signal:a.signal};p={layer:a.layer,view:a.view,signal:a.signal};return[4,B.all([a.trueDensity?R(g):
Q(g),a.outlineOptimizationEnabled?J(p):null])];case 3:return q=n.sent(),l=q[0],h=q[1],k=l.dotValue,t=l.referenceScale,r=l.minSliderValue,u=l.maxSliderValue,w=C.createColors(e.colors,a.attributes.length),x=a.attributes.map(function(a,b){return{field:a.field,valueExpression:a.valueExpression,label:a.label,valueExpressionTitle:a.valueExpressionTitle,color:w[b]}}),m=new I.DotDensityRenderer({attributes:x,dotBlendingEnabled:a.dotBlendingEnabled,outline:h?C.getSymbolOutlineFromScheme(e,d,h.opacity):null,
dotValue:k,referenceScale:a.dotValueOptimizationEnabled?t:null,legendOptions:a.legendOptions}),h&&h.visualVariables&&h.visualVariables.length&&(m.visualVariables=h.visualVariables.map(function(a){return a.clone()})),m.authoringInfo=new N({type:"dot-density",minSliderValue:r,maxSliderValue:u}),[2,{renderer:m,dotDensityScheme:e,basemapId:f.basemapId,basemapTheme:f.basemapTheme}]}})})}});
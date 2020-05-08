// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/maybe ../../../../core/libs/gl-matrix-2/mat3 ../../../../core/libs/gl-matrix-2/mat3f64 ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/quat ../../../../core/libs/gl-matrix-2/quatf64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f32 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4 ../../../../core/libs/gl-matrix-2/vec4f64 ../../support/geometryUtils ../../support/geometryUtils/boundedPlane ../../support/geometryUtils/sphere ./Object3D".split(" "),
function(g,d,k,I,J,n,p,K,L,e,M,l,N,y,u,O,P,Q){function x(c,a){return k.isNone(c)||null==c.layerUid?null:k.isSome(a.graphicsView)&&c.layerUid===a.graphicsView.mockLayerId?a.graphics:a.map.findLayerByUid(c.layerUid)}function z(c,a){if(k.isNone(c))return null;var b=x(c,a);return k.isNone(b)?null:b===a.graphics?k.isSome(a.graphicsView)?k.expect(a.graphicsView.getGraphicFromGraphicUid(c.graphicUid)):null:(a=a.allLayerViews.find(function(a){return a.layer===b}))?R(a,c):null}function R(c,a){return!c||c.suspended?
null:"getGraphicFromIntersectorMetadata"in c&&a?c.getGraphicFromIntersectorMetadata(a):"getGraphicFromGraphicUid"in c&&null!=a.graphicUid?c.getGraphicFromGraphicUid(a.graphicUid):null}Object.defineProperty(d,"__esModule",{value:!0});d.sliceFilterPredicate=function(c){return function(a,b,m){e.vec3.lerp(A,a,b,m);return!O.extrusionContainsPoint(c,A)}};g=function(){return function(){this.verticalOffset=0;this.selectionMode=!1;this.selectOpaqueTerrainOnly=this.hud=!0;this.invisibleTerrain=!1;this.storeTerrainResults=
this.backfacesTerrain=!0;this.store=2}}();d.IntersectorOptions=g;g=function(){function c(){this._transform=p.mat4f64.create();this._transformInverse=new v({value:this._transform},n.mat4.invert,p.mat4f64.create);this._transformInverseTranspose=new v(this._transformInverse,n.mat4.transpose,p.mat4f64.create);this._transformTranspose=new v({value:this._transform},n.mat4.transpose,p.mat4f64.create);this._transformInverseRotation=new v({value:this._transform},I.mat3.normalFromMat4Legacy,J.mat3f64.create)}
c.prototype.invalidateLazyTransforms=function(){this._transformInverse.invalidate();this._transformInverseTranspose.invalidate();this._transformTranspose.invalidate();this._transformInverseRotation.invalidate()};Object.defineProperty(c.prototype,"transform",{get:function(){return this._transform},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"inverse",{get:function(){return this._transformInverse.value},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"inverseTranspose",
{get:function(){return this._transformInverseTranspose.value},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"inverseRotation",{get:function(){return this._transformInverseRotation.value},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"transpose",{get:function(){return this._transformTranspose.value},enumerable:!0,configurable:!0});c.prototype.setTransformMatrix=function(a){n.mat4.copy(this._transform,a)};c.prototype.multiplyTransform=function(a){n.mat4.multiply(this._transform,
this._transform,a)};c.prototype.set=function(a){n.mat4.copy(this._transform,a);this.invalidateLazyTransforms()};c.prototype.setAndInvalidateLazyTransforms=function(a,b){this.setTransformMatrix(a);this.multiplyTransform(b);this.invalidateLazyTransforms()};return c}();d.IntersectorTransform=g;var v=function(){function c(a,b,c){this.original=a;this.update=b;this.dirty=!0;this.transform=c()}c.prototype.invalidate=function(){this.dirty=!0};Object.defineProperty(c.prototype,"value",{get:function(){this.dirty&&
(this.update(this.transform,this.original.value),this.dirty=!1);return this.transform},enumerable:!0,configurable:!0});return c}();g=function(){function c(){this.min=new q;this.max=new q;this.hud=new q;this.ground=new q}c.prototype.init=function(a){this.min.init(a);this.max.init(a);this.hud.init(a);this.ground.init(a);this.all=[]};return c}();d.IntersectorResults=g;var q=function(){function c(a){this.normal=l.vec3f64.create();this.transformation=p.mat4f64.create();this._ray=u.ray.create();this.init(a)}
Object.defineProperty(c.prototype,"ray",{get:function(){return this._ray},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"hasIntersectionPoint",{get:function(){return null!=this.dist},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"distanceInRenderSpace",{get:function(){if(null!=this.dist)return e.vec3.scale(w,this.ray.direction,this.dist),e.vec3.length(w)},enumerable:!0,configurable:!0});c.prototype.getIntersectionPoint=function(a){if(!this.hasIntersectionPoint)return!1;
e.vec3.scale(w,this.ray.direction,this.dist);e.vec3.add(a,this.ray.origin,w);return!0};c.prototype.getTransformedNormal=function(a){e.vec3.copy(r,this.normal);r[3]=0;N.vec4.transformMat4(r,r,this.transformation);e.vec3.copy(a,r);e.vec3.normalize(a,a);return a};c.prototype.init=function(a){this.drapedLayerGraphicOrder=this.drapedLayerOrder=this.name=this.target=this.dist=void 0;this.triangleNr=this.geometryId=this.center=null;this.intersector="Stage";a?u.ray.copy(a,this._ray):this._ray=u.ray.create()};
c.prototype.set=function(a,b,c,f,t,h,B,d,g,k){a instanceof Q&&(a={type:"stage",obj:a});this.dist=c;e.vec3.copy(this.normal,f);n.mat4.copy(this.transformation,t);this.target=a;this.name=b;this.drapedLayerOrder=h;this.center=B?l.vec3f64.clone(B):null;this.geometryId=d;this.triangleNr=g;this.drapedLayerGraphicOrder=k};c.prototype.copyFrom=function(a){u.ray.copy(a._ray,this._ray);this.dist=a.dist;this.target=a.target;this.name=a.name;this.drapedLayerOrder=a.drapedLayerOrder;this.center=a.center?l.vec3f64.clone(a.center):
null;this.geometryId=a.geometryId;this.triangleNr=a.triangleNr;this.intersector=a.intersector;this.drapedLayerGraphicOrder=a.drapedLayerGraphicOrder;e.vec3.copy(this.normal,a.normal);n.mat4.copy(this.transformation,a.transformation)};c.prototype.toOwner=function(a){if(!this.target)return null;switch(this.target.type){case "stage":return x(this.target.obj.metadata,a);case "external":switch(this.intersector){case "PointRenderer":var b=this.target.metadata.layerUid;return null!=b?a.map.findLayerByUid(b):
null;case "I3S":case "IM":case "LodRenderer":case "OverlayRenderer":return x(this.target.metadata,a);case "TerrainRenderer":return a.map&&a.map.ground}}return null};c.prototype.toGraphic=function(a){if(!this.target)return null;switch(this.target.type){case "stage":return z(this.target.obj.metadata,a);case "external":switch(this.intersector){case "PointRenderer":return this.target.metadata.createGraphic();case "I3S":case "IM":case "LodRenderer":case "OverlayRenderer":return z(this.target.metadata,
a)}}return null};return c}();d.IntersectorResult=q;g=function(){function c(a){void 0===a&&(a=0);this.offset=a;this.tmpVertex=l.vec3f64.create()}c.prototype.applyToVertex=function(a,b,c){var f=a+this.localOrigin[0],m=b+this.localOrigin[1],h=c+this.localOrigin[2],d=this.offset/Math.sqrt(f*f+m*m+h*h);this.tmpVertex[0]=a+f*d;this.tmpVertex[1]=b+m*d;this.tmpVertex[2]=c+h*d;return this.tmpVertex};c.prototype.applyToAABB=function(a){var b=a[0]+this.localOrigin[0],c=a[1]+this.localOrigin[1],f=a[2]+this.localOrigin[2],
t=a[3]+this.localOrigin[0],h=a[4]+this.localOrigin[1],d=a[5]+this.localOrigin[2],e=this.offset/Math.sqrt(b*b+c*c+f*f);a[0]+=b*e;a[1]+=c*e;a[2]+=f*e;b=this.offset/Math.sqrt(t*t+h*h+d*d);a[3]+=t*b;a[4]+=h*b;a[5]+=d*b;return a};return c}();d.TerrainVerticalOffsetGlobalViewingMode=g;var D=function(){function c(a){void 0===a&&(a=0);this.offset=a;this.componentLocalOriginLength=0;this.tmpVertex=l.vec3f64.create();this.mbs=y.vec4f64.create();this.obb={center:l.vec3f64.create(),halfSize:M.vec3f32.create(),
quaternion:null}}Object.defineProperty(c.prototype,"localOrigin",{set:function(a){this.componentLocalOriginLength=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])},enumerable:!0,configurable:!0});c.prototype.applyToVertex=function(a,b,c){var f=c+this.componentLocalOriginLength,m=this.offset/Math.sqrt(a*a+b*b+f*f);this.tmpVertex[0]=a+a*m;this.tmpVertex[1]=b+b*m;this.tmpVertex[2]=c+f*m;return this.tmpVertex};c.prototype.applyToAABB=function(a){var b=a[0],c=a[1],f=a[2]+this.componentLocalOriginLength,d=a[3],
h=a[4],e=a[5]+this.componentLocalOriginLength,g=this.offset/Math.sqrt(b*b+c*c+f*f);a[0]+=b*g;a[1]+=c*g;a[2]+=f*g;b=this.offset/Math.sqrt(d*d+h*h+e*e);a[3]+=d*b;a[4]+=h*b;a[5]+=e*b;return a};c.prototype.applyToMbs=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]),c=this.offset/b;this.mbs[0]=a[0]+a[0]*c;this.mbs[1]=a[1]+a[1]*c;this.mbs[2]=a[2]+a[2]*c;this.mbs[3]=a[3]+a[3]*this.offset/b;return this.mbs};c.prototype.applyToObb=function(a){var b=a.center,c=this.offset/Math.sqrt(b[0]*b[0]+b[1]*
b[1]+b[2]*b[2]);this.obb.center[0]=b[0]+b[0]*c;this.obb.center[1]=b[1]+b[1]*c;this.obb.center[2]=b[2]+b[2]*c;e.vec3.transformQuat(this.obb.halfSize,a.halfSize,a.quaternion);e.vec3.add(this.obb.halfSize,this.obb.halfSize,a.center);b=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);this.obb.halfSize[0]+=this.obb.halfSize[0]*b;this.obb.halfSize[1]+=this.obb.halfSize[1]*b;this.obb.halfSize[2]+=this.obb.halfSize[2]*
b;e.vec3.subtract(this.obb.halfSize,this.obb.halfSize,a.center);K.quat.conjugate(C,a.quaternion);e.vec3.transformQuat(this.obb.halfSize,this.obb.halfSize,C);this.obb.halfSize[0]*=0>this.obb.halfSize[0]?-1:1;this.obb.halfSize[1]*=0>this.obb.halfSize[1]?-1:1;this.obb.halfSize[2]*=0>this.obb.halfSize[2]?-1:1;this.obb.quaternion=a.quaternion;return this.obb};return c}();d.I3SVerticalOffsetGlobalViewingMode=D;var E=function(){function c(a){void 0===a&&(a=0);this.offset=a;this.sphere=P.create();this.tmpVertex=
l.vec3f64.create()}c.prototype.applyToVertex=function(a,b,c){var f=this.objectTransform.transform,d=f[0]*a+f[4]*b+f[8]*c+f[12],e=f[1]*a+f[5]*b+f[9]*c+f[13];a=f[2]*a+f[6]*b+f[10]*c+f[14];b=this.offset/Math.sqrt(d*d+e*e+a*a);d+=d*b;e+=e*b;a+=a*b;b=this.objectTransform.inverse;this.tmpVertex[0]=b[0]*d+b[4]*e+b[8]*a+b[12];this.tmpVertex[1]=b[1]*d+b[5]*e+b[9]*a+b[13];this.tmpVertex[2]=b[2]*d+b[6]*e+b[10]*a+b[14];return this.tmpVertex};c.prototype.applyToMinMax=function(a,b){var c=this.offset/Math.sqrt(a[0]*
a[0]+a[1]*a[1]+a[2]*a[2]);a[0]+=a[0]*c;a[1]+=a[1]*c;a[2]+=a[2]*c;a=this.offset/Math.sqrt(b[0]*b[0]+b[1]*b[1]+b[2]*b[2]);b[0]+=b[0]*a;b[1]+=b[1]*a;b[2]+=b[2]*a};c.prototype.applyToAABB=function(a){var b=this.offset/Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);a[0]+=a[0]*b;a[1]+=a[1]*b;a[2]+=a[2]*b;b=this.offset/Math.sqrt(a[3]*a[3]+a[4]*a[4]+a[5]*a[5]);a[3]+=a[3]*b;a[4]+=a[4]*b;a[5]+=a[5]*b;return a};c.prototype.applyToBoundingSphere=function(a,b){var c=Math.sqrt(b[0]*b[0]+b[1]*b[1]+b[2]*b[2]),d=this.offset/
c;this.sphere.center[0]=b[0]+b[0]*d;this.sphere.center[1]=b[1]+b[1]*d;this.sphere.center[2]=b[2]+b[2]*d;this.sphere.radius=a+a*this.offset/c;return this.sphere};return c}();d.Object3DVerticalOffsetGlobalViewingMode=E;var F=new E;d.getVerticalOffsetObject3D=function(c){return k.isSome(c)?(F.offset=c,F):null};var G=new D;d.getVerticalOffsetI3S=function(c){return k.isSome(c)?(G.offset=c,G):null};var H=new g;d.getVerticalOffsetTerrain=function(c){return k.isSome(c)?(H.offset=c,H):null};d.TERRAIN_ID="terrain";
var A=l.vec3f64.create(),w=l.vec3f64.create(),r=y.vec4f64.create(),C=L.quatf64.create()});
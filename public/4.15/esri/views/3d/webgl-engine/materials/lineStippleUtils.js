// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/maybe","../../../webgl"],function(k,g,c,m){Object.defineProperty(g,"__esModule",{value:!0});k=function(){function a(){this.cache=new Map}a.prototype.dispose=function(){this.cache.forEach(function(b){c.isSome(b.texture)&&(b.texture.dispose(),b.texture=null)});this.cache.clear()};a.prototype.acquire=function(b){if(c.isNone(b))return null;var f=this.patternId(b),a=this.cache.get(f);if(a)return a.refCount++,a.bind;var d=this.patternToTextureData(b,2),h=d.length/
2,e={refCount:1,texture:null,bind:function(b,a){c.isNone(e.texture)&&(e.texture=new m.Texture(b,{width:d.length,height:1,internalFormat:6406,pixelFormat:6406,dataType:5121,wrapMode:33071},d));b.bindTexture(e.texture,a);return h}};this.cache.set(f,e);return e.bind};a.prototype.release=function(b){if(!c.isNone(b)){b=this.patternId(b);var a=this.cache.get(b);a&&(a.refCount--,0===a.refCount&&(c.isSome(a.texture)&&a.texture.dispose(),this.cache.delete(b)))}};a.prototype.swap=function(b,a){a=this.acquire(a);
this.release(b);return a};a.prototype.bind=function(a,f,l,d,h){a=c.isSome(d)?d(a,h)*f.pixelRatio:1;l.setUniform1i("stipplePatternTexture",h);l.setUniform1f("stipplePatternPixelSizeInv",1/a)};a.prototype.patternId=function(a){return a.join(",")};a.prototype.patternToTextureData=function(a,c){for(var b=a.reduce(function(a,b){return a+b})*c,b=new Uint8Array(b),d=!0,h=0,e=0;e<a.length;e++){for(var g=a[e],f=0;f<g*c;f++)b[h++]=d?255:0;d=!d}return b};return a}();g.StippleTextureRepository=k;g.createStipplePattern=
function(a){return c.isNone(a)?a:a.slice()};g.createStipplePatternSimple=function(a){return[a,a]}});
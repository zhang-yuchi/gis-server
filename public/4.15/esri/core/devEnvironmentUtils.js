// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","./global"],function(l,c,d){Object.defineProperty(c,"__esModule",{value:!0});c.isDevEnvironment=function(a){a=a||d.location.hostname;return e.some(function(b){return null!=a.match(b)})};c.adjustStaticAGOUrl=function(a,b){if(!a)return a;b=b||d.location.hostname;return null!=b.match(f)||null!=b.match(g)?a.replace("static.arcgis.com","staticdev.arcgis.com"):null!=b.match(h)||null!=b.match(k)?a.replace("static.arcgis.com","staticqa.arcgis.com"):a};c.isTelemetryDevEnvironment=
function(a){a=a||d.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(e).some(function(b){return null!=a.match(b)})};var f=/^devext.arcgis.com$/,h=/^qaext.arcgis.com$/,g=/^[\w-]*\.mapsdevext.arcgis.com$/,k=/^[\w-]*\.mapsqa.arcgis.com$/,e=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,f,h,/^jsapps.esri.com$/,g,k]});
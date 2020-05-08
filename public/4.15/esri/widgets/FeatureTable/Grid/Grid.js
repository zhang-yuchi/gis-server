// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/i18n!../../FeatureTable/nls/FeatureTable ../../../core/Collection ../../../core/events ../../../core/HandleOwner ../../../core/maybe ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../Widget ./GridViewModel ../../support/widget @dojo/framework/shim/Promise ./../../../libs/vaadin-grid/webcomponents".split(" "),function(m,y,f,n,d,
p,q,g,r,t,h,c,u,v,e){new Promise(function(c,b){m(["./../../../libs/vaadin-grid/index"],c,b)});var l={selectionColumn:!0};return function(k){function b(a){a=k.call(this,a)||this;a._grid=null;a.cellClassNameGenerator=null;a.columnReorderingEnabled=!0;a.dataProvider=null;a.label=p.widgetLabel;a.pageSize=50;a.selectedItems=new q;a.size=null;a.rowDetailsRenderer=null;a.store=null;a.viewModel=new v;a.visibleElements=f({},l);return a}n(b,k);b.prototype.postInitialize=function(){var a=this;this.handles.add([h.on(this,
"viewModel.columns","change",function(){return a.scheduleRender()}),h.watch(this,"viewModel.size",function(){return a._updateGridSize()}),h.watch(this,"store.orderByFields",this._clearSelection)])};b.prototype.castVisibleElements=function(a){return f({},l,a)};b.prototype.render=function(){return e.tsx("div",{bind:this,class:this.classes("esri-grid","esri-widget")},e.tsx("div",{bind:this,class:"esri-grid__content"},this.renderGrid()))};b.prototype.renderGrid=function(){return e.tsx("vaadin-grid",f({},
this.getGridProps()),this.renderAllColumns())};b.prototype.renderAllColumns=function(){if("disabled"!==this.viewModel.state&&this.columns&&this.columns.length)return[this.renderSelectionColumn(),this.renderColumns()]};b.prototype.renderSelectionColumn=function(){return e.tsx("vaadin-grid-selection-column",{bind:this,afterCreate:this._afterSelectionColumnCreate,hidden:!this.visibleElements.selectionColumn,sortable:!1,frozen:!e.isRTL()})};b.prototype.renderColumns=function(){var a=this;return this.columns.items.map(function(b,
x){return e.tsx("vaadin-grid-column",f({},a.getColumnProps(b,x)))})};b.prototype.getGridProps=function(){return{class:"esri-grid__grid",id:this.id+"_grid",theme:"compact column-borders",ref:"grid",bind:this,afterCreate:this._afterGridCreate,afterUpdate:this._afterGridUpdate,columnReorderingAllowed:this.columnReorderingEnabled,pageSize:this.pageSize,size:this.size}};b.prototype.getColumnProps=function(a,b){var w=a.autoWidth,c=a.flexGrow,d=a.frozen,e=a.header,f=a.hidden,g=a.path,h=a.resizable,k=a.textAlign;
a=a.width;b=this.id+"_"+name+"_"+(t.isSome(b)?b:g);return{autoWidth:w,flexGrow:c,frozen:d,header:e,hidden:f,key:b,path:g,resizable:h,"text-align":k,width:"number"===typeof a?a+"px":a,bind:this,afterCreate:this._afterColumnCreateOrUpdate,afterUpdate:this._afterColumnCreateOrUpdate}};b.prototype.clearSelection=function(){this._clearSelection();this.scheduleRender()};b.prototype.findColumn=function(a){return this.viewModel&&this.viewModel.findColumn(a)};b.prototype.hideColumn=function(a){this.viewModel&&
this.viewModel.hideColumn(a);this.scheduleRender()};b.prototype.showColumn=function(a){this.viewModel&&this.viewModel.showColumn(a);this.scheduleRender()};b.prototype.generateCellClassNames=function(){this._grid&&this._grid.generateCellClassNames()};b.prototype.refreshCache=function(){this._grid&&this._grid.clearCache()};b.prototype.refresh=function(){var a=this;this._clearSelection();this.store&&(this.store.reset(),this.store.load().then(function(){return a.refreshCache()}))};b.prototype.recalculateColumnWidths=
function(){this._grid&&this._grid.recalculateColumnWidths()};b.prototype.notifyResize=function(){this._grid&&this._grid.notifyResize()};b.prototype.sort=function(a){this._sort(a)};b.prototype.selectRow=function(a){(a=this.viewModel.getRowItemAt(a))&&this._selectRowByItem(a)};b.prototype.deselectRow=function(a){(a=this.viewModel.getRowItemAt(a))&&this._deselectRowByItem(a)};b.prototype._afterGridCreate=function(a){var b=this,c=this.dataProvider,d=this.rowDetailsRenderer;a.cellClassNameGenerator=this.cellClassNameGenerator;
a.dataProvider=c;a.rowDetailsRenderer=d;this._grid=a;customElements.whenDefined("vaadin-grid").then(function(){b._appendStyles();b._addGridEventListeners()})};b.prototype._afterGridUpdate=function(a){this._grid||(this._grid=a)};b.prototype._afterColumnCreateOrUpdate=function(a){this._syncColumnRenderers(a)};b.prototype._afterSelectionColumnCreate=function(a){a.setAttribute("auto-select","true");a.headerRenderer=function(a){a.innerHTML=null}};b.prototype._appendStyles=function(){var a=this._grid.shadowRoot,
b=document.createElement("style");b.textContent='\n      :host { font-family: "Avenir Next W00", "Helvetica Neue", Helvetica, Arial, sans-serif !default; font-size: 1em; }\n      [part~\x3d"row"]:hover [part~\x3d"body-cell"] { background: #e8f1fe; }\n    ';a&&a.appendChild(b)};b.prototype._updateGridSize=function(){this._grid&&(this._grid.size=this.size||0,this.scheduleRender())};b.prototype._addGridEventListeners=function(){var a=this,b=this._grid;this.handles.add([g.on(b,"click",function(b){return a._onRowClick(b)}),
g.on(b,"selected-items-changed",function(b){return a._onSelectionChange(b)}),g.on(b,"sorter-changed",function(b){return a._syncSortProps(b)})])};b.prototype._onRowClick=function(a){var b=this._grid.getEventContext(event),c=b.section;b.item&&c&&"details"!==c&&"header"!==c&&this.emit("row-click",{context:b,native:a})};b.prototype._selectRowByItem=function(a){this._grid&&this._grid.selectItem(a)};b.prototype._deselectRowByItem=function(a){this._grid&&this._grid.deselectItem(a)};b.prototype._clearSelection=
function(){var a=this;this._grid&&this._grid.selectedItems&&(this._grid.selectedItems.slice().forEach(function(b){return a._deselectRowByItem(b)}),this._updateSelectionProps())};b.prototype._sort=function(a){var b=a.direction;(a=this.viewModel.findColumn(a.path))&&a.sortElement&&(b?a.sortElement.setAttribute("direction",b):a.sortElement.removeAttribute("direction"))};b.prototype._onSelectionChange=function(a){this._updateSelectionProps();"selectedItems.splices"===a.detail.path&&(a=a.detail.value.indexSplices[0],
this.emit("selection-change",{index:a.index,added:a.object,removed:a.removed}))};b.prototype._updateSelectionProps=function(){this.selectedItems.length&&this.selectedItems.removeAll();this._grid&&this.selectedItems.addMany(this._grid.selectedItems)};b.prototype._syncSortProps=function(a){a=a.target;this.viewModel.sortColumn(a.path,a.direction)};b.prototype._syncColumnRenderers=function(a){var b=this.viewModel.findColumn(a.path);b&&(b.renderFunction&&(a.renderer=function(a,c,d){return b.renderFunction({root:a,
column:c,rowData:d})}),b.footerRenderFunction&&(a.footerRenderer=function(a,c){return b.footerRenderFunction({root:a,column:c})}),b.headerRenderFunction&&(a.headerRenderer=function(a,c){return b.headerRenderFunction({root:a,column:c})}))};d([c.property()],b.prototype,"_grid",void 0);d([c.aliasOf("viewModel.cellClassNameGenerator")],b.prototype,"cellClassNameGenerator",void 0);d([c.aliasOf("viewModel.columns")],b.prototype,"columns",void 0);d([c.aliasOf("viewModel.columnReorderingEnabled")],b.prototype,
"columnReorderingEnabled",void 0);d([c.aliasOf("viewModel.dataProvider")],b.prototype,"dataProvider",void 0);d([c.property()],b.prototype,"label",void 0);d([c.aliasOf("viewModel.pageSize")],b.prototype,"pageSize",void 0);d([c.property({readOnly:!0}),e.renderable()],b.prototype,"selectedItems",void 0);d([c.aliasOf("viewModel.size")],b.prototype,"size",void 0);d([c.aliasOf("viewModel.rowDetailsRenderer")],b.prototype,"rowDetailsRenderer",void 0);d([c.aliasOf("viewModel.store")],b.prototype,"store",
void 0);d([c.property(),e.renderable("viewModel.cellClassNameGenerator viewModel.columnReorderingEnabled viewModel.columns viewModel.dataProvider viewModel.pageSize viewModel.rowDetailsRenderer viewModel.size viewModel.state viewModel.store".split(" "))],b.prototype,"viewModel",void 0);d([c.property(),e.renderable()],b.prototype,"visibleElements",void 0);d([c.cast("visibleElements")],b.prototype,"castVisibleElements",null);return b=d([c.subclass("esri.widgets.FeatureTable.Grid.Grid")],b)}(c.declared(r.HandleOwnerMixin(u)))});
webpackJsonp([0],{131:function(t,e,o){var r=o(3)(o(132),o(133),null,null);t.exports=r.exports},132:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default={props:{prop:{default:'"prop" value from component'}},computed:{tableData:function(){return[{prop:"prop",value:JSON.stringify(this.prop),type:r(this.prop)}]}}}},133:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card card--primary"},[t._m(0),t._v(" "),o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[o("el-table-column",{attrs:{prop:"prop",label:"Prop name"}}),t._v(" "),o("el-table-column",{attrs:{prop:"value",label:"Value"},scopedSlots:t._u([["default",function(e){return[o("div",{slot:"reference"},[o("strong",[t._v(t._s(e.row.value))])])]}]])}),t._v(" "),o("el-table-column",{attrs:{prop:"type",label:"typeof"},scopedSlots:t._u([["default",function(e){return[o("div",{slot:"reference"},[o("el-tag",{attrs:{type:"gray"}},[t._v(t._s(e.row.type))])],1)]}]])})],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("i",{staticClass:"el-icon-check"}),t._v("  Lazy loaded component.\n  ")])}]}}});
//# sourceMappingURL=0.755b284b4631610227a8.js.map
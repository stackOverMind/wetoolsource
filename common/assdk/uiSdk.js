"use strict";function init(){function i(i,a){t.sendASSDK("setNavigationBarTitle",i,a)}function a(i,a){t.sendASSDK("showNavigationBarLoading",i,a)}function n(i,a){t.sendASSDK("hideNavigationBarLoading",i,a)}var t=require("../../actions/webviewActions.js");_exports={setNavigationBarTitle:i,showNavigationBarLoading:a,hideNavigationBarLoading:n}}var _exports;init(),module.exports=_exports;
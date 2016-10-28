"use strict";function init(){var r=require("../log/log.js"),e=require("../../config/urlConfig.js"),a=(require("../../config/errcodeConfig.js"),e.batchAddCardURL),d=e.chooseCardURL,i=e.batchViewCardURL,s=function(e,s,t,o){var n=require("../request/request.js"),c=s.sdkName,_=s.args,p=_.appId;if("batchAddCard"===c)!function(){for(var e=_.card_list||[],d={},i=[],s=0,t=e.length;s<t;s++){var c=e[s];d[c.card_id]?d[c.card_id]++:(i.push(c),d[c.card_id]=1)}var f={appid:p,getitem_list:i},l={url:a,body:JSON.stringify(f),method:"post",needToken:1};r.info("cardSdk.js batchAddCard begin "+JSON.stringify(l)),n(l,function(e,a,i){if(e)r.error("cardSdk.js batchAddCard error "+JSON.stringify(e)),o(e);else{r.info("cardSdk.js batchAddCard get "+i);var s=JSON.parse(i),t=s.baseresponse,n=t.errcode;if(0===n){var c=s.json_ret_list.map(function(r){return r=JSON.parse(r),r.amount=d[r.card_tp_id],r});o(null,c)}else o(t,[])}})}();else if("chooseCard"===c){var f={appid:p,shop_id:_.location_id||0,sign_type:_.sign_type,card_sign:_.card_sign,time_stamp:_.time_stamp,nonce_str:_.nonce_str,card_tp_id:_.card_id,card_type:_.card_type},l={url:d,body:JSON.stringify(f),method:"post",needToken:1};r.info("cardSdk.js chooseCard begin "+JSON.stringify(l)),n(l,function(e,a,d){if(e)r.error("cardSdk.js chooseCard error "+JSON.stringify(e)),o(e);else{r.info("cardSdk.js chooseCard get "+d);var i=JSON.parse(d),s=i.baseresponse;0===s.errcode?o(null,JSON.parse(i.json_ret)):o(s,[])}})}else if("batchViewCard"===c){_.card_list=_.card_list||[];var u=_.card_list.map(function(r){return{card_tp_id:r.card_id,code:r.code}}),g={appid:p,items:u},S={url:i,body:JSON.stringify(g),method:"post",needToken:1};r.info("cardSdk.js batchViewCard begin "+JSON.stringify(S)),n(S,function(e,a,d){if(e)r.error("cardSdk.js batchViewCard error "+JSON.stringify(e)),o(e);else{r.info("cardSdk.js batchViewCard get "+d);var i=JSON.parse(d),s=i.baseresponse;if(0===s.errcode){var t=i.json_ret?JSON.parse(i.json_ret):{card_array:[]},n=i.error_json_ret_list.map(function(r){return JSON.parse(r)}),c={retData:t,errData:n};o(null,c)}else o(s,[])}})}};_exports={exec:s}}var _exports;init(),module.exports=_exports;
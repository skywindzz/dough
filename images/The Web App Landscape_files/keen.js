var Keen=Keen ||{configure:function(e){this._cf=e},addEvent:function(e,t,n,i){this._eq=this._eq||[],this._eq.push([e,t,n,i])},setGlobalProperties:function(e){this._gp=e},onChartsReady:function(e){this._ocrq=this._ocrq||[],this._ocrq.push(e)}};(function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://":"http://")+"dc8na2hxrj29i.cloudfront.net/code/keen-2.1.0-min.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();
if (window.location.hostname !== 'localhost') {
  Keen.configure({ projectId: "52a386e073f4bb1f72000012", writeKey: "72095371c779bc3bd3d5b50060bcadf6744289b1dc727fb1d6ceeb4f0e9d06988b4f77b99b90b35c68bd57498a6097a61d20d1b96e8d1f2a438f7b19f98c2547a6c59aa54f891016a0f139558fc7b57bdabd62017ad26e987d5bcc3839e6060ad9aab433a81d8a3cbc9613b2d3282c3b" });
  Keen.addEvent('pageView', {
    page: window.location.href,
    time: new Date().toISOString(),
    referrer: document.referrer,
    agent: window.navigator.userAgent
  });
}
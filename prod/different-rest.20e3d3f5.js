function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,s){return e&&_defineProperties(t.prototype,e),s&&_defineProperties(t,s),t}var Tabs=function(){"use strict";function t(e,s){_classCallCheck(this,t);this.options=Object.assign({isChanged:function(){}},s),this.selector=e,this.tabs=document.querySelector('[data-tabs="'.concat(e,'"]')),this.tabs?(this.tabList=this.tabs.querySelector(".tabs__nav"),this.tabsBtns=this.tabList.querySelectorAll(".tabs__nav-btn"),this.tabsPanels=this.tabs.querySelectorAll(".tabs__panel"),this.check(),this.init(),this.events()):console.error("Селектор data-tabs не существует!")}return _createClass(t,[{key:"check",value:function(){document.querySelectorAll('[data-tabs="'.concat(this.selector,'"]')).length>1?console.error("Количество элементов с одинаковым data-tabs больше одного!"):this.tabsBtns.length===this.tabsPanels.length||console.error("Количество кнопок и элементов табов не совпадает!")}},{key:"init",value:function(){var t=this;this.tabList.setAttribute("role","tablist"),this.tabsBtns.forEach((function(e,s){e.setAttribute("role","tab"),e.setAttribute("tabindex","-1"),e.setAttribute("id","".concat(t.selector).concat(s+1)),e.classList.remove("tabs__nav-btn--active")})),this.tabsPanels.forEach((function(e,s){e.setAttribute("role","tabpanel"),e.setAttribute("tabindex","-1"),e.setAttribute("aria-labelledby",t.tabsBtns[s].id),e.classList.remove("tabs__panel--active")})),this.tabsBtns[0].classList.add("tabs__nav-btn--active"),this.tabsBtns[0].removeAttribute("tabindex"),this.tabsBtns[0].setAttribute("aria-selected","true"),this.tabsPanels[0].classList.add("tabs__panel--active")}},{key:"events",value:function(){var t=this;this.tabsBtns.forEach((function(e,s){e.addEventListener("click",(function(e){var s=t.tabList.querySelector("[aria-selected]");e.currentTarget!==s&&t.switchTabs(e.currentTarget,s)})),e.addEventListener("keydown",(function(e){var a=Array.prototype.indexOf.call(t.tabsBtns,e.currentTarget),i=null;null!==(i=37===e.which?a-1:39===e.which?a+1:40===e.which?"down":null)&&("down"===i?t.tabsPanels[s].focus():t.tabsBtns[i]&&t.switchTabs(t.tabsBtns[i],e.currentTarget))}))}))}},{key:"switchTabs",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tabs.querySelector("[aria-selected]");t.focus(),t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true"),e.removeAttribute("aria-selected"),e.setAttribute("tabindex","-1");var s=Array.prototype.indexOf.call(this.tabsBtns,t),a=Array.prototype.indexOf.call(this.tabsBtns,e);this.tabsPanels[a].classList.remove("tabs__panel--active"),this.tabsPanels[s].classList.add("tabs__panel--active"),this.tabsBtns[a].classList.remove("tabs__nav-btn--active"),this.tabsBtns[s].classList.add("tabs__nav-btn--active"),this.options.isChanged(this)}}]),t}(),tabs=new Tabs("tab",{});
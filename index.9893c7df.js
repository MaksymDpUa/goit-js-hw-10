var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,a=f||c||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,p=function(){return a.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var f=r.test(t);return f||i.test(t)?u(t.slice(2),f?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var o,r,i,u,f,c,a=0,l=!1,b=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,a=e,u=t.apply(i,n)}function h(t){return a=t,f=setTimeout(w,e),l?g(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||b&&t-a>=i}function w(){var t=p();if(j(t))return T(t);f=setTimeout(w,function(t){var n=e-(t-c);return b?d(n,i-(t-a)):n}(t))}function T(t){return f=void 0,m&&o?g(t):(o=r=void 0,u)}function x(){var t=p(),n=j(t);if(o=arguments,r=this,c=t,n){if(void 0===f)return h(c);if(b)return f=setTimeout(w,e),g(c)}return void 0===f&&(f=setTimeout(w,e)),u}return e=y(e)||0,v(n)&&(l=!!n.leading,i=(b="maxWait"in n)?s(y(n.maxWait)||0,e):i,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=r=f=void 0},x.flush=function(){return void 0===f?u:T(p())},x};const b=document.querySelector("#search-box");document.querySelector("country-list"),document.querySelector("country-info");b.addEventListener("input",e((function(t){const e=t.target.value;(n=e,fetch(`https://restcountries.com/v3.1/name/${n}?fields=name,capital,population,flags,languages`).then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})).catch((t=>console.log(t)))).then((t=>console.log(t))),console.log(e);var n}),300));
//# sourceMappingURL=index.9893c7df.js.map
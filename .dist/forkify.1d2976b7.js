let e;function t(e){return e&&e.__esModule?e.default:e}var r=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,a){var s,o,c,l,u=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(u,"_invoke",{value:(s=e,o=n,c=new S(a||[]),l=h,function(e,r){if(l===p)throw Error("Generator is already running");if(l===g){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return(n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?f:("return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),f);var s=d(a,r.iterator,n.arg);if("throw"===s.type)return n.method="throw",n.arg=s.arg,n.delegate=null,f;var o=s.arg;return o?o.done?(n[r.resultName]=o.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,f):o:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,f)}(n,c);if(i){if(i===f)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(l===h)throw l=g,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);l=p;var a=d(s,o,c);if("normal"===a.type){if(l=c.done?g:"suspendedYield",a.arg===f)continue;return{value:a.arg,done:c.done}}"throw"===a.type&&(l=g,c.method="throw",c.arg=a.arg)}})}),u}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="executing",g="completed",f={};function v(){}function _(){}function m(){}var y={};l(y,s,function(){return this});var w=Object.getPrototypeOf,b=w&&w(w(x([])));b&&b!==r&&n.call(b,s)&&(y=b);var k=m.prototype=v.prototype=Object.create(y);function $(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;i(this,"_invoke",{value:function(i,a){function s(){return new t(function(r,s){!function r(i,a,s,o){var c=d(e[i],e,a);if("throw"===c.type)o(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,s,o)},function(e){r("throw",e,s,o)}):t.resolve(u).then(function(e){l.value=e,s(l)},function(e){return r("throw",e,s,o)})}}(i,a,r,s)})}return r=r?r.then(s,s):s()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function x(e){if(null!=e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return _.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:_,configurable:!0}),_.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},$(E.prototype),l(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var s=new E(u(t,r,n,i),a);return e.isGeneratorFunction(r)?s:s.next().then(function(e){return e.done?e.value:s.next()})},$(k),l(k,c,"Generator"),l(k,s,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return o.type="throw",o.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],o=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);else if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else if(l){if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return(s.type=e,s.arg=t,a)?(this.method="next",this.next=a.finallyLoc,f):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),M(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;M(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:x(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),f}},e}({});try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}let n="https://forkify-api.herokuapp.com/api/v2/recipes/",i="df1ccfac-73f5-4f25-b196-dfad84c9c8ab",a=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long !. Timeout after 10 seconds "))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},s={recipe:{},search:{query:"",result:[],resultPerPage:10,page:1},bookmarks:[]},o=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t?.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},c=async function(e){try{let t=await a(`${n}${e}?key=${i}`);s.recipe=o(t),s.bookmarks.some(t=>t.id===e)?s.recipe.bookmarked=!0:s.recipe.bookmarked=!1}catch(e){throw e}},l=async function(e){try{s.search.query=e;let t=await a(`${n}?search=${e}&key=${i}`);s.search.result=t.data.recipes.map(e=>({id:`#${e.id}`,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,page:1})),s.search.page=1}catch(e){throw e}},u=function(e=s.search.page){s.search.page=e;let t=(e-1)*s.search.resultPerPage,r=e*s.search.resultPerPage;return s.search.result.slice(t,r)},d=function(e){s.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/s.recipe.servings}),s.recipe.servings=e},h=function(){localStorage.setItem("bookmarks",JSON.stringify(s.bookmarks))},p=function(e){s.bookmarks.push(e),e.id===s.recipe.id&&(s.recipe.bookmarked=!0),h()},g=function(e){let t=s.bookmarks.findIndex(t=>t.id===e);s.bookmarks.splice(t,1),e===s.recipe.id&&(s.recipe.bookmarked=!1),h()};(e=localStorage.getItem("bookmarks"))&&(s.bookmarks=JSON.parse(e));let f=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(console.log(t),3!==t.length)throw Error("Wrong ingredient format ! Please use the correct one ");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},c=await a(`${n}?key=${i}`,r);s.recipe=o(c),p(s.recipe)}catch(e){throw e}};var v={};v=import.meta.resolve("4TO3w");var _={};function m(e,t,r,n,i){var a,s,o,c;let l=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&l.push(t);let u=0,d=e,h=t;for(;u<=l.length;)d%l[u]==0&&h%l[u]==0?(l[u],d/=l[u],h/=l[u]):u++;return a=h,s=d,o=r,c=n,1===a&&1===s?(o=`${c}${(parseInt(o)+1).toString()}`,`${o}`):0===s?`${c}${o}`:"0"==o?`${c}${s}/${a}`:`${c}${o} ${s}/${a}`}_=function(e){var t,r,n,i,a,s,o,c;let l,u;if(e<0?(e=Math.abs(e),l="-"):l="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${l}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${l}${e}`;if(e<1e-6)return"0";let d=e.toString(),h=d.split("."),p=h[0];if("0"==u&&"0"!==p)return p;if("0"==u&&"0"==p)return"0";if("99"==(u=d.length>=17?h[1].slice(0,h[1].length-1):h[1])&&"0"!==p)return`${p} 99/100`;if("99"==u&&"0"==p)return"99/100";if(1-parseFloat(`.${u}`)<.0011&&(u="999"),void 0==u)return p;let g=u.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!g||!(u.length>2)){return t=u,r=p,n=l,m(parseInt(t,10),Math.pow(10,t.length),r,n,!1)}{let e,t,r,n,d=g[0].split("").reverse().join(""),h=g[1].split("").reverse().join("");if(h.length>1){let e=h.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(h=e[0])}return h.length>1&&h.length%2==0&&(h=parseInt(h.slice(0,h.length/2),10)-parseInt(h.slice(h.length/2,h.length),10)==0?h.slice(0,h.length/2):h),i=u,a=h,s=d,o=p,c=l,t=Math.pow(10,e=i.length-s.length>=1?i.length-s.length:1),m(Math.round(((r=parseFloat(`0.${i}`))*(n=Math.pow(10,a.length))-r)*Math.pow(10,e)),(n-1)*t,o,c,!0)}};class y{_data;render(e){if(!e||Array.isArray(e)&&0==e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`<div class="spinner">
              <svg>
                <use href="${t(v)}#icon-loader"></use>
              </svg>
            </div> 
    
            `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let r=` 
         <div class="error">
              <div>
                <svg>
                  <use href="${t(v)}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${e}</p>
          </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e=this._message){let r=` 
         <div class="message">
                      <div>
                        <svg>
                          <use href="${t(v)}.svg#icon-smile"></use>
                        </svg>
                      </div>
                      <p>
                       ${e}
                      </p>
                    </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}class w extends y{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one ! ";_message="";_data;render(e){this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}addHandlerRender(e){["hashchange","load"].forEach(t=>{window.addEventListener(t,e)})}addHandlerUpdateService(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}renderSpinner(){let e=`<div class="spinner">
            <svg>
              <use href="${t(v)}#icon-loader"></use>
            </svg>
          </div> 
  
          `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let r=` 
       <div class="error">
            <div>
              <svg>
                <use href="${t(v)}.svg#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
        </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e=this._message){let r=` 
       <div class="message">
                    <div>
                      <svg>
                        <use href="${t(v)}.svg#icon-smile"></use>
                      </svg>
                    </div>
                    <p>
                     ${e}
                    </p>
                  </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_generateMarkup(){return` 
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${t(v)}.svg#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${t(v)}.svg#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${t(v)}.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${t(v)}.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${t(v)}.svg#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${t(v)}.svg#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list"> 
          ${this._data.ingredients.map(e=>this._generateMarkupIngredients(e)).join("")}
        </div>

         <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href=${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${t(v)}.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
       `}_generateMarkupIngredients(e){return`  <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${t(v)}.svg#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${e.quantity?t(_)(e.quantity):""}</div>
    <div class="recipe__description">
      <span class="recipe__unit">${e.unit}</span>
      ${e.description}
    </div>
  </li>`}}var b=new w;class k{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#t,e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var $=new k;class E extends y{_parentElement=document.querySelector(".results");_errorMessage="No recipes found in your query! Please try again !";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`  <li class="preview">
            <a class="preview__link ${e.id==t?"preview__link--active":""}" href=${e.id}>
              <figure class="preview__fig">
                <img src="${e.image}" alt="${e.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${e.title}</h4>
                <p class="preview__publisher">${e.publisher}</p>
              </div>
            </a>
          </li> `}}var L=new E;class M extends y{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.result.length/this._data.resultPerPage);return 1===e&&t>1?this._generateMarkupButton(e,!0):e===t&&t>1?this._generateMarkupButton(e,!1):e<t?`
        ${this._generateMarkupButton(e,!0)}
        ${this._generateMarkupButton(e,!1)}
        `:""}_generateMarkupButton(e,r){let n=r?e+1:e-1;return`
    <button data-goto="${n}" class="btn--inline ${r?"pagination__btn--next":"pagination__btn--prev"}">
      <svg class="search__icon">
        <use href="${t(v)}${r?"#icon-arrow-right":"#icon-arrow-left"}"></use>
      </svg>
      <span>Page ${n}</span>
    </button>
  `}}var S=new M;class x extends y{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet . Find your favorite recipe ";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`  <li class="preview">
            <a class="preview__link ${e.id==t?"preview__link--active":""}" href=${e.id}>
              <figure class="preview__fig">
                <img src="${e.image}" alt="${e.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${e.title}</h4>
                <p class="preview__publisher">${e.publisher}</p> 
          
              </div>
            </a>
          </li> `}}var j=new x;class H extends y{_message="Recipe was uploaded successfully!!!";_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow(),this.addHandlerUpload()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var T=new H;let P=async function(){try{let e=window.location.hash.slice(1);if(!e)return;L.update(u()),b.renderSpinner(),await c(e),b.render(s.recipe),j.update(s.bookmarks)}catch(e){alert(e),b.renderError()}},q=async function(){try{L.renderSpinner();let e=$.getQuery();if(!e)return;await l(e),L.render(u()),S.render(s.search)}catch(e){}},O=async function(e){try{T.renderSpinner,await f(e),b.render(s.recipe),T.renderMessage(),j.render(s.bookmarks),window.history.pushState(null,"",`#${s.recipe.id}`),setTimeout(function(){T.toggleWindow()},2500)}catch(e){T.renderError(e.message)}};T.addHandlerUpload(O),j.addHandlerRender(function(){j.render(s.bookmarks)}),b.addHandlerRender(P),b.addHandlerUpdateService(function(e){d(e),b.update(s.recipe)}),$.addHandlerSearch(q),S.addHandlerClick(function(e){L.render(u(e)),S.render(s.search)}),b.addHandlerAddBookmark(function(){s.recipe.bookmarked?g(s.recipe.id):p(s.recipe),b.update(s.recipe),j.render(s.bookmarks)});
//# sourceMappingURL=forkify.1d2976b7.js.map

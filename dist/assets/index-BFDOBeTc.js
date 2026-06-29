(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))b(O);new MutationObserver(O=>{for(const j of O)if(j.type==="childList")for(const an of j.addedNodes)an.tagName==="LINK"&&an.rel==="modulepreload"&&b(an)}).observe(document,{childList:!0,subtree:!0});function _(O){const j={};return O.integrity&&(j.integrity=O.integrity),O.referrerPolicy&&(j.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?j.credentials="include":O.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function b(O){if(O.ep)return;O.ep=!0;const j=_(O);fetch(O.href,j)}})();var id={exports:{}},hr={};var fp;function Ib(){if(fp)return hr;fp=1;var z=Symbol.for("react.transitional.element"),B=Symbol.for("react.fragment");function _(b,O,j){var an=null;if(j!==void 0&&(an=""+j),O.key!==void 0&&(an=""+O.key),"key"in O){j={};for(var gn in O)gn!=="key"&&(j[gn]=O[gn])}else j=O;return O=j.ref,{$$typeof:z,type:b,key:an,ref:O!==void 0?O:null,props:j}}return hr.Fragment=B,hr.jsx=_,hr.jsxs=_,hr}var mp;function Pb(){return mp||(mp=1,id.exports=Ib()),id.exports}var N=Pb(),sd={exports:{}},H={};var yp;function Wb(){if(yp)return H;yp=1;var z=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),an=Symbol.for("react.context"),gn=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),on=Symbol.iterator;function Nn(c){return c===null||typeof c!="object"?null:(c=on&&c[on]||c["@@iterator"],typeof c=="function"?c:null)}var Tn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jn=Object.assign,Da={};function Jn(c,w,S){this.props=c,this.context=w,this.refs=Da,this.updater=S||Tn}Jn.prototype.isReactComponent={},Jn.prototype.setState=function(c,w){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,w,"setState")},Jn.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Ja(){}Ja.prototype=Jn.prototype;function Ln(c,w,S){this.props=c,this.context=w,this.refs=Da,this.updater=S||Tn}var sa=Ln.prototype=new Ja;sa.constructor=Ln,jn(sa,Jn.prototype),sa.isPureReactComponent=!0;var za=Array.isArray;function Un(){}var K={H:null,A:null,T:null,S:null},Fn=Object.prototype.hasOwnProperty;function Ea(c,w,S){var C=S.ref;return{$$typeof:z,type:c,key:w,ref:C!==void 0?C:null,props:S}}function Ye(c,w){return Ea(c.type,w,c.props)}function Sa(c){return typeof c=="object"&&c!==null&&c.$$typeof===z}function Yn(c){var w={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(S){return w[S]})}var ke=/\/+/g;function Ba(c,w){return typeof c=="object"&&c!==null&&c.key!=null?Yn(""+c.key):w.toString(36)}function ya(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(Un,Un):(c.status="pending",c.then(function(w){c.status==="pending"&&(c.status="fulfilled",c.value=w)},function(w){c.status==="pending"&&(c.status="rejected",c.reason=w)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function y(c,w,S,C,U){var G=typeof c;(G==="undefined"||G==="boolean")&&(c=null);var nn=!1;if(c===null)nn=!0;else switch(G){case"bigint":case"string":case"number":nn=!0;break;case"object":switch(c.$$typeof){case z:case B:nn=!0;break;case V:return nn=c._init,y(nn(c._payload),w,S,C,U)}}if(nn)return U=U(c),nn=C===""?"."+Ba(c,0):C,za(U)?(S="",nn!=null&&(S=nn.replace(ke,"$&/")+"/"),y(U,w,S,"",function(At){return At})):U!=null&&(Sa(U)&&(U=Ye(U,S+(U.key==null||c&&c.key===U.key?"":(""+U.key).replace(ke,"$&/")+"/")+nn)),w.push(U)),1;nn=0;var Rn=C===""?".":C+":";if(za(c))for(var yn=0;yn<c.length;yn++)C=c[yn],G=Rn+Ba(C,yn),nn+=y(C,w,S,G,U);else if(yn=Nn(c),typeof yn=="function")for(c=yn.call(c),yn=0;!(C=c.next()).done;)C=C.value,G=Rn+Ba(C,yn++),nn+=y(C,w,S,G,U);else if(G==="object"){if(typeof c.then=="function")return y(ya(c),w,S,C,U);throw w=String(c),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return nn}function E(c,w,S){if(c==null)return c;var C=[],U=0;return y(c,C,"","",function(G){return w.call(S,G,U++)}),C}function R(c){if(c._status===-1){var w=c._result;w=w(),w.then(function(S){(c._status===0||c._status===-1)&&(c._status=1,c._result=S)},function(S){(c._status===0||c._status===-1)&&(c._status=2,c._result=S)}),c._status===-1&&(c._status=0,c._result=w)}if(c._status===1)return c._result.default;throw c._result}var rn=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},cn={map:E,forEach:function(c,w,S){E(c,function(){w.apply(this,arguments)},S)},count:function(c){var w=0;return E(c,function(){w++}),w},toArray:function(c){return E(c,function(w){return w})||[]},only:function(c){if(!Sa(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return H.Activity=D,H.Children=cn,H.Component=Jn,H.Fragment=_,H.Profiler=O,H.PureComponent=Ln,H.StrictMode=b,H.Suspense=T,H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,H.__COMPILER_RUNTIME={__proto__:null,c:function(c){return K.H.useMemoCache(c)}},H.cache=function(c){return function(){return c.apply(null,arguments)}},H.cacheSignal=function(){return null},H.cloneElement=function(c,w,S){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var C=jn({},c.props),U=c.key;if(w!=null)for(G in w.key!==void 0&&(U=""+w.key),w)!Fn.call(w,G)||G==="key"||G==="__self"||G==="__source"||G==="ref"&&w.ref===void 0||(C[G]=w[G]);var G=arguments.length-2;if(G===1)C.children=S;else if(1<G){for(var nn=Array(G),Rn=0;Rn<G;Rn++)nn[Rn]=arguments[Rn+2];C.children=nn}return Ea(c.type,U,C)},H.createContext=function(c){return c={$$typeof:an,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:j,_context:c},c},H.createElement=function(c,w,S){var C,U={},G=null;if(w!=null)for(C in w.key!==void 0&&(G=""+w.key),w)Fn.call(w,C)&&C!=="key"&&C!=="__self"&&C!=="__source"&&(U[C]=w[C]);var nn=arguments.length-2;if(nn===1)U.children=S;else if(1<nn){for(var Rn=Array(nn),yn=0;yn<nn;yn++)Rn[yn]=arguments[yn+2];U.children=Rn}if(c&&c.defaultProps)for(C in nn=c.defaultProps,nn)U[C]===void 0&&(U[C]=nn[C]);return Ea(c,G,U)},H.createRef=function(){return{current:null}},H.forwardRef=function(c){return{$$typeof:gn,render:c}},H.isValidElement=Sa,H.lazy=function(c){return{$$typeof:V,_payload:{_status:-1,_result:c},_init:R}},H.memo=function(c,w){return{$$typeof:k,type:c,compare:w===void 0?null:w}},H.startTransition=function(c){var w=K.T,S={};K.T=S;try{var C=c(),U=K.S;U!==null&&U(S,C),typeof C=="object"&&C!==null&&typeof C.then=="function"&&C.then(Un,rn)}catch(G){rn(G)}finally{w!==null&&S.types!==null&&(w.types=S.types),K.T=w}},H.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},H.use=function(c){return K.H.use(c)},H.useActionState=function(c,w,S){return K.H.useActionState(c,w,S)},H.useCallback=function(c,w){return K.H.useCallback(c,w)},H.useContext=function(c){return K.H.useContext(c)},H.useDebugValue=function(){},H.useDeferredValue=function(c,w){return K.H.useDeferredValue(c,w)},H.useEffect=function(c,w){return K.H.useEffect(c,w)},H.useEffectEvent=function(c){return K.H.useEffectEvent(c)},H.useId=function(){return K.H.useId()},H.useImperativeHandle=function(c,w,S){return K.H.useImperativeHandle(c,w,S)},H.useInsertionEffect=function(c,w){return K.H.useInsertionEffect(c,w)},H.useLayoutEffect=function(c,w){return K.H.useLayoutEffect(c,w)},H.useMemo=function(c,w){return K.H.useMemo(c,w)},H.useOptimistic=function(c,w){return K.H.useOptimistic(c,w)},H.useReducer=function(c,w,S){return K.H.useReducer(c,w,S)},H.useRef=function(c){return K.H.useRef(c)},H.useState=function(c){return K.H.useState(c)},H.useSyncExternalStore=function(c,w,S){return K.H.useSyncExternalStore(c,w,S)},H.useTransition=function(){return K.H.useTransition()},H.version="19.2.7",H}var xp;function ud(){return xp||(xp=1,sd.exports=Wb()),sd.exports}var ka=ud(),dd={exports:{}},wr={},od={exports:{}},cd={};var hp;function ng(){return hp||(hp=1,(function(z){function B(y,E){var R=y.length;y.push(E);n:for(;0<R;){var rn=R-1>>>1,cn=y[rn];if(0<O(cn,E))y[rn]=E,y[R]=cn,R=rn;else break n}}function _(y){return y.length===0?null:y[0]}function b(y){if(y.length===0)return null;var E=y[0],R=y.pop();if(R!==E){y[0]=R;n:for(var rn=0,cn=y.length,c=cn>>>1;rn<c;){var w=2*(rn+1)-1,S=y[w],C=w+1,U=y[C];if(0>O(S,R))C<cn&&0>O(U,S)?(y[rn]=U,y[C]=R,rn=C):(y[rn]=S,y[w]=R,rn=w);else if(C<cn&&0>O(U,R))y[rn]=U,y[C]=R,rn=C;else break n}}return E}function O(y,E){var R=y.sortIndex-E.sortIndex;return R!==0?R:y.id-E.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var j=performance;z.unstable_now=function(){return j.now()}}else{var an=Date,gn=an.now();z.unstable_now=function(){return an.now()-gn}}var T=[],k=[],V=1,D=null,on=3,Nn=!1,Tn=!1,jn=!1,Da=!1,Jn=typeof setTimeout=="function"?setTimeout:null,Ja=typeof clearTimeout=="function"?clearTimeout:null,Ln=typeof setImmediate<"u"?setImmediate:null;function sa(y){for(var E=_(k);E!==null;){if(E.callback===null)b(k);else if(E.startTime<=y)b(k),E.sortIndex=E.expirationTime,B(T,E);else break;E=_(k)}}function za(y){if(jn=!1,sa(y),!Tn)if(_(T)!==null)Tn=!0,Un||(Un=!0,Yn());else{var E=_(k);E!==null&&ya(za,E.startTime-y)}}var Un=!1,K=-1,Fn=5,Ea=-1;function Ye(){return Da?!0:!(z.unstable_now()-Ea<Fn)}function Sa(){if(Da=!1,Un){var y=z.unstable_now();Ea=y;var E=!0;try{n:{Tn=!1,jn&&(jn=!1,Ja(K),K=-1),Nn=!0;var R=on;try{a:{for(sa(y),D=_(T);D!==null&&!(D.expirationTime>y&&Ye());){var rn=D.callback;if(typeof rn=="function"){D.callback=null,on=D.priorityLevel;var cn=rn(D.expirationTime<=y);if(y=z.unstable_now(),typeof cn=="function"){D.callback=cn,sa(y),E=!0;break a}D===_(T)&&b(T),sa(y)}else b(T);D=_(T)}if(D!==null)E=!0;else{var c=_(k);c!==null&&ya(za,c.startTime-y),E=!1}}break n}finally{D=null,on=R,Nn=!1}E=void 0}}finally{E?Yn():Un=!1}}}var Yn;if(typeof Ln=="function")Yn=function(){Ln(Sa)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Ba=ke.port2;ke.port1.onmessage=Sa,Yn=function(){Ba.postMessage(null)}}else Yn=function(){Jn(Sa,0)};function ya(y,E){K=Jn(function(){y(z.unstable_now())},E)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(y){y.callback=null},z.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fn=0<y?Math.floor(1e3/y):5},z.unstable_getCurrentPriorityLevel=function(){return on},z.unstable_next=function(y){switch(on){case 1:case 2:case 3:var E=3;break;default:E=on}var R=on;on=E;try{return y()}finally{on=R}},z.unstable_requestPaint=function(){Da=!0},z.unstable_runWithPriority=function(y,E){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var R=on;on=y;try{return E()}finally{on=R}},z.unstable_scheduleCallback=function(y,E,R){var rn=z.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?rn+R:rn):R=rn,y){case 1:var cn=-1;break;case 2:cn=250;break;case 5:cn=1073741823;break;case 4:cn=1e4;break;default:cn=5e3}return cn=R+cn,y={id:V++,callback:E,priorityLevel:y,startTime:R,expirationTime:cn,sortIndex:-1},R>rn?(y.sortIndex=R,B(k,y),_(T)===null&&y===_(k)&&(jn?(Ja(K),K=-1):jn=!0,ya(za,R-rn))):(y.sortIndex=cn,B(T,y),Tn||Nn||(Tn=!0,Un||(Un=!0,Yn()))),y},z.unstable_shouldYield=Ye,z.unstable_wrapCallback=function(y){var E=on;return function(){var R=on;on=E;try{return y.apply(this,arguments)}finally{on=R}}}})(cd)),cd}var wp;function ag(){return wp||(wp=1,od.exports=ng()),od.exports}var vd={exports:{}},_n={};var kp;function eg(){if(kp)return _n;kp=1;var z=ud();function B(T){var k="https://react.dev/errors/"+T;if(1<arguments.length){k+="?args[]="+encodeURIComponent(arguments[1]);for(var V=2;V<arguments.length;V++)k+="&args[]="+encodeURIComponent(arguments[V])}return"Minified React error #"+T+"; visit "+k+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(){}var b={d:{f:_,r:function(){throw Error(B(522))},D:_,C:_,L:_,m:_,X:_,S:_,M:_},p:0,findDOMNode:null},O=Symbol.for("react.portal");function j(T,k,V){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:D==null?null:""+D,children:T,containerInfo:k,implementation:V}}var an=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function gn(T,k){if(T==="font")return"";if(typeof k=="string")return k==="use-credentials"?k:""}return _n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,_n.createPortal=function(T,k){var V=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!k||k.nodeType!==1&&k.nodeType!==9&&k.nodeType!==11)throw Error(B(299));return j(T,k,null,V)},_n.flushSync=function(T){var k=an.T,V=b.p;try{if(an.T=null,b.p=2,T)return T()}finally{an.T=k,b.p=V,b.d.f()}},_n.preconnect=function(T,k){typeof T=="string"&&(k?(k=k.crossOrigin,k=typeof k=="string"?k==="use-credentials"?k:"":void 0):k=null,b.d.C(T,k))},_n.prefetchDNS=function(T){typeof T=="string"&&b.d.D(T)},_n.preinit=function(T,k){if(typeof T=="string"&&k&&typeof k.as=="string"){var V=k.as,D=gn(V,k.crossOrigin),on=typeof k.integrity=="string"?k.integrity:void 0,Nn=typeof k.fetchPriority=="string"?k.fetchPriority:void 0;V==="style"?b.d.S(T,typeof k.precedence=="string"?k.precedence:void 0,{crossOrigin:D,integrity:on,fetchPriority:Nn}):V==="script"&&b.d.X(T,{crossOrigin:D,integrity:on,fetchPriority:Nn,nonce:typeof k.nonce=="string"?k.nonce:void 0})}},_n.preinitModule=function(T,k){if(typeof T=="string")if(typeof k=="object"&&k!==null){if(k.as==null||k.as==="script"){var V=gn(k.as,k.crossOrigin);b.d.M(T,{crossOrigin:V,integrity:typeof k.integrity=="string"?k.integrity:void 0,nonce:typeof k.nonce=="string"?k.nonce:void 0})}}else k==null&&b.d.M(T)},_n.preload=function(T,k){if(typeof T=="string"&&typeof k=="object"&&k!==null&&typeof k.as=="string"){var V=k.as,D=gn(V,k.crossOrigin);b.d.L(T,V,{crossOrigin:D,integrity:typeof k.integrity=="string"?k.integrity:void 0,nonce:typeof k.nonce=="string"?k.nonce:void 0,type:typeof k.type=="string"?k.type:void 0,fetchPriority:typeof k.fetchPriority=="string"?k.fetchPriority:void 0,referrerPolicy:typeof k.referrerPolicy=="string"?k.referrerPolicy:void 0,imageSrcSet:typeof k.imageSrcSet=="string"?k.imageSrcSet:void 0,imageSizes:typeof k.imageSizes=="string"?k.imageSizes:void 0,media:typeof k.media=="string"?k.media:void 0})}},_n.preloadModule=function(T,k){if(typeof T=="string")if(k){var V=gn(k.as,k.crossOrigin);b.d.m(T,{as:typeof k.as=="string"&&k.as!=="script"?k.as:void 0,crossOrigin:V,integrity:typeof k.integrity=="string"?k.integrity:void 0})}else b.d.m(T)},_n.requestFormReset=function(T){b.d.r(T)},_n.unstable_batchedUpdates=function(T,k){return T(k)},_n.useFormState=function(T,k,V){return an.H.useFormState(T,k,V)},_n.useFormStatus=function(){return an.H.useHostTransitionStatus()},_n.version="19.2.7",_n}var zp;function tg(){if(zp)return vd.exports;zp=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(B){console.error(B)}}return z(),vd.exports=eg(),vd.exports}var Ep;function rg(){if(Ep)return wr;Ep=1;var z=ag(),B=ud(),_=tg();function b(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)a+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function j(n){var a=n,e=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(e=a.return),n=a.return;while(n)}return a.tag===3?e:null}function an(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function gn(n){if(n.tag===31){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function T(n){if(j(n)!==n)throw Error(b(188))}function k(n){var a=n.alternate;if(!a){if(a=j(n),a===null)throw Error(b(188));return a!==n?null:n}for(var e=n,t=a;;){var r=e.return;if(r===null)break;var l=r.alternate;if(l===null){if(t=r.return,t!==null){e=t;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===e)return T(r),n;if(l===t)return T(r),a;l=l.sibling}throw Error(b(188))}if(e.return!==t.return)e=r,t=l;else{for(var i=!1,s=r.child;s;){if(s===e){i=!0,e=r,t=l;break}if(s===t){i=!0,t=r,e=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===e){i=!0,e=l,t=r;break}if(s===t){i=!0,t=l,e=r;break}s=s.sibling}if(!i)throw Error(b(189))}}if(e.alternate!==t)throw Error(b(190))}if(e.tag!==3)throw Error(b(188));return e.stateNode.current===e?n:a}function V(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=V(n),a!==null)return a;n=n.sibling}return null}var D=Object.assign,on=Symbol.for("react.element"),Nn=Symbol.for("react.transitional.element"),Tn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),Da=Symbol.for("react.strict_mode"),Jn=Symbol.for("react.profiler"),Ja=Symbol.for("react.consumer"),Ln=Symbol.for("react.context"),sa=Symbol.for("react.forward_ref"),za=Symbol.for("react.suspense"),Un=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),Ea=Symbol.for("react.activity"),Ye=Symbol.for("react.memo_cache_sentinel"),Sa=Symbol.iterator;function Yn(n){return n===null||typeof n!="object"?null:(n=Sa&&n[Sa]||n["@@iterator"],typeof n=="function"?n:null)}var ke=Symbol.for("react.client.reference");function Ba(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ke?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case jn:return"Fragment";case Jn:return"Profiler";case Da:return"StrictMode";case za:return"Suspense";case Un:return"SuspenseList";case Ea:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case Tn:return"Portal";case Ln:return n.displayName||"Context";case Ja:return(n._context.displayName||"Context")+".Consumer";case sa:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case K:return a=n.displayName||null,a!==null?a:Ba(n.type)||"Memo";case Fn:a=n._payload,n=n._init;try{return Ba(n(a))}catch{}}return null}var ya=Array.isArray,y=B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},rn=[],cn=-1;function c(n){return{current:n}}function w(n){0>cn||(n.current=rn[cn],rn[cn]=null,cn--)}function S(n,a){cn++,rn[cn]=n.current,n.current=a}var C=c(null),U=c(null),G=c(null),nn=c(null);function Rn(n,a){switch(S(G,a),S(U,n),S(C,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?Hv(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=Hv(a),n=Uv(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}w(C),S(C,n)}function yn(){w(C),w(U),w(G)}function At(n){n.memoizedState!==null&&S(nn,n);var a=C.current,e=Uv(a,n.type);a!==e&&(S(U,n),S(C,e))}function Er(n){U.current===n&&(w(C),w(U)),nn.current===n&&(w(nn),fr._currentValue=R)}var Yl,bd;function ze(n){if(Yl===void 0)try{throw Error()}catch(e){var a=e.stack.trim().match(/\n( *(at )?)/);Yl=a&&a[1]||"",bd=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yl+n+bd}var Vl=!1;function Gl(n,a){if(!n||Vl)return"";Vl=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(a){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(f){var g=f}Reflect.construct(n,[],h)}else{try{h.call()}catch(f){g=f}n.call(h.prototype)}}else{try{throw Error()}catch(f){g=f}(h=n())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(f){if(f&&g&&typeof f.stack=="string")return[f.stack,g.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=t.DetermineComponentFrameRoot(),i=l[0],s=l[1];if(i&&s){var d=i.split(`
`),u=s.split(`
`);for(r=t=0;t<d.length&&!d[t].includes("DetermineComponentFrameRoot");)t++;for(;r<u.length&&!u[r].includes("DetermineComponentFrameRoot");)r++;if(t===d.length||r===u.length)for(t=d.length-1,r=u.length-1;1<=t&&0<=r&&d[t]!==u[r];)r--;for(;1<=t&&0<=r;t--,r--)if(d[t]!==u[r]){if(t!==1||r!==1)do if(t--,r--,0>r||d[t]!==u[r]){var m=`
`+d[t].replace(" at new "," at ");return n.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",n.displayName)),m}while(1<=t&&0<=r);break}}}finally{Vl=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?ze(e):""}function Cp(n,a){switch(n.tag){case 26:case 27:case 5:return ze(n.type);case 16:return ze("Lazy");case 13:return n.child!==a&&a!==null?ze("Suspense Fallback"):ze("Suspense");case 19:return ze("SuspenseList");case 0:case 15:return Gl(n.type,!1);case 11:return Gl(n.type.render,!1);case 1:return Gl(n.type,!0);case 31:return ze("Activity");default:return""}}function gd(n){try{var a="",e=null;do a+=Cp(n,e),e=n,n=n.return;while(n);return a}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var Xl=Object.prototype.hasOwnProperty,Ql=z.unstable_scheduleCallback,Zl=z.unstable_cancelCallback,Mp=z.unstable_shouldYield,Dp=z.unstable_requestPaint,In=z.unstable_now,Bp=z.unstable_getCurrentPriorityLevel,fd=z.unstable_ImmediatePriority,md=z.unstable_UserBlockingPriority,Sr=z.unstable_NormalPriority,Op=z.unstable_LowPriority,yd=z.unstable_IdlePriority,qp=z.log,Np=z.unstable_setDisableYieldValue,Ct=null,Pn=null;function Ia(n){if(typeof qp=="function"&&Np(n),Pn&&typeof Pn.setStrictMode=="function")try{Pn.setStrictMode(Ct,n)}catch{}}var Wn=Math.clz32?Math.clz32:jp,Lp=Math.log,_p=Math.LN2;function jp(n){return n>>>=0,n===0?32:31-(Lp(n)/_p|0)|0}var Tr=256,Ar=262144,Cr=4194304;function Ee(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Mr(n,a,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,l=n.suspendedLanes,i=n.pingedLanes;n=n.warmLanes;var s=t&134217727;return s!==0?(t=s&~l,t!==0?r=Ee(t):(i&=s,i!==0?r=Ee(i):e||(e=s&~n,e!==0&&(r=Ee(e))))):(s=t&~l,s!==0?r=Ee(s):i!==0?r=Ee(i):e||(e=t&~n,e!==0&&(r=Ee(e)))),r===0?0:a!==0&&a!==r&&(a&l)===0&&(l=r&-r,e=a&-a,l>=e||l===32&&(e&4194048)!==0)?a:r}function Mt(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function Rp(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xd(){var n=Cr;return Cr<<=1,(Cr&62914560)===0&&(Cr=4194304),n}function $l(n){for(var a=[],e=0;31>e;e++)a.push(n);return a}function Dt(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Hp(n,a,e,t,r,l){var i=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var s=n.entanglements,d=n.expirationTimes,u=n.hiddenUpdates;for(e=i&~e;0<e;){var m=31-Wn(e),h=1<<m;s[m]=0,d[m]=-1;var g=u[m];if(g!==null)for(u[m]=null,m=0;m<g.length;m++){var f=g[m];f!==null&&(f.lane&=-536870913)}e&=~h}t!==0&&hd(n,t,0),l!==0&&r===0&&n.tag!==0&&(n.suspendedLanes|=l&~(i&~a))}function hd(n,a,e){n.pendingLanes|=a,n.suspendedLanes&=~a;var t=31-Wn(a);n.entangledLanes|=a,n.entanglements[t]=n.entanglements[t]|1073741824|e&261930}function wd(n,a){var e=n.entangledLanes|=a;for(n=n.entanglements;e;){var t=31-Wn(e),r=1<<t;r&a|n[t]&a&&(n[t]|=a),e&=~r}}function kd(n,a){var e=a&-a;return e=(e&42)!==0?1:Kl(e),(e&(n.suspendedLanes|a))!==0?0:e}function Kl(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Jl(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function zd(){var n=E.p;return n!==0?n:(n=window.event,n===void 0?32:op(n.type))}function Ed(n,a){var e=E.p;try{return E.p=n,a()}finally{E.p=e}}var Pa=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Pa,Vn="__reactProps$"+Pa,Ve="__reactContainer$"+Pa,Il="__reactEvents$"+Pa,Up="__reactListeners$"+Pa,Fp="__reactHandles$"+Pa,Sd="__reactResources$"+Pa,Bt="__reactMarker$"+Pa;function Pl(n){delete n[Mn],delete n[Vn],delete n[Il],delete n[Up],delete n[Fp]}function Ge(n){var a=n[Mn];if(a)return a;for(var e=n.parentNode;e;){if(a=e[Ve]||e[Mn]){if(e=a.alternate,a.child!==null||e!==null&&e.child!==null)for(n=Zv(n);n!==null;){if(e=n[Mn])return e;n=Zv(n)}return a}n=e,e=n.parentNode}return null}function Xe(n){if(n=n[Mn]||n[Ve]){var a=n.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return n}return null}function Ot(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(b(33))}function Qe(n){var a=n[Sd];return a||(a=n[Sd]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function An(n){n[Bt]=!0}var Td=new Set,Ad={};function Se(n,a){Ze(n,a),Ze(n+"Capture",a)}function Ze(n,a){for(Ad[n]=a,n=0;n<a.length;n++)Td.add(a[n])}var Yp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cd={},Md={};function Vp(n){return Xl.call(Md,n)?!0:Xl.call(Cd,n)?!1:Yp.test(n)?Md[n]=!0:(Cd[n]=!0,!1)}function Dr(n,a,e){if(Vp(a))if(e===null)n.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var t=a.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+e)}}function Br(n,a,e){if(e===null)n.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+e)}}function Oa(n,a,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(a,e,""+t)}}function da(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Dd(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Gp(n,a,e){var t=Object.getOwnPropertyDescriptor(n.constructor.prototype,a);if(!n.hasOwnProperty(a)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,l=t.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return r.call(this)},set:function(i){e=""+i,l.call(this,i)}}),Object.defineProperty(n,a,{enumerable:t.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Wl(n){if(!n._valueTracker){var a=Dd(n)?"checked":"value";n._valueTracker=Gp(n,a,""+n[a])}}function Bd(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var e=a.getValue(),t="";return n&&(t=Dd(n)?n.checked?"true":"false":n.value),n=t,n!==e?(a.setValue(n),!0):!1}function Or(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Xp=/[\n"\\]/g;function oa(n){return n.replace(Xp,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function ni(n,a,e,t,r,l,i,s){n.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?n.type=i:n.removeAttribute("type"),a!=null?i==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+da(a)):n.value!==""+da(a)&&(n.value=""+da(a)):i!=="submit"&&i!=="reset"||n.removeAttribute("value"),a!=null?ai(n,i,da(a)):e!=null?ai(n,i,da(e)):t!=null&&n.removeAttribute("value"),r==null&&l!=null&&(n.defaultChecked=!!l),r!=null&&(n.checked=r&&typeof r!="function"&&typeof r!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.name=""+da(s):n.removeAttribute("name")}function Od(n,a,e,t,r,l,i,s){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),a!=null||e!=null){if(!(l!=="submit"&&l!=="reset"||a!=null)){Wl(n);return}e=e!=null?""+da(e):"",a=a!=null?""+da(a):e,s||a===n.value||(n.value=a),n.defaultValue=a}t=t??r,t=typeof t!="function"&&typeof t!="symbol"&&!!t,n.checked=s?n.checked:!!t,n.defaultChecked=!!t,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.name=i),Wl(n)}function ai(n,a,e){a==="number"&&Or(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function $e(n,a,e,t){if(n=n.options,a){a={};for(var r=0;r<e.length;r++)a["$"+e[r]]=!0;for(e=0;e<n.length;e++)r=a.hasOwnProperty("$"+n[e].value),n[e].selected!==r&&(n[e].selected=r),r&&t&&(n[e].defaultSelected=!0)}else{for(e=""+da(e),a=null,r=0;r<n.length;r++){if(n[r].value===e){n[r].selected=!0,t&&(n[r].defaultSelected=!0);return}a!==null||n[r].disabled||(a=n[r])}a!==null&&(a.selected=!0)}}function qd(n,a,e){if(a!=null&&(a=""+da(a),a!==n.value&&(n.value=a),e==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=e!=null?""+da(e):""}function Nd(n,a,e,t){if(a==null){if(t!=null){if(e!=null)throw Error(b(92));if(ya(t)){if(1<t.length)throw Error(b(93));t=t[0]}e=t}e==null&&(e=""),a=e}e=da(a),n.defaultValue=e,t=n.textContent,t===e&&t!==""&&t!==null&&(n.value=t),Wl(n)}function Ke(n,a){if(a){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=a;return}}n.textContent=a}var Qp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ld(n,a,e){var t=a.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?t?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":t?n.setProperty(a,e):typeof e!="number"||e===0||Qp.has(a)?a==="float"?n.cssFloat=e:n[a]=(""+e).trim():n[a]=e+"px"}function _d(n,a,e){if(a!=null&&typeof a!="object")throw Error(b(62));if(n=n.style,e!=null){for(var t in e)!e.hasOwnProperty(t)||a!=null&&a.hasOwnProperty(t)||(t.indexOf("--")===0?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="");for(var r in a)t=a[r],a.hasOwnProperty(r)&&e[r]!==t&&Ld(n,r,t)}else for(var l in a)a.hasOwnProperty(l)&&Ld(n,l,a[l])}function ei(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$p=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qr(n){return $p.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function qa(){}var ti=null;function ri(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Je=null,Ie=null;function jd(n){var a=Xe(n);if(a&&(n=a.stateNode)){var e=n[Vn]||null;n:switch(n=a.stateNode,a.type){case"input":if(ni(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),a=e.name,e.type==="radio"&&a!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+oa(""+a)+'"][type="radio"]'),a=0;a<e.length;a++){var t=e[a];if(t!==n&&t.form===n.form){var r=t[Vn]||null;if(!r)throw Error(b(90));ni(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(a=0;a<e.length;a++)t=e[a],t.form===n.form&&Bd(t)}break n;case"textarea":qd(n,e.value,e.defaultValue);break n;case"select":a=e.value,a!=null&&$e(n,!!e.multiple,a,!1)}}}var li=!1;function Rd(n,a,e){if(li)return n(a,e);li=!0;try{var t=n(a);return t}finally{if(li=!1,(Je!==null||Ie!==null)&&(hl(),Je&&(a=Je,n=Ie,Ie=Je=null,jd(a),n)))for(a=0;a<n.length;a++)jd(n[a])}}function qt(n,a){var e=n.stateNode;if(e===null)return null;var t=e[Vn]||null;if(t===null)return null;e=t[a];n:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(b(231,a,typeof e));return e}var Na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ii=!1;if(Na)try{var Nt={};Object.defineProperty(Nt,"passive",{get:function(){ii=!0}}),window.addEventListener("test",Nt,Nt),window.removeEventListener("test",Nt,Nt)}catch{ii=!1}var Wa=null,si=null,Nr=null;function Hd(){if(Nr)return Nr;var n,a=si,e=a.length,t,r="value"in Wa?Wa.value:Wa.textContent,l=r.length;for(n=0;n<e&&a[n]===r[n];n++);var i=e-n;for(t=1;t<=i&&a[e-t]===r[l-t];t++);return Nr=r.slice(n,1<t?1-t:void 0)}function Lr(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function _r(){return!0}function Ud(){return!1}function Gn(n){function a(e,t,r,l,i){this._reactName=e,this._targetInst=r,this.type=t,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in n)n.hasOwnProperty(s)&&(e=n[s],this[s]=e?e(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?_r:Ud,this.isPropagationStopped=Ud,this}return D(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),a}var Te={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jr=Gn(Te),Lt=D({},Te,{view:0,detail:0}),Kp=Gn(Lt),di,oi,_t,Rr=D({},Lt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vi,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_t&&(_t&&n.type==="mousemove"?(di=n.screenX-_t.screenX,oi=n.screenY-_t.screenY):oi=di=0,_t=n),di)},movementY:function(n){return"movementY"in n?n.movementY:oi}}),Fd=Gn(Rr),Jp=D({},Rr,{dataTransfer:0}),Ip=Gn(Jp),Pp=D({},Lt,{relatedTarget:0}),ci=Gn(Pp),Wp=D({},Te,{animationName:0,elapsedTime:0,pseudoElement:0}),nu=Gn(Wp),au=D({},Te,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),eu=Gn(au),tu=D({},Te,{data:0}),Yd=Gn(tu),ru={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function su(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=iu[n])?!!a[n]:!1}function vi(){return su}var du=D({},Lt,{key:function(n){if(n.key){var a=ru[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Lr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lu[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vi,charCode:function(n){return n.type==="keypress"?Lr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Lr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ou=Gn(du),cu=D({},Rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=Gn(cu),vu=D({},Lt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vi}),pu=Gn(vu),uu=D({},Te,{propertyName:0,elapsedTime:0,pseudoElement:0}),bu=Gn(uu),gu=D({},Rr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),fu=Gn(gu),mu=D({},Te,{newState:0,oldState:0}),yu=Gn(mu),xu=[9,13,27,32],pi=Na&&"CompositionEvent"in window,jt=null;Na&&"documentMode"in document&&(jt=document.documentMode);var hu=Na&&"TextEvent"in window&&!jt,Gd=Na&&(!pi||jt&&8<jt&&11>=jt),Xd=" ",Qd=!1;function Zd(n,a){switch(n){case"keyup":return xu.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Pe=!1;function wu(n,a){switch(n){case"compositionend":return $d(a);case"keypress":return a.which!==32?null:(Qd=!0,Xd);case"textInput":return n=a.data,n===Xd&&Qd?null:n;default:return null}}function ku(n,a){if(Pe)return n==="compositionend"||!pi&&Zd(n,a)?(n=Hd(),Nr=si=Wa=null,Pe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Gd&&a.locale!=="ko"?null:a.data;default:return null}}var zu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!zu[n.type]:a==="textarea"}function Jd(n,a,e,t){Je?Ie?Ie.push(t):Ie=[t]:Je=t,a=Al(a,"onChange"),0<a.length&&(e=new jr("onChange","change",null,e,t),n.push({event:e,listeners:a}))}var Rt=null,Ht=null;function Eu(n){qv(n,0)}function Hr(n){var a=Ot(n);if(Bd(a))return n}function Id(n,a){if(n==="change")return a}var Pd=!1;if(Na){var ui;if(Na){var bi="oninput"in document;if(!bi){var Wd=document.createElement("div");Wd.setAttribute("oninput","return;"),bi=typeof Wd.oninput=="function"}ui=bi}else ui=!1;Pd=ui&&(!document.documentMode||9<document.documentMode)}function no(){Rt&&(Rt.detachEvent("onpropertychange",ao),Ht=Rt=null)}function ao(n){if(n.propertyName==="value"&&Hr(Ht)){var a=[];Jd(a,Ht,n,ri(n)),Rd(Eu,a)}}function Su(n,a,e){n==="focusin"?(no(),Rt=a,Ht=e,Rt.attachEvent("onpropertychange",ao)):n==="focusout"&&no()}function Tu(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Hr(Ht)}function Au(n,a){if(n==="click")return Hr(a)}function Cu(n,a){if(n==="input"||n==="change")return Hr(a)}function Mu(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var na=typeof Object.is=="function"?Object.is:Mu;function Ut(n,a){if(na(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var e=Object.keys(n),t=Object.keys(a);if(e.length!==t.length)return!1;for(t=0;t<e.length;t++){var r=e[t];if(!Xl.call(a,r)||!na(n[r],a[r]))return!1}return!0}function eo(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function to(n,a){var e=eo(n);n=0;for(var t;e;){if(e.nodeType===3){if(t=n+e.textContent.length,n<=a&&t>=a)return{node:e,offset:a-n};n=t}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=eo(e)}}function ro(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?ro(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function lo(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Or(n.document);a instanceof n.HTMLIFrameElement;){try{var e=typeof a.contentWindow.location.href=="string"}catch{e=!1}if(e)n=a.contentWindow;else break;a=Or(n.document)}return a}function gi(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var Du=Na&&"documentMode"in document&&11>=document.documentMode,We=null,fi=null,Ft=null,mi=!1;function io(n,a,e){var t=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;mi||We==null||We!==Or(t)||(t=We,"selectionStart"in t&&gi(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Ft&&Ut(Ft,t)||(Ft=t,t=Al(fi,"onSelect"),0<t.length&&(a=new jr("onSelect","select",null,a,e),n.push({event:a,listeners:t}),a.target=We)))}function Ae(n,a){var e={};return e[n.toLowerCase()]=a.toLowerCase(),e["Webkit"+n]="webkit"+a,e["Moz"+n]="moz"+a,e}var nt={animationend:Ae("Animation","AnimationEnd"),animationiteration:Ae("Animation","AnimationIteration"),animationstart:Ae("Animation","AnimationStart"),transitionrun:Ae("Transition","TransitionRun"),transitionstart:Ae("Transition","TransitionStart"),transitioncancel:Ae("Transition","TransitionCancel"),transitionend:Ae("Transition","TransitionEnd")},yi={},so={};Na&&(so=document.createElement("div").style,"AnimationEvent"in window||(delete nt.animationend.animation,delete nt.animationiteration.animation,delete nt.animationstart.animation),"TransitionEvent"in window||delete nt.transitionend.transition);function Ce(n){if(yi[n])return yi[n];if(!nt[n])return n;var a=nt[n],e;for(e in a)if(a.hasOwnProperty(e)&&e in so)return yi[n]=a[e];return n}var oo=Ce("animationend"),co=Ce("animationiteration"),vo=Ce("animationstart"),Bu=Ce("transitionrun"),Ou=Ce("transitionstart"),qu=Ce("transitioncancel"),po=Ce("transitionend"),uo=new Map,xi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xi.push("scrollEnd");function xa(n,a){uo.set(n,a),Se(a,[n])}var Ur=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},ca=[],at=0,hi=0;function Fr(){for(var n=at,a=hi=at=0;a<n;){var e=ca[a];ca[a++]=null;var t=ca[a];ca[a++]=null;var r=ca[a];ca[a++]=null;var l=ca[a];if(ca[a++]=null,t!==null&&r!==null){var i=t.pending;i===null?r.next=r:(r.next=i.next,i.next=r),t.pending=r}l!==0&&bo(e,r,l)}}function Yr(n,a,e,t){ca[at++]=n,ca[at++]=a,ca[at++]=e,ca[at++]=t,hi|=t,n.lanes|=t,n=n.alternate,n!==null&&(n.lanes|=t)}function wi(n,a,e,t){return Yr(n,a,e,t),Vr(n)}function Me(n,a){return Yr(n,null,null,a),Vr(n)}function bo(n,a,e){n.lanes|=e;var t=n.alternate;t!==null&&(t.lanes|=e);for(var r=!1,l=n.return;l!==null;)l.childLanes|=e,t=l.alternate,t!==null&&(t.childLanes|=e),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(r=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,r&&a!==null&&(r=31-Wn(e),n=l.hiddenUpdates,t=n[r],t===null?n[r]=[a]:t.push(a),a.lane=e|536870912),l):null}function Vr(n){if(50<or)throw or=0,Ds=null,Error(b(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var et={};function Nu(n,a,e,t){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function aa(n,a,e,t){return new Nu(n,a,e,t)}function ki(n){return n=n.prototype,!(!n||!n.isReactComponent)}function La(n,a){var e=n.alternate;return e===null?(e=aa(n.tag,a,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=a,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&65011712,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function go(n,a){n.flags&=65011714;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function Gr(n,a,e,t,r,l){var i=0;if(t=n,typeof n=="function")ki(n)&&(i=1);else if(typeof n=="string")i=Hb(n,e,C.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Ea:return n=aa(31,e,a,r),n.elementType=Ea,n.lanes=l,n;case jn:return De(e.children,r,l,a);case Da:i=8,r|=24;break;case Jn:return n=aa(12,e,a,r|2),n.elementType=Jn,n.lanes=l,n;case za:return n=aa(13,e,a,r),n.elementType=za,n.lanes=l,n;case Un:return n=aa(19,e,a,r),n.elementType=Un,n.lanes=l,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ln:i=10;break n;case Ja:i=9;break n;case sa:i=11;break n;case K:i=14;break n;case Fn:i=16,t=null;break n}i=29,e=Error(b(130,n===null?"null":typeof n,"")),t=null}return a=aa(i,e,a,r),a.elementType=n,a.type=t,a.lanes=l,a}function De(n,a,e,t){return n=aa(7,n,t,a),n.lanes=e,n}function zi(n,a,e){return n=aa(6,n,null,a),n.lanes=e,n}function fo(n){var a=aa(18,null,null,0);return a.stateNode=n,a}function Ei(n,a,e){return a=aa(4,n.children!==null?n.children:[],n.key,a),a.lanes=e,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var mo=new WeakMap;function va(n,a){if(typeof n=="object"&&n!==null){var e=mo.get(n);return e!==void 0?e:(a={value:n,source:a,stack:gd(a)},mo.set(n,a),a)}return{value:n,source:a,stack:gd(a)}}var tt=[],rt=0,Xr=null,Yt=0,pa=[],ua=0,ne=null,Ta=1,Aa="";function _a(n,a){tt[rt++]=Yt,tt[rt++]=Xr,Xr=n,Yt=a}function yo(n,a,e){pa[ua++]=Ta,pa[ua++]=Aa,pa[ua++]=ne,ne=n;var t=Ta;n=Aa;var r=32-Wn(t)-1;t&=~(1<<r),e+=1;var l=32-Wn(a)+r;if(30<l){var i=r-r%5;l=(t&(1<<i)-1).toString(32),t>>=i,r-=i,Ta=1<<32-Wn(a)+r|e<<r|t,Aa=l+n}else Ta=1<<l|e<<r|t,Aa=n}function Si(n){n.return!==null&&(_a(n,1),yo(n,1,0))}function Ti(n){for(;n===Xr;)Xr=tt[--rt],tt[rt]=null,Yt=tt[--rt],tt[rt]=null;for(;n===ne;)ne=pa[--ua],pa[ua]=null,Aa=pa[--ua],pa[ua]=null,Ta=pa[--ua],pa[ua]=null}function xo(n,a){pa[ua++]=Ta,pa[ua++]=Aa,pa[ua++]=ne,Ta=a.id,Aa=a.overflow,ne=n}var Dn=null,pn=null,J=!1,ae=null,ba=!1,Ai=Error(b(519));function ee(n){var a=Error(b(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vt(va(a,n)),Ai}function ho(n){var a=n.stateNode,e=n.type,t=n.memoizedProps;switch(a[Mn]=n,a[Vn]=t,e){case"dialog":Q("cancel",a),Q("close",a);break;case"iframe":case"object":case"embed":Q("load",a);break;case"video":case"audio":for(e=0;e<vr.length;e++)Q(vr[e],a);break;case"source":Q("error",a);break;case"img":case"image":case"link":Q("error",a),Q("load",a);break;case"details":Q("toggle",a);break;case"input":Q("invalid",a),Od(a,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":Q("invalid",a);break;case"textarea":Q("invalid",a),Nd(a,t.value,t.defaultValue,t.children)}e=t.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||a.textContent===""+e||t.suppressHydrationWarning===!0||jv(a.textContent,e)?(t.popover!=null&&(Q("beforetoggle",a),Q("toggle",a)),t.onScroll!=null&&Q("scroll",a),t.onScrollEnd!=null&&Q("scrollend",a),t.onClick!=null&&(a.onclick=qa),a=!0):a=!1,a||ee(n,!0)}function wo(n){for(Dn=n.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:ba=!1;return;case 27:case 3:ba=!0;return;default:Dn=Dn.return}}function lt(n){if(n!==Dn)return!1;if(!J)return wo(n),J=!0,!1;var a=n.tag,e;if((e=a!==3&&a!==27)&&((e=a===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||Xs(n.type,n.memoizedProps)),e=!e),e&&pn&&ee(n),wo(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(b(317));pn=Qv(n)}else if(a===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(b(317));pn=Qv(n)}else a===27?(a=pn,fe(n.type)?(n=Js,Js=null,pn=n):pn=a):pn=Dn?fa(n.stateNode.nextSibling):null;return!0}function Be(){pn=Dn=null,J=!1}function Ci(){var n=ae;return n!==null&&($n===null?$n=n:$n.push.apply($n,n),ae=null),n}function Vt(n){ae===null?ae=[n]:ae.push(n)}var Mi=c(null),Oe=null,ja=null;function te(n,a,e){S(Mi,a._currentValue),a._currentValue=e}function Ra(n){n._currentValue=Mi.current,w(Mi)}function Di(n,a,e){for(;n!==null;){var t=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,t!==null&&(t.childLanes|=a)):t!==null&&(t.childLanes&a)!==a&&(t.childLanes|=a),n===e)break;n=n.return}}function Bi(n,a,e,t){var r=n.child;for(r!==null&&(r.return=n);r!==null;){var l=r.dependencies;if(l!==null){var i=r.child;l=l.firstContext;n:for(;l!==null;){var s=l;l=r;for(var d=0;d<a.length;d++)if(s.context===a[d]){l.lanes|=e,s=l.alternate,s!==null&&(s.lanes|=e),Di(l.return,e,n),t||(i=null);break n}l=s.next}}else if(r.tag===18){if(i=r.return,i===null)throw Error(b(341));i.lanes|=e,l=i.alternate,l!==null&&(l.lanes|=e),Di(i,e,n),i=null}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===n){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}}function it(n,a,e,t){n=null;for(var r=a,l=!1;r!==null;){if(!l){if((r.flags&524288)!==0)l=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var i=r.alternate;if(i===null)throw Error(b(387));if(i=i.memoizedProps,i!==null){var s=r.type;na(r.pendingProps.value,i.value)||(n!==null?n.push(s):n=[s])}}else if(r===nn.current){if(i=r.alternate,i===null)throw Error(b(387));i.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(n!==null?n.push(fr):n=[fr])}r=r.return}n!==null&&Bi(a,n,e,t),a.flags|=262144}function Qr(n){for(n=n.firstContext;n!==null;){if(!na(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function qe(n){Oe=n,ja=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Bn(n){return ko(Oe,n)}function Zr(n,a){return Oe===null&&qe(n),ko(n,a)}function ko(n,a){var e=a._currentValue;if(a={context:a,memoizedValue:e,next:null},ja===null){if(n===null)throw Error(b(308));ja=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else ja=ja.next=a;return e}var Lu=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(e,t){n.push(t)}};this.abort=function(){a.aborted=!0,n.forEach(function(e){return e()})}},_u=z.unstable_scheduleCallback,ju=z.unstable_NormalPriority,wn={$$typeof:Ln,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oi(){return{controller:new Lu,data:new Map,refCount:0}}function Gt(n){n.refCount--,n.refCount===0&&_u(ju,function(){n.controller.abort()})}var Xt=null,qi=0,st=0,dt=null;function Ru(n,a){if(Xt===null){var e=Xt=[];qi=0,st=_s(),dt={status:"pending",value:void 0,then:function(t){e.push(t)}}}return qi++,a.then(zo,zo),a}function zo(){if(--qi===0&&Xt!==null){dt!==null&&(dt.status="fulfilled");var n=Xt;Xt=null,st=0,dt=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function Hu(n,a){var e=[],t={status:"pending",value:null,reason:null,then:function(r){e.push(r)}};return n.then(function(){t.status="fulfilled",t.value=a;for(var r=0;r<e.length;r++)(0,e[r])(a)},function(r){for(t.status="rejected",t.reason=r,r=0;r<e.length;r++)(0,e[r])(void 0)}),t}var Eo=y.S;y.S=function(n,a){sv=In(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Ru(n,a),Eo!==null&&Eo(n,a)};var Ne=c(null);function Ni(){var n=Ne.current;return n!==null?n:vn.pooledCache}function $r(n,a){a===null?S(Ne,Ne.current):S(Ne,a.pool)}function So(){var n=Ni();return n===null?null:{parent:wn._currentValue,pool:n}}var ot=Error(b(460)),Li=Error(b(474)),Kr=Error(b(542)),Jr={then:function(){}};function To(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ao(n,a,e){switch(e=n[e],e===void 0?n.push(a):e!==a&&(a.then(qa,qa),a=e),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Mo(n),n;default:if(typeof a.status=="string")a.then(qa,qa);else{if(n=vn,n!==null&&100<n.shellSuspendCounter)throw Error(b(482));n=a,n.status="pending",n.then(function(t){if(a.status==="pending"){var r=a;r.status="fulfilled",r.value=t}},function(t){if(a.status==="pending"){var r=a;r.status="rejected",r.reason=t}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Mo(n),n}throw _e=a,ot}}function Le(n){try{var a=n._init;return a(n._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(_e=e,ot):e}}var _e=null;function Co(){if(_e===null)throw Error(b(459));var n=_e;return _e=null,n}function Mo(n){if(n===ot||n===Kr)throw Error(b(483))}var ct=null,Qt=0;function Ir(n){var a=Qt;return Qt+=1,ct===null&&(ct=[]),Ao(ct,n,a)}function Zt(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function Pr(n,a){throw a.$$typeof===on?Error(b(525)):(n=Object.prototype.toString.call(a),Error(b(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function Do(n){function a(v,o){if(n){var p=v.deletions;p===null?(v.deletions=[o],v.flags|=16):p.push(o)}}function e(v,o){if(!n)return null;for(;o!==null;)a(v,o),o=o.sibling;return null}function t(v){for(var o=new Map;v!==null;)v.key!==null?o.set(v.key,v):o.set(v.index,v),v=v.sibling;return o}function r(v,o){return v=La(v,o),v.index=0,v.sibling=null,v}function l(v,o,p){return v.index=p,n?(p=v.alternate,p!==null?(p=p.index,p<o?(v.flags|=67108866,o):p):(v.flags|=67108866,o)):(v.flags|=1048576,o)}function i(v){return n&&v.alternate===null&&(v.flags|=67108866),v}function s(v,o,p,x){return o===null||o.tag!==6?(o=zi(p,v.mode,x),o.return=v,o):(o=r(o,p),o.return=v,o)}function d(v,o,p,x){var q=p.type;return q===jn?m(v,o,p.props.children,x,p.key):o!==null&&(o.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Fn&&Le(q)===o.type)?(o=r(o,p.props),Zt(o,p),o.return=v,o):(o=Gr(p.type,p.key,p.props,null,v.mode,x),Zt(o,p),o.return=v,o)}function u(v,o,p,x){return o===null||o.tag!==4||o.stateNode.containerInfo!==p.containerInfo||o.stateNode.implementation!==p.implementation?(o=Ei(p,v.mode,x),o.return=v,o):(o=r(o,p.children||[]),o.return=v,o)}function m(v,o,p,x,q){return o===null||o.tag!==7?(o=De(p,v.mode,x,q),o.return=v,o):(o=r(o,p),o.return=v,o)}function h(v,o,p){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=zi(""+o,v.mode,p),o.return=v,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Nn:return p=Gr(o.type,o.key,o.props,null,v.mode,p),Zt(p,o),p.return=v,p;case Tn:return o=Ei(o,v.mode,p),o.return=v,o;case Fn:return o=Le(o),h(v,o,p)}if(ya(o)||Yn(o))return o=De(o,v.mode,p,null),o.return=v,o;if(typeof o.then=="function")return h(v,Ir(o),p);if(o.$$typeof===Ln)return h(v,Zr(v,o),p);Pr(v,o)}return null}function g(v,o,p,x){var q=o!==null?o.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return q!==null?null:s(v,o,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Nn:return p.key===q?d(v,o,p,x):null;case Tn:return p.key===q?u(v,o,p,x):null;case Fn:return p=Le(p),g(v,o,p,x)}if(ya(p)||Yn(p))return q!==null?null:m(v,o,p,x,null);if(typeof p.then=="function")return g(v,o,Ir(p),x);if(p.$$typeof===Ln)return g(v,o,Zr(v,p),x);Pr(v,p)}return null}function f(v,o,p,x,q){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return v=v.get(p)||null,s(o,v,""+x,q);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Nn:return v=v.get(x.key===null?p:x.key)||null,d(o,v,x,q);case Tn:return v=v.get(x.key===null?p:x.key)||null,u(o,v,x,q);case Fn:return x=Le(x),f(v,o,p,x,q)}if(ya(x)||Yn(x))return v=v.get(p)||null,m(o,v,x,q,null);if(typeof x.then=="function")return f(v,o,p,Ir(x),q);if(x.$$typeof===Ln)return f(v,o,p,Zr(o,x),q);Pr(o,x)}return null}function A(v,o,p,x){for(var q=null,I=null,M=o,Y=o=0,$=null;M!==null&&Y<p.length;Y++){M.index>Y?($=M,M=null):$=M.sibling;var P=g(v,M,p[Y],x);if(P===null){M===null&&(M=$);break}n&&M&&P.alternate===null&&a(v,M),o=l(P,o,Y),I===null?q=P:I.sibling=P,I=P,M=$}if(Y===p.length)return e(v,M),J&&_a(v,Y),q;if(M===null){for(;Y<p.length;Y++)M=h(v,p[Y],x),M!==null&&(o=l(M,o,Y),I===null?q=M:I.sibling=M,I=M);return J&&_a(v,Y),q}for(M=t(M);Y<p.length;Y++)$=f(M,v,Y,p[Y],x),$!==null&&(n&&$.alternate!==null&&M.delete($.key===null?Y:$.key),o=l($,o,Y),I===null?q=$:I.sibling=$,I=$);return n&&M.forEach(function(we){return a(v,we)}),J&&_a(v,Y),q}function L(v,o,p,x){if(p==null)throw Error(b(151));for(var q=null,I=null,M=o,Y=o=0,$=null,P=p.next();M!==null&&!P.done;Y++,P=p.next()){M.index>Y?($=M,M=null):$=M.sibling;var we=g(v,M,P.value,x);if(we===null){M===null&&(M=$);break}n&&M&&we.alternate===null&&a(v,M),o=l(we,o,Y),I===null?q=we:I.sibling=we,I=we,M=$}if(P.done)return e(v,M),J&&_a(v,Y),q;if(M===null){for(;!P.done;Y++,P=p.next())P=h(v,P.value,x),P!==null&&(o=l(P,o,Y),I===null?q=P:I.sibling=P,I=P);return J&&_a(v,Y),q}for(M=t(M);!P.done;Y++,P=p.next())P=f(M,v,Y,P.value,x),P!==null&&(n&&P.alternate!==null&&M.delete(P.key===null?Y:P.key),o=l(P,o,Y),I===null?q=P:I.sibling=P,I=P);return n&&M.forEach(function(Jb){return a(v,Jb)}),J&&_a(v,Y),q}function dn(v,o,p,x){if(typeof p=="object"&&p!==null&&p.type===jn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Nn:n:{for(var q=p.key;o!==null;){if(o.key===q){if(q=p.type,q===jn){if(o.tag===7){e(v,o.sibling),x=r(o,p.props.children),x.return=v,v=x;break n}}else if(o.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Fn&&Le(q)===o.type){e(v,o.sibling),x=r(o,p.props),Zt(x,p),x.return=v,v=x;break n}e(v,o);break}else a(v,o);o=o.sibling}p.type===jn?(x=De(p.props.children,v.mode,x,p.key),x.return=v,v=x):(x=Gr(p.type,p.key,p.props,null,v.mode,x),Zt(x,p),x.return=v,v=x)}return i(v);case Tn:n:{for(q=p.key;o!==null;){if(o.key===q)if(o.tag===4&&o.stateNode.containerInfo===p.containerInfo&&o.stateNode.implementation===p.implementation){e(v,o.sibling),x=r(o,p.children||[]),x.return=v,v=x;break n}else{e(v,o);break}else a(v,o);o=o.sibling}x=Ei(p,v.mode,x),x.return=v,v=x}return i(v);case Fn:return p=Le(p),dn(v,o,p,x)}if(ya(p))return A(v,o,p,x);if(Yn(p)){if(q=Yn(p),typeof q!="function")throw Error(b(150));return p=q.call(p),L(v,o,p,x)}if(typeof p.then=="function")return dn(v,o,Ir(p),x);if(p.$$typeof===Ln)return dn(v,o,Zr(v,p),x);Pr(v,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,o!==null&&o.tag===6?(e(v,o.sibling),x=r(o,p),x.return=v,v=x):(e(v,o),x=zi(p,v.mode,x),x.return=v,v=x),i(v)):e(v,o)}return function(v,o,p,x){try{Qt=0;var q=dn(v,o,p,x);return ct=null,q}catch(M){if(M===ot||M===Kr)throw M;var I=aa(29,M,null,v.mode);return I.lanes=x,I.return=v,I}}}var je=Do(!0),Bo=Do(!1),re=!1;function _i(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ji(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function le(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ie(n,a,e){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,(W&2)!==0){var r=t.pending;return r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a,a=Vr(n),bo(n,null,e),a}return Yr(n,t,a,e),Vr(n)}function $t(n,a,e){if(a=a.updateQueue,a!==null&&(a=a.shared,(e&4194048)!==0)){var t=a.lanes;t&=n.pendingLanes,e|=t,a.lanes=e,wd(n,e)}}function Ri(n,a){var e=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,e===t)){var r=null,l=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};l===null?r=l=i:l=l.next=i,e=e.next}while(e!==null);l===null?r=l=a:l=l.next=a}else r=l=a;e={baseState:t.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:t.shared,callbacks:t.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=a:n.next=a,e.lastBaseUpdate=a}var Hi=!1;function Kt(){if(Hi){var n=dt;if(n!==null)throw n}}function Jt(n,a,e,t){Hi=!1;var r=n.updateQueue;re=!1;var l=r.firstBaseUpdate,i=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var d=s,u=d.next;d.next=null,i===null?l=u:i.next=u,i=d;var m=n.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=u:s.next=u,m.lastBaseUpdate=d))}if(l!==null){var h=r.baseState;i=0,m=u=d=null,s=l;do{var g=s.lane&-536870913,f=g!==s.lane;if(f?(Z&g)===g:(t&g)===g){g!==0&&g===st&&(Hi=!0),m!==null&&(m=m.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});n:{var A=n,L=s;g=a;var dn=e;switch(L.tag){case 1:if(A=L.payload,typeof A=="function"){h=A.call(dn,h,g);break n}h=A;break n;case 3:A.flags=A.flags&-65537|128;case 0:if(A=L.payload,g=typeof A=="function"?A.call(dn,h,g):A,g==null)break n;h=D({},h,g);break n;case 2:re=!0}}g=s.callback,g!==null&&(n.flags|=64,f&&(n.flags|=8192),f=r.callbacks,f===null?r.callbacks=[g]:f.push(g))}else f={lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(u=m=f,d=h):m=m.next=f,i|=g;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;f=s,s=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);m===null&&(d=h),r.baseState=d,r.firstBaseUpdate=u,r.lastBaseUpdate=m,l===null&&(r.shared.lanes=0),ve|=i,n.lanes=i,n.memoizedState=h}}function Oo(n,a){if(typeof n!="function")throw Error(b(191,n));n.call(a)}function qo(n,a){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)Oo(e[n],a)}var vt=c(null),Wr=c(0);function No(n,a){n=Za,S(Wr,n),S(vt,a),Za=n|a.baseLanes}function Ui(){S(Wr,Za),S(vt,vt.current)}function Fi(){Za=Wr.current,w(vt),w(Wr)}var ea=c(null),ga=null;function se(n){var a=n.alternate;S(xn,xn.current&1),S(ea,n),ga===null&&(a===null||vt.current!==null||a.memoizedState!==null)&&(ga=n)}function Yi(n){S(xn,xn.current),S(ea,n),ga===null&&(ga=n)}function Lo(n){n.tag===22?(S(xn,xn.current),S(ea,n),ga===null&&(ga=n)):de()}function de(){S(xn,xn.current),S(ea,ea.current)}function ta(n){w(ea),ga===n&&(ga=null),w(xn)}var xn=c(0);function nl(n){for(var a=n;a!==null;){if(a.tag===13){var e=a.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||$s(e)||Ks(e)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ha=0,F=null,ln=null,kn=null,al=!1,pt=!1,Re=!1,el=0,It=0,ut=null,Uu=0;function fn(){throw Error(b(321))}function Vi(n,a){if(a===null)return!1;for(var e=0;e<a.length&&e<n.length;e++)if(!na(n[e],a[e]))return!1;return!0}function Gi(n,a,e,t,r,l){return Ha=l,F=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,y.H=n===null||n.memoizedState===null?yc:ls,Re=!1,l=e(t,r),Re=!1,pt&&(l=jo(a,e,t,r)),_o(n),l}function _o(n){y.H=nr;var a=ln!==null&&ln.next!==null;if(Ha=0,kn=ln=F=null,al=!1,It=0,ut=null,a)throw Error(b(300));n===null||zn||(n=n.dependencies,n!==null&&Qr(n)&&(zn=!0))}function jo(n,a,e,t){F=n;var r=0;do{if(pt&&(ut=null),It=0,pt=!1,25<=r)throw Error(b(301));if(r+=1,kn=ln=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}y.H=xc,l=a(e,t)}while(pt);return l}function Fu(){var n=y.H,a=n.useState()[0];return a=typeof a.then=="function"?Pt(a):a,n=n.useState()[0],(ln!==null?ln.memoizedState:null)!==n&&(F.flags|=1024),a}function Xi(){var n=el!==0;return el=0,n}function Qi(n,a,e){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~e}function Zi(n){if(al){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}al=!1}Ha=0,kn=ln=F=null,pt=!1,It=el=0,ut=null}function Hn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kn===null?F.memoizedState=kn=n:kn=kn.next=n,kn}function hn(){if(ln===null){var n=F.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var a=kn===null?F.memoizedState:kn.next;if(a!==null)kn=a,ln=n;else{if(n===null)throw F.alternate===null?Error(b(467)):Error(b(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},kn===null?F.memoizedState=kn=n:kn=kn.next=n}return kn}function tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pt(n){var a=It;return It+=1,ut===null&&(ut=[]),n=Ao(ut,n,a),a=F,(kn===null?a.memoizedState:kn.next)===null&&(a=a.alternate,y.H=a===null||a.memoizedState===null?yc:ls),n}function rl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Pt(n);if(n.$$typeof===Ln)return Bn(n)}throw Error(b(438,String(n)))}function $i(n){var a=null,e=F.updateQueue;if(e!==null&&(a=e.memoCache),a==null){var t=F.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(a={data:t.data.map(function(r){return r.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),e===null&&(e=tl(),F.updateQueue=e),e.memoCache=a,e=a.data[a.index],e===void 0)for(e=a.data[a.index]=Array(n),t=0;t<n;t++)e[t]=Ye;return a.index++,e}function Ua(n,a){return typeof a=="function"?a(n):a}function ll(n){var a=hn();return Ki(a,ln,n)}function Ki(n,a,e){var t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var r=n.baseQueue,l=t.pending;if(l!==null){if(r!==null){var i=r.next;r.next=l.next,l.next=i}a.baseQueue=r=l,t.pending=null}if(l=n.baseState,r===null)n.memoizedState=l;else{a=r.next;var s=i=null,d=null,u=a,m=!1;do{var h=u.lane&-536870913;if(h!==u.lane?(Z&h)===h:(Ha&h)===h){var g=u.revertLane;if(g===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===st&&(m=!0);else if((Ha&g)===g){u=u.next,g===st&&(m=!0);continue}else h={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},d===null?(s=d=h,i=l):d=d.next=h,F.lanes|=g,ve|=g;h=u.action,Re&&e(l,h),l=u.hasEagerState?u.eagerState:e(l,h)}else g={lane:h,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},d===null?(s=d=g,i=l):d=d.next=g,F.lanes|=h,ve|=h;u=u.next}while(u!==null&&u!==a);if(d===null?i=l:d.next=s,!na(l,n.memoizedState)&&(zn=!0,m&&(e=dt,e!==null)))throw e;n.memoizedState=l,n.baseState=i,n.baseQueue=d,t.lastRenderedState=l}return r===null&&(t.lanes=0),[n.memoizedState,t.dispatch]}function Ji(n){var a=hn(),e=a.queue;if(e===null)throw Error(b(311));e.lastRenderedReducer=n;var t=e.dispatch,r=e.pending,l=a.memoizedState;if(r!==null){e.pending=null;var i=r=r.next;do l=n(l,i.action),i=i.next;while(i!==r);na(l,a.memoizedState)||(zn=!0),a.memoizedState=l,a.baseQueue===null&&(a.baseState=l),e.lastRenderedState=l}return[l,t]}function Ro(n,a,e){var t=F,r=hn(),l=J;if(l){if(e===void 0)throw Error(b(407));e=e()}else e=a();var i=!na((ln||r).memoizedState,e);if(i&&(r.memoizedState=e,zn=!0),r=r.queue,Wi(Fo.bind(null,t,r,n),[n]),r.getSnapshot!==a||i||kn!==null&&kn.memoizedState.tag&1){if(t.flags|=2048,bt(9,{destroy:void 0},Uo.bind(null,t,r,e,a),null),vn===null)throw Error(b(349));l||(Ha&127)!==0||Ho(t,a,e)}return e}function Ho(n,a,e){n.flags|=16384,n={getSnapshot:a,value:e},a=F.updateQueue,a===null?(a=tl(),F.updateQueue=a,a.stores=[n]):(e=a.stores,e===null?a.stores=[n]:e.push(n))}function Uo(n,a,e,t){a.value=e,a.getSnapshot=t,Yo(a)&&Vo(n)}function Fo(n,a,e){return e(function(){Yo(a)&&Vo(n)})}function Yo(n){var a=n.getSnapshot;n=n.value;try{var e=a();return!na(n,e)}catch{return!0}}function Vo(n){var a=Me(n,2);a!==null&&Kn(a,n,2)}function Ii(n){var a=Hn();if(typeof n=="function"){var e=n;if(n=e(),Re){Ia(!0);try{e()}finally{Ia(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:n},a}function Go(n,a,e,t){return n.baseState=e,Ki(n,ln,typeof t=="function"?t:Ua)}function Yu(n,a,e,t,r){if(dl(n))throw Error(b(485));if(n=a.action,n!==null){var l={payload:r,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){l.listeners.push(i)}};y.T!==null?e(!0):l.isTransition=!1,t(l),e=a.pending,e===null?(l.next=a.pending=l,Xo(a,l)):(l.next=e.next,a.pending=e.next=l)}}function Xo(n,a){var e=a.action,t=a.payload,r=n.state;if(a.isTransition){var l=y.T,i={};y.T=i;try{var s=e(r,t),d=y.S;d!==null&&d(i,s),Qo(n,a,s)}catch(u){Pi(n,a,u)}finally{l!==null&&i.types!==null&&(l.types=i.types),y.T=l}}else try{l=e(r,t),Qo(n,a,l)}catch(u){Pi(n,a,u)}}function Qo(n,a,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(t){Zo(n,a,t)},function(t){return Pi(n,a,t)}):Zo(n,a,e)}function Zo(n,a,e){a.status="fulfilled",a.value=e,$o(a),n.state=e,a=n.pending,a!==null&&(e=a.next,e===a?n.pending=null:(e=e.next,a.next=e,Xo(n,e)))}function Pi(n,a,e){var t=n.pending;if(n.pending=null,t!==null){t=t.next;do a.status="rejected",a.reason=e,$o(a),a=a.next;while(a!==t)}n.action=null}function $o(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Ko(n,a){return a}function Jo(n,a){if(J){var e=vn.formState;if(e!==null){n:{var t=F;if(J){if(pn){a:{for(var r=pn,l=ba;r.nodeType!==8;){if(!l){r=null;break a}if(r=fa(r.nextSibling),r===null){r=null;break a}}l=r.data,r=l==="F!"||l==="F"?r:null}if(r){pn=fa(r.nextSibling),t=r.data==="F!";break n}}ee(t)}t=!1}t&&(a=e[0])}}return e=Hn(),e.memoizedState=e.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:a},e.queue=t,e=gc.bind(null,F,t),t.dispatch=e,t=Ii(!1),l=rs.bind(null,F,!1,t.queue),t=Hn(),r={state:a,dispatch:null,action:n,pending:null},t.queue=r,e=Yu.bind(null,F,r,l,e),r.dispatch=e,t.memoizedState=n,[a,e,!1]}function Io(n){var a=hn();return Po(a,ln,n)}function Po(n,a,e){if(a=Ki(n,a,Ko)[0],n=ll(Ua)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var t=Pt(a)}catch(i){throw i===ot?Kr:i}else t=a;a=hn();var r=a.queue,l=r.dispatch;return e!==a.memoizedState&&(F.flags|=2048,bt(9,{destroy:void 0},Vu.bind(null,r,e),null)),[t,l,n]}function Vu(n,a){n.action=a}function Wo(n){var a=hn(),e=ln;if(e!==null)return Po(a,e,n);hn(),a=a.memoizedState,e=hn();var t=e.queue.dispatch;return e.memoizedState=n,[a,t,!1]}function bt(n,a,e,t){return n={tag:n,create:e,deps:t,inst:a,next:null},a=F.updateQueue,a===null&&(a=tl(),F.updateQueue=a),e=a.lastEffect,e===null?a.lastEffect=n.next=n:(t=e.next,e.next=n,n.next=t,a.lastEffect=n),n}function nc(){return hn().memoizedState}function il(n,a,e,t){var r=Hn();F.flags|=n,r.memoizedState=bt(1|a,{destroy:void 0},e,t===void 0?null:t)}function sl(n,a,e,t){var r=hn();t=t===void 0?null:t;var l=r.memoizedState.inst;ln!==null&&t!==null&&Vi(t,ln.memoizedState.deps)?r.memoizedState=bt(a,l,e,t):(F.flags|=n,r.memoizedState=bt(1|a,l,e,t))}function ac(n,a){il(8390656,8,n,a)}function Wi(n,a){sl(2048,8,n,a)}function Gu(n){F.flags|=4;var a=F.updateQueue;if(a===null)a=tl(),F.updateQueue=a,a.events=[n];else{var e=a.events;e===null?a.events=[n]:e.push(n)}}function ec(n){var a=hn().memoizedState;return Gu({ref:a,nextImpl:n}),function(){if((W&2)!==0)throw Error(b(440));return a.impl.apply(void 0,arguments)}}function tc(n,a){return sl(4,2,n,a)}function rc(n,a){return sl(4,4,n,a)}function lc(n,a){if(typeof a=="function"){n=n();var e=a(n);return function(){typeof e=="function"?e():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function ic(n,a,e){e=e!=null?e.concat([n]):null,sl(4,4,lc.bind(null,a,n),e)}function ns(){}function sc(n,a){var e=hn();a=a===void 0?null:a;var t=e.memoizedState;return a!==null&&Vi(a,t[1])?t[0]:(e.memoizedState=[n,a],n)}function dc(n,a){var e=hn();a=a===void 0?null:a;var t=e.memoizedState;if(a!==null&&Vi(a,t[1]))return t[0];if(t=n(),Re){Ia(!0);try{n()}finally{Ia(!1)}}return e.memoizedState=[t,a],t}function as(n,a,e){return e===void 0||(Ha&1073741824)!==0&&(Z&261930)===0?n.memoizedState=a:(n.memoizedState=e,n=ov(),F.lanes|=n,ve|=n,e)}function oc(n,a,e,t){return na(e,a)?e:vt.current!==null?(n=as(n,e,t),na(n,a)||(zn=!0),n):(Ha&42)===0||(Ha&1073741824)!==0&&(Z&261930)===0?(zn=!0,n.memoizedState=e):(n=ov(),F.lanes|=n,ve|=n,a)}function cc(n,a,e,t,r){var l=E.p;E.p=l!==0&&8>l?l:8;var i=y.T,s={};y.T=s,rs(n,!1,a,e);try{var d=r(),u=y.S;if(u!==null&&u(s,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var m=Hu(d,t);Wt(n,a,m,ia(n))}else Wt(n,a,t,ia(n))}catch(h){Wt(n,a,{then:function(){},status:"rejected",reason:h},ia())}finally{E.p=l,i!==null&&s.types!==null&&(i.types=s.types),y.T=i}}function Xu(){}function es(n,a,e,t){if(n.tag!==5)throw Error(b(476));var r=vc(n).queue;cc(n,r,a,R,e===null?Xu:function(){return pc(n),e(t)})}function vc(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:R},next:null};var e={};return a.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:e},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function pc(n){var a=vc(n);a.next===null&&(a=n.alternate.memoizedState),Wt(n,a.next.queue,{},ia())}function ts(){return Bn(fr)}function uc(){return hn().memoizedState}function bc(){return hn().memoizedState}function Qu(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var e=ia();n=le(e);var t=ie(a,n,e);t!==null&&(Kn(t,a,e),$t(t,a,e)),a={cache:Oi()},n.payload=a;return}a=a.return}}function Zu(n,a,e){var t=ia();e={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},dl(n)?fc(a,e):(e=wi(n,a,e,t),e!==null&&(Kn(e,n,t),mc(e,a,t)))}function gc(n,a,e){var t=ia();Wt(n,a,e,t)}function Wt(n,a,e,t){var r={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(dl(n))fc(a,r);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=a.lastRenderedReducer,l!==null))try{var i=a.lastRenderedState,s=l(i,e);if(r.hasEagerState=!0,r.eagerState=s,na(s,i))return Yr(n,a,r,0),vn===null&&Fr(),!1}catch{}if(e=wi(n,a,r,t),e!==null)return Kn(e,n,t),mc(e,a,t),!0}return!1}function rs(n,a,e,t){if(t={lane:2,revertLane:_s(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},dl(n)){if(a)throw Error(b(479))}else a=wi(n,e,t,2),a!==null&&Kn(a,n,2)}function dl(n){var a=n.alternate;return n===F||a!==null&&a===F}function fc(n,a){pt=al=!0;var e=n.pending;e===null?a.next=a:(a.next=e.next,e.next=a),n.pending=a}function mc(n,a,e){if((e&4194048)!==0){var t=a.lanes;t&=n.pendingLanes,e|=t,a.lanes=e,wd(n,e)}}var nr={readContext:Bn,use:rl,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn};nr.useEffectEvent=fn;var yc={readContext:Bn,use:rl,useCallback:function(n,a){return Hn().memoizedState=[n,a===void 0?null:a],n},useContext:Bn,useEffect:ac,useImperativeHandle:function(n,a,e){e=e!=null?e.concat([n]):null,il(4194308,4,lc.bind(null,a,n),e)},useLayoutEffect:function(n,a){return il(4194308,4,n,a)},useInsertionEffect:function(n,a){il(4,2,n,a)},useMemo:function(n,a){var e=Hn();a=a===void 0?null:a;var t=n();if(Re){Ia(!0);try{n()}finally{Ia(!1)}}return e.memoizedState=[t,a],t},useReducer:function(n,a,e){var t=Hn();if(e!==void 0){var r=e(a);if(Re){Ia(!0);try{e(a)}finally{Ia(!1)}}}else r=a;return t.memoizedState=t.baseState=r,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},t.queue=n,n=n.dispatch=Zu.bind(null,F,n),[t.memoizedState,n]},useRef:function(n){var a=Hn();return n={current:n},a.memoizedState=n},useState:function(n){n=Ii(n);var a=n.queue,e=gc.bind(null,F,a);return a.dispatch=e,[n.memoizedState,e]},useDebugValue:ns,useDeferredValue:function(n,a){var e=Hn();return as(e,n,a)},useTransition:function(){var n=Ii(!1);return n=cc.bind(null,F,n.queue,!0,!1),Hn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,e){var t=F,r=Hn();if(J){if(e===void 0)throw Error(b(407));e=e()}else{if(e=a(),vn===null)throw Error(b(349));(Z&127)!==0||Ho(t,a,e)}r.memoizedState=e;var l={value:e,getSnapshot:a};return r.queue=l,ac(Fo.bind(null,t,l,n),[n]),t.flags|=2048,bt(9,{destroy:void 0},Uo.bind(null,t,l,e,a),null),e},useId:function(){var n=Hn(),a=vn.identifierPrefix;if(J){var e=Aa,t=Ta;e=(t&~(1<<32-Wn(t)-1)).toString(32)+e,a="_"+a+"R_"+e,e=el++,0<e&&(a+="H"+e.toString(32)),a+="_"}else e=Uu++,a="_"+a+"r_"+e.toString(32)+"_";return n.memoizedState=a},useHostTransitionStatus:ts,useFormState:Jo,useActionState:Jo,useOptimistic:function(n){var a=Hn();a.memoizedState=a.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=e,a=rs.bind(null,F,!0,e),e.dispatch=a,[n,a]},useMemoCache:$i,useCacheRefresh:function(){return Hn().memoizedState=Qu.bind(null,F)},useEffectEvent:function(n){var a=Hn(),e={impl:n};return a.memoizedState=e,function(){if((W&2)!==0)throw Error(b(440));return e.impl.apply(void 0,arguments)}}},ls={readContext:Bn,use:rl,useCallback:sc,useContext:Bn,useEffect:Wi,useImperativeHandle:ic,useInsertionEffect:tc,useLayoutEffect:rc,useMemo:dc,useReducer:ll,useRef:nc,useState:function(){return ll(Ua)},useDebugValue:ns,useDeferredValue:function(n,a){var e=hn();return oc(e,ln.memoizedState,n,a)},useTransition:function(){var n=ll(Ua)[0],a=hn().memoizedState;return[typeof n=="boolean"?n:Pt(n),a]},useSyncExternalStore:Ro,useId:uc,useHostTransitionStatus:ts,useFormState:Io,useActionState:Io,useOptimistic:function(n,a){var e=hn();return Go(e,ln,n,a)},useMemoCache:$i,useCacheRefresh:bc};ls.useEffectEvent=ec;var xc={readContext:Bn,use:rl,useCallback:sc,useContext:Bn,useEffect:Wi,useImperativeHandle:ic,useInsertionEffect:tc,useLayoutEffect:rc,useMemo:dc,useReducer:Ji,useRef:nc,useState:function(){return Ji(Ua)},useDebugValue:ns,useDeferredValue:function(n,a){var e=hn();return ln===null?as(e,n,a):oc(e,ln.memoizedState,n,a)},useTransition:function(){var n=Ji(Ua)[0],a=hn().memoizedState;return[typeof n=="boolean"?n:Pt(n),a]},useSyncExternalStore:Ro,useId:uc,useHostTransitionStatus:ts,useFormState:Wo,useActionState:Wo,useOptimistic:function(n,a){var e=hn();return ln!==null?Go(e,ln,n,a):(e.baseState=n,[n,e.queue.dispatch])},useMemoCache:$i,useCacheRefresh:bc};xc.useEffectEvent=ec;function is(n,a,e,t){a=n.memoizedState,e=e(t,a),e=e==null?a:D({},a,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var ss={enqueueSetState:function(n,a,e){n=n._reactInternals;var t=ia(),r=le(t);r.payload=a,e!=null&&(r.callback=e),a=ie(n,r,t),a!==null&&(Kn(a,n,t),$t(a,n,t))},enqueueReplaceState:function(n,a,e){n=n._reactInternals;var t=ia(),r=le(t);r.tag=1,r.payload=a,e!=null&&(r.callback=e),a=ie(n,r,t),a!==null&&(Kn(a,n,t),$t(a,n,t))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var e=ia(),t=le(e);t.tag=2,a!=null&&(t.callback=a),a=ie(n,t,e),a!==null&&(Kn(a,n,e),$t(a,n,e))}};function hc(n,a,e,t,r,l,i){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,l,i):a.prototype&&a.prototype.isPureReactComponent?!Ut(e,t)||!Ut(r,l):!0}function wc(n,a,e,t){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(e,t),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(e,t),a.state!==n&&ss.enqueueReplaceState(a,a.state,null)}function He(n,a){var e=a;if("ref"in a){e={};for(var t in a)t!=="ref"&&(e[t]=a[t])}if(n=n.defaultProps){e===a&&(e=D({},e));for(var r in n)e[r]===void 0&&(e[r]=n[r])}return e}function kc(n){Ur(n)}function zc(n){console.error(n)}function Ec(n){Ur(n)}function ol(n,a){try{var e=n.onUncaughtError;e(a.value,{componentStack:a.stack})}catch(t){setTimeout(function(){throw t})}}function Sc(n,a,e){try{var t=n.onCaughtError;t(e.value,{componentStack:e.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ds(n,a,e){return e=le(e),e.tag=3,e.payload={element:null},e.callback=function(){ol(n,a)},e}function Tc(n){return n=le(n),n.tag=3,n}function Ac(n,a,e,t){var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Sc(a,e,t)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Sc(a,e,t),typeof r!="function"&&(pe===null?pe=new Set([this]):pe.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})})}function $u(n,a,e,t,r){if(e.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(a=e.alternate,a!==null&&it(a,e,r,!0),e=ea.current,e!==null){switch(e.tag){case 31:case 13:return ga===null?wl():e.alternate===null&&mn===0&&(mn=3),e.flags&=-257,e.flags|=65536,e.lanes=r,t===Jr?e.flags|=16384:(a=e.updateQueue,a===null?e.updateQueue=new Set([t]):a.add(t),qs(n,t,r)),!1;case 22:return e.flags|=65536,t===Jr?e.flags|=16384:(a=e.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([t])},e.updateQueue=a):(e=a.retryQueue,e===null?a.retryQueue=new Set([t]):e.add(t)),qs(n,t,r)),!1}throw Error(b(435,e.tag))}return qs(n,t,r),wl(),!1}if(J)return a=ea.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=r,t!==Ai&&(n=Error(b(422),{cause:t}),Vt(va(n,e)))):(t!==Ai&&(a=Error(b(423),{cause:t}),Vt(va(a,e))),n=n.current.alternate,n.flags|=65536,r&=-r,n.lanes|=r,t=va(t,e),r=ds(n.stateNode,t,r),Ri(n,r),mn!==4&&(mn=2)),!1;var l=Error(b(520),{cause:t});if(l=va(l,e),dr===null?dr=[l]:dr.push(l),mn!==4&&(mn=2),a===null)return!0;t=va(t,e),e=a;do{switch(e.tag){case 3:return e.flags|=65536,n=r&-r,e.lanes|=n,n=ds(e.stateNode,t,n),Ri(e,n),!1;case 1:if(a=e.type,l=e.stateNode,(e.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(pe===null||!pe.has(l))))return e.flags|=65536,r&=-r,e.lanes|=r,r=Tc(r),Ac(r,n,e,t),Ri(e,r),!1}e=e.return}while(e!==null);return!1}var os=Error(b(461)),zn=!1;function On(n,a,e,t){a.child=n===null?Bo(a,null,e,t):je(a,n.child,e,t)}function Cc(n,a,e,t,r){e=e.render;var l=a.ref;if("ref"in t){var i={};for(var s in t)s!=="ref"&&(i[s]=t[s])}else i=t;return qe(a),t=Gi(n,a,e,i,l,r),s=Xi(),n!==null&&!zn?(Qi(n,a,r),Fa(n,a,r)):(J&&s&&Si(a),a.flags|=1,On(n,a,t,r),a.child)}function Mc(n,a,e,t,r){if(n===null){var l=e.type;return typeof l=="function"&&!ki(l)&&l.defaultProps===void 0&&e.compare===null?(a.tag=15,a.type=l,Dc(n,a,l,t,r)):(n=Gr(e.type,null,t,a,a.mode,r),n.ref=a.ref,n.return=a,a.child=n)}if(l=n.child,!ms(n,r)){var i=l.memoizedProps;if(e=e.compare,e=e!==null?e:Ut,e(i,t)&&n.ref===a.ref)return Fa(n,a,r)}return a.flags|=1,n=La(l,t),n.ref=a.ref,n.return=a,a.child=n}function Dc(n,a,e,t,r){if(n!==null){var l=n.memoizedProps;if(Ut(l,t)&&n.ref===a.ref)if(zn=!1,a.pendingProps=t=l,ms(n,r))(n.flags&131072)!==0&&(zn=!0);else return a.lanes=n.lanes,Fa(n,a,r)}return cs(n,a,e,t,r)}function Bc(n,a,e,t){var r=t.children,l=n!==null?n.memoizedState:null;if(n===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((a.flags&128)!==0){if(l=l!==null?l.baseLanes|e:e,n!==null){for(t=a.child=n.child,r=0;t!==null;)r=r|t.lanes|t.childLanes,t=t.sibling;t=r&~l}else t=0,a.child=null;return Oc(n,a,l,e,t)}if((e&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&$r(a,l!==null?l.cachePool:null),l!==null?No(a,l):Ui(),Lo(a);else return t=a.lanes=536870912,Oc(n,a,l!==null?l.baseLanes|e:e,e,t)}else l!==null?($r(a,l.cachePool),No(a,l),de(),a.memoizedState=null):(n!==null&&$r(a,null),Ui(),de());return On(n,a,r,e),a.child}function ar(n,a){return n!==null&&n.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Oc(n,a,e,t,r){var l=Ni();return l=l===null?null:{parent:wn._currentValue,pool:l},a.memoizedState={baseLanes:e,cachePool:l},n!==null&&$r(a,null),Ui(),Lo(a),n!==null&&it(n,a,t,!0),a.childLanes=r,null}function cl(n,a){return a=pl({mode:a.mode,children:a.children},n.mode),a.ref=n.ref,n.child=a,a.return=n,a}function qc(n,a,e){return je(a,n.child,null,e),n=cl(a,a.pendingProps),n.flags|=2,ta(a),a.memoizedState=null,n}function Ku(n,a,e){var t=a.pendingProps,r=(a.flags&128)!==0;if(a.flags&=-129,n===null){if(J){if(t.mode==="hidden")return n=cl(a,t),a.lanes=536870912,ar(null,n);if(Yi(a),(n=pn)?(n=Xv(n,ba),n=n!==null&&n.data==="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:ne!==null?{id:Ta,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},e=fo(n),e.return=a,a.child=e,Dn=a,pn=null)):n=null,n===null)throw ee(a);return a.lanes=536870912,null}return cl(a,t)}var l=n.memoizedState;if(l!==null){var i=l.dehydrated;if(Yi(a),r)if(a.flags&256)a.flags&=-257,a=qc(n,a,e);else if(a.memoizedState!==null)a.child=n.child,a.flags|=128,a=null;else throw Error(b(558));else if(zn||it(n,a,e,!1),r=(e&n.childLanes)!==0,zn||r){if(t=vn,t!==null&&(i=kd(t,e),i!==0&&i!==l.retryLane))throw l.retryLane=i,Me(n,i),Kn(t,n,i),os;wl(),a=qc(n,a,e)}else n=l.treeContext,pn=fa(i.nextSibling),Dn=a,J=!0,ae=null,ba=!1,n!==null&&xo(a,n),a=cl(a,t),a.flags|=4096;return a}return n=La(n.child,{mode:t.mode,children:t.children}),n.ref=a.ref,a.child=n,n.return=a,n}function vl(n,a){var e=a.ref;if(e===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(b(284));(n===null||n.ref!==e)&&(a.flags|=4194816)}}function cs(n,a,e,t,r){return qe(a),e=Gi(n,a,e,t,void 0,r),t=Xi(),n!==null&&!zn?(Qi(n,a,r),Fa(n,a,r)):(J&&t&&Si(a),a.flags|=1,On(n,a,e,r),a.child)}function Nc(n,a,e,t,r,l){return qe(a),a.updateQueue=null,e=jo(a,t,e,r),_o(n),t=Xi(),n!==null&&!zn?(Qi(n,a,l),Fa(n,a,l)):(J&&t&&Si(a),a.flags|=1,On(n,a,e,l),a.child)}function Lc(n,a,e,t,r){if(qe(a),a.stateNode===null){var l=et,i=e.contextType;typeof i=="object"&&i!==null&&(l=Bn(i)),l=new e(t,l),a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ss,a.stateNode=l,l._reactInternals=a,l=a.stateNode,l.props=t,l.state=a.memoizedState,l.refs={},_i(a),i=e.contextType,l.context=typeof i=="object"&&i!==null?Bn(i):et,l.state=a.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(is(a,e,i,t),l.state=a.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(i=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),i!==l.state&&ss.enqueueReplaceState(l,l.state,null),Jt(a,t,l,r),Kt(),l.state=a.memoizedState),typeof l.componentDidMount=="function"&&(a.flags|=4194308),t=!0}else if(n===null){l=a.stateNode;var s=a.memoizedProps,d=He(e,s);l.props=d;var u=l.context,m=e.contextType;i=et,typeof m=="object"&&m!==null&&(i=Bn(m));var h=e.getDerivedStateFromProps;m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function",s=a.pendingProps!==s,m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s||u!==i)&&wc(a,l,t,i),re=!1;var g=a.memoizedState;l.state=g,Jt(a,t,l,r),Kt(),u=a.memoizedState,s||g!==u||re?(typeof h=="function"&&(is(a,e,h,t),u=a.memoizedState),(d=re||hc(a,e,d,t,g,u,i))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(a.flags|=4194308)):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=t,a.memoizedState=u),l.props=t,l.state=u,l.context=i,t=d):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),t=!1)}else{l=a.stateNode,ji(n,a),i=a.memoizedProps,m=He(e,i),l.props=m,h=a.pendingProps,g=l.context,u=e.contextType,d=et,typeof u=="object"&&u!==null&&(d=Bn(u)),s=e.getDerivedStateFromProps,(u=typeof s=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==h||g!==d)&&wc(a,l,t,d),re=!1,g=a.memoizedState,l.state=g,Jt(a,t,l,r),Kt();var f=a.memoizedState;i!==h||g!==f||re||n!==null&&n.dependencies!==null&&Qr(n.dependencies)?(typeof s=="function"&&(is(a,e,s,t),f=a.memoizedState),(m=re||hc(a,e,m,t,g,f,d)||n!==null&&n.dependencies!==null&&Qr(n.dependencies))?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,f,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,f,d)),typeof l.componentDidUpdate=="function"&&(a.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===n.memoizedProps&&g===n.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&g===n.memoizedState||(a.flags|=1024),a.memoizedProps=t,a.memoizedState=f),l.props=t,l.state=f,l.context=d,t=m):(typeof l.componentDidUpdate!="function"||i===n.memoizedProps&&g===n.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&g===n.memoizedState||(a.flags|=1024),t=!1)}return l=t,vl(n,a),t=(a.flags&128)!==0,l||t?(l=a.stateNode,e=t&&typeof e.getDerivedStateFromError!="function"?null:l.render(),a.flags|=1,n!==null&&t?(a.child=je(a,n.child,null,r),a.child=je(a,null,e,r)):On(n,a,e,r),a.memoizedState=l.state,n=a.child):n=Fa(n,a,r),n}function _c(n,a,e,t){return Be(),a.flags|=256,On(n,a,e,t),a.child}var vs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ps(n){return{baseLanes:n,cachePool:So()}}function us(n,a,e){return n=n!==null?n.childLanes&~e:0,a&&(n|=la),n}function jc(n,a,e){var t=a.pendingProps,r=!1,l=(a.flags&128)!==0,i;if((i=l)||(i=n!==null&&n.memoizedState===null?!1:(xn.current&2)!==0),i&&(r=!0,a.flags&=-129),i=(a.flags&32)!==0,a.flags&=-33,n===null){if(J){if(r?se(a):de(),(n=pn)?(n=Xv(n,ba),n=n!==null&&n.data!=="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:ne!==null?{id:Ta,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},e=fo(n),e.return=a,a.child=e,Dn=a,pn=null)):n=null,n===null)throw ee(a);return Ks(n)?a.lanes=32:a.lanes=536870912,null}var s=t.children;return t=t.fallback,r?(de(),r=a.mode,s=pl({mode:"hidden",children:s},r),t=De(t,r,e,null),s.return=a,t.return=a,s.sibling=t,a.child=s,t=a.child,t.memoizedState=ps(e),t.childLanes=us(n,i,e),a.memoizedState=vs,ar(null,t)):(se(a),bs(a,s))}var d=n.memoizedState;if(d!==null&&(s=d.dehydrated,s!==null)){if(l)a.flags&256?(se(a),a.flags&=-257,a=gs(n,a,e)):a.memoizedState!==null?(de(),a.child=n.child,a.flags|=128,a=null):(de(),s=t.fallback,r=a.mode,t=pl({mode:"visible",children:t.children},r),s=De(s,r,e,null),s.flags|=2,t.return=a,s.return=a,t.sibling=s,a.child=t,je(a,n.child,null,e),t=a.child,t.memoizedState=ps(e),t.childLanes=us(n,i,e),a.memoizedState=vs,a=ar(null,t));else if(se(a),Ks(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var u=i.dgst;i=u,t=Error(b(419)),t.stack="",t.digest=i,Vt({value:t,source:null,stack:null}),a=gs(n,a,e)}else if(zn||it(n,a,e,!1),i=(e&n.childLanes)!==0,zn||i){if(i=vn,i!==null&&(t=kd(i,e),t!==0&&t!==d.retryLane))throw d.retryLane=t,Me(n,t),Kn(i,n,t),os;$s(s)||wl(),a=gs(n,a,e)}else $s(s)?(a.flags|=192,a.child=n.child,a=null):(n=d.treeContext,pn=fa(s.nextSibling),Dn=a,J=!0,ae=null,ba=!1,n!==null&&xo(a,n),a=bs(a,t.children),a.flags|=4096);return a}return r?(de(),s=t.fallback,r=a.mode,d=n.child,u=d.sibling,t=La(d,{mode:"hidden",children:t.children}),t.subtreeFlags=d.subtreeFlags&65011712,u!==null?s=La(u,s):(s=De(s,r,e,null),s.flags|=2),s.return=a,t.return=a,t.sibling=s,a.child=t,ar(null,t),t=a.child,s=n.child.memoizedState,s===null?s=ps(e):(r=s.cachePool,r!==null?(d=wn._currentValue,r=r.parent!==d?{parent:d,pool:d}:r):r=So(),s={baseLanes:s.baseLanes|e,cachePool:r}),t.memoizedState=s,t.childLanes=us(n,i,e),a.memoizedState=vs,ar(n.child,t)):(se(a),e=n.child,n=e.sibling,e=La(e,{mode:"visible",children:t.children}),e.return=a,e.sibling=null,n!==null&&(i=a.deletions,i===null?(a.deletions=[n],a.flags|=16):i.push(n)),a.child=e,a.memoizedState=null,e)}function bs(n,a){return a=pl({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function pl(n,a){return n=aa(22,n,null,a),n.lanes=0,n}function gs(n,a,e){return je(a,n.child,null,e),n=bs(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function Rc(n,a,e){n.lanes|=a;var t=n.alternate;t!==null&&(t.lanes|=a),Di(n.return,a,e)}function fs(n,a,e,t,r,l){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:t,tail:e,tailMode:r,treeForkCount:l}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=t,i.tail=e,i.tailMode=r,i.treeForkCount=l)}function Hc(n,a,e){var t=a.pendingProps,r=t.revealOrder,l=t.tail;t=t.children;var i=xn.current,s=(i&2)!==0;if(s?(i=i&1|2,a.flags|=128):i&=1,S(xn,i),On(n,a,t,e),t=J?Yt:0,!s&&n!==null&&(n.flags&128)!==0)n:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Rc(n,e,a);else if(n.tag===19)Rc(n,e,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break n;for(;n.sibling===null;){if(n.return===null||n.return===a)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(r){case"forwards":for(e=a.child,r=null;e!==null;)n=e.alternate,n!==null&&nl(n)===null&&(r=e),e=e.sibling;e=r,e===null?(r=a.child,a.child=null):(r=e.sibling,e.sibling=null),fs(a,!1,r,e,l,t);break;case"backwards":case"unstable_legacy-backwards":for(e=null,r=a.child,a.child=null;r!==null;){if(n=r.alternate,n!==null&&nl(n)===null){a.child=r;break}n=r.sibling,r.sibling=e,e=r,r=n}fs(a,!0,e,null,l,t);break;case"together":fs(a,!1,null,null,void 0,t);break;default:a.memoizedState=null}return a.child}function Fa(n,a,e){if(n!==null&&(a.dependencies=n.dependencies),ve|=a.lanes,(e&a.childLanes)===0)if(n!==null){if(it(n,a,e,!1),(e&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(b(153));if(a.child!==null){for(n=a.child,e=La(n,n.pendingProps),a.child=e,e.return=a;n.sibling!==null;)n=n.sibling,e=e.sibling=La(n,n.pendingProps),e.return=a;e.sibling=null}return a.child}function ms(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Qr(n)))}function Ju(n,a,e){switch(a.tag){case 3:Rn(a,a.stateNode.containerInfo),te(a,wn,n.memoizedState.cache),Be();break;case 27:case 5:At(a);break;case 4:Rn(a,a.stateNode.containerInfo);break;case 10:te(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Yi(a),null;break;case 13:var t=a.memoizedState;if(t!==null)return t.dehydrated!==null?(se(a),a.flags|=128,null):(e&a.child.childLanes)!==0?jc(n,a,e):(se(a),n=Fa(n,a,e),n!==null?n.sibling:null);se(a);break;case 19:var r=(n.flags&128)!==0;if(t=(e&a.childLanes)!==0,t||(it(n,a,e,!1),t=(e&a.childLanes)!==0),r){if(t)return Hc(n,a,e);a.flags|=128}if(r=a.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),S(xn,xn.current),t)break;return null;case 22:return a.lanes=0,Bc(n,a,e,a.pendingProps);case 24:te(a,wn,n.memoizedState.cache)}return Fa(n,a,e)}function Uc(n,a,e){if(n!==null)if(n.memoizedProps!==a.pendingProps)zn=!0;else{if(!ms(n,e)&&(a.flags&128)===0)return zn=!1,Ju(n,a,e);zn=(n.flags&131072)!==0}else zn=!1,J&&(a.flags&1048576)!==0&&yo(a,Yt,a.index);switch(a.lanes=0,a.tag){case 16:n:{var t=a.pendingProps;if(n=Le(a.elementType),a.type=n,typeof n=="function")ki(n)?(t=He(n,t),a.tag=1,a=Lc(null,a,n,t,e)):(a.tag=0,a=cs(null,a,n,t,e));else{if(n!=null){var r=n.$$typeof;if(r===sa){a.tag=11,a=Cc(null,a,n,t,e);break n}else if(r===K){a.tag=14,a=Mc(null,a,n,t,e);break n}}throw a=Ba(n)||n,Error(b(306,a,""))}}return a;case 0:return cs(n,a,a.type,a.pendingProps,e);case 1:return t=a.type,r=He(t,a.pendingProps),Lc(n,a,t,r,e);case 3:n:{if(Rn(a,a.stateNode.containerInfo),n===null)throw Error(b(387));t=a.pendingProps;var l=a.memoizedState;r=l.element,ji(n,a),Jt(a,t,null,e);var i=a.memoizedState;if(t=i.cache,te(a,wn,t),t!==l.cache&&Bi(a,[wn],e,!0),Kt(),t=i.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:i.cache},a.updateQueue.baseState=l,a.memoizedState=l,a.flags&256){a=_c(n,a,t,e);break n}else if(t!==r){r=va(Error(b(424)),a),Vt(r),a=_c(n,a,t,e);break n}else for(n=a.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,pn=fa(n.firstChild),Dn=a,J=!0,ae=null,ba=!0,e=Bo(a,null,t,e),a.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Be(),t===r){a=Fa(n,a,e);break n}On(n,a,t,e)}a=a.child}return a;case 26:return vl(n,a),n===null?(e=Iv(a.type,null,a.pendingProps,null))?a.memoizedState=e:J||(e=a.type,n=a.pendingProps,t=Cl(G.current).createElement(e),t[Mn]=a,t[Vn]=n,qn(t,e,n),An(t),a.stateNode=t):a.memoizedState=Iv(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return At(a),n===null&&J&&(t=a.stateNode=$v(a.type,a.pendingProps,G.current),Dn=a,ba=!0,r=pn,fe(a.type)?(Js=r,pn=fa(t.firstChild)):pn=r),On(n,a,a.pendingProps.children,e),vl(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&J&&((r=t=pn)&&(t=Tb(t,a.type,a.pendingProps,ba),t!==null?(a.stateNode=t,Dn=a,pn=fa(t.firstChild),ba=!1,r=!0):r=!1),r||ee(a)),At(a),r=a.type,l=a.pendingProps,i=n!==null?n.memoizedProps:null,t=l.children,Xs(r,l)?t=null:i!==null&&Xs(r,i)&&(a.flags|=32),a.memoizedState!==null&&(r=Gi(n,a,Fu,null,null,e),fr._currentValue=r),vl(n,a),On(n,a,t,e),a.child;case 6:return n===null&&J&&((n=e=pn)&&(e=Ab(e,a.pendingProps,ba),e!==null?(a.stateNode=e,Dn=a,pn=null,n=!0):n=!1),n||ee(a)),null;case 13:return jc(n,a,e);case 4:return Rn(a,a.stateNode.containerInfo),t=a.pendingProps,n===null?a.child=je(a,null,t,e):On(n,a,t,e),a.child;case 11:return Cc(n,a,a.type,a.pendingProps,e);case 7:return On(n,a,a.pendingProps,e),a.child;case 8:return On(n,a,a.pendingProps.children,e),a.child;case 12:return On(n,a,a.pendingProps.children,e),a.child;case 10:return t=a.pendingProps,te(a,a.type,t.value),On(n,a,t.children,e),a.child;case 9:return r=a.type._context,t=a.pendingProps.children,qe(a),r=Bn(r),t=t(r),a.flags|=1,On(n,a,t,e),a.child;case 14:return Mc(n,a,a.type,a.pendingProps,e);case 15:return Dc(n,a,a.type,a.pendingProps,e);case 19:return Hc(n,a,e);case 31:return Ku(n,a,e);case 22:return Bc(n,a,e,a.pendingProps);case 24:return qe(a),t=Bn(wn),n===null?(r=Ni(),r===null&&(r=vn,l=Oi(),r.pooledCache=l,l.refCount++,l!==null&&(r.pooledCacheLanes|=e),r=l),a.memoizedState={parent:t,cache:r},_i(a),te(a,wn,r)):((n.lanes&e)!==0&&(ji(n,a),Jt(a,null,null,e),Kt()),r=n.memoizedState,l=a.memoizedState,r.parent!==t?(r={parent:t,cache:t},a.memoizedState=r,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=r),te(a,wn,t)):(t=l.cache,te(a,wn,t),t!==r.cache&&Bi(a,[wn],e,!0))),On(n,a,a.pendingProps.children,e),a.child;case 29:throw a.pendingProps}throw Error(b(156,a.tag))}function Ya(n){n.flags|=4}function ys(n,a,e,t,r){if((a=(n.mode&32)!==0)&&(a=!1),a){if(n.flags|=16777216,(r&335544128)===r)if(n.stateNode.complete)n.flags|=8192;else if(uv())n.flags|=8192;else throw _e=Jr,Li}else n.flags&=-16777217}function Fc(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!ep(a))if(uv())n.flags|=8192;else throw _e=Jr,Li}function ul(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?xd():536870912,n.lanes|=a,yt|=a)}function er(n,a){if(!J)switch(n.tailMode){case"hidden":a=n.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function un(n){var a=n.alternate!==null&&n.alternate.child===n.child,e=0,t=0;if(a)for(var r=n.child;r!==null;)e|=r.lanes|r.childLanes,t|=r.subtreeFlags&65011712,t|=r.flags&65011712,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)e|=r.lanes|r.childLanes,t|=r.subtreeFlags,t|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=t,n.childLanes=e,a}function Iu(n,a,e){var t=a.pendingProps;switch(Ti(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(a),null;case 1:return un(a),null;case 3:return e=a.stateNode,t=null,n!==null&&(t=n.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Ra(wn),yn(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(lt(a)?Ya(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Ci())),un(a),null;case 26:var r=a.type,l=a.memoizedState;return n===null?(Ya(a),l!==null?(un(a),Fc(a,l)):(un(a),ys(a,r,null,t,e))):l?l!==n.memoizedState?(Ya(a),un(a),Fc(a,l)):(un(a),a.flags&=-16777217):(n=n.memoizedProps,n!==t&&Ya(a),un(a),ys(a,r,n,t,e)),null;case 27:if(Er(a),e=G.current,r=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==t&&Ya(a);else{if(!t){if(a.stateNode===null)throw Error(b(166));return un(a),null}n=C.current,lt(a)?ho(a):(n=$v(r,t,e),a.stateNode=n,Ya(a))}return un(a),null;case 5:if(Er(a),r=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==t&&Ya(a);else{if(!t){if(a.stateNode===null)throw Error(b(166));return un(a),null}if(l=C.current,lt(a))ho(a);else{var i=Cl(G.current);switch(l){case 1:l=i.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:l=i.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":l=i.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":l=i.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":l=i.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof t.is=="string"?i.createElement("select",{is:t.is}):i.createElement("select"),t.multiple?l.multiple=!0:t.size&&(l.size=t.size);break;default:l=typeof t.is=="string"?i.createElement(r,{is:t.is}):i.createElement(r)}}l[Mn]=a,l[Vn]=t;n:for(i=a.child;i!==null;){if(i.tag===5||i.tag===6)l.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break n;for(;i.sibling===null;){if(i.return===null||i.return===a)break n;i=i.return}i.sibling.return=i.return,i=i.sibling}a.stateNode=l;n:switch(qn(l,r,t),r){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break n;case"img":t=!0;break n;default:t=!1}t&&Ya(a)}}return un(a),ys(a,a.type,n===null?null:n.memoizedProps,a.pendingProps,e),null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==t&&Ya(a);else{if(typeof t!="string"&&a.stateNode===null)throw Error(b(166));if(n=G.current,lt(a)){if(n=a.stateNode,e=a.memoizedProps,t=null,r=Dn,r!==null)switch(r.tag){case 27:case 5:t=r.memoizedProps}n[Mn]=a,n=!!(n.nodeValue===e||t!==null&&t.suppressHydrationWarning===!0||jv(n.nodeValue,e)),n||ee(a,!0)}else n=Cl(n).createTextNode(t),n[Mn]=a,a.stateNode=n}return un(a),null;case 31:if(e=a.memoizedState,n===null||n.memoizedState!==null){if(t=lt(a),e!==null){if(n===null){if(!t)throw Error(b(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(b(557));n[Mn]=a}else Be(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;un(a),n=!1}else e=Ci(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),n=!0;if(!n)return a.flags&256?(ta(a),a):(ta(a),null);if((a.flags&128)!==0)throw Error(b(558))}return un(a),null;case 13:if(t=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(r=lt(a),t!==null&&t.dehydrated!==null){if(n===null){if(!r)throw Error(b(318));if(r=a.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(b(317));r[Mn]=a}else Be(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;un(a),r=!1}else r=Ci(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=r),r=!0;if(!r)return a.flags&256?(ta(a),a):(ta(a),null)}return ta(a),(a.flags&128)!==0?(a.lanes=e,a):(e=t!==null,n=n!==null&&n.memoizedState!==null,e&&(t=a.child,r=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(r=t.alternate.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==r&&(t.flags|=2048)),e!==n&&e&&(a.child.flags|=8192),ul(a,a.updateQueue),un(a),null);case 4:return yn(),n===null&&Us(a.stateNode.containerInfo),un(a),null;case 10:return Ra(a.type),un(a),null;case 19:if(w(xn),t=a.memoizedState,t===null)return un(a),null;if(r=(a.flags&128)!==0,l=t.rendering,l===null)if(r)er(t,!1);else{if(mn!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(l=nl(n),l!==null){for(a.flags|=128,er(t,!1),n=l.updateQueue,a.updateQueue=n,ul(a,n),a.subtreeFlags=0,n=e,e=a.child;e!==null;)go(e,n),e=e.sibling;return S(xn,xn.current&1|2),J&&_a(a,t.treeForkCount),a.child}n=n.sibling}t.tail!==null&&In()>yl&&(a.flags|=128,r=!0,er(t,!1),a.lanes=4194304)}else{if(!r)if(n=nl(l),n!==null){if(a.flags|=128,r=!0,n=n.updateQueue,a.updateQueue=n,ul(a,n),er(t,!0),t.tail===null&&t.tailMode==="hidden"&&!l.alternate&&!J)return un(a),null}else 2*In()-t.renderingStartTime>yl&&e!==536870912&&(a.flags|=128,r=!0,er(t,!1),a.lanes=4194304);t.isBackwards?(l.sibling=a.child,a.child=l):(n=t.last,n!==null?n.sibling=l:a.child=l,t.last=l)}return t.tail!==null?(n=t.tail,t.rendering=n,t.tail=n.sibling,t.renderingStartTime=In(),n.sibling=null,e=xn.current,S(xn,r?e&1|2:e&1),J&&_a(a,t.treeForkCount),n):(un(a),null);case 22:case 23:return ta(a),Fi(),t=a.memoizedState!==null,n!==null?n.memoizedState!==null!==t&&(a.flags|=8192):t&&(a.flags|=8192),t?(e&536870912)!==0&&(a.flags&128)===0&&(un(a),a.subtreeFlags&6&&(a.flags|=8192)):un(a),e=a.updateQueue,e!==null&&ul(a,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==e&&(a.flags|=2048),n!==null&&w(Ne),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),Ra(wn),un(a),null;case 25:return null;case 30:return null}throw Error(b(156,a.tag))}function Pu(n,a){switch(Ti(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Ra(wn),yn(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Er(a),null;case 31:if(a.memoizedState!==null){if(ta(a),a.alternate===null)throw Error(b(340));Be()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 13:if(ta(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(b(340));Be()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return w(xn),null;case 4:return yn(),null;case 10:return Ra(a.type),null;case 22:case 23:return ta(a),Fi(),n!==null&&w(Ne),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Ra(wn),null;case 25:return null;default:return null}}function Yc(n,a){switch(Ti(a),a.tag){case 3:Ra(wn),yn();break;case 26:case 27:case 5:Er(a);break;case 4:yn();break;case 31:a.memoizedState!==null&&ta(a);break;case 13:ta(a);break;case 19:w(xn);break;case 10:Ra(a.type);break;case 22:case 23:ta(a),Fi(),n!==null&&w(Ne);break;case 24:Ra(wn)}}function tr(n,a){try{var e=a.updateQueue,t=e!==null?e.lastEffect:null;if(t!==null){var r=t.next;e=r;do{if((e.tag&n)===n){t=void 0;var l=e.create,i=e.inst;t=l(),i.destroy=t}e=e.next}while(e!==r)}}catch(s){tn(a,a.return,s)}}function oe(n,a,e){try{var t=a.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var l=r.next;t=l;do{if((t.tag&n)===n){var i=t.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,r=a;var d=e,u=s;try{u()}catch(m){tn(r,d,m)}}}t=t.next}while(t!==l)}}catch(m){tn(a,a.return,m)}}function Vc(n){var a=n.updateQueue;if(a!==null){var e=n.stateNode;try{qo(a,e)}catch(t){tn(n,n.return,t)}}}function Gc(n,a,e){e.props=He(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(t){tn(n,a,t)}}function rr(n,a){try{var e=n.ref;if(e!==null){switch(n.tag){case 26:case 27:case 5:var t=n.stateNode;break;case 30:t=n.stateNode;break;default:t=n.stateNode}typeof e=="function"?n.refCleanup=e(t):e.current=t}}catch(r){tn(n,a,r)}}function Ca(n,a){var e=n.ref,t=n.refCleanup;if(e!==null)if(typeof t=="function")try{t()}catch(r){tn(n,a,r)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(r){tn(n,a,r)}else e.current=null}function Xc(n){var a=n.type,e=n.memoizedProps,t=n.stateNode;try{n:switch(a){case"button":case"input":case"select":case"textarea":e.autoFocus&&t.focus();break n;case"img":e.src?t.src=e.src:e.srcSet&&(t.srcset=e.srcSet)}}catch(r){tn(n,n.return,r)}}function xs(n,a,e){try{var t=n.stateNode;hb(t,n.type,e,a),t[Vn]=a}catch(r){tn(n,n.return,r)}}function Qc(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&fe(n.type)||n.tag===4}function hs(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Qc(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&fe(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ws(n,a,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,a?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(n,a):(a=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.appendChild(n),e=e._reactRootContainer,e!=null||a.onclick!==null||(a.onclick=qa));else if(t!==4&&(t===27&&fe(n.type)&&(e=n.stateNode,a=null),n=n.child,n!==null))for(ws(n,a,e),n=n.sibling;n!==null;)ws(n,a,e),n=n.sibling}function bl(n,a,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,a?e.insertBefore(n,a):e.appendChild(n);else if(t!==4&&(t===27&&fe(n.type)&&(e=n.stateNode),n=n.child,n!==null))for(bl(n,a,e),n=n.sibling;n!==null;)bl(n,a,e),n=n.sibling}function Zc(n){var a=n.stateNode,e=n.memoizedProps;try{for(var t=n.type,r=a.attributes;r.length;)a.removeAttributeNode(r[0]);qn(a,t,e),a[Mn]=n,a[Vn]=e}catch(l){tn(n,n.return,l)}}var Va=!1,En=!1,ks=!1,$c=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function Wu(n,a){if(n=n.containerInfo,Vs=Ll,n=lo(n),gi(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var t=e.getSelection&&e.getSelection();if(t&&t.rangeCount!==0){e=t.anchorNode;var r=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{e.nodeType,l.nodeType}catch{e=null;break n}var i=0,s=-1,d=-1,u=0,m=0,h=n,g=null;a:for(;;){for(var f;h!==e||r!==0&&h.nodeType!==3||(s=i+r),h!==l||t!==0&&h.nodeType!==3||(d=i+t),h.nodeType===3&&(i+=h.nodeValue.length),(f=h.firstChild)!==null;)g=h,h=f;for(;;){if(h===n)break a;if(g===e&&++u===r&&(s=i),g===l&&++m===t&&(d=i),(f=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=f}e=s===-1||d===-1?null:{start:s,end:d}}else e=null}e=e||{start:0,end:0}}else e=null;for(Gs={focusedElem:n,selectionRange:e},Ll=!1,Cn=a;Cn!==null;)if(a=Cn,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,Cn=n;else for(;Cn!==null;){switch(a=Cn,l=a.alternate,n=a.flags,a.tag){case 0:if((n&4)!==0&&(n=a.updateQueue,n=n!==null?n.events:null,n!==null))for(e=0;e<n.length;e++)r=n[e],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){n=void 0,e=a,r=l.memoizedProps,l=l.memoizedState,t=e.stateNode;try{var A=He(e.type,r);n=t.getSnapshotBeforeUpdate(A,l),t.__reactInternalSnapshotBeforeUpdate=n}catch(L){tn(e,e.return,L)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,e=n.nodeType,e===9)Zs(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Zs(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(b(163))}if(n=a.sibling,n!==null){n.return=a.return,Cn=n;break}Cn=a.return}}function Kc(n,a,e){var t=e.flags;switch(e.tag){case 0:case 11:case 15:Xa(n,e),t&4&&tr(5,e);break;case 1:if(Xa(n,e),t&4)if(n=e.stateNode,a===null)try{n.componentDidMount()}catch(i){tn(e,e.return,i)}else{var r=He(e.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(r,a,n.__reactInternalSnapshotBeforeUpdate)}catch(i){tn(e,e.return,i)}}t&64&&Vc(e),t&512&&rr(e,e.return);break;case 3:if(Xa(n,e),t&64&&(n=e.updateQueue,n!==null)){if(a=null,e.child!==null)switch(e.child.tag){case 27:case 5:a=e.child.stateNode;break;case 1:a=e.child.stateNode}try{qo(n,a)}catch(i){tn(e,e.return,i)}}break;case 27:a===null&&t&4&&Zc(e);case 26:case 5:Xa(n,e),a===null&&t&4&&Xc(e),t&512&&rr(e,e.return);break;case 12:Xa(n,e);break;case 31:Xa(n,e),t&4&&Pc(n,e);break;case 13:Xa(n,e),t&4&&Wc(n,e),t&64&&(n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(e=db.bind(null,e),Cb(n,e))));break;case 22:if(t=e.memoizedState!==null||Va,!t){a=a!==null&&a.memoizedState!==null||En,r=Va;var l=En;Va=t,(En=a)&&!l?Qa(n,e,(e.subtreeFlags&8772)!==0):Xa(n,e),Va=r,En=l}break;case 30:break;default:Xa(n,e)}}function Jc(n){var a=n.alternate;a!==null&&(n.alternate=null,Jc(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&Pl(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var bn=null,Xn=!1;function Ga(n,a,e){for(e=e.child;e!==null;)Ic(n,a,e),e=e.sibling}function Ic(n,a,e){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Ct,e)}catch{}switch(e.tag){case 26:En||Ca(e,a),Ga(n,a,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:En||Ca(e,a);var t=bn,r=Xn;fe(e.type)&&(bn=e.stateNode,Xn=!1),Ga(n,a,e),ur(e.stateNode),bn=t,Xn=r;break;case 5:En||Ca(e,a);case 6:if(t=bn,r=Xn,bn=null,Ga(n,a,e),bn=t,Xn=r,bn!==null)if(Xn)try{(bn.nodeType===9?bn.body:bn.nodeName==="HTML"?bn.ownerDocument.body:bn).removeChild(e.stateNode)}catch(l){tn(e,a,l)}else try{bn.removeChild(e.stateNode)}catch(l){tn(e,a,l)}break;case 18:bn!==null&&(Xn?(n=bn,Vv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.stateNode),Tt(n)):Vv(bn,e.stateNode));break;case 4:t=bn,r=Xn,bn=e.stateNode.containerInfo,Xn=!0,Ga(n,a,e),bn=t,Xn=r;break;case 0:case 11:case 14:case 15:oe(2,e,a),En||oe(4,e,a),Ga(n,a,e);break;case 1:En||(Ca(e,a),t=e.stateNode,typeof t.componentWillUnmount=="function"&&Gc(e,a,t)),Ga(n,a,e);break;case 21:Ga(n,a,e);break;case 22:En=(t=En)||e.memoizedState!==null,Ga(n,a,e),En=t;break;default:Ga(n,a,e)}}function Pc(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Tt(n)}catch(e){tn(a,a.return,e)}}}function Wc(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Tt(n)}catch(e){tn(a,a.return,e)}}function nb(n){switch(n.tag){case 31:case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new $c),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new $c),a;default:throw Error(b(435,n.tag))}}function gl(n,a){var e=nb(n);a.forEach(function(t){if(!e.has(t)){e.add(t);var r=ob.bind(null,n,t);t.then(r,r)}})}function Qn(n,a){var e=a.deletions;if(e!==null)for(var t=0;t<e.length;t++){var r=e[t],l=n,i=a,s=i;n:for(;s!==null;){switch(s.tag){case 27:if(fe(s.type)){bn=s.stateNode,Xn=!1;break n}break;case 5:bn=s.stateNode,Xn=!1;break n;case 3:case 4:bn=s.stateNode.containerInfo,Xn=!0;break n}s=s.return}if(bn===null)throw Error(b(160));Ic(l,i,r),bn=null,Xn=!1,l=r.alternate,l!==null&&(l.return=null),r.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)nv(a,n),a=a.sibling}var ha=null;function nv(n,a){var e=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Qn(a,n),Zn(n),t&4&&(oe(3,n,n.return),tr(3,n),oe(5,n,n.return));break;case 1:Qn(a,n),Zn(n),t&512&&(En||e===null||Ca(e,e.return)),t&64&&Va&&(n=n.updateQueue,n!==null&&(t=n.callbacks,t!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?t:e.concat(t))));break;case 26:var r=ha;if(Qn(a,n),Zn(n),t&512&&(En||e===null||Ca(e,e.return)),t&4){var l=e!==null?e.memoizedState:null;if(t=n.memoizedState,e===null)if(t===null)if(n.stateNode===null){n:{t=n.type,e=n.memoizedProps,r=r.ownerDocument||r;a:switch(t){case"title":l=r.getElementsByTagName("title")[0],(!l||l[Bt]||l[Mn]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=r.createElement(t),r.head.insertBefore(l,r.querySelector("head > title"))),qn(l,t,e),l[Mn]=n,An(l),t=l;break n;case"link":var i=np("link","href",r).get(t+(e.href||""));if(i){for(var s=0;s<i.length;s++)if(l=i[s],l.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&l.getAttribute("rel")===(e.rel==null?null:e.rel)&&l.getAttribute("title")===(e.title==null?null:e.title)&&l.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(s,1);break a}}l=r.createElement(t),qn(l,t,e),r.head.appendChild(l);break;case"meta":if(i=np("meta","content",r).get(t+(e.content||""))){for(s=0;s<i.length;s++)if(l=i[s],l.getAttribute("content")===(e.content==null?null:""+e.content)&&l.getAttribute("name")===(e.name==null?null:e.name)&&l.getAttribute("property")===(e.property==null?null:e.property)&&l.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&l.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(s,1);break a}}l=r.createElement(t),qn(l,t,e),r.head.appendChild(l);break;default:throw Error(b(468,t))}l[Mn]=n,An(l),t=l}n.stateNode=t}else ap(r,n.type,n.stateNode);else n.stateNode=Wv(r,t,n.memoizedProps);else l!==t?(l===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):l.count--,t===null?ap(r,n.type,n.stateNode):Wv(r,t,n.memoizedProps)):t===null&&n.stateNode!==null&&xs(n,n.memoizedProps,e.memoizedProps)}break;case 27:Qn(a,n),Zn(n),t&512&&(En||e===null||Ca(e,e.return)),e!==null&&t&4&&xs(n,n.memoizedProps,e.memoizedProps);break;case 5:if(Qn(a,n),Zn(n),t&512&&(En||e===null||Ca(e,e.return)),n.flags&32){r=n.stateNode;try{Ke(r,"")}catch(A){tn(n,n.return,A)}}t&4&&n.stateNode!=null&&(r=n.memoizedProps,xs(n,r,e!==null?e.memoizedProps:r)),t&1024&&(ks=!0);break;case 6:if(Qn(a,n),Zn(n),t&4){if(n.stateNode===null)throw Error(b(162));t=n.memoizedProps,e=n.stateNode;try{e.nodeValue=t}catch(A){tn(n,n.return,A)}}break;case 3:if(Bl=null,r=ha,ha=Ml(a.containerInfo),Qn(a,n),ha=r,Zn(n),t&4&&e!==null&&e.memoizedState.isDehydrated)try{Tt(a.containerInfo)}catch(A){tn(n,n.return,A)}ks&&(ks=!1,av(n));break;case 4:t=ha,ha=Ml(n.stateNode.containerInfo),Qn(a,n),Zn(n),ha=t;break;case 12:Qn(a,n),Zn(n);break;case 31:Qn(a,n),Zn(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,gl(n,t)));break;case 13:Qn(a,n),Zn(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(ml=In()),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,gl(n,t)));break;case 22:r=n.memoizedState!==null;var d=e!==null&&e.memoizedState!==null,u=Va,m=En;if(Va=u||r,En=m||d,Qn(a,n),En=m,Va=u,Zn(n),t&8192)n:for(a=n.stateNode,a._visibility=r?a._visibility&-2:a._visibility|1,r&&(e===null||d||Va||En||Ue(n)),e=null,a=n;;){if(a.tag===5||a.tag===26){if(e===null){d=e=a;try{if(l=d.stateNode,r)i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=d.stateNode;var h=d.memoizedProps.style,g=h!=null&&h.hasOwnProperty("display")?h.display:null;s.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(A){tn(d,d.return,A)}}}else if(a.tag===6){if(e===null){d=a;try{d.stateNode.nodeValue=r?"":d.memoizedProps}catch(A){tn(d,d.return,A)}}}else if(a.tag===18){if(e===null){d=a;try{var f=d.stateNode;r?Gv(f,!0):Gv(d.stateNode,!1)}catch(A){tn(d,d.return,A)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break n;for(;a.sibling===null;){if(a.return===null||a.return===n)break n;e===a&&(e=null),a=a.return}e===a&&(e=null),a.sibling.return=a.return,a=a.sibling}t&4&&(t=n.updateQueue,t!==null&&(e=t.retryQueue,e!==null&&(t.retryQueue=null,gl(n,e))));break;case 19:Qn(a,n),Zn(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,gl(n,t)));break;case 30:break;case 21:break;default:Qn(a,n),Zn(n)}}function Zn(n){var a=n.flags;if(a&2){try{for(var e,t=n.return;t!==null;){if(Qc(t)){e=t;break}t=t.return}if(e==null)throw Error(b(160));switch(e.tag){case 27:var r=e.stateNode,l=hs(n);bl(n,l,r);break;case 5:var i=e.stateNode;e.flags&32&&(Ke(i,""),e.flags&=-33);var s=hs(n);bl(n,s,i);break;case 3:case 4:var d=e.stateNode.containerInfo,u=hs(n);ws(n,u,d);break;default:throw Error(b(161))}}catch(m){tn(n,n.return,m)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function av(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;av(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Xa(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Kc(n,a.alternate,a),a=a.sibling}function Ue(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:oe(4,a,a.return),Ue(a);break;case 1:Ca(a,a.return);var e=a.stateNode;typeof e.componentWillUnmount=="function"&&Gc(a,a.return,e),Ue(a);break;case 27:ur(a.stateNode);case 26:case 5:Ca(a,a.return),Ue(a);break;case 22:a.memoizedState===null&&Ue(a);break;case 30:Ue(a);break;default:Ue(a)}n=n.sibling}}function Qa(n,a,e){for(e=e&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var t=a.alternate,r=n,l=a,i=l.flags;switch(l.tag){case 0:case 11:case 15:Qa(r,l,e),tr(4,l);break;case 1:if(Qa(r,l,e),t=l,r=t.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(u){tn(t,t.return,u)}if(t=l,r=t.updateQueue,r!==null){var s=t.stateNode;try{var d=r.shared.hiddenCallbacks;if(d!==null)for(r.shared.hiddenCallbacks=null,r=0;r<d.length;r++)Oo(d[r],s)}catch(u){tn(t,t.return,u)}}e&&i&64&&Vc(l),rr(l,l.return);break;case 27:Zc(l);case 26:case 5:Qa(r,l,e),e&&t===null&&i&4&&Xc(l),rr(l,l.return);break;case 12:Qa(r,l,e);break;case 31:Qa(r,l,e),e&&i&4&&Pc(r,l);break;case 13:Qa(r,l,e),e&&i&4&&Wc(r,l);break;case 22:l.memoizedState===null&&Qa(r,l,e),rr(l,l.return);break;case 30:break;default:Qa(r,l,e)}a=a.sibling}}function zs(n,a){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&Gt(e))}function Es(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Gt(n))}function wa(n,a,e,t){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)ev(n,a,e,t),a=a.sibling}function ev(n,a,e,t){var r=a.flags;switch(a.tag){case 0:case 11:case 15:wa(n,a,e,t),r&2048&&tr(9,a);break;case 1:wa(n,a,e,t);break;case 3:wa(n,a,e,t),r&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Gt(n)));break;case 12:if(r&2048){wa(n,a,e,t),n=a.stateNode;try{var l=a.memoizedProps,i=l.id,s=l.onPostCommit;typeof s=="function"&&s(i,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(d){tn(a,a.return,d)}}else wa(n,a,e,t);break;case 31:wa(n,a,e,t);break;case 13:wa(n,a,e,t);break;case 23:break;case 22:l=a.stateNode,i=a.alternate,a.memoizedState!==null?l._visibility&2?wa(n,a,e,t):lr(n,a):l._visibility&2?wa(n,a,e,t):(l._visibility|=2,gt(n,a,e,t,(a.subtreeFlags&10256)!==0||!1)),r&2048&&zs(i,a);break;case 24:wa(n,a,e,t),r&2048&&Es(a.alternate,a);break;default:wa(n,a,e,t)}}function gt(n,a,e,t,r){for(r=r&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var l=n,i=a,s=e,d=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:gt(l,i,s,d,r),tr(8,i);break;case 23:break;case 22:var m=i.stateNode;i.memoizedState!==null?m._visibility&2?gt(l,i,s,d,r):lr(l,i):(m._visibility|=2,gt(l,i,s,d,r)),r&&u&2048&&zs(i.alternate,i);break;case 24:gt(l,i,s,d,r),r&&u&2048&&Es(i.alternate,i);break;default:gt(l,i,s,d,r)}a=a.sibling}}function lr(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var e=n,t=a,r=t.flags;switch(t.tag){case 22:lr(e,t),r&2048&&zs(t.alternate,t);break;case 24:lr(e,t),r&2048&&Es(t.alternate,t);break;default:lr(e,t)}a=a.sibling}}var ir=8192;function ft(n,a,e){if(n.subtreeFlags&ir)for(n=n.child;n!==null;)tv(n,a,e),n=n.sibling}function tv(n,a,e){switch(n.tag){case 26:ft(n,a,e),n.flags&ir&&n.memoizedState!==null&&Ub(e,ha,n.memoizedState,n.memoizedProps);break;case 5:ft(n,a,e);break;case 3:case 4:var t=ha;ha=Ml(n.stateNode.containerInfo),ft(n,a,e),ha=t;break;case 22:n.memoizedState===null&&(t=n.alternate,t!==null&&t.memoizedState!==null?(t=ir,ir=16777216,ft(n,a,e),ir=t):ft(n,a,e));break;default:ft(n,a,e)}}function rv(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function sr(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var t=a[e];Cn=t,iv(t,n)}rv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)lv(n),n=n.sibling}function lv(n){switch(n.tag){case 0:case 11:case 15:sr(n),n.flags&2048&&oe(9,n,n.return);break;case 3:sr(n);break;case 12:sr(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,fl(n)):sr(n);break;default:sr(n)}}function fl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var t=a[e];Cn=t,iv(t,n)}rv(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:oe(8,a,a.return),fl(a);break;case 22:e=a.stateNode,e._visibility&2&&(e._visibility&=-3,fl(a));break;default:fl(a)}n=n.sibling}}function iv(n,a){for(;Cn!==null;){var e=Cn;switch(e.tag){case 0:case 11:case 15:oe(8,e,a);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var t=e.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:Gt(e.memoizedState.cache)}if(t=e.child,t!==null)t.return=e,Cn=t;else n:for(e=n;Cn!==null;){t=Cn;var r=t.sibling,l=t.return;if(Jc(t),t===e){Cn=null;break n}if(r!==null){r.return=l,Cn=r;break n}Cn=l}}}var ab={getCacheForType:function(n){var a=Bn(wn),e=a.data.get(n);return e===void 0&&(e=n(),a.data.set(n,e)),e},cacheSignal:function(){return Bn(wn).controller.signal}},eb=typeof WeakMap=="function"?WeakMap:Map,W=0,vn=null,X=null,Z=0,en=0,ra=null,ce=!1,mt=!1,Ss=!1,Za=0,mn=0,ve=0,Fe=0,Ts=0,la=0,yt=0,dr=null,$n=null,As=!1,ml=0,sv=0,yl=1/0,xl=null,pe=null,Sn=0,ue=null,xt=null,$a=0,Cs=0,Ms=null,dv=null,or=0,Ds=null;function ia(){return(W&2)!==0&&Z!==0?Z&-Z:y.T!==null?_s():zd()}function ov(){if(la===0)if((Z&536870912)===0||J){var n=Ar;Ar<<=1,(Ar&3932160)===0&&(Ar=262144),la=n}else la=536870912;return n=ea.current,n!==null&&(n.flags|=32),la}function Kn(n,a,e){(n===vn&&(en===2||en===9)||n.cancelPendingCommit!==null)&&(ht(n,0),be(n,Z,la,!1)),Dt(n,e),((W&2)===0||n!==vn)&&(n===vn&&((W&2)===0&&(Fe|=e),mn===4&&be(n,Z,la,!1)),Ma(n))}function cv(n,a,e){if((W&6)!==0)throw Error(b(327));var t=!e&&(a&127)===0&&(a&n.expiredLanes)===0||Mt(n,a),r=t?lb(n,a):Os(n,a,!0),l=t;do{if(r===0){mt&&!t&&be(n,a,0,!1);break}else{if(e=n.current.alternate,l&&!tb(e)){r=Os(n,a,!1),l=!1;continue}if(r===2){if(l=a,n.errorRecoveryDisabledLanes&l)var i=0;else i=n.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){a=i;n:{var s=n;r=dr;var d=s.current.memoizedState.isDehydrated;if(d&&(ht(s,i).flags|=256),i=Os(s,i,!1),i!==2){if(Ss&&!d){s.errorRecoveryDisabledLanes|=l,Fe|=l,r=4;break n}l=$n,$n=r,l!==null&&($n===null?$n=l:$n.push.apply($n,l))}r=i}if(l=!1,r!==2)continue}}if(r===1){ht(n,0),be(n,a,0,!0);break}n:{switch(t=n,l=r,l){case 0:case 1:throw Error(b(345));case 4:if((a&4194048)!==a)break;case 6:be(t,a,la,!ce);break n;case 2:$n=null;break;case 3:case 5:break;default:throw Error(b(329))}if((a&62914560)===a&&(r=ml+300-In(),10<r)){if(be(t,a,la,!ce),Mr(t,0,!0)!==0)break n;$a=a,t.timeoutHandle=Fv(vv.bind(null,t,e,$n,xl,As,a,la,Fe,yt,ce,l,"Throttled",-0,0),r);break n}vv(t,e,$n,xl,As,a,la,Fe,yt,ce,l,null,-0,0)}}break}while(!0);Ma(n)}function vv(n,a,e,t,r,l,i,s,d,u,m,h,g,f){if(n.timeoutHandle=-1,h=a.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qa},tv(a,l,h);var A=(l&62914560)===l?ml-In():(l&4194048)===l?sv-In():0;if(A=Fb(h,A),A!==null){$a=l,n.cancelPendingCommit=A(xv.bind(null,n,a,l,e,t,r,i,s,d,m,h,null,g,f)),be(n,l,i,!u);return}}xv(n,a,l,e,t,r,i,s,d)}function tb(n){for(var a=n;;){var e=a.tag;if((e===0||e===11||e===15)&&a.flags&16384&&(e=a.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var t=0;t<e.length;t++){var r=e[t],l=r.getSnapshot;r=r.value;try{if(!na(l(),r))return!1}catch{return!1}}if(e=a.child,a.subtreeFlags&16384&&e!==null)e.return=a,a=e;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function be(n,a,e,t){a&=~Ts,a&=~Fe,n.suspendedLanes|=a,n.pingedLanes&=~a,t&&(n.warmLanes|=a),t=n.expirationTimes;for(var r=a;0<r;){var l=31-Wn(r),i=1<<l;t[l]=-1,r&=~i}e!==0&&hd(n,e,a)}function hl(){return(W&6)===0?(cr(0),!1):!0}function Bs(){if(X!==null){if(en===0)var n=X.return;else n=X,ja=Oe=null,Zi(n),ct=null,Qt=0,n=X;for(;n!==null;)Yc(n.alternate,n),n=n.return;X=null}}function ht(n,a){var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,zb(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),$a=0,Bs(),vn=n,X=e=La(n.current,null),Z=a,en=0,ra=null,ce=!1,mt=Mt(n,a),Ss=!1,yt=la=Ts=Fe=ve=mn=0,$n=dr=null,As=!1,(a&8)!==0&&(a|=a&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=a;0<t;){var r=31-Wn(t),l=1<<r;a|=n[r],t&=~l}return Za=a,Fr(),e}function pv(n,a){F=null,y.H=nr,a===ot||a===Kr?(a=Co(),en=3):a===Li?(a=Co(),en=4):en=a===os?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ra=a,X===null&&(mn=1,ol(n,va(a,n.current)))}function uv(){var n=ea.current;return n===null?!0:(Z&4194048)===Z?ga===null:(Z&62914560)===Z||(Z&536870912)!==0?n===ga:!1}function bv(){var n=y.H;return y.H=nr,n===null?nr:n}function gv(){var n=y.A;return y.A=ab,n}function wl(){mn=4,ce||(Z&4194048)!==Z&&ea.current!==null||(mt=!0),(ve&134217727)===0&&(Fe&134217727)===0||vn===null||be(vn,Z,la,!1)}function Os(n,a,e){var t=W;W|=2;var r=bv(),l=gv();(vn!==n||Z!==a)&&(xl=null,ht(n,a)),a=!1;var i=mn;n:do try{if(en!==0&&X!==null){var s=X,d=ra;switch(en){case 8:Bs(),i=6;break n;case 3:case 2:case 9:case 6:ea.current===null&&(a=!0);var u=en;if(en=0,ra=null,wt(n,s,d,u),e&&mt){i=0;break n}break;default:u=en,en=0,ra=null,wt(n,s,d,u)}}rb(),i=mn;break}catch(m){pv(n,m)}while(!0);return a&&n.shellSuspendCounter++,ja=Oe=null,W=t,y.H=r,y.A=l,X===null&&(vn=null,Z=0,Fr()),i}function rb(){for(;X!==null;)fv(X)}function lb(n,a){var e=W;W|=2;var t=bv(),r=gv();vn!==n||Z!==a?(xl=null,yl=In()+500,ht(n,a)):mt=Mt(n,a);n:do try{if(en!==0&&X!==null){a=X;var l=ra;a:switch(en){case 1:en=0,ra=null,wt(n,a,l,1);break;case 2:case 9:if(To(l)){en=0,ra=null,mv(a);break}a=function(){en!==2&&en!==9||vn!==n||(en=7),Ma(n)},l.then(a,a);break n;case 3:en=7;break n;case 4:en=5;break n;case 7:To(l)?(en=0,ra=null,mv(a)):(en=0,ra=null,wt(n,a,l,7));break;case 5:var i=null;switch(X.tag){case 26:i=X.memoizedState;case 5:case 27:var s=X;if(i?ep(i):s.stateNode.complete){en=0,ra=null;var d=s.sibling;if(d!==null)X=d;else{var u=s.return;u!==null?(X=u,kl(u)):X=null}break a}}en=0,ra=null,wt(n,a,l,5);break;case 6:en=0,ra=null,wt(n,a,l,6);break;case 8:Bs(),mn=6;break n;default:throw Error(b(462))}}ib();break}catch(m){pv(n,m)}while(!0);return ja=Oe=null,y.H=t,y.A=r,W=e,X!==null?0:(vn=null,Z=0,Fr(),mn)}function ib(){for(;X!==null&&!Mp();)fv(X)}function fv(n){var a=Uc(n.alternate,n,Za);n.memoizedProps=n.pendingProps,a===null?kl(n):X=a}function mv(n){var a=n,e=a.alternate;switch(a.tag){case 15:case 0:a=Nc(e,a,a.pendingProps,a.type,void 0,Z);break;case 11:a=Nc(e,a,a.pendingProps,a.type.render,a.ref,Z);break;case 5:Zi(a);default:Yc(e,a),a=X=go(a,Za),a=Uc(e,a,Za)}n.memoizedProps=n.pendingProps,a===null?kl(n):X=a}function wt(n,a,e,t){ja=Oe=null,Zi(a),ct=null,Qt=0;var r=a.return;try{if($u(n,r,a,e,Z)){mn=1,ol(n,va(e,n.current)),X=null;return}}catch(l){if(r!==null)throw X=r,l;mn=1,ol(n,va(e,n.current)),X=null;return}a.flags&32768?(J||t===1?n=!0:mt||(Z&536870912)!==0?n=!1:(ce=n=!0,(t===2||t===9||t===3||t===6)&&(t=ea.current,t!==null&&t.tag===13&&(t.flags|=16384))),yv(a,n)):kl(a)}function kl(n){var a=n;do{if((a.flags&32768)!==0){yv(a,ce);return}n=a.return;var e=Iu(a.alternate,a,Za);if(e!==null){X=e;return}if(a=a.sibling,a!==null){X=a;return}X=a=n}while(a!==null);mn===0&&(mn=5)}function yv(n,a){do{var e=Pu(n.alternate,n);if(e!==null){e.flags&=32767,X=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!a&&(n=n.sibling,n!==null)){X=n;return}X=n=e}while(n!==null);mn=6,X=null}function xv(n,a,e,t,r,l,i,s,d){n.cancelPendingCommit=null;do zl();while(Sn!==0);if((W&6)!==0)throw Error(b(327));if(a!==null){if(a===n.current)throw Error(b(177));if(l=a.lanes|a.childLanes,l|=hi,Hp(n,e,l,i,s,d),n===vn&&(X=vn=null,Z=0),xt=a,ue=n,$a=e,Cs=l,Ms=r,dv=t,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,cb(Sr,function(){return Ev(),null})):(n.callbackNode=null,n.callbackPriority=0),t=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||t){t=y.T,y.T=null,r=E.p,E.p=2,i=W,W|=4;try{Wu(n,a,e)}finally{W=i,E.p=r,y.T=t}}Sn=1,hv(),wv(),kv()}}function hv(){if(Sn===1){Sn=0;var n=ue,a=xt,e=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||e){e=y.T,y.T=null;var t=E.p;E.p=2;var r=W;W|=4;try{nv(a,n);var l=Gs,i=lo(n.containerInfo),s=l.focusedElem,d=l.selectionRange;if(i!==s&&s&&s.ownerDocument&&ro(s.ownerDocument.documentElement,s)){if(d!==null&&gi(s)){var u=d.start,m=d.end;if(m===void 0&&(m=u),"selectionStart"in s)s.selectionStart=u,s.selectionEnd=Math.min(m,s.value.length);else{var h=s.ownerDocument||document,g=h&&h.defaultView||window;if(g.getSelection){var f=g.getSelection(),A=s.textContent.length,L=Math.min(d.start,A),dn=d.end===void 0?L:Math.min(d.end,A);!f.extend&&L>dn&&(i=dn,dn=L,L=i);var v=to(s,L),o=to(s,dn);if(v&&o&&(f.rangeCount!==1||f.anchorNode!==v.node||f.anchorOffset!==v.offset||f.focusNode!==o.node||f.focusOffset!==o.offset)){var p=h.createRange();p.setStart(v.node,v.offset),f.removeAllRanges(),L>dn?(f.addRange(p),f.extend(o.node,o.offset)):(p.setEnd(o.node,o.offset),f.addRange(p))}}}}for(h=[],f=s;f=f.parentNode;)f.nodeType===1&&h.push({element:f,left:f.scrollLeft,top:f.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<h.length;s++){var x=h[s];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Ll=!!Vs,Gs=Vs=null}finally{W=r,E.p=t,y.T=e}}n.current=a,Sn=2}}function wv(){if(Sn===2){Sn=0;var n=ue,a=xt,e=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||e){e=y.T,y.T=null;var t=E.p;E.p=2;var r=W;W|=4;try{Kc(n,a.alternate,a)}finally{W=r,E.p=t,y.T=e}}Sn=3}}function kv(){if(Sn===4||Sn===3){Sn=0,Dp();var n=ue,a=xt,e=$a,t=dv;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Sn=5:(Sn=0,xt=ue=null,zv(n,n.pendingLanes));var r=n.pendingLanes;if(r===0&&(pe=null),Jl(e),a=a.stateNode,Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Ct,a,void 0,(a.current.flags&128)===128)}catch{}if(t!==null){a=y.T,r=E.p,E.p=2,y.T=null;try{for(var l=n.onRecoverableError,i=0;i<t.length;i++){var s=t[i];l(s.value,{componentStack:s.stack})}}finally{y.T=a,E.p=r}}($a&3)!==0&&zl(),Ma(n),r=n.pendingLanes,(e&261930)!==0&&(r&42)!==0?n===Ds?or++:(or=0,Ds=n):or=0,cr(0)}}function zv(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,Gt(a)))}function zl(){return hv(),wv(),kv(),Ev()}function Ev(){if(Sn!==5)return!1;var n=ue,a=Cs;Cs=0;var e=Jl($a),t=y.T,r=E.p;try{E.p=32>e?32:e,y.T=null,e=Ms,Ms=null;var l=ue,i=$a;if(Sn=0,xt=ue=null,$a=0,(W&6)!==0)throw Error(b(331));var s=W;if(W|=4,lv(l.current),ev(l,l.current,i,e),W=s,cr(0,!1),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Ct,l)}catch{}return!0}finally{E.p=r,y.T=t,zv(n,a)}}function Sv(n,a,e){a=va(e,a),a=ds(n.stateNode,a,2),n=ie(n,a,2),n!==null&&(Dt(n,2),Ma(n))}function tn(n,a,e){if(n.tag===3)Sv(n,n,e);else for(;a!==null;){if(a.tag===3){Sv(a,n,e);break}else if(a.tag===1){var t=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(pe===null||!pe.has(t))){n=va(e,n),e=Tc(2),t=ie(a,e,2),t!==null&&(Ac(e,t,a,n),Dt(t,2),Ma(t));break}}a=a.return}}function qs(n,a,e){var t=n.pingCache;if(t===null){t=n.pingCache=new eb;var r=new Set;t.set(a,r)}else r=t.get(a),r===void 0&&(r=new Set,t.set(a,r));r.has(e)||(Ss=!0,r.add(e),n=sb.bind(null,n,a,e),a.then(n,n))}function sb(n,a,e){var t=n.pingCache;t!==null&&t.delete(a),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,vn===n&&(Z&e)===e&&(mn===4||mn===3&&(Z&62914560)===Z&&300>In()-ml?(W&2)===0&&ht(n,0):Ts|=e,yt===Z&&(yt=0)),Ma(n)}function Tv(n,a){a===0&&(a=xd()),n=Me(n,a),n!==null&&(Dt(n,a),Ma(n))}function db(n){var a=n.memoizedState,e=0;a!==null&&(e=a.retryLane),Tv(n,e)}function ob(n,a){var e=0;switch(n.tag){case 31:case 13:var t=n.stateNode,r=n.memoizedState;r!==null&&(e=r.retryLane);break;case 19:t=n.stateNode;break;case 22:t=n.stateNode._retryCache;break;default:throw Error(b(314))}t!==null&&t.delete(a),Tv(n,e)}function cb(n,a){return Ql(n,a)}var El=null,kt=null,Ns=!1,Sl=!1,Ls=!1,ge=0;function Ma(n){n!==kt&&n.next===null&&(kt===null?El=kt=n:kt=kt.next=n),Sl=!0,Ns||(Ns=!0,pb())}function cr(n,a){if(!Ls&&Sl){Ls=!0;do for(var e=!1,t=El;t!==null;){if(n!==0){var r=t.pendingLanes;if(r===0)var l=0;else{var i=t.suspendedLanes,s=t.pingedLanes;l=(1<<31-Wn(42|n)+1)-1,l&=r&~(i&~s),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(e=!0,Dv(t,l))}else l=Z,l=Mr(t,t===vn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(l&3)===0||Mt(t,l)||(e=!0,Dv(t,l));t=t.next}while(e);Ls=!1}}function vb(){Av()}function Av(){Sl=Ns=!1;var n=0;ge!==0&&kb()&&(n=ge);for(var a=In(),e=null,t=El;t!==null;){var r=t.next,l=Cv(t,a);l===0?(t.next=null,e===null?El=r:e.next=r,r===null&&(kt=e)):(e=t,(n!==0||(l&3)!==0)&&(Sl=!0)),t=r}Sn!==0&&Sn!==5||cr(n),ge!==0&&(ge=0)}function Cv(n,a){for(var e=n.suspendedLanes,t=n.pingedLanes,r=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var i=31-Wn(l),s=1<<i,d=r[i];d===-1?((s&e)===0||(s&t)!==0)&&(r[i]=Rp(s,a)):d<=a&&(n.expiredLanes|=s),l&=~s}if(a=vn,e=Z,e=Mr(n,n===a?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t=n.callbackNode,e===0||n===a&&(en===2||en===9)||n.cancelPendingCommit!==null)return t!==null&&t!==null&&Zl(t),n.callbackNode=null,n.callbackPriority=0;if((e&3)===0||Mt(n,e)){if(a=e&-e,a===n.callbackPriority)return a;switch(t!==null&&Zl(t),Jl(e)){case 2:case 8:e=md;break;case 32:e=Sr;break;case 268435456:e=yd;break;default:e=Sr}return t=Mv.bind(null,n),e=Ql(e,t),n.callbackPriority=a,n.callbackNode=e,a}return t!==null&&t!==null&&Zl(t),n.callbackPriority=2,n.callbackNode=null,2}function Mv(n,a){if(Sn!==0&&Sn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var e=n.callbackNode;if(zl()&&n.callbackNode!==e)return null;var t=Z;return t=Mr(n,n===vn?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t===0?null:(cv(n,t,a),Cv(n,In()),n.callbackNode!=null&&n.callbackNode===e?Mv.bind(null,n):null)}function Dv(n,a){if(zl())return null;cv(n,a,!0)}function pb(){Eb(function(){(W&6)!==0?Ql(fd,vb):Av()})}function _s(){if(ge===0){var n=st;n===0&&(n=Tr,Tr<<=1,(Tr&261888)===0&&(Tr=256)),ge=n}return ge}function Bv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:qr(""+n)}function Ov(n,a){var e=a.ownerDocument.createElement("input");return e.name=a.name,e.value=a.value,n.id&&e.setAttribute("form",n.id),a.parentNode.insertBefore(e,a),n=new FormData(n),e.parentNode.removeChild(e),n}function ub(n,a,e,t,r){if(a==="submit"&&e&&e.stateNode===r){var l=Bv((r[Vn]||null).action),i=t.submitter;i&&(a=(a=i[Vn]||null)?Bv(a.formAction):i.getAttribute("formAction"),a!==null&&(l=a,i=null));var s=new jr("action","action",null,t,r);n.push({event:s,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(ge!==0){var d=i?Ov(r,i):new FormData(r);es(e,{pending:!0,data:d,method:r.method,action:l},null,d)}}else typeof l=="function"&&(s.preventDefault(),d=i?Ov(r,i):new FormData(r),es(e,{pending:!0,data:d,method:r.method,action:l},l,d))},currentTarget:r}]})}}for(var js=0;js<xi.length;js++){var Rs=xi[js],bb=Rs.toLowerCase(),gb=Rs[0].toUpperCase()+Rs.slice(1);xa(bb,"on"+gb)}xa(oo,"onAnimationEnd"),xa(co,"onAnimationIteration"),xa(vo,"onAnimationStart"),xa("dblclick","onDoubleClick"),xa("focusin","onFocus"),xa("focusout","onBlur"),xa(Bu,"onTransitionRun"),xa(Ou,"onTransitionStart"),xa(qu,"onTransitionCancel"),xa(po,"onTransitionEnd"),Ze("onMouseEnter",["mouseout","mouseover"]),Ze("onMouseLeave",["mouseout","mouseover"]),Ze("onPointerEnter",["pointerout","pointerover"]),Ze("onPointerLeave",["pointerout","pointerover"]),Se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Se("onBeforeInput",["compositionend","keypress","textInput","paste"]),Se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vr));function qv(n,a){a=(a&4)!==0;for(var e=0;e<n.length;e++){var t=n[e],r=t.event;t=t.listeners;n:{var l=void 0;if(a)for(var i=t.length-1;0<=i;i--){var s=t[i],d=s.instance,u=s.currentTarget;if(s=s.listener,d!==l&&r.isPropagationStopped())break n;l=s,r.currentTarget=u;try{l(r)}catch(m){Ur(m)}r.currentTarget=null,l=d}else for(i=0;i<t.length;i++){if(s=t[i],d=s.instance,u=s.currentTarget,s=s.listener,d!==l&&r.isPropagationStopped())break n;l=s,r.currentTarget=u;try{l(r)}catch(m){Ur(m)}r.currentTarget=null,l=d}}}}function Q(n,a){var e=a[Il];e===void 0&&(e=a[Il]=new Set);var t=n+"__bubble";e.has(t)||(Nv(a,n,2,!1),e.add(t))}function Hs(n,a,e){var t=0;a&&(t|=4),Nv(e,n,t,a)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Us(n){if(!n[Tl]){n[Tl]=!0,Td.forEach(function(e){e!=="selectionchange"&&(fb.has(e)||Hs(e,!1,n),Hs(e,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Tl]||(a[Tl]=!0,Hs("selectionchange",!1,a))}}function Nv(n,a,e,t){switch(op(a)){case 2:var r=Gb;break;case 8:r=Xb;break;default:r=ad}e=r.bind(null,a,e,n),r=void 0,!ii||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(r=!0),t?r!==void 0?n.addEventListener(a,e,{capture:!0,passive:r}):n.addEventListener(a,e,!0):r!==void 0?n.addEventListener(a,e,{passive:r}):n.addEventListener(a,e,!1)}function Fs(n,a,e,t,r){var l=t;if((a&1)===0&&(a&2)===0&&t!==null)n:for(;;){if(t===null)return;var i=t.tag;if(i===3||i===4){var s=t.stateNode.containerInfo;if(s===r)break;if(i===4)for(i=t.return;i!==null;){var d=i.tag;if((d===3||d===4)&&i.stateNode.containerInfo===r)return;i=i.return}for(;s!==null;){if(i=Ge(s),i===null)return;if(d=i.tag,d===5||d===6||d===26||d===27){t=l=i;continue n}s=s.parentNode}}t=t.return}Rd(function(){var u=l,m=ri(e),h=[];n:{var g=uo.get(n);if(g!==void 0){var f=jr,A=n;switch(n){case"keypress":if(Lr(e)===0)break n;case"keydown":case"keyup":f=ou;break;case"focusin":A="focus",f=ci;break;case"focusout":A="blur",f=ci;break;case"beforeblur":case"afterblur":f=ci;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=pu;break;case oo:case co:case vo:f=nu;break;case po:f=bu;break;case"scroll":case"scrollend":f=Kp;break;case"wheel":f=fu;break;case"copy":case"cut":case"paste":f=eu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Vd;break;case"toggle":case"beforetoggle":f=yu}var L=(a&4)!==0,dn=!L&&(n==="scroll"||n==="scrollend"),v=L?g!==null?g+"Capture":null:g;L=[];for(var o=u,p;o!==null;){var x=o;if(p=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||p===null||v===null||(x=qt(o,v),x!=null&&L.push(pr(o,x,p))),dn)break;o=o.return}0<L.length&&(g=new f(g,A,null,e,m),h.push({event:g,listeners:L}))}}if((a&7)===0){n:{if(g=n==="mouseover"||n==="pointerover",f=n==="mouseout"||n==="pointerout",g&&e!==ti&&(A=e.relatedTarget||e.fromElement)&&(Ge(A)||A[Ve]))break n;if((f||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,f?(A=e.relatedTarget||e.toElement,f=u,A=A?Ge(A):null,A!==null&&(dn=j(A),L=A.tag,A!==dn||L!==5&&L!==27&&L!==6)&&(A=null)):(f=null,A=u),f!==A)){if(L=Fd,x="onMouseLeave",v="onMouseEnter",o="mouse",(n==="pointerout"||n==="pointerover")&&(L=Vd,x="onPointerLeave",v="onPointerEnter",o="pointer"),dn=f==null?g:Ot(f),p=A==null?g:Ot(A),g=new L(x,o+"leave",f,e,m),g.target=dn,g.relatedTarget=p,x=null,Ge(m)===u&&(L=new L(v,o+"enter",A,e,m),L.target=p,L.relatedTarget=dn,x=L),dn=x,f&&A)a:{for(L=mb,v=f,o=A,p=0,x=v;x;x=L(x))p++;x=0;for(var q=o;q;q=L(q))x++;for(;0<p-x;)v=L(v),p--;for(;0<x-p;)o=L(o),x--;for(;p--;){if(v===o||o!==null&&v===o.alternate){L=v;break a}v=L(v),o=L(o)}L=null}else L=null;f!==null&&Lv(h,g,f,L,!1),A!==null&&dn!==null&&Lv(h,dn,A,L,!0)}}n:{if(g=u?Ot(u):window,f=g.nodeName&&g.nodeName.toLowerCase(),f==="select"||f==="input"&&g.type==="file")var I=Id;else if(Kd(g))if(Pd)I=Cu;else{I=Tu;var M=Su}else f=g.nodeName,!f||f.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?u&&ei(u.elementType)&&(I=Id):I=Au;if(I&&(I=I(n,u))){Jd(h,I,e,m);break n}M&&M(n,g,u),n==="focusout"&&u&&g.type==="number"&&u.memoizedProps.value!=null&&ai(g,"number",g.value)}switch(M=u?Ot(u):window,n){case"focusin":(Kd(M)||M.contentEditable==="true")&&(We=M,fi=u,Ft=null);break;case"focusout":Ft=fi=We=null;break;case"mousedown":mi=!0;break;case"contextmenu":case"mouseup":case"dragend":mi=!1,io(h,e,m);break;case"selectionchange":if(Du)break;case"keydown":case"keyup":io(h,e,m)}var Y;if(pi)n:{switch(n){case"compositionstart":var $="onCompositionStart";break n;case"compositionend":$="onCompositionEnd";break n;case"compositionupdate":$="onCompositionUpdate";break n}$=void 0}else Pe?Zd(n,e)&&($="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&($="onCompositionStart");$&&(Gd&&e.locale!=="ko"&&(Pe||$!=="onCompositionStart"?$==="onCompositionEnd"&&Pe&&(Y=Hd()):(Wa=m,si="value"in Wa?Wa.value:Wa.textContent,Pe=!0)),M=Al(u,$),0<M.length&&($=new Yd($,n,null,e,m),h.push({event:$,listeners:M}),Y?$.data=Y:(Y=$d(e),Y!==null&&($.data=Y)))),(Y=hu?wu(n,e):ku(n,e))&&($=Al(u,"onBeforeInput"),0<$.length&&(M=new Yd("onBeforeInput","beforeinput",null,e,m),h.push({event:M,listeners:$}),M.data=Y)),ub(h,n,u,e,m)}qv(h,a)})}function pr(n,a,e){return{instance:n,listener:a,currentTarget:e}}function Al(n,a){for(var e=a+"Capture",t=[];n!==null;){var r=n,l=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||l===null||(r=qt(n,e),r!=null&&t.unshift(pr(n,r,l)),r=qt(n,a),r!=null&&t.push(pr(n,r,l))),n.tag===3)return t;n=n.return}return[]}function mb(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Lv(n,a,e,t,r){for(var l=a._reactName,i=[];e!==null&&e!==t;){var s=e,d=s.alternate,u=s.stateNode;if(s=s.tag,d!==null&&d===t)break;s!==5&&s!==26&&s!==27||u===null||(d=u,r?(u=qt(e,l),u!=null&&i.unshift(pr(e,u,d))):r||(u=qt(e,l),u!=null&&i.push(pr(e,u,d)))),e=e.return}i.length!==0&&n.push({event:a,listeners:i})}var yb=/\r\n?/g,xb=/\u0000|\uFFFD/g;function _v(n){return(typeof n=="string"?n:""+n).replace(yb,`
`).replace(xb,"")}function jv(n,a){return a=_v(a),_v(n)===a}function sn(n,a,e,t,r,l){switch(e){case"children":typeof t=="string"?a==="body"||a==="textarea"&&t===""||Ke(n,t):(typeof t=="number"||typeof t=="bigint")&&a!=="body"&&Ke(n,""+t);break;case"className":Br(n,"class",t);break;case"tabIndex":Br(n,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Br(n,e,t);break;case"style":_d(n,t,l);break;case"data":if(a!=="object"){Br(n,"data",t);break}case"src":case"href":if(t===""&&(a!=="a"||e!=="href")){n.removeAttribute(e);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(e);break}t=qr(""+t),n.setAttribute(e,t);break;case"action":case"formAction":if(typeof t=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(e==="formAction"?(a!=="input"&&sn(n,a,"name",r.name,r,null),sn(n,a,"formEncType",r.formEncType,r,null),sn(n,a,"formMethod",r.formMethod,r,null),sn(n,a,"formTarget",r.formTarget,r,null)):(sn(n,a,"encType",r.encType,r,null),sn(n,a,"method",r.method,r,null),sn(n,a,"target",r.target,r,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(e);break}t=qr(""+t),n.setAttribute(e,t);break;case"onClick":t!=null&&(n.onclick=qa);break;case"onScroll":t!=null&&Q("scroll",n);break;case"onScrollEnd":t!=null&&Q("scrollend",n);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(b(61));if(e=t.__html,e!=null){if(r.children!=null)throw Error(b(60));n.innerHTML=e}}break;case"multiple":n.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":n.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){n.removeAttribute("xlink:href");break}e=qr(""+t),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,""+t):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":t===!0?n.setAttribute(e,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,t):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?n.setAttribute(e,t):n.removeAttribute(e);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?n.removeAttribute(e):n.setAttribute(e,t);break;case"popover":Q("beforetoggle",n),Q("toggle",n),Dr(n,"popover",t);break;case"xlinkActuate":Oa(n,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Oa(n,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Oa(n,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Oa(n,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Oa(n,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Oa(n,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Oa(n,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Oa(n,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Oa(n,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Dr(n,"is",t);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Zp.get(e)||e,Dr(n,e,t))}}function Ys(n,a,e,t,r,l){switch(e){case"style":_d(n,t,l);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(b(61));if(e=t.__html,e!=null){if(r.children!=null)throw Error(b(60));n.innerHTML=e}}break;case"children":typeof t=="string"?Ke(n,t):(typeof t=="number"||typeof t=="bigint")&&Ke(n,""+t);break;case"onScroll":t!=null&&Q("scroll",n);break;case"onScrollEnd":t!=null&&Q("scrollend",n);break;case"onClick":t!=null&&(n.onclick=qa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ad.hasOwnProperty(e))n:{if(e[0]==="o"&&e[1]==="n"&&(r=e.endsWith("Capture"),a=e.slice(2,r?e.length-7:void 0),l=n[Vn]||null,l=l!=null?l[e]:null,typeof l=="function"&&n.removeEventListener(a,l,r),typeof t=="function")){typeof l!="function"&&l!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(a,t,r);break n}e in n?n[e]=t:t===!0?n.setAttribute(e,""):Dr(n,e,t)}}}function qn(n,a,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",n),Q("load",n);var t=!1,r=!1,l;for(l in e)if(e.hasOwnProperty(l)){var i=e[l];if(i!=null)switch(l){case"src":t=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(b(137,a));default:sn(n,a,l,i,e,null)}}r&&sn(n,a,"srcSet",e.srcSet,e,null),t&&sn(n,a,"src",e.src,e,null);return;case"input":Q("invalid",n);var s=l=i=r=null,d=null,u=null;for(t in e)if(e.hasOwnProperty(t)){var m=e[t];if(m!=null)switch(t){case"name":r=m;break;case"type":i=m;break;case"checked":d=m;break;case"defaultChecked":u=m;break;case"value":l=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(b(137,a));break;default:sn(n,a,t,m,e,null)}}Od(n,l,s,d,u,i,r,!1);return;case"select":Q("invalid",n),t=i=l=null;for(r in e)if(e.hasOwnProperty(r)&&(s=e[r],s!=null))switch(r){case"value":l=s;break;case"defaultValue":i=s;break;case"multiple":t=s;default:sn(n,a,r,s,e,null)}a=l,e=i,n.multiple=!!t,a!=null?$e(n,!!t,a,!1):e!=null&&$e(n,!!t,e,!0);return;case"textarea":Q("invalid",n),l=r=t=null;for(i in e)if(e.hasOwnProperty(i)&&(s=e[i],s!=null))switch(i){case"value":t=s;break;case"defaultValue":r=s;break;case"children":l=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(b(91));break;default:sn(n,a,i,s,e,null)}Nd(n,t,r,l);return;case"option":for(d in e)e.hasOwnProperty(d)&&(t=e[d],t!=null)&&(d==="selected"?n.selected=t&&typeof t!="function"&&typeof t!="symbol":sn(n,a,d,t,e,null));return;case"dialog":Q("beforetoggle",n),Q("toggle",n),Q("cancel",n),Q("close",n);break;case"iframe":case"object":Q("load",n);break;case"video":case"audio":for(t=0;t<vr.length;t++)Q(vr[t],n);break;case"image":Q("error",n),Q("load",n);break;case"details":Q("toggle",n);break;case"embed":case"source":case"link":Q("error",n),Q("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in e)if(e.hasOwnProperty(u)&&(t=e[u],t!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(b(137,a));default:sn(n,a,u,t,e,null)}return;default:if(ei(a)){for(m in e)e.hasOwnProperty(m)&&(t=e[m],t!==void 0&&Ys(n,a,m,t,e,void 0));return}}for(s in e)e.hasOwnProperty(s)&&(t=e[s],t!=null&&sn(n,a,s,t,e,null))}function hb(n,a,e,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,l=null,i=null,s=null,d=null,u=null,m=null;for(f in e){var h=e[f];if(e.hasOwnProperty(f)&&h!=null)switch(f){case"checked":break;case"value":break;case"defaultValue":d=h;default:t.hasOwnProperty(f)||sn(n,a,f,null,t,h)}}for(var g in t){var f=t[g];if(h=e[g],t.hasOwnProperty(g)&&(f!=null||h!=null))switch(g){case"type":l=f;break;case"name":r=f;break;case"checked":u=f;break;case"defaultChecked":m=f;break;case"value":i=f;break;case"defaultValue":s=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(b(137,a));break;default:f!==h&&sn(n,a,g,f,t,h)}}ni(n,i,s,d,u,m,l,r);return;case"select":f=i=s=g=null;for(l in e)if(d=e[l],e.hasOwnProperty(l)&&d!=null)switch(l){case"value":break;case"multiple":f=d;default:t.hasOwnProperty(l)||sn(n,a,l,null,t,d)}for(r in t)if(l=t[r],d=e[r],t.hasOwnProperty(r)&&(l!=null||d!=null))switch(r){case"value":g=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:l!==d&&sn(n,a,r,l,t,d)}a=s,e=i,t=f,g!=null?$e(n,!!e,g,!1):!!t!=!!e&&(a!=null?$e(n,!!e,a,!0):$e(n,!!e,e?[]:"",!1));return;case"textarea":f=g=null;for(s in e)if(r=e[s],e.hasOwnProperty(s)&&r!=null&&!t.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:sn(n,a,s,null,t,r)}for(i in t)if(r=t[i],l=e[i],t.hasOwnProperty(i)&&(r!=null||l!=null))switch(i){case"value":g=r;break;case"defaultValue":f=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(b(91));break;default:r!==l&&sn(n,a,i,r,t,l)}qd(n,g,f);return;case"option":for(var A in e)g=e[A],e.hasOwnProperty(A)&&g!=null&&!t.hasOwnProperty(A)&&(A==="selected"?n.selected=!1:sn(n,a,A,null,t,g));for(d in t)g=t[d],f=e[d],t.hasOwnProperty(d)&&g!==f&&(g!=null||f!=null)&&(d==="selected"?n.selected=g&&typeof g!="function"&&typeof g!="symbol":sn(n,a,d,g,t,f));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in e)g=e[L],e.hasOwnProperty(L)&&g!=null&&!t.hasOwnProperty(L)&&sn(n,a,L,null,t,g);for(u in t)if(g=t[u],f=e[u],t.hasOwnProperty(u)&&g!==f&&(g!=null||f!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(b(137,a));break;default:sn(n,a,u,g,t,f)}return;default:if(ei(a)){for(var dn in e)g=e[dn],e.hasOwnProperty(dn)&&g!==void 0&&!t.hasOwnProperty(dn)&&Ys(n,a,dn,void 0,t,g);for(m in t)g=t[m],f=e[m],!t.hasOwnProperty(m)||g===f||g===void 0&&f===void 0||Ys(n,a,m,g,t,f);return}}for(var v in e)g=e[v],e.hasOwnProperty(v)&&g!=null&&!t.hasOwnProperty(v)&&sn(n,a,v,null,t,g);for(h in t)g=t[h],f=e[h],!t.hasOwnProperty(h)||g===f||g==null&&f==null||sn(n,a,h,g,t,f)}function Rv(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wb(){if(typeof performance.getEntriesByType=="function"){for(var n=0,a=0,e=performance.getEntriesByType("resource"),t=0;t<e.length;t++){var r=e[t],l=r.transferSize,i=r.initiatorType,s=r.duration;if(l&&s&&Rv(i)){for(i=0,s=r.responseEnd,t+=1;t<e.length;t++){var d=e[t],u=d.startTime;if(u>s)break;var m=d.transferSize,h=d.initiatorType;m&&Rv(h)&&(d=d.responseEnd,i+=m*(d<s?1:(s-u)/(d-u)))}if(--t,a+=8*(l+i)/(r.duration/1e3),n++,10<n)break}}if(0<n)return a/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Vs=null,Gs=null;function Cl(n){return n.nodeType===9?n:n.ownerDocument}function Hv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Uv(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function Xs(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Qs=null;function kb(){var n=window.event;return n&&n.type==="popstate"?n===Qs?!1:(Qs=n,!0):(Qs=null,!1)}var Fv=typeof setTimeout=="function"?setTimeout:void 0,zb=typeof clearTimeout=="function"?clearTimeout:void 0,Yv=typeof Promise=="function"?Promise:void 0,Eb=typeof queueMicrotask=="function"?queueMicrotask:typeof Yv<"u"?function(n){return Yv.resolve(null).then(n).catch(Sb)}:Fv;function Sb(n){setTimeout(function(){throw n})}function fe(n){return n==="head"}function Vv(n,a){var e=a,t=0;do{var r=e.nextSibling;if(n.removeChild(e),r&&r.nodeType===8)if(e=r.data,e==="/$"||e==="/&"){if(t===0){n.removeChild(r),Tt(a);return}t--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")t++;else if(e==="html")ur(n.ownerDocument.documentElement);else if(e==="head"){e=n.ownerDocument.head,ur(e);for(var l=e.firstChild;l;){var i=l.nextSibling,s=l.nodeName;l[Bt]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&l.rel.toLowerCase()==="stylesheet"||e.removeChild(l),l=i}}else e==="body"&&ur(n.ownerDocument.body);e=r}while(e);Tt(a)}function Gv(n,a){var e=n;n=0;do{var t=e.nextSibling;if(e.nodeType===1?a?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(a?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),t&&t.nodeType===8)if(e=t.data,e==="/$"){if(n===0)break;n--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||n++;e=t}while(e)}function Zs(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var e=a;switch(a=a.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Zs(e),Pl(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function Tb(n,a,e,t){for(;n.nodeType===1;){var r=e;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!t&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(t){if(!n[Bt])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==r.rel||n.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||n.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||n.getAttribute("title")!==(r.title==null?null:r.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(r.src==null?null:r.src)||n.getAttribute("type")!==(r.type==null?null:r.type)||n.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var l=r.name==null?null:""+r.name;if(r.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=fa(n.nextSibling),n===null)break}return null}function Ab(n,a,e){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=fa(n.nextSibling),n===null))return null;return n}function Xv(n,a){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=fa(n.nextSibling),n===null))return null;return n}function $s(n){return n.data==="$?"||n.data==="$~"}function Ks(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function Cb(n,a){var e=n.ownerDocument;if(n.data==="$~")n._reactRetry=a;else if(n.data!=="$?"||e.readyState!=="loading")a();else{var t=function(){a(),e.removeEventListener("DOMContentLoaded",t)};e.addEventListener("DOMContentLoaded",t),n._reactRetry=t}}function fa(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return n}var Js=null;function Qv(n){n=n.nextSibling;for(var a=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"||e==="/&"){if(a===0)return fa(n.nextSibling);a--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||a++}n=n.nextSibling}return null}function Zv(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(a===0)return n;a--}else e!=="/$"&&e!=="/&"||a++}n=n.previousSibling}return null}function $v(n,a,e){switch(a=Cl(e),n){case"html":if(n=a.documentElement,!n)throw Error(b(452));return n;case"head":if(n=a.head,!n)throw Error(b(453));return n;case"body":if(n=a.body,!n)throw Error(b(454));return n;default:throw Error(b(451))}}function ur(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Pl(n)}var ma=new Map,Kv=new Set;function Ml(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ka=E.d;E.d={f:Mb,r:Db,D:Bb,C:Ob,L:qb,m:Nb,X:_b,S:Lb,M:jb};function Mb(){var n=Ka.f(),a=hl();return n||a}function Db(n){var a=Xe(n);a!==null&&a.tag===5&&a.type==="form"?pc(a):Ka.r(n)}var zt=typeof document>"u"?null:document;function Jv(n,a,e){var t=zt;if(t&&typeof a=="string"&&a){var r=oa(a);r='link[rel="'+n+'"][href="'+r+'"]',typeof e=="string"&&(r+='[crossorigin="'+e+'"]'),Kv.has(r)||(Kv.add(r),n={rel:n,crossOrigin:e,href:a},t.querySelector(r)===null&&(a=t.createElement("link"),qn(a,"link",n),An(a),t.head.appendChild(a)))}}function Bb(n){Ka.D(n),Jv("dns-prefetch",n,null)}function Ob(n,a){Ka.C(n,a),Jv("preconnect",n,a)}function qb(n,a,e){Ka.L(n,a,e);var t=zt;if(t&&n&&a){var r='link[rel="preload"][as="'+oa(a)+'"]';a==="image"&&e&&e.imageSrcSet?(r+='[imagesrcset="'+oa(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(r+='[imagesizes="'+oa(e.imageSizes)+'"]')):r+='[href="'+oa(n)+'"]';var l=r;switch(a){case"style":l=Et(n);break;case"script":l=St(n)}ma.has(l)||(n=D({rel:"preload",href:a==="image"&&e&&e.imageSrcSet?void 0:n,as:a},e),ma.set(l,n),t.querySelector(r)!==null||a==="style"&&t.querySelector(br(l))||a==="script"&&t.querySelector(gr(l))||(a=t.createElement("link"),qn(a,"link",n),An(a),t.head.appendChild(a)))}}function Nb(n,a){Ka.m(n,a);var e=zt;if(e&&n){var t=a&&typeof a.as=="string"?a.as:"script",r='link[rel="modulepreload"][as="'+oa(t)+'"][href="'+oa(n)+'"]',l=r;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=St(n)}if(!ma.has(l)&&(n=D({rel:"modulepreload",href:n},a),ma.set(l,n),e.querySelector(r)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(gr(l)))return}t=e.createElement("link"),qn(t,"link",n),An(t),e.head.appendChild(t)}}}function Lb(n,a,e){Ka.S(n,a,e);var t=zt;if(t&&n){var r=Qe(t).hoistableStyles,l=Et(n);a=a||"default";var i=r.get(l);if(!i){var s={loading:0,preload:null};if(i=t.querySelector(br(l)))s.loading=5;else{n=D({rel:"stylesheet",href:n,"data-precedence":a},e),(e=ma.get(l))&&Is(n,e);var d=i=t.createElement("link");An(d),qn(d,"link",n),d._p=new Promise(function(u,m){d.onload=u,d.onerror=m}),d.addEventListener("load",function(){s.loading|=1}),d.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Dl(i,a,t)}i={type:"stylesheet",instance:i,count:1,state:s},r.set(l,i)}}}function _b(n,a){Ka.X(n,a);var e=zt;if(e&&n){var t=Qe(e).hoistableScripts,r=St(n),l=t.get(r);l||(l=e.querySelector(gr(r)),l||(n=D({src:n,async:!0},a),(a=ma.get(r))&&Ps(n,a),l=e.createElement("script"),An(l),qn(l,"link",n),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(r,l))}}function jb(n,a){Ka.M(n,a);var e=zt;if(e&&n){var t=Qe(e).hoistableScripts,r=St(n),l=t.get(r);l||(l=e.querySelector(gr(r)),l||(n=D({src:n,async:!0,type:"module"},a),(a=ma.get(r))&&Ps(n,a),l=e.createElement("script"),An(l),qn(l,"link",n),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(r,l))}}function Iv(n,a,e,t){var r=(r=G.current)?Ml(r):null;if(!r)throw Error(b(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(a=Et(e.href),e=Qe(r).hoistableStyles,t=e.get(a),t||(t={type:"style",instance:null,count:0,state:null},e.set(a,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=Et(e.href);var l=Qe(r).hoistableStyles,i=l.get(n);if(i||(r=r.ownerDocument||r,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,i),(l=r.querySelector(br(n)))&&!l._p&&(i.instance=l,i.state.loading=5),ma.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},ma.set(n,e),l||Rb(r,n,e,i.state))),a&&t===null)throw Error(b(528,""));return i}if(a&&t!==null)throw Error(b(529,""));return null;case"script":return a=e.async,e=e.src,typeof e=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=St(e),e=Qe(r).hoistableScripts,t=e.get(a),t||(t={type:"script",instance:null,count:0,state:null},e.set(a,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(b(444,n))}}function Et(n){return'href="'+oa(n)+'"'}function br(n){return'link[rel="stylesheet"]['+n+"]"}function Pv(n){return D({},n,{"data-precedence":n.precedence,precedence:null})}function Rb(n,a,e,t){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?t.loading=1:(a=n.createElement("link"),t.preload=a,a.addEventListener("load",function(){return t.loading|=1}),a.addEventListener("error",function(){return t.loading|=2}),qn(a,"link",e),An(a),n.head.appendChild(a))}function St(n){return'[src="'+oa(n)+'"]'}function gr(n){return"script[async]"+n}function Wv(n,a,e){if(a.count++,a.instance===null)switch(a.type){case"style":var t=n.querySelector('style[data-href~="'+oa(e.href)+'"]');if(t)return a.instance=t,An(t),t;var r=D({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return t=(n.ownerDocument||n).createElement("style"),An(t),qn(t,"style",r),Dl(t,e.precedence,n),a.instance=t;case"stylesheet":r=Et(e.href);var l=n.querySelector(br(r));if(l)return a.state.loading|=4,a.instance=l,An(l),l;t=Pv(e),(r=ma.get(r))&&Is(t,r),l=(n.ownerDocument||n).createElement("link"),An(l);var i=l;return i._p=new Promise(function(s,d){i.onload=s,i.onerror=d}),qn(l,"link",t),a.state.loading|=4,Dl(l,e.precedence,n),a.instance=l;case"script":return l=St(e.src),(r=n.querySelector(gr(l)))?(a.instance=r,An(r),r):(t=e,(r=ma.get(l))&&(t=D({},e),Ps(t,r)),n=n.ownerDocument||n,r=n.createElement("script"),An(r),qn(r,"link",t),n.head.appendChild(r),a.instance=r);case"void":return null;default:throw Error(b(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(t=a.instance,a.state.loading|=4,Dl(t,e.precedence,n));return a.instance}function Dl(n,a,e){for(var t=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=t.length?t[t.length-1]:null,l=r,i=0;i<t.length;i++){var s=t[i];if(s.dataset.precedence===a)l=s;else if(l!==r)break}l?l.parentNode.insertBefore(n,l.nextSibling):(a=e.nodeType===9?e.head:e,a.insertBefore(n,a.firstChild))}function Is(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function Ps(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Bl=null;function np(n,a,e){if(Bl===null){var t=new Map,r=Bl=new Map;r.set(e,t)}else r=Bl,t=r.get(e),t||(t=new Map,r.set(e,t));if(t.has(n))return t;for(t.set(n,null),e=e.getElementsByTagName(n),r=0;r<e.length;r++){var l=e[r];if(!(l[Bt]||l[Mn]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var i=l.getAttribute(a)||"";i=n+i;var s=t.get(i);s?s.push(l):t.set(i,[l])}}return t}function ap(n,a,e){n=n.ownerDocument||n,n.head.insertBefore(e,a==="title"?n.querySelector("head > title"):null)}function Hb(n,a,e){if(e===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(n=a.disabled,typeof a.precedence=="string"&&n==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function ep(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Ub(n,a,e,t){if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var r=Et(t.href),l=a.querySelector(br(r));if(l){a=l._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(n.count++,n=Ol.bind(n),a.then(n,n)),e.state.loading|=4,e.instance=l,An(l);return}l=a.ownerDocument||a,t=Pv(t),(r=ma.get(r))&&Is(t,r),l=l.createElement("link"),An(l);var i=l;i._p=new Promise(function(s,d){i.onload=s,i.onerror=d}),qn(l,"link",t),e.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,a),(a=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=Ol.bind(n),a.addEventListener("load",e),a.addEventListener("error",e))}}var Ws=0;function Fb(n,a){return n.stylesheets&&n.count===0&&Nl(n,n.stylesheets),0<n.count||0<n.imgCount?function(e){var t=setTimeout(function(){if(n.stylesheets&&Nl(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4+a);0<n.imgBytes&&Ws===0&&(Ws=62500*wb());var r=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Nl(n,n.stylesheets),n.unsuspend)){var l=n.unsuspend;n.unsuspend=null,l()}},(n.imgBytes>Ws?50:800)+a);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(t),clearTimeout(r)}}:null}function Ol(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nl(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var ql=null;function Nl(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,ql=new Map,a.forEach(Yb,n),ql=null,Ol.call(n))}function Yb(n,a){if(!(a.state.loading&4)){var e=ql.get(n);if(e)var t=e.get(null);else{e=new Map,ql.set(n,e);for(var r=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<r.length;l++){var i=r[l];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),t=i)}t&&e.set(null,t)}r=a.instance,i=r.getAttribute("data-precedence"),l=e.get(i)||t,l===t&&e.set(null,r),e.set(i,r),this.count++,t=Ol.bind(this),r.addEventListener("load",t),r.addEventListener("error",t),l?l.parentNode.insertBefore(r,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(r,n.firstChild)),a.state.loading|=4}}var fr={$$typeof:Ln,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function Vb(n,a,e,t,r,l,i,s,d){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$l(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.hiddenUpdates=$l(null),this.identifierPrefix=t,this.onUncaughtError=r,this.onCaughtError=l,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function tp(n,a,e,t,r,l,i,s,d,u,m,h){return n=new Vb(n,a,e,i,d,u,m,h,s),a=1,l===!0&&(a|=24),l=aa(3,null,null,a),n.current=l,l.stateNode=n,a=Oi(),a.refCount++,n.pooledCache=a,a.refCount++,l.memoizedState={element:t,isDehydrated:e,cache:a},_i(l),n}function rp(n){return n?(n=et,n):et}function lp(n,a,e,t,r,l){r=rp(r),t.context===null?t.context=r:t.pendingContext=r,t=le(a),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=ie(n,t,a),e!==null&&(Kn(e,n,a),$t(e,n,a))}function ip(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<a?e:a}}function nd(n,a){ip(n,a),(n=n.alternate)&&ip(n,a)}function sp(n){if(n.tag===13||n.tag===31){var a=Me(n,67108864);a!==null&&Kn(a,n,67108864),nd(n,67108864)}}function dp(n){if(n.tag===13||n.tag===31){var a=ia();a=Kl(a);var e=Me(n,a);e!==null&&Kn(e,n,a),nd(n,a)}}var Ll=!0;function Gb(n,a,e,t){var r=y.T;y.T=null;var l=E.p;try{E.p=2,ad(n,a,e,t)}finally{E.p=l,y.T=r}}function Xb(n,a,e,t){var r=y.T;y.T=null;var l=E.p;try{E.p=8,ad(n,a,e,t)}finally{E.p=l,y.T=r}}function ad(n,a,e,t){if(Ll){var r=ed(t);if(r===null)Fs(n,a,t,_l,e),cp(n,t);else if(Zb(r,n,a,e,t))t.stopPropagation();else if(cp(n,t),a&4&&-1<Qb.indexOf(n)){for(;r!==null;){var l=Xe(r);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var i=Ee(l.pendingLanes);if(i!==0){var s=l;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var d=1<<31-Wn(i);s.entanglements[1]|=d,i&=~d}Ma(l),(W&6)===0&&(yl=In()+500,cr(0))}}break;case 31:case 13:s=Me(l,2),s!==null&&Kn(s,l,2),hl(),nd(l,2)}if(l=ed(t),l===null&&Fs(n,a,t,_l,e),l===r)break;r=l}r!==null&&t.stopPropagation()}else Fs(n,a,t,null,e)}}function ed(n){return n=ri(n),td(n)}var _l=null;function td(n){if(_l=null,n=Ge(n),n!==null){var a=j(n);if(a===null)n=null;else{var e=a.tag;if(e===13){if(n=an(a),n!==null)return n;n=null}else if(e===31){if(n=gn(a),n!==null)return n;n=null}else if(e===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return _l=n,null}function op(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bp()){case fd:return 2;case md:return 8;case Sr:case Op:return 32;case yd:return 268435456;default:return 32}default:return 32}}var rd=!1,me=null,ye=null,xe=null,mr=new Map,yr=new Map,he=[],Qb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cp(n,a){switch(n){case"focusin":case"focusout":me=null;break;case"dragenter":case"dragleave":ye=null;break;case"mouseover":case"mouseout":xe=null;break;case"pointerover":case"pointerout":mr.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(a.pointerId)}}function xr(n,a,e,t,r,l){return n===null||n.nativeEvent!==l?(n={blockedOn:a,domEventName:e,eventSystemFlags:t,nativeEvent:l,targetContainers:[r]},a!==null&&(a=Xe(a),a!==null&&sp(a)),n):(n.eventSystemFlags|=t,a=n.targetContainers,r!==null&&a.indexOf(r)===-1&&a.push(r),n)}function Zb(n,a,e,t,r){switch(a){case"focusin":return me=xr(me,n,a,e,t,r),!0;case"dragenter":return ye=xr(ye,n,a,e,t,r),!0;case"mouseover":return xe=xr(xe,n,a,e,t,r),!0;case"pointerover":var l=r.pointerId;return mr.set(l,xr(mr.get(l)||null,n,a,e,t,r)),!0;case"gotpointercapture":return l=r.pointerId,yr.set(l,xr(yr.get(l)||null,n,a,e,t,r)),!0}return!1}function vp(n){var a=Ge(n.target);if(a!==null){var e=j(a);if(e!==null){if(a=e.tag,a===13){if(a=an(e),a!==null){n.blockedOn=a,Ed(n.priority,function(){dp(e)});return}}else if(a===31){if(a=gn(e),a!==null){n.blockedOn=a,Ed(n.priority,function(){dp(e)});return}}else if(a===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function jl(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var e=ed(n.nativeEvent);if(e===null){e=n.nativeEvent;var t=new e.constructor(e.type,e);ti=t,e.target.dispatchEvent(t),ti=null}else return a=Xe(e),a!==null&&sp(a),n.blockedOn=e,!1;a.shift()}return!0}function pp(n,a,e){jl(n)&&e.delete(a)}function $b(){rd=!1,me!==null&&jl(me)&&(me=null),ye!==null&&jl(ye)&&(ye=null),xe!==null&&jl(xe)&&(xe=null),mr.forEach(pp),yr.forEach(pp)}function Rl(n,a){n.blockedOn===a&&(n.blockedOn=null,rd||(rd=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,$b)))}var Hl=null;function up(n){Hl!==n&&(Hl=n,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Hl===n&&(Hl=null);for(var a=0;a<n.length;a+=3){var e=n[a],t=n[a+1],r=n[a+2];if(typeof t!="function"){if(td(t||e)===null)continue;break}var l=Xe(e);l!==null&&(n.splice(a,3),a-=3,es(l,{pending:!0,data:r,method:e.method,action:t},t,r))}}))}function Tt(n){function a(d){return Rl(d,n)}me!==null&&Rl(me,n),ye!==null&&Rl(ye,n),xe!==null&&Rl(xe,n),mr.forEach(a),yr.forEach(a);for(var e=0;e<he.length;e++){var t=he[e];t.blockedOn===n&&(t.blockedOn=null)}for(;0<he.length&&(e=he[0],e.blockedOn===null);)vp(e),e.blockedOn===null&&he.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(t=0;t<e.length;t+=3){var r=e[t],l=e[t+1],i=r[Vn]||null;if(typeof l=="function")i||up(e);else if(i){var s=null;if(l&&l.hasAttribute("formAction")){if(r=l,i=l[Vn]||null)s=i.formAction;else if(td(r)!==null)continue}else s=i.action;typeof s=="function"?e[t+1]=s:(e.splice(t,3),t-=3),up(e)}}}function bp(){function n(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(i){return r=i})},focusReset:"manual",scroll:"manual"})}function a(){r!==null&&(r(),r=null),t||setTimeout(e,20)}function e(){if(!t&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,r=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(e,100),function(){t=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),r!==null&&(r(),r=null)}}}function ld(n){this._internalRoot=n}Ul.prototype.render=ld.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(b(409));var e=a.current,t=ia();lp(e,t,n,a,null,null)},Ul.prototype.unmount=ld.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;lp(n.current,2,null,n,null,null),hl(),a[Ve]=null}};function Ul(n){this._internalRoot=n}Ul.prototype.unstable_scheduleHydration=function(n){if(n){var a=zd();n={blockedOn:null,target:n,priority:a};for(var e=0;e<he.length&&a!==0&&a<he[e].priority;e++);he.splice(e,0,n),e===0&&vp(n)}};var gp=B.version;if(gp!=="19.2.7")throw Error(b(527,gp,"19.2.7"));E.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(b(188)):(n=Object.keys(n).join(","),Error(b(268,n)));return n=k(a),n=n!==null?V(n):null,n=n===null?null:n.stateNode,n};var Kb={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{Ct=Fl.inject(Kb),Pn=Fl}catch{}}return wr.createRoot=function(n,a){if(!O(n))throw Error(b(299));var e=!1,t="",r=kc,l=zc,i=Ec;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(t=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError)),a=tp(n,1,!1,null,null,e,t,null,r,l,i,bp),n[Ve]=a.current,Us(n),new ld(a)},wr.hydrateRoot=function(n,a,e){if(!O(n))throw Error(b(299));var t=!1,r="",l=kc,i=zc,s=Ec,d=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.formState!==void 0&&(d=e.formState)),a=tp(n,1,!0,a,e??null,t,r,d,l,i,s,bp),a.context=rp(null),e=a.current,t=ia(),t=Kl(t),r=le(t),r.callback=null,ie(e,r,t),e=t,a.current.lanes=e,Dt(a,e),Ma(a),n[Ve]=a.current,Us(n),new Ul(a)},wr.version="19.2.7",wr}var Sp;function lg(){if(Sp)return dd.exports;Sp=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(B){console.error(B)}}return z(),dd.exports=rg(),dd.exports}var ig=lg();const sg=`<!DOCTYPE html>\r
<html lang="zh-TW">\r
<head>\r
<meta charset="UTF-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1.0">\r
<title>PAC 個人儀表板</title>\r
<style>\r
*{box-sizing:border-box;margin:0;padding:0}\r
:root{\r
  --blue:#2563EB;--blue-light:#EFF6FF;--blue-mid:#BFDBFE;--blue-dark:#1E40AF;\r
  --gray-50:#F8FAFC;--gray-100:#F1F5F9;--gray-200:#E2E8F0;--gray-300:#CBD5E1;\r
  --gray-400:#94A3B8;--gray-500:#64748B;--gray-600:#475569;--gray-700:#334155;--gray-900:#0F172A;\r
  --green:#16A34A;--green-light:#DCFCE7;--green-mid:#BBF7D0;\r
  --amber:#D97706;--amber-light:#FEF3C7;\r
  --red:#DC2626;--red-light:#FEE2E2;\r
  --purple:#7C3AED;--purple-light:#EDE9FE;\r
  --teal:#0D9488;--teal-light:#CCFBF1;\r
  --white:#FFFFFF;\r
}\r
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans TC',sans-serif;background:var(--gray-50);color:var(--gray-900);height:100vh;display:flex;overflow:hidden;font-size:14px}\r
\r
/* ── Sidebar ── */\r
.sidebar{width:192px;min-width:192px;background:var(--white);border-right:1px solid var(--gray-200);display:flex;flex-direction:column;z-index:10}\r
.sidebar-logo{padding:16px 16px 13px;border-bottom:1px solid var(--gray-200)}\r
.logo-text{font-size:14px;font-weight:700;color:var(--blue)}\r
.logo-sub{font-size:11px;color:var(--gray-400);margin-top:2px}\r
.sidebar-nav{padding:6px 0;flex:1}\r
.nav-item{display:flex;align-items:center;gap:8px;padding:9px 14px;font-size:13px;color:var(--gray-500);border-left:3px solid transparent;cursor:default}\r
.nav-item.active{background:var(--blue-light);color:var(--blue);font-weight:600;border-left-color:var(--blue)}\r
.nav-item.disabled{opacity:.38;cursor:not-allowed}\r
.sidebar-user{margin-top: auto;padding:11px 14px;border-top:1px solid var(--gray-200)}\r
.user-row{display:flex;align-items:center;gap:8px;margin-bottom:8px}\r
.user-avatar{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0}\r
.av-mgr{background:var(--amber-light);color:var(--amber)}\r
.av-sup{background:var(--purple-light);color:var(--purple)}\r
.av-pt{background:var(--blue-light);color:var(--blue)}\r
.av-ot{background:#FCE7F3;color:#9D174D}\r
.av-st{background:var(--green-light);color:var(--green)}\r
.av-nur{background:var(--teal-light);color:var(--teal)}\r
.av-doc{background:#FEF3C7;color:#92400E}\r
.av-pha{background:var(--purple-light);color:var(--purple)}\r
.av-nut{background:var(--green-light);color:var(--green)}\r
.av-adm{background:var(--gray-100);color:var(--gray-600)}\r
.user-name{font-size:12px;font-weight:600;color:var(--gray-700)}\r
.user-role-label{font-size:11px;color:var(--gray-400)}\r
.role-switcher{position:relative}\r
.role-select{width:100%;padding:5px 24px 5px 8px;border:1px solid var(--gray-200);border-radius:6px;font-size:11px;font-weight:600;color:var(--gray-600);background:var(--white);cursor:pointer;appearance:none;outline:none}\r
.role-select:focus{border-color:var(--blue)}\r
.role-arrow{position:absolute;right:7px;top:50%;transform:translateY(-50%);font-size:9px;color:var(--gray-400);pointer-events:none}\r
\r
/* ── Main ── */\r
.main{flex:1;display:flex;flex-direction:column;overflow:hidden;position:relative}\r
.topbar{background:var(--white);border-bottom:1px solid var(--gray-200);padding:0 20px;height:48px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;z-index:20}\r
.breadcrumb{font-size:12px;color:var(--gray-500)}\r
.topbar-right{display:flex;align-items:center;gap:10px}\r
.topbar-date{font-size:11px;color:var(--gray-400)}\r
.notif-btn{position:relative;width:34px;height:34px;border-radius:8px;border:1px solid var(--gray-200);background:var(--white);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;transition:all .15s}\r
.notif-btn:hover{background:var(--gray-50);border-color:var(--gray-300)}\r
.notif-badge{position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--red);color:var(--white);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;border:2px solid var(--white)}\r
.content{flex:1;overflow-y:auto;padding:20px;transition:margin-right .25s}\r
.content.shifted{margin-right:360px}\r
\r
/* ── Notification Panel ── */\r
.notif-panel{position:fixed;top:0;right:-360px;width:360px;height:100vh;background:var(--white);border-left:1px solid var(--gray-200);box-shadow:-4px 0 24px rgba(0,0,0,.1);z-index:50;display:flex;flex-direction:column;transition:right .25s}\r
.notif-panel.open{right:0}\r
.notif-panel-header{padding:16px 18px;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.notif-panel-title{font-size:15px;font-weight:700}\r
.notif-panel-sub{font-size:11px;color:var(--gray-400);margin-top:2px}\r
.notif-close{width:26px;height:26px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}\r
.notif-close:hover{background:var(--gray-200)}\r
.notif-list{flex:1;overflow-y:auto;padding:8px 0}\r
.notif-section-label{font-size:10px;font-weight:700;color:var(--gray-400);text-transform:uppercase;letter-spacing:.06em;padding:10px 18px 5px}\r
.notif-item{display:flex;gap:10px;padding:10px 18px;cursor:pointer;transition:background .12s;border-left:3px solid transparent}\r
.notif-item:hover{background:var(--gray-50)}\r
.notif-item.unread{background:var(--blue-light);border-left-color:var(--blue)}\r
.notif-item.urgent{background:var(--red-light);border-left-color:var(--red)}\r
.notif-item.urgent:hover{background:#FECACA}\r
.notif-icon{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0}\r
.ni-blue{background:var(--blue-light)}\r
.ni-red{background:var(--red-light)}\r
.ni-amber{background:var(--amber-light)}\r
.ni-green{background:var(--green-light)}\r
.ni-purple{background:var(--purple-light)}\r
.notif-body{flex:1;min-width:0}\r
.notif-title{font-size:12px;font-weight:600;color:var(--gray-900);margin-bottom:2px}\r
.notif-desc{font-size:11px;color:var(--gray-500);line-height:1.5}\r
.notif-time{font-size:10px;color:var(--gray-400);margin-top:3px}\r
.notif-mark-all{padding:10px 18px;font-size:11px;color:var(--blue);cursor:pointer;border-top:1px solid var(--gray-100);flex-shrink:0;text-align:center}\r
.notif-mark-all:hover{background:var(--blue-light)}\r
\r
/* ── Buttons ── */\r
.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .15s;white-space:nowrap}\r
.btn-primary{background:var(--blue);color:var(--white)}.btn-primary:hover{background:var(--blue-dark)}\r
.btn-secondary{background:var(--white);color:var(--gray-700);border:1px solid var(--gray-300)}.btn-secondary:hover{background:var(--gray-50)}\r
.btn-ghost{background:transparent;color:var(--blue);border:1px solid var(--blue-mid)}.btn-ghost:hover{background:var(--blue-light)}\r
.btn-green{background:var(--white);color:var(--green);border:1px solid var(--green-mid)}.btn-green:hover{background:var(--green-light)}\r
.btn-amber{background:var(--white);color:var(--amber);border:1px solid #FDE68A}.btn-amber:hover{background:var(--amber-light)}\r
.btn-red{background:var(--white);color:var(--red);border:1px solid #FECACA}.btn-red:hover{background:var(--red-light)}\r
.btn-sm{padding:5px 10px;font-size:12px}.btn-xs{padding:3px 8px;font-size:11px}\r
\r
/* ── Badges ── */\r
.badge{display:inline-flex;align-items:center;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:600}\r
.badge-blue{background:var(--blue-light);color:var(--blue)}\r
.badge-green{background:var(--green-light);color:var(--green)}\r
.badge-amber{background:var(--amber-light);color:var(--amber)}\r
.badge-gray{background:var(--gray-100);color:var(--gray-500)}\r
.badge-red{background:var(--red-light);color:var(--red)}\r
.badge-purple{background:var(--purple-light);color:var(--purple)}\r
.badge-teal{background:var(--teal-light);color:var(--teal)}\r
\r
/* ── Dashboard layout ── */\r
.dash-greeting{margin-bottom:20px}\r
.dash-greeting h1{font-size:20px;font-weight:700;color:var(--gray-900)}\r
.dash-greeting p{font-size:13px;color:var(--gray-500);margin-top:3px}\r
\r
/* Stats strip */\r
.stats-row{display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap}\r
.stat-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:14px 18px;display:flex;flex-direction:column;gap:3px;min-width:110px;flex:1}\r
.stat-label{font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em}\r
.stat-value{font-size:24px;font-weight:700;color:var(--gray-900)}\r
.stat-sub{font-size:11px;color:var(--gray-400)}\r
.stat-card.s-blue{border-color:var(--blue-mid);background:var(--blue-light)}.stat-card.s-blue .stat-value{color:var(--blue)}\r
.stat-card.s-green{border-color:var(--green-mid);background:var(--green-light)}.stat-card.s-green .stat-value{color:var(--green)}\r
.stat-card.s-amber{border-color:#FDE68A;background:var(--amber-light)}.stat-card.s-amber .stat-value{color:var(--amber)}\r
.stat-card.s-red{border-color:#FECACA;background:var(--red-light)}.stat-card.s-red .stat-value{color:var(--red)}\r
.stat-card.s-purple{border-color:#DDD6FE;background:var(--purple-light)}.stat-card.s-purple .stat-value{color:var(--purple)}\r
\r
/* Two-col grid */\r
.dash-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}\r
.dash-grid.three-col{grid-template-columns:1fr 1fr 1fr}\r
.span-2{grid-column:span 2}\r
\r
/* Widget card */\r
.widget{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;overflow:hidden}\r
.widget-header{padding:12px 16px;border-bottom:1px solid var(--gray-100);display:flex;align-items:center;justify-content:space-between}\r
.widget-title{font-size:13px;font-weight:700;color:var(--gray-700);display:flex;align-items:center;gap:6px}\r
.widget-action{font-size:11px;color:var(--blue);cursor:pointer}\r
.widget-action:hover{text-decoration:underline}\r
.widget-body{padding:12px 16px}\r
.widget-body.no-pad{padding:0}\r
.widget-empty{padding:20px;text-align:center;color:var(--gray-400);font-size:12px}\r
\r
/* Todo list */\r
.todo-list{display:flex;flex-direction:column}\r
.todo-item{display:flex;align-items:flex-start;gap:10px;padding:10px 16px;border-bottom:1px solid var(--gray-100);cursor:pointer;transition:background .12s}\r
.todo-item:last-child{border-bottom:none}\r
.todo-item:hover{background:var(--gray-50)}\r
.todo-icon{width:30px;height:30px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}\r
.todo-body{flex:1;min-width:0}\r
.todo-title{font-size:12px;font-weight:600;color:var(--gray-800);margin-bottom:2px}\r
.todo-meta{font-size:11px;color:var(--gray-500)}\r
.todo-badge{flex-shrink:0;align-self:center}\r
.todo-item.urgent .todo-title{color:var(--red)}\r
\r
/* Case list in widget */\r
.mini-case-list{display:flex;flex-direction:column}\r
.mini-case{display:flex;align-items:center;gap:10px;padding:9px 16px;border-bottom:1px solid var(--gray-100);cursor:pointer;transition:background .12s}\r
.mini-case:last-child{border-bottom:none}\r
.mini-case:hover{background:var(--gray-50)}\r
.mini-case-name{font-size:12px;font-weight:600;color:var(--gray-800);min-width:60px}\r
.mini-case-meta{font-size:11px;color:var(--gray-500);flex:1}\r
.mini-case-right{display:flex;align-items:center;gap:6px}\r
\r
/* Progress bar */\r
.prog-row{display:flex;align-items:center;gap:8px;padding:8px 16px;border-bottom:1px solid var(--gray-100)}\r
.prog-row:last-child{border-bottom:none}\r
.prog-label{font-size:12px;color:var(--gray-700);min-width:70px}\r
.prog-bar-wrap{flex:1;height:6px;background:var(--gray-100);border-radius:999px;overflow:hidden}\r
.prog-bar{height:100%;border-radius:999px;background:var(--blue)}\r
.prog-bar.green{background:var(--green)}\r
.prog-bar.amber{background:var(--amber)}\r
.prog-count{font-size:11px;color:var(--gray-500);min-width:40px;text-align:right}\r
\r
/* Schedule list */\r
.sched-list{display:flex;flex-direction:column}\r
.sched-item{display:flex;align-items:center;gap:10px;padding:9px 16px;border-bottom:1px solid var(--gray-100)}\r
.sched-item:last-child{border-bottom:none}\r
.sched-time{font-size:11px;font-weight:600;color:var(--gray-500);min-width:44px}\r
.sched-name{font-size:12px;font-weight:600;color:var(--gray-800);flex:1}\r
.sched-meta{font-size:11px;color:var(--gray-400)}\r
.th-tag{display:inline-flex;align-items:center;padding:2px 6px;border-radius:4px;font-size:10px;font-weight:700}\r
.th-pt{background:#DBEAFE;color:#1D4ED8}\r
.th-ot{background:#FCE7F3;color:#9D174D}\r
.th-st{background:var(--green-light);color:var(--green)}\r
\r
/* Countdown */\r
.countdown-list{display:flex;flex-direction:column}\r
.cd-item{display:flex;align-items:center;gap:10px;padding:9px 16px;border-bottom:1px solid var(--gray-100)}\r
.cd-item:last-child{border-bottom:none}\r
.cd-name{font-size:12px;font-weight:600;color:var(--gray-800);flex:1}\r
.cd-meta{font-size:11px;color:var(--gray-500)}\r
.cd-days{font-size:13px;font-weight:700;min-width:50px;text-align:right}\r
.cd-days.urgent{color:var(--red)}\r
.cd-days.warn{color:var(--amber)}\r
.cd-days.ok{color:var(--green)}\r
\r
/* Indicator banner */\r
.indicator-banner{background:linear-gradient(135deg,var(--blue) 0%,var(--blue-dark) 100%);border-radius:10px;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;color:var(--white)}\r
.ib-left h3{font-size:14px;font-weight:700;margin-bottom:3px}\r
.ib-left p{font-size:12px;opacity:.85}\r
.ib-right{display:flex;gap:8px}\r
\r
/* Approval widget */\r
.approval-list{display:flex;flex-direction:column}\r
.approval-item{padding:10px 16px;border-bottom:1px solid var(--gray-100)}\r
.approval-item:last-child{border-bottom:none}\r
.approval-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:5px}\r
.approval-name{font-size:12px;font-weight:600;color:var(--gray-800)}\r
.approval-reason{font-size:11px;color:var(--gray-500);margin-bottom:6px}\r
.approval-actions{display:flex;gap:5px}\r
\r
/* Billing list */\r
.billing-list{display:flex;flex-direction:column}\r
.billing-item{display:flex;align-items:center;gap:10px;padding:9px 16px;border-bottom:1px solid var(--gray-100)}\r
.billing-item:last-child{border-bottom:none}\r
.billing-name{font-size:12px;font-weight:600;color:var(--gray-800);flex:1}\r
.billing-meta{font-size:11px;color:var(--gray-500)}\r
.billing-amount{font-size:12px;font-weight:600;color:var(--gray-700)}\r
\r
/* Admin build list */\r
.build-item{display:flex;align-items:center;gap:10px;padding:9px 16px;border-bottom:1px solid var(--gray-100)}\r
.build-item:last-child{border-bottom:none}\r
.build-name{font-size:12px;font-weight:600;color:var(--gray-800);flex:1}\r
.build-meta{font-size:11px;color:var(--gray-500)}\r
\r
.hidden{display:none!important}\r
.mt-12{margin-top:12px}\r
</style>\r
</head>\r
<body>\r
\r
<!-- SIDEBAR -->\r
<aside class="sidebar">\r
<!--\r
  <div class="sidebar-logo">\r
    <div class="logo-text">PAC 管理系統</div>\r
    <div class="logo-sub">急性後期照護</div>\r
  </div>\r
   <nav class="sidebar-nav">\r
    <div class="nav-item active">🏠 個人儀表板</div>\r
    <div class="nav-item disabled">📋 個案管理</div>\r
    <div class="nav-item disabled">🛏 病床管理</div>\r
    <div class="nav-item disabled">📅 班表總覽頁</div>\r
    <div class="nav-item disabled">🏡 居家排班管理</div>\r
    <div class="nav-item disabled">📊 評估量表</div>\r
    <div class="nav-item disabled">💪 復健紀錄</div>\r
    <div class="nav-item disabled">📤 指標匯出</div>\r
  </nav> \r
-->\r
  <div class="sidebar-user">\r
    <div class="user-row">\r
      <div class="user-avatar av-mgr" id="user-av">林</div>\r
      <div>\r
        <div class="user-name" id="user-name">林美惠</div>\r
        <div class="user-role-label" id="user-role-label">個案管理師</div>\r
      </div>\r
    </div>\r
    <div class="role-switcher">\r
      <select class="role-select" id="role-select" onchange="switchRole(this.value)">\r
        <option value="mgr">個管師</option>\r
        <option value="sup">復健主管</option>\r
        <option value="pt">PT（物理治療師）</option>\r
        <option value="ot">OT（職能治療師）</option>\r
        <option value="st">ST（語言治療師）</option>\r
        <option value="nur">護理師</option>\r
        <option value="doc">醫師</option>\r
        <option value="pha">藥師</option>\r
        <option value="nut">營養師</option>\r
        <option value="adm">行政</option>\r
      </select>\r
      <span class="role-arrow">▾</span>\r
    </div>\r
  </div>\r
</aside>\r
\r
<!-- MAIN -->\r
<div class="main">\r
  <div class="topbar">\r
    <div class="breadcrumb" id="bc">個人儀表板</div>\r
    <div class="topbar-right">\r
      <span class="topbar-date">2026/06/24 週三</span>\r
      <button class="notif-btn" id="notif-btn" onclick="toggleNotif()">\r
        🔔\r
        <span class="notif-badge" id="notif-badge">5</span>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="content" id="content">\r
    <!-- 儀表板內容由 JS 渲染 -->\r
  </div>\r
</div>\r
\r
<!-- 通知面板 -->\r
<div class="notif-panel" id="notif-panel">\r
  <div class="notif-panel-header">\r
    <div>\r
      <div class="notif-panel-title">🔔 通知中心</div>\r
      <div class="notif-panel-sub" id="notif-unread-count">5 則未讀</div>\r
    </div>\r
    <button class="notif-close" onclick="toggleNotif()">✕</button>\r
  </div>\r
  <div class="notif-list" id="notif-list">\r
    <!-- 通知由 JS 渲染 -->\r
  </div>\r
  <div class="notif-mark-all" onclick="markAllRead()">全部標為已讀</div>\r
</div>\r
\r
<script>\r
// ── 角色設定 ──\r
const ROLES = {\r
  mgr:  {name:'林美惠', label:'個案管理師', av:'av-mgr', ch:'林'},\r
  sup:  {name:'王大明', label:'復健主管', av:'av-sup', ch:'王'},\r
  pt:   {name:'黃志豪', label:'PT（物理治療師）', av:'av-pt', ch:'黃'},\r
  ot:   {name:'李佳穎', label:'OT（職能治療師）', av:'av-ot', ch:'李'},\r
  st:   {name:'吳怡君', label:'ST（語言治療師）', av:'av-st', ch:'吳'},\r
  nur:  {name:'陳玉玲', label:'護理師', av:'av-nur', ch:'陳'},\r
  doc:  {name:'張宗達', label:'醫師', av:'av-doc', ch:'張'},\r
  pha:  {name:'林建志', label:'藥師', av:'av-pha', ch:'林'},\r
  nut:  {name:'周雅玲', label:'營養師', av:'av-nut', ch:'周'},\r
  adm:  {name:'蔡書明', label:'行政', av:'av-adm', ch:'蔡'},\r
};\r
\r
// ── 通知資料 ──\r
const NOTIFS = {\r
  mgr: [\r
    {type:'urgent', icon:'⚠️', ic:'ni-red', title:'展延即將到期', desc:'陳建國・CVA・第 4 週，應於 2 天內送展延', time:'今天 09:15', unread:true},\r
    {type:'urgent', icon:'⚠️', ic:'ni-red', title:'展延即將到期', desc:'王淑芬・TKR・第 6 週，應於 3 天內送展延', time:'今天 09:15', unread:true},\r
    {type:'unread', icon:'📝', ic:'ni-purple', title:'待審核：評估修改申請', desc:'黃志豪（PT）申請修改・陳建國複評 1', time:'今天 08:42', unread:true},\r
    {type:'unread', icon:'💰', ic:'ni-amber', title:'待審核：批價申請', desc:'王大明（復健主管）已審核・劉家豪 6 月批價', time:'昨天 17:20', unread:true},\r
    {type:'', icon:'👤', ic:'ni-blue', title:'新轉介個案', desc:'上游：臺大醫院・李○○・CVA，待收案判斷', time:'昨天 14:05', unread:false},\r
    {type:'', icon:'✓', ic:'ni-green', title:'展延通過', desc:'張明輝・Hip Fx，健保署已通過展延', time:'昨天 11:30', unread:false},\r
  ],\r
  sup: [\r
    {type:'unread', icon:'📋', ic:'ni-purple', title:'待審核：評估修改申請', desc:'黃志豪（PT）申請修改・陳建國複評 1', time:'今天 08:42', unread:true},\r
    {type:'unread', icon:'🔄', ic:'ni-amber', title:'換班申請', desc:'李佳穎 申請 06/26 與陳建宏換班', time:'今天 07:55', unread:true},\r
    {type:'', icon:'✓', ic:'ni-green', title:'居家個案已成立', desc:'劉家豪・CVA・3PT 3OT 報名完成', time:'昨天 16:00', unread:false},\r
  ],\r
  pt: [\r
    {type:'urgent', icon:'📊', ic:'ni-red', title:'評估逾期提醒', desc:'王淑芬・複評 2 應於今日填寫', time:'今天 08:00', unread:true},\r
    {type:'unread', icon:'🏡', ic:'ni-blue', title:'新居家個案可報名', desc:'林○○・CVA・大安區（4.2km）', time:'今天 07:30', unread:true},\r
    {type:'', icon:'✓', ic:'ni-green', title:'修改申請通過', desc:'陳建國複評 1・復健主管已核准修改', time:'昨天 15:20', unread:false},\r
  ],\r
  ot: [\r
    {type:'urgent', icon:'📊', ic:'ni-red', title:'評估待填提醒', desc:'陳建國・複評 1 應於明日填寫', time:'今天 09:00', unread:true},\r
    {type:'unread', icon:'🏡', ic:'ni-blue', title:'新居家個案可報名', desc:'林○○・CVA・大安區（4.2km）', time:'今天 07:30', unread:true},\r
  ],\r
  st: [\r
    {type:'unread', icon:'📊', ic:'ni-amber', title:'評估待填提醒', desc:'劉家豪・初評尚未填寫', time:'今天 09:00', unread:true},\r
  ],\r
  nur: [\r
    {type:'unread', icon:'📋', ic:'ni-purple', title:'PAC 收案判斷委託', desc:'個管師林美惠委託判斷・李○○・CVA', time:'今天 10:20', unread:true},\r
    {type:'', icon:'📊', ic:'ni-amber', title:'評估待填', desc:'陳建國・護理評估・複評 1', time:'今天 09:00', unread:false},\r
  ],\r
  doc: [\r
    {type:'urgent', icon:'👤', ic:'ni-red', title:'待判斷個案', desc:'新轉介・李○○・CVA，需判斷是否符合 PAC', time:'今天 10:30', unread:true},\r
    {type:'unread', icon:'📋', ic:'ni-amber', title:'醫囑待確認', desc:'劉家豪 確認為 PAC，請提供醫囑方向', time:'今天 09:15', unread:true},\r
    {type:'', icon:'📊', ic:'ni-blue', title:'評估待填', desc:'陳建國・醫師評估・複評 1', time:'今天 09:00', unread:false},\r
  ],\r
  pha: [\r
    {type:'unread', icon:'📊', ic:'ni-amber', title:'評估待填', desc:'陳建國・藥師評估・複評 1', time:'今天 09:00', unread:true},\r
    {type:'', icon:'📊', ic:'ni-amber', title:'評估待填', desc:'王淑芬・藥師評估・複評 2', time:'昨天 09:00', unread:false},\r
  ],\r
  nut: [\r
    {type:'unread', icon:'📊', ic:'ni-green', title:'評估待填', desc:'陳建國・營養師評估・複評 1', time:'今天 09:00', unread:true},\r
  ],\r
  adm: [\r
    {type:'urgent', icon:'🏥', ic:'ni-red', title:'今日入院待建檔', desc:'陳志明・CVA・預計 10:00 入院', time:'今天 08:00', unread:true},\r
    {type:'urgent', icon:'🏥', ic:'ni-red', title:'今日入院待建檔', desc:'黃○○・Hip Fx・預計 14:00 入院', time:'今天 08:00', unread:true},\r
    {type:'unread', icon:'💰', ic:'ni-amber', title:'待批價', desc:'劉家豪・居家復健 06/23 執行・個管師已審核', time:'今天 07:30', unread:true},\r
    {type:'', icon:'💰', ic:'ni-amber', title:'月初獎金結算提醒', desc:'5 月已結案個案共 3 件，請至杏翔系統結算', time:'06/01 09:00', unread:false},\r
  ],\r
};\r
\r
// ── 儀表板內容 ──\r
function renderDashboard(role) {\r
  const content = document.getElementById('content');\r
  const cfg = ROLES[role];\r
\r
  const greets = {\r
    mgr:'今日有 2 件個案展延即將到期，請留意。',\r
    sup:'今日共安排 8 位個案，3 件待審核申請。',\r
    pt:'今日有 4 位個案待治療，1 件評估待填。',\r
    ot:'今日有 3 位個案待治療，1 件評估待填。',\r
    st:'今日有 2 位個案待治療，1 件評估待填。',\r
    nur:'今日病房入住 12 人，1 件 PAC 判斷委託待處理。',\r
    doc:'有 1 件 PAC 收案待判斷，1 件醫囑待完成。',\r
    pha:'本週有 2 份評估量表待填寫。',\r
    nut:'本週有 1 份評估量表待填寫。',\r
    adm:'今日有 2 位入院個案待建檔，1 件批價待處理。',\r
  };\r
\r
  let html = \`\r
    <div class="dash-greeting">\r
      <h1>早安，\${cfg.name.replace(cfg.ch,'')||cfg.name} 👋</h1>\r
      <p>\${greets[role]}</p>\r
    </div>\r
  \`;\r
\r
  if (role === 'mgr') html += renderMgr();\r
  else if (role === 'sup') html += renderSup();\r
  else if (['pt','ot','st'].includes(role)) html += renderTherapist(role);\r
  else if (role === 'nur') html += renderNur();\r
  else if (role === 'doc') html += renderDoc();\r
  else if (role === 'pha' || role === 'nut') html += renderPharNut(role);\r
  else if (role === 'adm') html += renderAdm();\r
\r
  content.innerHTML = html;\r
}\r
\r
function renderMgr() {\r
  return \`\r
  <!-- 指標提醒 banner（1月/7月才出現，此處示意） -->\r
  <div class="indicator-banner">\r
    <div class="ib-left">\r
      <h3>📊 半年指標彙整提醒</h3>\r
      <p>2026 年上半年（1月～6月）成果報告應於 7 月 15 日前送出健保署</p>\r
    </div>\r
    <div class="ib-right">\r
      <button class="btn btn-secondary btn-sm" onclick="alert('跳轉至 → 指標匯出模組')">前往彙整</button>\r
    </div>\r
  </div>\r
\r
  <!-- 統計 -->\r
  <div class="stats-row">\r
    <div class="stat-card s-blue"><div class="stat-label">在院 PAC 個案</div><div class="stat-value">12</div><div class="stat-sub">住院 8・日照 4</div></div>\r
    <div class="stat-card s-green"><div class="stat-label">今日入院</div><div class="stat-value">2</div><div class="stat-sub">CVA・Hip Fx</div></div>\r
    <div class="stat-card s-amber"><div class="stat-label">今日出院</div><div class="stat-value">1</div><div class="stat-sub">TKR 結案</div></div>\r
    <div class="stat-card s-red"><div class="stat-label">展延倒數 ≤5天</div><div class="stat-value">2</div><div class="stat-sub">需優先處理</div></div>\r
    <div class="stat-card"><div class="stat-label">全院床位使用率</div><div class="stat-value">78%</div><div class="stat-sub">28 / 36 床</div></div>\r
    <div class="stat-card s-purple"><div class="stat-label">居家個案</div><div class="stat-value">5</div><div class="stat-sub">進行中</div></div>\r
  </div>\r
\r
  <div class="dash-grid">\r
    <!-- 今日待辦 -->\r
    <div class="widget span-2">\r
      <div class="widget-header">\r
        <div class="widget-title">📌 今日待辦</div>\r
        <span class="badge badge-red">6 件</span>\r
      </div>\r
      <div class="todo-list">\r
        <div class="todo-item urgent" onclick="alert('跳轉至 → 個案管理・陳建國展延準備')">\r
          <div class="todo-icon ni-red">⚠️</div>\r
          <div class="todo-body">\r
            <div class="todo-title">【緊急】陳建國 展延倒數 2 天</div>\r
            <div class="todo-meta">CVA・住院・第 4 週・應於 2026/06/26 前送出</div>\r
          </div>\r
          <div class="todo-badge"><span class="badge badge-red">2天</span></div>\r
        </div>\r
        <div class="todo-item urgent" onclick="alert('跳轉至 → 個案管理・王淑芬展延準備')">\r
          <div class="todo-icon ni-red">⚠️</div>\r
          <div class="todo-body">\r
            <div class="todo-title">【緊急】王淑芬 展延倒數 3 天</div>\r
            <div class="todo-meta">TKR・住院・第 6 週・應於 2026/06/27 前送出</div>\r
          </div>\r
          <div class="todo-badge"><span class="badge badge-red">3天</span></div>\r
        </div>\r
        <div class="todo-item" onclick="alert('跳轉至 → 個案管理・新轉介待判斷')">\r
          <div class="todo-icon ni-blue">👤</div>\r
          <div class="todo-body">\r
            <div class="todo-title">新轉介個案待收案判斷</div>\r
            <div class="todo-meta">李○○・CVA・上游：臺大醫院（待我判斷）</div>\r
          </div>\r
          <div class="todo-badge"><span class="badge badge-blue">待判斷</span></div>\r
        </div>\r
        <div class="todo-item" onclick="alert('跳轉至 → 個案管理・待醫師判斷')">\r
          <div class="todo-icon ni-amber">🩺</div>\r
          <div class="todo-body">\r
            <div class="todo-title">待醫師判斷：黃○○</div>\r
            <div class="todo-meta">病摘已送張宗達醫師・CVA・等待回覆中</div>\r
          </div>\r
          <div class="todo-badge"><span class="badge badge-amber">等待中</span></div>\r
        </div>\r
        <div class="todo-item" onclick="alert('跳轉至 → 評估量表・待審核修改申請')">\r
          <div class="todo-icon ni-purple">📝</div>\r
          <div class="todo-body">\r
            <div class="todo-title">待審核：評估修改申請</div>\r
            <div class="todo-meta">復健主管 王大明 已審核・陳建國複評 1（PT）</div>\r
          </div>\r
          <div class="todo-badge"><span class="badge badge-purple">待我審核</span></div>\r
        </div>\r
        <div class="todo-item" onclick="alert('跳轉至 → 居家排班管理・待審核批價')">\r
          <div class="todo-icon ni-amber">💰</div>\r
          <div class="todo-body">\r
            <div class="todo-title">待審核：批價申請</div>\r
            <div class="todo-meta">劉家豪・居家復健 6 月・復健主管已審核</div>\r
          </div>\r
          <div class="todo-badge"><span class="badge badge-amber">待我審核</span></div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 展延倒數 -->\r
    <div class="widget">\r
      <div class="widget-header">\r
        <div class="widget-title">⏱ 展延倒數</div>\r
        <span class="widget-action" onclick="alert('跳轉至 → 個案管理（全部個案）')">全部個案</span>\r
      </div>\r
      <div class="countdown-list">\r
        <div class="cd-item">\r
          <div><div class="cd-name">陳建國</div><div class="cd-meta">CVA・住院・第4週</div></div>\r
          <div class="cd-days urgent">2 天</div>\r
        </div>\r
        <div class="cd-item">\r
          <div><div class="cd-name">王淑芬</div><div class="cd-meta">TKR・住院・第6週</div></div>\r
          <div class="cd-days urgent">3 天</div>\r
        </div>\r
        <div class="cd-item">\r
          <div><div class="cd-name">劉家豪</div><div class="cd-meta">CVA・日照・第3週</div></div>\r
          <div class="cd-days warn">8 天</div>\r
        </div>\r
        <div class="cd-item">\r
          <div><div class="cd-name">林翠娟</div><div class="cd-meta">Hip Fx・住院・第9週</div></div>\r
          <div class="cd-days ok">18 天</div>\r
        </div>\r
        <div class="cd-item">\r
          <div><div class="cd-name">張明輝</div><div class="cd-meta">CVA・住院・第11週</div></div>\r
          <div class="cd-days ok">21 天</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 評估填寫進度 -->\r
    <div class="widget">\r
      <div class="widget-header">\r
        <div class="widget-title">📊 評估填寫進度</div>\r
        <span class="widget-action" onclick="alert('跳轉至 → 評估量表模組')">發送提醒</span>\r
      </div>\r
      <div class="mini-case-list">\r
        <div class="mini-case" onclick="alert('跳轉至 → 評估量表・陳建國')">\r
          <div class="mini-case-name">陳建國</div>\r
          <div class="mini-case-meta">複評1・PT待填・OT待填</div>\r
          <div class="mini-case-right"><span class="badge badge-amber">2人待填</span></div>\r
        </div>\r
        <div class="mini-case" onclick="alert('跳轉至 → 評估量表・王淑芬')">\r
          <div class="mini-case-name">王淑芬</div>\r
          <div class="mini-case-meta">複評2・PT逾期</div>\r
          <div class="mini-case-right"><span class="badge badge-red">逾期</span></div>\r
        </div>\r
        <div class="mini-case" onclick="alert('跳轉至 → 評估量表・劉家豪')">\r
          <div class="mini-case-name">劉家豪</div>\r
          <div class="mini-case-meta">初評・全部待填</div>\r
          <div class="mini-case-right"><span class="badge badge-amber">待填</span></div>\r
        </div>\r
        <div class="mini-case" onclick="alert('跳轉至 → 評估量表・林翠娟')">\r
          <div class="mini-case-name">林翠娟</div>\r
          <div class="mini-case-meta">複評3・全部完成</div>\r
          <div class="mini-case-right"><span class="badge badge-green">✓ 完成</span></div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 居家批價狀態 -->\r
    <div class="widget">\r
      <div class="widget-header">\r
        <div class="widget-title">💰 居家批價追蹤</div>\r
        <span class="widget-action" onclick="alert('跳轉至 → 居家排班管理・批價')">全部</span>\r
      </div>\r
      <div class="billing-list">\r
        <div class="billing-item">\r
          <div><div class="billing-name">劉家豪</div><div class="billing-meta">06/23 執行・復健主管已審</div></div>\r
          <span class="badge badge-amber">待我審核</span>\r
        </div>\r
        <div class="billing-item">\r
          <div><div class="billing-name">黃建國</div><div class="billing-meta">06/20 執行・已送行政</div></div>\r
          <span class="badge badge-blue">批價中</span>\r
        </div>\r
        <div class="billing-item">\r
          <div><div class="billing-name">陳志明</div><div class="billing-meta">06/15 執行</div></div>\r
          <span class="badge badge-green">✓ 完成</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 床位概覽 -->\r
    <div class="widget">\r
      <div class="widget-header">\r
        <div class="widget-title">🛏 床位概覽</div>\r
        <span class="widget-action" onclick="alert('跳轉至 → 病床管理模組')">管理床位</span>\r
      </div>\r
      <div class="widget-body">\r
        <div class="prog-row"><div class="prog-label">3F（PAC）</div><div class="prog-bar-wrap"><div class="prog-bar" style="width:83%"></div></div><div class="prog-count">10/12</div></div>\r
        <div class="prog-row"><div class="prog-label">4F（一般）</div><div class="prog-bar-wrap"><div class="prog-bar green" style="width:60%"></div></div><div class="prog-count">9/15</div></div>\r
        <div class="prog-row"><div class="prog-label">5F（混合）</div><div class="prog-bar-wrap"><div class="prog-bar amber" style="width:89%"></div></div><div class="prog-count">8/9</div></div>\r
        <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">\r
          <span class="badge badge-green">今日入院 2</span>\r
          <span class="badge badge-amber">今日出院 1</span>\r
          <span class="badge badge-blue">待排床 1</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\`;\r
}\r
\r
function renderSup() {\r
  return \`\r
  <div class="stats-row">\r
    <div class="stat-card s-blue"><div class="stat-label">今日院內個案</div><div class="stat-value">8</div><div class="stat-sub">PT 5・OT 4・ST 2</div></div>\r
    <div class="stat-card s-amber"><div class="stat-label">待審核申請</div><div class="stat-value">3</div><div class="stat-sub">修改 1・換班 1・批價 1</div></div>\r
    <div class="stat-card s-purple"><div class="stat-label">評估待填</div><div class="stat-value">4</div><div class="stat-sub">跨 3 位個案</div></div>\r
    <div class="stat-card s-green"><div class="stat-label">居家個案</div><div class="stat-value">5</div><div class="stat-sub">進行中</div></div>\r
  </div>\r
  <div class="dash-grid">\r
    <!-- 我今日的治療 -->\r
    <div class="widget">\r
      <div class="widget-header">\r
        <div class="widget-title">🏃 我今日的治療</div>\r
        <span class="widget-action" onclick="alert('跳轉至 → 班表總覽頁')">查看班表</span>\r
      </div>\r
      <div class="sched-list">\r
        <div class="sched-item"><div class="sched-time">09:00</div><div class="sched-name">陳建國</div><div class="sched-meta">CVA・A301</div><span class="th-tag th-pt">PT</span></div>\r
        <div class="sched-item"><div class="sched-time">10:30</div><div class="sched-name">林翠娟</div><div class="sched-meta">Hip Fx・B205</div><span class="th-tag th-pt">PT</span></div>\r
        <div class="sched-item"><div class="sched-time">14:00</div><div class="sched-name">張明輝</div><div class="sched-meta">CVA・C118</div><span class="th-tag th-pt">PT</span></div>\r
      </div>\r
    </div>\r
    <!-- 待審核 -->\r
    <div class="widget">\r
      <div class="widget-header">\r
        <div class="widget-title">📝 待我審核</div>\r
        <span class="badge badge-amber">3 件</span>\r
      </div>\r
      <div class="approval-list">\r
        <div class="approval-item">\r
          <div class="approval-top"><div class="approval-name">評估修改申請・黃志豪</div><span class="badge badge-purple">待審核</span></div>\r
          <div class="approval-reason">陳建國複評 1（PT）・修改原因：Br.Stage 上肢填寫有誤</div>\r
          <div class="approval-actions"><button class="btn btn-red btn-xs" onclick="alert('拒絕')">拒絕</button><button class="btn btn-green btn-xs" onclick="alert('核准後送個管師')">核准→送個管師</button></div>\r
        </div>\r
        <div class="approval-item">\r
          <div class="approval-top"><div class="approval-name">換班申請・李佳穎</div><span class="badge badge-amber">待審核</span></div>\r
          <div class="approval-reason">06/26（OT）申請與陳建宏換班</div>\r
          <div class="approval-actions"><button class="btn btn-red btn-xs" onclick="alert('拒絕')">拒絕</button><button class="btn btn-green btn-xs" onclick="alert('核准')">核准</button></div>\r
        </div>\r
        <div class="approval-item">\r
          <div class="approval-top"><div class="approval-name">批價審核・劉家豪</div><span class="badge badge-amber">待審核</span></div>\r
          <div class="approval-reason">居家復健 6 月・執行 6 次・NT$ 3,600</div>\r
          <div class="approval-actions"><button class="btn btn-red btn-xs" onclick="alert('退回')">退回</button><button class="btn btn-green btn-xs" onclick="alert('核准→送個管師')">核准→送個管師</button></div>\r
        </div>\r
      </div>\r
    </div>\r
    <!-- 治療師評估進度 -->\r
    <div class="widget">\r
      <div class="widget-header">\r
        <div class="widget-title">📊 治療師評估進度</div>\r
        <span class="widget-action" onclick="alert('跳轉至 → 評估量表模組')">詳情</span>\r
      </div>\r
      <div class="mini-case-list">\r
        <div class="mini-case"><div class="mini-case-name">黃志豪</div><div class="mini-case-meta">陳建國複評1待填・王淑芬複評2逾期</div><span class="badge badge-red">逾期</span></div>\r
        <div class="mini-case"><div class="mini-case-name">李佳穎</div><div class="mini-case-meta">陳建國複評1待填・劉家豪初評待填</div><span class="badge badge-amber">待填</span></div>\r
        <div class="mini-case"><div class="mini-case-name">吳怡君</div><div class="mini-case-meta">所有評估已完成</div><span class="badge badge-green">✓ 完成</span></div>\r
      </div>\r
    </div>\r
    <!-- 居家個案狀態 -->\r
    <div class="widget">\r
      <div class="widget-header">\r
        <div class="widget-title">🏡 居家個案狀態</div>\r
        <span class="widget-action" onclick="alert('跳轉至 → 居家排班管理')">全部</span>\r
      </div>\r
      <div class="mini-case-list">\r
        <div class="mini-case"><div class="mini-case-name">劉家豪</div><div class="mini-case-meta">進行中・第3週・PT 3 OT 3</div><span class="badge badge-blue">進行中</span></div>\r
        <div class="mini-case"><div class="mini-case-name">黃建國</div><div class="mini-case-meta">準備展延・第5週</div><span class="badge badge-amber">準備展延</span></div>\r
        <div class="mini-case"><div class="mini-case-name">陳淑真</div><div class="mini-case-meta">即將結案・第11週</div><span class="badge badge-purple">即將結案</span></div>\r
      </div>\r
    </div>\r
  </div>\`;\r
}\r
\r
function renderTherapist(role) {\r
  const tagMap = {pt:'th-pt', ot:'th-ot', st:'th-st'};\r
  const labelMap = {pt:'PT', ot:'OT', st:'ST'};\r
  const tag = \`<span class="th-tag \${tagMap[role]}">\${labelMap[role]}</span>\`;\r
  const cases = {\r
    pt:[{t:'09:00',n:'陳建國',m:'CVA・A301'},{t:'10:30',n:'林翠娟',m:'Hip Fx・B205'},{t:'14:00',n:'張明輝',m:'CVA・C118'},{t:'15:30',n:'王淑芬',m:'TKR・A302'}],\r
    ot:[{t:'09:30',n:'陳建國',m:'CVA・A301'},{t:'11:00',n:'劉家豪',m:'CVA・日照'},{t:'14:30',n:'林翠娟',m:'Hip Fx・B205'}],\r
    st:[{t:'10:00',n:'陳建國',m:'CVA・A301'},{t:'13:30',n:'劉家豪',m:'CVA・日照'}],\r
  };\r
  const evals = {\r
    pt:[{n:'王淑芬',m:'複評2・逾期',b:'badge-red',l:'逾期'},{n:'陳建國',m:'複評1・明日應填',b:'badge-amber',l:'待填'}],\r
    ot:[{n:'陳建國',m:'複評1・明日應填',b:'badge-amber',l:'待填'},{n:'劉家豪',m:'初評・待填',b:'badge-amber',l:'待填'}],\r
    st:[{n:'劉家豪',m:'初評・待填',b:'badge-amber',l:'待填'}],\r
  };\r
  return \`\r
  <div class="stats-row">\r
    <div class="stat-card s-blue"><div class="stat-label">今日治療個案</div><div class="stat-value">\${cases[role].length}</div><div class="stat-sub">院內排班</div></div>\r
    <div class="stat-card s-amber"><div class="stat-label">評估待填</div><div class="stat-value">\${evals[role].length}</div><div class="stat-sub">含逾期</div></div>\r
    <div class="stat-card s-green"><div class="stat-label">居家個案</div><div class="stat-value">\${role==='pt'?2:role==='ot'?2:0}</div><div class="stat-sub">本週執行</div></div>\r
    <div class="stat-card"><div class="stat-label">本月執行次數</div><div class="stat-value">\${role==='pt'?18:role==='ot'?14:8}</div><div class="stat-sub">院內＋居家</div></div>\r
  </div>\r
  <div class="dash-grid">\r
    <div class="widget">\r
      <div class="widget-header"><div class="widget-title">📅 今日治療排班</div><span class="widget-action" onclick="alert('跳轉至 → 班表總覽頁')">查看班表</span></div>\r
      <div class="sched-list">\r
        \${cases[role].map(c=>\`<div class="sched-item"><div class="sched-time">\${c.t}</div><div class="sched-name">\${c.n}</div><div class="sched-meta">\${c.m}</div>\${tag}</div>\`).join('')}\r
      </div>\r
    </div>\r
    <div class="widget">\r
      <div class="widget-header"><div class="widget-title">📊 評估待填</div><span class="widget-action" onclick="alert('跳轉至 → 評估量表模組')">前往填寫</span></div>\r
      \${evals[role].length ? \`<div class="mini-case-list">\r
        \${evals[role].map(e=>\`<div class="mini-case" onclick="alert('跳轉至 → 評估量表・\${e.n}')"><div class="mini-case-name">\${e.n}</div><div class="mini-case-meta">\${e.m}</div><span class="badge \${e.b}">\${e.l}</span></div>\`).join('')}\r
      </div>\` : \`<div class="widget-empty">目前無待填評估 ✓</div>\`}\r
    </div>\r
    \${role !== 'st' ? \`\r
    <div class="widget">\r
      <div class="widget-header"><div class="widget-title">🏡 可報名居家個案</div><span class="widget-action" onclick="alert('跳轉至 → 居家排班管理')">查看全部</span></div>\r
      <div class="mini-case-list">\r
        <div class="mini-case" onclick="alert('跳轉至 → 居家排班管理・報名')">\r
          <div><div class="mini-case-name">林○○</div><div class="mini-case-meta">CVA・大安區（4.2km）・截止 06/25</div></div>\r
          <span class="badge badge-green">報名</span>\r
        </div>\r
        <div class="mini-case" onclick="alert('跳轉至 → 居家排班管理・報名')">\r
          <div><div class="mini-case-name">周○○</div><div class="mini-case-meta">Hip Fx・信義區（6.8km）・截止 06/26</div></div>\r
          <span class="badge badge-green">報名</span>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="widget">\r
      <div class="widget-header"><div class="widget-title">🏡 我的居家排班</div><span class="widget-action" onclick="alert('跳轉至 → 居家排班管理')">詳情</span></div>\r
      <div class="sched-list">\r
        <div class="sched-item"><div class="sched-time">本週四</div><div class="sched-name">劉家豪</div><div class="sched-meta">大安區・下午 14:00</div>\${tag}</div>\r
        <div class="sched-item"><div class="sched-time">本週五</div><div class="sched-name">黃建國</div><div class="sched-meta">信義區・下午 15:30</div>\${tag}</div>\r
      </div>\r
    </div>\` : \`<div class="widget"><div class="widget-header"><div class="widget-title">📋 本月填寫紀錄</div></div><div class="widget-body"><div style="font-size:13px;font-weight:700;color:var(--gray-900);margin-bottom:4px">本月已完成 8 份評估</div><div style="font-size:11px;color:var(--gray-500)">初評 3・複評 4・結案 1</div></div></div><div class="widget"><div class="widget-header"><div class="widget-title">✓ 最近填寫紀錄</div></div><div class="mini-case-list"><div class="mini-case"><div class="mini-case-name">陳建國</div><div class="mini-case-meta">複評1・2026/06/24</div><span class="badge badge-green">已送出</span></div><div class="mini-case"><div class="mini-case-name">林翠娟</div><div class="mini-case-meta">複評3・2026/06/20</div><span class="badge badge-green">已送出</span></div></div></div>\`}\r
  </div>\`;\r
}\r
\r
function renderNur() {\r
  return \`\r
  <div class="stats-row">\r
    <div class="stat-card s-blue"><div class="stat-label">今日病房入住</div><div class="stat-value">12</div><div class="stat-sub">PAC 8・一般 4</div></div>\r
    <div class="stat-card s-amber"><div class="stat-label">評估待填</div><div class="stat-value">2</div><div class="stat-sub">護理評估</div></div>\r
    <div class="stat-card s-red"><div class="stat-label">PAC 判斷委託</div><div class="stat-value">1</div><div class="stat-sub">待我回覆</div></div>\r
    <div class="stat-card s-green"><div class="stat-label">今日入院</div><div class="stat-value">2</div><div class="stat-sub">待準備病房</div></div>\r
  </div>\r
  <div class="dash-grid">\r
    <div class="widget span-2">\r
      <div class="widget-header"><div class="widget-title">📌 今日待辦</div></div>\r
      <div class="todo-list">\r
        <div class="todo-item urgent" onclick="alert('跳轉至 → 個案管理・PAC 收案判斷')">\r
          <div class="todo-icon ni-red">🩺</div>\r
          <div class="todo-body"><div class="todo-title">【待回覆】PAC 收案判斷委託</div><div class="todo-meta">個管師 林美惠 委託・李○○・CVA・請協助判斷是否符合收案條件</div></div>\r
          <span class="badge badge-red">待判斷</span>\r
        </div>\r
        <div class="todo-item" onclick="alert('跳轉至 → 評估量表・陳建國')">\r
          <div class="todo-icon ni-amber">📊</div>\r
          <div class="todo-body"><div class="todo-title">評估待填：陳建國</div><div class="todo-meta">護理評估・複評 1・應填日期 2026/06/25</div></div>\r
          <span class="badge badge-amber">待填</span>\r
        </div>\r
        <div class="todo-item" onclick="alert('跳轉至 → 評估量表・王淑芬')">\r
          <div class="todo-icon ni-amber">📊</div>\r
          <div class="todo-body"><div class="todo-title">評估待填：王淑芬</div><div class="todo-meta">護理評估・複評 2・逾期</div></div>\r
          <span class="badge badge-red">逾期</span>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="widget">\r
      <div class="widget-header"><div class="widget-title">🛏 今日病房排床</div><span class="widget-action" onclick="alert('跳轉至 → 病床管理模組')">查看全部</span></div>\r
      <div class="mini-case-list">\r
        <div class="mini-case"><div class="mini-case-name">A301</div><div class="mini-case-meta">陳建國・CVA・住院中</div><span class="badge badge-blue">PAC</span></div>\r
        <div class="mini-case"><div class="mini-case-name">A302</div><div class="mini-case-meta">王淑芬・TKR・住院中</div><span class="badge badge-blue">PAC</span></div>\r
        <div class="mini-case"><div class="mini-case-name">B205</div><div class="mini-case-meta">林翠娟・Hip Fx・住院中</div><span class="badge badge-blue">PAC</span></div>\r
        <div class="mini-case"><div class="mini-case-name">C118</div><div class="mini-case-meta">今日入院・陳志明・CVA</div><span class="badge badge-green">今日入院</span></div>\r
      </div>\r
    </div>\r
    <div class="widget">\r
      <div class="widget-header"><div class="widget-title">📋 本月評估填寫紀錄</div></div>\r
      <div class="widget-body">\r
        <div style="font-size:13px;font-weight:700;color:var(--gray-900);margin-bottom:4px">本月已完成 12 份評估</div>\r
        <div style="font-size:11px;color:var(--gray-500);margin-bottom:12px">護理評估・巴氏量表</div>\r
        <div class="prog-row"><div class="prog-label">初評</div><div class="prog-bar-wrap"><div class="prog-bar green" style="width:100%"></div></div><div class="prog-count">5/5</div></div>\r
        <div class="prog-row"><div class="prog-label">複評</div><div class="prog-bar-wrap"><div class="prog-bar amber" style="width:70%"></div></div><div class="prog-count">7/10</div></div>\r
      </div>\r
    </div>\r
  </div>\`;\r
}\r
\r
function renderDoc() {\r
  return \`\r
  <div class="stats-row">\r
    <div class="stat-card s-red"><div class="stat-label">待判斷個案</div><div class="stat-value">1</div><div class="stat-sub">PAC 收案判斷</div></div>\r
    <div class="stat-card s-amber"><div class="stat-label">醫囑待確認</div><div class="stat-value">1</div><div class="stat-sub">已確認 PAC</div></div>\r
    <div class="stat-card s-blue"><div class="stat-label">評估待填</div><div class="stat-value">2</div><div class="stat-sub">醫師評估量表</div></div>\r
    <div class="stat-card s-green"><div class="stat-label">本月已完成</div><div class="stat-value">8</div><div class="stat-sub">評估填寫</div></div>\r
  </div>\r
  <div class="dash-grid">\r
    <div class="widget span-2">\r
      <div class="widget-header"><div class="widget-title">📌 今日待辦</div></div>\r
      <div class="todo-list">\r
        <div class="todo-item urgent" onclick="alert('跳轉至 → 個案管理・PAC 收案判斷・李○○')">\r
          <div class="todo-icon ni-red">👤</div>\r
          <div class="todo-body"><div class="todo-title">【待判斷】PAC 收案判斷</div><div class="todo-meta">李○○・CVA・上游：臺大醫院・個管師 林美惠 委託</div></div>\r
          <span class="badge badge-red">待我判斷</span>\r
        </div>\r
        <div class="todo-item" onclick="alert('跳轉至 → 個案管理・劉家豪・醫囑填寫')">\r
          <div class="todo-icon ni-amber">📋</div>\r
          <div class="todo-body"><div class="todo-title">醫囑待確認：劉家豪</div><div class="todo-meta">CVA・日照・已確認 PAC，請提供復健治療方向醫囑</div></div>\r
          <span class="badge badge-amber">待填醫囑</span>\r
        </div>\r
        <div class="todo-item" onclick="alert('跳轉至 → 評估量表・陳建國・醫師評估')">\r
          <div class="todo-icon ni-blue">📊</div>\r
          <div class="todo-body"><div class="todo-title">評估待填：陳建國</div><div class="todo-meta">醫師評估・複評 1・應填日期 2026/06/25</div></div>\r
          <span class="badge badge-amber">待填</span>\r
        </div>\r
        <div class="todo-item" onclick="alert('跳轉至 → 評估量表・王淑芬・醫師評估')">\r
          <div class="todo-icon ni-blue">📊</div>\r
          <div class="todo-body"><div class="todo-title">評估待填：王淑芬</div><div class="todo-meta">醫師評估・複評 2・應填日期 2026/06/27</div></div>\r
          <span class="badge badge-amber">待填</span>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="widget">\r
      <div class="widget-header"><div class="widget-title">📋 本月評估填寫</div></div>\r
      <div class="widget-body">\r
        <div style="font-size:22px;font-weight:700;color:var(--blue);margin-bottom:4px">8 <span style="font-size:13px;font-weight:400;color:var(--gray-500)">/ 預計 10 份</span></div>\r
        <div class="prog-row" style="padding:8px 0"><div class="prog-label">已完成</div><div class="prog-bar-wrap"><div class="prog-bar" style="width:80%"></div></div><div class="prog-count">8/10</div></div>\r
      </div>\r
    </div>\r
    <div class="widget">\r
      <div class="widget-header"><div class="widget-title">📅 近期居家 PAC 交接</div></div>\r
      <div class="mini-case-list">\r
        <div class="mini-case"><div class="mini-case-name">劉家豪</div><div class="mini-case-meta">首次訪視 2026/06/18・已交接 PAC 團隊</div><span class="badge badge-green">完成</span></div>\r
        <div class="mini-case"><div class="mini-case-name">王建民</div><div class="mini-case-meta">首次訪視 2026/07/02・預計安排中</div><span class="badge badge-amber">待安排</span></div>\r
      </div>\r
    </div>\r
  </div>\`;\r
}\r
\r
function renderPharNut(role) {\r
  const isPha = role === 'pha';\r
  const evalLabel = isPha ? '藥師評估' : '營養師評估';\r
  const items = isPha\r
    ? [{n:'陳建國',m:'複評1・應填 06/25',b:'badge-amber',l:'待填'},{n:'王淑芬',m:'複評2・逾期',b:'badge-red',l:'逾期'},{n:'劉家豪',m:'初評・應填 06/26',b:'badge-amber',l:'待填'}]\r
    : [{n:'陳建國',m:'複評1・應填 06/25',b:'badge-amber',l:'待填'}];\r
  return \`\r
  <div class="stats-row">\r
    <div class="stat-card s-amber"><div class="stat-label">本週評估待填</div><div class="stat-value">\${items.length}</div><div class="stat-sub">\${evalLabel}</div></div>\r
    <div class="stat-card s-green"><div class="stat-label">本月已完成</div><div class="stat-value">\${isPha?10:6}</div><div class="stat-sub">份評估</div></div>\r
  </div>\r
  <div class="dash-grid">\r
    <div class="widget span-2">\r
      <div class="widget-header"><div class="widget-title">📊 評估待填清單</div><span class="widget-action" onclick="alert('跳轉至 → 評估量表模組')">前往填寫</span></div>\r
      <div class="mini-case-list">\r
        \${items.map(e=>\`<div class="mini-case" onclick="alert('跳轉至 → 評估量表・\${e.n}')"><div class="mini-case-name">\${e.n}</div><div class="mini-case-meta">\${evalLabel}・\${e.m}</div><span class="badge \${e.b}">\${e.l}</span></div>\`).join('')}\r
      </div>\r
    </div>\r
    <div class="widget">\r
      <div class="widget-header"><div class="widget-title">✓ 本月填寫紀錄</div></div>\r
      <div class="widget-body">\r
        <div style="font-size:22px;font-weight:700;color:var(--green);margin-bottom:6px">\${isPha?10:6} <span style="font-size:13px;font-weight:400;color:var(--gray-500)">份已完成</span></div>\r
        <div style="font-size:11px;color:var(--gray-500)">初評 \${isPha?3:2}・複評 \${isPha?6:4}・結案 \${isPha?1:0}</div>\r
      </div>\r
    </div>\r
    <div class="widget">\r
      <div class="widget-header"><div class="widget-title">📋 最近填寫</div></div>\r
      <div class="mini-case-list">\r
        <div class="mini-case"><div class="mini-case-name">林翠娟</div><div class="mini-case-meta">\${evalLabel}・複評3・2026/06/20</div><span class="badge badge-green">✓</span></div>\r
        <div class="mini-case"><div class="mini-case-name">張明輝</div><div class="mini-case-meta">\${evalLabel}・複評3・2026/06/18</div><span class="badge badge-green">✓</span></div>\r
      </div>\r
    </div>\r
  </div>\`;\r
}\r
\r
function renderAdm() {\r
  return \`\r
  <div class="stats-row">\r
    <div class="stat-card s-red"><div class="stat-label">今日待建檔</div><div class="stat-value">2</div><div class="stat-sub">入院個案</div></div>\r
    <div class="stat-card s-amber"><div class="stat-label">待批價</div><div class="stat-value">3</div><div class="stat-sub">居家個案</div></div>\r
    <div class="stat-card s-purple"><div class="stat-label">月初獎金結算</div><div class="stat-value">3</div><div class="stat-sub">件待處理</div></div>\r
    <div class="stat-card s-green"><div class="stat-label">本月已批價</div><div class="stat-value">18</div><div class="stat-sub">件完成</div></div>\r
  </div>\r
  <div class="dash-grid">\r
    <!-- 今日待建檔 -->\r
    <div class="widget">\r
      <div class="widget-header"><div class="widget-title">🏥 今日入院待建檔</div><span class="badge badge-red">2 件</span></div>\r
      <div class="todo-list">\r
        <div class="todo-item urgent" onclick="alert('提醒：需登打至杏翔系統')">\r
          <div class="todo-icon ni-red">🏥</div>\r
          <div class="todo-body"><div class="todo-title">陳志明</div><div class="todo-meta">CVA・預計 10:00 入院・A301 床・個管師：林美惠</div></div>\r
          <span class="badge badge-red">待建檔</span>\r
        </div>\r
        <div class="todo-item urgent" onclick="alert('提醒：需登打至杏翔系統')">\r
          <div class="todo-icon ni-red">🏥</div>\r
          <div class="todo-body"><div class="todo-title">黃○○</div><div class="todo-meta">Hip Fx・預計 14:00 入院・C203 床・個管師：林美惠</div></div>\r
          <span class="badge badge-red">待建檔</span>\r
        </div>\r
      </div>\r
    </div>\r
    <!-- 待批價 -->\r
    <div class="widget">\r
      <div class="widget-header"><div class="widget-title">💰 居家批價待處理</div><span class="badge badge-amber">3 件</span></div>\r
      <div class="billing-list">\r
        <div class="billing-item">\r
          <div><div class="billing-name">劉家豪</div><div class="billing-meta">06/23 執行・個管師已審核 ✓</div></div>\r
          <div style="text-align:right"><div class="billing-amount">NT$ 600</div><button class="btn btn-primary btn-xs mt-12" onclick="alert('提醒：至杏翔系統批價')">批價</button></div>\r
        </div>\r
        <div class="billing-item">\r
          <div><div class="billing-name">黃建國</div><div class="billing-meta">06/22 執行・個管師已審核 ✓</div></div>\r
          <div style="text-align:right"><div class="billing-amount">NT$ 600</div><button class="btn btn-primary btn-xs mt-12" onclick="alert('提醒：至杏翔系統批價')">批價</button></div>\r
        </div>\r
        <div class="billing-item">\r
          <div><div class="billing-name">陳淑真</div><div class="billing-meta">06/21 執行・個管師已審核 ✓</div></div>\r
          <div style="text-align:right"><div class="billing-amount">NT$ 600</div><button class="btn btn-primary btn-xs mt-12" onclick="alert('提醒：至杏翔系統批價')">批價</button></div>\r
        </div>\r
      </div>\r
    </div>\r
    <!-- 月初獎金結算 -->\r
    <div class="widget span-2">\r
      <div class="widget-header"><div class="widget-title">💵 月初獎金結算提醒</div><span class="badge badge-purple">3 件待結算</span></div>\r
      <div class="info-note" style="background:var(--purple-light);color:var(--purple);font-size:12px;padding:10px 16px;border-bottom:1px solid #DDD6FE">\r
        5 月已結案個案共 3 件，請至杏翔系統完成費用結算（每月月初處理上月資料）\r
      </div>\r
      <div class="mini-case-list">\r
        <div class="mini-case"><div class="mini-case-name">陳淑真</div><div class="mini-case-meta">居家 PAC・12週結案・5月30日・執行 72次</div><button class="btn btn-ghost btn-xs" onclick="alert('提醒：至杏翔系統結算')">結算</button></div>\r
        <div class="mini-case"><div class="mini-case-name">李大成</div><div class="mini-case-meta">居家 PAC・4週結案・5月18日・執行 24次</div><button class="btn btn-ghost btn-xs" onclick="alert('提醒：至杏翔系統結算')">結算</button></div>\r
        <div class="mini-case"><div class="mini-case-name">鄭美玲</div><div class="mini-case-meta">居家 PAC・6週結案・5月25日・執行 36次</div><button class="btn btn-ghost btn-xs" onclick="alert('提醒：至杏翔系統結算')">結算</button></div>\r
      </div>\r
    </div>\r
  </div>\`;\r
}\r
\r
// ── 通知面板 ──\r
let notifOpen = false;\r
let currentRole = 'mgr';\r
\r
function toggleNotif() {\r
  notifOpen = !notifOpen;\r
  document.getElementById('notif-panel').classList.toggle('open', notifOpen);\r
  document.getElementById('content').classList.toggle('shifted', notifOpen);\r
  if (notifOpen) renderNotifs(currentRole);\r
}\r
\r
function renderNotifs(role) {\r
  const items = NOTIFS[role] || [];\r
  const unread = items.filter(n=>n.unread).length;\r
  document.getElementById('notif-badge').textContent = unread;\r
  document.getElementById('notif-badge').style.display = unread > 0 ? 'flex' : 'none';\r
  document.getElementById('notif-unread-count').textContent = unread > 0 ? \`\${unread} 則未讀\` : '全部已讀';\r
\r
  const listEl = document.getElementById('notif-list');\r
  if (!items.length) { listEl.innerHTML = '<div style="padding:30px;text-align:center;color:var(--gray-400);font-size:13px">目前沒有通知</div>'; return; }\r
\r
  const urgent = items.filter(n=>n.type==='urgent');\r
  const unreadItems = items.filter(n=>n.type==='unread');\r
  const read = items.filter(n=>n.type==='');\r
\r
  let html = '';\r
  if (urgent.length) {\r
    html += \`<div class="notif-section-label">🚨 緊急</div>\`;\r
    html += urgent.map(n=>\`<div class="notif-item urgent"><div class="notif-icon \${n.ic}">\${n.icon}</div><div class="notif-body"><div class="notif-title">\${n.title}</div><div class="notif-desc">\${n.desc}</div><div class="notif-time">\${n.time}</div></div></div>\`).join('');\r
  }\r
  if (unreadItems.length) {\r
    html += \`<div class="notif-section-label">🔵 未讀</div>\`;\r
    html += unreadItems.map(n=>\`<div class="notif-item unread"><div class="notif-icon \${n.ic}">\${n.icon}</div><div class="notif-body"><div class="notif-title">\${n.title}</div><div class="notif-desc">\${n.desc}</div><div class="notif-time">\${n.time}</div></div></div>\`).join('');\r
  }\r
  if (read.length) {\r
    html += \`<div class="notif-section-label">已讀</div>\`;\r
    html += read.map(n=>\`<div class="notif-item"><div class="notif-icon \${n.ic}">\${n.icon}</div><div class="notif-body"><div class="notif-title">\${n.title}</div><div class="notif-desc">\${n.desc}</div><div class="notif-time">\${n.time}</div></div></div>\`).join('');\r
  }\r
  listEl.innerHTML = html;\r
}\r
\r
function markAllRead() {\r
  const items = NOTIFS[currentRole] || [];\r
  items.forEach(n=>{ n.unread=false; n.type=''; });\r
  renderNotifs(currentRole);\r
}\r
\r
// ── 角色切換 ──\r
function switchRole(role) {\r
  currentRole = role;\r
  const cfg = ROLES[role];\r
  document.getElementById('user-av').textContent = cfg.ch;\r
  document.getElementById('user-av').className = 'user-avatar ' + cfg.av;\r
  document.getElementById('user-name').textContent = cfg.name;\r
  document.getElementById('user-role-label').textContent = cfg.label;\r
\r
  const unread = (NOTIFS[role]||[]).filter(n=>n.unread).length;\r
  document.getElementById('notif-badge').textContent = unread;\r
  document.getElementById('notif-badge').style.display = unread > 0 ? 'flex' : 'none';\r
\r
  renderDashboard(role);\r
  if (notifOpen) renderNotifs(role);\r
}\r
\r
// Init\r
renderDashboard('mgr');\r
renderNotifs('mgr');\r
<\/script>\r
</body>\r
</html>`,dg=`<!DOCTYPE html>\r
<html lang="zh-TW">\r
<head>\r
<meta charset="UTF-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1.0">\r
<title>PAC 個案管理</title>\r
<style>\r
*{box-sizing:border-box;margin:0;padding:0}\r
:root{\r
  --blue:#2563EB;--blue-light:#EFF6FF;--blue-mid:#BFDBFE;--blue-dark:#1E40AF;\r
  --gray-50:#F8FAFC;--gray-100:#F1F5F9;--gray-200:#E2E8F0;--gray-300:#CBD5E1;\r
  --gray-400:#94A3B8;--gray-500:#64748B;--gray-600:#475569;--gray-700:#334155;--gray-900:#0F172A;\r
  --green:#16A34A;--green-light:#DCFCE7;--green-mid:#BBF7D0;\r
  --amber:#D97706;--amber-light:#FEF3C7;\r
  --red:#DC2626;--red-light:#FEE2E2;\r
  --purple:#7C3AED;--purple-light:#EDE9FE;\r
  --teal:#0D9488;--teal-light:#CCFBF1;\r
  --white:#FFFFFF;\r
}\r
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans TC',sans-serif;background:var(--gray-50);color:var(--gray-900);height:100vh;display:flex;overflow:hidden;font-size:14px}\r
\r
/* ── Sidebar ── */\r
.sidebar{width:192px;min-width:192px;background:var(--white);border-right:1px solid var(--gray-200);display:flex;flex-direction:column}\r
.sidebar-logo{padding:16px 16px 13px;border-bottom:1px solid var(--gray-200)}\r
.logo-text{font-size:14px;font-weight:700;color:var(--blue)}\r
.logo-sub{font-size:11px;color:var(--gray-400);margin-top:2px}\r
.sidebar-nav{padding:6px 0;flex:1}\r
.nav-item{display:flex;align-items:center;gap:8px;padding:9px 14px;font-size:13px;color:var(--gray-500);border-left:3px solid transparent}\r
.nav-item.active{background:var(--blue-light);color:var(--blue);font-weight:600;border-left-color:var(--blue);cursor:pointer}\r
.nav-item.disabled{opacity:.38;cursor:not-allowed}\r
.sidebar-user{margin-top: auto;padding:11px 14px;border-top:1px solid var(--gray-200)}\r
.user-row{display:flex;align-items:center;gap:8px;margin-bottom:8px}\r
.user-avatar{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0}\r
.av-mgr{background:var(--amber-light);color:var(--amber)}\r
.av-doc{background:#FEF3C7;color:#92400E}\r
.av-nur{background:var(--teal-light);color:var(--teal)}\r
.av-adm{background:var(--gray-100);color:var(--gray-600)}\r
.user-name{font-size:12px;font-weight:600;color:var(--gray-700)}\r
.user-role-label{font-size:11px;color:var(--gray-400)}\r
.role-switcher{position:relative}\r
.role-select{width:100%;padding:5px 24px 5px 8px;border:1px solid var(--gray-200);border-radius:6px;font-size:11px;font-weight:600;color:var(--gray-600);background:var(--white);cursor:pointer;appearance:none;outline:none}\r
.role-select:focus{border-color:var(--blue)}\r
.role-arrow{position:absolute;right:7px;top:50%;transform:translateY(-50%);font-size:9px;color:var(--gray-400);pointer-events:none}\r
\r
/* ── Main ── */\r
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}\r
.topbar{background:var(--white);border-bottom:1px solid var(--gray-200);padding:0 20px;height:48px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.breadcrumb{font-size:12px;color:var(--gray-500)}\r
.content{flex:1;overflow-y:auto;padding:20px}\r
\r
/* ── Buttons ── */\r
.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .15s;white-space:nowrap}\r
.btn-primary{background:var(--blue);color:var(--white)}.btn-primary:hover{background:var(--blue-dark)}\r
.btn-secondary{background:var(--white);color:var(--gray-700);border:1px solid var(--gray-300)}.btn-secondary:hover{background:var(--gray-50)}\r
.btn-ghost{background:transparent;color:var(--blue);border:1px solid var(--blue-mid)}.btn-ghost:hover{background:var(--blue-light)}\r
.btn-danger{background:var(--white);color:var(--red);border:1px solid #FECACA}.btn-danger:hover{background:var(--red-light)}\r
.btn-amber{background:var(--white);color:var(--amber);border:1px solid #FDE68A}.btn-amber:hover{background:var(--amber-light)}\r
.btn-green{background:var(--white);color:var(--green);border:1px solid var(--green-mid)}.btn-green:hover{background:var(--green-light)}\r
.btn-purple{background:var(--white);color:var(--purple);border:1px solid #DDD6FE}.btn-purple:hover{background:var(--purple-light)}\r
.btn-sm{padding:5px 10px;font-size:12px}.btn-xs{padding:3px 8px;font-size:11px}\r
\r
/* ── Badges ── */\r
.badge{display:inline-flex;align-items:center;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:600}\r
.badge-blue{background:var(--blue-light);color:var(--blue)}\r
.badge-green{background:var(--green-light);color:var(--green)}\r
.badge-amber{background:var(--amber-light);color:var(--amber)}\r
.badge-gray{background:var(--gray-100);color:var(--gray-500)}\r
.badge-red{background:var(--red-light);color:var(--red)}\r
.badge-purple{background:var(--purple-light);color:var(--purple)}\r
.badge-teal{background:var(--teal-light);color:var(--teal)}\r
\r
/* ── Stats strip ── */\r
.stats-row{display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap}\r
.stat-card{background:var(--white);border:1px solid var(--gray-200);border-radius:8px;padding:12px 16px;flex:1;min-width:100px;cursor:pointer;transition:all .15s}\r
.stat-card:hover{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}\r
.stat-card.urgent{border-color:#FECACA;background:var(--red-light)}\r
.stat-card.urgent:hover{border-color:var(--red)}\r
.stat-label{font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px}\r
.stat-value{font-size:20px;font-weight:700;color:var(--gray-900)}\r
.stat-sub{font-size:10px;color:var(--gray-400);margin-top:1px}\r
.stat-card.urgent .stat-value{color:var(--red)}\r
.stat-card.urgent .stat-label{color:var(--red)}\r
\r
/* ── Search bar ── */\r
.search-bar{display:flex;gap:6px;margin-bottom:14px;align-items:center;flex-wrap:wrap}\r
.search-wrap{position:relative;flex:1;max-width:260px}\r
.search-wrap input{width:100%;padding:6px 10px 6px 30px;border:1px solid var(--gray-300);border-radius:6px;font-size:12px;outline:none}\r
.search-wrap input:focus{border-color:var(--blue)}\r
.search-icon{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:var(--gray-400);font-size:12px}\r
select.filter-sel{padding:6px 10px;border:1px solid var(--gray-300);border-radius:6px;font-size:12px;color:var(--gray-700);background:var(--white);cursor:pointer;outline:none}\r
\r
/* ── Tabs ── */\r
.tabs{display:flex;border-bottom:2px solid var(--gray-200);margin-bottom:16px}\r
.tab{padding:8px 16px;font-size:13px;font-weight:500;color:var(--gray-500);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;transition:all .15s}\r
.tab.active{color:var(--blue);border-bottom-color:var(--blue);font-weight:600}\r
\r
/* ── Case grid ── */\r
.case-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(288px,1fr));gap:12px}\r
.case-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:15px;cursor:pointer;transition:all .15s}\r
.case-card:hover{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}\r
.case-card-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px}\r
.case-name{font-size:15px;font-weight:700}\r
.case-id{font-size:11px;color:var(--gray-400);margin-top:2px}\r
.case-card-body{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:10px}\r
.case-field label{font-size:10px;color:var(--gray-400);display:block;margin-bottom:1px;text-transform:uppercase}\r
.case-field span{font-size:12px;color:var(--gray-700);font-weight:500}\r
.case-card-footer{display:flex;align-items:center;justify-content:space-between;padding-top:9px;border-top:1px solid var(--gray-100)}\r
.case-manager{display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)}\r
.mini-av{width:16px;height:16px;border-radius:50%;background:var(--blue-mid);color:var(--blue-dark);font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center}\r
.countdown-badge{font-size:11px;font-weight:700;color:var(--red);background:var(--red-light);padding:2px 7px;border-radius:4px}\r
.mode-stripe{height:3px;border-radius:999px;margin-bottom:12px}\r
.ms-hosp{background:var(--blue)}\r
.ms-day{background:var(--amber)}\r
.ms-home{background:var(--green)}\r
.ms-general{background:var(--gray-300)}\r
\r
/* ── Admin highlight ── */\r
.admin-key-field{background:var(--amber-light);border:1px solid #FDE68A;border-radius:6px;padding:8px 12px}\r
.admin-key-field label{font-size:10px;font-weight:700;color:var(--amber);text-transform:uppercase;letter-spacing:.04em;display:block;margin-bottom:3px}\r
.admin-key-field span{font-size:15px;font-weight:700;color:var(--gray-900);letter-spacing:.05em}\r
\r
/* ── Detail page ── */\r
.back-link{display:inline-flex;align-items:center;gap:4px;font-size:12px;color:var(--gray-500);cursor:pointer;margin-bottom:12px}\r
.back-link:hover{color:var(--blue)}\r
.detail-header{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:16px 20px;margin-bottom:12px}\r
.detail-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;flex-wrap:wrap;gap:10px}\r
.patient-name{font-size:20px;font-weight:700;display:flex;align-items:center;gap:8px;flex-wrap:wrap}\r
.detail-meta{display:flex;gap:14px;flex-wrap:wrap}\r
.meta-item{font-size:12px;color:var(--gray-500)}\r
.meta-item strong{color:var(--gray-700);font-weight:600}\r
.detail-actions{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}\r
\r
/* ── Timeline ── */\r
.timeline-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;margin-bottom:12px;overflow:hidden}\r
.tc-header{padding:11px 18px;border-bottom:1px solid var(--gray-100);background:var(--gray-50);display:flex;align-items:center;justify-content:space-between}\r
.tc-title{font-size:13px;font-weight:600;color:var(--gray-700)}\r
.timeline-body{padding:18px 20px;overflow-x:auto}\r
.timeline-track{display:flex;align-items:flex-start;min-width:500px}\r
.t-step{display:flex;flex-direction:column;align-items:center;flex:1;position:relative}\r
.t-step:not(:last-child)::after{content:'';position:absolute;top:13px;left:50%;width:100%;height:2px;background:var(--gray-200);z-index:0}\r
.t-step.done:not(:last-child)::after{background:var(--blue)}\r
.t-dot{width:26px;height:26px;border-radius:50%;z-index:1;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;border:2px solid var(--gray-200);background:var(--white);color:var(--gray-400)}\r
.t-step.done .t-dot{background:var(--blue);border-color:var(--blue);color:var(--white)}\r
.t-step.active .t-dot{background:var(--white);border-color:var(--blue);color:var(--blue);box-shadow:0 0 0 4px var(--blue-light)}\r
.t-label{margin-top:7px;font-size:10px;text-align:center;color:var(--gray-400);line-height:1.4;max-width:64px}\r
.t-step.done .t-label{color:var(--blue-dark);font-weight:500}\r
.t-step.active .t-label{color:var(--blue);font-weight:700}\r
\r
/* ── Section card ── */\r
.section-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;margin-bottom:12px;overflow:hidden}\r
.sc-header{padding:11px 17px;border-bottom:1px solid var(--gray-100);display:flex;align-items:center;justify-content:space-between;background:var(--gray-50)}\r
.sc-title{font-size:13px;font-weight:600;color:var(--gray-700)}\r
.sc-body{padding:16px}\r
.info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}\r
.info-grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}\r
.info-item label{font-size:10px;color:var(--gray-400);display:block;margin-bottom:3px;text-transform:uppercase;letter-spacing:.04em}\r
.info-item span{font-size:13px;color:var(--gray-800);font-weight:500}\r
.divider{height:1px;background:var(--gray-100);margin:12px 0}\r
\r
/* ── Contact log ── */\r
.contact-log{display:flex;flex-direction:column;gap:9px}\r
.contact-entry{display:flex;gap:11px;padding:10px 12px;background:var(--gray-50);border-radius:7px;border-left:3px solid var(--gray-300)}\r
.contact-entry.done{border-left-color:var(--green)}\r
.contact-entry.pending{border-left-color:var(--amber)}\r
.contact-label{font-size:12px;font-weight:600;color:var(--gray-700);margin-bottom:2px}\r
.contact-meta{font-size:11px;color:var(--gray-400)}\r
.contact-note{font-size:12px;color:var(--gray-600);margin-top:4px}\r
\r
/* ── Forms list ── */\r
.forms-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:10px}\r
.form-item{display:flex;align-items:center;justify-content:space-between;padding:11px 14px;border:1px solid var(--gray-200);border-radius:8px;background:var(--white);transition:all .15s;cursor:pointer}\r
.form-item:hover{border-color:var(--blue);background:var(--blue-light)}\r
.form-item-left{display:flex;align-items:center;gap:9px}\r
.form-icon{font-size:16px;width:30px;text-align:center}\r
.form-name{font-size:12px;font-weight:600;color:var(--gray-800)}\r
.form-meta{font-size:10px;color:var(--gray-400);margin-top:1px}\r
.form-status{font-size:10px;font-weight:700;padding:2px 7px;border-radius:4px}\r
.fs-done{background:var(--green-light);color:var(--green)}\r
.fs-pending{background:var(--gray-100);color:var(--gray-500)}\r
.fs-required{background:var(--amber-light);color:var(--amber)}\r
\r
/* ── Form fill page ── */\r
.form-fill-header{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:16px 20px;margin-bottom:16px;display:flex;align-items:flex-start;justify-content:space-between}\r
.ff-title{font-size:16px;font-weight:700;color:var(--gray-900)}\r
.ff-meta{font-size:12px;color:var(--gray-500);margin-top:3px}\r
.ff-actions{display:flex;gap:7px}\r
.form-section{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;margin-bottom:12px;overflow:hidden}\r
.fs-header{padding:11px 17px;border-bottom:1px solid var(--gray-100);background:var(--gray-50);display:flex;align-items:center;justify-content:space-between}\r
.fs-title{font-size:13px;font-weight:600;color:var(--gray-700)}\r
.fs-body{padding:16px;display:flex;flex-direction:column;gap:12px}\r
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r
.form-row-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}\r
.form-group{display:flex;flex-direction:column;gap:5px}\r
.form-group.full{grid-column:1/-1}\r
.form-group label{font-size:11px;font-weight:600;color:var(--gray-600);text-transform:uppercase;letter-spacing:.04em}\r
.form-control{padding:7px 10px;border:1px solid var(--gray-300);border-radius:6px;font-size:13px;color:var(--gray-800);background:var(--white);outline:none;transition:border-color .15s}\r
.form-control:focus{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}\r
.form-control[readonly]{background:var(--gray-50);color:var(--gray-500);cursor:default}\r
select.form-control{cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%2394A3B8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;padding-right:24px}\r
textarea.form-control{resize:vertical;min-height:68px;line-height:1.6}\r
.required{color:var(--red)}\r
.form-footer{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between}\r
\r
/* ── Modal ── */\r
.modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);display:flex;align-items:center;justify-content:center;z-index:100;backdrop-filter:blur(2px)}\r
.modal{background:var(--white);border-radius:12px;width:560px;max-width:92vw;max-height:88vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.15)}\r
.modal-lg{width:720px}\r
.modal-sm{width:400px}\r
.modal-header{padding:16px 20px 13px;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.modal-title{font-size:15px;font-weight:700}\r
.modal-close{width:25px;height:25px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}\r
.modal-close:hover{background:var(--gray-200)}\r
.modal-body{padding:16px 20px;overflow-y:auto;flex:1}\r
.modal-footer{padding:12px 20px;border-top:1px solid var(--gray-200);display:flex;justify-content:flex-end;gap:7px;flex-shrink:0}\r
.modal-tabs{display:flex;border-bottom:2px solid var(--gray-200);margin-bottom:16px}\r
.modal-tab{padding:8px 16px;font-size:13px;font-weight:500;color:var(--gray-500);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;transition:all .15s}\r
.modal-tab.active{color:var(--blue);border-bottom-color:var(--blue);font-weight:600}\r
\r
/* ── Info note ── */\r
.info-note{font-size:12px;padding:10px 12px;border-radius:6px;margin-bottom:12px;line-height:1.6}\r
.info-note.blue{background:var(--blue-light);color:var(--blue-dark)}\r
.info-note.amber{background:var(--amber-light);color:var(--amber)}\r
.info-note.red{background:var(--red-light);color:var(--red)}\r
.info-note.green{background:var(--green-light);color:var(--green)}\r
\r
/* ── Checklist ── */\r
.checklist{display:flex;flex-direction:column;gap:7px;margin:10px 0}\r
.check-item{display:flex;align-items:center;gap:9px;padding:9px 12px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer}\r
.check-item:hover{background:var(--gray-50)}\r
.check-item input{accent-color:var(--blue);width:14px;height:14px}\r
.check-item span{font-size:13px;color:var(--gray-700)}\r
\r
/* ── Translation ── */\r
.trans-panel{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r
.trans-box{border:1px solid var(--gray-200);border-radius:7px;overflow:hidden}\r
.trans-box-header{padding:8px 12px;background:var(--gray-50);font-size:10px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid var(--gray-200)}\r
.trans-box-body{padding:12px;font-size:12px;line-height:1.75;color:var(--gray-700);min-height:160px}\r
\r
/* ── Upload zone ── */\r
.upload-zone{border:2px dashed var(--gray-300);border-radius:8px;padding:28px 20px;text-align:center;color:var(--gray-400);cursor:pointer;transition:all .15s}\r
.upload-zone:hover{border-color:var(--blue);background:var(--blue-light);color:var(--blue)}\r
\r
/* ── Export checklist ── */\r
.export-group{margin-bottom:14px}\r
.export-group-label{font-size:11px;font-weight:700;color:var(--gray-500);text-transform:uppercase;letter-spacing:.04em;margin-bottom:7px}\r
.export-items{display:flex;flex-direction:column;gap:5px}\r
.export-item{display:flex;align-items:center;gap:8px;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer}\r
.export-item:hover{background:var(--gray-50)}\r
.export-item input{accent-color:var(--blue)}\r
.export-item span{font-size:12px;color:var(--gray-700)}\r
\r
/* ── Retire options ── */\r
.retire-list{display:flex;flex-direction:column;gap:6px;margin-bottom:12px}\r
.retire-opt{display:flex;align-items:center;gap:9px;padding:9px 12px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer}\r
.retire-opt:hover{background:var(--red-light);border-color:#FECACA}\r
.retire-opt input{accent-color:var(--red)}\r
\r
/* ── PAC Judgment ── */\r
.judge-result-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}\r
.judge-option{display:flex;align-items:center;gap:8px;padding:10px 14px;border:2px solid var(--gray-200);border-radius:8px;cursor:pointer;transition:all .15s}\r
.judge-option:hover{border-color:var(--blue);background:var(--blue-light)}\r
.judge-option.selected{border-color:var(--blue);background:var(--blue-light)}\r
.judge-option input{accent-color:var(--blue)}\r
.judge-option span{font-size:13px;font-weight:500;color:var(--gray-700)}\r
\r
.hidden{display:none!important}\r
</style>\r
</head>\r
<body>\r
\r
<!-- SIDEBAR -->\r
<aside class="sidebar">\r
<!--\r
  <div class="sidebar-logo">\r
    <div class="logo-text">PAC 管理系統</div>\r
    <div class="logo-sub">急性後期照護</div>\r
  </div>\r
  <nav class="sidebar-nav">\r
    <div class="nav-item disabled">🏠 個人儀表板</div>\r
    <div class="nav-item active">📋 個案管理</div>\r
    <div class="nav-item disabled">🛏 病床管理</div>\r
    <div class="nav-item disabled">📅 班表總覽頁</div>\r
    <div class="nav-item disabled">🏡 居家排班管理</div>\r
    <div class="nav-item disabled">📊 評估量表</div>\r
    <div class="nav-item disabled">💪 復健紀錄</div>\r
    <div class="nav-item disabled">📤 指標匯出</div>\r
  </nav>\r
-->\r
  <div class="sidebar-user">\r
    <div class="user-row">\r
      <div class="user-avatar av-mgr" id="user-av">林</div>\r
      <div>\r
        <div class="user-name" id="user-name">林美惠</div>\r
        <div class="user-role-label" id="user-role-label">個案管理師</div>\r
      </div>\r
    </div>\r
    <div class="role-switcher">\r
      <select class="role-select" id="role-select" onchange="switchRole(this.value)">\r
        <option value="mgr">個管師</option>\r
        <option value="doc">醫師</option>\r
        <option value="nur">護理師</option>\r
        <option value="adm">行政</option>\r
      </select>\r
      <span class="role-arrow">▾</span>\r
    </div>\r
  </div>\r
</aside>\r
\r
<!-- MAIN -->\r
<div class="main">\r
  <div class="topbar">\r
    <div class="breadcrumb" id="bc">個案管理</div>\r
    <div style="font-size:11px;color:var(--gray-400)">2026/06/25 週四</div>\r
  </div>\r
  <div class="content" id="main-content">\r
    <!-- 由 JS 渲染 -->\r
  </div>\r
</div>\r
\r
<!-- ══════════════════════════════\r
     MODALS\r
══════════════════════════════ -->\r
\r
<!-- 新增個案 -->\r
<div id="modal-new" class="modal-overlay hidden">\r
  <div class="modal modal-lg">\r
    <div class="modal-header">\r
      <div class="modal-title">＋ 新增個案</div>\r
      <button class="modal-close" onclick="closeModal('modal-new')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="modal-tabs">\r
        <div class="modal-tab active" onclick="switchModalTab(this,'new-manual')">✏️ 手動新增</div>\r
        <div class="modal-tab" onclick="switchModalTab(this,'new-ocr')">📷 OCR 辨識</div>\r
        <div class="modal-tab" onclick="switchModalTab(this,'new-his')">🏥 杏翔匯入</div>\r
      </div>\r
      <!-- 手動 -->\r
      <div id="new-manual">\r
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">\r
          <div class="form-group"><label>姓名 <span class="required">*</span></label><input class="form-control" placeholder="e.g. 陳志明"></div>\r
          <div class="form-group"><label>身分證字號 <span class="required">*</span></label><input class="form-control" placeholder="e.g. A123456789"></div>\r
          <div class="form-group"><label>出生日期 <span class="required">*</span></label><input class="form-control" type="date" value="1950-03-15"></div>\r
          <div class="form-group"><label>性別</label><select class="form-control"><option>男</option><option>女</option></select></div>\r
          <div class="form-group"><label>照護模式 <span class="required">*</span></label><select class="form-control"><option value="">請選擇</option><option>住院</option><option>日照</option><option>居家</option><option>一般（非PAC）</option></select></div>\r
          <div class="form-group"><label>PAC 疾病別</label><select class="form-control"><option value="">請選擇</option><option>CVA（腦中風）</option><option>TKR（全膝關節置換）</option><option>Hip Fx（髖部骨折）</option><option>PAC 衰弱</option><option>一般骨折</option></select></div>\r
          <div class="form-group"><label>轉介來源</label><input class="form-control" placeholder="e.g. 臺大醫院"></div>\r
          <div class="form-group"><label>轉介日期</label><input class="form-control" type="date" value="2026-06-25"></div>\r
          <div class="form-group"><label>家屬姓名</label><input class="form-control" placeholder="主要照顧者姓名"></div>\r
          <div class="form-group"><label>家屬電話</label><input class="form-control" placeholder="0912-345-678"></div>\r
          <div class="form-group" style="grid-column:1/-1"><label>入院診斷</label><textarea class="form-control" rows="2" placeholder="英文原文診斷（可後續填寫）"></textarea></div>\r
        </div>\r
      </div>\r
      <!-- OCR -->\r
      <div id="new-ocr" class="hidden">\r
        <div class="upload-zone" onclick="alert('選擇病摘檔案（Word / PDF / JPG）')">\r
          <div style="font-size:28px;margin-bottom:8px">📄</div>\r
          <div style="font-size:13px;font-weight:600;color:var(--gray-700)">點擊或拖曳上傳病摘</div>\r
          <div style="font-size:11px;margin-top:4px">支援 Word、PDF、JPG 格式</div>\r
        </div>\r
        <div class="info-note blue" style="margin-top:12px">辨識完成後可手動修正欄位內容，確認無誤後再儲存。</div>\r
      </div>\r
      <!-- 杏翔 -->\r
      <div id="new-his" class="hidden">\r
        <div class="info-note blue">輸入病人病歷號，從杏翔系統帶入基本資料。</div>\r
        <div style="display:flex;gap:8px;margin-bottom:14px">\r
          <input class="form-control" style="flex:1" placeholder="輸入病歷號 e.g. 00073450" id="his-input">\r
          <button class="btn btn-primary" onclick="showHisResult()">查詢</button>\r
        </div>\r
        <div id="his-result" class="hidden">\r
          <div class="info-note green">✓ 查詢成功，請確認以下資料後儲存</div>\r
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">\r
            <div class="form-group"><label>姓名</label><input class="form-control" value="王建民"></div>\r
            <div class="form-group"><label>病歷號</label><input class="form-control" value="00073450" readonly></div>\r
            <div class="form-group"><label>身分證</label><input class="form-control" value="A123456789"></div>\r
            <div class="form-group"><label>出生日期</label><input class="form-control" value="1952/08/20"></div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-new')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-new');alert('臨時病歷已建立')">儲存個案</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 病摘翻譯 -->\r
<div id="modal-translate" class="modal-overlay hidden">\r
  <div class="modal modal-lg">\r
    <div class="modal-header">\r
      <div class="modal-title">📄 病摘輔助翻譯</div>\r
      <button class="modal-close" onclick="closeModal('modal-translate')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note blue">系統輔助翻譯僅供參考，請結合臨床判斷。翻譯結果不會自動留存。</div>\r
      <div class="trans-panel">\r
        <div class="trans-box">\r
          <div class="trans-box-header">英文原文</div>\r
          <div class="trans-box-body">Left MCA infarction with right hemiparesis. Patient is a 72-year-old male who presented with sudden onset of right-sided weakness and aphasia. CT scan confirmed left middle cerebral artery territory infarction. Patient underwent thrombolysis and is now stable for PAC rehabilitation program.</div>\r
        </div>\r
        <div class="trans-box">\r
          <div class="trans-box-header">中文翻譯</div>\r
          <div class="trans-box-body">左側大腦中動脈梗塞合併右側偏癱。患者為72歲男性，出現突發性右側肢體無力及失語症。電腦斷層掃描確認左側大腦中動脈區域梗塞。患者已接受溶栓治療，目前狀況穩定，適合接受急性後期照護復健計畫。</div>\r
        </div>\r
      </div>\r
      <div style="margin-top:12px">\r
        <div style="font-size:12px;font-weight:600;color:var(--gray-600);margin-bottom:8px">系統收案條件比對</div>\r
        <div class="checklist">\r
          <div class="check-item"><input type="checkbox" checked><span>✓ 疾病別符合：CVA（腦中風）</span></div>\r
          <div class="check-item"><input type="checkbox" checked><span>✓ 發病後 60 天內</span></div>\r
          <div class="check-item"><input type="checkbox"><span>待確認：功能障礙程度（需進一步評估）</span></div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-translate')">關閉</button>\r
      <button class="btn btn-ghost" onclick="alert('翻譯對照已下載')">⬇ 下載對照</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 轉交醫師/專護判斷 -->\r
<div id="modal-judge" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title">🩺 轉交判斷</div>\r
      <button class="modal-close" onclick="closeModal('modal-judge')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note blue">選擇要委託判斷的人員，系統將發送通知。</div>\r
      <div style="display:flex;flex-direction:column;gap:10px">\r
        <div class="form-group"><label>委託對象</label><select class="form-control"><option>張宗達醫師（復健科）</option><option>陳玉玲護理師</option></select></div>\r
        <div class="form-group"><label>判斷事項說明</label><textarea class="form-control" rows="3" placeholder="說明需要判斷的重點，例如：開刀位置是否符合收案條件..."></textarea></div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-judge')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-judge');alert('已送出委託，對方將收到通知')">送出委託</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 退案 -->\r
<div id="modal-retire" class="modal-overlay hidden">\r
  <div class="modal modal-sm">\r
    <div class="modal-header">\r
      <div class="modal-title">退案原因</div>\r
      <button class="modal-close" onclick="closeModal('modal-retire')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="retire-list">\r
        <div class="retire-opt"><input type="radio" name="retire"><span style="font-size:13px">不符合 PAC 收案條件</span></div>\r
        <div class="retire-opt"><input type="radio" name="retire"><span style="font-size:13px">個案/家屬拒絕</span></div>\r
        <div class="retire-opt"><input type="radio" name="retire"><span style="font-size:13px">無可用床位</span></div>\r
        <div class="retire-opt"><input type="radio" name="retire"><span style="font-size:13px">個案病況不適合</span></div>\r
        <div class="retire-opt"><input type="radio" name="retire"><span style="font-size:13px">其他</span></div>\r
      </div>\r
      <textarea class="form-control" rows="2" placeholder="補充說明（選填）"></textarea>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-retire')">取消</button>\r
      <button class="btn btn-danger" onclick="closeModal('modal-retire');alert('個案已退案')">確認退案</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 轉正式病歷確認 checklist -->\r
<div id="modal-convert" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title">📋 轉換為正式病歷</div>\r
      <button class="modal-close" onclick="closeModal('modal-convert')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note amber">轉換後系統將自動建立對應的表單，並通知行政同步至杏翔系統建立正式病歷。</div>\r
      <div style="font-size:12px;font-weight:600;color:var(--gray-600);margin-bottom:8px">請確認以下項目已完成：</div>\r
      <div class="checklist">\r
        <div class="check-item"><input type="checkbox"><span>已確認個案符合 PAC 收案條件</span></div>\r
        <div class="check-item"><input type="checkbox"><span>已完成第一次家屬聯繫</span></div>\r
        <div class="check-item"><input type="checkbox"><span>已完成第二次（W4W5）家屬確認</span></div>\r
        <div class="check-item"><input type="checkbox"><span>入院/開案日期已確認</span></div>\r
        <div class="check-item"><input type="checkbox"><span>床位已確認（住院個案）</span></div>\r
        <div class="check-item"><input type="checkbox"><span>醫師已完成會診並給予醫囑</span></div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-convert')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-convert');alert('已轉換為正式病歷，相關表單已自動建立，行政通知已發出')">確認轉換</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 不成功結案 -->\r
<div id="modal-fail-close" class="modal-overlay hidden">\r
  <div class="modal modal-sm">\r
    <div class="modal-header">\r
      <div class="modal-title">不成功結案原因</div>\r
      <button class="modal-close" onclick="closeModal('modal-fail-close')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="retire-list">\r
        <div class="retire-opt"><input type="radio" name="failclose"><span style="font-size:13px">個案病況改變，需回急性醫院</span></div>\r
        <div class="retire-opt"><input type="radio" name="failclose"><span style="font-size:13px">個案/家屬選擇不繼續</span></div>\r
        <div class="retire-opt"><input type="radio" name="failclose"><span style="font-size:13px">健保不通過</span></div>\r
        <div class="retire-opt"><input type="radio" name="failclose"><span style="font-size:13px">個案死亡</span></div>\r
        <div class="retire-opt"><input type="radio" name="failclose"><span style="font-size:13px">其他</span></div>\r
      </div>\r
      <textarea class="form-control" rows="2" placeholder="補充說明（選填）"></textarea>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-fail-close')">取消</button>\r
      <button class="btn btn-danger" onclick="closeModal('modal-fail-close');alert('已記錄不成功結案')">確認結案</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 成功結案 -->\r
<div id="modal-success-close" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title">✓ 成功結案確認</div>\r
      <button class="modal-close" onclick="closeModal('modal-success-close')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note green">結案後系統將自動建立 PAC 個案滿意度調查表、出院追蹤記錄表。</div>\r
      <div class="checklist">\r
        <div class="check-item"><input type="checkbox"><span>結案評估已完成</span></div>\r
        <div class="check-item"><input type="checkbox"><span>出院準備資料已完成</span></div>\r
        <div class="check-item"><input type="checkbox"><span>PAC 個案滿意度調查已完成</span></div>\r
        <div class="check-item"><input type="checkbox"><span>轉介服務已安排（如需要）</span></div>\r
      </div>\r
      <div style="margin-top:12px">\r
        <div style="font-size:12px;font-weight:600;color:var(--gray-600);margin-bottom:8px">後續轉介筆記</div>\r
        <select class="form-control" style="margin-bottom:8px"><option>無需轉介</option><option>轉介居家醫療</option><option>轉介長照服務</option><option>轉介社工服務</option></select>\r
        <textarea class="form-control" rows="2" placeholder="轉介備註..."></textarea>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-success-close')">取消</button>\r
      <button class="btn btn-green" onclick="closeModal('modal-success-close');alert('個案已成功結案')">確認結案</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 匯出展延資料 -->\r
<div id="modal-export-extend" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title">📤 匯出展延資料</div>\r
      <button class="modal-close" onclick="closeModal('modal-export-extend')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="export-group">\r
        <div class="export-group-label">基本文件</div>\r
        <div class="export-items">\r
          <div class="export-item"><input type="checkbox" checked><span>封面表單</span></div>\r
          <div class="export-item"><input type="checkbox" checked><span>個案綜合評估報告書（總表）</span></div>\r
          <div class="export-item"><input type="checkbox" checked><span>專審表</span></div>\r
          <div class="export-item"><input type="checkbox" checked><span>PAC 收案會議記錄</span></div>\r
        </div>\r
      </div>\r
      <div class="export-group">\r
        <div class="export-group-label">醫療紀錄（串接杏翔）</div>\r
        <div class="export-items">\r
          <div class="export-item"><input type="checkbox" checked><span>入院病摘</span></div>\r
          <div class="export-item"><input type="checkbox"><span>護理紀錄</span></div>\r
          <div class="export-item"><input type="checkbox"><span>病程記錄</span></div>\r
          <div class="export-item"><input type="checkbox"><span>生命徵象</span></div>\r
        </div>\r
      </div>\r
      <div class="export-group">\r
        <div class="export-group-label">居家個案另附</div>\r
        <div class="export-items">\r
          <div class="export-item"><input type="checkbox"><span>PAC 居家復健治療紀錄</span></div>\r
          <div class="export-item"><input type="checkbox"><span>日照執行記錄表</span></div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-export-extend')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-export-extend');alert('展延資料已匯出（PDF）')">匯出 PDF</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 匯出結案資料 -->\r
<div id="modal-export-close" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title">📤 匯出結案資料</div>\r
      <button class="modal-close" onclick="closeModal('modal-export-close')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="export-group">\r
        <div class="export-group-label">基本文件</div>\r
        <div class="export-items">\r
          <div class="export-item"><input type="checkbox" checked><span>PAC 照護模式記錄表</span></div>\r
          <div class="export-item"><input type="checkbox" checked><span>個案綜合評估報告書（總表）</span></div>\r
          <div class="export-item"><input type="checkbox" checked><span>PAC 收案會議記錄</span></div>\r
          <div class="export-item"><input type="checkbox" checked><span>PAC 個案滿意度調查表</span></div>\r
          <div class="export-item"><input type="checkbox" checked><span>PAC 個案出院追蹤記錄表</span></div>\r
        </div>\r
      </div>\r
      <div class="export-group">\r
        <div class="export-group-label">醫療紀錄</div>\r
        <div class="export-items">\r
          <div class="export-item"><input type="checkbox" checked><span>病摘</span></div>\r
          <div class="export-item"><input type="checkbox"><span>護理紀錄 / 生命徵象（串杏翔）</span></div>\r
          <div class="export-item"><input type="checkbox"><span>居家訪視護理記錄表</span></div>\r
          <div class="export-item"><input type="checkbox"><span>居家環境評估暨危險因子檢核表</span></div>\r
          <div class="export-item"><input type="checkbox"><span>居家復健治療紀錄</span></div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-export-close')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-export-close');alert('結案資料已匯出（PDF）')">匯出 PDF</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 封存 -->\r
<div id="modal-archive" class="modal-overlay hidden">\r
  <div class="modal modal-sm">\r
    <div class="modal-header">\r
      <div class="modal-title">封存個案</div>\r
      <button class="modal-close" onclick="closeModal('modal-archive')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note amber">封存後個案資料將保留，可隨時查閱但不可編輯。</div>\r
      <div class="retire-list">\r
        <div class="retire-opt"><input type="radio" name="archive"><span style="font-size:13px">個案取消入院/報到</span></div>\r
        <div class="retire-opt"><input type="radio" name="archive"><span style="font-size:13px">重複建立個案</span></div>\r
        <div class="retire-opt"><input type="radio" name="archive"><span style="font-size:13px">資料輸入錯誤</span></div>\r
        <div class="retire-opt"><input type="radio" name="archive"><span style="font-size:13px">其他</span></div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-archive')">取消</button>\r
      <button class="btn btn-amber" onclick="closeModal('modal-archive');alert('個案已封存')">確認封存</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<script>\r
// ── 角色設定 ──\r
const ROLES = {\r
  mgr:{name:'林美惠',label:'個案管理師',av:'av-mgr',ch:'林'},\r
  doc:{name:'張宗達',label:'醫師',av:'av-doc',ch:'張'},\r
  nur:{name:'陳玉玲',label:'護理師',av:'av-nur',ch:'陳'},\r
  adm:{name:'蔡書明',label:'行政',av:'av-adm',ch:'蔡'},\r
};\r
let currentRole='mgr';\r
let currentPage='list';\r
let currentCase=null;\r
let currentForm=null;\r
\r
// ── 個案資料 ──\r
const CASES={\r
  temp:[\r
    {id:'t1',name:'李○○',mode:'住院',modeType:'hosp',disease:'CVA',source:'臺大醫院',date:'2026/06/24',status:'新轉介',mgr:'林美惠',formal:false,countdown:null,week:null},\r
    {id:'t2',name:'黃○○',mode:'居家',modeType:'home',disease:'Hip Fx',source:'彰化秀傳',date:'2026/06/22',status:'待補件',mgr:'林美惠',formal:false,countdown:null,week:null},\r
    {id:'t3',name:'吳○○',mode:'日照',modeType:'day',disease:'CVA',source:'台中榮總',date:'2026/06/20',status:'待收案判斷',mgr:'林美惠',formal:false,countdown:null,week:null},\r
    {id:'t4',name:'鄭○○',mode:'住院',modeType:'hosp',disease:'TKR',source:'門診自轉',date:'2026/06/18',status:'待排床',mgr:'林美惠',formal:false,countdown:null,week:null},\r
  ],\r
  formal:[\r
    {id:'f1',name:'陳建國',mode:'住院',modeType:'hosp',disease:'CVA',source:'臺大醫院',date:'2026/06/10',status:'展延中',mgr:'林美惠',formal:true,countdown:2,week:2},\r
    {id:'f2',name:'王淑芬',mode:'住院',modeType:'hosp',disease:'TKR',source:'彰基醫院',date:'2026/05/28',status:'展延中',mgr:'林美惠',formal:true,countdown:3,week:4},\r
    {id:'f3',name:'劉家豪',mode:'居家',modeType:'home',disease:'CVA',source:'台中榮總',date:'2026/06/05',status:'已收案在院',mgr:'林美惠',formal:true,countdown:null,week:3},\r
    {id:'f4',name:'林翠娟',mode:'住院',modeType:'hosp',disease:'Hip Fx',source:'台中榮總',date:'2026/04/15',status:'即將結案',mgr:'林美惠',formal:true,countdown:null,week:11},\r
    {id:'f5',name:'張明輝',mode:'日照',modeType:'day',disease:'CVA',source:'臺大醫院',date:'2026/05/01',status:'即將結案',mgr:'林美惠',formal:true,countdown:null,week:10},\r
    {id:'f6',name:'陳淑真',mode:'一般',modeType:'general',disease:'一般骨折',source:'門診',date:'2026/06/01',status:'已收案在院',mgr:'林美惠',formal:true,countdown:null,week:null},\r
  ]\r
};\r
\r
const STATUS_COLOR={\r
  '新轉介':'badge-blue','待補件':'badge-amber','待收案判斷':'badge-amber',\r
  '待排床':'badge-purple','已收案在院':'badge-green','展延中':'badge-teal',\r
  '即將結案':'badge-amber','已結案':'badge-gray','退案':'badge-red',\r
};\r
\r
// ── 表單清單（依照護模式）──\r
const FORMS={\r
  hosp:{\r
    common:[\r
      {icon:'📋',name:'個案綜合評估報告書（評估總表）',meta:'自動帶入評估週數與日期',status:'done'},\r
      {icon:'📄',name:'PAC 照護模式記錄表',meta:'個管師建立',status:'required'},\r
      {icon:'📝',name:'PAC 收案會議記錄',meta:'空白表單，填上個案資料',status:'pending'},\r
      {icon:'💬',name:'醫病溝通會議記錄',meta:'空白表單，填上個案資料',status:'pending'},\r
      {icon:'📃',name:'專審表',meta:'送展延需要',status:'required'},\r
      {icon:'🏥',name:'出院準備資料',meta:'住院個案適用',status:'pending'},\r
    ],\r
    post:[\r
      {icon:'😊',name:'PAC 個案滿意度調查表',meta:'結案後建立',status:'pending'},\r
      {icon:'📊',name:'PAC 個案出院追蹤記錄表',meta:'結案後建立',status:'pending'},\r
      {icon:'🏠',name:'PAC 居家訪視護理記錄表',meta:'結案後建立',status:'pending'},\r
    ]\r
  },\r
  day:{\r
    common:[\r
      {icon:'📋',name:'個案綜合評估報告書（評估總表）',meta:'自動帶入評估週數與日期',status:'done'},\r
      {icon:'📄',name:'PAC 照護模式記錄表',meta:'個管師建立',status:'required'},\r
      {icon:'📝',name:'PAC 收案會議記錄',meta:'空白表單',status:'pending'},\r
      {icon:'💬',name:'醫病溝通會議記錄',meta:'空白表單',status:'pending'},\r
      {icon:'📃',name:'專審表',meta:'送展延需要',status:'required'},\r
      {icon:'📅',name:'日照執行記錄表',meta:'人員安排串接復健排班',status:'pending'},\r
      {icon:'💰',name:'患者門診費用明細（日照）',meta:'人員安排串接復健排班',status:'pending'},\r
    ],\r
    post:[\r
      {icon:'😊',name:'PAC 個案滿意度調查表',meta:'結案後建立',status:'pending'},\r
      {icon:'📊',name:'PAC 個案出院追蹤記錄表',meta:'結案後建立',status:'pending'},\r
    ]\r
  },\r
  home:{\r
    common:[\r
      {icon:'📋',name:'個案綜合評估報告書（評估總表）',meta:'自動帶入評估週數與日期',status:'done'},\r
      {icon:'📄',name:'PAC 照護模式記錄表',meta:'個管師建立',status:'required'},\r
      {icon:'📝',name:'PAC 收案會議記錄',meta:'空白表單',status:'pending'},\r
      {icon:'💬',name:'醫病溝通會議記錄',meta:'空白表單',status:'pending'},\r
      {icon:'📃',name:'專審表',meta:'送展延需要',status:'required'},\r
      {icon:'💰',name:'患者門診費用明細（居家）',meta:'人員安排串接居家排班',status:'required'},\r
      {icon:'📋',name:'PAC 居家復健治療紀錄',meta:'人員安排串接居家排班',status:'pending'},\r
      {icon:'🏠',name:'居家環境評估暨危險因子檢核表',meta:'初次居家訪視',status:'pending'},\r
      {icon:'📅',name:'居家復健排班表',meta:'人員安排串接居家排班',status:'pending'},\r
    ],\r
    post:[\r
      {icon:'😊',name:'PAC 個案滿意度調查表',meta:'結案後建立',status:'pending'},\r
      {icon:'📊',name:'PAC 個案出院追蹤記錄表',meta:'結案後建立',status:'pending'},\r
      {icon:'🏥',name:'PAC 居家訪視護理記錄表',meta:'結案後建立',status:'pending'},\r
    ]\r
  },\r
  general:{\r
    common:[\r
      {icon:'📋',name:'復健評估記錄（一般）',meta:'非PAC標準表單',status:'pending'},\r
      {icon:'📝',name:'家屬聯繫紀錄',meta:'',status:'done'},\r
    ],\r
    post:[]\r
  }\r
};\r
\r
// ── 表單填寫內容 ──\r
const FORM_FILL_CONTENT={\r
  '個案綜合評估報告書（評估總表）':{\r
    sections:[\r
      {title:'個案基本資料（自動帶入）',fields:[\r
        {label:'個案姓名',value:'陳建國',readonly:true,type:'text'},\r
        {label:'病歷號',value:'00073450',readonly:true,type:'text'},\r
        {label:'照護模式',value:'住院',readonly:true,type:'text'},\r
        {label:'PAC 疾病別',value:'CVA（腦中風）',readonly:true,type:'text'},\r
        {label:'上游醫院',value:'臺大醫院',readonly:true,type:'text'},\r
        {label:'主治醫師',value:'張宗達 醫師',readonly:true,type:'text'},\r
        {label:'入院日期',value:'2026/06/10',readonly:true,type:'text'},\r
        {label:'預計出院日期',value:'2026/09/02',readonly:true,type:'text'},\r
        {label:'療程週期',value:'12 週',readonly:true,type:'text'},\r
      ]},\r
      {title:'評估次別總覽',table:true,rows:[\r
        {label:'初評',date:'2026/06/11',week:'第1週',pt:'Br.III',ot:'30分',st:'輕度',status:'done'},\r
        {label:'複評1',date:'2026/06/25',week:'第3週',pt:'待填',ot:'待填',st:'完成',status:'pending'},\r
        {label:'複評2',date:'2026/07/16',week:'第6週',pt:'—',ot:'—',st:'—',status:'future'},\r
        {label:'結案',date:'2026/09/01',week:'第12週',pt:'—',ot:'—',st:'—',status:'future'},\r
      ]},\r
    ]\r
  },\r
  'PAC 照護模式記錄表':{\r
    sections:[\r
      {title:'基本資料',fields:[\r
        {label:'個案姓名',value:'陳建國',readonly:true,type:'text'},\r
        {label:'病歷號',value:'00073450',readonly:true,type:'text'},\r
        {label:'照護模式',value:'住院',type:'select',options:['住院','日照','居家']},\r
        {label:'收案日期',value:'2026/06/10',type:'text'},\r
      ]},\r
      {title:'照護模式紀錄',fields:[\r
        {label:'模式說明',value:'住院 PAC，CVA 復健療程，預計 12 週',type:'textarea'},\r
        {label:'特殊注意事項',value:'右側偏癱，需輪椅輔助，家屬已告知注意事項',type:'textarea'},\r
        {label:'記錄人員',value:'林美惠',type:'text'},\r
        {label:'記錄日期',value:'2026/06/10',type:'text'},\r
      ]}\r
    ]\r
  },\r
  'PAC 收案會議記錄':{\r
    sections:[\r
      {title:'會議基本資料',fields:[\r
        {label:'個案姓名',value:'陳建國',readonly:true,type:'text'},\r
        {label:'會議日期',value:'2026/06/10',type:'text'},\r
        {label:'會議地點',value:'5樓會議室',type:'text'},\r
        {label:'主持人',value:'林美惠',type:'text'},\r
      ]},\r
      {title:'出席人員',fields:[\r
        {label:'個管師',value:'林美惠',type:'text'},\r
        {label:'醫師',value:'張宗達',type:'text'},\r
        {label:'復健治療師',value:'黃志豪（PT）、李佳穎（OT）',type:'text'},\r
        {label:'護理師',value:'陳玉玲',type:'text'},\r
      ]},\r
      {title:'會議記錄',fields:[\r
        {label:'個案狀況摘要',value:'72歲男性，CVA 發作後右側偏癱，符合 PAC 收案條件，預計住院 12 週復健療程。',type:'textarea'},\r
        {label:'治療目標',value:'改善右側肢體功能，提升 ADL 獨立性，目標 Barthel Index 由 30 分提升至 60 分以上。',type:'textarea'},\r
        {label:'其他決議',value:'',type:'textarea'},\r
      ]}\r
    ]\r
  },\r
  '出院準備資料':{\r
    sections:[\r
      {title:'出院基本資料',fields:[\r
        {label:'預計出院日期',value:'2026/09/02',type:'text'},\r
        {label:'出院去向',value:'',type:'select',options:['返家','轉長照機構','轉其他醫院','其他']},\r
        {label:'出院方式',value:'',type:'select',options:['步行','輪椅','擔架']},\r
      ]},\r
      {title:'出院後安排',fields:[\r
        {label:'後續復健計畫',value:'門診復健，每週 2 次',type:'textarea'},\r
        {label:'轉介服務',value:'長照服務評估中',type:'textarea'},\r
        {label:'衛教事項',value:'',type:'textarea'},\r
        {label:'回診安排',value:'2026/09/09 復健科門診',type:'text'},\r
      ]}\r
    ]\r
  },\r
  '居家環境評估暨危險因子檢核表':{\r
    sections:[\r
      {title:'居家環境評估',fields:[\r
        {label:'居住地址',value:'台北市大安區',type:'text'},\r
        {label:'居住型態',value:'',type:'select',options:['公寓（無電梯）','公寓（有電梯）','透天厝','社區大樓']},\r
        {label:'樓層',value:'3',type:'text'},\r
      ]},\r
      {title:'危險因子檢核',checklist:true,items:[\r
        '地板是否有防滑處理',\r
        '浴室是否有扶手',\r
        '通道是否有足夠寬度（輪椅可通行）',\r
        '床高是否適當',\r
        '照明是否充足',\r
        '是否有門檻需克服',\r
      ]},\r
      {title:'評估結論',fields:[\r
        {label:'環境危險等級',value:'',type:'select',options:['低風險','中風險','高風險']},\r
        {label:'建議改善事項',value:'',type:'textarea'},\r
        {label:'評估人員',value:'黃志豪',type:'text'},\r
        {label:'評估日期',value:'2026/06/20',type:'text'},\r
      ]}\r
    ]\r
  },\r
};\r
\r
// ── 頁面渲染 ──\r
function renderPage(page,caseId,formName){\r
  currentPage=page;\r
  const content=document.getElementById('main-content');\r
  if(page==='list') renderList(content);\r
  else if(page==='detail') renderDetail(content,caseId);\r
  else if(page==='form') renderFormFill(content,caseId,formName);\r
}\r
\r
function renderList(container){\r
  document.getElementById('bc').textContent='個案管理';\r
  const isAdm=currentRole==='adm';\r
  const isMgr=currentRole==='mgr';\r
\r
  container.innerHTML=\`\r
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">\r
      <div>\r
        <div style="font-size:18px;font-weight:700">個案管理</div>\r
        <div style="font-size:12px;color:var(--gray-500);margin-top:3px">共 10 位個案・住院 5・日照 2・居家 2・一般 1</div>\r
      </div>\r
      \${isMgr?\`<div style="display:flex;gap:7px">\r
        <button class="btn btn-secondary btn-sm" onclick="openModal('modal-archive')">封存個案</button>\r
        <button class="btn btn-primary" onclick="openModal('modal-new')">＋ 新增個案</button>\r
      </div>\`:''}\r
    </div>\r
\r
    <!-- 統計卡 -->\r
    <div class="stats-row">\r
      <div class="stat-card urgent">\r
        <div class="stat-label">⚠ 展延倒數 ≤3天</div>\r
        <div class="stat-value">2</div>\r
        <div class="stat-sub">需優先處理</div>\r
      </div>\r
      <div class="stat-card">\r
        <div class="stat-label">新轉介</div>\r
        <div class="stat-value">1</div>\r
        <div class="stat-sub">待我判斷</div>\r
      </div>\r
      <div class="stat-card">\r
        <div class="stat-label">待補件</div>\r
        <div class="stat-value">1</div>\r
        <div class="stat-sub">已通知</div>\r
      </div>\r
      <div class="stat-card">\r
        <div class="stat-label">待收案判斷</div>\r
        <div class="stat-value">1</div>\r
        <div class="stat-sub">含醫師/專護判斷</div>\r
      </div>\r
      <div class="stat-card">\r
        <div class="stat-label">待排床</div>\r
        <div class="stat-value">1</div>\r
        <div class="stat-sub">住院個案</div>\r
      </div>\r
      <div class="stat-card">\r
        <div class="stat-label">已收案在院</div>\r
        <div class="stat-value">4</div>\r
        <div class="stat-sub">PAC 進行中</div>\r
      </div>\r
      <div class="stat-card">\r
        <div class="stat-label">展延中</div>\r
        <div class="stat-value">2</div>\r
        <div class="stat-sub">療程進行中</div>\r
      </div>\r
      <div class="stat-card" style="border-color:#DDD6FE;background:var(--purple-light)">\r
        <div class="stat-label" style="color:var(--purple)">🏁 即將結案</div>\r
        <div class="stat-value" style="color:var(--purple)">2</div>\r
        <div class="stat-sub" style="color:var(--purple)">第 10-11 週・準備結案</div>\r
      </div>\r
    </div>\r
\r
    <!-- 即將結案提醒 banner -->\r
    <div style="background:var(--purple-light);border:1px solid #DDD6FE;border-radius:8px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:8px">\r
      <div style="font-size:12px;color:var(--purple)">\r
        <strong>🏁 即將結案提醒</strong>\r
        <span style="margin-left:8px">林翠娟（第 11 週・Hip Fx）、張明輝（第 10 週・CVA）・請儘快安排結案評估及出院準備</span>\r
      </div>\r
      <button class="btn btn-xs" style="background:var(--purple);color:var(--white);border:none" onclick="document.querySelectorAll('.tab')[1].click()">查看個案 →</button>\r
    </div>\r
\r
    <!-- 搜尋列 -->\r
    <div class="search-bar">\r
      <div class="search-wrap">\r
        <span class="search-icon">🔍</span>\r
        <input type="text" placeholder="搜尋姓名、病歷號…">\r
      </div>\r
      <select class="filter-sel"><option>全部照護模式</option><option>住院</option><option>日照</option><option>居家</option><option>一般</option></select>\r
      <select class="filter-sel"><option>全部狀態</option><option>新轉介</option><option>待補件</option><option>待收案判斷</option><option>已收案在院</option><option>展延中</option><option>即將結案</option></select>\r
      <select class="filter-sel"><option>全部疾病別</option><option>CVA</option><option>TKR</option><option>Hip Fx</option></select>\r
    </div>\r
\r
    <!-- Tabs -->\r
    <div class="tabs">\r
      <div class="tab active" onclick="switchTab(this,'tab-temp')">臨時病歷 <span class="badge badge-amber" style="margin-left:4px">4</span></div>\r
      <div class="tab" onclick="switchTab(this,'tab-formal')">正式病歷 <span class="badge badge-blue" style="margin-left:4px">6</span></div>\r
    </div>\r
\r
    <!-- 臨時病歷 -->\r
    <div id="tab-temp" class="case-grid">\r
      \${CASES.temp.map(c=>caseCard(c)).join('')}\r
    </div>\r
    <!-- 正式病歷 -->\r
    <div id="tab-formal" class="case-grid hidden">\r
      \${CASES.formal.map(c=>caseCard(c)).join('')}\r
    </div>\r
  \`;\r
}\r
\r
function caseCard(c){\r
  const modeClass={hosp:'ms-hosp',day:'ms-day',home:'ms-home',general:'ms-general'}[c.modeType]||'ms-general';\r
  const statusBadge=\`<span class="badge \${STATUS_COLOR[c.status]||'badge-gray'}">\${c.status}</span>\`;\r
  const isClosingSoon=c.status==='即將結案';\r
  const countdown=c.countdown?\`<span class="countdown-badge">展延 \${c.countdown} 天</span>\`:'';\r
  const weekBadge=c.week?\`<span style="font-size:10px;font-weight:700;padding:2px 7px;border-radius:4px;background:\${isClosingSoon?'var(--purple-light)':'var(--gray-100)'};color:\${isClosingSoon?'var(--purple)':'var(--gray-500)'}">第 \${c.week} 週 / 12</span>\`:'';\r
  const modeLabel={hosp:'🏥 住院 PAC',day:'☀️ 日照 PAC',home:'🏡 居家 PAC',general:'🏋️ 一般'}[c.modeType]||c.mode;\r
  const cardBorder=isClosingSoon?'border-color:#DDD6FE;':'';\r
\r
  if(currentRole==='adm'){\r
    return \`<div class="case-card" style="\${cardBorder}" onclick="renderPage('detail','\${c.id}')">\r
      <div class="mode-stripe \${modeClass}"></div>\r
      <div class="case-card-header"><div><div class="case-name">\${c.name}</div><div class="case-id">\${c.mode}・\${c.disease}</div></div>\${statusBadge}</div>\r
      <div class="admin-key-field"><label>身分證字號</label><span>A123456789</span></div>\r
      <div style="margin-top:8px;display:grid;grid-template-columns:1fr 1fr;gap:7px">\r
        <div class="case-field"><label>入院日期</label><span>\${c.date}</span></div>\r
        <div class="case-field"><label>床位</label><span>\${c.formal?'A301':'待確認'}</span></div>\r
      </div>\r
    </div>\`;\r
  }\r
\r
  return \`<div class="case-card" style="\${cardBorder}" onclick="renderPage('detail','\${c.id}')">\r
    <div class="mode-stripe \${modeClass}"></div>\r
    \${isClosingSoon?\`<div style="font-size:11px;color:var(--purple);font-weight:600;background:var(--purple-light);padding:5px 10px;margin:-3px -3px 10px;border-radius:3px">🏁 療程即將結束・請準備結案評估</div>\`:''}\r
    <div class="case-card-header"><div><div class="case-name">\${c.name}</div><div class="case-id">\${modeLabel}・\${c.disease}</div></div>\${statusBadge}</div>\r
    <div class="case-card-body">\r
      <div class="case-field"><label>照護模式</label><span>\${c.mode}</span></div>\r
      <div class="case-field"><label>轉介來源</label><span>\${c.source}</span></div>\r
      <div class="case-field"><label>轉介日期</label><span>\${c.date}</span></div>\r
      <div class="case-field"><label>疾病別</label><span>\${c.disease}</span></div>\r
    </div>\r
    <div class="case-card-footer">\r
      <div class="case-manager"><div class="mini-av">林</div>\${c.mgr}</div>\r
      <div style="display:flex;gap:5px;align-items:center">\r
        \${weekBadge}\r
        \${countdown||(!isClosingSoon&&!c.week?statusBadge:'')}\r
      </div>\r
    </div>\r
  </div>\`;\r
}\r
\r
function renderDetail(container,caseId){\r
  currentCase=caseId;\r
  const allCases=[...CASES.temp,...CASES.formal];\r
  const c=allCases.find(x=>x.id===caseId)||CASES.formal[0];\r
  document.getElementById('bc').textContent=\`個案管理 › \${c.name}\`;\r
\r
  const isMgr=currentRole==='mgr';\r
  const isDoc=currentRole==='doc';\r
  const isNur=currentRole==='nur';\r
  const isAdm=currentRole==='adm';\r
  const isFormal=c.formal;\r
\r
  // 進度條 steps\r
  const steps=[\r
    {label:'新轉介',sublabel:'',done:true},\r
    {label:'收案判斷',sublabel:'',done:true},\r
    {label:c.mode==='住院'?'排床確認':'模式確認',sublabel:'',done:isFormal},\r
    {label:'正式收案',sublabel:'',done:isFormal,active:!isFormal},\r
    {label:'PAC療程',sublabel:'',done:isFormal&&c.status!=='已收案在院',active:isFormal&&c.status==='已收案在院'},\r
    {label:'展延/結案',sublabel:'',done:false},\r
  ];\r
\r
  // 行政視角：重點欄位放大顯示\r
  const adminKeyFields=isAdm?\`\r
    <div class="info-note amber" style="margin-bottom:12px">⚠️ 以下欄位請仔細核對後登打至杏翔系統，身分證字號打錯將影響所有健保申報。</div>\r
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:16px">\r
      <div class="admin-key-field"><label>👤 姓名</label><span>\${c.name}</span></div>\r
      <div class="admin-key-field"><label>🪪 身分證字號</label><span>A123456789</span></div>\r
      <div class="admin-key-field"><label>📅 出生日期</label><span>1952/08/20</span></div>\r
      <div class="admin-key-field"><label>🏥 照護模式</label><span>\${c.mode}</span></div>\r
      <div class="admin-key-field"><label>🛏 床號</label><span>\${isFormal?'A301':'待確認'}</span></div>\r
      <div class="admin-key-field"><label>📋 病歷號</label><span>\${isFormal?'00073450':'—'}</span></div>\r
    </div>\r
  \`:'';\r
\r
  // 操作按鈕\r
  let actions='';\r
  if(isMgr){\r
    if(!isFormal) actions=\`\r
      <button class="btn btn-ghost btn-sm" onclick="openModal('modal-translate')">📄 病摘翻譯</button>\r
      <button class="btn btn-ghost btn-sm" onclick="openModal('modal-judge')">🩺 轉交判斷</button>\r
      <button class="btn btn-amber btn-sm" onclick="openModal('modal-convert')">→ 轉正式病歷</button>\r
      <button class="btn btn-danger btn-sm" onclick="openModal('modal-retire')">退案</button>\r
      <button class="btn btn-secondary btn-sm" onclick="openModal('modal-archive')">封存</button>\r
    \`;\r
    else actions=\`\r
      <button class="btn btn-ghost btn-sm" onclick="openModal('modal-translate')">📄 病摘翻譯</button>\r
      <button class="btn btn-ghost btn-sm" onclick="openModal('modal-export-extend')">📤 匯出展延</button>\r
      <button class="btn btn-ghost btn-sm" onclick="openModal('modal-export-close')">📤 匯出結案</button>\r
      <button class="btn btn-green btn-sm" onclick="openModal('modal-success-close')">✓ 成功結案</button>\r
      <button class="btn btn-danger btn-sm" onclick="openModal('modal-fail-close')">不成功結案</button>\r
    \`;\r
  } else if(isDoc) actions=\`<span class="badge badge-amber" style="font-size:12px">醫師視角・可填寫 PAC 判斷與醫囑</span>\`;\r
  else if(isNur) actions=\`<span class="badge badge-teal" style="font-size:12px">護理師視角・可填寫護理相關欄位</span>\`;\r
  else if(isAdm) actions=\`<span class="badge badge-gray" style="font-size:12px">行政視角・唯讀模式</span>\`;\r
\r
  // 表單清單\r
  const modeKey=c.modeType||'hosp';\r
  const formData=FORMS[modeKey]||FORMS.hosp;\r
  const fsLabel={'done':'fs-done','required':'fs-required','pending':'fs-pending'};\r
  const fsText={'done':'已完成','required':'待填寫','pending':'未到期'};\r
\r
  const formsList=(forms,title,showTitle=true)=>\`\r
    \${showTitle?\`<div style="font-size:11px;font-weight:700;color:var(--gray-500);text-transform:uppercase;letter-spacing:.04em;margin-bottom:8px">\${title}</div>\`:''}\r
    <div class="forms-grid">\r
      \${forms.map(f=>\`\r
        <div class="form-item" onclick="renderPage('form','\${caseId}','\${f.name}')">\r
          <div class="form-item-left">\r
            <div class="form-icon">\${f.icon}</div>\r
            <div><div class="form-name">\${f.name}</div><div class="form-meta">\${f.meta}</div></div>\r
          </div>\r
          <span class="form-status \${fsLabel[f.status]}">\${fsText[f.status]}</span>\r
        </div>\r
      \`).join('')}\r
    </div>\r
  \`;\r
\r
  // PAC 判斷區塊\r
  const judgeBlock=\`\r
    <div class="section-card">\r
      <div class="sc-header">\r
        <div class="sc-title">🩺 PAC 收案判斷</div>\r
        \${(isDoc||isNur)&&!isAdm?\`<button class="btn btn-primary btn-sm" onclick="alert('開啟判斷填寫')">填寫判斷</button>\`:''}\r
      </div>\r
      <div class="sc-body">\r
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">\r
          \${judgeOption('是 PAC',true)}\r
          \${judgeOption('非 PAC',false)}\r
          \${judgeOption('需再評估',false)}\r
          \${judgeOption('缺件',false)}\r
        </div>\r
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">\r
          <div class="form-group"><label>判斷 PAC 疾病別</label><input class="form-control" value="CVA（腦中風）" \${isAdm?'readonly':''}></div>\r
          <div class="form-group"><label>判斷者</label><input class="form-control" value="張宗達 醫師" readonly></div>\r
          <div class="form-group" style="grid-column:1/-1"><label>判斷原因</label><textarea class="form-control" rows="2" \${isAdm?'readonly':''}>個案符合 CVA PAC 收案條件，開刀位置及病摘內容確認無誤，建議收案。</textarea></div>\r
          <div class="form-group" style="grid-column:1/-1"><label>補充建議</label><textarea class="form-control" rows="2" \${isAdm?'readonly':''}>建議優先安排物理及職能治療，語言治療視評估結果決定頻率。</textarea></div>\r
        </div>\r
      </div>\r
    </div>\r
  \`;\r
\r
  container.innerHTML=\`\r
    <div class="back-link" onclick="renderPage('list')">← 返回個案列表</div>\r
\r
    <!-- 詳情 header -->\r
    <div class="detail-header">\r
      <div class="detail-top">\r
        <div class="patient-name">\r
          \${c.name}\r
          <span class="badge \${STATUS_COLOR[c.status]||'badge-gray'}">\${c.status}</span>\r
          <span class="badge badge-blue">\${c.mode}</span>\r
          <span class="badge badge-gray">\${c.disease}</span>\r
        </div>\r
        <div class="detail-actions">\${actions}</div>\r
      </div>\r
      <div class="detail-meta">\r
        <div class="meta-item"><strong>轉介來源：</strong>\${c.source}</div>\r
        <div class="meta-item"><strong>轉介日期：</strong>\${c.date}</div>\r
        \${isFormal?\`<div class="meta-item"><strong>病歷號：</strong>00073450</div>\`:''}\r
        \${isFormal&&c.mode==='住院'?\`<div class="meta-item"><strong>床位：</strong>A301</div>\`:''}\r
        <div class="meta-item"><strong>負責個管師：</strong>林美惠</div>\r
        \${c.countdown?\`<div class="meta-item" style="color:var(--red);font-weight:600">⚠️ 展延倒數 \${c.countdown} 天</div>\`:''}\r
      </div>\r
    </div>\r
\r
    \${adminKeyFields}\r
\r
    <!-- 即將結案提醒 -->\r
    \${c.status==='即將結案'?\`\r
    <div style="background:var(--purple-light);border:1px solid #DDD6FE;border-radius:10px;padding:14px 18px;margin-bottom:12px;display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap">\r
      <div>\r
        <div style="font-size:13px;font-weight:700;color:var(--purple);margin-bottom:4px">🏁 療程即將結束</div>\r
        <div style="font-size:12px;color:var(--purple);line-height:1.6">目前為第 \${c.week} 週（共 12 週），系統偵測到療程進入最後階段。<br>請確認以下待辦事項，並與家屬討論後續安排。</div>\r
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">\r
          <span style="font-size:11px;font-weight:600;padding:3px 9px;border-radius:5px;\${c.week>=11?'background:var(--red-light);color:var(--red)':'background:#FEF3C7;color:var(--amber)'}">\r
            \${c.week>=11?'⚠ 結案評估應於本週完成':'結案評估應於下週完成'}\r
          </span>\r
          <span style="font-size:11px;font-weight:600;padding:3px 9px;border-radius:5px;background:var(--gray-100);color:var(--gray-600)">出院準備資料待填寫</span>\r
          <span style="font-size:11px;font-weight:600;padding:3px 9px;border-radius:5px;background:var(--gray-100);color:var(--gray-600)">家屬後續安排討論中</span>\r
        </div>\r
      </div>\r
      <div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0">\r
        <button class="btn btn-green btn-sm" onclick="openModal('modal-success-close')">✓ 成功結案</button>\r
        <button class="btn btn-danger btn-sm" onclick="openModal('modal-fail-close')">不成功結案</button>\r
      </div>\r
    </div>\r
    \`:''}\r
\r
    <!-- 進度條 -->\r
    <div class="timeline-card">\r
      <div class="tc-header"><div class="tc-title">個案進度</div></div>\r
      <div class="timeline-body">\r
        <div class="timeline-track">\r
          \${steps.map(s=>\`<div class="t-step \${s.done?'done':''} \${s.active?'active':''}">\r
            <div class="t-dot">\${s.done?'✓':''}</div>\r
            <div class="t-label">\${s.label}</div>\r
          </div>\`).join('')}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 個案基本資料 -->\r
    <div class="section-card">\r
      <div class="sc-header"><div class="sc-title">👤 個案基本資料</div>\${isMgr?\`<button class="btn btn-ghost btn-xs" onclick="alert('編輯個案資料')">✏️ 編輯</button>\`:''}</div>\r
      <div class="sc-body">\r
        <div class="info-grid">\r
          <div class="info-item"><label>姓名</label><span>\${c.name}</span></div>\r
          <div class="info-item"><label>身分證</label><span>A123456789</span></div>\r
          <div class="info-item"><label>出生日期</label><span>1952/08/20（72歲）</span></div>\r
          <div class="info-item"><label>性別</label><span>男</span></div>\r
          <div class="info-item"><label>PAC 疾病別</label><span>\${c.disease}</span></div>\r
          <div class="info-item"><label>照護模式</label><span>\${c.mode}</span></div>\r
          \${isFormal?\`<div class="info-item"><label>病歷號</label><span>00073450</span></div>\`:''}\r
          \${isFormal&&c.mode==='住院'?\`<div class="info-item"><label>床位</label><span>A301</span></div><div class="info-item"><label>主治醫師</label><span>張宗達 醫師</span></div>\`:''}\r
        </div>\r
        <div class="divider"></div>\r
        <div class="info-grid">\r
          <div class="info-item"><label>家屬姓名</label><span>陳小明（兒子）</span></div>\r
          <div class="info-item"><label>家屬電話</label><span>0912-345-678</span></div>\r
          <div class="info-item"><label>關係</label><span>兒子</span></div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 家屬聯繫紀錄 -->\r
    <div class="section-card">\r
      <div class="sc-header"><div class="sc-title">📞 家屬聯繫紀錄</div>\${isMgr?\`<button class="btn btn-ghost btn-xs" onclick="alert('新增聯繫紀錄')">＋ 新增</button>\`:''}</div>\r
      <div class="sc-body">\r
        <div class="contact-log">\r
          <div class="contact-entry done">\r
            <div>\r
              <div class="contact-label">第一次聯繫</div>\r
              <div class="contact-meta">2026/06/10 10:30・電話</div>\r
              <div class="contact-note">告知注意事項、入院日期及床位，家屬表示了解並同意入院。</div>\r
            </div>\r
          </div>\r
          <div class="contact-entry done">\r
            <div>\r
              <div class="contact-label">第二次聯繫（W4W5 確認）</div>\r
              <div class="contact-meta">2026/06/17 14:00・電話</div>\r
              <div class="contact-note">確認入院計畫，家屬已確認，無異動。</div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 上游聯繫紀錄 -->\r
    <div class="section-card">\r
      <div class="sc-header"><div class="sc-title">🏥 上游聯繫紀錄</div>\${isMgr?\`<button class="btn btn-ghost btn-xs" onclick="alert('新增聯繫紀錄')">＋ 新增</button>\`:''}</div>\r
      <div class="sc-body">\r
        <div class="info-grid-2" style="margin-bottom:12px">\r
          <div class="info-item"><label>上游醫院</label><span>臺大醫院</span></div>\r
          <div class="info-item"><label>轉介窗口</label><span>李護理師（出院準備服務）</span></div>\r
          <div class="info-item"><label>聯絡電話</label><span>02-1234-5678 #456</span></div>\r
          <div class="info-item"><label>聯繫狀態</label><span style="color:var(--green);font-weight:600">✓ 已回報收案</span></div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 病摘 -->\r
    <div class="section-card">\r
      <div class="sc-header">\r
        <div class="sc-title">📄 病摘</div>\r
        \${isMgr?\`<div style="display:flex;gap:6px"><button class="btn btn-ghost btn-xs" onclick="openModal('modal-translate')">輔助翻譯</button></div>\`:''}\r
      </div>\r
      <div class="sc-body">\r
        <div style="font-size:11px;color:var(--gray-400);margin-bottom:8px">英文原文</div>\r
        <div style="font-size:12px;line-height:1.75;color:var(--gray-700);background:var(--gray-50);padding:12px;border-radius:6px">\r
          Left MCA infarction with right hemiparesis. Patient is a 72-year-old male who presented with sudden onset of right-sided weakness and aphasia. CT scan confirmed left middle cerebral artery territory infarction. Patient underwent thrombolysis and is now stable for PAC rehabilitation program.\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- PAC 收案判斷 -->\r
    \${judgeBlock}\r
\r
    <!-- 相關表單 -->\r
    \${isFormal?\`\r
    <div class="section-card">\r
      <div class="sc-header"><div class="sc-title">📑 相關表單</div></div>\r
      <div class="sc-body">\r
        \${formsList(formData.common,'在院期間表單')}\r
        \${formData.post.length?\`<div class="divider"></div>\${formsList(formData.post,'結案後表單')}\`:''}\r
      </div>\r
    </div>\r
    \`:''}\r
\r
    <!-- 結案轉介 -->\r
    \${isFormal&&isMgr?\`\r
    <div class="section-card">\r
      <div class="sc-header"><div class="sc-title">🔄 結案轉介筆記</div></div>\r
      <div class="sc-body">\r
        <div class="form-group" style="margin-bottom:10px">\r
          <label>轉介去向</label>\r
          <select class="form-control"><option>無需轉介</option><option>轉介居家醫療</option><option>轉介長照服務</option><option>轉介社工服務</option></select>\r
        </div>\r
        <div class="form-group">\r
          <label>轉介備註</label>\r
          <textarea class="form-control" rows="3" placeholder="轉介服務說明、聯絡窗口等…"></textarea>\r
        </div>\r
        <div style="display:flex;justify-content:flex-end;margin-top:8px">\r
          <button class="btn btn-primary btn-sm" onclick="alert('轉介筆記已儲存')">儲存</button>\r
        </div>\r
      </div>\r
    </div>\r
    \`:''}\r
  \`;\r
}\r
\r
function judgeOption(label,selected){\r
  return \`<div class="judge-option \${selected?'selected':''}" onclick="this.parentElement.querySelectorAll('.judge-option').forEach(el=>el.classList.remove('selected'));this.classList.add('selected')">\r
    <input type="radio" name="judge-result" \${selected?'checked':''}><span>\${label}</span>\r
  </div>\`;\r
}\r
\r
function renderFormFill(container,caseId,formName){\r
  currentForm=formName;\r
  const allCases=[...CASES.temp,...CASES.formal];\r
  const c=allCases.find(x=>x.id===caseId)||CASES.formal[0];\r
  document.getElementById('bc').textContent=\`個案管理 › \${c.name} › \${formName}\`;\r
\r
  const fillData=FORM_FILL_CONTENT[formName];\r
  const isMgr=currentRole==='mgr';\r
\r
  let sectionsHTML='';\r
  if(fillData){\r
    sectionsHTML=fillData.sections.map(sec=>{\r
      if(sec.table){\r
        return \`<div class="form-section">\r
          <div class="fs-header"><div class="fs-title">\${sec.title}</div></div>\r
          <div class="fs-body" style="padding:0">\r
            <table style="width:100%;border-collapse:collapse;font-size:12px">\r
              <thead><tr style="background:var(--gray-50)">\r
                <th style="padding:8px 12px;text-align:left;border-bottom:1px solid var(--gray-200);font-size:11px;color:var(--gray-500)">次別</th>\r
                <th style="padding:8px 12px;text-align:left;border-bottom:1px solid var(--gray-200);font-size:11px;color:var(--gray-500)">日期</th>\r
                <th style="padding:8px 12px;border-bottom:1px solid var(--gray-200);font-size:11px;color:var(--gray-500)">病程週數</th>\r
                <th style="padding:8px 12px;border-bottom:1px solid var(--gray-200);font-size:11px;color:var(--gray-500)">PT</th>\r
                <th style="padding:8px 12px;border-bottom:1px solid var(--gray-200);font-size:11px;color:var(--gray-500)">OT</th>\r
                <th style="padding:8px 12px;border-bottom:1px solid var(--gray-200);font-size:11px;color:var(--gray-500)">ST</th>\r
                <th style="padding:8px 12px;border-bottom:1px solid var(--gray-200);font-size:11px;color:var(--gray-500)">狀態</th>\r
              </tr></thead>\r
              <tbody>\r
                \${sec.rows.map((r,i)=>\`<tr style="\${i===1?'background:var(--blue-light)':''} \${r.status==='future'?'opacity:.5':''}">\r
                  <td style="padding:9px 12px;border-bottom:1px solid var(--gray-100);font-weight:600">\${r.label}</td>\r
                  <td style="padding:9px 12px;border-bottom:1px solid var(--gray-100)">\${r.date}</td>\r
                  <td style="padding:9px 12px;border-bottom:1px solid var(--gray-100);text-align:center">\${r.week}</td>\r
                  <td style="padding:9px 12px;border-bottom:1px solid var(--gray-100);color:var(--blue);font-weight:600">\${r.pt}</td>\r
                  <td style="padding:9px 12px;border-bottom:1px solid var(--gray-100);color:#9D174D;font-weight:600">\${r.ot}</td>\r
                  <td style="padding:9px 12px;border-bottom:1px solid var(--gray-100);color:var(--green);font-weight:600">\${r.st}</td>\r
                  <td style="padding:9px 12px;border-bottom:1px solid var(--gray-100)">\r
                    \${r.status==='done'?'<span class="badge badge-green">✓ 完成</span>':r.status==='pending'?'<span class="badge badge-amber">待填</span>':'<span class="badge badge-gray">未到期</span>'}\r
                  </td>\r
                </tr>\`).join('')}\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\`;\r
      }\r
      if(sec.checklist){\r
        return \`<div class="form-section">\r
          <div class="fs-header"><div class="fs-title">\${sec.title}</div></div>\r
          <div class="fs-body">\r
            <div class="checklist">\r
              \${sec.items.map(item=>\`<div class="check-item"><input type="checkbox"><span>\${item}</span></div>\`).join('')}\r
            </div>\r
          </div>\r
        </div>\`;\r
      }\r
      const fieldsHTML=sec.fields.map(f=>{\r
        if(f.type==='textarea') return \`<div class="form-group full"><label>\${f.label}</label><textarea class="form-control" rows="3" \${f.readonly?'readonly':''}>\${f.value||''}</textarea></div>\`;\r
        if(f.type==='select') return \`<div class="form-group"><label>\${f.label}</label><select class="form-control" \${f.readonly?'disabled':''}>\${(f.options||[]).map(o=>\`<option \${o===f.value?'selected':''}>\${o}</option>\`).join('')}</select></div>\`;\r
        return \`<div class="form-group"><label>\${f.label}</label><input class="form-control" type="text" value="\${f.value||''}" \${f.readonly?'readonly':''}></div>\`;\r
      }).join('');\r
      return \`<div class="form-section">\r
        <div class="fs-header"><div class="fs-title">\${sec.title}</div></div>\r
        <div class="fs-body"><div class="form-row">\${fieldsHTML}</div></div>\r
      </div>\`;\r
    }).join('');\r
  } else {\r
    // 沒有預設內容的表單：顯示通用框架\r
    sectionsHTML=\`\r
      <div class="form-section">\r
        <div class="fs-header"><div class="fs-title">基本資料（自動帶入）</div></div>\r
        <div class="fs-body">\r
          <div class="form-row">\r
            <div class="form-group"><label>個案姓名</label><input class="form-control" value="\${c.name}" readonly></div>\r
            <div class="form-group"><label>病歷號</label><input class="form-control" value="\${c.formal?'00073450':'—'}" readonly></div>\r
            <div class="form-group"><label>照護模式</label><input class="form-control" value="\${c.mode}" readonly></div>\r
            <div class="form-group"><label>記錄日期</label><input class="form-control" type="date" value="2026-06-25"></div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="form-section">\r
        <div class="fs-header"><div class="fs-title">填寫內容</div></div>\r
        <div class="fs-body">\r
          <div class="info-note blue">此表單內容依實際使用情境填寫，欄位設計將依業務需求細化。</div>\r
          <div class="form-group full"><label>主要內容</label><textarea class="form-control" rows="5" placeholder="填寫\${formName}相關內容..."></textarea></div>\r
          <div class="form-group full"><label>備註</label><textarea class="form-control" rows="2" placeholder="其他備註..."></textarea></div>\r
        </div>\r
      </div>\r
    \`;\r
  }\r
\r
  container.innerHTML=\`\r
    <div class="back-link" onclick="renderPage('detail','\${caseId}')">← 返回 \${c.name} 個案詳情</div>\r
\r
    <div class="form-fill-header">\r
      <div>\r
        <div class="ff-title">\${formName}</div>\r
        <div class="ff-meta">\${c.name}・\${c.mode}・\${c.disease}・2026/06/25</div>\r
      </div>\r
      <div class="ff-actions">\r
        <button class="btn btn-secondary btn-sm" onclick="alert('已列印')">🖨️ 列印</button>\r
        <button class="btn btn-secondary btn-sm" onclick="alert('已預覽')">👁 預覽</button>\r
        <button class="btn btn-secondary btn-sm" onclick="alert('已暫存')">暫存</button>\r
        \${isMgr||currentRole==='doc'||currentRole==='nur'?\`<button class="btn btn-primary btn-sm" onclick="alert('表單已送出')">送出</button>\`:''}\r
      </div>\r
    </div>\r
\r
    \${sectionsHTML}\r
\r
    <div class="form-footer">\r
      <div style="font-size:11px;color:var(--gray-500)">最後儲存：2026/06/25 14:30・林美惠</div>\r
      <div style="display:flex;gap:7px">\r
        <button class="btn btn-secondary btn-sm" onclick="alert('已暫存')">暫存</button>\r
        \${isMgr||currentRole==='doc'||currentRole==='nur'?\`<button class="btn btn-primary btn-sm" onclick="alert('表單已送出')">送出</button>\`:''}\r
      </div>\r
    </div>\r
  \`;\r
}\r
\r
// ── 工具函式 ──\r
function switchTab(el,targetId){\r
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));\r
  el.classList.add('active');\r
  ['tab-temp','tab-formal'].forEach(id=>{\r
    const el2=document.getElementById(id);\r
    if(el2) el2.classList.toggle('hidden',id!==targetId);\r
  });\r
}\r
function switchModalTab(el,targetId){\r
  el.closest('.modal-body').querySelectorAll('.modal-tab').forEach(t=>t.classList.remove('active'));\r
  el.classList.add('active');\r
  ['new-manual','new-ocr','new-his'].forEach(id=>{\r
    const el2=document.getElementById(id);\r
    if(el2) el2.classList.toggle('hidden',id!==targetId);\r
  });\r
}\r
function showHisResult(){\r
  document.getElementById('his-result').classList.remove('hidden');\r
}\r
function openModal(id){document.getElementById(id).classList.remove('hidden')}\r
function closeModal(id){document.getElementById(id).classList.add('hidden')}\r
document.querySelectorAll('.modal-overlay').forEach(o=>o.addEventListener('click',function(e){if(e.target===this)this.classList.add('hidden')}));\r
\r
function switchRole(role){\r
  currentRole=role;\r
  const cfg=ROLES[role];\r
  document.getElementById('user-av').textContent=cfg.ch;\r
  document.getElementById('user-av').className='user-avatar '+cfg.av;\r
  document.getElementById('user-name').textContent=cfg.name;\r
  document.getElementById('user-role-label').textContent=cfg.label;\r
  // 重新渲染目前頁面\r
  if(currentPage==='list') renderPage('list');\r
  else if(currentPage==='detail'&&currentCase) renderPage('detail',currentCase);\r
  else if(currentPage==='form'&&currentCase&&currentForm) renderPage('form',currentCase,currentForm);\r
}\r
\r
// Init\r
renderPage('list');\r
<\/script>\r
</body>\r
</html>`,og=`<!DOCTYPE html>\r
<html lang="zh-TW">\r
<head>\r
<meta charset="UTF-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1.0">\r
<title>PAC 病床管理</title>\r
<style>\r
* { box-sizing: border-box; margin: 0; padding: 0; }\r
:root {\r
  --blue: #2563EB; --blue-light: #EFF6FF; --blue-mid: #BFDBFE; --blue-dark: #1E40AF;\r
  --gray-50: #F8FAFC; --gray-100: #F1F5F9; --gray-200: #E2E8F0; --gray-300: #CBD5E1;\r
  --gray-400: #94A3B8; --gray-500: #64748B; --gray-600: #475569; --gray-700: #334155; --gray-900: #0F172A;\r
  --green: #16A34A; --green-light: #DCFCE7;\r
  --amber: #D97706; --amber-light: #FEF3C7;\r
  --red: #DC2626; --red-light: #FEE2E2;\r
  --purple: #7C3AED; --purple-light: #EDE9FE;\r
  --teal: #0D9488; --teal-light: #CCFBF1;\r
  --white: #FFFFFF;\r
}\r
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', sans-serif; background: var(--gray-50); color: var(--gray-900); height: 100vh; display: flex; overflow: hidden; font-size: 14px; }\r
\r
/* Sidebar */\r
.sidebar { width: 192px; min-width: 192px; background: var(--white); border-right: 1px solid var(--gray-200); display: flex; flex-direction: column; }\r
.sidebar-logo { padding: 16px 16px 13px; border-bottom: 1px solid var(--gray-200); }\r
.logo-text { font-size: 14px; font-weight: 700; color: var(--blue); }\r
.logo-sub { font-size: 11px; color: var(--gray-400); margin-top: 2px; }\r
.sidebar-nav { padding: 6px 0; flex: 1; }\r
.nav-item { display: flex; align-items: center; gap: 8px; padding: 9px 14px; font-size: 13px; color: var(--gray-500); border-left: 3px solid transparent; }\r
.nav-item.active { background: var(--blue-light); color: var(--blue); font-weight: 600; border-left-color: var(--blue); cursor: pointer; }\r
.nav-item.disabled { opacity: 0.38; cursor: not-allowed; }\r
.sidebar-user { margin-top: auto;padding: 11px 14px; border-top: 1px solid var(--gray-200); display: flex; align-items: center; gap: 8px; }\r
.user-avatar { width: 28px; height: 28px; border-radius: 50%; background: var(--blue-mid); color: var(--blue-dark); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; }\r
.user-name { font-size: 12px; font-weight: 600; color: var(--gray-700); }\r
.user-role { font-size: 11px; color: var(--gray-400); }\r
\r
/* Main */\r
.main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }\r
.topbar { background: var(--white); border-bottom: 1px solid var(--gray-200); padding: 0 20px; height: 48px; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }\r
.breadcrumb { font-size: 12px; color: var(--gray-500); }\r
.content { flex: 1; overflow-y: auto; padding: 20px; }\r
\r
/* Buttons */\r
.btn { display: inline-flex; align-items: center; gap: 5px; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; border: none; cursor: pointer; transition: all 0.15s; white-space: nowrap; }\r
.btn-primary { background: var(--blue); color: var(--white); }\r
.btn-primary:hover { background: var(--blue-dark); }\r
.btn-secondary { background: var(--white); color: var(--gray-700); border: 1px solid var(--gray-300); }\r
.btn-secondary:hover { background: var(--gray-50); }\r
.btn-ghost { background: transparent; color: var(--blue); border: 1px solid var(--blue-mid); }\r
.btn-ghost:hover { background: var(--blue-light); }\r
.btn-danger { background: var(--white); color: var(--red); border: 1px solid #FECACA; }\r
.btn-danger:hover { background: var(--red-light); }\r
.btn-sm { padding: 5px 10px; font-size: 12px; }\r
.btn-xs { padding: 3px 8px; font-size: 11px; }\r
\r
/* Badges */\r
.badge { display: inline-flex; align-items: center; padding: 2px 7px; border-radius: 999px; font-size: 11px; font-weight: 600; }\r
.badge-blue { background: var(--blue-light); color: var(--blue); }\r
.badge-green { background: var(--green-light); color: var(--green); }\r
.badge-amber { background: var(--amber-light); color: var(--amber); }\r
.badge-gray { background: var(--gray-100); color: var(--gray-500); }\r
.badge-red { background: var(--red-light); color: var(--red); }\r
.badge-purple { background: var(--purple-light); color: var(--purple); }\r
.badge-teal { background: var(--teal-light); color: var(--teal); }\r
\r
/* Type tags with text */\r
.type-tag { display: inline-flex; align-items: center; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 700; letter-spacing: 0.02em; }\r
.type-pac { background: var(--blue-light); color: var(--blue-dark); border: 1px solid var(--blue-mid); }\r
.type-general { background: var(--gray-100); color: var(--gray-600); border: 1px solid var(--gray-300); }\r
.type-hospice { background: var(--purple-light); color: var(--purple); border: 1px solid #DDD6FE; }\r
\r
/* Tabs */\r
.tabs { display: flex; border-bottom: 2px solid var(--gray-200); margin-bottom: 16px; }\r
.tab { padding: 8px 16px; font-size: 13px; font-weight: 500; color: var(--gray-500); cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; }\r
.tab.active { color: var(--blue); border-bottom-color: var(--blue); }\r
\r
/* Sub tabs (floor) */\r
.floor-tabs { display: flex; gap: 4px; margin-bottom: 16px; }\r
.floor-tab { padding: 5px 14px; font-size: 12px; font-weight: 500; color: var(--gray-500); cursor: pointer; border-radius: 6px; border: 1px solid var(--gray-200); background: var(--white); }\r
.floor-tab.active { background: var(--blue); color: var(--white); border-color: var(--blue); }\r
\r
/* View toggle */\r
.view-toggle { display: flex; border: 1px solid var(--gray-200); border-radius: 6px; overflow: hidden; }\r
.view-btn { padding: 5px 10px; font-size: 12px; cursor: pointer; background: var(--white); color: var(--gray-500); border: none; }\r
.view-btn.active { background: var(--blue); color: var(--white); }\r
\r
/* Stats strip */\r
.stats-strip { display: flex; gap: 10px; margin-bottom: 16px; flex-wrap: wrap; }\r
.stat-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: 8px; padding: 10px 16px; display: flex; flex-direction: column; gap: 2px; min-width: 100px; }\r
.stat-label { font-size: 10px; color: var(--gray-400); text-transform: uppercase; letter-spacing: 0.04em; }\r
.stat-value { font-size: 20px; font-weight: 700; color: var(--gray-900); }\r
.stat-card.highlight { border-color: var(--blue-mid); background: var(--blue-light); }\r
.stat-card.highlight .stat-value { color: var(--blue); }\r
.stat-card.today-in { border-color: #BBF7D0; background: var(--green-light); }\r
.stat-card.today-in .stat-value { color: var(--green); }\r
.stat-card.today-out { border-color: #FDE68A; background: var(--amber-light); }\r
.stat-card.today-out .stat-value { color: var(--amber); }\r
\r
/* Page header */\r
.page-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 16px; }\r
.page-title { font-size: 18px; font-weight: 700; }\r
.page-subtitle { font-size: 12px; color: var(--gray-500); margin-top: 3px; }\r
\r
/* Search bar */\r
.toolbar { display: flex; gap: 7px; margin-bottom: 14px; align-items: center; flex-wrap: wrap; justify-content: space-between; }\r
.toolbar-left { display: flex; gap: 7px; align-items: center; flex-wrap: wrap; }\r
.toolbar-right { display: flex; gap: 7px; align-items: center; }\r
.search-wrap { position: relative; }\r
.search-wrap input { padding: 6px 10px 6px 30px; border: 1px solid var(--gray-300); border-radius: 6px; font-size: 12px; outline: none; width: 200px; }\r
.search-wrap input:focus { border-color: var(--blue); }\r
.search-icon { position: absolute; left: 9px; top: 50%; transform: translateY(-50%); color: var(--gray-400); font-size: 12px; }\r
\r
/* ── Grid view ── */\r
.bed-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }\r
.bed-cell {\r
  border-radius: 8px; padding: 12px; cursor: pointer;\r
  transition: all 0.15s; border: 2px solid transparent;\r
  display: flex; flex-direction: column; gap: 5px; min-height: 110px;\r
}\r
.bed-cell:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\r
.bed-cell.available { background: var(--green-light); border-color: #BBF7D0; }\r
.bed-cell.pac { background: var(--blue-light); border-color: var(--blue-mid); }\r
.bed-cell.general { background: var(--gray-100); border-color: var(--gray-200); }\r
.bed-cell.hospice { background: var(--purple-light); border-color: #DDD6FE; }\r
.bed-cell.reserved { background: var(--amber-light); border-color: #FDE68A; }\r
.bed-cell.pending { background: #FFF7ED; border-color: #FED7AA; }\r
.bed-cell.maintenance { background: var(--gray-50); border-color: var(--gray-200); opacity: 0.6; }\r
\r
.bed-no { font-size: 12px; font-weight: 700; color: var(--gray-700); }\r
.bed-patient { font-size: 13px; font-weight: 600; color: var(--gray-900); margin-top: 2px; }\r
.bed-diagnosis { font-size: 11px; color: var(--gray-500); }\r
.bed-date { font-size: 10px; color: var(--gray-400); margin-top: auto; }\r
.bed-status-label { font-size: 10px; font-weight: 600; }\r
.bed-cell.available .bed-status-label { color: var(--green); }\r
.bed-cell.pac .bed-status-label { color: var(--blue); }\r
.bed-cell.general .bed-status-label { color: var(--gray-500); }\r
.bed-cell.hospice .bed-status-label { color: var(--purple); }\r
.bed-cell.reserved .bed-status-label { color: var(--amber); }\r
.bed-cell.pending .bed-status-label { color: #EA580C; }\r
.bed-cell.maintenance .bed-status-label { color: var(--gray-400); }\r
\r
.extend-badge { font-size: 10px; padding: 1px 5px; border-radius: 3px; font-weight: 600; margin-top: 2px; display: inline-block; }\r
.extend-pending { background: var(--amber-light); color: var(--amber); }\r
.extend-approved { background: var(--green-light); color: var(--green); }\r
\r
/* ── List view ── */\r
.bed-list-table { width: 100%; border-collapse: collapse; font-size: 12px; background: var(--white); border-radius: 8px; overflow: hidden; border: 1px solid var(--gray-200); }\r
.bed-list-table th { text-align: left; padding: 8px 12px; background: var(--gray-50); color: var(--gray-500); font-weight: 600; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--gray-200); }\r
.bed-list-table td { padding: 9px 12px; border-bottom: 1px solid var(--gray-100); color: var(--gray-700); vertical-align: middle; }\r
.bed-list-table tr:last-child td { border-bottom: none; }\r
.bed-list-table tr:hover td { background: var(--gray-50); cursor: pointer; }\r
.bed-list-table tr.available-row td { background: #F0FDF4; }\r
\r
/* ── Case list ── */\r
.section-label { font-size: 11px; font-weight: 700; color: var(--gray-500); text-transform: uppercase; letter-spacing: 0.06em; padding: 8px 0 6px; margin-top: 6px; display: flex; align-items: center; gap: 8px; }\r
.section-label::after { content: ''; flex: 1; height: 1px; background: var(--gray-200); }\r
\r
.case-list-table { width: 100%; border-collapse: collapse; font-size: 12px; background: var(--white); border-radius: 8px; overflow: hidden; border: 1px solid var(--gray-200); margin-bottom: 12px; }\r
.case-list-table th { text-align: left; padding: 8px 12px; background: var(--gray-50); color: var(--gray-500); font-weight: 600; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--gray-200); }\r
.case-list-table td { padding: 9px 12px; border-bottom: 1px solid var(--gray-100); color: var(--gray-700); vertical-align: middle; }\r
.case-list-table tr:last-child td { border-bottom: none; }\r
.case-list-table tr:hover td { background: var(--gray-50); cursor: pointer; }\r
\r
/* Expandable row */\r
.expand-btn { background: none; border: none; cursor: pointer; color: var(--gray-400); font-size: 11px; padding: 2px 4px; border-radius: 3px; }\r
.expand-btn:hover { background: var(--gray-100); color: var(--gray-600); }\r
.expand-row td { background: var(--gray-50); padding: 10px 12px 10px 32px; }\r
.expand-content { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\r
.expand-field label { font-size: 10px; color: var(--gray-400); display: block; margin-bottom: 3px; text-transform: uppercase; letter-spacing: 0.04em; }\r
.expand-field span { font-size: 12px; color: var(--gray-700); font-weight: 500; }\r
.expand-note { font-size: 12px; color: var(--gray-600); background: var(--white); border: 1px solid var(--gray-200); border-radius: 5px; padding: 7px 9px; min-height: 40px; width: 100%; }\r
\r
/* Modal */\r
.modal-overlay { position: fixed; inset: 0; background: rgba(15,23,42,0.5); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(2px); }\r
.modal { background: var(--white); border-radius: 12px; width: 520px; max-width: 92vw; max-height: 88vh; display: flex; flex-direction: column; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }\r
.modal-lg { width: 640px; }\r
.modal-header { padding: 16px 20px 13px; border-bottom: 1px solid var(--gray-200); display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }\r
.modal-title { font-size: 15px; font-weight: 700; }\r
.modal-close { width: 25px; height: 25px; border-radius: 5px; border: none; background: var(--gray-100); color: var(--gray-500); cursor: pointer; font-size: 13px; display: flex; align-items: center; justify-content: center; }\r
.modal-close:hover { background: var(--gray-200); }\r
.modal-body { padding: 16px 20px; overflow-y: auto; flex: 1; }\r
.modal-footer { padding: 13px 20px; border-top: 1px solid var(--gray-200); display: flex; justify-content: flex-end; gap: 7px; flex-shrink: 0; }\r
\r
/* Form */\r
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }\r
.form-group { display: flex; flex-direction: column; gap: 5px; }\r
.form-group.full { grid-column: 1 / -1; }\r
.form-group label { font-size: 12px; font-weight: 500; color: var(--gray-600); }\r
.required { color: var(--red); margin-left: 2px; }\r
.form-control { padding: 7px 10px; border: 1px solid var(--gray-300); border-radius: 6px; font-size: 13px; color: var(--gray-800); background: var(--white); outline: none; }\r
.form-control:focus { border-color: var(--blue); box-shadow: 0 0 0 3px var(--blue-light); }\r
select.form-control { cursor: pointer; }\r
textarea.form-control { resize: vertical; min-height: 70px; }\r
\r
/* Bed picker */\r
.bed-picker { display: grid; grid-template-columns: repeat(5, 1fr); gap: 7px; margin-top: 8px; }\r
.bed-pick-cell { padding: 8px 4px; border-radius: 6px; text-align: center; font-size: 12px; font-weight: 600; cursor: pointer; border: 2px solid transparent; }\r
.bed-pick-cell.available { background: var(--green-light); color: var(--green); border-color: #BBF7D0; }\r
.bed-pick-cell.available:hover { border-color: var(--green); }\r
.bed-pick-cell.taken { background: var(--gray-100); color: var(--gray-400); cursor: not-allowed; }\r
.bed-pick-cell.selected { background: var(--blue); color: var(--white); border-color: var(--blue-dark); }\r
\r
/* Info box */\r
.info-box { background: var(--blue-light); border-radius: 7px; padding: 10px 13px; font-size: 12px; color: var(--blue-dark); margin-bottom: 14px; }\r
.warn-box { background: var(--amber-light); border-radius: 7px; padding: 10px 13px; font-size: 12px; color: var(--amber); margin-top: 12px; }\r
\r
.divider { height: 1px; background: var(--gray-100); margin: 13px 0; }\r
.hidden { display: none !important; }\r
.mt-10 { margin-top: 10px; }\r
</style>\r
</head>\r
<body>\r
\r
<!-- SIDEBAR -->\r
<aside class="sidebar">\r
<!--\r
  <div class="sidebar-logo">\r
    <div class="logo-text">PAC 管理系統</div>\r
    <div class="logo-sub">急性後期照護</div>\r
  </div>\r
  <nav class="sidebar-nav">\r
    <div class="nav-item disabled">🏠 個人儀表板</div>\r
    <div class="nav-item disabled">📋 個案管理</div>\r
    <div class="nav-item active">🛏 病床管理</div>\r
    <div class="nav-item disabled">📅 班表總覽頁</div>\r
    <div class="nav-item disabled">🏡 居家排班管理</div>\r
    <div class="nav-item disabled">📊 評估量表</div>\r
    <div class="nav-item disabled">💪 復健紀錄</div>\r
    <div class="nav-item disabled">📤 指標匯出</div>\r
  </nav>\r
-->\r
  <div class="sidebar-user">\r
    <div class="user-avatar">林</div>\r
    <div>\r
      <div class="user-name">林美惠</div>\r
      <div class="user-role">個案管理師</div>\r
    </div>\r
  </div>\r
</aside>\r
\r
<!-- MAIN -->\r
<div class="main">\r
  <div class="topbar">\r
    <div class="breadcrumb">病床管理</div>\r
    <div style="font-size:11px;color:var(--gray-400)">2026/06/23</div>\r
  </div>\r
  <div class="content">\r
\r
    <div class="page-header">\r
      <div>\r
        <div class="page-title">病床管理</div>\r
        <div class="page-subtitle">3–6 樓・共 72 床</div>\r
      </div>\r
      <button class="btn btn-primary" onclick="openModal('modal-add-bed')">＋ 新增排床</button>\r
    </div>\r
\r
    <!-- 統計列 -->\r
    <div class="stats-strip">\r
      <div class="stat-card highlight"><div class="stat-label">可使用</div><div class="stat-value">12</div></div>\r
      <div class="stat-card"><div class="stat-label">PAC 住院中</div><div class="stat-value">28</div></div>\r
      <div class="stat-card"><div class="stat-label">一般住院</div><div class="stat-value">18</div></div>\r
      <div class="stat-card"><div class="stat-label">安寧</div><div class="stat-value">4</div></div>\r
      <div class="stat-card"><div class="stat-label">已預約</div><div class="stat-value">6</div></div>\r
      <div class="stat-card"><div class="stat-label">待排床</div><div class="stat-value">3</div></div>\r
      <div class="stat-card"><div class="stat-label">清潔／維修</div><div class="stat-value">1</div></div>\r
      <div class="stat-card today-in"><div class="stat-label">今日入院</div><div class="stat-value">2</div></div>\r
      <div class="stat-card today-out"><div class="stat-label">今日出院</div><div class="stat-value">3</div></div>\r
    </div>\r
\r
    <!-- Main tabs -->\r
    <div class="tabs">\r
      <div class="tab active" onclick="switchMainTab(this,'bed-overview')">床位總覽</div>\r
      <div class="tab" onclick="switchMainTab(this,'case-list')">住院個案列表</div>\r
    </div>\r
\r
    <!-- ══ 床位總覽 ══ -->\r
    <div id="tab-bed-overview">\r
      <div class="toolbar">\r
        <div class="toolbar-left">\r
          <div class="floor-tabs">\r
            <div class="floor-tab active" onclick="switchFloor(this,'3f')">3F</div>\r
            <div class="floor-tab" onclick="switchFloor(this,'4f')">4F</div>\r
            <div class="floor-tab" onclick="switchFloor(this,'5f')">5F</div>\r
            <div class="floor-tab" onclick="switchFloor(this,'6f')">6F</div>\r
          </div>\r
          <button class="btn btn-secondary btn-sm">類型 ▾</button>\r
          <button class="btn btn-secondary btn-sm">狀態 ▾</button>\r
        </div>\r
        <div class="toolbar-right">\r
          <div class="view-toggle">\r
            <button class="view-btn active" id="vbtn-grid" onclick="switchView('grid')">▦ 格狀</button>\r
            <button class="view-btn" id="vbtn-list" onclick="switchView('list')">☰ 列表</button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- 圖例 -->\r
      <div style="display:flex;gap:12px;margin-bottom:14px;flex-wrap:wrap">\r
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)"><span style="width:12px;height:12px;border-radius:3px;background:var(--green-light);border:1px solid #BBF7D0;display:inline-block"></span>可使用</div>\r
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)"><span style="width:12px;height:12px;border-radius:3px;background:var(--blue-light);border:1px solid var(--blue-mid);display:inline-block"></span>PAC 住院</div>\r
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)"><span style="width:12px;height:12px;border-radius:3px;background:var(--gray-100);border:1px solid var(--gray-200);display:inline-block"></span>一般住院</div>\r
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)"><span style="width:12px;height:12px;border-radius:3px;background:var(--purple-light);border:1px solid #DDD6FE;display:inline-block"></span>安寧</div>\r
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)"><span style="width:12px;height:12px;border-radius:3px;background:var(--amber-light);border:1px solid #FDE68A;display:inline-block"></span>已預約</div>\r
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)"><span style="width:12px;height:12px;border-radius:3px;background:#FFF7ED;border:1px solid #FED7AA;display:inline-block"></span>待排床</div>\r
      </div>\r
\r
      <!-- 格狀 -->\r
      <div id="view-grid">\r
        <!-- 3F -->\r
        <div id="floor-3f">\r
          <div class="bed-grid">\r
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">\r
              <div class="bed-no">301-A</div>\r
              <div class="bed-patient">李文雄</div>\r
              <div class="bed-diagnosis">CVA（腦中風）</div>\r
              <div class="extend-badge extend-pending">展延申請中</div>\r
              <div class="bed-status-label">PAC 住院</div>\r
              <div class="bed-date">預計出院 07/05</div>\r
            </div>\r
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">\r
              <div class="bed-no">301-B</div>\r
              <div class="bed-patient">鄭大偉</div>\r
              <div class="bed-diagnosis">骨科（膝關節）</div>\r
              <div class="extend-badge extend-approved">展延通過</div>\r
              <div class="bed-status-label">PAC 住院</div>\r
              <div class="bed-date">預計出院 06/30</div>\r
            </div>\r
            <div class="bed-cell general" onclick="openModal('modal-bed-detail-general')">\r
              <div class="bed-no">302-A</div>\r
              <div class="bed-patient">黃○○</div>\r
              <div class="bed-diagnosis">術後照護</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">一般住院</div>\r
              <div class="bed-date">預計出院 06/26</div>\r
            </div>\r
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">\r
              <div class="bed-no">302-B</div>\r
              <div class="bed-patient" style="color:var(--green)">空床</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">可使用</div>\r
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>\r
            </div>\r
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">\r
              <div class="bed-no">303-A</div>\r
              <div class="bed-patient">吳麗珠</div>\r
              <div class="bed-diagnosis">CVA（腦中風）</div>\r
              <div class="extend-badge extend-pending">展延申請中</div>\r
              <div class="bed-status-label">PAC 住院</div>\r
              <div class="bed-date">預計出院 06/28</div>\r
            </div>\r
            <div class="bed-cell reserved" onclick="openModal('modal-bed-detail-reserved')">\r
              <div class="bed-no">303-B</div>\r
              <div class="bed-patient">陳志明</div>\r
              <div class="bed-diagnosis">CVA（腦中風）</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">已預約</div>\r
              <div class="bed-date">預計入院 06/27</div>\r
            </div>\r
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">\r
              <div class="bed-no">304-A</div>\r
              <div class="bed-patient" style="color:var(--green)">空床</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">可使用</div>\r
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>\r
            </div>\r
            <div class="bed-cell hospice" onclick="openModal('modal-bed-detail-general')">\r
              <div class="bed-no">304-B</div>\r
              <div class="bed-patient">林○○</div>\r
              <div class="bed-diagnosis">末期癌症（肺癌）</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">安寧</div>\r
              <div class="bed-date">預計出院 —</div>\r
            </div>\r
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">\r
              <div class="bed-no">305-A</div>\r
              <div class="bed-patient">王○○</div>\r
              <div class="bed-diagnosis">COPD</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">PAC 住院</div>\r
              <div class="bed-date">預計出院 07/10</div>\r
            </div>\r
            <div class="bed-cell maintenance">\r
              <div class="bed-no">305-B</div>\r
              <div class="bed-patient" style="color:var(--gray-400)">清潔中</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">清潔中</div>\r
              <div class="bed-date">今日可使用</div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- 4F -->\r
        <div id="floor-4f" class="hidden">\r
          <div class="bed-grid">\r
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">\r
              <div class="bed-no">401-A</div>\r
              <div class="bed-patient">張○○</div>\r
              <div class="bed-diagnosis">骨科（髖關節）</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">PAC 住院</div>\r
              <div class="bed-date">預計出院 07/08</div>\r
            </div>\r
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">\r
              <div class="bed-no">401-B</div>\r
              <div class="bed-patient">劉○○</div>\r
              <div class="bed-diagnosis">脊髓損傷</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">PAC 住院</div>\r
              <div class="bed-date">預計出院 07/15</div>\r
            </div>\r
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">\r
              <div class="bed-no">402-A</div>\r
              <div class="bed-patient" style="color:var(--green)">空床</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">可使用</div>\r
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>\r
            </div>\r
            <div class="bed-cell general">\r
              <div class="bed-no">402-B</div>\r
              <div class="bed-patient">蔡○○</div>\r
              <div class="bed-diagnosis">骨折復原</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">一般住院</div>\r
              <div class="bed-date">預計出院 06/25</div>\r
            </div>\r
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">\r
              <div class="bed-no">403-A</div>\r
              <div class="bed-patient" style="color:var(--green)">空床</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">可使用</div>\r
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>\r
            </div>\r
            <div class="bed-cell reserved">\r
              <div class="bed-no">403-B</div>\r
              <div class="bed-patient">黃建國</div>\r
              <div class="bed-diagnosis">脊髓損傷</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">已預約</div>\r
              <div class="bed-date">預計入院 06/30</div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- 5F -->\r
        <div id="floor-5f" class="hidden">\r
          <div class="bed-grid">\r
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">\r
              <div class="bed-no">501-A</div>\r
              <div class="bed-patient">許○○</div>\r
              <div class="bed-diagnosis">心衰竭</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">PAC 住院</div>\r
              <div class="bed-date">預計出院 07/01</div>\r
            </div>\r
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">\r
              <div class="bed-no">501-B</div>\r
              <div class="bed-patient" style="color:var(--green)">空床</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">可使用</div>\r
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>\r
            </div>\r
            <div class="bed-cell general">\r
              <div class="bed-no">502-A</div>\r
              <div class="bed-patient">陳○○</div>\r
              <div class="bed-diagnosis">內科觀察</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">一般住院</div>\r
              <div class="bed-date">預計出院 06/24</div>\r
            </div>\r
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">\r
              <div class="bed-no">502-B</div>\r
              <div class="bed-patient" style="color:var(--green)">空床</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">可使用</div>\r
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- 6F -->\r
        <div id="floor-6f" class="hidden">\r
          <div class="bed-grid">\r
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">\r
              <div class="bed-no">601-A</div>\r
              <div class="bed-patient">謝○○</div>\r
              <div class="bed-diagnosis">骨科（脊椎）</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">PAC 住院</div>\r
              <div class="bed-date">預計出院 07/03</div>\r
            </div>\r
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">\r
              <div class="bed-no">601-B</div>\r
              <div class="bed-patient" style="color:var(--green)">空床</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">可使用</div>\r
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>\r
            </div>\r
            <div class="bed-cell hospice">\r
              <div class="bed-no">602-A</div>\r
              <div class="bed-patient">吳○○</div>\r
              <div class="bed-diagnosis">末期癌症（胃癌）</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">安寧</div>\r
              <div class="bed-date">預計出院 —</div>\r
            </div>\r
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">\r
              <div class="bed-no">602-B</div>\r
              <div class="bed-patient" style="color:var(--green)">空床</div>\r
              <div style="margin-top:auto"></div>\r
              <div class="bed-status-label">可使用</div>\r
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- 列表 -->\r
      <div id="view-list" class="hidden">\r
        <table class="bed-list-table">\r
          <thead>\r
            <tr>\r
              <th>床號</th>\r
              <th>類型</th>\r
              <th>個案姓名</th>\r
              <th>疾病別</th>\r
              <th>狀態</th>\r
              <th>預計入院</th>\r
              <th>預計出院</th>\r
              <th>展延狀態</th>\r
              <th>操作</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr onclick="openModal('modal-bed-detail-pac')">\r
              <td><strong>301-A</strong></td>\r
              <td><span class="type-tag type-pac">PAC</span></td>\r
              <td>李文雄</td>\r
              <td>CVA（腦中風）</td>\r
              <td><span class="badge badge-blue">住院中</span></td>\r
              <td>06/10</td>\r
              <td>07/05</td>\r
              <td><span class="badge badge-amber">展延申請中</span></td>\r
              <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>\r
            </tr>\r
            <tr onclick="openModal('modal-bed-detail-pac')">\r
              <td><strong>301-B</strong></td>\r
              <td><span class="type-tag type-pac">PAC</span></td>\r
              <td>鄭大偉</td>\r
              <td>骨科（膝關節）</td>\r
              <td><span class="badge badge-blue">住院中</span></td>\r
              <td>05/28</td>\r
              <td>06/30</td>\r
              <td><span class="badge badge-green">展延通過</span></td>\r
              <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>\r
            </tr>\r
            <tr onclick="openModal('modal-bed-detail-reserved')">\r
              <td><strong>303-B</strong></td>\r
              <td><span class="type-tag type-pac">PAC</span></td>\r
              <td>陳志明</td>\r
              <td>CVA（腦中風）</td>\r
              <td><span class="badge badge-amber">已預約</span></td>\r
              <td>06/27</td>\r
              <td>—</td>\r
              <td>—</td>\r
              <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>\r
            </tr>\r
            <tr onclick="openModal('modal-bed-detail-general')">\r
              <td><strong>302-A</strong></td>\r
              <td><span class="type-tag type-general">一般</span></td>\r
              <td>黃○○</td>\r
              <td>術後照護</td>\r
              <td><span class="badge badge-blue">住院中</span></td>\r
              <td>06/20</td>\r
              <td>06/26</td>\r
              <td>—</td>\r
              <td><span style="font-size:11px;color:var(--gray-400)">唯讀</span></td>\r
            </tr>\r
            <tr onclick="openModal('modal-bed-detail-general')">\r
              <td><strong>304-B</strong></td>\r
              <td><span class="type-tag type-hospice">安寧</span></td>\r
              <td>林○○</td>\r
              <td>末期癌症（肺癌）</td>\r
              <td><span class="badge badge-purple">安寧中</span></td>\r
              <td>06/01</td>\r
              <td>—</td>\r
              <td>—</td>\r
              <td><span style="font-size:11px;color:var(--gray-400)">唯讀</span></td>\r
            </tr>\r
            <tr class="available-row" onclick="openModal('modal-add-bed')">\r
              <td><strong>302-B</strong></td>\r
              <td>—</td>\r
              <td style="color:var(--green);font-weight:600">空床</td>\r
              <td>—</td>\r
              <td><span class="badge badge-green">可使用</span></td>\r
              <td>—</td>\r
              <td>—</td>\r
              <td>—</td>\r
              <td><button class="btn btn-primary btn-xs" onclick="event.stopPropagation();openModal('modal-add-bed')">安排入住</button></td>\r
            </tr>\r
            <tr class="available-row" onclick="openModal('modal-add-bed')">\r
              <td><strong>304-A</strong></td>\r
              <td>—</td>\r
              <td style="color:var(--green);font-weight:600">空床</td>\r
              <td>—</td>\r
              <td><span class="badge badge-green">可使用</span></td>\r
              <td>—</td>\r
              <td>—</td>\r
              <td>—</td>\r
              <td><button class="btn btn-primary btn-xs" onclick="event.stopPropagation();openModal('modal-add-bed')">安排入住</button></td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
\r
    <!-- ══ 住院個案列表 ══ -->\r
    <div id="tab-case-list" class="hidden">\r
      <div class="toolbar">\r
        <div class="toolbar-left">\r
          <div class="search-wrap">\r
            <span class="search-icon">🔍</span>\r
            <input type="text" placeholder="搜尋姓名、床號…">\r
          </div>\r
          <button class="btn btn-secondary btn-sm">類型 ▾</button>\r
          <button class="btn btn-secondary btn-sm">展延狀態 ▾</button>\r
          <button class="btn btn-secondary btn-sm">樓層 ▾</button>\r
        </div>\r
        <div class="toolbar-right">\r
          <span style="font-size:11px;color:var(--gray-400)">預設排序：預計出院日（近→遠）</span>\r
        </div>\r
      </div>\r
\r
      <!-- 待排床 -->\r
      <div class="section-label">待排床 <span class="badge badge-amber">3</span></div>\r
      <table class="case-list-table">\r
        <thead>\r
          <tr>\r
            <th></th>\r
            <th>姓名</th>\r
            <th>年齡／性別</th>\r
            <th>類型</th>\r
            <th>疾病別</th>\r
            <th>床位</th>\r
            <th>預計入院</th>\r
            <th>預計出院</th>\r
            <th>展延狀態</th>\r
            <th>負責個管師</th>\r
            <th>操作</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr onclick="toggleExpand('exp1')">\r
            <td><button class="expand-btn" id="expbtn1">▶</button></td>\r
            <td><strong>陳志明</strong></td>\r
            <td>68歲 男</td>\r
            <td><span class="type-tag type-pac">PAC</span></td>\r
            <td>CVA（腦中風）</td>\r
            <td style="color:var(--amber)">尚未安排</td>\r
            <td>06/27</td>\r
            <td>—</td>\r
            <td>—</td>\r
            <td>林美惠</td>\r
            <td><button class="btn btn-primary btn-xs" onclick="event.stopPropagation();openModal('modal-add-from-case')">安排床位</button></td>\r
          </tr>\r
          <tr id="exp1" class="expand-row hidden">\r
            <td colspan="11">\r
              <div class="expand-content">\r
                <div class="expand-field"><label>主治醫師</label><span>王主任（神經內科）</span></div>\r
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note" placeholder="點擊輸入交接備註…"></textarea></div>\r
              </div>\r
            </td>\r
          </tr>\r
          <tr onclick="toggleExpand('exp2')">\r
            <td><button class="expand-btn" id="expbtn2">▶</button></td>\r
            <td><strong>黃建國</strong></td>\r
            <td>55歲 男</td>\r
            <td><span class="type-tag type-pac">PAC</span></td>\r
            <td>脊髓損傷</td>\r
            <td style="color:var(--amber)">尚未安排</td>\r
            <td>06/30</td>\r
            <td>—</td>\r
            <td>—</td>\r
            <td>林美惠</td>\r
            <td><button class="btn btn-primary btn-xs" onclick="event.stopPropagation();openModal('modal-add-from-case')">安排床位</button></td>\r
          </tr>\r
          <tr id="exp2" class="expand-row hidden">\r
            <td colspan="11">\r
              <div class="expand-content">\r
                <div class="expand-field"><label>主治醫師</label><span>陳醫師（復健科）</span></div>\r
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note" placeholder="點擊輸入交接備註…"></textarea></div>\r
              </div>\r
            </td>\r
          </tr>\r
          <tr onclick="toggleExpand('exp3')">\r
            <td><button class="expand-btn" id="expbtn3">▶</button></td>\r
            <td><strong>蔡美玲</strong></td>\r
            <td>72歲 女</td>\r
            <td><span class="type-tag type-pac">PAC</span></td>\r
            <td>帕金森氏症</td>\r
            <td style="color:var(--amber)">尚未安排</td>\r
            <td>07/01</td>\r
            <td>—</td>\r
            <td>—</td>\r
            <td>張雅婷</td>\r
            <td><button class="btn btn-primary btn-xs" onclick="event.stopPropagation();openModal('modal-add-from-case')">安排床位</button></td>\r
          </tr>\r
          <tr id="exp3" class="expand-row hidden">\r
            <td colspan="11">\r
              <div class="expand-content">\r
                <div class="expand-field"><label>主治醫師</label><span>林醫師（神經內科）</span></div>\r
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note" placeholder="點擊輸入交接備註…"></textarea></div>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
\r
      <!-- 已預約 -->\r
      <div class="section-label">已預約 <span class="badge badge-amber">2</span></div>\r
      <table class="case-list-table">\r
        <thead>\r
          <tr>\r
            <th></th><th>姓名</th><th>年齡／性別</th><th>類型</th><th>疾病別</th><th>床位</th><th>預計入院</th><th>預計出院</th><th>展延狀態</th><th>負責個管師</th><th>操作</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr onclick="toggleExpand('exp4')">\r
            <td><button class="expand-btn" id="expbtn4">▶</button></td>\r
            <td><strong>陳志明</strong></td>\r
            <td>68歲 男</td>\r
            <td><span class="type-tag type-pac">PAC</span></td>\r
            <td>CVA（腦中風）</td>\r
            <td><strong>303-B</strong></td>\r
            <td>06/27</td>\r
            <td>—</td>\r
            <td>—</td>\r
            <td>林美惠</td>\r
            <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>\r
          </tr>\r
          <tr id="exp4" class="expand-row hidden">\r
            <td colspan="11">\r
              <div class="expand-content">\r
                <div class="expand-field"><label>主治醫師</label><span>王主任（神經內科）</span></div>\r
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note" placeholder="點擊輸入交接備註…"></textarea></div>\r
              </div>\r
            </td>\r
          </tr>\r
          <tr onclick="toggleExpand('exp5')">\r
            <td><button class="expand-btn" id="expbtn5">▶</button></td>\r
            <td><strong>黃建國</strong></td>\r
            <td>55歲 男</td>\r
            <td><span class="type-tag type-pac">PAC</span></td>\r
            <td>脊髓損傷</td>\r
            <td><strong>403-B</strong></td>\r
            <td>06/30</td>\r
            <td>—</td>\r
            <td>—</td>\r
            <td>林美惠</td>\r
            <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>\r
          </tr>\r
          <tr id="exp5" class="expand-row hidden">\r
            <td colspan="11">\r
              <div class="expand-content">\r
                <div class="expand-field"><label>主治醫師</label><span>陳醫師（復健科）</span></div>\r
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note" placeholder="點擊輸入交接備註…"></textarea></div>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
\r
      <!-- 住院中 -->\r
      <div class="section-label">住院中 <span class="badge badge-blue">5</span></div>\r
      <table class="case-list-table">\r
        <thead>\r
          <tr><th></th><th>姓名</th><th>年齡／性別</th><th>類型</th><th>疾病別</th><th>床位</th><th>入院日</th><th>預計出院</th><th>展延狀態</th><th>負責個管師</th><th>操作</th></tr>\r
        </thead>\r
        <tbody>\r
          <tr onclick="toggleExpand('exp6')">\r
            <td><button class="expand-btn" id="expbtn6">▶</button></td>\r
            <td><strong>鄭大偉</strong></td>\r
            <td>62歲 男</td>\r
            <td><span class="type-tag type-pac">PAC</span></td>\r
            <td>骨科（膝關節）</td>\r
            <td><strong>301-B</strong></td>\r
            <td>05/28</td>\r
            <td style="color:var(--amber);font-weight:600">06/30 ⚠️</td>\r
            <td><span class="badge badge-green">展延通過</span></td>\r
            <td>林美惠</td>\r
            <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>\r
          </tr>\r
          <tr id="exp6" class="expand-row hidden">\r
            <td colspan="11">\r
              <div class="expand-content">\r
                <div class="expand-field"><label>主治醫師</label><span>陳醫師（復健科）</span></div>\r
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note">展延通過至 07/12，若功能持續改善可考慮提早出院。</textarea></div>\r
              </div>\r
            </td>\r
          </tr>\r
          <tr onclick="toggleExpand('exp7')">\r
            <td><button class="expand-btn" id="expbtn7">▶</button></td>\r
            <td><strong>吳麗珠</strong></td>\r
            <td>70歲 女</td>\r
            <td><span class="type-tag type-pac">PAC</span></td>\r
            <td>CVA（腦中風）</td>\r
            <td><strong>303-A</strong></td>\r
            <td>06/05</td>\r
            <td>06/28</td>\r
            <td><span class="badge badge-amber">展延申請中</span></td>\r
            <td>張雅婷</td>\r
            <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>\r
          </tr>\r
          <tr id="exp7" class="expand-row hidden">\r
            <td colspan="11">\r
              <div class="expand-content">\r
                <div class="expand-field"><label>主治醫師</label><span>王主任（神經內科）</span></div>\r
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note" placeholder="點擊輸入交接備註…"></textarea></div>\r
              </div>\r
            </td>\r
          </tr>\r
          <tr onclick="toggleExpand('exp8')">\r
            <td><button class="expand-btn" id="expbtn8">▶</button></td>\r
            <td><strong>李文雄</strong></td>\r
            <td>75歲 男</td>\r
            <td><span class="type-tag type-pac">PAC</span></td>\r
            <td>COPD</td>\r
            <td><strong>301-A</strong></td>\r
            <td>06/10</td>\r
            <td>07/05</td>\r
            <td><span class="badge badge-amber">展延申請中</span></td>\r
            <td>林美惠</td>\r
            <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>\r
          </tr>\r
          <tr id="exp8" class="expand-row hidden">\r
            <td colspan="11">\r
              <div class="expand-content">\r
                <div class="expand-field"><label>主治醫師</label><span>陳醫師（胸腔科）</span></div>\r
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note" placeholder="點擊輸入交接備註…"></textarea></div>\r
              </div>\r
            </td>\r
          </tr>\r
          <tr onclick="toggleExpand('exp9')">\r
            <td><button class="expand-btn" id="expbtn9">▶</button></td>\r
            <td><strong>黃○○</strong></td>\r
            <td>58歲 男</td>\r
            <td><span class="type-tag type-general">一般</span></td>\r
            <td>術後照護</td>\r
            <td><strong>302-A</strong></td>\r
            <td>06/20</td>\r
            <td>06/26</td>\r
            <td>—</td>\r
            <td>—</td>\r
            <td><span style="font-size:11px;color:var(--gray-400)">唯讀</span></td>\r
          </tr>\r
          <tr id="exp9" class="expand-row hidden">\r
            <td colspan="11">\r
              <div class="expand-content">\r
                <div class="expand-field"><label>主治醫師</label><span>張醫師（骨科）</span></div>\r
                <div class="expand-field"><label>交接備註</label><span style="font-size:12px;color:var(--gray-400)">一般住院個案，由護理師管理</span></div>\r
              </div>\r
            </td>\r
          </tr>\r
          <tr onclick="toggleExpand('exp10')">\r
            <td><button class="expand-btn" id="expbtn10">▶</button></td>\r
            <td><strong>林○○</strong></td>\r
            <td>81歲 女</td>\r
            <td><span class="type-tag type-hospice">安寧</span></td>\r
            <td>末期癌症（肺癌）</td>\r
            <td><strong>304-B</strong></td>\r
            <td>06/01</td>\r
            <td>—</td>\r
            <td>—</td>\r
            <td>—</td>\r
            <td><span style="font-size:11px;color:var(--gray-400)">唯讀</span></td>\r
          </tr>\r
          <tr id="exp10" class="expand-row hidden">\r
            <td colspan="11">\r
              <div class="expand-content">\r
                <div class="expand-field"><label>主治醫師</label><span>李醫師（安寧科）</span></div>\r
                <div class="expand-field"><label>交接備註</label><span style="font-size:12px;color:var(--gray-400)">安寧個案，由安寧團隊管理</span></div>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
  </div><!-- /content -->\r
</div><!-- /main -->\r
\r
\r
<!-- ══ MODALS ══ -->\r
\r
<!-- 新增排床（從空床觸發） -->\r
<div id="modal-add-bed" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header"><div class="modal-title">＋ 新增排床</div><button class="modal-close" onclick="closeModal('modal-add-bed')">✕</button></div>\r
    <div class="modal-body">\r
      <div class="info-box">已選擇床位：<strong>302-B（3F）</strong> · 狀態：可使用</div>\r
      <div class="form-grid">\r
        <div class="form-group full">\r
          <label>選擇個案 <span class="required">*</span></label>\r
          <select class="form-control">\r
            <option>請選擇待排床個案</option>\r
            <option>陳志明（CVA・待排床）</option>\r
            <option>黃建國（脊髓損傷・待排床）</option>\r
            <option>蔡美玲（帕金森氏症・待排床）</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>預計入院日期 <span class="required">*</span></label>\r
          <input class="form-control" type="date" value="2026-06-27">\r
        </div>\r
        <div class="form-group">\r
          <label>預計出院日期</label>\r
          <input class="form-control" type="date">\r
        </div>\r
        <div class="form-group full">\r
          <label>交接備註</label>\r
          <textarea class="form-control" placeholder="填寫入住注意事項或交接內容…"></textarea>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-add-bed')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-add-bed')">確認排床</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 新增排床（從個案觸發）-->\r
<div id="modal-add-from-case" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header"><div class="modal-title">＋ 安排床位</div><button class="modal-close" onclick="closeModal('modal-add-from-case')">✕</button></div>\r
    <div class="modal-body">\r
      <div class="info-box">個案：<strong>陳志明</strong>（CVA・男・68歲）・預計入院 06/27</div>\r
      <div class="form-group" style="margin-bottom:13px">\r
        <label>選擇樓層</label>\r
        <div class="floor-tabs" style="margin-bottom:0;margin-top:6px">\r
          <div class="floor-tab active">3F</div>\r
          <div class="floor-tab">4F</div>\r
          <div class="floor-tab">5F</div>\r
          <div class="floor-tab">6F</div>\r
        </div>\r
      </div>\r
      <div class="form-group" style="margin-bottom:13px">\r
        <label>選擇床位（綠色為可使用）</label>\r
        <div class="bed-picker">\r
          <div class="bed-pick-cell taken">301-A</div>\r
          <div class="bed-pick-cell taken">301-B</div>\r
          <div class="bed-pick-cell taken">302-A</div>\r
          <div class="bed-pick-cell available selected">302-B</div>\r
          <div class="bed-pick-cell taken">303-A</div>\r
          <div class="bed-pick-cell taken">303-B</div>\r
          <div class="bed-pick-cell available">304-A</div>\r
          <div class="bed-pick-cell taken">304-B</div>\r
          <div class="bed-pick-cell taken">305-A</div>\r
          <div class="bed-pick-cell taken">305-B</div>\r
        </div>\r
      </div>\r
      <div class="form-grid">\r
        <div class="form-group">\r
          <label>預計入院日期 <span class="required">*</span></label>\r
          <input class="form-control" type="date" value="2026-06-27">\r
        </div>\r
        <div class="form-group">\r
          <label>預計出院日期</label>\r
          <input class="form-control" type="date">\r
        </div>\r
        <div class="form-group full">\r
          <label>交接備註</label>\r
          <textarea class="form-control" placeholder="填寫入住注意事項或交接內容…"></textarea>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-add-from-case')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-add-from-case')">確認排床：302-B</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 床位詳情（PAC） -->\r
<div id="modal-bed-detail-pac" class="modal-overlay hidden">\r
  <div class="modal modal-lg">\r
    <div class="modal-header">\r
      <div>\r
        <div class="modal-title">301-A・李文雄</div>\r
        <div style="font-size:12px;color:var(--gray-500);margin-top:2px">3F・<span class="type-tag type-pac">PAC</span>&nbsp;CVA（腦中風）・男・75歲</div>\r
      </div>\r
      <button class="modal-close" onclick="closeModal('modal-bed-detail-pac')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:13px;margin-bottom:14px">\r
        <div>\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">入院日期</div>\r
          <div style="font-size:13px;font-weight:600">2026/06/10</div>\r
        </div>\r
        <div>\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">預計出院</div>\r
          <div style="font-size:13px;font-weight:600">2026/07/05</div>\r
        </div>\r
        <div>\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">展延狀態</div>\r
          <div><span class="badge badge-amber">展延申請中</span></div>\r
        </div>\r
        <div>\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">主治醫師</div>\r
          <div style="font-size:13px;font-weight:600">王主任（神經內科）</div>\r
        </div>\r
        <div>\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">負責個管師</div>\r
          <div style="font-size:13px;font-weight:600">林美惠</div>\r
        </div>\r
        <div>\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">照護天數</div>\r
          <div style="font-size:13px;font-weight:600">第 13 天</div>\r
        </div>\r
      </div>\r
      <div class="divider"></div>\r
      <div class="form-group">\r
        <label>交接備註</label>\r
        <textarea class="form-control" style="min-height:80px">展延申請中，預計健保署本週回覆。若展延失敗需在 06/28 前安排出院。</textarea>\r
      </div>\r
      <div class="warn-box">⚠️ 展延申請中：若展延未通過，此床位需在預計出院日（07/05）前釋出。</div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-danger btn-sm" onclick="closeModal('modal-bed-detail-pac')">釋出床位</button>\r
      <button class="btn btn-secondary" onclick="closeModal('modal-bed-detail-pac')">關閉</button>\r
      <button class="btn btn-ghost" onclick="closeModal('modal-bed-detail-pac');openModal('modal-edit-bed')">編輯排床</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 床位詳情（一般/安寧，唯讀） -->\r
<div id="modal-bed-detail-general" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div>\r
        <div class="modal-title">302-A・黃○○</div>\r
        <div style="font-size:12px;color:var(--gray-500);margin-top:2px">3F・<span class="type-tag type-general">一般</span>&nbsp;術後照護・男・58歲</div>\r
      </div>\r
      <button class="modal-close" onclick="closeModal('modal-bed-detail-general')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-box">ℹ️ 此為一般住院個案，由護理師管理。個管師僅可檢視，無法編輯。</div>\r
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:13px">\r
        <div>\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">入院日期</div>\r
          <div style="font-size:13px;font-weight:600">2026/06/20</div>\r
        </div>\r
        <div>\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">預計出院</div>\r
          <div style="font-size:13px;font-weight:600">2026/06/26</div>\r
        </div>\r
        <div>\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">主治醫師</div>\r
          <div style="font-size:13px;font-weight:600">張醫師（骨科）</div>\r
        </div>\r
        <div>\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">診斷</div>\r
          <div style="font-size:13px;font-weight:600">術後照護</div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-bed-detail-general')">關閉</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 床位詳情（已預約） -->\r
<div id="modal-bed-detail-reserved" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div>\r
        <div class="modal-title">303-B・陳志明（已預約）</div>\r
        <div style="font-size:12px;color:var(--gray-500);margin-top:2px">3F・<span class="type-tag type-pac">PAC</span>&nbsp;CVA（腦中風）・男・68歲</div>\r
      </div>\r
      <button class="modal-close" onclick="closeModal('modal-bed-detail-reserved')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="warn-box" style="margin-bottom:14px;margin-top:0">⚠️ 已預約但尚未入院。若個案取消，請及時釋出床位。</div>\r
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:13px">\r
        <div>\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">預計入院</div>\r
          <div style="font-size:13px;font-weight:600;color:var(--blue)">2026/06/27</div>\r
        </div>\r
        <div>\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">負責個管師</div>\r
          <div style="font-size:13px;font-weight:600">林美惠</div>\r
        </div>\r
      </div>\r
      <div class="form-group mt-10">\r
        <label>交接備註</label>\r
        <textarea class="form-control" placeholder="填寫注意事項…"></textarea>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-danger btn-sm" onclick="closeModal('modal-bed-detail-reserved')">取消預約・釋出床位</button>\r
      <button class="btn btn-secondary" onclick="closeModal('modal-bed-detail-reserved')">關閉</button>\r
      <button class="btn btn-ghost" onclick="closeModal('modal-bed-detail-reserved');openModal('modal-edit-bed')">編輯</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 編輯排床 -->\r
<div id="modal-edit-bed" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header"><div class="modal-title">✏️ 編輯排床</div><button class="modal-close" onclick="closeModal('modal-edit-bed')">✕</button></div>\r
    <div class="modal-body">\r
      <div class="info-box">床位：<strong>301-A（3F）</strong>・個案：<strong>李文雄</strong></div>\r
      <div class="form-grid">\r
        <div class="form-group">\r
          <label>預計入院日期</label>\r
          <input class="form-control" type="date" value="2026-06-10">\r
        </div>\r
        <div class="form-group">\r
          <label>預計出院日期</label>\r
          <input class="form-control" type="date" value="2026-07-05">\r
        </div>\r
        <div class="form-group full">\r
          <label>更換床位</label>\r
          <select class="form-control"><option>維持原床位（301-A）</option><option>302-B（3F・可使用）</option><option>304-A（3F・可使用）</option></select>\r
        </div>\r
        <div class="form-group full">\r
          <label>交接備註</label>\r
          <textarea class="form-control">展延申請中，預計健保署本週回覆。若展延失敗需在 06/28 前安排出院。</textarea>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-danger btn-sm" onclick="closeModal('modal-edit-bed')">釋出床位</button>\r
      <button class="btn btn-secondary" onclick="closeModal('modal-edit-bed')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-edit-bed')">儲存變更</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<script>\r
function switchMainTab(el, tab) {\r
  document.querySelectorAll('.tabs .tab').forEach(t => t.classList.remove('active'));\r
  el.classList.add('active');\r
  document.getElementById('tab-bed-overview').classList.add('hidden');\r
  document.getElementById('tab-case-list').classList.add('hidden');\r
  document.getElementById('tab-' + tab).classList.remove('hidden');\r
}\r
\r
function switchFloor(el, floor) {\r
  document.querySelectorAll('.floor-tab').forEach(t => t.classList.remove('active'));\r
  el.classList.add('active');\r
  ['3f','4f','5f','6f'].forEach(f => {\r
    const el = document.getElementById('floor-' + f);\r
    if (el) el.classList.add('hidden');\r
  });\r
  document.getElementById('floor-' + floor).classList.remove('hidden');\r
}\r
\r
function switchView(view) {\r
  document.getElementById('view-grid').classList.toggle('hidden', view !== 'grid');\r
  document.getElementById('view-list').classList.toggle('hidden', view !== 'list');\r
  document.getElementById('vbtn-grid').classList.toggle('active', view === 'grid');\r
  document.getElementById('vbtn-list').classList.toggle('active', view === 'list');\r
}\r
\r
function toggleExpand(id) {\r
  const row = document.getElementById(id);\r
  const btnId = 'expbtn' + id.replace('exp','');\r
  const btn = document.getElementById(btnId);\r
  const isHidden = row.classList.contains('hidden');\r
  row.classList.toggle('hidden', !isHidden);\r
  if (btn) btn.textContent = isHidden ? '▼' : '▶';\r
}\r
\r
function openModal(id) { document.getElementById(id).classList.remove('hidden'); }\r
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }\r
\r
document.querySelectorAll('.modal-overlay').forEach(o => {\r
  o.addEventListener('click', function(e) { if (e.target === this) this.classList.add('hidden'); });\r
});\r
<\/script>\r
</body>\r
</html>`,cg=`<!DOCTYPE html>\r
<html lang="zh-TW">\r
<head>\r
<meta charset="UTF-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1.0">\r
<title>PAC 復健排班</title>\r
<style>\r
*{box-sizing:border-box;margin:0;padding:0}\r
:root{\r
  --blue:#2563EB;--blue-light:#EFF6FF;--blue-mid:#BFDBFE;--blue-dark:#1E40AF;\r
  --gray-50:#F8FAFC;--gray-100:#F1F5F9;--gray-200:#E2E8F0;--gray-300:#CBD5E1;\r
  --gray-400:#94A3B8;--gray-500:#64748B;--gray-600:#475569;--gray-700:#334155;--gray-900:#0F172A;\r
  --green:#16A34A;--green-light:#DCFCE7;--green-mid:#BBF7D0;\r
  --amber:#D97706;--amber-light:#FEF3C7;\r
  --red:#DC2626;--red-light:#FEE2E2;\r
  --purple:#7C3AED;--purple-light:#EDE9FE;\r
  --teal:#0D9488;--teal-light:#CCFBF1;\r
  --white:#FFFFFF;\r
  --pac-inpatient:#2563EB;--pac-inpatient-bg:#EFF6FF;\r
  --nonpac-inpatient:#64748B;--nonpac-inpatient-bg:#F1F5F9;\r
  --pac-home:#16A34A;--pac-home-bg:#DCFCE7;\r
  --nonpac-home:#0D9488;--nonpac-home-bg:#CCFBF1;\r
}\r
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans TC',sans-serif;background:var(--gray-50);color:var(--gray-900);height:100vh;display:flex;overflow:hidden;font-size:14px}\r
\r
/* Sidebar */\r
.sidebar{width:192px;min-width:192px;background:var(--white);border-right:1px solid var(--gray-200);display:flex;flex-direction:column}\r
.sidebar-logo{padding:16px 16px 13px;border-bottom:1px solid var(--gray-200)}\r
.logo-text{font-size:14px;font-weight:700;color:var(--blue)}\r
.logo-sub{font-size:11px;color:var(--gray-400);margin-top:2px}\r
.sidebar-nav{padding:6px 0;flex:1}\r
.nav-item{display:flex;align-items:center;gap:8px;padding:9px 14px;font-size:13px;color:var(--gray-500);border-left:3px solid transparent;cursor:default}\r
.nav-item.active{background:var(--blue-light);color:var(--blue);font-weight:600;border-left-color:var(--blue)}\r
.nav-item.disabled{opacity:.38;cursor:not-allowed}\r
.sidebar-user{margin-top: auto;padding:11px 14px;border-top:1px solid var(--gray-200)}\r
.user-row{display:flex;align-items:center;gap:8px;margin-bottom:8px}\r
.user-avatar{width:28px;height:28px;border-radius:50%;background:var(--purple-light);color:var(--purple);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700}\r
.user-avatar.manager{background:var(--amber-light);color:var(--amber)}\r
.user-name{font-size:12px;font-weight:600;color:var(--gray-700)}\r
.user-role{font-size:11px;color:var(--gray-400)}\r
.role-switcher{display:flex;border:1px solid var(--gray-200);border-radius:6px;overflow:hidden;width:100%}\r
.role-btn{flex:1;padding:4px 0;font-size:10px;font-weight:600;cursor:pointer;border:none;background:var(--white);color:var(--gray-400);text-align:center;transition:all .15s}\r
.role-btn.active{background:var(--blue);color:var(--white)}\r
\r
/* Main */\r
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}\r
.topbar{background:var(--white);border-bottom:1px solid var(--gray-200);padding:0 20px;height:48px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.breadcrumb{font-size:12px;color:var(--gray-500)}\r
.topbar-right{display:flex;align-items:center;gap:10px}\r
.content{flex:1;overflow-y:auto;padding:20px}\r
\r
/* Buttons */\r
.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .15s;white-space:nowrap}\r
.btn-primary{background:var(--blue);color:var(--white)}.btn-primary:hover{background:var(--blue-dark)}\r
.btn-secondary{background:var(--white);color:var(--gray-700);border:1px solid var(--gray-300)}.btn-secondary:hover{background:var(--gray-50)}\r
.btn-ghost{background:transparent;color:var(--blue);border:1px solid var(--blue-mid)}.btn-ghost:hover{background:var(--blue-light)}\r
.btn-green{background:var(--white);color:var(--green);border:1px solid var(--green-mid)}.btn-green:hover{background:var(--green-light)}\r
.btn-danger{background:var(--white);color:var(--red);border:1px solid #FECACA}.btn-danger:hover{background:var(--red-light)}\r
.btn-sm{padding:5px 10px;font-size:12px}.btn-xs{padding:3px 8px;font-size:11px}\r
\r
/* Badge */\r
.badge{display:inline-flex;align-items:center;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:600}\r
.badge-blue{background:var(--blue-light);color:var(--blue)}\r
.badge-green{background:var(--green-light);color:var(--green)}\r
.badge-amber{background:var(--amber-light);color:var(--amber)}\r
.badge-gray{background:var(--gray-100);color:var(--gray-500)}\r
.badge-red{background:var(--red-light);color:var(--red)}\r
.badge-purple{background:var(--purple-light);color:var(--purple)}\r
\r
/* Notification badge */\r
.notif-badge{position:relative;display:inline-flex}\r
.notif-dot{position:absolute;top:-4px;right:-4px;width:16px;height:16px;border-radius:50%;background:var(--red);color:var(--white);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center}\r
\r
/* View controls */\r
.view-bar{display:flex;align-items:center;gap:10px;margin-bottom:16px;flex-wrap:wrap;justify-content:space-between}\r
.view-bar-left{display:flex;align-items:center;gap:8px;flex-wrap:wrap}\r
.view-bar-right{display:flex;align-items:center;gap:8px}\r
.view-toggle{display:flex;border:1px solid var(--gray-200);border-radius:6px;overflow:hidden}\r
.view-btn{padding:5px 12px;font-size:12px;cursor:pointer;background:var(--white);color:var(--gray-500);border:none;font-weight:500}\r
.view-btn.active{background:var(--blue);color:var(--white)}\r
.filter-tabs{display:flex;gap:4px}\r
.filter-tab{padding:5px 12px;font-size:12px;font-weight:500;color:var(--gray-500);cursor:pointer;border-radius:6px;border:1px solid var(--gray-200);background:var(--white);transition:all .15s}\r
.filter-tab.active{background:var(--blue);color:var(--white);border-color:var(--blue)}\r
.nav-month{display:flex;align-items:center;gap:6px}\r
.nav-month span{font-size:14px;font-weight:600;color:var(--gray-700);min-width:90px;text-align:center}\r
.nav-arrow{width:26px;height:26px;border-radius:5px;border:1px solid var(--gray-200);background:var(--white);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--gray-500)}\r
.nav-arrow:hover{background:var(--gray-50)}\r
select.filter-control{padding:5px 10px;border:1px solid var(--gray-300);border-radius:6px;font-size:12px;color:var(--gray-700);background:var(--white);outline:none;cursor:pointer}\r
\r
/* Legend */\r
.legend{display:flex;gap:12px;margin-bottom:14px;flex-wrap:wrap;align-items:center}\r
.legend-item{display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)}\r
.legend-dot{width:10px;height:10px;border-radius:3px;flex-shrink:0}\r
\r
/* ── Month Calendar ── */\r
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:1px;background:var(--gray-200);border:1px solid var(--gray-200);border-radius:10px;overflow:hidden}\r
.cal-header{background:var(--gray-50);padding:8px 6px;text-align:center;font-size:11px;font-weight:600;color:var(--gray-500)}\r
.cal-cell{background:var(--white);min-height:110px;padding:6px;position:relative;vertical-align:top}\r
.cal-cell.other-month{background:var(--gray-50)}\r
.cal-cell.today{background:#FFFBEB}\r
.cal-cell.holiday{background:#FFF7ED}\r
.cal-date{font-size:12px;font-weight:600;color:var(--gray-600);margin-bottom:4px;display:flex;align-items:center;gap:4px}\r
.cal-date.today-num{width:22px;height:22px;background:var(--blue);color:var(--white);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px}\r
.holiday-label{font-size:9px;color:var(--amber);font-weight:600}\r
.cal-event{border-radius:4px;padding:2px 5px;margin-bottom:2px;font-size:10px;line-height:1.4;cursor:pointer;transition:opacity .15s}\r
.cal-event:hover{opacity:.8}\r
.cal-event.pac-in{background:var(--pac-inpatient-bg);color:var(--pac-inpatient);border-left:3px solid var(--pac-inpatient)}\r
.cal-event.nonpac-in{background:var(--nonpac-inpatient-bg);color:var(--nonpac-inpatient);border-left:3px solid var(--nonpac-inpatient)}\r
.cal-event.pac-home{background:var(--pac-home-bg);color:var(--pac-home);border-left:3px solid var(--pac-home)}\r
.cal-event.nonpac-home{background:var(--nonpac-home-bg);color:var(--nonpac-home);border-left:3px solid var(--nonpac-home)}\r
.cal-event.open{background:var(--amber-light);color:var(--amber);border-left:3px solid var(--amber)}\r
.more-tag{font-size:10px;color:var(--gray-400);cursor:pointer;padding:1px 4px}\r
.more-tag:hover{color:var(--blue)}\r
\r
/* ── Week Calendar (matrix for manager) ── */\r
.week-matrix{width:100%;border-collapse:collapse;background:var(--white);border:1px solid var(--gray-200);border-radius:10px;overflow:hidden;font-size:12px}\r
.week-matrix th{padding:8px 10px;background:var(--gray-50);border-bottom:1px solid var(--gray-200);border-right:1px solid var(--gray-100);font-size:11px;font-weight:600;color:var(--gray-600);white-space:nowrap}\r
.week-matrix td{padding:4px 6px;border-bottom:1px solid var(--gray-100);border-right:1px solid var(--gray-100);vertical-align:top;min-width:100px;min-height:40px}\r
.week-matrix .time-col{background:var(--gray-50);font-size:11px;font-weight:600;color:var(--gray-500);width:60px;text-align:right;padding-right:8px}\r
.week-matrix .therapist-header{text-align:center}\r
.therapist-tag{display:inline-block;padding:1px 5px;border-radius:4px;font-size:10px;font-weight:700;margin-bottom:2px}\r
.therapist-pt{background:#DBEAFE;color:#1D4ED8}\r
.therapist-ot{background:#FCE7F3;color:#9D174D}\r
.therapist-st{background:#D1FAE5;color:#065F46}\r
.week-event{border-radius:4px;padding:2px 5px;margin-bottom:2px;font-size:10px;cursor:pointer;line-height:1.4}\r
.week-event.pac-in{background:var(--pac-inpatient-bg);color:var(--pac-inpatient)}\r
.week-event.nonpac-in{background:var(--nonpac-inpatient-bg);color:var(--nonpac-inpatient)}\r
.week-event.pac-home{background:var(--pac-home-bg);color:var(--pac-home)}\r
.pac-tag{font-size:9px;font-weight:700;color:var(--blue);margin-left:2px}\r
\r
/* ── Side drawer ── */\r
.drawer-overlay{position:fixed;inset:0;background:rgba(15,23,42,.3);z-index:80;backdrop-filter:blur(1px)}\r
.drawer{position:fixed;right:0;top:0;bottom:0;width:380px;background:var(--white);box-shadow:-4px 0 24px rgba(0,0,0,.12);z-index:90;display:flex;flex-direction:column;transition:transform .25s}\r
.drawer-header{padding:16px 20px 13px;border-bottom:1px solid var(--gray-200);display:flex;align-items:flex-start;justify-content:space-between;flex-shrink:0}\r
.drawer-title{font-size:15px;font-weight:700}\r
.drawer-close{width:25px;height:25px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}\r
.drawer-close:hover{background:var(--gray-200)}\r
.drawer-body{padding:16px 20px;overflow-y:auto;flex:1}\r
.drawer-section{margin-bottom:16px}\r
.drawer-section-title{font-size:11px;font-weight:600;color:var(--gray-400);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px}\r
.drawer-info-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}\r
.drawer-field label{font-size:10px;color:var(--gray-400);display:block;margin-bottom:2px;text-transform:uppercase;letter-spacing:.04em}\r
.drawer-field span{font-size:13px;color:var(--gray-800);font-weight:500}\r
.divider{height:1px;background:var(--gray-100);margin:13px 0}\r
.summary-box{background:var(--gray-50);border:1px solid var(--gray-200);border-radius:7px;padding:12px;font-size:12px;line-height:1.8;color:var(--gray-700)}\r
\r
/* ── Modal ── */\r
.modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);display:flex;align-items:center;justify-content:center;z-index:100;backdrop-filter:blur(2px)}\r
.modal{background:var(--white);border-radius:12px;width:520px;max-width:92vw;max-height:90vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.15)}\r
.modal-lg{width:640px}\r
.modal-header{padding:16px 20px 13px;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.modal-title{font-size:15px;font-weight:700}\r
.modal-close{width:25px;height:25px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}\r
.modal-close:hover{background:var(--gray-200)}\r
.modal-body{padding:16px 20px;overflow-y:auto;flex:1}\r
.modal-footer{padding:13px 20px;border-top:1px solid var(--gray-200);display:flex;justify-content:flex-end;gap:7px;flex-shrink:0}\r
\r
/* Form */\r
.form-group{display:flex;flex-direction:column;gap:5px;margin-bottom:12px}\r
.form-group label{font-size:12px;font-weight:500;color:var(--gray-600)}\r
.form-control{padding:7px 10px;border:1px solid var(--gray-300);border-radius:6px;font-size:13px;color:var(--gray-800);background:var(--white);outline:none}\r
.form-control:focus{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}\r
select.form-control{cursor:pointer}\r
textarea.form-control{resize:vertical;min-height:70px}\r
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r
.required{color:var(--red);margin-left:2px}\r
\r
/* Approval list */\r
.approval-list{display:flex;flex-direction:column;gap:8px}\r
.approval-item{border:1px solid var(--gray-200);border-radius:8px;padding:13px 15px}\r
.approval-item-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px}\r
.approval-name{font-size:13px;font-weight:600;color:var(--gray-900)}\r
.approval-meta{font-size:11px;color:var(--gray-400);margin-top:2px}\r
.approval-reason{font-size:12px;color:var(--gray-600);background:var(--gray-50);padding:8px 10px;border-radius:5px;margin-bottom:10px}\r
.approval-actions{display:flex;gap:7px;justify-content:flex-end}\r
\r
/* Registration quota */\r
.quota-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--gray-100)}\r
.quota-row:last-child{border-bottom:none}\r
.quota-label{font-size:12px;color:var(--gray-700);min-width:30px}\r
.quota-bar{flex:1;height:8px;background:var(--gray-100);border-radius:999px;overflow:hidden}\r
.quota-fill{height:100%;border-radius:999px}\r
.quota-fill.pt{background:var(--blue)}\r
.quota-fill.ot{background:var(--purple)}\r
.quota-fill.st{background:var(--green)}\r
.quota-count{font-size:11px;color:var(--gray-500);min-width:40px;text-align:right}\r
\r
/* Info note */\r
.info-note{font-size:12px;padding:10px 12px;border-radius:6px;margin-bottom:12px}\r
.info-note.blue{background:var(--blue-light);color:var(--blue-dark)}\r
.info-note.amber{background:var(--amber-light);color:var(--amber)}\r
.info-note.green{background:var(--green-light);color:var(--green)}\r
\r
/* Time slot selector */\r
.time-slot-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:6px}\r
.time-slot{padding:6px;border:1px solid var(--gray-200);border-radius:5px;font-size:11px;text-align:center;cursor:pointer;color:var(--gray-600)}\r
.time-slot:hover{border-color:var(--blue);color:var(--blue)}\r
.time-slot.selected{background:var(--blue);border-color:var(--blue);color:var(--white)}\r
.time-slot.taken{background:var(--gray-100);color:var(--gray-400);cursor:not-allowed}\r
\r
.hidden{display:none!important}\r
</style>\r
</head>\r
<body>\r
\r
<!-- SIDEBAR -->\r
<aside class="sidebar">\r
<!--\r
  <div class="sidebar-logo">\r
    <div class="logo-text">PAC 管理系統</div>\r
    <div class="logo-sub">急性後期照護</div>\r
  </div>\r
  <nav class="sidebar-nav">\r
    <div class="nav-item disabled">🏠 個人儀表板</div>\r
    <div class="nav-item disabled">📋 個案管理</div>\r
    <div class="nav-item disabled">🛏 病床管理</div>\r
    <div class="nav-item active">📅 班表總覽頁</div>\r
    <div class="nav-item disabled">🏡 居家排班管理</div>\r
    <div class="nav-item disabled">📊 評估量表</div>\r
    <div class="nav-item disabled">💪 復健紀錄</div>\r
    <div class="nav-item disabled">📤 指標匯出</div>\r
  </nav>\r
-->\r
  <div class="sidebar-user">\r
    <div class="user-row">\r
      <div class="user-avatar manager" id="user-avatar">王</div>\r
      <div>\r
        <div class="user-name" id="user-name">王復健主管</div>\r
        <div class="user-role" id="user-role-label">復健主管</div>\r
      </div>\r
    </div>\r
    <div class="role-switcher">\r
      <button class="role-btn active" id="btn-manager" onclick="switchRole('manager')">復健主管</button>\r
      <button class="role-btn" id="btn-therapist" onclick="switchRole('therapist')">治療師</button>\r
    </div>\r
  </div>\r
</aside>\r
\r
<!-- MAIN -->\r
<div class="main">\r
  <div class="topbar">\r
    <div class="breadcrumb" id="bc">班表總覽頁</div>\r
    <div class="topbar-right">\r
      <span style="font-size:11px;color:var(--gray-400)">2026/06/23</span>\r
      <!-- 主管才看到待審核 badge -->\r
      <div id="approval-badge" class="notif-badge">\r
        <button class="btn btn-secondary btn-sm" onclick="openModal('modal-approval')">換班審核</button>\r
        <span class="notif-dot">2</span>\r
      </div>\r
      <!-- 主管才看到新增班表 -->\r
      <button id="btn-add-schedule" class="btn btn-primary btn-sm" onclick="openModal('modal-add-schedule')">＋ 新增班表</button>\r
    </div>\r
  </div>\r
  <div class="content">\r
\r
    <!-- 視圖控制列 -->\r
    <div class="view-bar">\r
      <div class="view-bar-left">\r
        <div class="view-toggle">\r
          <button class="view-btn active" onclick="switchView(this,'month')">月曆</button>\r
          <button class="view-btn" onclick="switchView(this,'week')">週次</button>\r
        </div>\r
        <div class="nav-month">\r
          <button class="nav-arrow">◀</button>\r
          <span>2026年 6月</span>\r
          <button class="nav-arrow">▶</button>\r
        </div>\r
        <button class="btn btn-secondary btn-sm">今日</button>\r
        <div class="filter-tabs">\r
          <div class="filter-tab active" onclick="switchFilter(this)">全部</div>\r
          <div class="filter-tab" onclick="switchFilter(this)">院內</div>\r
          <div class="filter-tab" onclick="switchFilter(this)">居家</div>\r
          <div class="filter-tab" onclick="switchFilter(this,'open')">可報名 <span class="badge badge-amber" style="margin-left:3px">3</span></div>\r
        </div>\r
      </div>\r
      <div class="view-bar-right">\r
        <!-- 主管可選治療師，治療師固定看自己 -->\r
        <select class="filter-control" id="therapist-filter">\r
          <option>全部治療師</option>\r
          <option>黃志豪（PT）</option>\r
          <option>陳建宏（PT）</option>\r
          <option>李佳穎（OT）</option>\r
          <option>張雅玲（OT）</option>\r
          <option>吳怡君（ST）</option>\r
        </select>\r
      </div>\r
    </div>\r
\r
    <!-- 圖例 -->\r
    <div class="legend">\r
      <div class="legend-item"><div class="legend-dot" style="background:var(--pac-inpatient)"></div>PAC 院內</div>\r
      <div class="legend-item"><div class="legend-dot" style="background:var(--nonpac-inpatient)"></div>非PAC 院內</div>\r
      <div class="legend-item"><div class="legend-dot" style="background:var(--pac-home)"></div>PAC 居家</div>\r
      <div class="legend-item"><div class="legend-dot" style="background:var(--nonpac-home)"></div>非PAC 居家</div>\r
      <div class="legend-item"><div class="legend-dot" style="background:var(--amber)"></div>可報名居家</div>\r
      <div class="legend-item"><div class="legend-dot" style="background:#FDE68A"></div>假日</div>\r
    </div>\r
\r
    <!-- ══ 月曆視圖 ══ -->\r
    <div id="view-month">\r
      <div class="cal-grid">\r
        <!-- 星期標題 -->\r
        <div class="cal-header">日</div>\r
        <div class="cal-header">一</div>\r
        <div class="cal-header">二</div>\r
        <div class="cal-header">三</div>\r
        <div class="cal-header">四</div>\r
        <div class="cal-header">五</div>\r
        <div class="cal-header">六</div>\r
\r
        <!-- 第一週 -->\r
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">1</div></div>\r
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">2</div></div>\r
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">3</div></div>\r
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">4</div></div>\r
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">5</div></div>\r
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">6</div></div>\r
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">7</div></div>\r
\r
        <!-- 第二週 6/1~6/7 -->\r
        <div class="cal-cell holiday">\r
          <div class="cal-date">1 <span class="holiday-label">端午節</span></div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">2</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 李文雄 08:00</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">李佳穎(OT) 鄭大偉 09:30</div>\r
          <div class="cal-event nonpac-in" onclick="openDrawer('inpatient')">陳建宏(PT) 王○○ 10:00</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">3</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 吳麗珠 08:30</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">李佳穎(OT) 李文雄 14:00</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">陳建宏(PT) 黃建國 17:30 🏡</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">4</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 鄭大偉 09:00</div>\r
          <div class="cal-event nonpac-in" onclick="openDrawer('inpatient')">張雅玲(OT) 蔡○○ 10:30</div>\r
          <div class="more-tag" onclick="openDrawer('inpatient')">＋2 更多</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">5</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">吳怡君(ST) 李文雄 09:00</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 陳志明 10:00</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">張雅玲(OT) 王淑芬 午休 🏡</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">6</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">李佳穎(OT) 吳麗珠 08:00</div>\r
          <div class="cal-event nonpac-in" onclick="openDrawer('inpatient')">陳建宏(PT) 黃○○ 09:30</div>\r
          <div class="cal-event open" onclick="openModal('modal-register')">🏡 黃建國 可報名居家</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">7</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">黃志豪(PT) 李文雄 下班後 🏡</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">陳建宏(PT) 黃建國 下班後 🏡</div>\r
        </div>\r
\r
        <!-- 第三週 6/8~6/14 -->\r
        <div class="cal-cell">\r
          <div class="cal-date">8</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 李文雄 08:00</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">李佳穎(OT) 鄭大偉 09:00</div>\r
          <div class="cal-event open" onclick="openModal('modal-register')">🏡 王淑芬 可報名居家</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">9</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 吳麗珠 08:30</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">張雅玲(OT) 李文雄 14:00</div>\r
          <div class="more-tag" onclick="openDrawer('inpatient')">＋3 更多</div>\r
        </div>\r
        <div class="cal-cell today">\r
          <div class="cal-date"><span class="cal-date today-num">10</span></div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 鄭大偉 09:00</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">李佳穎(OT) 陳志明 10:00</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">張雅玲(OT) 王淑芬 午休 🏡</div>\r
          <div class="more-tag">＋2 更多</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">11</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">吳怡君(ST) 李文雄 09:00</div>\r
          <div class="cal-event nonpac-in" onclick="openDrawer('inpatient')">陳建宏(PT) 蔡○○ 10:30</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">12</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 李文雄 08:00</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">李佳穎(OT) 吳麗珠 09:30</div>\r
          <div class="more-tag">＋2 更多</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">13</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">黃志豪(PT) 黃建國 下班後 🏡</div>\r
          <div class="cal-event open" onclick="openModal('modal-register')">🏡 陳志明 可報名居家</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">14</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">陳建宏(PT) 黃建國 下班後 🏡</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">張雅玲(OT) 王淑芬 下班後 🏡</div>\r
        </div>\r
\r
        <!-- 第四週 6/15~6/21 -->\r
        <div class="cal-cell">\r
          <div class="cal-date">15</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 鄭大偉 08:00</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">李佳穎(OT) 李文雄 09:30</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">16</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 陳志明 08:00</div>\r
          <div class="cal-event nonpac-in" onclick="openDrawer('inpatient')">張雅玲(OT) 黃○○ 10:00</div>\r
          <div class="more-tag">＋1 更多</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">17</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">吳怡君(ST) 吳麗珠 09:00</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 李文雄 10:00</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">18</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">李佳穎(OT) 鄭大偉 09:00</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">陳建宏(PT) 陳志明 10:30</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">張雅玲(OT) 王淑芬 午休 🏡</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">19</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 吳麗珠 08:00</div>\r
          <div class="more-tag">＋3 更多</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">20</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">黃志豪(PT) 黃建國 下班後 🏡</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">陳建宏(PT) 黃建國 下班後 🏡</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">21</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">張雅玲(OT) 王淑芬 下班後 🏡</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">李佳穎(OT) 黃建國 下班後 🏡</div>\r
        </div>\r
\r
        <!-- 第五週 6/22~6/28 -->\r
        <div class="cal-cell">\r
          <div class="cal-date">22</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 李文雄 08:00</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">李佳穎(OT) 吳麗珠 09:30</div>\r
        </div>\r
        <div class="cal-cell today" style="background:#EFF6FF">\r
          <div class="cal-date"><span class="cal-date today-num">23</span> <span style="font-size:10px;color:var(--blue)">今天</span></div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 鄭大偉 09:00</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">李佳穎(OT) 陳志明 10:00</div>\r
          <div class="cal-event nonpac-in" onclick="openDrawer('inpatient')">陳建宏(PT) 蔡○○ 10:30</div>\r
          <div class="more-tag">＋3 更多</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">24</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">吳怡君(ST) 李文雄 09:00</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 吳麗珠 10:00</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">25</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">李佳穎(OT) 李文雄 08:00</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">陳建宏(PT) 鄭大偉 09:30</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">26</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 陳志明 08:00</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">張雅玲(OT) 王淑芬 午休 🏡</div>\r
          <div class="more-tag">＋2 更多</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">27</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">黃志豪(PT) 黃建國 下班後 🏡</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">陳建宏(PT) 黃建國 下班後 🏡</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">28</div>\r
          <div class="cal-event pac-home" onclick="openDrawer('home')">張雅玲(OT) 王淑芬 下班後 🏡</div>\r
        </div>\r
\r
        <!-- 第六週 6/29~6/30 + 下月 -->\r
        <div class="cal-cell">\r
          <div class="cal-date">29</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 李文雄 08:00</div>\r
        </div>\r
        <div class="cal-cell">\r
          <div class="cal-date">30</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">李佳穎(OT) 鄭大偉 09:00</div>\r
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">吳怡君(ST) 吳麗珠 10:00</div>\r
        </div>\r
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">1</div></div>\r
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">2</div></div>\r
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">3</div></div>\r
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">4</div></div>\r
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">5</div></div>\r
      </div>\r
    </div><!-- /view-month -->\r
\r
    <!-- ══ 週次視圖（主管白板式矩陣）══ -->\r
    <div id="view-week" class="hidden">\r
      <div style="font-size:12px;color:var(--gray-500);margin-bottom:10px">2026/06/23（一）～ 2026/06/29（日）</div>\r
      <div style="overflow-x:auto">\r
        <table class="week-matrix">\r
          <thead>\r
            <tr>\r
              <th class="time-col">時間</th>\r
              <th class="therapist-header">\r
                <span class="therapist-tag therapist-pt">PT</span><br>黃志豪\r
              </th>\r
              <th class="therapist-header">\r
                <span class="therapist-tag therapist-pt">PT</span><br>陳建宏\r
              </th>\r
              <th class="therapist-header">\r
                <span class="therapist-tag therapist-ot">OT</span><br>李佳穎\r
              </th>\r
              <th class="therapist-header">\r
                <span class="therapist-tag therapist-ot">OT</span><br>張雅玲\r
              </th>\r
              <th class="therapist-header">\r
                <span class="therapist-tag therapist-st">ST</span><br>吳怡君\r
              </th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td class="time-col">08:00</td>\r
              <td onclick="openDrawer('inpatient')"><div class="week-event pac-in">鄭大偉 <span class="pac-tag">P</span></div></td>\r
              <td><div class="week-event nonpac-in">蔡○○</div></td>\r
              <td onclick="openDrawer('inpatient')"><div class="week-event pac-in">陳志明 <span class="pac-tag">P</span></div></td>\r
              <td></td>\r
              <td></td>\r
            </tr>\r
            <tr>\r
              <td class="time-col">08:30</td>\r
              <td onclick="openDrawer('inpatient')"><div class="week-event pac-in">李文雄 <span class="pac-tag">P</span></div></td>\r
              <td></td>\r
              <td></td>\r
              <td onclick="openDrawer('inpatient')"><div class="week-event pac-in">吳麗珠 <span class="pac-tag">P</span></div></td>\r
              <td></td>\r
            </tr>\r
            <tr>\r
              <td class="time-col">09:00</td>\r
              <td></td>\r
              <td onclick="openDrawer('inpatient')"><div class="week-event pac-in">陳志明 <span class="pac-tag">P</span></div></td>\r
              <td onclick="openDrawer('inpatient')"><div class="week-event pac-in">鄭大偉 <span class="pac-tag">P</span></div></td>\r
              <td></td>\r
              <td onclick="openDrawer('inpatient')"><div class="week-event pac-in">李文雄 <span class="pac-tag">P</span></div></td>\r
            </tr>\r
            <tr>\r
              <td class="time-col">09:30</td>\r
              <td></td>\r
              <td></td>\r
              <td></td>\r
              <td onclick="openDrawer('inpatient')"><div class="week-event pac-in">王淑芬 <span class="pac-tag">P</span></div></td>\r
              <td></td>\r
            </tr>\r
            <tr>\r
              <td class="time-col">10:00</td>\r
              <td onclick="openDrawer('inpatient')"><div class="week-event pac-in">吳麗珠 <span class="pac-tag">P</span></div></td>\r
              <td><div class="week-event nonpac-in">黃○○</div></td>\r
              <td onclick="openDrawer('inpatient')"><div class="week-event pac-in">陳志明 <span class="pac-tag">P</span></div></td>\r
              <td></td>\r
              <td></td>\r
            </tr>\r
            <tr>\r
              <td class="time-col">10:30</td>\r
              <td></td>\r
              <td></td>\r
              <td></td>\r
              <td onclick="openDrawer('inpatient')"><div class="week-event pac-in">李文雄 <span class="pac-tag">P</span></div></td>\r
              <td></td>\r
            </tr>\r
            <tr>\r
              <td class="time-col">14:00</td>\r
              <td onclick="openDrawer('inpatient')"><div class="week-event pac-in">鄭大偉 <span class="pac-tag">P</span></div></td>\r
              <td></td>\r
              <td onclick="openDrawer('inpatient')"><div class="week-event pac-in">李文雄 <span class="pac-tag">P</span></div></td>\r
              <td></td>\r
              <td></td>\r
            </tr>\r
            <tr>\r
              <td class="time-col">14:30</td>\r
              <td></td>\r
              <td onclick="openDrawer('inpatient')"><div class="week-event pac-in">吳麗珠 <span class="pac-tag">P</span></div></td>\r
              <td></td>\r
              <td></td>\r
              <td></td>\r
            </tr>\r
            <tr>\r
              <td class="time-col">15:00</td>\r
              <td></td>\r
              <td></td>\r
              <td onclick="openDrawer('inpatient')"><div class="week-event pac-in">鄭大偉 <span class="pac-tag">P</span></div></td>\r
              <td></td>\r
              <td></td>\r
            </tr>\r
            <tr>\r
              <td class="time-col" style="color:var(--green);font-weight:700">午休/下班</td>\r
              <td></td>\r
              <td></td>\r
              <td></td>\r
              <td onclick="openDrawer('home')" style="background:#F0FDF4"><div class="week-event pac-home">🏡 王淑芬居家</div></td>\r
              <td></td>\r
            </tr>\r
            <tr>\r
              <td class="time-col" style="color:var(--green);font-weight:700">下班後</td>\r
              <td onclick="openDrawer('home')" style="background:#F0FDF4"><div class="week-event pac-home">🏡 黃建國居家</div></td>\r
              <td onclick="openDrawer('home')" style="background:#F0FDF4"><div class="week-event pac-home">🏡 黃建國居家</div></td>\r
              <td></td>\r
              <td></td>\r
              <td></td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div><!-- /view-week -->\r
\r
  </div><!-- /content -->\r
</div><!-- /main -->\r
\r
\r
<!-- ══ SIDE DRAWER：院內個案 ══ -->\r
<div id="drawer-overlay-inpatient" class="drawer-overlay hidden" onclick="closeDrawer('inpatient')"></div>\r
<div id="drawer-inpatient" class="drawer hidden" style="transform:translateX(100%)">\r
  <div class="drawer-header">\r
    <div>\r
      <div class="drawer-title">鄭大偉・復健排班詳情</div>\r
      <div style="font-size:12px;color:var(--gray-500);margin-top:3px">2026/06/23 09:00・<span class="badge badge-blue" style="font-size:10px">PAC 院內</span></div>\r
    </div>\r
    <button class="drawer-close" onclick="closeDrawer('inpatient')">✕</button>\r
  </div>\r
  <div class="drawer-body">\r
    <div class="drawer-section">\r
      <div class="drawer-section-title">治療師資訊</div>\r
      <div class="drawer-info-grid">\r
        <div class="drawer-field"><label>治療師</label><span>黃志豪</span></div>\r
        <div class="drawer-field"><label>職類</label><span><span class="therapist-tag therapist-pt">PT</span> 物理治療師</span></div>\r
        <div class="drawer-field"><label>治療時段</label><span>09:00 – 09:50</span></div>\r
        <div class="drawer-field"><label>地點</label><span>復健治療室</span></div>\r
      </div>\r
    </div>\r
    <div class="divider"></div>\r
    <div class="drawer-section">\r
      <div class="drawer-section-title">個案資訊</div>\r
      <div class="drawer-info-grid" style="margin-bottom:10px">\r
        <div class="drawer-field"><label>姓名</label><span>鄭大偉</span></div>\r
        <div class="drawer-field"><label>年齡／性別</label><span>62歲 男</span></div>\r
        <div class="drawer-field"><label>疾病別</label><span>骨科（膝關節）</span></div>\r
        <div class="drawer-field"><label>PAC 類型</label><span><span class="badge badge-blue" style="font-size:10px">PAC 住院</span></span></div>\r
        <div class="drawer-field"><label>入院日期</label><span>2026/05/28</span></div>\r
        <div class="drawer-field"><label>照護週次</label><span>第 4 週</span></div>\r
        <div class="drawer-field"><label>床位</label><span>301-B</span></div>\r
        <div class="drawer-field"><label>主治醫師</label><span>陳醫師（復健科）</span></div>\r
      </div>\r
    </div>\r
    <div class="divider"></div>\r
    <div class="drawer-section">\r
      <div class="drawer-section-title">醫囑方向</div>\r
      <div class="summary-box">膝關節置換術後復健，著重步態訓練、肌力強化、關節活動度恢復。目標：6週內恢復獨立步行。</div>\r
    </div>\r
    <div class="divider"></div>\r
    <div id="manager-actions" class="drawer-section">\r
      <div class="drawer-section-title">操作（復健主管）</div>\r
      <div style="display:flex;gap:8px">\r
        <button class="btn btn-ghost btn-sm" onclick="closeDrawer('inpatient');openModal('modal-edit-schedule')">✏️ 編輯排班</button>\r
        <button class="btn btn-danger btn-sm" onclick="closeDrawer('inpatient')">取消排班</button>\r
      </div>\r
    </div>\r
    <div id="therapist-actions" class="drawer-section hidden">\r
      <div class="drawer-section-title">操作（治療師）</div>\r
      <button class="btn btn-secondary btn-sm" onclick="closeDrawer('inpatient');openModal('modal-swap')">↔ 申請換班 / 代班</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ══ SIDE DRAWER：居家個案 ══ -->\r
<div id="drawer-overlay-home" class="drawer-overlay hidden" onclick="closeDrawer('home')"></div>\r
<div id="drawer-home" class="drawer hidden" style="transform:translateX(100%)">\r
  <div class="drawer-header">\r
    <div>\r
      <div class="drawer-title">黃建國・居家復健詳情</div>\r
      <div style="font-size:12px;color:var(--gray-500);margin-top:3px">2026/06/23 下班後・<span class="badge badge-green" style="font-size:10px">PAC 居家</span></div>\r
    </div>\r
    <button class="drawer-close" onclick="closeDrawer('home')">✕</button>\r
  </div>\r
  <div class="drawer-body">\r
    <div class="drawer-section">\r
      <div class="drawer-section-title">治療師資訊</div>\r
      <div class="drawer-info-grid">\r
        <div class="drawer-field"><label>治療師</label><span>陳建宏</span></div>\r
        <div class="drawer-field"><label>職類</label><span><span class="therapist-tag therapist-pt">PT</span> 物理治療師</span></div>\r
        <div class="drawer-field"><label>前往時間</label><span>下班後（約17:30）</span></div>\r
        <div class="drawer-field"><label>批價狀態</label><span><span class="badge badge-green">已批價</span></span></div>\r
      </div>\r
    </div>\r
    <div class="divider"></div>\r
    <div class="drawer-section">\r
      <div class="drawer-section-title">個案基本資料</div>\r
      <div class="drawer-info-grid" style="margin-bottom:10px">\r
        <div class="drawer-field"><label>姓名</label><span>黃建國</span></div>\r
        <div class="drawer-field"><label>年齡／性別</label><span>55歲 男</span></div>\r
        <div class="drawer-field"><label>疾病別</label><span>脊髓損傷（C4-C5）</span></div>\r
        <div class="drawer-field"><label>PAC 類型</label><span><span class="badge badge-green" style="font-size:10px">PAC 居家</span></span></div>\r
        <div class="drawer-field"><label>開案日期</label><span>2026/06/22</span></div>\r
        <div class="drawer-field"><label>照護週次</span></div>\r
      </div>\r
      <div class="drawer-field" style="margin-bottom:10px">\r
        <label>地址</label>\r
        <span>台北市中山區○○路○○號（距醫院約 8.2 km）</span>\r
      </div>\r
      <div class="drawer-info-grid">\r
        <div class="drawer-field"><label>個案電話</label><span>0934-567-890</span></div>\r
        <div class="drawer-field"><label>家屬聯絡</label><span>黃太太 0945-678-901</span></div>\r
      </div>\r
    </div>\r
    <div class="divider"></div>\r
    <div class="drawer-section">\r
      <div class="drawer-section-title">病摘摘要</div>\r
      <div class="summary-box">脊髓損傷（C4-C5），不完全損傷（ASIA B）。上肢保有部分感覺，下肢運動功能受損。建議以上肢功能強化、呼吸訓練、轉位訓練為主。</div>\r
    </div>\r
    <div class="divider"></div>\r
    <div class="drawer-section">\r
      <div class="drawer-section-title">醫囑方向</div>\r
      <div class="summary-box">物理治療：每週 3 次，每次 50 分鐘。著重轉位訓練、呼吸肌強化、下肢被動活動。如遇呼吸困難立即停止並通報個管師。</div>\r
    </div>\r
    <div class="divider"></div>\r
    <div id="home-manager-actions" class="drawer-section">\r
      <div class="drawer-section-title">操作（復健主管）</div>\r
      <div style="display:flex;gap:8px">\r
        <button class="btn btn-ghost btn-sm" onclick="closeDrawer('home');openModal('modal-edit-schedule')">✏️ 編輯排班</button>\r
        <button class="btn btn-danger btn-sm" onclick="closeDrawer('home')">取消排班</button>\r
      </div>\r
    </div>\r
    <div id="home-therapist-actions" class="drawer-section hidden">\r
      <div class="drawer-section-title">操作（治療師）</div>\r
      <button class="btn btn-secondary btn-sm" onclick="closeDrawer('home');openModal('modal-swap')">↔ 申請換班 / 代班</button>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
<!-- ══ MODALS ══ -->\r
\r
<!-- 新增班表（主管）-->\r
<div id="modal-add-schedule" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header"><div class="modal-title">＋ 新增班表</div><button class="modal-close" onclick="closeModal('modal-add-schedule')">✕</button></div>\r
    <div class="modal-body">\r
      <div class="form-group">\r
        <label>排班類型 <span class="required">*</span></label>\r
        <div style="display:flex;gap:10px">\r
          <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer"><input type="radio" name="sched-type" checked style="accent-color:var(--blue)"> 院內</label>\r
          <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer"><input type="radio" name="sched-type" style="accent-color:var(--blue)"> 居家</label>\r
        </div>\r
      </div>\r
      <div class="form-grid">\r
        <div class="form-group">\r
          <label>治療師 <span class="required">*</span></label>\r
          <select class="form-control">\r
            <option>請選擇治療師</option>\r
            <option>黃志豪（PT）</option>\r
            <option>陳建宏（PT）</option>\r
            <option>李佳穎（OT）</option>\r
            <option>張雅玲（OT）</option>\r
            <option>吳怡君（ST）</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>個案 <span class="required">*</span></label>\r
          <select class="form-control">\r
            <option>請選擇個案</option>\r
            <option>李文雄（COPD・院內）</option>\r
            <option>鄭大偉（骨科・院內）</option>\r
            <option>吳麗珠（CVA・院內）</option>\r
            <option>黃建國（脊髓損傷・居家）</option>\r
            <option>王淑芬（骨科・居家）</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>日期 <span class="required">*</span></label>\r
          <input class="form-control" type="date" value="2026-06-24">\r
        </div>\r
        <div class="form-group">\r
          <label>時段 <span class="required">*</span></label>\r
          <select class="form-control">\r
            <option>08:00 – 08:50</option>\r
            <option>08:30 – 09:20</option>\r
            <option>09:00 – 09:50</option>\r
            <option>09:30 – 10:20</option>\r
            <option>10:00 – 10:50</option>\r
            <option>10:30 – 11:20</option>\r
            <option>14:00 – 14:50</option>\r
            <option>14:30 – 15:20</option>\r
            <option>午休（居家）</option>\r
            <option>下班後（居家）</option>\r
          </select>\r
        </div>\r
      </div>\r
      <div class="form-group">\r
        <label>備註</label>\r
        <textarea class="form-control" placeholder="填寫治療重點或特殊注意事項…"></textarea>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-add-schedule')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-add-schedule')">確認新增</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 編輯班表（主管）-->\r
<div id="modal-edit-schedule" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header"><div class="modal-title">✏️ 編輯班表</div><button class="modal-close" onclick="closeModal('modal-edit-schedule')">✕</button></div>\r
    <div class="modal-body">\r
      <div class="info-note blue">目前排班：黃志豪（PT）・鄭大偉・2026/06/23 09:00</div>\r
      <div class="form-grid">\r
        <div class="form-group">\r
          <label>更換治療師</label>\r
          <select class="form-control">\r
            <option>黃志豪（PT）</option>\r
            <option>陳建宏（PT）</option>\r
            <option>李佳穎（OT）</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>更換日期</label>\r
          <input class="form-control" type="date" value="2026-06-23">\r
        </div>\r
        <div class="form-group">\r
          <label>更換時段</label>\r
          <select class="form-control">\r
            <option>09:00 – 09:50</option>\r
            <option>09:30 – 10:20</option>\r
            <option>10:00 – 10:50</option>\r
            <option>14:00 – 14:50</option>\r
          </select>\r
        </div>\r
      </div>\r
      <div class="form-group">\r
        <label>備註</label>\r
        <textarea class="form-control" placeholder="備註修改原因…"></textarea>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-danger btn-sm" onclick="closeModal('modal-edit-schedule')">取消排班</button>\r
      <button class="btn btn-secondary" onclick="closeModal('modal-edit-schedule')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-edit-schedule')">儲存變更</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 申請換班/代班（治療師）-->\r
<div id="modal-swap" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header"><div class="modal-title">↔ 申請換班 / 代班</div><button class="modal-close" onclick="closeModal('modal-swap')">✕</button></div>\r
    <div class="modal-body">\r
      <div class="info-note blue">原排班：2026/06/23 09:00・個案 鄭大偉</div>\r
      <div class="form-group">\r
        <label>申請類型</label>\r
        <div style="display:flex;gap:10px">\r
          <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer"><input type="radio" name="swap-type" checked style="accent-color:var(--blue)"> 換班（更換日期/時段）</label>\r
          <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer"><input type="radio" name="swap-type" style="accent-color:var(--blue)"> 代班（找人代替）</label>\r
        </div>\r
      </div>\r
      <div class="form-grid">\r
        <div class="form-group">\r
          <label>更換至日期 <span class="required">*</span></label>\r
          <input class="form-control" type="date">\r
        </div>\r
        <div class="form-group">\r
          <label>更換至時段 <span class="required">*</span></label>\r
          <select class="form-control">\r
            <option>08:00 – 08:50</option>\r
            <option>09:00 – 09:50</option>\r
            <option>10:00 – 10:50</option>\r
            <option>14:00 – 14:50</option>\r
          </select>\r
        </div>\r
      </div>\r
      <div class="form-group">\r
        <label>換 / 代 班事由 <span class="required">*</span></label>\r
        <textarea class="form-control" placeholder="請說明換班或代班的原因…"></textarea>\r
      </div>\r
      <div class="info-note amber">申請送出後需等待復健主管審核，審核通過後班表才會更新。</div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-swap')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-swap')">送出申請</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 換班審核（主管）-->\r
<div id="modal-approval" class="modal-overlay hidden">\r
  <div class="modal modal-lg">\r
    <div class="modal-header"><div class="modal-title">換班審核 <span class="badge badge-red" style="margin-left:8px">2 件待審</span></div><button class="modal-close" onclick="closeModal('modal-approval')">✕</button></div>\r
    <div class="modal-body">\r
      <div class="approval-list">\r
        <div class="approval-item">\r
          <div class="approval-item-header">\r
            <div>\r
              <div class="approval-name">黃志豪（PT）申請換班</div>\r
              <div class="approval-meta">原排班：2026/06/25 09:00・鄭大偉・→ 申請換至 06/26 14:00</div>\r
            </div>\r
            <span class="badge badge-amber">待審核</span>\r
          </div>\r
          <div class="approval-reason">事由：家庭因素，06/25 上午無法出席，確認 06/26 下午可補回。</div>\r
          <div class="approval-actions">\r
            <button class="btn btn-danger btn-sm">拒絕</button>\r
            <button class="btn btn-green btn-sm" onclick="closeModal('modal-approval')">✓ 核准</button>\r
          </div>\r
        </div>\r
        <div class="approval-item">\r
          <div class="approval-item-header">\r
            <div>\r
              <div class="approval-name">陳建宏（PT）申請代班</div>\r
              <div class="approval-meta">原排班：2026/06/27 下班後・黃建國居家・→ 申請找人代班</div>\r
            </div>\r
            <span class="badge badge-amber">待審核</span>\r
          </div>\r
          <div class="approval-reason">事由：個人臨時狀況，無法前往居家個案家。已詢問李佳穎可否代班，尚未確認。</div>\r
          <div class="approval-actions">\r
            <button class="btn btn-danger btn-sm">拒絕</button>\r
            <button class="btn btn-green btn-sm" onclick="closeModal('modal-approval')">✓ 核准</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-approval')">關閉</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 居家個案報名（治療師）-->\r
<div id="modal-register" class="modal-overlay hidden">\r
  <div class="modal modal-lg">\r
    <div class="modal-header"><div class="modal-title">🏡 居家個案報名・黃建國</div><button class="modal-close" onclick="closeModal('modal-register')">✕</button></div>\r
    <div class="modal-body">\r
      <div class="info-note amber">報名截止：2026/06/24 12:00・若報名人數超額將進行抽籤</div>\r
\r
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:14px">\r
        <div>\r
          <div style="font-size:11px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">個案基本資料</div>\r
          <div style="display:flex;flex-direction:column;gap:6px">\r
            <div><span style="font-size:11px;color:var(--gray-400)">姓名：</span><span style="font-size:13px;font-weight:600">黃建國</span></div>\r
            <div><span style="font-size:11px;color:var(--gray-400)">年齡／性別：</span><span style="font-size:12px">55歲 男</span></div>\r
            <div><span style="font-size:11px;color:var(--gray-400)">疾病別：</span><span style="font-size:12px">脊髓損傷（C4-C5）</span></div>\r
            <div><span style="font-size:11px;color:var(--gray-400)">地址：</span><span style="font-size:12px">台北市中山區（距醫院約 8.2 km）</span></div>\r
            <div><span style="font-size:11px;color:var(--gray-400)">聯絡：</span><span style="font-size:12px">0934-567-890 / 家屬黃太太</span></div>\r
          </div>\r
        </div>\r
        <div>\r
          <div style="font-size:11px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">所需人力</div>\r
          <div class="quota-row">\r
            <span class="quota-label" style="color:var(--blue);font-weight:700">PT</span>\r
            <div class="quota-bar"><div class="quota-fill pt" style="width:33%"></div></div>\r
            <span class="quota-count">1 / 3 人</span>\r
          </div>\r
          <div class="quota-row">\r
            <span class="quota-label" style="color:var(--purple);font-weight:700">OT</span>\r
            <div class="quota-bar"><div class="quota-fill ot" style="width:0%"></div></div>\r
            <span class="quota-count">0 / 3 人</span>\r
          </div>\r
          <div class="quota-row">\r
            <span class="quota-label" style="color:var(--green);font-weight:700">ST</span>\r
            <div class="quota-bar"><div class="quota-fill st" style="width:0%"></div></div>\r
            <span class="quota-count">0 / 0 人</span>\r
          </div>\r
          <div style="font-size:11px;color:var(--gray-400);margin-top:6px">不需 ST・共需 6 名治療師</div>\r
        </div>\r
      </div>\r
\r
      <div class="divider"></div>\r
\r
      <div style="font-size:11px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">病摘摘要</div>\r
      <div class="summary-box" style="margin-bottom:14px">脊髓損傷（C4-C5），不完全損傷（ASIA B）。上肢保有部分感覺，下肢運動功能受損。建議以上肢功能強化、呼吸訓練、轉位訓練為主。注意：個案有呼吸問題，遇喘促需立即停止並通報。</div>\r
\r
      <div style="font-size:11px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">醫囑</div>\r
      <div class="summary-box" style="margin-bottom:14px">PT：每週 3 次，每次 50 分鐘。著重轉位訓練、呼吸肌強化、下肢被動活動。<br>OT：每週 3 次，每次 50 分鐘。上肢功能訓練、日常生活輔具評估。</div>\r
\r
      <div style="font-size:11px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">選擇可前往的時段</div>\r
      <div class="time-slot-grid">\r
        <div class="time-slot" onclick="this.classList.toggle('selected')">週一 午休</div>\r
        <div class="time-slot selected" onclick="this.classList.toggle('selected')">週三 下班後</div>\r
        <div class="time-slot" onclick="this.classList.toggle('selected')">週四 午休</div>\r
        <div class="time-slot" onclick="this.classList.toggle('selected')">週五 下班後</div>\r
        <div class="time-slot" onclick="this.classList.toggle('selected')">週六 上午</div>\r
        <div class="time-slot taken">週日（不排）</div>\r
        <div class="time-slot" onclick="this.classList.toggle('selected')">週二 下班後</div>\r
        <div class="time-slot" onclick="this.classList.toggle('selected')">週五 午休</div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-register')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-register')">確認報名</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<script>\r
let currentRole = 'manager';\r
\r
function switchRole(role){\r
  currentRole = role;\r
  document.getElementById('btn-manager').classList.toggle('active', role==='manager');\r
  document.getElementById('btn-therapist').classList.toggle('active', role==='therapist');\r
\r
  if(role==='manager'){\r
    document.getElementById('user-avatar').className='user-avatar manager';\r
    document.getElementById('user-avatar').textContent='王';\r
    document.getElementById('user-name').textContent='王復健主管';\r
    document.getElementById('user-role-label').textContent='復健主管';\r
    document.getElementById('approval-badge').classList.remove('hidden');\r
    document.getElementById('btn-add-schedule').classList.remove('hidden');\r
    document.getElementById('therapist-filter').disabled=false;\r
    // drawer actions\r
    document.getElementById('manager-actions').classList.remove('hidden');\r
    document.getElementById('therapist-actions').classList.add('hidden');\r
    document.getElementById('home-manager-actions').classList.remove('hidden');\r
    document.getElementById('home-therapist-actions').classList.add('hidden');\r
  } else {\r
    document.getElementById('user-avatar').className='user-avatar';\r
    document.getElementById('user-avatar').textContent='黃';\r
    document.getElementById('user-name').textContent='黃志豪';\r
    document.getElementById('user-role-label').textContent='物理治療師（PT）';\r
    document.getElementById('approval-badge').classList.add('hidden');\r
    document.getElementById('btn-add-schedule').classList.add('hidden');\r
    // 治療師固定看自己\r
    const sel = document.getElementById('therapist-filter');\r
    sel.value='黃志豪（PT）';\r
    sel.disabled=true;\r
    // drawer actions\r
    document.getElementById('manager-actions').classList.add('hidden');\r
    document.getElementById('therapist-actions').classList.remove('hidden');\r
    document.getElementById('home-manager-actions').classList.add('hidden');\r
    document.getElementById('home-therapist-actions').classList.remove('hidden');\r
  }\r
}\r
\r
function switchView(el, view){\r
  document.querySelectorAll('.view-toggle .view-btn').forEach(b=>b.classList.remove('active'));\r
  el.classList.add('active');\r
  document.getElementById('view-month').classList.toggle('hidden', view!=='month');\r
  document.getElementById('view-week').classList.toggle('hidden', view!=='week');\r
}\r
\r
function switchFilter(el, type){\r
  document.querySelectorAll('.filter-tab').forEach(t=>t.classList.remove('active'));\r
  el.classList.add('active');\r
}\r
\r
function openDrawer(type){\r
  document.getElementById('drawer-overlay-'+type).classList.remove('hidden');\r
  const d = document.getElementById('drawer-'+type);\r
  d.classList.remove('hidden');\r
  setTimeout(()=>d.style.transform='translateX(0)',10);\r
}\r
\r
function closeDrawer(type){\r
  const d = document.getElementById('drawer-'+type);\r
  d.style.transform='translateX(100%)';\r
  setTimeout(()=>{\r
    d.classList.add('hidden');\r
    document.getElementById('drawer-overlay-'+type).classList.add('hidden');\r
  },250);\r
}\r
\r
function openModal(id){document.getElementById(id).classList.remove('hidden')}\r
function closeModal(id){document.getElementById(id).classList.add('hidden')}\r
\r
document.querySelectorAll('.modal-overlay').forEach(o=>{\r
  o.addEventListener('click',function(e){if(e.target===this)this.classList.add('hidden')});\r
});\r
<\/script>\r
</body>\r
</html>`,vg=`<!DOCTYPE html>\r
<html lang="zh-TW">\r
<head>\r
<meta charset="UTF-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1.0">\r
<title>PAC 居家排班管理</title>\r
<style>\r
*{box-sizing:border-box;margin:0;padding:0}\r
:root{\r
  --blue:#2563EB;--blue-light:#EFF6FF;--blue-mid:#BFDBFE;--blue-dark:#1E40AF;\r
  --gray-50:#F8FAFC;--gray-100:#F1F5F9;--gray-200:#E2E8F0;--gray-300:#CBD5E1;\r
  --gray-400:#94A3B8;--gray-500:#64748B;--gray-600:#475569;--gray-700:#334155;--gray-900:#0F172A;\r
  --green:#16A34A;--green-light:#DCFCE7;--green-mid:#BBF7D0;\r
  --amber:#D97706;--amber-light:#FEF3C7;\r
  --red:#DC2626;--red-light:#FEE2E2;\r
  --purple:#7C3AED;--purple-light:#EDE9FE;\r
  --teal:#0D9488;--teal-light:#CCFBF1;\r
  --white:#FFFFFF\r
}\r
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans TC',sans-serif;background:var(--gray-50);color:var(--gray-900);height:100vh;display:flex;overflow:hidden;font-size:14px}\r
\r
/* Sidebar */\r
.sidebar{width:192px;min-width:192px;background:var(--white);border-right:1px solid var(--gray-200);display:flex;flex-direction:column}\r
.sidebar-logo{padding:16px 16px 13px;border-bottom:1px solid var(--gray-200)}\r
.logo-text{font-size:14px;font-weight:700;color:var(--blue)}\r
.logo-sub{font-size:11px;color:var(--gray-400);margin-top:2px}\r
.sidebar-nav{padding:6px 0;flex:1}\r
.nav-item{display:flex;align-items:center;gap:8px;padding:9px 14px;font-size:13px;color:var(--gray-500);border-left:3px solid transparent;cursor:default}\r
.nav-item.active{background:var(--blue-light);color:var(--blue);font-weight:600;border-left-color:var(--blue)}\r
.nav-item.disabled{opacity:.38;cursor:not-allowed}\r
.sidebar-user{margin-top: auto;padding:11px 14px;border-top:1px solid var(--gray-200)}\r
.user-row{display:flex;align-items:center;gap:8px;margin-bottom:8px}\r
.user-avatar{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700}\r
.av-case{background:var(--blue-light);color:var(--blue)}\r
.av-manager{background:var(--amber-light);color:var(--amber)}\r
.av-therapist{background:var(--purple-light);color:var(--purple)}\r
.user-name{font-size:12px;font-weight:600;color:var(--gray-700)}\r
.user-role-label{font-size:11px;color:var(--gray-400)}\r
.role-switcher{display:flex;border:1px solid var(--gray-200);border-radius:6px;overflow:hidden}\r
.role-btn{flex:1;padding:3px 0;font-size:10px;font-weight:600;cursor:pointer;border:none;background:var(--white);color:var(--gray-400);text-align:center;transition:all .15s}\r
.role-btn.active{background:var(--blue);color:var(--white)}\r
\r
/* Main */\r
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}\r
.topbar{background:var(--white);border-bottom:1px solid var(--gray-200);padding:0 20px;height:48px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.breadcrumb{font-size:12px;color:var(--gray-500)}\r
.topbar-right{display:flex;align-items:center;gap:8px}\r
.content{flex:1;overflow-y:auto;padding:20px}\r
\r
/* Buttons */\r
.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .15s;white-space:nowrap}\r
.btn-primary{background:var(--blue);color:var(--white)}.btn-primary:hover{background:var(--blue-dark)}\r
.btn-secondary{background:var(--white);color:var(--gray-700);border:1px solid var(--gray-300)}.btn-secondary:hover{background:var(--gray-50)}\r
.btn-ghost{background:transparent;color:var(--blue);border:1px solid var(--blue-mid)}.btn-ghost:hover{background:var(--blue-light)}\r
.btn-green{background:var(--white);color:var(--green);border:1px solid var(--green-mid)}.btn-green:hover{background:var(--green-light)}\r
.btn-amber{background:var(--white);color:var(--amber);border:1px solid #FDE68A}.btn-amber:hover{background:var(--amber-light)}\r
.btn-danger{background:var(--white);color:var(--red);border:1px solid #FECACA}.btn-danger:hover{background:var(--red-light)}\r
.btn-sm{padding:5px 10px;font-size:12px}.btn-xs{padding:3px 8px;font-size:11px}\r
\r
/* Badges */\r
.badge{display:inline-flex;align-items:center;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:600}\r
.badge-blue{background:var(--blue-light);color:var(--blue)}\r
.badge-green{background:var(--green-light);color:var(--green)}\r
.badge-amber{background:var(--amber-light);color:var(--amber)}\r
.badge-gray{background:var(--gray-100);color:var(--gray-500)}\r
.badge-red{background:var(--red-light);color:var(--red)}\r
.badge-purple{background:var(--purple-light);color:var(--purple)}\r
.badge-teal{background:var(--teal-light);color:var(--teal)}\r
\r
/* Notif badge */\r
.notif-wrap{position:relative;display:inline-flex}\r
.notif-dot{position:absolute;top:-4px;right:-4px;width:16px;height:16px;border-radius:50%;background:var(--red);color:var(--white);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center}\r
\r
/* Tabs */\r
.tabs{display:flex;border-bottom:2px solid var(--gray-200);margin-bottom:16px}\r
.tab{padding:8px 16px;font-size:13px;font-weight:500;color:var(--gray-500);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;white-space:nowrap}\r
.tab.active{color:var(--blue);border-bottom-color:var(--blue)}\r
\r
/* Page header */\r
.page-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px}\r
.page-title{font-size:18px;font-weight:700}\r
.page-subtitle{font-size:12px;color:var(--gray-500);margin-top:3px}\r
\r
/* Toolbar */\r
.toolbar{display:flex;gap:7px;margin-bottom:14px;align-items:center;flex-wrap:wrap}\r
.search-wrap{position:relative}\r
.search-wrap input{padding:6px 10px 6px 30px;border:1px solid var(--gray-300);border-radius:6px;font-size:12px;outline:none;width:200px}\r
.search-wrap input:focus{border-color:var(--blue)}\r
.search-icon{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:var(--gray-400);font-size:12px}\r
select.filter{padding:6px 10px;border:1px solid var(--gray-300);border-radius:6px;font-size:12px;color:var(--gray-700);background:var(--white);outline:none;cursor:pointer}\r
\r
/* Case list */\r
.case-list{display:flex;flex-direction:column;gap:12px}\r
.case-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;overflow:hidden;transition:all .15s}\r
.case-card:hover{border-color:var(--blue-mid)}\r
.case-card-header{display:flex;align-items:center;gap:12px;padding:14px 16px;cursor:pointer}\r
.case-card-header:hover{background:var(--gray-50)}\r
.case-name{font-size:14px;font-weight:700;color:var(--gray-900)}\r
.case-meta{display:flex;gap:10px;margin-top:3px;flex-wrap:wrap}\r
.case-meta-item{font-size:11px;color:var(--gray-500)}\r
.case-card-badges{display:flex;gap:6px;align-items:center;flex-wrap:wrap;flex:1}\r
.case-card-right{display:flex;align-items:center;gap:8px;flex-shrink:0}\r
.expand-arrow{font-size:11px;color:var(--gray-400);transition:transform .2s}\r
.expand-arrow.open{transform:rotate(90deg)}\r
\r
/* Quota bars */\r
.quota-mini{display:flex;align-items:center;gap:5px}\r
.quota-label-mini{font-size:10px;font-weight:700;min-width:18px}\r
.quota-bar-mini{width:50px;height:5px;background:var(--gray-100);border-radius:999px;overflow:hidden}\r
.quota-fill-mini{height:100%;border-radius:999px}\r
.quota-text-mini{font-size:10px;color:var(--gray-500);min-width:28px}\r
.pt-fill{background:var(--blue)}\r
.ot-fill{background:var(--purple)}\r
.st-fill{background:var(--green)}\r
\r
/* Case detail */\r
.case-detail{border-top:1px solid var(--gray-100);padding:16px}\r
.detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}\r
.detail-section-title{font-size:11px;font-weight:600;color:var(--gray-400);text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px}\r
.info-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:12px}\r
.info-item label{font-size:10px;color:var(--gray-400);display:block;margin-bottom:2px;text-transform:uppercase;letter-spacing:.04em}\r
.info-item span{font-size:12px;color:var(--gray-800);font-weight:500}\r
.divider{height:1px;background:var(--gray-100);margin:12px 0}\r
.summary-box{background:var(--gray-50);border:1px solid var(--gray-200);border-radius:7px;padding:11px 13px;font-size:12px;line-height:1.75;color:var(--gray-700)}\r
\r
/* Fake map */\r
.fake-map{width:100%;height:140px;background:linear-gradient(135deg,#e8f4f0 0%,#d4eae3 30%,#c8e6da 60%,#e0f0eb 100%);border-radius:8px;border:1px solid var(--gray-200);position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}\r
.fake-map-road{position:absolute;background:var(--white);opacity:.7}\r
.fake-map-road.h{height:3px;width:100%}\r
.fake-map-road.v{width:3px;height:100%}\r
.map-pin-home{position:absolute;font-size:22px;top:35%;left:55%}\r
.map-pin-hospital{position:absolute;font-size:16px;top:60%;left:25%}\r
.map-distance{position:absolute;bottom:8px;right:10px;background:var(--white);border-radius:5px;padding:3px 8px;font-size:11px;font-weight:600;color:var(--gray-700);box-shadow:0 1px 4px rgba(0,0,0,.1)}\r
\r
/* Treatment log */\r
.treatment-log{display:flex;flex-direction:column;gap:6px}\r
.treatment-row{display:flex;align-items:center;gap:10px;padding:8px 12px;background:var(--gray-50);border-radius:6px;border-left:3px solid var(--gray-200)}\r
.treatment-row.signed{border-left-color:var(--green)}\r
.treatment-row.pending{border-left-color:var(--amber)}\r
.treatment-row.uploaded{border-left-color:var(--blue)}\r
.treatment-date{font-size:12px;font-weight:600;color:var(--gray-700);min-width:55px}\r
.treatment-therapist{font-size:11px;color:var(--gray-500);min-width:70px}\r
.treatment-time{font-size:11px;color:var(--gray-500);min-width:80px}\r
.treatment-actions{margin-left:auto;display:flex;gap:6px}\r
\r
/* Billing section */\r
.billing-box{background:var(--white);border:1px solid var(--gray-200);border-radius:8px;padding:14px;margin-top:12px}\r
.billing-title{font-size:12px;font-weight:600;color:var(--gray-700);margin-bottom:10px;display:flex;align-items:center;justify-content:space-between}\r
.billing-table{width:100%;font-size:12px}\r
.billing-table td{padding:5px 0;color:var(--gray-600)}\r
.billing-table td:last-child{text-align:right;font-weight:500;color:var(--gray-800)}\r
.billing-total{display:flex;align-items:center;justify-content:space-between;padding-top:10px;border-top:2px solid var(--gray-200);margin-top:8px;font-size:14px;font-weight:700}\r
.billing-refund{background:var(--green-light);color:var(--green);padding:6px 12px;border-radius:6px;font-size:12px;font-weight:600;margin-top:8px;text-align:center}\r
.billing-charge{background:var(--red-light);color:var(--red);padding:6px 12px;border-radius:6px;font-size:12px;font-weight:600;margin-top:8px;text-align:center}\r
\r
/* Bonus section */\r
.bonus-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;overflow:hidden;margin-bottom:12px}\r
.bonus-header{padding:13px 16px;background:var(--gray-50);border-bottom:1px solid var(--gray-100);display:flex;align-items:center;justify-content:space-between}\r
.bonus-name{font-size:13px;font-weight:600;color:var(--gray-900)}\r
.bonus-body{padding:14px 16px}\r
.bonus-table{width:100%;font-size:12px;border-collapse:collapse}\r
.bonus-table th{text-align:left;padding:6px 10px;background:var(--gray-50);color:var(--gray-500);font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid var(--gray-200)}\r
.bonus-table td{padding:7px 10px;border-bottom:1px solid var(--gray-100);color:var(--gray-700)}\r
.bonus-table tr:last-child td{border-bottom:none}\r
.bonus-total-row{font-weight:700;color:var(--blue)}\r
\r
/* Therapist tag */\r
.th-tag{display:inline-flex;align-items:center;padding:1px 6px;border-radius:4px;font-size:10px;font-weight:700}\r
.th-pt{background:#DBEAFE;color:#1D4ED8}\r
.th-ot{background:#FCE7F3;color:#9D174D}\r
.th-st{background:#D1FAE5;color:#065F46}\r
.th-mgr{background:var(--amber-light);color:var(--amber)}\r
\r
/* Modal */\r
.modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);display:flex;align-items:center;justify-content:center;z-index:100;backdrop-filter:blur(2px)}\r
.modal{background:var(--white);border-radius:12px;width:540px;max-width:92vw;max-height:90vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.15)}\r
.modal-lg{width:680px}\r
.modal-header{padding:16px 20px 13px;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.modal-title{font-size:15px;font-weight:700}\r
.modal-close{width:25px;height:25px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}\r
.modal-close:hover{background:var(--gray-200)}\r
.modal-body{padding:16px 20px;overflow-y:auto;flex:1}\r
.modal-footer{padding:13px 20px;border-top:1px solid var(--gray-200);display:flex;justify-content:flex-end;gap:7px;flex-shrink:0}\r
\r
/* Form */\r
.form-group{display:flex;flex-direction:column;gap:5px;margin-bottom:12px}\r
.form-group label{font-size:12px;font-weight:500;color:var(--gray-600)}\r
.form-control{padding:7px 10px;border:1px solid var(--gray-300);border-radius:6px;font-size:13px;color:var(--gray-800);background:var(--white);outline:none}\r
.form-control:focus{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}\r
select.form-control{cursor:pointer}\r
textarea.form-control{resize:vertical;min-height:70px}\r
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r
.required{color:var(--red);margin-left:2px}\r
\r
/* Info note */\r
.info-note{font-size:12px;padding:10px 12px;border-radius:6px;margin-bottom:12px}\r
.info-note.blue{background:var(--blue-light);color:var(--blue-dark)}\r
.info-note.amber{background:var(--amber-light);color:var(--amber)}\r
.info-note.green{background:var(--green-light);color:var(--green)}\r
.info-note.red{background:var(--red-light);color:var(--red)}\r
\r
/* Time slot */\r
.time-slot-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:6px}\r
.time-slot{padding:7px 4px;border:1px solid var(--gray-200);border-radius:5px;font-size:11px;text-align:center;cursor:pointer;color:var(--gray-600)}\r
.time-slot:hover{border-color:var(--blue);color:var(--blue)}\r
.time-slot.selected{background:var(--blue);border-color:var(--blue);color:var(--white)}\r
.time-slot.taken{background:var(--gray-100);color:var(--gray-400);cursor:not-allowed}\r
\r
/* Upload zone */\r
.upload-zone{border:2px dashed var(--gray-300);border-radius:8px;padding:24px;text-align:center;color:var(--gray-400);cursor:pointer}\r
.upload-zone:hover{border-color:var(--blue);background:var(--blue-light);color:var(--blue)}\r
\r
/* Registrant list */\r
.reg-list{display:flex;flex-direction:column;gap:7px}\r
.reg-item{display:flex;align-items:center;gap:10px;padding:9px 12px;border:1px solid var(--gray-200);border-radius:7px}\r
.reg-item.winner{background:var(--green-light);border-color:var(--green-mid)}\r
.reg-name{font-size:13px;font-weight:600;color:var(--gray-800);flex:1}\r
\r
.hidden{display:none!important}\r
.mt-10{margin-top:10px}\r
.mt-14{margin-top:14px}\r
</style>\r
</head>\r
<body>\r
\r
<!-- SIDEBAR -->\r
<aside class="sidebar">\r
<!--\r
  <div class="sidebar-logo">\r
    <div class="logo-text">PAC 管理系統</div>\r
    <div class="logo-sub">急性後期照護</div>\r
  </div>\r
  <nav class="sidebar-nav">\r
    <div class="nav-item disabled">🏠 個人儀表板</div>\r
    <div class="nav-item disabled">📋 個案管理</div>\r
    <div class="nav-item disabled">🛏 病床管理</div>\r
    <div class="nav-item disabled">📅 班表總覽頁</div>\r
    <div class="nav-item active">🏡 居家排班管理</div>\r
    <div class="nav-item disabled">📊 評估量表</div>\r
    <div class="nav-item disabled">💪 復健紀錄</div>\r
    <div class="nav-item disabled">📤 指標匯出</div>\r
  </nav>\r
-->\r
  <div class="sidebar-user">\r
    <div class="user-row">\r
      <div class="user-avatar av-case" id="ua">林</div>\r
      <div>\r
        <div class="user-name" id="uname">林美惠</div>\r
        <div class="user-role-label" id="urole">個案管理師</div>\r
      </div>\r
    </div>\r
    <div class="role-switcher">\r
      <button class="role-btn active" id="rbtn-case" onclick="switchRole('case')">個管師</button>\r
      <button class="role-btn" id="rbtn-manager" onclick="switchRole('manager')">主管</button>\r
      <button class="role-btn" id="rbtn-therapist" onclick="switchRole('therapist')">治療師</button>\r
    </div>\r
  </div>\r
</aside>\r
\r
<!-- MAIN -->\r
<div class="main">\r
  <div class="topbar">\r
    <div class="breadcrumb">居家排班管理</div>\r
    <div class="topbar-right">\r
      <span style="font-size:11px;color:var(--gray-400)">2026/06/23</span>\r
      <div id="btn-publish-wrap" class="hidden">\r
        <button class="btn btn-primary btn-sm" onclick="openModal('modal-publish')">＋ 發布居家個案</button>\r
      </div>\r
      <div id="btn-bonus-wrap">\r
        <button class="btn btn-secondary btn-sm" onclick="switchToBonus()">💰 獎金明細</button>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="content">\r
\r
    <!-- ════ 個管師視角 ════ -->\r
    <div id="view-case">\r
      <div class="page-header">\r
        <div>\r
          <div class="page-title">居家排班管理</div>\r
          <div class="page-subtitle">掌握所有居家個案執行狀態</div>\r
        </div>\r
        <button class="btn btn-secondary btn-sm">📤 匯出</button>\r
      </div>\r
\r
      <!-- 統計摘要 -->\r
      <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap">\r
        <div style="background:var(--white);border:1px solid var(--gray-200);border-radius:8px;padding:10px 16px;min-width:90px">\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em">執行中</div>\r
          <div style="font-size:22px;font-weight:700;color:var(--green)">4</div>\r
        </div>\r
        <div style="background:var(--white);border:1px solid var(--gray-200);border-radius:8px;padding:10px 16px;min-width:90px">\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em">待批價</div>\r
          <div style="font-size:22px;font-weight:700;color:var(--amber)">2</div>\r
        </div>\r
        <div style="background:var(--white);border:1px solid var(--gray-200);border-radius:8px;padding:10px 16px;min-width:90px">\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em">準備展延</div>\r
          <div style="font-size:22px;font-weight:700;color:var(--blue)">1</div>\r
        </div>\r
        <div style="background:var(--white);border:1px solid var(--gray-200);border-radius:8px;padding:10px 16px;min-width:90px">\r
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em">可發佈</div>\r
          <div style="font-size:22px;font-weight:700;color:var(--gray-500)">2</div>\r
        </div>\r
      </div>\r
\r
      <div class="toolbar">\r
        <div class="search-wrap"><span class="search-icon">🔍</span><input type="text" placeholder="搜尋個案姓名…"></div>\r
        <select class="filter"><option>全部狀態</option><option>可發佈</option><option>已發佈</option><option>成立</option><option>未成立</option><option>執行中</option><option>準備展延</option><option>即將結案</option><option>已結案</option></select>\r
        <select class="filter"><option>全部疾病別</option><option>CVA</option><option>骨科</option><option>COPD</option><option>脊髓損傷</option></select>\r
      </div>\r
\r
      <div class="tabs">\r
        <div class="tab active" onclick="switchCaseTab(this,'all')">全部 <span class="badge badge-gray" style="margin-left:4px">7</span></div>\r
        <div class="tab" onclick="switchCaseTab(this,'active')">執行中 <span class="badge badge-green" style="margin-left:4px">4</span></div>\r
        <div class="tab" onclick="switchCaseTab(this,'billing')">待批價 <span class="badge badge-amber" style="margin-left:4px">2</span></div>\r
        <div class="tab" onclick="switchCaseTab(this,'ending')">即將結案 <span class="badge badge-blue" style="margin-left:4px">1</span></div>\r
      </div>\r
\r
      <div class="case-list" id="case-list-all">\r
\r
        <!-- 個案1：執行中・展開示意 -->\r
        <div class="case-card">\r
          <div class="case-card-header" onclick="toggleCase('c1')">\r
            <div style="flex:1">\r
              <div class="case-name">黃建國</div>\r
              <div class="case-meta">\r
                <span class="case-meta-item">脊髓損傷（C4-C5）</span>\r
                <span class="case-meta-item">台北市中山區・8.2km</span>\r
                <span class="case-meta-item">開案 2026/06/22</span>\r
                <span class="case-meta-item">第 1 週</span>\r
              </div>\r
            </div>\r
            <div class="case-card-badges">\r
              <span class="badge badge-green">執行中</span>\r
              <span class="badge badge-gray" style="font-size:10px">批價 ✓</span>\r
              <div class="quota-mini"><span class="quota-label-mini" style="color:var(--blue)">PT</span><div class="quota-bar-mini"><div class="quota-fill-mini pt-fill" style="width:100%"></div></div><span class="quota-text-mini">3/3</span></div>\r
              <div class="quota-mini"><span class="quota-label-mini" style="color:var(--purple)">OT</span><div class="quota-bar-mini"><div class="quota-fill-mini ot-fill" style="width:67%"></div></div><span class="quota-text-mini">2/3</span></div>\r
            </div>\r
            <div class="case-card-right">\r
              <button class="btn btn-danger btn-xs" onclick="event.stopPropagation();openModal('modal-suspend')">暫停</button>\r
              <span class="expand-arrow open" id="arrow-c1">▶</span>\r
            </div>\r
          </div>\r
          <div id="detail-c1" class="case-detail">\r
            <!-- 基本資料 -->\r
            <div class="detail-section-title">個案基本資料</div>\r
            <div class="info-row">\r
              <div class="info-item"><label>姓名</label><span>黃建國</span></div>\r
              <div class="info-item"><label>年齡／性別</label><span>55歲 男</span></div>\r
              <div class="info-item"><label>疾病別</label><span>脊髓損傷（C4-C5）</span></div>\r
              <div class="info-item"><label>個案電話</label><span>0934-567-890</span></div>\r
              <div class="info-item"><label>家屬聯絡</label><span>黃太太 0945-678-901</span></div>\r
              <div class="info-item"><label>地址</label><span>台北市中山區○○路○○號</span></div>\r
            </div>\r
            <!-- 假地圖 -->\r
            <div class="fake-map" style="margin-bottom:12px">\r
              <div class="fake-map-road h" style="top:45%"></div>\r
              <div class="fake-map-road h" style="top:70%"></div>\r
              <div class="fake-map-road v" style="left:35%"></div>\r
              <div class="fake-map-road v" style="left:65%"></div>\r
              <div class="map-pin-home">📍</div>\r
              <div class="map-pin-hospital">🏥</div>\r
              <div class="map-distance">距醫院 8.2 km</div>\r
              <div style="position:absolute;top:8px;left:10px;font-size:10px;color:var(--gray-400)">地圖示意（未來串接地圖 API）</div>\r
            </div>\r
            <!-- 病摘 -->\r
            <div class="detail-section-title">病摘摘要</div>\r
            <div class="summary-box" style="margin-bottom:12px">脊髓損傷（C4-C5），不完全損傷（ASIA B）。上肢保有部分感覺，下肢運動功能受損。建議以上肢功能強化、呼吸訓練、轉位訓練為主。注意：個案有呼吸問題，遇喘促需立即停止並通報。</div>\r
            <div class="detail-section-title">醫囑方向</div>\r
            <div class="summary-box" style="margin-bottom:12px">PT：每週 3 次，每次 50 分鐘。著重轉位訓練、呼吸肌強化。OT：每週 3 次，每次 50 分鐘。上肢功能訓練、日常生活輔具評估。</div>\r
            <div class="divider"></div>\r
            <!-- 治療師排班 -->\r
            <div class="detail-section-title" style="margin-bottom:8px">治療師排班時段</div>\r
            <div style="display:flex;flex-wrap:wrap;gap:7px;margin-bottom:14px">\r
              <div style="background:var(--blue-light);border-radius:6px;padding:7px 11px;font-size:11px"><strong style="color:var(--blue)">陳建宏 PT</strong><br>週三・下班後</div>\r
              <div style="background:var(--blue-light);border-radius:6px;padding:7px 11px;font-size:11px"><strong style="color:var(--blue)">黃志豪 PT</strong><br>週五・下班後</div>\r
              <div style="background:var(--blue-light);border-radius:6px;padding:7px 11px;font-size:11px"><strong style="color:var(--blue)">王復健主管 PT</strong><br>週六・上午</div>\r
              <div style="background:var(--purple-light);border-radius:6px;padding:7px 11px;font-size:11px"><strong style="color:var(--purple)">李佳穎 OT</strong><br>週二・午休</div>\r
              <div style="background:var(--purple-light);border-radius:6px;padding:7px 11px;font-size:11px"><strong style="color:var(--purple)">張雅玲 OT</strong><br>週四・下班後</div>\r
            </div>\r
            <div class="divider"></div>\r
            <!-- 治療紀錄 -->\r
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">\r
              <div class="detail-section-title" style="margin-bottom:0">治療執行紀錄</div>\r
            </div>\r
            <div class="treatment-log">\r
              <div class="treatment-row uploaded">\r
                <span class="treatment-date">06/18 週三</span>\r
                <span class="treatment-therapist">陳建宏 <span class="th-tag th-pt">PT</span></span>\r
                <span class="treatment-time">17:30 – 18:20</span>\r
                <span class="badge badge-blue" style="font-size:10px">已簽到・已上傳</span>\r
                <div class="treatment-actions"><button class="btn btn-ghost btn-xs">查看照片</button></div>\r
              </div>\r
              <div class="treatment-row signed">\r
                <span class="treatment-date">06/20 週五</span>\r
                <span class="treatment-therapist">黃志豪 <span class="th-tag th-pt">PT</span></span>\r
                <span class="treatment-time">17:30 – 18:20</span>\r
                <span class="badge badge-green" style="font-size:10px">已簽到・待上傳</span>\r
                <div class="treatment-actions"><button class="btn btn-ghost btn-xs">提醒上傳</button></div>\r
              </div>\r
              <div class="treatment-row pending">\r
                <span class="treatment-date">06/21 週六</span>\r
                <span class="treatment-therapist">王主管 <span class="th-tag th-mgr">主管</span></span>\r
                <span class="treatment-time">09:00 – 09:50</span>\r
                <span class="badge badge-amber" style="font-size:10px">待簽到</span>\r
                <div class="treatment-actions"></div>\r
              </div>\r
              <div class="treatment-row pending">\r
                <span class="treatment-date">06/23 週二</span>\r
                <span class="treatment-therapist">李佳穎 <span class="th-tag th-ot">OT</span></span>\r
                <span class="treatment-time">12:00 – 12:50</span>\r
                <span class="badge badge-amber" style="font-size:10px">待簽到</span>\r
                <div class="treatment-actions"></div>\r
              </div>\r
            </div>\r
            <div class="divider"></div>\r
            <!-- 批價 -->\r
            <div class="billing-box">\r
              <div class="billing-title">\r
                <span>批價資訊</span>\r
                <span class="badge badge-green">已批價</span>\r
              </div>\r
              <table class="billing-table">\r
                <tr><td>預收金額（第一次收取）</td><td>NT$ 3,000</td></tr>\r
                <tr><td>健保費用（已執行 4 次 × NT$ 500）</td><td>NT$ 2,000</td></tr>\r
                <tr><td>交通費（8.2 km × 4 次 × NT$ 10/km）</td><td>NT$ 328</td></tr>\r
              </table>\r
              <div class="billing-total"><span>實際費用合計</span><span style="color:var(--blue)">NT$ 2,328</span></div>\r
              <div class="billing-refund">💰 應退還家屬：NT$ 672</div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- 個案2：準備展延・收合 -->\r
        <div class="case-card">\r
          <div class="case-card-header" onclick="toggleCase('c2')">\r
            <div style="flex:1">\r
              <div class="case-name">王淑芬</div>\r
              <div class="case-meta">\r
                <span class="case-meta-item">骨科（髖關節）</span>\r
                <span class="case-meta-item">新北市板橋區・12.5km</span>\r
                <span class="case-meta-item">開案 2026/05/15</span>\r
                <span class="case-meta-item">第 6 週</span>\r
              </div>\r
            </div>\r
            <div class="case-card-badges">\r
              <span class="badge badge-blue">準備展延</span>\r
              <span class="badge badge-amber" style="font-size:10px">待批價</span>\r
              <div class="quota-mini"><span class="quota-label-mini" style="color:var(--blue)">PT</span><div class="quota-bar-mini"><div class="quota-fill-mini pt-fill" style="width:100%"></div></div><span class="quota-text-mini">3/3</span></div>\r
              <div class="quota-mini"><span class="quota-label-mini" style="color:var(--purple)">OT</span><div class="quota-bar-mini"><div class="quota-fill-mini ot-fill" style="width:100%"></div></div><span class="quota-text-mini">3/3</span></div>\r
            </div>\r
            <div class="case-card-right">\r
              <button class="btn btn-danger btn-xs" onclick="event.stopPropagation();openModal('modal-suspend')">暫停</button>\r
              <span class="expand-arrow" id="arrow-c2">▶</span>\r
            </div>\r
          </div>\r
          <div id="detail-c2" class="case-detail hidden">\r
            <div class="info-note blue">⚠️ 此個案已進入第 6 週，需於本週送展延申請，否則將於第 6 週結束後結案。</div>\r
            <div class="info-row">\r
              <div class="info-item"><label>姓名</label><span>王淑芬</span></div>\r
              <div class="info-item"><label>年齡／性別</label><span>72歲 女</span></div>\r
              <div class="info-item"><label>疾病別</label><span>骨科（髖關節）</span></div>\r
              <div class="info-item"><label>個案電話</label><span>0923-456-789</span></div>\r
              <div class="info-item"><label>家屬聯絡</label><span>王小華 0934-789-012</span></div>\r
              <div class="info-item"><label>地址</label><span>新北市板橋區○○路○號</span></div>\r
            </div>\r
            <div class="fake-map" style="margin-bottom:12px">\r
              <div class="fake-map-road h" style="top:40%"></div>\r
              <div class="fake-map-road h" style="top:65%"></div>\r
              <div class="fake-map-road v" style="left:30%"></div>\r
              <div class="fake-map-road v" style="left:60%"></div>\r
              <div class="map-pin-home" style="top:28%;left:62%">📍</div>\r
              <div class="map-pin-hospital" style="top:55%;left:20%">🏥</div>\r
              <div class="map-distance">距醫院 12.5 km</div>\r
              <div style="position:absolute;top:8px;left:10px;font-size:10px;color:var(--gray-400)">地圖示意（未來串接地圖 API）</div>\r
            </div>\r
            <div class="billing-box">\r
              <div class="billing-title">\r
                <span>批價資訊</span>\r
                <span class="badge badge-amber">待批價</span>\r
              </div>\r
              <table class="billing-table">\r
                <tr><td>預收金額（第一次收取）</td><td>NT$ 4,000</td></tr>\r
                <tr><td>健保費用（已執行 18 次 × NT$ 500）</td><td>NT$ 9,000</td></tr>\r
                <tr><td>交通費（12.5 km × 18 次 × NT$ 10/km）</td><td>NT$ 2,250</td></tr>\r
              </table>\r
              <div class="billing-total"><span>實際費用合計</span><span style="color:var(--blue)">NT$ 11,250</span></div>\r
              <div class="billing-charge">⚠️ 家屬需補繳：NT$ 7,250</div>\r
              <button class="btn btn-primary btn-sm" style="width:100%;margin-top:10px;justify-content:center" onclick="openModal('modal-billing-confirm')">確認送批價</button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- 個案3：可發佈 -->\r
        <div class="case-card">\r
          <div class="case-card-header" onclick="toggleCase('c3')">\r
            <div style="flex:1">\r
              <div class="case-name">陳志明</div>\r
              <div class="case-meta">\r
                <span class="case-meta-item">CVA（腦中風）</span>\r
                <span class="case-meta-item">台北市大安區・5.8km</span>\r
                <span class="case-meta-item">開案待確定</span>\r
              </div>\r
            </div>\r
            <div class="case-card-badges">\r
              <span class="badge badge-gray">可發佈</span>\r
              <span style="font-size:11px;color:var(--gray-400)">尚未發布報名</span>\r
            </div>\r
            <div class="case-card-right">\r
              <span class="expand-arrow" id="arrow-c3">▶</span>\r
            </div>\r
          </div>\r
          <div id="detail-c3" class="case-detail hidden">\r
            <div class="info-note amber">此個案尚未發布報名，請通知復健主管發布或前往「發布報名」頁面。</div>\r
            <div class="info-row">\r
              <div class="info-item"><label>姓名</label><span>陳志明</span></div>\r
              <div class="info-item"><label>年齡／性別</label><span>68歲 男</span></div>\r
              <div class="info-item"><label>疾病別</label><span>CVA（腦中風）</span></div>\r
              <div class="info-item"><label>個案電話</label><span>0912-345-678</span></div>\r
              <div class="info-item"><label>家屬聯絡</label><span>陳小明 0923-456-789</span></div>\r
              <div class="info-item"><label>地址</label><span>台北市大安區○○路○號</span></div>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div><!-- /view-case -->\r
\r
    <!-- ════ 復健主管視角 ════ -->\r
    <div id="view-manager" class="hidden">\r
      <div class="page-header">\r
        <div>\r
          <div class="page-title">居家排班管理</div>\r
          <div class="page-subtitle">發布個案・查看報名・確認排班</div>\r
        </div>\r
      </div>\r
\r
      <div class="tabs">\r
        <div class="tab active" onclick="switchMgrTab(this,'mgr-overview')">居家總覽</div>\r
        <div class="tab" onclick="switchMgrTab(this,'mgr-publish')">發布報名 <span class="badge badge-amber" style="margin-left:4px">2</span></div>\r
      </div>\r
\r
      <!-- 主管：居家總覽 -->\r
      <div id="mgr-overview">\r
        <div class="toolbar">\r
          <div class="search-wrap"><span class="search-icon">🔍</span><input type="text" placeholder="搜尋個案姓名…"></div>\r
          <select class="filter"><option>全部狀態</option><option>可發佈</option><option>已發佈</option><option>成立</option><option>未成立</option></select>\r
          <select class="filter"><option>全部疾病別</option><option>CVA</option><option>骨科</option><option>脊髓損傷</option></select>\r
        </div>\r
        <div class="case-list">\r
          <div class="case-card">\r
            <div class="case-card-header" onclick="toggleCase('mc1')">\r
              <div style="flex:1">\r
                <div class="case-name">黃建國</div>\r
                <div class="case-meta"><span class="case-meta-item">脊髓損傷・台北市中山區・8.2km</span><span class="case-meta-item">第 1 週</span></div>\r
              </div>\r
              <div class="case-card-badges">\r
                <span class="badge badge-green">成立・執行中</span>\r
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--blue)">PT</span><div class="quota-bar-mini"><div class="quota-fill-mini pt-fill" style="width:100%"></div></div><span class="quota-text-mini">3/3</span></div>\r
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--purple)">OT</span><div class="quota-bar-mini"><div class="quota-fill-mini ot-fill" style="width:67%"></div></div><span class="quota-text-mini">2/3</span></div>\r
              </div>\r
              <div class="case-card-right">\r
                <button class="btn btn-danger btn-xs" onclick="event.stopPropagation();openModal('modal-suspend')">暫停</button>\r
                <span class="expand-arrow" id="arrow-mc1">▶</span>\r
              </div>\r
            </div>\r
            <div id="detail-mc1" class="case-detail hidden">\r
              <div class="info-row">\r
                <div class="info-item"><label>姓名</label><span>黃建國</span></div>\r
                <div class="info-item"><label>年齡／性別</label><span>55歲 男</span></div>\r
                <div class="info-item"><label>個案電話</label><span>0934-567-890</span></div>\r
                <div class="info-item"><label>地址</label><span>台北市中山區○○路○號</span></div>\r
                <div class="info-item"><label>家屬聯絡</label><span>黃太太 0945-678-901</span></div>\r
              </div>\r
              <div class="detail-section-title" style="margin-bottom:8px">報名治療師</div>\r
              <div class="reg-list">\r
                <div class="reg-item winner"><span class="reg-name">陳建宏 <span class="th-tag th-pt">PT</span></span><span class="badge badge-green">抽中</span><span style="font-size:11px;color:var(--gray-500);margin-left:8px">週三下班後</span></div>\r
                <div class="reg-item winner"><span class="reg-name">黃志豪 <span class="th-tag th-pt">PT</span></span><span class="badge badge-green">抽中</span><span style="font-size:11px;color:var(--gray-500);margin-left:8px">週五下班後</span></div>\r
                <div class="reg-item winner"><span class="reg-name">王復健主管 <span class="th-tag th-mgr">主管</span></span><span class="badge badge-green">抽中</span><span style="font-size:11px;color:var(--gray-500);margin-left:8px">週六上午</span></div>\r
                <div class="reg-item"><span class="reg-name">林○○ <span class="th-tag th-pt">PT</span></span><span class="badge badge-gray">未抽中</span></div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="case-card">\r
            <div class="case-card-header" onclick="toggleCase('mc2')">\r
              <div style="flex:1">\r
                <div class="case-name">陳志明</div>\r
                <div class="case-meta"><span class="case-meta-item">CVA・台北市大安區・5.8km</span></div>\r
              </div>\r
              <div class="case-card-badges">\r
                <span class="badge badge-gray">可發佈</span>\r
                <span style="font-size:11px;color:var(--gray-400)">尚未發布</span>\r
              </div>\r
              <div class="case-card-right">\r
                <button class="btn btn-primary btn-xs" onclick="event.stopPropagation();openModal('modal-publish')">發布報名</button>\r
                <span class="expand-arrow" id="arrow-mc2">▶</span>\r
              </div>\r
            </div>\r
            <div id="detail-mc2" class="case-detail hidden">\r
              <div class="info-row">\r
                <div class="info-item"><label>姓名</label><span>陳志明</span></div>\r
                <div class="info-item"><label>年齡／性別</label><span>68歲 男</span></div>\r
                <div class="info-item"><label>地址</label><span>台北市大安區○○路○號</span></div>\r
                <div class="info-item"><label>個案電話</label><span>0912-345-678</span></div>\r
                <div class="info-item"><label>所需人力</label><span>PT 3人・OT 3人</span></div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- 主管：發布報名 -->\r
      <div id="mgr-publish" class="hidden">\r
        <div class="info-note blue">以下個案可發布報名，治療師將可在「可報名」頁面看到並報名。</div>\r
        <div class="case-list">\r
          <div class="case-card">\r
            <div class="case-card-header" style="cursor:default">\r
              <div style="flex:1">\r
                <div class="case-name">陳志明</div>\r
                <div class="case-meta"><span class="case-meta-item">CVA・台北市大安區・5.8km</span><span class="case-meta-item">所需：PT 3人・OT 3人</span></div>\r
              </div>\r
              <div class="case-card-badges"><span class="badge badge-gray">可發佈</span></div>\r
              <div class="case-card-right">\r
                <button class="btn btn-primary btn-sm" onclick="openModal('modal-publish')">📢 發布報名</button>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="case-card">\r
            <div class="case-card-header" style="cursor:default">\r
              <div style="flex:1">\r
                <div class="case-name">蔡美玲</div>\r
                <div class="case-meta"><span class="case-meta-item">帕金森氏症・新北市永和區・9.1km</span><span class="case-meta-item">所需：PT 3人・OT 3人</span></div>\r
              </div>\r
              <div class="case-card-badges"><span class="badge badge-gray">可發佈</span></div>\r
              <div class="case-card-right">\r
                <button class="btn btn-primary btn-sm" onclick="openModal('modal-publish')">📢 發布報名</button>\r
              </div>\r
            </div>\r
          </div>\r
          <!-- 已發佈 -->\r
          <div class="case-card">\r
            <div class="case-card-header" onclick="toggleCase('mp1')">\r
              <div style="flex:1">\r
                <div class="case-name">黃建國</div>\r
                <div class="case-meta"><span class="case-meta-item">脊髓損傷・台北市中山區</span><span class="case-meta-item">報名截止 2026/06/10 12:00</span></div>\r
              </div>\r
              <div class="case-card-badges">\r
                <span class="badge badge-blue">已發佈</span>\r
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--blue)">PT</span><div class="quota-bar-mini"><div class="quota-fill-mini pt-fill" style="width:100%"></div></div><span class="quota-text-mini">4/3 ⚠️</span></div>\r
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--purple)">OT</span><div class="quota-bar-mini"><div class="quota-fill-mini ot-fill" style="width:67%"></div></div><span class="quota-text-mini">2/3</span></div>\r
              </div>\r
              <div class="case-card-right">\r
                <button class="btn btn-amber btn-xs" onclick="event.stopPropagation();openModal('modal-lottery')">🎲 執行抽籤</button>\r
                <span class="expand-arrow" id="arrow-mp1">▶</span>\r
              </div>\r
            </div>\r
            <div id="detail-mp1" class="case-detail hidden">\r
              <div class="detail-section-title">目前報名狀況</div>\r
              <div class="reg-list">\r
                <div class="reg-item"><span class="reg-name">陳建宏 <span class="th-tag th-pt">PT</span></span><span class="badge badge-amber">報名中</span></div>\r
                <div class="reg-item"><span class="reg-name">黃志豪 <span class="th-tag th-pt">PT</span></span><span class="badge badge-amber">報名中</span></div>\r
                <div class="reg-item"><span class="reg-name">王復健主管 <span class="th-tag th-mgr">主管</span></span><span class="badge badge-amber">報名中</span></div>\r
                <div class="reg-item"><span class="reg-name">林○○ <span class="th-tag th-pt">PT</span></span><span class="badge badge-amber">報名中（超額）</span></div>\r
                <div class="reg-item"><span class="reg-name">李佳穎 <span class="th-tag th-ot">OT</span></span><span class="badge badge-amber">報名中</span></div>\r
                <div class="reg-item"><span class="reg-name">張雅玲 <span class="th-tag th-ot">OT</span></span><span class="badge badge-amber">報名中</span></div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div><!-- /view-manager -->\r
\r
    <!-- ════ 治療師視角 ════ -->\r
    <div id="view-therapist" class="hidden">\r
      <div class="page-header">\r
        <div>\r
          <div class="page-title">居家排班</div>\r
          <div class="page-subtitle">黃志豪（PT）的居家個案</div>\r
        </div>\r
      </div>\r
      <div class="tabs">\r
        <div class="tab active" onclick="switchThTab(this,'th-active')">進行中 <span class="badge badge-green" style="margin-left:4px">2</span></div>\r
        <div class="tab" onclick="switchThTab(this,'th-open')">可報名 <span class="badge badge-amber" style="margin-left:4px">2</span></div>\r
        <div class="tab" onclick="switchThTab(this,'th-bonus')">獎金明細</div>\r
      </div>\r
\r
      <!-- 治療師：進行中 -->\r
      <div id="th-active">\r
        <div class="case-list">\r
          <div class="case-card">\r
            <div class="case-card-header" onclick="toggleCase('tc1')">\r
              <div style="flex:1">\r
                <div class="case-name">黃建國</div>\r
                <div class="case-meta">\r
                  <span class="case-meta-item">脊髓損傷</span>\r
                  <span class="case-meta-item">台北市中山區・8.2km</span>\r
                  <span class="case-meta-item">每週三下班後</span>\r
                  <span class="case-meta-item">第 1 週</span>\r
                </div>\r
              </div>\r
              <div class="case-card-badges">\r
                <span class="badge badge-green">執行中</span>\r
                <span class="badge badge-gray" style="font-size:10px">批價 ✓</span>\r
              </div>\r
              <div class="case-card-right">\r
                <button class="btn btn-primary btn-xs" onclick="event.stopPropagation();openModal('modal-checkin')">✓ 簽到</button>\r
                <span class="expand-arrow" id="arrow-tc1">▶</span>\r
              </div>\r
            </div>\r
            <div id="detail-tc1" class="case-detail hidden">\r
              <div class="info-row">\r
                <div class="info-item"><label>姓名</label><span>黃建國</span></div>\r
                <div class="info-item"><label>年齡／性別</label><span>55歲 男</span></div>\r
                <div class="info-item"><label>疾病別</label><span>脊髓損傷（C4-C5）</span></div>\r
                <div class="info-item"><label>個案電話</label><span>0934-567-890</span></div>\r
                <div class="info-item"><label>家屬聯絡</label><span>黃太太 0945-678-901</span></div>\r
                <div class="info-item"><label>地址</label><span>台北市中山區○○路○號</span></div>\r
              </div>\r
              <div class="fake-map" style="margin-bottom:12px">\r
                <div class="fake-map-road h" style="top:45%"></div>\r
                <div class="fake-map-road v" style="left:35%"></div>\r
                <div class="map-pin-home">📍</div>\r
                <div class="map-pin-hospital">🏥</div>\r
                <div class="map-distance">距醫院 8.2 km</div>\r
                <div style="position:absolute;top:8px;left:10px;font-size:10px;color:var(--gray-400)">地圖示意</div>\r
              </div>\r
              <div class="summary-box" style="margin-bottom:12px">脊髓損傷（C4-C5），不完全損傷（ASIA B）。注意：個案有呼吸問題，遇喘促需立即停止並通報個管師。</div>\r
              <div class="detail-section-title" style="margin-bottom:8px">我的治療紀錄</div>\r
              <div class="treatment-log">\r
                <div class="treatment-row uploaded">\r
                  <span class="treatment-date">06/18 週三</span>\r
                  <span class="treatment-time">17:30 – 18:20</span>\r
                  <span class="badge badge-blue" style="font-size:10px">已簽到・已上傳</span>\r
                  <div class="treatment-actions"><button class="btn btn-ghost btn-xs">查看</button></div>\r
                </div>\r
                <div class="treatment-row pending">\r
                  <span class="treatment-date">06/25 週三</span>\r
                  <span class="treatment-time">17:30 – 18:20</span>\r
                  <span class="badge badge-amber" style="font-size:10px">即將到來</span>\r
                  <div class="treatment-actions"><button class="btn btn-primary btn-xs" onclick="openModal('modal-checkin')">簽到</button></div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="case-card">\r
            <div class="case-card-header" onclick="toggleCase('tc2')">\r
              <div style="flex:1">\r
                <div class="case-name">李文雄</div>\r
                <div class="case-meta">\r
                  <span class="case-meta-item">COPD</span>\r
                  <span class="case-meta-item">台北市松山區・6.4km</span>\r
                  <span class="case-meta-item">每週五下班後</span>\r
                  <span class="case-meta-item">第 3 週</span>\r
                </div>\r
              </div>\r
              <div class="case-card-badges">\r
                <span class="badge badge-green">執行中</span>\r
              </div>\r
              <div class="case-card-right">\r
                <button class="btn btn-primary btn-xs" onclick="event.stopPropagation();openModal('modal-checkin')">✓ 簽到</button>\r
                <span class="expand-arrow" id="arrow-tc2">▶</span>\r
              </div>\r
            </div>\r
            <div id="detail-tc2" class="case-detail hidden">\r
              <div class="info-row">\r
                <div class="info-item"><label>姓名</label><span>李文雄</span></div>\r
                <div class="info-item"><label>個案電話</label><span>0923-456-789</span></div>\r
                <div class="info-item"><label>地址</label><span>台北市松山區○○路○號</span></div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- 治療師：可報名 -->\r
      <div id="th-open" class="hidden">\r
        <div class="info-note blue">以下居家個案開放報名，截止後系統將進行 PT/OT/ST 分開抽籤，抽中後可選擇時段。</div>\r
        <div class="case-list">\r
          <div class="case-card">\r
            <div class="case-card-header" onclick="toggleCase('to1')">\r
              <div style="flex:1">\r
                <div class="case-name">陳志明</div>\r
                <div class="case-meta">\r
                  <span class="case-meta-item">CVA・台北市大安區・5.8km</span>\r
                  <span class="case-meta-item">報名截止 06/24 12:00</span>\r
                </div>\r
              </div>\r
              <div class="case-card-badges">\r
                <span class="badge badge-amber">可報名</span>\r
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--blue)">PT</span><div class="quota-bar-mini"><div class="quota-fill-mini pt-fill" style="width:33%"></div></div><span class="quota-text-mini">1/3</span></div>\r
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--purple)">OT</span><div class="quota-bar-mini"><div class="quota-fill-mini ot-fill" style="width:0%"></div></div><span class="quota-text-mini">0/3</span></div>\r
              </div>\r
              <div class="case-card-right">\r
                <button class="btn btn-green btn-sm" onclick="event.stopPropagation();openModal('modal-register-therapist')">報名</button>\r
                <span class="expand-arrow" id="arrow-to1">▶</span>\r
              </div>\r
            </div>\r
            <div id="detail-to1" class="case-detail hidden">\r
              <div class="info-row">\r
                <div class="info-item"><label>姓名</label><span>陳志明</span></div>\r
                <div class="info-item"><label>年齡／性別</label><span>68歲 男</span></div>\r
                <div class="info-item"><label>疾病別</label><span>CVA（腦中風）</span></div>\r
                <div class="info-item"><label>地址</label><span>台北市大安區○○路○號</span></div>\r
                <div class="info-item"><label>所需人力</label><span>PT 3 / OT 3 / ST 0</span></div>\r
              </div>\r
              <div class="fake-map" style="margin-bottom:12px">\r
                <div class="fake-map-road h" style="top:45%"></div>\r
                <div class="fake-map-road v" style="left:45%"></div>\r
                <div class="map-pin-home" style="top:30%;left:58%">📍</div>\r
                <div class="map-pin-hospital" style="top:60%;left:22%">🏥</div>\r
                <div class="map-distance">距醫院 5.8 km</div>\r
                <div style="position:absolute;top:8px;left:10px;font-size:10px;color:var(--gray-400)">地圖示意</div>\r
              </div>\r
              <div class="summary-box">CVA（腦中風）右側偏癱，語言功能部分受損。目標：步態訓練、日常生活功能恢復。</div>\r
              <div style="margin-top:12px;text-align:right">\r
                <button class="btn btn-green" onclick="openModal('modal-register-therapist')">報名此個案</button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- 治療師：獎金明細 -->\r
      <div id="th-bonus" class="hidden">\r
        <div class="info-note blue">以下為您本月的居家復健執行明細，請確認後送交主管彙整。</div>\r
        <div style="display:flex;gap:8px;margin-bottom:14px">\r
          <select class="filter"><option>2026年 5月</option><option selected>2026年 6月（目前）</option></select>\r
        </div>\r
        <div class="bonus-card">\r
          <div class="bonus-header">\r
            <div class="bonus-name">黃志豪（PT）的執行明細</div>\r
            <span class="badge badge-amber">待確認</span>\r
          </div>\r
          <div class="bonus-body">\r
            <table class="bonus-table">\r
              <thead><tr><th>個案</th><th>疾病別</th><th>執行次數</th><th>總公里數</th><th>健保獎金</th><th>車資補貼</th></tr></thead>\r
              <tbody>\r
                <tr><td>黃建國</td><td>脊髓損傷</td><td>1 次</td><td>8.2 km</td><td>NT$ 500</td><td>NT$ 82</td></tr>\r
                <tr><td>李文雄</td><td>COPD</td><td>9 次</td><td>57.6 km</td><td>NT$ 4,500</td><td>NT$ 576</td></tr>\r
                <tr class="bonus-total-row"><td colspan="4">合計</td><td>NT$ 5,000</td><td>NT$ 658</td></tr>\r
              </tbody>\r
            </table>\r
            <div style="background:var(--blue-light);border-radius:7px;padding:11px 13px;margin-top:12px;display:flex;align-items:center;justify-content:space-between">\r
              <div style="font-size:13px;font-weight:600;color:var(--blue-dark)">本月預估總獎金</div>\r
              <div style="font-size:20px;font-weight:700;color:var(--blue)">NT$ 5,658</div>\r
            </div>\r
            <div class="info-note amber mt-10">⚠️ 此為預估金額，最終以個管師批價確認後為準。</div>\r
            <div style="text-align:right;margin-top:10px">\r
              <button class="btn btn-primary" onclick="openModal('modal-bonus-confirm')">✓ 確認明細，送主管彙整</button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div><!-- /view-therapist -->\r
\r
    <!-- ════ 獎金彙整（個管師/主管共用）════ -->\r
    <div id="view-bonus" class="hidden">\r
      <div class="back-link" style="display:inline-flex;align-items:center;gap:4px;font-size:12px;color:var(--gray-500);cursor:pointer;margin-bottom:14px" onclick="switchBackFromBonus()">← 返回</div>\r
      <div class="page-header">\r
        <div><div class="page-title">獎金明細彙整</div><div class="page-subtitle">2026年 6月</div></div>\r
        <div style="display:flex;gap:8px">\r
          <select class="filter"><option>2026年 5月</option><option selected>2026年 6月</option></select>\r
          <button class="btn btn-primary btn-sm" onclick="openModal('modal-billing-confirm')">批價確認</button>\r
        </div>\r
      </div>\r
      <div class="info-note blue">治療師確認獎金明細後，主管彙整，最後由個管師送批價。</div>\r
\r
      <div class="bonus-card">\r
        <div class="bonus-header">\r
          <div class="bonus-name">陳建宏（PT）</div>\r
          <span class="badge badge-green">已確認</span>\r
        </div>\r
        <div class="bonus-body">\r
          <table class="bonus-table">\r
            <thead><tr><th>個案</th><th>執行次數</th><th>總公里數</th><th>健保獎金</th><th>車資補貼</th><th>小計</th></tr></thead>\r
            <tbody>\r
              <tr><td>黃建國</td><td>2 次</td><td>16.4 km</td><td>NT$ 1,000</td><td>NT$ 164</td><td>NT$ 1,164</td></tr>\r
              <tr class="bonus-total-row"><td colspan="5">合計</td><td>NT$ 1,164</td></tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
\r
      <div class="bonus-card">\r
        <div class="bonus-header">\r
          <div class="bonus-name">黃志豪（PT）</div>\r
          <span class="badge badge-amber">待確認</span>\r
        </div>\r
        <div class="bonus-body">\r
          <table class="bonus-table">\r
            <thead><tr><th>個案</th><th>執行次數</th><th>總公里數</th><th>健保獎金</th><th>車資補貼</th><th>小計</th></tr></thead>\r
            <tbody>\r
              <tr><td>黃建國</td><td>1 次</td><td>8.2 km</td><td>NT$ 500</td><td>NT$ 82</td><td>NT$ 582</td></tr>\r
              <tr><td>李文雄</td><td>9 次</td><td>57.6 km</td><td>NT$ 4,500</td><td>NT$ 576</td><td>NT$ 5,076</td></tr>\r
              <tr class="bonus-total-row"><td colspan="5">合計</td><td>NT$ 5,658</td></tr>\r
            </tbody>\r
          </table>\r
          <div style="font-size:11px;color:var(--amber);margin-top:8px">⚠️ 治療師尚未確認，請提醒黃志豪確認獎金明細。</div>\r
        </div>\r
      </div>\r
\r
      <div class="bonus-card">\r
        <div class="bonus-header">\r
          <div class="bonus-name">李佳穎（OT）</div>\r
          <span class="badge badge-green">已確認</span>\r
        </div>\r
        <div class="bonus-body">\r
          <table class="bonus-table">\r
            <thead><tr><th>個案</th><th>執行次數</th><th>總公里數</th><th>健保獎金</th><th>車資補貼</th><th>小計</th></tr></thead>\r
            <tbody>\r
              <tr><td>黃建國</td><td>1 次</td><td>8.2 km</td><td>NT$ 500</td><td>NT$ 82</td><td>NT$ 582</td></tr>\r
              <tr><td>王淑芬</td><td>18 次</td><td>225 km</td><td>NT$ 9,000</td><td>NT$ 2,250</td><td>NT$ 11,250</td></tr>\r
              <tr class="bonus-total-row"><td colspan="5">合計</td><td>NT$ 11,832</td></tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
\r
      <div style="background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:16px;margin-top:4px">\r
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">\r
          <div style="font-size:14px;font-weight:700">本月總獎金</div>\r
          <div style="font-size:22px;font-weight:700;color:var(--blue)">NT$ 18,654</div>\r
        </div>\r
        <div style="font-size:12px;color:var(--gray-500)">已確認 2 / 3 位治療師・尚有 1 位待確認</div>\r
        <button class="btn btn-primary btn-sm" style="margin-top:12px;width:100%;justify-content:center" onclick="openModal('modal-billing-confirm')">彙整完成・送個管師批價</button>\r
      </div>\r
    </div><!-- /view-bonus -->\r
\r
  </div><!-- /content -->\r
</div><!-- /main -->\r
\r
\r
<!-- ══ MODALS ══ -->\r
\r
<!-- 發布個案（主管）-->\r
<div id="modal-publish" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header"><div class="modal-title">📢 發布居家個案報名</div><button class="modal-close" onclick="closeModal('modal-publish')">✕</button></div>\r
    <div class="modal-body">\r
      <div class="info-note blue">發布後，治療師將可在「可報名」頁面看到此個案並進行報名。</div>\r
      <div class="form-group"><label>個案</label><input class="form-control" value="陳志明・CVA（腦中風）" readonly style="background:var(--gray-50)"></div>\r
      <div class="form-group"><label>地址</label><input class="form-control" value="台北市大安區○○路○號（5.8km）" readonly style="background:var(--gray-50)"></div>\r
      <div class="form-grid">\r
        <div class="form-group">\r
          <label>所需 PT 人數</label>\r
          <select class="form-control"><option>1</option><option selected>3</option><option>6</option></select>\r
        </div>\r
        <div class="form-group">\r
          <label>所需 OT 人數</label>\r
          <select class="form-control"><option>1</option><option selected>3</option><option>6</option></select>\r
        </div>\r
        <div class="form-group">\r
          <label>所需 ST 人數</label>\r
          <select class="form-control"><option selected>0</option><option>1</option><option>3</option></select>\r
        </div>\r
        <div class="form-group">\r
          <label>報名截止時間 <span class="required">*</span></label>\r
          <input class="form-control" type="datetime-local" value="2026-06-24T12:00">\r
        </div>\r
      </div>\r
      <div class="form-group">\r
        <label>備註（治療師注意事項）</label>\r
        <textarea class="form-control" placeholder="例：個案有呼吸問題，遇喘促需立即停止並通報…"></textarea>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-publish')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-publish')">確認發布</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 抽籤（主管）-->\r
<div id="modal-lottery" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header"><div class="modal-title">🎲 執行抽籤・黃建國</div><button class="modal-close" onclick="closeModal('modal-lottery')">✕</button></div>\r
    <div class="modal-body">\r
      <div class="info-note amber">PT 報名人數（4人）超過需求（3人），需進行抽籤。OT 報名人數（2人）未超額，直接確認。</div>\r
      <div style="font-size:13px;font-weight:600;color:var(--gray-700);margin-bottom:10px">PT 報名名單（超額・需抽籤）</div>\r
      <div class="reg-list" style="margin-bottom:14px">\r
        <div class="reg-item"><span class="reg-name">陳建宏 <span class="th-tag th-pt">PT</span></span><span class="badge badge-amber">待抽籤</span></div>\r
        <div class="reg-item"><span class="reg-name">黃志豪 <span class="th-tag th-pt">PT</span></span><span class="badge badge-amber">待抽籤</span></div>\r
        <div class="reg-item"><span class="reg-name">王復健主管 <span class="th-tag th-mgr">主管</span></span><span class="badge badge-amber">待抽籤</span></div>\r
        <div class="reg-item"><span class="reg-name">林○○ <span class="th-tag th-pt">PT</span></span><span class="badge badge-amber">待抽籤</span></div>\r
      </div>\r
      <div style="font-size:13px;font-weight:600;color:var(--gray-700);margin-bottom:10px">OT 報名名單（直接確認）</div>\r
      <div class="reg-list">\r
        <div class="reg-item winner"><span class="reg-name">李佳穎 <span class="th-tag th-ot">OT</span></span><span class="badge badge-green">確認</span></div>\r
        <div class="reg-item winner"><span class="reg-name">張雅玲 <span class="th-tag th-ot">OT</span></span><span class="badge badge-green">確認</span></div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-lottery')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-lottery')">🎲 開始 PT 抽籤</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 治療師報名 -->\r
<div id="modal-register-therapist" class="modal-overlay hidden">\r
  <div class="modal modal-lg">\r
    <div class="modal-header"><div class="modal-title">🏡 報名居家個案・陳志明</div><button class="modal-close" onclick="closeModal('modal-register-therapist')">✕</button></div>\r
    <div class="modal-body">\r
      <div class="info-note amber">報名截止：2026/06/24 12:00・PT 目前 1/3 人・若超額將進行抽籤決定順序</div>\r
      <div class="info-row" style="margin-bottom:12px">\r
        <div class="info-item"><label>疾病別</label><span>CVA（腦中風）</span></div>\r
        <div class="info-item"><label>地址</label><span>台北市大安區（5.8km）</span></div>\r
        <div class="info-item"><label>所需人力</label><span>PT 3 / OT 3 / ST 0</span></div>\r
      </div>\r
      <div class="summary-box" style="margin-bottom:14px">CVA 右側偏癱，語言功能部分受損。目標：步態訓練、日常生活功能恢復。注意事項：個案家有樓梯，請攜帶必要輔具。</div>\r
      <div class="form-group">\r
        <label>您可前往的時段（可複選，抽中後再確認最終時段）</label>\r
        <div class="time-slot-grid">\r
          <div class="time-slot" onclick="this.classList.toggle('selected')">週一 午休</div>\r
          <div class="time-slot selected" onclick="this.classList.toggle('selected')">週二 下班後</div>\r
          <div class="time-slot" onclick="this.classList.toggle('selected')">週三 午休</div>\r
          <div class="time-slot" onclick="this.classList.toggle('selected')">週四 下班後</div>\r
          <div class="time-slot selected" onclick="this.classList.toggle('selected')">週五 下班後</div>\r
          <div class="time-slot" onclick="this.classList.toggle('selected')">週六 上午</div>\r
          <div class="time-slot taken">週日（不排）</div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-register-therapist')">取消</button>\r
      <button class="btn btn-green" onclick="closeModal('modal-register-therapist')">確認報名</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 簽到（治療師）-->\r
<div id="modal-checkin" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header"><div class="modal-title">✓ 標記已執行・黃建國</div><button class="modal-close" onclick="closeModal('modal-checkin')">✕</button></div>\r
    <div class="modal-body">\r
      <div class="info-note blue">本次治療完成後請標記並上傳紙本治療紀錄照片，以供個管師核查。</div>\r
      <div class="form-grid">\r
        <div class="form-group">\r
          <label>治療日期</label>\r
          <input class="form-control" type="date" value="2026-06-25">\r
        </div>\r
        <div class="form-group">\r
          <label>實際時段</label>\r
          <input class="form-control" value="17:30 – 18:20">\r
        </div>\r
      </div>\r
      <div class="form-group">\r
        <label>上傳紙本治療紀錄照片 <span class="required">*</span></label>\r
        <div class="upload-zone">\r
          <div style="font-size:24px;margin-bottom:6px">📷</div>\r
          <div style="font-size:13px;font-weight:500">點擊拍照或上傳照片</div>\r
          <div style="font-size:11px;margin-top:3px;color:var(--gray-400)">支援 JPG、PNG，需包含治療師與家屬簽名</div>\r
        </div>\r
      </div>\r
      <div class="form-group">\r
        <label>本次治療備註</label>\r
        <textarea class="form-control" placeholder="填寫本次治療重點、個案狀況…"></textarea>\r
      </div>\r
      <div class="info-note amber">紙本治療紀錄需保留正本，照片僅作為系統備份用途。</div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-checkin')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-checkin')">✓ 確認已執行並上傳</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 暫停個案 -->\r
<div id="modal-suspend" class="modal-overlay hidden">\r
  <div class="modal modal-sm" style="width:420px">\r
    <div class="modal-header"><div class="modal-title">暫停個案</div><button class="modal-close" onclick="closeModal('modal-suspend')">✕</button></div>\r
    <div class="modal-body">\r
      <div class="info-note red">暫停後所有後續排班將取消，請確認暫停原因。</div>\r
      <div class="form-group">\r
        <label>暫停原因 <span class="required">*</span></label>\r
        <select class="form-control">\r
          <option>個案病情不適合繼續 PAC</option>\r
          <option>個案自行要求停止</option>\r
          <option>家屬要求暫停</option>\r
          <option>其他</option>\r
        </select>\r
      </div>\r
      <div class="form-group">\r
        <label>補充說明</label>\r
        <textarea class="form-control" placeholder="填寫補充說明（選填）…"></textarea>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-suspend')">取消</button>\r
      <button class="btn btn-danger" onclick="closeModal('modal-suspend')">確認暫停</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 獎金確認（治療師）-->\r
<div id="modal-bonus-confirm" class="modal-overlay hidden">\r
  <div class="modal modal-sm" style="width:420px">\r
    <div class="modal-header"><div class="modal-title">✓ 確認獎金明細</div><button class="modal-close" onclick="closeModal('modal-bonus-confirm')">✕</button></div>\r
    <div class="modal-body">\r
      <div class="info-note blue">確認後明細將送交復健主管彙整，如有疑問請在確認前聯繫個管師。</div>\r
      <div style="background:var(--gray-50);border-radius:8px;padding:14px;margin-bottom:12px">\r
        <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:13px;color:var(--gray-700)"><span>總執行次數</span><span style="font-weight:600">10 次</span></div>\r
        <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:13px;color:var(--gray-700)"><span>總公里數</span><span style="font-weight:600">65.8 km</span></div>\r
        <div style="display:flex;justify-content:space-between;font-size:14px;font-weight:700;color:var(--blue)"><span>預估總獎金</span><span>NT$ 5,658</span></div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-bonus-confirm')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-bonus-confirm')">✓ 確認，送主管彙整</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 批價確認（個管師）-->\r
<div id="modal-billing-confirm" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header"><div class="modal-title">💰 批價確認・2026年 6月</div><button class="modal-close" onclick="closeModal('modal-billing-confirm')">✕</button></div>\r
    <div class="modal-body">\r
      <div class="info-note amber">⚠️ 黃志豪尚未確認明細，批價後數值將以目前資料為準。</div>\r
      <table class="bonus-table" style="margin-bottom:14px">\r
        <thead><tr><th>治療師</th><th>執行次數</th><th>健保獎金</th><th>車資補貼</th><th>確認狀態</th></tr></thead>\r
        <tbody>\r
          <tr><td>陳建宏（PT）</td><td>2次</td><td>NT$ 1,000</td><td>NT$ 164</td><td><span class="badge badge-green">已確認</span></td></tr>\r
          <tr><td>黃志豪（PT）</td><td>10次</td><td>NT$ 5,000</td><td>NT$ 658</td><td><span class="badge badge-amber">待確認</span></td></tr>\r
          <tr><td>李佳穎（OT）</td><td>19次</td><td>NT$ 9,500</td><td>NT$ 2,332</td><td><span class="badge badge-green">已確認</span></td></tr>\r
          <tr style="font-weight:700;color:var(--blue)"><td colspan="2">合計</td><td>NT$ 15,500</td><td>NT$ 3,154</td><td></td></tr>\r
        </tbody>\r
      </table>\r
      <div style="background:var(--blue-light);border-radius:8px;padding:13px;display:flex;justify-content:space-between;align-items:center">\r
        <span style="font-size:14px;font-weight:700;color:var(--blue-dark)">本月總批價金額</span>\r
        <span style="font-size:20px;font-weight:700;color:var(--blue)">NT$ 18,654</span>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-billing-confirm')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-billing-confirm')">確認送批價</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<script>\r
let currentRole = 'case';\r
let prevView = 'view-case';\r
\r
function switchRole(role){\r
  currentRole = role;\r
  ['case','manager','therapist'].forEach(r=>{\r
    document.getElementById('rbtn-'+r).classList.toggle('active', r===role);\r
  });\r
  const views = ['view-case','view-manager','view-therapist','view-bonus'];\r
  views.forEach(v=>document.getElementById(v).classList.add('hidden'));\r
\r
  if(role==='case'){\r
    document.getElementById('ua').className='user-avatar av-case';\r
    document.getElementById('ua').textContent='林';\r
    document.getElementById('uname').textContent='林美惠';\r
    document.getElementById('urole').textContent='個案管理師';\r
    document.getElementById('btn-publish-wrap').classList.add('hidden');\r
    document.getElementById('btn-bonus-wrap').classList.remove('hidden');\r
    document.getElementById('view-case').classList.remove('hidden');\r
    prevView = 'view-case';\r
  } else if(role==='manager'){\r
    document.getElementById('ua').className='user-avatar av-manager';\r
    document.getElementById('ua').textContent='王';\r
    document.getElementById('uname').textContent='王復健主管';\r
    document.getElementById('urole').textContent='復健主管';\r
    document.getElementById('btn-publish-wrap').classList.remove('hidden');\r
    document.getElementById('btn-bonus-wrap').classList.remove('hidden');\r
    document.getElementById('view-manager').classList.remove('hidden');\r
    prevView = 'view-manager';\r
  } else {\r
    document.getElementById('ua').className='user-avatar av-therapist';\r
    document.getElementById('ua').textContent='黃';\r
    document.getElementById('uname').textContent='黃志豪';\r
    document.getElementById('urole').textContent='物理治療師（PT）';\r
    document.getElementById('btn-publish-wrap').classList.add('hidden');\r
    document.getElementById('btn-bonus-wrap').classList.remove('hidden');\r
    document.getElementById('view-therapist').classList.remove('hidden');\r
    prevView = 'view-therapist';\r
  }\r
}\r
\r
function switchToBonus(){\r
  ['view-case','view-manager','view-therapist'].forEach(v=>document.getElementById(v).classList.add('hidden'));\r
  document.getElementById('view-bonus').classList.remove('hidden');\r
}\r
function switchBackFromBonus(){\r
  document.getElementById('view-bonus').classList.add('hidden');\r
  document.getElementById(prevView).classList.remove('hidden');\r
}\r
\r
function toggleCase(id){\r
  const detail = document.getElementById('detail-'+id);\r
  const arrow = document.getElementById('arrow-'+id);\r
  const isHidden = detail.classList.contains('hidden');\r
  detail.classList.toggle('hidden', !isHidden);\r
  if(arrow){\r
    arrow.classList.toggle('open', isHidden);\r
  }\r
}\r
\r
function switchCaseTab(el, tab){\r
  document.querySelectorAll('#view-case .tabs .tab').forEach(t=>t.classList.remove('active'));\r
  el.classList.add('active');\r
}\r
function switchMgrTab(el, tab){\r
  document.querySelectorAll('#view-manager .tabs .tab').forEach(t=>t.classList.remove('active'));\r
  el.classList.add('active');\r
  document.getElementById('mgr-overview').classList.toggle('hidden', tab!=='mgr-overview');\r
  document.getElementById('mgr-publish').classList.toggle('hidden', tab!=='mgr-publish');\r
}\r
function switchThTab(el, tab){\r
  document.querySelectorAll('#view-therapist .tabs .tab').forEach(t=>t.classList.remove('active'));\r
  el.classList.add('active');\r
  ['th-active','th-open','th-bonus'].forEach(t=>document.getElementById(t).classList.add('hidden'));\r
  document.getElementById(tab).classList.remove('hidden');\r
}\r
\r
function openModal(id){document.getElementById(id).classList.remove('hidden')}\r
function closeModal(id){document.getElementById(id).classList.add('hidden')}\r
document.querySelectorAll('.modal-overlay').forEach(o=>{\r
  o.addEventListener('click',function(e){if(e.target===this)this.classList.add('hidden')});\r
});\r
\r
// init\r
switchRole('case');\r
// 預設展開第一個個案\r
toggleCase('c1');\r
<\/script>\r
</body>\r
</html>`,pg=`<!DOCTYPE html>\r
<html lang="zh-TW">\r
<head>\r
<meta charset="UTF-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1.0">\r
<title>PAC 評估量表填寫</title>\r
<style>\r
*{box-sizing:border-box;margin:0;padding:0}\r
:root{\r
  --blue:#2563EB;--blue-light:#EFF6FF;--blue-mid:#BFDBFE;--blue-dark:#1E40AF;\r
  --gray-50:#F8FAFC;--gray-100:#F1F5F9;--gray-200:#E2E8F0;--gray-300:#CBD5E1;\r
  --gray-400:#94A3B8;--gray-500:#64748B;--gray-600:#475569;--gray-700:#334155;--gray-900:#0F172A;\r
  --green:#16A34A;--green-light:#DCFCE7;--green-mid:#BBF7D0;\r
  --amber:#D97706;--amber-light:#FEF3C7;\r
  --red:#DC2626;--red-light:#FEE2E2;\r
  --purple:#7C3AED;--purple-light:#EDE9FE;\r
  --teal:#0D9488;--teal-light:#CCFBF1;\r
  --white:#FFFFFF;\r
}\r
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans TC',sans-serif;background:var(--gray-50);color:var(--gray-900);height:100vh;display:flex;overflow:hidden;font-size:14px}\r
\r
/* Sidebar */\r
.sidebar{width:192px;min-width:192px;background:var(--white);border-right:1px solid var(--gray-200);display:flex;flex-direction:column}\r
.sidebar-logo{padding:16px 16px 13px;border-bottom:1px solid var(--gray-200)}\r
.logo-text{font-size:14px;font-weight:700;color:var(--blue)}\r
.logo-sub{font-size:11px;color:var(--gray-400);margin-top:2px}\r
.sidebar-nav{padding:6px 0;flex:1}\r
.nav-item{display:flex;align-items:center;gap:8px;padding:9px 14px;font-size:13px;color:var(--gray-500);border-left:3px solid transparent;cursor:default}\r
.nav-item.active{background:var(--blue-light);color:var(--blue);font-weight:600;border-left-color:var(--blue)}\r
.nav-item.clickable{cursor:pointer}.nav-item.clickable:hover{background:var(--gray-50)}\r
.nav-item.disabled{opacity:.38;cursor:not-allowed}\r
.sidebar-user{margin-top: auto;padding:11px 14px;border-top:1px solid var(--gray-200)}\r
.user-row{display:flex;align-items:center;gap:8px;margin-bottom:8px}\r
.user-avatar{width:28px;height:28px;border-radius:50%;background:var(--blue-light);color:var(--blue);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0}\r
.user-avatar.mgr{background:var(--amber-light);color:var(--amber)}\r
.user-avatar.sup{background:var(--purple-light);color:var(--purple)}\r
.user-avatar.pt{background:var(--blue-light);color:var(--blue)}\r
.user-avatar.ot{background:#FCE7F3;color:#9D174D}\r
.user-avatar.st{background:var(--green-light);color:var(--green)}\r
.user-avatar.other{background:var(--gray-100);color:var(--gray-600)}\r
.user-name{font-size:12px;font-weight:600;color:var(--gray-700)}\r
.user-role{font-size:11px;color:var(--gray-400)}\r
.role-switcher{position:relative}\r
.role-select{width:100%;padding:5px 24px 5px 8px;border:1px solid var(--gray-200);border-radius:6px;font-size:11px;font-weight:600;color:var(--gray-600);background:var(--white);cursor:pointer;appearance:none;outline:none}\r
.role-select:focus{border-color:var(--blue)}\r
.role-select-arrow{position:absolute;right:7px;top:50%;transform:translateY(-50%);font-size:9px;color:var(--gray-400);pointer-events:none}\r
\r
/* Main layout */\r
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}\r
.topbar{background:var(--white);border-bottom:1px solid var(--gray-200);padding:0 20px;height:48px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.breadcrumb{font-size:12px;color:var(--gray-500)}\r
.topbar-right{display:flex;align-items:center;gap:10px}\r
.notif-badge{position:relative;display:inline-flex}\r
.notif-dot{position:absolute;top:-4px;right:-4px;width:16px;height:16px;border-radius:50%;background:var(--red);color:var(--white);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center}\r
\r
/* Split pane */\r
.split-pane{flex:1;display:flex;overflow:hidden}\r
.left-pane{width:280px;min-width:280px;border-right:1px solid var(--gray-200);background:var(--white);display:flex;flex-direction:column;overflow:hidden}\r
.right-pane{flex:1;overflow-y:auto;background:var(--gray-50)}\r
\r
/* Left pane */\r
.left-header{padding:12px 14px;border-bottom:1px solid var(--gray-200);flex-shrink:0}\r
.left-search{display:flex;align-items:center;gap:6px;background:var(--gray-50);border:1px solid var(--gray-200);border-radius:6px;padding:6px 10px;margin-bottom:8px}\r
.left-search input{border:none;background:transparent;font-size:12px;color:var(--gray-700);outline:none;flex:1}\r
.left-search input::placeholder{color:var(--gray-400)}\r
.filter-row{display:flex;gap:5px;flex-wrap:wrap}\r
.filter-chip{padding:3px 8px;border-radius:999px;font-size:11px;font-weight:500;border:1px solid var(--gray-200);background:var(--white);color:var(--gray-500);cursor:pointer;transition:all .15s}\r
.filter-chip.active{background:var(--blue);color:var(--white);border-color:var(--blue)}\r
.case-list{flex:1;overflow-y:auto;padding:6px 0}\r
\r
/* Case item */\r
.case-item{padding:10px 14px;cursor:pointer;border-left:3px solid transparent;transition:all .15s}\r
.case-item:hover{background:var(--gray-50)}\r
.case-item.active{background:var(--blue-light);border-left-color:var(--blue)}\r
.case-name{font-size:13px;font-weight:600;color:var(--gray-900);margin-bottom:3px}\r
.case-meta{font-size:11px;color:var(--gray-500);margin-bottom:6px}\r
.case-status-row{display:flex;gap:3px;flex-wrap:wrap}\r
.status-pill{display:inline-flex;align-items:center;gap:2px;padding:2px 6px;border-radius:4px;font-size:10px;font-weight:600}\r
.status-done{background:var(--green-light);color:var(--green)}\r
.status-pending{background:var(--gray-100);color:var(--gray-500)}\r
.status-overdue{background:var(--red-light);color:var(--red)}\r
.status-filling{background:var(--amber-light);color:var(--amber)}\r
\r
/* Buttons */\r
.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .15s;white-space:nowrap}\r
.btn-primary{background:var(--blue);color:var(--white)}.btn-primary:hover{background:var(--blue-dark)}\r
.btn-secondary{background:var(--white);color:var(--gray-700);border:1px solid var(--gray-300)}.btn-secondary:hover{background:var(--gray-50)}\r
.btn-ghost{background:transparent;color:var(--blue);border:1px solid var(--blue-mid)}.btn-ghost:hover{background:var(--blue-light)}\r
.btn-danger{background:var(--white);color:var(--red);border:1px solid #FECACA}.btn-danger:hover{background:var(--red-light)}\r
.btn-green{background:var(--white);color:var(--green);border:1px solid var(--green-mid)}.btn-green:hover{background:var(--green-light)}\r
.btn-amber{background:var(--white);color:var(--amber);border:1px solid #FDE68A}.btn-amber:hover{background:var(--amber-light)}\r
.btn-sm{padding:5px 10px;font-size:12px}.btn-xs{padding:3px 8px;font-size:11px}\r
\r
/* Badges */\r
.badge{display:inline-flex;align-items:center;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:600}\r
.badge-blue{background:var(--blue-light);color:var(--blue)}\r
.badge-green{background:var(--green-light);color:var(--green)}\r
.badge-amber{background:var(--amber-light);color:var(--amber)}\r
.badge-gray{background:var(--gray-100);color:var(--gray-500)}\r
.badge-red{background:var(--red-light);color:var(--red)}\r
.badge-purple{background:var(--purple-light);color:var(--purple)}\r
\r
/* Right pane: summary view */\r
.summary-view{padding:20px}\r
.page-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px}\r
.page-title{font-size:16px;font-weight:700;color:var(--gray-900)}\r
.page-subtitle{font-size:12px;color:var(--gray-500);margin-top:2px}\r
.section-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;margin-bottom:12px;overflow:hidden}\r
.sc-header{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--gray-100)}\r
.sc-title{font-size:13px;font-weight:700;color:var(--gray-700)}\r
.sc-body{padding:14px 16px}\r
.info-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}\r
.info-field label{font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;display:block;margin-bottom:3px}\r
.info-field span{font-size:13px;color:var(--gray-800);font-weight:500}\r
\r
/* Assessment table (多田 style) */\r
.assess-table{width:100%;border-collapse:collapse;font-size:12px}\r
.assess-table th{padding:8px 10px;background:var(--gray-50);border-bottom:1px solid var(--gray-200);font-size:11px;font-weight:600;color:var(--gray-500);text-align:left;white-space:nowrap}\r
.assess-table td{padding:9px 10px;border-bottom:1px solid var(--gray-100);color:var(--gray-700);vertical-align:middle}\r
.assess-table tr:last-child td{border-bottom:none}\r
.assess-table tr.latest-row td{background:var(--blue-light)}\r
.assess-table tr.latest-row td:first-child{border-left:3px solid var(--blue)}\r
.assess-table td.score-pt{color:var(--blue);font-weight:600}\r
.assess-table td.score-ot{color:#9D174D;font-weight:600}\r
.assess-table td.score-st{color:var(--green);font-weight:600}\r
.row-action{display:flex;gap:5px;align-items:center}\r
\r
/* Visit tabs (次別 navigator) */\r
.visit-nav{display:flex;gap:6px;padding:16px 16px 0;background:var(--white);border-bottom:1px solid var(--gray-200);flex-shrink:0}\r
.visit-tab{padding:8px 14px;font-size:12px;font-weight:500;color:var(--gray-500);cursor:pointer;border-bottom:2px solid transparent;position:relative;white-space:nowrap;transition:all .15s}\r
.visit-tab:hover{color:var(--gray-700)}\r
.visit-tab.active{color:var(--blue);font-weight:600;border-bottom-color:var(--blue)}\r
.visit-tab.done{color:var(--green)}\r
.visit-tab.overdue{color:var(--red)}\r
.visit-tab .tab-dot{position:absolute;top:4px;right:4px;width:6px;height:6px;border-radius:50%}\r
.tab-dot.red{background:var(--red)}\r
.tab-dot.green{background:var(--green)}\r
.tab-dot.gray{background:var(--gray-400)}\r
\r
/* Fill view */\r
.fill-view{padding:20px;display:flex;flex-direction:column;gap:12px}\r
.fill-header{display:flex;align-items:flex-start;justify-content:space-between}\r
.fill-meta{font-size:11px;color:var(--gray-400);margin-top:2px}\r
.lock-banner{background:var(--amber-light);border:1px solid #FDE68A;border-radius:8px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:12px;color:var(--amber)}\r
.lock-timer{font-weight:700;font-size:13px;color:var(--amber)}\r
\r
/* Role tabs inside fill view */\r
.role-tabs{display:flex;gap:4px;background:var(--white);border:1px solid var(--gray-200);border-radius:8px;padding:4px;width:fit-content}\r
.role-tab{padding:5px 12px;font-size:12px;font-weight:500;color:var(--gray-500);border-radius:5px;cursor:pointer;position:relative;transition:all .15s}\r
.role-tab:hover{color:var(--gray-700);background:var(--gray-50)}\r
.role-tab.active{background:var(--blue);color:var(--white)}\r
.role-tab .rdot{position:absolute;top:3px;right:3px;width:6px;height:6px;border-radius:50%;background:var(--red)}\r
\r
/* Form */\r
.form-section{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;overflow:hidden}\r
.form-section-header{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--gray-100);background:var(--gray-50)}\r
.form-section-title{font-size:12px;font-weight:700;color:var(--gray-600);text-transform:uppercase;letter-spacing:.04em}\r
.form-section-body{padding:14px 16px;display:flex;flex-direction:column;gap:12px}\r
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r
.form-row-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}\r
.form-group{display:flex;flex-direction:column;gap:4px}\r
.form-group label{font-size:11px;font-weight:600;color:var(--gray-600)}\r
.form-group .prev-val{font-size:10px;color:var(--gray-400);margin-top:1px}\r
.form-group .prev-val span{color:var(--gray-500);font-weight:600}\r
.form-control{padding:7px 10px;border:1px solid var(--gray-300);border-radius:6px;font-size:12px;color:var(--gray-800);background:var(--white);outline:none;transition:border-color .15s}\r
.form-control:focus{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}\r
.form-control.error{border-color:var(--red);background:var(--red-light)}\r
select.form-control{cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%2394A3B8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;padding-right:24px}\r
textarea.form-control{resize:vertical;min-height:64px;line-height:1.6}\r
.required{color:var(--red)}\r
.missing-hint{font-size:11px;color:var(--red);margin-top:2px}\r
\r
/* Score with comparison */\r
.score-compare-row{display:flex;align-items:center;gap:8px}\r
.score-compare-row input{flex:0 0 80px}\r
.prev-score-badge{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;background:var(--gray-100);border-radius:4px;font-size:11px;color:var(--gray-500)}\r
.prev-score-badge .label{font-size:10px}\r
.trend-up{color:var(--green);font-weight:700}\r
.trend-down{color:var(--red);font-weight:700}\r
\r
/* Barthel table */\r
.barthel-table{width:100%;border-collapse:collapse;font-size:12px}\r
.barthel-table th{padding:7px 10px;background:var(--gray-50);border-bottom:1px solid var(--gray-200);font-size:11px;font-weight:600;color:var(--gray-500);text-align:left}\r
.barthel-table td{padding:8px 10px;border-bottom:1px solid var(--gray-100);vertical-align:middle}\r
.barthel-table tr:last-child td{border-bottom:none}\r
.barthel-table select{padding:4px 6px;border:1px solid var(--gray-300);border-radius:4px;font-size:11px;color:var(--gray-700);background:var(--white);cursor:pointer}\r
.barthel-total{display:flex;align-items:center;justify-content:flex-end;gap:10px;padding:10px 16px;background:var(--blue-light);border-top:1px solid var(--blue-mid)}\r
.barthel-total-label{font-size:12px;color:var(--blue-dark);font-weight:600}\r
.barthel-total-score{font-size:22px;font-weight:700;color:var(--blue)}\r
.prev-total{font-size:12px;color:var(--gray-500)}\r
\r
/* Footer bar */\r
.fill-footer{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between}\r
.missing-count{font-size:12px;color:var(--red);display:flex;align-items:center;gap:5px}\r
.footer-actions{display:flex;gap:8px}\r
\r
/* Modal */\r
.modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);display:flex;align-items:center;justify-content:center;z-index:100;backdrop-filter:blur(2px)}\r
.modal{background:var(--white);border-radius:12px;width:520px;max-width:92vw;max-height:90vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.15)}\r
.modal-lg{width:640px}\r
.modal-header{padding:16px 20px 13px;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.modal-title{font-size:15px;font-weight:700}\r
.modal-close{width:25px;height:25px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}\r
.modal-close:hover{background:var(--gray-200)}\r
.modal-body{padding:16px 20px;overflow-y:auto;flex:1}\r
.modal-footer{padding:13px 20px;border-top:1px solid var(--gray-200);display:flex;justify-content:flex-end;gap:7px;flex-shrink:0}\r
.info-note{font-size:12px;padding:10px 12px;border-radius:6px;margin-bottom:12px;line-height:1.6}\r
.info-note.blue{background:var(--blue-light);color:var(--blue-dark)}\r
.info-note.amber{background:var(--amber-light);color:var(--amber)}\r
.info-note.red{background:var(--red-light);color:var(--red)}\r
.info-note.green{background:var(--green-light);color:var(--green)}\r
.diff-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:10px}\r
.diff-col{background:var(--gray-50);border:1px solid var(--gray-200);border-radius:7px;padding:12px}\r
.diff-col-title{font-size:11px;font-weight:700;color:var(--gray-500);text-transform:uppercase;letter-spacing:.04em;margin-bottom:8px}\r
.diff-row{display:flex;justify-content:space-between;font-size:12px;padding:4px 0;border-bottom:1px solid var(--gray-100)}\r
.diff-row:last-child{border-bottom:none}\r
.diff-row .changed{color:var(--blue);font-weight:600}\r
.deadline-form{margin-top:10px}\r
.deadline-row{display:flex;align-items:center;gap:10px;padding:10px;border:1px solid var(--gray-200);border-radius:7px;margin-bottom:8px;cursor:pointer}\r
.deadline-row input[type=radio]{accent-color:var(--blue)}\r
.deadline-row label{font-size:12px;color:var(--gray-700);cursor:pointer;flex:1}\r
.deadline-row select{padding:4px 8px;border:1px solid var(--gray-300);border-radius:5px;font-size:12px;color:var(--gray-700);background:var(--white)}\r
\r
.hidden{display:none!important}\r
.divider{height:1px;background:var(--gray-100);margin:10px 0}\r
\r
/* Therapist tags */\r
.th-tag{display:inline-flex;align-items:center;padding:2px 7px;border-radius:4px;font-size:11px;font-weight:700}\r
.th-pt{background:#DBEAFE;color:#1D4ED8}\r
.th-ot{background:#FCE7F3;color:#9D174D}\r
.th-st{background:var(--green-light);color:var(--green)}\r
.th-doc{background:var(--amber-light);color:var(--amber)}\r
.th-nur{background:var(--teal-light);color:var(--teal)}\r
.th-pha{background:var(--purple-light);color:var(--purple)}\r
.th-nut{background:#FEF3C7;color:#92400E}\r
\r
/* Remind list */\r
.remind-list{display:flex;flex-direction:column;gap:8px}\r
.remind-item{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border:1px solid var(--gray-200);border-radius:7px}\r
.remind-item-left{display:flex;align-items:center;gap:8px}\r
.remind-item-name{font-size:12px;font-weight:600;color:var(--gray-800)}\r
.remind-item-status{font-size:11px;color:var(--gray-500)}\r
</style>\r
</head>\r
<body>\r
\r
<!-- SIDEBAR -->\r
<aside class="sidebar">\r
<!--\r
  <div class="sidebar-logo">\r
    <div class="logo-text">PAC 管理系統</div>\r
    <div class="logo-sub">急性後期照護</div>\r
  </div>\r
  <nav class="sidebar-nav">\r
    <div class="nav-item disabled">🏠 個人儀表板</div>\r
    <div class="nav-item disabled">📋 個案管理</div>\r
    <div class="nav-item disabled">🛏 病床管理</div>\r
    <div class="nav-item disabled">📅 班表總覽頁</div>\r
    <div class="nav-item disabled">🏡 居家排班管理</div>\r
    <div class="nav-item active">📊 評估量表</div>\r
    <div class="nav-item disabled">💪 復健紀錄</div>\r
    <div class="nav-item disabled">📤 指標匯出</div>\r
  </nav>\r
-->\r
  <div class="sidebar-user">\r
    <div class="user-row">\r
      <div class="user-avatar mgr" id="user-avatar">林</div>\r
      <div>\r
        <div class="user-name" id="user-name">林美惠</div>\r
        <div class="user-role" id="user-role-label">個案管理師</div>\r
      </div>\r
    </div>\r
    <div class="role-switcher">\r
      <select class="role-select" id="role-select" onchange="switchRole(this.value)">\r
        <option value="mgr">個管師</option>\r
        <option value="sup">復健主管</option>\r
        <option value="pt">PT（物理治療師）</option>\r
        <option value="ot">OT（職能治療師）</option>\r
        <option value="st">ST（語言治療師）</option>\r
        <option value="other">其他醫事人員</option>\r
      </select>\r
      <span class="role-select-arrow">▾</span>\r
    </div>\r
  </div>\r
</aside>\r
\r
<!-- MAIN -->\r
<div class="main">\r
  <div class="topbar">\r
    <div class="breadcrumb" id="bc">評估量表</div>\r
    <div class="topbar-right">\r
      <span style="font-size:11px;color:var(--gray-400)">2026/06/24</span>\r
      <!-- 個管師/主管才看到 -->\r
      <div id="topbar-remind" class="notif-badge">\r
        <button class="btn btn-secondary btn-sm" onclick="openModal('modal-remind')">📣 待填提醒</button>\r
        <span class="notif-dot" id="remind-dot">3</span>\r
      </div>\r
      <div id="topbar-review" class="notif-badge hidden">\r
        <button class="btn btn-secondary btn-sm" onclick="openModal('modal-review')">📝 待審核變更</button>\r
        <span class="notif-dot">2</span>\r
      </div>\r
      <button id="topbar-deadline" class="btn btn-ghost btn-sm" onclick="openModal('modal-deadline')">⚙ 期限設定</button>\r
    </div>\r
  </div>\r
\r
  <div class="split-pane">\r
    <!-- LEFT PANE: 個案清單 -->\r
    <div class="left-pane">\r
      <div class="left-header">\r
        <div class="left-search">\r
          <span style="color:var(--gray-400);font-size:13px">🔍</span>\r
          <input type="text" placeholder="搜尋個案姓名">\r
        </div>\r
        <div class="filter-row">\r
          <div class="filter-chip active" onclick="switchFilter(this)">全部</div>\r
          <div class="filter-chip" onclick="switchFilter(this)">住院</div>\r
          <div class="filter-chip" onclick="switchFilter(this)">日照</div>\r
          <div class="filter-chip" onclick="switchFilter(this)">居家</div>\r
        </div>\r
      </div>\r
      <div class="case-list" id="case-list">\r
        <!-- 個案清單由 JS 渲染 -->\r
      </div>\r
    </div>\r
\r
    <!-- RIGHT PANE -->\r
    <div class="right-pane" id="right-pane">\r
      <!-- 預設空狀態 -->\r
      <div id="view-empty" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--gray-400);gap:10px">\r
        <div style="font-size:40px">📋</div>\r
        <div style="font-size:14px;font-weight:600">選擇左側個案以查看評估紀錄</div>\r
        <div style="font-size:12px">共 5 位個案待填寫</div>\r
      </div>\r
\r
      <!-- 個管師/主管：評估總表 -->\r
      <div id="view-summary" class="hidden">\r
        <div class="summary-view">\r
          <div class="page-header">\r
            <div>\r
              <div class="page-title" id="sum-name">陳建國</div>\r
              <div class="page-subtitle" id="sum-meta">住院・A301 床・CVA（腦中風）</div>\r
            </div>\r
            <div style="display:flex;gap:6px">\r
              <button class="btn btn-secondary btn-sm" onclick="openModal('modal-remind-single')">📣 發送提醒</button>\r
              <button class="btn btn-ghost btn-sm" onclick="openModal('modal-deadline')">⚙ 期限設定</button>\r
            </div>\r
          </div>\r
\r
          <!-- 病患基本資料 -->\r
          <div class="section-card">\r
            <div class="sc-header"><div class="sc-title">病患基本資料</div></div>\r
            <div class="sc-body">\r
              <div class="info-grid">\r
                <div class="info-field"><label>上游醫院</label><span>臺大醫院</span></div>\r
                <div class="info-field"><label>入院日期</label><span>2026/06/10</span></div>\r
                <div class="info-field"><label>預計出院</label><span>2026/09/02</span></div>\r
                <div class="info-field"><label>疾病別</label><span>CVA（腦中風）</span></div>\r
                <div class="info-field"><label>主治醫師</label><span>吳宗達 醫師</span></div>\r
                <div class="info-field"><label>療程週期</label><span>12 週（第 2 週）</span></div>\r
              </div>\r
              <div style="margin-top:10px;padding:10px;background:var(--gray-50);border-radius:6px;font-size:12px;color:var(--gray-600);line-height:1.7">\r
                <strong style="color:var(--gray-700)">醫師診斷：</strong>Left MCA infarction with right hemiparesis. Patient suitable for PAC rehabilitation program.\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- 評估次別一覽（多田風格） -->\r
          <div class="section-card">\r
            <div class="sc-header">\r
              <div class="sc-title">評估紀錄總表</div>\r
              <span style="font-size:11px;color:var(--gray-400)">最新一筆以藍底標示</span>\r
            </div>\r
            <table class="assess-table">\r
              <thead>\r
                <tr>\r
                  <th>次別</th>\r
                  <th>紀錄日期</th>\r
                  <th>病程週數</th>\r
                  <th><span class="th-tag th-pt">PT</span></th>\r
                  <th><span class="th-tag th-ot">OT</span></th>\r
                  <th><span class="th-tag th-st">ST</span></th>\r
                  <th>狀態</th>\r
                  <th>操作</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr>\r
                  <td><strong>初評</strong></td>\r
                  <td>2026/06/11</td>\r
                  <td>第 1 週</td>\r
                  <td class="score-pt">Br.III</td>\r
                  <td class="score-ot">30分</td>\r
                  <td class="score-st">輕度</td>\r
                  <td><span class="badge badge-green">✓ 完成</span></td>\r
                  <td><div class="row-action"><button class="btn btn-ghost btn-xs" onclick="openFillView('初評',true)">查看</button></div></td>\r
                </tr>\r
                <tr class="latest-row">\r
                  <td><strong>複評 1</strong> <span style="font-size:9px;color:var(--blue);font-weight:700">最新</span></td>\r
                  <td>2026/06/25 <span style="font-size:10px;color:var(--amber)">（明日）</span></td>\r
                  <td>第 3 週</td>\r
                  <td class="score-pt"><span class="badge badge-amber">待填</span></td>\r
                  <td class="score-ot"><span class="badge badge-amber">待填</span></td>\r
                  <td class="score-st"><span class="badge badge-green">✓ 完成</span></td>\r
                  <td><span class="badge badge-amber">填寫中</span></td>\r
                  <td><div class="row-action"><button class="btn btn-ghost btn-xs" onclick="openFillView('複評 1',false)">查看</button></div></td>\r
                </tr>\r
                <tr>\r
                  <td><strong>複評 2</strong></td>\r
                  <td>2026/07/16</td>\r
                  <td>第 6 週</td>\r
                  <td class="score-pt">—</td>\r
                  <td class="score-ot">—</td>\r
                  <td class="score-st">—</td>\r
                  <td><span class="badge badge-gray">未到期</span></td>\r
                  <td>—</td>\r
                </tr>\r
                <tr>\r
                  <td><strong>複評 3</strong></td>\r
                  <td>2026/08/06</td>\r
                  <td>第 9 週</td>\r
                  <td>—</td>\r
                  <td>—</td>\r
                  <td>—</td>\r
                  <td><span class="badge badge-gray">未到期</span></td>\r
                  <td>—</td>\r
                </tr>\r
                <tr>\r
                  <td><strong>結案</strong></td>\r
                  <td>2026/09/01</td>\r
                  <td>第 12 週</td>\r
                  <td>—</td>\r
                  <td>—</td>\r
                  <td>—</td>\r
                  <td><span class="badge badge-gray">未到期</span></td>\r
                  <td>—</td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
\r
          <!-- 各角色填寫狀況 -->\r
          <div class="section-card">\r
            <div class="sc-header">\r
              <div class="sc-title">複評 1 — 各角色填寫狀況</div>\r
              <span class="badge badge-amber">2 人待填</span>\r
            </div>\r
            <div class="sc-body" style="padding:0">\r
              <div class="remind-list" style="padding:12px 16px">\r
                <div class="remind-item">\r
                  <div class="remind-item-left">\r
                    <span class="th-tag th-pt">PT</span>\r
                    <div>\r
                      <div class="remind-item-name">黃志豪</div>\r
                      <div class="remind-item-status">待填 · 應填日期 2026/06/25</div>\r
                    </div>\r
                  </div>\r
                  <span class="badge badge-amber">待填</span>\r
                </div>\r
                <div class="remind-item">\r
                  <div class="remind-item-left">\r
                    <span class="th-tag th-ot">OT</span>\r
                    <div>\r
                      <div class="remind-item-name">李佳穎</div>\r
                      <div class="remind-item-status">待填 · 應填日期 2026/06/25</div>\r
                    </div>\r
                  </div>\r
                  <span class="badge badge-amber">待填</span>\r
                </div>\r
                <div class="remind-item">\r
                  <div class="remind-item-left">\r
                    <span class="th-tag th-st">ST</span>\r
                    <div>\r
                      <div class="remind-item-name">吳怡君</div>\r
                      <div class="remind-item-status">已送出 · 2026/06/24 14:30</div>\r
                    </div>\r
                  </div>\r
                  <span class="badge badge-green">✓ 完成</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- 治療師/填寫視圖 -->\r
      <div id="view-fill" class="hidden" style="display:flex;flex-direction:column;height:100%">\r
        <!-- 次別導覽 -->\r
        <div class="visit-nav" id="visit-nav">\r
          <div class="visit-tab done" onclick="openFillView('初評',true,this)">\r
            初評\r
            <span class="tab-dot green"></span>\r
          </div>\r
          <div class="visit-tab active" onclick="openFillView('複評 1',false,this)">\r
            複評 1\r
            <span class="tab-dot red"></span>\r
          </div>\r
          <div class="visit-tab" onclick="openFillView('複評 2',false,this)">複評 2</div>\r
          <div class="visit-tab" onclick="openFillView('複評 3',false,this)">複評 3</div>\r
          <div class="visit-tab" onclick="openFillView('結案',false,this)">結案</div>\r
        </div>\r
\r
        <!-- 鎖定 banner（他人填寫中，只有治療師視角看到） -->\r
        <div id="lock-banner" class="hidden" style="padding:10px 20px;flex-shrink:0">\r
          <div class="lock-banner">\r
            <div>\r
              <strong>🔒 黃志豪（PT）正在填寫中</strong>\r
              <div style="margin-top:2px;font-size:11px">開始時間：14:15・<span class="lock-timer" id="lock-countdown">剩餘 08:42</span> 自動解鎖</div>\r
            </div>\r
            <button class="btn btn-amber btn-sm" onclick="openModal('modal-lock')">查看詳情</button>\r
          </div>\r
        </div>\r
\r
        <!-- 填寫主體 -->\r
        <div style="flex:1;overflow-y:auto">\r
          <div class="fill-view">\r
            <div class="fill-header">\r
              <div>\r
                <div class="page-title" id="fill-case-name">陳建國 ─ <span id="fill-visit-label">複評 1</span></div>\r
                <div class="fill-meta" id="fill-meta">第 3 週・應填日期 2026/06/25・CVA（腦中風）</div>\r
              </div>\r
              <div style="display:flex;gap:6px" id="fill-header-actions">\r
                <!-- 個管師唯讀視角 -->\r
                <div id="mgr-fill-actions">\r
                  <span class="badge badge-gray" style="font-size:12px">👁 唯讀模式</span>\r
                </div>\r
                <!-- 治療師可填寫視角 -->\r
                <div id="th-fill-actions" class="hidden">\r
                  <button class="btn btn-secondary btn-sm" onclick="openModal('modal-change')">申請修改</button>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- 角色 tab（個管師和主管看得到，治療師只看自己） -->\r
            <div id="role-tab-row" class="role-tabs">\r
              <div class="role-tab active" onclick="switchRoleTab(this,'pt')">\r
                PT\r
                <span class="rdot" id="rdot-pt"></span>\r
              </div>\r
              <div class="role-tab" onclick="switchRoleTab(this,'ot')">\r
                OT\r
                <span class="rdot" id="rdot-ot"></span>\r
              </div>\r
              <div class="role-tab" onclick="switchRoleTab(this,'st')">ST</div>\r
              <div class="role-tab" onclick="switchRoleTab(this,'doc')">醫師</div>\r
              <div class="role-tab" onclick="switchRoleTab(this,'nur')">護理師</div>\r
              <div class="role-tab" onclick="switchRoleTab(this,'pha')">藥師</div>\r
              <div class="role-tab" onclick="switchRoleTab(this,'nut')">營養師</div>\r
            </div>\r
\r
            <!-- PT 表單 -->\r
            <div id="form-pt">\r
              <div class="form-section">\r
                <div class="form-section-header"><div class="form-section-title">Brunnstrom Stage</div></div>\r
                <div class="form-section-body">\r
                  <div class="form-row">\r
                    <div class="form-group">\r
                      <label>Br. Stage（上肢）<span class="required">*</span></label>\r
                      <div class="prev-val">上次：<span>Stage III</span></div>\r
                      <div class="score-compare-row">\r
                        <select class="form-control error" id="pt-br-upper">\r
                          <option value="">請選擇</option>\r
                          <option>Stage I</option><option>Stage II</option><option selected>Stage III</option><option>Stage IV</option><option>Stage V</option><option>Stage VI</option>\r
                        </select>\r
                        <div class="prev-score-badge"><span class="label">上次</span> Stage III</div>\r
                      </div>\r
                      <div class="missing-hint" id="err-br-upper">⚠ 必填欄位</div>\r
                    </div>\r
                    <div class="form-group">\r
                      <label>Br. Stage（下肢）<span class="required">*</span></label>\r
                      <div class="score-compare-row">\r
                        <select class="form-control" id="pt-br-lower">\r
                          <option>Stage I</option><option>Stage II</option><option>Stage III</option><option selected>Stage IV</option><option>Stage V</option><option>Stage VI</option>\r
                        </select>\r
                        <div class="prev-score-badge"><span class="label">上次</span> Stage III <span class="trend-up">↑</span></div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="form-section">\r
                <div class="form-section-header"><div class="form-section-title">Functional Status</div></div>\r
                <div class="form-section-body">\r
                  <div class="form-row-3">\r
                    <div class="form-group">\r
                      <label>Rolling</label>\r
                      <div class="score-compare-row"><select class="form-control"><option>Independent</option><option selected>Min A</option><option>Mod A</option><option>Max A</option><option>Dependent</option></select></div>\r
                      <div class="prev-val">上次：<span>Mod A</span> <span class="trend-up">↑</span></div>\r
                    </div>\r
                    <div class="form-group">\r
                      <label>Supine to Sit</label>\r
                      <select class="form-control"><option>Independent</option><option>Min A</option><option selected>Mod A</option><option>Max A</option><option>Dependent</option></select>\r
                      <div class="prev-val">上次：<span>Mod A</span></div>\r
                    </div>\r
                    <div class="form-group">\r
                      <label>Sit to Stand</label>\r
                      <select class="form-control"><option>Independent</option><option>Min A</option><option>Mod A</option><option selected>Max A</option><option>Dependent</option></select>\r
                      <div class="prev-val">上次：<span>Max A</span></div>\r
                    </div>\r
                    <div class="form-group">\r
                      <label>Transfer</label>\r
                      <select class="form-control"><option>Independent</option><option>Min A</option><option selected>Mod A</option><option>Max A</option><option>Dependent</option></select>\r
                      <div class="prev-val">上次：<span>Max A</span> <span class="trend-up">↑</span></div>\r
                    </div>\r
                    <div class="form-group">\r
                      <label>Balance（坐）</label>\r
                      <select class="form-control"><option>Normal</option><option selected>Fair</option><option>Poor</option><option>None</option></select>\r
                      <div class="prev-val">上次：<span>Poor</span> <span class="trend-up">↑</span></div>\r
                    </div>\r
                    <div class="form-group">\r
                      <label>Ambulation</label>\r
                      <select class="form-control"><option>Independent</option><option>Min A</option><option selected>Mod A</option><option>Max A</option><option>Non-ambulatory</option></select>\r
                      <div class="prev-val">上次：<span>Max A</span> <span class="trend-up">↑</span></div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="form-section">\r
                <div class="form-section-header"><div class="form-section-title">MMT & ROM（右側）</div></div>\r
                <div class="form-section-body">\r
                  <div class="form-row">\r
                    <div class="form-group">\r
                      <label>MMT 上肢</label>\r
                      <div class="score-compare-row">\r
                        <select class="form-control"><option>0</option><option>1</option><option>2</option><option selected>3</option><option>4</option><option>5</option></select>\r
                        <div class="prev-score-badge"><span class="label">上次</span> 2 <span class="trend-up">↑</span></div>\r
                      </div>\r
                    </div>\r
                    <div class="form-group">\r
                      <label>MMT 下肢</label>\r
                      <div class="score-compare-row">\r
                        <select class="form-control"><option>0</option><option>1</option><option>2</option><option>3</option><option selected>4</option><option>5</option></select>\r
                        <div class="prev-score-badge"><span class="label">上次</span> 3 <span class="trend-up">↑</span></div>\r
                      </div>\r
                    </div>\r
                    <div class="form-group">\r
                      <label>ROM 肩關節（屈曲）</label>\r
                      <div class="score-compare-row">\r
                        <input class="form-control" type="text" value="110°" style="width:80px">\r
                        <div class="prev-score-badge"><span class="label">上次</span> 90°</div>\r
                      </div>\r
                    </div>\r
                    <div class="form-group">\r
                      <label>ROM 髖關節（屈曲）</label>\r
                      <div class="score-compare-row">\r
                        <input class="form-control" type="text" value="95°" style="width:80px">\r
                        <div class="prev-score-badge"><span class="label">上次</span> 80°</div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="form-section">\r
                <div class="form-section-header"><div class="form-section-title">現況敘述</div></div>\r
                <div class="form-section-body">\r
                  <div class="form-group">\r
                    <label>PT 現況敘述 <span class="required">*</span></label>\r
                    <textarea class="form-control" rows="4">個案右側偏癱，目前可在監督下進行短距離步行，步態不穩定，需持續加強下肢肌力及平衡訓練。上肢功能有進步趨勢，Br. Stage 維持 III 但精細動作有改善。</textarea>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- OT 表單 -->\r
            <div id="form-ot" class="hidden">\r
              <div class="form-section">\r
                <div class="form-section-header">\r
                  <div class="form-section-title">ADL Barthel Index</div>\r
                  <div class="barthel-total">\r
                    <span class="prev-total">上次：30分</span>\r
                    <span class="barthel-total-label">目前總分</span>\r
                    <span class="barthel-total-score" id="barthel-score">45</span>\r
                    <span style="font-size:12px;color:var(--blue)">/100 <span class="trend-up">↑</span></span>\r
                  </div>\r
                </div>\r
                <table class="barthel-table">\r
                  <thead><tr><th>項目</th><th>分類</th><th>分數</th><th>上次</th></tr></thead>\r
                  <tbody>\r
                    <tr><td>進食</td><td>Self-Care</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 完全依賴</option><option value="5">5 - 需協助</option><option value="10" selected>10 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">5分</span></td></tr>\r
                    <tr><td>洗澡</td><td>Self-Care</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 完全依賴</option><option value="5" selected>5 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">0分</span></td></tr>\r
                    <tr><td>修飾</td><td>Self-Care</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 需協助</option><option value="5" selected>5 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">0分</span></td></tr>\r
                    <tr><td>穿脫衣物</td><td>Self-Care</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 完全依賴</option><option value="5" selected>5 - 需協助</option><option value="10">10 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">5分</span></td></tr>\r
                    <tr><td>大便控制</td><td>Sphincter</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 失禁</option><option value="5" selected>5 - 偶爾失禁</option><option value="10">10 - 自制</option></select></td><td><span style="color:var(--gray-400);font-size:11px">5分</span></td></tr>\r
                    <tr><td>小便控制</td><td>Sphincter</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 失禁</option><option value="5" selected>5 - 偶爾失禁</option><option value="10">10 - 自制</option></select></td><td><span style="color:var(--gray-400);font-size:11px">5分</span></td></tr>\r
                    <tr><td>如廁</td><td>Transfers</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 完全依賴</option><option value="5" selected>5 - 需協助</option><option value="10">10 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">0分</span></td></tr>\r
                    <tr><td>床椅轉位</td><td>Transfers</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 完全依賴</option><option value="5">5 - 大量協助</option><option value="10" selected>10 - 少量協助</option><option value="15">15 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">5分</span></td></tr>\r
                    <tr><td>行走</td><td>Locomotion</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 完全依賴</option><option value="5" selected>5 - 需輪椅</option><option value="10">10 - 少量協助</option><option value="15">15 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">0分</span></td></tr>\r
                    <tr><td>爬樓梯</td><td>Locomotion</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0" selected>0 - 無法</option><option value="5">5 - 需協助</option><option value="10">10 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">0分</span></td></tr>\r
                  </tbody>\r
                </table>\r
              </div>\r
              <div class="form-section">\r
                <div class="form-section-header"><div class="form-section-title">現況敘述</div></div>\r
                <div class="form-section-body">\r
                  <div class="form-group">\r
                    <label>OT 現況敘述 <span class="required">*</span></label>\r
                    <textarea class="form-control" rows="4" placeholder="請填寫職能評估現況敘述..."></textarea>\r
                    <div class="missing-hint">⚠ 必填欄位</div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- ST 表單 -->\r
            <div id="form-st" class="hidden">\r
              <div class="form-section">\r
                <div class="form-section-header"><div class="form-section-title">Speech & Language Function</div></div>\r
                <div class="form-section-body">\r
                  <div class="form-row-3">\r
                    <div class="form-group"><label>Aphasia</label><select class="form-control"><option>無</option><option selected>輕度</option><option>中度</option><option>重度</option><option>無法測</option></select><div class="prev-val">上次：<span>中度</span> <span class="trend-up">↑</span></div></div>\r
                    <div class="form-group"><label>Naming</label><select class="form-control"><option>正常</option><option selected>輕度障礙</option><option>中度障礙</option><option>重度障礙</option><option>無法測</option></select><div class="prev-val">上次：<span>中度障礙</span> <span class="trend-up">↑</span></div></div>\r
                    <div class="form-group"><label>Fluency</label><select class="form-control"><option>正常</option><option selected>輕度障礙</option><option>中度障礙</option><option>重度障礙</option></select><div class="prev-val">上次：<span>輕度障礙</span></div></div>\r
                    <div class="form-group"><label>Repetition</label><select class="form-control"><option>正常</option><option selected>輕度障礙</option><option>中度障礙</option><option>重度障礙</option></select><div class="prev-val">上次：<span>中度障礙</span> <span class="trend-up">↑</span></div></div>\r
                    <div class="form-group"><label>Comprehension</label><select class="form-control"><option>正常</option><option selected>輕度障礙</option><option>中度障礙</option><option>重度障礙</option></select><div class="prev-val">上次：<span>輕度障礙</span></div></div>\r
                    <div class="form-group"><label>Dysarthria</label><select class="form-control"><option>無</option><option selected>輕度</option><option>中度</option><option>重度</option></select><div class="prev-val">上次：<span>中度</span> <span class="trend-up">↑</span></div></div>\r
                    <div class="form-group"><label>Apraxia</label><select class="form-control"><option selected>無</option><option>輕度</option><option>中度</option><option>重度</option></select><div class="prev-val">上次：<span>無</span></div></div>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="form-section">\r
                <div class="form-section-header"><div class="form-section-title">Swallowing Function</div></div>\r
                <div class="form-section-body">\r
                  <div class="form-row-3">\r
                    <div class="form-group"><label>NG Tube</label><select class="form-control"><option selected>無</option><option>有</option></select></div>\r
                    <div class="form-group"><label>Dysphagia</label><select class="form-control"><option>無</option><option selected>輕度</option><option>中度</option><option>重度</option></select><div class="prev-val">上次：<span>中度</span> <span class="trend-up">↑</span></div></div>\r
                    <div class="form-group"><label>Choking</label><select class="form-control"><option>無</option><option selected>偶爾</option><option>常常</option></select></div>\r
                    <div class="form-group"><label>Drooling</label><select class="form-control"><option selected>無</option><option>輕度</option><option>明顯</option></select></div>\r
                    <div class="form-group"><label>口腔功能</label><select class="form-control"><option>正常</option><option selected>輕度障礙</option><option>中度障礙</option><option>重度障礙</option></select></div>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="form-section">\r
                <div class="form-section-header"><div class="form-section-title">現況敘述</div></div>\r
                <div class="form-section-body">\r
                  <div class="form-group">\r
                    <label>ST 現況敘述 <span class="required">*</span></label>\r
                    <textarea class="form-control" rows="4">個案語言功能已由中度改善至輕度失語症，命名能力有進步，但流利度仍需加強。吞嚥功能改善，由中度吞嚥困難進步至輕度，建議仍以糊狀飲食為主。</textarea>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- 醫師/護理師/藥師/營養師（其他醫事人員）簡表 -->\r
            <div id="form-doc" class="hidden">\r
              <div class="form-section">\r
                <div class="form-section-header"><div class="form-section-title">醫師評估</div></div>\r
                <div class="form-section-body">\r
                  <div class="form-group"><label>醫囑方向 <span class="required">*</span></label><textarea class="form-control" rows="3" placeholder="請填寫醫囑及治療方向..."></textarea></div>\r
                  <div class="form-group"><label>診斷更新</label><input class="form-control" type="text" placeholder="如有更新診斷請填寫"></div>\r
                  <div class="form-group"><label>備註</label><textarea class="form-control" rows="2" placeholder="其他備註"></textarea></div>\r
                </div>\r
              </div>\r
            </div>\r
            <div id="form-nur" class="hidden">\r
              <div class="form-section">\r
                <div class="form-section-header"><div class="form-section-title">護理評估</div></div>\r
                <div class="form-section-body">\r
                  <div class="form-row"><div class="form-group"><label>生命徵象</label><input class="form-control" value="BP 128/78, HR 72, SpO2 97%"></div><div class="form-group"><label>管路狀態</label><select class="form-control"><option selected>無管路</option><option>鼻胃管</option><option>導尿管</option><option>靜脈注射</option></select></div></div>\r
                  <div class="form-group"><label>護理紀錄 <span class="required">*</span></label><textarea class="form-control" rows="3" placeholder="請填寫護理評估紀錄..."></textarea></div>\r
                </div>\r
              </div>\r
            </div>\r
            <div id="form-pha" class="hidden">\r
              <div class="form-section">\r
                <div class="form-section-header"><div class="form-section-title">藥師評估</div></div>\r
                <div class="form-section-body">\r
                  <div class="form-group"><label>用藥評估 <span class="required">*</span></label><textarea class="form-control" rows="3" placeholder="請填寫用藥評估內容..."></textarea></div>\r
                  <div class="form-group"><label>藥物交互作用</label><select class="form-control"><option selected>無</option><option>有（請說明）</option></select></div>\r
                  <div class="form-group"><label>建議</label><textarea class="form-control" rows="2" placeholder="藥師建議"></textarea></div>\r
                </div>\r
              </div>\r
            </div>\r
            <div id="form-nut" class="hidden">\r
              <div class="form-section">\r
                <div class="form-section-header"><div class="form-section-title">營養師評估</div></div>\r
                <div class="form-section-body">\r
                  <div class="form-row"><div class="form-group"><label>體重</label><input class="form-control" value="68 kg"></div><div class="form-group"><label>BMI</label><input class="form-control" value="23.2" readonly style="background:var(--gray-50)"></div></div>\r
                  <div class="form-group"><label>飲食型態</label><select class="form-control"><option>一般飲食</option><option selected>糊狀飲食</option><option>流質飲食</option><option>管灌飲食</option></select></div>\r
                  <div class="form-group"><label>營養評估 <span class="required">*</span></label><textarea class="form-control" rows="3" placeholder="請填寫營養評估紀錄..."></textarea></div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Footer -->\r
            <div class="fill-footer" id="fill-footer">\r
              <div class="missing-count" id="missing-count">\r
                ⚠ 尚有 <strong style="margin:0 3px">2</strong> 個必填欄位未完成\r
              </div>\r
              <div class="footer-actions" id="footer-actions">\r
                <button class="btn btn-secondary" onclick="alert('已暫存')">暫存</button>\r
                <button class="btn btn-primary" onclick="alert('送出成功！')">送出評估</button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ══ MODALS ══ -->\r
\r
<!-- Modal 1: 鎖定提示 -->\r
<div id="modal-lock" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title">🔒 他人填寫中</div>\r
      <button class="modal-close" onclick="closeModal('modal-lock')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note amber">為避免資料覆蓋，每份評估表一次只能由一人填寫。</div>\r
      <div style="background:var(--gray-50);border-radius:8px;padding:16px;margin-bottom:12px">\r
        <div style="font-size:13px;font-weight:700;color:var(--gray-800);margin-bottom:8px">目前填寫者</div>\r
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">\r
          <span class="th-tag th-pt" style="font-size:13px;padding:4px 10px">PT</span>\r
          <div>\r
            <div style="font-weight:600">黃志豪（物理治療師）</div>\r
            <div style="font-size:11px;color:var(--gray-500)">開始填寫：14:15・今日</div>\r
          </div>\r
        </div>\r
        <div style="display:flex;align-items:center;gap:8px;padding:10px;background:var(--amber-light);border-radius:6px">\r
          <span style="font-size:20px">⏱</span>\r
          <div>\r
            <div style="font-size:12px;color:var(--amber);font-weight:600">自動解鎖倒數</div>\r
            <div class="lock-timer">08:42</div>\r
          </div>\r
        </div>\r
      </div>\r
      <div style="font-size:12px;color:var(--gray-500)">你目前可以<strong>查看</strong>此份評估，但無法編輯。送出後將自動解鎖，你可以再開始填寫。</div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-lock')">知道了</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal 2: 修改申請（治療師） -->\r
<div id="modal-change" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title">✏️ 申請修改評估</div>\r
      <button class="modal-close" onclick="closeModal('modal-change')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note blue">送出後的評估須由復健主管審核後才能修改。請說明修改原因。</div>\r
      <div class="form-group" style="margin-bottom:12px">\r
        <label style="font-size:12px;font-weight:600;color:var(--gray-600)">申請修改的次別</label>\r
        <input class="form-control" value="複評 1（2026/06/25）" readonly style="background:var(--gray-50)">\r
      </div>\r
      <div class="form-group" style="margin-bottom:12px">\r
        <label style="font-size:12px;font-weight:600;color:var(--gray-600)">修改角色</label>\r
        <input class="form-control" value="PT（黃志豪）" readonly style="background:var(--gray-50)">\r
      </div>\r
      <div class="form-group">\r
        <label style="font-size:12px;font-weight:600;color:var(--gray-600)">修改原因 <span class="required">*</span></label>\r
        <textarea class="form-control" rows="4" placeholder="請說明需要修改的原因，例如：填寫錯誤、臨床評估後有所調整..."></textarea>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-change')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-change');alert('已送出修改申請，等待復健主管審核')">送出申請</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal 3: 審核變更（主管/個管師） -->\r
<div id="modal-review" class="modal-overlay hidden">\r
  <div class="modal modal-lg">\r
    <div class="modal-header">\r
      <div class="modal-title">📝 審核修改申請</div>\r
      <button class="modal-close" onclick="closeModal('modal-review')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div style="margin-bottom:14px;padding:12px;background:var(--gray-50);border-radius:8px">\r
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">\r
          <div style="font-weight:600;font-size:13px">陳建國・複評 1・<span class="th-tag th-pt">PT</span></div>\r
          <span class="badge badge-amber">待審核</span>\r
        </div>\r
        <div style="font-size:12px;color:var(--gray-500)">申請者：黃志豪・2026/06/24 16:30</div>\r
        <div style="margin-top:8px;padding:8px;background:var(--amber-light);border-radius:5px;font-size:12px;color:var(--amber)">\r
          修改原因：Br. Stage 上肢填寫有誤，應為 Stage IV，當時記錄 Stage III 為筆誤。\r
        </div>\r
      </div>\r
      <div style="font-size:12px;font-weight:600;color:var(--gray-600);margin-bottom:8px">原始內容 vs 申請修改</div>\r
      <div class="diff-compare">\r
        <div class="diff-col">\r
          <div class="diff-col-title">原始填寫</div>\r
          <div class="diff-row"><span>Br. Stage 上肢</span><span>Stage III</span></div>\r
          <div class="diff-row"><span>Br. Stage 下肢</span><span>Stage IV</span></div>\r
          <div class="diff-row"><span>MMT 上肢</span><span>3</span></div>\r
          <div class="diff-row"><span>現況敘述</span><span style="color:var(--gray-400)">（原文）</span></div>\r
        </div>\r
        <div class="diff-col">\r
          <div class="diff-col-title">申請修改為</div>\r
          <div class="diff-row"><span>Br. Stage 上肢</span><span class="changed">Stage IV ✎</span></div>\r
          <div class="diff-row"><span>Br. Stage 下肢</span><span>Stage IV</span></div>\r
          <div class="diff-row"><span>MMT 上肢</span><span>3</span></div>\r
          <div class="diff-row"><span>現況敘述</span><span style="color:var(--gray-400)">（未修改）</span></div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-danger" onclick="closeModal('modal-review');alert('已拒絕修改申請')">拒絕</button>\r
      <button class="btn btn-secondary" onclick="closeModal('modal-review')">暫不處理</button>\r
      <button class="btn btn-green" onclick="closeModal('modal-review');alert('已核准，評估已更新')">✓ 核准修改</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal 4: 期限設定 -->\r
<div id="modal-deadline" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title">⚙ 評估填寫期限設定</div>\r
      <button class="modal-close" onclick="closeModal('modal-deadline')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note blue">設定後，達到期限的評估將鎖定，治療師須透過修改申請才能更動。</div>\r
      <div class="deadline-form">\r
        <div class="deadline-row">\r
          <input type="radio" name="deadline" id="d1" checked>\r
          <label for="d1">送展延前 <select><option>3</option><option selected>5</option><option>7</option></select> 天鎖定</label>\r
        </div>\r
        <div class="deadline-row">\r
          <input type="radio" name="deadline" id="d2">\r
          <label for="d2">個案結案後全部鎖定</label>\r
        </div>\r
        <div class="deadline-row">\r
          <input type="radio" name="deadline" id="d3">\r
          <label for="d3">送出後 <select><option>3</option><option>7</option><option selected>14</option><option>30</option></select> 天後鎖定</label>\r
        </div>\r
      </div>\r
      <div class="divider"></div>\r
      <div style="font-size:11px;color:var(--gray-400)">目前設定：送展延前 <strong>5</strong> 天鎖定・上次更新：2026/06/01 林美惠</div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-deadline')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-deadline');alert('期限設定已儲存')">儲存設定</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal 5: 發送提醒（個管師 topbar） -->\r
<div id="modal-remind" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title">📣 發送填寫提醒</div>\r
      <button class="modal-close" onclick="closeModal('modal-remind')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note blue">以下治療師有逾期或即將逾期的評估尚未填寫，系統將發送通知提醒。</div>\r
      <div class="remind-list">\r
        <div class="remind-item">\r
          <div class="remind-item-left">\r
            <input type="checkbox" checked>\r
            <span class="th-tag th-pt">PT</span>\r
            <div><div class="remind-item-name">黃志豪</div><div class="remind-item-status">陳建國複評1・王淑芬複評2（逾期）</div></div>\r
          </div>\r
          <span class="badge badge-red">逾期</span>\r
        </div>\r
        <div class="remind-item">\r
          <div class="remind-item-left">\r
            <input type="checkbox" checked>\r
            <span class="th-tag th-ot">OT</span>\r
            <div><div class="remind-item-name">李佳穎</div><div class="remind-item-status">陳建國複評1・劉家豪初評</div></div>\r
          </div>\r
          <span class="badge badge-amber">待填</span>\r
        </div>\r
        <div class="remind-item">\r
          <div class="remind-item-left">\r
            <input type="checkbox" checked>\r
            <span style="font-size:11px;font-weight:700;color:var(--purple);background:var(--purple-light);padding:2px 7px;border-radius:4px">主管</span>\r
            <div><div class="remind-item-name">王復健主管</div><div class="remind-item-status">2 件待審核修改申請</div></div>\r
          </div>\r
          <span class="badge badge-purple">待審核</span>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-remind')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-remind');alert('已發送提醒通知')">發送通知</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal 6: 單一個案發送提醒 -->\r
<div id="modal-remind-single" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title">📣 發送提醒 — 陳建國</div>\r
      <button class="modal-close" onclick="closeModal('modal-remind-single')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note blue">發送提醒給此個案所有未填治療師及復健主管。</div>\r
      <div class="remind-list">\r
        <div class="remind-item">\r
          <div class="remind-item-left">\r
            <input type="checkbox" checked>\r
            <span class="th-tag th-pt">PT</span>\r
            <div><div class="remind-item-name">黃志豪</div><div class="remind-item-status">複評 1 待填・應填 2026/06/25</div></div>\r
          </div>\r
          <span class="badge badge-amber">待填</span>\r
        </div>\r
        <div class="remind-item">\r
          <div class="remind-item-left">\r
            <input type="checkbox" checked>\r
            <span class="th-tag th-ot">OT</span>\r
            <div><div class="remind-item-name">李佳穎</div><div class="remind-item-status">複評 1 待填・應填 2026/06/25</div></div>\r
          </div>\r
          <span class="badge badge-amber">待填</span>\r
        </div>\r
        <div class="remind-item">\r
          <div class="remind-item-left">\r
            <input type="checkbox" checked>\r
            <span style="font-size:11px;font-weight:700;color:var(--purple);background:var(--purple-light);padding:2px 7px;border-radius:4px">主管</span>\r
            <div><div class="remind-item-name">王復健主管</div><div class="remind-item-status">1 件待審核申請</div></div>\r
          </div>\r
          <span class="badge badge-purple">待審核</span>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-remind-single')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-remind-single');alert('已發送提醒')">發送通知</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<script>\r
// ── 資料 ──\r
const cases = [\r
  {id:'c1', name:'陳建國', mode:'住院', bed:'A301', disease:'CVA', visits:[\r
    {label:'初評', st:'done'},{label:'複評1', st:'filling'},{label:'複評2', st:'pending'},{label:'複評3', st:'pending'},{label:'結案', st:'pending'}\r
  ]},\r
  {id:'c2', name:'王淑芬', mode:'居家', bed:'—', disease:'TKR', visits:[\r
    {label:'初評', st:'done'},{label:'複評1', st:'done'},{label:'複評2', st:'overdue'},{label:'複評3', st:'pending'},{label:'結案', st:'pending'}\r
  ]},\r
  {id:'c3', name:'劉家豪', mode:'日照', bed:'—', disease:'CVA', visits:[\r
    {label:'初評', st:'pending'},{label:'複評1', st:'pending'},{label:'複評2', st:'pending'},{label:'複評3', st:'pending'},{label:'結案', st:'pending'}\r
  ]},\r
  {id:'c4', name:'林翠娟', mode:'住院', bed:'B205', disease:'Hip Fx', visits:[\r
    {label:'初評', st:'done'},{label:'複評1', st:'done'},{label:'複評2', st:'done'},{label:'複評3', st:'pending'},{label:'結案', st:'pending'}\r
  ]},\r
  {id:'c5', name:'張明輝', mode:'住院', bed:'C118', disease:'CVA', visits:[\r
    {label:'初評', st:'done'},{label:'複評1', st:'done'},{label:'複評2', st:'done'},{label:'複評3', st:'done'},{label:'結案', st:'pending'}\r
  ]}\r
];\r
\r
const roleConfig = {\r
  mgr:  {name:'林美惠', label:'個案管理師', av:'mgr', ch:'林'},\r
  sup:  {name:'王復健主管', label:'復健主管', av:'sup', ch:'王'},\r
  pt:   {name:'黃志豪', label:'PT（物理治療師）', av:'pt', ch:'黃'},\r
  ot:   {name:'李佳穎', label:'OT（職能治療師）', av:'ot', ch:'李'},\r
  st:   {name:'吳怡君', label:'ST（語言治療師）', av:'st', ch:'吳'},\r
  other:{name:'陳玉玲', label:'護理師', av:'other', ch:'陳'}\r
};\r
\r
let currentRole = 'mgr';\r
let currentCase = null;\r
\r
function renderCaseList(){\r
  const list = document.getElementById('case-list');\r
  list.innerHTML = cases.map(c=>{\r
    const stHTML = c.visits.map(v=>\`<span class="status-pill status-\${v.st}">\${\r
      v.st==='done'?'✓ '+v.label:v.st==='overdue'?'⚠ '+v.label:v.st==='filling'?'● '+v.label:v.label\r
    }</span>\`).join('');\r
    return \`<div class="case-item" id="ci-\${c.id}" onclick="selectCase('\${c.id}')">\r
      <div class="case-name">\${c.name}</div>\r
      <div class="case-meta">\${c.mode}・\${c.bed}・\${c.disease}</div>\r
      <div class="case-status-row">\${stHTML}</div>\r
    </div>\`;\r
  }).join('');\r
}\r
\r
function selectCase(id){\r
  currentCase = id;\r
  document.querySelectorAll('.case-item').forEach(el=>el.classList.remove('active'));\r
  document.getElementById('ci-'+id).classList.add('active');\r
\r
  const c = cases.find(x=>x.id===id);\r
  document.getElementById('view-empty').classList.add('hidden');\r
\r
  if(currentRole==='mgr'||currentRole==='sup'){\r
    // 個管師/主管：看總表\r
    document.getElementById('view-summary').classList.remove('hidden');\r
    document.getElementById('view-fill').classList.add('hidden');\r
    document.getElementById('sum-name').textContent = c.name;\r
    document.getElementById('sum-meta').textContent = c.mode+'・'+c.bed+' 床・'+c.disease;\r
    document.getElementById('bc').textContent = '評估量表 › '+c.name;\r
  } else {\r
    // 治療師：直接進填寫頁，預設最近應填次別\r
    document.getElementById('view-summary').classList.add('hidden');\r
    openFillView('複評 1', false);\r
    document.getElementById('bc').textContent = '評估量表 › '+c.name+' › 複評 1';\r
  }\r
}\r
\r
function openFillView(visitLabel, readOnly, tabEl){\r
  document.getElementById('view-summary').classList.add('hidden');\r
  document.getElementById('view-empty').classList.add('hidden');\r
  const fillView = document.getElementById('view-fill');\r
  fillView.classList.remove('hidden');\r
  fillView.style.display='flex';\r
\r
  document.getElementById('fill-visit-label').textContent = visitLabel;\r
\r
  // 次別 tab 高亮\r
  if(tabEl){\r
    document.querySelectorAll('.visit-tab').forEach(t=>t.classList.remove('active'));\r
    tabEl.classList.add('active');\r
  }\r
\r
  // 角色 tab 顯示邏輯\r
  const roleTabs = document.getElementById('role-tab-row');\r
  if(currentRole==='mgr'||currentRole==='sup'){\r
    roleTabs.style.display='flex';\r
    // 顯示所有 tab\r
    document.querySelectorAll('.role-tab').forEach(t=>t.style.display='');\r
    // 個管師唯讀\r
    document.getElementById('mgr-fill-actions').classList.remove('hidden');\r
    document.getElementById('th-fill-actions').classList.add('hidden');\r
    document.getElementById('fill-footer').style.display='none';\r
    document.getElementById('lock-banner').classList.add('hidden');\r
    // 預設顯示 PT\r
    switchRoleTab(roleTabs.querySelector('.role-tab'), 'pt');\r
  } else {\r
    // 治療師只看自己的 tab\r
    roleTabs.style.display='none';\r
    document.getElementById('mgr-fill-actions').classList.add('hidden');\r
    document.getElementById('th-fill-actions').classList.remove('hidden');\r
    document.getElementById('fill-footer').style.display='flex';\r
    // PT鎖定示意（PT角色才顯示）\r
    const isLocked = (currentRole==='ot') && visitLabel==='複評 1';\r
    document.getElementById('lock-banner').classList.toggle('hidden', !isLocked);\r
    // 顯示對應 role 的表單\r
    ['pt','ot','st','doc','nur','pha','nut'].forEach(r=>document.getElementById('form-'+r).classList.add('hidden'));\r
    const roleMap = {pt:'pt',ot:'ot',st:'st',other:'nur'};\r
    const formId = roleMap[currentRole]||'pt';\r
    document.getElementById('form-'+formId).classList.remove('hidden');\r
  }\r
\r
  if(currentCase){\r
    const c=cases.find(x=>x.id===currentCase);\r
    document.getElementById('fill-case-name').innerHTML = c.name+' ─ <span id="fill-visit-label">'+visitLabel+'</span>';\r
    document.getElementById('fill-meta').textContent = (visitLabel==='初評'?'第 1 週':'第 3 週')+'・應填日期 2026/06/25・'+c.disease;\r
  }\r
}\r
\r
function switchRoleTab(el, roleId){\r
  document.querySelectorAll('.role-tab').forEach(t=>t.classList.remove('active'));\r
  el.classList.add('active');\r
  const forms = ['pt','ot','st','doc','nur','pha','nut'];\r
  forms.forEach(r=>document.getElementById('form-'+r).classList.add('hidden'));\r
  const formMap = {pt:'pt',ot:'ot',st:'st',doc:'doc',nur:'nur',pha:'pha',nut:'nut'};\r
  document.getElementById('form-'+(formMap[roleId]||'pt')).classList.remove('hidden');\r
}\r
\r
function switchRole(role){\r
  currentRole = role;\r
  const cfg = roleConfig[role];\r
  document.getElementById('user-name').textContent = cfg.name;\r
  document.getElementById('user-role-label').textContent = cfg.label;\r
  const av = document.getElementById('user-avatar');\r
  av.textContent = cfg.ch;\r
  av.className = 'user-avatar '+cfg.av;\r
\r
  // topbar 按鈕顯示\r
  const isMgr = role==='mgr';\r
  const isSup = role==='sup';\r
  document.getElementById('topbar-remind').classList.toggle('hidden', !isMgr);\r
  document.getElementById('topbar-review').classList.toggle('hidden', !(isMgr||isSup));\r
  document.getElementById('topbar-deadline').classList.toggle('hidden', !(isMgr||isSup));\r
\r
  // 重置主體\r
  document.getElementById('view-empty').classList.remove('hidden');\r
  document.getElementById('view-summary').classList.add('hidden');\r
  document.getElementById('view-fill').classList.add('hidden');\r
  document.querySelectorAll('.case-item').forEach(el=>el.classList.remove('active'));\r
  currentCase=null;\r
}\r
\r
function switchFilter(el){\r
  document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));\r
  el.classList.add('active');\r
}\r
\r
function openModal(id){document.getElementById(id).classList.remove('hidden')}\r
function closeModal(id){document.getElementById(id).classList.add('hidden')}\r
document.querySelectorAll('.modal-overlay').forEach(o=>{\r
  o.addEventListener('click',function(e){if(e.target===this)this.classList.add('hidden')});\r
});\r
\r
// 倒數計時器示意\r
let sec = 8*60+42;\r
setInterval(()=>{\r
  if(sec>0)sec--;\r
  const m=Math.floor(sec/60),s=sec%60;\r
  document.querySelectorAll('.lock-timer').forEach(el=>el.textContent=\`剩餘 \${String(m).padStart(2,'0')}:\${String(s).padStart(2,'0')}\`);\r
},1000);\r
\r
// Init\r
renderCaseList();\r
<\/script>\r
</body>\r
</html>`,ug=`<!DOCTYPE html>\r
<html lang="zh-TW">\r
<head>\r
<meta charset="UTF-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1.0">\r
<title>PAC 指標匯出</title>\r
<style>\r
*{box-sizing:border-box;margin:0;padding:0}\r
:root{\r
  --blue:#2563EB;--blue-light:#EFF6FF;--blue-mid:#BFDBFE;--blue-dark:#1E40AF;\r
  --gray-50:#F8FAFC;--gray-100:#F1F5F9;--gray-200:#E2E8F0;--gray-300:#CBD5E1;\r
  --gray-400:#94A3B8;--gray-500:#64748B;--gray-600:#475569;--gray-700:#334155;--gray-900:#0F172A;\r
  --green:#16A34A;--green-light:#DCFCE7;\r
  --amber:#D97706;--amber-light:#FEF3C7;\r
  --red:#DC2626;--red-light:#FEE2E2;\r
  --purple:#7C3AED;--purple-light:#EDE9FE;\r
  --teal:#0D9488;--teal-light:#CCFBF1;\r
  --white:#FFFFFF\r
}\r
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans TC',sans-serif;background:var(--gray-50);color:var(--gray-900);height:100vh;display:flex;overflow:hidden;font-size:14px}\r
\r
/* Sidebar */\r
.sidebar{width:192px;min-width:192px;background:var(--white);border-right:1px solid var(--gray-200);display:flex;flex-direction:column}\r
.sidebar-logo{padding:16px 16px 13px;border-bottom:1px solid var(--gray-200)}\r
.logo-text{font-size:14px;font-weight:700;color:var(--blue)}\r
.logo-sub{font-size:11px;color:var(--gray-400);margin-top:2px}\r
.sidebar-nav{padding:6px 0;flex:1}\r
.nav-item{display:flex;align-items:center;gap:8px;padding:9px 14px;font-size:13px;color:var(--gray-500);border-left:3px solid transparent;cursor:default}\r
.nav-item.active{background:var(--blue-light);color:var(--blue);font-weight:600;border-left-color:var(--blue)}\r
.nav-item.disabled{opacity:.38;cursor:not-allowed}\r
.sidebar-user{margin-top: auto;padding:11px 14px;border-top:1px solid var(--gray-200);display:flex;align-items:center;gap:8px}\r
.user-avatar{width:28px;height:28px;border-radius:50%;background:var(--blue-mid);color:var(--blue-dark);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700}\r
.user-name{font-size:12px;font-weight:600;color:var(--gray-700)}\r
.user-role{font-size:11px;color:var(--gray-400)}\r
\r
/* Main */\r
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}\r
.topbar{background:var(--white);border-bottom:1px solid var(--gray-200);padding:0 20px;height:48px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.breadcrumb{font-size:12px;color:var(--gray-500)}\r
.content{flex:1;overflow-y:auto;padding:20px}\r
\r
/* Buttons */\r
.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .15s;white-space:nowrap}\r
.btn-primary{background:var(--blue);color:var(--white)}.btn-primary:hover{background:var(--blue-dark)}\r
.btn-secondary{background:var(--white);color:var(--gray-700);border:1px solid var(--gray-300)}.btn-secondary:hover{background:var(--gray-50)}\r
.btn-ghost{background:transparent;color:var(--blue);border:1px solid var(--blue-mid)}.btn-ghost:hover{background:var(--blue-light)}\r
.btn-teal{background:var(--white);color:var(--teal);border:1px solid #99F6E4}.btn-teal:hover{background:var(--teal-light)}\r
.btn-sm{padding:5px 10px;font-size:12px}.btn-xs{padding:3px 8px;font-size:11px}\r
\r
/* Badges */\r
.badge{display:inline-flex;align-items:center;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:600}\r
.badge-blue{background:var(--blue-light);color:var(--blue)}\r
.badge-green{background:var(--green-light);color:var(--green)}\r
.badge-amber{background:var(--amber-light);color:var(--amber)}\r
.badge-gray{background:var(--gray-100);color:var(--gray-500)}\r
.badge-red{background:var(--red-light);color:var(--red)}\r
.badge-purple{background:var(--purple-light);color:var(--purple)}\r
.badge-teal{background:var(--teal-light);color:var(--teal)}\r
\r
/* Tabs */\r
.tabs{display:flex;border-bottom:2px solid var(--gray-200);margin-bottom:16px}\r
.tab{padding:8px 16px;font-size:13px;font-weight:500;color:var(--gray-500);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px}\r
.tab.active{color:var(--blue);border-bottom-color:var(--blue)}\r
\r
/* Page header */\r
.page-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px}\r
.page-title{font-size:18px;font-weight:700}\r
.page-subtitle{font-size:12px;color:var(--gray-500);margin-top:3px}\r
\r
/* Filter card */\r
.filter-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:16px 20px;margin-bottom:16px}\r
.filter-card-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}\r
.filter-card-title{font-size:13px;font-weight:600;color:var(--gray-700)}\r
.filter-row{display:flex;gap:12px;flex-wrap:wrap;align-items:flex-end}\r
.filter-group{display:flex;flex-direction:column;gap:5px}\r
.filter-label{font-size:11px;font-weight:500;color:var(--gray-500);text-transform:uppercase;letter-spacing:.04em}\r
.filter-control{padding:6px 10px;border:1px solid var(--gray-300);border-radius:6px;font-size:13px;color:var(--gray-800);background:var(--white);outline:none;min-width:130px}\r
.filter-control:focus{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}\r
select.filter-control{cursor:pointer}\r
.filter-sep{font-size:13px;color:var(--gray-400);padding-bottom:7px}\r
.filter-result{display:flex;align-items:center;gap:10px;margin-top:14px;padding-top:14px;border-top:1px solid var(--gray-100)}\r
.filter-result-text{font-size:13px;color:var(--gray-600)}\r
.filter-result-count{font-size:20px;font-weight:700;color:var(--blue)}\r
\r
/* Indicator grid */\r
.indicator-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin-bottom:16px}\r
.indicator-card{background:var(--white);border:1px solid var(--gray-200);border-radius:8px;padding:14px;cursor:pointer;transition:all .15s}\r
.indicator-card:hover{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}\r
.indicator-name{font-size:12px;color:var(--gray-600);margin-bottom:8px;line-height:1.4}\r
.indicator-value{font-size:22px;font-weight:700;color:var(--gray-900);margin-bottom:6px}\r
.indicator-value span{font-size:13px;font-weight:400;color:var(--gray-500)}\r
.indicator-progress{height:4px;background:var(--gray-100);border-radius:999px;overflow:hidden;margin-bottom:6px}\r
.indicator-progress-bar{height:100%;border-radius:999px;background:var(--blue)}\r
.indicator-tracking{font-size:11px;color:var(--gray-400)}\r
.indicator-card.complete .indicator-value{color:var(--green)}\r
.indicator-card.complete{border-color:#BBF7D0}\r
.indicator-card.pending .indicator-value{color:var(--amber)}\r
\r
/* Section */\r
.section-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;margin-bottom:16px;overflow:hidden}\r
.sc-header{padding:11px 17px;border-bottom:1px solid var(--gray-100);display:flex;align-items:center;justify-content:space-between;background:var(--gray-50)}\r
.sc-title{font-size:13px;font-weight:600;color:var(--gray-700)}\r
.sc-body{padding:0}\r
\r
/* Case tracking table */\r
.tracking-table{width:100%;border-collapse:collapse;font-size:12px}\r
.tracking-table th{text-align:left;padding:8px 10px;background:var(--gray-50);color:var(--gray-500);font-weight:600;font-size:10px;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid var(--gray-200);white-space:nowrap}\r
.tracking-table td{padding:9px 10px;border-bottom:1px solid var(--gray-100);color:var(--gray-700);vertical-align:middle}\r
.tracking-table tr:last-child td{border-bottom:none}\r
.tracking-table tr:hover td{background:var(--gray-50)}\r
.tracking-table th.sticky-col,.tracking-table td.sticky-col{position:sticky;left:0;z-index:2;background:var(--white)}\r
.tracking-table th.sticky-col{background:var(--gray-50)}\r
\r
/* Tracking status */\r
.track-status{display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:999px;font-size:11px;font-weight:600;cursor:pointer;border:none}\r
.track-status.done{background:var(--green-light);color:var(--green)}\r
.track-status.pending{background:var(--amber-light);color:var(--amber)}\r
.track-status.failed{background:var(--gray-100);color:var(--gray-500)}\r
.track-status.not-started{background:var(--gray-100);color:var(--gray-400)}\r
\r
/* Yes/No toggle */\r
.yn-toggle{display:inline-flex;border:1px solid var(--gray-200);border-radius:6px;overflow:hidden}\r
.yn-btn{padding:3px 10px;font-size:11px;font-weight:600;cursor:pointer;background:var(--white);border:none;color:var(--gray-400)}\r
.yn-btn.yes.active{background:var(--red-light);color:var(--red)}\r
.yn-btn.no.active{background:var(--green-light);color:var(--green)}\r
.yn-btn:hover:not(.active){background:var(--gray-50)}\r
\r
/* Table scroll wrapper */\r
.table-scroll{overflow-x:auto;max-height:420px;overflow-y:auto}\r
\r
/* Contact chip */\r
.contact-chip{display:inline-flex;align-items:center;gap:3px;font-size:11px;color:var(--gray-600);background:var(--gray-100);padding:2px 6px;border-radius:4px;white-space:nowrap}\r
\r
/* Disposition tag */\r
.disp-tag{display:inline-flex;align-items:center;padding:2px 6px;border-radius:4px;font-size:10px;font-weight:600}\r
.disp-home{background:var(--teal-light);color:var(--teal)}\r
.disp-ltc{background:var(--purple-light);color:var(--purple)}\r
.disp-sw{background:var(--amber-light);color:var(--amber)}\r
.disp-none{background:var(--gray-100);color:var(--gray-400)}\r
\r
/* Note input inline */\r
.note-input{width:100%;padding:4px 7px;border:1px solid var(--gray-200);border-radius:5px;font-size:11px;color:var(--gray-700);background:var(--white);outline:none;min-width:120px}\r
.note-input:focus{border-color:var(--blue)}\r
\r
/* Modal */\r
.modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);display:flex;align-items:center;justify-content:center;z-index:100;backdrop-filter:blur(2px)}\r
.modal{background:var(--white);border-radius:12px;width:560px;max-width:92vw;max-height:88vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.15)}\r
.modal-lg{width:720px}\r
.modal-xl{width:880px}\r
.modal-sm{width:420px}\r
.modal-header{padding:16px 20px 13px;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.modal-title{font-size:15px;font-weight:700}\r
.modal-close{width:25px;height:25px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}\r
.modal-close:hover{background:var(--gray-200)}\r
.modal-body{padding:16px 20px;overflow-y:auto;flex:1}\r
.modal-footer{padding:13px 20px;border-top:1px solid var(--gray-200);display:flex;justify-content:flex-end;gap:7px;flex-shrink:0}\r
\r
/* Form */\r
.form-group{display:flex;flex-direction:column;gap:5px;margin-bottom:13px}\r
.form-group label{font-size:12px;font-weight:500;color:var(--gray-600)}\r
.form-control{padding:7px 10px;border:1px solid var(--gray-300);border-radius:6px;font-size:13px;color:var(--gray-800);background:var(--white);outline:none}\r
.form-control:focus{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}\r
select.form-control{cursor:pointer}\r
textarea.form-control{resize:vertical;min-height:70px}\r
\r
/* Field manager */\r
.field-list{display:flex;flex-direction:column;gap:8px;margin-bottom:14px}\r
.field-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--gray-200);border-radius:7px;background:var(--white)}\r
.field-item.system{background:var(--gray-50)}\r
.field-drag{color:var(--gray-300);cursor:grab;font-size:14px}\r
.field-name{flex:1;font-size:13px;color:var(--gray-700);font-weight:500}\r
.field-type{font-size:11px;color:var(--gray-400);background:var(--gray-100);padding:2px 6px;border-radius:4px}\r
.field-badge-sys{font-size:10px;color:var(--blue);background:var(--blue-light);padding:2px 6px;border-radius:4px;font-weight:600}\r
.field-toggle{width:36px;height:20px;border-radius:999px;border:none;cursor:pointer;position:relative;transition:background .15s}\r
.field-toggle.on{background:var(--blue)}\r
.field-toggle.off{background:var(--gray-300)}\r
.field-toggle::after{content:'';position:absolute;width:14px;height:14px;border-radius:50%;background:white;top:3px;transition:left .15s}\r
.field-toggle.on::after{left:19px}\r
.field-toggle.off::after{left:3px}\r
.field-delete{color:var(--gray-300);cursor:pointer;font-size:14px;border:none;background:none;padding:2px}\r
.field-delete:hover{color:var(--red)}\r
\r
/* Indicator detail */\r
.indicator-detail-row{display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--gray-100)}\r
.indicator-detail-row:last-child{border-bottom:none}\r
.indicator-detail-name{font-size:13px;color:var(--gray-700)}\r
.indicator-detail-val{font-size:15px;font-weight:700;color:var(--blue)}\r
.indicator-formula{font-size:11px;color:var(--gray-400);margin-top:2px}\r
\r
/* Export preview */\r
.export-section{margin-bottom:16px}\r
.export-section-title{font-size:12px;font-weight:600;color:var(--gray-600);margin-bottom:8px;display:flex;align-items:center;gap:6px}\r
.export-section-title::after{content:'';flex:1;height:1px;background:var(--gray-200)}\r
.export-check-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px}\r
.export-check-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;font-size:12px}\r
.export-check-item input{accent-color:var(--blue)}\r
.export-check-item:hover{background:var(--gray-50)}\r
\r
.info-note{font-size:12px;padding:10px 12px;border-radius:6px;margin-bottom:12px}\r
.info-note.blue{background:var(--blue-light);color:var(--blue-dark)}\r
.info-note.amber{background:var(--amber-light);color:var(--amber)}\r
\r
.divider{height:1px;background:var(--gray-100);margin:13px 0}\r
.hidden{display:none!important}\r
.mt-10{margin-top:10px}\r
/* Expandable case list */\r
.case-track-list{display:flex;flex-direction:column}\r
.case-track-item{border-bottom:1px solid var(--gray-100)}\r
.case-track-item:last-child{border-bottom:none}\r
.case-track-row{display:flex;align-items:center;gap:10px;padding:11px 16px;cursor:pointer;transition:background .12s}\r
.case-track-row:hover{background:var(--gray-50)}\r
.case-track-expand-btn{width:20px;height:20px;border-radius:4px;border:1px solid var(--gray-200);background:var(--white);color:var(--gray-400);font-size:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;transition:all .15s}\r
.case-track-expand-btn.open{background:var(--blue-light);border-color:var(--blue-mid);color:var(--blue)}\r
.case-track-name{font-size:13px;font-weight:600;color:var(--gray-900);min-width:60px}\r
.case-track-meta{display:flex;align-items:center;gap:10px;flex:1;flex-wrap:wrap}\r
.case-track-detail{background:var(--gray-50);border-top:1px solid var(--gray-100);padding:16px 20px 16px 46px}\r
.case-track-contact{display:flex;gap:10px;margin-bottom:14px;flex-wrap:wrap}\r
.case-track-questions{display:flex;flex-direction:column;gap:8px;margin-bottom:14px}\r
.case-track-q{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;background:var(--white);border:1px solid var(--gray-200);border-radius:7px}\r
.case-track-q-label{font-size:12px;color:var(--gray-700)}\r
.case-track-footer{display:flex;align-items:center;justify-content:space-between;padding-top:12px;border-top:1px solid var(--gray-200)}\r
</style>\r
</head>\r
<body>\r
\r
<!-- SIDEBAR -->\r
<!--\r
<aside class="sidebar">\r
  <div class="sidebar-logo">\r
    <div class="logo-text">PAC 管理系統</div>\r
    <div class="logo-sub">急性後期照護</div>\r
  </div>\r
  <nav class="sidebar-nav">\r
    <div class="nav-item disabled">🏠 個人儀表板</div>\r
    <div class="nav-item disabled">📋 個案管理</div>\r
    <div class="nav-item disabled">🛏 病床管理</div>\r
    <div class="nav-item disabled">📅 班表總覽頁</div>\r
    <div class="nav-item disabled">🏡 居家排班管理</div>\r
    <div class="nav-item disabled">📊 評估量表</div>\r
    <div class="nav-item disabled">💪 復健紀錄</div>\r
    <div class="nav-item active">📤 指標匯出</div>\r
  </nav>\r
-->\r
  <div class="sidebar-user">\r
    <div class="user-avatar">林</div>\r
    <div>\r
      <div class="user-name">林美惠</div>\r
      <div class="user-role">個案管理師</div>\r
    </div>\r
  </div>\r
</aside>\r
\r
<!-- MAIN -->\r
<div class="main">\r
  <div class="topbar">\r
    <div class="breadcrumb">指標匯出</div>\r
    <div style="font-size:11px;color:var(--gray-400)">2026/06/23</div>\r
  </div>\r
  <div class="content">\r
\r
    <div class="page-header">\r
      <div>\r
        <div class="page-title">指標匯出</div>\r
        <div class="page-subtitle">篩選結案個案・填寫追蹤資料・產出成果指標</div>\r
      </div>\r
      <div style="display:flex;gap:8px">\r
        <button class="btn btn-secondary btn-sm" onclick="openModal('modal-manage-fields')">⚙ 管理追蹤欄位</button>\r
        <button class="btn btn-teal btn-sm" onclick="openModal('modal-export')">📤 匯出報告</button>\r
      </div>\r
    </div>\r
\r
    <!-- 主要 tabs -->\r
    <div class="tabs">\r
      <div class="tab active" onclick="switchTab(this,'nhia')">健保署指標</div>\r
      <div class="tab" onclick="switchTab(this,'internal')">院內指標</div>\r
    </div>\r
\r
    <!-- ════ 健保署指標 tab ════ -->\r
    <div id="tab-nhia">\r
\r
      <!-- 篩選區 -->\r
      <div class="filter-card">\r
        <div class="filter-card-header">\r
          <div class="filter-card-title">篩選條件</div>\r
          <button class="btn btn-secondary btn-xs" onclick="openModal('modal-manage-filters')">⚙ 管理篩選條件</button>\r
        </div>\r
        <div class="filter-row">\r
          <div class="filter-group">\r
            <div class="filter-label">統計年度</div>\r
            <select class="filter-control">\r
              <option>2025 年</option>\r
              <option selected>2026 年</option>\r
            </select>\r
          </div>\r
          <div class="filter-group">\r
            <div class="filter-label">月份區間（起）</div>\r
            <select class="filter-control">\r
              <option>1 月</option>\r
              <option selected>2 月</option>\r
              <option>3 月</option>\r
              <option>4 月</option>\r
              <option>5 月</option>\r
              <option>6 月</option>\r
              <option>7 月</option>\r
              <option>8 月</option>\r
              <option>9 月</option>\r
              <option>10 月</option>\r
              <option>11 月</option>\r
              <option>12 月</option>\r
            </select>\r
          </div>\r
          <div class="filter-sep">～</div>\r
          <div class="filter-group">\r
            <div class="filter-label">月份區間（迄）</div>\r
            <select class="filter-control">\r
              <option>1 月</option>\r
              <option>2 月</option>\r
              <option>3 月</option>\r
              <option>4 月</option>\r
              <option>5 月</option>\r
              <option selected>6 月</option>\r
              <option>7 月</option>\r
              <option>8 月</option>\r
              <option>9 月</option>\r
              <option>10 月</option>\r
              <option>11 月</option>\r
              <option>12 月</option>\r
            </select>\r
          </div>\r
          <div class="filter-group">\r
            <div class="filter-label">結案類型</div>\r
            <select class="filter-control">\r
              <option>全部結案</option>\r
              <option selected>PAC 成功結案</option>\r
              <option>PAC 不成功結案</option>\r
              <option>一般個案（非PAC）</option>\r
            </select>\r
          </div>\r
          <div class="filter-group">\r
            <div class="filter-label">疾病別</div>\r
            <select class="filter-control">\r
              <option selected>全部</option>\r
              <option>CVA（腦中風）</option>\r
              <option>骨科</option>\r
              <option>COPD</option>\r
              <option>心衰竭</option>\r
              <option>脊髓損傷</option>\r
            </select>\r
          </div>\r
          <div class="filter-group">\r
            <div class="filter-label">照護模式</div>\r
            <select class="filter-control">\r
              <option selected>全部</option>\r
              <option>住院</option>\r
              <option>日照</option>\r
              <option>居家</option>\r
            </select>\r
          </div>\r
          <div>\r
            <button class="btn btn-primary btn-sm" style="margin-top:20px">套用篩選</button>\r
          </div>\r
        </div>\r
        <div class="filter-result">\r
          <div class="filter-result-text">符合條件個案：</div>\r
          <div class="filter-result-count">47</div>\r
          <div class="filter-result-text">人・追蹤完成</div>\r
          <div class="filter-result-count" style="color:var(--green)">31</div>\r
          <div class="filter-result-text">人・未追蹤</div>\r
          <div class="filter-result-count" style="color:var(--amber)">16</div>\r
          <div class="filter-result-text">人</div>\r
        </div>\r
      </div>\r
\r
      <!-- 指標總覽 -->\r
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">\r
        <div style="font-size:13px;font-weight:600;color:var(--gray-700)">指標計算結果 <span style="font-size:11px;font-weight:400;color:var(--gray-400)">· 點擊卡片查看計算明細</span></div>\r
        <div class="info-note blue" style="margin-bottom:0;padding:6px 12px;font-size:11px">⚠️ 尚有 16 位個案未完成追蹤，指標數值為目前已追蹤資料的初步計算結果</div>\r
      </div>\r
      <div class="indicator-grid">\r
        <div class="indicator-card complete" onclick="openModal('modal-indicator-detail')">\r
          <div class="indicator-name">一年內死亡率</div>\r
          <div class="indicator-value">4.8 <span>%</span></div>\r
          <div class="indicator-progress"><div class="indicator-progress-bar" style="width:100%"></div></div>\r
          <div class="indicator-tracking">已追蹤 31 / 31 人（可計算）</div>\r
        </div>\r
        <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">\r
          <div class="indicator-name">30日內急診率</div>\r
          <div class="indicator-value">12.9 <span>%</span></div>\r
          <div class="indicator-progress"><div class="indicator-progress-bar" style="width:66%"></div></div>\r
          <div class="indicator-tracking">已追蹤 31 / 47 人（待完成）</div>\r
        </div>\r
        <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">\r
          <div class="indicator-name">14日內再入院率</div>\r
          <div class="indicator-value">6.5 <span>%</span></div>\r
          <div class="indicator-progress"><div class="indicator-progress-bar" style="width:66%"></div></div>\r
          <div class="indicator-tracking">已追蹤 31 / 47 人（待完成）</div>\r
        </div>\r
        <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">\r
          <div class="indicator-name">30日內再入院率</div>\r
          <div class="indicator-value">9.7 <span>%</span></div>\r
          <div class="indicator-progress"><div class="indicator-progress-bar" style="width:66%"></div></div>\r
          <div class="indicator-tracking">已追蹤 31 / 47 人（待完成）</div>\r
        </div>\r
        <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">\r
          <div class="indicator-name">個案之功能進步情形</div>\r
          <div class="indicator-value">72.3 <span>%</span></div>\r
          <div class="indicator-progress"><div class="indicator-progress-bar" style="width:66%"></div></div>\r
          <div class="indicator-tracking">從系統量表自動計算</div>\r
        </div>\r
        <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">\r
          <div class="indicator-name">管路移除率</div>\r
          <div class="indicator-value">85.2 <span>%</span></div>\r
          <div class="indicator-progress"><div class="indicator-progress-bar" style="width:66%"></div></div>\r
          <div class="indicator-tracking">已追蹤 31 / 47 人（待完成）</div>\r
        </div>\r
        <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">\r
          <div class="indicator-name">非計畫性管路滑脫率</div>\r
          <div class="indicator-value">2.1 <span>%</span></div>\r
          <div class="indicator-progress"><div class="indicator-progress-bar" style="width:66%"></div></div>\r
          <div class="indicator-tracking">已追蹤 31 / 47 人（待完成）</div>\r
        </div>\r
        <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">\r
          <div class="indicator-name">醫學中心轉至PAC醫院比率</div>\r
          <div class="indicator-value">68.1 <span>%</span></div>\r
          <div class="indicator-progress"><div class="indicator-progress-bar" style="width:66%"></div></div>\r
          <div class="indicator-tracking">從系統資料自動計算</div>\r
        </div>\r
        <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">\r
          <div class="indicator-name">心衰竭治療指引用藥率</div>\r
          <div class="indicator-value">91.7 <span>%</span></div>\r
          <div class="indicator-progress"><div class="indicator-progress-bar" style="width:66%"></div></div>\r
          <div class="indicator-tracking">僅限心衰竭個案（n=12）</div>\r
        </div>\r
      </div>\r
\r
      <!-- 個案追蹤清單 -->\r
      <div class="section-card">\r
        <div class="sc-header">\r
          <div class="sc-title">個案追蹤清單</div>\r
          <div style="display:flex;gap:7px;align-items:center">\r
            <span style="font-size:11px;color:var(--gray-400)">依結案日排序・點列展開填寫追蹤資料</span>\r
            <button class="btn btn-secondary btn-xs">追蹤狀態 ▾</button>\r
          </div>\r
        </div>\r
        <div class="sc-body">\r
          <div class="case-track-list">\r
\r
            <!-- 列標題 -->\r
            <div style="display:flex;align-items:center;gap:10px;padding:7px 16px;background:var(--gray-50);border-bottom:1px solid var(--gray-200)">\r
              <div style="width:20px;flex-shrink:0"></div>\r
              <div style="font-size:10px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em;min-width:60px">姓名</div>\r
              <div style="font-size:10px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em;flex:1;display:flex;gap:24px">\r
                <span style="min-width:80px">疾病別</span>\r
                <span style="min-width:70px">模式</span>\r
                <span style="min-width:70px">開案日</span>\r
                <span style="min-width:70px">結案日</span>\r
                <span style="min-width:70px">距結案</span>\r
                <span style="min-width:80px">結案後處置</span>\r
              </div>\r
              <div style="font-size:10px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em;min-width:80px">追蹤狀態</div>\r
            </div>\r
\r
            <!-- 個案 1：已追蹤・展開示意 -->\r
            <div class="case-track-item">\r
              <div class="case-track-row" onclick="toggleTrack('t1')">\r
                <button class="case-track-expand-btn open" id="tb1">▼</button>\r
                <div class="case-track-name">李文雄</div>\r
                <div class="case-track-meta">\r
                  <span class="badge badge-blue" style="font-size:10px">COPD</span>\r
                  <span class="case-track-tag">🏥 住院</span>\r
                  <span class="case-track-tag">開案 06/10</span>\r
                  <span class="case-track-tag">結案 07/05/2025</span>\r
                  <span class="case-track-tag">353 天</span>\r
                  <span class="disp-tag disp-home">居家醫療</span>\r
                </div>\r
                <button class="track-status done" onclick="event.stopPropagation()">✓ 已追蹤</button>\r
              </div>\r
              <div id="t1" class="case-track-detail">\r
                <div class="case-track-contact">\r
                  <span style="font-size:12px;color:var(--gray-500)">聯絡方式：</span>\r
                  <span class="contact-chip">📞 個案 0923-456-789</span>\r
                  <span class="contact-chip">💬 家屬 李小華 0934-111-222</span>\r
                </div>\r
                <div class="case-track-questions">\r
                  <div class="case-track-q">\r
                    <span class="case-track-q-label">出院後30日內是否有急診？</span>\r
                    <div class="yn-toggle"><button class="yn-btn yes active">是</button><button class="yn-btn no">否</button></div>\r
                  </div>\r
                  <div class="case-track-q">\r
                    <span class="case-track-q-label">出院後30日內是否有再入院？</span>\r
                    <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no active">否</button></div>\r
                  </div>\r
                  <div class="case-track-q">\r
                    <span class="case-track-q-label">出院後14日內是否有再入院？</span>\r
                    <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no active">否</button></div>\r
                  </div>\r
                  <div class="case-track-q">\r
                    <span class="case-track-q-label">出院後一年內是否有死亡？</span>\r
                    <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no active">否</button></div>\r
                  </div>\r
                  <div class="case-track-q">\r
                    <span class="case-track-q-label">管路是否移除？</span>\r
                    <div class="yn-toggle"><button class="yn-btn yes active">是</button><button class="yn-btn no">否</button></div>\r
                  </div>\r
                  <div class="case-track-q">\r
                    <span class="case-track-q-label">是否有非計畫性管路滑脫？</span>\r
                    <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no active">否</button></div>\r
                  </div>\r
                </div>\r
                <div class="form-group" style="margin-bottom:12px">\r
                  <label style="font-size:12px;font-weight:500;color:var(--gray-600)">備註</label>\r
                  <input class="note-input" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px" value="家屬說出院後有一次急診，已返家休養">\r
                </div>\r
                <div class="case-track-footer">\r
                  <span style="font-size:11px;color:var(--gray-400)">最後追蹤：2026/01/15・林美惠</span>\r
                  <button class="btn btn-secondary btn-sm">重新填寫</button>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- 個案 2：已追蹤・收合 -->\r
            <div class="case-track-item">\r
              <div class="case-track-row" onclick="toggleTrack('t2')">\r
                <button class="case-track-expand-btn" id="tb2">▶</button>\r
                <div class="case-track-name">鄭大偉</div>\r
                <div class="case-track-meta">\r
                  <span class="badge badge-purple" style="font-size:10px">骨科</span>\r
                  <span class="case-track-tag">🏥 住院</span>\r
                  <span class="case-track-tag">開案 05/28</span>\r
                  <span class="case-track-tag">結案 07/12/2025</span>\r
                  <span class="case-track-tag">346 天</span>\r
                  <span class="disp-tag disp-ltc">長照</span>\r
                </div>\r
                <button class="track-status done" onclick="event.stopPropagation()">✓ 已追蹤</button>\r
              </div>\r
              <div id="t2" class="case-track-detail hidden">\r
                <div class="case-track-contact">\r
                  <span style="font-size:12px;color:var(--gray-500)">聯絡方式：</span>\r
                  <span class="contact-chip">📞 個案 0912-345-678</span>\r
                  <span class="contact-chip">💬 家屬 鄭小姐 0923-222-333</span>\r
                </div>\r
                <div class="case-track-questions">\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有急診？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no active">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有再入院？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no active">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後14日內是否有再入院？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no active">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後一年內是否有死亡？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no active">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">管路是否移除？</span><div class="yn-toggle"><button class="yn-btn yes active">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">是否有非計畫性管路滑脫？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no active">否</button></div></div>\r
                </div>\r
                <div class="form-group" style="margin-bottom:12px">\r
                  <label style="font-size:12px;font-weight:500;color:var(--gray-600)">備註</label>\r
                  <input class="note-input" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px" placeholder="點擊輸入備註…">\r
                </div>\r
                <div class="case-track-footer">\r
                  <span style="font-size:11px;color:var(--gray-400)">最後追蹤：2026/01/16・林美惠</span>\r
                  <button class="btn btn-secondary btn-sm">重新填寫</button>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- 個案 3：已追蹤・收合 -->\r
            <div class="case-track-item">\r
              <div class="case-track-row" onclick="toggleTrack('t3')">\r
                <button class="case-track-expand-btn" id="tb3">▶</button>\r
                <div class="case-track-name">吳麗珠</div>\r
                <div class="case-track-meta">\r
                  <span class="badge badge-amber" style="font-size:10px">CVA</span>\r
                  <span class="case-track-tag">☀️ 日照</span>\r
                  <span class="case-track-tag">開案 06/05</span>\r
                  <span class="case-track-tag">結案 08/20/2025</span>\r
                  <span class="case-track-tag">307 天</span>\r
                  <span class="disp-tag disp-sw">社工轉介</span>\r
                </div>\r
                <button class="track-status done" onclick="event.stopPropagation()">✓ 已追蹤</button>\r
              </div>\r
              <div id="t3" class="case-track-detail hidden">\r
                <div class="case-track-contact">\r
                  <span style="font-size:12px;color:var(--gray-500)">聯絡方式：</span>\r
                  <span class="contact-chip">📞 個案 0934-567-890</span>\r
                  <span class="contact-chip">💬 家屬 吳先生 0945-333-444</span>\r
                </div>\r
                <div class="case-track-questions">\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有急診？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no active">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有再入院？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no active">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後14日內是否有再入院？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no active">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後一年內是否有死亡？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no active">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">管路是否移除？</span><div class="yn-toggle"><button class="yn-btn yes active">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">是否有非計畫性管路滑脫？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no active">否</button></div></div>\r
                </div>\r
                <div class="form-group" style="margin-bottom:12px">\r
                  <label style="font-size:12px;font-weight:500;color:var(--gray-600)">備註</label>\r
                  <input class="note-input" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px" placeholder="點擊輸入備註…">\r
                </div>\r
                <div class="case-track-footer">\r
                  <span style="font-size:11px;color:var(--gray-400)">最後追蹤：2026/01/18・林美惠</span>\r
                  <button class="btn btn-secondary btn-sm">重新填寫</button>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- 個案 4：待追蹤 -->\r
            <div class="case-track-item">\r
              <div class="case-track-row" onclick="toggleTrack('t4')">\r
                <button class="case-track-expand-btn" id="tb4">▶</button>\r
                <div class="case-track-name">陳志明</div>\r
                <div class="case-track-meta">\r
                  <span class="badge badge-amber" style="font-size:10px">CVA</span>\r
                  <span class="case-track-tag">🏥 住院</span>\r
                  <span class="case-track-tag">開案 06/27</span>\r
                  <span class="case-track-tag">結案 09/05/2025</span>\r
                  <span class="case-track-tag">291 天</span>\r
                  <span class="disp-tag disp-none">無</span>\r
                </div>\r
                <button class="track-status pending" onclick="event.stopPropagation()">⏳ 待追蹤</button>\r
              </div>\r
              <div id="t4" class="case-track-detail hidden">\r
                <div class="case-track-contact">\r
                  <span style="font-size:12px;color:var(--gray-500)">聯絡方式：</span>\r
                  <span class="contact-chip">📞 個案 0912-345-678</span>\r
                  <span class="contact-chip">💬 家屬 陳小明 0923-456-789</span>\r
                </div>\r
                <div class="case-track-questions">\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有急診？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有再入院？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後14日內是否有再入院？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後一年內是否有死亡？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">管路是否移除？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">是否有非計畫性管路滑脫？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                </div>\r
                <div class="form-group" style="margin-bottom:12px">\r
                  <label style="font-size:12px;font-weight:500;color:var(--gray-600)">備註</label>\r
                  <input class="note-input" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px" placeholder="點擊輸入備註…">\r
                </div>\r
                <div class="case-track-footer">\r
                  <span style="font-size:11px;color:var(--gray-400)">尚未追蹤</span>\r
                  <button class="btn btn-primary btn-sm" onclick="markDone('t4','tb4')">✓ 標記為已追蹤</button>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- 個案 5：無法聯繫 -->\r
            <div class="case-track-item">\r
              <div class="case-track-row" onclick="toggleTrack('t5')">\r
                <button class="case-track-expand-btn" id="tb5">▶</button>\r
                <div class="case-track-name">黃建國</div>\r
                <div class="case-track-meta">\r
                  <span class="badge badge-teal" style="font-size:10px">脊髓損傷</span>\r
                  <span class="case-track-tag">🏡 居家</span>\r
                  <span class="case-track-tag">開案 07/15</span>\r
                  <span class="case-track-tag">結案 10/20/2025</span>\r
                  <span class="case-track-tag">246 天</span>\r
                  <span class="disp-tag disp-home">居家醫療</span>\r
                </div>\r
                <button class="track-status failed" onclick="event.stopPropagation()">✕ 無法聯繫</button>\r
              </div>\r
              <div id="t5" class="case-track-detail hidden">\r
                <div class="case-track-contact">\r
                  <span style="font-size:12px;color:var(--gray-500)">聯絡方式：</span>\r
                  <span class="contact-chip">📞 個案 0934-567-890</span>\r
                  <span class="contact-chip">💬 家屬 黃太太 0945-678-901</span>\r
                </div>\r
                <div class="info-note amber" style="margin-bottom:12px">電話多次無人接聽，已寄掛號信。</div>\r
                <div class="case-track-questions">\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有急診？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有再入院？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後14日內是否有再入院？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後一年內是否有死亡？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">管路是否移除？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">是否有非計畫性管路滑脫？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                </div>\r
                <div class="form-group" style="margin-bottom:12px">\r
                  <label style="font-size:12px;font-weight:500;color:var(--gray-600)">備註</label>\r
                  <input class="note-input" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px" value="電話多次無人接聽，已寄掛號信">\r
                </div>\r
                <div class="case-track-footer">\r
                  <span style="font-size:11px;color:var(--gray-400)">最後嘗試聯繫：2026/01/20</span>\r
                  <button class="btn btn-primary btn-sm" onclick="markDone('t5','tb5')">✓ 標記為已追蹤</button>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- 個案 6：未追蹤 -->\r
            <div class="case-track-item">\r
              <div class="case-track-row" onclick="toggleTrack('t6')">\r
                <button class="case-track-expand-btn" id="tb6">▶</button>\r
                <div class="case-track-name">王淑芬</div>\r
                <div class="case-track-meta">\r
                  <span class="badge badge-purple" style="font-size:10px">骨科</span>\r
                  <span class="case-track-tag">☀️ 日照</span>\r
                  <span class="case-track-tag">開案 07/01</span>\r
                  <span class="case-track-tag">結案 09/15/2025</span>\r
                  <span class="case-track-tag">281 天</span>\r
                  <span class="disp-tag disp-none">無</span>\r
                </div>\r
                <button class="track-status not-started" onclick="event.stopPropagation()">— 未追蹤</button>\r
              </div>\r
              <div id="t6" class="case-track-detail hidden">\r
                <div class="case-track-contact">\r
                  <span style="font-size:12px;color:var(--gray-500)">聯絡方式：</span>\r
                  <span class="contact-chip">📞 個案 0923-456-789</span>\r
                  <span class="contact-chip">💬 家屬 王小華 0934-789-012</span>\r
                </div>\r
                <div class="case-track-questions">\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有急診？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有再入院？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後14日內是否有再入院？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">出院後一年內是否有死亡？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">管路是否移除？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                  <div class="case-track-q"><span class="case-track-q-label">是否有非計畫性管路滑脫？</span><div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div></div>\r
                </div>\r
                <div class="form-group" style="margin-bottom:12px">\r
                  <label style="font-size:12px;font-weight:500;color:var(--gray-600)">備註</label>\r
                  <input class="note-input" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px" placeholder="點擊輸入備註…">\r
                </div>\r
                <div class="case-track-footer">\r
                  <span style="font-size:11px;color:var(--gray-400)">尚未追蹤</span>\r
                  <button class="btn btn-primary btn-sm" onclick="markDone('t6','tb6')">✓ 標記為已追蹤</button>\r
                </div>\r
              </div>\r
            </div>\r
\r
          </div>\r
        </div>\r
      </div>\r
    </div><!-- /tab-nhia -->\r
\r
    <!-- ════ 院內指標 tab ════ -->\r
    <div id="tab-internal" class="hidden">\r
\r
      <div class="filter-card">\r
        <div class="filter-card-header">\r
          <div class="filter-card-title">篩選條件</div>\r
        </div>\r
        <div class="filter-row">\r
          <div class="filter-group">\r
            <div class="filter-label">統計年度</div>\r
            <select class="filter-control"><option>2025 年</option><option selected>2026 年</option></select>\r
          </div>\r
          <div class="filter-group">\r
            <div class="filter-label">月份區間（起）</div>\r
            <select class="filter-control">\r
              <option selected>1 月</option>\r
              <option>2 月</option><option>3 月</option><option>4 月</option><option>5 月</option><option>6 月</option>\r
            </select>\r
          </div>\r
          <div class="filter-sep">～</div>\r
          <div class="filter-group">\r
            <div class="filter-label">月份區間（迄）</div>\r
            <select class="filter-control">\r
              <option>1 月</option><option>2 月</option><option>3 月</option><option>4 月</option><option>5 月</option>\r
              <option selected>6 月</option>\r
            </select>\r
          </div>\r
          <div class="filter-group">\r
            <div class="filter-label">疾病別</div>\r
            <select class="filter-control"><option selected>全部</option><option>CVA</option><option>骨科</option><option>COPD</option></select>\r
          </div>\r
          <div class="filter-group">\r
            <div class="filter-label">照護模式</div>\r
            <select class="filter-control"><option selected>全部</option><option>住院</option><option>日照</option><option>居家</option></select>\r
          </div>\r
          <div><button class="btn btn-primary btn-sm" style="margin-top:20px">套用篩選</button></div>\r
        </div>\r
        <div class="filter-result">\r
          <div class="filter-result-text">符合個案：</div>\r
          <div class="filter-result-count">89</div>\r
          <div class="filter-result-text">人（含進行中個案）</div>\r
        </div>\r
      </div>\r
\r
      <!-- 院內指標勾選 -->\r
      <div class="section-card" style="margin-bottom:16px">\r
        <div class="sc-header">\r
          <div class="sc-title">選擇要顯示的指標</div>\r
          <span style="font-size:11px;color:var(--gray-400)">可依需求自由勾選</span>\r
        </div>\r
        <div class="sc-body" style="padding:16px">\r
          <div class="export-check-grid">\r
            <label class="export-check-item"><input type="checkbox" checked> 各疾病別個案數量</label>\r
            <label class="export-check-item"><input type="checkbox" checked> 各照護模式比例（住院/日照/居家）</label>\r
            <label class="export-check-item"><input type="checkbox" checked> 平均照護天數</label>\r
            <label class="export-check-item"><input type="checkbox" checked> 展延成功率</label>\r
            <label class="export-check-item"><input type="checkbox"> 平均巴氏量表進步分數</label>\r
            <label class="export-check-item"><input type="checkbox"> 轉介來源分佈</label>\r
            <label class="export-check-item"><input type="checkbox"> 結案後服務轉介比例</label>\r
            <label class="export-check-item"><input type="checkbox"> 各月份收案趨勢</label>\r
            <label class="export-check-item"><input type="checkbox"> 30日內再入院率</label>\r
            <label class="export-check-item"><input type="checkbox"> 一年內死亡率</label>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- 院內指標結果 -->\r
      <div class="indicator-grid">\r
        <div class="indicator-card complete" onclick="openModal('modal-indicator-detail')">\r
          <div class="indicator-name">各疾病別個案數</div>\r
          <div class="indicator-value">89 <span>人</span></div>\r
          <div class="indicator-progress"><div class="indicator-progress-bar" style="width:100%"></div></div>\r
          <div class="indicator-tracking">CVA 34・骨科 28・COPD 15・其他 12</div>\r
        </div>\r
        <div class="indicator-card complete" onclick="openModal('modal-indicator-detail')">\r
          <div class="indicator-name">各照護模式比例</div>\r
          <div class="indicator-value">住院 <span>62%</span></div>\r
          <div class="indicator-progress"><div class="indicator-progress-bar" style="width:100%"></div></div>\r
          <div class="indicator-tracking">日照 28%・居家 10%</div>\r
        </div>\r
        <div class="indicator-card complete" onclick="openModal('modal-indicator-detail')">\r
          <div class="indicator-name">平均照護天數</div>\r
          <div class="indicator-value">38.2 <span>天</span></div>\r
          <div class="indicator-progress"><div class="indicator-progress-bar" style="width:100%"></div></div>\r
          <div class="indicator-tracking">住院 42天・日照 35天・居家 28天</div>\r
        </div>\r
        <div class="indicator-card complete" onclick="openModal('modal-indicator-detail')">\r
          <div class="indicator-name">展延成功率</div>\r
          <div class="indicator-value">78.4 <span>%</span></div>\r
          <div class="indicator-progress"><div class="indicator-progress-bar" style="width:100%"></div></div>\r
          <div class="indicator-tracking">申請 51 件・通過 40 件</div>\r
        </div>\r
      </div>\r
    </div><!-- /tab-internal -->\r
\r
  </div><!-- /content -->\r
</div><!-- /main -->\r
\r
\r
<!-- ══ MODALS ══ -->\r
\r
<!-- 指標明細 -->\r
<div id="modal-indicator-detail" class="modal-overlay hidden">\r
  <div class="modal modal-lg">\r
    <div class="modal-header">\r
      <div>\r
        <div class="modal-title">📊 30日內急診率・計算明細</div>\r
        <div style="font-size:12px;color:var(--gray-500);margin-top:2px">2026年 2–6月・PAC成功結案・全疾病別・全模式</div>\r
      </div>\r
      <button class="modal-close" onclick="closeModal('modal-indicator-detail')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px">\r
        <div style="background:var(--blue-light);border-radius:8px;padding:14px;text-align:center">\r
          <div style="font-size:11px;color:var(--blue-dark);margin-bottom:4px">分母（已追蹤個案）</div>\r
          <div style="font-size:28px;font-weight:700;color:var(--blue)">31</div>\r
        </div>\r
        <div style="background:var(--red-light);border-radius:8px;padding:14px;text-align:center">\r
          <div style="font-size:11px;color:var(--red);margin-bottom:4px">分子（出院後30日內急診）</div>\r
          <div style="font-size:28px;font-weight:700;color:var(--red)">4</div>\r
        </div>\r
        <div style="background:var(--amber-light);border-radius:8px;padding:14px;text-align:center">\r
          <div style="font-size:11px;color:var(--amber);margin-bottom:4px">目前計算結果</div>\r
          <div style="font-size:28px;font-weight:700;color:var(--amber)">12.9%</div>\r
        </div>\r
      </div>\r
      <div class="info-note amber">⚠️ 尚有 16 人未完成追蹤，最終數值待全數追蹤後才準確。</div>\r
      <div style="font-size:13px;font-weight:600;color:var(--gray-700);margin-bottom:10px">分子個案列表（出院後30日內有急診）</div>\r
      <table class="tracking-table" style="border:1px solid var(--gray-200);border-radius:8px;overflow:hidden">\r
        <thead>\r
          <tr>\r
            <th>姓名</th><th>疾病別</th><th>模式</th><th>結案日</th><th>急診日期</th><th>備註</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr><td><strong>李文雄</strong></td><td>COPD</td><td>住院</td><td>07/05</td><td>07/18</td><td>肺炎急性惡化</td></tr>\r
          <tr><td><strong>蔡美玲</strong></td><td>帕金森氏症</td><td>日照</td><td>08/30</td><td>09/10</td><td>跌倒骨折</td></tr>\r
          <tr><td><strong>許○○</strong></td><td>心衰竭</td><td>住院</td><td>07/01</td><td>07/25</td><td>心衰竭加重</td></tr>\r
          <tr><td><strong>謝○○</strong></td><td>骨科</td><td>住院</td><td>07/03</td><td>07/20</td><td>傷口感染</td></tr>\r
        </tbody>\r
      </table>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-indicator-detail')">關閉</button>\r
      <button class="btn btn-primary">匯出此指標明細</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 記錄追蹤 -->\r
<div id="modal-log-track" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title">📞 記錄追蹤結果・陳志明</div>\r
      <button class="modal-close" onclick="closeModal('modal-log-track')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note blue">個案電話：0912-345-678　家屬（陳小明）：0923-111-222</div>\r
      <div class="form-group">\r
        <label>追蹤狀態</label>\r
        <select class="form-control">\r
          <option>已成功聯繫</option>\r
          <option>無法聯繫（持續嘗試）</option>\r
          <option>無法聯繫（放棄）</option>\r
        </select>\r
      </div>\r
      <div class="form-group">\r
        <label>追蹤日期</label>\r
        <input class="form-control" type="date" value="2026-06-23">\r
      </div>\r
      <div style="font-size:13px;font-weight:600;color:var(--gray-700);margin-bottom:10px">追蹤問題填寫</div>\r
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px">\r
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1px solid var(--gray-200);border-radius:7px">\r
          <span style="font-size:13px;color:var(--gray-700)">出院後30日內是否有急診？</span>\r
          <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div>\r
        </div>\r
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1px solid var(--gray-200);border-radius:7px">\r
          <span style="font-size:13px;color:var(--gray-700)">出院後30日內是否有再入院？</span>\r
          <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div>\r
        </div>\r
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1px solid var(--gray-200);border-radius:7px">\r
          <span style="font-size:13px;color:var(--gray-700)">出院後14日內是否有再入院？</span>\r
          <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div>\r
        </div>\r
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1px solid var(--gray-200);border-radius:7px">\r
          <span style="font-size:13px;color:var(--gray-700)">出院後一年內是否有死亡？</span>\r
          <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div>\r
        </div>\r
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1px solid var(--gray-200);border-radius:7px">\r
          <span style="font-size:13px;color:var(--gray-700)">管路是否移除？</span>\r
          <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div>\r
        </div>\r
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1px solid var(--gray-200);border-radius:7px">\r
          <span style="font-size:13px;color:var(--gray-700)">是否有非計畫性管路滑脫？</span>\r
          <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div>\r
        </div>\r
      </div>\r
      <div class="form-group">\r
        <label>備註</label>\r
        <textarea class="form-control" placeholder="填寫追蹤過程或其他備注…"></textarea>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-log-track')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-log-track')">儲存追蹤結果</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 管理追蹤欄位 -->\r
<div id="modal-manage-fields" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title">⚙ 管理追蹤欄位</div>\r
      <button class="modal-close" onclick="closeModal('modal-manage-fields')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note blue">系統欄位（藍色）為固定欄位，不可刪除。自訂欄位可新增、停用或刪除。</div>\r
      <div class="field-list">\r
        <div class="field-item system">\r
          <span class="field-drag">⠿</span>\r
          <span class="field-name">出院後30日內是否有急診？</span>\r
          <span class="field-type">是/否</span>\r
          <span class="field-badge-sys">健保署</span>\r
          <button class="field-toggle on"></button>\r
        </div>\r
        <div class="field-item system">\r
          <span class="field-drag">⠿</span>\r
          <span class="field-name">出院後30日內是否有再入院？</span>\r
          <span class="field-type">是/否</span>\r
          <span class="field-badge-sys">健保署</span>\r
          <button class="field-toggle on"></button>\r
        </div>\r
        <div class="field-item system">\r
          <span class="field-drag">⠿</span>\r
          <span class="field-name">出院後14日內是否有再入院？</span>\r
          <span class="field-type">是/否</span>\r
          <span class="field-badge-sys">健保署</span>\r
          <button class="field-toggle on"></button>\r
        </div>\r
        <div class="field-item system">\r
          <span class="field-drag">⠿</span>\r
          <span class="field-name">出院後一年內是否有死亡？</span>\r
          <span class="field-type">是/否</span>\r
          <span class="field-badge-sys">健保署</span>\r
          <button class="field-toggle on"></button>\r
        </div>\r
        <div class="field-item system">\r
          <span class="field-drag">⠿</span>\r
          <span class="field-name">管路是否移除？</span>\r
          <span class="field-type">是/否</span>\r
          <span class="field-badge-sys">健保署</span>\r
          <button class="field-toggle on"></button>\r
        </div>\r
        <div class="field-item system">\r
          <span class="field-drag">⠿</span>\r
          <span class="field-name">是否有非計畫性管路滑脫？</span>\r
          <span class="field-type">是/否</span>\r
          <span class="field-badge-sys">健保署</span>\r
          <button class="field-toggle on"></button>\r
        </div>\r
        <div class="field-item">\r
          <span class="field-drag">⠿</span>\r
          <span class="field-name">出院後是否有使用心衰竭治療指引用藥？</span>\r
          <span class="field-type">是/否</span>\r
          <button class="field-toggle on"></button>\r
          <button class="field-delete">🗑</button>\r
        </div>\r
        <div class="field-item">\r
          <span class="field-drag">⠿</span>\r
          <span class="field-name">個案目前生活自理狀況（自填）</span>\r
          <span class="field-type">文字</span>\r
          <button class="field-toggle off"></button>\r
          <button class="field-delete">🗑</button>\r
        </div>\r
      </div>\r
      <div style="border:1px dashed var(--gray-300);border-radius:7px;padding:14px">\r
        <div style="font-size:12px;font-weight:600;color:var(--gray-600);margin-bottom:10px">新增追蹤欄位</div>\r
        <div style="display:flex;gap:8px;align-items:flex-end">\r
          <div class="form-group" style="flex:1;margin-bottom:0">\r
            <label>欄位名稱</label>\r
            <input class="form-control" placeholder="例：出院後是否回診復健？">\r
          </div>\r
          <div class="form-group" style="margin-bottom:0">\r
            <label>類型</label>\r
            <select class="form-control" style="min-width:100px">\r
              <option>是/否</option>\r
              <option>文字</option>\r
              <option>數字</option>\r
            </select>\r
          </div>\r
          <button class="btn btn-primary btn-sm" style="flex-shrink:0">新增</button>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-manage-fields')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-manage-fields')">儲存設定</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 管理篩選條件 -->\r
<div id="modal-manage-filters" class="modal-overlay hidden">\r
  <div class="modal modal-sm">\r
    <div class="modal-header">\r
      <div class="modal-title">⚙ 管理篩選條件</div>\r
      <button class="modal-close" onclick="closeModal('modal-manage-filters')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note amber">當健保署政策更新時，可在此新增或調整篩選條件。</div>\r
      <div class="field-list">\r
        <div class="field-item system">\r
          <span class="field-name">統計年度</span>\r
          <span class="field-badge-sys">必填</span>\r
          <button class="field-toggle on"></button>\r
        </div>\r
        <div class="field-item system">\r
          <span class="field-name">月份區間</span>\r
          <span class="field-badge-sys">必填</span>\r
          <button class="field-toggle on"></button>\r
        </div>\r
        <div class="field-item system">\r
          <span class="field-name">結案類型</span>\r
          <span class="field-badge-sys">必填</span>\r
          <button class="field-toggle on"></button>\r
        </div>\r
        <div class="field-item">\r
          <span class="field-name">疾病別</span>\r
          <button class="field-toggle on"></button>\r
          <button class="field-delete">🗑</button>\r
        </div>\r
        <div class="field-item">\r
          <span class="field-name">照護模式</span>\r
          <button class="field-toggle on"></button>\r
          <button class="field-delete">🗑</button>\r
        </div>\r
        <div class="field-item">\r
          <span class="field-name">負責個管師</span>\r
          <button class="field-toggle off"></button>\r
          <button class="field-delete">🗑</button>\r
        </div>\r
      </div>\r
      <div style="display:flex;gap:8px">\r
        <input class="form-control" placeholder="新增篩選條件名稱…" style="flex:1">\r
        <button class="btn btn-primary btn-sm">新增</button>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-manage-filters')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-manage-filters')">儲存</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 匯出報告 -->\r
<div id="modal-export" class="modal-overlay hidden">\r
  <div class="modal modal-lg">\r
    <div class="modal-header">\r
      <div class="modal-title">📤 匯出成果報告</div>\r
      <button class="modal-close" onclick="closeModal('modal-export')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note amber">⚠️ 目前尚有 16 位個案未完成追蹤，建議追蹤完畢後再匯出，以確保數值準確。</div>\r
\r
      <div class="export-section">\r
        <div class="export-section-title">匯出類型</div>\r
        <div style="display:flex;gap:10px;margin-bottom:4px">\r
          <label style="display:flex;align-items:center;gap:7px;font-size:13px;cursor:pointer;padding:10px 14px;border:1px solid var(--gray-200);border-radius:7px;flex:1">\r
            <input type="radio" name="export-type" checked style="accent-color:var(--blue)">\r
            <div>\r
              <div style="font-weight:600">健保署版本</div>\r
              <div style="font-size:11px;color:var(--gray-400);margin-top:2px">固定格式，含全部9項品質指標</div>\r
            </div>\r
          </label>\r
          <label style="display:flex;align-items:center;gap:7px;font-size:13px;cursor:pointer;padding:10px 14px;border:1px solid var(--gray-200);border-radius:7px;flex:1">\r
            <input type="radio" name="export-type" style="accent-color:var(--blue)">\r
            <div>\r
              <div style="font-weight:600">院內版本</div>\r
              <div style="font-size:11px;color:var(--gray-400);margin-top:2px">自選指標，用於宣傳、演講或成果報告</div>\r
            </div>\r
          </label>\r
        </div>\r
      </div>\r
\r
      <div class="export-section">\r
        <div class="export-section-title">匯出格式</div>\r
        <div style="display:flex;gap:8px">\r
          <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer"><input type="radio" name="export-fmt" checked style="accent-color:var(--blue)"> Word (.docx)</label>\r
          <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer"><input type="radio" name="export-fmt" style="accent-color:var(--blue)"> PDF</label>\r
          <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer"><input type="radio" name="export-fmt" style="accent-color:var(--blue)"> Excel (.xlsx)</label>\r
        </div>\r
      </div>\r
\r
      <div class="export-section">\r
        <div class="export-section-title">報告內容預覽</div>\r
        <div style="background:var(--gray-50);border:1px solid var(--gray-200);border-radius:8px;padding:16px">\r
          <div style="font-size:13px;font-weight:700;text-align:center;margin-bottom:12px;color:var(--gray-700)">全民健康保險急性後期整合照護計劃・成果報告書</div>\r
          <div style="font-size:11px;color:var(--gray-500);text-align:center;margin-bottom:14px">統計期間：2026年2月～6月　員郭醫院　個管師：林美惠</div>\r
          <div class="divider" style="margin:10px 0"></div>\r
          <div class="indicator-detail-row">\r
            <div><div class="indicator-detail-name">一年內死亡率</div><div class="indicator-formula">4 / 31 已追蹤個案</div></div>\r
            <div class="indicator-detail-val">4.8%</div>\r
          </div>\r
          <div class="indicator-detail-row">\r
            <div><div class="indicator-detail-name">30日內急診率</div><div class="indicator-formula">4 / 31 已追蹤個案（待完成 16 人）</div></div>\r
            <div class="indicator-detail-val" style="color:var(--amber)">12.9% ⚠️</div>\r
          </div>\r
          <div class="indicator-detail-row">\r
            <div><div class="indicator-detail-name">14日內再入院率</div><div class="indicator-formula">2 / 31 已追蹤個案</div></div>\r
            <div class="indicator-detail-val" style="color:var(--amber)">6.5% ⚠️</div>\r
          </div>\r
          <div class="indicator-detail-row">\r
            <div><div class="indicator-detail-name">30日內再入院率</div><div class="indicator-formula">3 / 31 已追蹤個案</div></div>\r
            <div class="indicator-detail-val" style="color:var(--amber)">9.7% ⚠️</div>\r
          </div>\r
          <div class="indicator-detail-row">\r
            <div><div class="indicator-detail-name">個案之功能進步情形</div><div class="indicator-formula">從系統量表自動計算</div></div>\r
            <div class="indicator-detail-val">72.3%</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-export')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-export')">確認匯出</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<script>\r
function toggleTrack(id){\r
  const detail=document.getElementById(id);\r
  const num=id.replace('t','');\r
  const btn=document.getElementById('tb'+num);\r
  const isHidden=detail.classList.contains('hidden');\r
  detail.classList.toggle('hidden',!isHidden);\r
  btn.textContent=isHidden?'▼':'▶';\r
  btn.classList.toggle('open',isHidden);\r
}\r
\r
function markDone(detailId,btnId){\r
  // Find the track-status button in this item\r
  const detail=document.getElementById(detailId);\r
  const item=detail.parentElement;\r
  const statusBtn=item.querySelector('.track-status');\r
  statusBtn.className='track-status done';\r
  statusBtn.textContent='✓ 已追蹤';\r
  // Update footer\r
  const footer=detail.querySelector('.case-track-footer');\r
  const today=new Date().toLocaleDateString('zh-TW',{year:'numeric',month:'2-digit',day:'2-digit'}).replace(/\\//g,'/');\r
  footer.querySelector('span').textContent='最後追蹤：'+today+'・林美惠';\r
  footer.querySelector('button').outerHTML='<button class="btn btn-secondary btn-sm">重新填寫</button>';\r
}\r
\r
function switchTab(el,tab){\r
  document.querySelectorAll('.tabs .tab').forEach(t=>t.classList.remove('active'));\r
  el.classList.add('active');\r
  document.getElementById('tab-nhia').classList.toggle('hidden',tab!=='nhia');\r
  document.getElementById('tab-internal').classList.toggle('hidden',tab!=='internal');\r
}\r
\r
function openModal(id){document.getElementById(id).classList.remove('hidden')}\r
function closeModal(id){document.getElementById(id).classList.add('hidden')}\r
\r
document.querySelectorAll('.modal-overlay').forEach(o=>{\r
  o.addEventListener('click',function(e){if(e.target===this)this.classList.add('hidden')});\r
});\r
\r
// Yes/No toggle\r
document.querySelectorAll('.yn-toggle').forEach(toggle=>{\r
  toggle.querySelectorAll('.yn-btn').forEach(btn=>{\r
    btn.addEventListener('click',function(e){\r
      e.stopPropagation();\r
      toggle.querySelectorAll('.yn-btn').forEach(b=>b.classList.remove('active'));\r
      this.classList.add('active');\r
    });\r
  });\r
});\r
\r
// Field toggle\r
document.querySelectorAll('.field-toggle').forEach(btn=>{\r
  btn.addEventListener('click',function(){\r
    this.classList.toggle('on');\r
    this.classList.toggle('off');\r
  });\r
});\r
<\/script>\r
</body>\r
</html>`,bg=`<!DOCTYPE html>\r
<html lang="zh-TW">\r
<head>\r
<meta charset="UTF-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1.0">\r
<title>PAC 個人資訊頁</title>\r
<style>\r
*{box-sizing:border-box;margin:0;padding:0}\r
:root{\r
  --blue:#2563EB;--blue-light:#EFF6FF;--blue-mid:#BFDBFE;--blue-dark:#1E40AF;\r
  --gray-50:#F8FAFC;--gray-100:#F1F5F9;--gray-200:#E2E8F0;--gray-300:#CBD5E1;\r
  --gray-400:#94A3B8;--gray-500:#64748B;--gray-600:#475569;--gray-700:#334155;--gray-900:#0F172A;\r
  --green:#16A34A;--green-light:#DCFCE7;--green-mid:#BBF7D0;\r
  --amber:#D97706;--amber-light:#FEF3C7;\r
  --red:#DC2626;--red-light:#FEE2E2;\r
  --purple:#7C3AED;--purple-light:#EDE9FE;\r
  --teal:#0D9488;--teal-light:#CCFBF1;\r
  --white:#FFFFFF;\r
}\r
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans TC',sans-serif;background:var(--gray-50);color:var(--gray-900);height:100vh;display:flex;overflow:hidden;font-size:14px}\r
\r
/* Sidebar */\r
.sidebar{width:192px;min-width:192px;background:var(--white);border-right:1px solid var(--gray-200);display:flex;flex-direction:column;z-index:10}\r
.sidebar-logo{padding:16px 16px 13px;border-bottom:1px solid var(--gray-200)}\r
.logo-text{font-size:14px;font-weight:700;color:var(--blue)}\r
.logo-sub{font-size:11px;color:var(--gray-400);margin-top:2px}\r
.sidebar-nav{padding:6px 0;flex:1}\r
.nav-item{display:flex;align-items:center;gap:8px;padding:9px 14px;font-size:13px;color:var(--gray-500);border-left:3px solid transparent;cursor:default}\r
.nav-item.active{background:var(--blue-light);color:var(--blue);font-weight:600;border-left-color:var(--blue)}\r
.nav-item.disabled{opacity:.38;cursor:not-allowed}\r
.sidebar-user{margin-top: auto;padding:11px 14px;border-top:1px solid var(--gray-200)}\r
.user-row{display:flex;align-items:center;gap:8px;margin-bottom:8px}\r
.user-avatar{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0}\r
.av-mgr{background:var(--amber-light);color:var(--amber)}\r
.av-sup{background:var(--purple-light);color:var(--purple)}\r
.av-pt{background:var(--blue-light);color:var(--blue)}\r
.av-ot{background:#FCE7F3;color:#9D174D}\r
.av-st{background:var(--green-light);color:var(--green)}\r
.av-nur{background:var(--teal-light);color:var(--teal)}\r
.av-doc{background:#FEF3C7;color:#92400E}\r
.av-pha{background:var(--purple-light);color:var(--purple)}\r
.av-nut{background:var(--green-light);color:var(--green)}\r
.av-adm{background:var(--gray-100);color:var(--gray-600)}\r
.user-name{font-size:12px;font-weight:600;color:var(--gray-700)}\r
.user-role-label{font-size:11px;color:var(--gray-400)}\r
.role-switcher{position:relative}\r
.role-select{width:100%;padding:5px 24px 5px 8px;border:1px solid var(--gray-200);border-radius:6px;font-size:11px;font-weight:600;color:var(--gray-600);background:var(--white);cursor:pointer;appearance:none;outline:none}\r
.role-select:focus{border-color:var(--blue)}\r
.role-arrow{position:absolute;right:7px;top:50%;transform:translateY(-50%);font-size:9px;color:var(--gray-400);pointer-events:none}\r
\r
/* Main */\r
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}\r
.topbar{background:var(--white);border-bottom:1px solid var(--gray-200);padding:0 20px;height:48px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.breadcrumb{font-size:12px;color:var(--gray-500)}\r
.content{flex:1;overflow-y:auto;padding:28px 32px}\r
\r
/* Buttons */\r
.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .15s;white-space:nowrap}\r
.btn-primary{background:var(--blue);color:var(--white)}.btn-primary:hover{background:var(--blue-dark)}\r
.btn-secondary{background:var(--white);color:var(--gray-700);border:1px solid var(--gray-300)}.btn-secondary:hover{background:var(--gray-50)}\r
.btn-ghost{background:transparent;color:var(--blue);border:1px solid var(--blue-mid)}.btn-ghost:hover{background:var(--blue-light)}\r
.btn-danger{background:var(--white);color:var(--red);border:1px solid #FECACA}.btn-danger:hover{background:var(--red-light)}\r
.btn-sm{padding:5px 10px;font-size:12px}\r
\r
/* Profile layout */\r
.profile-layout{display:grid;grid-template-columns:260px 1fr;gap:24px;max-width:960px}\r
\r
/* Profile card */\r
.profile-card{background:var(--white);border:1px solid var(--gray-200);border-radius:12px;padding:24px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:14px;height:fit-content}\r
.profile-avatar-lg{width:72px;height:72px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:700;flex-shrink:0}\r
.profile-name{font-size:18px;font-weight:700;color:var(--gray-900)}\r
.profile-role-badge{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:6px;font-size:12px;font-weight:600;background:var(--gray-100);color:var(--gray-600)}\r
.profile-dept{font-size:12px;color:var(--gray-500)}\r
.profile-readonly-note{font-size:11px;color:var(--gray-400);padding:8px 10px;background:var(--gray-50);border-radius:6px;border:1px solid var(--gray-200);width:100%;text-align:left;line-height:1.5}\r
.profile-divider{width:100%;height:1px;background:var(--gray-100)}\r
.profile-stat-row{display:flex;gap:16px;width:100%;justify-content:center}\r
.profile-stat{text-align:center}\r
.profile-stat-val{font-size:18px;font-weight:700;color:var(--blue)}\r
.profile-stat-label{font-size:10px;color:var(--gray-400);margin-top:1px}\r
\r
/* Right column */\r
.right-col{display:flex;flex-direction:column;gap:16px}\r
\r
/* Section card */\r
.section-card{background:var(--white);border:1px solid var(--gray-200);border-radius:12px;overflow:hidden}\r
.section-header{padding:14px 20px;border-bottom:1px solid var(--gray-100);display:flex;align-items:center;justify-content:space-between}\r
.section-title{font-size:13px;font-weight:700;color:var(--gray-700);display:flex;align-items:center;gap:7px}\r
.section-body{padding:18px 20px}\r
\r
/* Form */\r
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}\r
.form-group{display:flex;flex-direction:column;gap:5px}\r
.form-group.full{grid-column:span 2}\r
.form-group label{font-size:11px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.04em}\r
.form-control{padding:8px 11px;border:1px solid var(--gray-300);border-radius:7px;font-size:13px;color:var(--gray-800);background:var(--white);outline:none;transition:border-color .15s}\r
.form-control:focus{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}\r
.form-control[readonly]{background:var(--gray-50);color:var(--gray-500);cursor:default}\r
.form-control[readonly]:focus{border-color:var(--gray-300);box-shadow:none}\r
.readonly-hint{font-size:10px;color:var(--gray-400);margin-top:2px}\r
.form-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:6px}\r
\r
/* Toggle switch */\r
.notif-group{display:flex;flex-direction:column;gap:0}\r
.notif-section-label{font-size:10px;font-weight:700;color:var(--gray-400);text-transform:uppercase;letter-spacing:.06em;padding:12px 0 7px;border-bottom:1px solid var(--gray-100);margin-bottom:2px}\r
.toggle-row{display:flex;align-items:center;justify-content:space-between;padding:11px 0;border-bottom:1px solid var(--gray-50)}\r
.toggle-row:last-child{border-bottom:none}\r
.toggle-info{flex:1;padding-right:16px}\r
.toggle-label{font-size:13px;font-weight:500;color:var(--gray-800)}\r
.toggle-desc{font-size:11px;color:var(--gray-400);margin-top:2px}\r
.toggle{position:relative;display:inline-block;width:38px;height:22px;flex-shrink:0}\r
.toggle input{opacity:0;width:0;height:0}\r
.slider{position:absolute;cursor:pointer;inset:0;background:var(--gray-300);border-radius:999px;transition:.2s}\r
.slider:before{position:absolute;content:'';height:16px;width:16px;left:3px;bottom:3px;background:var(--white);border-radius:50%;transition:.2s;box-shadow:0 1px 3px rgba(0,0,0,.2)}\r
input:checked+.slider{background:var(--blue)}\r
input:checked+.slider:before{transform:translateX(16px)}\r
\r
/* Device list */\r
.device-list{display:flex;flex-direction:column;gap:10px}\r
.device-item{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border:1px solid var(--gray-200);border-radius:8px;background:var(--gray-50)}\r
.device-item.current{border-color:var(--blue-mid);background:var(--blue-light)}\r
.device-left{display:flex;align-items:center;gap:10px}\r
.device-icon{font-size:20px}\r
.device-name{font-size:13px;font-weight:600;color:var(--gray-800)}\r
.device-meta{font-size:11px;color:var(--gray-500);margin-top:1px}\r
.device-current-badge{font-size:10px;font-weight:700;color:var(--blue);background:var(--blue-light);border:1px solid var(--blue-mid);padding:2px 7px;border-radius:4px}\r
\r
/* Password */\r
.pwd-row{display:flex;flex-direction:column;gap:12px}\r
.pwd-strength{display:flex;gap:4px;margin-top:4px}\r
.pwd-bar{height:4px;flex:1;border-radius:999px;background:var(--gray-200)}\r
.pwd-bar.filled.weak{background:var(--red)}\r
.pwd-bar.filled.medium{background:var(--amber)}\r
.pwd-bar.filled.strong{background:var(--green)}\r
\r
/* Modal */\r
.modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);display:flex;align-items:center;justify-content:center;z-index:100;backdrop-filter:blur(2px)}\r
.modal{background:var(--white);border-radius:12px;width:420px;max-width:92vw;box-shadow:0 20px 60px rgba(0,0,0,.15)}\r
.modal-header{padding:16px 20px 13px;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;justify-content:space-between}\r
.modal-title{font-size:15px;font-weight:700}\r
.modal-close{width:25px;height:25px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}\r
.modal-close:hover{background:var(--gray-200)}\r
.modal-body{padding:16px 20px}\r
.modal-footer{padding:12px 20px;border-top:1px solid var(--gray-200);display:flex;justify-content:flex-end;gap:7px}\r
.hidden{display:none!important}\r
</style>\r
</head>\r
<body>\r
\r
<!-- SIDEBAR -->\r
<aside class="sidebar">\r
<!--\r
  <div class="sidebar-logo">\r
    <div class="logo-text">PAC 管理系統</div>\r
    <div class="logo-sub">急性後期照護</div>\r
  </div>\r
  <nav class="sidebar-nav">\r
    <div class="nav-item disabled">🏠 個人儀表板</div>\r
    <div class="nav-item disabled">📋 個案管理</div>\r
    <div class="nav-item disabled">🛏 病床管理</div>\r
    <div class="nav-item disabled">📅 班表總覽頁</div>\r
    <div class="nav-item disabled">🏡 居家排班管理</div>\r
    <div class="nav-item disabled">📊 評估量表</div>\r
    <div class="nav-item disabled">💪 復健紀錄</div>\r
    <div class="nav-item disabled">📤 指標匯出</div>\r
    <div class="nav-item active">👤 個人資訊</div>\r
  </nav>\r
-->\r
  <div class="sidebar-user">\r
    <div class="user-row">\r
      <div class="user-avatar av-mgr" id="user-av">林</div>\r
      <div>\r
        <div class="user-name" id="user-name">林美惠</div>\r
        <div class="user-role-label" id="user-role-label">個案管理師</div>\r
      </div>\r
    </div>\r
    <div class="role-switcher">\r
      <select class="role-select" id="role-select" onchange="switchRole(this.value)">\r
        <option value="mgr">個管師</option>\r
        <option value="sup">復健主管</option>\r
        <option value="pt">PT（物理治療師）</option>\r
        <option value="ot">OT（職能治療師）</option>\r
        <option value="st">ST（語言治療師）</option>\r
        <option value="nur">護理師</option>\r
        <option value="doc">醫師</option>\r
        <option value="pha">藥師</option>\r
        <option value="nut">營養師</option>\r
        <option value="adm">行政</option>\r
      </select>\r
      <span class="role-arrow">▾</span>\r
    </div>\r
  </div>\r
</aside>\r
\r
<!-- MAIN -->\r
<div class="main">\r
  <div class="topbar">\r
    <div class="breadcrumb">個人資訊</div>\r
    <div style="font-size:11px;color:var(--gray-400)">2026/06/25 週四</div>\r
  </div>\r
  <div class="content">\r
    <div class="profile-layout">\r
\r
      <!-- 左側：個人卡片 -->\r
      <div>\r
        <div class="profile-card">\r
          <div class="profile-avatar-lg av-mgr" id="profile-av-lg">林</div>\r
          <div>\r
            <div class="profile-name" id="profile-name">林美惠</div>\r
            <div class="profile-dept" id="profile-dept">復健科・員郭醫院</div>\r
          </div>\r
          <div class="profile-role-badge" id="profile-role-badge">🔒 個案管理師</div>\r
          <div class="profile-readonly-note">ℹ️ 角色與所屬單位由系統管理員設定，如需變更請聯繫資訊部門。</div>\r
          <div class="profile-divider"></div>\r
          <div class="profile-stat-row">\r
            <div class="profile-stat">\r
              <div class="profile-stat-val" id="profile-stat-val">24</div>\r
              <div class="profile-stat-label" id="profile-stat-label">管理個案</div>\r
            </div>\r
            <div class="profile-stat">\r
              <div class="profile-stat-val" style="color:var(--green)">3年</div>\r
              <div class="profile-stat-label">在職年資</div>\r
            </div>\r
          </div>\r
          <div class="profile-divider"></div>\r
          <div style="width:100%;text-align:left">\r
            <div style="font-size:11px;color:var(--gray-400);margin-bottom:6px">最後登入</div>\r
            <div style="font-size:12px;color:var(--gray-600)">2026/06/25 08:34<br>Chrome・Mac</div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- 右側 -->\r
      <div class="right-col">\r
\r
        <!-- 個人資料 -->\r
        <div class="section-card">\r
          <div class="section-header">\r
            <div class="section-title">👤 個人資料</div>\r
            <button class="btn btn-ghost btn-sm" id="edit-btn" onclick="toggleEdit()">✏️ 編輯</button>\r
          </div>\r
          <div class="section-body">\r
            <div class="form-grid">\r
              <div class="form-group">\r
                <label>姓名</label>\r
                <input class="form-control" id="f-name" value="林美惠" readonly>\r
              </div>\r
              <div class="form-group">\r
                <label>職稱</label>\r
                <input class="form-control" id="f-title" value="個案管理師" readonly>\r
              </div>\r
              <div class="form-group">\r
                <label>所屬單位</label>\r
                <input class="form-control" value="復健科" readonly>\r
                <div class="readonly-hint">由系統管理員設定，不可自行修改</div>\r
              </div>\r
              <div class="form-group">\r
                <label>角色</label>\r
                <input class="form-control" id="f-role" value="個管師" readonly>\r
                <div class="readonly-hint">由系統管理員設定，不可自行修改</div>\r
              </div>\r
              <div class="form-group">\r
                <label>電子郵件</label>\r
                <input class="form-control" id="f-email" value="lin.meihui@yuankuo.com.tw" readonly>\r
              </div>\r
              <div class="form-group">\r
                <label>電話號碼</label>\r
                <input class="form-control" id="f-phone" value="0912-345-678" readonly>\r
              </div>\r
            </div>\r
            <div class="form-actions hidden" id="edit-actions">\r
              <button class="btn btn-secondary btn-sm" onclick="cancelEdit()">取消</button>\r
              <button class="btn btn-primary btn-sm" onclick="saveEdit()">儲存變更</button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- 通知設定 -->\r
        <div class="section-card">\r
          <div class="section-header">\r
            <div class="section-title">🔔 通知設定</div>\r
            <span style="font-size:11px;color:var(--gray-400)">系統內推播</span>\r
          </div>\r
          <div class="section-body">\r
            <div class="notif-group" id="notif-settings">\r
              <!-- 由 JS 渲染 -->\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- 安全與登入 -->\r
        <div class="section-card">\r
          <div class="section-header">\r
            <div class="section-title">🔒 安全與登入</div>\r
          </div>\r
          <div class="section-body">\r
            <!-- 密碼變更 -->\r
            <div style="margin-bottom:20px">\r
              <div style="font-size:12px;font-weight:700;color:var(--gray-600);margin-bottom:12px">密碼變更</div>\r
              <div class="pwd-row">\r
                <div class="form-group">\r
                  <label>目前密碼</label>\r
                  <input class="form-control" type="password" placeholder="輸入目前密碼" id="pwd-current">\r
                </div>\r
                <div class="form-group">\r
                  <label>新密碼</label>\r
                  <input class="form-control" type="password" placeholder="至少 8 個字元" id="pwd-new" oninput="checkPwd(this.value)">\r
                  <div class="pwd-strength">\r
                    <div class="pwd-bar" id="pb1"></div>\r
                    <div class="pwd-bar" id="pb2"></div>\r
                    <div class="pwd-bar" id="pb3"></div>\r
                    <div class="pwd-bar" id="pb4"></div>\r
                  </div>\r
                  <div style="font-size:10px;color:var(--gray-400);margin-top:2px" id="pwd-hint">需包含大小寫字母與數字</div>\r
                </div>\r
                <div class="form-group">\r
                  <label>確認新密碼</label>\r
                  <input class="form-control" type="password" placeholder="再次輸入新密碼" id="pwd-confirm">\r
                </div>\r
              </div>\r
              <div style="display:flex;justify-content:flex-end;margin-top:10px">\r
                <button class="btn btn-primary btn-sm" onclick="alert('密碼已更新')">更新密碼</button>\r
              </div>\r
            </div>\r
\r
            <!-- 登入裝置 -->\r
            <div style="border-top:1px solid var(--gray-100);padding-top:16px">\r
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">\r
                <div style="font-size:12px;font-weight:700;color:var(--gray-600)">登入裝置紀錄</div>\r
                <button class="btn btn-danger btn-sm" onclick="openModal('modal-logout-all')">全部登出</button>\r
              </div>\r
              <div class="device-list">\r
                <div class="device-item current">\r
                  <div class="device-left">\r
                    <div class="device-icon">💻</div>\r
                    <div>\r
                      <div class="device-name">Chrome・MacBook Pro</div>\r
                      <div class="device-meta">台灣・2026/06/25 08:34 登入</div>\r
                    </div>\r
                  </div>\r
                  <span class="device-current-badge">目前裝置</span>\r
                </div>\r
                <div class="device-item">\r
                  <div class="device-left">\r
                    <div class="device-icon">📱</div>\r
                    <div>\r
                      <div class="device-name">Safari・iPhone 15</div>\r
                      <div class="device-meta">台灣・2026/06/24 18:10 登入</div>\r
                    </div>\r
                  </div>\r
                  <button class="btn btn-secondary btn-sm" onclick="alert('已登出此裝置')">登出</button>\r
                </div>\r
                <div class="device-item">\r
                  <div class="device-left">\r
                    <div class="device-icon">💻</div>\r
                    <div>\r
                      <div class="device-name">Chrome・Windows PC（復健室電腦）</div>\r
                      <div class="device-meta">台灣・2026/06/23 14:20 登入</div>\r
                    </div>\r
                  </div>\r
                  <button class="btn btn-secondary btn-sm" onclick="alert('已登出此裝置')">登出</button>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal：全部登出確認 -->\r
<div id="modal-logout-all" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title">🔒 確認全部登出</div>\r
      <button class="modal-close" onclick="closeModal('modal-logout-all')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div style="font-size:13px;color:var(--gray-600);line-height:1.7">將登出所有裝置（包含目前裝置），需重新登入。確定繼續嗎？</div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-logout-all')">取消</button>\r
      <button class="btn btn-danger" onclick="closeModal('modal-logout-all');alert('已全部登出')">確認登出</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<script>\r
// ── 角色資料 ──\r
const ROLES = {\r
  mgr:  {name:'林美惠', label:'個案管理師', dept:'復健科', av:'av-mgr', ch:'林', role:'個管師', email:'lin.meihui@yuankuo.com.tw', phone:'0912-345-678', stat:24, statLabel:'管理個案'},\r
  sup:  {name:'王大明', label:'復健主管', dept:'復健科', av:'av-sup', ch:'王', role:'復健主管', email:'wang.daming@yuankuo.com.tw', phone:'0923-456-789', stat:12, statLabel:'管理治療師'},\r
  pt:   {name:'黃志豪', label:'PT（物理治療師）', dept:'復健科', av:'av-pt', ch:'黃', role:'復健治療師', email:'huang.zhihao@yuankuo.com.tw', phone:'0934-567-890', stat:8, statLabel:'負責個案'},\r
  ot:   {name:'李佳穎', label:'OT（職能治療師）', dept:'復健科', av:'av-ot', ch:'李', role:'復健治療師', email:'lee.jiaying@yuankuo.com.tw', phone:'0945-678-901', stat:6, statLabel:'負責個案'},\r
  st:   {name:'吳怡君', label:'ST（語言治療師）', dept:'復健科', av:'av-st', ch:'吳', role:'復健治療師', email:'wu.yijun@yuankuo.com.tw', phone:'0956-789-012', stat:4, statLabel:'負責個案'},\r
  nur:  {name:'陳玉玲', label:'護理師', dept:'護理部', av:'av-nur', ch:'陳', role:'護理師', email:'chen.yuling@yuankuo.com.tw', phone:'0967-890-123', stat:15, statLabel:'病房個案'},\r
  doc:  {name:'張宗達', label:'醫師', dept:'復健科', av:'av-doc', ch:'張', role:'醫師', email:'chang.zongda@yuankuo.com.tw', phone:'0978-901-234', stat:5, statLabel:'PAC 個案'},\r
  pha:  {name:'林建志', label:'藥師', dept:'藥劑科', av:'av-pha', ch:'林', role:'藥師', email:'lin.jianzhi@yuankuo.com.tw', phone:'0989-012-345', stat:3, statLabel:'本月評估'},\r
  nut:  {name:'周雅玲', label:'營養師', dept:'營養科', av:'av-nut', ch:'周', role:'營養師', email:'chou.yaling@yuankuo.com.tw', phone:'0990-123-456', stat:3, statLabel:'本月評估'},\r
  adm:  {name:'蔡書明', label:'行政', dept:'行政部', av:'av-adm', ch:'蔡', role:'行政', email:'tsai.shuming@yuankuo.com.tw', phone:'0901-234-567', stat:8, statLabel:'待批價'},\r
};\r
\r
// ── 通知設定（各角色） ──\r
const NOTIF_SETTINGS = {\r
  mgr: [\r
    {section:'需要我處理', items:[\r
      {id:'n1',label:'展延截止提醒',desc:'個案展延日期前 N 天提醒（由期限設定決定）',on:true},\r
      {id:'n2',label:'新轉介待收案判斷',desc:'新個案轉介進來，待我判斷是否符合收案條件',on:true},\r
      {id:'n3',label:'評估量表逾期提醒',desc:'治療師有評估表逾期未填',on:true},\r
      {id:'n4',label:'待審核：評估修改申請',desc:'復健主管已審核，送我最終審核',on:true},\r
      {id:'n5',label:'待審核：居家批價',desc:'復健主管已審核批價，送我審核後轉行政',on:true},\r
    ]},\r
    {section:'狀態更新', items:[\r
      {id:'n6',label:'展延通過通知',desc:'健保署回覆展延通過',on:true},\r
      {id:'n7',label:'展延失敗通知',desc:'健保署回覆展延失敗',on:true},\r
      {id:'n8',label:'個案入院確認',desc:'行政完成建檔，個案正式入院',on:false},\r
    ]},\r
  ],\r
  sup: [\r
    {section:'需要我處理', items:[\r
      {id:'n1',label:'待審核：評估修改申請',desc:'治療師送出修改申請，待我初審',on:true},\r
      {id:'n2',label:'待審核：換班申請',desc:'治療師送出換班申請',on:true},\r
      {id:'n3',label:'待審核：居家批價',desc:'治療師確認批價，待我審核後送個管師',on:true},\r
      {id:'n4',label:'治療師評估逾期提醒',desc:'我管理的治療師有評估表逾期',on:true},\r
      {id:'n5',label:'居家個案待發佈',desc:'個管師建立新居家個案，待我發佈報名',on:true},\r
    ]},\r
    {section:'狀態更新', items:[\r
      {id:'n6',label:'審核結果通知',desc:'個管師對我送出的申請核准或拒絕',on:true},\r
      {id:'n7',label:'展延通過通知',desc:'個管師轉發展延通過結果',on:false},\r
    ]},\r
  ],\r
  pt: [\r
    {section:'需要我處理', items:[\r
      {id:'n1',label:'評估待填提醒',desc:'有評估量表應填日期即將到來',on:true},\r
      {id:'n2',label:'評估逾期提醒',desc:'有評估量表已逾期未填',on:true},\r
      {id:'n3',label:'新居家個案可報名',desc:'有新居家個案開放報名',on:true},\r
    ]},\r
    {section:'狀態更新', items:[\r
      {id:'n4',label:'修改申請核准通知',desc:'復健主管或個管師核准我的修改申請',on:true},\r
      {id:'n5',label:'修改申請拒絕通知',desc:'修改申請被拒絕',on:true},\r
      {id:'n6',label:'居家抽籤結果',desc:'居家個案報名抽籤結果出爐',on:true},\r
      {id:'n7',label:'展延通過通知',desc:'個管師轉發展延通過，療程可繼續',on:false},\r
    ]},\r
  ],\r
  ot: [\r
    {section:'需要我處理', items:[\r
      {id:'n1',label:'評估待填提醒',desc:'有評估量表應填日期即將到來',on:true},\r
      {id:'n2',label:'評估逾期提醒',desc:'有評估量表已逾期未填',on:true},\r
      {id:'n3',label:'新居家個案可報名',desc:'有新居家個案開放報名',on:true},\r
    ]},\r
    {section:'狀態更新', items:[\r
      {id:'n4',label:'修改申請核准通知',desc:'修改申請已通過',on:true},\r
      {id:'n5',label:'修改申請拒絕通知',desc:'修改申請被拒絕',on:true},\r
      {id:'n6',label:'居家抽籤結果',desc:'居家個案報名抽籤結果出爐',on:true},\r
      {id:'n7',label:'展延通過通知',desc:'療程可繼續',on:false},\r
    ]},\r
  ],\r
  st: [\r
    {section:'需要我處理', items:[\r
      {id:'n1',label:'評估待填提醒',desc:'有評估量表應填日期即將到來',on:true},\r
      {id:'n2',label:'評估逾期提醒',desc:'有評估量表已逾期未填',on:true},\r
    ]},\r
    {section:'狀態更新', items:[\r
      {id:'n3',label:'修改申請核准通知',desc:'修改申請已通過',on:true},\r
      {id:'n4',label:'修改申請拒絕通知',desc:'修改申請被拒絕',on:true},\r
      {id:'n5',label:'展延通過通知',desc:'療程可繼續',on:false},\r
    ]},\r
  ],\r
  nur: [\r
    {section:'需要我處理', items:[\r
      {id:'n1',label:'評估待填提醒',desc:'有護理評估量表應填',on:true},\r
      {id:'n2',label:'評估逾期提醒',desc:'有評估量表已逾期',on:true},\r
      {id:'n3',label:'PAC 收案判斷委託',desc:'個管師委託我協助判斷是否符合收案條件',on:true},\r
    ]},\r
    {section:'狀態更新', items:[\r
      {id:'n4',label:'今日入院通知',desc:'今日有新個案入院，病房請準備',on:true},\r
      {id:'n5',label:'今日出院通知',desc:'今日有個案出院',on:false},\r
    ]},\r
  ],\r
  doc: [\r
    {section:'需要我處理', items:[\r
      {id:'n1',label:'PAC 收案判斷委託',desc:'個管師委託我判斷個案是否符合 PAC 條件',on:true},\r
      {id:'n2',label:'醫囑待填寫',desc:'個案確認為 PAC，請提供復健治療方向醫囑',on:true},\r
      {id:'n3',label:'評估待填提醒',desc:'有醫師評估量表應填',on:true},\r
      {id:'n4',label:'評估逾期提醒',desc:'有評估量表已逾期',on:true},\r
    ]},\r
    {section:'狀態更新', items:[\r
      {id:'n5',label:'居家 PAC 交接提醒',desc:'居家醫療首次訪視後，提醒與 PAC 團隊交接',on:true},\r
    ]},\r
  ],\r
  pha: [\r
    {section:'需要我處理', items:[\r
      {id:'n1',label:'評估待填提醒',desc:'有藥師評估量表應填',on:true},\r
      {id:'n2',label:'評估逾期提醒',desc:'有評估量表已逾期',on:true},\r
    ]},\r
    {section:'狀態更新', items:[\r
      {id:'n3',label:'評估送出確認',desc:'評估量表送出後收到系統確認通知',on:false},\r
    ]},\r
  ],\r
  nut: [\r
    {section:'需要我處理', items:[\r
      {id:'n1',label:'評估待填提醒',desc:'有營養師評估量表應填',on:true},\r
      {id:'n2',label:'評估逾期提醒',desc:'有評估量表已逾期',on:true},\r
    ]},\r
    {section:'狀態更新', items:[\r
      {id:'n3',label:'評估送出確認',desc:'評估量表送出後收到系統確認通知',on:false},\r
    ]},\r
  ],\r
  adm: [\r
    {section:'需要我處理', items:[\r
      {id:'n1',label:'今日入院待建檔通知',desc:'今日有新個案入院，需於當日至杏翔系統建檔',on:true},\r
      {id:'n2',label:'居家批價待處理通知',desc:'個管師審核通過，需當日完成批價',on:true},\r
    ]},\r
    {section:'狀態更新', items:[\r
      {id:'n3',label:'月初獎金結算提醒',desc:'每月初提醒處理上月已結案個案的費用結算',on:true},\r
      {id:'n4',label:'個案出院確認',desc:'個案正式出院，可進行後續結算',on:false},\r
    ]},\r
  ],\r
};\r
\r
let currentRole = 'mgr';\r
let isEditing = false;\r
\r
function renderNotifSettings(role) {\r
  const settings = NOTIF_SETTINGS[role] || [];\r
  let html = '';\r
  settings.forEach(group => {\r
    html += \`<div class="notif-section-label">\${group.section}</div>\`;\r
    group.items.forEach(item => {\r
      html += \`\r
        <div class="toggle-row">\r
          <div class="toggle-info">\r
            <div class="toggle-label">\${item.label}</div>\r
            <div class="toggle-desc">\${item.desc}</div>\r
          </div>\r
          <label class="toggle">\r
            <input type="checkbox" \${item.on ? 'checked' : ''} onchange="this.checked">\r
            <span class="slider"></span>\r
          </label>\r
        </div>\`;\r
    });\r
  });\r
  document.getElementById('notif-settings').innerHTML = html;\r
}\r
\r
function switchRole(role) {\r
  currentRole = role;\r
  const cfg = ROLES[role];\r
\r
  // sidebar\r
  document.getElementById('user-av').textContent = cfg.ch;\r
  document.getElementById('user-av').className = 'user-avatar ' + cfg.av;\r
  document.getElementById('user-name').textContent = cfg.name;\r
  document.getElementById('user-role-label').textContent = cfg.label;\r
\r
  // profile card\r
  const avLg = document.getElementById('profile-av-lg');\r
  avLg.textContent = cfg.ch;\r
  avLg.className = 'profile-avatar-lg ' + cfg.av;\r
  document.getElementById('profile-name').textContent = cfg.name;\r
  document.getElementById('profile-dept').textContent = cfg.dept + '・員郭醫院';\r
  document.getElementById('profile-role-badge').textContent = '🔒 ' + cfg.role;\r
  document.getElementById('profile-stat-val').textContent = cfg.stat;\r
  document.getElementById('profile-stat-label').textContent = cfg.statLabel;\r
\r
  // form fields\r
  document.getElementById('f-name').value = cfg.name;\r
  document.getElementById('f-title').value = cfg.label;\r
  document.getElementById('f-role').value = cfg.role;\r
  document.getElementById('f-email').value = cfg.email;\r
  document.getElementById('f-phone').value = cfg.phone;\r
\r
  // cancel any editing\r
  cancelEdit();\r
\r
  // notif\r
  renderNotifSettings(role);\r
}\r
\r
function toggleEdit() {\r
  isEditing = !isEditing;\r
  const fields = ['f-name','f-title','f-email','f-phone'];\r
  fields.forEach(id => {\r
    const el = document.getElementById(id);\r
    if(['f-title','f-role'].includes(id)) return;\r
    el.readOnly = !isEditing;\r
  });\r
  document.getElementById('edit-btn').textContent = isEditing ? '取消' : '✏️ 編輯';\r
  document.getElementById('edit-actions').classList.toggle('hidden', !isEditing);\r
}\r
\r
function cancelEdit() {\r
  isEditing = false;\r
  const cfg = ROLES[currentRole];\r
  document.getElementById('f-name').value = cfg.name;\r
  document.getElementById('f-email').value = cfg.email;\r
  document.getElementById('f-phone').value = cfg.phone;\r
  ['f-name','f-email','f-phone'].forEach(id => document.getElementById(id).readOnly = true);\r
  document.getElementById('edit-btn').textContent = '✏️ 編輯';\r
  document.getElementById('edit-actions').classList.add('hidden');\r
}\r
\r
function saveEdit() {\r
  alert('個人資料已儲存');\r
  cancelEdit();\r
}\r
\r
function checkPwd(val) {\r
  const bars = [document.getElementById('pb1'),document.getElementById('pb2'),document.getElementById('pb3'),document.getElementById('pb4')];\r
  const hint = document.getElementById('pwd-hint');\r
  bars.forEach(b=>{ b.className='pwd-bar'; });\r
  if(!val){ hint.textContent='需包含大小寫字母與數字'; return; }\r
  let score = 0;\r
  if(val.length>=8) score++;\r
  if(/[A-Z]/.test(val)) score++;\r
  if(/[0-9]/.test(val)) score++;\r
  if(/[^A-Za-z0-9]/.test(val)) score++;\r
  const cls = score<=1?'weak':score<=2?'medium':'strong';\r
  const labels = {weak:'弱',medium:'普通',strong:'強'};\r
  for(let i=0;i<score;i++) bars[i].className='pwd-bar filled '+cls;\r
  hint.textContent = '密碼強度：' + labels[cls];\r
  hint.style.color = score<=1?'var(--red)':score<=2?'var(--amber)':'var(--green)';\r
}\r
\r
function openModal(id){ document.getElementById(id).classList.remove('hidden') }\r
function closeModal(id){ document.getElementById(id).classList.add('hidden') }\r
document.querySelectorAll('.modal-overlay').forEach(o=>o.addEventListener('click',function(e){if(e.target===this)this.classList.add('hidden')}));\r
\r
// Init\r
renderNotifSettings('mgr');\r
<\/script>\r
</body>\r
</html>`,gg=`<!DOCTYPE html>\r
<html lang="zh-TW">\r
<head>\r
<meta charset="UTF-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1.0">\r
<title>PAC 後台設定管理</title>\r
<style>\r
*{box-sizing:border-box;margin:0;padding:0}\r
:root{\r
  --blue:#2563EB;--blue-light:#EFF6FF;--blue-mid:#BFDBFE;--blue-dark:#1E40AF;\r
  --gray-50:#F8FAFC;--gray-100:#F1F5F9;--gray-200:#E2E8F0;--gray-300:#CBD5E1;\r
  --gray-400:#94A3B8;--gray-500:#64748B;--gray-600:#475569;--gray-700:#334155;--gray-900:#0F172A;\r
  --green:#16A34A;--green-light:#DCFCE7;--green-mid:#BBF7D0;\r
  --amber:#D97706;--amber-light:#FEF3C7;\r
  --red:#DC2626;--red-light:#FEE2E2;\r
  --purple:#7C3AED;--purple-light:#EDE9FE;\r
  --teal:#0D9488;--teal-light:#CCFBF1;\r
  --white:#FFFFFF;\r
  --admin-dark:#1E293B;--admin-darker:#0F172A;\r
}\r
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans TC',sans-serif;background:var(--gray-50);color:var(--gray-900);height:100vh;display:flex;overflow:hidden;font-size:14px}\r
\r
/* ── 後台專用 Sidebar ── */\r
.sidebar{width:200px;min-width:200px;background:var(--admin-dark);display:flex;flex-direction:column;z-index:10}\r
.sidebar-logo{padding:18px 16px 14px;border-bottom:1px solid rgba(255,255,255,.08)}\r
.logo-text{font-size:13px;font-weight:700;color:var(--white);letter-spacing:.02em}\r
.logo-sub{font-size:10px;color:rgba(255,255,255,.4);margin-top:3px;text-transform:uppercase;letter-spacing:.06em}\r
.back-link{display:flex;align-items:center;gap:6px;padding:10px 16px;font-size:12px;color:rgba(255,255,255,.5);cursor:pointer;border-bottom:1px solid rgba(255,255,255,.06);transition:color .15s}\r
.back-link:hover{color:rgba(255,255,255,.85)}\r
.sidebar-nav{padding:8px 0;flex:1}\r
.nav-section-label{font-size:9px;font-weight:700;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.08em;padding:10px 16px 5px}\r
.nav-item{display:flex;align-items:center;gap:9px;padding:9px 16px;font-size:13px;color:rgba(255,255,255,.55);cursor:pointer;border-left:3px solid transparent;transition:all .15s}\r
.nav-item:hover{background:rgba(255,255,255,.06);color:rgba(255,255,255,.85)}\r
.nav-item.active{background:rgba(37,99,235,.25);color:var(--white);font-weight:600;border-left-color:var(--blue)}\r
.sidebar-user{padding:12px 16px;border-top:1px solid rgba(255,255,255,.08);display:flex;align-items:center;gap:8px}\r
.admin-avatar{width:28px;height:28px;border-radius:50%;background:rgba(37,99,235,.5);color:var(--white);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0}\r
.admin-name{font-size:12px;font-weight:600;color:rgba(255,255,255,.85)}\r
.admin-role{font-size:10px;color:rgba(255,255,255,.4)}\r
\r
/* ── Main ── */\r
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}\r
.topbar{background:var(--white);border-bottom:1px solid var(--gray-200);padding:0 24px;height:48px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.breadcrumb{font-size:12px;color:var(--gray-500)}\r
.topbar-right{display:flex;align-items:center;gap:10px}\r
.content{flex:1;overflow-y:auto;padding:24px}\r
\r
/* ── Buttons ── */\r
.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .15s;white-space:nowrap}\r
.btn-primary{background:var(--blue);color:var(--white)}.btn-primary:hover{background:var(--blue-dark)}\r
.btn-secondary{background:var(--white);color:var(--gray-700);border:1px solid var(--gray-300)}.btn-secondary:hover{background:var(--gray-50)}\r
.btn-ghost{background:transparent;color:var(--blue);border:1px solid var(--blue-mid)}.btn-ghost:hover{background:var(--blue-light)}\r
.btn-danger{background:var(--white);color:var(--red);border:1px solid #FECACA}.btn-danger:hover{background:var(--red-light)}\r
.btn-amber{background:var(--white);color:var(--amber);border:1px solid #FDE68A}.btn-amber:hover{background:var(--amber-light)}\r
.btn-sm{padding:5px 10px;font-size:12px}.btn-xs{padding:3px 8px;font-size:11px}\r
\r
/* ── Badges ── */\r
.badge{display:inline-flex;align-items:center;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:600}\r
.badge-blue{background:var(--blue-light);color:var(--blue)}\r
.badge-green{background:var(--green-light);color:var(--green)}\r
.badge-amber{background:var(--amber-light);color:var(--amber)}\r
.badge-gray{background:var(--gray-100);color:var(--gray-500)}\r
.badge-red{background:var(--red-light);color:var(--red)}\r
.badge-purple{background:var(--purple-light);color:var(--purple)}\r
\r
/* ── Page header ── */\r
.page-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:20px}\r
.page-title{font-size:18px;font-weight:700}\r
.page-subtitle{font-size:12px;color:var(--gray-500);margin-top:3px}\r
\r
/* ── Stats strip ── */\r
.stats-row{display:flex;gap:10px;margin-bottom:20px}\r
.stat-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:14px 20px;flex:1}\r
.stat-label{font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:4px}\r
.stat-value{font-size:22px;font-weight:700;color:var(--gray-900)}\r
.stat-sub{font-size:11px;color:var(--gray-400);margin-top:2px}\r
.stat-card.s-blue .stat-value{color:var(--blue)}\r
.stat-card.s-green .stat-value{color:var(--green)}\r
.stat-card.s-amber .stat-value{color:var(--amber)}\r
.stat-card.s-red .stat-value{color:var(--red)}\r
\r
/* ── Toolbar ── */\r
.toolbar{display:flex;gap:8px;margin-bottom:14px;align-items:center;justify-content:space-between;flex-wrap:wrap}\r
.toolbar-left{display:flex;gap:8px;align-items:center;flex-wrap:wrap}\r
.search-wrap{position:relative}\r
.search-wrap input{padding:7px 10px 7px 30px;border:1px solid var(--gray-300);border-radius:7px;font-size:12px;outline:none;width:220px}\r
.search-wrap input:focus{border-color:var(--blue)}\r
.search-icon{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:var(--gray-400);font-size:13px}\r
select.filter{padding:7px 10px;border:1px solid var(--gray-300);border-radius:7px;font-size:12px;color:var(--gray-700);background:var(--white);outline:none;cursor:pointer}\r
\r
/* ── Member table ── */\r
.table-card{background:var(--white);border:1px solid var(--gray-200);border-radius:12px;overflow:hidden}\r
.data-table{width:100%;border-collapse:collapse;font-size:13px}\r
.data-table th{padding:10px 14px;background:var(--gray-50);border-bottom:1px solid var(--gray-200);font-size:11px;font-weight:700;color:var(--gray-500);text-align:left;white-space:nowrap;text-transform:uppercase;letter-spacing:.04em}\r
.data-table td{padding:12px 14px;border-bottom:1px solid var(--gray-100);vertical-align:middle}\r
.data-table tr:last-child td{border-bottom:none}\r
.data-table tr:hover td{background:var(--gray-50)}\r
.member-cell{display:flex;align-items:center;gap:10px}\r
.member-av{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0}\r
.member-name{font-size:13px;font-weight:600;color:var(--gray-900)}\r
.member-email{font-size:11px;color:var(--gray-400);margin-top:1px}\r
.role-tag{display:inline-flex;align-items:center;padding:3px 8px;border-radius:5px;font-size:11px;font-weight:600}\r
.status-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px}\r
.dot{width:7px;height:7px;border-radius:50%}\r
.dot-green{background:var(--green)}\r
.dot-gray{background:var(--gray-400)}\r
.dot-red{background:var(--red)}\r
.action-btns{display:flex;gap:5px}\r
.last-login{font-size:12px;color:var(--gray-600)}\r
.last-login-sub{font-size:10px;color:var(--gray-400)}\r
\r
/* ── Permission matrix ── */\r
.perm-container{overflow-x:auto}\r
.perm-table{border-collapse:collapse;font-size:12px;min-width:900px;width:100%}\r
.perm-table th{padding:10px 8px;background:var(--gray-50);border:1px solid var(--gray-200);font-size:11px;font-weight:700;color:var(--gray-600);text-align:center;white-space:nowrap}\r
.perm-table th.module-col{text-align:left;padding:10px 14px;min-width:160px;position:sticky;left:0;z-index:2;background:var(--gray-50)}\r
.perm-table td{padding:10px 8px;border:1px solid var(--gray-100);text-align:center;vertical-align:middle}\r
.perm-table td.module-cell{text-align:left;padding:10px 14px;font-weight:500;color:var(--gray-700);position:sticky;left:0;z-index:1;background:var(--white);font-size:12px}\r
.perm-table td.module-cell .mod-icon{margin-right:6px}\r
.perm-table tr:hover td{background:var(--blue-light)}\r
.perm-table tr:hover td.module-cell{background:var(--blue-light)}\r
.perm-table thead th.role-header{min-width:72px}\r
.perm-table thead tr:first-child th{border-bottom:2px solid var(--gray-200)}\r
.perm-cb{width:16px;height:16px;accent-color:var(--blue);cursor:pointer}\r
.role-header-inner{display:flex;flex-direction:column;align-items:center;gap:3px}\r
.role-av-sm{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;margin:0 auto 2px}\r
.perm-legend{display:flex;align-items:center;gap:16px;margin-top:12px;font-size:11px;color:var(--gray-500)}\r
.perm-legend-item{display:flex;align-items:center;gap:5px}\r
\r
/* ── Modal ── */\r
.modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);display:flex;align-items:center;justify-content:center;z-index:100;backdrop-filter:blur(2px)}\r
.modal{background:var(--white);border-radius:12px;width:520px;max-width:95vw;max-height:90vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.15)}\r
.modal-lg{width:640px}\r
.modal-header{padding:16px 20px 13px;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.modal-title{font-size:15px;font-weight:700}\r
.modal-close{width:25px;height:25px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}\r
.modal-close:hover{background:var(--gray-200)}\r
.modal-body{padding:16px 20px;overflow-y:auto;flex:1}\r
.modal-footer{padding:12px 20px;border-top:1px solid var(--gray-200);display:flex;justify-content:flex-end;gap:7px;flex-shrink:0}\r
\r
/* ── Forms ── */\r
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r
.form-group{display:flex;flex-direction:column;gap:5px}\r
.form-group.full{grid-column:span 2}\r
.form-group label{font-size:11px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.04em}\r
.form-control{padding:8px 11px;border:1px solid var(--gray-300);border-radius:7px;font-size:13px;color:var(--gray-800);background:var(--white);outline:none;transition:border-color .15s}\r
.form-control:focus{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}\r
select.form-control{cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%2394A3B8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;padding-right:24px}\r
\r
/* HIS import */\r
.his-box{background:var(--gray-50);border:2px dashed var(--gray-300);border-radius:10px;padding:20px;text-align:center;margin-bottom:14px;cursor:pointer;transition:all .15s}\r
.his-box:hover{border-color:var(--blue);background:var(--blue-light)}\r
.his-box-icon{font-size:28px;margin-bottom:8px}\r
.his-box-text{font-size:13px;font-weight:600;color:var(--gray-700)}\r
.his-box-sub{font-size:11px;color:var(--gray-400);margin-top:3px}\r
.import-result{background:var(--white);border:1px solid var(--gray-200);border-radius:8px;overflow:hidden}\r
.import-result-header{padding:10px 14px;background:var(--gray-50);border-bottom:1px solid var(--gray-200);font-size:12px;font-weight:600;color:var(--gray-600)}\r
.import-row{display:flex;align-items:center;gap:10px;padding:9px 14px;border-bottom:1px solid var(--gray-100)}\r
.import-row:last-child{border-bottom:none}\r
.import-check{accent-color:var(--blue);width:15px;height:15px;cursor:pointer}\r
.import-name{font-size:13px;font-weight:600;flex:1}\r
.import-meta{font-size:11px;color:var(--gray-500)}\r
\r
/* Info note */\r
.info-note{font-size:12px;padding:10px 12px;border-radius:6px;margin-bottom:12px;line-height:1.6}\r
.info-note.blue{background:var(--blue-light);color:var(--blue-dark)}\r
.info-note.amber{background:var(--amber-light);color:var(--amber)}\r
.info-note.red{background:var(--red-light);color:var(--red)}\r
\r
/* Tabs */\r
.modal-tabs{display:flex;border-bottom:2px solid var(--gray-200);margin-bottom:16px}\r
.modal-tab{padding:8px 16px;font-size:13px;font-weight:500;color:var(--gray-500);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;transition:all .15s}\r
.modal-tab.active{color:var(--blue);border-bottom-color:var(--blue);font-weight:600}\r
\r
.hidden{display:none!important}\r
.divider{height:1px;background:var(--gray-100);margin:14px 0}\r
</style>\r
</head>\r
<body>\r
\r
<!-- 後台專用 SIDEBAR -->\r
<aside class="sidebar">\r
  <div class="sidebar-logo">\r
    <div class="logo-text">PAC 後台管理</div>\r
    <div class="logo-sub">System Administration</div>\r
  </div>\r
<!--\r
  <div class="back-link" onclick="alert('返回 → PAC 管理系統主畫面')">\r
    ← 返回系統\r
  </div>\r
-->\r
  <nav class="sidebar-nav">\r
    <div class="nav-section-label">帳號管理</div>\r
    <div class="nav-item active" onclick="showPage('members')">👥 成員管理</div>\r
    <div class="nav-section-label">權限設定</div>\r
    <div class="nav-item" onclick="showPage('permissions')">🔑 角色權限矩陣</div>\r
  </nav>\r
  <div class="sidebar-user">\r
    <div class="admin-avatar">資</div>\r
    <div>\r
      <div class="admin-name">王志偉</div>\r
      <div class="admin-role">系統管理員・資訊部</div>\r
    </div>\r
  </div>\r
</aside>\r
\r
<!-- MAIN -->\r
<div class="main">\r
  <div class="topbar">\r
    <div class="breadcrumb" id="bc">後台設定管理 › 成員管理</div>\r
    <div class="topbar-right">\r
      <span style="font-size:11px;color:var(--gray-400)">員郭醫院・PAC 系統 v1.0</span>\r
    </div>\r
  </div>\r
  <div class="content">\r
\r
    <!-- ══ 成員管理頁 ══ -->\r
    <div id="pg-members">\r
      <div class="page-header">\r
        <div>\r
          <div class="page-title">👥 成員管理</div>\r
          <div class="page-subtitle">管理所有 PAC 系統使用者帳號</div>\r
        </div>\r
        <div style="display:flex;gap:8px">\r
          <button class="btn btn-secondary" onclick="openModal('modal-import')">📥 從杏翔 HIS 匯入</button>\r
          <button class="btn btn-primary" onclick="openModal('modal-add')">＋ 新增成員</button>\r
        </div>\r
      </div>\r
\r
      <!-- 統計 -->\r
      <div class="stats-row">\r
        <div class="stat-card s-blue"><div class="stat-label">總帳號數</div><div class="stat-value">24</div><div class="stat-sub">員郭醫院</div></div>\r
        <div class="stat-card s-green"><div class="stat-label">啟用中</div><div class="stat-value">21</div><div class="stat-sub">正常使用</div></div>\r
        <div class="stat-card s-amber"><div class="stat-label">停用</div><div class="stat-value">2</div><div class="stat-sub">已離職/暫停</div></div>\r
        <div class="stat-card s-red"><div class="stat-label">30天未登入</div><div class="stat-value">1</div><div class="stat-sub">待確認</div></div>\r
      </div>\r
\r
      <!-- Toolbar -->\r
      <div class="toolbar">\r
        <div class="toolbar-left">\r
          <div class="search-wrap">\r
            <span class="search-icon">🔍</span>\r
            <input type="text" placeholder="搜尋姓名、信箱、員工編號">\r
          </div>\r
          <select class="filter">\r
            <option>全部角色</option>\r
            <option>個管師</option>\r
            <option>復健主管</option>\r
            <option>復健治療師</option>\r
            <option>護理師</option>\r
            <option>醫師</option>\r
            <option>藥師</option>\r
            <option>營養師</option>\r
            <option>行政</option>\r
          </select>\r
          <select class="filter">\r
            <option>全部狀態</option>\r
            <option>啟用中</option>\r
            <option>已停用</option>\r
          </select>\r
        </div>\r
        <span style="font-size:12px;color:var(--gray-400)">共 24 位成員</span>\r
      </div>\r
\r
      <!-- 成員列表 -->\r
      <div class="table-card">\r
        <table class="data-table">\r
          <thead>\r
            <tr>\r
              <th>成員</th>\r
              <th>角色</th>\r
              <th>所屬單位</th>\r
              <th>帳號狀態</th>\r
              <th>最後登入</th>\r
              <th>操作</th>\r
            </tr>\r
          </thead>\r
          <tbody id="member-tbody">\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
\r
    <!-- ══ 角色權限矩陣頁 ══ -->\r
    <div id="pg-permissions" class="hidden">\r
      <div class="page-header">\r
        <div>\r
          <div class="page-title">🔑 角色權限矩陣</div>\r
          <div class="page-subtitle">設定各角色可存取的功能模組・勾選代表「可存取」</div>\r
        </div>\r
        <div style="display:flex;gap:8px">\r
          <button class="btn btn-secondary btn-sm" onclick="resetToDefault()">↺ 還原預設值</button>\r
          <button class="btn btn-primary btn-sm" onclick="alert('權限設定已儲存')">儲存設定</button>\r
        </div>\r
      </div>\r
\r
      <div class="info-note blue">ℹ️ 此為模組存取等級設定。各模組內的操作權限（填寫/審核/唯讀等）由各模組自身邏輯控制，將於開發階段細化。</div>\r
\r
      <div class="table-card">\r
        <div class="perm-container">\r
          <table class="perm-table" id="perm-table">\r
            <!-- 由 JS 渲染 -->\r
          </table>\r
        </div>\r
        <div style="padding:12px 16px;border-top:1px solid var(--gray-100)">\r
          <div class="perm-legend">\r
            <div class="perm-legend-item"><input type="checkbox" checked disabled style="accent-color:var(--blue)"> 可存取此模組</div>\r
            <div class="perm-legend-item"><input type="checkbox" disabled> 無存取權限</div>\r
            <span style="color:var(--gray-300)">｜</span>\r
            <span style="color:var(--gray-400)">變更後請點「儲存設定」生效</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </div>\r
</div>\r
\r
<!-- ══ MODALS ══ -->\r
\r
<!-- 新增成員 -->\r
<div id="modal-add" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title">＋ 新增成員</div>\r
      <button class="modal-close" onclick="closeModal('modal-add')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="form-grid">\r
        <div class="form-group">\r
          <label>姓名 <span style="color:var(--red)">*</span></label>\r
          <input class="form-control" placeholder="e.g. 林美惠">\r
        </div>\r
        <div class="form-group">\r
          <label>員工編號</label>\r
          <input class="form-control" placeholder="e.g. E20240012">\r
        </div>\r
        <div class="form-group">\r
          <label>電子郵件 <span style="color:var(--red)">*</span></label>\r
          <input class="form-control" type="email" placeholder="e.g. lin@yuankuo.com.tw">\r
        </div>\r
        <div class="form-group">\r
          <label>電話號碼</label>\r
          <input class="form-control" placeholder="e.g. 0912-345-678">\r
        </div>\r
        <div class="form-group">\r
          <label>所屬單位 <span style="color:var(--red)">*</span></label>\r
          <select class="form-control">\r
            <option value="">請選擇</option>\r
            <option>復健科</option><option>護理部</option><option>醫師</option>\r
            <option>藥劑科</option><option>營養科</option><option>行政部</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>系統角色 <span style="color:var(--red)">*</span></label>\r
          <select class="form-control">\r
            <option value="">請選擇</option>\r
            <option>個管師</option><option>復健主管</option><option>PT（物理治療師）</option>\r
            <option>OT（職能治療師）</option><option>ST（語言治療師）</option>\r
            <option>護理師</option><option>醫師</option><option>藥師</option>\r
            <option>營養師</option><option>行政</option>\r
          </select>\r
        </div>\r
        <div class="form-group full">\r
          <label>初始密碼設定</label>\r
          <select class="form-control">\r
            <option>系統自動產生（發送至電子郵件）</option>\r
            <option>手動設定</option>\r
          </select>\r
        </div>\r
      </div>\r
      <div class="info-note amber" style="margin-top:10px">⚠️ 建立帳號後將寄送啟用通知至填寫的電子郵件，請確認信箱無誤。</div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-add')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-add');alert('帳號已建立，啟用通知已發送')">建立帳號</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 從杏翔 HIS 匯入 -->\r
<div id="modal-import" class="modal-overlay hidden">\r
  <div class="modal modal-lg">\r
    <div class="modal-header">\r
      <div class="modal-title">📥 從杏翔 HIS 匯入成員</div>\r
      <button class="modal-close" onclick="closeModal('modal-import')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note blue">連接至杏翔護理資訊系統，搜尋院內人員並直接匯入建立帳號。</div>\r
      <div class="modal-tabs">\r
        <div class="modal-tab active" onclick="switchImportTab(this,'search')">🔍 搜尋人員</div>\r
        <div class="modal-tab" onclick="switchImportTab(this,'batch')">📂 批次匯入</div>\r
      </div>\r
      <!-- 搜尋 -->\r
      <div id="import-tab-search">\r
        <div style="display:flex;gap:8px;margin-bottom:14px">\r
          <input class="form-control" style="flex:1" placeholder="輸入姓名或員工編號搜尋杏翔系統" id="his-search-input">\r
          <button class="btn btn-primary" onclick="showHisResults()">搜尋</button>\r
        </div>\r
        <div id="his-result-area">\r
          <div style="padding:24px;text-align:center;color:var(--gray-400);font-size:12px">輸入關鍵字搜尋院內人員</div>\r
        </div>\r
      </div>\r
      <!-- 批次 -->\r
      <div id="import-tab-batch" class="hidden">\r
        <div class="his-box" onclick="alert('模擬連接杏翔 HIS 系統中...\\n\\n實際開發時將呼叫 HIS API 取得人員清單')">\r
          <div class="his-box-icon">🏥</div>\r
          <div class="his-box-text">連接杏翔 HIS 系統</div>\r
          <div class="his-box-sub">點擊同步取得復健科、護理部等相關部門人員清單</div>\r
        </div>\r
        <div class="info-note amber">⚠️ 批次匯入將以 HIS 現有資料為準，匯入後仍可手動調整角色與單位。</div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-import')">取消</button>\r
      <button class="btn btn-primary" id="import-confirm-btn" onclick="closeModal('modal-import');alert('已匯入選取人員，請確認角色設定')">匯入選取（0）</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 編輯成員 -->\r
<div id="modal-edit" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title" id="modal-edit-title">✏️ 編輯成員</div>\r
      <button class="modal-close" onclick="closeModal('modal-edit')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="form-grid">\r
        <div class="form-group">\r
          <label>姓名</label>\r
          <input class="form-control" id="edit-name">\r
        </div>\r
        <div class="form-group">\r
          <label>電子郵件</label>\r
          <input class="form-control" id="edit-email" type="email">\r
        </div>\r
        <div class="form-group">\r
          <label>所屬單位</label>\r
          <select class="form-control" id="edit-dept">\r
            <option>復健科</option><option>護理部</option><option>醫師</option>\r
            <option>藥劑科</option><option>營養科</option><option>行政部</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>系統角色</label>\r
          <select class="form-control" id="edit-role">\r
            <option>個管師</option><option>復健主管</option><option>PT（物理治療師）</option>\r
            <option>OT（職能治療師）</option><option>ST（語言治療師）</option>\r
            <option>護理師</option><option>醫師</option><option>藥師</option>\r
            <option>營養師</option><option>行政</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>帳號狀態</label>\r
          <select class="form-control" id="edit-status">\r
            <option value="active">啟用中</option>\r
            <option value="disabled">已停用</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>密碼重設</label>\r
          <button class="btn btn-amber btn-sm" onclick="alert('密碼重設信已發送至使用者信箱')">📧 發送重設信</button>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-danger btn-sm" onclick="closeModal('modal-edit');alert('帳號已停用')">停用帳號</button>\r
      <button class="btn btn-secondary" onclick="closeModal('modal-edit')">取消</button>\r
      <button class="btn btn-primary" onclick="closeModal('modal-edit');alert('成員資料已更新')">儲存</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- 確認停用 -->\r
<div id="modal-disable" class="modal-overlay hidden">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div class="modal-title">⚠️ 確認停用帳號</div>\r
      <button class="modal-close" onclick="closeModal('modal-disable')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="info-note red">停用後該帳號將無法登入系統，但資料與紀錄將完整保留。如需恢復可重新啟用。</div>\r
      <div style="font-size:13px;color:var(--gray-700)">確定停用 <strong id="disable-name"></strong> 的帳號嗎？</div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModal('modal-disable')">取消</button>\r
      <button class="btn btn-danger" onclick="closeModal('modal-disable');alert('帳號已停用')">確認停用</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<script>\r
// ── 成員資料 ──\r
const MEMBERS = [\r
  {name:'林美惠', ch:'林', email:'lin.meihui@yuankuo.com.tw', av:'av-mgr', role:'個管師', dept:'復健科', status:'active', lastLogin:'2026/06/25 08:34', loginSub:'Chrome・Mac'},\r
  {name:'王大明', ch:'王', email:'wang.daming@yuankuo.com.tw', av:'av-sup', role:'復健主管', dept:'復健科', status:'active', lastLogin:'2026/06/25 07:50', loginSub:'Chrome・Windows'},\r
  {name:'黃志豪', ch:'黃', email:'huang.zhihao@yuankuo.com.tw', av:'av-pt', role:'PT', dept:'復健科', status:'active', lastLogin:'2026/06/24 16:20', loginSub:'Safari・Mac'},\r
  {name:'李佳穎', ch:'李', email:'lee.jiaying@yuankuo.com.tw', av:'av-ot', role:'OT', dept:'復健科', status:'active', lastLogin:'2026/06/24 15:45', loginSub:'Chrome・Windows'},\r
  {name:'吳怡君', ch:'吳', email:'wu.yijun@yuankuo.com.tw', av:'av-st', role:'ST', dept:'復健科', status:'active', lastLogin:'2026/06/24 14:10', loginSub:'Chrome・Windows'},\r
  {name:'陳建宏', ch:'陳', email:'chen.jianhong@yuankuo.com.tw', av:'av-pt', role:'PT', dept:'復健科', status:'active', lastLogin:'2026/06/23 17:30', loginSub:'Chrome・Windows'},\r
  {name:'張雅婷', ch:'張', email:'chang.yating@yuankuo.com.tw', av:'av-ot', role:'OT', dept:'復健科', status:'active', lastLogin:'2026/06/22 09:15', loginSub:'Safari・iPhone'},\r
  {name:'陳玉玲', ch:'陳', email:'chen.yuling@yuankuo.com.tw', av:'av-nur', role:'護理師', dept:'護理部', status:'active', lastLogin:'2026/06/25 07:00', loginSub:'Chrome・Windows'},\r
  {name:'林淑芬', ch:'林', email:'lin.shufen@yuankuo.com.tw', av:'av-nur', role:'護理師', dept:'護理部', status:'active', lastLogin:'2026/06/24 22:10', loginSub:'Chrome・Windows'},\r
  {name:'張宗達', ch:'張', email:'chang.zongda@yuankuo.com.tw', av:'av-doc', role:'醫師', dept:'復健科', status:'active', lastLogin:'2026/06/24 12:00', loginSub:'Chrome・Mac'},\r
  {name:'林建志', ch:'林', email:'lin.jianzhi@yuankuo.com.tw', av:'av-pha', role:'藥師', dept:'藥劑科', status:'active', lastLogin:'2026/06/20 09:30', loginSub:'Chrome・Windows'},\r
  {name:'周雅玲', ch:'周', email:'chou.yaling@yuankuo.com.tw', av:'av-nut', role:'營養師', dept:'營養科', status:'active', lastLogin:'2026/06/18 11:00', loginSub:'Chrome・Mac'},\r
  {name:'蔡書明', ch:'蔡', email:'tsai.shuming@yuankuo.com.tw', av:'av-adm', role:'行政', dept:'行政部', status:'active', lastLogin:'2026/06/25 08:00', loginSub:'Chrome・Windows'},\r
  {name:'黃怡真', ch:'黃', email:'huang.yizhen@yuankuo.com.tw', av:'av-adm', role:'行政', dept:'行政部', status:'active', lastLogin:'2026/06/24 17:50', loginSub:'Chrome・Windows'},\r
  {name:'李家豪', ch:'李', email:'lee.jiahao@yuankuo.com.tw', av:'av-pt', role:'PT', dept:'復健科', status:'disabled', lastLogin:'2026/04/10 09:00', loginSub:'已離職'},\r
  {name:'王小敏', ch:'王', email:'wang.xiaomin@yuankuo.com.tw', av:'av-nur', role:'護理師', dept:'護理部', status:'disabled', lastLogin:'2026/05/20 14:00', loginSub:'已停用'},\r
];\r
\r
const AV_STYLE = {\r
  'av-mgr':'background:var(--amber-light);color:var(--amber)',\r
  'av-sup':'background:var(--purple-light);color:var(--purple)',\r
  'av-pt':'background:var(--blue-light);color:var(--blue)',\r
  'av-ot':'background:#FCE7F3;color:#9D174D',\r
  'av-st':'background:var(--green-light);color:var(--green)',\r
  'av-nur':'background:var(--teal-light);color:var(--teal)',\r
  'av-doc':'background:#FEF3C7;color:#92400E',\r
  'av-pha':'background:var(--purple-light);color:var(--purple)',\r
  'av-nut':'background:var(--green-light);color:var(--green)',\r
  'av-adm':'background:var(--gray-100);color:var(--gray-600)',\r
};\r
const ROLE_BADGE = {\r
  '個管師':'background:#FEF3C7;color:#92400E',\r
  '復健主管':'background:var(--purple-light);color:var(--purple)',\r
  'PT':'background:var(--blue-light);color:var(--blue)',\r
  'OT':'background:#FCE7F3;color:#9D174D',\r
  'ST':'background:var(--green-light);color:var(--green)',\r
  '護理師':'background:var(--teal-light);color:var(--teal)',\r
  '醫師':'background:#FEF3C7;color:#78350F',\r
  '藥師':'background:var(--purple-light);color:var(--purple)',\r
  '營養師':'background:var(--green-light);color:var(--green)',\r
  '行政':'background:var(--gray-100);color:var(--gray-600)',\r
};\r
\r
function renderMembers() {\r
  const tbody = document.getElementById('member-tbody');\r
  tbody.innerHTML = MEMBERS.map((m,i) => {\r
    const st = m.status === 'active'\r
      ? \`<span class="status-dot"><span class="dot dot-green"></span> 啟用中</span>\`\r
      : \`<span class="status-dot"><span class="dot dot-gray"></span> <span style="color:var(--gray-400)">已停用</span></span>\`;\r
    const rowStyle = m.status === 'disabled' ? 'opacity:.55' : '';\r
    return \`<tr style="\${rowStyle}">\r
      <td>\r
        <div class="member-cell">\r
          <div class="member-av" style="\${AV_STYLE[m.av]||''}">\${m.ch}</div>\r
          <div>\r
            <div class="member-name">\${m.name}</div>\r
            <div class="member-email">\${m.email}</div>\r
          </div>\r
        </div>\r
      </td>\r
      <td><span class="role-tag" style="\${ROLE_BADGE[m.role]||''}">\${m.role}</span></td>\r
      <td style="font-size:12px;color:var(--gray-600)">\${m.dept}</td>\r
      <td>\${st}</td>\r
      <td><div class="last-login">\${m.lastLogin}</div><div class="last-login-sub">\${m.loginSub}</div></td>\r
      <td>\r
        <div class="action-btns">\r
          <button class="btn btn-ghost btn-xs" onclick="openEdit(\${i})">編輯</button>\r
          \${m.status==='active'?\`<button class="btn btn-danger btn-xs" onclick="confirmDisable('\${m.name}')">停用</button>\`:\`<button class="btn btn-secondary btn-xs" onclick="alert('帳號已重新啟用')">啟用</button>\`}\r
        </div>\r
      </td>\r
    </tr>\`;\r
  }).join('');\r
}\r
\r
function openEdit(i) {\r
  const m = MEMBERS[i];\r
  document.getElementById('modal-edit-title').textContent = \`✏️ 編輯成員：\${m.name}\`;\r
  document.getElementById('edit-name').value = m.name;\r
  document.getElementById('edit-email').value = m.email;\r
  document.getElementById('edit-status').value = m.status;\r
  openModal('modal-edit');\r
}\r
\r
function confirmDisable(name) {\r
  document.getElementById('disable-name').textContent = name;\r
  openModal('modal-disable');\r
}\r
\r
// ── 權限矩陣 ──\r
const MODULES = [\r
  {icon:'🏠', name:'個人儀表板'},\r
  {icon:'📋', name:'個案管理'},\r
  {icon:'🛏', name:'病床管理'},\r
  {icon:'📅', name:'班表總覽'},\r
  {icon:'🏡', name:'居家排班管理'},\r
  {icon:'📊', name:'評估量表'},\r
  {icon:'💪', name:'復健紀錄'},\r
  {icon:'📤', name:'指標匯出'},\r
  {icon:'👤', name:'個人資訊頁'},\r
];\r
\r
const ROLES_LIST = [\r
  {label:'個管師', av:'av-mgr', ch:'個'},\r
  {label:'復健主管', av:'av-sup', ch:'主'},\r
  {label:'PT', av:'av-pt', ch:'P'},\r
  {label:'OT', av:'av-ot', ch:'O'},\r
  {label:'ST', av:'av-st', ch:'S'},\r
  {label:'護理師', av:'av-nur', ch:'護'},\r
  {label:'醫師', av:'av-doc', ch:'醫'},\r
  {label:'藥師', av:'av-pha', ch:'藥'},\r
  {label:'營養師', av:'av-nut', ch:'營'},\r
  {label:'行政', av:'av-adm', ch:'行'},\r
];\r
\r
// 預設權限矩陣 [模組][角色]\r
const DEFAULT_PERMS = [\r
//     個管  主管  PT   OT   ST  護理  醫師  藥師  營養  行政\r
  [true, true, true, true, true, true, true, true, true, true],  // 儀表板\r
  [true, false,false,false,false,false,false,false,false,false], // 個案管理\r
  [true, false,false,false,false,true, false,false,false,false], // 病床管理\r
  [true, true, true, true, true, false,false,false,false,false], // 班表\r
  [true, true, true, true, true, false,false,false,false,false], // 居家排班\r
  [true, true, true, true, true, true, true, true, true, false], // 評估量表\r
  [true, true, true, true, true, false,false,false,false,false], // 復健紀錄\r
  [true, false,false,false,false,false,false,false,false,false], // 指標匯出\r
  [true, true, true, true, true, true, true, true, true, true], // 個人資訊\r
];\r
\r
let currentPerms = DEFAULT_PERMS.map(row=>[...row]);\r
\r
function renderPermMatrix() {\r
  const table = document.getElementById('perm-table');\r
  let html = '<thead><tr><th class="module-col">功能模組</th>';\r
  ROLES_LIST.forEach((r,ri) => {\r
    html += \`<th class="role-header"><div class="role-header-inner"><div class="role-av-sm" style="\${AV_STYLE[r.av]||''}">\${r.ch}</div>\${r.label}</div></th>\`;\r
  });\r
  html += '</tr></thead><tbody>';\r
  MODULES.forEach((m,mi) => {\r
    html += \`<tr><td class="module-cell"><span class="mod-icon">\${m.icon}</span>\${m.name}</td>\`;\r
    ROLES_LIST.forEach((r,ri) => {\r
      html += \`<td><input type="checkbox" class="perm-cb" \${currentPerms[mi][ri]?'checked':''} onchange="currentPerms[\${mi}][\${ri}]=this.checked"></td>\`;\r
    });\r
    html += '</tr>';\r
  });\r
  html += '</tbody>';\r
  table.innerHTML = html;\r
}\r
\r
function resetToDefault() {\r
  currentPerms = DEFAULT_PERMS.map(row=>[...row]);\r
  renderPermMatrix();\r
}\r
\r
// ── 頁面切換 ──\r
function showPage(page) {\r
  document.getElementById('pg-members').classList.toggle('hidden', page!=='members');\r
  document.getElementById('pg-permissions').classList.toggle('hidden', page!=='permissions');\r
  document.querySelectorAll('.nav-item').forEach(el=>el.classList.remove('active'));\r
  event.currentTarget.classList.add('active');\r
  const bc = {members:'後台設定管理 › 成員管理', permissions:'後台設定管理 › 角色權限矩陣'};\r
  document.getElementById('bc').textContent = bc[page];\r
  if(page==='permissions') renderPermMatrix();\r
}\r
\r
// ── HIS 搜尋示意 ──\r
const HIS_DATA = [\r
  {name:'陳志明', dept:'復健科', title:'物理治療師', emp:'E20240021'},\r
  {name:'謝佳慧', dept:'護理部', title:'護理師', emp:'E20240022'},\r
  {name:'劉建國', dept:'復健科', title:'職能治療師', emp:'E20240023'},\r
];\r
let selectedImport = new Set();\r
\r
function showHisResults() {\r
  const area = document.getElementById('his-result-area');\r
  let html = \`<div class="import-result"><div class="import-result-header">找到 \${HIS_DATA.length} 筆結果（尚未在 PAC 系統建立帳號）</div>\`;\r
  HIS_DATA.forEach((p,i) => {\r
    html += \`<div class="import-row">\r
      <input type="checkbox" class="import-check" onchange="toggleImport(\${i},this.checked)">\r
      <div style="flex:1"><div class="import-name">\${p.name}</div><div class="import-meta">\${p.dept}・\${p.title}・員工編號 \${p.emp}</div></div>\r
    </div>\`;\r
  });\r
  html += '</div>';\r
  area.innerHTML = html;\r
}\r
\r
function toggleImport(i, checked) {\r
  if(checked) selectedImport.add(i); else selectedImport.delete(i);\r
  document.getElementById('import-confirm-btn').textContent = \`匯入選取（\${selectedImport.size}）\`;\r
}\r
\r
function switchImportTab(el, tab) {\r
  document.querySelectorAll('.modal-tab').forEach(t=>t.classList.remove('active'));\r
  el.classList.add('active');\r
  document.getElementById('import-tab-search').classList.toggle('hidden', tab!=='search');\r
  document.getElementById('import-tab-batch').classList.toggle('hidden', tab!=='batch');\r
}\r
\r
// ── Modal helpers ──\r
function openModal(id){document.getElementById(id).classList.remove('hidden')}\r
function closeModal(id){document.getElementById(id).classList.add('hidden')}\r
document.querySelectorAll('.modal-overlay').forEach(o=>o.addEventListener('click',function(e){if(e.target===this)this.classList.add('hidden')}));\r
\r
// Init\r
renderMembers();\r
<\/script>\r
</body>\r
</html>`,pd=[{id:"personal-dashboard",file:"personal-dashboard.html",label:"個人儀表板",description:"Role-based personal dashboard with notifications and task summaries.",icon:"🏠",html:sg},{id:"case-management",file:"case-management.html",label:"個案管理",description:"PAC case list, case detail, intake review, and form fill workflows.",icon:"📋",html:dg},{id:"bed-management",file:"bed-management.html",label:"病床管理",description:"Ward and bed availability management views.",icon:"🛏",html:og},{id:"rehab-scheduling",file:"rehab-scheduling.html",label:"復健排班",description:"In-hospital rehabilitation scheduling and therapist assignment views.",icon:"📅",html:cg},{id:"home-care-scheduling",file:"home-care-scheduling.html",label:"居家排班管理",description:"Home PAC case publishing, therapist signup, scheduling, and bonus flows.",icon:"🏡",html:vg},{id:"assessment-forms",file:"assessment-forms.html",label:"評估量表填寫",description:"Assessment case selection, role-based forms, and submission states.",icon:"📊",html:pg},{id:"indicator-export",file:"indicator-export.html",label:"指標匯出",description:"PAC indicator tracking, validation, and export workflow.",icon:"📤",html:ug},{id:"user-profile",file:"user-profile.html",label:"個人資訊頁",description:"User profile, account security, notification preferences, and sessions.",icon:"👤",html:bg},{id:"admin-settings",file:"admin-settings.html",label:"後台設定管理",description:"Admin member management, HIS import, and role permission matrix.",icon:"⚙️",html:gg}];function Tp(z,B){return z.match(/<title>(.*?)<\/title>/is)?.[1]?.trim()||B}function fg(z){return{bytes:new Blob([z]).size,styles:(z.match(/<style\b/gi)||[]).length,scripts:(z.match(/<script\b/gi)||[]).length,functions:(z.match(/\bfunction\s+\w+/g)||[]).length,constants:(z.match(/\bconst\s+\w+/g)||[]).length}}const kr=[{code:"mgr",label:"個管師",name:"林美惠",ch:"林",av:"av-mgr",pages:["personal-dashboard","case-management","bed-management","rehab-scheduling","home-care-scheduling","assessment-forms","indicator-export","user-profile","admin-settings"]},{code:"sup",label:"復健主管",name:"王大明",ch:"王",av:"av-sup",pages:["personal-dashboard","rehab-scheduling","home-care-scheduling","assessment-forms","user-profile"]},{code:"pt",label:"PT (物理治療)",name:"黃志豪",ch:"黃",av:"av-pt",pages:["personal-dashboard","rehab-scheduling","home-care-scheduling","assessment-forms","user-profile"]},{code:"ot",label:"OT (職能治療)",name:"李佳穎",ch:"李",av:"av-ot",pages:["personal-dashboard","rehab-scheduling","home-care-scheduling","assessment-forms","user-profile"]},{code:"st",label:"ST (語言治療)",name:"吳怡君",ch:"吳",av:"av-st",pages:["personal-dashboard","rehab-scheduling","home-care-scheduling","assessment-forms","user-profile"]},{code:"nur",label:"護理師",name:"陳玉玲",ch:"陳",av:"av-nur",pages:["personal-dashboard","bed-management","assessment-forms","user-profile"]},{code:"doc",label:"醫師",name:"張宗達",ch:"張",av:"av-doc",pages:["personal-dashboard","assessment-forms","user-profile"]},{code:"pha",label:"藥師",name:"林建志",ch:"林",av:"av-pha",pages:["personal-dashboard","assessment-forms","user-profile"]},{code:"nut",label:"營養師",name:"周雅玲",ch:"周",av:"av-nut",pages:["personal-dashboard","assessment-forms","user-profile"]},{code:"adm",label:"行政",name:"蔡書明",ch:"蔡",av:"av-adm",pages:["personal-dashboard","user-profile"]},{code:"it",label:"IT（資訊人員）",name:"王志偉",ch:"資",av:"av-it",pages:["admin-settings"]}],Ap=ka.createContext(null);function mg({children:z}){const[B,_]=ka.useState("mgr"),[b,O]=ka.useState("personal-dashboard"),[j,an]=ka.useState(!1),gn=ka.useMemo(()=>{const T=kr.find(D=>D.code===B)||kr[0],k=pd.filter(D=>T.pages.includes(D.id));let V=k.find(D=>D.id===b);return!V&&k.length>0&&(V=k[0]),{currentRole:B,activeRole:T,roles:kr,activeId:V?.id||"",activePage:V,activeTitle:V?Tp(V.html,V.label):"",pages:k,allPages:pd,setActiveId:O,selectRole:D=>{_(D);const on=kr.find(Tn=>Tn.code===D)||kr[0],Nn=pd.filter(Tn=>on.pages.includes(Tn.id));Nn.length>0&&(on.pages.includes(b)||O(Nn[0].id))},showMap:j,toggleMap:()=>an(D=>!D)}},[B,b,j]);return N.jsx(Ap.Provider,{value:gn,children:z})}function zr(){const z=ka.useContext(Ap);if(!z)throw new Error("usePageContext must be used inside PageProvider");return z}function yg(){const{activeId:z,pages:B,setActiveId:_,showMap:b,toggleMap:O}=zr();return N.jsxs("aside",{className:"app-sidebar",children:[N.jsx("div",{className:"brand",children:N.jsx("div",{className:"brand-title",children:"PAC 系統"})}),N.jsx("nav",{className:"app-nav","aria-label":"PAC pages",children:B.map(j=>N.jsxs("button",{className:`nav-button ${z===j.id?"active":""}`,type:"button",onClick:()=>_(j.id),children:[N.jsx("span",{children:j.icon}),N.jsx("span",{children:j.label})]},j.id))}),N.jsx("button",{className:"map-toggle",type:"button",onClick:O,children:b?"隱藏拆解清單":"查看拆解清單"})]})}function xg({pages:z,activeId:B}){return N.jsx("section",{className:"decomposition-panel","aria-label":"HTML decomposition",children:z.map(_=>N.jsxs("article",{className:`page-card ${B===_.id?"active":""}`,children:[N.jsxs("div",{className:"page-card-title",children:[N.jsx("span",{children:_.icon}),N.jsx("strong",{children:_.title})]}),N.jsx("div",{className:"page-card-file",children:_.file}),N.jsx("div",{className:"page-card-desc",children:_.description}),N.jsxs("div",{className:"page-card-grid",children:[N.jsxs("span",{children:[Math.round(_.stats.bytes/1024)," KB"]}),N.jsxs("span",{children:[_.stats.styles," style"]}),N.jsxs("span",{children:[_.stats.scripts," script"]}),N.jsxs("span",{children:[_.stats.functions," functions"]})]})]},_.id))})}function hg(){const{activePage:z,activeTitle:B}=zr();return N.jsx("header",{className:"workspace-topbar",children:N.jsxs("div",{children:[N.jsx("div",{className:"eyebrow",children:z.file}),N.jsx("h1",{children:B})]})})}function wg(z){return ka.useMemo(()=>z.map(B=>({...B,title:Tp(B.html,B.label),stats:fg(B.html)})),[z])}function kg(z,B){return z==="rehab-scheduling"?B==="mgr"||B==="sup"?"manager":"therapist":z==="home-care-scheduling"?B==="mgr"?"case":B==="sup"?"manager":"therapist":B}function zg({page:z,title:B}){const{currentRole:_}=zr(),b=ka.useMemo(()=>{if(!z.html)return z.html;let O=z.html;if(z.id!=="admin-settings"){const gn=`
        <style>
          .sidebar { display: none !important; }
        </style>
      `;O.includes("<head>")?O=O.replace("<head>",`<head>${gn}`):O=gn+O}const j=kg(z.id,_),an=/let\s+currentRole\s*=\s*['"][^'"]+['"]\s*;?/g;return O=O.replace(an,`let currentRole = '${j}';`),O},[z.html,z.id,_]);return N.jsx("section",{className:"frame-wrap","aria-label":B,children:N.jsx("iframe",{className:"legacy-frame",title:B,srcDoc:b,sandbox:"allow-scripts allow-forms allow-modals allow-same-origin"})})}function Eg({page:z,title:B}){return N.jsx(zg,{page:z,title:B})}function Sg(){const{currentRole:z,activeRole:B,roles:_,selectRole:b}=zr(),[O,j]=ka.useState(!1),an=ka.useRef(null);ka.useEffect(()=>{function T(k){an.current&&!an.current.contains(k.target)&&j(!1)}return O&&document.addEventListener("mousedown",T),()=>{document.removeEventListener("mousedown",T)}},[O]);const gn=()=>j(T=>!T);return N.jsxs("div",{className:"role-switcher-container",ref:an,children:[N.jsxs("button",{className:`fab-role-button active-role-${z}`,onClick:gn,"aria-label":"切換角色",type:"button",children:[N.jsx("span",{className:`fab-avatar ${B.av}`,children:B.ch}),N.jsx("span",{className:"fab-label",children:B.label})]}),O&&N.jsxs("div",{className:"role-panel",children:[N.jsxs("div",{className:"role-panel-header",children:[N.jsx("h3",{children:"切換系統角色"}),N.jsx("p",{children:"模擬不同醫護人員的操作介面與權限"})]}),N.jsx("div",{className:"role-list",children:_.map(T=>{const k=T.code===z;return N.jsxs("button",{className:`role-item ${k?"active":""}`,onClick:()=>{b(T.code),j(!1)},type:"button",children:[N.jsx("div",{className:`role-item-avatar ${T.av}`,children:T.ch}),N.jsxs("div",{className:"role-item-info",children:[N.jsx("div",{className:"role-item-label",children:T.label}),N.jsx("div",{className:"role-item-name",children:T.name})]}),k&&N.jsx("span",{className:"active-check",children:"✓"})]},T.code)})})]})]})}function Tg(){const{activeId:z,activePage:B,activeTitle:_,pages:b,showMap:O}=zr(),j=wg(b);return N.jsxs("div",{className:"app-shell",children:[N.jsx(yg,{}),N.jsxs("main",{className:"workspace",children:[N.jsx(hg,{}),O&&N.jsx(xg,{pages:j,activeId:z}),B&&N.jsx(Eg,{page:B,title:_},B.id)]}),N.jsx(Sg,{})]})}function Ag(){return N.jsx(mg,{children:N.jsx(Tg,{})})}ig.createRoot(document.getElementById("root")).render(N.jsx(Ag,{}));

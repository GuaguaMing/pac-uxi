(function(){const O=document.createElement("link").relList;if(O&&O.supports&&O.supports("modulepreload"))return;for(const B of document.querySelectorAll('link[rel="modulepreload"]'))b(B);new MutationObserver(B=>{for(const R of B)if(R.type==="childList")for(const $ of R.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&b($)}).observe(document,{childList:!0,subtree:!0});function j(B){const R={};return B.integrity&&(R.integrity=B.integrity),B.referrerPolicy&&(R.referrerPolicy=B.referrerPolicy),B.crossOrigin==="use-credentials"?R.credentials="include":B.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function b(B){if(B.ep)return;B.ep=!0;const R=j(B);fetch(B.href,R)}})();var so={exports:{}},xl={};var mv;function Ib(){if(mv)return xl;mv=1;var z=Symbol.for("react.transitional.element"),O=Symbol.for("react.fragment");function j(b,B,R){var $=null;if(R!==void 0&&($=""+R),B.key!==void 0&&($=""+B.key),"key"in B){R={};for(var gn in B)gn!=="key"&&(R[gn]=B[gn])}else R=B;return B=R.ref,{$$typeof:z,type:b,key:$,ref:B!==void 0?B:null,props:R}}return xl.Fragment=O,xl.jsx=j,xl.jsxs=j,xl}var fv;function Pb(){return fv||(fv=1,so.exports=Ib()),so.exports}var q=Pb(),oo={exports:{}},H={};var yv;function Wb(){if(yv)return H;yv=1;var z=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),$=Symbol.for("react.context"),gn=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),rn=Symbol.iterator;function Ln(c){return c===null||typeof c!="object"?null:(c=rn&&c[rn]||c["@@iterator"],typeof c=="function"?c:null)}var Sn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_n=Object.assign,Ba={};function Jn(c,w,E){this.props=c,this.context=w,this.refs=Ba,this.updater=E||Sn}Jn.prototype.isReactComponent={},Jn.prototype.setState=function(c,w){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,w,"setState")},Jn.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Ja(){}Ja.prototype=Jn.prototype;function Nn(c,w,E){this.props=c,this.context=w,this.refs=Ba,this.updater=E||Sn}var da=Nn.prototype=new Ja;da.constructor=Nn,_n(da,Jn.prototype),da.isPureReactComponent=!0;var za=Array.isArray;function Un(){}var J={H:null,A:null,T:null,S:null},Fn=Object.prototype.hasOwnProperty;function Ta(c,w,E){var C=E.ref;return{$$typeof:z,type:c,key:w,ref:C!==void 0?C:null,props:E}}function Ve(c,w){return Ta(c.type,w,c.props)}function Ea(c){return typeof c=="object"&&c!==null&&c.$$typeof===z}function Vn(c){var w={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(E){return w[E]})}var ke=/\/+/g;function Da(c,w){return typeof c=="object"&&c!==null&&c.key!=null?Vn(""+c.key):w.toString(36)}function ha(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(Un,Un):(c.status="pending",c.then(function(w){c.status==="pending"&&(c.status="fulfilled",c.value=w)},function(w){c.status==="pending"&&(c.status="rejected",c.reason=w)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function y(c,w,E,C,U){var G=typeof c;(G==="undefined"||G==="boolean")&&(c=null);var an=!1;if(c===null)an=!0;else switch(G){case"bigint":case"string":case"number":an=!0;break;case"object":switch(c.$$typeof){case z:case O:an=!0;break;case Y:return an=c._init,y(an(c._payload),w,E,C,U)}}if(an)return U=U(c),an=C===""?"."+Da(c,0):C,za(U)?(E="",an!=null&&(E=an.replace(ke,"$&/")+"/"),y(U,w,E,"",function(At){return At})):U!=null&&(Ea(U)&&(U=Ve(U,E+(U.key==null||c&&c.key===U.key?"":(""+U.key).replace(ke,"$&/")+"/")+an)),w.push(U)),1;an=0;var Rn=C===""?".":C+":";if(za(c))for(var yn=0;yn<c.length;yn++)C=c[yn],G=Rn+Da(C,yn),an+=y(C,w,E,G,U);else if(yn=Ln(c),typeof yn=="function")for(c=yn.call(c),yn=0;!(C=c.next()).done;)C=C.value,G=Rn+Da(C,yn++),an+=y(C,w,E,G,U);else if(G==="object"){if(typeof c.then=="function")return y(ha(c),w,E,C,U);throw w=String(c),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return an}function T(c,w,E){if(c==null)return c;var C=[],U=0;return y(c,C,"","",function(G){return w.call(E,G,U++)}),C}function _(c){if(c._status===-1){var w=c._result;w=w(),w.then(function(E){(c._status===0||c._status===-1)&&(c._status=1,c._result=E)},function(E){(c._status===0||c._status===-1)&&(c._status=2,c._result=E)}),c._status===-1&&(c._status=0,c._result=w)}if(c._status===1)return c._result.default;throw c._result}var ln=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},cn={map:T,forEach:function(c,w,E){T(c,function(){w.apply(this,arguments)},E)},count:function(c){var w=0;return T(c,function(){w++}),w},toArray:function(c){return T(c,function(w){return w})||[]},only:function(c){if(!Ea(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return H.Activity=D,H.Children=cn,H.Component=Jn,H.Fragment=j,H.Profiler=B,H.PureComponent=Nn,H.StrictMode=b,H.Suspense=S,H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,H.__COMPILER_RUNTIME={__proto__:null,c:function(c){return J.H.useMemoCache(c)}},H.cache=function(c){return function(){return c.apply(null,arguments)}},H.cacheSignal=function(){return null},H.cloneElement=function(c,w,E){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var C=_n({},c.props),U=c.key;if(w!=null)for(G in w.key!==void 0&&(U=""+w.key),w)!Fn.call(w,G)||G==="key"||G==="__self"||G==="__source"||G==="ref"&&w.ref===void 0||(C[G]=w[G]);var G=arguments.length-2;if(G===1)C.children=E;else if(1<G){for(var an=Array(G),Rn=0;Rn<G;Rn++)an[Rn]=arguments[Rn+2];C.children=an}return Ta(c.type,U,C)},H.createContext=function(c){return c={$$typeof:$,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:R,_context:c},c},H.createElement=function(c,w,E){var C,U={},G=null;if(w!=null)for(C in w.key!==void 0&&(G=""+w.key),w)Fn.call(w,C)&&C!=="key"&&C!=="__self"&&C!=="__source"&&(U[C]=w[C]);var an=arguments.length-2;if(an===1)U.children=E;else if(1<an){for(var Rn=Array(an),yn=0;yn<an;yn++)Rn[yn]=arguments[yn+2];U.children=Rn}if(c&&c.defaultProps)for(C in an=c.defaultProps,an)U[C]===void 0&&(U[C]=an[C]);return Ta(c,G,U)},H.createRef=function(){return{current:null}},H.forwardRef=function(c){return{$$typeof:gn,render:c}},H.isValidElement=Ea,H.lazy=function(c){return{$$typeof:Y,_payload:{_status:-1,_result:c},_init:_}},H.memo=function(c,w){return{$$typeof:k,type:c,compare:w===void 0?null:w}},H.startTransition=function(c){var w=J.T,E={};J.T=E;try{var C=c(),U=J.S;U!==null&&U(E,C),typeof C=="object"&&C!==null&&typeof C.then=="function"&&C.then(Un,ln)}catch(G){ln(G)}finally{w!==null&&E.types!==null&&(w.types=E.types),J.T=w}},H.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},H.use=function(c){return J.H.use(c)},H.useActionState=function(c,w,E){return J.H.useActionState(c,w,E)},H.useCallback=function(c,w){return J.H.useCallback(c,w)},H.useContext=function(c){return J.H.useContext(c)},H.useDebugValue=function(){},H.useDeferredValue=function(c,w){return J.H.useDeferredValue(c,w)},H.useEffect=function(c,w){return J.H.useEffect(c,w)},H.useEffectEvent=function(c){return J.H.useEffectEvent(c)},H.useId=function(){return J.H.useId()},H.useImperativeHandle=function(c,w,E){return J.H.useImperativeHandle(c,w,E)},H.useInsertionEffect=function(c,w){return J.H.useInsertionEffect(c,w)},H.useLayoutEffect=function(c,w){return J.H.useLayoutEffect(c,w)},H.useMemo=function(c,w){return J.H.useMemo(c,w)},H.useOptimistic=function(c,w){return J.H.useOptimistic(c,w)},H.useReducer=function(c,w,E){return J.H.useReducer(c,w,E)},H.useRef=function(c){return J.H.useRef(c)},H.useState=function(c){return J.H.useState(c)},H.useSyncExternalStore=function(c,w,E){return J.H.useSyncExternalStore(c,w,E)},H.useTransition=function(){return J.H.useTransition()},H.version="19.2.7",H}var hv;function bo(){return hv||(hv=1,oo.exports=Wb()),oo.exports}var ya=bo(),ro={exports:{}},wl={},co={exports:{}},po={};var xv;function ng(){return xv||(xv=1,(function(z){function O(y,T){var _=y.length;y.push(T);n:for(;0<_;){var ln=_-1>>>1,cn=y[ln];if(0<B(cn,T))y[ln]=T,y[_]=cn,_=ln;else break n}}function j(y){return y.length===0?null:y[0]}function b(y){if(y.length===0)return null;var T=y[0],_=y.pop();if(_!==T){y[0]=_;n:for(var ln=0,cn=y.length,c=cn>>>1;ln<c;){var w=2*(ln+1)-1,E=y[w],C=w+1,U=y[C];if(0>B(E,_))C<cn&&0>B(U,E)?(y[ln]=U,y[C]=_,ln=C):(y[ln]=E,y[w]=_,ln=w);else if(C<cn&&0>B(U,_))y[ln]=U,y[C]=_,ln=C;else break n}}return T}function B(y,T){var _=y.sortIndex-T.sortIndex;return _!==0?_:y.id-T.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;z.unstable_now=function(){return R.now()}}else{var $=Date,gn=$.now();z.unstable_now=function(){return $.now()-gn}}var S=[],k=[],Y=1,D=null,rn=3,Ln=!1,Sn=!1,_n=!1,Ba=!1,Jn=typeof setTimeout=="function"?setTimeout:null,Ja=typeof clearTimeout=="function"?clearTimeout:null,Nn=typeof setImmediate<"u"?setImmediate:null;function da(y){for(var T=j(k);T!==null;){if(T.callback===null)b(k);else if(T.startTime<=y)b(k),T.sortIndex=T.expirationTime,O(S,T);else break;T=j(k)}}function za(y){if(_n=!1,da(y),!Sn)if(j(S)!==null)Sn=!0,Un||(Un=!0,Vn());else{var T=j(k);T!==null&&ha(za,T.startTime-y)}}var Un=!1,J=-1,Fn=5,Ta=-1;function Ve(){return Ba?!0:!(z.unstable_now()-Ta<Fn)}function Ea(){if(Ba=!1,Un){var y=z.unstable_now();Ta=y;var T=!0;try{n:{Sn=!1,_n&&(_n=!1,Ja(J),J=-1),Ln=!0;var _=rn;try{a:{for(da(y),D=j(S);D!==null&&!(D.expirationTime>y&&Ve());){var ln=D.callback;if(typeof ln=="function"){D.callback=null,rn=D.priorityLevel;var cn=ln(D.expirationTime<=y);if(y=z.unstable_now(),typeof cn=="function"){D.callback=cn,da(y),T=!0;break a}D===j(S)&&b(S),da(y)}else b(S);D=j(S)}if(D!==null)T=!0;else{var c=j(k);c!==null&&ha(za,c.startTime-y),T=!1}}break n}finally{D=null,rn=_,Ln=!1}T=void 0}}finally{T?Vn():Un=!1}}}var Vn;if(typeof Nn=="function")Vn=function(){Nn(Ea)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Da=ke.port2;ke.port1.onmessage=Ea,Vn=function(){Da.postMessage(null)}}else Vn=function(){Jn(Ea,0)};function ha(y,T){J=Jn(function(){y(z.unstable_now())},T)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(y){y.callback=null},z.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fn=0<y?Math.floor(1e3/y):5},z.unstable_getCurrentPriorityLevel=function(){return rn},z.unstable_next=function(y){switch(rn){case 1:case 2:case 3:var T=3;break;default:T=rn}var _=rn;rn=T;try{return y()}finally{rn=_}},z.unstable_requestPaint=function(){Ba=!0},z.unstable_runWithPriority=function(y,T){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var _=rn;rn=y;try{return T()}finally{rn=_}},z.unstable_scheduleCallback=function(y,T,_){var ln=z.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?ln+_:ln):_=ln,y){case 1:var cn=-1;break;case 2:cn=250;break;case 5:cn=1073741823;break;case 4:cn=1e4;break;default:cn=5e3}return cn=_+cn,y={id:Y++,callback:T,priorityLevel:y,startTime:_,expirationTime:cn,sortIndex:-1},_>ln?(y.sortIndex=_,O(k,y),j(S)===null&&y===j(k)&&(_n?(Ja(J),J=-1):_n=!0,ha(za,_-ln))):(y.sortIndex=cn,O(S,y),Sn||Ln||(Sn=!0,Un||(Un=!0,Vn()))),y},z.unstable_shouldYield=Ve,z.unstable_wrapCallback=function(y){var T=rn;return function(){var _=rn;rn=T;try{return y.apply(this,arguments)}finally{rn=_}}}})(po)),po}var wv;function ag(){return wv||(wv=1,co.exports=ng()),co.exports}var vo={exports:{}},jn={};var kv;function eg(){if(kv)return jn;kv=1;var z=bo();function O(S){var k="https://react.dev/errors/"+S;if(1<arguments.length){k+="?args[]="+encodeURIComponent(arguments[1]);for(var Y=2;Y<arguments.length;Y++)k+="&args[]="+encodeURIComponent(arguments[Y])}return"Minified React error #"+S+"; visit "+k+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(){}var b={d:{f:j,r:function(){throw Error(O(522))},D:j,C:j,L:j,m:j,X:j,S:j,M:j},p:0,findDOMNode:null},B=Symbol.for("react.portal");function R(S,k,Y){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:D==null?null:""+D,children:S,containerInfo:k,implementation:Y}}var $=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function gn(S,k){if(S==="font")return"";if(typeof k=="string")return k==="use-credentials"?k:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,jn.createPortal=function(S,k){var Y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!k||k.nodeType!==1&&k.nodeType!==9&&k.nodeType!==11)throw Error(O(299));return R(S,k,null,Y)},jn.flushSync=function(S){var k=$.T,Y=b.p;try{if($.T=null,b.p=2,S)return S()}finally{$.T=k,b.p=Y,b.d.f()}},jn.preconnect=function(S,k){typeof S=="string"&&(k?(k=k.crossOrigin,k=typeof k=="string"?k==="use-credentials"?k:"":void 0):k=null,b.d.C(S,k))},jn.prefetchDNS=function(S){typeof S=="string"&&b.d.D(S)},jn.preinit=function(S,k){if(typeof S=="string"&&k&&typeof k.as=="string"){var Y=k.as,D=gn(Y,k.crossOrigin),rn=typeof k.integrity=="string"?k.integrity:void 0,Ln=typeof k.fetchPriority=="string"?k.fetchPriority:void 0;Y==="style"?b.d.S(S,typeof k.precedence=="string"?k.precedence:void 0,{crossOrigin:D,integrity:rn,fetchPriority:Ln}):Y==="script"&&b.d.X(S,{crossOrigin:D,integrity:rn,fetchPriority:Ln,nonce:typeof k.nonce=="string"?k.nonce:void 0})}},jn.preinitModule=function(S,k){if(typeof S=="string")if(typeof k=="object"&&k!==null){if(k.as==null||k.as==="script"){var Y=gn(k.as,k.crossOrigin);b.d.M(S,{crossOrigin:Y,integrity:typeof k.integrity=="string"?k.integrity:void 0,nonce:typeof k.nonce=="string"?k.nonce:void 0})}}else k==null&&b.d.M(S)},jn.preload=function(S,k){if(typeof S=="string"&&typeof k=="object"&&k!==null&&typeof k.as=="string"){var Y=k.as,D=gn(Y,k.crossOrigin);b.d.L(S,Y,{crossOrigin:D,integrity:typeof k.integrity=="string"?k.integrity:void 0,nonce:typeof k.nonce=="string"?k.nonce:void 0,type:typeof k.type=="string"?k.type:void 0,fetchPriority:typeof k.fetchPriority=="string"?k.fetchPriority:void 0,referrerPolicy:typeof k.referrerPolicy=="string"?k.referrerPolicy:void 0,imageSrcSet:typeof k.imageSrcSet=="string"?k.imageSrcSet:void 0,imageSizes:typeof k.imageSizes=="string"?k.imageSizes:void 0,media:typeof k.media=="string"?k.media:void 0})}},jn.preloadModule=function(S,k){if(typeof S=="string")if(k){var Y=gn(k.as,k.crossOrigin);b.d.m(S,{as:typeof k.as=="string"&&k.as!=="script"?k.as:void 0,crossOrigin:Y,integrity:typeof k.integrity=="string"?k.integrity:void 0})}else b.d.m(S)},jn.requestFormReset=function(S){b.d.r(S)},jn.unstable_batchedUpdates=function(S,k){return S(k)},jn.useFormState=function(S,k,Y){return $.H.useFormState(S,k,Y)},jn.useFormStatus=function(){return $.H.useHostTransitionStatus()},jn.version="19.2.7",jn}var zv;function tg(){if(zv)return vo.exports;zv=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(O){console.error(O)}}return z(),vo.exports=eg(),vo.exports}var Tv;function lg(){if(Tv)return wl;Tv=1;var z=ag(),O=bo(),j=tg();function b(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)a+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function B(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function R(n){var a=n,e=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(e=a.return),n=a.return;while(n)}return a.tag===3?e:null}function $(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function gn(n){if(n.tag===31){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function S(n){if(R(n)!==n)throw Error(b(188))}function k(n){var a=n.alternate;if(!a){if(a=R(n),a===null)throw Error(b(188));return a!==n?null:n}for(var e=n,t=a;;){var l=e.return;if(l===null)break;var i=l.alternate;if(i===null){if(t=l.return,t!==null){e=t;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===e)return S(l),n;if(i===t)return S(l),a;i=i.sibling}throw Error(b(188))}if(e.return!==t.return)e=l,t=i;else{for(var s=!1,d=l.child;d;){if(d===e){s=!0,e=l,t=i;break}if(d===t){s=!0,t=l,e=i;break}d=d.sibling}if(!s){for(d=i.child;d;){if(d===e){s=!0,e=i,t=l;break}if(d===t){s=!0,t=i,e=l;break}d=d.sibling}if(!s)throw Error(b(189))}}if(e.alternate!==t)throw Error(b(190))}if(e.tag!==3)throw Error(b(188));return e.stateNode.current===e?n:a}function Y(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=Y(n),a!==null)return a;n=n.sibling}return null}var D=Object.assign,rn=Symbol.for("react.element"),Ln=Symbol.for("react.transitional.element"),Sn=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),Ba=Symbol.for("react.strict_mode"),Jn=Symbol.for("react.profiler"),Ja=Symbol.for("react.consumer"),Nn=Symbol.for("react.context"),da=Symbol.for("react.forward_ref"),za=Symbol.for("react.suspense"),Un=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),Ta=Symbol.for("react.activity"),Ve=Symbol.for("react.memo_cache_sentinel"),Ea=Symbol.iterator;function Vn(n){return n===null||typeof n!="object"?null:(n=Ea&&n[Ea]||n["@@iterator"],typeof n=="function"?n:null)}var ke=Symbol.for("react.client.reference");function Da(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ke?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case _n:return"Fragment";case Jn:return"Profiler";case Ba:return"StrictMode";case za:return"Suspense";case Un:return"SuspenseList";case Ta:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case Sn:return"Portal";case Nn:return n.displayName||"Context";case Ja:return(n._context.displayName||"Context")+".Consumer";case da:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J:return a=n.displayName||null,a!==null?a:Da(n.type)||"Memo";case Fn:a=n._payload,n=n._init;try{return Da(n(a))}catch{}}return null}var ha=Array.isArray,y=O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},ln=[],cn=-1;function c(n){return{current:n}}function w(n){0>cn||(n.current=ln[cn],ln[cn]=null,cn--)}function E(n,a){cn++,ln[cn]=n.current,n.current=a}var C=c(null),U=c(null),G=c(null),an=c(null);function Rn(n,a){switch(E(G,a),E(U,n),E(C,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?Hp(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=Hp(a),n=Up(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}w(C),E(C,n)}function yn(){w(C),w(U),w(G)}function At(n){n.memoizedState!==null&&E(an,n);var a=C.current,e=Up(a,n.type);a!==e&&(E(U,n),E(C,e))}function Tl(n){U.current===n&&(w(C),w(U)),an.current===n&&(w(an),ml._currentValue=_)}var Vi,go;function ze(n){if(Vi===void 0)try{throw Error()}catch(e){var a=e.stack.trim().match(/\n( *(at )?)/);Vi=a&&a[1]||"",go=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vi+n+go}var Yi=!1;function $i(n,a){if(!n||Yi)return"";Yi=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(a){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(m){var g=m}Reflect.construct(n,[],x)}else{try{x.call()}catch(m){g=m}n.call(x.prototype)}}else{try{throw Error()}catch(m){g=m}(x=n())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(m){if(m&&g&&typeof m.stack=="string")return[m.stack,g.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=t.DetermineComponentFrameRoot(),s=i[0],d=i[1];if(s&&d){var o=s.split(`
`),u=d.split(`
`);for(l=t=0;t<o.length&&!o[t].includes("DetermineComponentFrameRoot");)t++;for(;l<u.length&&!u[l].includes("DetermineComponentFrameRoot");)l++;if(t===o.length||l===u.length)for(t=o.length-1,l=u.length-1;1<=t&&0<=l&&o[t]!==u[l];)l--;for(;1<=t&&0<=l;t--,l--)if(o[t]!==u[l]){if(t!==1||l!==1)do if(t--,l--,0>l||o[t]!==u[l]){var f=`
`+o[t].replace(" at new "," at ");return n.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",n.displayName)),f}while(1<=t&&0<=l);break}}}finally{Yi=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?ze(e):""}function Cv(n,a){switch(n.tag){case 26:case 27:case 5:return ze(n.type);case 16:return ze("Lazy");case 13:return n.child!==a&&a!==null?ze("Suspense Fallback"):ze("Suspense");case 19:return ze("SuspenseList");case 0:case 15:return $i(n.type,!1);case 11:return $i(n.type.render,!1);case 1:return $i(n.type,!0);case 31:return ze("Activity");default:return""}}function mo(n){try{var a="",e=null;do a+=Cv(n,e),e=n,n=n.return;while(n);return a}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var Gi=Object.prototype.hasOwnProperty,Xi=z.unstable_scheduleCallback,Qi=z.unstable_cancelCallback,Mv=z.unstable_shouldYield,Bv=z.unstable_requestPaint,In=z.unstable_now,Dv=z.unstable_getCurrentPriorityLevel,fo=z.unstable_ImmediatePriority,yo=z.unstable_UserBlockingPriority,El=z.unstable_NormalPriority,Ov=z.unstable_LowPriority,ho=z.unstable_IdlePriority,qv=z.log,Lv=z.unstable_setDisableYieldValue,Ct=null,Pn=null;function Ia(n){if(typeof qv=="function"&&Lv(n),Pn&&typeof Pn.setStrictMode=="function")try{Pn.setStrictMode(Ct,n)}catch{}}var Wn=Math.clz32?Math.clz32:_v,Nv=Math.log,jv=Math.LN2;function _v(n){return n>>>=0,n===0?32:31-(Nv(n)/jv|0)|0}var Sl=256,Al=262144,Cl=4194304;function Te(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ml(n,a,e){var t=n.pendingLanes;if(t===0)return 0;var l=0,i=n.suspendedLanes,s=n.pingedLanes;n=n.warmLanes;var d=t&134217727;return d!==0?(t=d&~i,t!==0?l=Te(t):(s&=d,s!==0?l=Te(s):e||(e=d&~n,e!==0&&(l=Te(e))))):(d=t&~i,d!==0?l=Te(d):s!==0?l=Te(s):e||(e=t&~n,e!==0&&(l=Te(e)))),l===0?0:a!==0&&a!==l&&(a&i)===0&&(i=l&-l,e=a&-a,i>=e||i===32&&(e&4194048)!==0)?a:l}function Mt(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function Rv(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xo(){var n=Cl;return Cl<<=1,(Cl&62914560)===0&&(Cl=4194304),n}function Zi(n){for(var a=[],e=0;31>e;e++)a.push(n);return a}function Bt(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Hv(n,a,e,t,l,i){var s=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var d=n.entanglements,o=n.expirationTimes,u=n.hiddenUpdates;for(e=s&~e;0<e;){var f=31-Wn(e),x=1<<f;d[f]=0,o[f]=-1;var g=u[f];if(g!==null)for(u[f]=null,f=0;f<g.length;f++){var m=g[f];m!==null&&(m.lane&=-536870913)}e&=~x}t!==0&&wo(n,t,0),i!==0&&l===0&&n.tag!==0&&(n.suspendedLanes|=i&~(s&~a))}function wo(n,a,e){n.pendingLanes|=a,n.suspendedLanes&=~a;var t=31-Wn(a);n.entangledLanes|=a,n.entanglements[t]=n.entanglements[t]|1073741824|e&261930}function ko(n,a){var e=n.entangledLanes|=a;for(n=n.entanglements;e;){var t=31-Wn(e),l=1<<t;l&a|n[t]&a&&(n[t]|=a),e&=~l}}function zo(n,a){var e=a&-a;return e=(e&42)!==0?1:Ki(e),(e&(n.suspendedLanes|a))!==0?0:e}function Ki(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ji(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function To(){var n=T.p;return n!==0?n:(n=window.event,n===void 0?32:rv(n.type))}function Eo(n,a){var e=T.p;try{return T.p=n,a()}finally{T.p=e}}var Pa=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Pa,Yn="__reactProps$"+Pa,Ye="__reactContainer$"+Pa,Ii="__reactEvents$"+Pa,Uv="__reactListeners$"+Pa,Fv="__reactHandles$"+Pa,So="__reactResources$"+Pa,Dt="__reactMarker$"+Pa;function Pi(n){delete n[Mn],delete n[Yn],delete n[Ii],delete n[Uv],delete n[Fv]}function $e(n){var a=n[Mn];if(a)return a;for(var e=n.parentNode;e;){if(a=e[Ye]||e[Mn]){if(e=a.alternate,a.child!==null||e!==null&&e.child!==null)for(n=Qp(n);n!==null;){if(e=n[Mn])return e;n=Qp(n)}return a}n=e,e=n.parentNode}return null}function Ge(n){if(n=n[Mn]||n[Ye]){var a=n.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return n}return null}function Ot(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(b(33))}function Xe(n){var a=n[So];return a||(a=n[So]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function An(n){n[Dt]=!0}var Ao=new Set,Co={};function Ee(n,a){Qe(n,a),Qe(n+"Capture",a)}function Qe(n,a){for(Co[n]=a,n=0;n<a.length;n++)Ao.add(a[n])}var Vv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mo={},Bo={};function Yv(n){return Gi.call(Bo,n)?!0:Gi.call(Mo,n)?!1:Vv.test(n)?Bo[n]=!0:(Mo[n]=!0,!1)}function Bl(n,a,e){if(Yv(a))if(e===null)n.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var t=a.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+e)}}function Dl(n,a,e){if(e===null)n.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+e)}}function Oa(n,a,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(a,e,""+t)}}function oa(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Do(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function $v(n,a,e){var t=Object.getOwnPropertyDescriptor(n.constructor.prototype,a);if(!n.hasOwnProperty(a)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return l.call(this)},set:function(s){e=""+s,i.call(this,s)}}),Object.defineProperty(n,a,{enumerable:t.enumerable}),{getValue:function(){return e},setValue:function(s){e=""+s},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Wi(n){if(!n._valueTracker){var a=Do(n)?"checked":"value";n._valueTracker=$v(n,a,""+n[a])}}function Oo(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var e=a.getValue(),t="";return n&&(t=Do(n)?n.checked?"true":"false":n.value),n=t,n!==e?(a.setValue(n),!0):!1}function Ol(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Gv=/[\n"\\]/g;function ra(n){return n.replace(Gv,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function ns(n,a,e,t,l,i,s,d){n.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.type=s:n.removeAttribute("type"),a!=null?s==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+oa(a)):n.value!==""+oa(a)&&(n.value=""+oa(a)):s!=="submit"&&s!=="reset"||n.removeAttribute("value"),a!=null?as(n,s,oa(a)):e!=null?as(n,s,oa(e)):t!=null&&n.removeAttribute("value"),l==null&&i!=null&&(n.defaultChecked=!!i),l!=null&&(n.checked=l&&typeof l!="function"&&typeof l!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?n.name=""+oa(d):n.removeAttribute("name")}function qo(n,a,e,t,l,i,s,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.type=i),a!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){Wi(n);return}e=e!=null?""+oa(e):"",a=a!=null?""+oa(a):e,d||a===n.value||(n.value=a),n.defaultValue=a}t=t??l,t=typeof t!="function"&&typeof t!="symbol"&&!!t,n.checked=d?n.checked:!!t,n.defaultChecked=!!t,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(n.name=s),Wi(n)}function as(n,a,e){a==="number"&&Ol(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function Ze(n,a,e,t){if(n=n.options,a){a={};for(var l=0;l<e.length;l++)a["$"+e[l]]=!0;for(e=0;e<n.length;e++)l=a.hasOwnProperty("$"+n[e].value),n[e].selected!==l&&(n[e].selected=l),l&&t&&(n[e].defaultSelected=!0)}else{for(e=""+oa(e),a=null,l=0;l<n.length;l++){if(n[l].value===e){n[l].selected=!0,t&&(n[l].defaultSelected=!0);return}a!==null||n[l].disabled||(a=n[l])}a!==null&&(a.selected=!0)}}function Lo(n,a,e){if(a!=null&&(a=""+oa(a),a!==n.value&&(n.value=a),e==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=e!=null?""+oa(e):""}function No(n,a,e,t){if(a==null){if(t!=null){if(e!=null)throw Error(b(92));if(ha(t)){if(1<t.length)throw Error(b(93));t=t[0]}e=t}e==null&&(e=""),a=e}e=oa(a),n.defaultValue=e,t=n.textContent,t===e&&t!==""&&t!==null&&(n.value=t),Wi(n)}function Ke(n,a){if(a){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=a;return}}n.textContent=a}var Xv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jo(n,a,e){var t=a.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?t?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":t?n.setProperty(a,e):typeof e!="number"||e===0||Xv.has(a)?a==="float"?n.cssFloat=e:n[a]=(""+e).trim():n[a]=e+"px"}function _o(n,a,e){if(a!=null&&typeof a!="object")throw Error(b(62));if(n=n.style,e!=null){for(var t in e)!e.hasOwnProperty(t)||a!=null&&a.hasOwnProperty(t)||(t.indexOf("--")===0?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="");for(var l in a)t=a[l],a.hasOwnProperty(l)&&e[l]!==t&&jo(n,l,t)}else for(var i in a)a.hasOwnProperty(i)&&jo(n,i,a[i])}function es(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ql(n){return Zv.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function qa(){}var ts=null;function ls(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Je=null,Ie=null;function Ro(n){var a=Ge(n);if(a&&(n=a.stateNode)){var e=n[Yn]||null;n:switch(n=a.stateNode,a.type){case"input":if(ns(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),a=e.name,e.type==="radio"&&a!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+ra(""+a)+'"][type="radio"]'),a=0;a<e.length;a++){var t=e[a];if(t!==n&&t.form===n.form){var l=t[Yn]||null;if(!l)throw Error(b(90));ns(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(a=0;a<e.length;a++)t=e[a],t.form===n.form&&Oo(t)}break n;case"textarea":Lo(n,e.value,e.defaultValue);break n;case"select":a=e.value,a!=null&&Ze(n,!!e.multiple,a,!1)}}}var is=!1;function Ho(n,a,e){if(is)return n(a,e);is=!0;try{var t=n(a);return t}finally{if(is=!1,(Je!==null||Ie!==null)&&(xi(),Je&&(a=Je,n=Ie,Ie=Je=null,Ro(a),n)))for(a=0;a<n.length;a++)Ro(n[a])}}function qt(n,a){var e=n.stateNode;if(e===null)return null;var t=e[Yn]||null;if(t===null)return null;e=t[a];n:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(b(231,a,typeof e));return e}var La=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ss=!1;if(La)try{var Lt={};Object.defineProperty(Lt,"passive",{get:function(){ss=!0}}),window.addEventListener("test",Lt,Lt),window.removeEventListener("test",Lt,Lt)}catch{ss=!1}var Wa=null,ds=null,Ll=null;function Uo(){if(Ll)return Ll;var n,a=ds,e=a.length,t,l="value"in Wa?Wa.value:Wa.textContent,i=l.length;for(n=0;n<e&&a[n]===l[n];n++);var s=e-n;for(t=1;t<=s&&a[e-t]===l[i-t];t++);return Ll=l.slice(n,1<t?1-t:void 0)}function Nl(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function jl(){return!0}function Fo(){return!1}function $n(n){function a(e,t,l,i,s){this._reactName=e,this._targetInst=l,this.type=t,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var d in n)n.hasOwnProperty(d)&&(e=n[d],this[d]=e?e(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?jl:Fo,this.isPropagationStopped=Fo,this}return D(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),a}var Se={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=$n(Se),Nt=D({},Se,{view:0,detail:0}),Kv=$n(Nt),os,rs,jt,Rl=D({},Nt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==jt&&(jt&&n.type==="mousemove"?(os=n.screenX-jt.screenX,rs=n.screenY-jt.screenY):rs=os=0,jt=n),os)},movementY:function(n){return"movementY"in n?n.movementY:rs}}),Vo=$n(Rl),Jv=D({},Rl,{dataTransfer:0}),Iv=$n(Jv),Pv=D({},Nt,{relatedTarget:0}),cs=$n(Pv),Wv=D({},Se,{animationName:0,elapsedTime:0,pseudoElement:0}),nu=$n(Wv),au=D({},Se,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),eu=$n(au),tu=D({},Se,{data:0}),Yo=$n(tu),lu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},su={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function du(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=su[n])?!!a[n]:!1}function ps(){return du}var ou=D({},Nt,{key:function(n){if(n.key){var a=lu[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Nl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?iu[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(n){return n.type==="keypress"?Nl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Nl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ru=$n(ou),cu=D({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$o=$n(cu),pu=D({},Nt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),vu=$n(pu),uu=D({},Se,{propertyName:0,elapsedTime:0,pseudoElement:0}),bu=$n(uu),gu=D({},Rl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),mu=$n(gu),fu=D({},Se,{newState:0,oldState:0}),yu=$n(fu),hu=[9,13,27,32],vs=La&&"CompositionEvent"in window,_t=null;La&&"documentMode"in document&&(_t=document.documentMode);var xu=La&&"TextEvent"in window&&!_t,Go=La&&(!vs||_t&&8<_t&&11>=_t),Xo=" ",Qo=!1;function Zo(n,a){switch(n){case"keyup":return hu.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ko(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Pe=!1;function wu(n,a){switch(n){case"compositionend":return Ko(a);case"keypress":return a.which!==32?null:(Qo=!0,Xo);case"textInput":return n=a.data,n===Xo&&Qo?null:n;default:return null}}function ku(n,a){if(Pe)return n==="compositionend"||!vs&&Zo(n,a)?(n=Uo(),Ll=ds=Wa=null,Pe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Go&&a.locale!=="ko"?null:a.data;default:return null}}var zu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jo(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!zu[n.type]:a==="textarea"}function Io(n,a,e,t){Je?Ie?Ie.push(t):Ie=[t]:Je=t,a=Ai(a,"onChange"),0<a.length&&(e=new _l("onChange","change",null,e,t),n.push({event:e,listeners:a}))}var Rt=null,Ht=null;function Tu(n){qp(n,0)}function Hl(n){var a=Ot(n);if(Oo(a))return n}function Po(n,a){if(n==="change")return a}var Wo=!1;if(La){var us;if(La){var bs="oninput"in document;if(!bs){var nr=document.createElement("div");nr.setAttribute("oninput","return;"),bs=typeof nr.oninput=="function"}us=bs}else us=!1;Wo=us&&(!document.documentMode||9<document.documentMode)}function ar(){Rt&&(Rt.detachEvent("onpropertychange",er),Ht=Rt=null)}function er(n){if(n.propertyName==="value"&&Hl(Ht)){var a=[];Io(a,Ht,n,ls(n)),Ho(Tu,a)}}function Eu(n,a,e){n==="focusin"?(ar(),Rt=a,Ht=e,Rt.attachEvent("onpropertychange",er)):n==="focusout"&&ar()}function Su(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Hl(Ht)}function Au(n,a){if(n==="click")return Hl(a)}function Cu(n,a){if(n==="input"||n==="change")return Hl(a)}function Mu(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var na=typeof Object.is=="function"?Object.is:Mu;function Ut(n,a){if(na(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var e=Object.keys(n),t=Object.keys(a);if(e.length!==t.length)return!1;for(t=0;t<e.length;t++){var l=e[t];if(!Gi.call(a,l)||!na(n[l],a[l]))return!1}return!0}function tr(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function lr(n,a){var e=tr(n);n=0;for(var t;e;){if(e.nodeType===3){if(t=n+e.textContent.length,n<=a&&t>=a)return{node:e,offset:a-n};n=t}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=tr(e)}}function ir(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?ir(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function sr(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Ol(n.document);a instanceof n.HTMLIFrameElement;){try{var e=typeof a.contentWindow.location.href=="string"}catch{e=!1}if(e)n=a.contentWindow;else break;a=Ol(n.document)}return a}function gs(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var Bu=La&&"documentMode"in document&&11>=document.documentMode,We=null,ms=null,Ft=null,fs=!1;function dr(n,a,e){var t=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;fs||We==null||We!==Ol(t)||(t=We,"selectionStart"in t&&gs(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Ft&&Ut(Ft,t)||(Ft=t,t=Ai(ms,"onSelect"),0<t.length&&(a=new _l("onSelect","select",null,a,e),n.push({event:a,listeners:t}),a.target=We)))}function Ae(n,a){var e={};return e[n.toLowerCase()]=a.toLowerCase(),e["Webkit"+n]="webkit"+a,e["Moz"+n]="moz"+a,e}var nt={animationend:Ae("Animation","AnimationEnd"),animationiteration:Ae("Animation","AnimationIteration"),animationstart:Ae("Animation","AnimationStart"),transitionrun:Ae("Transition","TransitionRun"),transitionstart:Ae("Transition","TransitionStart"),transitioncancel:Ae("Transition","TransitionCancel"),transitionend:Ae("Transition","TransitionEnd")},ys={},or={};La&&(or=document.createElement("div").style,"AnimationEvent"in window||(delete nt.animationend.animation,delete nt.animationiteration.animation,delete nt.animationstart.animation),"TransitionEvent"in window||delete nt.transitionend.transition);function Ce(n){if(ys[n])return ys[n];if(!nt[n])return n;var a=nt[n],e;for(e in a)if(a.hasOwnProperty(e)&&e in or)return ys[n]=a[e];return n}var rr=Ce("animationend"),cr=Ce("animationiteration"),pr=Ce("animationstart"),Du=Ce("transitionrun"),Ou=Ce("transitionstart"),qu=Ce("transitioncancel"),vr=Ce("transitionend"),ur=new Map,hs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hs.push("scrollEnd");function xa(n,a){ur.set(n,a),Ee(a,[n])}var Ul=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},ca=[],at=0,xs=0;function Fl(){for(var n=at,a=xs=at=0;a<n;){var e=ca[a];ca[a++]=null;var t=ca[a];ca[a++]=null;var l=ca[a];ca[a++]=null;var i=ca[a];if(ca[a++]=null,t!==null&&l!==null){var s=t.pending;s===null?l.next=l:(l.next=s.next,s.next=l),t.pending=l}i!==0&&br(e,l,i)}}function Vl(n,a,e,t){ca[at++]=n,ca[at++]=a,ca[at++]=e,ca[at++]=t,xs|=t,n.lanes|=t,n=n.alternate,n!==null&&(n.lanes|=t)}function ws(n,a,e,t){return Vl(n,a,e,t),Yl(n)}function Me(n,a){return Vl(n,null,null,a),Yl(n)}function br(n,a,e){n.lanes|=e;var t=n.alternate;t!==null&&(t.lanes|=e);for(var l=!1,i=n.return;i!==null;)i.childLanes|=e,t=i.alternate,t!==null&&(t.childLanes|=e),i.tag===22&&(n=i.stateNode,n===null||n._visibility&1||(l=!0)),n=i,i=i.return;return n.tag===3?(i=n.stateNode,l&&a!==null&&(l=31-Wn(e),n=i.hiddenUpdates,t=n[l],t===null?n[l]=[a]:t.push(a),a.lane=e|536870912),i):null}function Yl(n){if(50<rl)throw rl=0,Bd=null,Error(b(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var et={};function Lu(n,a,e,t){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function aa(n,a,e,t){return new Lu(n,a,e,t)}function ks(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Na(n,a){var e=n.alternate;return e===null?(e=aa(n.tag,a,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=a,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&65011712,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function gr(n,a){n.flags&=65011714;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function $l(n,a,e,t,l,i){var s=0;if(t=n,typeof n=="function")ks(n)&&(s=1);else if(typeof n=="string")s=Hb(n,e,C.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Ta:return n=aa(31,e,a,l),n.elementType=Ta,n.lanes=i,n;case _n:return Be(e.children,l,i,a);case Ba:s=8,l|=24;break;case Jn:return n=aa(12,e,a,l|2),n.elementType=Jn,n.lanes=i,n;case za:return n=aa(13,e,a,l),n.elementType=za,n.lanes=i,n;case Un:return n=aa(19,e,a,l),n.elementType=Un,n.lanes=i,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Nn:s=10;break n;case Ja:s=9;break n;case da:s=11;break n;case J:s=14;break n;case Fn:s=16,t=null;break n}s=29,e=Error(b(130,n===null?"null":typeof n,"")),t=null}return a=aa(s,e,a,l),a.elementType=n,a.type=t,a.lanes=i,a}function Be(n,a,e,t){return n=aa(7,n,t,a),n.lanes=e,n}function zs(n,a,e){return n=aa(6,n,null,a),n.lanes=e,n}function mr(n){var a=aa(18,null,null,0);return a.stateNode=n,a}function Ts(n,a,e){return a=aa(4,n.children!==null?n.children:[],n.key,a),a.lanes=e,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var fr=new WeakMap;function pa(n,a){if(typeof n=="object"&&n!==null){var e=fr.get(n);return e!==void 0?e:(a={value:n,source:a,stack:mo(a)},fr.set(n,a),a)}return{value:n,source:a,stack:mo(a)}}var tt=[],lt=0,Gl=null,Vt=0,va=[],ua=0,ne=null,Sa=1,Aa="";function ja(n,a){tt[lt++]=Vt,tt[lt++]=Gl,Gl=n,Vt=a}function yr(n,a,e){va[ua++]=Sa,va[ua++]=Aa,va[ua++]=ne,ne=n;var t=Sa;n=Aa;var l=32-Wn(t)-1;t&=~(1<<l),e+=1;var i=32-Wn(a)+l;if(30<i){var s=l-l%5;i=(t&(1<<s)-1).toString(32),t>>=s,l-=s,Sa=1<<32-Wn(a)+l|e<<l|t,Aa=i+n}else Sa=1<<i|e<<l|t,Aa=n}function Es(n){n.return!==null&&(ja(n,1),yr(n,1,0))}function Ss(n){for(;n===Gl;)Gl=tt[--lt],tt[lt]=null,Vt=tt[--lt],tt[lt]=null;for(;n===ne;)ne=va[--ua],va[ua]=null,Aa=va[--ua],va[ua]=null,Sa=va[--ua],va[ua]=null}function hr(n,a){va[ua++]=Sa,va[ua++]=Aa,va[ua++]=ne,Sa=a.id,Aa=a.overflow,ne=n}var Bn=null,vn=null,I=!1,ae=null,ba=!1,As=Error(b(519));function ee(n){var a=Error(b(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yt(pa(a,n)),As}function xr(n){var a=n.stateNode,e=n.type,t=n.memoizedProps;switch(a[Mn]=n,a[Yn]=t,e){case"dialog":Q("cancel",a),Q("close",a);break;case"iframe":case"object":case"embed":Q("load",a);break;case"video":case"audio":for(e=0;e<pl.length;e++)Q(pl[e],a);break;case"source":Q("error",a);break;case"img":case"image":case"link":Q("error",a),Q("load",a);break;case"details":Q("toggle",a);break;case"input":Q("invalid",a),qo(a,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":Q("invalid",a);break;case"textarea":Q("invalid",a),No(a,t.value,t.defaultValue,t.children)}e=t.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||a.textContent===""+e||t.suppressHydrationWarning===!0||_p(a.textContent,e)?(t.popover!=null&&(Q("beforetoggle",a),Q("toggle",a)),t.onScroll!=null&&Q("scroll",a),t.onScrollEnd!=null&&Q("scrollend",a),t.onClick!=null&&(a.onclick=qa),a=!0):a=!1,a||ee(n,!0)}function wr(n){for(Bn=n.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:ba=!1;return;case 27:case 3:ba=!0;return;default:Bn=Bn.return}}function it(n){if(n!==Bn)return!1;if(!I)return wr(n),I=!0,!1;var a=n.tag,e;if((e=a!==3&&a!==27)&&((e=a===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||Gd(n.type,n.memoizedProps)),e=!e),e&&vn&&ee(n),wr(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(b(317));vn=Xp(n)}else if(a===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(b(317));vn=Xp(n)}else a===27?(a=vn,me(n.type)?(n=Jd,Jd=null,vn=n):vn=a):vn=Bn?ma(n.stateNode.nextSibling):null;return!0}function De(){vn=Bn=null,I=!1}function Cs(){var n=ae;return n!==null&&(Zn===null?Zn=n:Zn.push.apply(Zn,n),ae=null),n}function Yt(n){ae===null?ae=[n]:ae.push(n)}var Ms=c(null),Oe=null,_a=null;function te(n,a,e){E(Ms,a._currentValue),a._currentValue=e}function Ra(n){n._currentValue=Ms.current,w(Ms)}function Bs(n,a,e){for(;n!==null;){var t=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,t!==null&&(t.childLanes|=a)):t!==null&&(t.childLanes&a)!==a&&(t.childLanes|=a),n===e)break;n=n.return}}function Ds(n,a,e,t){var l=n.child;for(l!==null&&(l.return=n);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;n:for(;i!==null;){var d=i;i=l;for(var o=0;o<a.length;o++)if(d.context===a[o]){i.lanes|=e,d=i.alternate,d!==null&&(d.lanes|=e),Bs(i.return,e,n),t||(s=null);break n}i=d.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(b(341));s.lanes|=e,i=s.alternate,i!==null&&(i.lanes|=e),Bs(s,e,n),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===n){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function st(n,a,e,t){n=null;for(var l=a,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(b(387));if(s=s.memoizedProps,s!==null){var d=l.type;na(l.pendingProps.value,s.value)||(n!==null?n.push(d):n=[d])}}else if(l===an.current){if(s=l.alternate,s===null)throw Error(b(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(n!==null?n.push(ml):n=[ml])}l=l.return}n!==null&&Ds(a,n,e,t),a.flags|=262144}function Xl(n){for(n=n.firstContext;n!==null;){if(!na(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function qe(n){Oe=n,_a=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Dn(n){return kr(Oe,n)}function Ql(n,a){return Oe===null&&qe(n),kr(n,a)}function kr(n,a){var e=a._currentValue;if(a={context:a,memoizedValue:e,next:null},_a===null){if(n===null)throw Error(b(308));_a=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else _a=_a.next=a;return e}var Nu=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(e,t){n.push(t)}};this.abort=function(){a.aborted=!0,n.forEach(function(e){return e()})}},ju=z.unstable_scheduleCallback,_u=z.unstable_NormalPriority,wn={$$typeof:Nn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Os(){return{controller:new Nu,data:new Map,refCount:0}}function $t(n){n.refCount--,n.refCount===0&&ju(_u,function(){n.controller.abort()})}var Gt=null,qs=0,dt=0,ot=null;function Ru(n,a){if(Gt===null){var e=Gt=[];qs=0,dt=jd(),ot={status:"pending",value:void 0,then:function(t){e.push(t)}}}return qs++,a.then(zr,zr),a}function zr(){if(--qs===0&&Gt!==null){ot!==null&&(ot.status="fulfilled");var n=Gt;Gt=null,dt=0,ot=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function Hu(n,a){var e=[],t={status:"pending",value:null,reason:null,then:function(l){e.push(l)}};return n.then(function(){t.status="fulfilled",t.value=a;for(var l=0;l<e.length;l++)(0,e[l])(a)},function(l){for(t.status="rejected",t.reason=l,l=0;l<e.length;l++)(0,e[l])(void 0)}),t}var Tr=y.S;y.S=function(n,a){dp=In(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Ru(n,a),Tr!==null&&Tr(n,a)};var Le=c(null);function Ls(){var n=Le.current;return n!==null?n:pn.pooledCache}function Zl(n,a){a===null?E(Le,Le.current):E(Le,a.pool)}function Er(){var n=Ls();return n===null?null:{parent:wn._currentValue,pool:n}}var rt=Error(b(460)),Ns=Error(b(474)),Kl=Error(b(542)),Jl={then:function(){}};function Sr(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ar(n,a,e){switch(e=n[e],e===void 0?n.push(a):e!==a&&(a.then(qa,qa),a=e),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Mr(n),n;default:if(typeof a.status=="string")a.then(qa,qa);else{if(n=pn,n!==null&&100<n.shellSuspendCounter)throw Error(b(482));n=a,n.status="pending",n.then(function(t){if(a.status==="pending"){var l=a;l.status="fulfilled",l.value=t}},function(t){if(a.status==="pending"){var l=a;l.status="rejected",l.reason=t}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Mr(n),n}throw je=a,rt}}function Ne(n){try{var a=n._init;return a(n._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(je=e,rt):e}}var je=null;function Cr(){if(je===null)throw Error(b(459));var n=je;return je=null,n}function Mr(n){if(n===rt||n===Kl)throw Error(b(483))}var ct=null,Xt=0;function Il(n){var a=Xt;return Xt+=1,ct===null&&(ct=[]),Ar(ct,n,a)}function Qt(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function Pl(n,a){throw a.$$typeof===rn?Error(b(525)):(n=Object.prototype.toString.call(a),Error(b(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function Br(n){function a(p,r){if(n){var v=p.deletions;v===null?(p.deletions=[r],p.flags|=16):v.push(r)}}function e(p,r){if(!n)return null;for(;r!==null;)a(p,r),r=r.sibling;return null}function t(p){for(var r=new Map;p!==null;)p.key!==null?r.set(p.key,p):r.set(p.index,p),p=p.sibling;return r}function l(p,r){return p=Na(p,r),p.index=0,p.sibling=null,p}function i(p,r,v){return p.index=v,n?(v=p.alternate,v!==null?(v=v.index,v<r?(p.flags|=67108866,r):v):(p.flags|=67108866,r)):(p.flags|=1048576,r)}function s(p){return n&&p.alternate===null&&(p.flags|=67108866),p}function d(p,r,v,h){return r===null||r.tag!==6?(r=zs(v,p.mode,h),r.return=p,r):(r=l(r,v),r.return=p,r)}function o(p,r,v,h){var L=v.type;return L===_n?f(p,r,v.props.children,h,v.key):r!==null&&(r.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Fn&&Ne(L)===r.type)?(r=l(r,v.props),Qt(r,v),r.return=p,r):(r=$l(v.type,v.key,v.props,null,p.mode,h),Qt(r,v),r.return=p,r)}function u(p,r,v,h){return r===null||r.tag!==4||r.stateNode.containerInfo!==v.containerInfo||r.stateNode.implementation!==v.implementation?(r=Ts(v,p.mode,h),r.return=p,r):(r=l(r,v.children||[]),r.return=p,r)}function f(p,r,v,h,L){return r===null||r.tag!==7?(r=Be(v,p.mode,h,L),r.return=p,r):(r=l(r,v),r.return=p,r)}function x(p,r,v){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=zs(""+r,p.mode,v),r.return=p,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Ln:return v=$l(r.type,r.key,r.props,null,p.mode,v),Qt(v,r),v.return=p,v;case Sn:return r=Ts(r,p.mode,v),r.return=p,r;case Fn:return r=Ne(r),x(p,r,v)}if(ha(r)||Vn(r))return r=Be(r,p.mode,v,null),r.return=p,r;if(typeof r.then=="function")return x(p,Il(r),v);if(r.$$typeof===Nn)return x(p,Ql(p,r),v);Pl(p,r)}return null}function g(p,r,v,h){var L=r!==null?r.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return L!==null?null:d(p,r,""+v,h);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ln:return v.key===L?o(p,r,v,h):null;case Sn:return v.key===L?u(p,r,v,h):null;case Fn:return v=Ne(v),g(p,r,v,h)}if(ha(v)||Vn(v))return L!==null?null:f(p,r,v,h,null);if(typeof v.then=="function")return g(p,r,Il(v),h);if(v.$$typeof===Nn)return g(p,r,Ql(p,v),h);Pl(p,v)}return null}function m(p,r,v,h,L){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return p=p.get(v)||null,d(r,p,""+h,L);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ln:return p=p.get(h.key===null?v:h.key)||null,o(r,p,h,L);case Sn:return p=p.get(h.key===null?v:h.key)||null,u(r,p,h,L);case Fn:return h=Ne(h),m(p,r,v,h,L)}if(ha(h)||Vn(h))return p=p.get(v)||null,f(r,p,h,L,null);if(typeof h.then=="function")return m(p,r,v,Il(h),L);if(h.$$typeof===Nn)return m(p,r,v,Ql(r,h),L);Pl(r,h)}return null}function A(p,r,v,h){for(var L=null,P=null,M=r,V=r=0,K=null;M!==null&&V<v.length;V++){M.index>V?(K=M,M=null):K=M.sibling;var W=g(p,M,v[V],h);if(W===null){M===null&&(M=K);break}n&&M&&W.alternate===null&&a(p,M),r=i(W,r,V),P===null?L=W:P.sibling=W,P=W,M=K}if(V===v.length)return e(p,M),I&&ja(p,V),L;if(M===null){for(;V<v.length;V++)M=x(p,v[V],h),M!==null&&(r=i(M,r,V),P===null?L=M:P.sibling=M,P=M);return I&&ja(p,V),L}for(M=t(M);V<v.length;V++)K=m(M,p,V,v[V],h),K!==null&&(n&&K.alternate!==null&&M.delete(K.key===null?V:K.key),r=i(K,r,V),P===null?L=K:P.sibling=K,P=K);return n&&M.forEach(function(we){return a(p,we)}),I&&ja(p,V),L}function N(p,r,v,h){if(v==null)throw Error(b(151));for(var L=null,P=null,M=r,V=r=0,K=null,W=v.next();M!==null&&!W.done;V++,W=v.next()){M.index>V?(K=M,M=null):K=M.sibling;var we=g(p,M,W.value,h);if(we===null){M===null&&(M=K);break}n&&M&&we.alternate===null&&a(p,M),r=i(we,r,V),P===null?L=we:P.sibling=we,P=we,M=K}if(W.done)return e(p,M),I&&ja(p,V),L;if(M===null){for(;!W.done;V++,W=v.next())W=x(p,W.value,h),W!==null&&(r=i(W,r,V),P===null?L=W:P.sibling=W,P=W);return I&&ja(p,V),L}for(M=t(M);!W.done;V++,W=v.next())W=m(M,p,V,W.value,h),W!==null&&(n&&W.alternate!==null&&M.delete(W.key===null?V:W.key),r=i(W,r,V),P===null?L=W:P.sibling=W,P=W);return n&&M.forEach(function(Jb){return a(p,Jb)}),I&&ja(p,V),L}function on(p,r,v,h){if(typeof v=="object"&&v!==null&&v.type===_n&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ln:n:{for(var L=v.key;r!==null;){if(r.key===L){if(L=v.type,L===_n){if(r.tag===7){e(p,r.sibling),h=l(r,v.props.children),h.return=p,p=h;break n}}else if(r.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Fn&&Ne(L)===r.type){e(p,r.sibling),h=l(r,v.props),Qt(h,v),h.return=p,p=h;break n}e(p,r);break}else a(p,r);r=r.sibling}v.type===_n?(h=Be(v.props.children,p.mode,h,v.key),h.return=p,p=h):(h=$l(v.type,v.key,v.props,null,p.mode,h),Qt(h,v),h.return=p,p=h)}return s(p);case Sn:n:{for(L=v.key;r!==null;){if(r.key===L)if(r.tag===4&&r.stateNode.containerInfo===v.containerInfo&&r.stateNode.implementation===v.implementation){e(p,r.sibling),h=l(r,v.children||[]),h.return=p,p=h;break n}else{e(p,r);break}else a(p,r);r=r.sibling}h=Ts(v,p.mode,h),h.return=p,p=h}return s(p);case Fn:return v=Ne(v),on(p,r,v,h)}if(ha(v))return A(p,r,v,h);if(Vn(v)){if(L=Vn(v),typeof L!="function")throw Error(b(150));return v=L.call(v),N(p,r,v,h)}if(typeof v.then=="function")return on(p,r,Il(v),h);if(v.$$typeof===Nn)return on(p,r,Ql(p,v),h);Pl(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,r!==null&&r.tag===6?(e(p,r.sibling),h=l(r,v),h.return=p,p=h):(e(p,r),h=zs(v,p.mode,h),h.return=p,p=h),s(p)):e(p,r)}return function(p,r,v,h){try{Xt=0;var L=on(p,r,v,h);return ct=null,L}catch(M){if(M===rt||M===Kl)throw M;var P=aa(29,M,null,p.mode);return P.lanes=h,P.return=p,P}}}var _e=Br(!0),Dr=Br(!1),le=!1;function js(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _s(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ie(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function se(n,a,e){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,(nn&2)!==0){var l=t.pending;return l===null?a.next=a:(a.next=l.next,l.next=a),t.pending=a,a=Yl(n),br(n,null,e),a}return Vl(n,t,a,e),Yl(n)}function Zt(n,a,e){if(a=a.updateQueue,a!==null&&(a=a.shared,(e&4194048)!==0)){var t=a.lanes;t&=n.pendingLanes,e|=t,a.lanes=e,ko(n,e)}}function Rs(n,a){var e=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,e===t)){var l=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var s={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,e=e.next}while(e!==null);i===null?l=i=a:i=i.next=a}else l=i=a;e={baseState:t.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:t.shared,callbacks:t.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=a:n.next=a,e.lastBaseUpdate=a}var Hs=!1;function Kt(){if(Hs){var n=ot;if(n!==null)throw n}}function Jt(n,a,e,t){Hs=!1;var l=n.updateQueue;le=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var o=d,u=o.next;o.next=null,s===null?i=u:s.next=u,s=o;var f=n.alternate;f!==null&&(f=f.updateQueue,d=f.lastBaseUpdate,d!==s&&(d===null?f.firstBaseUpdate=u:d.next=u,f.lastBaseUpdate=o))}if(i!==null){var x=l.baseState;s=0,f=u=o=null,d=i;do{var g=d.lane&-536870913,m=g!==d.lane;if(m?(Z&g)===g:(t&g)===g){g!==0&&g===dt&&(Hs=!0),f!==null&&(f=f.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});n:{var A=n,N=d;g=a;var on=e;switch(N.tag){case 1:if(A=N.payload,typeof A=="function"){x=A.call(on,x,g);break n}x=A;break n;case 3:A.flags=A.flags&-65537|128;case 0:if(A=N.payload,g=typeof A=="function"?A.call(on,x,g):A,g==null)break n;x=D({},x,g);break n;case 2:le=!0}}g=d.callback,g!==null&&(n.flags|=64,m&&(n.flags|=8192),m=l.callbacks,m===null?l.callbacks=[g]:m.push(g))}else m={lane:g,tag:d.tag,payload:d.payload,callback:d.callback,next:null},f===null?(u=f=m,o=x):f=f.next=m,s|=g;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;m=d,d=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);f===null&&(o=x),l.baseState=o,l.firstBaseUpdate=u,l.lastBaseUpdate=f,i===null&&(l.shared.lanes=0),pe|=s,n.lanes=s,n.memoizedState=x}}function Or(n,a){if(typeof n!="function")throw Error(b(191,n));n.call(a)}function qr(n,a){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)Or(e[n],a)}var pt=c(null),Wl=c(0);function Lr(n,a){n=Qa,E(Wl,n),E(pt,a),Qa=n|a.baseLanes}function Us(){E(Wl,Qa),E(pt,pt.current)}function Fs(){Qa=Wl.current,w(pt),w(Wl)}var ea=c(null),ga=null;function de(n){var a=n.alternate;E(hn,hn.current&1),E(ea,n),ga===null&&(a===null||pt.current!==null||a.memoizedState!==null)&&(ga=n)}function Vs(n){E(hn,hn.current),E(ea,n),ga===null&&(ga=n)}function Nr(n){n.tag===22?(E(hn,hn.current),E(ea,n),ga===null&&(ga=n)):oe()}function oe(){E(hn,hn.current),E(ea,ea.current)}function ta(n){w(ea),ga===n&&(ga=null),w(hn)}var hn=c(0);function ni(n){for(var a=n;a!==null;){if(a.tag===13){var e=a.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Zd(e)||Kd(e)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ha=0,F=null,sn=null,kn=null,ai=!1,vt=!1,Re=!1,ei=0,It=0,ut=null,Uu=0;function mn(){throw Error(b(321))}function Ys(n,a){if(a===null)return!1;for(var e=0;e<a.length&&e<n.length;e++)if(!na(n[e],a[e]))return!1;return!0}function $s(n,a,e,t,l,i){return Ha=i,F=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,y.H=n===null||n.memoizedState===null?yc:id,Re=!1,i=e(t,l),Re=!1,vt&&(i=_r(a,e,t,l)),jr(n),i}function jr(n){y.H=nl;var a=sn!==null&&sn.next!==null;if(Ha=0,kn=sn=F=null,ai=!1,It=0,ut=null,a)throw Error(b(300));n===null||zn||(n=n.dependencies,n!==null&&Xl(n)&&(zn=!0))}function _r(n,a,e,t){F=n;var l=0;do{if(vt&&(ut=null),It=0,vt=!1,25<=l)throw Error(b(301));if(l+=1,kn=sn=null,n.updateQueue!=null){var i=n.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}y.H=hc,i=a(e,t)}while(vt);return i}function Fu(){var n=y.H,a=n.useState()[0];return a=typeof a.then=="function"?Pt(a):a,n=n.useState()[0],(sn!==null?sn.memoizedState:null)!==n&&(F.flags|=1024),a}function Gs(){var n=ei!==0;return ei=0,n}function Xs(n,a,e){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~e}function Qs(n){if(ai){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}ai=!1}Ha=0,kn=sn=F=null,vt=!1,It=ei=0,ut=null}function Hn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kn===null?F.memoizedState=kn=n:kn=kn.next=n,kn}function xn(){if(sn===null){var n=F.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var a=kn===null?F.memoizedState:kn.next;if(a!==null)kn=a,sn=n;else{if(n===null)throw F.alternate===null?Error(b(467)):Error(b(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},kn===null?F.memoizedState=kn=n:kn=kn.next=n}return kn}function ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pt(n){var a=It;return It+=1,ut===null&&(ut=[]),n=Ar(ut,n,a),a=F,(kn===null?a.memoizedState:kn.next)===null&&(a=a.alternate,y.H=a===null||a.memoizedState===null?yc:id),n}function li(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Pt(n);if(n.$$typeof===Nn)return Dn(n)}throw Error(b(438,String(n)))}function Zs(n){var a=null,e=F.updateQueue;if(e!==null&&(a=e.memoCache),a==null){var t=F.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(a={data:t.data.map(function(l){return l.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),e===null&&(e=ti(),F.updateQueue=e),e.memoCache=a,e=a.data[a.index],e===void 0)for(e=a.data[a.index]=Array(n),t=0;t<n;t++)e[t]=Ve;return a.index++,e}function Ua(n,a){return typeof a=="function"?a(n):a}function ii(n){var a=xn();return Ks(a,sn,n)}function Ks(n,a,e){var t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var l=n.baseQueue,i=t.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}a.baseQueue=l=i,t.pending=null}if(i=n.baseState,l===null)n.memoizedState=i;else{a=l.next;var d=s=null,o=null,u=a,f=!1;do{var x=u.lane&-536870913;if(x!==u.lane?(Z&x)===x:(Ha&x)===x){var g=u.revertLane;if(g===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),x===dt&&(f=!0);else if((Ha&g)===g){u=u.next,g===dt&&(f=!0);continue}else x={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},o===null?(d=o=x,s=i):o=o.next=x,F.lanes|=g,pe|=g;x=u.action,Re&&e(i,x),i=u.hasEagerState?u.eagerState:e(i,x)}else g={lane:x,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},o===null?(d=o=g,s=i):o=o.next=g,F.lanes|=x,pe|=x;u=u.next}while(u!==null&&u!==a);if(o===null?s=i:o.next=d,!na(i,n.memoizedState)&&(zn=!0,f&&(e=ot,e!==null)))throw e;n.memoizedState=i,n.baseState=s,n.baseQueue=o,t.lastRenderedState=i}return l===null&&(t.lanes=0),[n.memoizedState,t.dispatch]}function Js(n){var a=xn(),e=a.queue;if(e===null)throw Error(b(311));e.lastRenderedReducer=n;var t=e.dispatch,l=e.pending,i=a.memoizedState;if(l!==null){e.pending=null;var s=l=l.next;do i=n(i,s.action),s=s.next;while(s!==l);na(i,a.memoizedState)||(zn=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),e.lastRenderedState=i}return[i,t]}function Rr(n,a,e){var t=F,l=xn(),i=I;if(i){if(e===void 0)throw Error(b(407));e=e()}else e=a();var s=!na((sn||l).memoizedState,e);if(s&&(l.memoizedState=e,zn=!0),l=l.queue,Ws(Fr.bind(null,t,l,n),[n]),l.getSnapshot!==a||s||kn!==null&&kn.memoizedState.tag&1){if(t.flags|=2048,bt(9,{destroy:void 0},Ur.bind(null,t,l,e,a),null),pn===null)throw Error(b(349));i||(Ha&127)!==0||Hr(t,a,e)}return e}function Hr(n,a,e){n.flags|=16384,n={getSnapshot:a,value:e},a=F.updateQueue,a===null?(a=ti(),F.updateQueue=a,a.stores=[n]):(e=a.stores,e===null?a.stores=[n]:e.push(n))}function Ur(n,a,e,t){a.value=e,a.getSnapshot=t,Vr(a)&&Yr(n)}function Fr(n,a,e){return e(function(){Vr(a)&&Yr(n)})}function Vr(n){var a=n.getSnapshot;n=n.value;try{var e=a();return!na(n,e)}catch{return!0}}function Yr(n){var a=Me(n,2);a!==null&&Kn(a,n,2)}function Is(n){var a=Hn();if(typeof n=="function"){var e=n;if(n=e(),Re){Ia(!0);try{e()}finally{Ia(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:n},a}function $r(n,a,e,t){return n.baseState=e,Ks(n,sn,typeof t=="function"?t:Ua)}function Vu(n,a,e,t,l){if(oi(n))throw Error(b(485));if(n=a.action,n!==null){var i={payload:l,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};y.T!==null?e(!0):i.isTransition=!1,t(i),e=a.pending,e===null?(i.next=a.pending=i,Gr(a,i)):(i.next=e.next,a.pending=e.next=i)}}function Gr(n,a){var e=a.action,t=a.payload,l=n.state;if(a.isTransition){var i=y.T,s={};y.T=s;try{var d=e(l,t),o=y.S;o!==null&&o(s,d),Xr(n,a,d)}catch(u){Ps(n,a,u)}finally{i!==null&&s.types!==null&&(i.types=s.types),y.T=i}}else try{i=e(l,t),Xr(n,a,i)}catch(u){Ps(n,a,u)}}function Xr(n,a,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(t){Qr(n,a,t)},function(t){return Ps(n,a,t)}):Qr(n,a,e)}function Qr(n,a,e){a.status="fulfilled",a.value=e,Zr(a),n.state=e,a=n.pending,a!==null&&(e=a.next,e===a?n.pending=null:(e=e.next,a.next=e,Gr(n,e)))}function Ps(n,a,e){var t=n.pending;if(n.pending=null,t!==null){t=t.next;do a.status="rejected",a.reason=e,Zr(a),a=a.next;while(a!==t)}n.action=null}function Zr(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Kr(n,a){return a}function Jr(n,a){if(I){var e=pn.formState;if(e!==null){n:{var t=F;if(I){if(vn){a:{for(var l=vn,i=ba;l.nodeType!==8;){if(!i){l=null;break a}if(l=ma(l.nextSibling),l===null){l=null;break a}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){vn=ma(l.nextSibling),t=l.data==="F!";break n}}ee(t)}t=!1}t&&(a=e[0])}}return e=Hn(),e.memoizedState=e.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:a},e.queue=t,e=gc.bind(null,F,t),t.dispatch=e,t=Is(!1),i=ld.bind(null,F,!1,t.queue),t=Hn(),l={state:a,dispatch:null,action:n,pending:null},t.queue=l,e=Vu.bind(null,F,l,i,e),l.dispatch=e,t.memoizedState=n,[a,e,!1]}function Ir(n){var a=xn();return Pr(a,sn,n)}function Pr(n,a,e){if(a=Ks(n,a,Kr)[0],n=ii(Ua)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var t=Pt(a)}catch(s){throw s===rt?Kl:s}else t=a;a=xn();var l=a.queue,i=l.dispatch;return e!==a.memoizedState&&(F.flags|=2048,bt(9,{destroy:void 0},Yu.bind(null,l,e),null)),[t,i,n]}function Yu(n,a){n.action=a}function Wr(n){var a=xn(),e=sn;if(e!==null)return Pr(a,e,n);xn(),a=a.memoizedState,e=xn();var t=e.queue.dispatch;return e.memoizedState=n,[a,t,!1]}function bt(n,a,e,t){return n={tag:n,create:e,deps:t,inst:a,next:null},a=F.updateQueue,a===null&&(a=ti(),F.updateQueue=a),e=a.lastEffect,e===null?a.lastEffect=n.next=n:(t=e.next,e.next=n,n.next=t,a.lastEffect=n),n}function nc(){return xn().memoizedState}function si(n,a,e,t){var l=Hn();F.flags|=n,l.memoizedState=bt(1|a,{destroy:void 0},e,t===void 0?null:t)}function di(n,a,e,t){var l=xn();t=t===void 0?null:t;var i=l.memoizedState.inst;sn!==null&&t!==null&&Ys(t,sn.memoizedState.deps)?l.memoizedState=bt(a,i,e,t):(F.flags|=n,l.memoizedState=bt(1|a,i,e,t))}function ac(n,a){si(8390656,8,n,a)}function Ws(n,a){di(2048,8,n,a)}function $u(n){F.flags|=4;var a=F.updateQueue;if(a===null)a=ti(),F.updateQueue=a,a.events=[n];else{var e=a.events;e===null?a.events=[n]:e.push(n)}}function ec(n){var a=xn().memoizedState;return $u({ref:a,nextImpl:n}),function(){if((nn&2)!==0)throw Error(b(440));return a.impl.apply(void 0,arguments)}}function tc(n,a){return di(4,2,n,a)}function lc(n,a){return di(4,4,n,a)}function ic(n,a){if(typeof a=="function"){n=n();var e=a(n);return function(){typeof e=="function"?e():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function sc(n,a,e){e=e!=null?e.concat([n]):null,di(4,4,ic.bind(null,a,n),e)}function nd(){}function dc(n,a){var e=xn();a=a===void 0?null:a;var t=e.memoizedState;return a!==null&&Ys(a,t[1])?t[0]:(e.memoizedState=[n,a],n)}function oc(n,a){var e=xn();a=a===void 0?null:a;var t=e.memoizedState;if(a!==null&&Ys(a,t[1]))return t[0];if(t=n(),Re){Ia(!0);try{n()}finally{Ia(!1)}}return e.memoizedState=[t,a],t}function ad(n,a,e){return e===void 0||(Ha&1073741824)!==0&&(Z&261930)===0?n.memoizedState=a:(n.memoizedState=e,n=rp(),F.lanes|=n,pe|=n,e)}function rc(n,a,e,t){return na(e,a)?e:pt.current!==null?(n=ad(n,e,t),na(n,a)||(zn=!0),n):(Ha&42)===0||(Ha&1073741824)!==0&&(Z&261930)===0?(zn=!0,n.memoizedState=e):(n=rp(),F.lanes|=n,pe|=n,a)}function cc(n,a,e,t,l){var i=T.p;T.p=i!==0&&8>i?i:8;var s=y.T,d={};y.T=d,ld(n,!1,a,e);try{var o=l(),u=y.S;if(u!==null&&u(d,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var f=Hu(o,t);Wt(n,a,f,sa(n))}else Wt(n,a,t,sa(n))}catch(x){Wt(n,a,{then:function(){},status:"rejected",reason:x},sa())}finally{T.p=i,s!==null&&d.types!==null&&(s.types=d.types),y.T=s}}function Gu(){}function ed(n,a,e,t){if(n.tag!==5)throw Error(b(476));var l=pc(n).queue;cc(n,l,a,_,e===null?Gu:function(){return vc(n),e(t)})}function pc(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:_},next:null};var e={};return a.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:e},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function vc(n){var a=pc(n);a.next===null&&(a=n.alternate.memoizedState),Wt(n,a.next.queue,{},sa())}function td(){return Dn(ml)}function uc(){return xn().memoizedState}function bc(){return xn().memoizedState}function Xu(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var e=sa();n=ie(e);var t=se(a,n,e);t!==null&&(Kn(t,a,e),Zt(t,a,e)),a={cache:Os()},n.payload=a;return}a=a.return}}function Qu(n,a,e){var t=sa();e={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},oi(n)?mc(a,e):(e=ws(n,a,e,t),e!==null&&(Kn(e,n,t),fc(e,a,t)))}function gc(n,a,e){var t=sa();Wt(n,a,e,t)}function Wt(n,a,e,t){var l={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(oi(n))mc(a,l);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var s=a.lastRenderedState,d=i(s,e);if(l.hasEagerState=!0,l.eagerState=d,na(d,s))return Vl(n,a,l,0),pn===null&&Fl(),!1}catch{}if(e=ws(n,a,l,t),e!==null)return Kn(e,n,t),fc(e,a,t),!0}return!1}function ld(n,a,e,t){if(t={lane:2,revertLane:jd(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},oi(n)){if(a)throw Error(b(479))}else a=ws(n,e,t,2),a!==null&&Kn(a,n,2)}function oi(n){var a=n.alternate;return n===F||a!==null&&a===F}function mc(n,a){vt=ai=!0;var e=n.pending;e===null?a.next=a:(a.next=e.next,e.next=a),n.pending=a}function fc(n,a,e){if((e&4194048)!==0){var t=a.lanes;t&=n.pendingLanes,e|=t,a.lanes=e,ko(n,e)}}var nl={readContext:Dn,use:li,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useLayoutEffect:mn,useInsertionEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useSyncExternalStore:mn,useId:mn,useHostTransitionStatus:mn,useFormState:mn,useActionState:mn,useOptimistic:mn,useMemoCache:mn,useCacheRefresh:mn};nl.useEffectEvent=mn;var yc={readContext:Dn,use:li,useCallback:function(n,a){return Hn().memoizedState=[n,a===void 0?null:a],n},useContext:Dn,useEffect:ac,useImperativeHandle:function(n,a,e){e=e!=null?e.concat([n]):null,si(4194308,4,ic.bind(null,a,n),e)},useLayoutEffect:function(n,a){return si(4194308,4,n,a)},useInsertionEffect:function(n,a){si(4,2,n,a)},useMemo:function(n,a){var e=Hn();a=a===void 0?null:a;var t=n();if(Re){Ia(!0);try{n()}finally{Ia(!1)}}return e.memoizedState=[t,a],t},useReducer:function(n,a,e){var t=Hn();if(e!==void 0){var l=e(a);if(Re){Ia(!0);try{e(a)}finally{Ia(!1)}}}else l=a;return t.memoizedState=t.baseState=l,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:l},t.queue=n,n=n.dispatch=Qu.bind(null,F,n),[t.memoizedState,n]},useRef:function(n){var a=Hn();return n={current:n},a.memoizedState=n},useState:function(n){n=Is(n);var a=n.queue,e=gc.bind(null,F,a);return a.dispatch=e,[n.memoizedState,e]},useDebugValue:nd,useDeferredValue:function(n,a){var e=Hn();return ad(e,n,a)},useTransition:function(){var n=Is(!1);return n=cc.bind(null,F,n.queue,!0,!1),Hn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,e){var t=F,l=Hn();if(I){if(e===void 0)throw Error(b(407));e=e()}else{if(e=a(),pn===null)throw Error(b(349));(Z&127)!==0||Hr(t,a,e)}l.memoizedState=e;var i={value:e,getSnapshot:a};return l.queue=i,ac(Fr.bind(null,t,i,n),[n]),t.flags|=2048,bt(9,{destroy:void 0},Ur.bind(null,t,i,e,a),null),e},useId:function(){var n=Hn(),a=pn.identifierPrefix;if(I){var e=Aa,t=Sa;e=(t&~(1<<32-Wn(t)-1)).toString(32)+e,a="_"+a+"R_"+e,e=ei++,0<e&&(a+="H"+e.toString(32)),a+="_"}else e=Uu++,a="_"+a+"r_"+e.toString(32)+"_";return n.memoizedState=a},useHostTransitionStatus:td,useFormState:Jr,useActionState:Jr,useOptimistic:function(n){var a=Hn();a.memoizedState=a.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=e,a=ld.bind(null,F,!0,e),e.dispatch=a,[n,a]},useMemoCache:Zs,useCacheRefresh:function(){return Hn().memoizedState=Xu.bind(null,F)},useEffectEvent:function(n){var a=Hn(),e={impl:n};return a.memoizedState=e,function(){if((nn&2)!==0)throw Error(b(440));return e.impl.apply(void 0,arguments)}}},id={readContext:Dn,use:li,useCallback:dc,useContext:Dn,useEffect:Ws,useImperativeHandle:sc,useInsertionEffect:tc,useLayoutEffect:lc,useMemo:oc,useReducer:ii,useRef:nc,useState:function(){return ii(Ua)},useDebugValue:nd,useDeferredValue:function(n,a){var e=xn();return rc(e,sn.memoizedState,n,a)},useTransition:function(){var n=ii(Ua)[0],a=xn().memoizedState;return[typeof n=="boolean"?n:Pt(n),a]},useSyncExternalStore:Rr,useId:uc,useHostTransitionStatus:td,useFormState:Ir,useActionState:Ir,useOptimistic:function(n,a){var e=xn();return $r(e,sn,n,a)},useMemoCache:Zs,useCacheRefresh:bc};id.useEffectEvent=ec;var hc={readContext:Dn,use:li,useCallback:dc,useContext:Dn,useEffect:Ws,useImperativeHandle:sc,useInsertionEffect:tc,useLayoutEffect:lc,useMemo:oc,useReducer:Js,useRef:nc,useState:function(){return Js(Ua)},useDebugValue:nd,useDeferredValue:function(n,a){var e=xn();return sn===null?ad(e,n,a):rc(e,sn.memoizedState,n,a)},useTransition:function(){var n=Js(Ua)[0],a=xn().memoizedState;return[typeof n=="boolean"?n:Pt(n),a]},useSyncExternalStore:Rr,useId:uc,useHostTransitionStatus:td,useFormState:Wr,useActionState:Wr,useOptimistic:function(n,a){var e=xn();return sn!==null?$r(e,sn,n,a):(e.baseState=n,[n,e.queue.dispatch])},useMemoCache:Zs,useCacheRefresh:bc};hc.useEffectEvent=ec;function sd(n,a,e,t){a=n.memoizedState,e=e(t,a),e=e==null?a:D({},a,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var dd={enqueueSetState:function(n,a,e){n=n._reactInternals;var t=sa(),l=ie(t);l.payload=a,e!=null&&(l.callback=e),a=se(n,l,t),a!==null&&(Kn(a,n,t),Zt(a,n,t))},enqueueReplaceState:function(n,a,e){n=n._reactInternals;var t=sa(),l=ie(t);l.tag=1,l.payload=a,e!=null&&(l.callback=e),a=se(n,l,t),a!==null&&(Kn(a,n,t),Zt(a,n,t))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var e=sa(),t=ie(e);t.tag=2,a!=null&&(t.callback=a),a=se(n,t,e),a!==null&&(Kn(a,n,e),Zt(a,n,e))}};function xc(n,a,e,t,l,i,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,i,s):a.prototype&&a.prototype.isPureReactComponent?!Ut(e,t)||!Ut(l,i):!0}function wc(n,a,e,t){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(e,t),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(e,t),a.state!==n&&dd.enqueueReplaceState(a,a.state,null)}function He(n,a){var e=a;if("ref"in a){e={};for(var t in a)t!=="ref"&&(e[t]=a[t])}if(n=n.defaultProps){e===a&&(e=D({},e));for(var l in n)e[l]===void 0&&(e[l]=n[l])}return e}function kc(n){Ul(n)}function zc(n){console.error(n)}function Tc(n){Ul(n)}function ri(n,a){try{var e=n.onUncaughtError;e(a.value,{componentStack:a.stack})}catch(t){setTimeout(function(){throw t})}}function Ec(n,a,e){try{var t=n.onCaughtError;t(e.value,{componentStack:e.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function od(n,a,e){return e=ie(e),e.tag=3,e.payload={element:null},e.callback=function(){ri(n,a)},e}function Sc(n){return n=ie(n),n.tag=3,n}function Ac(n,a,e,t){var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=t.value;n.payload=function(){return l(i)},n.callback=function(){Ec(a,e,t)}}var s=e.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ec(a,e,t),typeof l!="function"&&(ve===null?ve=new Set([this]):ve.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})})}function Zu(n,a,e,t,l){if(e.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(a=e.alternate,a!==null&&st(a,e,l,!0),e=ea.current,e!==null){switch(e.tag){case 31:case 13:return ga===null?wi():e.alternate===null&&fn===0&&(fn=3),e.flags&=-257,e.flags|=65536,e.lanes=l,t===Jl?e.flags|=16384:(a=e.updateQueue,a===null?e.updateQueue=new Set([t]):a.add(t),qd(n,t,l)),!1;case 22:return e.flags|=65536,t===Jl?e.flags|=16384:(a=e.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([t])},e.updateQueue=a):(e=a.retryQueue,e===null?a.retryQueue=new Set([t]):e.add(t)),qd(n,t,l)),!1}throw Error(b(435,e.tag))}return qd(n,t,l),wi(),!1}if(I)return a=ea.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=l,t!==As&&(n=Error(b(422),{cause:t}),Yt(pa(n,e)))):(t!==As&&(a=Error(b(423),{cause:t}),Yt(pa(a,e))),n=n.current.alternate,n.flags|=65536,l&=-l,n.lanes|=l,t=pa(t,e),l=od(n.stateNode,t,l),Rs(n,l),fn!==4&&(fn=2)),!1;var i=Error(b(520),{cause:t});if(i=pa(i,e),ol===null?ol=[i]:ol.push(i),fn!==4&&(fn=2),a===null)return!0;t=pa(t,e),e=a;do{switch(e.tag){case 3:return e.flags|=65536,n=l&-l,e.lanes|=n,n=od(e.stateNode,t,n),Rs(e,n),!1;case 1:if(a=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ve===null||!ve.has(i))))return e.flags|=65536,l&=-l,e.lanes|=l,l=Sc(l),Ac(l,n,e,t),Rs(e,l),!1}e=e.return}while(e!==null);return!1}var rd=Error(b(461)),zn=!1;function On(n,a,e,t){a.child=n===null?Dr(a,null,e,t):_e(a,n.child,e,t)}function Cc(n,a,e,t,l){e=e.render;var i=a.ref;if("ref"in t){var s={};for(var d in t)d!=="ref"&&(s[d]=t[d])}else s=t;return qe(a),t=$s(n,a,e,s,i,l),d=Gs(),n!==null&&!zn?(Xs(n,a,l),Fa(n,a,l)):(I&&d&&Es(a),a.flags|=1,On(n,a,t,l),a.child)}function Mc(n,a,e,t,l){if(n===null){var i=e.type;return typeof i=="function"&&!ks(i)&&i.defaultProps===void 0&&e.compare===null?(a.tag=15,a.type=i,Bc(n,a,i,t,l)):(n=$l(e.type,null,t,a,a.mode,l),n.ref=a.ref,n.return=a,a.child=n)}if(i=n.child,!fd(n,l)){var s=i.memoizedProps;if(e=e.compare,e=e!==null?e:Ut,e(s,t)&&n.ref===a.ref)return Fa(n,a,l)}return a.flags|=1,n=Na(i,t),n.ref=a.ref,n.return=a,a.child=n}function Bc(n,a,e,t,l){if(n!==null){var i=n.memoizedProps;if(Ut(i,t)&&n.ref===a.ref)if(zn=!1,a.pendingProps=t=i,fd(n,l))(n.flags&131072)!==0&&(zn=!0);else return a.lanes=n.lanes,Fa(n,a,l)}return cd(n,a,e,t,l)}function Dc(n,a,e,t){var l=t.children,i=n!==null?n.memoizedState:null;if(n===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((a.flags&128)!==0){if(i=i!==null?i.baseLanes|e:e,n!==null){for(t=a.child=n.child,l=0;t!==null;)l=l|t.lanes|t.childLanes,t=t.sibling;t=l&~i}else t=0,a.child=null;return Oc(n,a,i,e,t)}if((e&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Zl(a,i!==null?i.cachePool:null),i!==null?Lr(a,i):Us(),Nr(a);else return t=a.lanes=536870912,Oc(n,a,i!==null?i.baseLanes|e:e,e,t)}else i!==null?(Zl(a,i.cachePool),Lr(a,i),oe(),a.memoizedState=null):(n!==null&&Zl(a,null),Us(),oe());return On(n,a,l,e),a.child}function al(n,a){return n!==null&&n.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Oc(n,a,e,t,l){var i=Ls();return i=i===null?null:{parent:wn._currentValue,pool:i},a.memoizedState={baseLanes:e,cachePool:i},n!==null&&Zl(a,null),Us(),Nr(a),n!==null&&st(n,a,t,!0),a.childLanes=l,null}function ci(n,a){return a=vi({mode:a.mode,children:a.children},n.mode),a.ref=n.ref,n.child=a,a.return=n,a}function qc(n,a,e){return _e(a,n.child,null,e),n=ci(a,a.pendingProps),n.flags|=2,ta(a),a.memoizedState=null,n}function Ku(n,a,e){var t=a.pendingProps,l=(a.flags&128)!==0;if(a.flags&=-129,n===null){if(I){if(t.mode==="hidden")return n=ci(a,t),a.lanes=536870912,al(null,n);if(Vs(a),(n=vn)?(n=Gp(n,ba),n=n!==null&&n.data==="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:ne!==null?{id:Sa,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},e=mr(n),e.return=a,a.child=e,Bn=a,vn=null)):n=null,n===null)throw ee(a);return a.lanes=536870912,null}return ci(a,t)}var i=n.memoizedState;if(i!==null){var s=i.dehydrated;if(Vs(a),l)if(a.flags&256)a.flags&=-257,a=qc(n,a,e);else if(a.memoizedState!==null)a.child=n.child,a.flags|=128,a=null;else throw Error(b(558));else if(zn||st(n,a,e,!1),l=(e&n.childLanes)!==0,zn||l){if(t=pn,t!==null&&(s=zo(t,e),s!==0&&s!==i.retryLane))throw i.retryLane=s,Me(n,s),Kn(t,n,s),rd;wi(),a=qc(n,a,e)}else n=i.treeContext,vn=ma(s.nextSibling),Bn=a,I=!0,ae=null,ba=!1,n!==null&&hr(a,n),a=ci(a,t),a.flags|=4096;return a}return n=Na(n.child,{mode:t.mode,children:t.children}),n.ref=a.ref,a.child=n,n.return=a,n}function pi(n,a){var e=a.ref;if(e===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(b(284));(n===null||n.ref!==e)&&(a.flags|=4194816)}}function cd(n,a,e,t,l){return qe(a),e=$s(n,a,e,t,void 0,l),t=Gs(),n!==null&&!zn?(Xs(n,a,l),Fa(n,a,l)):(I&&t&&Es(a),a.flags|=1,On(n,a,e,l),a.child)}function Lc(n,a,e,t,l,i){return qe(a),a.updateQueue=null,e=_r(a,t,e,l),jr(n),t=Gs(),n!==null&&!zn?(Xs(n,a,i),Fa(n,a,i)):(I&&t&&Es(a),a.flags|=1,On(n,a,e,i),a.child)}function Nc(n,a,e,t,l){if(qe(a),a.stateNode===null){var i=et,s=e.contextType;typeof s=="object"&&s!==null&&(i=Dn(s)),i=new e(t,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=dd,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=t,i.state=a.memoizedState,i.refs={},js(a),s=e.contextType,i.context=typeof s=="object"&&s!==null?Dn(s):et,i.state=a.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sd(a,e,s,t),i.state=a.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&dd.enqueueReplaceState(i,i.state,null),Jt(a,t,i,l),Kt(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),t=!0}else if(n===null){i=a.stateNode;var d=a.memoizedProps,o=He(e,d);i.props=o;var u=i.context,f=e.contextType;s=et,typeof f=="object"&&f!==null&&(s=Dn(f));var x=e.getDerivedStateFromProps;f=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=a.pendingProps!==d,f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||u!==s)&&wc(a,i,t,s),le=!1;var g=a.memoizedState;i.state=g,Jt(a,t,i,l),Kt(),u=a.memoizedState,d||g!==u||le?(typeof x=="function"&&(sd(a,e,x,t),u=a.memoizedState),(o=le||xc(a,e,o,t,g,u,s))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=t,a.memoizedState=u),i.props=t,i.state=u,i.context=s,t=o):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),t=!1)}else{i=a.stateNode,_s(n,a),s=a.memoizedProps,f=He(e,s),i.props=f,x=a.pendingProps,g=i.context,u=e.contextType,o=et,typeof u=="object"&&u!==null&&(o=Dn(u)),d=e.getDerivedStateFromProps,(u=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==x||g!==o)&&wc(a,i,t,o),le=!1,g=a.memoizedState,i.state=g,Jt(a,t,i,l),Kt();var m=a.memoizedState;s!==x||g!==m||le||n!==null&&n.dependencies!==null&&Xl(n.dependencies)?(typeof d=="function"&&(sd(a,e,d,t),m=a.memoizedState),(f=le||xc(a,e,f,t,g,m,o)||n!==null&&n.dependencies!==null&&Xl(n.dependencies))?(u||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(t,m,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(t,m,o)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===n.memoizedProps&&g===n.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&g===n.memoizedState||(a.flags|=1024),a.memoizedProps=t,a.memoizedState=m),i.props=t,i.state=m,i.context=o,t=f):(typeof i.componentDidUpdate!="function"||s===n.memoizedProps&&g===n.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&g===n.memoizedState||(a.flags|=1024),t=!1)}return i=t,pi(n,a),t=(a.flags&128)!==0,i||t?(i=a.stateNode,e=t&&typeof e.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,n!==null&&t?(a.child=_e(a,n.child,null,l),a.child=_e(a,null,e,l)):On(n,a,e,l),a.memoizedState=i.state,n=a.child):n=Fa(n,a,l),n}function jc(n,a,e,t){return De(),a.flags|=256,On(n,a,e,t),a.child}var pd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vd(n){return{baseLanes:n,cachePool:Er()}}function ud(n,a,e){return n=n!==null?n.childLanes&~e:0,a&&(n|=ia),n}function _c(n,a,e){var t=a.pendingProps,l=!1,i=(a.flags&128)!==0,s;if((s=i)||(s=n!==null&&n.memoizedState===null?!1:(hn.current&2)!==0),s&&(l=!0,a.flags&=-129),s=(a.flags&32)!==0,a.flags&=-33,n===null){if(I){if(l?de(a):oe(),(n=vn)?(n=Gp(n,ba),n=n!==null&&n.data!=="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:ne!==null?{id:Sa,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},e=mr(n),e.return=a,a.child=e,Bn=a,vn=null)):n=null,n===null)throw ee(a);return Kd(n)?a.lanes=32:a.lanes=536870912,null}var d=t.children;return t=t.fallback,l?(oe(),l=a.mode,d=vi({mode:"hidden",children:d},l),t=Be(t,l,e,null),d.return=a,t.return=a,d.sibling=t,a.child=d,t=a.child,t.memoizedState=vd(e),t.childLanes=ud(n,s,e),a.memoizedState=pd,al(null,t)):(de(a),bd(a,d))}var o=n.memoizedState;if(o!==null&&(d=o.dehydrated,d!==null)){if(i)a.flags&256?(de(a),a.flags&=-257,a=gd(n,a,e)):a.memoizedState!==null?(oe(),a.child=n.child,a.flags|=128,a=null):(oe(),d=t.fallback,l=a.mode,t=vi({mode:"visible",children:t.children},l),d=Be(d,l,e,null),d.flags|=2,t.return=a,d.return=a,t.sibling=d,a.child=t,_e(a,n.child,null,e),t=a.child,t.memoizedState=vd(e),t.childLanes=ud(n,s,e),a.memoizedState=pd,a=al(null,t));else if(de(a),Kd(d)){if(s=d.nextSibling&&d.nextSibling.dataset,s)var u=s.dgst;s=u,t=Error(b(419)),t.stack="",t.digest=s,Yt({value:t,source:null,stack:null}),a=gd(n,a,e)}else if(zn||st(n,a,e,!1),s=(e&n.childLanes)!==0,zn||s){if(s=pn,s!==null&&(t=zo(s,e),t!==0&&t!==o.retryLane))throw o.retryLane=t,Me(n,t),Kn(s,n,t),rd;Zd(d)||wi(),a=gd(n,a,e)}else Zd(d)?(a.flags|=192,a.child=n.child,a=null):(n=o.treeContext,vn=ma(d.nextSibling),Bn=a,I=!0,ae=null,ba=!1,n!==null&&hr(a,n),a=bd(a,t.children),a.flags|=4096);return a}return l?(oe(),d=t.fallback,l=a.mode,o=n.child,u=o.sibling,t=Na(o,{mode:"hidden",children:t.children}),t.subtreeFlags=o.subtreeFlags&65011712,u!==null?d=Na(u,d):(d=Be(d,l,e,null),d.flags|=2),d.return=a,t.return=a,t.sibling=d,a.child=t,al(null,t),t=a.child,d=n.child.memoizedState,d===null?d=vd(e):(l=d.cachePool,l!==null?(o=wn._currentValue,l=l.parent!==o?{parent:o,pool:o}:l):l=Er(),d={baseLanes:d.baseLanes|e,cachePool:l}),t.memoizedState=d,t.childLanes=ud(n,s,e),a.memoizedState=pd,al(n.child,t)):(de(a),e=n.child,n=e.sibling,e=Na(e,{mode:"visible",children:t.children}),e.return=a,e.sibling=null,n!==null&&(s=a.deletions,s===null?(a.deletions=[n],a.flags|=16):s.push(n)),a.child=e,a.memoizedState=null,e)}function bd(n,a){return a=vi({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function vi(n,a){return n=aa(22,n,null,a),n.lanes=0,n}function gd(n,a,e){return _e(a,n.child,null,e),n=bd(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function Rc(n,a,e){n.lanes|=a;var t=n.alternate;t!==null&&(t.lanes|=a),Bs(n.return,a,e)}function md(n,a,e,t,l,i){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:t,tail:e,tailMode:l,treeForkCount:i}:(s.isBackwards=a,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=e,s.tailMode=l,s.treeForkCount=i)}function Hc(n,a,e){var t=a.pendingProps,l=t.revealOrder,i=t.tail;t=t.children;var s=hn.current,d=(s&2)!==0;if(d?(s=s&1|2,a.flags|=128):s&=1,E(hn,s),On(n,a,t,e),t=I?Vt:0,!d&&n!==null&&(n.flags&128)!==0)n:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Rc(n,e,a);else if(n.tag===19)Rc(n,e,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break n;for(;n.sibling===null;){if(n.return===null||n.return===a)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(l){case"forwards":for(e=a.child,l=null;e!==null;)n=e.alternate,n!==null&&ni(n)===null&&(l=e),e=e.sibling;e=l,e===null?(l=a.child,a.child=null):(l=e.sibling,e.sibling=null),md(a,!1,l,e,i,t);break;case"backwards":case"unstable_legacy-backwards":for(e=null,l=a.child,a.child=null;l!==null;){if(n=l.alternate,n!==null&&ni(n)===null){a.child=l;break}n=l.sibling,l.sibling=e,e=l,l=n}md(a,!0,e,null,i,t);break;case"together":md(a,!1,null,null,void 0,t);break;default:a.memoizedState=null}return a.child}function Fa(n,a,e){if(n!==null&&(a.dependencies=n.dependencies),pe|=a.lanes,(e&a.childLanes)===0)if(n!==null){if(st(n,a,e,!1),(e&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(b(153));if(a.child!==null){for(n=a.child,e=Na(n,n.pendingProps),a.child=e,e.return=a;n.sibling!==null;)n=n.sibling,e=e.sibling=Na(n,n.pendingProps),e.return=a;e.sibling=null}return a.child}function fd(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Xl(n)))}function Ju(n,a,e){switch(a.tag){case 3:Rn(a,a.stateNode.containerInfo),te(a,wn,n.memoizedState.cache),De();break;case 27:case 5:At(a);break;case 4:Rn(a,a.stateNode.containerInfo);break;case 10:te(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Vs(a),null;break;case 13:var t=a.memoizedState;if(t!==null)return t.dehydrated!==null?(de(a),a.flags|=128,null):(e&a.child.childLanes)!==0?_c(n,a,e):(de(a),n=Fa(n,a,e),n!==null?n.sibling:null);de(a);break;case 19:var l=(n.flags&128)!==0;if(t=(e&a.childLanes)!==0,t||(st(n,a,e,!1),t=(e&a.childLanes)!==0),l){if(t)return Hc(n,a,e);a.flags|=128}if(l=a.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),E(hn,hn.current),t)break;return null;case 22:return a.lanes=0,Dc(n,a,e,a.pendingProps);case 24:te(a,wn,n.memoizedState.cache)}return Fa(n,a,e)}function Uc(n,a,e){if(n!==null)if(n.memoizedProps!==a.pendingProps)zn=!0;else{if(!fd(n,e)&&(a.flags&128)===0)return zn=!1,Ju(n,a,e);zn=(n.flags&131072)!==0}else zn=!1,I&&(a.flags&1048576)!==0&&yr(a,Vt,a.index);switch(a.lanes=0,a.tag){case 16:n:{var t=a.pendingProps;if(n=Ne(a.elementType),a.type=n,typeof n=="function")ks(n)?(t=He(n,t),a.tag=1,a=Nc(null,a,n,t,e)):(a.tag=0,a=cd(null,a,n,t,e));else{if(n!=null){var l=n.$$typeof;if(l===da){a.tag=11,a=Cc(null,a,n,t,e);break n}else if(l===J){a.tag=14,a=Mc(null,a,n,t,e);break n}}throw a=Da(n)||n,Error(b(306,a,""))}}return a;case 0:return cd(n,a,a.type,a.pendingProps,e);case 1:return t=a.type,l=He(t,a.pendingProps),Nc(n,a,t,l,e);case 3:n:{if(Rn(a,a.stateNode.containerInfo),n===null)throw Error(b(387));t=a.pendingProps;var i=a.memoizedState;l=i.element,_s(n,a),Jt(a,t,null,e);var s=a.memoizedState;if(t=s.cache,te(a,wn,t),t!==i.cache&&Ds(a,[wn],e,!0),Kt(),t=s.element,i.isDehydrated)if(i={element:t,isDehydrated:!1,cache:s.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=jc(n,a,t,e);break n}else if(t!==l){l=pa(Error(b(424)),a),Yt(l),a=jc(n,a,t,e);break n}else for(n=a.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,vn=ma(n.firstChild),Bn=a,I=!0,ae=null,ba=!0,e=Dr(a,null,t,e),a.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(De(),t===l){a=Fa(n,a,e);break n}On(n,a,t,e)}a=a.child}return a;case 26:return pi(n,a),n===null?(e=Ip(a.type,null,a.pendingProps,null))?a.memoizedState=e:I||(e=a.type,n=a.pendingProps,t=Ci(G.current).createElement(e),t[Mn]=a,t[Yn]=n,qn(t,e,n),An(t),a.stateNode=t):a.memoizedState=Ip(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return At(a),n===null&&I&&(t=a.stateNode=Zp(a.type,a.pendingProps,G.current),Bn=a,ba=!0,l=vn,me(a.type)?(Jd=l,vn=ma(t.firstChild)):vn=l),On(n,a,a.pendingProps.children,e),pi(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&I&&((l=t=vn)&&(t=Sb(t,a.type,a.pendingProps,ba),t!==null?(a.stateNode=t,Bn=a,vn=ma(t.firstChild),ba=!1,l=!0):l=!1),l||ee(a)),At(a),l=a.type,i=a.pendingProps,s=n!==null?n.memoizedProps:null,t=i.children,Gd(l,i)?t=null:s!==null&&Gd(l,s)&&(a.flags|=32),a.memoizedState!==null&&(l=$s(n,a,Fu,null,null,e),ml._currentValue=l),pi(n,a),On(n,a,t,e),a.child;case 6:return n===null&&I&&((n=e=vn)&&(e=Ab(e,a.pendingProps,ba),e!==null?(a.stateNode=e,Bn=a,vn=null,n=!0):n=!1),n||ee(a)),null;case 13:return _c(n,a,e);case 4:return Rn(a,a.stateNode.containerInfo),t=a.pendingProps,n===null?a.child=_e(a,null,t,e):On(n,a,t,e),a.child;case 11:return Cc(n,a,a.type,a.pendingProps,e);case 7:return On(n,a,a.pendingProps,e),a.child;case 8:return On(n,a,a.pendingProps.children,e),a.child;case 12:return On(n,a,a.pendingProps.children,e),a.child;case 10:return t=a.pendingProps,te(a,a.type,t.value),On(n,a,t.children,e),a.child;case 9:return l=a.type._context,t=a.pendingProps.children,qe(a),l=Dn(l),t=t(l),a.flags|=1,On(n,a,t,e),a.child;case 14:return Mc(n,a,a.type,a.pendingProps,e);case 15:return Bc(n,a,a.type,a.pendingProps,e);case 19:return Hc(n,a,e);case 31:return Ku(n,a,e);case 22:return Dc(n,a,e,a.pendingProps);case 24:return qe(a),t=Dn(wn),n===null?(l=Ls(),l===null&&(l=pn,i=Os(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=e),l=i),a.memoizedState={parent:t,cache:l},js(a),te(a,wn,l)):((n.lanes&e)!==0&&(_s(n,a),Jt(a,null,null,e),Kt()),l=n.memoizedState,i=a.memoizedState,l.parent!==t?(l={parent:t,cache:t},a.memoizedState=l,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=l),te(a,wn,t)):(t=i.cache,te(a,wn,t),t!==l.cache&&Ds(a,[wn],e,!0))),On(n,a,a.pendingProps.children,e),a.child;case 29:throw a.pendingProps}throw Error(b(156,a.tag))}function Va(n){n.flags|=4}function yd(n,a,e,t,l){if((a=(n.mode&32)!==0)&&(a=!1),a){if(n.flags|=16777216,(l&335544128)===l)if(n.stateNode.complete)n.flags|=8192;else if(up())n.flags|=8192;else throw je=Jl,Ns}else n.flags&=-16777217}function Fc(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!ev(a))if(up())n.flags|=8192;else throw je=Jl,Ns}function ui(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?xo():536870912,n.lanes|=a,yt|=a)}function el(n,a){if(!I)switch(n.tailMode){case"hidden":a=n.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function un(n){var a=n.alternate!==null&&n.alternate.child===n.child,e=0,t=0;if(a)for(var l=n.child;l!==null;)e|=l.lanes|l.childLanes,t|=l.subtreeFlags&65011712,t|=l.flags&65011712,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)e|=l.lanes|l.childLanes,t|=l.subtreeFlags,t|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=t,n.childLanes=e,a}function Iu(n,a,e){var t=a.pendingProps;switch(Ss(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(a),null;case 1:return un(a),null;case 3:return e=a.stateNode,t=null,n!==null&&(t=n.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Ra(wn),yn(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(it(a)?Va(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Cs())),un(a),null;case 26:var l=a.type,i=a.memoizedState;return n===null?(Va(a),i!==null?(un(a),Fc(a,i)):(un(a),yd(a,l,null,t,e))):i?i!==n.memoizedState?(Va(a),un(a),Fc(a,i)):(un(a),a.flags&=-16777217):(n=n.memoizedProps,n!==t&&Va(a),un(a),yd(a,l,n,t,e)),null;case 27:if(Tl(a),e=G.current,l=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==t&&Va(a);else{if(!t){if(a.stateNode===null)throw Error(b(166));return un(a),null}n=C.current,it(a)?xr(a):(n=Zp(l,t,e),a.stateNode=n,Va(a))}return un(a),null;case 5:if(Tl(a),l=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==t&&Va(a);else{if(!t){if(a.stateNode===null)throw Error(b(166));return un(a),null}if(i=C.current,it(a))xr(a);else{var s=Ci(G.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof t.is=="string"?s.createElement("select",{is:t.is}):s.createElement("select"),t.multiple?i.multiple=!0:t.size&&(i.size=t.size);break;default:i=typeof t.is=="string"?s.createElement(l,{is:t.is}):s.createElement(l)}}i[Mn]=a,i[Yn]=t;n:for(s=a.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break n;for(;s.sibling===null;){if(s.return===null||s.return===a)break n;s=s.return}s.sibling.return=s.return,s=s.sibling}a.stateNode=i;n:switch(qn(i,l,t),l){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break n;case"img":t=!0;break n;default:t=!1}t&&Va(a)}}return un(a),yd(a,a.type,n===null?null:n.memoizedProps,a.pendingProps,e),null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==t&&Va(a);else{if(typeof t!="string"&&a.stateNode===null)throw Error(b(166));if(n=G.current,it(a)){if(n=a.stateNode,e=a.memoizedProps,t=null,l=Bn,l!==null)switch(l.tag){case 27:case 5:t=l.memoizedProps}n[Mn]=a,n=!!(n.nodeValue===e||t!==null&&t.suppressHydrationWarning===!0||_p(n.nodeValue,e)),n||ee(a,!0)}else n=Ci(n).createTextNode(t),n[Mn]=a,a.stateNode=n}return un(a),null;case 31:if(e=a.memoizedState,n===null||n.memoizedState!==null){if(t=it(a),e!==null){if(n===null){if(!t)throw Error(b(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(b(557));n[Mn]=a}else De(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;un(a),n=!1}else e=Cs(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),n=!0;if(!n)return a.flags&256?(ta(a),a):(ta(a),null);if((a.flags&128)!==0)throw Error(b(558))}return un(a),null;case 13:if(t=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(l=it(a),t!==null&&t.dehydrated!==null){if(n===null){if(!l)throw Error(b(318));if(l=a.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(b(317));l[Mn]=a}else De(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;un(a),l=!1}else l=Cs(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=l),l=!0;if(!l)return a.flags&256?(ta(a),a):(ta(a),null)}return ta(a),(a.flags&128)!==0?(a.lanes=e,a):(e=t!==null,n=n!==null&&n.memoizedState!==null,e&&(t=a.child,l=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(l=t.alternate.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==l&&(t.flags|=2048)),e!==n&&e&&(a.child.flags|=8192),ui(a,a.updateQueue),un(a),null);case 4:return yn(),n===null&&Ud(a.stateNode.containerInfo),un(a),null;case 10:return Ra(a.type),un(a),null;case 19:if(w(hn),t=a.memoizedState,t===null)return un(a),null;if(l=(a.flags&128)!==0,i=t.rendering,i===null)if(l)el(t,!1);else{if(fn!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(i=ni(n),i!==null){for(a.flags|=128,el(t,!1),n=i.updateQueue,a.updateQueue=n,ui(a,n),a.subtreeFlags=0,n=e,e=a.child;e!==null;)gr(e,n),e=e.sibling;return E(hn,hn.current&1|2),I&&ja(a,t.treeForkCount),a.child}n=n.sibling}t.tail!==null&&In()>yi&&(a.flags|=128,l=!0,el(t,!1),a.lanes=4194304)}else{if(!l)if(n=ni(i),n!==null){if(a.flags|=128,l=!0,n=n.updateQueue,a.updateQueue=n,ui(a,n),el(t,!0),t.tail===null&&t.tailMode==="hidden"&&!i.alternate&&!I)return un(a),null}else 2*In()-t.renderingStartTime>yi&&e!==536870912&&(a.flags|=128,l=!0,el(t,!1),a.lanes=4194304);t.isBackwards?(i.sibling=a.child,a.child=i):(n=t.last,n!==null?n.sibling=i:a.child=i,t.last=i)}return t.tail!==null?(n=t.tail,t.rendering=n,t.tail=n.sibling,t.renderingStartTime=In(),n.sibling=null,e=hn.current,E(hn,l?e&1|2:e&1),I&&ja(a,t.treeForkCount),n):(un(a),null);case 22:case 23:return ta(a),Fs(),t=a.memoizedState!==null,n!==null?n.memoizedState!==null!==t&&(a.flags|=8192):t&&(a.flags|=8192),t?(e&536870912)!==0&&(a.flags&128)===0&&(un(a),a.subtreeFlags&6&&(a.flags|=8192)):un(a),e=a.updateQueue,e!==null&&ui(a,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==e&&(a.flags|=2048),n!==null&&w(Le),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),Ra(wn),un(a),null;case 25:return null;case 30:return null}throw Error(b(156,a.tag))}function Pu(n,a){switch(Ss(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Ra(wn),yn(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Tl(a),null;case 31:if(a.memoizedState!==null){if(ta(a),a.alternate===null)throw Error(b(340));De()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 13:if(ta(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(b(340));De()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return w(hn),null;case 4:return yn(),null;case 10:return Ra(a.type),null;case 22:case 23:return ta(a),Fs(),n!==null&&w(Le),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Ra(wn),null;case 25:return null;default:return null}}function Vc(n,a){switch(Ss(a),a.tag){case 3:Ra(wn),yn();break;case 26:case 27:case 5:Tl(a);break;case 4:yn();break;case 31:a.memoizedState!==null&&ta(a);break;case 13:ta(a);break;case 19:w(hn);break;case 10:Ra(a.type);break;case 22:case 23:ta(a),Fs(),n!==null&&w(Le);break;case 24:Ra(wn)}}function tl(n,a){try{var e=a.updateQueue,t=e!==null?e.lastEffect:null;if(t!==null){var l=t.next;e=l;do{if((e.tag&n)===n){t=void 0;var i=e.create,s=e.inst;t=i(),s.destroy=t}e=e.next}while(e!==l)}}catch(d){tn(a,a.return,d)}}function re(n,a,e){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var i=l.next;t=i;do{if((t.tag&n)===n){var s=t.inst,d=s.destroy;if(d!==void 0){s.destroy=void 0,l=a;var o=e,u=d;try{u()}catch(f){tn(l,o,f)}}}t=t.next}while(t!==i)}}catch(f){tn(a,a.return,f)}}function Yc(n){var a=n.updateQueue;if(a!==null){var e=n.stateNode;try{qr(a,e)}catch(t){tn(n,n.return,t)}}}function $c(n,a,e){e.props=He(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(t){tn(n,a,t)}}function ll(n,a){try{var e=n.ref;if(e!==null){switch(n.tag){case 26:case 27:case 5:var t=n.stateNode;break;case 30:t=n.stateNode;break;default:t=n.stateNode}typeof e=="function"?n.refCleanup=e(t):e.current=t}}catch(l){tn(n,a,l)}}function Ca(n,a){var e=n.ref,t=n.refCleanup;if(e!==null)if(typeof t=="function")try{t()}catch(l){tn(n,a,l)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(l){tn(n,a,l)}else e.current=null}function Gc(n){var a=n.type,e=n.memoizedProps,t=n.stateNode;try{n:switch(a){case"button":case"input":case"select":case"textarea":e.autoFocus&&t.focus();break n;case"img":e.src?t.src=e.src:e.srcSet&&(t.srcset=e.srcSet)}}catch(l){tn(n,n.return,l)}}function hd(n,a,e){try{var t=n.stateNode;xb(t,n.type,e,a),t[Yn]=a}catch(l){tn(n,n.return,l)}}function Xc(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&me(n.type)||n.tag===4}function xd(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Xc(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&me(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wd(n,a,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,a?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(n,a):(a=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.appendChild(n),e=e._reactRootContainer,e!=null||a.onclick!==null||(a.onclick=qa));else if(t!==4&&(t===27&&me(n.type)&&(e=n.stateNode,a=null),n=n.child,n!==null))for(wd(n,a,e),n=n.sibling;n!==null;)wd(n,a,e),n=n.sibling}function bi(n,a,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,a?e.insertBefore(n,a):e.appendChild(n);else if(t!==4&&(t===27&&me(n.type)&&(e=n.stateNode),n=n.child,n!==null))for(bi(n,a,e),n=n.sibling;n!==null;)bi(n,a,e),n=n.sibling}function Qc(n){var a=n.stateNode,e=n.memoizedProps;try{for(var t=n.type,l=a.attributes;l.length;)a.removeAttributeNode(l[0]);qn(a,t,e),a[Mn]=n,a[Yn]=e}catch(i){tn(n,n.return,i)}}var Ya=!1,Tn=!1,kd=!1,Zc=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function Wu(n,a){if(n=n.containerInfo,Yd=Ni,n=sr(n),gs(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var t=e.getSelection&&e.getSelection();if(t&&t.rangeCount!==0){e=t.anchorNode;var l=t.anchorOffset,i=t.focusNode;t=t.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break n}var s=0,d=-1,o=-1,u=0,f=0,x=n,g=null;a:for(;;){for(var m;x!==e||l!==0&&x.nodeType!==3||(d=s+l),x!==i||t!==0&&x.nodeType!==3||(o=s+t),x.nodeType===3&&(s+=x.nodeValue.length),(m=x.firstChild)!==null;)g=x,x=m;for(;;){if(x===n)break a;if(g===e&&++u===l&&(d=s),g===i&&++f===t&&(o=s),(m=x.nextSibling)!==null)break;x=g,g=x.parentNode}x=m}e=d===-1||o===-1?null:{start:d,end:o}}else e=null}e=e||{start:0,end:0}}else e=null;for($d={focusedElem:n,selectionRange:e},Ni=!1,Cn=a;Cn!==null;)if(a=Cn,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,Cn=n;else for(;Cn!==null;){switch(a=Cn,i=a.alternate,n=a.flags,a.tag){case 0:if((n&4)!==0&&(n=a.updateQueue,n=n!==null?n.events:null,n!==null))for(e=0;e<n.length;e++)l=n[e],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&i!==null){n=void 0,e=a,l=i.memoizedProps,i=i.memoizedState,t=e.stateNode;try{var A=He(e.type,l);n=t.getSnapshotBeforeUpdate(A,i),t.__reactInternalSnapshotBeforeUpdate=n}catch(N){tn(e,e.return,N)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,e=n.nodeType,e===9)Qd(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Qd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(b(163))}if(n=a.sibling,n!==null){n.return=a.return,Cn=n;break}Cn=a.return}}function Kc(n,a,e){var t=e.flags;switch(e.tag){case 0:case 11:case 15:Ga(n,e),t&4&&tl(5,e);break;case 1:if(Ga(n,e),t&4)if(n=e.stateNode,a===null)try{n.componentDidMount()}catch(s){tn(e,e.return,s)}else{var l=He(e.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(l,a,n.__reactInternalSnapshotBeforeUpdate)}catch(s){tn(e,e.return,s)}}t&64&&Yc(e),t&512&&ll(e,e.return);break;case 3:if(Ga(n,e),t&64&&(n=e.updateQueue,n!==null)){if(a=null,e.child!==null)switch(e.child.tag){case 27:case 5:a=e.child.stateNode;break;case 1:a=e.child.stateNode}try{qr(n,a)}catch(s){tn(e,e.return,s)}}break;case 27:a===null&&t&4&&Qc(e);case 26:case 5:Ga(n,e),a===null&&t&4&&Gc(e),t&512&&ll(e,e.return);break;case 12:Ga(n,e);break;case 31:Ga(n,e),t&4&&Pc(n,e);break;case 13:Ga(n,e),t&4&&Wc(n,e),t&64&&(n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(e=ob.bind(null,e),Cb(n,e))));break;case 22:if(t=e.memoizedState!==null||Ya,!t){a=a!==null&&a.memoizedState!==null||Tn,l=Ya;var i=Tn;Ya=t,(Tn=a)&&!i?Xa(n,e,(e.subtreeFlags&8772)!==0):Ga(n,e),Ya=l,Tn=i}break;case 30:break;default:Ga(n,e)}}function Jc(n){var a=n.alternate;a!==null&&(n.alternate=null,Jc(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&Pi(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var bn=null,Gn=!1;function $a(n,a,e){for(e=e.child;e!==null;)Ic(n,a,e),e=e.sibling}function Ic(n,a,e){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Ct,e)}catch{}switch(e.tag){case 26:Tn||Ca(e,a),$a(n,a,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Tn||Ca(e,a);var t=bn,l=Gn;me(e.type)&&(bn=e.stateNode,Gn=!1),$a(n,a,e),ul(e.stateNode),bn=t,Gn=l;break;case 5:Tn||Ca(e,a);case 6:if(t=bn,l=Gn,bn=null,$a(n,a,e),bn=t,Gn=l,bn!==null)if(Gn)try{(bn.nodeType===9?bn.body:bn.nodeName==="HTML"?bn.ownerDocument.body:bn).removeChild(e.stateNode)}catch(i){tn(e,a,i)}else try{bn.removeChild(e.stateNode)}catch(i){tn(e,a,i)}break;case 18:bn!==null&&(Gn?(n=bn,Yp(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.stateNode),St(n)):Yp(bn,e.stateNode));break;case 4:t=bn,l=Gn,bn=e.stateNode.containerInfo,Gn=!0,$a(n,a,e),bn=t,Gn=l;break;case 0:case 11:case 14:case 15:re(2,e,a),Tn||re(4,e,a),$a(n,a,e);break;case 1:Tn||(Ca(e,a),t=e.stateNode,typeof t.componentWillUnmount=="function"&&$c(e,a,t)),$a(n,a,e);break;case 21:$a(n,a,e);break;case 22:Tn=(t=Tn)||e.memoizedState!==null,$a(n,a,e),Tn=t;break;default:$a(n,a,e)}}function Pc(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{St(n)}catch(e){tn(a,a.return,e)}}}function Wc(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{St(n)}catch(e){tn(a,a.return,e)}}function nb(n){switch(n.tag){case 31:case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Zc),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Zc),a;default:throw Error(b(435,n.tag))}}function gi(n,a){var e=nb(n);a.forEach(function(t){if(!e.has(t)){e.add(t);var l=rb.bind(null,n,t);t.then(l,l)}})}function Xn(n,a){var e=a.deletions;if(e!==null)for(var t=0;t<e.length;t++){var l=e[t],i=n,s=a,d=s;n:for(;d!==null;){switch(d.tag){case 27:if(me(d.type)){bn=d.stateNode,Gn=!1;break n}break;case 5:bn=d.stateNode,Gn=!1;break n;case 3:case 4:bn=d.stateNode.containerInfo,Gn=!0;break n}d=d.return}if(bn===null)throw Error(b(160));Ic(i,s,l),bn=null,Gn=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)np(a,n),a=a.sibling}var wa=null;function np(n,a){var e=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Xn(a,n),Qn(n),t&4&&(re(3,n,n.return),tl(3,n),re(5,n,n.return));break;case 1:Xn(a,n),Qn(n),t&512&&(Tn||e===null||Ca(e,e.return)),t&64&&Ya&&(n=n.updateQueue,n!==null&&(t=n.callbacks,t!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?t:e.concat(t))));break;case 26:var l=wa;if(Xn(a,n),Qn(n),t&512&&(Tn||e===null||Ca(e,e.return)),t&4){var i=e!==null?e.memoizedState:null;if(t=n.memoizedState,e===null)if(t===null)if(n.stateNode===null){n:{t=n.type,e=n.memoizedProps,l=l.ownerDocument||l;a:switch(t){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Dt]||i[Mn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(t),l.head.insertBefore(i,l.querySelector("head > title"))),qn(i,t,e),i[Mn]=n,An(i),t=i;break n;case"link":var s=nv("link","href",l).get(t+(e.href||""));if(s){for(var d=0;d<s.length;d++)if(i=s[d],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){s.splice(d,1);break a}}i=l.createElement(t),qn(i,t,e),l.head.appendChild(i);break;case"meta":if(s=nv("meta","content",l).get(t+(e.content||""))){for(d=0;d<s.length;d++)if(i=s[d],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){s.splice(d,1);break a}}i=l.createElement(t),qn(i,t,e),l.head.appendChild(i);break;default:throw Error(b(468,t))}i[Mn]=n,An(i),t=i}n.stateNode=t}else av(l,n.type,n.stateNode);else n.stateNode=Wp(l,t,n.memoizedProps);else i!==t?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,t===null?av(l,n.type,n.stateNode):Wp(l,t,n.memoizedProps)):t===null&&n.stateNode!==null&&hd(n,n.memoizedProps,e.memoizedProps)}break;case 27:Xn(a,n),Qn(n),t&512&&(Tn||e===null||Ca(e,e.return)),e!==null&&t&4&&hd(n,n.memoizedProps,e.memoizedProps);break;case 5:if(Xn(a,n),Qn(n),t&512&&(Tn||e===null||Ca(e,e.return)),n.flags&32){l=n.stateNode;try{Ke(l,"")}catch(A){tn(n,n.return,A)}}t&4&&n.stateNode!=null&&(l=n.memoizedProps,hd(n,l,e!==null?e.memoizedProps:l)),t&1024&&(kd=!0);break;case 6:if(Xn(a,n),Qn(n),t&4){if(n.stateNode===null)throw Error(b(162));t=n.memoizedProps,e=n.stateNode;try{e.nodeValue=t}catch(A){tn(n,n.return,A)}}break;case 3:if(Di=null,l=wa,wa=Mi(a.containerInfo),Xn(a,n),wa=l,Qn(n),t&4&&e!==null&&e.memoizedState.isDehydrated)try{St(a.containerInfo)}catch(A){tn(n,n.return,A)}kd&&(kd=!1,ap(n));break;case 4:t=wa,wa=Mi(n.stateNode.containerInfo),Xn(a,n),Qn(n),wa=t;break;case 12:Xn(a,n),Qn(n);break;case 31:Xn(a,n),Qn(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,gi(n,t)));break;case 13:Xn(a,n),Qn(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(fi=In()),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,gi(n,t)));break;case 22:l=n.memoizedState!==null;var o=e!==null&&e.memoizedState!==null,u=Ya,f=Tn;if(Ya=u||l,Tn=f||o,Xn(a,n),Tn=f,Ya=u,Qn(n),t&8192)n:for(a=n.stateNode,a._visibility=l?a._visibility&-2:a._visibility|1,l&&(e===null||o||Ya||Tn||Ue(n)),e=null,a=n;;){if(a.tag===5||a.tag===26){if(e===null){o=e=a;try{if(i=o.stateNode,l)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=o.stateNode;var x=o.memoizedProps.style,g=x!=null&&x.hasOwnProperty("display")?x.display:null;d.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(A){tn(o,o.return,A)}}}else if(a.tag===6){if(e===null){o=a;try{o.stateNode.nodeValue=l?"":o.memoizedProps}catch(A){tn(o,o.return,A)}}}else if(a.tag===18){if(e===null){o=a;try{var m=o.stateNode;l?$p(m,!0):$p(o.stateNode,!1)}catch(A){tn(o,o.return,A)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break n;for(;a.sibling===null;){if(a.return===null||a.return===n)break n;e===a&&(e=null),a=a.return}e===a&&(e=null),a.sibling.return=a.return,a=a.sibling}t&4&&(t=n.updateQueue,t!==null&&(e=t.retryQueue,e!==null&&(t.retryQueue=null,gi(n,e))));break;case 19:Xn(a,n),Qn(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,gi(n,t)));break;case 30:break;case 21:break;default:Xn(a,n),Qn(n)}}function Qn(n){var a=n.flags;if(a&2){try{for(var e,t=n.return;t!==null;){if(Xc(t)){e=t;break}t=t.return}if(e==null)throw Error(b(160));switch(e.tag){case 27:var l=e.stateNode,i=xd(n);bi(n,i,l);break;case 5:var s=e.stateNode;e.flags&32&&(Ke(s,""),e.flags&=-33);var d=xd(n);bi(n,d,s);break;case 3:case 4:var o=e.stateNode.containerInfo,u=xd(n);wd(n,u,o);break;default:throw Error(b(161))}}catch(f){tn(n,n.return,f)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function ap(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;ap(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Ga(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Kc(n,a.alternate,a),a=a.sibling}function Ue(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:re(4,a,a.return),Ue(a);break;case 1:Ca(a,a.return);var e=a.stateNode;typeof e.componentWillUnmount=="function"&&$c(a,a.return,e),Ue(a);break;case 27:ul(a.stateNode);case 26:case 5:Ca(a,a.return),Ue(a);break;case 22:a.memoizedState===null&&Ue(a);break;case 30:Ue(a);break;default:Ue(a)}n=n.sibling}}function Xa(n,a,e){for(e=e&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var t=a.alternate,l=n,i=a,s=i.flags;switch(i.tag){case 0:case 11:case 15:Xa(l,i,e),tl(4,i);break;case 1:if(Xa(l,i,e),t=i,l=t.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(u){tn(t,t.return,u)}if(t=i,l=t.updateQueue,l!==null){var d=t.stateNode;try{var o=l.shared.hiddenCallbacks;if(o!==null)for(l.shared.hiddenCallbacks=null,l=0;l<o.length;l++)Or(o[l],d)}catch(u){tn(t,t.return,u)}}e&&s&64&&Yc(i),ll(i,i.return);break;case 27:Qc(i);case 26:case 5:Xa(l,i,e),e&&t===null&&s&4&&Gc(i),ll(i,i.return);break;case 12:Xa(l,i,e);break;case 31:Xa(l,i,e),e&&s&4&&Pc(l,i);break;case 13:Xa(l,i,e),e&&s&4&&Wc(l,i);break;case 22:i.memoizedState===null&&Xa(l,i,e),ll(i,i.return);break;case 30:break;default:Xa(l,i,e)}a=a.sibling}}function zd(n,a){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&$t(e))}function Td(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&$t(n))}function ka(n,a,e,t){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)ep(n,a,e,t),a=a.sibling}function ep(n,a,e,t){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ka(n,a,e,t),l&2048&&tl(9,a);break;case 1:ka(n,a,e,t);break;case 3:ka(n,a,e,t),l&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&$t(n)));break;case 12:if(l&2048){ka(n,a,e,t),n=a.stateNode;try{var i=a.memoizedProps,s=i.id,d=i.onPostCommit;typeof d=="function"&&d(s,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(o){tn(a,a.return,o)}}else ka(n,a,e,t);break;case 31:ka(n,a,e,t);break;case 13:ka(n,a,e,t);break;case 23:break;case 22:i=a.stateNode,s=a.alternate,a.memoizedState!==null?i._visibility&2?ka(n,a,e,t):il(n,a):i._visibility&2?ka(n,a,e,t):(i._visibility|=2,gt(n,a,e,t,(a.subtreeFlags&10256)!==0||!1)),l&2048&&zd(s,a);break;case 24:ka(n,a,e,t),l&2048&&Td(a.alternate,a);break;default:ka(n,a,e,t)}}function gt(n,a,e,t,l){for(l=l&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=n,s=a,d=e,o=t,u=s.flags;switch(s.tag){case 0:case 11:case 15:gt(i,s,d,o,l),tl(8,s);break;case 23:break;case 22:var f=s.stateNode;s.memoizedState!==null?f._visibility&2?gt(i,s,d,o,l):il(i,s):(f._visibility|=2,gt(i,s,d,o,l)),l&&u&2048&&zd(s.alternate,s);break;case 24:gt(i,s,d,o,l),l&&u&2048&&Td(s.alternate,s);break;default:gt(i,s,d,o,l)}a=a.sibling}}function il(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var e=n,t=a,l=t.flags;switch(t.tag){case 22:il(e,t),l&2048&&zd(t.alternate,t);break;case 24:il(e,t),l&2048&&Td(t.alternate,t);break;default:il(e,t)}a=a.sibling}}var sl=8192;function mt(n,a,e){if(n.subtreeFlags&sl)for(n=n.child;n!==null;)tp(n,a,e),n=n.sibling}function tp(n,a,e){switch(n.tag){case 26:mt(n,a,e),n.flags&sl&&n.memoizedState!==null&&Ub(e,wa,n.memoizedState,n.memoizedProps);break;case 5:mt(n,a,e);break;case 3:case 4:var t=wa;wa=Mi(n.stateNode.containerInfo),mt(n,a,e),wa=t;break;case 22:n.memoizedState===null&&(t=n.alternate,t!==null&&t.memoizedState!==null?(t=sl,sl=16777216,mt(n,a,e),sl=t):mt(n,a,e));break;default:mt(n,a,e)}}function lp(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function dl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var t=a[e];Cn=t,sp(t,n)}lp(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ip(n),n=n.sibling}function ip(n){switch(n.tag){case 0:case 11:case 15:dl(n),n.flags&2048&&re(9,n,n.return);break;case 3:dl(n);break;case 12:dl(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,mi(n)):dl(n);break;default:dl(n)}}function mi(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var t=a[e];Cn=t,sp(t,n)}lp(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:re(8,a,a.return),mi(a);break;case 22:e=a.stateNode,e._visibility&2&&(e._visibility&=-3,mi(a));break;default:mi(a)}n=n.sibling}}function sp(n,a){for(;Cn!==null;){var e=Cn;switch(e.tag){case 0:case 11:case 15:re(8,e,a);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var t=e.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:$t(e.memoizedState.cache)}if(t=e.child,t!==null)t.return=e,Cn=t;else n:for(e=n;Cn!==null;){t=Cn;var l=t.sibling,i=t.return;if(Jc(t),t===e){Cn=null;break n}if(l!==null){l.return=i,Cn=l;break n}Cn=i}}}var ab={getCacheForType:function(n){var a=Dn(wn),e=a.data.get(n);return e===void 0&&(e=n(),a.data.set(n,e)),e},cacheSignal:function(){return Dn(wn).controller.signal}},eb=typeof WeakMap=="function"?WeakMap:Map,nn=0,pn=null,X=null,Z=0,en=0,la=null,ce=!1,ft=!1,Ed=!1,Qa=0,fn=0,pe=0,Fe=0,Sd=0,ia=0,yt=0,ol=null,Zn=null,Ad=!1,fi=0,dp=0,yi=1/0,hi=null,ve=null,En=0,ue=null,ht=null,Za=0,Cd=0,Md=null,op=null,rl=0,Bd=null;function sa(){return(nn&2)!==0&&Z!==0?Z&-Z:y.T!==null?jd():To()}function rp(){if(ia===0)if((Z&536870912)===0||I){var n=Al;Al<<=1,(Al&3932160)===0&&(Al=262144),ia=n}else ia=536870912;return n=ea.current,n!==null&&(n.flags|=32),ia}function Kn(n,a,e){(n===pn&&(en===2||en===9)||n.cancelPendingCommit!==null)&&(xt(n,0),be(n,Z,ia,!1)),Bt(n,e),((nn&2)===0||n!==pn)&&(n===pn&&((nn&2)===0&&(Fe|=e),fn===4&&be(n,Z,ia,!1)),Ma(n))}function cp(n,a,e){if((nn&6)!==0)throw Error(b(327));var t=!e&&(a&127)===0&&(a&n.expiredLanes)===0||Mt(n,a),l=t?ib(n,a):Od(n,a,!0),i=t;do{if(l===0){ft&&!t&&be(n,a,0,!1);break}else{if(e=n.current.alternate,i&&!tb(e)){l=Od(n,a,!1),i=!1;continue}if(l===2){if(i=a,n.errorRecoveryDisabledLanes&i)var s=0;else s=n.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){a=s;n:{var d=n;l=ol;var o=d.current.memoizedState.isDehydrated;if(o&&(xt(d,s).flags|=256),s=Od(d,s,!1),s!==2){if(Ed&&!o){d.errorRecoveryDisabledLanes|=i,Fe|=i,l=4;break n}i=Zn,Zn=l,i!==null&&(Zn===null?Zn=i:Zn.push.apply(Zn,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){xt(n,0),be(n,a,0,!0);break}n:{switch(t=n,i=l,i){case 0:case 1:throw Error(b(345));case 4:if((a&4194048)!==a)break;case 6:be(t,a,ia,!ce);break n;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(b(329))}if((a&62914560)===a&&(l=fi+300-In(),10<l)){if(be(t,a,ia,!ce),Ml(t,0,!0)!==0)break n;Za=a,t.timeoutHandle=Fp(pp.bind(null,t,e,Zn,hi,Ad,a,ia,Fe,yt,ce,i,"Throttled",-0,0),l);break n}pp(t,e,Zn,hi,Ad,a,ia,Fe,yt,ce,i,null,-0,0)}}break}while(!0);Ma(n)}function pp(n,a,e,t,l,i,s,d,o,u,f,x,g,m){if(n.timeoutHandle=-1,x=a.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qa},tp(a,i,x);var A=(i&62914560)===i?fi-In():(i&4194048)===i?dp-In():0;if(A=Fb(x,A),A!==null){Za=i,n.cancelPendingCommit=A(hp.bind(null,n,a,i,e,t,l,s,d,o,f,x,null,g,m)),be(n,i,s,!u);return}}hp(n,a,i,e,t,l,s,d,o)}function tb(n){for(var a=n;;){var e=a.tag;if((e===0||e===11||e===15)&&a.flags&16384&&(e=a.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var t=0;t<e.length;t++){var l=e[t],i=l.getSnapshot;l=l.value;try{if(!na(i(),l))return!1}catch{return!1}}if(e=a.child,a.subtreeFlags&16384&&e!==null)e.return=a,a=e;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function be(n,a,e,t){a&=~Sd,a&=~Fe,n.suspendedLanes|=a,n.pingedLanes&=~a,t&&(n.warmLanes|=a),t=n.expirationTimes;for(var l=a;0<l;){var i=31-Wn(l),s=1<<i;t[i]=-1,l&=~s}e!==0&&wo(n,e,a)}function xi(){return(nn&6)===0?(cl(0),!1):!0}function Dd(){if(X!==null){if(en===0)var n=X.return;else n=X,_a=Oe=null,Qs(n),ct=null,Xt=0,n=X;for(;n!==null;)Vc(n.alternate,n),n=n.return;X=null}}function xt(n,a){var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,zb(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),Za=0,Dd(),pn=n,X=e=Na(n.current,null),Z=a,en=0,la=null,ce=!1,ft=Mt(n,a),Ed=!1,yt=ia=Sd=Fe=pe=fn=0,Zn=ol=null,Ad=!1,(a&8)!==0&&(a|=a&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=a;0<t;){var l=31-Wn(t),i=1<<l;a|=n[l],t&=~i}return Qa=a,Fl(),e}function vp(n,a){F=null,y.H=nl,a===rt||a===Kl?(a=Cr(),en=3):a===Ns?(a=Cr(),en=4):en=a===rd?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,la=a,X===null&&(fn=1,ri(n,pa(a,n.current)))}function up(){var n=ea.current;return n===null?!0:(Z&4194048)===Z?ga===null:(Z&62914560)===Z||(Z&536870912)!==0?n===ga:!1}function bp(){var n=y.H;return y.H=nl,n===null?nl:n}function gp(){var n=y.A;return y.A=ab,n}function wi(){fn=4,ce||(Z&4194048)!==Z&&ea.current!==null||(ft=!0),(pe&134217727)===0&&(Fe&134217727)===0||pn===null||be(pn,Z,ia,!1)}function Od(n,a,e){var t=nn;nn|=2;var l=bp(),i=gp();(pn!==n||Z!==a)&&(hi=null,xt(n,a)),a=!1;var s=fn;n:do try{if(en!==0&&X!==null){var d=X,o=la;switch(en){case 8:Dd(),s=6;break n;case 3:case 2:case 9:case 6:ea.current===null&&(a=!0);var u=en;if(en=0,la=null,wt(n,d,o,u),e&&ft){s=0;break n}break;default:u=en,en=0,la=null,wt(n,d,o,u)}}lb(),s=fn;break}catch(f){vp(n,f)}while(!0);return a&&n.shellSuspendCounter++,_a=Oe=null,nn=t,y.H=l,y.A=i,X===null&&(pn=null,Z=0,Fl()),s}function lb(){for(;X!==null;)mp(X)}function ib(n,a){var e=nn;nn|=2;var t=bp(),l=gp();pn!==n||Z!==a?(hi=null,yi=In()+500,xt(n,a)):ft=Mt(n,a);n:do try{if(en!==0&&X!==null){a=X;var i=la;a:switch(en){case 1:en=0,la=null,wt(n,a,i,1);break;case 2:case 9:if(Sr(i)){en=0,la=null,fp(a);break}a=function(){en!==2&&en!==9||pn!==n||(en=7),Ma(n)},i.then(a,a);break n;case 3:en=7;break n;case 4:en=5;break n;case 7:Sr(i)?(en=0,la=null,fp(a)):(en=0,la=null,wt(n,a,i,7));break;case 5:var s=null;switch(X.tag){case 26:s=X.memoizedState;case 5:case 27:var d=X;if(s?ev(s):d.stateNode.complete){en=0,la=null;var o=d.sibling;if(o!==null)X=o;else{var u=d.return;u!==null?(X=u,ki(u)):X=null}break a}}en=0,la=null,wt(n,a,i,5);break;case 6:en=0,la=null,wt(n,a,i,6);break;case 8:Dd(),fn=6;break n;default:throw Error(b(462))}}sb();break}catch(f){vp(n,f)}while(!0);return _a=Oe=null,y.H=t,y.A=l,nn=e,X!==null?0:(pn=null,Z=0,Fl(),fn)}function sb(){for(;X!==null&&!Mv();)mp(X)}function mp(n){var a=Uc(n.alternate,n,Qa);n.memoizedProps=n.pendingProps,a===null?ki(n):X=a}function fp(n){var a=n,e=a.alternate;switch(a.tag){case 15:case 0:a=Lc(e,a,a.pendingProps,a.type,void 0,Z);break;case 11:a=Lc(e,a,a.pendingProps,a.type.render,a.ref,Z);break;case 5:Qs(a);default:Vc(e,a),a=X=gr(a,Qa),a=Uc(e,a,Qa)}n.memoizedProps=n.pendingProps,a===null?ki(n):X=a}function wt(n,a,e,t){_a=Oe=null,Qs(a),ct=null,Xt=0;var l=a.return;try{if(Zu(n,l,a,e,Z)){fn=1,ri(n,pa(e,n.current)),X=null;return}}catch(i){if(l!==null)throw X=l,i;fn=1,ri(n,pa(e,n.current)),X=null;return}a.flags&32768?(I||t===1?n=!0:ft||(Z&536870912)!==0?n=!1:(ce=n=!0,(t===2||t===9||t===3||t===6)&&(t=ea.current,t!==null&&t.tag===13&&(t.flags|=16384))),yp(a,n)):ki(a)}function ki(n){var a=n;do{if((a.flags&32768)!==0){yp(a,ce);return}n=a.return;var e=Iu(a.alternate,a,Qa);if(e!==null){X=e;return}if(a=a.sibling,a!==null){X=a;return}X=a=n}while(a!==null);fn===0&&(fn=5)}function yp(n,a){do{var e=Pu(n.alternate,n);if(e!==null){e.flags&=32767,X=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!a&&(n=n.sibling,n!==null)){X=n;return}X=n=e}while(n!==null);fn=6,X=null}function hp(n,a,e,t,l,i,s,d,o){n.cancelPendingCommit=null;do zi();while(En!==0);if((nn&6)!==0)throw Error(b(327));if(a!==null){if(a===n.current)throw Error(b(177));if(i=a.lanes|a.childLanes,i|=xs,Hv(n,e,i,s,d,o),n===pn&&(X=pn=null,Z=0),ht=a,ue=n,Za=e,Cd=i,Md=l,op=t,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,cb(El,function(){return Tp(),null})):(n.callbackNode=null,n.callbackPriority=0),t=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||t){t=y.T,y.T=null,l=T.p,T.p=2,s=nn,nn|=4;try{Wu(n,a,e)}finally{nn=s,T.p=l,y.T=t}}En=1,xp(),wp(),kp()}}function xp(){if(En===1){En=0;var n=ue,a=ht,e=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||e){e=y.T,y.T=null;var t=T.p;T.p=2;var l=nn;nn|=4;try{np(a,n);var i=$d,s=sr(n.containerInfo),d=i.focusedElem,o=i.selectionRange;if(s!==d&&d&&d.ownerDocument&&ir(d.ownerDocument.documentElement,d)){if(o!==null&&gs(d)){var u=o.start,f=o.end;if(f===void 0&&(f=u),"selectionStart"in d)d.selectionStart=u,d.selectionEnd=Math.min(f,d.value.length);else{var x=d.ownerDocument||document,g=x&&x.defaultView||window;if(g.getSelection){var m=g.getSelection(),A=d.textContent.length,N=Math.min(o.start,A),on=o.end===void 0?N:Math.min(o.end,A);!m.extend&&N>on&&(s=on,on=N,N=s);var p=lr(d,N),r=lr(d,on);if(p&&r&&(m.rangeCount!==1||m.anchorNode!==p.node||m.anchorOffset!==p.offset||m.focusNode!==r.node||m.focusOffset!==r.offset)){var v=x.createRange();v.setStart(p.node,p.offset),m.removeAllRanges(),N>on?(m.addRange(v),m.extend(r.node,r.offset)):(v.setEnd(r.node,r.offset),m.addRange(v))}}}}for(x=[],m=d;m=m.parentNode;)m.nodeType===1&&x.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<x.length;d++){var h=x[d];h.element.scrollLeft=h.left,h.element.scrollTop=h.top}}Ni=!!Yd,$d=Yd=null}finally{nn=l,T.p=t,y.T=e}}n.current=a,En=2}}function wp(){if(En===2){En=0;var n=ue,a=ht,e=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||e){e=y.T,y.T=null;var t=T.p;T.p=2;var l=nn;nn|=4;try{Kc(n,a.alternate,a)}finally{nn=l,T.p=t,y.T=e}}En=3}}function kp(){if(En===4||En===3){En=0,Bv();var n=ue,a=ht,e=Za,t=op;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?En=5:(En=0,ht=ue=null,zp(n,n.pendingLanes));var l=n.pendingLanes;if(l===0&&(ve=null),Ji(e),a=a.stateNode,Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Ct,a,void 0,(a.current.flags&128)===128)}catch{}if(t!==null){a=y.T,l=T.p,T.p=2,y.T=null;try{for(var i=n.onRecoverableError,s=0;s<t.length;s++){var d=t[s];i(d.value,{componentStack:d.stack})}}finally{y.T=a,T.p=l}}(Za&3)!==0&&zi(),Ma(n),l=n.pendingLanes,(e&261930)!==0&&(l&42)!==0?n===Bd?rl++:(rl=0,Bd=n):rl=0,cl(0)}}function zp(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,$t(a)))}function zi(){return xp(),wp(),kp(),Tp()}function Tp(){if(En!==5)return!1;var n=ue,a=Cd;Cd=0;var e=Ji(Za),t=y.T,l=T.p;try{T.p=32>e?32:e,y.T=null,e=Md,Md=null;var i=ue,s=Za;if(En=0,ht=ue=null,Za=0,(nn&6)!==0)throw Error(b(331));var d=nn;if(nn|=4,ip(i.current),ep(i,i.current,s,e),nn=d,cl(0,!1),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Ct,i)}catch{}return!0}finally{T.p=l,y.T=t,zp(n,a)}}function Ep(n,a,e){a=pa(e,a),a=od(n.stateNode,a,2),n=se(n,a,2),n!==null&&(Bt(n,2),Ma(n))}function tn(n,a,e){if(n.tag===3)Ep(n,n,e);else for(;a!==null;){if(a.tag===3){Ep(a,n,e);break}else if(a.tag===1){var t=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(ve===null||!ve.has(t))){n=pa(e,n),e=Sc(2),t=se(a,e,2),t!==null&&(Ac(e,t,a,n),Bt(t,2),Ma(t));break}}a=a.return}}function qd(n,a,e){var t=n.pingCache;if(t===null){t=n.pingCache=new eb;var l=new Set;t.set(a,l)}else l=t.get(a),l===void 0&&(l=new Set,t.set(a,l));l.has(e)||(Ed=!0,l.add(e),n=db.bind(null,n,a,e),a.then(n,n))}function db(n,a,e){var t=n.pingCache;t!==null&&t.delete(a),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,pn===n&&(Z&e)===e&&(fn===4||fn===3&&(Z&62914560)===Z&&300>In()-fi?(nn&2)===0&&xt(n,0):Sd|=e,yt===Z&&(yt=0)),Ma(n)}function Sp(n,a){a===0&&(a=xo()),n=Me(n,a),n!==null&&(Bt(n,a),Ma(n))}function ob(n){var a=n.memoizedState,e=0;a!==null&&(e=a.retryLane),Sp(n,e)}function rb(n,a){var e=0;switch(n.tag){case 31:case 13:var t=n.stateNode,l=n.memoizedState;l!==null&&(e=l.retryLane);break;case 19:t=n.stateNode;break;case 22:t=n.stateNode._retryCache;break;default:throw Error(b(314))}t!==null&&t.delete(a),Sp(n,e)}function cb(n,a){return Xi(n,a)}var Ti=null,kt=null,Ld=!1,Ei=!1,Nd=!1,ge=0;function Ma(n){n!==kt&&n.next===null&&(kt===null?Ti=kt=n:kt=kt.next=n),Ei=!0,Ld||(Ld=!0,vb())}function cl(n,a){if(!Nd&&Ei){Nd=!0;do for(var e=!1,t=Ti;t!==null;){if(n!==0){var l=t.pendingLanes;if(l===0)var i=0;else{var s=t.suspendedLanes,d=t.pingedLanes;i=(1<<31-Wn(42|n)+1)-1,i&=l&~(s&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,Bp(t,i))}else i=Z,i=Ml(t,t===pn?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(i&3)===0||Mt(t,i)||(e=!0,Bp(t,i));t=t.next}while(e);Nd=!1}}function pb(){Ap()}function Ap(){Ei=Ld=!1;var n=0;ge!==0&&kb()&&(n=ge);for(var a=In(),e=null,t=Ti;t!==null;){var l=t.next,i=Cp(t,a);i===0?(t.next=null,e===null?Ti=l:e.next=l,l===null&&(kt=e)):(e=t,(n!==0||(i&3)!==0)&&(Ei=!0)),t=l}En!==0&&En!==5||cl(n),ge!==0&&(ge=0)}function Cp(n,a){for(var e=n.suspendedLanes,t=n.pingedLanes,l=n.expirationTimes,i=n.pendingLanes&-62914561;0<i;){var s=31-Wn(i),d=1<<s,o=l[s];o===-1?((d&e)===0||(d&t)!==0)&&(l[s]=Rv(d,a)):o<=a&&(n.expiredLanes|=d),i&=~d}if(a=pn,e=Z,e=Ml(n,n===a?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t=n.callbackNode,e===0||n===a&&(en===2||en===9)||n.cancelPendingCommit!==null)return t!==null&&t!==null&&Qi(t),n.callbackNode=null,n.callbackPriority=0;if((e&3)===0||Mt(n,e)){if(a=e&-e,a===n.callbackPriority)return a;switch(t!==null&&Qi(t),Ji(e)){case 2:case 8:e=yo;break;case 32:e=El;break;case 268435456:e=ho;break;default:e=El}return t=Mp.bind(null,n),e=Xi(e,t),n.callbackPriority=a,n.callbackNode=e,a}return t!==null&&t!==null&&Qi(t),n.callbackPriority=2,n.callbackNode=null,2}function Mp(n,a){if(En!==0&&En!==5)return n.callbackNode=null,n.callbackPriority=0,null;var e=n.callbackNode;if(zi()&&n.callbackNode!==e)return null;var t=Z;return t=Ml(n,n===pn?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t===0?null:(cp(n,t,a),Cp(n,In()),n.callbackNode!=null&&n.callbackNode===e?Mp.bind(null,n):null)}function Bp(n,a){if(zi())return null;cp(n,a,!0)}function vb(){Tb(function(){(nn&6)!==0?Xi(fo,pb):Ap()})}function jd(){if(ge===0){var n=dt;n===0&&(n=Sl,Sl<<=1,(Sl&261888)===0&&(Sl=256)),ge=n}return ge}function Dp(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:ql(""+n)}function Op(n,a){var e=a.ownerDocument.createElement("input");return e.name=a.name,e.value=a.value,n.id&&e.setAttribute("form",n.id),a.parentNode.insertBefore(e,a),n=new FormData(n),e.parentNode.removeChild(e),n}function ub(n,a,e,t,l){if(a==="submit"&&e&&e.stateNode===l){var i=Dp((l[Yn]||null).action),s=t.submitter;s&&(a=(a=s[Yn]||null)?Dp(a.formAction):s.getAttribute("formAction"),a!==null&&(i=a,s=null));var d=new _l("action","action",null,t,l);n.push({event:d,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(ge!==0){var o=s?Op(l,s):new FormData(l);ed(e,{pending:!0,data:o,method:l.method,action:i},null,o)}}else typeof i=="function"&&(d.preventDefault(),o=s?Op(l,s):new FormData(l),ed(e,{pending:!0,data:o,method:l.method,action:i},i,o))},currentTarget:l}]})}}for(var _d=0;_d<hs.length;_d++){var Rd=hs[_d],bb=Rd.toLowerCase(),gb=Rd[0].toUpperCase()+Rd.slice(1);xa(bb,"on"+gb)}xa(rr,"onAnimationEnd"),xa(cr,"onAnimationIteration"),xa(pr,"onAnimationStart"),xa("dblclick","onDoubleClick"),xa("focusin","onFocus"),xa("focusout","onBlur"),xa(Du,"onTransitionRun"),xa(Ou,"onTransitionStart"),xa(qu,"onTransitionCancel"),xa(vr,"onTransitionEnd"),Qe("onMouseEnter",["mouseout","mouseover"]),Qe("onMouseLeave",["mouseout","mouseover"]),Qe("onPointerEnter",["pointerout","pointerover"]),Qe("onPointerLeave",["pointerout","pointerover"]),Ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pl));function qp(n,a){a=(a&4)!==0;for(var e=0;e<n.length;e++){var t=n[e],l=t.event;t=t.listeners;n:{var i=void 0;if(a)for(var s=t.length-1;0<=s;s--){var d=t[s],o=d.instance,u=d.currentTarget;if(d=d.listener,o!==i&&l.isPropagationStopped())break n;i=d,l.currentTarget=u;try{i(l)}catch(f){Ul(f)}l.currentTarget=null,i=o}else for(s=0;s<t.length;s++){if(d=t[s],o=d.instance,u=d.currentTarget,d=d.listener,o!==i&&l.isPropagationStopped())break n;i=d,l.currentTarget=u;try{i(l)}catch(f){Ul(f)}l.currentTarget=null,i=o}}}}function Q(n,a){var e=a[Ii];e===void 0&&(e=a[Ii]=new Set);var t=n+"__bubble";e.has(t)||(Lp(a,n,2,!1),e.add(t))}function Hd(n,a,e){var t=0;a&&(t|=4),Lp(e,n,t,a)}var Si="_reactListening"+Math.random().toString(36).slice(2);function Ud(n){if(!n[Si]){n[Si]=!0,Ao.forEach(function(e){e!=="selectionchange"&&(mb.has(e)||Hd(e,!1,n),Hd(e,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Si]||(a[Si]=!0,Hd("selectionchange",!1,a))}}function Lp(n,a,e,t){switch(rv(a)){case 2:var l=$b;break;case 8:l=Gb;break;default:l=ao}e=l.bind(null,a,e,n),l=void 0,!ss||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(l=!0),t?l!==void 0?n.addEventListener(a,e,{capture:!0,passive:l}):n.addEventListener(a,e,!0):l!==void 0?n.addEventListener(a,e,{passive:l}):n.addEventListener(a,e,!1)}function Fd(n,a,e,t,l){var i=t;if((a&1)===0&&(a&2)===0&&t!==null)n:for(;;){if(t===null)return;var s=t.tag;if(s===3||s===4){var d=t.stateNode.containerInfo;if(d===l)break;if(s===4)for(s=t.return;s!==null;){var o=s.tag;if((o===3||o===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;d!==null;){if(s=$e(d),s===null)return;if(o=s.tag,o===5||o===6||o===26||o===27){t=i=s;continue n}d=d.parentNode}}t=t.return}Ho(function(){var u=i,f=ls(e),x=[];n:{var g=ur.get(n);if(g!==void 0){var m=_l,A=n;switch(n){case"keypress":if(Nl(e)===0)break n;case"keydown":case"keyup":m=ru;break;case"focusin":A="focus",m=cs;break;case"focusout":A="blur",m=cs;break;case"beforeblur":case"afterblur":m=cs;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=vu;break;case rr:case cr:case pr:m=nu;break;case vr:m=bu;break;case"scroll":case"scrollend":m=Kv;break;case"wheel":m=mu;break;case"copy":case"cut":case"paste":m=eu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=$o;break;case"toggle":case"beforetoggle":m=yu}var N=(a&4)!==0,on=!N&&(n==="scroll"||n==="scrollend"),p=N?g!==null?g+"Capture":null:g;N=[];for(var r=u,v;r!==null;){var h=r;if(v=h.stateNode,h=h.tag,h!==5&&h!==26&&h!==27||v===null||p===null||(h=qt(r,p),h!=null&&N.push(vl(r,h,v))),on)break;r=r.return}0<N.length&&(g=new m(g,A,null,e,f),x.push({event:g,listeners:N}))}}if((a&7)===0){n:{if(g=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",g&&e!==ts&&(A=e.relatedTarget||e.fromElement)&&($e(A)||A[Ye]))break n;if((m||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,m?(A=e.relatedTarget||e.toElement,m=u,A=A?$e(A):null,A!==null&&(on=R(A),N=A.tag,A!==on||N!==5&&N!==27&&N!==6)&&(A=null)):(m=null,A=u),m!==A)){if(N=Vo,h="onMouseLeave",p="onMouseEnter",r="mouse",(n==="pointerout"||n==="pointerover")&&(N=$o,h="onPointerLeave",p="onPointerEnter",r="pointer"),on=m==null?g:Ot(m),v=A==null?g:Ot(A),g=new N(h,r+"leave",m,e,f),g.target=on,g.relatedTarget=v,h=null,$e(f)===u&&(N=new N(p,r+"enter",A,e,f),N.target=v,N.relatedTarget=on,h=N),on=h,m&&A)a:{for(N=fb,p=m,r=A,v=0,h=p;h;h=N(h))v++;h=0;for(var L=r;L;L=N(L))h++;for(;0<v-h;)p=N(p),v--;for(;0<h-v;)r=N(r),h--;for(;v--;){if(p===r||r!==null&&p===r.alternate){N=p;break a}p=N(p),r=N(r)}N=null}else N=null;m!==null&&Np(x,g,m,N,!1),A!==null&&on!==null&&Np(x,on,A,N,!0)}}n:{if(g=u?Ot(u):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var P=Po;else if(Jo(g))if(Wo)P=Cu;else{P=Su;var M=Eu}else m=g.nodeName,!m||m.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?u&&es(u.elementType)&&(P=Po):P=Au;if(P&&(P=P(n,u))){Io(x,P,e,f);break n}M&&M(n,g,u),n==="focusout"&&u&&g.type==="number"&&u.memoizedProps.value!=null&&as(g,"number",g.value)}switch(M=u?Ot(u):window,n){case"focusin":(Jo(M)||M.contentEditable==="true")&&(We=M,ms=u,Ft=null);break;case"focusout":Ft=ms=We=null;break;case"mousedown":fs=!0;break;case"contextmenu":case"mouseup":case"dragend":fs=!1,dr(x,e,f);break;case"selectionchange":if(Bu)break;case"keydown":case"keyup":dr(x,e,f)}var V;if(vs)n:{switch(n){case"compositionstart":var K="onCompositionStart";break n;case"compositionend":K="onCompositionEnd";break n;case"compositionupdate":K="onCompositionUpdate";break n}K=void 0}else Pe?Zo(n,e)&&(K="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(K="onCompositionStart");K&&(Go&&e.locale!=="ko"&&(Pe||K!=="onCompositionStart"?K==="onCompositionEnd"&&Pe&&(V=Uo()):(Wa=f,ds="value"in Wa?Wa.value:Wa.textContent,Pe=!0)),M=Ai(u,K),0<M.length&&(K=new Yo(K,n,null,e,f),x.push({event:K,listeners:M}),V?K.data=V:(V=Ko(e),V!==null&&(K.data=V)))),(V=xu?wu(n,e):ku(n,e))&&(K=Ai(u,"onBeforeInput"),0<K.length&&(M=new Yo("onBeforeInput","beforeinput",null,e,f),x.push({event:M,listeners:K}),M.data=V)),ub(x,n,u,e,f)}qp(x,a)})}function vl(n,a,e){return{instance:n,listener:a,currentTarget:e}}function Ai(n,a){for(var e=a+"Capture",t=[];n!==null;){var l=n,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=qt(n,e),l!=null&&t.unshift(vl(n,l,i)),l=qt(n,a),l!=null&&t.push(vl(n,l,i))),n.tag===3)return t;n=n.return}return[]}function fb(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Np(n,a,e,t,l){for(var i=a._reactName,s=[];e!==null&&e!==t;){var d=e,o=d.alternate,u=d.stateNode;if(d=d.tag,o!==null&&o===t)break;d!==5&&d!==26&&d!==27||u===null||(o=u,l?(u=qt(e,i),u!=null&&s.unshift(vl(e,u,o))):l||(u=qt(e,i),u!=null&&s.push(vl(e,u,o)))),e=e.return}s.length!==0&&n.push({event:a,listeners:s})}var yb=/\r\n?/g,hb=/\u0000|\uFFFD/g;function jp(n){return(typeof n=="string"?n:""+n).replace(yb,`
`).replace(hb,"")}function _p(n,a){return a=jp(a),jp(n)===a}function dn(n,a,e,t,l,i){switch(e){case"children":typeof t=="string"?a==="body"||a==="textarea"&&t===""||Ke(n,t):(typeof t=="number"||typeof t=="bigint")&&a!=="body"&&Ke(n,""+t);break;case"className":Dl(n,"class",t);break;case"tabIndex":Dl(n,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Dl(n,e,t);break;case"style":_o(n,t,i);break;case"data":if(a!=="object"){Dl(n,"data",t);break}case"src":case"href":if(t===""&&(a!=="a"||e!=="href")){n.removeAttribute(e);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(e);break}t=ql(""+t),n.setAttribute(e,t);break;case"action":case"formAction":if(typeof t=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(a!=="input"&&dn(n,a,"name",l.name,l,null),dn(n,a,"formEncType",l.formEncType,l,null),dn(n,a,"formMethod",l.formMethod,l,null),dn(n,a,"formTarget",l.formTarget,l,null)):(dn(n,a,"encType",l.encType,l,null),dn(n,a,"method",l.method,l,null),dn(n,a,"target",l.target,l,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(e);break}t=ql(""+t),n.setAttribute(e,t);break;case"onClick":t!=null&&(n.onclick=qa);break;case"onScroll":t!=null&&Q("scroll",n);break;case"onScrollEnd":t!=null&&Q("scrollend",n);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(b(61));if(e=t.__html,e!=null){if(l.children!=null)throw Error(b(60));n.innerHTML=e}}break;case"multiple":n.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":n.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){n.removeAttribute("xlink:href");break}e=ql(""+t),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,""+t):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":t===!0?n.setAttribute(e,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,t):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?n.setAttribute(e,t):n.removeAttribute(e);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?n.removeAttribute(e):n.setAttribute(e,t);break;case"popover":Q("beforetoggle",n),Q("toggle",n),Bl(n,"popover",t);break;case"xlinkActuate":Oa(n,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Oa(n,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Oa(n,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Oa(n,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Oa(n,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Oa(n,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Oa(n,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Oa(n,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Oa(n,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Bl(n,"is",t);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Qv.get(e)||e,Bl(n,e,t))}}function Vd(n,a,e,t,l,i){switch(e){case"style":_o(n,t,i);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(b(61));if(e=t.__html,e!=null){if(l.children!=null)throw Error(b(60));n.innerHTML=e}}break;case"children":typeof t=="string"?Ke(n,t):(typeof t=="number"||typeof t=="bigint")&&Ke(n,""+t);break;case"onScroll":t!=null&&Q("scroll",n);break;case"onScrollEnd":t!=null&&Q("scrollend",n);break;case"onClick":t!=null&&(n.onclick=qa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Co.hasOwnProperty(e))n:{if(e[0]==="o"&&e[1]==="n"&&(l=e.endsWith("Capture"),a=e.slice(2,l?e.length-7:void 0),i=n[Yn]||null,i=i!=null?i[e]:null,typeof i=="function"&&n.removeEventListener(a,i,l),typeof t=="function")){typeof i!="function"&&i!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(a,t,l);break n}e in n?n[e]=t:t===!0?n.setAttribute(e,""):Bl(n,e,t)}}}function qn(n,a,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",n),Q("load",n);var t=!1,l=!1,i;for(i in e)if(e.hasOwnProperty(i)){var s=e[i];if(s!=null)switch(i){case"src":t=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(b(137,a));default:dn(n,a,i,s,e,null)}}l&&dn(n,a,"srcSet",e.srcSet,e,null),t&&dn(n,a,"src",e.src,e,null);return;case"input":Q("invalid",n);var d=i=s=l=null,o=null,u=null;for(t in e)if(e.hasOwnProperty(t)){var f=e[t];if(f!=null)switch(t){case"name":l=f;break;case"type":s=f;break;case"checked":o=f;break;case"defaultChecked":u=f;break;case"value":i=f;break;case"defaultValue":d=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(b(137,a));break;default:dn(n,a,t,f,e,null)}}qo(n,i,d,o,u,s,l,!1);return;case"select":Q("invalid",n),t=s=i=null;for(l in e)if(e.hasOwnProperty(l)&&(d=e[l],d!=null))switch(l){case"value":i=d;break;case"defaultValue":s=d;break;case"multiple":t=d;default:dn(n,a,l,d,e,null)}a=i,e=s,n.multiple=!!t,a!=null?Ze(n,!!t,a,!1):e!=null&&Ze(n,!!t,e,!0);return;case"textarea":Q("invalid",n),i=l=t=null;for(s in e)if(e.hasOwnProperty(s)&&(d=e[s],d!=null))switch(s){case"value":t=d;break;case"defaultValue":l=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(b(91));break;default:dn(n,a,s,d,e,null)}No(n,t,l,i);return;case"option":for(o in e)e.hasOwnProperty(o)&&(t=e[o],t!=null)&&(o==="selected"?n.selected=t&&typeof t!="function"&&typeof t!="symbol":dn(n,a,o,t,e,null));return;case"dialog":Q("beforetoggle",n),Q("toggle",n),Q("cancel",n),Q("close",n);break;case"iframe":case"object":Q("load",n);break;case"video":case"audio":for(t=0;t<pl.length;t++)Q(pl[t],n);break;case"image":Q("error",n),Q("load",n);break;case"details":Q("toggle",n);break;case"embed":case"source":case"link":Q("error",n),Q("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in e)if(e.hasOwnProperty(u)&&(t=e[u],t!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(b(137,a));default:dn(n,a,u,t,e,null)}return;default:if(es(a)){for(f in e)e.hasOwnProperty(f)&&(t=e[f],t!==void 0&&Vd(n,a,f,t,e,void 0));return}}for(d in e)e.hasOwnProperty(d)&&(t=e[d],t!=null&&dn(n,a,d,t,e,null))}function xb(n,a,e,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,d=null,o=null,u=null,f=null;for(m in e){var x=e[m];if(e.hasOwnProperty(m)&&x!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":o=x;default:t.hasOwnProperty(m)||dn(n,a,m,null,t,x)}}for(var g in t){var m=t[g];if(x=e[g],t.hasOwnProperty(g)&&(m!=null||x!=null))switch(g){case"type":i=m;break;case"name":l=m;break;case"checked":u=m;break;case"defaultChecked":f=m;break;case"value":s=m;break;case"defaultValue":d=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(b(137,a));break;default:m!==x&&dn(n,a,g,m,t,x)}}ns(n,s,d,o,u,f,i,l);return;case"select":m=s=d=g=null;for(i in e)if(o=e[i],e.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":m=o;default:t.hasOwnProperty(i)||dn(n,a,i,null,t,o)}for(l in t)if(i=t[l],o=e[l],t.hasOwnProperty(l)&&(i!=null||o!=null))switch(l){case"value":g=i;break;case"defaultValue":d=i;break;case"multiple":s=i;default:i!==o&&dn(n,a,l,i,t,o)}a=d,e=s,t=m,g!=null?Ze(n,!!e,g,!1):!!t!=!!e&&(a!=null?Ze(n,!!e,a,!0):Ze(n,!!e,e?[]:"",!1));return;case"textarea":m=g=null;for(d in e)if(l=e[d],e.hasOwnProperty(d)&&l!=null&&!t.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:dn(n,a,d,null,t,l)}for(s in t)if(l=t[s],i=e[s],t.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":g=l;break;case"defaultValue":m=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(b(91));break;default:l!==i&&dn(n,a,s,l,t,i)}Lo(n,g,m);return;case"option":for(var A in e)g=e[A],e.hasOwnProperty(A)&&g!=null&&!t.hasOwnProperty(A)&&(A==="selected"?n.selected=!1:dn(n,a,A,null,t,g));for(o in t)g=t[o],m=e[o],t.hasOwnProperty(o)&&g!==m&&(g!=null||m!=null)&&(o==="selected"?n.selected=g&&typeof g!="function"&&typeof g!="symbol":dn(n,a,o,g,t,m));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in e)g=e[N],e.hasOwnProperty(N)&&g!=null&&!t.hasOwnProperty(N)&&dn(n,a,N,null,t,g);for(u in t)if(g=t[u],m=e[u],t.hasOwnProperty(u)&&g!==m&&(g!=null||m!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(b(137,a));break;default:dn(n,a,u,g,t,m)}return;default:if(es(a)){for(var on in e)g=e[on],e.hasOwnProperty(on)&&g!==void 0&&!t.hasOwnProperty(on)&&Vd(n,a,on,void 0,t,g);for(f in t)g=t[f],m=e[f],!t.hasOwnProperty(f)||g===m||g===void 0&&m===void 0||Vd(n,a,f,g,t,m);return}}for(var p in e)g=e[p],e.hasOwnProperty(p)&&g!=null&&!t.hasOwnProperty(p)&&dn(n,a,p,null,t,g);for(x in t)g=t[x],m=e[x],!t.hasOwnProperty(x)||g===m||g==null&&m==null||dn(n,a,x,g,t,m)}function Rp(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wb(){if(typeof performance.getEntriesByType=="function"){for(var n=0,a=0,e=performance.getEntriesByType("resource"),t=0;t<e.length;t++){var l=e[t],i=l.transferSize,s=l.initiatorType,d=l.duration;if(i&&d&&Rp(s)){for(s=0,d=l.responseEnd,t+=1;t<e.length;t++){var o=e[t],u=o.startTime;if(u>d)break;var f=o.transferSize,x=o.initiatorType;f&&Rp(x)&&(o=o.responseEnd,s+=f*(o<d?1:(d-u)/(o-u)))}if(--t,a+=8*(i+s)/(l.duration/1e3),n++,10<n)break}}if(0<n)return a/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Yd=null,$d=null;function Ci(n){return n.nodeType===9?n:n.ownerDocument}function Hp(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Up(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function Gd(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Xd=null;function kb(){var n=window.event;return n&&n.type==="popstate"?n===Xd?!1:(Xd=n,!0):(Xd=null,!1)}var Fp=typeof setTimeout=="function"?setTimeout:void 0,zb=typeof clearTimeout=="function"?clearTimeout:void 0,Vp=typeof Promise=="function"?Promise:void 0,Tb=typeof queueMicrotask=="function"?queueMicrotask:typeof Vp<"u"?function(n){return Vp.resolve(null).then(n).catch(Eb)}:Fp;function Eb(n){setTimeout(function(){throw n})}function me(n){return n==="head"}function Yp(n,a){var e=a,t=0;do{var l=e.nextSibling;if(n.removeChild(e),l&&l.nodeType===8)if(e=l.data,e==="/$"||e==="/&"){if(t===0){n.removeChild(l),St(a);return}t--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")t++;else if(e==="html")ul(n.ownerDocument.documentElement);else if(e==="head"){e=n.ownerDocument.head,ul(e);for(var i=e.firstChild;i;){var s=i.nextSibling,d=i.nodeName;i[Dt]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=s}}else e==="body"&&ul(n.ownerDocument.body);e=l}while(e);St(a)}function $p(n,a){var e=n;n=0;do{var t=e.nextSibling;if(e.nodeType===1?a?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(a?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),t&&t.nodeType===8)if(e=t.data,e==="/$"){if(n===0)break;n--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||n++;e=t}while(e)}function Qd(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var e=a;switch(a=a.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Qd(e),Pi(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function Sb(n,a,e,t){for(;n.nodeType===1;){var l=e;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!t&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(t){if(!n[Dt])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(i=n.getAttribute("rel"),i==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(i!==l.rel||n.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||n.getAttribute("title")!==(l.title==null?null:l.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(i=n.getAttribute("src"),(i!==(l.src==null?null:l.src)||n.getAttribute("type")!==(l.type==null?null:l.type)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&n.getAttribute("name")===i)return n}else return n;if(n=ma(n.nextSibling),n===null)break}return null}function Ab(n,a,e){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=ma(n.nextSibling),n===null))return null;return n}function Gp(n,a){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=ma(n.nextSibling),n===null))return null;return n}function Zd(n){return n.data==="$?"||n.data==="$~"}function Kd(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function Cb(n,a){var e=n.ownerDocument;if(n.data==="$~")n._reactRetry=a;else if(n.data!=="$?"||e.readyState!=="loading")a();else{var t=function(){a(),e.removeEventListener("DOMContentLoaded",t)};e.addEventListener("DOMContentLoaded",t),n._reactRetry=t}}function ma(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return n}var Jd=null;function Xp(n){n=n.nextSibling;for(var a=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"||e==="/&"){if(a===0)return ma(n.nextSibling);a--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||a++}n=n.nextSibling}return null}function Qp(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(a===0)return n;a--}else e!=="/$"&&e!=="/&"||a++}n=n.previousSibling}return null}function Zp(n,a,e){switch(a=Ci(e),n){case"html":if(n=a.documentElement,!n)throw Error(b(452));return n;case"head":if(n=a.head,!n)throw Error(b(453));return n;case"body":if(n=a.body,!n)throw Error(b(454));return n;default:throw Error(b(451))}}function ul(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Pi(n)}var fa=new Map,Kp=new Set;function Mi(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ka=T.d;T.d={f:Mb,r:Bb,D:Db,C:Ob,L:qb,m:Lb,X:jb,S:Nb,M:_b};function Mb(){var n=Ka.f(),a=xi();return n||a}function Bb(n){var a=Ge(n);a!==null&&a.tag===5&&a.type==="form"?vc(a):Ka.r(n)}var zt=typeof document>"u"?null:document;function Jp(n,a,e){var t=zt;if(t&&typeof a=="string"&&a){var l=ra(a);l='link[rel="'+n+'"][href="'+l+'"]',typeof e=="string"&&(l+='[crossorigin="'+e+'"]'),Kp.has(l)||(Kp.add(l),n={rel:n,crossOrigin:e,href:a},t.querySelector(l)===null&&(a=t.createElement("link"),qn(a,"link",n),An(a),t.head.appendChild(a)))}}function Db(n){Ka.D(n),Jp("dns-prefetch",n,null)}function Ob(n,a){Ka.C(n,a),Jp("preconnect",n,a)}function qb(n,a,e){Ka.L(n,a,e);var t=zt;if(t&&n&&a){var l='link[rel="preload"][as="'+ra(a)+'"]';a==="image"&&e&&e.imageSrcSet?(l+='[imagesrcset="'+ra(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(l+='[imagesizes="'+ra(e.imageSizes)+'"]')):l+='[href="'+ra(n)+'"]';var i=l;switch(a){case"style":i=Tt(n);break;case"script":i=Et(n)}fa.has(i)||(n=D({rel:"preload",href:a==="image"&&e&&e.imageSrcSet?void 0:n,as:a},e),fa.set(i,n),t.querySelector(l)!==null||a==="style"&&t.querySelector(bl(i))||a==="script"&&t.querySelector(gl(i))||(a=t.createElement("link"),qn(a,"link",n),An(a),t.head.appendChild(a)))}}function Lb(n,a){Ka.m(n,a);var e=zt;if(e&&n){var t=a&&typeof a.as=="string"?a.as:"script",l='link[rel="modulepreload"][as="'+ra(t)+'"][href="'+ra(n)+'"]',i=l;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Et(n)}if(!fa.has(i)&&(n=D({rel:"modulepreload",href:n},a),fa.set(i,n),e.querySelector(l)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(gl(i)))return}t=e.createElement("link"),qn(t,"link",n),An(t),e.head.appendChild(t)}}}function Nb(n,a,e){Ka.S(n,a,e);var t=zt;if(t&&n){var l=Xe(t).hoistableStyles,i=Tt(n);a=a||"default";var s=l.get(i);if(!s){var d={loading:0,preload:null};if(s=t.querySelector(bl(i)))d.loading=5;else{n=D({rel:"stylesheet",href:n,"data-precedence":a},e),(e=fa.get(i))&&Id(n,e);var o=s=t.createElement("link");An(o),qn(o,"link",n),o._p=new Promise(function(u,f){o.onload=u,o.onerror=f}),o.addEventListener("load",function(){d.loading|=1}),o.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Bi(s,a,t)}s={type:"stylesheet",instance:s,count:1,state:d},l.set(i,s)}}}function jb(n,a){Ka.X(n,a);var e=zt;if(e&&n){var t=Xe(e).hoistableScripts,l=Et(n),i=t.get(l);i||(i=e.querySelector(gl(l)),i||(n=D({src:n,async:!0},a),(a=fa.get(l))&&Pd(n,a),i=e.createElement("script"),An(i),qn(i,"link",n),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},t.set(l,i))}}function _b(n,a){Ka.M(n,a);var e=zt;if(e&&n){var t=Xe(e).hoistableScripts,l=Et(n),i=t.get(l);i||(i=e.querySelector(gl(l)),i||(n=D({src:n,async:!0,type:"module"},a),(a=fa.get(l))&&Pd(n,a),i=e.createElement("script"),An(i),qn(i,"link",n),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},t.set(l,i))}}function Ip(n,a,e,t){var l=(l=G.current)?Mi(l):null;if(!l)throw Error(b(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(a=Tt(e.href),e=Xe(l).hoistableStyles,t=e.get(a),t||(t={type:"style",instance:null,count:0,state:null},e.set(a,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=Tt(e.href);var i=Xe(l).hoistableStyles,s=i.get(n);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(n,s),(i=l.querySelector(bl(n)))&&!i._p&&(s.instance=i,s.state.loading=5),fa.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},fa.set(n,e),i||Rb(l,n,e,s.state))),a&&t===null)throw Error(b(528,""));return s}if(a&&t!==null)throw Error(b(529,""));return null;case"script":return a=e.async,e=e.src,typeof e=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Et(e),e=Xe(l).hoistableScripts,t=e.get(a),t||(t={type:"script",instance:null,count:0,state:null},e.set(a,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(b(444,n))}}function Tt(n){return'href="'+ra(n)+'"'}function bl(n){return'link[rel="stylesheet"]['+n+"]"}function Pp(n){return D({},n,{"data-precedence":n.precedence,precedence:null})}function Rb(n,a,e,t){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?t.loading=1:(a=n.createElement("link"),t.preload=a,a.addEventListener("load",function(){return t.loading|=1}),a.addEventListener("error",function(){return t.loading|=2}),qn(a,"link",e),An(a),n.head.appendChild(a))}function Et(n){return'[src="'+ra(n)+'"]'}function gl(n){return"script[async]"+n}function Wp(n,a,e){if(a.count++,a.instance===null)switch(a.type){case"style":var t=n.querySelector('style[data-href~="'+ra(e.href)+'"]');if(t)return a.instance=t,An(t),t;var l=D({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return t=(n.ownerDocument||n).createElement("style"),An(t),qn(t,"style",l),Bi(t,e.precedence,n),a.instance=t;case"stylesheet":l=Tt(e.href);var i=n.querySelector(bl(l));if(i)return a.state.loading|=4,a.instance=i,An(i),i;t=Pp(e),(l=fa.get(l))&&Id(t,l),i=(n.ownerDocument||n).createElement("link"),An(i);var s=i;return s._p=new Promise(function(d,o){s.onload=d,s.onerror=o}),qn(i,"link",t),a.state.loading|=4,Bi(i,e.precedence,n),a.instance=i;case"script":return i=Et(e.src),(l=n.querySelector(gl(i)))?(a.instance=l,An(l),l):(t=e,(l=fa.get(i))&&(t=D({},e),Pd(t,l)),n=n.ownerDocument||n,l=n.createElement("script"),An(l),qn(l,"link",t),n.head.appendChild(l),a.instance=l);case"void":return null;default:throw Error(b(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(t=a.instance,a.state.loading|=4,Bi(t,e.precedence,n));return a.instance}function Bi(n,a,e){for(var t=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=t.length?t[t.length-1]:null,i=l,s=0;s<t.length;s++){var d=t[s];if(d.dataset.precedence===a)i=d;else if(i!==l)break}i?i.parentNode.insertBefore(n,i.nextSibling):(a=e.nodeType===9?e.head:e,a.insertBefore(n,a.firstChild))}function Id(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function Pd(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Di=null;function nv(n,a,e){if(Di===null){var t=new Map,l=Di=new Map;l.set(e,t)}else l=Di,t=l.get(e),t||(t=new Map,l.set(e,t));if(t.has(n))return t;for(t.set(n,null),e=e.getElementsByTagName(n),l=0;l<e.length;l++){var i=e[l];if(!(i[Dt]||i[Mn]||n==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(a)||"";s=n+s;var d=t.get(s);d?d.push(i):t.set(s,[i])}}return t}function av(n,a,e){n=n.ownerDocument||n,n.head.insertBefore(e,a==="title"?n.querySelector("head > title"):null)}function Hb(n,a,e){if(e===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(n=a.disabled,typeof a.precedence=="string"&&n==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function ev(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Ub(n,a,e,t){if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=Tt(t.href),i=a.querySelector(bl(l));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(n.count++,n=Oi.bind(n),a.then(n,n)),e.state.loading|=4,e.instance=i,An(i);return}i=a.ownerDocument||a,t=Pp(t),(l=fa.get(l))&&Id(t,l),i=i.createElement("link"),An(i);var s=i;s._p=new Promise(function(d,o){s.onload=d,s.onerror=o}),qn(i,"link",t),e.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,a),(a=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=Oi.bind(n),a.addEventListener("load",e),a.addEventListener("error",e))}}var Wd=0;function Fb(n,a){return n.stylesheets&&n.count===0&&Li(n,n.stylesheets),0<n.count||0<n.imgCount?function(e){var t=setTimeout(function(){if(n.stylesheets&&Li(n,n.stylesheets),n.unsuspend){var i=n.unsuspend;n.unsuspend=null,i()}},6e4+a);0<n.imgBytes&&Wd===0&&(Wd=62500*wb());var l=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Li(n,n.stylesheets),n.unsuspend)){var i=n.unsuspend;n.unsuspend=null,i()}},(n.imgBytes>Wd?50:800)+a);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(t),clearTimeout(l)}}:null}function Oi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Li(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var qi=null;function Li(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,qi=new Map,a.forEach(Vb,n),qi=null,Oi.call(n))}function Vb(n,a){if(!(a.state.loading&4)){var e=qi.get(n);if(e)var t=e.get(null);else{e=new Map,qi.set(n,e);for(var l=n.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(e.set(s.dataset.precedence,s),t=s)}t&&e.set(null,t)}l=a.instance,s=l.getAttribute("data-precedence"),i=e.get(s)||t,i===t&&e.set(null,l),e.set(s,l),this.count++,t=Oi.bind(this),l.addEventListener("load",t),l.addEventListener("error",t),i?i.parentNode.insertBefore(l,i.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(l,n.firstChild)),a.state.loading|=4}}var ml={$$typeof:Nn,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function Yb(n,a,e,t,l,i,s,d,o){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zi(0),this.hiddenUpdates=Zi(null),this.identifierPrefix=t,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function tv(n,a,e,t,l,i,s,d,o,u,f,x){return n=new Yb(n,a,e,s,o,u,f,x,d),a=1,i===!0&&(a|=24),i=aa(3,null,null,a),n.current=i,i.stateNode=n,a=Os(),a.refCount++,n.pooledCache=a,a.refCount++,i.memoizedState={element:t,isDehydrated:e,cache:a},js(i),n}function lv(n){return n?(n=et,n):et}function iv(n,a,e,t,l,i){l=lv(l),t.context===null?t.context=l:t.pendingContext=l,t=ie(a),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=se(n,t,a),e!==null&&(Kn(e,n,a),Zt(e,n,a))}function sv(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<a?e:a}}function no(n,a){sv(n,a),(n=n.alternate)&&sv(n,a)}function dv(n){if(n.tag===13||n.tag===31){var a=Me(n,67108864);a!==null&&Kn(a,n,67108864),no(n,67108864)}}function ov(n){if(n.tag===13||n.tag===31){var a=sa();a=Ki(a);var e=Me(n,a);e!==null&&Kn(e,n,a),no(n,a)}}var Ni=!0;function $b(n,a,e,t){var l=y.T;y.T=null;var i=T.p;try{T.p=2,ao(n,a,e,t)}finally{T.p=i,y.T=l}}function Gb(n,a,e,t){var l=y.T;y.T=null;var i=T.p;try{T.p=8,ao(n,a,e,t)}finally{T.p=i,y.T=l}}function ao(n,a,e,t){if(Ni){var l=eo(t);if(l===null)Fd(n,a,t,ji,e),cv(n,t);else if(Qb(l,n,a,e,t))t.stopPropagation();else if(cv(n,t),a&4&&-1<Xb.indexOf(n)){for(;l!==null;){var i=Ge(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Te(i.pendingLanes);if(s!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;s;){var o=1<<31-Wn(s);d.entanglements[1]|=o,s&=~o}Ma(i),(nn&6)===0&&(yi=In()+500,cl(0))}}break;case 31:case 13:d=Me(i,2),d!==null&&Kn(d,i,2),xi(),no(i,2)}if(i=eo(t),i===null&&Fd(n,a,t,ji,e),i===l)break;l=i}l!==null&&t.stopPropagation()}else Fd(n,a,t,null,e)}}function eo(n){return n=ls(n),to(n)}var ji=null;function to(n){if(ji=null,n=$e(n),n!==null){var a=R(n);if(a===null)n=null;else{var e=a.tag;if(e===13){if(n=$(a),n!==null)return n;n=null}else if(e===31){if(n=gn(a),n!==null)return n;n=null}else if(e===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return ji=n,null}function rv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dv()){case fo:return 2;case yo:return 8;case El:case Ov:return 32;case ho:return 268435456;default:return 32}default:return 32}}var lo=!1,fe=null,ye=null,he=null,fl=new Map,yl=new Map,xe=[],Xb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cv(n,a){switch(n){case"focusin":case"focusout":fe=null;break;case"dragenter":case"dragleave":ye=null;break;case"mouseover":case"mouseout":he=null;break;case"pointerover":case"pointerout":fl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(a.pointerId)}}function hl(n,a,e,t,l,i){return n===null||n.nativeEvent!==i?(n={blockedOn:a,domEventName:e,eventSystemFlags:t,nativeEvent:i,targetContainers:[l]},a!==null&&(a=Ge(a),a!==null&&dv(a)),n):(n.eventSystemFlags|=t,a=n.targetContainers,l!==null&&a.indexOf(l)===-1&&a.push(l),n)}function Qb(n,a,e,t,l){switch(a){case"focusin":return fe=hl(fe,n,a,e,t,l),!0;case"dragenter":return ye=hl(ye,n,a,e,t,l),!0;case"mouseover":return he=hl(he,n,a,e,t,l),!0;case"pointerover":var i=l.pointerId;return fl.set(i,hl(fl.get(i)||null,n,a,e,t,l)),!0;case"gotpointercapture":return i=l.pointerId,yl.set(i,hl(yl.get(i)||null,n,a,e,t,l)),!0}return!1}function pv(n){var a=$e(n.target);if(a!==null){var e=R(a);if(e!==null){if(a=e.tag,a===13){if(a=$(e),a!==null){n.blockedOn=a,Eo(n.priority,function(){ov(e)});return}}else if(a===31){if(a=gn(e),a!==null){n.blockedOn=a,Eo(n.priority,function(){ov(e)});return}}else if(a===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _i(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var e=eo(n.nativeEvent);if(e===null){e=n.nativeEvent;var t=new e.constructor(e.type,e);ts=t,e.target.dispatchEvent(t),ts=null}else return a=Ge(e),a!==null&&dv(a),n.blockedOn=e,!1;a.shift()}return!0}function vv(n,a,e){_i(n)&&e.delete(a)}function Zb(){lo=!1,fe!==null&&_i(fe)&&(fe=null),ye!==null&&_i(ye)&&(ye=null),he!==null&&_i(he)&&(he=null),fl.forEach(vv),yl.forEach(vv)}function Ri(n,a){n.blockedOn===a&&(n.blockedOn=null,lo||(lo=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,Zb)))}var Hi=null;function uv(n){Hi!==n&&(Hi=n,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Hi===n&&(Hi=null);for(var a=0;a<n.length;a+=3){var e=n[a],t=n[a+1],l=n[a+2];if(typeof t!="function"){if(to(t||e)===null)continue;break}var i=Ge(e);i!==null&&(n.splice(a,3),a-=3,ed(i,{pending:!0,data:l,method:e.method,action:t},t,l))}}))}function St(n){function a(o){return Ri(o,n)}fe!==null&&Ri(fe,n),ye!==null&&Ri(ye,n),he!==null&&Ri(he,n),fl.forEach(a),yl.forEach(a);for(var e=0;e<xe.length;e++){var t=xe[e];t.blockedOn===n&&(t.blockedOn=null)}for(;0<xe.length&&(e=xe[0],e.blockedOn===null);)pv(e),e.blockedOn===null&&xe.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(t=0;t<e.length;t+=3){var l=e[t],i=e[t+1],s=l[Yn]||null;if(typeof i=="function")s||uv(e);else if(s){var d=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[Yn]||null)d=s.formAction;else if(to(l)!==null)continue}else d=s.action;typeof d=="function"?e[t+1]=d:(e.splice(t,3),t-=3),uv(e)}}}function bv(){function n(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function a(){l!==null&&(l(),l=null),t||setTimeout(e,20)}function e(){if(!t&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,l=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(e,100),function(){t=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),l!==null&&(l(),l=null)}}}function io(n){this._internalRoot=n}Ui.prototype.render=io.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(b(409));var e=a.current,t=sa();iv(e,t,n,a,null,null)},Ui.prototype.unmount=io.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;iv(n.current,2,null,n,null,null),xi(),a[Ye]=null}};function Ui(n){this._internalRoot=n}Ui.prototype.unstable_scheduleHydration=function(n){if(n){var a=To();n={blockedOn:null,target:n,priority:a};for(var e=0;e<xe.length&&a!==0&&a<xe[e].priority;e++);xe.splice(e,0,n),e===0&&pv(n)}};var gv=O.version;if(gv!=="19.2.7")throw Error(b(527,gv,"19.2.7"));T.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(b(188)):(n=Object.keys(n).join(","),Error(b(268,n)));return n=k(a),n=n!==null?Y(n):null,n=n===null?null:n.stateNode,n};var Kb={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{Ct=Fi.inject(Kb),Pn=Fi}catch{}}return wl.createRoot=function(n,a){if(!B(n))throw Error(b(299));var e=!1,t="",l=kc,i=zc,s=Tc;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(t=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError)),a=tv(n,1,!1,null,null,e,t,null,l,i,s,bv),n[Ye]=a.current,Ud(n),new io(a)},wl.hydrateRoot=function(n,a,e){if(!B(n))throw Error(b(299));var t=!1,l="",i=kc,s=zc,d=Tc,o=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(d=e.onRecoverableError),e.formState!==void 0&&(o=e.formState)),a=tv(n,1,!0,a,e??null,t,l,o,i,s,d,bv),a.context=lv(null),e=a.current,t=sa(),t=Ki(t),l=ie(t),l.callback=null,se(e,l,t),e=t,a.current.lanes=e,Bt(a,e),Ma(a),n[Ye]=a.current,Ud(n),new Ui(a)},wl.version="19.2.7",wl}var Ev;function ig(){if(Ev)return ro.exports;Ev=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(O){console.error(O)}}return z(),ro.exports=lg(),ro.exports}var sg=ig();const dg=`<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PAC 個人儀表板</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --blue:#2563EB;--blue-light:#EFF6FF;--blue-mid:#BFDBFE;--blue-dark:#1E40AF;
  --gray-50:#F8FAFC;--gray-100:#F1F5F9;--gray-200:#E2E8F0;--gray-300:#CBD5E1;
  --gray-400:#94A3B8;--gray-500:#64748B;--gray-600:#475569;--gray-700:#334155;--gray-900:#0F172A;
  --green:#16A34A;--green-light:#DCFCE7;--green-mid:#BBF7D0;
  --amber:#D97706;--amber-light:#FEF3C7;
  --red:#DC2626;--red-light:#FEE2E2;
  --purple:#7C3AED;--purple-light:#EDE9FE;
  --teal:#0D9488;--teal-light:#CCFBF1;
  --white:#FFFFFF;
}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans TC',sans-serif;background:var(--gray-50);color:var(--gray-900);height:100vh;display:flex;overflow:hidden;font-size:14px}

/* ── Sidebar ── */
.sidebar{width:192px;min-width:192px;background:var(--white);border-right:1px solid var(--gray-200);display:flex;flex-direction:column;z-index:10}
.sidebar-logo{padding:16px 16px 13px;border-bottom:1px solid var(--gray-200)}
.logo-text{font-size:14px;font-weight:700;color:var(--blue)}
.logo-sub{font-size:11px;color:var(--gray-400);margin-top:2px}
.sidebar-nav{padding:6px 0;flex:1}
.nav-item{display:flex;align-items:center;gap:8px;padding:9px 14px;font-size:13px;color:var(--gray-500);border-left:3px solid transparent;cursor:default}
.nav-item.active{background:var(--blue-light);color:var(--blue);font-weight:600;border-left-color:var(--blue)}
.nav-item.disabled{opacity:.38;cursor:not-allowed}
.sidebar-user{margin-top: auto;padding:11px 14px;border-top:1px solid var(--gray-200)}
.user-row{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.user-avatar{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0}
.av-mgr{background:var(--amber-light);color:var(--amber)}
.av-sup{background:var(--purple-light);color:var(--purple)}
.av-pt{background:var(--blue-light);color:var(--blue)}
.av-ot{background:#FCE7F3;color:#9D174D}
.av-st{background:var(--green-light);color:var(--green)}
.av-nur{background:var(--teal-light);color:var(--teal)}
.av-doc{background:#FEF3C7;color:#92400E}
.av-pha{background:var(--purple-light);color:var(--purple)}
.av-nut{background:var(--green-light);color:var(--green)}
.av-adm{background:var(--gray-100);color:var(--gray-600)}
.user-name{font-size:12px;font-weight:600;color:var(--gray-700)}
.user-role-label{font-size:11px;color:var(--gray-400)}
.role-switcher{position:relative}
.role-select{width:100%;padding:5px 24px 5px 8px;border:1px solid var(--gray-200);border-radius:6px;font-size:11px;font-weight:600;color:var(--gray-600);background:var(--white);cursor:pointer;appearance:none;outline:none}
.role-select:focus{border-color:var(--blue)}
.role-arrow{position:absolute;right:7px;top:50%;transform:translateY(-50%);font-size:9px;color:var(--gray-400);pointer-events:none}

/* ── Main ── */
.main{flex:1;display:flex;flex-direction:column;overflow:hidden;position:relative}
.topbar{background:var(--white);border-bottom:1px solid var(--gray-200);padding:0 20px;height:48px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;z-index:20}
.breadcrumb{font-size:12px;color:var(--gray-500)}
.topbar-right{display:flex;align-items:center;gap:10px}
.topbar-date{font-size:11px;color:var(--gray-400)}
.notif-btn{position:relative;width:34px;height:34px;border-radius:8px;border:1px solid var(--gray-200);background:var(--white);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;transition:all .15s}
.notif-btn:hover{background:var(--gray-50);border-color:var(--gray-300)}
.notif-badge{position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--red);color:var(--white);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;border:2px solid var(--white)}
.content{flex:1;overflow-y:auto;padding:20px;transition:margin-right .25s}
.content.shifted{margin-right:360px}

/* ── Notification Panel ── */
.notif-panel{position:fixed;top:0;right:-360px;width:360px;height:100vh;background:var(--white);border-left:1px solid var(--gray-200);box-shadow:-4px 0 24px rgba(0,0,0,.1);z-index:50;display:flex;flex-direction:column;transition:right .25s}
.notif-panel.open{right:0}
.notif-panel-header{padding:16px 18px;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.notif-panel-title{font-size:15px;font-weight:700}
.notif-panel-sub{font-size:11px;color:var(--gray-400);margin-top:2px}
.notif-close{width:26px;height:26px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}
.notif-close:hover{background:var(--gray-200)}
.notif-list{flex:1;overflow-y:auto;padding:8px 0}
.notif-section-label{font-size:10px;font-weight:700;color:var(--gray-400);text-transform:uppercase;letter-spacing:.06em;padding:10px 18px 5px}
.notif-item{display:flex;gap:10px;padding:10px 18px;cursor:pointer;transition:background .12s;border-left:3px solid transparent}
.notif-item:hover{background:var(--gray-50)}
.notif-item.unread{background:var(--blue-light);border-left-color:var(--blue)}
.notif-item.urgent{background:var(--red-light);border-left-color:var(--red)}
.notif-item.urgent:hover{background:#FECACA}
.notif-icon{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0}
.ni-blue{background:var(--blue-light)}
.ni-red{background:var(--red-light)}
.ni-amber{background:var(--amber-light)}
.ni-green{background:var(--green-light)}
.ni-purple{background:var(--purple-light)}
.notif-body{flex:1;min-width:0}
.notif-title{font-size:12px;font-weight:600;color:var(--gray-900);margin-bottom:2px}
.notif-desc{font-size:11px;color:var(--gray-500);line-height:1.5}
.notif-time{font-size:10px;color:var(--gray-400);margin-top:3px}
.notif-mark-all{padding:10px 18px;font-size:11px;color:var(--blue);cursor:pointer;border-top:1px solid var(--gray-100);flex-shrink:0;text-align:center}
.notif-mark-all:hover{background:var(--blue-light)}

/* ── Buttons ── */
.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .15s;white-space:nowrap}
.btn-primary{background:var(--blue);color:var(--white)}.btn-primary:hover{background:var(--blue-dark)}
.btn-secondary{background:var(--white);color:var(--gray-700);border:1px solid var(--gray-300)}.btn-secondary:hover{background:var(--gray-50)}
.btn-ghost{background:transparent;color:var(--blue);border:1px solid var(--blue-mid)}.btn-ghost:hover{background:var(--blue-light)}
.btn-green{background:var(--white);color:var(--green);border:1px solid var(--green-mid)}.btn-green:hover{background:var(--green-light)}
.btn-amber{background:var(--white);color:var(--amber);border:1px solid #FDE68A}.btn-amber:hover{background:var(--amber-light)}
.btn-red{background:var(--white);color:var(--red);border:1px solid #FECACA}.btn-red:hover{background:var(--red-light)}
.btn-sm{padding:5px 10px;font-size:12px}.btn-xs{padding:3px 8px;font-size:11px}

/* ── Badges ── */
.badge{display:inline-flex;align-items:center;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:600}
.badge-blue{background:var(--blue-light);color:var(--blue)}
.badge-green{background:var(--green-light);color:var(--green)}
.badge-amber{background:var(--amber-light);color:var(--amber)}
.badge-gray{background:var(--gray-100);color:var(--gray-500)}
.badge-red{background:var(--red-light);color:var(--red)}
.badge-purple{background:var(--purple-light);color:var(--purple)}
.badge-teal{background:var(--teal-light);color:var(--teal)}

/* ── Dashboard layout ── */
.dash-greeting{margin-bottom:20px}
.dash-greeting h1{font-size:20px;font-weight:700;color:var(--gray-900)}
.dash-greeting p{font-size:13px;color:var(--gray-500);margin-top:3px}

/* Stats strip */
.stats-row{display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap}
.stat-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:14px 18px;display:flex;flex-direction:column;gap:3px;min-width:110px;flex:1}
.stat-label{font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em}
.stat-value{font-size:24px;font-weight:700;color:var(--gray-900)}
.stat-sub{font-size:11px;color:var(--gray-400)}
.stat-card.s-blue{border-color:var(--blue-mid);background:var(--blue-light)}.stat-card.s-blue .stat-value{color:var(--blue)}
.stat-card.s-green{border-color:var(--green-mid);background:var(--green-light)}.stat-card.s-green .stat-value{color:var(--green)}
.stat-card.s-amber{border-color:#FDE68A;background:var(--amber-light)}.stat-card.s-amber .stat-value{color:var(--amber)}
.stat-card.s-red{border-color:#FECACA;background:var(--red-light)}.stat-card.s-red .stat-value{color:var(--red)}
.stat-card.s-purple{border-color:#DDD6FE;background:var(--purple-light)}.stat-card.s-purple .stat-value{color:var(--purple)}

/* Two-col grid */
.dash-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.dash-grid.three-col{grid-template-columns:1fr 1fr 1fr}
.span-2{grid-column:span 2}

/* Widget card */
.widget{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;overflow:hidden}
.widget-header{padding:12px 16px;border-bottom:1px solid var(--gray-100);display:flex;align-items:center;justify-content:space-between}
.widget-title{font-size:13px;font-weight:700;color:var(--gray-700);display:flex;align-items:center;gap:6px}
.widget-action{font-size:11px;color:var(--blue);cursor:pointer}
.widget-action:hover{text-decoration:underline}
.widget-body{padding:12px 16px}
.widget-body.no-pad{padding:0}
.widget-empty{padding:20px;text-align:center;color:var(--gray-400);font-size:12px}

/* Todo list */
.todo-list{display:flex;flex-direction:column}
.todo-item{display:flex;align-items:flex-start;gap:10px;padding:10px 16px;border-bottom:1px solid var(--gray-100);cursor:pointer;transition:background .12s}
.todo-item:last-child{border-bottom:none}
.todo-item:hover{background:var(--gray-50)}
.todo-icon{width:30px;height:30px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
.todo-body{flex:1;min-width:0}
.todo-title{font-size:12px;font-weight:600;color:var(--gray-800);margin-bottom:2px}
.todo-meta{font-size:11px;color:var(--gray-500)}
.todo-badge{flex-shrink:0;align-self:center}
.todo-item.urgent .todo-title{color:var(--red)}

/* Case list in widget */
.mini-case-list{display:flex;flex-direction:column}
.mini-case{display:flex;align-items:center;gap:10px;padding:9px 16px;border-bottom:1px solid var(--gray-100);cursor:pointer;transition:background .12s}
.mini-case:last-child{border-bottom:none}
.mini-case:hover{background:var(--gray-50)}
.mini-case-name{font-size:12px;font-weight:600;color:var(--gray-800);min-width:60px}
.mini-case-meta{font-size:11px;color:var(--gray-500);flex:1}
.mini-case-right{display:flex;align-items:center;gap:6px}

/* Progress bar */
.prog-row{display:flex;align-items:center;gap:8px;padding:8px 16px;border-bottom:1px solid var(--gray-100)}
.prog-row:last-child{border-bottom:none}
.prog-label{font-size:12px;color:var(--gray-700);min-width:70px}
.prog-bar-wrap{flex:1;height:6px;background:var(--gray-100);border-radius:999px;overflow:hidden}
.prog-bar{height:100%;border-radius:999px;background:var(--blue)}
.prog-bar.green{background:var(--green)}
.prog-bar.amber{background:var(--amber)}
.prog-count{font-size:11px;color:var(--gray-500);min-width:40px;text-align:right}

/* Schedule list */
.sched-list{display:flex;flex-direction:column}
.sched-item{display:flex;align-items:center;gap:10px;padding:9px 16px;border-bottom:1px solid var(--gray-100)}
.sched-item:last-child{border-bottom:none}
.sched-time{font-size:11px;font-weight:600;color:var(--gray-500);min-width:44px}
.sched-name{font-size:12px;font-weight:600;color:var(--gray-800);flex:1}
.sched-meta{font-size:11px;color:var(--gray-400)}
.th-tag{display:inline-flex;align-items:center;padding:2px 6px;border-radius:4px;font-size:10px;font-weight:700}
.th-pt{background:#DBEAFE;color:#1D4ED8}
.th-ot{background:#FCE7F3;color:#9D174D}
.th-st{background:var(--green-light);color:var(--green)}

/* Countdown */
.countdown-list{display:flex;flex-direction:column}
.cd-item{display:flex;align-items:center;gap:10px;padding:9px 16px;border-bottom:1px solid var(--gray-100)}
.cd-item:last-child{border-bottom:none}
.cd-name{font-size:12px;font-weight:600;color:var(--gray-800);flex:1}
.cd-meta{font-size:11px;color:var(--gray-500)}
.cd-days{font-size:13px;font-weight:700;min-width:50px;text-align:right}
.cd-days.urgent{color:var(--red)}
.cd-days.warn{color:var(--amber)}
.cd-days.ok{color:var(--green)}

/* Indicator banner */
.indicator-banner{background:linear-gradient(135deg,var(--blue) 0%,var(--blue-dark) 100%);border-radius:10px;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;color:var(--white)}
.ib-left h3{font-size:14px;font-weight:700;margin-bottom:3px}
.ib-left p{font-size:12px;opacity:.85}
.ib-right{display:flex;gap:8px}

/* Approval widget */
.approval-list{display:flex;flex-direction:column}
.approval-item{padding:10px 16px;border-bottom:1px solid var(--gray-100)}
.approval-item:last-child{border-bottom:none}
.approval-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:5px}
.approval-name{font-size:12px;font-weight:600;color:var(--gray-800)}
.approval-reason{font-size:11px;color:var(--gray-500);margin-bottom:6px}
.approval-actions{display:flex;gap:5px}

/* Billing list */
.billing-list{display:flex;flex-direction:column}
.billing-item{display:flex;align-items:center;gap:10px;padding:9px 16px;border-bottom:1px solid var(--gray-100)}
.billing-item:last-child{border-bottom:none}
.billing-name{font-size:12px;font-weight:600;color:var(--gray-800);flex:1}
.billing-meta{font-size:11px;color:var(--gray-500)}
.billing-amount{font-size:12px;font-weight:600;color:var(--gray-700)}

/* Admin build list */
.build-item{display:flex;align-items:center;gap:10px;padding:9px 16px;border-bottom:1px solid var(--gray-100)}
.build-item:last-child{border-bottom:none}
.build-name{font-size:12px;font-weight:600;color:var(--gray-800);flex:1}
.build-meta{font-size:11px;color:var(--gray-500)}

.hidden{display:none!important}
.mt-12{margin-top:12px}
</style>
</head>
<body>

<!-- SIDEBAR -->
<aside class="sidebar">
<!--
  <div class="sidebar-logo">
    <div class="logo-text">PAC 管理系統</div>
    <div class="logo-sub">急性後期照護</div>
  </div>
   <nav class="sidebar-nav">
    <div class="nav-item active">🏠 個人儀表板</div>
    <div class="nav-item disabled">📋 個案管理</div>
    <div class="nav-item disabled">🛏 病床管理</div>
    <div class="nav-item disabled">📅 班表總覽頁</div>
    <div class="nav-item disabled">🏡 居家排班管理</div>
    <div class="nav-item disabled">📊 評估量表</div>
    <div class="nav-item disabled">💪 復健紀錄</div>
    <div class="nav-item disabled">📤 指標匯出</div>
  </nav> 
-->
  <div class="sidebar-user">
    <div class="user-row">
      <div class="user-avatar av-mgr" id="user-av">林</div>
      <div>
        <div class="user-name" id="user-name">林美惠</div>
        <div class="user-role-label" id="user-role-label">個案管理師</div>
      </div>
    </div>
    <div class="role-switcher">
      <select class="role-select" id="role-select" onchange="switchRole(this.value)">
        <option value="mgr">個管師</option>
        <option value="sup">復健主管</option>
        <option value="pt">PT（物理治療師）</option>
        <option value="ot">OT（職能治療師）</option>
        <option value="st">ST（語言治療師）</option>
        <option value="nur">護理師</option>
        <option value="doc">醫師</option>
        <option value="pha">藥師</option>
        <option value="nut">營養師</option>
        <option value="adm">行政</option>
      </select>
      <span class="role-arrow">▾</span>
    </div>
  </div>
</aside>

<!-- MAIN -->
<div class="main">
  <div class="topbar">
    <div class="breadcrumb" id="bc">個人儀表板</div>
    <div class="topbar-right">
      <span class="topbar-date">2026/06/24 週三</span>
      <button class="notif-btn" id="notif-btn" onclick="toggleNotif()">
        🔔
        <span class="notif-badge" id="notif-badge">5</span>
      </button>
    </div>
  </div>

  <div class="content" id="content">
    <!-- 儀表板內容由 JS 渲染 -->
  </div>
</div>

<!-- 通知面板 -->
<div class="notif-panel" id="notif-panel">
  <div class="notif-panel-header">
    <div>
      <div class="notif-panel-title">🔔 通知中心</div>
      <div class="notif-panel-sub" id="notif-unread-count">5 則未讀</div>
    </div>
    <button class="notif-close" onclick="toggleNotif()">✕</button>
  </div>
  <div class="notif-list" id="notif-list">
    <!-- 通知由 JS 渲染 -->
  </div>
  <div class="notif-mark-all" onclick="markAllRead()">全部標為已讀</div>
</div>

<script>
// ── 角色設定 ──
const ROLES = {
  mgr:  {name:'林美惠', label:'個案管理師', av:'av-mgr', ch:'林'},
  sup:  {name:'王大明', label:'復健主管', av:'av-sup', ch:'王'},
  pt:   {name:'黃志豪', label:'PT（物理治療師）', av:'av-pt', ch:'黃'},
  ot:   {name:'李佳穎', label:'OT（職能治療師）', av:'av-ot', ch:'李'},
  st:   {name:'吳怡君', label:'ST（語言治療師）', av:'av-st', ch:'吳'},
  nur:  {name:'陳玉玲', label:'護理師', av:'av-nur', ch:'陳'},
  doc:  {name:'張宗達', label:'醫師', av:'av-doc', ch:'張'},
  pha:  {name:'林建志', label:'藥師', av:'av-pha', ch:'林'},
  nut:  {name:'周雅玲', label:'營養師', av:'av-nut', ch:'周'},
  adm:  {name:'蔡書明', label:'行政', av:'av-adm', ch:'蔡'},
};

// ── 通知資料 ──
const NOTIFS = {
  mgr: [
    {type:'urgent', icon:'⚠️', ic:'ni-red', title:'展延即將到期', desc:'陳建國・CVA・第 4 週，應於 2 天內送展延', time:'今天 09:15', unread:true},
    {type:'urgent', icon:'⚠️', ic:'ni-red', title:'展延即將到期', desc:'王淑芬・TKR・第 6 週，應於 3 天內送展延', time:'今天 09:15', unread:true},
    {type:'unread', icon:'📝', ic:'ni-purple', title:'待審核：評估修改申請', desc:'黃志豪（PT）申請修改・陳建國複評 1', time:'今天 08:42', unread:true},
    {type:'unread', icon:'💰', ic:'ni-amber', title:'待審核：批價申請', desc:'王大明（復健主管）已審核・劉家豪 6 月批價', time:'昨天 17:20', unread:true},
    {type:'', icon:'👤', ic:'ni-blue', title:'新轉介個案', desc:'上游：臺大醫院・李○○・CVA，待收案判斷', time:'昨天 14:05', unread:false},
    {type:'', icon:'✓', ic:'ni-green', title:'展延通過', desc:'張明輝・Hip Fx，健保署已通過展延', time:'昨天 11:30', unread:false},
  ],
  sup: [
    {type:'unread', icon:'📋', ic:'ni-purple', title:'待審核：評估修改申請', desc:'黃志豪（PT）申請修改・陳建國複評 1', time:'今天 08:42', unread:true},
    {type:'unread', icon:'🔄', ic:'ni-amber', title:'換班申請', desc:'李佳穎 申請 06/26 與陳建宏換班', time:'今天 07:55', unread:true},
    {type:'', icon:'✓', ic:'ni-green', title:'居家個案已成立', desc:'劉家豪・CVA・3PT 3OT 報名完成', time:'昨天 16:00', unread:false},
  ],
  pt: [
    {type:'urgent', icon:'📊', ic:'ni-red', title:'評估逾期提醒', desc:'王淑芬・複評 2 應於今日填寫', time:'今天 08:00', unread:true},
    {type:'unread', icon:'🏡', ic:'ni-blue', title:'新居家個案可報名', desc:'林○○・CVA・大安區（4.2km）', time:'今天 07:30', unread:true},
    {type:'', icon:'✓', ic:'ni-green', title:'修改申請通過', desc:'陳建國複評 1・復健主管已核准修改', time:'昨天 15:20', unread:false},
  ],
  ot: [
    {type:'urgent', icon:'📊', ic:'ni-red', title:'評估待填提醒', desc:'陳建國・複評 1 應於明日填寫', time:'今天 09:00', unread:true},
    {type:'unread', icon:'🏡', ic:'ni-blue', title:'新居家個案可報名', desc:'林○○・CVA・大安區（4.2km）', time:'今天 07:30', unread:true},
  ],
  st: [
    {type:'unread', icon:'📊', ic:'ni-amber', title:'評估待填提醒', desc:'劉家豪・初評尚未填寫', time:'今天 09:00', unread:true},
  ],
  nur: [
    {type:'unread', icon:'📋', ic:'ni-purple', title:'PAC 收案判斷委託', desc:'個管師林美惠委託判斷・李○○・CVA', time:'今天 10:20', unread:true},
    {type:'', icon:'📊', ic:'ni-amber', title:'評估待填', desc:'陳建國・護理評估・複評 1', time:'今天 09:00', unread:false},
  ],
  doc: [
    {type:'urgent', icon:'👤', ic:'ni-red', title:'待判斷個案', desc:'新轉介・李○○・CVA，需判斷是否符合 PAC', time:'今天 10:30', unread:true},
    {type:'unread', icon:'📋', ic:'ni-amber', title:'醫囑待確認', desc:'劉家豪 確認為 PAC，請提供醫囑方向', time:'今天 09:15', unread:true},
    {type:'', icon:'📊', ic:'ni-blue', title:'評估待填', desc:'陳建國・醫師評估・複評 1', time:'今天 09:00', unread:false},
  ],
  pha: [
    {type:'unread', icon:'📊', ic:'ni-amber', title:'評估待填', desc:'陳建國・藥師評估・複評 1', time:'今天 09:00', unread:true},
    {type:'', icon:'📊', ic:'ni-amber', title:'評估待填', desc:'王淑芬・藥師評估・複評 2', time:'昨天 09:00', unread:false},
  ],
  nut: [
    {type:'unread', icon:'📊', ic:'ni-green', title:'評估待填', desc:'陳建國・營養師評估・複評 1', time:'今天 09:00', unread:true},
  ],
  adm: [
    {type:'urgent', icon:'🏥', ic:'ni-red', title:'今日入院待建檔', desc:'陳志明・CVA・預計 10:00 入院', time:'今天 08:00', unread:true},
    {type:'urgent', icon:'🏥', ic:'ni-red', title:'今日入院待建檔', desc:'黃○○・Hip Fx・預計 14:00 入院', time:'今天 08:00', unread:true},
    {type:'unread', icon:'💰', ic:'ni-amber', title:'待批價', desc:'劉家豪・居家復健 06/23 執行・個管師已審核', time:'今天 07:30', unread:true},
    {type:'', icon:'💰', ic:'ni-amber', title:'月初獎金結算提醒', desc:'5 月已結案個案共 3 件，請至杏翔系統結算', time:'06/01 09:00', unread:false},
  ],
};

// ── 儀表板內容 ──
function renderDashboard(role) {
  const content = document.getElementById('content');
  const cfg = ROLES[role];

  const greets = {
    mgr:'今日有 2 件個案展延即將到期，請留意。',
    sup:'今日共安排 8 位個案，3 件待審核申請。',
    pt:'今日有 4 位個案待治療，1 件評估待填。',
    ot:'今日有 3 位個案待治療，1 件評估待填。',
    st:'今日有 2 位個案待治療，1 件評估待填。',
    nur:'今日病房入住 12 人，1 件 PAC 判斷委託待處理。',
    doc:'有 1 件 PAC 收案待判斷，1 件醫囑待完成。',
    pha:'本週有 2 份評估量表待填寫。',
    nut:'本週有 1 份評估量表待填寫。',
    adm:'今日有 2 位入院個案待建檔，1 件批價待處理。',
  };

  let html = \`
    <div class="dash-greeting">
      <h1>早安，\${cfg.name.replace(cfg.ch,'')||cfg.name} 👋</h1>
      <p>\${greets[role]}</p>
    </div>
  \`;

  if (role === 'mgr') html += renderMgr();
  else if (role === 'sup') html += renderSup();
  else if (['pt','ot','st'].includes(role)) html += renderTherapist(role);
  else if (role === 'nur') html += renderNur();
  else if (role === 'doc') html += renderDoc();
  else if (role === 'pha' || role === 'nut') html += renderPharNut(role);
  else if (role === 'adm') html += renderAdm();

  content.innerHTML = html;
}

function renderMgr() {
  return \`
  <!-- 指標提醒 banner（1月/7月才出現，此處示意） -->
  <div class="indicator-banner">
    <div class="ib-left">
      <h3>📊 半年指標彙整提醒</h3>
      <p>2026 年上半年（1月～6月）成果報告應於 7 月 15 日前送出健保署</p>
    </div>
    <div class="ib-right">
      <button class="btn btn-secondary btn-sm" onclick="alert('跳轉至 → 指標匯出模組')">前往彙整</button>
    </div>
  </div>

  <!-- 統計 -->
  <div class="stats-row">
    <div class="stat-card s-blue"><div class="stat-label">在院 PAC 個案</div><div class="stat-value">12</div><div class="stat-sub">住院 8・日照 4</div></div>
    <div class="stat-card s-green"><div class="stat-label">今日入院</div><div class="stat-value">2</div><div class="stat-sub">CVA・Hip Fx</div></div>
    <div class="stat-card s-amber"><div class="stat-label">今日出院</div><div class="stat-value">1</div><div class="stat-sub">TKR 結案</div></div>
    <div class="stat-card s-red"><div class="stat-label">展延倒數 ≤5天</div><div class="stat-value">2</div><div class="stat-sub">需優先處理</div></div>
    <div class="stat-card"><div class="stat-label">全院床位使用率</div><div class="stat-value">78%</div><div class="stat-sub">28 / 36 床</div></div>
    <div class="stat-card s-purple"><div class="stat-label">居家個案</div><div class="stat-value">5</div><div class="stat-sub">進行中</div></div>
  </div>

  <div class="dash-grid">
    <!-- 今日待辦 -->
    <div class="widget span-2">
      <div class="widget-header">
        <div class="widget-title">📌 今日待辦</div>
        <span class="badge badge-red">6 件</span>
      </div>
      <div class="todo-list">
        <div class="todo-item urgent" onclick="alert('跳轉至 → 個案管理・陳建國展延準備')">
          <div class="todo-icon ni-red">⚠️</div>
          <div class="todo-body">
            <div class="todo-title">【緊急】陳建國 展延倒數 2 天</div>
            <div class="todo-meta">CVA・住院・第 4 週・應於 2026/06/26 前送出</div>
          </div>
          <div class="todo-badge"><span class="badge badge-red">2天</span></div>
        </div>
        <div class="todo-item urgent" onclick="alert('跳轉至 → 個案管理・王淑芬展延準備')">
          <div class="todo-icon ni-red">⚠️</div>
          <div class="todo-body">
            <div class="todo-title">【緊急】王淑芬 展延倒數 3 天</div>
            <div class="todo-meta">TKR・住院・第 6 週・應於 2026/06/27 前送出</div>
          </div>
          <div class="todo-badge"><span class="badge badge-red">3天</span></div>
        </div>
        <div class="todo-item" onclick="alert('跳轉至 → 個案管理・新轉介待判斷')">
          <div class="todo-icon ni-blue">👤</div>
          <div class="todo-body">
            <div class="todo-title">新轉介個案待收案判斷</div>
            <div class="todo-meta">李○○・CVA・上游：臺大醫院（待我判斷）</div>
          </div>
          <div class="todo-badge"><span class="badge badge-blue">待判斷</span></div>
        </div>
        <div class="todo-item" onclick="alert('跳轉至 → 個案管理・待醫師判斷')">
          <div class="todo-icon ni-amber">🩺</div>
          <div class="todo-body">
            <div class="todo-title">待醫師判斷：黃○○</div>
            <div class="todo-meta">病摘已送張宗達醫師・CVA・等待回覆中</div>
          </div>
          <div class="todo-badge"><span class="badge badge-amber">等待中</span></div>
        </div>
        <div class="todo-item" onclick="alert('跳轉至 → 評估量表・待審核修改申請')">
          <div class="todo-icon ni-purple">📝</div>
          <div class="todo-body">
            <div class="todo-title">待審核：評估修改申請</div>
            <div class="todo-meta">復健主管 王大明 已審核・陳建國複評 1（PT）</div>
          </div>
          <div class="todo-badge"><span class="badge badge-purple">待我審核</span></div>
        </div>
        <div class="todo-item" onclick="alert('跳轉至 → 居家排班管理・待審核批價')">
          <div class="todo-icon ni-amber">💰</div>
          <div class="todo-body">
            <div class="todo-title">待審核：批價申請</div>
            <div class="todo-meta">劉家豪・居家復健 6 月・復健主管已審核</div>
          </div>
          <div class="todo-badge"><span class="badge badge-amber">待我審核</span></div>
        </div>
      </div>
    </div>

    <!-- 展延倒數 -->
    <div class="widget">
      <div class="widget-header">
        <div class="widget-title">⏱ 展延倒數</div>
        <span class="widget-action" onclick="alert('跳轉至 → 個案管理（全部個案）')">全部個案</span>
      </div>
      <div class="countdown-list">
        <div class="cd-item">
          <div><div class="cd-name">陳建國</div><div class="cd-meta">CVA・住院・第4週</div></div>
          <div class="cd-days urgent">2 天</div>
        </div>
        <div class="cd-item">
          <div><div class="cd-name">王淑芬</div><div class="cd-meta">TKR・住院・第6週</div></div>
          <div class="cd-days urgent">3 天</div>
        </div>
        <div class="cd-item">
          <div><div class="cd-name">劉家豪</div><div class="cd-meta">CVA・日照・第3週</div></div>
          <div class="cd-days warn">8 天</div>
        </div>
        <div class="cd-item">
          <div><div class="cd-name">林翠娟</div><div class="cd-meta">Hip Fx・住院・第9週</div></div>
          <div class="cd-days ok">18 天</div>
        </div>
        <div class="cd-item">
          <div><div class="cd-name">張明輝</div><div class="cd-meta">CVA・住院・第11週</div></div>
          <div class="cd-days ok">21 天</div>
        </div>
      </div>
    </div>

    <!-- 評估填寫進度 -->
    <div class="widget">
      <div class="widget-header">
        <div class="widget-title">📊 評估填寫進度</div>
        <span class="widget-action" onclick="alert('跳轉至 → 評估量表模組')">發送提醒</span>
      </div>
      <div class="mini-case-list">
        <div class="mini-case" onclick="alert('跳轉至 → 評估量表・陳建國')">
          <div class="mini-case-name">陳建國</div>
          <div class="mini-case-meta">複評1・PT待填・OT待填</div>
          <div class="mini-case-right"><span class="badge badge-amber">2人待填</span></div>
        </div>
        <div class="mini-case" onclick="alert('跳轉至 → 評估量表・王淑芬')">
          <div class="mini-case-name">王淑芬</div>
          <div class="mini-case-meta">複評2・PT逾期</div>
          <div class="mini-case-right"><span class="badge badge-red">逾期</span></div>
        </div>
        <div class="mini-case" onclick="alert('跳轉至 → 評估量表・劉家豪')">
          <div class="mini-case-name">劉家豪</div>
          <div class="mini-case-meta">初評・全部待填</div>
          <div class="mini-case-right"><span class="badge badge-amber">待填</span></div>
        </div>
        <div class="mini-case" onclick="alert('跳轉至 → 評估量表・林翠娟')">
          <div class="mini-case-name">林翠娟</div>
          <div class="mini-case-meta">複評3・全部完成</div>
          <div class="mini-case-right"><span class="badge badge-green">✓ 完成</span></div>
        </div>
      </div>
    </div>

    <!-- 居家批價狀態 -->
    <div class="widget">
      <div class="widget-header">
        <div class="widget-title">💰 居家批價追蹤</div>
        <span class="widget-action" onclick="alert('跳轉至 → 居家排班管理・批價')">全部</span>
      </div>
      <div class="billing-list">
        <div class="billing-item">
          <div><div class="billing-name">劉家豪</div><div class="billing-meta">06/23 執行・復健主管已審</div></div>
          <span class="badge badge-amber">待我審核</span>
        </div>
        <div class="billing-item">
          <div><div class="billing-name">黃建國</div><div class="billing-meta">06/20 執行・已送行政</div></div>
          <span class="badge badge-blue">批價中</span>
        </div>
        <div class="billing-item">
          <div><div class="billing-name">陳志明</div><div class="billing-meta">06/15 執行</div></div>
          <span class="badge badge-green">✓ 完成</span>
        </div>
      </div>
    </div>

    <!-- 床位概覽 -->
    <div class="widget">
      <div class="widget-header">
        <div class="widget-title">🛏 床位概覽</div>
        <span class="widget-action" onclick="alert('跳轉至 → 病床管理模組')">管理床位</span>
      </div>
      <div class="widget-body">
        <div class="prog-row"><div class="prog-label">3F（PAC）</div><div class="prog-bar-wrap"><div class="prog-bar" style="width:83%"></div></div><div class="prog-count">10/12</div></div>
        <div class="prog-row"><div class="prog-label">4F（一般）</div><div class="prog-bar-wrap"><div class="prog-bar green" style="width:60%"></div></div><div class="prog-count">9/15</div></div>
        <div class="prog-row"><div class="prog-label">5F（混合）</div><div class="prog-bar-wrap"><div class="prog-bar amber" style="width:89%"></div></div><div class="prog-count">8/9</div></div>
        <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">
          <span class="badge badge-green">今日入院 2</span>
          <span class="badge badge-amber">今日出院 1</span>
          <span class="badge badge-blue">待排床 1</span>
        </div>
      </div>
    </div>
  </div>\`;
}

function renderSup() {
  return \`
  <div class="stats-row">
    <div class="stat-card s-blue"><div class="stat-label">今日院內個案</div><div class="stat-value">8</div><div class="stat-sub">PT 5・OT 4・ST 2</div></div>
    <div class="stat-card s-amber"><div class="stat-label">待審核申請</div><div class="stat-value">3</div><div class="stat-sub">修改 1・換班 1・批價 1</div></div>
    <div class="stat-card s-purple"><div class="stat-label">評估待填</div><div class="stat-value">4</div><div class="stat-sub">跨 3 位個案</div></div>
    <div class="stat-card s-green"><div class="stat-label">居家個案</div><div class="stat-value">5</div><div class="stat-sub">進行中</div></div>
  </div>
  <div class="dash-grid">
    <!-- 我今日的治療 -->
    <div class="widget">
      <div class="widget-header">
        <div class="widget-title">🏃 我今日的治療</div>
        <span class="widget-action" onclick="alert('跳轉至 → 班表總覽頁')">查看班表</span>
      </div>
      <div class="sched-list">
        <div class="sched-item"><div class="sched-time">09:00</div><div class="sched-name">陳建國</div><div class="sched-meta">CVA・A301</div><span class="th-tag th-pt">PT</span></div>
        <div class="sched-item"><div class="sched-time">10:30</div><div class="sched-name">林翠娟</div><div class="sched-meta">Hip Fx・B205</div><span class="th-tag th-pt">PT</span></div>
        <div class="sched-item"><div class="sched-time">14:00</div><div class="sched-name">張明輝</div><div class="sched-meta">CVA・C118</div><span class="th-tag th-pt">PT</span></div>
      </div>
    </div>
    <!-- 待審核 -->
    <div class="widget">
      <div class="widget-header">
        <div class="widget-title">📝 待我審核</div>
        <span class="badge badge-amber">3 件</span>
      </div>
      <div class="approval-list">
        <div class="approval-item">
          <div class="approval-top"><div class="approval-name">評估修改申請・黃志豪</div><span class="badge badge-purple">待審核</span></div>
          <div class="approval-reason">陳建國複評 1（PT）・修改原因：Br.Stage 上肢填寫有誤</div>
          <div class="approval-actions"><button class="btn btn-red btn-xs" onclick="alert('拒絕')">拒絕</button><button class="btn btn-green btn-xs" onclick="alert('核准後送個管師')">核准→送個管師</button></div>
        </div>
        <div class="approval-item">
          <div class="approval-top"><div class="approval-name">換班申請・李佳穎</div><span class="badge badge-amber">待審核</span></div>
          <div class="approval-reason">06/26（OT）申請與陳建宏換班</div>
          <div class="approval-actions"><button class="btn btn-red btn-xs" onclick="alert('拒絕')">拒絕</button><button class="btn btn-green btn-xs" onclick="alert('核准')">核准</button></div>
        </div>
        <div class="approval-item">
          <div class="approval-top"><div class="approval-name">批價審核・劉家豪</div><span class="badge badge-amber">待審核</span></div>
          <div class="approval-reason">居家復健 6 月・執行 6 次・NT$ 3,600</div>
          <div class="approval-actions"><button class="btn btn-red btn-xs" onclick="alert('退回')">退回</button><button class="btn btn-green btn-xs" onclick="alert('核准→送個管師')">核准→送個管師</button></div>
        </div>
      </div>
    </div>
    <!-- 治療師評估進度 -->
    <div class="widget">
      <div class="widget-header">
        <div class="widget-title">📊 治療師評估進度</div>
        <span class="widget-action" onclick="alert('跳轉至 → 評估量表模組')">詳情</span>
      </div>
      <div class="mini-case-list">
        <div class="mini-case"><div class="mini-case-name">黃志豪</div><div class="mini-case-meta">陳建國複評1待填・王淑芬複評2逾期</div><span class="badge badge-red">逾期</span></div>
        <div class="mini-case"><div class="mini-case-name">李佳穎</div><div class="mini-case-meta">陳建國複評1待填・劉家豪初評待填</div><span class="badge badge-amber">待填</span></div>
        <div class="mini-case"><div class="mini-case-name">吳怡君</div><div class="mini-case-meta">所有評估已完成</div><span class="badge badge-green">✓ 完成</span></div>
      </div>
    </div>
    <!-- 居家個案狀態 -->
    <div class="widget">
      <div class="widget-header">
        <div class="widget-title">🏡 居家個案狀態</div>
        <span class="widget-action" onclick="alert('跳轉至 → 居家排班管理')">全部</span>
      </div>
      <div class="mini-case-list">
        <div class="mini-case"><div class="mini-case-name">劉家豪</div><div class="mini-case-meta">進行中・第3週・PT 3 OT 3</div><span class="badge badge-blue">進行中</span></div>
        <div class="mini-case"><div class="mini-case-name">黃建國</div><div class="mini-case-meta">準備展延・第5週</div><span class="badge badge-amber">準備展延</span></div>
        <div class="mini-case"><div class="mini-case-name">陳淑真</div><div class="mini-case-meta">即將結案・第11週</div><span class="badge badge-purple">即將結案</span></div>
      </div>
    </div>
  </div>\`;
}

function renderTherapist(role) {
  const tagMap = {pt:'th-pt', ot:'th-ot', st:'th-st'};
  const labelMap = {pt:'PT', ot:'OT', st:'ST'};
  const tag = \`<span class="th-tag \${tagMap[role]}">\${labelMap[role]}</span>\`;
  const cases = {
    pt:[{t:'09:00',n:'陳建國',m:'CVA・A301'},{t:'10:30',n:'林翠娟',m:'Hip Fx・B205'},{t:'14:00',n:'張明輝',m:'CVA・C118'},{t:'15:30',n:'王淑芬',m:'TKR・A302'}],
    ot:[{t:'09:30',n:'陳建國',m:'CVA・A301'},{t:'11:00',n:'劉家豪',m:'CVA・日照'},{t:'14:30',n:'林翠娟',m:'Hip Fx・B205'}],
    st:[{t:'10:00',n:'陳建國',m:'CVA・A301'},{t:'13:30',n:'劉家豪',m:'CVA・日照'}],
  };
  const evals = {
    pt:[{n:'王淑芬',m:'複評2・逾期',b:'badge-red',l:'逾期'},{n:'陳建國',m:'複評1・明日應填',b:'badge-amber',l:'待填'}],
    ot:[{n:'陳建國',m:'複評1・明日應填',b:'badge-amber',l:'待填'},{n:'劉家豪',m:'初評・待填',b:'badge-amber',l:'待填'}],
    st:[{n:'劉家豪',m:'初評・待填',b:'badge-amber',l:'待填'}],
  };
  return \`
  <div class="stats-row">
    <div class="stat-card s-blue"><div class="stat-label">今日治療個案</div><div class="stat-value">\${cases[role].length}</div><div class="stat-sub">院內排班</div></div>
    <div class="stat-card s-amber"><div class="stat-label">評估待填</div><div class="stat-value">\${evals[role].length}</div><div class="stat-sub">含逾期</div></div>
    <div class="stat-card s-green"><div class="stat-label">居家個案</div><div class="stat-value">\${role==='pt'?2:role==='ot'?2:0}</div><div class="stat-sub">本週執行</div></div>
    <div class="stat-card"><div class="stat-label">本月執行次數</div><div class="stat-value">\${role==='pt'?18:role==='ot'?14:8}</div><div class="stat-sub">院內＋居家</div></div>
  </div>
  <div class="dash-grid">
    <div class="widget">
      <div class="widget-header"><div class="widget-title">📅 今日治療排班</div><span class="widget-action" onclick="alert('跳轉至 → 班表總覽頁')">查看班表</span></div>
      <div class="sched-list">
        \${cases[role].map(c=>\`<div class="sched-item"><div class="sched-time">\${c.t}</div><div class="sched-name">\${c.n}</div><div class="sched-meta">\${c.m}</div>\${tag}</div>\`).join('')}
      </div>
    </div>
    <div class="widget">
      <div class="widget-header"><div class="widget-title">📊 評估待填</div><span class="widget-action" onclick="alert('跳轉至 → 評估量表模組')">前往填寫</span></div>
      \${evals[role].length ? \`<div class="mini-case-list">
        \${evals[role].map(e=>\`<div class="mini-case" onclick="alert('跳轉至 → 評估量表・\${e.n}')"><div class="mini-case-name">\${e.n}</div><div class="mini-case-meta">\${e.m}</div><span class="badge \${e.b}">\${e.l}</span></div>\`).join('')}
      </div>\` : \`<div class="widget-empty">目前無待填評估 ✓</div>\`}
    </div>
    \${role !== 'st' ? \`
    <div class="widget">
      <div class="widget-header"><div class="widget-title">🏡 可報名居家個案</div><span class="widget-action" onclick="alert('跳轉至 → 居家排班管理')">查看全部</span></div>
      <div class="mini-case-list">
        <div class="mini-case" onclick="alert('跳轉至 → 居家排班管理・報名')">
          <div><div class="mini-case-name">林○○</div><div class="mini-case-meta">CVA・大安區（4.2km）・截止 06/25</div></div>
          <span class="badge badge-green">報名</span>
        </div>
        <div class="mini-case" onclick="alert('跳轉至 → 居家排班管理・報名')">
          <div><div class="mini-case-name">周○○</div><div class="mini-case-meta">Hip Fx・信義區（6.8km）・截止 06/26</div></div>
          <span class="badge badge-green">報名</span>
        </div>
      </div>
    </div>
    <div class="widget">
      <div class="widget-header"><div class="widget-title">🏡 我的居家排班</div><span class="widget-action" onclick="alert('跳轉至 → 居家排班管理')">詳情</span></div>
      <div class="sched-list">
        <div class="sched-item"><div class="sched-time">本週四</div><div class="sched-name">劉家豪</div><div class="sched-meta">大安區・下午 14:00</div>\${tag}</div>
        <div class="sched-item"><div class="sched-time">本週五</div><div class="sched-name">黃建國</div><div class="sched-meta">信義區・下午 15:30</div>\${tag}</div>
      </div>
    </div>\` : \`<div class="widget"><div class="widget-header"><div class="widget-title">📋 本月填寫紀錄</div></div><div class="widget-body"><div style="font-size:13px;font-weight:700;color:var(--gray-900);margin-bottom:4px">本月已完成 8 份評估</div><div style="font-size:11px;color:var(--gray-500)">初評 3・複評 4・結案 1</div></div></div><div class="widget"><div class="widget-header"><div class="widget-title">✓ 最近填寫紀錄</div></div><div class="mini-case-list"><div class="mini-case"><div class="mini-case-name">陳建國</div><div class="mini-case-meta">複評1・2026/06/24</div><span class="badge badge-green">已送出</span></div><div class="mini-case"><div class="mini-case-name">林翠娟</div><div class="mini-case-meta">複評3・2026/06/20</div><span class="badge badge-green">已送出</span></div></div></div>\`}
  </div>\`;
}

function renderNur() {
  return \`
  <div class="stats-row">
    <div class="stat-card s-blue"><div class="stat-label">今日病房入住</div><div class="stat-value">12</div><div class="stat-sub">PAC 8・一般 4</div></div>
    <div class="stat-card s-amber"><div class="stat-label">評估待填</div><div class="stat-value">2</div><div class="stat-sub">護理評估</div></div>
    <div class="stat-card s-red"><div class="stat-label">PAC 判斷委託</div><div class="stat-value">1</div><div class="stat-sub">待我回覆</div></div>
    <div class="stat-card s-green"><div class="stat-label">今日入院</div><div class="stat-value">2</div><div class="stat-sub">待準備病房</div></div>
  </div>
  <div class="dash-grid">
    <div class="widget span-2">
      <div class="widget-header"><div class="widget-title">📌 今日待辦</div></div>
      <div class="todo-list">
        <div class="todo-item urgent" onclick="alert('跳轉至 → 個案管理・PAC 收案判斷')">
          <div class="todo-icon ni-red">🩺</div>
          <div class="todo-body"><div class="todo-title">【待回覆】PAC 收案判斷委託</div><div class="todo-meta">個管師 林美惠 委託・李○○・CVA・請協助判斷是否符合收案條件</div></div>
          <span class="badge badge-red">待判斷</span>
        </div>
        <div class="todo-item" onclick="alert('跳轉至 → 評估量表・陳建國')">
          <div class="todo-icon ni-amber">📊</div>
          <div class="todo-body"><div class="todo-title">評估待填：陳建國</div><div class="todo-meta">護理評估・複評 1・應填日期 2026/06/25</div></div>
          <span class="badge badge-amber">待填</span>
        </div>
        <div class="todo-item" onclick="alert('跳轉至 → 評估量表・王淑芬')">
          <div class="todo-icon ni-amber">📊</div>
          <div class="todo-body"><div class="todo-title">評估待填：王淑芬</div><div class="todo-meta">護理評估・複評 2・逾期</div></div>
          <span class="badge badge-red">逾期</span>
        </div>
      </div>
    </div>
    <div class="widget">
      <div class="widget-header"><div class="widget-title">🛏 今日病房排床</div><span class="widget-action" onclick="alert('跳轉至 → 病床管理模組')">查看全部</span></div>
      <div class="mini-case-list">
        <div class="mini-case"><div class="mini-case-name">A301</div><div class="mini-case-meta">陳建國・CVA・住院中</div><span class="badge badge-blue">PAC</span></div>
        <div class="mini-case"><div class="mini-case-name">A302</div><div class="mini-case-meta">王淑芬・TKR・住院中</div><span class="badge badge-blue">PAC</span></div>
        <div class="mini-case"><div class="mini-case-name">B205</div><div class="mini-case-meta">林翠娟・Hip Fx・住院中</div><span class="badge badge-blue">PAC</span></div>
        <div class="mini-case"><div class="mini-case-name">C118</div><div class="mini-case-meta">今日入院・陳志明・CVA</div><span class="badge badge-green">今日入院</span></div>
      </div>
    </div>
    <div class="widget">
      <div class="widget-header"><div class="widget-title">📋 本月評估填寫紀錄</div></div>
      <div class="widget-body">
        <div style="font-size:13px;font-weight:700;color:var(--gray-900);margin-bottom:4px">本月已完成 12 份評估</div>
        <div style="font-size:11px;color:var(--gray-500);margin-bottom:12px">護理評估・巴氏量表</div>
        <div class="prog-row"><div class="prog-label">初評</div><div class="prog-bar-wrap"><div class="prog-bar green" style="width:100%"></div></div><div class="prog-count">5/5</div></div>
        <div class="prog-row"><div class="prog-label">複評</div><div class="prog-bar-wrap"><div class="prog-bar amber" style="width:70%"></div></div><div class="prog-count">7/10</div></div>
      </div>
    </div>
  </div>\`;
}

function renderDoc() {
  return \`
  <div class="stats-row">
    <div class="stat-card s-red"><div class="stat-label">待判斷個案</div><div class="stat-value">1</div><div class="stat-sub">PAC 收案判斷</div></div>
    <div class="stat-card s-amber"><div class="stat-label">醫囑待確認</div><div class="stat-value">1</div><div class="stat-sub">已確認 PAC</div></div>
    <div class="stat-card s-blue"><div class="stat-label">評估待填</div><div class="stat-value">2</div><div class="stat-sub">醫師評估量表</div></div>
    <div class="stat-card s-green"><div class="stat-label">本月已完成</div><div class="stat-value">8</div><div class="stat-sub">評估填寫</div></div>
  </div>
  <div class="dash-grid">
    <div class="widget span-2">
      <div class="widget-header"><div class="widget-title">📌 今日待辦</div></div>
      <div class="todo-list">
        <div class="todo-item urgent" onclick="alert('跳轉至 → 個案管理・PAC 收案判斷・李○○')">
          <div class="todo-icon ni-red">👤</div>
          <div class="todo-body"><div class="todo-title">【待判斷】PAC 收案判斷</div><div class="todo-meta">李○○・CVA・上游：臺大醫院・個管師 林美惠 委託</div></div>
          <span class="badge badge-red">待我判斷</span>
        </div>
        <div class="todo-item" onclick="alert('跳轉至 → 個案管理・劉家豪・醫囑填寫')">
          <div class="todo-icon ni-amber">📋</div>
          <div class="todo-body"><div class="todo-title">醫囑待確認：劉家豪</div><div class="todo-meta">CVA・日照・已確認 PAC，請提供復健治療方向醫囑</div></div>
          <span class="badge badge-amber">待填醫囑</span>
        </div>
        <div class="todo-item" onclick="alert('跳轉至 → 評估量表・陳建國・醫師評估')">
          <div class="todo-icon ni-blue">📊</div>
          <div class="todo-body"><div class="todo-title">評估待填：陳建國</div><div class="todo-meta">醫師評估・複評 1・應填日期 2026/06/25</div></div>
          <span class="badge badge-amber">待填</span>
        </div>
        <div class="todo-item" onclick="alert('跳轉至 → 評估量表・王淑芬・醫師評估')">
          <div class="todo-icon ni-blue">📊</div>
          <div class="todo-body"><div class="todo-title">評估待填：王淑芬</div><div class="todo-meta">醫師評估・複評 2・應填日期 2026/06/27</div></div>
          <span class="badge badge-amber">待填</span>
        </div>
      </div>
    </div>
    <div class="widget">
      <div class="widget-header"><div class="widget-title">📋 本月評估填寫</div></div>
      <div class="widget-body">
        <div style="font-size:22px;font-weight:700;color:var(--blue);margin-bottom:4px">8 <span style="font-size:13px;font-weight:400;color:var(--gray-500)">/ 預計 10 份</span></div>
        <div class="prog-row" style="padding:8px 0"><div class="prog-label">已完成</div><div class="prog-bar-wrap"><div class="prog-bar" style="width:80%"></div></div><div class="prog-count">8/10</div></div>
      </div>
    </div>
    <div class="widget">
      <div class="widget-header"><div class="widget-title">📅 近期居家 PAC 交接</div></div>
      <div class="mini-case-list">
        <div class="mini-case"><div class="mini-case-name">劉家豪</div><div class="mini-case-meta">首次訪視 2026/06/18・已交接 PAC 團隊</div><span class="badge badge-green">完成</span></div>
        <div class="mini-case"><div class="mini-case-name">王建民</div><div class="mini-case-meta">首次訪視 2026/07/02・預計安排中</div><span class="badge badge-amber">待安排</span></div>
      </div>
    </div>
  </div>\`;
}

function renderPharNut(role) {
  const isPha = role === 'pha';
  const evalLabel = isPha ? '藥師評估' : '營養師評估';
  const items = isPha
    ? [{n:'陳建國',m:'複評1・應填 06/25',b:'badge-amber',l:'待填'},{n:'王淑芬',m:'複評2・逾期',b:'badge-red',l:'逾期'},{n:'劉家豪',m:'初評・應填 06/26',b:'badge-amber',l:'待填'}]
    : [{n:'陳建國',m:'複評1・應填 06/25',b:'badge-amber',l:'待填'}];
  return \`
  <div class="stats-row">
    <div class="stat-card s-amber"><div class="stat-label">本週評估待填</div><div class="stat-value">\${items.length}</div><div class="stat-sub">\${evalLabel}</div></div>
    <div class="stat-card s-green"><div class="stat-label">本月已完成</div><div class="stat-value">\${isPha?10:6}</div><div class="stat-sub">份評估</div></div>
  </div>
  <div class="dash-grid">
    <div class="widget span-2">
      <div class="widget-header"><div class="widget-title">📊 評估待填清單</div><span class="widget-action" onclick="alert('跳轉至 → 評估量表模組')">前往填寫</span></div>
      <div class="mini-case-list">
        \${items.map(e=>\`<div class="mini-case" onclick="alert('跳轉至 → 評估量表・\${e.n}')"><div class="mini-case-name">\${e.n}</div><div class="mini-case-meta">\${evalLabel}・\${e.m}</div><span class="badge \${e.b}">\${e.l}</span></div>\`).join('')}
      </div>
    </div>
    <div class="widget">
      <div class="widget-header"><div class="widget-title">✓ 本月填寫紀錄</div></div>
      <div class="widget-body">
        <div style="font-size:22px;font-weight:700;color:var(--green);margin-bottom:6px">\${isPha?10:6} <span style="font-size:13px;font-weight:400;color:var(--gray-500)">份已完成</span></div>
        <div style="font-size:11px;color:var(--gray-500)">初評 \${isPha?3:2}・複評 \${isPha?6:4}・結案 \${isPha?1:0}</div>
      </div>
    </div>
    <div class="widget">
      <div class="widget-header"><div class="widget-title">📋 最近填寫</div></div>
      <div class="mini-case-list">
        <div class="mini-case"><div class="mini-case-name">林翠娟</div><div class="mini-case-meta">\${evalLabel}・複評3・2026/06/20</div><span class="badge badge-green">✓</span></div>
        <div class="mini-case"><div class="mini-case-name">張明輝</div><div class="mini-case-meta">\${evalLabel}・複評3・2026/06/18</div><span class="badge badge-green">✓</span></div>
      </div>
    </div>
  </div>\`;
}

function renderAdm() {
  return \`
  <div class="stats-row">
    <div class="stat-card s-red"><div class="stat-label">今日待建檔</div><div class="stat-value">2</div><div class="stat-sub">入院個案</div></div>
    <div class="stat-card s-amber"><div class="stat-label">待批價</div><div class="stat-value">3</div><div class="stat-sub">居家個案</div></div>
    <div class="stat-card s-purple"><div class="stat-label">月初獎金結算</div><div class="stat-value">3</div><div class="stat-sub">件待處理</div></div>
    <div class="stat-card s-green"><div class="stat-label">本月已批價</div><div class="stat-value">18</div><div class="stat-sub">件完成</div></div>
  </div>
  <div class="dash-grid">
    <!-- 今日待建檔 -->
    <div class="widget">
      <div class="widget-header"><div class="widget-title">🏥 今日入院待建檔</div><span class="badge badge-red">2 件</span></div>
      <div class="todo-list">
        <div class="todo-item urgent" onclick="alert('提醒：需登打至杏翔系統')">
          <div class="todo-icon ni-red">🏥</div>
          <div class="todo-body"><div class="todo-title">陳志明</div><div class="todo-meta">CVA・預計 10:00 入院・A301 床・個管師：林美惠</div></div>
          <span class="badge badge-red">待建檔</span>
        </div>
        <div class="todo-item urgent" onclick="alert('提醒：需登打至杏翔系統')">
          <div class="todo-icon ni-red">🏥</div>
          <div class="todo-body"><div class="todo-title">黃○○</div><div class="todo-meta">Hip Fx・預計 14:00 入院・C203 床・個管師：林美惠</div></div>
          <span class="badge badge-red">待建檔</span>
        </div>
      </div>
    </div>
    <!-- 待批價 -->
    <div class="widget">
      <div class="widget-header"><div class="widget-title">💰 居家批價待處理</div><span class="badge badge-amber">3 件</span></div>
      <div class="billing-list">
        <div class="billing-item">
          <div><div class="billing-name">劉家豪</div><div class="billing-meta">06/23 執行・個管師已審核 ✓</div></div>
          <div style="text-align:right"><div class="billing-amount">NT$ 600</div><button class="btn btn-primary btn-xs mt-12" onclick="alert('提醒：至杏翔系統批價')">批價</button></div>
        </div>
        <div class="billing-item">
          <div><div class="billing-name">黃建國</div><div class="billing-meta">06/22 執行・個管師已審核 ✓</div></div>
          <div style="text-align:right"><div class="billing-amount">NT$ 600</div><button class="btn btn-primary btn-xs mt-12" onclick="alert('提醒：至杏翔系統批價')">批價</button></div>
        </div>
        <div class="billing-item">
          <div><div class="billing-name">陳淑真</div><div class="billing-meta">06/21 執行・個管師已審核 ✓</div></div>
          <div style="text-align:right"><div class="billing-amount">NT$ 600</div><button class="btn btn-primary btn-xs mt-12" onclick="alert('提醒：至杏翔系統批價')">批價</button></div>
        </div>
      </div>
    </div>
    <!-- 月初獎金結算 -->
    <div class="widget span-2">
      <div class="widget-header"><div class="widget-title">💵 月初獎金結算提醒</div><span class="badge badge-purple">3 件待結算</span></div>
      <div class="info-note" style="background:var(--purple-light);color:var(--purple);font-size:12px;padding:10px 16px;border-bottom:1px solid #DDD6FE">
        5 月已結案個案共 3 件，請至杏翔系統完成費用結算（每月月初處理上月資料）
      </div>
      <div class="mini-case-list">
        <div class="mini-case"><div class="mini-case-name">陳淑真</div><div class="mini-case-meta">居家 PAC・12週結案・5月30日・執行 72次</div><button class="btn btn-ghost btn-xs" onclick="alert('提醒：至杏翔系統結算')">結算</button></div>
        <div class="mini-case"><div class="mini-case-name">李大成</div><div class="mini-case-meta">居家 PAC・4週結案・5月18日・執行 24次</div><button class="btn btn-ghost btn-xs" onclick="alert('提醒：至杏翔系統結算')">結算</button></div>
        <div class="mini-case"><div class="mini-case-name">鄭美玲</div><div class="mini-case-meta">居家 PAC・6週結案・5月25日・執行 36次</div><button class="btn btn-ghost btn-xs" onclick="alert('提醒：至杏翔系統結算')">結算</button></div>
      </div>
    </div>
  </div>\`;
}

// ── 通知面板 ──
let notifOpen = false;
let currentRole = 'mgr';

function toggleNotif() {
  notifOpen = !notifOpen;
  document.getElementById('notif-panel').classList.toggle('open', notifOpen);
  document.getElementById('content').classList.toggle('shifted', notifOpen);
  if (notifOpen) renderNotifs(currentRole);
}

function renderNotifs(role) {
  const items = NOTIFS[role] || [];
  const unread = items.filter(n=>n.unread).length;
  document.getElementById('notif-badge').textContent = unread;
  document.getElementById('notif-badge').style.display = unread > 0 ? 'flex' : 'none';
  document.getElementById('notif-unread-count').textContent = unread > 0 ? \`\${unread} 則未讀\` : '全部已讀';

  const listEl = document.getElementById('notif-list');
  if (!items.length) { listEl.innerHTML = '<div style="padding:30px;text-align:center;color:var(--gray-400);font-size:13px">目前沒有通知</div>'; return; }

  const urgent = items.filter(n=>n.type==='urgent');
  const unreadItems = items.filter(n=>n.type==='unread');
  const read = items.filter(n=>n.type==='');

  let html = '';
  if (urgent.length) {
    html += \`<div class="notif-section-label">🚨 緊急</div>\`;
    html += urgent.map(n=>\`<div class="notif-item urgent"><div class="notif-icon \${n.ic}">\${n.icon}</div><div class="notif-body"><div class="notif-title">\${n.title}</div><div class="notif-desc">\${n.desc}</div><div class="notif-time">\${n.time}</div></div></div>\`).join('');
  }
  if (unreadItems.length) {
    html += \`<div class="notif-section-label">🔵 未讀</div>\`;
    html += unreadItems.map(n=>\`<div class="notif-item unread"><div class="notif-icon \${n.ic}">\${n.icon}</div><div class="notif-body"><div class="notif-title">\${n.title}</div><div class="notif-desc">\${n.desc}</div><div class="notif-time">\${n.time}</div></div></div>\`).join('');
  }
  if (read.length) {
    html += \`<div class="notif-section-label">已讀</div>\`;
    html += read.map(n=>\`<div class="notif-item"><div class="notif-icon \${n.ic}">\${n.icon}</div><div class="notif-body"><div class="notif-title">\${n.title}</div><div class="notif-desc">\${n.desc}</div><div class="notif-time">\${n.time}</div></div></div>\`).join('');
  }
  listEl.innerHTML = html;
}

function markAllRead() {
  const items = NOTIFS[currentRole] || [];
  items.forEach(n=>{ n.unread=false; n.type=''; });
  renderNotifs(currentRole);
}

// ── 角色切換 ──
function switchRole(role) {
  currentRole = role;
  const cfg = ROLES[role];
  document.getElementById('user-av').textContent = cfg.ch;
  document.getElementById('user-av').className = 'user-avatar ' + cfg.av;
  document.getElementById('user-name').textContent = cfg.name;
  document.getElementById('user-role-label').textContent = cfg.label;

  const unread = (NOTIFS[role]||[]).filter(n=>n.unread).length;
  document.getElementById('notif-badge').textContent = unread;
  document.getElementById('notif-badge').style.display = unread > 0 ? 'flex' : 'none';

  renderDashboard(role);
  if (notifOpen) renderNotifs(role);
}

// Init
renderDashboard('mgr');
renderNotifs('mgr');
<\/script>
</body>
</html>`,og=`<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PAC 個案管理</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --blue:#2563EB;--blue-light:#EFF6FF;--blue-mid:#BFDBFE;--blue-dark:#1E40AF;
  --gray-50:#F8FAFC;--gray-100:#F1F5F9;--gray-200:#E2E8F0;--gray-300:#CBD5E1;
  --gray-400:#94A3B8;--gray-500:#64748B;--gray-600:#475569;--gray-700:#334155;--gray-900:#0F172A;
  --green:#16A34A;--green-light:#DCFCE7;--green-mid:#BBF7D0;
  --amber:#D97706;--amber-light:#FEF3C7;
  --red:#DC2626;--red-light:#FEE2E2;
  --purple:#7C3AED;--purple-light:#EDE9FE;
  --teal:#0D9488;--teal-light:#CCFBF1;
  --white:#FFFFFF;
}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans TC',sans-serif;background:var(--gray-50);color:var(--gray-900);height:100vh;display:flex;overflow:hidden;font-size:14px}

/* ── Sidebar ── */
.sidebar{width:192px;min-width:192px;background:var(--white);border-right:1px solid var(--gray-200);display:flex;flex-direction:column}
.sidebar-logo{padding:16px 16px 13px;border-bottom:1px solid var(--gray-200)}
.logo-text{font-size:14px;font-weight:700;color:var(--blue)}
.logo-sub{font-size:11px;color:var(--gray-400);margin-top:2px}
.sidebar-nav{padding:6px 0;flex:1}
.nav-item{display:flex;align-items:center;gap:8px;padding:9px 14px;font-size:13px;color:var(--gray-500);border-left:3px solid transparent}
.nav-item.active{background:var(--blue-light);color:var(--blue);font-weight:600;border-left-color:var(--blue);cursor:pointer}
.nav-item.disabled{opacity:.38;cursor:not-allowed}
.sidebar-user{margin-top: auto;padding:11px 14px;border-top:1px solid var(--gray-200)}
.user-row{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.user-avatar{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0}
.av-mgr{background:var(--amber-light);color:var(--amber)}
.av-doc{background:#FEF3C7;color:#92400E}
.av-nur{background:var(--teal-light);color:var(--teal)}
.av-adm{background:var(--gray-100);color:var(--gray-600)}
.user-name{font-size:12px;font-weight:600;color:var(--gray-700)}
.user-role-label{font-size:11px;color:var(--gray-400)}
.role-switcher{position:relative}
.role-select{width:100%;padding:5px 24px 5px 8px;border:1px solid var(--gray-200);border-radius:6px;font-size:11px;font-weight:600;color:var(--gray-600);background:var(--white);cursor:pointer;appearance:none;outline:none}
.role-select:focus{border-color:var(--blue)}
.role-arrow{position:absolute;right:7px;top:50%;transform:translateY(-50%);font-size:9px;color:var(--gray-400);pointer-events:none}

/* ── Main ── */
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}
.topbar{background:var(--white);border-bottom:1px solid var(--gray-200);padding:0 20px;height:48px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.breadcrumb{font-size:12px;color:var(--gray-500)}
.content{flex:1;overflow-y:auto;padding:20px}

/* ── Buttons ── */
.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .15s;white-space:nowrap}
.btn-primary{background:var(--blue);color:var(--white)}.btn-primary:hover{background:var(--blue-dark)}
.btn-secondary{background:var(--white);color:var(--gray-700);border:1px solid var(--gray-300)}.btn-secondary:hover{background:var(--gray-50)}
.btn-ghost{background:transparent;color:var(--blue);border:1px solid var(--blue-mid)}.btn-ghost:hover{background:var(--blue-light)}
.btn-danger{background:var(--white);color:var(--red);border:1px solid #FECACA}.btn-danger:hover{background:var(--red-light)}
.btn-amber{background:var(--white);color:var(--amber);border:1px solid #FDE68A}.btn-amber:hover{background:var(--amber-light)}
.btn-green{background:var(--white);color:var(--green);border:1px solid var(--green-mid)}.btn-green:hover{background:var(--green-light)}
.btn-purple{background:var(--white);color:var(--purple);border:1px solid #DDD6FE}.btn-purple:hover{background:var(--purple-light)}
.btn-sm{padding:5px 10px;font-size:12px}.btn-xs{padding:3px 8px;font-size:11px}

/* ── Badges ── */
.badge{display:inline-flex;align-items:center;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:600}
.badge-blue{background:var(--blue-light);color:var(--blue)}
.badge-green{background:var(--green-light);color:var(--green)}
.badge-amber{background:var(--amber-light);color:var(--amber)}
.badge-gray{background:var(--gray-100);color:var(--gray-500)}
.badge-red{background:var(--red-light);color:var(--red)}
.badge-purple{background:var(--purple-light);color:var(--purple)}
.badge-teal{background:var(--teal-light);color:var(--teal)}

/* ── Stats strip ── */
.stats-row{display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap}
.stat-card{background:var(--white);border:1px solid var(--gray-200);border-radius:8px;padding:12px 16px;flex:1;min-width:100px;cursor:pointer;transition:all .15s}
.stat-card:hover{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}
.stat-card.urgent{border-color:#FECACA;background:var(--red-light)}
.stat-card.urgent:hover{border-color:var(--red)}
.stat-label{font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px}
.stat-value{font-size:20px;font-weight:700;color:var(--gray-900)}
.stat-sub{font-size:10px;color:var(--gray-400);margin-top:1px}
.stat-card.urgent .stat-value{color:var(--red)}
.stat-card.urgent .stat-label{color:var(--red)}

/* ── Search bar ── */
.search-bar{display:flex;gap:6px;margin-bottom:14px;align-items:center;flex-wrap:wrap}
.search-wrap{position:relative;flex:1;max-width:260px}
.search-wrap input{width:100%;padding:6px 10px 6px 30px;border:1px solid var(--gray-300);border-radius:6px;font-size:12px;outline:none}
.search-wrap input:focus{border-color:var(--blue)}
.search-icon{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:var(--gray-400);font-size:12px}
select.filter-sel{padding:6px 10px;border:1px solid var(--gray-300);border-radius:6px;font-size:12px;color:var(--gray-700);background:var(--white);cursor:pointer;outline:none}

/* ── Tabs ── */
.tabs{display:flex;border-bottom:2px solid var(--gray-200);margin-bottom:16px}
.tab{padding:8px 16px;font-size:13px;font-weight:500;color:var(--gray-500);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;transition:all .15s}
.tab.active{color:var(--blue);border-bottom-color:var(--blue);font-weight:600}

/* ── Case grid ── */
.case-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(288px,1fr));gap:12px}
.case-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:15px;cursor:pointer;transition:all .15s}
.case-card:hover{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}
.case-card-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px}
.case-name{font-size:15px;font-weight:700}
.case-id{font-size:11px;color:var(--gray-400);margin-top:2px}
.case-card-body{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:10px}
.case-field label{font-size:10px;color:var(--gray-400);display:block;margin-bottom:1px;text-transform:uppercase}
.case-field span{font-size:12px;color:var(--gray-700);font-weight:500}
.case-card-footer{display:flex;align-items:center;justify-content:space-between;padding-top:9px;border-top:1px solid var(--gray-100)}
.case-manager{display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)}
.mini-av{width:16px;height:16px;border-radius:50%;background:var(--blue-mid);color:var(--blue-dark);font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center}
.countdown-badge{font-size:11px;font-weight:700;color:var(--red);background:var(--red-light);padding:2px 7px;border-radius:4px}
.mode-stripe{height:3px;border-radius:999px;margin-bottom:12px}
.ms-hosp{background:var(--blue)}
.ms-day{background:var(--amber)}
.ms-home{background:var(--green)}
.ms-general{background:var(--gray-300)}

/* ── Admin highlight ── */
.admin-key-field{background:var(--amber-light);border:1px solid #FDE68A;border-radius:6px;padding:8px 12px}
.admin-key-field label{font-size:10px;font-weight:700;color:var(--amber);text-transform:uppercase;letter-spacing:.04em;display:block;margin-bottom:3px}
.admin-key-field span{font-size:15px;font-weight:700;color:var(--gray-900);letter-spacing:.05em}

/* ── Detail page ── */
.back-link{display:inline-flex;align-items:center;gap:4px;font-size:12px;color:var(--gray-500);cursor:pointer;margin-bottom:12px}
.back-link:hover{color:var(--blue)}
.detail-header{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:16px 20px;margin-bottom:12px}
.detail-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;flex-wrap:wrap;gap:10px}
.patient-name{font-size:20px;font-weight:700;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.detail-meta{display:flex;gap:14px;flex-wrap:wrap}
.meta-item{font-size:12px;color:var(--gray-500)}
.meta-item strong{color:var(--gray-700);font-weight:600}
.detail-actions{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}

/* ── Timeline ── */
.timeline-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;margin-bottom:12px;overflow:hidden}
.tc-header{padding:11px 18px;border-bottom:1px solid var(--gray-100);background:var(--gray-50);display:flex;align-items:center;justify-content:space-between}
.tc-title{font-size:13px;font-weight:600;color:var(--gray-700)}
.timeline-body{padding:18px 20px;overflow-x:auto}
.timeline-track{display:flex;align-items:flex-start;min-width:500px}
.t-step{display:flex;flex-direction:column;align-items:center;flex:1;position:relative}
.t-step:not(:last-child)::after{content:'';position:absolute;top:13px;left:50%;width:100%;height:2px;background:var(--gray-200);z-index:0}
.t-step.done:not(:last-child)::after{background:var(--blue)}
.t-dot{width:26px;height:26px;border-radius:50%;z-index:1;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;border:2px solid var(--gray-200);background:var(--white);color:var(--gray-400)}
.t-step.done .t-dot{background:var(--blue);border-color:var(--blue);color:var(--white)}
.t-step.active .t-dot{background:var(--white);border-color:var(--blue);color:var(--blue);box-shadow:0 0 0 4px var(--blue-light)}
.t-label{margin-top:7px;font-size:10px;text-align:center;color:var(--gray-400);line-height:1.4;max-width:64px}
.t-step.done .t-label{color:var(--blue-dark);font-weight:500}
.t-step.active .t-label{color:var(--blue);font-weight:700}

/* ── Section card ── */
.section-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;margin-bottom:12px;overflow:hidden}
.sc-header{padding:11px 17px;border-bottom:1px solid var(--gray-100);display:flex;align-items:center;justify-content:space-between;background:var(--gray-50)}
.sc-title{font-size:13px;font-weight:600;color:var(--gray-700)}
.sc-body{padding:16px}
.info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.info-grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.info-item label{font-size:10px;color:var(--gray-400);display:block;margin-bottom:3px;text-transform:uppercase;letter-spacing:.04em}
.info-item span{font-size:13px;color:var(--gray-800);font-weight:500}
.divider{height:1px;background:var(--gray-100);margin:12px 0}

/* ── Contact log ── */
.contact-log{display:flex;flex-direction:column;gap:9px}
.contact-entry{display:flex;gap:11px;padding:10px 12px;background:var(--gray-50);border-radius:7px;border-left:3px solid var(--gray-300)}
.contact-entry.done{border-left-color:var(--green)}
.contact-entry.pending{border-left-color:var(--amber)}
.contact-label{font-size:12px;font-weight:600;color:var(--gray-700);margin-bottom:2px}
.contact-meta{font-size:11px;color:var(--gray-400)}
.contact-note{font-size:12px;color:var(--gray-600);margin-top:4px}

/* ── Forms list ── */
.forms-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:10px}
.form-item{display:flex;align-items:center;justify-content:space-between;padding:11px 14px;border:1px solid var(--gray-200);border-radius:8px;background:var(--white);transition:all .15s;cursor:pointer}
.form-item:hover{border-color:var(--blue);background:var(--blue-light)}
.form-item-left{display:flex;align-items:center;gap:9px}
.form-icon{font-size:16px;width:30px;text-align:center}
.form-name{font-size:12px;font-weight:600;color:var(--gray-800)}
.form-meta{font-size:10px;color:var(--gray-400);margin-top:1px}
.form-status{font-size:10px;font-weight:700;padding:2px 7px;border-radius:4px}
.fs-done{background:var(--green-light);color:var(--green)}
.fs-pending{background:var(--gray-100);color:var(--gray-500)}
.fs-required{background:var(--amber-light);color:var(--amber)}

/* ── Form fill page ── */
.form-fill-header{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:16px 20px;margin-bottom:16px;display:flex;align-items:flex-start;justify-content:space-between}
.ff-title{font-size:16px;font-weight:700;color:var(--gray-900)}
.ff-meta{font-size:12px;color:var(--gray-500);margin-top:3px}
.ff-actions{display:flex;gap:7px}
.form-section{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;margin-bottom:12px;overflow:hidden}
.fs-header{padding:11px 17px;border-bottom:1px solid var(--gray-100);background:var(--gray-50);display:flex;align-items:center;justify-content:space-between}
.fs-title{font-size:13px;font-weight:600;color:var(--gray-700)}
.fs-body{padding:16px;display:flex;flex-direction:column;gap:12px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.form-row-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}
.form-group{display:flex;flex-direction:column;gap:5px}
.form-group.full{grid-column:1/-1}
.form-group label{font-size:11px;font-weight:600;color:var(--gray-600);text-transform:uppercase;letter-spacing:.04em}
.form-control{padding:7px 10px;border:1px solid var(--gray-300);border-radius:6px;font-size:13px;color:var(--gray-800);background:var(--white);outline:none;transition:border-color .15s}
.form-control:focus{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}
.form-control[readonly]{background:var(--gray-50);color:var(--gray-500);cursor:default}
select.form-control{cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%2394A3B8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;padding-right:24px}
textarea.form-control{resize:vertical;min-height:68px;line-height:1.6}
.required{color:var(--red)}
.form-footer{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between}

/* ── Modal ── */
.modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);display:flex;align-items:center;justify-content:center;z-index:100;backdrop-filter:blur(2px)}
.modal{background:var(--white);border-radius:12px;width:560px;max-width:92vw;max-height:88vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.15)}
.modal-lg{width:720px}
.modal-sm{width:400px}
.modal-header{padding:16px 20px 13px;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.modal-title{font-size:15px;font-weight:700}
.modal-close{width:25px;height:25px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}
.modal-close:hover{background:var(--gray-200)}
.modal-body{padding:16px 20px;overflow-y:auto;flex:1}
.modal-footer{padding:12px 20px;border-top:1px solid var(--gray-200);display:flex;justify-content:flex-end;gap:7px;flex-shrink:0}
.modal-tabs{display:flex;border-bottom:2px solid var(--gray-200);margin-bottom:16px}
.modal-tab{padding:8px 16px;font-size:13px;font-weight:500;color:var(--gray-500);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;transition:all .15s}
.modal-tab.active{color:var(--blue);border-bottom-color:var(--blue);font-weight:600}

/* ── Info note ── */
.info-note{font-size:12px;padding:10px 12px;border-radius:6px;margin-bottom:12px;line-height:1.6}
.info-note.blue{background:var(--blue-light);color:var(--blue-dark)}
.info-note.amber{background:var(--amber-light);color:var(--amber)}
.info-note.red{background:var(--red-light);color:var(--red)}
.info-note.green{background:var(--green-light);color:var(--green)}

/* ── Checklist ── */
.checklist{display:flex;flex-direction:column;gap:7px;margin:10px 0}
.check-item{display:flex;align-items:center;gap:9px;padding:9px 12px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer}
.check-item:hover{background:var(--gray-50)}
.check-item input{accent-color:var(--blue);width:14px;height:14px}
.check-item span{font-size:13px;color:var(--gray-700)}

/* ── Translation ── */
.trans-panel{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.trans-box{border:1px solid var(--gray-200);border-radius:7px;overflow:hidden}
.trans-box-header{padding:8px 12px;background:var(--gray-50);font-size:10px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid var(--gray-200)}
.trans-box-body{padding:12px;font-size:12px;line-height:1.75;color:var(--gray-700);min-height:160px}

/* ── Upload zone ── */
.upload-zone{border:2px dashed var(--gray-300);border-radius:8px;padding:28px 20px;text-align:center;color:var(--gray-400);cursor:pointer;transition:all .15s}
.upload-zone:hover{border-color:var(--blue);background:var(--blue-light);color:var(--blue)}

/* ── Export checklist ── */
.export-group{margin-bottom:14px}
.export-group-label{font-size:11px;font-weight:700;color:var(--gray-500);text-transform:uppercase;letter-spacing:.04em;margin-bottom:7px}
.export-items{display:flex;flex-direction:column;gap:5px}
.export-item{display:flex;align-items:center;gap:8px;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer}
.export-item:hover{background:var(--gray-50)}
.export-item input{accent-color:var(--blue)}
.export-item span{font-size:12px;color:var(--gray-700)}

/* ── Retire options ── */
.retire-list{display:flex;flex-direction:column;gap:6px;margin-bottom:12px}
.retire-opt{display:flex;align-items:center;gap:9px;padding:9px 12px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer}
.retire-opt:hover{background:var(--red-light);border-color:#FECACA}
.retire-opt input{accent-color:var(--red)}

/* ── PAC Judgment ── */
.judge-result-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}
.judge-option{display:flex;align-items:center;gap:8px;padding:10px 14px;border:2px solid var(--gray-200);border-radius:8px;cursor:pointer;transition:all .15s}
.judge-option:hover{border-color:var(--blue);background:var(--blue-light)}
.judge-option.selected{border-color:var(--blue);background:var(--blue-light)}
.judge-option input{accent-color:var(--blue)}
.judge-option span{font-size:13px;font-weight:500;color:var(--gray-700)}

.hidden{display:none!important}
</style>
</head>
<body>

<!-- SIDEBAR -->
<aside class="sidebar">
<!--
  <div class="sidebar-logo">
    <div class="logo-text">PAC 管理系統</div>
    <div class="logo-sub">急性後期照護</div>
  </div>
  <nav class="sidebar-nav">
    <div class="nav-item disabled">🏠 個人儀表板</div>
    <div class="nav-item active">📋 個案管理</div>
    <div class="nav-item disabled">🛏 病床管理</div>
    <div class="nav-item disabled">📅 班表總覽頁</div>
    <div class="nav-item disabled">🏡 居家排班管理</div>
    <div class="nav-item disabled">📊 評估量表</div>
    <div class="nav-item disabled">💪 復健紀錄</div>
    <div class="nav-item disabled">📤 指標匯出</div>
  </nav>
-->
  <div class="sidebar-user">
    <div class="user-row">
      <div class="user-avatar av-mgr" id="user-av">林</div>
      <div>
        <div class="user-name" id="user-name">林美惠</div>
        <div class="user-role-label" id="user-role-label">個案管理師</div>
      </div>
    </div>
    <div class="role-switcher">
      <select class="role-select" id="role-select" onchange="switchRole(this.value)">
        <option value="mgr">個管師</option>
        <option value="doc">醫師</option>
        <option value="nur">護理師</option>
        <option value="adm">行政</option>
      </select>
      <span class="role-arrow">▾</span>
    </div>
  </div>
</aside>

<!-- MAIN -->
<div class="main">
  <div class="topbar">
    <div class="breadcrumb" id="bc">個案管理</div>
    <div style="font-size:11px;color:var(--gray-400)">2026/06/25 週四</div>
  </div>
  <div class="content" id="main-content">
    <!-- 由 JS 渲染 -->
  </div>
</div>

<!-- ══════════════════════════════
     MODALS
══════════════════════════════ -->

<!-- 新增個案 -->
<div id="modal-new" class="modal-overlay hidden">
  <div class="modal modal-lg">
    <div class="modal-header">
      <div class="modal-title">＋ 新增個案</div>
      <button class="modal-close" onclick="closeModal('modal-new')">✕</button>
    </div>
    <div class="modal-body">
      <div class="modal-tabs">
        <div class="modal-tab active" onclick="switchModalTab(this,'new-manual')">✏️ 手動新增</div>
        <div class="modal-tab" onclick="switchModalTab(this,'new-ocr')">📷 OCR 辨識</div>
        <div class="modal-tab" onclick="switchModalTab(this,'new-his')">🏥 杏翔匯入</div>
      </div>
      <!-- 手動 -->
      <div id="new-manual">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          <div class="form-group"><label>姓名 <span class="required">*</span></label><input class="form-control" placeholder="e.g. 陳志明"></div>
          <div class="form-group"><label>身分證字號 <span class="required">*</span></label><input class="form-control" placeholder="e.g. A123456789"></div>
          <div class="form-group"><label>出生日期 <span class="required">*</span></label><input class="form-control" type="date" value="1950-03-15"></div>
          <div class="form-group"><label>性別</label><select class="form-control"><option>男</option><option>女</option></select></div>
          <div class="form-group"><label>照護模式 <span class="required">*</span></label><select class="form-control"><option value="">請選擇</option><option>住院</option><option>日照</option><option>居家</option><option>一般（非PAC）</option></select></div>
          <div class="form-group"><label>PAC 疾病別</label><select class="form-control"><option value="">請選擇</option><option>CVA（腦中風）</option><option>TKR（全膝關節置換）</option><option>Hip Fx（髖部骨折）</option><option>PAC 衰弱</option><option>一般骨折</option></select></div>
          <div class="form-group"><label>轉介來源</label><input class="form-control" placeholder="e.g. 臺大醫院"></div>
          <div class="form-group"><label>轉介日期</label><input class="form-control" type="date" value="2026-06-25"></div>
          <div class="form-group"><label>家屬姓名</label><input class="form-control" placeholder="主要照顧者姓名"></div>
          <div class="form-group"><label>家屬電話</label><input class="form-control" placeholder="0912-345-678"></div>
          <div class="form-group" style="grid-column:1/-1"><label>入院診斷</label><textarea class="form-control" rows="2" placeholder="英文原文診斷（可後續填寫）"></textarea></div>
        </div>
      </div>
      <!-- OCR -->
      <div id="new-ocr" class="hidden">
        <div class="upload-zone" onclick="alert('選擇病摘檔案（Word / PDF / JPG）')">
          <div style="font-size:28px;margin-bottom:8px">📄</div>
          <div style="font-size:13px;font-weight:600;color:var(--gray-700)">點擊或拖曳上傳病摘</div>
          <div style="font-size:11px;margin-top:4px">支援 Word、PDF、JPG 格式</div>
        </div>
        <div class="info-note blue" style="margin-top:12px">辨識完成後可手動修正欄位內容，確認無誤後再儲存。</div>
      </div>
      <!-- 杏翔 -->
      <div id="new-his" class="hidden">
        <div class="info-note blue">輸入病人病歷號，從杏翔系統帶入基本資料。</div>
        <div style="display:flex;gap:8px;margin-bottom:14px">
          <input class="form-control" style="flex:1" placeholder="輸入病歷號 e.g. 00073450" id="his-input">
          <button class="btn btn-primary" onclick="showHisResult()">查詢</button>
        </div>
        <div id="his-result" class="hidden">
          <div class="info-note green">✓ 查詢成功，請確認以下資料後儲存</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
            <div class="form-group"><label>姓名</label><input class="form-control" value="王建民"></div>
            <div class="form-group"><label>病歷號</label><input class="form-control" value="00073450" readonly></div>
            <div class="form-group"><label>身分證</label><input class="form-control" value="A123456789"></div>
            <div class="form-group"><label>出生日期</label><input class="form-control" value="1952/08/20"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-new')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-new');alert('臨時病歷已建立')">儲存個案</button>
    </div>
  </div>
</div>

<!-- 病摘翻譯 -->
<div id="modal-translate" class="modal-overlay hidden">
  <div class="modal modal-lg">
    <div class="modal-header">
      <div class="modal-title">📄 病摘輔助翻譯</div>
      <button class="modal-close" onclick="closeModal('modal-translate')">✕</button>
    </div>
    <div class="modal-body">
      <div class="info-note blue">系統輔助翻譯僅供參考，請結合臨床判斷。翻譯結果不會自動留存。</div>
      <div class="trans-panel">
        <div class="trans-box">
          <div class="trans-box-header">英文原文</div>
          <div class="trans-box-body">Left MCA infarction with right hemiparesis. Patient is a 72-year-old male who presented with sudden onset of right-sided weakness and aphasia. CT scan confirmed left middle cerebral artery territory infarction. Patient underwent thrombolysis and is now stable for PAC rehabilitation program.</div>
        </div>
        <div class="trans-box">
          <div class="trans-box-header">中文翻譯</div>
          <div class="trans-box-body">左側大腦中動脈梗塞合併右側偏癱。患者為72歲男性，出現突發性右側肢體無力及失語症。電腦斷層掃描確認左側大腦中動脈區域梗塞。患者已接受溶栓治療，目前狀況穩定，適合接受急性後期照護復健計畫。</div>
        </div>
      </div>
      <div style="margin-top:12px">
        <div style="font-size:12px;font-weight:600;color:var(--gray-600);margin-bottom:8px">系統收案條件比對</div>
        <div class="checklist">
          <div class="check-item"><input type="checkbox" checked><span>✓ 疾病別符合：CVA（腦中風）</span></div>
          <div class="check-item"><input type="checkbox" checked><span>✓ 發病後 60 天內</span></div>
          <div class="check-item"><input type="checkbox"><span>待確認：功能障礙程度（需進一步評估）</span></div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-translate')">關閉</button>
      <button class="btn btn-ghost" onclick="alert('翻譯對照已下載')">⬇ 下載對照</button>
    </div>
  </div>
</div>

<!-- 轉交醫師/專護判斷 -->
<div id="modal-judge" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title">🩺 轉交判斷</div>
      <button class="modal-close" onclick="closeModal('modal-judge')">✕</button>
    </div>
    <div class="modal-body">
      <div class="info-note blue">選擇要委託判斷的人員，系統將發送通知。</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="form-group"><label>委託對象</label><select class="form-control"><option>張宗達醫師（復健科）</option><option>陳玉玲護理師</option></select></div>
        <div class="form-group"><label>判斷事項說明</label><textarea class="form-control" rows="3" placeholder="說明需要判斷的重點，例如：開刀位置是否符合收案條件..."></textarea></div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-judge')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-judge');alert('已送出委託，對方將收到通知')">送出委託</button>
    </div>
  </div>
</div>

<!-- 退案 -->
<div id="modal-retire" class="modal-overlay hidden">
  <div class="modal modal-sm">
    <div class="modal-header">
      <div class="modal-title">退案原因</div>
      <button class="modal-close" onclick="closeModal('modal-retire')">✕</button>
    </div>
    <div class="modal-body">
      <div class="retire-list">
        <div class="retire-opt"><input type="radio" name="retire"><span style="font-size:13px">不符合 PAC 收案條件</span></div>
        <div class="retire-opt"><input type="radio" name="retire"><span style="font-size:13px">個案/家屬拒絕</span></div>
        <div class="retire-opt"><input type="radio" name="retire"><span style="font-size:13px">無可用床位</span></div>
        <div class="retire-opt"><input type="radio" name="retire"><span style="font-size:13px">個案病況不適合</span></div>
        <div class="retire-opt"><input type="radio" name="retire"><span style="font-size:13px">其他</span></div>
      </div>
      <textarea class="form-control" rows="2" placeholder="補充說明（選填）"></textarea>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-retire')">取消</button>
      <button class="btn btn-danger" onclick="closeModal('modal-retire');alert('個案已退案')">確認退案</button>
    </div>
  </div>
</div>

<!-- 轉正式病歷確認 checklist -->
<div id="modal-convert" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title">📋 轉換為正式病歷</div>
      <button class="modal-close" onclick="closeModal('modal-convert')">✕</button>
    </div>
    <div class="modal-body">
      <div class="info-note amber">轉換後系統將自動建立對應的表單，並通知行政同步至杏翔系統建立正式病歷。</div>
      <div style="font-size:12px;font-weight:600;color:var(--gray-600);margin-bottom:8px">請確認以下項目已完成：</div>
      <div class="checklist">
        <div class="check-item"><input type="checkbox"><span>已確認個案符合 PAC 收案條件</span></div>
        <div class="check-item"><input type="checkbox"><span>已完成第一次家屬聯繫</span></div>
        <div class="check-item"><input type="checkbox"><span>已完成第二次（W4W5）家屬確認</span></div>
        <div class="check-item"><input type="checkbox"><span>入院/開案日期已確認</span></div>
        <div class="check-item"><input type="checkbox"><span>床位已確認（住院個案）</span></div>
        <div class="check-item"><input type="checkbox"><span>醫師已完成會診並給予醫囑</span></div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-convert')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-convert');alert('已轉換為正式病歷，相關表單已自動建立，行政通知已發出')">確認轉換</button>
    </div>
  </div>
</div>

<!-- 不成功結案 -->
<div id="modal-fail-close" class="modal-overlay hidden">
  <div class="modal modal-sm">
    <div class="modal-header">
      <div class="modal-title">不成功結案原因</div>
      <button class="modal-close" onclick="closeModal('modal-fail-close')">✕</button>
    </div>
    <div class="modal-body">
      <div class="retire-list">
        <div class="retire-opt"><input type="radio" name="failclose"><span style="font-size:13px">個案病況改變，需回急性醫院</span></div>
        <div class="retire-opt"><input type="radio" name="failclose"><span style="font-size:13px">個案/家屬選擇不繼續</span></div>
        <div class="retire-opt"><input type="radio" name="failclose"><span style="font-size:13px">健保不通過</span></div>
        <div class="retire-opt"><input type="radio" name="failclose"><span style="font-size:13px">個案死亡</span></div>
        <div class="retire-opt"><input type="radio" name="failclose"><span style="font-size:13px">其他</span></div>
      </div>
      <textarea class="form-control" rows="2" placeholder="補充說明（選填）"></textarea>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-fail-close')">取消</button>
      <button class="btn btn-danger" onclick="closeModal('modal-fail-close');alert('已記錄不成功結案')">確認結案</button>
    </div>
  </div>
</div>

<!-- 成功結案 -->
<div id="modal-success-close" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title">✓ 成功結案確認</div>
      <button class="modal-close" onclick="closeModal('modal-success-close')">✕</button>
    </div>
    <div class="modal-body">
      <div class="info-note green">結案後系統將自動建立 PAC 個案滿意度調查表、出院追蹤記錄表。</div>
      <div class="checklist">
        <div class="check-item"><input type="checkbox"><span>結案評估已完成</span></div>
        <div class="check-item"><input type="checkbox"><span>出院準備資料已完成</span></div>
        <div class="check-item"><input type="checkbox"><span>PAC 個案滿意度調查已完成</span></div>
        <div class="check-item"><input type="checkbox"><span>轉介服務已安排（如需要）</span></div>
      </div>
      <div style="margin-top:12px">
        <div style="font-size:12px;font-weight:600;color:var(--gray-600);margin-bottom:8px">後續轉介筆記</div>
        <select class="form-control" style="margin-bottom:8px"><option>無需轉介</option><option>轉介居家醫療</option><option>轉介長照服務</option><option>轉介社工服務</option></select>
        <textarea class="form-control" rows="2" placeholder="轉介備註..."></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-success-close')">取消</button>
      <button class="btn btn-green" onclick="closeModal('modal-success-close');alert('個案已成功結案')">確認結案</button>
    </div>
  </div>
</div>

<!-- 匯出展延資料 -->
<div id="modal-export-extend" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title">📤 匯出展延資料</div>
      <button class="modal-close" onclick="closeModal('modal-export-extend')">✕</button>
    </div>
    <div class="modal-body">
      <div class="export-group">
        <div class="export-group-label">基本文件</div>
        <div class="export-items">
          <div class="export-item"><input type="checkbox" checked><span>封面表單</span></div>
          <div class="export-item"><input type="checkbox" checked><span>個案綜合評估報告書（總表）</span></div>
          <div class="export-item"><input type="checkbox" checked><span>專審表</span></div>
          <div class="export-item"><input type="checkbox" checked><span>PAC 收案會議記錄</span></div>
        </div>
      </div>
      <div class="export-group">
        <div class="export-group-label">醫療紀錄（串接杏翔）</div>
        <div class="export-items">
          <div class="export-item"><input type="checkbox" checked><span>入院病摘</span></div>
          <div class="export-item"><input type="checkbox"><span>護理紀錄</span></div>
          <div class="export-item"><input type="checkbox"><span>病程記錄</span></div>
          <div class="export-item"><input type="checkbox"><span>生命徵象</span></div>
        </div>
      </div>
      <div class="export-group">
        <div class="export-group-label">居家個案另附</div>
        <div class="export-items">
          <div class="export-item"><input type="checkbox"><span>PAC 居家復健治療紀錄</span></div>
          <div class="export-item"><input type="checkbox"><span>日照執行記錄表</span></div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-export-extend')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-export-extend');alert('展延資料已匯出（PDF）')">匯出 PDF</button>
    </div>
  </div>
</div>

<!-- 匯出結案資料 -->
<div id="modal-export-close" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title">📤 匯出結案資料</div>
      <button class="modal-close" onclick="closeModal('modal-export-close')">✕</button>
    </div>
    <div class="modal-body">
      <div class="export-group">
        <div class="export-group-label">基本文件</div>
        <div class="export-items">
          <div class="export-item"><input type="checkbox" checked><span>PAC 照護模式記錄表</span></div>
          <div class="export-item"><input type="checkbox" checked><span>個案綜合評估報告書（總表）</span></div>
          <div class="export-item"><input type="checkbox" checked><span>PAC 收案會議記錄</span></div>
          <div class="export-item"><input type="checkbox" checked><span>PAC 個案滿意度調查表</span></div>
          <div class="export-item"><input type="checkbox" checked><span>PAC 個案出院追蹤記錄表</span></div>
        </div>
      </div>
      <div class="export-group">
        <div class="export-group-label">醫療紀錄</div>
        <div class="export-items">
          <div class="export-item"><input type="checkbox" checked><span>病摘</span></div>
          <div class="export-item"><input type="checkbox"><span>護理紀錄 / 生命徵象（串杏翔）</span></div>
          <div class="export-item"><input type="checkbox"><span>居家訪視護理記錄表</span></div>
          <div class="export-item"><input type="checkbox"><span>居家環境評估暨危險因子檢核表</span></div>
          <div class="export-item"><input type="checkbox"><span>居家復健治療紀錄</span></div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-export-close')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-export-close');alert('結案資料已匯出（PDF）')">匯出 PDF</button>
    </div>
  </div>
</div>

<!-- 封存 -->
<div id="modal-archive" class="modal-overlay hidden">
  <div class="modal modal-sm">
    <div class="modal-header">
      <div class="modal-title">封存個案</div>
      <button class="modal-close" onclick="closeModal('modal-archive')">✕</button>
    </div>
    <div class="modal-body">
      <div class="info-note amber">封存後個案資料將保留，可隨時查閱但不可編輯。</div>
      <div class="retire-list">
        <div class="retire-opt"><input type="radio" name="archive"><span style="font-size:13px">個案取消入院/報到</span></div>
        <div class="retire-opt"><input type="radio" name="archive"><span style="font-size:13px">重複建立個案</span></div>
        <div class="retire-opt"><input type="radio" name="archive"><span style="font-size:13px">資料輸入錯誤</span></div>
        <div class="retire-opt"><input type="radio" name="archive"><span style="font-size:13px">其他</span></div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-archive')">取消</button>
      <button class="btn btn-amber" onclick="closeModal('modal-archive');alert('個案已封存')">確認封存</button>
    </div>
  </div>
</div>

<script>
// ── 角色設定 ──
const ROLES = {
  mgr:{name:'林美惠',label:'個案管理師',av:'av-mgr',ch:'林'},
  doc:{name:'張宗達',label:'醫師',av:'av-doc',ch:'張'},
  nur:{name:'陳玉玲',label:'護理師',av:'av-nur',ch:'陳'},
  adm:{name:'蔡書明',label:'行政',av:'av-adm',ch:'蔡'},
};
let currentRole='mgr';
let currentPage='list';
let currentCase=null;
let currentForm=null;

// ── 個案資料 ──
const CASES={
  temp:[
    {id:'t1',name:'李○○',mode:'住院',modeType:'hosp',disease:'CVA',source:'臺大醫院',date:'2026/06/24',status:'新轉介',mgr:'林美惠',formal:false,countdown:null,week:null},
    {id:'t2',name:'黃○○',mode:'居家',modeType:'home',disease:'Hip Fx',source:'彰化秀傳',date:'2026/06/22',status:'待補件',mgr:'林美惠',formal:false,countdown:null,week:null},
    {id:'t3',name:'吳○○',mode:'日照',modeType:'day',disease:'CVA',source:'台中榮總',date:'2026/06/20',status:'待收案判斷',mgr:'林美惠',formal:false,countdown:null,week:null},
    {id:'t4',name:'鄭○○',mode:'住院',modeType:'hosp',disease:'TKR',source:'門診自轉',date:'2026/06/18',status:'待排床',mgr:'林美惠',formal:false,countdown:null,week:null},
  ],
  formal:[
    {id:'f1',name:'陳建國',mode:'住院',modeType:'hosp',disease:'CVA',source:'臺大醫院',date:'2026/06/10',status:'展延中',mgr:'林美惠',formal:true,countdown:2,week:2},
    {id:'f2',name:'王淑芬',mode:'住院',modeType:'hosp',disease:'TKR',source:'彰基醫院',date:'2026/05/28',status:'展延中',mgr:'林美惠',formal:true,countdown:3,week:4},
    {id:'f3',name:'劉家豪',mode:'居家',modeType:'home',disease:'CVA',source:'台中榮總',date:'2026/06/05',status:'已收案在院',mgr:'林美惠',formal:true,countdown:null,week:3},
    {id:'f4',name:'林翠娟',mode:'住院',modeType:'hosp',disease:'Hip Fx',source:'台中榮總',date:'2026/04/15',status:'即將結案',mgr:'林美惠',formal:true,countdown:null,week:11},
    {id:'f5',name:'張明輝',mode:'日照',modeType:'day',disease:'CVA',source:'臺大醫院',date:'2026/05/01',status:'即將結案',mgr:'林美惠',formal:true,countdown:null,week:10},
    {id:'f6',name:'陳淑真',mode:'一般',modeType:'general',disease:'一般骨折',source:'門診',date:'2026/06/01',status:'已收案在院',mgr:'林美惠',formal:true,countdown:null,week:null},
  ]
};

const STATUS_COLOR={
  '新轉介':'badge-blue','待補件':'badge-amber','待收案判斷':'badge-amber',
  '待排床':'badge-purple','已收案在院':'badge-green','展延中':'badge-teal',
  '即將結案':'badge-amber','已結案':'badge-gray','退案':'badge-red',
};

// ── 表單清單（依照護模式）──
const FORMS={
  hosp:{
    common:[
      {icon:'📋',name:'個案綜合評估報告書（評估總表）',meta:'自動帶入評估週數與日期',status:'done'},
      {icon:'📄',name:'PAC 照護模式記錄表',meta:'個管師建立',status:'required'},
      {icon:'📝',name:'PAC 收案會議記錄',meta:'空白表單，填上個案資料',status:'pending'},
      {icon:'💬',name:'醫病溝通會議記錄',meta:'空白表單，填上個案資料',status:'pending'},
      {icon:'📃',name:'專審表',meta:'送展延需要',status:'required'},
      {icon:'🏥',name:'出院準備資料',meta:'住院個案適用',status:'pending'},
    ],
    post:[
      {icon:'😊',name:'PAC 個案滿意度調查表',meta:'結案後建立',status:'pending'},
      {icon:'📊',name:'PAC 個案出院追蹤記錄表',meta:'結案後建立',status:'pending'},
      {icon:'🏠',name:'PAC 居家訪視護理記錄表',meta:'結案後建立',status:'pending'},
    ]
  },
  day:{
    common:[
      {icon:'📋',name:'個案綜合評估報告書（評估總表）',meta:'自動帶入評估週數與日期',status:'done'},
      {icon:'📄',name:'PAC 照護模式記錄表',meta:'個管師建立',status:'required'},
      {icon:'📝',name:'PAC 收案會議記錄',meta:'空白表單',status:'pending'},
      {icon:'💬',name:'醫病溝通會議記錄',meta:'空白表單',status:'pending'},
      {icon:'📃',name:'專審表',meta:'送展延需要',status:'required'},
      {icon:'📅',name:'日照執行記錄表',meta:'人員安排串接復健排班',status:'pending'},
      {icon:'💰',name:'患者門診費用明細（日照）',meta:'人員安排串接復健排班',status:'pending'},
    ],
    post:[
      {icon:'😊',name:'PAC 個案滿意度調查表',meta:'結案後建立',status:'pending'},
      {icon:'📊',name:'PAC 個案出院追蹤記錄表',meta:'結案後建立',status:'pending'},
    ]
  },
  home:{
    common:[
      {icon:'📋',name:'個案綜合評估報告書（評估總表）',meta:'自動帶入評估週數與日期',status:'done'},
      {icon:'📄',name:'PAC 照護模式記錄表',meta:'個管師建立',status:'required'},
      {icon:'📝',name:'PAC 收案會議記錄',meta:'空白表單',status:'pending'},
      {icon:'💬',name:'醫病溝通會議記錄',meta:'空白表單',status:'pending'},
      {icon:'📃',name:'專審表',meta:'送展延需要',status:'required'},
      {icon:'💰',name:'患者門診費用明細（居家）',meta:'人員安排串接居家排班',status:'required'},
      {icon:'📋',name:'PAC 居家復健治療紀錄',meta:'人員安排串接居家排班',status:'pending'},
      {icon:'🏠',name:'居家環境評估暨危險因子檢核表',meta:'初次居家訪視',status:'pending'},
      {icon:'📅',name:'居家復健排班表',meta:'人員安排串接居家排班',status:'pending'},
    ],
    post:[
      {icon:'😊',name:'PAC 個案滿意度調查表',meta:'結案後建立',status:'pending'},
      {icon:'📊',name:'PAC 個案出院追蹤記錄表',meta:'結案後建立',status:'pending'},
      {icon:'🏥',name:'PAC 居家訪視護理記錄表',meta:'結案後建立',status:'pending'},
    ]
  },
  general:{
    common:[
      {icon:'📋',name:'復健評估記錄（一般）',meta:'非PAC標準表單',status:'pending'},
      {icon:'📝',name:'家屬聯繫紀錄',meta:'',status:'done'},
    ],
    post:[]
  }
};

// ── 表單填寫內容 ──
const FORM_FILL_CONTENT={
  '個案綜合評估報告書（評估總表）':{
    sections:[
      {title:'個案基本資料（自動帶入）',fields:[
        {label:'個案姓名',value:'陳建國',readonly:true,type:'text'},
        {label:'病歷號',value:'00073450',readonly:true,type:'text'},
        {label:'照護模式',value:'住院',readonly:true,type:'text'},
        {label:'PAC 疾病別',value:'CVA（腦中風）',readonly:true,type:'text'},
        {label:'上游醫院',value:'臺大醫院',readonly:true,type:'text'},
        {label:'主治醫師',value:'張宗達 醫師',readonly:true,type:'text'},
        {label:'入院日期',value:'2026/06/10',readonly:true,type:'text'},
        {label:'預計出院日期',value:'2026/09/02',readonly:true,type:'text'},
        {label:'療程週期',value:'12 週',readonly:true,type:'text'},
      ]},
      {title:'評估次別總覽',table:true,rows:[
        {label:'初評',date:'2026/06/11',week:'第1週',pt:'Br.III',ot:'30分',st:'輕度',status:'done'},
        {label:'複評1',date:'2026/06/25',week:'第3週',pt:'待填',ot:'待填',st:'完成',status:'pending'},
        {label:'複評2',date:'2026/07/16',week:'第6週',pt:'—',ot:'—',st:'—',status:'future'},
        {label:'結案',date:'2026/09/01',week:'第12週',pt:'—',ot:'—',st:'—',status:'future'},
      ]},
    ]
  },
  'PAC 照護模式記錄表':{
    sections:[
      {title:'基本資料',fields:[
        {label:'個案姓名',value:'陳建國',readonly:true,type:'text'},
        {label:'病歷號',value:'00073450',readonly:true,type:'text'},
        {label:'照護模式',value:'住院',type:'select',options:['住院','日照','居家']},
        {label:'收案日期',value:'2026/06/10',type:'text'},
      ]},
      {title:'照護模式紀錄',fields:[
        {label:'模式說明',value:'住院 PAC，CVA 復健療程，預計 12 週',type:'textarea'},
        {label:'特殊注意事項',value:'右側偏癱，需輪椅輔助，家屬已告知注意事項',type:'textarea'},
        {label:'記錄人員',value:'林美惠',type:'text'},
        {label:'記錄日期',value:'2026/06/10',type:'text'},
      ]}
    ]
  },
  'PAC 收案會議記錄':{
    sections:[
      {title:'會議基本資料',fields:[
        {label:'個案姓名',value:'陳建國',readonly:true,type:'text'},
        {label:'會議日期',value:'2026/06/10',type:'text'},
        {label:'會議地點',value:'5樓會議室',type:'text'},
        {label:'主持人',value:'林美惠',type:'text'},
      ]},
      {title:'出席人員',fields:[
        {label:'個管師',value:'林美惠',type:'text'},
        {label:'醫師',value:'張宗達',type:'text'},
        {label:'復健治療師',value:'黃志豪（PT）、李佳穎（OT）',type:'text'},
        {label:'護理師',value:'陳玉玲',type:'text'},
      ]},
      {title:'會議記錄',fields:[
        {label:'個案狀況摘要',value:'72歲男性，CVA 發作後右側偏癱，符合 PAC 收案條件，預計住院 12 週復健療程。',type:'textarea'},
        {label:'治療目標',value:'改善右側肢體功能，提升 ADL 獨立性，目標 Barthel Index 由 30 分提升至 60 分以上。',type:'textarea'},
        {label:'其他決議',value:'',type:'textarea'},
      ]}
    ]
  },
  '出院準備資料':{
    sections:[
      {title:'出院基本資料',fields:[
        {label:'預計出院日期',value:'2026/09/02',type:'text'},
        {label:'出院去向',value:'',type:'select',options:['返家','轉長照機構','轉其他醫院','其他']},
        {label:'出院方式',value:'',type:'select',options:['步行','輪椅','擔架']},
      ]},
      {title:'出院後安排',fields:[
        {label:'後續復健計畫',value:'門診復健，每週 2 次',type:'textarea'},
        {label:'轉介服務',value:'長照服務評估中',type:'textarea'},
        {label:'衛教事項',value:'',type:'textarea'},
        {label:'回診安排',value:'2026/09/09 復健科門診',type:'text'},
      ]}
    ]
  },
  '居家環境評估暨危險因子檢核表':{
    sections:[
      {title:'居家環境評估',fields:[
        {label:'居住地址',value:'台北市大安區',type:'text'},
        {label:'居住型態',value:'',type:'select',options:['公寓（無電梯）','公寓（有電梯）','透天厝','社區大樓']},
        {label:'樓層',value:'3',type:'text'},
      ]},
      {title:'危險因子檢核',checklist:true,items:[
        '地板是否有防滑處理',
        '浴室是否有扶手',
        '通道是否有足夠寬度（輪椅可通行）',
        '床高是否適當',
        '照明是否充足',
        '是否有門檻需克服',
      ]},
      {title:'評估結論',fields:[
        {label:'環境危險等級',value:'',type:'select',options:['低風險','中風險','高風險']},
        {label:'建議改善事項',value:'',type:'textarea'},
        {label:'評估人員',value:'黃志豪',type:'text'},
        {label:'評估日期',value:'2026/06/20',type:'text'},
      ]}
    ]
  },
};

// ── 頁面渲染 ──
function renderPage(page,caseId,formName){
  currentPage=page;
  const content=document.getElementById('main-content');
  if(page==='list') renderList(content);
  else if(page==='detail') renderDetail(content,caseId);
  else if(page==='form') renderFormFill(content,caseId,formName);
}

function renderList(container){
  document.getElementById('bc').textContent='個案管理';
  const isAdm=currentRole==='adm';
  const isMgr=currentRole==='mgr';

  container.innerHTML=\`
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <div>
        <div style="font-size:18px;font-weight:700">個案管理</div>
        <div style="font-size:12px;color:var(--gray-500);margin-top:3px">共 10 位個案・住院 5・日照 2・居家 2・一般 1</div>
      </div>
      \${isMgr?\`<div style="display:flex;gap:7px">
        <button class="btn btn-secondary btn-sm" onclick="openModal('modal-archive')">封存個案</button>
        <button class="btn btn-primary" onclick="openModal('modal-new')">＋ 新增個案</button>
      </div>\`:''}
    </div>

    <!-- 統計卡 -->
    <div class="stats-row">
      <div class="stat-card urgent">
        <div class="stat-label">⚠ 展延倒數 ≤3天</div>
        <div class="stat-value">2</div>
        <div class="stat-sub">需優先處理</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">新轉介</div>
        <div class="stat-value">1</div>
        <div class="stat-sub">待我判斷</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">待補件</div>
        <div class="stat-value">1</div>
        <div class="stat-sub">已通知</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">待收案判斷</div>
        <div class="stat-value">1</div>
        <div class="stat-sub">含醫師/專護判斷</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">待排床</div>
        <div class="stat-value">1</div>
        <div class="stat-sub">住院個案</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">已收案在院</div>
        <div class="stat-value">4</div>
        <div class="stat-sub">PAC 進行中</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">展延中</div>
        <div class="stat-value">2</div>
        <div class="stat-sub">療程進行中</div>
      </div>
      <div class="stat-card" style="border-color:#DDD6FE;background:var(--purple-light)">
        <div class="stat-label" style="color:var(--purple)">🏁 即將結案</div>
        <div class="stat-value" style="color:var(--purple)">2</div>
        <div class="stat-sub" style="color:var(--purple)">第 10-11 週・準備結案</div>
      </div>
    </div>

    <!-- 即將結案提醒 banner -->
    <div style="background:var(--purple-light);border:1px solid #DDD6FE;border-radius:8px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:8px">
      <div style="font-size:12px;color:var(--purple)">
        <strong>🏁 即將結案提醒</strong>
        <span style="margin-left:8px">林翠娟（第 11 週・Hip Fx）、張明輝（第 10 週・CVA）・請儘快安排結案評估及出院準備</span>
      </div>
      <button class="btn btn-xs" style="background:var(--purple);color:var(--white);border:none" onclick="document.querySelectorAll('.tab')[1].click()">查看個案 →</button>
    </div>

    <!-- 搜尋列 -->
    <div class="search-bar">
      <div class="search-wrap">
        <span class="search-icon">🔍</span>
        <input type="text" placeholder="搜尋姓名、病歷號…">
      </div>
      <select class="filter-sel"><option>全部照護模式</option><option>住院</option><option>日照</option><option>居家</option><option>一般</option></select>
      <select class="filter-sel"><option>全部狀態</option><option>新轉介</option><option>待補件</option><option>待收案判斷</option><option>已收案在院</option><option>展延中</option><option>即將結案</option></select>
      <select class="filter-sel"><option>全部疾病別</option><option>CVA</option><option>TKR</option><option>Hip Fx</option></select>
    </div>

    <!-- Tabs -->
    <div class="tabs">
      <div class="tab active" onclick="switchTab(this,'tab-temp')">臨時病歷 <span class="badge badge-amber" style="margin-left:4px">4</span></div>
      <div class="tab" onclick="switchTab(this,'tab-formal')">正式病歷 <span class="badge badge-blue" style="margin-left:4px">6</span></div>
    </div>

    <!-- 臨時病歷 -->
    <div id="tab-temp" class="case-grid">
      \${CASES.temp.map(c=>caseCard(c)).join('')}
    </div>
    <!-- 正式病歷 -->
    <div id="tab-formal" class="case-grid hidden">
      \${CASES.formal.map(c=>caseCard(c)).join('')}
    </div>
  \`;
}

function caseCard(c){
  const modeClass={hosp:'ms-hosp',day:'ms-day',home:'ms-home',general:'ms-general'}[c.modeType]||'ms-general';
  const statusBadge=\`<span class="badge \${STATUS_COLOR[c.status]||'badge-gray'}">\${c.status}</span>\`;
  const isClosingSoon=c.status==='即將結案';
  const countdown=c.countdown?\`<span class="countdown-badge">展延 \${c.countdown} 天</span>\`:'';
  const weekBadge=c.week?\`<span style="font-size:10px;font-weight:700;padding:2px 7px;border-radius:4px;background:\${isClosingSoon?'var(--purple-light)':'var(--gray-100)'};color:\${isClosingSoon?'var(--purple)':'var(--gray-500)'}">第 \${c.week} 週 / 12</span>\`:'';
  const modeLabel={hosp:'🏥 住院 PAC',day:'☀️ 日照 PAC',home:'🏡 居家 PAC',general:'🏋️ 一般'}[c.modeType]||c.mode;
  const cardBorder=isClosingSoon?'border-color:#DDD6FE;':'';

  if(currentRole==='adm'){
    return \`<div class="case-card" style="\${cardBorder}" onclick="renderPage('detail','\${c.id}')">
      <div class="mode-stripe \${modeClass}"></div>
      <div class="case-card-header"><div><div class="case-name">\${c.name}</div><div class="case-id">\${c.mode}・\${c.disease}</div></div>\${statusBadge}</div>
      <div class="admin-key-field"><label>身分證字號</label><span>A123456789</span></div>
      <div style="margin-top:8px;display:grid;grid-template-columns:1fr 1fr;gap:7px">
        <div class="case-field"><label>入院日期</label><span>\${c.date}</span></div>
        <div class="case-field"><label>床位</label><span>\${c.formal?'A301':'待確認'}</span></div>
      </div>
    </div>\`;
  }

  return \`<div class="case-card" style="\${cardBorder}" onclick="renderPage('detail','\${c.id}')">
    <div class="mode-stripe \${modeClass}"></div>
    \${isClosingSoon?\`<div style="font-size:11px;color:var(--purple);font-weight:600;background:var(--purple-light);padding:5px 10px;margin:-3px -3px 10px;border-radius:3px">🏁 療程即將結束・請準備結案評估</div>\`:''}
    <div class="case-card-header"><div><div class="case-name">\${c.name}</div><div class="case-id">\${modeLabel}・\${c.disease}</div></div>\${statusBadge}</div>
    <div class="case-card-body">
      <div class="case-field"><label>照護模式</label><span>\${c.mode}</span></div>
      <div class="case-field"><label>轉介來源</label><span>\${c.source}</span></div>
      <div class="case-field"><label>轉介日期</label><span>\${c.date}</span></div>
      <div class="case-field"><label>疾病別</label><span>\${c.disease}</span></div>
    </div>
    <div class="case-card-footer">
      <div class="case-manager"><div class="mini-av">林</div>\${c.mgr}</div>
      <div style="display:flex;gap:5px;align-items:center">
        \${weekBadge}
        \${countdown||(!isClosingSoon&&!c.week?statusBadge:'')}
      </div>
    </div>
  </div>\`;
}

function renderDetail(container,caseId){
  currentCase=caseId;
  const allCases=[...CASES.temp,...CASES.formal];
  const c=allCases.find(x=>x.id===caseId)||CASES.formal[0];
  document.getElementById('bc').textContent=\`個案管理 › \${c.name}\`;

  const isMgr=currentRole==='mgr';
  const isDoc=currentRole==='doc';
  const isNur=currentRole==='nur';
  const isAdm=currentRole==='adm';
  const isFormal=c.formal;

  // 進度條 steps
  const steps=[
    {label:'新轉介',sublabel:'',done:true},
    {label:'收案判斷',sublabel:'',done:true},
    {label:c.mode==='住院'?'排床確認':'模式確認',sublabel:'',done:isFormal},
    {label:'正式收案',sublabel:'',done:isFormal,active:!isFormal},
    {label:'PAC療程',sublabel:'',done:isFormal&&c.status!=='已收案在院',active:isFormal&&c.status==='已收案在院'},
    {label:'展延/結案',sublabel:'',done:false},
  ];

  // 行政視角：重點欄位放大顯示
  const adminKeyFields=isAdm?\`
    <div class="info-note amber" style="margin-bottom:12px">⚠️ 以下欄位請仔細核對後登打至杏翔系統，身分證字號打錯將影響所有健保申報。</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:16px">
      <div class="admin-key-field"><label>👤 姓名</label><span>\${c.name}</span></div>
      <div class="admin-key-field"><label>🪪 身分證字號</label><span>A123456789</span></div>
      <div class="admin-key-field"><label>📅 出生日期</label><span>1952/08/20</span></div>
      <div class="admin-key-field"><label>🏥 照護模式</label><span>\${c.mode}</span></div>
      <div class="admin-key-field"><label>🛏 床號</label><span>\${isFormal?'A301':'待確認'}</span></div>
      <div class="admin-key-field"><label>📋 病歷號</label><span>\${isFormal?'00073450':'—'}</span></div>
    </div>
  \`:'';

  // 操作按鈕
  let actions='';
  if(isMgr){
    if(!isFormal) actions=\`
      <button class="btn btn-ghost btn-sm" onclick="openModal('modal-translate')">📄 病摘翻譯</button>
      <button class="btn btn-ghost btn-sm" onclick="openModal('modal-judge')">🩺 轉交判斷</button>
      <button class="btn btn-amber btn-sm" onclick="openModal('modal-convert')">→ 轉正式病歷</button>
      <button class="btn btn-danger btn-sm" onclick="openModal('modal-retire')">退案</button>
      <button class="btn btn-secondary btn-sm" onclick="openModal('modal-archive')">封存</button>
    \`;
    else actions=\`
      <button class="btn btn-ghost btn-sm" onclick="openModal('modal-translate')">📄 病摘翻譯</button>
      <button class="btn btn-ghost btn-sm" onclick="openModal('modal-export-extend')">📤 匯出展延</button>
      <button class="btn btn-ghost btn-sm" onclick="openModal('modal-export-close')">📤 匯出結案</button>
      <button class="btn btn-green btn-sm" onclick="openModal('modal-success-close')">✓ 成功結案</button>
      <button class="btn btn-danger btn-sm" onclick="openModal('modal-fail-close')">不成功結案</button>
    \`;
  } else if(isDoc) actions=\`<span class="badge badge-amber" style="font-size:12px">醫師視角・可填寫 PAC 判斷與醫囑</span>\`;
  else if(isNur) actions=\`<span class="badge badge-teal" style="font-size:12px">護理師視角・可填寫護理相關欄位</span>\`;
  else if(isAdm) actions=\`<span class="badge badge-gray" style="font-size:12px">行政視角・唯讀模式</span>\`;

  // 表單清單
  const modeKey=c.modeType||'hosp';
  const formData=FORMS[modeKey]||FORMS.hosp;
  const fsLabel={'done':'fs-done','required':'fs-required','pending':'fs-pending'};
  const fsText={'done':'已完成','required':'待填寫','pending':'未到期'};

  const formsList=(forms,title,showTitle=true)=>\`
    \${showTitle?\`<div style="font-size:11px;font-weight:700;color:var(--gray-500);text-transform:uppercase;letter-spacing:.04em;margin-bottom:8px">\${title}</div>\`:''}
    <div class="forms-grid">
      \${forms.map(f=>\`
        <div class="form-item" onclick="renderPage('form','\${caseId}','\${f.name}')">
          <div class="form-item-left">
            <div class="form-icon">\${f.icon}</div>
            <div><div class="form-name">\${f.name}</div><div class="form-meta">\${f.meta}</div></div>
          </div>
          <span class="form-status \${fsLabel[f.status]}">\${fsText[f.status]}</span>
        </div>
      \`).join('')}
    </div>
  \`;

  // PAC 判斷區塊
  const judgeBlock=\`
    <div class="section-card">
      <div class="sc-header">
        <div class="sc-title">🩺 PAC 收案判斷</div>
        \${(isDoc||isNur)&&!isAdm?\`<button class="btn btn-primary btn-sm" onclick="alert('開啟判斷填寫')">填寫判斷</button>\`:''}
      </div>
      <div class="sc-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
          \${judgeOption('是 PAC',true)}
          \${judgeOption('非 PAC',false)}
          \${judgeOption('需再評估',false)}
          \${judgeOption('缺件',false)}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          <div class="form-group"><label>判斷 PAC 疾病別</label><input class="form-control" value="CVA（腦中風）" \${isAdm?'readonly':''}></div>
          <div class="form-group"><label>判斷者</label><input class="form-control" value="張宗達 醫師" readonly></div>
          <div class="form-group" style="grid-column:1/-1"><label>判斷原因</label><textarea class="form-control" rows="2" \${isAdm?'readonly':''}>個案符合 CVA PAC 收案條件，開刀位置及病摘內容確認無誤，建議收案。</textarea></div>
          <div class="form-group" style="grid-column:1/-1"><label>補充建議</label><textarea class="form-control" rows="2" \${isAdm?'readonly':''}>建議優先安排物理及職能治療，語言治療視評估結果決定頻率。</textarea></div>
        </div>
      </div>
    </div>
  \`;

  container.innerHTML=\`
    <div class="back-link" onclick="renderPage('list')">← 返回個案列表</div>

    <!-- 詳情 header -->
    <div class="detail-header">
      <div class="detail-top">
        <div class="patient-name">
          \${c.name}
          <span class="badge \${STATUS_COLOR[c.status]||'badge-gray'}">\${c.status}</span>
          <span class="badge badge-blue">\${c.mode}</span>
          <span class="badge badge-gray">\${c.disease}</span>
        </div>
        <div class="detail-actions">\${actions}</div>
      </div>
      <div class="detail-meta">
        <div class="meta-item"><strong>轉介來源：</strong>\${c.source}</div>
        <div class="meta-item"><strong>轉介日期：</strong>\${c.date}</div>
        \${isFormal?\`<div class="meta-item"><strong>病歷號：</strong>00073450</div>\`:''}
        \${isFormal&&c.mode==='住院'?\`<div class="meta-item"><strong>床位：</strong>A301</div>\`:''}
        <div class="meta-item"><strong>負責個管師：</strong>林美惠</div>
        \${c.countdown?\`<div class="meta-item" style="color:var(--red);font-weight:600">⚠️ 展延倒數 \${c.countdown} 天</div>\`:''}
      </div>
    </div>

    \${adminKeyFields}

    <!-- 即將結案提醒 -->
    \${c.status==='即將結案'?\`
    <div style="background:var(--purple-light);border:1px solid #DDD6FE;border-radius:10px;padding:14px 18px;margin-bottom:12px;display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap">
      <div>
        <div style="font-size:13px;font-weight:700;color:var(--purple);margin-bottom:4px">🏁 療程即將結束</div>
        <div style="font-size:12px;color:var(--purple);line-height:1.6">目前為第 \${c.week} 週（共 12 週），系統偵測到療程進入最後階段。<br>請確認以下待辦事項，並與家屬討論後續安排。</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
          <span style="font-size:11px;font-weight:600;padding:3px 9px;border-radius:5px;\${c.week>=11?'background:var(--red-light);color:var(--red)':'background:#FEF3C7;color:var(--amber)'}">
            \${c.week>=11?'⚠ 結案評估應於本週完成':'結案評估應於下週完成'}
          </span>
          <span style="font-size:11px;font-weight:600;padding:3px 9px;border-radius:5px;background:var(--gray-100);color:var(--gray-600)">出院準備資料待填寫</span>
          <span style="font-size:11px;font-weight:600;padding:3px 9px;border-radius:5px;background:var(--gray-100);color:var(--gray-600)">家屬後續安排討論中</span>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0">
        <button class="btn btn-green btn-sm" onclick="openModal('modal-success-close')">✓ 成功結案</button>
        <button class="btn btn-danger btn-sm" onclick="openModal('modal-fail-close')">不成功結案</button>
      </div>
    </div>
    \`:''}

    <!-- 進度條 -->
    <div class="timeline-card">
      <div class="tc-header"><div class="tc-title">個案進度</div></div>
      <div class="timeline-body">
        <div class="timeline-track">
          \${steps.map(s=>\`<div class="t-step \${s.done?'done':''} \${s.active?'active':''}">
            <div class="t-dot">\${s.done?'✓':''}</div>
            <div class="t-label">\${s.label}</div>
          </div>\`).join('')}
        </div>
      </div>
    </div>

    <!-- 個案基本資料 -->
    <div class="section-card">
      <div class="sc-header"><div class="sc-title">👤 個案基本資料</div>\${isMgr?\`<button class="btn btn-ghost btn-xs" onclick="alert('編輯個案資料')">✏️ 編輯</button>\`:''}</div>
      <div class="sc-body">
        <div class="info-grid">
          <div class="info-item"><label>姓名</label><span>\${c.name}</span></div>
          <div class="info-item"><label>身分證</label><span>A123456789</span></div>
          <div class="info-item"><label>出生日期</label><span>1952/08/20（72歲）</span></div>
          <div class="info-item"><label>性別</label><span>男</span></div>
          <div class="info-item"><label>PAC 疾病別</label><span>\${c.disease}</span></div>
          <div class="info-item"><label>照護模式</label><span>\${c.mode}</span></div>
          \${isFormal?\`<div class="info-item"><label>病歷號</label><span>00073450</span></div>\`:''}
          \${isFormal&&c.mode==='住院'?\`<div class="info-item"><label>床位</label><span>A301</span></div><div class="info-item"><label>主治醫師</label><span>張宗達 醫師</span></div>\`:''}
        </div>
        <div class="divider"></div>
        <div class="info-grid">
          <div class="info-item"><label>家屬姓名</label><span>陳小明（兒子）</span></div>
          <div class="info-item"><label>家屬電話</label><span>0912-345-678</span></div>
          <div class="info-item"><label>關係</label><span>兒子</span></div>
        </div>
      </div>
    </div>

    <!-- 家屬聯繫紀錄 -->
    <div class="section-card">
      <div class="sc-header"><div class="sc-title">📞 家屬聯繫紀錄</div>\${isMgr?\`<button class="btn btn-ghost btn-xs" onclick="alert('新增聯繫紀錄')">＋ 新增</button>\`:''}</div>
      <div class="sc-body">
        <div class="contact-log">
          <div class="contact-entry done">
            <div>
              <div class="contact-label">第一次聯繫</div>
              <div class="contact-meta">2026/06/10 10:30・電話</div>
              <div class="contact-note">告知注意事項、入院日期及床位，家屬表示了解並同意入院。</div>
            </div>
          </div>
          <div class="contact-entry done">
            <div>
              <div class="contact-label">第二次聯繫（W4W5 確認）</div>
              <div class="contact-meta">2026/06/17 14:00・電話</div>
              <div class="contact-note">確認入院計畫，家屬已確認，無異動。</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 上游聯繫紀錄 -->
    <div class="section-card">
      <div class="sc-header"><div class="sc-title">🏥 上游聯繫紀錄</div>\${isMgr?\`<button class="btn btn-ghost btn-xs" onclick="alert('新增聯繫紀錄')">＋ 新增</button>\`:''}</div>
      <div class="sc-body">
        <div class="info-grid-2" style="margin-bottom:12px">
          <div class="info-item"><label>上游醫院</label><span>臺大醫院</span></div>
          <div class="info-item"><label>轉介窗口</label><span>李護理師（出院準備服務）</span></div>
          <div class="info-item"><label>聯絡電話</label><span>02-1234-5678 #456</span></div>
          <div class="info-item"><label>聯繫狀態</label><span style="color:var(--green);font-weight:600">✓ 已回報收案</span></div>
        </div>
      </div>
    </div>

    <!-- 病摘 -->
    <div class="section-card">
      <div class="sc-header">
        <div class="sc-title">📄 病摘</div>
        \${isMgr?\`<div style="display:flex;gap:6px"><button class="btn btn-ghost btn-xs" onclick="openModal('modal-translate')">輔助翻譯</button></div>\`:''}
      </div>
      <div class="sc-body">
        <div style="font-size:11px;color:var(--gray-400);margin-bottom:8px">英文原文</div>
        <div style="font-size:12px;line-height:1.75;color:var(--gray-700);background:var(--gray-50);padding:12px;border-radius:6px">
          Left MCA infarction with right hemiparesis. Patient is a 72-year-old male who presented with sudden onset of right-sided weakness and aphasia. CT scan confirmed left middle cerebral artery territory infarction. Patient underwent thrombolysis and is now stable for PAC rehabilitation program.
        </div>
      </div>
    </div>

    <!-- PAC 收案判斷 -->
    \${judgeBlock}

    <!-- 相關表單 -->
    \${isFormal?\`
    <div class="section-card">
      <div class="sc-header"><div class="sc-title">📑 相關表單</div></div>
      <div class="sc-body">
        \${formsList(formData.common,'在院期間表單')}
        \${formData.post.length?\`<div class="divider"></div>\${formsList(formData.post,'結案後表單')}\`:''}
      </div>
    </div>
    \`:''}

    <!-- 結案轉介 -->
    \${isFormal&&isMgr?\`
    <div class="section-card">
      <div class="sc-header"><div class="sc-title">🔄 結案轉介筆記</div></div>
      <div class="sc-body">
        <div class="form-group" style="margin-bottom:10px">
          <label>轉介去向</label>
          <select class="form-control"><option>無需轉介</option><option>轉介居家醫療</option><option>轉介長照服務</option><option>轉介社工服務</option></select>
        </div>
        <div class="form-group">
          <label>轉介備註</label>
          <textarea class="form-control" rows="3" placeholder="轉介服務說明、聯絡窗口等…"></textarea>
        </div>
        <div style="display:flex;justify-content:flex-end;margin-top:8px">
          <button class="btn btn-primary btn-sm" onclick="alert('轉介筆記已儲存')">儲存</button>
        </div>
      </div>
    </div>
    \`:''}
  \`;
}

function judgeOption(label,selected){
  return \`<div class="judge-option \${selected?'selected':''}" onclick="this.parentElement.querySelectorAll('.judge-option').forEach(el=>el.classList.remove('selected'));this.classList.add('selected')">
    <input type="radio" name="judge-result" \${selected?'checked':''}><span>\${label}</span>
  </div>\`;
}

function renderFormFill(container,caseId,formName){
  currentForm=formName;
  const allCases=[...CASES.temp,...CASES.formal];
  const c=allCases.find(x=>x.id===caseId)||CASES.formal[0];
  document.getElementById('bc').textContent=\`個案管理 › \${c.name} › \${formName}\`;

  const fillData=FORM_FILL_CONTENT[formName];
  const isMgr=currentRole==='mgr';

  let sectionsHTML='';
  if(fillData){
    sectionsHTML=fillData.sections.map(sec=>{
      if(sec.table){
        return \`<div class="form-section">
          <div class="fs-header"><div class="fs-title">\${sec.title}</div></div>
          <div class="fs-body" style="padding:0">
            <table style="width:100%;border-collapse:collapse;font-size:12px">
              <thead><tr style="background:var(--gray-50)">
                <th style="padding:8px 12px;text-align:left;border-bottom:1px solid var(--gray-200);font-size:11px;color:var(--gray-500)">次別</th>
                <th style="padding:8px 12px;text-align:left;border-bottom:1px solid var(--gray-200);font-size:11px;color:var(--gray-500)">日期</th>
                <th style="padding:8px 12px;border-bottom:1px solid var(--gray-200);font-size:11px;color:var(--gray-500)">病程週數</th>
                <th style="padding:8px 12px;border-bottom:1px solid var(--gray-200);font-size:11px;color:var(--gray-500)">PT</th>
                <th style="padding:8px 12px;border-bottom:1px solid var(--gray-200);font-size:11px;color:var(--gray-500)">OT</th>
                <th style="padding:8px 12px;border-bottom:1px solid var(--gray-200);font-size:11px;color:var(--gray-500)">ST</th>
                <th style="padding:8px 12px;border-bottom:1px solid var(--gray-200);font-size:11px;color:var(--gray-500)">狀態</th>
              </tr></thead>
              <tbody>
                \${sec.rows.map((r,i)=>\`<tr style="\${i===1?'background:var(--blue-light)':''} \${r.status==='future'?'opacity:.5':''}">
                  <td style="padding:9px 12px;border-bottom:1px solid var(--gray-100);font-weight:600">\${r.label}</td>
                  <td style="padding:9px 12px;border-bottom:1px solid var(--gray-100)">\${r.date}</td>
                  <td style="padding:9px 12px;border-bottom:1px solid var(--gray-100);text-align:center">\${r.week}</td>
                  <td style="padding:9px 12px;border-bottom:1px solid var(--gray-100);color:var(--blue);font-weight:600">\${r.pt}</td>
                  <td style="padding:9px 12px;border-bottom:1px solid var(--gray-100);color:#9D174D;font-weight:600">\${r.ot}</td>
                  <td style="padding:9px 12px;border-bottom:1px solid var(--gray-100);color:var(--green);font-weight:600">\${r.st}</td>
                  <td style="padding:9px 12px;border-bottom:1px solid var(--gray-100)">
                    \${r.status==='done'?'<span class="badge badge-green">✓ 完成</span>':r.status==='pending'?'<span class="badge badge-amber">待填</span>':'<span class="badge badge-gray">未到期</span>'}
                  </td>
                </tr>\`).join('')}
              </tbody>
            </table>
          </div>
        </div>\`;
      }
      if(sec.checklist){
        return \`<div class="form-section">
          <div class="fs-header"><div class="fs-title">\${sec.title}</div></div>
          <div class="fs-body">
            <div class="checklist">
              \${sec.items.map(item=>\`<div class="check-item"><input type="checkbox"><span>\${item}</span></div>\`).join('')}
            </div>
          </div>
        </div>\`;
      }
      const fieldsHTML=sec.fields.map(f=>{
        if(f.type==='textarea') return \`<div class="form-group full"><label>\${f.label}</label><textarea class="form-control" rows="3" \${f.readonly?'readonly':''}>\${f.value||''}</textarea></div>\`;
        if(f.type==='select') return \`<div class="form-group"><label>\${f.label}</label><select class="form-control" \${f.readonly?'disabled':''}>\${(f.options||[]).map(o=>\`<option \${o===f.value?'selected':''}>\${o}</option>\`).join('')}</select></div>\`;
        return \`<div class="form-group"><label>\${f.label}</label><input class="form-control" type="text" value="\${f.value||''}" \${f.readonly?'readonly':''}></div>\`;
      }).join('');
      return \`<div class="form-section">
        <div class="fs-header"><div class="fs-title">\${sec.title}</div></div>
        <div class="fs-body"><div class="form-row">\${fieldsHTML}</div></div>
      </div>\`;
    }).join('');
  } else {
    // 沒有預設內容的表單：顯示通用框架
    sectionsHTML=\`
      <div class="form-section">
        <div class="fs-header"><div class="fs-title">基本資料（自動帶入）</div></div>
        <div class="fs-body">
          <div class="form-row">
            <div class="form-group"><label>個案姓名</label><input class="form-control" value="\${c.name}" readonly></div>
            <div class="form-group"><label>病歷號</label><input class="form-control" value="\${c.formal?'00073450':'—'}" readonly></div>
            <div class="form-group"><label>照護模式</label><input class="form-control" value="\${c.mode}" readonly></div>
            <div class="form-group"><label>記錄日期</label><input class="form-control" type="date" value="2026-06-25"></div>
          </div>
        </div>
      </div>
      <div class="form-section">
        <div class="fs-header"><div class="fs-title">填寫內容</div></div>
        <div class="fs-body">
          <div class="info-note blue">此表單內容依實際使用情境填寫，欄位設計將依業務需求細化。</div>
          <div class="form-group full"><label>主要內容</label><textarea class="form-control" rows="5" placeholder="填寫\${formName}相關內容..."></textarea></div>
          <div class="form-group full"><label>備註</label><textarea class="form-control" rows="2" placeholder="其他備註..."></textarea></div>
        </div>
      </div>
    \`;
  }

  container.innerHTML=\`
    <div class="back-link" onclick="renderPage('detail','\${caseId}')">← 返回 \${c.name} 個案詳情</div>

    <div class="form-fill-header">
      <div>
        <div class="ff-title">\${formName}</div>
        <div class="ff-meta">\${c.name}・\${c.mode}・\${c.disease}・2026/06/25</div>
      </div>
      <div class="ff-actions">
        <button class="btn btn-secondary btn-sm" onclick="alert('已列印')">🖨️ 列印</button>
        <button class="btn btn-secondary btn-sm" onclick="alert('已預覽')">👁 預覽</button>
        <button class="btn btn-secondary btn-sm" onclick="alert('已暫存')">暫存</button>
        \${isMgr||currentRole==='doc'||currentRole==='nur'?\`<button class="btn btn-primary btn-sm" onclick="alert('表單已送出')">送出</button>\`:''}
      </div>
    </div>

    \${sectionsHTML}

    <div class="form-footer">
      <div style="font-size:11px;color:var(--gray-500)">最後儲存：2026/06/25 14:30・林美惠</div>
      <div style="display:flex;gap:7px">
        <button class="btn btn-secondary btn-sm" onclick="alert('已暫存')">暫存</button>
        \${isMgr||currentRole==='doc'||currentRole==='nur'?\`<button class="btn btn-primary btn-sm" onclick="alert('表單已送出')">送出</button>\`:''}
      </div>
    </div>
  \`;
}

// ── 工具函式 ──
function switchTab(el,targetId){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  ['tab-temp','tab-formal'].forEach(id=>{
    const el2=document.getElementById(id);
    if(el2) el2.classList.toggle('hidden',id!==targetId);
  });
}
function switchModalTab(el,targetId){
  el.closest('.modal-body').querySelectorAll('.modal-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  ['new-manual','new-ocr','new-his'].forEach(id=>{
    const el2=document.getElementById(id);
    if(el2) el2.classList.toggle('hidden',id!==targetId);
  });
}
function showHisResult(){
  document.getElementById('his-result').classList.remove('hidden');
}
function openModal(id){document.getElementById(id).classList.remove('hidden')}
function closeModal(id){document.getElementById(id).classList.add('hidden')}
document.querySelectorAll('.modal-overlay').forEach(o=>o.addEventListener('click',function(e){if(e.target===this)this.classList.add('hidden')}));

function switchRole(role){
  currentRole=role;
  const cfg=ROLES[role];
  document.getElementById('user-av').textContent=cfg.ch;
  document.getElementById('user-av').className='user-avatar '+cfg.av;
  document.getElementById('user-name').textContent=cfg.name;
  document.getElementById('user-role-label').textContent=cfg.label;
  // 重新渲染目前頁面
  if(currentPage==='list') renderPage('list');
  else if(currentPage==='detail'&&currentCase) renderPage('detail',currentCase);
  else if(currentPage==='form'&&currentCase&&currentForm) renderPage('form',currentCase,currentForm);
}

// Init
renderPage('list');
<\/script>
</body>
</html>`,rg=`<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PAC 病床管理</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --blue: #2563EB; --blue-light: #EFF6FF; --blue-mid: #BFDBFE; --blue-dark: #1E40AF;
  --gray-50: #F8FAFC; --gray-100: #F1F5F9; --gray-200: #E2E8F0; --gray-300: #CBD5E1;
  --gray-400: #94A3B8; --gray-500: #64748B; --gray-600: #475569; --gray-700: #334155; --gray-900: #0F172A;
  --green: #16A34A; --green-light: #DCFCE7;
  --amber: #D97706; --amber-light: #FEF3C7;
  --red: #DC2626; --red-light: #FEE2E2;
  --purple: #7C3AED; --purple-light: #EDE9FE;
  --teal: #0D9488; --teal-light: #CCFBF1;
  --white: #FFFFFF;
}
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', sans-serif; background: var(--gray-50); color: var(--gray-900); height: 100vh; display: flex; overflow: hidden; font-size: 14px; }

/* Sidebar */
.sidebar { width: 192px; min-width: 192px; background: var(--white); border-right: 1px solid var(--gray-200); display: flex; flex-direction: column; }
.sidebar-logo { padding: 16px 16px 13px; border-bottom: 1px solid var(--gray-200); }
.logo-text { font-size: 14px; font-weight: 700; color: var(--blue); }
.logo-sub { font-size: 11px; color: var(--gray-400); margin-top: 2px; }
.sidebar-nav { padding: 6px 0; flex: 1; }
.nav-item { display: flex; align-items: center; gap: 8px; padding: 9px 14px; font-size: 13px; color: var(--gray-500); border-left: 3px solid transparent; }
.nav-item.active { background: var(--blue-light); color: var(--blue); font-weight: 600; border-left-color: var(--blue); cursor: pointer; }
.nav-item.disabled { opacity: 0.38; cursor: not-allowed; }
.sidebar-user { margin-top: auto;padding: 11px 14px; border-top: 1px solid var(--gray-200); display: flex; align-items: center; gap: 8px; }
.user-avatar { width: 28px; height: 28px; border-radius: 50%; background: var(--blue-mid); color: var(--blue-dark); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; }
.user-name { font-size: 12px; font-weight: 600; color: var(--gray-700); }
.user-role { font-size: 11px; color: var(--gray-400); }

/* Main */
.main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.topbar { background: var(--white); border-bottom: 1px solid var(--gray-200); padding: 0 20px; height: 48px; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }
.breadcrumb { font-size: 12px; color: var(--gray-500); }
.content { flex: 1; overflow-y: auto; padding: 20px; }

/* Buttons */
.btn { display: inline-flex; align-items: center; gap: 5px; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; border: none; cursor: pointer; transition: all 0.15s; white-space: nowrap; }
.btn-primary { background: var(--blue); color: var(--white); }
.btn-primary:hover { background: var(--blue-dark); }
.btn-secondary { background: var(--white); color: var(--gray-700); border: 1px solid var(--gray-300); }
.btn-secondary:hover { background: var(--gray-50); }
.btn-ghost { background: transparent; color: var(--blue); border: 1px solid var(--blue-mid); }
.btn-ghost:hover { background: var(--blue-light); }
.btn-danger { background: var(--white); color: var(--red); border: 1px solid #FECACA; }
.btn-danger:hover { background: var(--red-light); }
.btn-sm { padding: 5px 10px; font-size: 12px; }
.btn-xs { padding: 3px 8px; font-size: 11px; }

/* Badges */
.badge { display: inline-flex; align-items: center; padding: 2px 7px; border-radius: 999px; font-size: 11px; font-weight: 600; }
.badge-blue { background: var(--blue-light); color: var(--blue); }
.badge-green { background: var(--green-light); color: var(--green); }
.badge-amber { background: var(--amber-light); color: var(--amber); }
.badge-gray { background: var(--gray-100); color: var(--gray-500); }
.badge-red { background: var(--red-light); color: var(--red); }
.badge-purple { background: var(--purple-light); color: var(--purple); }
.badge-teal { background: var(--teal-light); color: var(--teal); }

/* Type tags with text */
.type-tag { display: inline-flex; align-items: center; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 700; letter-spacing: 0.02em; }
.type-pac { background: var(--blue-light); color: var(--blue-dark); border: 1px solid var(--blue-mid); }
.type-general { background: var(--gray-100); color: var(--gray-600); border: 1px solid var(--gray-300); }
.type-hospice { background: var(--purple-light); color: var(--purple); border: 1px solid #DDD6FE; }

/* Tabs */
.tabs { display: flex; border-bottom: 2px solid var(--gray-200); margin-bottom: 16px; }
.tab { padding: 8px 16px; font-size: 13px; font-weight: 500; color: var(--gray-500); cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; }
.tab.active { color: var(--blue); border-bottom-color: var(--blue); }

/* Sub tabs (floor) */
.floor-tabs { display: flex; gap: 4px; margin-bottom: 16px; }
.floor-tab { padding: 5px 14px; font-size: 12px; font-weight: 500; color: var(--gray-500); cursor: pointer; border-radius: 6px; border: 1px solid var(--gray-200); background: var(--white); }
.floor-tab.active { background: var(--blue); color: var(--white); border-color: var(--blue); }

/* View toggle */
.view-toggle { display: flex; border: 1px solid var(--gray-200); border-radius: 6px; overflow: hidden; }
.view-btn { padding: 5px 10px; font-size: 12px; cursor: pointer; background: var(--white); color: var(--gray-500); border: none; }
.view-btn.active { background: var(--blue); color: var(--white); }

/* Stats strip */
.stats-strip { display: flex; gap: 10px; margin-bottom: 16px; flex-wrap: wrap; }
.stat-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: 8px; padding: 10px 16px; display: flex; flex-direction: column; gap: 2px; min-width: 100px; }
.stat-label { font-size: 10px; color: var(--gray-400); text-transform: uppercase; letter-spacing: 0.04em; }
.stat-value { font-size: 20px; font-weight: 700; color: var(--gray-900); }
.stat-card.highlight { border-color: var(--blue-mid); background: var(--blue-light); }
.stat-card.highlight .stat-value { color: var(--blue); }
.stat-card.today-in { border-color: #BBF7D0; background: var(--green-light); }
.stat-card.today-in .stat-value { color: var(--green); }
.stat-card.today-out { border-color: #FDE68A; background: var(--amber-light); }
.stat-card.today-out .stat-value { color: var(--amber); }

/* Page header */
.page-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 16px; }
.page-title { font-size: 18px; font-weight: 700; }
.page-subtitle { font-size: 12px; color: var(--gray-500); margin-top: 3px; }

/* Search bar */
.toolbar { display: flex; gap: 7px; margin-bottom: 14px; align-items: center; flex-wrap: wrap; justify-content: space-between; }
.toolbar-left { display: flex; gap: 7px; align-items: center; flex-wrap: wrap; }
.toolbar-right { display: flex; gap: 7px; align-items: center; }
.search-wrap { position: relative; }
.search-wrap input { padding: 6px 10px 6px 30px; border: 1px solid var(--gray-300); border-radius: 6px; font-size: 12px; outline: none; width: 200px; }
.search-wrap input:focus { border-color: var(--blue); }
.search-icon { position: absolute; left: 9px; top: 50%; transform: translateY(-50%); color: var(--gray-400); font-size: 12px; }

/* ── Grid view ── */
.bed-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
.bed-cell {
  border-radius: 8px; padding: 12px; cursor: pointer;
  transition: all 0.15s; border: 2px solid transparent;
  display: flex; flex-direction: column; gap: 5px; min-height: 110px;
}
.bed-cell:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.bed-cell.available { background: var(--green-light); border-color: #BBF7D0; }
.bed-cell.pac { background: var(--blue-light); border-color: var(--blue-mid); }
.bed-cell.general { background: var(--gray-100); border-color: var(--gray-200); }
.bed-cell.hospice { background: var(--purple-light); border-color: #DDD6FE; }
.bed-cell.reserved { background: var(--amber-light); border-color: #FDE68A; }
.bed-cell.pending { background: #FFF7ED; border-color: #FED7AA; }
.bed-cell.maintenance { background: var(--gray-50); border-color: var(--gray-200); opacity: 0.6; }

.bed-no { font-size: 12px; font-weight: 700; color: var(--gray-700); }
.bed-patient { font-size: 13px; font-weight: 600; color: var(--gray-900); margin-top: 2px; }
.bed-diagnosis { font-size: 11px; color: var(--gray-500); }
.bed-date { font-size: 10px; color: var(--gray-400); margin-top: auto; }
.bed-status-label { font-size: 10px; font-weight: 600; }
.bed-cell.available .bed-status-label { color: var(--green); }
.bed-cell.pac .bed-status-label { color: var(--blue); }
.bed-cell.general .bed-status-label { color: var(--gray-500); }
.bed-cell.hospice .bed-status-label { color: var(--purple); }
.bed-cell.reserved .bed-status-label { color: var(--amber); }
.bed-cell.pending .bed-status-label { color: #EA580C; }
.bed-cell.maintenance .bed-status-label { color: var(--gray-400); }

.extend-badge { font-size: 10px; padding: 1px 5px; border-radius: 3px; font-weight: 600; margin-top: 2px; display: inline-block; }
.extend-pending { background: var(--amber-light); color: var(--amber); }
.extend-approved { background: var(--green-light); color: var(--green); }

/* ── List view ── */
.bed-list-table { width: 100%; border-collapse: collapse; font-size: 12px; background: var(--white); border-radius: 8px; overflow: hidden; border: 1px solid var(--gray-200); }
.bed-list-table th { text-align: left; padding: 8px 12px; background: var(--gray-50); color: var(--gray-500); font-weight: 600; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--gray-200); }
.bed-list-table td { padding: 9px 12px; border-bottom: 1px solid var(--gray-100); color: var(--gray-700); vertical-align: middle; }
.bed-list-table tr:last-child td { border-bottom: none; }
.bed-list-table tr:hover td { background: var(--gray-50); cursor: pointer; }
.bed-list-table tr.available-row td { background: #F0FDF4; }

/* ── Case list ── */
.section-label { font-size: 11px; font-weight: 700; color: var(--gray-500); text-transform: uppercase; letter-spacing: 0.06em; padding: 8px 0 6px; margin-top: 6px; display: flex; align-items: center; gap: 8px; }
.section-label::after { content: ''; flex: 1; height: 1px; background: var(--gray-200); }

.case-list-table { width: 100%; border-collapse: collapse; font-size: 12px; background: var(--white); border-radius: 8px; overflow: hidden; border: 1px solid var(--gray-200); margin-bottom: 12px; }
.case-list-table th { text-align: left; padding: 8px 12px; background: var(--gray-50); color: var(--gray-500); font-weight: 600; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--gray-200); }
.case-list-table td { padding: 9px 12px; border-bottom: 1px solid var(--gray-100); color: var(--gray-700); vertical-align: middle; }
.case-list-table tr:last-child td { border-bottom: none; }
.case-list-table tr:hover td { background: var(--gray-50); cursor: pointer; }

/* Expandable row */
.expand-btn { background: none; border: none; cursor: pointer; color: var(--gray-400); font-size: 11px; padding: 2px 4px; border-radius: 3px; }
.expand-btn:hover { background: var(--gray-100); color: var(--gray-600); }
.expand-row td { background: var(--gray-50); padding: 10px 12px 10px 32px; }
.expand-content { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.expand-field label { font-size: 10px; color: var(--gray-400); display: block; margin-bottom: 3px; text-transform: uppercase; letter-spacing: 0.04em; }
.expand-field span { font-size: 12px; color: var(--gray-700); font-weight: 500; }
.expand-note { font-size: 12px; color: var(--gray-600); background: var(--white); border: 1px solid var(--gray-200); border-radius: 5px; padding: 7px 9px; min-height: 40px; width: 100%; }

/* Modal */
.modal-overlay { position: fixed; inset: 0; background: rgba(15,23,42,0.5); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(2px); }
.modal { background: var(--white); border-radius: 12px; width: 520px; max-width: 92vw; max-height: 88vh; display: flex; flex-direction: column; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
.modal-lg { width: 640px; }
.modal-header { padding: 16px 20px 13px; border-bottom: 1px solid var(--gray-200); display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }
.modal-title { font-size: 15px; font-weight: 700; }
.modal-close { width: 25px; height: 25px; border-radius: 5px; border: none; background: var(--gray-100); color: var(--gray-500); cursor: pointer; font-size: 13px; display: flex; align-items: center; justify-content: center; }
.modal-close:hover { background: var(--gray-200); }
.modal-body { padding: 16px 20px; overflow-y: auto; flex: 1; }
.modal-footer { padding: 13px 20px; border-top: 1px solid var(--gray-200); display: flex; justify-content: flex-end; gap: 7px; flex-shrink: 0; }

/* Form */
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }
.form-group { display: flex; flex-direction: column; gap: 5px; }
.form-group.full { grid-column: 1 / -1; }
.form-group label { font-size: 12px; font-weight: 500; color: var(--gray-600); }
.required { color: var(--red); margin-left: 2px; }
.form-control { padding: 7px 10px; border: 1px solid var(--gray-300); border-radius: 6px; font-size: 13px; color: var(--gray-800); background: var(--white); outline: none; }
.form-control:focus { border-color: var(--blue); box-shadow: 0 0 0 3px var(--blue-light); }
select.form-control { cursor: pointer; }
textarea.form-control { resize: vertical; min-height: 70px; }

/* Bed picker */
.bed-picker { display: grid; grid-template-columns: repeat(5, 1fr); gap: 7px; margin-top: 8px; }
.bed-pick-cell { padding: 8px 4px; border-radius: 6px; text-align: center; font-size: 12px; font-weight: 600; cursor: pointer; border: 2px solid transparent; }
.bed-pick-cell.available { background: var(--green-light); color: var(--green); border-color: #BBF7D0; }
.bed-pick-cell.available:hover { border-color: var(--green); }
.bed-pick-cell.taken { background: var(--gray-100); color: var(--gray-400); cursor: not-allowed; }
.bed-pick-cell.selected { background: var(--blue); color: var(--white); border-color: var(--blue-dark); }

/* Info box */
.info-box { background: var(--blue-light); border-radius: 7px; padding: 10px 13px; font-size: 12px; color: var(--blue-dark); margin-bottom: 14px; }
.warn-box { background: var(--amber-light); border-radius: 7px; padding: 10px 13px; font-size: 12px; color: var(--amber); margin-top: 12px; }

.divider { height: 1px; background: var(--gray-100); margin: 13px 0; }
.hidden { display: none !important; }
.mt-10 { margin-top: 10px; }
</style>
</head>
<body>

<!-- SIDEBAR -->
<aside class="sidebar">
<!--
  <div class="sidebar-logo">
    <div class="logo-text">PAC 管理系統</div>
    <div class="logo-sub">急性後期照護</div>
  </div>
  <nav class="sidebar-nav">
    <div class="nav-item disabled">🏠 個人儀表板</div>
    <div class="nav-item disabled">📋 個案管理</div>
    <div class="nav-item active">🛏 病床管理</div>
    <div class="nav-item disabled">📅 班表總覽頁</div>
    <div class="nav-item disabled">🏡 居家排班管理</div>
    <div class="nav-item disabled">📊 評估量表</div>
    <div class="nav-item disabled">💪 復健紀錄</div>
    <div class="nav-item disabled">📤 指標匯出</div>
  </nav>
-->
  <div class="sidebar-user">
    <div class="user-avatar">林</div>
    <div>
      <div class="user-name">林美惠</div>
      <div class="user-role">個案管理師</div>
    </div>
  </div>
</aside>

<!-- MAIN -->
<div class="main">
  <div class="topbar">
    <div class="breadcrumb">病床管理</div>
    <div style="font-size:11px;color:var(--gray-400)">2026/06/23</div>
  </div>
  <div class="content">

    <div class="page-header">
      <div>
        <div class="page-title">病床管理</div>
        <div class="page-subtitle">3–6 樓・共 72 床</div>
      </div>
      <button class="btn btn-primary" onclick="openModal('modal-add-bed')">＋ 新增排床</button>
    </div>

    <!-- 統計列 -->
    <div class="stats-strip">
      <div class="stat-card highlight"><div class="stat-label">可使用</div><div class="stat-value">12</div></div>
      <div class="stat-card"><div class="stat-label">PAC 住院中</div><div class="stat-value">28</div></div>
      <div class="stat-card"><div class="stat-label">一般住院</div><div class="stat-value">18</div></div>
      <div class="stat-card"><div class="stat-label">安寧</div><div class="stat-value">4</div></div>
      <div class="stat-card"><div class="stat-label">已預約</div><div class="stat-value">6</div></div>
      <div class="stat-card"><div class="stat-label">待排床</div><div class="stat-value">3</div></div>
      <div class="stat-card"><div class="stat-label">清潔／維修</div><div class="stat-value">1</div></div>
      <div class="stat-card today-in"><div class="stat-label">今日入院</div><div class="stat-value">2</div></div>
      <div class="stat-card today-out"><div class="stat-label">今日出院</div><div class="stat-value">3</div></div>
    </div>

    <!-- Main tabs -->
    <div class="tabs">
      <div class="tab active" onclick="switchMainTab(this,'bed-overview')">床位總覽</div>
      <div class="tab" onclick="switchMainTab(this,'case-list')">住院個案列表</div>
    </div>

    <!-- ══ 床位總覽 ══ -->
    <div id="tab-bed-overview">
      <div class="toolbar">
        <div class="toolbar-left">
          <div class="floor-tabs">
            <div class="floor-tab active" onclick="switchFloor(this,'3f')">3F</div>
            <div class="floor-tab" onclick="switchFloor(this,'4f')">4F</div>
            <div class="floor-tab" onclick="switchFloor(this,'5f')">5F</div>
            <div class="floor-tab" onclick="switchFloor(this,'6f')">6F</div>
          </div>
          <button class="btn btn-secondary btn-sm">類型 ▾</button>
          <button class="btn btn-secondary btn-sm">狀態 ▾</button>
        </div>
        <div class="toolbar-right">
          <div class="view-toggle">
            <button class="view-btn active" id="vbtn-grid" onclick="switchView('grid')">▦ 格狀</button>
            <button class="view-btn" id="vbtn-list" onclick="switchView('list')">☰ 列表</button>
          </div>
        </div>
      </div>

      <!-- 圖例 -->
      <div style="display:flex;gap:12px;margin-bottom:14px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)"><span style="width:12px;height:12px;border-radius:3px;background:var(--green-light);border:1px solid #BBF7D0;display:inline-block"></span>可使用</div>
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)"><span style="width:12px;height:12px;border-radius:3px;background:var(--blue-light);border:1px solid var(--blue-mid);display:inline-block"></span>PAC 住院</div>
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)"><span style="width:12px;height:12px;border-radius:3px;background:var(--gray-100);border:1px solid var(--gray-200);display:inline-block"></span>一般住院</div>
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)"><span style="width:12px;height:12px;border-radius:3px;background:var(--purple-light);border:1px solid #DDD6FE;display:inline-block"></span>安寧</div>
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)"><span style="width:12px;height:12px;border-radius:3px;background:var(--amber-light);border:1px solid #FDE68A;display:inline-block"></span>已預約</div>
        <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)"><span style="width:12px;height:12px;border-radius:3px;background:#FFF7ED;border:1px solid #FED7AA;display:inline-block"></span>待排床</div>
      </div>

      <!-- 格狀 -->
      <div id="view-grid">
        <!-- 3F -->
        <div id="floor-3f">
          <div class="bed-grid">
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">
              <div class="bed-no">301-A</div>
              <div class="bed-patient">李文雄</div>
              <div class="bed-diagnosis">CVA（腦中風）</div>
              <div class="extend-badge extend-pending">展延申請中</div>
              <div class="bed-status-label">PAC 住院</div>
              <div class="bed-date">預計出院 07/05</div>
            </div>
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">
              <div class="bed-no">301-B</div>
              <div class="bed-patient">鄭大偉</div>
              <div class="bed-diagnosis">骨科（膝關節）</div>
              <div class="extend-badge extend-approved">展延通過</div>
              <div class="bed-status-label">PAC 住院</div>
              <div class="bed-date">預計出院 06/30</div>
            </div>
            <div class="bed-cell general" onclick="openModal('modal-bed-detail-general')">
              <div class="bed-no">302-A</div>
              <div class="bed-patient">黃○○</div>
              <div class="bed-diagnosis">術後照護</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">一般住院</div>
              <div class="bed-date">預計出院 06/26</div>
            </div>
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">
              <div class="bed-no">302-B</div>
              <div class="bed-patient" style="color:var(--green)">空床</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">可使用</div>
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>
            </div>
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">
              <div class="bed-no">303-A</div>
              <div class="bed-patient">吳麗珠</div>
              <div class="bed-diagnosis">CVA（腦中風）</div>
              <div class="extend-badge extend-pending">展延申請中</div>
              <div class="bed-status-label">PAC 住院</div>
              <div class="bed-date">預計出院 06/28</div>
            </div>
            <div class="bed-cell reserved" onclick="openModal('modal-bed-detail-reserved')">
              <div class="bed-no">303-B</div>
              <div class="bed-patient">陳志明</div>
              <div class="bed-diagnosis">CVA（腦中風）</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">已預約</div>
              <div class="bed-date">預計入院 06/27</div>
            </div>
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">
              <div class="bed-no">304-A</div>
              <div class="bed-patient" style="color:var(--green)">空床</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">可使用</div>
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>
            </div>
            <div class="bed-cell hospice" onclick="openModal('modal-bed-detail-general')">
              <div class="bed-no">304-B</div>
              <div class="bed-patient">林○○</div>
              <div class="bed-diagnosis">末期癌症（肺癌）</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">安寧</div>
              <div class="bed-date">預計出院 —</div>
            </div>
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">
              <div class="bed-no">305-A</div>
              <div class="bed-patient">王○○</div>
              <div class="bed-diagnosis">COPD</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">PAC 住院</div>
              <div class="bed-date">預計出院 07/10</div>
            </div>
            <div class="bed-cell maintenance">
              <div class="bed-no">305-B</div>
              <div class="bed-patient" style="color:var(--gray-400)">清潔中</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">清潔中</div>
              <div class="bed-date">今日可使用</div>
            </div>
          </div>
        </div>

        <!-- 4F -->
        <div id="floor-4f" class="hidden">
          <div class="bed-grid">
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">
              <div class="bed-no">401-A</div>
              <div class="bed-patient">張○○</div>
              <div class="bed-diagnosis">骨科（髖關節）</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">PAC 住院</div>
              <div class="bed-date">預計出院 07/08</div>
            </div>
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">
              <div class="bed-no">401-B</div>
              <div class="bed-patient">劉○○</div>
              <div class="bed-diagnosis">脊髓損傷</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">PAC 住院</div>
              <div class="bed-date">預計出院 07/15</div>
            </div>
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">
              <div class="bed-no">402-A</div>
              <div class="bed-patient" style="color:var(--green)">空床</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">可使用</div>
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>
            </div>
            <div class="bed-cell general">
              <div class="bed-no">402-B</div>
              <div class="bed-patient">蔡○○</div>
              <div class="bed-diagnosis">骨折復原</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">一般住院</div>
              <div class="bed-date">預計出院 06/25</div>
            </div>
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">
              <div class="bed-no">403-A</div>
              <div class="bed-patient" style="color:var(--green)">空床</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">可使用</div>
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>
            </div>
            <div class="bed-cell reserved">
              <div class="bed-no">403-B</div>
              <div class="bed-patient">黃建國</div>
              <div class="bed-diagnosis">脊髓損傷</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">已預約</div>
              <div class="bed-date">預計入院 06/30</div>
            </div>
          </div>
        </div>

        <!-- 5F -->
        <div id="floor-5f" class="hidden">
          <div class="bed-grid">
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">
              <div class="bed-no">501-A</div>
              <div class="bed-patient">許○○</div>
              <div class="bed-diagnosis">心衰竭</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">PAC 住院</div>
              <div class="bed-date">預計出院 07/01</div>
            </div>
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">
              <div class="bed-no">501-B</div>
              <div class="bed-patient" style="color:var(--green)">空床</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">可使用</div>
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>
            </div>
            <div class="bed-cell general">
              <div class="bed-no">502-A</div>
              <div class="bed-patient">陳○○</div>
              <div class="bed-diagnosis">內科觀察</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">一般住院</div>
              <div class="bed-date">預計出院 06/24</div>
            </div>
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">
              <div class="bed-no">502-B</div>
              <div class="bed-patient" style="color:var(--green)">空床</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">可使用</div>
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>
            </div>
          </div>
        </div>

        <!-- 6F -->
        <div id="floor-6f" class="hidden">
          <div class="bed-grid">
            <div class="bed-cell pac" onclick="openModal('modal-bed-detail-pac')">
              <div class="bed-no">601-A</div>
              <div class="bed-patient">謝○○</div>
              <div class="bed-diagnosis">骨科（脊椎）</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">PAC 住院</div>
              <div class="bed-date">預計出院 07/03</div>
            </div>
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">
              <div class="bed-no">601-B</div>
              <div class="bed-patient" style="color:var(--green)">空床</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">可使用</div>
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>
            </div>
            <div class="bed-cell hospice">
              <div class="bed-no">602-A</div>
              <div class="bed-patient">吳○○</div>
              <div class="bed-diagnosis">末期癌症（胃癌）</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">安寧</div>
              <div class="bed-date">預計出院 —</div>
            </div>
            <div class="bed-cell available" onclick="openModal('modal-add-bed')">
              <div class="bed-no">602-B</div>
              <div class="bed-patient" style="color:var(--green)">空床</div>
              <div style="margin-top:auto"></div>
              <div class="bed-status-label">可使用</div>
              <div class="bed-date" style="color:var(--green)">點擊安排入住 →</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 列表 -->
      <div id="view-list" class="hidden">
        <table class="bed-list-table">
          <thead>
            <tr>
              <th>床號</th>
              <th>類型</th>
              <th>個案姓名</th>
              <th>疾病別</th>
              <th>狀態</th>
              <th>預計入院</th>
              <th>預計出院</th>
              <th>展延狀態</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr onclick="openModal('modal-bed-detail-pac')">
              <td><strong>301-A</strong></td>
              <td><span class="type-tag type-pac">PAC</span></td>
              <td>李文雄</td>
              <td>CVA（腦中風）</td>
              <td><span class="badge badge-blue">住院中</span></td>
              <td>06/10</td>
              <td>07/05</td>
              <td><span class="badge badge-amber">展延申請中</span></td>
              <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>
            </tr>
            <tr onclick="openModal('modal-bed-detail-pac')">
              <td><strong>301-B</strong></td>
              <td><span class="type-tag type-pac">PAC</span></td>
              <td>鄭大偉</td>
              <td>骨科（膝關節）</td>
              <td><span class="badge badge-blue">住院中</span></td>
              <td>05/28</td>
              <td>06/30</td>
              <td><span class="badge badge-green">展延通過</span></td>
              <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>
            </tr>
            <tr onclick="openModal('modal-bed-detail-reserved')">
              <td><strong>303-B</strong></td>
              <td><span class="type-tag type-pac">PAC</span></td>
              <td>陳志明</td>
              <td>CVA（腦中風）</td>
              <td><span class="badge badge-amber">已預約</span></td>
              <td>06/27</td>
              <td>—</td>
              <td>—</td>
              <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>
            </tr>
            <tr onclick="openModal('modal-bed-detail-general')">
              <td><strong>302-A</strong></td>
              <td><span class="type-tag type-general">一般</span></td>
              <td>黃○○</td>
              <td>術後照護</td>
              <td><span class="badge badge-blue">住院中</span></td>
              <td>06/20</td>
              <td>06/26</td>
              <td>—</td>
              <td><span style="font-size:11px;color:var(--gray-400)">唯讀</span></td>
            </tr>
            <tr onclick="openModal('modal-bed-detail-general')">
              <td><strong>304-B</strong></td>
              <td><span class="type-tag type-hospice">安寧</span></td>
              <td>林○○</td>
              <td>末期癌症（肺癌）</td>
              <td><span class="badge badge-purple">安寧中</span></td>
              <td>06/01</td>
              <td>—</td>
              <td>—</td>
              <td><span style="font-size:11px;color:var(--gray-400)">唯讀</span></td>
            </tr>
            <tr class="available-row" onclick="openModal('modal-add-bed')">
              <td><strong>302-B</strong></td>
              <td>—</td>
              <td style="color:var(--green);font-weight:600">空床</td>
              <td>—</td>
              <td><span class="badge badge-green">可使用</span></td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td><button class="btn btn-primary btn-xs" onclick="event.stopPropagation();openModal('modal-add-bed')">安排入住</button></td>
            </tr>
            <tr class="available-row" onclick="openModal('modal-add-bed')">
              <td><strong>304-A</strong></td>
              <td>—</td>
              <td style="color:var(--green);font-weight:600">空床</td>
              <td>—</td>
              <td><span class="badge badge-green">可使用</span></td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td><button class="btn btn-primary btn-xs" onclick="event.stopPropagation();openModal('modal-add-bed')">安排入住</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ══ 住院個案列表 ══ -->
    <div id="tab-case-list" class="hidden">
      <div class="toolbar">
        <div class="toolbar-left">
          <div class="search-wrap">
            <span class="search-icon">🔍</span>
            <input type="text" placeholder="搜尋姓名、床號…">
          </div>
          <button class="btn btn-secondary btn-sm">類型 ▾</button>
          <button class="btn btn-secondary btn-sm">展延狀態 ▾</button>
          <button class="btn btn-secondary btn-sm">樓層 ▾</button>
        </div>
        <div class="toolbar-right">
          <span style="font-size:11px;color:var(--gray-400)">預設排序：預計出院日（近→遠）</span>
        </div>
      </div>

      <!-- 待排床 -->
      <div class="section-label">待排床 <span class="badge badge-amber">3</span></div>
      <table class="case-list-table">
        <thead>
          <tr>
            <th></th>
            <th>姓名</th>
            <th>年齡／性別</th>
            <th>類型</th>
            <th>疾病別</th>
            <th>床位</th>
            <th>預計入院</th>
            <th>預計出院</th>
            <th>展延狀態</th>
            <th>負責個管師</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr onclick="toggleExpand('exp1')">
            <td><button class="expand-btn" id="expbtn1">▶</button></td>
            <td><strong>陳志明</strong></td>
            <td>68歲 男</td>
            <td><span class="type-tag type-pac">PAC</span></td>
            <td>CVA（腦中風）</td>
            <td style="color:var(--amber)">尚未安排</td>
            <td>06/27</td>
            <td>—</td>
            <td>—</td>
            <td>林美惠</td>
            <td><button class="btn btn-primary btn-xs" onclick="event.stopPropagation();openModal('modal-add-from-case')">安排床位</button></td>
          </tr>
          <tr id="exp1" class="expand-row hidden">
            <td colspan="11">
              <div class="expand-content">
                <div class="expand-field"><label>主治醫師</label><span>王主任（神經內科）</span></div>
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note" placeholder="點擊輸入交接備註…"></textarea></div>
              </div>
            </td>
          </tr>
          <tr onclick="toggleExpand('exp2')">
            <td><button class="expand-btn" id="expbtn2">▶</button></td>
            <td><strong>黃建國</strong></td>
            <td>55歲 男</td>
            <td><span class="type-tag type-pac">PAC</span></td>
            <td>脊髓損傷</td>
            <td style="color:var(--amber)">尚未安排</td>
            <td>06/30</td>
            <td>—</td>
            <td>—</td>
            <td>林美惠</td>
            <td><button class="btn btn-primary btn-xs" onclick="event.stopPropagation();openModal('modal-add-from-case')">安排床位</button></td>
          </tr>
          <tr id="exp2" class="expand-row hidden">
            <td colspan="11">
              <div class="expand-content">
                <div class="expand-field"><label>主治醫師</label><span>陳醫師（復健科）</span></div>
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note" placeholder="點擊輸入交接備註…"></textarea></div>
              </div>
            </td>
          </tr>
          <tr onclick="toggleExpand('exp3')">
            <td><button class="expand-btn" id="expbtn3">▶</button></td>
            <td><strong>蔡美玲</strong></td>
            <td>72歲 女</td>
            <td><span class="type-tag type-pac">PAC</span></td>
            <td>帕金森氏症</td>
            <td style="color:var(--amber)">尚未安排</td>
            <td>07/01</td>
            <td>—</td>
            <td>—</td>
            <td>張雅婷</td>
            <td><button class="btn btn-primary btn-xs" onclick="event.stopPropagation();openModal('modal-add-from-case')">安排床位</button></td>
          </tr>
          <tr id="exp3" class="expand-row hidden">
            <td colspan="11">
              <div class="expand-content">
                <div class="expand-field"><label>主治醫師</label><span>林醫師（神經內科）</span></div>
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note" placeholder="點擊輸入交接備註…"></textarea></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 已預約 -->
      <div class="section-label">已預約 <span class="badge badge-amber">2</span></div>
      <table class="case-list-table">
        <thead>
          <tr>
            <th></th><th>姓名</th><th>年齡／性別</th><th>類型</th><th>疾病別</th><th>床位</th><th>預計入院</th><th>預計出院</th><th>展延狀態</th><th>負責個管師</th><th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr onclick="toggleExpand('exp4')">
            <td><button class="expand-btn" id="expbtn4">▶</button></td>
            <td><strong>陳志明</strong></td>
            <td>68歲 男</td>
            <td><span class="type-tag type-pac">PAC</span></td>
            <td>CVA（腦中風）</td>
            <td><strong>303-B</strong></td>
            <td>06/27</td>
            <td>—</td>
            <td>—</td>
            <td>林美惠</td>
            <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>
          </tr>
          <tr id="exp4" class="expand-row hidden">
            <td colspan="11">
              <div class="expand-content">
                <div class="expand-field"><label>主治醫師</label><span>王主任（神經內科）</span></div>
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note" placeholder="點擊輸入交接備註…"></textarea></div>
              </div>
            </td>
          </tr>
          <tr onclick="toggleExpand('exp5')">
            <td><button class="expand-btn" id="expbtn5">▶</button></td>
            <td><strong>黃建國</strong></td>
            <td>55歲 男</td>
            <td><span class="type-tag type-pac">PAC</span></td>
            <td>脊髓損傷</td>
            <td><strong>403-B</strong></td>
            <td>06/30</td>
            <td>—</td>
            <td>—</td>
            <td>林美惠</td>
            <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>
          </tr>
          <tr id="exp5" class="expand-row hidden">
            <td colspan="11">
              <div class="expand-content">
                <div class="expand-field"><label>主治醫師</label><span>陳醫師（復健科）</span></div>
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note" placeholder="點擊輸入交接備註…"></textarea></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 住院中 -->
      <div class="section-label">住院中 <span class="badge badge-blue">5</span></div>
      <table class="case-list-table">
        <thead>
          <tr><th></th><th>姓名</th><th>年齡／性別</th><th>類型</th><th>疾病別</th><th>床位</th><th>入院日</th><th>預計出院</th><th>展延狀態</th><th>負責個管師</th><th>操作</th></tr>
        </thead>
        <tbody>
          <tr onclick="toggleExpand('exp6')">
            <td><button class="expand-btn" id="expbtn6">▶</button></td>
            <td><strong>鄭大偉</strong></td>
            <td>62歲 男</td>
            <td><span class="type-tag type-pac">PAC</span></td>
            <td>骨科（膝關節）</td>
            <td><strong>301-B</strong></td>
            <td>05/28</td>
            <td style="color:var(--amber);font-weight:600">06/30 ⚠️</td>
            <td><span class="badge badge-green">展延通過</span></td>
            <td>林美惠</td>
            <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>
          </tr>
          <tr id="exp6" class="expand-row hidden">
            <td colspan="11">
              <div class="expand-content">
                <div class="expand-field"><label>主治醫師</label><span>陳醫師（復健科）</span></div>
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note">展延通過至 07/12，若功能持續改善可考慮提早出院。</textarea></div>
              </div>
            </td>
          </tr>
          <tr onclick="toggleExpand('exp7')">
            <td><button class="expand-btn" id="expbtn7">▶</button></td>
            <td><strong>吳麗珠</strong></td>
            <td>70歲 女</td>
            <td><span class="type-tag type-pac">PAC</span></td>
            <td>CVA（腦中風）</td>
            <td><strong>303-A</strong></td>
            <td>06/05</td>
            <td>06/28</td>
            <td><span class="badge badge-amber">展延申請中</span></td>
            <td>張雅婷</td>
            <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>
          </tr>
          <tr id="exp7" class="expand-row hidden">
            <td colspan="11">
              <div class="expand-content">
                <div class="expand-field"><label>主治醫師</label><span>王主任（神經內科）</span></div>
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note" placeholder="點擊輸入交接備註…"></textarea></div>
              </div>
            </td>
          </tr>
          <tr onclick="toggleExpand('exp8')">
            <td><button class="expand-btn" id="expbtn8">▶</button></td>
            <td><strong>李文雄</strong></td>
            <td>75歲 男</td>
            <td><span class="type-tag type-pac">PAC</span></td>
            <td>COPD</td>
            <td><strong>301-A</strong></td>
            <td>06/10</td>
            <td>07/05</td>
            <td><span class="badge badge-amber">展延申請中</span></td>
            <td>林美惠</td>
            <td><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('modal-edit-bed')">編輯</button></td>
          </tr>
          <tr id="exp8" class="expand-row hidden">
            <td colspan="11">
              <div class="expand-content">
                <div class="expand-field"><label>主治醫師</label><span>陳醫師（胸腔科）</span></div>
                <div class="expand-field"><label>交接備註</label><textarea class="expand-note" placeholder="點擊輸入交接備註…"></textarea></div>
              </div>
            </td>
          </tr>
          <tr onclick="toggleExpand('exp9')">
            <td><button class="expand-btn" id="expbtn9">▶</button></td>
            <td><strong>黃○○</strong></td>
            <td>58歲 男</td>
            <td><span class="type-tag type-general">一般</span></td>
            <td>術後照護</td>
            <td><strong>302-A</strong></td>
            <td>06/20</td>
            <td>06/26</td>
            <td>—</td>
            <td>—</td>
            <td><span style="font-size:11px;color:var(--gray-400)">唯讀</span></td>
          </tr>
          <tr id="exp9" class="expand-row hidden">
            <td colspan="11">
              <div class="expand-content">
                <div class="expand-field"><label>主治醫師</label><span>張醫師（骨科）</span></div>
                <div class="expand-field"><label>交接備註</label><span style="font-size:12px;color:var(--gray-400)">一般住院個案，由護理師管理</span></div>
              </div>
            </td>
          </tr>
          <tr onclick="toggleExpand('exp10')">
            <td><button class="expand-btn" id="expbtn10">▶</button></td>
            <td><strong>林○○</strong></td>
            <td>81歲 女</td>
            <td><span class="type-tag type-hospice">安寧</span></td>
            <td>末期癌症（肺癌）</td>
            <td><strong>304-B</strong></td>
            <td>06/01</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td><span style="font-size:11px;color:var(--gray-400)">唯讀</span></td>
          </tr>
          <tr id="exp10" class="expand-row hidden">
            <td colspan="11">
              <div class="expand-content">
                <div class="expand-field"><label>主治醫師</label><span>李醫師（安寧科）</span></div>
                <div class="expand-field"><label>交接備註</label><span style="font-size:12px;color:var(--gray-400)">安寧個案，由安寧團隊管理</span></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div><!-- /content -->
</div><!-- /main -->


<!-- ══ MODALS ══ -->

<!-- 新增排床（從空床觸發） -->
<div id="modal-add-bed" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header"><div class="modal-title">＋ 新增排床</div><button class="modal-close" onclick="closeModal('modal-add-bed')">✕</button></div>
    <div class="modal-body">
      <div class="info-box">已選擇床位：<strong>302-B（3F）</strong> · 狀態：可使用</div>
      <div class="form-grid">
        <div class="form-group full">
          <label>選擇個案 <span class="required">*</span></label>
          <select class="form-control">
            <option>請選擇待排床個案</option>
            <option>陳志明（CVA・待排床）</option>
            <option>黃建國（脊髓損傷・待排床）</option>
            <option>蔡美玲（帕金森氏症・待排床）</option>
          </select>
        </div>
        <div class="form-group">
          <label>預計入院日期 <span class="required">*</span></label>
          <input class="form-control" type="date" value="2026-06-27">
        </div>
        <div class="form-group">
          <label>預計出院日期</label>
          <input class="form-control" type="date">
        </div>
        <div class="form-group full">
          <label>交接備註</label>
          <textarea class="form-control" placeholder="填寫入住注意事項或交接內容…"></textarea>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-add-bed')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-add-bed')">確認排床</button>
    </div>
  </div>
</div>

<!-- 新增排床（從個案觸發）-->
<div id="modal-add-from-case" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header"><div class="modal-title">＋ 安排床位</div><button class="modal-close" onclick="closeModal('modal-add-from-case')">✕</button></div>
    <div class="modal-body">
      <div class="info-box">個案：<strong>陳志明</strong>（CVA・男・68歲）・預計入院 06/27</div>
      <div class="form-group" style="margin-bottom:13px">
        <label>選擇樓層</label>
        <div class="floor-tabs" style="margin-bottom:0;margin-top:6px">
          <div class="floor-tab active">3F</div>
          <div class="floor-tab">4F</div>
          <div class="floor-tab">5F</div>
          <div class="floor-tab">6F</div>
        </div>
      </div>
      <div class="form-group" style="margin-bottom:13px">
        <label>選擇床位（綠色為可使用）</label>
        <div class="bed-picker">
          <div class="bed-pick-cell taken">301-A</div>
          <div class="bed-pick-cell taken">301-B</div>
          <div class="bed-pick-cell taken">302-A</div>
          <div class="bed-pick-cell available selected">302-B</div>
          <div class="bed-pick-cell taken">303-A</div>
          <div class="bed-pick-cell taken">303-B</div>
          <div class="bed-pick-cell available">304-A</div>
          <div class="bed-pick-cell taken">304-B</div>
          <div class="bed-pick-cell taken">305-A</div>
          <div class="bed-pick-cell taken">305-B</div>
        </div>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>預計入院日期 <span class="required">*</span></label>
          <input class="form-control" type="date" value="2026-06-27">
        </div>
        <div class="form-group">
          <label>預計出院日期</label>
          <input class="form-control" type="date">
        </div>
        <div class="form-group full">
          <label>交接備註</label>
          <textarea class="form-control" placeholder="填寫入住注意事項或交接內容…"></textarea>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-add-from-case')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-add-from-case')">確認排床：302-B</button>
    </div>
  </div>
</div>

<!-- 床位詳情（PAC） -->
<div id="modal-bed-detail-pac" class="modal-overlay hidden">
  <div class="modal modal-lg">
    <div class="modal-header">
      <div>
        <div class="modal-title">301-A・李文雄</div>
        <div style="font-size:12px;color:var(--gray-500);margin-top:2px">3F・<span class="type-tag type-pac">PAC</span>&nbsp;CVA（腦中風）・男・75歲</div>
      </div>
      <button class="modal-close" onclick="closeModal('modal-bed-detail-pac')">✕</button>
    </div>
    <div class="modal-body">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:13px;margin-bottom:14px">
        <div>
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">入院日期</div>
          <div style="font-size:13px;font-weight:600">2026/06/10</div>
        </div>
        <div>
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">預計出院</div>
          <div style="font-size:13px;font-weight:600">2026/07/05</div>
        </div>
        <div>
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">展延狀態</div>
          <div><span class="badge badge-amber">展延申請中</span></div>
        </div>
        <div>
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">主治醫師</div>
          <div style="font-size:13px;font-weight:600">王主任（神經內科）</div>
        </div>
        <div>
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">負責個管師</div>
          <div style="font-size:13px;font-weight:600">林美惠</div>
        </div>
        <div>
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">照護天數</div>
          <div style="font-size:13px;font-weight:600">第 13 天</div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="form-group">
        <label>交接備註</label>
        <textarea class="form-control" style="min-height:80px">展延申請中，預計健保署本週回覆。若展延失敗需在 06/28 前安排出院。</textarea>
      </div>
      <div class="warn-box">⚠️ 展延申請中：若展延未通過，此床位需在預計出院日（07/05）前釋出。</div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-danger btn-sm" onclick="closeModal('modal-bed-detail-pac')">釋出床位</button>
      <button class="btn btn-secondary" onclick="closeModal('modal-bed-detail-pac')">關閉</button>
      <button class="btn btn-ghost" onclick="closeModal('modal-bed-detail-pac');openModal('modal-edit-bed')">編輯排床</button>
    </div>
  </div>
</div>

<!-- 床位詳情（一般/安寧，唯讀） -->
<div id="modal-bed-detail-general" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div>
        <div class="modal-title">302-A・黃○○</div>
        <div style="font-size:12px;color:var(--gray-500);margin-top:2px">3F・<span class="type-tag type-general">一般</span>&nbsp;術後照護・男・58歲</div>
      </div>
      <button class="modal-close" onclick="closeModal('modal-bed-detail-general')">✕</button>
    </div>
    <div class="modal-body">
      <div class="info-box">ℹ️ 此為一般住院個案，由護理師管理。個管師僅可檢視，無法編輯。</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:13px">
        <div>
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">入院日期</div>
          <div style="font-size:13px;font-weight:600">2026/06/20</div>
        </div>
        <div>
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">預計出院</div>
          <div style="font-size:13px;font-weight:600">2026/06/26</div>
        </div>
        <div>
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">主治醫師</div>
          <div style="font-size:13px;font-weight:600">張醫師（骨科）</div>
        </div>
        <div>
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">診斷</div>
          <div style="font-size:13px;font-weight:600">術後照護</div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-bed-detail-general')">關閉</button>
    </div>
  </div>
</div>

<!-- 床位詳情（已預約） -->
<div id="modal-bed-detail-reserved" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div>
        <div class="modal-title">303-B・陳志明（已預約）</div>
        <div style="font-size:12px;color:var(--gray-500);margin-top:2px">3F・<span class="type-tag type-pac">PAC</span>&nbsp;CVA（腦中風）・男・68歲</div>
      </div>
      <button class="modal-close" onclick="closeModal('modal-bed-detail-reserved')">✕</button>
    </div>
    <div class="modal-body">
      <div class="warn-box" style="margin-bottom:14px;margin-top:0">⚠️ 已預約但尚未入院。若個案取消，請及時釋出床位。</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:13px">
        <div>
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">預計入院</div>
          <div style="font-size:13px;font-weight:600;color:var(--blue)">2026/06/27</div>
        </div>
        <div>
          <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">負責個管師</div>
          <div style="font-size:13px;font-weight:600">林美惠</div>
        </div>
      </div>
      <div class="form-group mt-10">
        <label>交接備註</label>
        <textarea class="form-control" placeholder="填寫注意事項…"></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-danger btn-sm" onclick="closeModal('modal-bed-detail-reserved')">取消預約・釋出床位</button>
      <button class="btn btn-secondary" onclick="closeModal('modal-bed-detail-reserved')">關閉</button>
      <button class="btn btn-ghost" onclick="closeModal('modal-bed-detail-reserved');openModal('modal-edit-bed')">編輯</button>
    </div>
  </div>
</div>

<!-- 編輯排床 -->
<div id="modal-edit-bed" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header"><div class="modal-title">✏️ 編輯排床</div><button class="modal-close" onclick="closeModal('modal-edit-bed')">✕</button></div>
    <div class="modal-body">
      <div class="info-box">床位：<strong>301-A（3F）</strong>・個案：<strong>李文雄</strong></div>
      <div class="form-grid">
        <div class="form-group">
          <label>預計入院日期</label>
          <input class="form-control" type="date" value="2026-06-10">
        </div>
        <div class="form-group">
          <label>預計出院日期</label>
          <input class="form-control" type="date" value="2026-07-05">
        </div>
        <div class="form-group full">
          <label>更換床位</label>
          <select class="form-control"><option>維持原床位（301-A）</option><option>302-B（3F・可使用）</option><option>304-A（3F・可使用）</option></select>
        </div>
        <div class="form-group full">
          <label>交接備註</label>
          <textarea class="form-control">展延申請中，預計健保署本週回覆。若展延失敗需在 06/28 前安排出院。</textarea>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-danger btn-sm" onclick="closeModal('modal-edit-bed')">釋出床位</button>
      <button class="btn btn-secondary" onclick="closeModal('modal-edit-bed')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-edit-bed')">儲存變更</button>
    </div>
  </div>
</div>

<script>
function switchMainTab(el, tab) {
  document.querySelectorAll('.tabs .tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('tab-bed-overview').classList.add('hidden');
  document.getElementById('tab-case-list').classList.add('hidden');
  document.getElementById('tab-' + tab).classList.remove('hidden');
}

function switchFloor(el, floor) {
  document.querySelectorAll('.floor-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  ['3f','4f','5f','6f'].forEach(f => {
    const el = document.getElementById('floor-' + f);
    if (el) el.classList.add('hidden');
  });
  document.getElementById('floor-' + floor).classList.remove('hidden');
}

function switchView(view) {
  document.getElementById('view-grid').classList.toggle('hidden', view !== 'grid');
  document.getElementById('view-list').classList.toggle('hidden', view !== 'list');
  document.getElementById('vbtn-grid').classList.toggle('active', view === 'grid');
  document.getElementById('vbtn-list').classList.toggle('active', view === 'list');
}

function toggleExpand(id) {
  const row = document.getElementById(id);
  const btnId = 'expbtn' + id.replace('exp','');
  const btn = document.getElementById(btnId);
  const isHidden = row.classList.contains('hidden');
  row.classList.toggle('hidden', !isHidden);
  if (btn) btn.textContent = isHidden ? '▼' : '▶';
}

function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

document.querySelectorAll('.modal-overlay').forEach(o => {
  o.addEventListener('click', function(e) { if (e.target === this) this.classList.add('hidden'); });
});
<\/script>
</body>
</html>`,cg=`<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PAC 復健排班</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --blue:#2563EB;--blue-light:#EFF6FF;--blue-mid:#BFDBFE;--blue-dark:#1E40AF;
  --gray-50:#F8FAFC;--gray-100:#F1F5F9;--gray-200:#E2E8F0;--gray-300:#CBD5E1;
  --gray-400:#94A3B8;--gray-500:#64748B;--gray-600:#475569;--gray-700:#334155;--gray-900:#0F172A;
  --green:#16A34A;--green-light:#DCFCE7;--green-mid:#BBF7D0;
  --amber:#D97706;--amber-light:#FEF3C7;
  --red:#DC2626;--red-light:#FEE2E2;
  --purple:#7C3AED;--purple-light:#EDE9FE;
  --teal:#0D9488;--teal-light:#CCFBF1;
  --white:#FFFFFF;
  --pac-inpatient:#2563EB;--pac-inpatient-bg:#EFF6FF;
  --nonpac-inpatient:#64748B;--nonpac-inpatient-bg:#F1F5F9;
  --pac-home:#16A34A;--pac-home-bg:#DCFCE7;
  --nonpac-home:#0D9488;--nonpac-home-bg:#CCFBF1;
}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans TC',sans-serif;background:var(--gray-50);color:var(--gray-900);height:100vh;display:flex;overflow:hidden;font-size:14px}

/* Sidebar */
.sidebar{width:192px;min-width:192px;background:var(--white);border-right:1px solid var(--gray-200);display:flex;flex-direction:column}
.sidebar-logo{padding:16px 16px 13px;border-bottom:1px solid var(--gray-200)}
.logo-text{font-size:14px;font-weight:700;color:var(--blue)}
.logo-sub{font-size:11px;color:var(--gray-400);margin-top:2px}
.sidebar-nav{padding:6px 0;flex:1}
.nav-item{display:flex;align-items:center;gap:8px;padding:9px 14px;font-size:13px;color:var(--gray-500);border-left:3px solid transparent;cursor:default}
.nav-item.active{background:var(--blue-light);color:var(--blue);font-weight:600;border-left-color:var(--blue)}
.nav-item.disabled{opacity:.38;cursor:not-allowed}
.sidebar-user{margin-top: auto;padding:11px 14px;border-top:1px solid var(--gray-200)}
.user-row{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.user-avatar{width:28px;height:28px;border-radius:50%;background:var(--purple-light);color:var(--purple);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700}
.user-avatar.manager{background:var(--amber-light);color:var(--amber)}
.user-name{font-size:12px;font-weight:600;color:var(--gray-700)}
.user-role{font-size:11px;color:var(--gray-400)}
.role-switcher{display:flex;border:1px solid var(--gray-200);border-radius:6px;overflow:hidden;width:100%}
.role-btn{flex:1;padding:4px 0;font-size:10px;font-weight:600;cursor:pointer;border:none;background:var(--white);color:var(--gray-400);text-align:center;transition:all .15s}
.role-btn.active{background:var(--blue);color:var(--white)}

/* Main */
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}
.topbar{background:var(--white);border-bottom:1px solid var(--gray-200);padding:0 20px;height:48px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.breadcrumb{font-size:12px;color:var(--gray-500)}
.topbar-right{display:flex;align-items:center;gap:10px}
.content{flex:1;overflow-y:auto;padding:20px}

/* Buttons */
.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .15s;white-space:nowrap}
.btn-primary{background:var(--blue);color:var(--white)}.btn-primary:hover{background:var(--blue-dark)}
.btn-secondary{background:var(--white);color:var(--gray-700);border:1px solid var(--gray-300)}.btn-secondary:hover{background:var(--gray-50)}
.btn-ghost{background:transparent;color:var(--blue);border:1px solid var(--blue-mid)}.btn-ghost:hover{background:var(--blue-light)}
.btn-green{background:var(--white);color:var(--green);border:1px solid var(--green-mid)}.btn-green:hover{background:var(--green-light)}
.btn-danger{background:var(--white);color:var(--red);border:1px solid #FECACA}.btn-danger:hover{background:var(--red-light)}
.btn-sm{padding:5px 10px;font-size:12px}.btn-xs{padding:3px 8px;font-size:11px}

/* Badge */
.badge{display:inline-flex;align-items:center;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:600}
.badge-blue{background:var(--blue-light);color:var(--blue)}
.badge-green{background:var(--green-light);color:var(--green)}
.badge-amber{background:var(--amber-light);color:var(--amber)}
.badge-gray{background:var(--gray-100);color:var(--gray-500)}
.badge-red{background:var(--red-light);color:var(--red)}
.badge-purple{background:var(--purple-light);color:var(--purple)}

/* Notification badge */
.notif-badge{position:relative;display:inline-flex}
.notif-dot{position:absolute;top:-4px;right:-4px;width:16px;height:16px;border-radius:50%;background:var(--red);color:var(--white);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center}

/* View controls */
.view-bar{display:flex;align-items:center;gap:10px;margin-bottom:16px;flex-wrap:wrap;justify-content:space-between}
.view-bar-left{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.view-bar-right{display:flex;align-items:center;gap:8px}
.view-toggle{display:flex;border:1px solid var(--gray-200);border-radius:6px;overflow:hidden}
.view-btn{padding:5px 12px;font-size:12px;cursor:pointer;background:var(--white);color:var(--gray-500);border:none;font-weight:500}
.view-btn.active{background:var(--blue);color:var(--white)}
.filter-tabs{display:flex;gap:4px}
.filter-tab{padding:5px 12px;font-size:12px;font-weight:500;color:var(--gray-500);cursor:pointer;border-radius:6px;border:1px solid var(--gray-200);background:var(--white);transition:all .15s}
.filter-tab.active{background:var(--blue);color:var(--white);border-color:var(--blue)}
.nav-month{display:flex;align-items:center;gap:6px}
.nav-month span{font-size:14px;font-weight:600;color:var(--gray-700);min-width:90px;text-align:center}
.nav-arrow{width:26px;height:26px;border-radius:5px;border:1px solid var(--gray-200);background:var(--white);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--gray-500)}
.nav-arrow:hover{background:var(--gray-50)}
select.filter-control{padding:5px 10px;border:1px solid var(--gray-300);border-radius:6px;font-size:12px;color:var(--gray-700);background:var(--white);outline:none;cursor:pointer}

/* Legend */
.legend{display:flex;gap:12px;margin-bottom:14px;flex-wrap:wrap;align-items:center}
.legend-item{display:flex;align-items:center;gap:5px;font-size:11px;color:var(--gray-500)}
.legend-dot{width:10px;height:10px;border-radius:3px;flex-shrink:0}

/* ── Month Calendar ── */
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:1px;background:var(--gray-200);border:1px solid var(--gray-200);border-radius:10px;overflow:hidden}
.cal-header{background:var(--gray-50);padding:8px 6px;text-align:center;font-size:11px;font-weight:600;color:var(--gray-500)}
.cal-cell{background:var(--white);min-height:110px;padding:6px;position:relative;vertical-align:top;cursor:pointer;transition:background .12s}
.cal-cell:not(.other-month):hover{background:var(--blue-light)}
.cal-cell.other-month{background:var(--gray-50);cursor:default}
.cal-cell.today{background:#EFF6FF}
.cal-cell.today:hover{background:#DBEAFE}
.cal-cell.holiday{background:#FFF7ED}
.cal-cell.holiday:hover{background:#FFEDD5}
.cal-date{font-size:12px;font-weight:600;color:var(--gray-600);margin-bottom:4px;display:flex;align-items:center;gap:4px}
.cal-date.today-num{width:22px;height:22px;background:var(--blue);color:var(--white);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0}
.holiday-label{font-size:9px;color:var(--amber);font-weight:600}
.cal-event{border-radius:4px;padding:2px 5px;margin-bottom:2px;font-size:10px;line-height:1.4;cursor:pointer;transition:opacity .15s}
.cal-event:hover{opacity:.8}
.cal-event.pac-in{background:var(--pac-inpatient-bg);color:var(--pac-inpatient);border-left:3px solid var(--pac-inpatient)}
.cal-event.nonpac-in{background:var(--nonpac-inpatient-bg);color:var(--nonpac-inpatient);border-left:3px solid var(--nonpac-inpatient)}
.cal-event.pac-home{background:var(--pac-home-bg);color:var(--pac-home);border-left:3px solid var(--pac-home)}
.cal-event.nonpac-home{background:var(--nonpac-home-bg);color:var(--nonpac-home);border-left:3px solid var(--nonpac-home)}
.cal-event.open{background:var(--amber-light);color:var(--amber);border-left:3px solid var(--amber)}
.more-tag{font-size:10px;color:var(--gray-400);cursor:pointer;padding:1px 4px}
.more-tag:hover{color:var(--blue)}

/* ── Week Calendar (matrix for manager) ── */
.week-matrix{width:100%;border-collapse:collapse;background:var(--white);border:1px solid var(--gray-200);border-radius:10px;overflow:hidden;font-size:12px}
.week-matrix th{padding:8px 10px;background:var(--gray-50);border-bottom:1px solid var(--gray-200);border-right:1px solid var(--gray-100);font-size:11px;font-weight:600;color:var(--gray-600);white-space:nowrap}
.week-matrix td{padding:4px 6px;border-bottom:1px solid var(--gray-100);border-right:1px solid var(--gray-100);vertical-align:top;min-width:100px;min-height:40px}
.week-matrix .time-col{background:var(--gray-50);font-size:11px;font-weight:600;color:var(--gray-500);width:60px;text-align:right;padding-right:8px}
.week-matrix .therapist-header{text-align:center}
.therapist-tag{display:inline-block;padding:1px 5px;border-radius:4px;font-size:10px;font-weight:700;margin-bottom:2px}
.therapist-pt{background:#DBEAFE;color:#1D4ED8}
.therapist-ot{background:#FCE7F3;color:#9D174D}
.therapist-st{background:#D1FAE5;color:#065F46}
.week-event{border-radius:4px;padding:2px 5px;margin-bottom:2px;font-size:10px;cursor:pointer;line-height:1.4}
.week-event.pac-in{background:var(--pac-inpatient-bg);color:var(--pac-inpatient)}
.week-event.nonpac-in{background:var(--nonpac-inpatient-bg);color:var(--nonpac-inpatient)}
.week-event.pac-home{background:var(--pac-home-bg);color:var(--pac-home)}
.week-event.open{background:#FEF9C3;color:#92400E}
.pac-tag{font-size:9px;font-weight:700;color:var(--blue);margin-left:2px}

/* ── Unified center modal overlay (used for both day list, detail, and register) ── */
.day-modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);display:flex;align-items:center;justify-content:center;z-index:100;backdrop-filter:blur(2px)}
.detail-modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);display:flex;align-items:center;justify-content:center;z-index:105;backdrop-filter:blur(2px)}

/* Drawer is now a centred modal panel (no slide-in) */
.drawer-overlay{display:none!important}
.drawer{position:relative;right:auto;top:auto;bottom:auto;transform:none!important;width:520px;max-width:92vw;max-height:88vh;background:var(--white);border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.18);display:flex;flex-direction:column;overflow:hidden}
.drawer-header{padding:16px 20px 13px;border-bottom:1px solid var(--gray-200);display:flex;align-items:flex-start;justify-content:space-between;flex-shrink:0}
.drawer-title{font-size:15px;font-weight:700}
.drawer-close{width:25px;height:25px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}
.drawer-close:hover{background:var(--gray-200)}
.drawer-body{padding:16px 20px;overflow-y:auto;flex:1}
.drawer-section{margin-bottom:16px}
.drawer-section-title{font-size:11px;font-weight:600;color:var(--gray-400);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px}
.drawer-info-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.drawer-field label{font-size:10px;color:var(--gray-400);display:block;margin-bottom:2px;text-transform:uppercase;letter-spacing:.04em}
.drawer-field span{font-size:13px;color:var(--gray-800);font-weight:500}
.divider{height:1px;background:var(--gray-100);margin:13px 0}
.summary-box{background:var(--gray-50);border:1px solid var(--gray-200);border-radius:7px;padding:12px;font-size:12px;line-height:1.8;color:var(--gray-700)}

/* ── Modal ── */
.modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);display:flex;align-items:center;justify-content:center;z-index:100;backdrop-filter:blur(2px)}
.modal{background:var(--white);border-radius:12px;width:520px;max-width:92vw;max-height:90vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.15)}
.modal-lg{width:640px}
.modal-header{padding:16px 20px 13px;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.modal-title{font-size:15px;font-weight:700}
.modal-close{width:25px;height:25px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}
.modal-close:hover{background:var(--gray-200)}
.modal-body{padding:16px 20px;overflow-y:auto;flex:1}
.modal-footer{padding:13px 20px;border-top:1px solid var(--gray-200);display:flex;justify-content:flex-end;gap:7px;flex-shrink:0}

/* Form */
.form-group{display:flex;flex-direction:column;gap:5px;margin-bottom:12px}
.form-group label{font-size:12px;font-weight:500;color:var(--gray-600)}
.form-control{padding:7px 10px;border:1px solid var(--gray-300);border-radius:6px;font-size:13px;color:var(--gray-800);background:var(--white);outline:none}
.form-control:focus{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}
select.form-control{cursor:pointer}
textarea.form-control{resize:vertical;min-height:70px}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.required{color:var(--red);margin-left:2px}

/* Approval list */
.approval-list{display:flex;flex-direction:column;gap:8px}
.approval-item{border:1px solid var(--gray-200);border-radius:8px;padding:13px 15px}
.approval-item-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px}
.approval-name{font-size:13px;font-weight:600;color:var(--gray-900)}
.approval-meta{font-size:11px;color:var(--gray-400);margin-top:2px}
.approval-reason{font-size:12px;color:var(--gray-600);background:var(--gray-50);padding:8px 10px;border-radius:5px;margin-bottom:10px}
.approval-actions{display:flex;gap:7px;justify-content:flex-end}

/* Registration quota */
.quota-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--gray-100)}
.quota-row:last-child{border-bottom:none}
.quota-label{font-size:12px;color:var(--gray-700);min-width:30px}
.quota-bar{flex:1;height:8px;background:var(--gray-100);border-radius:999px;overflow:hidden}
.quota-fill{height:100%;border-radius:999px}
.quota-fill.pt{background:var(--blue)}
.quota-fill.ot{background:var(--purple)}
.quota-fill.st{background:var(--green)}
.quota-count{font-size:11px;color:var(--gray-500);min-width:40px;text-align:right}

/* Info note */
.info-note{font-size:12px;padding:10px 12px;border-radius:6px;margin-bottom:12px}
.info-note.blue{background:var(--blue-light);color:var(--blue-dark)}
.info-note.amber{background:var(--amber-light);color:var(--amber)}
.info-note.green{background:var(--green-light);color:var(--green)}

/* Time slot selector */
.time-slot-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:6px}
.time-slot{padding:6px;border:1px solid var(--gray-200);border-radius:5px;font-size:11px;text-align:center;cursor:pointer;color:var(--gray-600)}
.hidden{display:none!important}

/* Custom Dropdown for Therapist Filter */
.custom-dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-btn {
  padding: 5px 12px;
  border: 1px solid var(--gray-300);
  border-radius: 6px;
  font-size: 12px;
  color: var(--gray-700);
  background: var(--white);
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.15s;
}
.dropdown-btn:after {
  content: '▼';
  font-size: 8px;
  color: var(--gray-400);
  margin-left: 4px;
}
.dropdown-btn:hover {
  border-color: var(--blue);
}
.dropdown-btn.disabled {
  background: var(--gray-50);
  color: var(--gray-400);
  cursor: not-allowed;
  pointer-events: none;
}
.dropdown-btn.disabled:after {
  display: none;
}
.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  top: calc(100% + 4px);
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  z-index: 95;
  min-width: 170px;
  padding: 6px;
}
.dropdown-content.show {
  display: block;
}
.dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  font-size: 12px;
  color: var(--gray-700);
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.1s;
  white-space: nowrap;
}
.dropdown-item:hover {
  background: var(--gray-100);
}
.dropdown-item input[type="checkbox"] {
  accent-color: var(--blue);
  cursor: pointer;
}
</style>
</head>
<body>

<!-- SIDEBAR -->
<aside class="sidebar">
<!--
  <div class="sidebar-logo">
    <div class="logo-text">PAC 管理系統</div>
    <div class="logo-sub">急性後期照護</div>
  </div>
  <nav class="sidebar-nav">
    <div class="nav-item disabled">🏠 個人儀表板</div>
    <div class="nav-item disabled">📋 個案管理</div>
    <div class="nav-item disabled">🛏 病床管理</div>
    <div class="nav-item active">📅 班表總覽頁</div>
    <div class="nav-item disabled">🏡 居家排班管理</div>
    <div class="nav-item disabled">📊 評估量表</div>
    <div class="nav-item disabled">💪 復健紀錄</div>
    <div class="nav-item disabled">📤 指標匯出</div>
  </nav>
-->
  <div class="sidebar-user">
    <div class="user-row">
      <div class="user-avatar manager" id="user-avatar">王</div>
      <div>
        <div class="user-name" id="user-name">王復健主管</div>
        <div class="user-role" id="user-role-label">復健主管</div>
      </div>
    </div>
    <div class="role-switcher">
      <button class="role-btn active" id="btn-manager" onclick="switchRole('manager')">復健主管</button>
      <button class="role-btn" id="btn-therapist" onclick="switchRole('therapist')">治療師</button>
    </div>
  </div>
</aside>

<!-- MAIN -->
<div class="main">
  <div class="topbar">
    <div class="breadcrumb" id="bc">班表總覽頁</div>
    <div class="topbar-right">
      <span style="font-size:11px;color:var(--gray-400)">2026/06/23</span>
      <!-- 主管才看到待審核 badge -->
      <div id="approval-badge" class="notif-badge">
        <button class="btn btn-secondary btn-sm" onclick="openModal('modal-approval')">換班審核</button>
        <span class="notif-dot">2</span>
      </div>
      <!-- 主管才看到新增班表 -->
      <button id="btn-add-schedule" class="btn btn-primary btn-sm" onclick="openModal('modal-add-schedule')">＋ 新增班表</button>
    </div>
  </div>
  <div class="content">

    <!-- 視圖控制列 -->
    <div class="view-bar">
      <div class="view-bar-left">
        <div class="view-toggle">
          <button class="view-btn active" onclick="switchView(this,'month')">月曆</button>
          <button class="view-btn" onclick="switchView(this,'week')">週次</button>
        </div>
        <div class="nav-month">
          <button class="nav-arrow">◀</button>
          <span>2026年 6月</span>
          <button class="nav-arrow">▶</button>
        </div>
        <button class="btn btn-secondary btn-sm">今日</button>
        <div class="filter-tabs" id="type-filters">
          <div class="filter-tab active" data-type="all" onclick="toggleTypeFilter('all')">全部</div>
          <div class="filter-tab" data-type="inpatient" onclick="toggleTypeFilter('inpatient')">院內</div>
          <div class="filter-tab" data-type="home" onclick="toggleTypeFilter('home')">居家</div>
          <div class="filter-tab" data-type="open" onclick="toggleTypeFilter('open')">可報名 <span class="badge badge-amber" id="open-count-badge" style="margin-left:3px">3</span></div>
        </div>
      </div>
      <div class="view-bar-right">
        <!-- Custom Therapist Dropdown -->
        <div class="custom-dropdown" id="therapist-dropdown">
          <button class="dropdown-btn" id="therapist-dropdown-btn" onclick="toggleTherapistDropdown(event)">全部治療師</button>
          <div class="dropdown-content" id="therapist-dropdown-menu">
            <label class="dropdown-item"><input type="checkbox" id="chk-therapist-all" value="all" checked onchange="onTherapistCheckboxChange(this)"> 全部治療師</label>
            <label class="dropdown-item"><input type="checkbox" class="chk-therapist" value="黃志豪" checked onchange="onTherapistCheckboxChange(this)"> 黃志豪（PT）</label>
            <label class="dropdown-item"><input type="checkbox" class="chk-therapist" value="陳建宏" checked onchange="onTherapistCheckboxChange(this)"> 陳建宏（PT）</label>
            <label class="dropdown-item"><input type="checkbox" class="chk-therapist" value="李佳穎" checked onchange="onTherapistCheckboxChange(this)"> 李佳穎（OT）</label>
            <label class="dropdown-item"><input type="checkbox" class="chk-therapist" value="張雅玲" checked onchange="onTherapistCheckboxChange(this)"> 張雅玲（OT）</label>
            <label class="dropdown-item"><input type="checkbox" class="chk-therapist" value="吳怡君" checked onchange="onTherapistCheckboxChange(this)"> 吳怡君（ST）</label>
          </div>
        </div>
      </div>
    </div>

    <!-- 圖例 -->
    <div class="legend">
      <div class="legend-item"><div class="legend-dot" style="background:var(--pac-inpatient)"></div>PAC 院內</div>
      <div class="legend-item"><div class="legend-dot" style="background:var(--nonpac-inpatient)"></div>非PAC 院內</div>
      <div class="legend-item"><div class="legend-dot" style="background:var(--pac-home)"></div>PAC 居家</div>
      <div class="legend-item"><div class="legend-dot" style="background:var(--nonpac-home)"></div>非PAC 居家</div>
      <div class="legend-item"><div class="legend-dot" style="background:var(--amber)"></div>可報名居家</div>
      <div class="legend-item"><div class="legend-dot" style="background:#FDE68A"></div>假日</div>
    </div>

    <!-- ══ 月曆視圖 ══ -->
    <div id="view-month">
      <div class="cal-grid">
        <!-- 星期標題 -->
        <div class="cal-header">日</div>
        <div class="cal-header">一</div>
        <div class="cal-header">二</div>
        <div class="cal-header">三</div>
        <div class="cal-header">四</div>
        <div class="cal-header">五</div>
        <div class="cal-header">六</div>

        <!-- 第一週 (5月尾) -->
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">1</div></div>
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">2</div></div>
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">3</div></div>
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">4</div></div>
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">5</div></div>
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">6</div></div>
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">7</div></div>

        <!-- 第二週 6/1~6/7 -->
        <div class="cal-cell holiday" data-date="6-1">
          <div class="cal-date">1 <span class="holiday-label">端午節</span></div>
        </div>
        <div class="cal-cell" data-date="6-2">
          <div class="cal-date">2</div>
        </div>
        <div class="cal-cell" data-date="6-3">
          <div class="cal-date">3</div>
        </div>
        <div class="cal-cell" data-date="6-4">
          <div class="cal-date">4</div>
        </div>
        <div class="cal-cell" data-date="6-5">
          <div class="cal-date">5</div>
        </div>
        <div class="cal-cell" data-date="6-6">
          <div class="cal-date">6</div>
        </div>
        <div class="cal-cell" data-date="6-7">
          <div class="cal-date">7</div>
        </div>

        <!-- 第三週 6/8~6/14 -->
        <div class="cal-cell" data-date="6-8">
          <div class="cal-date">8</div>
        </div>
        <div class="cal-cell" data-date="6-9">
          <div class="cal-date">9</div>
        </div>
        <div class="cal-cell" data-date="6-10">
          <div class="cal-date">10</div>
        </div>
        <div class="cal-cell" data-date="6-11">
          <div class="cal-date">11</div>
        </div>
        <div class="cal-cell" data-date="6-12">
          <div class="cal-date">12</div>
        </div>
        <div class="cal-cell" data-date="6-13">
          <div class="cal-date">13</div>
        </div>
        <div class="cal-cell" data-date="6-14">
          <div class="cal-date">14</div>
        </div>

        <!-- 第四週 6/15~6/21 -->
        <div class="cal-cell" data-date="6-15">
          <div class="cal-date">15</div>
        </div>
        <div class="cal-cell" data-date="6-16">
          <div class="cal-date">16</div>
        </div>
        <div class="cal-cell" data-date="6-17">
          <div class="cal-date">17</div>
        </div>
        <div class="cal-cell" data-date="6-18">
          <div class="cal-date">18</div>
        </div>
        <div class="cal-cell" data-date="6-19">
          <div class="cal-date">19</div>
        </div>
        <div class="cal-cell" data-date="6-20">
          <div class="cal-date">20</div>
        </div>
        <div class="cal-cell" data-date="6-21">
          <div class="cal-date">21</div>
        </div>

        <!-- 第五週 6/22~6/28 -->
        <div class="cal-cell" data-date="6-22">
          <div class="cal-date">22</div>
        </div>
        <div class="cal-cell today" data-date="6-23">
          <div class="cal-date"><span class="cal-date today-num">23</span> <span style="font-size:10px;color:var(--blue)">今天</span></div>
        </div>
        <div class="cal-cell" data-date="6-24">
          <div class="cal-date">24</div>
        </div>
        <div class="cal-cell" data-date="6-25">
          <div class="cal-date">25</div>
        </div>
        <div class="cal-cell" data-date="6-26">
          <div class="cal-date">26</div>
        </div>
        <div class="cal-cell" data-date="6-27">
          <div class="cal-date">27</div>
        </div>
        <div class="cal-cell" data-date="6-28">
          <div class="cal-date">28</div>
        </div>

        <!-- 第六週 6/29~6/30 + 下月 -->
        <div class="cal-cell">
          <div class="cal-date">29</div>
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">黃志豪(PT) 李文雄 08:00</div>
        </div>
        <div class="cal-cell">
          <div class="cal-date">30</div>
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">李佳穎(OT) 鄭大偉 09:00</div>
          <div class="cal-event pac-in" onclick="openDrawer('inpatient')">吳怡君(ST) 吳麗珠 10:00</div>
        </div>
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">1</div></div>
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">2</div></div>
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">3</div></div>
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">4</div></div>
        <div class="cal-cell other-month"><div class="cal-date" style="color:var(--gray-300)">5</div></div>
      </div>
    </div><!-- /view-month -->

    <!-- ══ 週次視圖（主管白板式矩陣）══ -->
    <div id="view-week" class="hidden">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:10px">
        <div style="font-size:12px;color:var(--gray-500);font-weight:600" id="week-date-label">2026/06/22（一）～ 2026/06/28（日）</div>
        <div class="filter-tabs" id="week-day-tabs">
          <!-- Will render week day buttons by JS -->
        </div>
      </div>
      <div style="overflow-x:auto" id="week-matrix-container">
        <!-- Table rendered by JS -->
      </div>
    </div><!-- /view-week -->

  </div><!-- /content -->
</div><!-- /main -->
  <!-- Reusable Day Modal -->
  <div id="day-modal" class="day-modal-overlay hidden">
    <div class="drawer" style="max-width:460px;width:92vw;max-height:80vh">
      <div class="drawer-header">
        <div>
          <div class="drawer-title" id="day-modal-title">📅 當日排班</div>
          <div style="font-size:12px;color:var(--gray-500);margin-top:2px" id="day-modal-subtitle">共 0 筆排班</div>
        </div>
        <button class="drawer-close" onclick="closeDayModal()">✕</button>
      </div>
      <div class="drawer-body" style="padding:10px 16px" id="day-modal-list">
        <!-- Dynamically populated by JS -->
      </div>
    </div>
  </div>

  <!-- ══ DETAIL MODAL：院內個案 ══ -->
  <div id="drawer-overlay-inpatient" class="detail-modal-overlay hidden" onclick="if(event.target===this)closeDrawer('inpatient')">
  <div id="drawer-inpatient" class="drawer">
    <div class="drawer-header">
      <div>
        <div class="drawer-title" id="inpatient-det-title">鄧大偉・復健排班詳情</div>
        <div style="font-size:12px;color:var(--gray-500);margin-top:3px" id="inpatient-det-subtitle">2026/06/23 09:00・<span class="badge badge-blue" style="font-size:10px">PAC 院內</span></div>
      </div>
      <button class="drawer-close" onclick="closeDrawer('inpatient')">&#10005;</button>
    </div>
    <div class="drawer-body">
      <div class="drawer-section">
        <div class="drawer-section-title">治療師資訊</div>
        <div class="drawer-info-grid">
          <div class="drawer-field"><label>治療師</label><span id="inpatient-det-therapist">黃志豪</span></div>
          <div class="drawer-field"><label>職類</label><span id="inpatient-det-role"><span class="therapist-tag therapist-pt">PT</span> 物理治療師</span></div>
          <div class="drawer-field"><label>治療時段</label><span id="inpatient-det-time">09:00 – 09:50</span></div>
          <div class="drawer-field"><label>地點</label><span>復健治療室</span></div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="drawer-section">
        <div class="drawer-section-title">個案資訊</div>
        <div class="drawer-info-grid" style="margin-bottom:10px">
          <div class="drawer-field"><label>姓名</label><span id="inpatient-det-name">鄧大偉</span></div>
          <div class="drawer-field"><label>年齡／性別</label><span id="inpatient-det-age-gender">62歲 男</span></div>
          <div class="drawer-field"><label>疾病別</label><span id="inpatient-det-disease">骨科（膈關節）</span></div>
          <div class="drawer-field"><label>PAC 類型</label><span id="inpatient-det-pactype"><span class="badge badge-blue" style="font-size:10px">PAC 住院</span></span></div>
          <div class="drawer-field"><label>入院日期</label><span id="inpatient-det-admit">2026/05/28</span></div>
          <div class="drawer-field"><label>照護週次</label><span id="inpatient-det-week">第 4 週</span></div>
          <div class="drawer-field"><label>床位</label><span id="inpatient-det-bed">301-B</span></div>
          <div class="drawer-field"><label>主治醫師</label><span id="inpatient-det-doctor">陳醫師（復健科）</span></div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="drawer-section">
        <div class="drawer-section-title">醫囑方向</div>
        <div class="summary-box" id="inpatient-det-summary">膈關節置換術後復健，著重步態訓練、肌力強化、關節活動度恢復。目標：6週內恢復獨立步行。</div>
      </div>
      <div class="divider"></div>
      <div id="manager-actions" class="drawer-section">
        <div class="drawer-section-title">操作（復健主管）</div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-ghost btn-sm" onclick="closeDrawer('inpatient');openModal('modal-edit-schedule')">&#9999;&#65039; 編輯排班</button>
          <button class="btn btn-danger btn-sm" onclick="closeDrawer('inpatient')">&#10060; 取消排班</button>
        </div>
      </div>
      <div id="therapist-actions" class="drawer-section hidden">
        <div class="drawer-section-title">操作（治療師）</div>
        <button class="btn btn-secondary btn-sm" onclick="closeDrawer('inpatient');openModal('modal-swap')">&#8596; 申請換班 / 代班</button>
      </div>
    </div>
  </div>
  </div>

  <!-- ══ DETAIL MODAL：居家個案 ══ -->
  <div id="drawer-overlay-home" class="detail-modal-overlay hidden" onclick="if(event.target===this)closeDrawer('home')">
  <div id="drawer-home" class="drawer">
    <div class="drawer-header">
      <div>
        <div class="drawer-title" id="home-det-title">黃建國・居家復健詳情</div>
        <div style="font-size:12px;color:var(--gray-500);margin-top:3px" id="home-det-subtitle">2026/06/23 下班後・<span class="badge badge-green" style="font-size:10px">PAC 居家</span></div>
      </div>
      <button class="drawer-close" onclick="closeDrawer('home')">&#10005;</button>
    </div>
    <div class="drawer-body">
      <div class="drawer-section">
        <div class="drawer-section-title">治療師資訊</div>
        <div class="drawer-info-grid">
          <div class="drawer-field"><label>治療師</label><span id="home-det-therapist">陳建宏</span></div>
          <div class="drawer-field"><label>職類</label><span id="home-det-role"><span class="therapist-tag therapist-pt">PT</span> 物理治療師</span></div>
          <div class="drawer-field"><label>前往時間</label><span id="home-det-time">下班後（約18:00）</span></div>
          <div class="drawer-field"><label>批價狀態</label><span id="home-det-billing"><span class="badge badge-green">已批價</span></span></div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="drawer-section">
        <div class="drawer-section-title">個案基本資料</div>
        <div class="drawer-info-grid" style="margin-bottom:10px">
          <div class="drawer-field"><label>姓名</label><span id="home-det-name">黃建國</span></div>
          <div class="drawer-field"><label>年齡／性別</label><span id="home-det-age-gender">55歲 男</span></div>
          <div class="drawer-field"><label>疾病別</label><span id="home-det-disease">脊髓損傷（C4-C5）</span></div>
          <div class="drawer-field"><label>PAC 類型</label><span id="home-det-pactype"><span class="badge badge-green" style="font-size:10px">PAC 居家</span></span></div>
          <div class="drawer-field"><label>開案日期</label><span id="home-det-startdate">2026/06/22</span></div>
          <div class="drawer-field"><label>照護週次</label><span id="home-det-week">第 1 週</span></div>
        </div>
        <div class="drawer-field" style="margin-bottom:10px">
          <label>地址</label>
          <span id="home-det-address">台北市中山區○○路○○號（距醫院約 8.2 km）</span>
        </div>
        <div class="drawer-info-grid">
          <div class="drawer-field"><label>個案電話</label><span id="home-det-phone">0934-567-890</span></div>
          <div class="drawer-field"><label>家屬聯絡</label><span id="home-det-contact">黃太太 0945-678-901</span></div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="drawer-section">
        <div class="drawer-section-title">病摘摘要</div>
        <div class="summary-box" id="home-det-summary1">脊髓損傷（C4-C5），不完全損傷（ASIA B）。上肢保有部分感覺，下肢運動功能受損。建議以上肢功能強化、呼吸訓練、轉位訓練為主。</div>
      </div>
      <div class="divider"></div>
      <div class="drawer-section">
        <div class="drawer-section-title">醫囑方向</div>
        <div class="summary-box" id="home-det-summary2">物理治療：每週 3 次，每次 50 分鐘。著重轉位訓練、呼吸肌強化、下肢被動活動。如遇呼吸困難立即停止並通報個管師。</div>
      </div>
      <div class="divider"></div>
      <div id="home-manager-actions" class="drawer-section">
        <div class="drawer-section-title">操作（復健主管）</div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-ghost btn-sm" onclick="closeDrawer('home');openModal('modal-edit-schedule')">&#9999;&#65039; 編輯排班</button>
          <button class="btn btn-danger btn-sm" onclick="closeDrawer('home')">&#10060; 取消排班</button>
        </div>
      </div>
      <div id="home-therapist-actions" class="drawer-section hidden">
        <div class="drawer-section-title">操作（治療師）</div>
        <button class="btn btn-secondary btn-sm" onclick="closeDrawer('home');openModal('modal-swap')">↔ 申請換班 / 代班</button>
      </div>
    </div>
  </div>


<!-- ══ MODALS ══ -->

<!-- 新增班表（主管）-->
<div id="modal-add-schedule" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header"><div class="modal-title">＋ 新增班表</div><button class="modal-close" onclick="closeModal('modal-add-schedule')">✕</button></div>
    <div class="modal-body">
      <div class="form-group">
        <label>排班類型 <span class="required">*</span></label>
        <div style="display:flex;gap:10px">
          <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer"><input type="radio" name="sched-type" checked style="accent-color:var(--blue)"> 院內</label>
          <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer"><input type="radio" name="sched-type" style="accent-color:var(--blue)"> 居家</label>
        </div>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>治療師 <span class="required">*</span></label>
          <select class="form-control">
            <option>請選擇治療師</option>
            <option>黃志豪（PT）</option>
            <option>陳建宏（PT）</option>
            <option>李佳穎（OT）</option>
            <option>張雅玲（OT）</option>
            <option>吳怡君（ST）</option>
          </select>
        </div>
        <div class="form-group">
          <label>個案 <span class="required">*</span></label>
          <select class="form-control">
            <option>請選擇個案</option>
            <option>李文雄（COPD・院內）</option>
            <option>鄭大偉（骨科・院內）</option>
            <option>吳麗珠（CVA・院內）</option>
            <option>黃建國（脊髓損傷・居家）</option>
            <option>王淑芬（骨科・居家）</option>
          </select>
        </div>
        <div class="form-group">
          <label>日期 <span class="required">*</span></label>
          <input class="form-control" type="date" value="2026-06-24">
        </div>
        <div class="form-group">
          <label>時段 <span class="required">*</span></label>
          <select class="form-control">
            <option>08:00 – 08:50</option>
            <option>08:30 – 09:20</option>
            <option>09:00 – 09:50</option>
            <option>09:30 – 10:20</option>
            <option>10:00 – 10:50</option>
            <option>10:30 – 11:20</option>
            <option>14:00 – 14:50</option>
            <option>14:30 – 15:20</option>
            <option>午休（居家）</option>
            <option>下班後（居家）</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>備註</label>
        <textarea class="form-control" placeholder="填寫治療重點或特殊注意事項…"></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-add-schedule')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-add-schedule')">確認新增</button>
    </div>
  </div>
</div>

<!-- 編輯班表（主管）-->
<div id="modal-edit-schedule" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header"><div class="modal-title">✏️ 編輯班表</div><button class="modal-close" onclick="closeModal('modal-edit-schedule')">✕</button></div>
    <div class="modal-body">
      <div class="info-note blue">目前排班：黃志豪（PT）・鄭大偉・2026/06/23 09:00</div>
      <div class="form-grid">
        <div class="form-group">
          <label>更換治療師</label>
          <select class="form-control">
            <option>黃志豪（PT）</option>
            <option>陳建宏（PT）</option>
            <option>李佳穎（OT）</option>
          </select>
        </div>
        <div class="form-group">
          <label>更換日期</label>
          <input class="form-control" type="date" value="2026-06-23">
        </div>
        <div class="form-group">
          <label>更換時段</label>
          <select class="form-control">
            <option>09:00 – 09:50</option>
            <option>09:30 – 10:20</option>
            <option>10:00 – 10:50</option>
            <option>14:00 – 14:50</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>備註</label>
        <textarea class="form-control" placeholder="備註修改原因…"></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-danger btn-sm" onclick="closeModal('modal-edit-schedule')">取消排班</button>
      <button class="btn btn-secondary" onclick="closeModal('modal-edit-schedule')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-edit-schedule')">儲存變更</button>
    </div>
  </div>
</div>

<!-- 申請換班/代班（治療師）-->
<div id="modal-swap" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header"><div class="modal-title">↔ 申請換班 / 代班</div><button class="modal-close" onclick="closeModal('modal-swap')">✕</button></div>
    <div class="modal-body">
      <div class="info-note blue">原排班：2026/06/23 09:00・個案 鄭大偉</div>
      <div class="form-group">
        <label>申請類型</label>
        <div style="display:flex;gap:10px">
          <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer"><input type="radio" name="swap-type" checked style="accent-color:var(--blue)"> 換班（更換日期/時段）</label>
          <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer"><input type="radio" name="swap-type" style="accent-color:var(--blue)"> 代班（找人代替）</label>
        </div>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>更換至日期 <span class="required">*</span></label>
          <input class="form-control" type="date">
        </div>
        <div class="form-group">
          <label>更換至時段 <span class="required">*</span></label>
          <select class="form-control">
            <option>08:00 – 08:50</option>
            <option>09:00 – 09:50</option>
            <option>10:00 – 10:50</option>
            <option>14:00 – 14:50</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>換 / 代 班事由 <span class="required">*</span></label>
        <textarea class="form-control" placeholder="請說明換班或代班的原因…"></textarea>
      </div>
      <div class="info-note amber">申請送出後需等待復健主管審核，審核通過後班表才會更新。</div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-swap')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-swap')">送出申請</button>
    </div>
  </div>
</div>

<!-- 換班審核（主管）-->
<div id="modal-approval" class="modal-overlay hidden">
  <div class="modal modal-lg">
    <div class="modal-header"><div class="modal-title">換班審核 <span class="badge badge-red" style="margin-left:8px">2 件待審</span></div><button class="modal-close" onclick="closeModal('modal-approval')">✕</button></div>
    <div class="modal-body">
      <div class="approval-list">
        <div class="approval-item">
          <div class="approval-item-header">
            <div>
              <div class="approval-name">黃志豪（PT）申請換班</div>
              <div class="approval-meta">原排班：2026/06/25 09:00・鄭大偉・→ 申請換至 06/26 14:00</div>
            </div>
            <span class="badge badge-amber">待審核</span>
          </div>
          <div class="approval-reason">事由：家庭因素，06/25 上午無法出席，確認 06/26 下午可補回。</div>
          <div class="approval-actions">
            <button class="btn btn-danger btn-sm">拒絕</button>
            <button class="btn btn-green btn-sm" onclick="closeModal('modal-approval')">✓ 核准</button>
          </div>
        </div>
        <div class="approval-item">
          <div class="approval-item-header">
            <div>
              <div class="approval-name">陳建宏（PT）申請代班</div>
              <div class="approval-meta">原排班：2026/06/27 下班後・黃建國居家・→ 申請找人代班</div>
            </div>
            <span class="badge badge-amber">待審核</span>
          </div>
          <div class="approval-reason">事由：個人臨時狀況，無法前往居家個案家。已詢問李佳穎可否代班，尚未確認。</div>
          <div class="approval-actions">
            <button class="btn btn-danger btn-sm">拒絕</button>
            <button class="btn btn-green btn-sm" onclick="closeModal('modal-approval')">✓ 核准</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-approval')">關閉</button>
    </div>
  </div>
</div>

<!-- 居家個案報名（治療師）-->
<div id="modal-register" class="modal-overlay hidden">
  <div class="modal modal-lg">
    <div class="modal-header">
      <div class="modal-title" id="reg-det-title">🏡 居家個案報名・黃建國</div><button class="modal-close" onclick="closeModal('modal-register')">✕</button>
    </div>
    <div class="modal-body">
      <div class="info-note amber" id="reg-det-note">報名截止：2026/06/24 12:00・若報名人數超額將進行抽籤</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:14px">
        <div>
          <div class="drawer-section-title">個案基本資料</div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div><span style="font-size:11px;color:var(--gray-400)">姓名：</span><span style="font-size:13px;font-weight:600" id="reg-det-name">黃建國</span></div>
            <div><span style="font-size:11px;color:var(--gray-400)">年齡／性別：</span><span style="font-size:12px" id="reg-det-age-gender">55歲 男</span></div>
            <div><span style="font-size:11px;color:var(--gray-400)">疾病別：</span><span style="font-size:12px" id="reg-det-disease">脊髓損傷（C4-C5）</span></div>
            <div><span style="font-size:11px;color:var(--gray-400)">地址：</span><span style="font-size:12px" id="reg-det-address">台北市中山區（距醫院約 8.2 km）</span></div>
            <div><span style="font-size:11px;color:var(--gray-400)">聯絡：</span><span style="font-size:12px" id="reg-det-contact">0934-567-890 / 家屬黃太太</span></div>
          </div>
        </div>
        <div>
          <div class="drawer-section-title">所需人力</div>
          <div class="quota-row">
            <span class="quota-label" style="color:var(--blue);font-weight:700">PT</span>
            <div class="quota-bar">
              <div class="quota-fill pt" id="reg-quota-pt-bar" style="width:33%"></div>
            </div>
            <span class="quota-count" id="reg-quota-pt-count">1 / 3 人</span>
          </div>
          <div class="quota-row">
            <span class="quota-label" style="color:var(--purple);font-weight:700">OT</span>
            <div class="quota-bar">
              <div class="quota-fill ot" id="reg-quota-ot-bar" style="width:0%"></div>
            </div>
            <span class="quota-count" id="reg-quota-ot-count">0 / 3 人</span>
          </div>
          <div class="quota-row">
            <span class="quota-label" style="color:var(--green);font-weight:700">ST</span>
            <div class="quota-bar">
              <div class="quota-fill st" id="reg-quota-st-bar" style="width:0%"></div>
            </div>
            <span class="quota-count" id="reg-quota-st-count">0 / 0 人</span>
          </div>
          <div style="font-size:11px;color:var(--gray-400);margin-top:6px" id="reg-quota-summary">不需 ST・共需 6 名治療師</div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="drawer-section-title">病摘摘要</div>
      <div class="summary-box" style="margin-bottom:14px" id="reg-det-summary1">脊髓損傷（C4-C5），不完全損傷（ASIA B）。上肢保有部分感覺，下肢運動功能受損。建議以上肢功能強化、呼吸訓練、轉位訓練為主。注意：個案有呼吸問題，遇喘促需立即停止並通報。</div>
      <div class="drawer-section-title">醫囑</div>
      <div class="summary-box" style="margin-bottom:14px" id="reg-det-summary2">PT：每週 3 次，每次 50 分鐘。著重轉位訓練、呼吸肌強化、下肢被動活動。<br>OT：每週 3 次，每次 50 分鐘。上肢功能訓練、日常生活輔具評估。</div>
      <div class="drawer-section-title">選擇可前往的時段</div>
      <div class="time-slot-grid">
        <div class="time-slot" onclick="this.classList.toggle('selected')">週一 午休</div>
        <div class="time-slot selected" onclick="this.classList.toggle('selected')">週三 下班後</div>
        <div class="time-slot" onclick="this.classList.toggle('selected')">週四 午休</div>
        <div class="time-slot" onclick="this.classList.toggle('selected')">週五 下班後</div>
        <div class="time-slot" onclick="this.classList.toggle('selected')">週六 上午</div>
        <div class="time-slot taken">週日（不排）</div>
        <div class="time-slot" onclick="this.classList.toggle('selected')">週二 下班後</div>
        <div class="time-slot" onclick="this.classList.toggle('selected')">週五 午休</div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-register')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-register')">確認報名</button>
    </div>
  </div>
</div>

<script>
// Data Store
const schedules = [
  // 6/2
  { date: '6-2', therapist: '黃志豪', therapistType: 'PT', patient: '李文雄', time: '08:00', type: 'pac-in' },
  { date: '6-2', therapist: '李佳穎', therapistType: 'OT', patient: '鄭大偉', time: '09:30', type: 'pac-in' },
  { date: '6-2', therapist: '陳建宏', therapistType: 'PT', patient: '王○○', time: '10:00', type: 'nonpac-in' },

  // 6-3
  { date: '6-3', therapist: '黃志豪', therapistType: 'PT', patient: '吳麗珠', time: '08:30', type: 'pac-in' },
  { date: '6-3', therapist: '李佳穎', therapistType: 'OT', patient: '李文雄', time: '14:00', type: 'pac-in' },
  { date: '6-3', therapist: '陳建宏', therapistType: 'PT', patient: '黃建國', time: '17:30', type: 'pac-home' },

  // 6-4
  { date: '6-4', therapist: '黃志豪', therapistType: 'PT', patient: '鄭大偉', time: '09:00', type: 'pac-in' },
  { date: '6-4', therapist: '張雅玲', therapistType: 'OT', patient: '蔡○○', time: '10:30', type: 'nonpac-in' },
  { date: '6-4', therapist: '吳怡君', therapistType: 'ST', patient: '李文雄', time: '14:00', type: 'pac-in' },
  { date: '6-4', therapist: '陳建宏', therapistType: 'PT', patient: '黃建國', time: '16:30', type: 'pac-home' },
  { date: '6-4', therapist: '李佳穎', therapistType: 'OT', patient: '吳麗珠', time: '15:30', type: 'pac-in' },

  // 6-5
  { date: '6-5', therapist: '吳怡君', therapistType: 'ST', patient: '李文雄', time: '09:00', type: 'pac-in' },
  { date: '6-5', therapist: '黃志豪', therapistType: 'PT', patient: '陳志明', time: '10:00', type: 'pac-in' },
  { date: '6-5', therapist: '張雅玲', therapistType: 'OT', patient: '王淑芬', time: '12:30', type: 'pac-home' }, // 午休

  // 6-6
  { date: '6-6', therapist: '李佳穎', therapistType: 'OT', patient: '吳麗珠', time: '08:00', type: 'pac-in' },
  { date: '6-6', therapist: '陳建宏', therapistType: 'PT', patient: '黃○○', time: '09:30', type: 'nonpac-in' },
  { date: '6-6', therapist: '陳建宏', therapistType: 'PT', patient: '黃建國', time: '10:00', type: 'open' }, // 可報名

  // 6-7
  { date: '6-7', therapist: '黃志豪', therapistType: 'PT', patient: '李文雄', time: '18:00', type: 'pac-home' }, // 下班後
  { date: '6-7', therapist: '陳建宏', therapistType: 'PT', patient: '黃建國', time: '18:30', type: 'pac-home' }, // 下班後

  // 6-8
  { date: '6-8', therapist: '黃志豪', therapistType: 'PT', patient: '李文雄', time: '08:00', type: 'pac-in' },
  { date: '6-8', therapist: '李佳穎', therapistType: 'OT', patient: '鄭大偉', time: '09:00', type: 'pac-in' },
  { date: '6-8', therapist: '張雅玲', therapistType: 'OT', patient: '王淑芬', time: '10:00', type: 'open' }, // 可報名

  // 6-9
  { date: '6-9', therapist: '黃志豪', therapistType: 'PT', patient: '吳麗珠', time: '08:30', type: 'pac-in' },
  { date: '6-9', therapist: '李佳穎', therapistType: 'OT', patient: '鄭大偉', time: '11:00', type: 'pac-in' },
  { date: '6-9', therapist: '張雅玲', therapistType: 'OT', patient: '李文雄', time: '14:00', type: 'pac-in' },
  { date: '6-9', therapist: '陳建宏', therapistType: 'PT', patient: '王○○', time: '15:30', type: 'nonpac-in' },
  { date: '6-9', therapist: '陳建宏', therapistType: 'PT', patient: '黃建國', time: '17:30', type: 'pac-home' },
  { date: '6-9', therapist: '吳怡君', therapistType: 'ST', patient: '蔡○○', time: '10:00', type: 'nonpac-in' },
  { date: '6-9', therapist: '黃志豪', therapistType: 'PT', patient: '陳志明', time: '16:00', type: 'pac-in' },

  // 6-10
  { date: '6-10', therapist: '黃志豪', therapistType: 'PT', patient: '鄭大偉', time: '09:00', type: 'pac-in' },
  { date: '6-10', therapist: '李佳穎', therapistType: 'OT', patient: '陳志明', time: '10:00', type: 'pac-in' },
  { date: '6-10', therapist: '張雅玲', therapistType: 'OT', patient: '王淑芬', time: '12:30', type: 'pac-home' }, // 午休
  { date: '6-10', therapist: '陳建宏', therapistType: 'PT', patient: '吳麗珠', time: '14:00', type: 'nonpac-in' },
  { date: '6-10', therapist: '吳怡君', therapistType: 'ST', patient: '李文雄', time: '15:30', type: 'pac-in' },
  { date: '6-10', therapist: '黃志豪', therapistType: 'PT', patient: '李文雄', time: '08:00', type: 'pac-in' },
  { date: '6-10', therapist: '陳建宏', therapistType: 'PT', patient: '黃建國', time: '16:30', type: 'pac-home' },

  // 6-11
  { date: '6-11', therapist: '吳怡君', therapistType: 'ST', patient: '李文雄', time: '09:00', type: 'pac-in' },
  { date: '6-11', therapist: '陳建宏', therapistType: 'PT', patient: '蔡○○', time: '10:30', type: 'nonpac-in' },

  // 6-12
  { date: '6-12', therapist: '黃志豪', therapistType: 'PT', patient: '李文雄', time: '08:00', type: 'pac-in' },
  { date: '6-12', therapist: '李佳穎', therapistType: 'OT', patient: '吳麗珠', time: '09:30', type: 'pac-in' },
  { date: '6-12', therapist: '張雅玲', therapistType: 'OT', patient: '蔡○○', time: '11:00', type: 'nonpac-in' },
  { date: '6-12', therapist: '陳建宏', therapistType: 'PT', patient: '黃建國', time: '17:30', type: 'pac-home' },
  { date: '6-12', therapist: '吳怡君', therapistType: 'ST', patient: '鄭大偉', time: '14:00', type: 'pac-in' },

  // 6-13
  { date: '6-13', therapist: '黃志豪', therapistType: 'PT', patient: '黃建國', time: '18:00', type: 'pac-home' },
  { date: '6-13', therapist: '李佳穎', therapistType: 'OT', patient: '陳志明', time: '10:00', type: 'open' },

  // 6-14
  { date: '6-14', therapist: '陳建宏', therapistType: 'PT', patient: '黃建國', time: '18:00', type: 'pac-home' },
  { date: '6-14', therapist: '張雅玲', therapistType: 'OT', patient: '王淑芬', time: '18:30', type: 'pac-home' },

  // 6-15
  { date: '6-15', therapist: '黃志豪', therapistType: 'PT', patient: '鄭大偉', time: '08:00', type: 'pac-in' },
  { date: '6-15', therapist: '李佳穎', therapistType: 'OT', patient: '李文雄', time: '09:30', type: 'pac-in' },

  // 6-16
  { date: '6-16', therapist: '黃志豪', therapistType: 'PT', patient: '陳志明', time: '08:00', type: 'pac-in' },
  { date: '6-16', therapist: '張雅玲', therapistType: 'OT', patient: '黃○○', time: '10:00', type: 'nonpac-in' },
  { date: '6-16', therapist: '陳建宏', therapistType: 'PT', patient: '黃建國', time: '13:00', type: 'pac-home' },
  { date: '6-16', therapist: '吳怡君', therapistType: 'ST', patient: '吳麗珠', time: '15:00', type: 'pac-in' },

  // 6-17
  { date: '6-17', therapist: '吳怡君', therapistType: 'ST', patient: '吳麗珠', time: '09:00', type: 'pac-in' },
  { date: '6-17', therapist: '黃志豪', therapistType: 'PT', patient: '李文雄', time: '10:00', type: 'pac-in' },

  // 6-18
  { date: '6-18', therapist: '李佳穎', therapistType: 'OT', patient: '鄭大偉', time: '09:00', type: 'pac-in' },
  { date: '6-18', therapist: '陳建宏', therapistType: 'PT', patient: '陳志明', time: '10:30', type: 'pac-in' },
  { date: '6-18', therapist: '張雅玲', therapistType: 'OT', patient: '王淑芬', time: '12:30', type: 'pac-home' },

  // 6-19
  { date: '6-19', therapist: '黃志豪', therapistType: 'PT', patient: '吳麗珠', time: '08:00', type: 'pac-in' },
  { date: '6-19', therapist: '李佳穎', therapistType: 'OT', patient: '鄭大偉', time: '10:00', type: 'pac-in' },
  { date: '6-19', therapist: '陳建宏', therapistType: 'PT', patient: '王淑芬', time: '15:30', type: 'pac-home' },
  { date: '6-19', therapist: '吳怡君', therapistType: 'ST', patient: '蔡○○', time: '16:30', type: 'nonpac-in' },
  { date: '6-19', therapist: '張雅玲', therapistType: 'OT', patient: '李文雄', time: '09:00', type: 'pac-in' },

  // 6-20
  { date: '6-20', therapist: '黃志豪', therapistType: 'PT', patient: '黃建國', time: '18:00', type: 'pac-home' },
  { date: '6-20', therapist: '陳建宏', therapistType: 'PT', patient: '黃建國', time: '18:30', type: 'pac-home' },

  // 6-21
  { date: '6-21', therapist: '張雅玲', therapistType: 'OT', patient: '王淑芬', time: '18:00', type: 'pac-home' },
  { date: '6-21', therapist: '李佳穎', therapistType: 'OT', patient: '黃建國', time: '18:30', type: 'pac-home' },

  // 6-22
  { date: '6-22', therapist: '黃志豪', therapistType: 'PT', patient: '李文雄', time: '08:00', type: 'pac-in' },
  { date: '6-22', therapist: '李佳穎', therapistType: 'OT', patient: '吳麗珠', time: '09:30', type: 'pac-in' },

  // 6-23 (Today)
  { date: '6-23', therapist: '黃志豪', therapistType: 'PT', patient: '鄭大偉', time: '09:00', type: 'pac-in' },
  { date: '6-23', therapist: '李佳穎', therapistType: 'OT', patient: '陳志明', time: '10:00', type: 'pac-in' },
  { date: '6-23', therapist: '陳建宏', therapistType: 'PT', patient: '蔡○○', time: '10:30', type: 'nonpac-in' },
  { date: '6-23', therapist: '吳怡君', therapistType: 'ST', patient: '李文雄', time: '15:00', type: 'pac-in' },
  { date: '6-23', therapist: '陳建宏', therapistType: 'PT', patient: '王○○', time: '16:00', type: 'nonpac-in' },
  { date: '6-23', therapist: '張雅玲', therapistType: 'OT', patient: '黃建國', time: '17:30', type: 'pac-home' },

  // 6-24
  { date: '6-24', therapist: '吳怡君', therapistType: 'ST', patient: '李文雄', time: '09:00', type: 'pac-in' },
  { date: '6-24', therapist: '黃志豪', therapistType: 'PT', patient: '吳麗珠', time: '10:00', type: 'pac-in' },

  // 6-25
  { date: '6-25', therapist: '李佳穎', therapistType: 'OT', patient: '李文雄', time: '08:00', type: 'pac-in' },
  { date: '6-25', therapist: '陳建宏', therapistType: 'PT', patient: '鄭大偉', time: '09:30', type: 'pac-in' },

  // 6-26
  { date: '6-26', therapist: '黃志豪', therapistType: 'PT', patient: '陳志明', time: '08:00', type: 'pac-in' },
  { date: '6-26', therapist: '張雅玲', therapistType: 'OT', patient: '王淑芬', time: '12:30', type: 'pac-home' },
  { date: '6-26', therapist: '黃志豪', therapistType: 'PT', patient: '李文雄', time: '11:00', type: 'pac-in' },
  { date: '6-26', therapist: '李佳穎', therapistType: 'OT', patient: '黃建國', time: '16:00', type: 'pac-home' },
  { date: '6-26', therapist: '吳怡君', therapistType: 'ST', patient: '吳麗珠', time: '14:00', type: 'pac-in' },

  // 6-27
  { date: '6-27', therapist: '黃志豪', therapistType: 'PT', patient: '黃建國', time: '18:00', type: 'pac-home' },
  { date: '6-27', therapist: '陳建宏', therapistType: 'PT', patient: '黃建國', time: '18:30', type: 'pac-home' },

  // 6-28
  { date: '6-28', therapist: '張雅玲', therapistType: 'OT', patient: '王淑芬', time: '18:00', type: 'pac-home' },

  // 6-29
  { date: '6-29', therapist: '黃志豪', therapistType: 'PT', patient: '李文雄', time: '08:00', type: 'pac-in' },

  // 6-30
  { date: '6-30', therapist: '李佳穎', therapistType: 'OT', patient: '鄭大偉', time: '09:00', type: 'pac-in' },
  { date: '6-30', therapist: '吳怡君', therapistType: 'ST', patient: '吳麗珠', time: '10:00', type: 'pac-in' },
];

let currentRole = 'manager';
let selectedTypes = ['all'];
let selectedTherapists = ['all'];
let selectedWeekDay = '6-23';

// Mock patient details generator
function getScheduleDetails(item) {
  const isPac = item.type.startsWith('pac') || item.type === 'open';
  
  let age = '65';
  let gender = '男';
  let disease = '腦中風後復健';
  let physician = '張醫師（神經科）';
  let summary = '著重肢體肌力訓練、關節活動度與日常生活功能重建。';
  let address = '台北市大安區新生南路二段32號（距醫院約 4.5 km）';
  let phone = '0912-345-678';
  let contact = '兒子 0922-333-444';
  
  if (item.patient.includes('文雄')) {
    age = '72'; gender = '男'; disease = '慢性阻塞性肺病 (COPD)'; physician = '劉醫師（胸腔內科）';
    summary = '加強呼吸肌訓練、步行耐力訓練及呼吸排痰指導。';
  } else if (item.patient.includes('大偉')) {
    age = '62'; gender = '男'; disease = '骨科（右膝關節置換術後）'; physician = '陳醫師（骨科）';
    summary = '膝關節活動度訓練、大腿肌力強化及步態訓練。目標6週內脫離拐杖。';
  } else if (item.patient.includes('麗珠')) {
    age = '68'; gender = '女'; disease = '腦梗塞（左側偏癱）'; physician = '林醫師（復健科）';
    summary = '患側上肢功能誘發、站立平衡與轉位訓練，預防跌倒。';
  } else if (item.patient.includes('建國')) {
    age = '55'; gender = '男'; disease = '脊髓損傷（C4-C5，不完全損傷）'; physician = '黃醫師（神經外科）';
    summary = '脊髓損傷不完全癱瘓，加強雙上肢肌力與轉位技巧訓練，配合呼吸治療。';
  } else if (item.patient.includes('淑芬')) {
    age = '59'; gender = '女'; disease = '骨科（左側股骨頸骨折）'; physician = '李醫師（骨科）';
    summary = '術後負重步態訓練、平衡功能訓練與居家生活環境無障礙評估。';
  } else if (item.patient.includes('志明')) {
    age = '47'; gender = '男'; disease = '腦出血後遺症'; physician = '王醫師（復健科）';
    summary = '加強軀幹穩定度、步態對稱性調整與精細動作協調練習。';
  } else if (item.patient.includes('蔡')) {
    age = '74'; gender = '女'; disease = '退化性肢體關節炎'; physician = '鄭醫師（復健科）';
    summary = '雙膝關節物理治療，包括熱敷、電療、肌力訓練與日常關節保養衛教。';
  }
  
  return {
    age, gender, disease, physician, summary, address, phone, contact,
    bed: item.bed || '30' + (Math.floor((item.date.charCodeAt(0) || 0) % 9) + 1) + '-' + ((item.patient.charCodeAt(0) || 0) % 2 === 0 ? 'A' : 'B'),
    week: item.week || '第 ' + (Math.floor((item.date.charCodeAt(1) || 0) % 6) + 1) + ' 週',
    admissionDate: item.admissionDate || '2026/05/20',
    billingStatus: item.billingStatus || '已批價',
  };
}

function getEndTime(time) {
  const [h, m] = time.split(':').map(Number);
  if (isNaN(h) || isNaN(m)) return time;
  let newM = m + 50;
  let newH = h;
  if (newM >= 60) {
    newH += 1;
    newM -= 60;
  }
  return \`\${String(newH).padStart(2, '0')}:\${String(newM).padStart(2, '0')}\`;
}

// Check if schedule passes the type and therapist filters
function matchesFilter(item) {
  // 'open' type (registerable home visits) always visible regardless of therapist filter
  const isOpen = item.type === 'open';

  // Therapist Filter (skip for open items)
  if (!isOpen && !selectedTherapists.includes('all')) {
    if (!selectedTherapists.includes(item.therapist)) return false;
  }
  
  // Type Filter
  if (!selectedTypes.includes('all')) {
    let typeMatched = false;
    if (selectedTypes.includes('inpatient') && (item.type === 'pac-in' || item.type === 'nonpac-in')) {
      typeMatched = true;
    }
    if (selectedTypes.includes('home') && (item.type === 'pac-home' || item.type === 'nonpac-home' || item.type === 'open')) {
      typeMatched = true;
    }
    if (selectedTypes.includes('open') && item.type === 'open') {
      typeMatched = true;
    }
    if (!typeMatched) return false;
  }
  
  return true;
}

// Therapist Dropdown Controls
function toggleTherapistDropdown(e) {
  e.stopPropagation();
  document.getElementById('therapist-dropdown-menu').classList.toggle('show');
}

function onTherapistCheckboxChange(chk) {
  const allChk = document.getElementById('chk-therapist-all');
  const items = Array.from(document.querySelectorAll('.chk-therapist'));
  
  if (chk.value === 'all') {
    items.forEach(i => i.checked = chk.checked);
  } else {
    const allChecked = items.every(i => i.checked);
    allChk.checked = allChecked;
  }
  
  // Re-build selectedTherapists
  if (allChk.checked) {
    selectedTherapists = ['all'];
  } else {
    selectedTherapists = items.filter(i => i.checked).map(i => i.value);
  }
  
  // Update Dropdown Button Text
  const btn = document.getElementById('therapist-dropdown-btn');
  if (selectedTherapists.includes('all')) {
    btn.textContent = '全部治療師';
  } else if (selectedTherapists.length === 0) {
    btn.textContent = '無選擇治療師';
  } else if (selectedTherapists.length <= 2) {
    btn.textContent = selectedTherapists.join(', ');
  } else {
    btn.textContent = \`已選 \${selectedTherapists.length} 位\`;
  }
  
  renderCalendar();
  renderWeekView();
}

// Close dropdown if clicked outside
window.addEventListener('click', function(e) {
  const menu = document.getElementById('therapist-dropdown-menu');
  const btn = document.getElementById('therapist-dropdown-btn');
  if (menu && !menu.contains(e.target) && e.target !== btn) {
    menu.classList.remove('show');
  }
});

// Type Filter Controls
function toggleTypeFilter(type) {
  const tabs = document.querySelectorAll('#type-filters .filter-tab');
  
  if (type === 'all') {
    selectedTypes = ['all'];
  } else {
    // Toggle active state
    if (selectedTypes.includes('all')) {
      selectedTypes = [type];
    } else {
      if (selectedTypes.includes(type)) {
        selectedTypes = selectedTypes.filter(t => t !== type);
      } else {
        selectedTypes.push(type);
      }
    }
    
    // If empty, reset to all
    if (selectedTypes.length === 0) {
      selectedTypes = ['all'];
    }
  }
  
  // Update Tab active classes
  tabs.forEach(tab => {
    const tType = tab.getAttribute('data-type');
    if (selectedTypes.includes('all')) {
      tab.classList.toggle('active', tType === 'all');
    } else {
      tab.classList.toggle('active', selectedTypes.includes(tType));
    }
  });
  
  renderCalendar();
  renderWeekView();
}

function switchRole(role) {
  currentRole = role;
  document.getElementById('btn-manager').classList.toggle('active', role === 'manager');
  document.getElementById('btn-therapist').classList.toggle('active', role === 'therapist');

  const allChk = document.getElementById('chk-therapist-all');
  const chks = document.querySelectorAll('.chk-therapist');
  const dropdownBtn = document.getElementById('therapist-dropdown-btn');

  if (role === 'manager') {
    document.getElementById('user-avatar').className = 'user-avatar manager';
    document.getElementById('user-avatar').textContent = '王';
    document.getElementById('user-name').textContent = '王復健主管';
    document.getElementById('user-role-label').textContent = '復健主管';
    document.getElementById('approval-badge').classList.remove('hidden');
    document.getElementById('btn-add-schedule').classList.remove('hidden');

    // Re-enable the therapist filter dropdown for manager
    dropdownBtn.classList.remove('disabled');
    allChk.disabled = false;
    chks.forEach(c => c.disabled = false);

    // Restore all-selected state
    allChk.checked = true;
    chks.forEach(c => c.checked = true);
    selectedTherapists = ['all'];
    dropdownBtn.textContent = '全部治療師';
  } else {
    // Therapist role: shows identity as 黃志豪 but STILL shows ALL schedules
    document.getElementById('user-avatar').className = 'user-avatar';
    document.getElementById('user-avatar').textContent = '黃';
    document.getElementById('user-name').textContent = '黃志豪';
    document.getElementById('user-role-label').textContent = '物理治療師（PT）';
    document.getElementById('approval-badge').classList.add('hidden');
    document.getElementById('btn-add-schedule').classList.add('hidden');

    // Therapist can still filter by therapist but defaults to all
    // The dropdown remains functional so they can browse by therapist
    dropdownBtn.classList.remove('disabled');
    allChk.disabled = false;
    chks.forEach(c => c.disabled = false);
    allChk.checked = true;
    chks.forEach(c => c.checked = true);
    selectedTherapists = ['all'];
    dropdownBtn.textContent = '全部治療師';
  }

  // Update drawer action buttons based on role (called dynamically in showItemDetails)
  // Update visible drawer actions immediately if any drawer is open
  updateDrawerActionsForRole(role);

  renderCalendar();
  renderWeekView();
}

function updateDrawerActionsForRole(role) {
  const isManager = (role === 'manager');
  ['manager-actions', 'home-manager-actions'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', !isManager);
  });
  ['therapist-actions', 'home-therapist-actions'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', isManager);
  });
}

function switchView(el, view) {
  document.querySelectorAll('.view-toggle .view-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('view-month').classList.toggle('hidden', view !== 'month');
  document.getElementById('view-week').classList.toggle('hidden', view !== 'week');
  if (view === 'week') {
    renderWeekView();
  }
}

// ── Render Month View Calendar ──
function renderCalendar() {
  // Clear calendar cells first
  document.querySelectorAll('.cal-cell').forEach(cell => {
    // Remove all previous cal-events and more-tags
    cell.querySelectorAll('.cal-event, .more-tag').forEach(el => el.remove());
    
    const dateAttr = cell.getAttribute('data-date');
    if (!dateAttr) return;
    
    // Find all schedules on this day
    const daySchedules = schedules.filter(s => s.date === dateAttr);
    // Apply filters
    const filteredSchedules = daySchedules.filter(matchesFilter);
    // Sort schedules by time
    filteredSchedules.sort((a, b) => a.time.localeCompare(b.time));
    
    // Render first 3
    const maxVisible = 3;
    const visibleSchedules = filteredSchedules.slice(0, maxVisible);
    
    visibleSchedules.forEach(item => {
      const ev = document.createElement('div');
      ev.className = \`cal-event \${item.type}\`;
      
      let typeLabel = '';
      if (item.type === 'pac-home' || item.type === 'nonpac-home') {
        typeLabel = ' 🏡';
      }
      
      if (item.type === 'open') {
        ev.innerHTML = \`🏡 \${item.patient} 可報名居家\`;
      } else {
        ev.innerHTML = \`\${item.therapist}(\${item.therapistType}) \${item.patient} \${item.time}\${typeLabel}\`;
      }
      
      // On click, view drawer/modal details
      ev.addEventListener('click', (e) => {
        e.stopPropagation();
        showItemDetails(item);
      });
      cell.appendChild(ev);
    });
    
    // More tag
    if (filteredSchedules.length > maxVisible) {
      const moreTag = document.createElement('div');
      moreTag.className = 'more-tag';
      moreTag.textContent = \`＋\${filteredSchedules.length - maxVisible} 更多\`;
      moreTag.addEventListener('click', (e) => {
        e.stopPropagation();
        openDayModal(dateAttr);
      });
      cell.appendChild(moreTag);
    }
  });

  // Update register counts badge
  const openCount = schedules.filter(s => s.type === 'open').length;
  document.getElementById('open-count-badge').textContent = openCount;
}

// Open dynamic Day Modal showing all events of that day
function openDayModal(dateStr) {
  // Parse date into readable string
  let displayDate = dateStr;
  let weekdayText = '';
  const match = dateStr.split('-');
  if (match.length === 2) {
    const month = match[0];
    const day = match[1];
    
    // We assume 2026 June
    const dateObj = new Date(2026, 5, parseInt(day));
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    weekdayText = weekdays[dateObj.getDay()];
    displayDate = \`\${month}月\${day}日（\${weekdayText}）\`;
  }
  
  const daySchedules = schedules.filter(s => s.date === dateStr);
  const filtered = daySchedules.filter(matchesFilter);
  filtered.sort((a, b) => a.time.localeCompare(b.time));
  
  document.getElementById('day-modal-title').textContent = \`📅 \${displayDate}・排班總表\`;
  document.getElementById('day-modal-subtitle').textContent = \`共 \${filtered.length} 筆排班・點選查看詳情\`;
  
  const listContainer = document.getElementById('day-modal-list');
  listContainer.innerHTML = '';
  
  if (filtered.length === 0) {
    listContainer.innerHTML = \`<p style="color:var(--gray-500);font-size:13px;text-align:center;padding:16px 0">今日無符合條件之排班</p>\`;
  } else {
    filtered.forEach(item => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = '10px';
      row.style.padding = '9px 10px';
      row.style.borderRadius = '8px';
      row.style.cursor = 'pointer';
      row.style.marginBottom = '6px';
      
      let borderCol = 'var(--blue)';
      let bgCol = 'var(--blue-light)';
      let typeText = 'PAC 院內';
      let badgeClass = 'badge-blue';
      
      if (item.type === 'nonpac-in') {
        borderCol = 'var(--gray-400)';
        bgCol = 'var(--gray-50)';
        typeText = '非PAC 院內';
        badgeClass = 'badge-gray';
      } else if (item.type === 'pac-home') {
        borderCol = 'var(--green)';
        bgCol = 'var(--green-light)';
        typeText = 'PAC 居家';
        badgeClass = 'badge-green';
      } else if (item.type === 'nonpac-home') {
        borderCol = 'var(--teal)';
        bgCol = 'var(--teal-light)';
        typeText = '非PAC 居家';
        badgeClass = 'badge-green';
      } else if (item.type === 'open') {
        borderCol = 'var(--amber)';
        bgCol = 'var(--amber-light)';
        typeText = '可報名居家';
        badgeClass = 'badge-amber';
      }
      
      row.style.background = bgCol;
      row.style.borderLeft = \`3px solid \${borderCol}\`;
      
      let displayTime = item.time;
      if (displayTime === '12:30') displayTime = '午休';
      if (displayTime === '18:00' || displayTime === '18:30') displayTime = '下班後';

      let contentStr = '';
      if (item.type === 'open') {
        contentStr = \`🏡 \${item.patient} 可報名居家\`;
      } else {
        const homeIcon = item.type.includes('home') ? ' 🏡' : '';
        contentStr = \`\${item.therapist}(\${item.therapistType})・\${item.patient}\${homeIcon}\`;
      }
      
      row.innerHTML = \`
        <span style="font-size:11px;font-weight:600;color:var(--gray-700);white-space:nowrap;width:50px">\${displayTime}</span>
        <span style="font-size:12px;flex:1">\${contentStr}</span>
        <span class="badge \${badgeClass}" style="font-size:10px">\${typeText}</span>
      \`;
      
      row.addEventListener('click', () => {
        closeDayModal();
        showItemDetails(item);
      });
      listContainer.appendChild(row);
    });
  }
  
  openModal('day-modal');
}

function closeDayModal() {
  closeModal('day-modal');
}

// ── Item Details Launcher ──
function showItemDetails(item) {
  const details = getScheduleDetails(item);
  
  if (item.type === 'open') {
    // Open Registration modal
    document.getElementById('reg-det-title').textContent = \`🏡 居家個案報名・\${item.patient}\`;
    document.getElementById('reg-det-note').textContent = \`報名截止：2026/06/24 12:00・若報名人數超額將進行抽籤\`;
    document.getElementById('reg-det-name').textContent = item.patient;
    document.getElementById('reg-det-age-gender').textContent = \`\${details.age}歲 \${details.gender}\`;
    document.getElementById('reg-det-disease').textContent = details.disease;
    document.getElementById('reg-det-address').textContent = details.address;
    document.getElementById('reg-det-contact').textContent = \`\${details.phone} / 家屬\${details.contact}\`;
    
    // Set custom quota fills
    let ptPercent = '33%'; let ptCount = '1 / 3 人';
    let otPercent = '0%'; let otCount = '0 / 3 人';
    let stPercent = '0%'; let stCount = '0 / 0 人';
    let summaryText = '不需 ST・共需 6 名治療師';
    
    if (item.patient.includes('王淑芬') || item.patient.includes('淑芬')) {
      ptPercent = '66%'; ptCount = '2 / 3 人';
      otPercent = '33%'; otCount = '1 / 3 人';
    } else if (item.patient.includes('陳志明') || item.patient.includes('志明')) {
      ptPercent = '0%'; ptCount = '0 / 3 人';
      otPercent = '66%'; otCount = '2 / 3 人';
    }
    
    document.getElementById('reg-quota-pt-bar').style.width = ptPercent;
    document.getElementById('reg-quota-pt-count').textContent = ptCount;
    document.getElementById('reg-quota-ot-bar').style.width = otPercent;
    document.getElementById('reg-quota-ot-count').textContent = otCount;
    document.getElementById('reg-quota-st-bar').style.width = stPercent;
    document.getElementById('reg-quota-st-count').textContent = stCount;
    document.getElementById('reg-quota-summary').textContent = summaryText;
    
    document.getElementById('reg-det-summary1').textContent = details.summary;
    document.getElementById('reg-det-summary2').innerHTML = \`PT：每週 3 次，每次 50 分鐘。著重肌力與平衡訓練。<br>OT：每週 2 次，每次 50 分鐘。著重日常生活自理重建。\`;
    
    openModal('modal-register');
  } 
  else if (item.type === 'pac-in' || item.type === 'nonpac-in') {
    // Open Inpatient drawer
    document.getElementById('inpatient-det-title').textContent = \`\${item.patient}・復健排班詳情\`;
    document.getElementById('inpatient-det-subtitle').innerHTML = \`\${item.date} \${item.time}・<span class="badge \${item.type === 'pac-in' ? 'badge-blue' : 'badge-gray'}" style="font-size:10px">\${item.type === 'pac-in' ? 'PAC 院內' : '非PAC 院內'}</span>\`;
    document.getElementById('inpatient-det-therapist').textContent = item.therapist;
    document.getElementById('inpatient-det-role').innerHTML = \`<span class="therapist-tag therapist-\${item.therapistType.toLowerCase()}">\${item.therapistType}</span> \${item.therapistType === 'PT' ? '物理治療師' : item.therapistType === 'OT' ? '職能治療師' : '語言治療師'}\`;
    document.getElementById('inpatient-det-time').textContent = \`\${item.time} – \${getEndTime(item.time)}\`;
    document.getElementById('inpatient-det-name').textContent = item.patient;
    document.getElementById('inpatient-det-age-gender').textContent = \`\${details.age}歲 \${details.gender}\`;
    document.getElementById('inpatient-det-disease').textContent = details.disease;
    document.getElementById('inpatient-det-pactype').innerHTML = \`<span class="badge badge-blue" style="font-size:10px">\${item.type === 'pac-in' ? 'PAC 住院' : '非PAC 住院'}</span>\`;
    document.getElementById('inpatient-det-admit').textContent = details.admissionDate;
    document.getElementById('inpatient-det-week').textContent = details.week;
    document.getElementById('inpatient-det-bed').textContent = details.bed;
    document.getElementById('inpatient-det-doctor').textContent = details.physician;
    document.getElementById('inpatient-det-summary').textContent = details.summary;
    
    openDrawer('inpatient');
    updateDrawerActionsForRole(currentRole);
  } 
  else if (item.type === 'pac-home' || item.type === 'nonpac-home') {
    // Open Home drawer
    document.getElementById('home-det-title').textContent = \`\${item.patient}・居家復健詳情\`;
    
    let badgeText = item.type === 'pac-home' ? 'PAC 居家' : '非PAC 居家';
    document.getElementById('home-det-subtitle').innerHTML = \`\${item.date} \${item.time}・<span class="badge badge-green" style="font-size:10px">\${badgeText}</span>\`;
    document.getElementById('home-det-therapist').textContent = item.therapist;
    document.getElementById('home-det-role').innerHTML = \`<span class="therapist-tag therapist-\${item.therapistType.toLowerCase()}">\${item.therapistType}</span> \${item.therapistType === 'PT' ? '物理治療師' : item.therapistType === 'OT' ? '職能治療師' : '語言治療師'}\`;
    
    let displayTime = item.time;
    if (displayTime === '12:30') displayTime = '午休（約12:30）';
    if (displayTime === '18:00' || displayTime === '18:30') displayTime = '下班後（約18:00）';
    document.getElementById('home-det-time').textContent = displayTime;
    
    document.getElementById('home-det-billing').innerHTML = \`<span class="badge badge-green">\${details.billingStatus}</span>\`;
    document.getElementById('home-det-name').textContent = item.patient;
    document.getElementById('home-det-age-gender').textContent = \`\${details.age}歲 \${details.gender}\`;
    document.getElementById('home-det-disease').textContent = details.disease;
    document.getElementById('home-det-pactype').innerHTML = \`<span class="badge badge-green" style="font-size:10px">\${badgeText}</span>\`;
    document.getElementById('home-det-startdate').textContent = details.admissionDate;
    document.getElementById('home-det-week').textContent = details.week;
    document.getElementById('home-det-address').textContent = details.address;
    document.getElementById('home-det-phone').textContent = details.phone;
    document.getElementById('home-det-contact').textContent = details.contact;
    document.getElementById('home-det-summary1').textContent = details.summary;
    document.getElementById('home-det-summary2').textContent = \`\${item.therapistType === 'PT' ? '物理治療：每週 3 次，每次 50 分鐘。著重防跌訓練與轉位練習。' : '職能治療：每週 2 次，每次 50 分鐘。著重日常生活精細功能誘發與輔具使用評估。'}\`;
    
    openDrawer('home');
    updateDrawerActionsForRole(currentRole);
  }
}

// ── Week View dynamic generation ──
const times = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '午休', '下班後'
];

const allTherapists = [
  { name: '黃志豪', type: 'PT' },
  { name: '陳建宏', type: 'PT' },
  { name: '李佳穎', type: 'OT' },
  { name: '張雅玲', type: 'OT' },
  { name: '吳怡君', type: 'ST' }
];

function selectWeekDay(day) {
  selectedWeekDay = day;
  renderWeekView();
}

function renderWeekView() {
  // Render Weekday tabs first
  const tabsContainer = document.getElementById('week-day-tabs');
  if (!tabsContainer) return;
  tabsContainer.innerHTML = '';
  
  // Mon 6/22 to Sun 6/28
  const weekdays = [
    { label: '週一 6/22', value: '6-22' },
    { label: '週二 6/23', value: '6-23' },
    { label: '週三 6/24', value: '6-24' },
    { label: '週四 6/25', value: '6-25' },
    { label: '週五 6/26', value: '6-26' },
    { label: '週六 6/27', value: '6-27' },
    { label: '週日 6/28', value: '6-28' }
  ];
  
  weekdays.forEach(day => {
    const tab = document.createElement('div');
    tab.className = \`filter-tab \${selectedWeekDay === day.value ? 'active' : ''}\`;
    
    let suffixText = '';
    if (day.value === '6-23') {
      suffixText = ' (今)';
    }
    tab.textContent = day.label + suffixText;
    tab.addEventListener('click', () => selectWeekDay(day.value));
    tabsContainer.appendChild(tab);
  });
  
  // Render Table Matrix
  const matrixContainer = document.getElementById('week-matrix-container');
  if (!matrixContainer) return;
  matrixContainer.innerHTML = '';
  
  // Filter active therapists
  const activeTherapists = allTherapists.filter(t => {
    if (selectedTherapists.includes('all')) return true;
    return selectedTherapists.includes(t.name);
  });
  
  if (activeTherapists.length === 0) {
    matrixContainer.innerHTML = \`<p style="color:var(--gray-500);font-size:13px;text-align:center;padding:24px 0">無選擇任何治療師，請於右上角篩選</p>\`;
    return;
  }
  
  const table = document.createElement('table');
  table.className = 'week-matrix';
  
  // Thead
  let theadHTML = \`
    <thead>
      <tr>
        <th class="time-col">時間</th>
  \`;
  activeTherapists.forEach(t => {
    theadHTML += \`
      <th class="therapist-header">
        <span class="therapist-tag therapist-\${t.type.toLowerCase()}">\${t.type}</span><br>\${t.name}
      </th>
    \`;
  });
  theadHTML += \`
      </tr>
    </thead>
  \`;
  
  // Tbody
  let tbodyHTML = '<tbody>';
  
  times.forEach(time => {
    let rowHTML = \`<tr><td class="time-col">\${time}</td>\`;
    
    activeTherapists.forEach(t => {
      // Find event
      const event = schedules.find(s => {
        if (s.date !== selectedWeekDay) return false;
        if (s.therapist !== t.name) return false;
        
        // Time matching rules
        if (time === '午休') {
          return s.time === '12:30' || s.time.includes('午休');
        } else if (time === '下班後') {
          return s.time === '17:30' || s.time === '18:00' || s.time === '18:30' || s.time.includes('下班後');
        } else {
          return s.time === time;
        }
      });
      
      if (event && matchesFilter(event)) {
        let tdBgStyle = '';
        if (event.type.includes('home')) {
          tdBgStyle = 'background:#F0FDF4';
        } else if (event.type === 'open') {
          tdBgStyle = 'background:var(--amber-light)';
        }
        
        let displayContent = '';
        if (event.type === 'open') {
          displayContent = \`<div class="week-event open">🏡 \${event.patient} 可報名</div>\`;
        } else {
          const isPac = event.type.startsWith('pac');
          const pacTag = isPac ? \` <span class="pac-tag">P</span>\` : '';
          const homeTag = event.type.includes('home') ? '🏡 ' : '';
          const className = event.type;
          displayContent = \`<div class="week-event \${className}">\${homeTag}\${event.patient}\${pacTag}</div>\`;
        }
        
        rowHTML += \`
          <td style="\${tdBgStyle}; cursor:pointer" onclick="showWeekItem(\${JSON.stringify(event).replace(/"/g, '&quot;')})">
            \${displayContent}
          </td>
        \`;
      } else {
        rowHTML += \`<td></td>\`;
      }
    });
    
    rowHTML += '</tr>';
    tbodyHTML += rowHTML;
  });
  
  tbodyHTML += '</tbody>';
  table.innerHTML = theadHTML + tbodyHTML;
  matrixContainer.appendChild(table);
}

// Global hook for event details popup in Week view
window.showWeekItem = function(item) {
  showItemDetails(item);
};

// Drawer controls (now uses centered modal overlay)
function openDrawer(type) {
  // First close day modal
  closeDayModal();
  // Show the detail-modal-overlay which wraps the drawer panel
  document.getElementById('drawer-overlay-' + type).classList.remove('hidden');
}

function closeDrawer(type) {
  document.getElementById('drawer-overlay-' + type).classList.add('hidden');
}

function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

// Global modal background click handler
document.querySelectorAll('.modal-overlay, .day-modal-overlay').forEach(o => {
  o.addEventListener('click', function (e) {
    if (e.target === this) this.classList.add('hidden');
  });
});

// Click date cell to pop up dynamic modal
document.querySelectorAll('.cal-cell').forEach(cell => {
  cell.addEventListener('click', function(e) {
    // If clicked a schedule or more tag directly, ignore
    if (e.target.closest('.cal-event') || e.target.closest('.more-tag')) return;
    
    const dateAttr = this.getAttribute('data-date');
    if (dateAttr) {
      openDayModal(dateAttr);
    }
  });
});

// Initialization
function initPage() {
  // Set initial role UI without filtering calendar
  updateDrawerActionsForRole(currentRole);
  renderCalendar();
  // also update the btn active states
  document.getElementById('btn-manager').classList.toggle('active', currentRole === 'manager');
  document.getElementById('btn-therapist').classList.toggle('active', currentRole === 'therapist');
}

document.addEventListener('DOMContentLoaded', initPage);
// Fallback if DOMContentLoaded already fired (iframe srcDoc context)
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initPage();
}
<\/script>
</body>
</html>`,pg=`<!DOCTYPE html>
<html lang="zh-TW">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PAC 居家排班管理</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0
    }

    :root {
      --blue: #2563EB;
      --blue-light: #EFF6FF;
      --blue-mid: #BFDBFE;
      --blue-dark: #1E40AF;
      --gray-50: #F8FAFC;
      --gray-100: #F1F5F9;
      --gray-200: #E2E8F0;
      --gray-300: #CBD5E1;
      --gray-400: #94A3B8;
      --gray-500: #64748B;
      --gray-600: #475569;
      --gray-700: #334155;
      --gray-900: #0F172A;
      --green: #16A34A;
      --green-light: #DCFCE7;
      --green-mid: #BBF7D0;
      --amber: #D97706;
      --amber-light: #FEF3C7;
      --red: #DC2626;
      --red-light: #FEE2E2;
      --purple: #7C3AED;
      --purple-light: #EDE9FE;
      --teal: #0D9488;
      --teal-light: #CCFBF1;
      --white: #FFFFFF
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', sans-serif;
      background: var(--gray-50);
      color: var(--gray-900);
      height: 100vh;
      display: flex;
      overflow: hidden;
      font-size: 14px
    }

    /* Sidebar */
    .sidebar {
      width: 192px;
      min-width: 192px;
      background: var(--white);
      border-right: 1px solid var(--gray-200);
      display: flex;
      flex-direction: column
    }

    .sidebar-logo {
      padding: 16px 16px 13px;
      border-bottom: 1px solid var(--gray-200)
    }

    .logo-text {
      font-size: 14px;
      font-weight: 700;
      color: var(--blue)
    }

    .logo-sub {
      font-size: 11px;
      color: var(--gray-400);
      margin-top: 2px
    }

    .sidebar-nav {
      padding: 6px 0;
      flex: 1
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 9px 14px;
      font-size: 13px;
      color: var(--gray-500);
      border-left: 3px solid transparent;
      cursor: default
    }

    .nav-item.active {
      background: var(--blue-light);
      color: var(--blue);
      font-weight: 600;
      border-left-color: var(--blue)
    }

    .nav-item.disabled {
      opacity: .38;
      cursor: not-allowed
    }

    .sidebar-user {
      margin-top: auto;
      padding: 11px 14px;
      border-top: 1px solid var(--gray-200)
    }

    .user-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px
    }

    .user-avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700
    }

    .av-case {
      background: var(--blue-light);
      color: var(--blue)
    }

    .av-manager {
      background: var(--amber-light);
      color: var(--amber)
    }

    .av-therapist {
      background: var(--purple-light);
      color: var(--purple)
    }

    .user-name {
      font-size: 12px;
      font-weight: 600;
      color: var(--gray-700)
    }

    .user-role-label {
      font-size: 11px;
      color: var(--gray-400)
    }

    .role-switcher {
      display: flex;
      border: 1px solid var(--gray-200);
      border-radius: 6px;
      overflow: hidden
    }

    .role-btn {
      flex: 1;
      padding: 3px 0;
      font-size: 10px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      background: var(--white);
      color: var(--gray-400);
      text-align: center;
      transition: all .15s
    }

    .role-btn.active {
      background: var(--blue);
      color: var(--white)
    }

    /* Main */
    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden
    }

    .topbar {
      background: var(--white);
      border-bottom: 1px solid var(--gray-200);
      padding: 0 20px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0
    }

    .breadcrumb {
      font-size: 12px;
      color: var(--gray-500)
    }

    .topbar-right {
      display: flex;
      align-items: center;
      gap: 8px
    }

    .content {
      flex: 1;
      overflow-y: auto;
      padding: 20px
    }

    /* Buttons */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 500;
      border: none;
      cursor: pointer;
      transition: all .15s;
      white-space: nowrap
    }

    .btn-primary {
      background: var(--blue);
      color: var(--white)
    }

    .btn-primary:hover {
      background: var(--blue-dark)
    }

    .btn-secondary {
      background: var(--white);
      color: var(--gray-700);
      border: 1px solid var(--gray-300)
    }

    .btn-secondary:hover {
      background: var(--gray-50)
    }

    .btn-ghost {
      background: transparent;
      color: var(--blue);
      border: 1px solid var(--blue-mid)
    }

    .btn-ghost:hover {
      background: var(--blue-light)
    }

    .btn-green {
      background: var(--white);
      color: var(--green);
      border: 1px solid var(--green-mid)
    }

    .btn-green:hover {
      background: var(--green-light)
    }

    .btn-amber {
      background: var(--white);
      color: var(--amber);
      border: 1px solid #FDE68A
    }

    .btn-amber:hover {
      background: var(--amber-light)
    }

    .btn-danger {
      background: var(--white);
      color: var(--red);
      border: 1px solid #FECACA
    }

    .btn-danger:hover {
      background: var(--red-light)
    }

    .btn-sm {
      padding: 5px 10px;
      font-size: 12px
    }

    .btn-xs {
      padding: 3px 8px;
      font-size: 11px
    }

    /* Badges */
    .badge {
      display: inline-flex;
      align-items: center;
      padding: 2px 7px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 600
    }

    .badge-blue {
      background: var(--blue-light);
      color: var(--blue)
    }

    .badge-green {
      background: var(--green-light);
      color: var(--green)
    }

    .badge-amber {
      background: var(--amber-light);
      color: var(--amber)
    }

    .badge-gray {
      background: var(--gray-100);
      color: var(--gray-500)
    }

    .badge-red {
      background: var(--red-light);
      color: var(--red)
    }

    .badge-purple {
      background: var(--purple-light);
      color: var(--purple)
    }

    .badge-teal {
      background: var(--teal-light);
      color: var(--teal)
    }

    /* Notif badge */
    .notif-wrap {
      position: relative;
      display: inline-flex
    }

    .notif-dot {
      position: absolute;
      top: -4px;
      right: -4px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--red);
      color: var(--white);
      font-size: 10px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center
    }

    /* Tabs */
    .tabs {
      display: flex;
      border-bottom: 2px solid var(--gray-200);
      margin-bottom: 16px
    }

    .tab {
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 500;
      color: var(--gray-500);
      cursor: pointer;
      border-bottom: 2px solid transparent;
      margin-bottom: -2px;
      white-space: nowrap
    }

    .tab.active {
      color: var(--blue);
      border-bottom-color: var(--blue)
    }

    /* Page header */
    .page-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 16px
    }

    .page-title {
      font-size: 18px;
      font-weight: 700
    }

    .page-subtitle {
      font-size: 12px;
      color: var(--gray-500);
      margin-top: 3px
    }

    /* Toolbar */
    .toolbar {
      display: flex;
      gap: 7px;
      margin-bottom: 14px;
      align-items: center;
      flex-wrap: wrap
    }

    .search-wrap {
      position: relative
    }

    .search-wrap input {
      padding: 6px 10px 6px 30px;
      border: 1px solid var(--gray-300);
      border-radius: 6px;
      font-size: 12px;
      outline: none;
      width: 200px
    }

    .search-wrap input:focus {
      border-color: var(--blue)
    }

    .search-icon {
      position: absolute;
      left: 9px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--gray-400);
      font-size: 12px
    }

    select.filter {
      padding: 6px 10px;
      border: 1px solid var(--gray-300);
      border-radius: 6px;
      font-size: 12px;
      color: var(--gray-700);
      background: var(--white);
      outline: none;
      cursor: pointer
    }

    /* Case list */
    .case-list {
      display: flex;
      flex-direction: column;
      gap: 12px
    }

    .case-card {
      background: var(--white);
      border: 1px solid var(--gray-200);
      border-radius: 10px;
      overflow: hidden;
      transition: all .15s
    }

    .case-card:hover {
      border-color: var(--blue-mid)
    }

    .case-card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
      cursor: pointer
    }

    .case-card-header:hover {
      background: var(--gray-50)
    }

    .case-name {
      font-size: 14px;
      font-weight: 700;
      color: var(--gray-900)
    }

    .case-meta {
      display: flex;
      gap: 10px;
      margin-top: 3px;
      flex-wrap: wrap
    }

    .case-meta-item {
      font-size: 11px;
      color: var(--gray-500)
    }

    .case-card-badges {
      display: flex;
      gap: 6px;
      align-items: center;
      flex-wrap: wrap;
      flex: 1
    }

    .case-card-right {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0
    }

    .expand-arrow {
      font-size: 11px;
      color: var(--gray-400);
      transition: transform .2s
    }

    .expand-arrow.open {
      transform: rotate(90deg)
    }

    /* Quota bars */
    .quota-mini {
      display: flex;
      align-items: center;
      gap: 5px
    }

    .quota-label-mini {
      font-size: 10px;
      font-weight: 700;
      min-width: 18px
    }

    .quota-bar-mini {
      width: 50px;
      height: 5px;
      background: var(--gray-100);
      border-radius: 999px;
      overflow: hidden
    }

    .quota-fill-mini {
      height: 100%;
      border-radius: 999px
    }

    .quota-text-mini {
      font-size: 10px;
      color: var(--gray-500);
      min-width: 28px
    }

    .pt-fill {
      background: var(--blue)
    }

    .ot-fill {
      background: var(--purple)
    }

    .st-fill {
      background: var(--green)
    }

    /* Case detail */
    .case-detail {
      border-top: 1px solid var(--gray-100);
      padding: 16px
    }

    .detail-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px
    }

    .detail-section-title {
      font-size: 11px;
      font-weight: 600;
      color: var(--gray-400);
      text-transform: uppercase;
      letter-spacing: .05em;
      margin-bottom: 10px
    }

    .info-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 12px
    }

    .info-item label {
      font-size: 10px;
      color: var(--gray-400);
      display: block;
      margin-bottom: 2px;
      text-transform: uppercase;
      letter-spacing: .04em
    }

    .info-item span {
      font-size: 12px;
      color: var(--gray-800);
      font-weight: 500
    }

    .divider {
      height: 1px;
      background: var(--gray-100);
      margin: 12px 0
    }

    .summary-box {
      background: var(--gray-50);
      border: 1px solid var(--gray-200);
      border-radius: 7px;
      padding: 11px 13px;
      font-size: 12px;
      line-height: 1.75;
      color: var(--gray-700)
    }

    /* Fake map */
    .fake-map {
      width: 100%;
      height: 140px;
      background: linear-gradient(135deg, #e8f4f0 0%, #d4eae3 30%, #c8e6da 60%, #e0f0eb 100%);
      border-radius: 8px;
      border: 1px solid var(--gray-200);
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center
    }

    .fake-map-road {
      position: absolute;
      background: var(--white);
      opacity: .7
    }

    .fake-map-road.h {
      height: 3px;
      width: 100%
    }

    .fake-map-road.v {
      width: 3px;
      height: 100%
    }

    .map-pin-home {
      position: absolute;
      font-size: 22px;
      top: 35%;
      left: 55%
    }

    .map-pin-hospital {
      position: absolute;
      font-size: 16px;
      top: 60%;
      left: 25%
    }

    .map-distance {
      position: absolute;
      bottom: 8px;
      right: 10px;
      background: var(--white);
      border-radius: 5px;
      padding: 3px 8px;
      font-size: 11px;
      font-weight: 600;
      color: var(--gray-700);
      box-shadow: 0 1px 4px rgba(0, 0, 0, .1)
    }

    /* Treatment log */
    .treatment-log {
      display: flex;
      flex-direction: column;
      gap: 6px
    }

    .treatment-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      background: var(--gray-50);
      border-radius: 6px;
      border-left: 3px solid var(--gray-200)
    }

    .treatment-row.signed {
      border-left-color: var(--green)
    }

    .treatment-row.pending {
      border-left-color: var(--amber)
    }

    .treatment-row.uploaded {
      border-left-color: var(--blue)
    }

    .treatment-date {
      font-size: 12px;
      font-weight: 600;
      color: var(--gray-700);
      min-width: 55px
    }

    .treatment-therapist {
      font-size: 11px;
      color: var(--gray-500);
      min-width: 70px
    }

    .treatment-time {
      font-size: 11px;
      color: var(--gray-500);
      min-width: 80px
    }

    .treatment-actions {
      margin-left: auto;
      display: flex;
      gap: 6px
    }

    /* Billing section */
    .billing-box {
      background: var(--white);
      border: 1px solid var(--gray-200);
      border-radius: 8px;
      padding: 14px;
      margin-top: 12px
    }

    .billing-title {
      font-size: 12px;
      font-weight: 600;
      color: var(--gray-700);
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between
    }

    .billing-table {
      width: 100%;
      font-size: 12px
    }

    .billing-table td {
      padding: 5px 0;
      color: var(--gray-600)
    }

    .billing-table td:last-child {
      text-align: right;
      font-weight: 500;
      color: var(--gray-800)
    }

    .billing-total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 10px;
      border-top: 2px solid var(--gray-200);
      margin-top: 8px;
      font-size: 14px;
      font-weight: 700
    }

    .billing-refund {
      background: var(--green-light);
      color: var(--green);
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      margin-top: 8px;
      text-align: center
    }

    .billing-charge {
      background: var(--red-light);
      color: var(--red);
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      margin-top: 8px;
      text-align: center
    }

    /* Bonus section */
    .bonus-card {
      background: var(--white);
      border: 1px solid var(--gray-200);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 12px
    }

    .bonus-header {
      padding: 13px 16px;
      background: var(--gray-50);
      border-bottom: 1px solid var(--gray-100);
      display: flex;
      align-items: center;
      justify-content: space-between
    }

    .bonus-name {
      font-size: 13px;
      font-weight: 600;
      color: var(--gray-900)
    }

    .bonus-body {
      padding: 14px 16px
    }

    .bonus-table {
      width: 100%;
      font-size: 12px;
      border-collapse: collapse
    }

    .bonus-table th {
      text-align: left;
      padding: 6px 10px;
      background: var(--gray-50);
      color: var(--gray-500);
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .05em;
      border-bottom: 1px solid var(--gray-200)
    }

    .bonus-table td {
      padding: 7px 10px;
      border-bottom: 1px solid var(--gray-100);
      color: var(--gray-700)
    }

    .bonus-table tr:last-child td {
      border-bottom: none
    }

    .bonus-total-row {
      font-weight: 700;
      color: var(--blue)
    }

    /* Therapist tag */
    .th-tag {
      display: inline-flex;
      align-items: center;
      padding: 1px 6px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 700
    }

    .th-pt {
      background: #DBEAFE;
      color: #1D4ED8
    }

    .th-ot {
      background: #FCE7F3;
      color: #9D174D
    }

    .th-st {
      background: #D1FAE5;
      color: #065F46
    }

    .th-mgr {
      background: var(--amber-light);
      color: var(--amber)
    }

    /* Modal */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, .5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
      backdrop-filter: blur(2px)
    }

    .modal {
      background: var(--white);
      border-radius: 12px;
      width: 540px;
      max-width: 92vw;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 20px 60px rgba(0, 0, 0, .15)
    }

    .modal-lg {
      width: 680px
    }

    .modal-header {
      padding: 16px 20px 13px;
      border-bottom: 1px solid var(--gray-200);
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0
    }

    .modal-title {
      font-size: 15px;
      font-weight: 700
    }

    .modal-close {
      width: 25px;
      height: 25px;
      border-radius: 5px;
      border: none;
      background: var(--gray-100);
      color: var(--gray-500);
      cursor: pointer;
      font-size: 13px;
      display: flex;
      align-items: center;
      justify-content: center
    }

    .modal-close:hover {
      background: var(--gray-200)
    }

    .modal-body {
      padding: 16px 20px;
      overflow-y: auto;
      flex: 1
    }

    .modal-footer {
      padding: 13px 20px;
      border-top: 1px solid var(--gray-200);
      display: flex;
      justify-content: flex-end;
      gap: 7px;
      flex-shrink: 0
    }

    /* Form */
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 12px
    }

    .form-group label {
      font-size: 12px;
      font-weight: 500;
      color: var(--gray-600)
    }

    .form-control {
      padding: 7px 10px;
      border: 1px solid var(--gray-300);
      border-radius: 6px;
      font-size: 13px;
      color: var(--gray-800);
      background: var(--white);
      outline: none
    }

    .form-control:focus {
      border-color: var(--blue);
      box-shadow: 0 0 0 3px var(--blue-light)
    }

    select.form-control {
      cursor: pointer
    }

    textarea.form-control {
      resize: vertical;
      min-height: 70px
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px
    }

    .required {
      color: var(--red);
      margin-left: 2px
    }

    /* Info note */
    .info-note {
      font-size: 12px;
      padding: 10px 12px;
      border-radius: 6px;
      margin-bottom: 12px
    }

    .info-note.blue {
      background: var(--blue-light);
      color: var(--blue-dark)
    }

    .info-note.amber {
      background: var(--amber-light);
      color: var(--amber)
    }

    .info-note.green {
      background: var(--green-light);
      color: var(--green)
    }

    .info-note.red {
      background: var(--red-light);
      color: var(--red)
    }

    /* Time slot */
    .time-slot-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
      margin-top: 6px
    }

    .time-slot {
      padding: 7px 4px;
      border: 1px solid var(--gray-200);
      border-radius: 5px;
      font-size: 11px;
      text-align: center;
      cursor: pointer;
      color: var(--gray-600)
    }

    .time-slot:hover {
      border-color: var(--blue);
      color: var(--blue)
    }

    .time-slot.selected {
      background: var(--blue);
      border-color: var(--blue);
      color: var(--white)
    }

    .time-slot.taken {
      background: var(--gray-100);
      color: var(--gray-400);
      cursor: not-allowed
    }

    /* Upload zone */
    .upload-zone {
      border: 2px dashed var(--gray-300);
      border-radius: 8px;
      padding: 24px;
      text-align: center;
      color: var(--gray-400);
      cursor: pointer
    }

    .upload-zone:hover {
      border-color: var(--blue);
      background: var(--blue-light);
      color: var(--blue)
    }

    /* Registrant list */
    .reg-list {
      display: flex;
      flex-direction: column;
      gap: 7px
    }

    .reg-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 12px;
      border: 1px solid var(--gray-200);
      border-radius: 7px
    }

    .reg-item.winner {
      background: var(--green-light);
      border-color: var(--green-mid)
    }

    .reg-name {
      font-size: 13px;
      font-weight: 600;
      color: var(--gray-800);
      flex: 1
    }

    .hidden {
      display: none !important
    }

    .mt-10 {
      margin-top: 10px
    }

    .mt-14 {
      margin-top: 14px
    }
  </style>
</head>

<body>

  <!-- SIDEBAR -->
  <aside class="sidebar">
    <!--
  <div class="sidebar-logo">
    <div class="logo-text">PAC 管理系統</div>
    <div class="logo-sub">急性後期照護</div>
  </div>
  <nav class="sidebar-nav">
    <div class="nav-item disabled">🏠 個人儀表板</div>
    <div class="nav-item disabled">📋 個案管理</div>
    <div class="nav-item disabled">🛏 病床管理</div>
    <div class="nav-item disabled">📅 班表總覽頁</div>
    <div class="nav-item active">🏡 居家排班管理</div>
    <div class="nav-item disabled">📊 評估量表</div>
    <div class="nav-item disabled">💪 復健紀錄</div>
    <div class="nav-item disabled">📤 指標匯出</div>
  </nav>
-->
    <div class="sidebar-user">
      <div class="user-row">
        <div class="user-avatar av-case" id="ua">林</div>
        <div>
          <div class="user-name" id="uname">林美惠</div>
          <div class="user-role-label" id="urole">個案管理師</div>
        </div>
      </div>
      <div class="role-switcher">
        <button class="role-btn active" id="rbtn-case" onclick="switchRole('case')">個管師</button>
        <button class="role-btn" id="rbtn-manager" onclick="switchRole('manager')">主管</button>
        <button class="role-btn" id="rbtn-therapist" onclick="switchRole('therapist')">治療師</button>
      </div>
    </div>
  </aside>

  <!-- MAIN -->
  <div class="main">
    <div class="topbar">
      <div class="breadcrumb">居家排班管理</div>
      <div class="topbar-right">
        <span style="font-size:11px;color:var(--gray-400)">2026/06/23</span>
        <div id="btn-publish-wrap" class="hidden">
          <button class="btn btn-primary btn-sm" onclick="openModal('modal-publish')">＋ 發布居家個案</button>
        </div>
        <div id="btn-bonus-wrap">
          <button class="btn btn-secondary btn-sm" onclick="switchToBonus()">💰 獎金明細</button>
        </div>
      </div>
    </div>
    <div class="content">

      <!-- ════ 個管師視角 ════ -->
      <div id="view-case">
        <div class="page-header">
          <div>
            <div class="page-title">居家排班管理</div>
            <div class="page-subtitle">掌握所有居家個案執行狀態</div>
          </div>
          <button class="btn btn-secondary btn-sm">📤 匯出</button>
        </div>

        <!-- 統計摘要 -->
        <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap">
          <div
            style="background:var(--white);border:1px solid var(--gray-200);border-radius:8px;padding:10px 16px;min-width:90px">
            <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em">執行中</div>
            <div style="font-size:22px;font-weight:700;color:var(--green)">4</div>
          </div>
          <div
            style="background:var(--white);border:1px solid var(--gray-200);border-radius:8px;padding:10px 16px;min-width:90px">
            <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em">待批價</div>
            <div style="font-size:22px;font-weight:700;color:var(--amber)">2</div>
          </div>
          <div
            style="background:var(--white);border:1px solid var(--gray-200);border-radius:8px;padding:10px 16px;min-width:90px">
            <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em">準備展延</div>
            <div style="font-size:22px;font-weight:700;color:var(--blue)">1</div>
          </div>
          <div
            style="background:var(--white);border:1px solid var(--gray-200);border-radius:8px;padding:10px 16px;min-width:90px">
            <div style="font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em">可發佈</div>
            <div style="font-size:22px;font-weight:700;color:var(--gray-500)">2</div>
          </div>
        </div>

        <div class="toolbar">
          <div class="search-wrap"><span class="search-icon">🔍</span><input type="text" placeholder="搜尋個案姓名…"></div>
          <select class="filter">
            <option>全部狀態</option>
            <option>可發佈</option>
            <option>已發佈</option>
            <option>成立</option>
            <option>未成立</option>
            <option>執行中</option>
            <option>準備展延</option>
            <option>即將結案</option>
            <option>已結案</option>
          </select>
          <select class="filter">
            <option>全部疾病別</option>
            <option>CVA</option>
            <option>骨科</option>
            <option>COPD</option>
            <option>脊髓損傷</option>
          </select>
        </div>

        <div class="tabs">
          <div class="tab active" onclick="switchCaseTab(this,'all')">全部 <span class="badge badge-gray"
              style="margin-left:4px">7</span></div>
          <div class="tab" onclick="switchCaseTab(this,'active')">執行中 <span class="badge badge-green"
              style="margin-left:4px">4</span></div>
          <div class="tab" onclick="switchCaseTab(this,'billing')">待批價 <span class="badge badge-amber"
              style="margin-left:4px">2</span></div>
          <div class="tab" onclick="switchCaseTab(this,'ending')">即將結案 <span class="badge badge-blue"
              style="margin-left:4px">1</span></div>
        </div>

        <div class="case-list" id="case-list-all">

          <!-- 個案1：執行中 -->
          <div class="case-card" data-status="active">
            <div class="case-card-header" onclick="toggleCase('c1')">
              <div style="flex:1">
                <div class="case-name">黃建國</div>
                <div class="case-meta">
                  <span class="case-meta-item">脊髓損傷（C4-C5）</span>
                  <span class="case-meta-item">台北市中山區・8.2km</span>
                  <span class="case-meta-item">開案 2026/06/22</span>
                  <span class="case-meta-item">第 1 週</span>
                </div>
              </div>
              <div class="case-card-badges">
                <span class="badge badge-green">執行中</span>
                <span class="badge badge-gray" style="font-size:10px">批價 ✓</span>
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--blue)">PT</span>
                  <div class="quota-bar-mini">
                    <div class="quota-fill-mini pt-fill" style="width:100%"></div>
                  </div><span class="quota-text-mini">3/3</span>
                </div>
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--purple)">OT</span>
                  <div class="quota-bar-mini">
                    <div class="quota-fill-mini ot-fill" style="width:67%"></div>
                  </div><span class="quota-text-mini">2/3</span>
                </div>
              </div>
              <div class="case-card-right">
                <button class="btn btn-danger btn-xs"
                  onclick="event.stopPropagation();openModal('modal-suspend')">暫停</button>
                <button class="btn btn-ghost btn-xs" style="font-size:11px">🔍 查看詳情</button>
              </div>
            </div>
          </div>

          <!-- 個案2：準備展延 -->
          <div class="case-card" data-status="ending billing">
            <div class="case-card-header" onclick="toggleCase('c2')">
              <div style="flex:1">
                <div class="case-name">王淑芬</div>
                <div class="case-meta">
                  <span class="case-meta-item">骨科（髖關節）</span>
                  <span class="case-meta-item">新北市板橋區・12.5km</span>
                  <span class="case-meta-item">開案 2026/05/15</span>
                  <span class="case-meta-item">第 6 週</span>
                </div>
              </div>
              <div class="case-card-badges">
                <span class="badge badge-blue">準備展延</span>
                <span class="badge badge-amber" style="font-size:10px">待批價</span>
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--blue)">PT</span>
                  <div class="quota-bar-mini">
                    <div class="quota-fill-mini pt-fill" style="width:100%"></div>
                  </div><span class="quota-text-mini">3/3</span>
                </div>
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--purple)">OT</span>
                  <div class="quota-bar-mini">
                    <div class="quota-fill-mini ot-fill" style="width:100%"></div>
                  </div><span class="quota-text-mini">3/3</span>
                </div>
              </div>
              <div class="case-card-right">
                <button class="btn btn-danger btn-xs"
                  onclick="event.stopPropagation();openModal('modal-suspend')">暫停</button>
                <button class="btn btn-ghost btn-xs" style="font-size:11px">🔍 查看詳情</button>
              </div>
            </div>
          </div>

          <!-- 個案3：可發佈 -->
          <div class="case-card" data-status="publish">
            <div class="case-card-header" onclick="toggleCase('c3')">
              <div style="flex:1">
                <div class="case-name">陳志明</div>
                <div class="case-meta">
                  <span class="case-meta-item">CVA（腦中風）</span>
                  <span class="case-meta-item">台北市大安區・5.8km</span>
                  <span class="case-meta-item">開案待確定</span>
                </div>
              </div>
              <div class="case-card-badges">
                <span class="badge badge-gray">可發佈</span>
                <span style="font-size:11px;color:var(--gray-400)">尚未發布報名</span>
              </div>
              <div class="case-card-right">
                <button class="btn btn-ghost btn-xs" style="font-size:11px">🔍 查看詳情</button>
              </div>
            </div>
          </div>

          <!-- 個案4：執行中（林小華） -->
          <div class="case-card" data-status="active">
            <div class="case-card-header" onclick="toggleCase('c4')">
              <div style="flex:1">
                <div class="case-name">林小華</div>
                <div class="case-meta">
                  <span class="case-meta-item">帕金森氏症</span>
                  <span class="case-meta-item">新北市永和區・9.1km</span>
                  <span class="case-meta-item">開案 2026/06/10</span>
                  <span class="case-meta-item">第 3 週</span>
                </div>
              </div>
              <div class="case-card-badges">
                <span class="badge badge-green">執行中</span>
                <span class="badge badge-gray" style="font-size:10px">批價 ✓</span>
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--blue)">PT</span>
                  <div class="quota-bar-mini">
                    <div class="quota-fill-mini pt-fill" style="width:100%"></div>
                  </div><span class="quota-text-mini">3/3</span>
                </div>
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--purple)">OT</span>
                  <div class="quota-bar-mini">
                    <div class="quota-fill-mini ot-fill" style="width:100%"></div>
                  </div><span class="quota-text-mini">3/3</span>
                </div>
              </div>
              <div class="case-card-right">
                <button class="btn btn-danger btn-xs"
                  onclick="event.stopPropagation();openModal('modal-suspend')">暫停</button>
                <button class="btn btn-ghost btn-xs" style="font-size:11px">🔍 查看詳情</button>
              </div>
            </div>
          </div>

          <!-- 個案5：執行中（郭大同） -->
          <div class="case-card" data-status="active">
            <div class="case-card-header" onclick="toggleCase('c5')">
              <div style="flex:1">
                <div class="case-name">郭大同</div>
                <div class="case-meta">
                  <span class="case-meta-item">骨科（膝關節）</span>
                  <span class="case-meta-item">台北市信義區・7.1km</span>
                  <span class="case-meta-item">開案 2026/06/15</span>
                  <span class="case-meta-item">第 2 週</span>
                </div>
              </div>
              <div class="case-card-badges">
                <span class="badge badge-green">執行中</span>
                <span class="badge badge-gray" style="font-size:10px">批價 ✓</span>
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--blue)">PT</span>
                  <div class="quota-bar-mini">
                    <div class="quota-fill-mini pt-fill" style="width:67%"></div>
                  </div><span class="quota-text-mini">2/3</span>
                </div>
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--purple)">OT</span>
                  <div class="quota-bar-mini">
                    <div class="quota-fill-mini ot-fill" style="width:33%"></div>
                  </div><span class="quota-text-mini">1/3</span>
                </div>
              </div>
              <div class="case-card-right">
                <button class="btn btn-danger btn-xs"
                  onclick="event.stopPropagation();openModal('modal-suspend')">暫停</button>
                <button class="btn btn-ghost btn-xs" style="font-size:11px">🔍 查看詳情</button>
              </div>
            </div>
          </div>

          <!-- 個案6：執行中（張阿玉） -->
          <div class="case-card" data-status="active">
            <div class="case-card-header" onclick="toggleCase('c6')">
              <div style="flex:1">
                <div class="case-name">張阿玉</div>
                <div class="case-meta">
                  <span class="case-meta-item">COPD（慢性阻塞性肺病）</span>
                  <span class="case-meta-item">台北市萬華區・5.2km</span>
                  <span class="case-meta-item">開案 2026/06/01</span>
                  <span class="case-meta-item">第 4 週</span>
                </div>
              </div>
              <div class="case-card-badges">
                <span class="badge badge-green">執行中</span>
                <span class="badge badge-gray" style="font-size:10px">批價 ✓</span>
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--blue)">PT</span>
                  <div class="quota-bar-mini">
                    <div class="quota-fill-mini pt-fill" style="width:100%"></div>
                  </div><span class="quota-text-mini">3/3</span>
                </div>
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--purple)">OT</span>
                  <div class="quota-bar-mini">
                    <div class="quota-fill-mini ot-fill" style="width:67%"></div>
                  </div><span class="quota-text-mini">2/3</span>
                </div>
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--green)">ST</span>
                  <div class="quota-bar-mini">
                    <div class="quota-fill-mini st-fill" style="width:100%"></div>
                  </div><span class="quota-text-mini">1/1</span>
                </div>
              </div>
              <div class="case-card-right">
                <button class="btn btn-danger btn-xs"
                  onclick="event.stopPropagation();openModal('modal-suspend')">暫停</button>
                <button class="btn btn-ghost btn-xs" style="font-size:11px">🔍 查看詳情</button>
              </div>
            </div>
          </div>

          <!-- 個案7：待批價（趙萬里） -->
          <div class="case-card" data-status="billing">
            <div class="case-card-header" onclick="toggleCase('c7')">
              <div style="flex:1">
                <div class="case-name">趙萬里</div>
                <div class="case-meta">
                  <span class="case-meta-item">CVA（腦中風）</span>
                  <span class="case-meta-item">新北市三重區・6.8km</span>
                  <span class="case-meta-item">開案 2026/05/10</span>
                  <span class="case-meta-item">第 6 週（照護完成）</span>
                </div>
              </div>
              <div class="case-card-badges">
                <span class="badge badge-gray">已完案</span>
                <span class="badge badge-amber" style="font-size:10px">待批價</span>
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--blue)">PT</span>
                  <div class="quota-bar-mini">
                    <div class="quota-fill-mini pt-fill" style="width:100%"></div>
                  </div><span class="quota-text-mini">18/18</span>
                </div>
                <div class="quota-mini"><span class="quota-label-mini" style="color:var(--purple)">OT</span>
                  <div class="quota-bar-mini">
                    <div class="quota-fill-mini ot-fill" style="width:100%"></div>
                  </div><span class="quota-text-mini">18/18</span>
                </div>
              </div>
              <div class="case-card-right">
                <button class="btn btn-ghost btn-xs" style="font-size:11px">🔍 查看詳情</button>
              </div>
            </div>
          </div>

        </div>
      </div><!-- /view-case -->


      <!-- ════ 復健主管視角 ════ -->
      <div id="view-manager" class="hidden">
        <div class="page-header">
          <div>
            <div class="page-title">居家排班管理</div>
            <div class="page-subtitle">發布個案・查看報名・確認排班</div>
          </div>
        </div>

        <div class="tabs">
          <div class="tab active" onclick="switchMgrTab(this,'mgr-overview')">居家總覽</div>
          <div class="tab" onclick="switchMgrTab(this,'mgr-publish')">發布報名 <span class="badge badge-amber"
              style="margin-left:4px">2</span></div>
        </div>

        <!-- 主管：居家總覽 -->
        <div id="mgr-overview">
          <div class="toolbar">
            <div class="search-wrap"><span class="search-icon">🔍</span><input type="text" placeholder="搜尋個案姓名…"></div>
            <select class="filter">
              <option>全部狀態</option>
              <option>可發佈</option>
              <option>已發佈</option>
              <option>成立</option>
              <option>未成立</option>
            </select>
            <select class="filter">
              <option>全部疾病別</option>
              <option>CVA</option>
              <option>骨科</option>
              <option>脊髓損傷</option>
            </select>
          </div>
          <div class="case-list">
            <div class="case-card">
              <div class="case-card-header" onclick="toggleCase('mc1')">
                <div style="flex:1">
                  <div class="case-name">黃建國</div>
                  <div class="case-meta"><span class="case-meta-item">脊髓損傷・台北市中山區・8.2km</span><span
                      class="case-meta-item">第 1 週</span></div>
                </div>
                <div class="case-card-badges">
                  <span class="badge badge-green">成立・執行中</span>
                  <div class="quota-mini"><span class="quota-label-mini" style="color:var(--blue)">PT</span>
                    <div class="quota-bar-mini">
                      <div class="quota-fill-mini pt-fill" style="width:100%"></div>
                    </div><span class="quota-text-mini">3/3</span>
                  </div>
                  <div class="quota-mini"><span class="quota-label-mini" style="color:var(--purple)">OT</span>
                    <div class="quota-bar-mini">
                      <div class="quota-fill-mini ot-fill" style="width:67%"></div>
                    </div><span class="quota-text-mini">2/3</span>
                  </div>
                </div>
                <div class="case-card-right">
                  <button class="btn btn-danger btn-xs"
                    onclick="event.stopPropagation();openModal('modal-suspend')">暫停</button>
                  <button class="btn btn-ghost btn-xs" style="font-size:11px">🔍 查看詳情</button>
                </div>
              </div>
            </div>

            <div class="case-card">
              <div class="case-card-header" onclick="toggleCase('mc2')">
                <div style="flex:1">
                  <div class="case-name">陳志明</div>
                  <div class="case-meta"><span class="case-meta-item">CVA・台北市大安區・5.8km</span></div>
                </div>
                <div class="case-card-badges">
                  <span class="badge badge-gray">可發佈</span>
                  <span style="font-size:11px;color:var(--gray-400)">尚未發布</span>
                </div>
                <div class="case-card-right">
                  <button class="btn btn-primary btn-xs"
                    onclick="event.stopPropagation();openModal('modal-publish')">發布報名</button>
                  <button class="btn btn-ghost btn-xs" style="font-size:11px">🔍 查看詳情</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 主管：發布報名 -->
        <div id="mgr-publish" class="hidden">
          <div class="info-note blue">以下個案可發布報名，治療師將可在「可報名」頁面看到並報名。</div>
          <div class="case-list">
            <div class="case-card">
              <div class="case-card-header" style="cursor:default">
                <div style="flex:1">
                  <div class="case-name">陳志明</div>
                  <div class="case-meta"><span class="case-meta-item">CVA・台北市大安區・5.8km</span><span
                      class="case-meta-item">所需：PT 3人・OT 3人</span></div>
                </div>
                <div class="case-card-badges"><span class="badge badge-gray">可發佈</span></div>
                <div class="case-card-right">
                  <button class="btn btn-primary btn-sm" onclick="openModal('modal-publish')">📢 發布報名</button>
                </div>
              </div>
            </div>
            <div class="case-card">
              <div class="case-card-header" style="cursor:default">
                <div style="flex:1">
                  <div class="case-name">蔡美玲</div>
                  <div class="case-meta"><span class="case-meta-item">帕金森氏症・新北市永和區・9.1km</span><span
                      class="case-meta-item">所需：PT 3人・OT 3人</span></div>
                </div>
                <div class="case-card-badges"><span class="badge badge-gray">可發佈</span></div>
                <div class="case-card-right">
                  <button class="btn btn-primary btn-sm" onclick="openModal('modal-publish')">📢 發布報名</button>
                </div>
              </div>
            </div>
            <!-- 已發佈 -->
            <div class="case-card">
              <div class="case-card-header" onclick="toggleCase('mp1')">
                <div style="flex:1">
                  <div class="case-name">黃建國</div>
                  <div class="case-meta"><span class="case-meta-item">脊髓損傷・台北市中山區</span><span
                      class="case-meta-item">報名截止 2026/06/10 12:00</span></div>
                </div>
                <div class="case-card-badges">
                  <span class="badge badge-blue">已發佈</span>
                  <div class="quota-mini"><span class="quota-label-mini" style="color:var(--blue)">PT</span>
                    <div class="quota-bar-mini">
                      <div class="quota-fill-mini pt-fill" style="width:100%"></div>
                    </div><span class="quota-text-mini">4/3 ⚠️</span>
                  </div>
                  <div class="quota-mini"><span class="quota-label-mini" style="color:var(--purple)">OT</span>
                    <div class="quota-bar-mini">
                      <div class="quota-fill-mini ot-fill" style="width:67%"></div>
                    </div><span class="quota-text-mini">2/3</span>
                  </div>
                </div>
                <div class="case-card-right">
                  <button class="btn btn-amber btn-xs" onclick="event.stopPropagation();openModal('modal-lottery')">🎲
                    執行抽籤</button>
                  <button class="btn btn-ghost btn-xs" style="font-size:11px">🔍 查看詳情</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!-- /view-manager -->


      <!-- ════ 治療師視角 ════ -->
      <div id="view-therapist" class="hidden">
        <div class="page-header">
          <div>
            <div class="page-title">居家排班</div>
            <div class="page-subtitle">黃志豪（PT）的居家個案</div>
          </div>
        </div>
        <div class="tabs">
          <div class="tab active" onclick="switchThTab(this,'th-active')">進行中 <span class="badge badge-green"
              style="margin-left:4px">2</span></div>
          <div class="tab" onclick="switchThTab(this,'th-open')">可報名 <span class="badge badge-amber"
              style="margin-left:4px">2</span></div>
          <div class="tab" onclick="switchThTab(this,'th-bonus')">獎金明細</div>
        </div>

        <!-- 治療師：進行中 -->
        <div id="th-active">
          <div class="case-list">
            <div class="case-card">
              <div class="case-card-header" onclick="toggleCase('tc1')">
                <div style="flex:1">
                  <div class="case-name">黃建國</div>
                  <div class="case-meta">
                    <span class="case-meta-item">脊髓損傷</span>
                    <span class="case-meta-item">台北市中山區・8.2km</span>
                    <span class="case-meta-item">每週三下班後</span>
                    <span class="case-meta-item">第 1 週</span>
                  </div>
                </div>
                <div class="case-card-badges">
                  <span class="badge badge-green">執行中</span>
                  <span class="badge badge-gray" style="font-size:10px">批價 ✓</span>
                </div>
                <div class="case-card-right">
                  <button class="btn btn-primary btn-xs" onclick="event.stopPropagation();openModal('modal-checkin')">✓
                    簽到</button>
                  <button class="btn btn-ghost btn-xs" style="font-size:11px">🔍 查看詳情</button>
                </div>
              </div>
            </div>

            <div class="case-card">
              <div class="case-card-header" onclick="toggleCase('tc2')">
                <div style="flex:1">
                  <div class="case-name">李文雄</div>
                  <div class="case-meta">
                    <span class="case-meta-item">COPD</span>
                    <span class="case-meta-item">台北市松山區・6.4km</span>
                    <span class="case-meta-item">每週五下班後</span>
                    <span class="case-meta-item">第 3 週</span>
                  </div>
                </div>
                <div class="case-card-badges">
                  <span class="badge badge-green">執行中</span>
                </div>
                <div class="case-card-right">
                  <button class="btn btn-primary btn-xs" onclick="event.stopPropagation();openModal('modal-checkin')">✓
                    簽到</button>
                  <button class="btn btn-ghost btn-xs" style="font-size:11px">🔍 查看詳情</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 治療師：可報名 -->
        <div id="th-open" class="hidden">
          <div class="info-note blue">以下居家個案開放報名，截止後系統將進行 PT/OT/ST 分開抽籤，抽中後可選擇時段。</div>
          <div class="case-list">
            <div class="case-card">
              <div class="case-card-header" onclick="toggleCase('to1')">
                <div style="flex:1">
                  <div class="case-name">陳志明</div>
                  <div class="case-meta">
                    <span class="case-meta-item">CVA・台北市大安區・5.8km</span>
                    <span class="case-meta-item">報名截止 06/24 12:00</span>
                  </div>
                </div>
                <div class="case-card-badges">
                  <span class="badge badge-amber">可報名</span>
                  <div class="quota-mini"><span class="quota-label-mini" style="color:var(--blue)">PT</span>
                    <div class="quota-bar-mini">
                      <div class="quota-fill-mini pt-fill" style="width:33%"></div>
                    </div><span class="quota-text-mini">1/3</span>
                  </div>
                  <div class="quota-mini"><span class="quota-label-mini" style="color:var(--purple)">OT</span>
                    <div class="quota-bar-mini">
                      <div class="quota-fill-mini ot-fill" style="width:0%"></div>
                    </div><span class="quota-text-mini">0/3</span>
                  </div>
                </div>
                <div class="case-card-right">
                  <button class="btn btn-green btn-sm"
                    onclick="event.stopPropagation();openModal('modal-register-therapist')">報名</button>
                  <button class="btn btn-ghost btn-xs" style="font-size:11px">🔍 查看詳情</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- 治療師：獎金明細 -->
        <div id="th-bonus" class="hidden">
          <div class="info-note blue">以下為您本月的居家復健執行明細，請確認後送交主管彙整。</div>
          <div style="display:flex;gap:8px;margin-bottom:14px">
            <select class="filter">
              <option>2026年 5月</option>
              <option selected>2026年 6月（目前）</option>
            </select>
          </div>
          <div class="bonus-card">
            <div class="bonus-header">
              <div class="bonus-name">黃志豪（PT）的執行明細</div>
              <span class="badge badge-amber">待確認</span>
            </div>
            <div class="bonus-body">
              <table class="bonus-table">
                <thead>
                  <tr>
                    <th>個案</th>
                    <th>疾病別</th>
                    <th>執行次數</th>
                    <th>總公里數</th>
                    <th>健保獎金</th>
                    <th>車資補貼</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>黃建國</td>
                    <td>脊髓損傷</td>
                    <td>1 次</td>
                    <td>8.2 km</td>
                    <td>NT$ 500</td>
                    <td>NT$ 82</td>
                  </tr>
                  <tr>
                    <td>李文雄</td>
                    <td>COPD</td>
                    <td>9 次</td>
                    <td>57.6 km</td>
                    <td>NT$ 4,500</td>
                    <td>NT$ 576</td>
                  </tr>
                  <tr class="bonus-total-row">
                    <td colspan="4">合計</td>
                    <td>NT$ 5,000</td>
                    <td>NT$ 658</td>
                  </tr>
                </tbody>
              </table>
              <div
                style="background:var(--blue-light);border-radius:7px;padding:11px 13px;margin-top:12px;display:flex;align-items:center;justify-content:space-between">
                <div style="font-size:13px;font-weight:600;color:var(--blue-dark)">本月預估總獎金</div>
                <div style="font-size:20px;font-weight:700;color:var(--blue)">NT$ 5,658</div>
              </div>
              <div class="info-note amber mt-10">⚠️ 此為預估金額，最終以個管師批價確認後為準。</div>
              <div style="text-align:right;margin-top:10px">
                <button class="btn btn-primary" onclick="openModal('modal-bonus-confirm')">✓ 確認明細，送主管彙整</button>
              </div>
            </div>
          </div>
        </div>

      </div><!-- /view-therapist -->

      <!-- ════ 獎金彙整（個管師/主管共用）════ -->
      <div id="view-bonus" class="hidden">
        <div class="back-link"
          style="display:inline-flex;align-items:center;gap:4px;font-size:12px;color:var(--gray-500);cursor:pointer;margin-bottom:14px"
          onclick="switchBackFromBonus()">← 返回</div>
        <div class="page-header">
          <div>
            <div class="page-title">獎金明細彙整</div>
            <div class="page-subtitle">2026年 6月</div>
          </div>
          <div style="display:flex;gap:8px">
            <select class="filter">
              <option>2026年 5月</option>
              <option selected>2026年 6月</option>
            </select>
            <button class="btn btn-primary btn-sm" onclick="openModal('modal-billing-confirm')">批價確認</button>
          </div>
        </div>
        <div class="info-note blue">治療師確認獎金明細後，主管彙整，最後由個管師送批價。</div>

        <div class="bonus-card">
          <div class="bonus-header">
            <div class="bonus-name">陳建宏（PT）</div>
            <span class="badge badge-green">已確認</span>
          </div>
          <div class="bonus-body">
            <table class="bonus-table">
              <thead>
                <tr>
                  <th>個案</th>
                  <th>執行次數</th>
                  <th>總公里數</th>
                  <th>健保獎金</th>
                  <th>車資補貼</th>
                  <th>小計</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>黃建國</td>
                  <td>2 次</td>
                  <td>16.4 km</td>
                  <td>NT$ 1,000</td>
                  <td>NT$ 164</td>
                  <td>NT$ 1,164</td>
                </tr>
                <tr class="bonus-total-row">
                  <td colspan="5">合計</td>
                  <td>NT$ 1,164</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="bonus-card">
          <div class="bonus-header">
            <div class="bonus-name">黃志豪（PT）</div>
            <span class="badge badge-amber">待確認</span>
          </div>
          <div class="bonus-body">
            <table class="bonus-table">
              <thead>
                <tr>
                  <th>個案</th>
                  <th>執行次數</th>
                  <th>總公里數</th>
                  <th>健保獎金</th>
                  <th>車資補貼</th>
                  <th>小計</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>黃建國</td>
                  <td>1 次</td>
                  <td>8.2 km</td>
                  <td>NT$ 500</td>
                  <td>NT$ 82</td>
                  <td>NT$ 582</td>
                </tr>
                <tr>
                  <td>李文雄</td>
                  <td>9 次</td>
                  <td>57.6 km</td>
                  <td>NT$ 4,500</td>
                  <td>NT$ 576</td>
                  <td>NT$ 5,076</td>
                </tr>
                <tr class="bonus-total-row">
                  <td colspan="5">合計</td>
                  <td>NT$ 5,658</td>
                </tr>
              </tbody>
            </table>
            <div style="font-size:11px;color:var(--amber);margin-top:8px">⚠️ 治療師尚未確認，請提醒黃志豪確認獎金明細。</div>
          </div>
        </div>

        <div class="bonus-card">
          <div class="bonus-header">
            <div class="bonus-name">李佳穎（OT）</div>
            <span class="badge badge-green">已確認</span>
          </div>
          <div class="bonus-body">
            <table class="bonus-table">
              <thead>
                <tr>
                  <th>個案</th>
                  <th>執行次數</th>
                  <th>總公里數</th>
                  <th>健保獎金</th>
                  <th>車資補貼</th>
                  <th>小計</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>黃建國</td>
                  <td>1 次</td>
                  <td>8.2 km</td>
                  <td>NT$ 500</td>
                  <td>NT$ 82</td>
                  <td>NT$ 582</td>
                </tr>
                <tr>
                  <td>王淑芬</td>
                  <td>18 次</td>
                  <td>225 km</td>
                  <td>NT$ 9,000</td>
                  <td>NT$ 2,250</td>
                  <td>NT$ 11,250</td>
                </tr>
                <tr class="bonus-total-row">
                  <td colspan="5">合計</td>
                  <td>NT$ 11,832</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          style="background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:16px;margin-top:4px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
            <div style="font-size:14px;font-weight:700">本月總獎金</div>
            <div style="font-size:22px;font-weight:700;color:var(--blue)">NT$ 18,654</div>
          </div>
          <div style="font-size:12px;color:var(--gray-500)">已確認 2 / 3 位治療師・尚有 1 位待確認</div>
          <button class="btn btn-primary btn-sm" style="margin-top:12px;width:100%;justify-content:center"
            onclick="openModal('modal-billing-confirm')">彙整完成・送個管師批價</button>
        </div>
      </div><!-- /view-bonus -->

    </div><!-- /content -->
  </div><!-- /main -->


  <!-- ══ MODALS ══ -->

  <!-- 個管師：黃建國詳情 (c1) -->
  <div id="modal-detail-c1" class="modal-overlay hidden">
    <div class="modal modal-lg">
      <div class="modal-header">
        <div class="modal-title">🏡 黃建國・居家復健詳情</div>
        <button class="modal-close" onclick="closeModal('modal-detail-c1')">✕</button>
      </div>
      <div class="modal-body">
        <div class="detail-section-title">個案基本資料</div>
        <div class="info-row">
          <div class="info-item"><label>姓名</label><span>黃建國</span></div>
          <div class="info-item"><label>年齡／性別</label><span>55歲 男</span></div>
          <div class="info-item"><label>疾病別</label><span>脊髓損傷（C4-C5）</span></div>
          <div class="info-item"><label>個案電話</label><span>0934-567-890</span></div>
          <div class="info-item"><label>家屬聯絡</label><span>黃太太 0945-678-901</span></div>
          <div class="info-item"><label>地址</label><span>台北市中山區○○路○○號</span></div>
        </div>
        <div class="fake-map" style="margin-bottom:12px">
          <div class="fake-map-road h" style="top:45%"></div>
          <div class="fake-map-road h" style="top:70%"></div>
          <div class="fake-map-road v" style="left:35%"></div>
          <div class="fake-map-road v" style="left:65%"></div>
          <div class="map-pin-home">📍</div>
          <div class="map-pin-hospital">🏥</div>
          <div class="map-distance">距醫院 8.2 km</div>
          <div style="position:absolute;top:8px;left:10px;font-size:10px;color:var(--gray-400)">地圖示意</div>
        </div>
        <div class="detail-section-title">病摘摘要</div>
        <div class="summary-box" style="margin-bottom:12px">脊髓損傷（C4-C5），不完全損傷（ASIA B）。上肢保有部分感覺，下肢運動功能受損。建議以上肢功能強化、呼吸訓練、轉位訓練為主。注意：個案有呼吸問題，遇喘促需立即停止並通報。</div>
        <div class="detail-section-title">醫囑方向</div>
        <div class="summary-box" style="margin-bottom:12px">PT：每週 3 次，每次 50 分鐘。著重轉位訓練、呼吸肌強化。OT：每週 3 次，每次 50 分鐘。上肢功能訓練、日常生活輔具評估。</div>
        <div class="divider"></div>
        <div class="detail-section-title" style="margin-bottom:8px">治療師排班時段</div>
        <div style="display:flex;flex-wrap:wrap;gap:7px;margin-bottom:14px">
          <div style="background:var(--blue-light);border-radius:6px;padding:7px 11px;font-size:11px"><strong style="color:var(--blue)">陳建宏 PT</strong><br>週三・下班後</div>
          <div style="background:var(--blue-light);border-radius:6px;padding:7px 11px;font-size:11px"><strong style="color:var(--blue)">黃志豪 PT</strong><br>週五・下班後</div>
          <div style="background:var(--blue-light);border-radius:6px;padding:7px 11px;font-size:11px"><strong style="color:var(--blue)">王復健主管 PT</strong><br>週六・上午</div>
          <div style="background:var(--purple-light);border-radius:6px;padding:7px 11px;font-size:11px"><strong style="color:var(--purple)">李佳穎 OT</strong><br>週二・午休</div>
          <div style="background:var(--purple-light);border-radius:6px;padding:7px 11px;font-size:11px"><strong style="color:var(--purple)">張雅玲 OT</strong><br>週四・下班後</div>
        </div>
        <div class="divider"></div>
        <div class="detail-section-title">治療執行紀錄</div>
        <div class="treatment-log">
          <div class="treatment-row uploaded">
            <span class="treatment-date">06/18 週三</span>
            <span class="treatment-therapist">陳建宏 <span class="th-tag th-pt">PT</span></span>
            <span class="treatment-time">17:30 – 18:20</span>
            <span class="badge badge-blue" style="font-size:10px">已簽到・已上傳</span>
          </div>
          <div class="treatment-row signed">
            <span class="treatment-date">06/20 週五</span>
            <span class="treatment-therapist">黃志豪 <span class="th-tag th-pt">PT</span></span>
            <span class="treatment-time">17:30 – 18:20</span>
            <span class="badge badge-green" style="font-size:10px">已簽到・待上傳</span>
          </div>
        </div>
        <div class="divider"></div>
        <div class="billing-box">
          <div class="billing-title"><span>批價資訊</span><span class="badge badge-green">已批價</span></div>
          <table class="billing-table">
            <tr><td>預收金額（第一次收取）</td><td>NT$ 3,000</td></tr>
            <tr><td>健保費用（已執行 4 次 × NT$ 500）</td><td>NT$ 2,000</td></tr>
            <tr><td>交通費（8.2 km × 4 次 × NT$ 10/km）</td><td>NT$ 328</td></tr>
          </table>
          <div class="billing-total"><span>實際費用合計</span><span style="color:var(--blue)">NT$ 2,328</span></div>
          <div class="billing-refund">💰 應退還家屬：NT$ 672</div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-detail-c1')">關閉</button>
      </div>
    </div>
  </div>

  <!-- 個管師：王淑芬詳情 (c2) -->
  <div id="modal-detail-c2" class="modal-overlay hidden">
    <div class="modal modal-lg">
      <div class="modal-header">
        <div class="modal-title">🏡 王淑芬・居家復健詳情</div>
        <button class="modal-close" onclick="closeModal('modal-detail-c2')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-note blue" style="margin-bottom:12px">⚠️ 此個案已進入第 6 週，需於本週送展延申請，否則將於第 6 週結束後結案。</div>
        <div class="detail-section-title">個案基本資料</div>
        <div class="info-row">
          <div class="info-item"><label>姓名</label><span>王淑芬</span></div>
          <div class="info-item"><label>年齡／性別</label><span>72歲 女</span></div>
          <div class="info-item"><label>疾病別</label><span>骨科（髖關節置換後）</span></div>
          <div class="info-item"><label>個案電話</label><span>0923-456-789</span></div>
          <div class="info-item"><label>家屬聯絡</label><span>王小華 0934-789-012</span></div>
          <div class="info-item"><label>地址</label><span>新北市板橋區○○路○號</span></div>
        </div>
        <div class="fake-map" style="margin-bottom:12px">
          <div class="fake-map-road h" style="top:40%"></div>
          <div class="fake-map-road v" style="left:50%"></div>
          <div class="map-pin-home" style="top:28%;left:62%">📍</div>
          <div class="map-pin-hospital" style="top:55%;left:20%">🏥</div>
          <div class="map-distance">距醫院 12.5 km</div>
        </div>
        <div class="billing-box">
          <div class="billing-title"><span>批價資訊</span><span class="badge badge-amber">待批價</span></div>
          <table class="billing-table">
            <tr><td>預收金額（第一次收取）</td><td>NT$ 4,000</td></tr>
            <tr><td>健保費用（已執行 18 次 × NT$ 500）</td><td>NT$ 9,000</td></tr>
            <tr><td>交通費（12.5 km × 18 次 × NT$ 10/km）</td><td>NT$ 2,250</td></tr>
          </table>
          <div class="billing-total"><span>實際費用合計</span><span style="color:var(--blue)">NT$ 11,250</span></div>
          <div class="billing-charge">⚠️ 家屬需補繳：NT$ 7,250</div>
          <button class="btn btn-primary btn-sm" style="width:100%;margin-top:10px;justify-content:center"
            onclick="closeModal('modal-detail-c2');openModal('modal-billing-confirm')">確認送批價</button>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-detail-c2')">關閉</button>
      </div>
    </div>
  </div>

  <!-- 個管師：陳志明詳情 (c3) -->
  <div id="modal-detail-c3" class="modal-overlay hidden">
    <div class="modal">
      <div class="modal-header">
        <div class="modal-title">🏡 陳志明・居家復健詳情</div>
        <button class="modal-close" onclick="closeModal('modal-detail-c3')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-note amber" style="margin-bottom:12px">此個案尚未發布報名，請通知復健主管發布或前往「發布報名」頁面。</div>
        <div class="detail-section-title">個案基本資料</div>
        <div class="info-row">
          <div class="info-item"><label>姓名</label><span>陳志明</span></div>
          <div class="info-item"><label>年齡／性別</label><span>68歲 男</span></div>
          <div class="info-item"><label>疾病別</label><span>CVA（腦中風）</span></div>
          <div class="info-item"><label>個案電話</label><span>0912-345-678</span></div>
          <div class="info-item"><label>家屬聯絡</label><span>陳小明 0923-456-789</span></div>
          <div class="info-item"><label>地址</label><span>台北市大安區○○路○號</span></div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-detail-c3')">關閉</button>
      </div>
    </div>
  </div>

  <!-- 個管師：林小華詳情 (c4) -->
  <div id="modal-detail-c4" class="modal-overlay hidden">
    <div class="modal modal-lg">
      <div class="modal-header">
        <div class="modal-title">🏡 林小華・居家復健詳情</div>
        <button class="modal-close" onclick="closeModal('modal-detail-c4')">✕</button>
      </div>
      <div class="modal-body">
        <div class="detail-section-title">個案基本資料</div>
        <div class="info-row">
          <div class="info-item"><label>姓名</label><span>林小華</span></div>
          <div class="info-item"><label>年齡／性別</label><span>60歲 男</span></div>
          <div class="info-item"><label>疾病別</label><span>帕金森氏症</span></div>
          <div class="info-item"><label>個案電話</label><span>0912-888-999</span></div>
          <div class="info-item"><label>家屬聯絡</label><span>林女兒 0912-777-666</span></div>
          <div class="info-item"><label>地址</label><span>新北市永和區○○路○號</span></div>
        </div>
        <div class="fake-map" style="margin-bottom:12px">
          <div class="map-pin-home">📍</div>
          <div class="map-pin-hospital">🏥</div>
          <div class="map-distance">距醫院 9.1 km</div>
        </div>
        <div class="detail-section-title">醫囑方向</div>
        <div class="summary-box" style="margin-bottom:12px">PT/OT：每週 3 次，每次 50 分鐘。著重平衡訓練、防跌指導與日常生活自理。</div>
        <div class="divider"></div>
        <div class="billing-box">
          <div class="billing-title"><span>批價資訊</span><span class="badge badge-green">已批價</span></div>
          <table class="billing-table">
            <tr><td>實際費用合計</td><td>NT$ 3,820</td></tr>
          </table>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-detail-c4')">關閉</button>
      </div>
    </div>
  </div>

  <!-- 個管師：郭大同詳情 (c5) -->
  <div id="modal-detail-c5" class="modal-overlay hidden">
    <div class="modal modal-lg">
      <div class="modal-header">
        <div class="modal-title">🏡 郭大同・居家復健詳情</div>
        <button class="modal-close" onclick="closeModal('modal-detail-c5')">✕</button>
      </div>
      <div class="modal-body">
        <div class="detail-section-title">個案基本資料</div>
        <div class="info-row">
          <div class="info-item"><label>姓名</label><span>郭大同</span></div>
          <div class="info-item"><label>年齡／性別</label><span>65歲 男</span></div>
          <div class="info-item"><label>疾病別</label><span>骨科（膝關節置換後）</span></div>
          <div class="info-item"><label>個案電話</label><span>0956-111-222</span></div>
          <div class="info-item"><label>地址</label><span>台北市信義區○○路○號</span></div>
        </div>
        <div class="fake-map" style="margin-bottom:12px">
          <div class="map-pin-home">📍</div>
          <div class="map-pin-hospital">🏥</div>
          <div class="map-distance">距醫院 7.1 km</div>
        </div>
        <div class="detail-section-title">醫囑方向</div>
        <div class="summary-box">著重膝關節活動度訓練、大腿肌力重建、步態修正與日常生活轉移位能力提升。</div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-detail-c5')">關閉</button>
      </div>
    </div>
  </div>

  <!-- 個管師：張阿玉詳情 (c6) -->
  <div id="modal-detail-c6" class="modal-overlay hidden">
    <div class="modal modal-lg">
      <div class="modal-header">
        <div class="modal-title">🏡 張阿玉・居家復健詳情</div>
        <button class="modal-close" onclick="closeModal('modal-detail-c6')">✕</button>
      </div>
      <div class="modal-body">
        <div class="detail-section-title">個案基本資料</div>
        <div class="info-row">
          <div class="info-item"><label>姓名</label><span>張阿玉</span></div>
          <div class="info-item"><label>年齡／性別</label><span>78歲 女</span></div>
          <div class="info-item"><label>疾病別</label><span>COPD（慢性阻塞性肺病）</span></div>
          <div class="info-item"><label>地址</label><span>台北市萬華區○○街○號</span></div>
        </div>
        <div class="fake-map" style="margin-bottom:12px">
          <div class="map-pin-home">📍</div>
          <div class="map-pin-hospital">🏥</div>
          <div class="map-distance">距醫院 5.2 km</div>
        </div>
        <div class="detail-section-title">醫囑方向</div>
        <div class="summary-box">PT：呼吸肌耐力訓練、排痰指導。OT：省力效能技巧教學。ST：語言與吞嚥功能安全評估。</div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-detail-c6')">關閉</button>
      </div>
    </div>
  </div>

  <!-- 個管師：趙萬里詳情 (c7) -->
  <div id="modal-detail-c7" class="modal-overlay hidden">
    <div class="modal modal-lg">
      <div class="modal-header">
        <div class="modal-title">🏡 趙萬里・居家復健詳情</div>
        <button class="modal-close" onclick="closeModal('modal-detail-c7')">✕</button>
      </div>
      <div class="modal-body">
        <div class="detail-section-title">個案基本資料</div>
        <div class="info-row">
          <div class="info-item"><label>姓名</label><span>趙萬里</span></div>
          <div class="info-item"><label>年齡／性別</label><span>80歲 男</span></div>
          <div class="info-item"><label>疾病別</label><span>CVA（腦中風）</span></div>
          <div class="info-item"><label>個案電話</label><span>0911-222-333</span></div>
          <div class="info-item"><label>地址</label><span>新北市三重區○○街○號</span></div>
        </div>
        <div class="billing-box">
          <div class="billing-title"><span>批價資訊</span><span class="badge badge-amber">待批價</span></div>
          <table class="billing-table">
            <tr><td>預收金額</td><td>NT$ 3,000</td></tr>
            <tr><td>健保與交通費實際合計</td><td>NT$ 10,800</td></tr>
          </table>
          <div class="billing-charge">⚠️ 家屬需補繳：NT$ 7,800</div>
          <button class="btn btn-primary btn-sm" style="width:100%;margin-top:10px;justify-content:center"
            onclick="closeModal('modal-detail-c7');openModal('modal-billing-confirm')">確認送批價</button>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-detail-c7')">關閉</button>
      </div>
    </div>
  </div>

  <!-- 主管：黃建國總覽 (mc1) -->
  <div id="modal-detail-mc1" class="modal-overlay hidden">
    <div class="modal">
      <div class="modal-header">
        <div class="modal-title">🏡 黃建國・報名抽籤結果</div>
        <button class="modal-close" onclick="closeModal('modal-detail-mc1')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-row">
          <div class="info-item"><label>姓名</label><span>黃建國</span></div>
          <div class="info-item"><label>年齡／性別</label><span>55歲 男</span></div>
          <div class="info-item"><label>地址</label><span>台北市中山區○○路○號</span></div>
        </div>
        <div class="detail-section-title" style="margin-top:12px;margin-bottom:8px">中籤治療師</div>
        <div class="reg-list">
          <div class="reg-item winner"><span class="reg-name">陳建宏 <span class="th-tag th-pt">PT</span></span><span class="badge badge-green">抽中</span><span style="font-size:11px;color:var(--gray-500);margin-left:8px">週三下班後</span></div>
          <div class="reg-item winner"><span class="reg-name">黃志豪 <span class="th-tag th-pt">PT</span></span><span class="badge badge-green">抽中</span><span style="font-size:11px;color:var(--gray-500);margin-left:8px">週五下班後</span></div>
          <div class="reg-item winner"><span class="reg-name">王復健主管 <span class="th-tag th-mgr">主管</span></span><span class="badge badge-green">抽中</span><span style="font-size:11px;color:var(--gray-500);margin-left:8px">週六上午</span></div>
          <div class="reg-item"><span class="reg-name">林○○ <span class="th-tag th-pt">PT</span></span><span class="badge badge-gray">未抽中</span></div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-detail-mc1')">關閉</button>
      </div>
    </div>
  </div>

  <!-- 主管：陳志明總覽 (mc2) -->
  <div id="modal-detail-mc2" class="modal-overlay hidden">
    <div class="modal">
      <div class="modal-header">
        <div class="modal-title">🏡 陳志明・個案詳情</div>
        <button class="modal-close" onclick="closeModal('modal-detail-mc2')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-row">
          <div class="info-item"><label>姓名</label><span>陳志明</span></div>
          <div class="info-item"><label>疾病別</label><span>CVA（腦中風）</span></div>
          <div class="info-item"><label>個案電話</label><span>0912-345-678</span></div>
          <div class="info-item"><label>所需人力</label><span>PT 3人・OT 3人</span></div>
        </div>
        <div style="margin-top:12px">
          <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="closeModal('modal-detail-mc2');openModal('modal-publish')">發布報名</button>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-detail-mc2')">關閉</button>
      </div>
    </div>
  </div>

  <!-- 主管：黃建國已發佈報名狀況 (mp1) -->
  <div id="modal-detail-mp1" class="modal-overlay hidden">
    <div class="modal">
      <div class="modal-header">
        <div class="modal-title">🏡 黃建國・目前報名名單</div>
        <button class="modal-close" onclick="closeModal('modal-detail-mp1')">✕</button>
      </div>
      <div class="modal-body">
        <div class="detail-section-title" style="margin-bottom:8px">報名中治療師</div>
        <div class="reg-list">
          <div class="reg-item"><span class="reg-name">陳建宏 <span class="th-tag th-pt">PT</span></span><span class="badge badge-amber">報名中</span></div>
          <div class="reg-item"><span class="reg-name">黃志豪 <span class="th-tag th-pt">PT</span></span><span class="badge badge-amber">報名中</span></div>
          <div class="reg-item"><span class="reg-name">王復健主管 <span class="th-tag th-mgr">主管</span></span><span class="badge badge-amber">報名中</span></div>
          <div class="reg-item"><span class="reg-name">林○○ <span class="th-tag th-pt">PT</span></span><span class="badge badge-amber">報名中（超額）</span></div>
          <div class="reg-item"><span class="reg-name">李佳穎 <span class="th-tag th-ot">OT</span></span><span class="badge badge-amber">報名中</span></div>
          <div class="reg-item"><span class="reg-name">張雅玲 <span class="th-tag th-ot">OT</span></span><span class="badge badge-amber">報名中</span></div>
        </div>
        <div style="margin-top:12px">
          <button class="btn btn-amber" style="width:100%;justify-content:center" onclick="closeModal('modal-detail-mp1');openModal('modal-lottery')">🎲 執行抽籤</button>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-detail-mp1')">關閉</button>
      </div>
    </div>
  </div>

  <!-- 治療師：黃建國進行中 (tc1) -->
  <div id="modal-detail-tc1" class="modal-overlay hidden">
    <div class="modal modal-lg">
      <div class="modal-header">
        <div class="modal-title">🏡 黃建國・治療執行詳情</div>
        <button class="modal-close" onclick="closeModal('modal-detail-tc1')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-row">
          <div class="info-item"><label>姓名</label><span>黃建國</span></div>
          <div class="info-item"><label>年齡／性別</label><span>55歲 男</span></div>
          <div class="info-item"><label>疾病別</label><span>脊髓損傷（C4-C5）</span></div>
          <div class="info-item"><label>家屬聯絡</label><span>黃太太 0945-678-901</span></div>
          <div class="info-item"><label>地址</label><span>台北市中山區○○路○號</span></div>
        </div>
        <div class="fake-map" style="margin-bottom:12px">
          <div class="map-pin-home">📍</div>
          <div class="map-pin-hospital">🏥</div>
          <div class="map-distance">距醫院 8.2 km</div>
        </div>
        <div class="summary-box" style="margin-bottom:12px">脊髓損傷（C4-C5），不完全損傷。注意：個案有呼吸問題，遇喘促需立即停止。</div>
        <div class="detail-section-title" style="margin-bottom:8px">我的治療紀錄</div>
        <div class="treatment-log">
          <div class="treatment-row uploaded">
            <span class="treatment-date">06/18 週三</span>
            <span class="treatment-time">17:30 – 18:20</span>
            <span class="badge badge-blue" style="font-size:10px">已簽到・已上傳</span>
          </div>
          <div class="treatment-row pending">
            <span class="treatment-date">06/25 週三</span>
            <span class="treatment-time">17:30 – 18:20</span>
            <span class="badge badge-amber" style="font-size:10px">即將到來</span>
            <div class="treatment-actions"><button class="btn btn-primary btn-xs" onclick="closeModal('modal-detail-tc1');openModal('modal-checkin')">簽到</button></div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-detail-tc1')">關閉</button>
      </div>
    </div>
  </div>

  <!-- 治療師：李文雄進行中 (tc2) -->
  <div id="modal-detail-tc2" class="modal-overlay hidden">
    <div class="modal">
      <div class="modal-header">
        <div class="modal-title">🏡 李文雄・治療執行詳情</div>
        <button class="modal-close" onclick="closeModal('modal-detail-tc2')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-row">
          <div class="info-item"><label>姓名</label><span>李文雄</span></div>
          <div class="info-item"><label>個案電話</label><span>0923-456-789</span></div>
          <div class="info-item"><label>地址</label><span>台北市松山區○○路○號</span></div>
        </div>
        <div class="detail-section-title" style="margin-top:12px;margin-bottom:8px">治療紀錄</div>
        <div class="treatment-log">
          <div class="treatment-row pending">
            <span class="treatment-date">06/27 週五</span>
            <span class="treatment-time">18:00 – 18:50</span>
            <span class="badge badge-amber" style="font-size:10px">即將到來</span>
            <div class="treatment-actions"><button class="btn btn-primary btn-xs" onclick="closeModal('modal-detail-tc2');openModal('modal-checkin')">簽到</button></div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-detail-tc2')">關閉</button>
      </div>
    </div>
  </div>

  <!-- 治療師：陳志明可報名 (to1) -->
  <div id="modal-detail-to1" class="modal-overlay hidden">
    <div class="modal modal-lg">
      <div class="modal-header">
        <div class="modal-title">🏡 陳志明・居家個案報名</div>
        <button class="modal-close" onclick="closeModal('modal-detail-to1')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-row">
          <div class="info-item"><label>姓名</label><span>陳志明</span></div>
          <div class="info-item"><label>年齡／性別</label><span>68歲 男</span></div>
          <div class="info-item"><label>疾病別</label><span>CVA（腦中風）</span></div>
          <div class="info-item"><label>地址</label><span>台北市大安區○○路○號</span></div>
          <div class="info-item"><label>所需人力</label><span>PT 3 / OT 3 / ST 0</span></div>
        </div>
        <div class="fake-map" style="margin-bottom:12px">
          <div class="map-pin-home">📍</div>
          <div class="map-pin-hospital">🏥</div>
          <div class="map-distance">距醫院 5.8 km</div>
        </div>
        <div class="summary-box">CVA（腦中風）右側偏癱，日常生活功能恢復。</div>
        <div style="margin-top:12px">
          <button class="btn btn-green" style="width:100%;justify-content:center" onclick="closeModal('modal-detail-to1');openModal('modal-register-therapist')">立即報名此個案</button>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-detail-to1')">關閉</button>
      </div>
    </div>
  </div>


  <!-- 發布個案（主管）-->
  <div id="modal-publish" class="modal-overlay hidden">
    <div class="modal">
      <div class="modal-header">
        <div class="modal-title">📢 發布居家個案報名</div><button class="modal-close"
          onclick="closeModal('modal-publish')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-note blue">發布後，治療師將可在「可報名」頁面看到此個案並進行報名。</div>
        <div class="form-group"><label>個案</label><input class="form-control" value="陳志明・CVA（腦中風）" readonly
            style="background:var(--gray-50)"></div>
        <div class="form-group"><label>地址</label><input class="form-control" value="台北市大安區○○路○號（5.8km）" readonly
            style="background:var(--gray-50)"></div>
        <div class="form-grid">
          <div class="form-group">
            <label>所需 PT 人數</label>
            <select class="form-control">
              <option>1</option>
              <option selected>3</option>
              <option>6</option>
            </select>
          </div>
          <div class="form-group">
            <label>所需 OT 人數</label>
            <select class="form-control">
              <option>1</option>
              <option selected>3</option>
              <option>6</option>
            </select>
          </div>
          <div class="form-group">
            <label>所需 ST 人數</label>
            <select class="form-control">
              <option selected>0</option>
              <option>1</option>
              <option>3</option>
            </select>
          </div>
          <div class="form-group">
            <label>報名截止時間 <span class="required">*</span></label>
            <input class="form-control" type="datetime-local" value="2026-06-24T12:00">
          </div>
        </div>
        <div class="form-group">
          <label>備註（治療師注意事項）</label>
          <textarea class="form-control" placeholder="例：個案有呼吸問題，遇喘促需立即停止並通報…"></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-publish')">取消</button>
        <button class="btn btn-primary" onclick="closeModal('modal-publish')">確認發布</button>
      </div>
    </div>
  </div>

  <!-- 抽籤（主管）-->
  <div id="modal-lottery" class="modal-overlay hidden">
    <div class="modal">
      <div class="modal-header">
        <div class="modal-title">🎲 執行抽籤・黃建國</div><button class="modal-close"
          onclick="closeModal('modal-lottery')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-note amber">PT 報名人數（4人）超過需求（3人），需進行抽籤。OT 報名人數（2人）未超額，直接確認。</div>
        <div style="font-size:13px;font-weight:600;color:var(--gray-700);margin-bottom:10px">PT 報名名單（超額・需抽籤）</div>
        <div class="reg-list" style="margin-bottom:14px">
          <div class="reg-item"><span class="reg-name">陳建宏 <span class="th-tag th-pt">PT</span></span><span
              class="badge badge-amber">待抽籤</span></div>
          <div class="reg-item"><span class="reg-name">黃志豪 <span class="th-tag th-pt">PT</span></span><span
              class="badge badge-amber">待抽籤</span></div>
          <div class="reg-item"><span class="reg-name">王復健主管 <span class="th-tag th-mgr">主管</span></span><span
              class="badge badge-amber">待抽籤</span></div>
          <div class="reg-item"><span class="reg-name">林○○ <span class="th-tag th-pt">PT</span></span><span
              class="badge badge-amber">待抽籤</span></div>
        </div>
        <div style="font-size:13px;font-weight:600;color:var(--gray-700);margin-bottom:10px">OT 報名名單（直接確認）</div>
        <div class="reg-list">
          <div class="reg-item winner"><span class="reg-name">李佳穎 <span class="th-tag th-ot">OT</span></span><span
              class="badge badge-green">確認</span></div>
          <div class="reg-item winner"><span class="reg-name">張雅玲 <span class="th-tag th-ot">OT</span></span><span
              class="badge badge-green">確認</span></div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-lottery')">取消</button>
        <button class="btn btn-primary" onclick="closeModal('modal-lottery')">🎲 開始 PT 抽籤</button>
      </div>
    </div>
  </div>

  <!-- 治療師報名 -->
  <div id="modal-register-therapist" class="modal-overlay hidden">
    <div class="modal modal-lg">
      <div class="modal-header">
        <div class="modal-title">🏡 報名居家個案・陳志明</div><button class="modal-close"
          onclick="closeModal('modal-register-therapist')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-note amber">報名截止：2026/06/24 12:00・PT 目前 1/3 人・若超額將進行抽籤決定順序</div>
        <div class="info-row" style="margin-bottom:12px">
          <div class="info-item"><label>疾病別</label><span>CVA（腦中風）</span></div>
          <div class="info-item"><label>地址</label><span>台北市大安區（5.8km）</span></div>
          <div class="info-item"><label>所需人力</label><span>PT 3 / OT 3 / ST 0</span></div>
        </div>
        <div class="summary-box" style="margin-bottom:14px">CVA 右側偏癱，語言功能部分受損。目標：步態訓練、日常生活功能恢復。注意事項：個案家有樓梯，請攜帶必要輔具。
        </div>
        <div class="form-group">
          <label>您可前往的時段（可複選，抽中後再確認最終時段）</label>
          <div class="time-slot-grid">
            <div class="time-slot" onclick="this.classList.toggle('selected')">週一 午休</div>
            <div class="time-slot selected" onclick="this.classList.toggle('selected')">週二 下班後</div>
            <div class="time-slot" onclick="this.classList.toggle('selected')">週三 午休</div>
            <div class="time-slot" onclick="this.classList.toggle('selected')">週四 下班後</div>
            <div class="time-slot selected" onclick="this.classList.toggle('selected')">週五 下班後</div>
            <div class="time-slot" onclick="this.classList.toggle('selected')">週六 上午</div>
            <div class="time-slot taken">週日（不排）</div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-register-therapist')">取消</button>
        <button class="btn btn-green" onclick="closeModal('modal-register-therapist')">確認報名</button>
      </div>
    </div>
  </div>

  <!-- 簽到（治療師）-->
  <div id="modal-checkin" class="modal-overlay hidden">
    <div class="modal">
      <div class="modal-header">
        <div class="modal-title">✓ 標記已執行・黃建國</div><button class="modal-close"
          onclick="closeModal('modal-checkin')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-note blue">本次治療完成後請標記並上傳紙本治療紀錄照片，以供個管師核查。</div>
        <div class="form-grid">
          <div class="form-group">
            <label>治療日期</label>
            <input class="form-control" type="date" value="2026-06-25">
          </div>
          <div class="form-group">
            <label>實際時段</label>
            <input class="form-control" value="17:30 – 18:20">
          </div>
        </div>
        <div class="form-group">
          <label>上傳紙本治療紀錄照片 <span class="required">*</span></label>
          <div class="upload-zone">
            <div style="font-size:24px;margin-bottom:6px">📷</div>
            <div style="font-size:13px;font-weight:500">點擊拍照或上傳照片</div>
            <div style="font-size:11px;margin-top:3px;color:var(--gray-400)">支援 JPG、PNG，需包含治療師與家屬簽名</div>
          </div>
        </div>
        <div class="form-group">
          <label>本次治療備註</label>
          <textarea class="form-control" placeholder="填寫本次治療重點、個案狀況…"></textarea>
        </div>
        <div class="info-note amber">紙本治療紀錄需保留正本，照片僅作為系統備份用途。</div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-checkin')">取消</button>
        <button class="btn btn-primary" onclick="closeModal('modal-checkin')">✓ 確認已執行並上傳</button>
      </div>
    </div>
  </div>

  <!-- 暫停個案 -->
  <div id="modal-suspend" class="modal-overlay hidden">
    <div class="modal modal-sm" style="width:420px">
      <div class="modal-header">
        <div class="modal-title">暫停個案</div><button class="modal-close" onclick="closeModal('modal-suspend')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-note red">暫停後所有後續排班將取消，請確認暫停原因。</div>
        <div class="form-group">
          <label>暫停原因 <span class="required">*</span></label>
          <select class="form-control">
            <option>個案病情不適合繼續 PAC</option>
            <option>個案自行要求停止</option>
            <option>家屬要求暫停</option>
            <option>其他</option>
          </select>
        </div>
        <div class="form-group">
          <label>補充說明</label>
          <textarea class="form-control" placeholder="填寫補充說明（選填）…"></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-suspend')">取消</button>
        <button class="btn btn-danger" onclick="closeModal('modal-suspend')">確認暫停</button>
      </div>
    </div>
  </div>

  <!-- 獎金確認（治療師）-->
  <div id="modal-bonus-confirm" class="modal-overlay hidden">
    <div class="modal modal-sm" style="width:420px">
      <div class="modal-header">
        <div class="modal-title">✓ 確認獎金明細</div><button class="modal-close"
          onclick="closeModal('modal-bonus-confirm')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-note blue">確認後明細將送交復健主管彙整，如有疑問請在確認前聯繫個管師。</div>
        <div style="background:var(--gray-50);border-radius:8px;padding:14px;margin-bottom:12px">
          <div
            style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:13px;color:var(--gray-700)">
            <span>總執行次數</span><span style="font-weight:600">10 次</span></div>
          <div
            style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:13px;color:var(--gray-700)">
            <span>總公里數</span><span style="font-weight:600">65.8 km</span></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;font-weight:700;color:var(--blue)">
            <span>預估總獎金</span><span>NT$ 5,658</span></div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-bonus-confirm')">取消</button>
        <button class="btn btn-primary" onclick="closeModal('modal-bonus-confirm')">✓ 確認，送主管彙整</button>
      </div>
    </div>
  </div>

  <!-- 批價確認（個管師）-->
  <div id="modal-billing-confirm" class="modal-overlay hidden">
    <div class="modal">
      <div class="modal-header">
        <div class="modal-title">💰 批價確認・2026年 6月</div><button class="modal-close"
          onclick="closeModal('modal-billing-confirm')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-note amber">⚠️ 黃志豪尚未確認明細，批價後數值將以目前資料為準。</div>
        <table class="bonus-table" style="margin-bottom:14px">
          <thead>
            <tr>
              <th>治療師</th>
              <th>執行次數</th>
              <th>健保獎金</th>
              <th>車資補貼</th>
              <th>確認狀態</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>陳建宏（PT）</td>
              <td>2次</td>
              <td>NT$ 1,000</td>
              <td>NT$ 164</td>
              <td><span class="badge badge-green">已確認</span></td>
            </tr>
            <tr>
              <td>黃志豪（PT）</td>
              <td>10次</td>
              <td>NT$ 5,000</td>
              <td>NT$ 658</td>
              <td><span class="badge badge-amber">待確認</span></td>
            </tr>
            <tr>
              <td>李佳穎（OT）</td>
              <td>19次</td>
              <td>NT$ 9,500</td>
              <td>NT$ 2,332</td>
              <td><span class="badge badge-green">已確認</span></td>
            </tr>
            <tr style="font-weight:700;color:var(--blue)">
              <td colspan="2">合計</td>
              <td>NT$ 15,500</td>
              <td>NT$ 3,154</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div
          style="background:var(--blue-light);border-radius:8px;padding:13px;display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:14px;font-weight:700;color:var(--blue-dark)">本月總批價金額</span>
          <span style="font-size:20px;font-weight:700;color:var(--blue)">NT$ 18,654</span>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-billing-confirm')">取消</button>
        <button class="btn btn-primary" onclick="closeModal('modal-billing-confirm')">確認送批價</button>
      </div>
    </div>
  </div>

  <script>
    let currentRole = 'case';
    let prevView = 'view-case';

    function switchRole(role) {
      currentRole = role;
      ['case', 'manager', 'therapist'].forEach(r => {
        document.getElementById('rbtn-' + r).classList.toggle('active', r === role);
      });
      const views = ['view-case', 'view-manager', 'view-therapist', 'view-bonus'];
      views.forEach(v => document.getElementById(v).classList.add('hidden'));

      if (role === 'case') {
        document.getElementById('ua').className = 'user-avatar av-case';
        document.getElementById('ua').textContent = '林';
        document.getElementById('uname').textContent = '林美惠';
        document.getElementById('urole').textContent = '個案管理師';
        document.getElementById('btn-publish-wrap').classList.add('hidden');
        document.getElementById('btn-bonus-wrap').classList.remove('hidden');
        document.getElementById('view-case').classList.remove('hidden');
        prevView = 'view-case';
      } else if (role === 'manager') {
        document.getElementById('ua').className = 'user-avatar av-manager';
        document.getElementById('ua').textContent = '王';
        document.getElementById('uname').textContent = '王復健主管';
        document.getElementById('urole').textContent = '復健主管';
        document.getElementById('btn-publish-wrap').classList.remove('hidden');
        document.getElementById('btn-bonus-wrap').classList.remove('hidden');
        document.getElementById('view-manager').classList.remove('hidden');
        prevView = 'view-manager';
      } else {
        document.getElementById('ua').className = 'user-avatar av-therapist';
        document.getElementById('ua').textContent = '黃';
        document.getElementById('uname').textContent = '黃志豪';
        document.getElementById('urole').textContent = '物理治療師（PT）';
        document.getElementById('btn-publish-wrap').classList.add('hidden');
        document.getElementById('btn-bonus-wrap').classList.remove('hidden');
        document.getElementById('view-therapist').classList.remove('hidden');
        prevView = 'view-therapist';
      }
    }

    function switchToBonus() {
      ['view-case', 'view-manager', 'view-therapist'].forEach(v => document.getElementById(v).classList.add('hidden'));
      document.getElementById('view-bonus').classList.remove('hidden');
    }
    function switchBackFromBonus() {
      document.getElementById('view-bonus').classList.add('hidden');
      document.getElementById(prevView).classList.remove('hidden');
    }

    function toggleCase(id) {
      openModal('modal-detail-' + id);
    }

    function switchCaseTab(el, tab) {
      document.querySelectorAll('#view-case .tabs .tab').forEach(t => t.classList.remove('active'));
      el.classList.add('active');

      const cards = document.querySelectorAll('#case-list-all .case-card');
      cards.forEach(card => {
        const status = card.getAttribute('data-status') || '';
        if (tab === 'all') {
          card.classList.remove('hidden');
        } else if (tab === 'active' && status.includes('active')) {
          card.classList.remove('hidden');
        } else if (tab === 'billing' && status.includes('billing')) {
          card.classList.remove('hidden');
        } else if (tab === 'ending' && status.includes('ending')) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }
    function switchMgrTab(el, tab) {
      document.querySelectorAll('#view-manager .tabs .tab').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
      document.getElementById('mgr-overview').classList.toggle('hidden', tab !== 'mgr-overview');
      document.getElementById('mgr-publish').classList.toggle('hidden', tab !== 'mgr-publish');
    }
    function switchThTab(el, tab) {
      document.querySelectorAll('#view-therapist .tabs .tab').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
      ['th-active', 'th-open', 'th-bonus'].forEach(t => document.getElementById(t).classList.add('hidden'));
      document.getElementById(tab).classList.remove('hidden');
    }

    function openModal(id) { document.getElementById(id).classList.remove('hidden') }
    function closeModal(id) { document.getElementById(id).classList.add('hidden') }
    document.querySelectorAll('.modal-overlay').forEach(o => {
      o.addEventListener('click', function (e) { if (e.target === this) this.classList.add('hidden') });
    });

    // init
    switchRole('case');

  <\/script>
</body>

</html>`,vg=`<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PAC 評估量表填寫</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --blue:#2563EB;--blue-light:#EFF6FF;--blue-mid:#BFDBFE;--blue-dark:#1E40AF;
  --gray-50:#F8FAFC;--gray-100:#F1F5F9;--gray-200:#E2E8F0;--gray-300:#CBD5E1;
  --gray-400:#94A3B8;--gray-500:#64748B;--gray-600:#475569;--gray-700:#334155;--gray-900:#0F172A;
  --green:#16A34A;--green-light:#DCFCE7;--green-mid:#BBF7D0;
  --amber:#D97706;--amber-light:#FEF3C7;
  --red:#DC2626;--red-light:#FEE2E2;
  --purple:#7C3AED;--purple-light:#EDE9FE;
  --teal:#0D9488;--teal-light:#CCFBF1;
  --white:#FFFFFF;
}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans TC',sans-serif;background:var(--gray-50);color:var(--gray-900);height:100vh;display:flex;overflow:hidden;font-size:14px}

/* Sidebar */
.sidebar{width:192px;min-width:192px;background:var(--white);border-right:1px solid var(--gray-200);display:flex;flex-direction:column}
.sidebar-logo{padding:16px 16px 13px;border-bottom:1px solid var(--gray-200)}
.logo-text{font-size:14px;font-weight:700;color:var(--blue)}
.logo-sub{font-size:11px;color:var(--gray-400);margin-top:2px}
.sidebar-nav{padding:6px 0;flex:1}
.nav-item{display:flex;align-items:center;gap:8px;padding:9px 14px;font-size:13px;color:var(--gray-500);border-left:3px solid transparent;cursor:default}
.nav-item.active{background:var(--blue-light);color:var(--blue);font-weight:600;border-left-color:var(--blue)}
.nav-item.clickable{cursor:pointer}.nav-item.clickable:hover{background:var(--gray-50)}
.nav-item.disabled{opacity:.38;cursor:not-allowed}
.sidebar-user{margin-top: auto;padding:11px 14px;border-top:1px solid var(--gray-200)}
.user-row{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.user-avatar{width:28px;height:28px;border-radius:50%;background:var(--blue-light);color:var(--blue);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0}
.user-avatar.mgr{background:var(--amber-light);color:var(--amber)}
.user-avatar.sup{background:var(--purple-light);color:var(--purple)}
.user-avatar.pt{background:var(--blue-light);color:var(--blue)}
.user-avatar.ot{background:#FCE7F3;color:#9D174D}
.user-avatar.st{background:var(--green-light);color:var(--green)}
.user-avatar.other{background:var(--gray-100);color:var(--gray-600)}
.user-name{font-size:12px;font-weight:600;color:var(--gray-700)}
.user-role{font-size:11px;color:var(--gray-400)}
.role-switcher{position:relative}
.role-select{width:100%;padding:5px 24px 5px 8px;border:1px solid var(--gray-200);border-radius:6px;font-size:11px;font-weight:600;color:var(--gray-600);background:var(--white);cursor:pointer;appearance:none;outline:none}
.role-select:focus{border-color:var(--blue)}
.role-select-arrow{position:absolute;right:7px;top:50%;transform:translateY(-50%);font-size:9px;color:var(--gray-400);pointer-events:none}

/* Main layout */
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}
.topbar{background:var(--white);border-bottom:1px solid var(--gray-200);padding:0 20px;height:48px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.breadcrumb{font-size:12px;color:var(--gray-500)}
.topbar-right{display:flex;align-items:center;gap:10px}
.notif-badge{position:relative;display:inline-flex}
.notif-dot{position:absolute;top:-4px;right:-4px;width:16px;height:16px;border-radius:50%;background:var(--red);color:var(--white);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center}

/* Split pane */
.split-pane{flex:1;display:flex;overflow:hidden}
.left-pane{width:280px;min-width:280px;border-right:1px solid var(--gray-200);background:var(--white);display:flex;flex-direction:column;overflow:hidden}
.right-pane{flex:1;overflow-y:auto;background:var(--gray-50)}

/* Left pane */
.left-header{padding:12px 14px;border-bottom:1px solid var(--gray-200);flex-shrink:0}
.left-search{display:flex;align-items:center;gap:6px;background:var(--gray-50);border:1px solid var(--gray-200);border-radius:6px;padding:6px 10px;margin-bottom:8px}
.left-search input{border:none;background:transparent;font-size:12px;color:var(--gray-700);outline:none;flex:1}
.left-search input::placeholder{color:var(--gray-400)}
.filter-row{display:flex;gap:5px;flex-wrap:wrap}
.filter-chip{padding:3px 8px;border-radius:999px;font-size:11px;font-weight:500;border:1px solid var(--gray-200);background:var(--white);color:var(--gray-500);cursor:pointer;transition:all .15s}
.filter-chip.active{background:var(--blue);color:var(--white);border-color:var(--blue)}
.case-list{flex:1;overflow-y:auto;padding:6px 0}

/* Case item */
.case-item{padding:10px 14px;cursor:pointer;border-left:3px solid transparent;transition:all .15s}
.case-item:hover{background:var(--gray-50)}
.case-item.active{background:var(--blue-light);border-left-color:var(--blue)}
.case-name{font-size:13px;font-weight:600;color:var(--gray-900);margin-bottom:3px}
.case-meta{font-size:11px;color:var(--gray-500);margin-bottom:6px}
.case-status-row{display:flex;gap:3px;flex-wrap:wrap}
.status-pill{display:inline-flex;align-items:center;gap:2px;padding:2px 6px;border-radius:4px;font-size:10px;font-weight:600}
.status-done{background:var(--green-light);color:var(--green)}
.status-pending{background:var(--gray-100);color:var(--gray-500)}
.status-overdue{background:var(--red-light);color:var(--red)}
.status-filling{background:var(--amber-light);color:var(--amber)}

/* Buttons */
.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .15s;white-space:nowrap}
.btn-primary{background:var(--blue);color:var(--white)}.btn-primary:hover{background:var(--blue-dark)}
.btn-secondary{background:var(--white);color:var(--gray-700);border:1px solid var(--gray-300)}.btn-secondary:hover{background:var(--gray-50)}
.btn-ghost{background:transparent;color:var(--blue);border:1px solid var(--blue-mid)}.btn-ghost:hover{background:var(--blue-light)}
.btn-danger{background:var(--white);color:var(--red);border:1px solid #FECACA}.btn-danger:hover{background:var(--red-light)}
.btn-green{background:var(--white);color:var(--green);border:1px solid var(--green-mid)}.btn-green:hover{background:var(--green-light)}
.btn-amber{background:var(--white);color:var(--amber);border:1px solid #FDE68A}.btn-amber:hover{background:var(--amber-light)}
.btn-sm{padding:5px 10px;font-size:12px}.btn-xs{padding:3px 8px;font-size:11px}

/* Badges */
.badge{display:inline-flex;align-items:center;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:600}
.badge-blue{background:var(--blue-light);color:var(--blue)}
.badge-green{background:var(--green-light);color:var(--green)}
.badge-amber{background:var(--amber-light);color:var(--amber)}
.badge-gray{background:var(--gray-100);color:var(--gray-500)}
.badge-red{background:var(--red-light);color:var(--red)}
.badge-purple{background:var(--purple-light);color:var(--purple)}

/* Right pane: summary view */
.summary-view{padding:20px}
.page-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px}
.page-title{font-size:16px;font-weight:700;color:var(--gray-900)}
.page-subtitle{font-size:12px;color:var(--gray-500);margin-top:2px}
.section-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;margin-bottom:12px;overflow:hidden}
.sc-header{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--gray-100)}
.sc-title{font-size:13px;font-weight:700;color:var(--gray-700)}
.sc-body{padding:14px 16px}
.info-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}
.info-field label{font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;display:block;margin-bottom:3px}
.info-field span{font-size:13px;color:var(--gray-800);font-weight:500}

/* Assessment table (多田 style) */
.assess-table{width:100%;border-collapse:collapse;font-size:12px}
.assess-table th{padding:8px 10px;background:var(--gray-50);border-bottom:1px solid var(--gray-200);font-size:11px;font-weight:600;color:var(--gray-500);text-align:left;white-space:nowrap}
.assess-table td{padding:9px 10px;border-bottom:1px solid var(--gray-100);color:var(--gray-700);vertical-align:middle}
.assess-table tr:last-child td{border-bottom:none}
.assess-table tr.latest-row td{background:var(--blue-light)}
.assess-table tr.latest-row td:first-child{border-left:3px solid var(--blue)}
.assess-table td.score-pt{color:var(--blue);font-weight:600}
.assess-table td.score-ot{color:#9D174D;font-weight:600}
.assess-table td.score-st{color:var(--green);font-weight:600}
.row-action{display:flex;gap:5px;align-items:center}

/* Visit tabs (次別 navigator) */
.visit-nav{display:flex;gap:6px;padding:16px 16px 0;background:var(--white);border-bottom:1px solid var(--gray-200);flex-shrink:0}
.visit-tab{padding:8px 14px;font-size:12px;font-weight:500;color:var(--gray-500);cursor:pointer;border-bottom:2px solid transparent;position:relative;white-space:nowrap;transition:all .15s}
.visit-tab:hover{color:var(--gray-700)}
.visit-tab.active{color:var(--blue);font-weight:600;border-bottom-color:var(--blue)}
.visit-tab.done{color:var(--green)}
.visit-tab.overdue{color:var(--red)}
.visit-tab .tab-dot{position:absolute;top:4px;right:4px;width:6px;height:6px;border-radius:50%}
.tab-dot.red{background:var(--red)}
.tab-dot.green{background:var(--green)}
.tab-dot.gray{background:var(--gray-400)}

/* Fill view */
.fill-view{padding:20px;display:flex;flex-direction:column;gap:12px}
.fill-header{display:flex;align-items:flex-start;justify-content:space-between}
.fill-meta{font-size:11px;color:var(--gray-400);margin-top:2px}
.lock-banner{background:var(--amber-light);border:1px solid #FDE68A;border-radius:8px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:12px;color:var(--amber)}
.lock-timer{font-weight:700;font-size:13px;color:var(--amber)}

/* Role tabs inside fill view */
.role-tabs{display:flex;gap:4px;background:var(--white);border:1px solid var(--gray-200);border-radius:8px;padding:4px;width:fit-content}
.role-tab{padding:5px 12px;font-size:12px;font-weight:500;color:var(--gray-500);border-radius:5px;cursor:pointer;position:relative;transition:all .15s}
.role-tab:hover{color:var(--gray-700);background:var(--gray-50)}
.role-tab.active{background:var(--blue);color:var(--white)}
.role-tab .rdot{position:absolute;top:3px;right:3px;width:6px;height:6px;border-radius:50%;background:var(--red)}

/* Form */
.form-section{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;overflow:hidden}
.form-section-header{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--gray-100);background:var(--gray-50)}
.form-section-title{font-size:12px;font-weight:700;color:var(--gray-600);text-transform:uppercase;letter-spacing:.04em}
.form-section-body{padding:14px 16px;display:flex;flex-direction:column;gap:12px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.form-row-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}
.form-group{display:flex;flex-direction:column;gap:4px}
.form-group label{font-size:11px;font-weight:600;color:var(--gray-600)}
.form-group .prev-val{font-size:10px;color:var(--gray-400);margin-top:1px}
.form-group .prev-val span{color:var(--gray-500);font-weight:600}
.form-control{padding:7px 10px;border:1px solid var(--gray-300);border-radius:6px;font-size:12px;color:var(--gray-800);background:var(--white);outline:none;transition:border-color .15s}
.form-control:focus{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}
.form-control.error{border-color:var(--red);background:var(--red-light)}
select.form-control{cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%2394A3B8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;padding-right:24px}
textarea.form-control{resize:vertical;min-height:64px;line-height:1.6}
.required{color:var(--red)}
.missing-hint{font-size:11px;color:var(--red);margin-top:2px}

/* Score with comparison */
.score-compare-row{display:flex;align-items:center;gap:8px}
.score-compare-row input{flex:0 0 80px}
.prev-score-badge{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;background:var(--gray-100);border-radius:4px;font-size:11px;color:var(--gray-500)}
.prev-score-badge .label{font-size:10px}
.trend-up{color:var(--green);font-weight:700}
.trend-down{color:var(--red);font-weight:700}

/* Barthel table */
.barthel-table{width:100%;border-collapse:collapse;font-size:12px}
.barthel-table th{padding:7px 10px;background:var(--gray-50);border-bottom:1px solid var(--gray-200);font-size:11px;font-weight:600;color:var(--gray-500);text-align:left}
.barthel-table td{padding:8px 10px;border-bottom:1px solid var(--gray-100);vertical-align:middle}
.barthel-table tr:last-child td{border-bottom:none}
.barthel-table select{padding:4px 6px;border:1px solid var(--gray-300);border-radius:4px;font-size:11px;color:var(--gray-700);background:var(--white);cursor:pointer}
.barthel-total{display:flex;align-items:center;justify-content:flex-end;gap:10px;padding:10px 16px;background:var(--blue-light);border-top:1px solid var(--blue-mid)}
.barthel-total-label{font-size:12px;color:var(--blue-dark);font-weight:600}
.barthel-total-score{font-size:22px;font-weight:700;color:var(--blue)}
.prev-total{font-size:12px;color:var(--gray-500)}

/* Footer bar */
.fill-footer{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between}
.missing-count{font-size:12px;color:var(--red);display:flex;align-items:center;gap:5px}
.footer-actions{display:flex;gap:8px}

/* Modal */
.modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);display:flex;align-items:center;justify-content:center;z-index:100;backdrop-filter:blur(2px)}
.modal{background:var(--white);border-radius:12px;width:520px;max-width:92vw;max-height:90vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.15)}
.modal-lg{width:640px}
.modal-header{padding:16px 20px 13px;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.modal-title{font-size:15px;font-weight:700}
.modal-close{width:25px;height:25px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}
.modal-close:hover{background:var(--gray-200)}
.modal-body{padding:16px 20px;overflow-y:auto;flex:1}
.modal-footer{padding:13px 20px;border-top:1px solid var(--gray-200);display:flex;justify-content:flex-end;gap:7px;flex-shrink:0}
.info-note{font-size:12px;padding:10px 12px;border-radius:6px;margin-bottom:12px;line-height:1.6}
.info-note.blue{background:var(--blue-light);color:var(--blue-dark)}
.info-note.amber{background:var(--amber-light);color:var(--amber)}
.info-note.red{background:var(--red-light);color:var(--red)}
.info-note.green{background:var(--green-light);color:var(--green)}
.diff-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:10px}
.diff-col{background:var(--gray-50);border:1px solid var(--gray-200);border-radius:7px;padding:12px}
.diff-col-title{font-size:11px;font-weight:700;color:var(--gray-500);text-transform:uppercase;letter-spacing:.04em;margin-bottom:8px}
.diff-row{display:flex;justify-content:space-between;font-size:12px;padding:4px 0;border-bottom:1px solid var(--gray-100)}
.diff-row:last-child{border-bottom:none}
.diff-row .changed{color:var(--blue);font-weight:600}
.deadline-form{margin-top:10px}
.deadline-row{display:flex;align-items:center;gap:10px;padding:10px;border:1px solid var(--gray-200);border-radius:7px;margin-bottom:8px;cursor:pointer}
.deadline-row input[type=radio]{accent-color:var(--blue)}
.deadline-row label{font-size:12px;color:var(--gray-700);cursor:pointer;flex:1}
.deadline-row select{padding:4px 8px;border:1px solid var(--gray-300);border-radius:5px;font-size:12px;color:var(--gray-700);background:var(--white)}

.hidden{display:none!important}
.divider{height:1px;background:var(--gray-100);margin:10px 0}

/* Therapist tags */
.th-tag{display:inline-flex;align-items:center;padding:2px 7px;border-radius:4px;font-size:11px;font-weight:700}
.th-pt{background:#DBEAFE;color:#1D4ED8}
.th-ot{background:#FCE7F3;color:#9D174D}
.th-st{background:var(--green-light);color:var(--green)}
.th-doc{background:var(--amber-light);color:var(--amber)}
.th-nur{background:var(--teal-light);color:var(--teal)}
.th-pha{background:var(--purple-light);color:var(--purple)}
.th-nut{background:#FEF3C7;color:#92400E}

/* Remind list */
.remind-list{display:flex;flex-direction:column;gap:8px}
.remind-item{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border:1px solid var(--gray-200);border-radius:7px}
.remind-item-left{display:flex;align-items:center;gap:8px}
.remind-item-name{font-size:12px;font-weight:600;color:var(--gray-800)}
.remind-item-status{font-size:11px;color:var(--gray-500)}
</style>
</head>
<body>

<!-- SIDEBAR -->
<aside class="sidebar">
<!--
  <div class="sidebar-logo">
    <div class="logo-text">PAC 管理系統</div>
    <div class="logo-sub">急性後期照護</div>
  </div>
  <nav class="sidebar-nav">
    <div class="nav-item disabled">🏠 個人儀表板</div>
    <div class="nav-item disabled">📋 個案管理</div>
    <div class="nav-item disabled">🛏 病床管理</div>
    <div class="nav-item disabled">📅 班表總覽頁</div>
    <div class="nav-item disabled">🏡 居家排班管理</div>
    <div class="nav-item active">📊 評估量表</div>
    <div class="nav-item disabled">💪 復健紀錄</div>
    <div class="nav-item disabled">📤 指標匯出</div>
  </nav>
-->
  <div class="sidebar-user">
    <div class="user-row">
      <div class="user-avatar mgr" id="user-avatar">林</div>
      <div>
        <div class="user-name" id="user-name">林美惠</div>
        <div class="user-role" id="user-role-label">個案管理師</div>
      </div>
    </div>
    <div class="role-switcher">
      <select class="role-select" id="role-select" onchange="switchRole(this.value)">
        <option value="mgr">個管師</option>
        <option value="sup">復健主管</option>
        <option value="pt">PT（物理治療師）</option>
        <option value="ot">OT（職能治療師）</option>
        <option value="st">ST（語言治療師）</option>
        <option value="other">其他醫事人員</option>
      </select>
      <span class="role-select-arrow">▾</span>
    </div>
  </div>
</aside>

<!-- MAIN -->
<div class="main">
  <div class="topbar">
    <div class="breadcrumb" id="bc">評估量表</div>
    <div class="topbar-right">
      <span style="font-size:11px;color:var(--gray-400)">2026/06/24</span>
      <!-- 個管師/主管才看到 -->
      <div id="topbar-remind" class="notif-badge">
        <button class="btn btn-secondary btn-sm" onclick="openModal('modal-remind')">📣 待填提醒</button>
        <span class="notif-dot" id="remind-dot">3</span>
      </div>
      <div id="topbar-review" class="notif-badge hidden">
        <button class="btn btn-secondary btn-sm" onclick="openModal('modal-review')">📝 待審核變更</button>
        <span class="notif-dot">2</span>
      </div>
      <button id="topbar-deadline" class="btn btn-ghost btn-sm" onclick="openModal('modal-deadline')">⚙ 期限設定</button>
    </div>
  </div>

  <div class="split-pane">
    <!-- LEFT PANE: 個案清單 -->
    <div class="left-pane">
      <div class="left-header">
        <div class="left-search">
          <span style="color:var(--gray-400);font-size:13px">🔍</span>
          <input type="text" placeholder="搜尋個案姓名">
        </div>
        <div class="filter-row">
          <div class="filter-chip active" onclick="switchFilter(this)">全部</div>
          <div class="filter-chip" onclick="switchFilter(this)">住院</div>
          <div class="filter-chip" onclick="switchFilter(this)">日照</div>
          <div class="filter-chip" onclick="switchFilter(this)">居家</div>
        </div>
      </div>
      <div class="case-list" id="case-list">
        <!-- 個案清單由 JS 渲染 -->
      </div>
    </div>

    <!-- RIGHT PANE -->
    <div class="right-pane" id="right-pane">
      <!-- 預設空狀態 -->
      <div id="view-empty" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--gray-400);gap:10px">
        <div style="font-size:40px">📋</div>
        <div style="font-size:14px;font-weight:600">選擇左側個案以查看評估紀錄</div>
        <div style="font-size:12px">共 5 位個案待填寫</div>
      </div>

      <!-- 個管師/主管：評估總表 -->
      <div id="view-summary" class="hidden">
        <div class="summary-view">
          <div class="page-header">
            <div>
              <div class="page-title" id="sum-name">陳建國</div>
              <div class="page-subtitle" id="sum-meta">住院・A301 床・CVA（腦中風）</div>
            </div>
            <div style="display:flex;gap:6px">
              <button class="btn btn-secondary btn-sm" onclick="openModal('modal-remind-single')">📣 發送提醒</button>
              <button class="btn btn-ghost btn-sm" onclick="openModal('modal-deadline')">⚙ 期限設定</button>
            </div>
          </div>

          <!-- 病患基本資料 -->
          <div class="section-card">
            <div class="sc-header"><div class="sc-title">病患基本資料</div></div>
            <div class="sc-body">
              <div class="info-grid">
                <div class="info-field"><label>上游醫院</label><span>臺大醫院</span></div>
                <div class="info-field"><label>入院日期</label><span>2026/06/10</span></div>
                <div class="info-field"><label>預計出院</label><span>2026/09/02</span></div>
                <div class="info-field"><label>疾病別</label><span>CVA（腦中風）</span></div>
                <div class="info-field"><label>主治醫師</label><span>吳宗達 醫師</span></div>
                <div class="info-field"><label>療程週期</label><span>12 週（第 2 週）</span></div>
              </div>
              <div style="margin-top:10px;padding:10px;background:var(--gray-50);border-radius:6px;font-size:12px;color:var(--gray-600);line-height:1.7">
                <strong style="color:var(--gray-700)">醫師診斷：</strong>Left MCA infarction with right hemiparesis. Patient suitable for PAC rehabilitation program.
              </div>
            </div>
          </div>

          <!-- 評估次別一覽（多田風格） -->
          <div class="section-card">
            <div class="sc-header">
              <div class="sc-title">評估紀錄總表</div>
              <span style="font-size:11px;color:var(--gray-400)">最新一筆以藍底標示</span>
            </div>
            <table class="assess-table">
              <thead>
                <tr>
                  <th>次別</th>
                  <th>紀錄日期</th>
                  <th>病程週數</th>
                  <th><span class="th-tag th-pt">PT</span></th>
                  <th><span class="th-tag th-ot">OT</span></th>
                  <th><span class="th-tag th-st">ST</span></th>
                  <th>狀態</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>初評</strong></td>
                  <td>2026/06/11</td>
                  <td>第 1 週</td>
                  <td class="score-pt">Br.III</td>
                  <td class="score-ot">30分</td>
                  <td class="score-st">輕度</td>
                  <td><span class="badge badge-green">✓ 完成</span></td>
                  <td><div class="row-action"><button class="btn btn-ghost btn-xs" onclick="openFillView('初評',true)">查看</button></div></td>
                </tr>
                <tr class="latest-row">
                  <td><strong>複評 1</strong> <span style="font-size:9px;color:var(--blue);font-weight:700">最新</span></td>
                  <td>2026/06/25 <span style="font-size:10px;color:var(--amber)">（明日）</span></td>
                  <td>第 3 週</td>
                  <td class="score-pt"><span class="badge badge-amber">待填</span></td>
                  <td class="score-ot"><span class="badge badge-amber">待填</span></td>
                  <td class="score-st"><span class="badge badge-green">✓ 完成</span></td>
                  <td><span class="badge badge-amber">填寫中</span></td>
                  <td><div class="row-action"><button class="btn btn-ghost btn-xs" onclick="openFillView('複評 1',false)">查看</button></div></td>
                </tr>
                <tr>
                  <td><strong>複評 2</strong></td>
                  <td>2026/07/16</td>
                  <td>第 6 週</td>
                  <td class="score-pt">—</td>
                  <td class="score-ot">—</td>
                  <td class="score-st">—</td>
                  <td><span class="badge badge-gray">未到期</span></td>
                  <td>—</td>
                </tr>
                <tr>
                  <td><strong>複評 3</strong></td>
                  <td>2026/08/06</td>
                  <td>第 9 週</td>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td><span class="badge badge-gray">未到期</span></td>
                  <td>—</td>
                </tr>
                <tr>
                  <td><strong>結案</strong></td>
                  <td>2026/09/01</td>
                  <td>第 12 週</td>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td><span class="badge badge-gray">未到期</span></td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 各角色填寫狀況 -->
          <div class="section-card">
            <div class="sc-header">
              <div class="sc-title">複評 1 — 各角色填寫狀況</div>
              <span class="badge badge-amber">2 人待填</span>
            </div>
            <div class="sc-body" style="padding:0">
              <div class="remind-list" style="padding:12px 16px">
                <div class="remind-item">
                  <div class="remind-item-left">
                    <span class="th-tag th-pt">PT</span>
                    <div>
                      <div class="remind-item-name">黃志豪</div>
                      <div class="remind-item-status">待填 · 應填日期 2026/06/25</div>
                    </div>
                  </div>
                  <span class="badge badge-amber">待填</span>
                </div>
                <div class="remind-item">
                  <div class="remind-item-left">
                    <span class="th-tag th-ot">OT</span>
                    <div>
                      <div class="remind-item-name">李佳穎</div>
                      <div class="remind-item-status">待填 · 應填日期 2026/06/25</div>
                    </div>
                  </div>
                  <span class="badge badge-amber">待填</span>
                </div>
                <div class="remind-item">
                  <div class="remind-item-left">
                    <span class="th-tag th-st">ST</span>
                    <div>
                      <div class="remind-item-name">吳怡君</div>
                      <div class="remind-item-status">已送出 · 2026/06/24 14:30</div>
                    </div>
                  </div>
                  <span class="badge badge-green">✓ 完成</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 治療師/填寫視圖 -->
      <div id="view-fill" class="hidden" style="display:flex;flex-direction:column;height:100%">
        <!-- 次別導覽 -->
        <div class="visit-nav" id="visit-nav">
          <div class="visit-tab done" onclick="openFillView('初評',true,this)">
            初評
            <span class="tab-dot green"></span>
          </div>
          <div class="visit-tab active" onclick="openFillView('複評 1',false,this)">
            複評 1
            <span class="tab-dot red"></span>
          </div>
          <div class="visit-tab" onclick="openFillView('複評 2',false,this)">複評 2</div>
          <div class="visit-tab" onclick="openFillView('複評 3',false,this)">複評 3</div>
          <div class="visit-tab" onclick="openFillView('結案',false,this)">結案</div>
        </div>

        <!-- 鎖定 banner（他人填寫中，只有治療師視角看到） -->
        <div id="lock-banner" class="hidden" style="padding:10px 20px;flex-shrink:0">
          <div class="lock-banner">
            <div>
              <strong>🔒 黃志豪（PT）正在填寫中</strong>
              <div style="margin-top:2px;font-size:11px">開始時間：14:15・<span class="lock-timer" id="lock-countdown">剩餘 08:42</span> 自動解鎖</div>
            </div>
            <button class="btn btn-amber btn-sm" onclick="openModal('modal-lock')">查看詳情</button>
          </div>
        </div>

        <!-- 填寫主體 -->
        <div style="flex:1;overflow-y:auto">
          <div class="fill-view">
            <div class="fill-header">
              <div>
                <div class="page-title" id="fill-case-name">陳建國 ─ <span id="fill-visit-label">複評 1</span></div>
                <div class="fill-meta" id="fill-meta">第 3 週・應填日期 2026/06/25・CVA（腦中風）</div>
              </div>
              <div style="display:flex;gap:6px" id="fill-header-actions">
                <!-- 個管師唯讀視角 -->
                <div id="mgr-fill-actions">
                  <span class="badge badge-gray" style="font-size:12px">👁 唯讀模式</span>
                </div>
                <!-- 治療師可填寫視角 -->
                <div id="th-fill-actions" class="hidden">
                  <button class="btn btn-secondary btn-sm" onclick="openModal('modal-change')">申請修改</button>
                </div>
              </div>
            </div>

            <!-- 角色 tab（個管師和主管看得到，治療師只看自己） -->
            <div id="role-tab-row" class="role-tabs">
              <div class="role-tab active" onclick="switchRoleTab(this,'pt')">
                PT
                <span class="rdot" id="rdot-pt"></span>
              </div>
              <div class="role-tab" onclick="switchRoleTab(this,'ot')">
                OT
                <span class="rdot" id="rdot-ot"></span>
              </div>
              <div class="role-tab" onclick="switchRoleTab(this,'st')">ST</div>
              <div class="role-tab" onclick="switchRoleTab(this,'doc')">醫師</div>
              <div class="role-tab" onclick="switchRoleTab(this,'nur')">護理師</div>
              <div class="role-tab" onclick="switchRoleTab(this,'pha')">藥師</div>
              <div class="role-tab" onclick="switchRoleTab(this,'nut')">營養師</div>
            </div>

            <!-- PT 表單 -->
            <div id="form-pt">
              <div class="form-section">
                <div class="form-section-header"><div class="form-section-title">Brunnstrom Stage</div></div>
                <div class="form-section-body">
                  <div class="form-row">
                    <div class="form-group">
                      <label>Br. Stage（上肢）<span class="required">*</span></label>
                      <div class="prev-val">上次：<span>Stage III</span></div>
                      <div class="score-compare-row">
                        <select class="form-control error" id="pt-br-upper">
                          <option value="">請選擇</option>
                          <option>Stage I</option><option>Stage II</option><option selected>Stage III</option><option>Stage IV</option><option>Stage V</option><option>Stage VI</option>
                        </select>
                        <div class="prev-score-badge"><span class="label">上次</span> Stage III</div>
                      </div>
                      <div class="missing-hint" id="err-br-upper">⚠ 必填欄位</div>
                    </div>
                    <div class="form-group">
                      <label>Br. Stage（下肢）<span class="required">*</span></label>
                      <div class="score-compare-row">
                        <select class="form-control" id="pt-br-lower">
                          <option>Stage I</option><option>Stage II</option><option>Stage III</option><option selected>Stage IV</option><option>Stage V</option><option>Stage VI</option>
                        </select>
                        <div class="prev-score-badge"><span class="label">上次</span> Stage III <span class="trend-up">↑</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-section">
                <div class="form-section-header"><div class="form-section-title">Functional Status</div></div>
                <div class="form-section-body">
                  <div class="form-row-3">
                    <div class="form-group">
                      <label>Rolling</label>
                      <div class="score-compare-row"><select class="form-control"><option>Independent</option><option selected>Min A</option><option>Mod A</option><option>Max A</option><option>Dependent</option></select></div>
                      <div class="prev-val">上次：<span>Mod A</span> <span class="trend-up">↑</span></div>
                    </div>
                    <div class="form-group">
                      <label>Supine to Sit</label>
                      <select class="form-control"><option>Independent</option><option>Min A</option><option selected>Mod A</option><option>Max A</option><option>Dependent</option></select>
                      <div class="prev-val">上次：<span>Mod A</span></div>
                    </div>
                    <div class="form-group">
                      <label>Sit to Stand</label>
                      <select class="form-control"><option>Independent</option><option>Min A</option><option>Mod A</option><option selected>Max A</option><option>Dependent</option></select>
                      <div class="prev-val">上次：<span>Max A</span></div>
                    </div>
                    <div class="form-group">
                      <label>Transfer</label>
                      <select class="form-control"><option>Independent</option><option>Min A</option><option selected>Mod A</option><option>Max A</option><option>Dependent</option></select>
                      <div class="prev-val">上次：<span>Max A</span> <span class="trend-up">↑</span></div>
                    </div>
                    <div class="form-group">
                      <label>Balance（坐）</label>
                      <select class="form-control"><option>Normal</option><option selected>Fair</option><option>Poor</option><option>None</option></select>
                      <div class="prev-val">上次：<span>Poor</span> <span class="trend-up">↑</span></div>
                    </div>
                    <div class="form-group">
                      <label>Ambulation</label>
                      <select class="form-control"><option>Independent</option><option>Min A</option><option selected>Mod A</option><option>Max A</option><option>Non-ambulatory</option></select>
                      <div class="prev-val">上次：<span>Max A</span> <span class="trend-up">↑</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-section">
                <div class="form-section-header"><div class="form-section-title">MMT & ROM（右側）</div></div>
                <div class="form-section-body">
                  <div class="form-row">
                    <div class="form-group">
                      <label>MMT 上肢</label>
                      <div class="score-compare-row">
                        <select class="form-control"><option>0</option><option>1</option><option>2</option><option selected>3</option><option>4</option><option>5</option></select>
                        <div class="prev-score-badge"><span class="label">上次</span> 2 <span class="trend-up">↑</span></div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label>MMT 下肢</label>
                      <div class="score-compare-row">
                        <select class="form-control"><option>0</option><option>1</option><option>2</option><option>3</option><option selected>4</option><option>5</option></select>
                        <div class="prev-score-badge"><span class="label">上次</span> 3 <span class="trend-up">↑</span></div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label>ROM 肩關節（屈曲）</label>
                      <div class="score-compare-row">
                        <input class="form-control" type="text" value="110°" style="width:80px">
                        <div class="prev-score-badge"><span class="label">上次</span> 90°</div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label>ROM 髖關節（屈曲）</label>
                      <div class="score-compare-row">
                        <input class="form-control" type="text" value="95°" style="width:80px">
                        <div class="prev-score-badge"><span class="label">上次</span> 80°</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-section">
                <div class="form-section-header"><div class="form-section-title">現況敘述</div></div>
                <div class="form-section-body">
                  <div class="form-group">
                    <label>PT 現況敘述 <span class="required">*</span></label>
                    <textarea class="form-control" rows="4">個案右側偏癱，目前可在監督下進行短距離步行，步態不穩定，需持續加強下肢肌力及平衡訓練。上肢功能有進步趨勢，Br. Stage 維持 III 但精細動作有改善。</textarea>
                  </div>
                </div>
              </div>
            </div>

            <!-- OT 表單 -->
            <div id="form-ot" class="hidden">
              <div class="form-section">
                <div class="form-section-header">
                  <div class="form-section-title">ADL Barthel Index</div>
                  <div class="barthel-total">
                    <span class="prev-total">上次：30分</span>
                    <span class="barthel-total-label">目前總分</span>
                    <span class="barthel-total-score" id="barthel-score">45</span>
                    <span style="font-size:12px;color:var(--blue)">/100 <span class="trend-up">↑</span></span>
                  </div>
                </div>
                <table class="barthel-table">
                  <thead><tr><th>項目</th><th>分類</th><th>分數</th><th>上次</th></tr></thead>
                  <tbody>
                    <tr><td>進食</td><td>Self-Care</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 完全依賴</option><option value="5">5 - 需協助</option><option value="10" selected>10 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">5分</span></td></tr>
                    <tr><td>洗澡</td><td>Self-Care</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 完全依賴</option><option value="5" selected>5 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">0分</span></td></tr>
                    <tr><td>修飾</td><td>Self-Care</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 需協助</option><option value="5" selected>5 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">0分</span></td></tr>
                    <tr><td>穿脫衣物</td><td>Self-Care</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 完全依賴</option><option value="5" selected>5 - 需協助</option><option value="10">10 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">5分</span></td></tr>
                    <tr><td>大便控制</td><td>Sphincter</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 失禁</option><option value="5" selected>5 - 偶爾失禁</option><option value="10">10 - 自制</option></select></td><td><span style="color:var(--gray-400);font-size:11px">5分</span></td></tr>
                    <tr><td>小便控制</td><td>Sphincter</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 失禁</option><option value="5" selected>5 - 偶爾失禁</option><option value="10">10 - 自制</option></select></td><td><span style="color:var(--gray-400);font-size:11px">5分</span></td></tr>
                    <tr><td>如廁</td><td>Transfers</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 完全依賴</option><option value="5" selected>5 - 需協助</option><option value="10">10 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">0分</span></td></tr>
                    <tr><td>床椅轉位</td><td>Transfers</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 完全依賴</option><option value="5">5 - 大量協助</option><option value="10" selected>10 - 少量協助</option><option value="15">15 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">5分</span></td></tr>
                    <tr><td>行走</td><td>Locomotion</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0">0 - 完全依賴</option><option value="5" selected>5 - 需輪椅</option><option value="10">10 - 少量協助</option><option value="15">15 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">0分</span></td></tr>
                    <tr><td>爬樓梯</td><td>Locomotion</td><td><select class="form-control" style="padding:4px 6px;font-size:11px"><option value="0" selected>0 - 無法</option><option value="5">5 - 需協助</option><option value="10">10 - 獨立</option></select></td><td><span style="color:var(--gray-400);font-size:11px">0分</span></td></tr>
                  </tbody>
                </table>
              </div>
              <div class="form-section">
                <div class="form-section-header"><div class="form-section-title">現況敘述</div></div>
                <div class="form-section-body">
                  <div class="form-group">
                    <label>OT 現況敘述 <span class="required">*</span></label>
                    <textarea class="form-control" rows="4" placeholder="請填寫職能評估現況敘述..."></textarea>
                    <div class="missing-hint">⚠ 必填欄位</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- ST 表單 -->
            <div id="form-st" class="hidden">
              <div class="form-section">
                <div class="form-section-header"><div class="form-section-title">Speech & Language Function</div></div>
                <div class="form-section-body">
                  <div class="form-row-3">
                    <div class="form-group"><label>Aphasia</label><select class="form-control"><option>無</option><option selected>輕度</option><option>中度</option><option>重度</option><option>無法測</option></select><div class="prev-val">上次：<span>中度</span> <span class="trend-up">↑</span></div></div>
                    <div class="form-group"><label>Naming</label><select class="form-control"><option>正常</option><option selected>輕度障礙</option><option>中度障礙</option><option>重度障礙</option><option>無法測</option></select><div class="prev-val">上次：<span>中度障礙</span> <span class="trend-up">↑</span></div></div>
                    <div class="form-group"><label>Fluency</label><select class="form-control"><option>正常</option><option selected>輕度障礙</option><option>中度障礙</option><option>重度障礙</option></select><div class="prev-val">上次：<span>輕度障礙</span></div></div>
                    <div class="form-group"><label>Repetition</label><select class="form-control"><option>正常</option><option selected>輕度障礙</option><option>中度障礙</option><option>重度障礙</option></select><div class="prev-val">上次：<span>中度障礙</span> <span class="trend-up">↑</span></div></div>
                    <div class="form-group"><label>Comprehension</label><select class="form-control"><option>正常</option><option selected>輕度障礙</option><option>中度障礙</option><option>重度障礙</option></select><div class="prev-val">上次：<span>輕度障礙</span></div></div>
                    <div class="form-group"><label>Dysarthria</label><select class="form-control"><option>無</option><option selected>輕度</option><option>中度</option><option>重度</option></select><div class="prev-val">上次：<span>中度</span> <span class="trend-up">↑</span></div></div>
                    <div class="form-group"><label>Apraxia</label><select class="form-control"><option selected>無</option><option>輕度</option><option>中度</option><option>重度</option></select><div class="prev-val">上次：<span>無</span></div></div>
                  </div>
                </div>
              </div>
              <div class="form-section">
                <div class="form-section-header"><div class="form-section-title">Swallowing Function</div></div>
                <div class="form-section-body">
                  <div class="form-row-3">
                    <div class="form-group"><label>NG Tube</label><select class="form-control"><option selected>無</option><option>有</option></select></div>
                    <div class="form-group"><label>Dysphagia</label><select class="form-control"><option>無</option><option selected>輕度</option><option>中度</option><option>重度</option></select><div class="prev-val">上次：<span>中度</span> <span class="trend-up">↑</span></div></div>
                    <div class="form-group"><label>Choking</label><select class="form-control"><option>無</option><option selected>偶爾</option><option>常常</option></select></div>
                    <div class="form-group"><label>Drooling</label><select class="form-control"><option selected>無</option><option>輕度</option><option>明顯</option></select></div>
                    <div class="form-group"><label>口腔功能</label><select class="form-control"><option>正常</option><option selected>輕度障礙</option><option>中度障礙</option><option>重度障礙</option></select></div>
                  </div>
                </div>
              </div>
              <div class="form-section">
                <div class="form-section-header"><div class="form-section-title">現況敘述</div></div>
                <div class="form-section-body">
                  <div class="form-group">
                    <label>ST 現況敘述 <span class="required">*</span></label>
                    <textarea class="form-control" rows="4">個案語言功能已由中度改善至輕度失語症，命名能力有進步，但流利度仍需加強。吞嚥功能改善，由中度吞嚥困難進步至輕度，建議仍以糊狀飲食為主。</textarea>
                  </div>
                </div>
              </div>
            </div>

            <!-- 醫師/護理師/藥師/營養師（其他醫事人員）簡表 -->
            <div id="form-doc" class="hidden">
              <div class="form-section">
                <div class="form-section-header"><div class="form-section-title">醫師評估</div></div>
                <div class="form-section-body">
                  <div class="form-group"><label>醫囑方向 <span class="required">*</span></label><textarea class="form-control" rows="3" placeholder="請填寫醫囑及治療方向..."></textarea></div>
                  <div class="form-group"><label>診斷更新</label><input class="form-control" type="text" placeholder="如有更新診斷請填寫"></div>
                  <div class="form-group"><label>備註</label><textarea class="form-control" rows="2" placeholder="其他備註"></textarea></div>
                </div>
              </div>
            </div>
            <div id="form-nur" class="hidden">
              <div class="form-section">
                <div class="form-section-header"><div class="form-section-title">護理評估</div></div>
                <div class="form-section-body">
                  <div class="form-row"><div class="form-group"><label>生命徵象</label><input class="form-control" value="BP 128/78, HR 72, SpO2 97%"></div><div class="form-group"><label>管路狀態</label><select class="form-control"><option selected>無管路</option><option>鼻胃管</option><option>導尿管</option><option>靜脈注射</option></select></div></div>
                  <div class="form-group"><label>護理紀錄 <span class="required">*</span></label><textarea class="form-control" rows="3" placeholder="請填寫護理評估紀錄..."></textarea></div>
                </div>
              </div>
            </div>
            <div id="form-pha" class="hidden">
              <div class="form-section">
                <div class="form-section-header"><div class="form-section-title">藥師評估</div></div>
                <div class="form-section-body">
                  <div class="form-group"><label>用藥評估 <span class="required">*</span></label><textarea class="form-control" rows="3" placeholder="請填寫用藥評估內容..."></textarea></div>
                  <div class="form-group"><label>藥物交互作用</label><select class="form-control"><option selected>無</option><option>有（請說明）</option></select></div>
                  <div class="form-group"><label>建議</label><textarea class="form-control" rows="2" placeholder="藥師建議"></textarea></div>
                </div>
              </div>
            </div>
            <div id="form-nut" class="hidden">
              <div class="form-section">
                <div class="form-section-header"><div class="form-section-title">營養師評估</div></div>
                <div class="form-section-body">
                  <div class="form-row"><div class="form-group"><label>體重</label><input class="form-control" value="68 kg"></div><div class="form-group"><label>BMI</label><input class="form-control" value="23.2" readonly style="background:var(--gray-50)"></div></div>
                  <div class="form-group"><label>飲食型態</label><select class="form-control"><option>一般飲食</option><option selected>糊狀飲食</option><option>流質飲食</option><option>管灌飲食</option></select></div>
                  <div class="form-group"><label>營養評估 <span class="required">*</span></label><textarea class="form-control" rows="3" placeholder="請填寫營養評估紀錄..."></textarea></div>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="fill-footer" id="fill-footer">
              <div class="missing-count" id="missing-count">
                ⚠ 尚有 <strong style="margin:0 3px">2</strong> 個必填欄位未完成
              </div>
              <div class="footer-actions" id="footer-actions">
                <button class="btn btn-secondary" onclick="alert('已暫存')">暫存</button>
                <button class="btn btn-primary" onclick="alert('送出成功！')">送出評估</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ══ MODALS ══ -->

<!-- Modal 1: 鎖定提示 -->
<div id="modal-lock" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title">🔒 他人填寫中</div>
      <button class="modal-close" onclick="closeModal('modal-lock')">✕</button>
    </div>
    <div class="modal-body">
      <div class="info-note amber">為避免資料覆蓋，每份評估表一次只能由一人填寫。</div>
      <div style="background:var(--gray-50);border-radius:8px;padding:16px;margin-bottom:12px">
        <div style="font-size:13px;font-weight:700;color:var(--gray-800);margin-bottom:8px">目前填寫者</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <span class="th-tag th-pt" style="font-size:13px;padding:4px 10px">PT</span>
          <div>
            <div style="font-weight:600">黃志豪（物理治療師）</div>
            <div style="font-size:11px;color:var(--gray-500)">開始填寫：14:15・今日</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:10px;background:var(--amber-light);border-radius:6px">
          <span style="font-size:20px">⏱</span>
          <div>
            <div style="font-size:12px;color:var(--amber);font-weight:600">自動解鎖倒數</div>
            <div class="lock-timer">08:42</div>
          </div>
        </div>
      </div>
      <div style="font-size:12px;color:var(--gray-500)">你目前可以<strong>查看</strong>此份評估，但無法編輯。送出後將自動解鎖，你可以再開始填寫。</div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-lock')">知道了</button>
    </div>
  </div>
</div>

<!-- Modal 2: 修改申請（治療師） -->
<div id="modal-change" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title">✏️ 申請修改評估</div>
      <button class="modal-close" onclick="closeModal('modal-change')">✕</button>
    </div>
    <div class="modal-body">
      <div class="info-note blue">送出後的評估須由復健主管審核後才能修改。請說明修改原因。</div>
      <div class="form-group" style="margin-bottom:12px">
        <label style="font-size:12px;font-weight:600;color:var(--gray-600)">申請修改的次別</label>
        <input class="form-control" value="複評 1（2026/06/25）" readonly style="background:var(--gray-50)">
      </div>
      <div class="form-group" style="margin-bottom:12px">
        <label style="font-size:12px;font-weight:600;color:var(--gray-600)">修改角色</label>
        <input class="form-control" value="PT（黃志豪）" readonly style="background:var(--gray-50)">
      </div>
      <div class="form-group">
        <label style="font-size:12px;font-weight:600;color:var(--gray-600)">修改原因 <span class="required">*</span></label>
        <textarea class="form-control" rows="4" placeholder="請說明需要修改的原因，例如：填寫錯誤、臨床評估後有所調整..."></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-change')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-change');alert('已送出修改申請，等待復健主管審核')">送出申請</button>
    </div>
  </div>
</div>

<!-- Modal 3: 審核變更（主管/個管師） -->
<div id="modal-review" class="modal-overlay hidden">
  <div class="modal modal-lg">
    <div class="modal-header">
      <div class="modal-title">📝 審核修改申請</div>
      <button class="modal-close" onclick="closeModal('modal-review')">✕</button>
    </div>
    <div class="modal-body">
      <div style="margin-bottom:14px;padding:12px;background:var(--gray-50);border-radius:8px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
          <div style="font-weight:600;font-size:13px">陳建國・複評 1・<span class="th-tag th-pt">PT</span></div>
          <span class="badge badge-amber">待審核</span>
        </div>
        <div style="font-size:12px;color:var(--gray-500)">申請者：黃志豪・2026/06/24 16:30</div>
        <div style="margin-top:8px;padding:8px;background:var(--amber-light);border-radius:5px;font-size:12px;color:var(--amber)">
          修改原因：Br. Stage 上肢填寫有誤，應為 Stage IV，當時記錄 Stage III 為筆誤。
        </div>
      </div>
      <div style="font-size:12px;font-weight:600;color:var(--gray-600);margin-bottom:8px">原始內容 vs 申請修改</div>
      <div class="diff-compare">
        <div class="diff-col">
          <div class="diff-col-title">原始填寫</div>
          <div class="diff-row"><span>Br. Stage 上肢</span><span>Stage III</span></div>
          <div class="diff-row"><span>Br. Stage 下肢</span><span>Stage IV</span></div>
          <div class="diff-row"><span>MMT 上肢</span><span>3</span></div>
          <div class="diff-row"><span>現況敘述</span><span style="color:var(--gray-400)">（原文）</span></div>
        </div>
        <div class="diff-col">
          <div class="diff-col-title">申請修改為</div>
          <div class="diff-row"><span>Br. Stage 上肢</span><span class="changed">Stage IV ✎</span></div>
          <div class="diff-row"><span>Br. Stage 下肢</span><span>Stage IV</span></div>
          <div class="diff-row"><span>MMT 上肢</span><span>3</span></div>
          <div class="diff-row"><span>現況敘述</span><span style="color:var(--gray-400)">（未修改）</span></div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-danger" onclick="closeModal('modal-review');alert('已拒絕修改申請')">拒絕</button>
      <button class="btn btn-secondary" onclick="closeModal('modal-review')">暫不處理</button>
      <button class="btn btn-green" onclick="closeModal('modal-review');alert('已核准，評估已更新')">✓ 核准修改</button>
    </div>
  </div>
</div>

<!-- Modal 4: 期限設定 -->
<div id="modal-deadline" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title">⚙ 評估填寫期限設定</div>
      <button class="modal-close" onclick="closeModal('modal-deadline')">✕</button>
    </div>
    <div class="modal-body">
      <div class="info-note blue">設定後，達到期限的評估將鎖定，治療師須透過修改申請才能更動。</div>
      <div class="deadline-form">
        <div class="deadline-row">
          <input type="radio" name="deadline" id="d1" checked>
          <label for="d1">送展延前 <select><option>3</option><option selected>5</option><option>7</option></select> 天鎖定</label>
        </div>
        <div class="deadline-row">
          <input type="radio" name="deadline" id="d2">
          <label for="d2">個案結案後全部鎖定</label>
        </div>
        <div class="deadline-row">
          <input type="radio" name="deadline" id="d3">
          <label for="d3">送出後 <select><option>3</option><option>7</option><option selected>14</option><option>30</option></select> 天後鎖定</label>
        </div>
      </div>
      <div class="divider"></div>
      <div style="font-size:11px;color:var(--gray-400)">目前設定：送展延前 <strong>5</strong> 天鎖定・上次更新：2026/06/01 林美惠</div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-deadline')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-deadline');alert('期限設定已儲存')">儲存設定</button>
    </div>
  </div>
</div>

<!-- Modal 5: 發送提醒（個管師 topbar） -->
<div id="modal-remind" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title">📣 發送填寫提醒</div>
      <button class="modal-close" onclick="closeModal('modal-remind')">✕</button>
    </div>
    <div class="modal-body">
      <div class="info-note blue">以下治療師有逾期或即將逾期的評估尚未填寫，系統將發送通知提醒。</div>
      <div class="remind-list">
        <div class="remind-item">
          <div class="remind-item-left">
            <input type="checkbox" checked>
            <span class="th-tag th-pt">PT</span>
            <div><div class="remind-item-name">黃志豪</div><div class="remind-item-status">陳建國複評1・王淑芬複評2（逾期）</div></div>
          </div>
          <span class="badge badge-red">逾期</span>
        </div>
        <div class="remind-item">
          <div class="remind-item-left">
            <input type="checkbox" checked>
            <span class="th-tag th-ot">OT</span>
            <div><div class="remind-item-name">李佳穎</div><div class="remind-item-status">陳建國複評1・劉家豪初評</div></div>
          </div>
          <span class="badge badge-amber">待填</span>
        </div>
        <div class="remind-item">
          <div class="remind-item-left">
            <input type="checkbox" checked>
            <span style="font-size:11px;font-weight:700;color:var(--purple);background:var(--purple-light);padding:2px 7px;border-radius:4px">主管</span>
            <div><div class="remind-item-name">王復健主管</div><div class="remind-item-status">2 件待審核修改申請</div></div>
          </div>
          <span class="badge badge-purple">待審核</span>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-remind')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-remind');alert('已發送提醒通知')">發送通知</button>
    </div>
  </div>
</div>

<!-- Modal 6: 單一個案發送提醒 -->
<div id="modal-remind-single" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title">📣 發送提醒 — 陳建國</div>
      <button class="modal-close" onclick="closeModal('modal-remind-single')">✕</button>
    </div>
    <div class="modal-body">
      <div class="info-note blue">發送提醒給此個案所有未填治療師及復健主管。</div>
      <div class="remind-list">
        <div class="remind-item">
          <div class="remind-item-left">
            <input type="checkbox" checked>
            <span class="th-tag th-pt">PT</span>
            <div><div class="remind-item-name">黃志豪</div><div class="remind-item-status">複評 1 待填・應填 2026/06/25</div></div>
          </div>
          <span class="badge badge-amber">待填</span>
        </div>
        <div class="remind-item">
          <div class="remind-item-left">
            <input type="checkbox" checked>
            <span class="th-tag th-ot">OT</span>
            <div><div class="remind-item-name">李佳穎</div><div class="remind-item-status">複評 1 待填・應填 2026/06/25</div></div>
          </div>
          <span class="badge badge-amber">待填</span>
        </div>
        <div class="remind-item">
          <div class="remind-item-left">
            <input type="checkbox" checked>
            <span style="font-size:11px;font-weight:700;color:var(--purple);background:var(--purple-light);padding:2px 7px;border-radius:4px">主管</span>
            <div><div class="remind-item-name">王復健主管</div><div class="remind-item-status">1 件待審核申請</div></div>
          </div>
          <span class="badge badge-purple">待審核</span>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-remind-single')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-remind-single');alert('已發送提醒')">發送通知</button>
    </div>
  </div>
</div>

<script>
// ── 資料 ──
const cases = [
  {id:'c1', name:'陳建國', mode:'住院', bed:'A301', disease:'CVA', visits:[
    {label:'初評', st:'done'},{label:'複評1', st:'filling'},{label:'複評2', st:'pending'},{label:'複評3', st:'pending'},{label:'結案', st:'pending'}
  ]},
  {id:'c2', name:'王淑芬', mode:'居家', bed:'—', disease:'TKR', visits:[
    {label:'初評', st:'done'},{label:'複評1', st:'done'},{label:'複評2', st:'overdue'},{label:'複評3', st:'pending'},{label:'結案', st:'pending'}
  ]},
  {id:'c3', name:'劉家豪', mode:'日照', bed:'—', disease:'CVA', visits:[
    {label:'初評', st:'pending'},{label:'複評1', st:'pending'},{label:'複評2', st:'pending'},{label:'複評3', st:'pending'},{label:'結案', st:'pending'}
  ]},
  {id:'c4', name:'林翠娟', mode:'住院', bed:'B205', disease:'Hip Fx', visits:[
    {label:'初評', st:'done'},{label:'複評1', st:'done'},{label:'複評2', st:'done'},{label:'複評3', st:'pending'},{label:'結案', st:'pending'}
  ]},
  {id:'c5', name:'張明輝', mode:'住院', bed:'C118', disease:'CVA', visits:[
    {label:'初評', st:'done'},{label:'複評1', st:'done'},{label:'複評2', st:'done'},{label:'複評3', st:'done'},{label:'結案', st:'pending'}
  ]}
];

const roleConfig = {
  mgr:  {name:'林美惠', label:'個案管理師', av:'mgr', ch:'林'},
  sup:  {name:'王復健主管', label:'復健主管', av:'sup', ch:'王'},
  pt:   {name:'黃志豪', label:'PT（物理治療師）', av:'pt', ch:'黃'},
  ot:   {name:'李佳穎', label:'OT（職能治療師）', av:'ot', ch:'李'},
  st:   {name:'吳怡君', label:'ST（語言治療師）', av:'st', ch:'吳'},
  other:{name:'陳玉玲', label:'護理師', av:'other', ch:'陳'}
};

let currentRole = 'mgr';
let currentCase = null;

function renderCaseList(){
  const list = document.getElementById('case-list');
  list.innerHTML = cases.map(c=>{
    const stHTML = c.visits.map(v=>\`<span class="status-pill status-\${v.st}">\${
      v.st==='done'?'✓ '+v.label:v.st==='overdue'?'⚠ '+v.label:v.st==='filling'?'● '+v.label:v.label
    }</span>\`).join('');
    return \`<div class="case-item" id="ci-\${c.id}" onclick="selectCase('\${c.id}')">
      <div class="case-name">\${c.name}</div>
      <div class="case-meta">\${c.mode}・\${c.bed}・\${c.disease}</div>
      <div class="case-status-row">\${stHTML}</div>
    </div>\`;
  }).join('');
}

function selectCase(id){
  currentCase = id;
  document.querySelectorAll('.case-item').forEach(el=>el.classList.remove('active'));
  document.getElementById('ci-'+id).classList.add('active');

  const c = cases.find(x=>x.id===id);
  document.getElementById('view-empty').classList.add('hidden');

  if(currentRole==='mgr'||currentRole==='sup'){
    // 個管師/主管：看總表
    document.getElementById('view-summary').classList.remove('hidden');
    document.getElementById('view-fill').classList.add('hidden');
    document.getElementById('sum-name').textContent = c.name;
    document.getElementById('sum-meta').textContent = c.mode+'・'+c.bed+' 床・'+c.disease;
    document.getElementById('bc').textContent = '評估量表 › '+c.name;
  } else {
    // 治療師：直接進填寫頁，預設最近應填次別
    document.getElementById('view-summary').classList.add('hidden');
    openFillView('複評 1', false);
    document.getElementById('bc').textContent = '評估量表 › '+c.name+' › 複評 1';
  }
}

function openFillView(visitLabel, readOnly, tabEl){
  document.getElementById('view-summary').classList.add('hidden');
  document.getElementById('view-empty').classList.add('hidden');
  const fillView = document.getElementById('view-fill');
  fillView.classList.remove('hidden');
  fillView.style.display='flex';

  document.getElementById('fill-visit-label').textContent = visitLabel;

  // 次別 tab 高亮
  if(tabEl){
    document.querySelectorAll('.visit-tab').forEach(t=>t.classList.remove('active'));
    tabEl.classList.add('active');
  }

  // 角色 tab 顯示邏輯
  const roleTabs = document.getElementById('role-tab-row');
  if(currentRole==='mgr'||currentRole==='sup'){
    roleTabs.style.display='flex';
    // 顯示所有 tab
    document.querySelectorAll('.role-tab').forEach(t=>t.style.display='');
    // 個管師唯讀
    document.getElementById('mgr-fill-actions').classList.remove('hidden');
    document.getElementById('th-fill-actions').classList.add('hidden');
    document.getElementById('fill-footer').style.display='none';
    document.getElementById('lock-banner').classList.add('hidden');
    // 預設顯示 PT
    switchRoleTab(roleTabs.querySelector('.role-tab'), 'pt');
  } else {
    // 治療師只看自己的 tab
    roleTabs.style.display='none';
    document.getElementById('mgr-fill-actions').classList.add('hidden');
    document.getElementById('th-fill-actions').classList.remove('hidden');
    document.getElementById('fill-footer').style.display='flex';
    // PT鎖定示意（PT角色才顯示）
    const isLocked = (currentRole==='ot') && visitLabel==='複評 1';
    document.getElementById('lock-banner').classList.toggle('hidden', !isLocked);
    // 顯示對應 role 的表單
    ['pt','ot','st','doc','nur','pha','nut'].forEach(r=>document.getElementById('form-'+r).classList.add('hidden'));
    const roleMap = {pt:'pt',ot:'ot',st:'st',other:'nur'};
    const formId = roleMap[currentRole]||'pt';
    document.getElementById('form-'+formId).classList.remove('hidden');
  }

  if(currentCase){
    const c=cases.find(x=>x.id===currentCase);
    document.getElementById('fill-case-name').innerHTML = c.name+' ─ <span id="fill-visit-label">'+visitLabel+'</span>';
    document.getElementById('fill-meta').textContent = (visitLabel==='初評'?'第 1 週':'第 3 週')+'・應填日期 2026/06/25・'+c.disease;
  }
}

function switchRoleTab(el, roleId){
  document.querySelectorAll('.role-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  const forms = ['pt','ot','st','doc','nur','pha','nut'];
  forms.forEach(r=>document.getElementById('form-'+r).classList.add('hidden'));
  const formMap = {pt:'pt',ot:'ot',st:'st',doc:'doc',nur:'nur',pha:'pha',nut:'nut'};
  document.getElementById('form-'+(formMap[roleId]||'pt')).classList.remove('hidden');
}

function switchRole(role){
  currentRole = role;
  const cfg = roleConfig[role];
  document.getElementById('user-name').textContent = cfg.name;
  document.getElementById('user-role-label').textContent = cfg.label;
  const av = document.getElementById('user-avatar');
  av.textContent = cfg.ch;
  av.className = 'user-avatar '+cfg.av;

  // topbar 按鈕顯示
  const isMgr = role==='mgr';
  const isSup = role==='sup';
  document.getElementById('topbar-remind').classList.toggle('hidden', !isMgr);
  document.getElementById('topbar-review').classList.toggle('hidden', !(isMgr||isSup));
  document.getElementById('topbar-deadline').classList.toggle('hidden', !(isMgr||isSup));

  // 重置主體
  document.getElementById('view-empty').classList.remove('hidden');
  document.getElementById('view-summary').classList.add('hidden');
  document.getElementById('view-fill').classList.add('hidden');
  document.querySelectorAll('.case-item').forEach(el=>el.classList.remove('active'));
  currentCase=null;
}

function switchFilter(el){
  document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
}

function openModal(id){document.getElementById(id).classList.remove('hidden')}
function closeModal(id){document.getElementById(id).classList.add('hidden')}
document.querySelectorAll('.modal-overlay').forEach(o=>{
  o.addEventListener('click',function(e){if(e.target===this)this.classList.add('hidden')});
});

// 倒數計時器示意
let sec = 8*60+42;
setInterval(()=>{
  if(sec>0)sec--;
  const m=Math.floor(sec/60),s=sec%60;
  document.querySelectorAll('.lock-timer').forEach(el=>el.textContent=\`剩餘 \${String(m).padStart(2,'0')}:\${String(s).padStart(2,'0')}\`);
},1000);

// Init
renderCaseList();
<\/script>
</body>
</html>`,ug=`<!DOCTYPE html>
<html lang="zh-TW">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PAC 指標匯出</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0
    }

    :root {
      --blue: #2563EB;
      --blue-light: #EFF6FF;
      --blue-mid: #BFDBFE;
      --blue-dark: #1E40AF;
      --gray-50: #F8FAFC;
      --gray-100: #F1F5F9;
      --gray-200: #E2E8F0;
      --gray-300: #CBD5E1;
      --gray-400: #94A3B8;
      --gray-500: #64748B;
      --gray-600: #475569;
      --gray-700: #334155;
      --gray-900: #0F172A;
      --green: #16A34A;
      --green-light: #DCFCE7;
      --amber: #D97706;
      --amber-light: #FEF3C7;
      --red: #DC2626;
      --red-light: #FEE2E2;
      --purple: #7C3AED;
      --purple-light: #EDE9FE;
      --teal: #0D9488;
      --teal-light: #CCFBF1;
      --white: #FFFFFF
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', sans-serif;
      background: var(--gray-50);
      color: var(--gray-900);
      height: 100vh;
      display: flex;
      overflow: hidden;
      font-size: 14px
    }

    /* Sidebar */
    .sidebar {
      width: 192px;
      min-width: 192px;
      background: var(--white);
      border-right: 1px solid var(--gray-200);
      display: flex;
      flex-direction: column
    }

    .sidebar-logo {
      padding: 16px 16px 13px;
      border-bottom: 1px solid var(--gray-200)
    }

    .logo-text {
      font-size: 14px;
      font-weight: 700;
      color: var(--blue)
    }

    .logo-sub {
      font-size: 11px;
      color: var(--gray-400);
      margin-top: 2px
    }

    .sidebar-nav {
      padding: 6px 0;
      flex: 1
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 9px 14px;
      font-size: 13px;
      color: var(--gray-500);
      border-left: 3px solid transparent;
      cursor: default
    }

    .nav-item.active {
      background: var(--blue-light);
      color: var(--blue);
      font-weight: 600;
      border-left-color: var(--blue)
    }

    .nav-item.disabled {
      opacity: .38;
      cursor: not-allowed
    }

    .sidebar-user {
      margin-top: auto;
      padding: 11px 14px;
      border-top: 1px solid var(--gray-200);
      display: flex;
      align-items: center;
      gap: 8px
    }

    .user-avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--blue-mid);
      color: var(--blue-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700
    }

    .user-name {
      font-size: 12px;
      font-weight: 600;
      color: var(--gray-700)
    }

    .user-role {
      font-size: 11px;
      color: var(--gray-400)
    }

    /* Main */
    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden
    }

    .topbar {
      background: var(--white);
      border-bottom: 1px solid var(--gray-200);
      padding: 0 20px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0
    }

    .breadcrumb {
      font-size: 12px;
      color: var(--gray-500)
    }

    .content {
      flex: 1;
      overflow-y: auto;
      padding: 20px
    }

    /* Buttons */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 500;
      border: none;
      cursor: pointer;
      transition: all .15s;
      white-space: nowrap
    }

    .btn-primary {
      background: var(--blue);
      color: var(--white)
    }

    .btn-primary:hover {
      background: var(--blue-dark)
    }

    .btn-secondary {
      background: var(--white);
      color: var(--gray-700);
      border: 1px solid var(--gray-300)
    }

    .btn-secondary:hover {
      background: var(--gray-50)
    }

    .btn-ghost {
      background: transparent;
      color: var(--blue);
      border: 1px solid var(--blue-mid)
    }

    .btn-ghost:hover {
      background: var(--blue-light)
    }

    .btn-teal {
      background: var(--white);
      color: var(--teal);
      border: 1px solid #99F6E4
    }

    .btn-teal:hover {
      background: var(--teal-light)
    }

    .btn-sm {
      padding: 5px 10px;
      font-size: 12px
    }

    .btn-xs {
      padding: 3px 8px;
      font-size: 11px
    }

    /* Badges */
    .badge {
      display: inline-flex;
      align-items: center;
      padding: 2px 7px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 600
    }

    .badge-blue {
      background: var(--blue-light);
      color: var(--blue)
    }

    .badge-green {
      background: var(--green-light);
      color: var(--green)
    }

    .badge-amber {
      background: var(--amber-light);
      color: var(--amber)
    }

    .badge-gray {
      background: var(--gray-100);
      color: var(--gray-500)
    }

    .badge-red {
      background: var(--red-light);
      color: var(--red)
    }

    .badge-purple {
      background: var(--purple-light);
      color: var(--purple)
    }

    .badge-teal {
      background: var(--teal-light);
      color: var(--teal)
    }

    /* Tabs */
    .tabs {
      display: flex;
      border-bottom: 2px solid var(--gray-200);
      margin-bottom: 16px
    }

    .tab {
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 500;
      color: var(--gray-500);
      cursor: pointer;
      border-bottom: 2px solid transparent;
      margin-bottom: -2px
    }

    .tab.active {
      color: var(--blue);
      border-bottom-color: var(--blue)
    }

    /* Page header */
    .page-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 16px
    }

    .page-title {
      font-size: 18px;
      font-weight: 700
    }

    .page-subtitle {
      font-size: 12px;
      color: var(--gray-500);
      margin-top: 3px
    }

    /* Filter card */
    .filter-card {
      background: var(--white);
      border: 1px solid var(--gray-200);
      border-radius: 10px;
      padding: 16px 20px;
      margin-bottom: 16px
    }

    .filter-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px
    }

    .filter-card-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--gray-700)
    }

    .filter-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      align-items: flex-end
    }

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 5px
    }

    .filter-label {
      font-size: 11px;
      font-weight: 500;
      color: var(--gray-500);
      text-transform: uppercase;
      letter-spacing: .04em
    }

    .filter-control {
      padding: 6px 10px;
      border: 1px solid var(--gray-300);
      border-radius: 6px;
      font-size: 13px;
      color: var(--gray-800);
      background: var(--white);
      outline: none;
      min-width: 130px
    }

    .filter-control:focus {
      border-color: var(--blue);
      box-shadow: 0 0 0 3px var(--blue-light)
    }

    select.filter-control {
      cursor: pointer
    }

    .filter-sep {
      font-size: 13px;
      color: var(--gray-400);
      padding-bottom: 7px
    }

    .filter-result {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px solid var(--gray-100)
    }

    .filter-result-text {
      font-size: 13px;
      color: var(--gray-600)
    }

    .filter-result-count {
      font-size: 20px;
      font-weight: 700;
      color: var(--blue)
    }

    /* Indicator grid */
    .indicator-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 10px;
      margin-bottom: 16px
    }

    .indicator-card {
      background: var(--white);
      border: 1px solid var(--gray-200);
      border-radius: 8px;
      padding: 14px;
      cursor: pointer;
      transition: all .15s
    }

    .indicator-card:hover {
      border-color: var(--blue);
      box-shadow: 0 0 0 3px var(--blue-light)
    }

    .indicator-name {
      font-size: 12px;
      color: var(--gray-600);
      margin-bottom: 8px;
      line-height: 1.4
    }

    .indicator-value {
      font-size: 22px;
      font-weight: 700;
      color: var(--gray-900);
      margin-bottom: 6px
    }

    .indicator-value span {
      font-size: 13px;
      font-weight: 400;
      color: var(--gray-500)
    }

    .indicator-progress {
      height: 4px;
      background: var(--gray-100);
      border-radius: 999px;
      overflow: hidden;
      margin-bottom: 6px
    }

    .indicator-progress-bar {
      height: 100%;
      border-radius: 999px;
      background: var(--blue)
    }

    .indicator-tracking {
      font-size: 11px;
      color: var(--gray-400)
    }

    .indicator-card.complete .indicator-value {
      color: var(--green)
    }

    .indicator-card.complete {
      border-color: #BBF7D0
    }

    .indicator-card.pending .indicator-value {
      color: var(--amber)
    }

    /* Section */
    .section-card {
      background: var(--white);
      border: 1px solid var(--gray-200);
      border-radius: 10px;
      margin-bottom: 16px;
      overflow: hidden
    }

    .sc-header {
      padding: 11px 17px;
      border-bottom: 1px solid var(--gray-100);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--gray-50)
    }

    .sc-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--gray-700)
    }

    .sc-body {
      padding: 0
    }

    /* Case tracking table */
    .tracking-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px
    }

    .tracking-table th {
      text-align: left;
      padding: 8px 10px;
      background: var(--gray-50);
      color: var(--gray-500);
      font-weight: 600;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: .05em;
      border-bottom: 1px solid var(--gray-200);
      white-space: nowrap
    }

    .tracking-table td {
      padding: 9px 10px;
      border-bottom: 1px solid var(--gray-100);
      color: var(--gray-700);
      vertical-align: middle
    }

    .tracking-table tr:last-child td {
      border-bottom: none
    }

    .tracking-table tr:hover td {
      background: var(--gray-50)
    }

    .tracking-table th.sticky-col,
    .tracking-table td.sticky-col {
      position: sticky;
      left: 0;
      z-index: 2;
      background: var(--white)
    }

    .tracking-table th.sticky-col {
      background: var(--gray-50)
    }

    /* Tracking status */
    .track-status {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2px 8px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      border: none
    }

    .track-status.done {
      background: var(--green-light);
      color: var(--green)
    }

    .track-status.pending {
      background: var(--amber-light);
      color: var(--amber)
    }

    .track-status.failed {
      background: var(--gray-100);
      color: var(--gray-500)
    }

    .track-status.not-started {
      background: var(--gray-100);
      color: var(--gray-400)
    }

    /* Yes/No toggle */
    .yn-toggle {
      display: inline-flex;
      border: 1px solid var(--gray-200);
      border-radius: 6px;
      overflow: hidden
    }

    .yn-btn {
      padding: 3px 10px;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      background: var(--white);
      border: none;
      color: var(--gray-400)
    }

    .yn-btn.yes.active {
      background: var(--red-light);
      color: var(--red)
    }

    .yn-btn.no.active {
      background: var(--green-light);
      color: var(--green)
    }

    .yn-btn:hover:not(.active) {
      background: var(--gray-50)
    }

    /* Table scroll wrapper */
    .table-scroll {
      overflow-x: auto;
      max-height: 420px;
      overflow-y: auto
    }

    /* Contact chip */
    .contact-chip {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      font-size: 11px;
      color: var(--gray-600);
      background: var(--gray-100);
      padding: 2px 6px;
      border-radius: 4px;
      white-space: nowrap
    }

    /* Disposition tag */
    .disp-tag {
      display: inline-flex;
      align-items: center;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 600
    }

    .disp-home {
      background: var(--teal-light);
      color: var(--teal)
    }

    .disp-ltc {
      background: var(--purple-light);
      color: var(--purple)
    }

    .disp-sw {
      background: var(--amber-light);
      color: var(--amber)
    }

    .disp-none {
      background: var(--gray-100);
      color: var(--gray-400)
    }

    /* Note input inline */
    .note-input {
      width: 100%;
      padding: 4px 7px;
      border: 1px solid var(--gray-200);
      border-radius: 5px;
      font-size: 11px;
      color: var(--gray-700);
      background: var(--white);
      outline: none;
      min-width: 120px
    }

    .note-input:focus {
      border-color: var(--blue)
    }

    /* Modal */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, .5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
      backdrop-filter: blur(2px)
    }

    .modal {
      background: var(--white);
      border-radius: 12px;
      width: 560px;
      max-width: 92vw;
      max-height: 88vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 20px 60px rgba(0, 0, 0, .15)
    }

    .modal-lg {
      width: 720px
    }

    .modal-xl {
      width: 880px
    }

    .modal-sm {
      width: 420px
    }

    .modal-header {
      padding: 16px 20px 13px;
      border-bottom: 1px solid var(--gray-200);
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0
    }

    .modal-title {
      font-size: 15px;
      font-weight: 700
    }

    .modal-close {
      width: 25px;
      height: 25px;
      border-radius: 5px;
      border: none;
      background: var(--gray-100);
      color: var(--gray-500);
      cursor: pointer;
      font-size: 13px;
      display: flex;
      align-items: center;
      justify-content: center
    }

    .modal-close:hover {
      background: var(--gray-200)
    }

    .modal-body {
      padding: 16px 20px;
      overflow-y: auto;
      flex: 1
    }

    .modal-footer {
      padding: 13px 20px;
      border-top: 1px solid var(--gray-200);
      display: flex;
      justify-content: flex-end;
      gap: 7px;
      flex-shrink: 0
    }

    /* Form */
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 13px
    }

    .form-group label {
      font-size: 12px;
      font-weight: 500;
      color: var(--gray-600)
    }

    .form-control {
      padding: 7px 10px;
      border: 1px solid var(--gray-300);
      border-radius: 6px;
      font-size: 13px;
      color: var(--gray-800);
      background: var(--white);
      outline: none
    }

    .form-control:focus {
      border-color: var(--blue);
      box-shadow: 0 0 0 3px var(--blue-light)
    }

    select.form-control {
      cursor: pointer
    }

    textarea.form-control {
      resize: vertical;
      min-height: 70px
    }

    /* Field manager */
    .field-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 14px
    }

    .field-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border: 1px solid var(--gray-200);
      border-radius: 7px;
      background: var(--white)
    }

    .field-item.system {
      background: var(--gray-50)
    }

    .field-drag {
      color: var(--gray-300);
      cursor: grab;
      font-size: 14px
    }

    .field-name {
      flex: 1;
      font-size: 13px;
      color: var(--gray-700);
      font-weight: 500
    }

    .field-type {
      font-size: 11px;
      color: var(--gray-400);
      background: var(--gray-100);
      padding: 2px 6px;
      border-radius: 4px
    }

    .field-badge-sys {
      font-size: 10px;
      color: var(--blue);
      background: var(--blue-light);
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 600
    }

    .field-toggle {
      width: 36px;
      height: 20px;
      border-radius: 999px;
      border: none;
      cursor: pointer;
      position: relative;
      transition: background .15s
    }

    .field-toggle.on {
      background: var(--blue)
    }

    .field-toggle.off {
      background: var(--gray-300)
    }

    .field-toggle::after {
      content: '';
      position: absolute;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: white;
      top: 3px;
      transition: left .15s
    }

    .field-toggle.on::after {
      left: 19px
    }

    .field-toggle.off::after {
      left: 3px
    }

    .field-delete {
      color: var(--gray-300);
      cursor: pointer;
      font-size: 14px;
      border: none;
      background: none;
      padding: 2px
    }

    .field-delete:hover {
      color: var(--red)
    }

    /* Indicator detail */
    .indicator-detail-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid var(--gray-100)
    }

    .indicator-detail-row:last-child {
      border-bottom: none
    }

    .indicator-detail-name {
      font-size: 13px;
      color: var(--gray-700)
    }

    .indicator-detail-val {
      font-size: 15px;
      font-weight: 700;
      color: var(--blue)
    }

    .indicator-formula {
      font-size: 11px;
      color: var(--gray-400);
      margin-top: 2px
    }

    /* Export preview */
    .export-section {
      margin-bottom: 16px
    }

    .export-section-title {
      font-size: 12px;
      font-weight: 600;
      color: var(--gray-600);
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px
    }

    .export-section-title::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--gray-200)
    }

    .export-check-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 7px
    }

    .export-check-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 10px;
      border: 1px solid var(--gray-200);
      border-radius: 6px;
      cursor: pointer;
      font-size: 12px
    }

    .export-check-item input {
      accent-color: var(--blue)
    }

    .export-check-item:hover {
      background: var(--gray-50)
    }

    .info-note {
      font-size: 12px;
      padding: 10px 12px;
      border-radius: 6px;
      margin-bottom: 12px
    }

    .info-note.blue {
      background: var(--blue-light);
      color: var(--blue-dark)
    }

    .info-note.amber {
      background: var(--amber-light);
      color: var(--amber)
    }

    .divider {
      height: 1px;
      background: var(--gray-100);
      margin: 13px 0
    }

    .hidden {
      display: none !important
    }

    .mt-10 {
      margin-top: 10px
    }

    /* Expandable case list */
    .case-track-list {
      display: flex;
      flex-direction: column
    }

    .case-track-item {
      border-bottom: 1px solid var(--gray-100)
    }

    .case-track-item:last-child {
      border-bottom: none
    }

    .case-track-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 11px 16px;
      cursor: pointer;
      transition: background .12s
    }

    .case-track-row:hover {
      background: var(--gray-50)
    }

    .case-track-expand-btn {
      width: 20px;
      height: 20px;
      border-radius: 4px;
      border: 1px solid var(--gray-200);
      background: var(--white);
      color: var(--gray-400);
      font-size: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      cursor: pointer;
      transition: all .15s
    }

    .case-track-expand-btn.open {
      background: var(--blue-light);
      border-color: var(--blue-mid);
      color: var(--blue)
    }

    .case-track-name {
      font-size: 13px;
      font-weight: 600;
      color: var(--gray-900);
      min-width: 60px
    }

    .case-track-meta {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 1;
      flex-wrap: wrap
    }

    .case-track-detail {
      background: var(--gray-50);
      border-top: 1px solid var(--gray-100);
      padding: 16px 20px 16px 46px
    }

    .case-track-contact {
      display: flex;
      gap: 10px;
      margin-bottom: 14px;
      flex-wrap: wrap
    }

    .case-track-questions {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 14px
    }

    .case-track-q {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 9px 12px;
      background: var(--white);
      border: 1px solid var(--gray-200);
      border-radius: 7px
    }

    .case-track-q-label {
      font-size: 12px;
      color: var(--gray-700)
    }

    .case-track-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 12px;
      border-top: 1px solid var(--gray-200)
    }
  </style>
</head>

<body>

  <!-- SIDEBAR -->
  <!--
<aside class="sidebar">
  <div class="sidebar-logo">
    <div class="logo-text">PAC 管理系統</div>
    <div class="logo-sub">急性後期照護</div>
  </div>
  <nav class="sidebar-nav">
    <div class="nav-item disabled">🏠 個人儀表板</div>
    <div class="nav-item disabled">📋 個案管理</div>
    <div class="nav-item disabled">🛏 病床管理</div>
    <div class="nav-item disabled">📅 班表總覽頁</div>
    <div class="nav-item disabled">🏡 居家排班管理</div>
    <div class="nav-item disabled">📊 評估量表</div>
    <div class="nav-item disabled">💪 復健紀錄</div>
    <div class="nav-item active">📤 指標匯出</div>
  </nav>
  <div class="sidebar-user">
    <div class="user-avatar">林</div>
    <div>
      <div class="user-name">林美惠</div>
      <div class="user-role">個案管理師</div>
    </div>
  </div>
</aside>
-->

  <!-- MAIN -->
  <div class="main">
    <div class="topbar">
      <div class="breadcrumb">指標匯出</div>
      <div style="font-size:11px;color:var(--gray-400)">2026/06/23</div>
    </div>
    <div class="content">

      <div class="page-header">
        <div>
          <div class="page-title">指標匯出</div>
          <div class="page-subtitle">篩選結案個案・填寫追蹤資料・產出成果指標</div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-secondary btn-sm" onclick="openModal('modal-manage-fields')">⚙ 管理追蹤欄位</button>
          <button class="btn btn-teal btn-sm" onclick="openModal('modal-export')">📤 匯出報告</button>
        </div>
      </div>

      <!-- 主要 tabs -->
      <div class="tabs">
        <div class="tab active" onclick="switchTab(this,'nhia')">健保署指標</div>
        <div class="tab" onclick="switchTab(this,'internal')">院內指標</div>
      </div>

      <!-- ════ 健保署指標 tab ════ -->
      <div id="tab-nhia">

        <!-- 篩選區 -->
        <div class="filter-card">
          <div class="filter-card-header">
            <div class="filter-card-title">篩選條件</div>
            <button class="btn btn-secondary btn-xs" onclick="openModal('modal-manage-filters')">⚙ 管理篩選條件</button>
          </div>
          <div class="filter-row">
            <div class="filter-group">
              <div class="filter-label">統計年度</div>
              <select class="filter-control">
                <option>2025 年</option>
                <option selected>2026 年</option>
              </select>
            </div>
            <div class="filter-group">
              <div class="filter-label">月份區間（起）</div>
              <select class="filter-control">
                <option>1 月</option>
                <option selected>2 月</option>
                <option>3 月</option>
                <option>4 月</option>
                <option>5 月</option>
                <option>6 月</option>
                <option>7 月</option>
                <option>8 月</option>
                <option>9 月</option>
                <option>10 月</option>
                <option>11 月</option>
                <option>12 月</option>
              </select>
            </div>
            <div class="filter-sep">～</div>
            <div class="filter-group">
              <div class="filter-label">月份區間（迄）</div>
              <select class="filter-control">
                <option>1 月</option>
                <option>2 月</option>
                <option>3 月</option>
                <option>4 月</option>
                <option>5 月</option>
                <option selected>6 月</option>
                <option>7 月</option>
                <option>8 月</option>
                <option>9 月</option>
                <option>10 月</option>
                <option>11 月</option>
                <option>12 月</option>
              </select>
            </div>
            <div class="filter-group">
              <div class="filter-label">結案類型</div>
              <select class="filter-control">
                <option>全部結案</option>
                <option selected>PAC 成功結案</option>
                <option>PAC 不成功結案</option>
                <option>一般個案（非PAC）</option>
              </select>
            </div>
            <div class="filter-group">
              <div class="filter-label">疾病別</div>
              <select class="filter-control">
                <option selected>全部</option>
                <option>CVA（腦中風）</option>
                <option>骨科</option>
                <option>COPD</option>
                <option>心衰竭</option>
                <option>脊髓損傷</option>
              </select>
            </div>
            <div class="filter-group">
              <div class="filter-label">照護模式</div>
              <select class="filter-control">
                <option selected>全部</option>
                <option>住院</option>
                <option>日照</option>
                <option>居家</option>
              </select>
            </div>
            <div>
              <button class="btn btn-primary btn-sm" style="margin-top:20px">套用篩選</button>
            </div>
          </div>
          <div class="filter-result">
            <div class="filter-result-text">符合條件個案：</div>
            <div class="filter-result-count">47</div>
            <div class="filter-result-text">人・追蹤完成</div>
            <div class="filter-result-count" style="color:var(--green)">31</div>
            <div class="filter-result-text">人・未追蹤</div>
            <div class="filter-result-count" style="color:var(--amber)">16</div>
            <div class="filter-result-text">人</div>
          </div>
        </div>

        <!-- 指標總覽 -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
          <div style="font-size:13px;font-weight:600;color:var(--gray-700)">指標計算結果 <span
              style="font-size:11px;font-weight:400;color:var(--gray-400)">· 點擊卡片查看計算明細</span></div>
          <div class="info-note blue" style="margin-bottom:0;padding:6px 12px;font-size:11px">⚠️ 尚有 16
            位個案未完成追蹤，指標數值為目前已追蹤資料的初步計算結果</div>
        </div>
        <div class="indicator-grid">
          <div class="indicator-card complete" onclick="openModal('modal-indicator-detail')">
            <div class="indicator-name">一年內死亡率</div>
            <div class="indicator-value">4.8 <span>%</span></div>
            <div class="indicator-progress">
              <div class="indicator-progress-bar" style="width:100%"></div>
            </div>
            <div class="indicator-tracking">已追蹤 31 / 31 人（可計算）</div>
          </div>
          <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">
            <div class="indicator-name">30日內急診率</div>
            <div class="indicator-value">12.9 <span>%</span></div>
            <div class="indicator-progress">
              <div class="indicator-progress-bar" style="width:66%"></div>
            </div>
            <div class="indicator-tracking">已追蹤 31 / 47 人（待完成）</div>
          </div>
          <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">
            <div class="indicator-name">14日內再入院率</div>
            <div class="indicator-value">6.5 <span>%</span></div>
            <div class="indicator-progress">
              <div class="indicator-progress-bar" style="width:66%"></div>
            </div>
            <div class="indicator-tracking">已追蹤 31 / 47 人（待完成）</div>
          </div>
          <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">
            <div class="indicator-name">30日內再入院率</div>
            <div class="indicator-value">9.7 <span>%</span></div>
            <div class="indicator-progress">
              <div class="indicator-progress-bar" style="width:66%"></div>
            </div>
            <div class="indicator-tracking">已追蹤 31 / 47 人（待完成）</div>
          </div>
          <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">
            <div class="indicator-name">個案之功能進步情形</div>
            <div class="indicator-value">72.3 <span>%</span></div>
            <div class="indicator-progress">
              <div class="indicator-progress-bar" style="width:66%"></div>
            </div>
            <div class="indicator-tracking">從系統量表自動計算</div>
          </div>
          <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">
            <div class="indicator-name">管路移除率</div>
            <div class="indicator-value">85.2 <span>%</span></div>
            <div class="indicator-progress">
              <div class="indicator-progress-bar" style="width:66%"></div>
            </div>
            <div class="indicator-tracking">已追蹤 31 / 47 人（待完成）</div>
          </div>
          <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">
            <div class="indicator-name">非計畫性管路滑脫率</div>
            <div class="indicator-value">2.1 <span>%</span></div>
            <div class="indicator-progress">
              <div class="indicator-progress-bar" style="width:66%"></div>
            </div>
            <div class="indicator-tracking">已追蹤 31 / 47 人（待完成）</div>
          </div>
          <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">
            <div class="indicator-name">醫學中心轉至PAC醫院比率</div>
            <div class="indicator-value">68.1 <span>%</span></div>
            <div class="indicator-progress">
              <div class="indicator-progress-bar" style="width:66%"></div>
            </div>
            <div class="indicator-tracking">從系統資料自動計算</div>
          </div>
          <div class="indicator-card pending" onclick="openModal('modal-indicator-detail')">
            <div class="indicator-name">心衰竭治療指引用藥率</div>
            <div class="indicator-value">91.7 <span>%</span></div>
            <div class="indicator-progress">
              <div class="indicator-progress-bar" style="width:66%"></div>
            </div>
            <div class="indicator-tracking">僅限心衰竭個案（n=12）</div>
          </div>
        </div>

        <!-- 個案追蹤清單 -->
        <div class="section-card">
          <div class="sc-header">
            <div class="sc-title">個案追蹤清單</div>
            <div style="display:flex;gap:7px;align-items:center">
              <span style="font-size:11px;color:var(--gray-400)">依結案日排序・點列展開填寫追蹤資料</span>
              <button class="btn btn-secondary btn-xs">追蹤狀態 ▾</button>
            </div>
          </div>
          <div class="sc-body">
            <div class="case-track-list">

              <!-- 列標題 -->
              <div
                style="display:flex;align-items:center;gap:10px;padding:7px 16px;background:var(--gray-50);border-bottom:1px solid var(--gray-200)">
                <div style="width:20px;flex-shrink:0"></div>
                <div
                  style="font-size:10px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em;min-width:60px">
                  姓名</div>
                <div
                  style="font-size:10px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em;flex:1;display:flex;gap:24px">
                  <span style="min-width:80px">疾病別</span>
                  <span style="min-width:70px">模式</span>
                  <span style="min-width:70px">開案日</span>
                  <span style="min-width:70px">結案日</span>
                  <span style="min-width:70px">距結案</span>
                  <span style="min-width:80px">結案後處置</span>
                </div>
                <div
                  style="font-size:10px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em;min-width:80px">
                  追蹤狀態</div>
              </div>

              <!-- 個案 1：已追蹤・展開示意 -->
              <div class="case-track-item">
                <div class="case-track-row" onclick="toggleTrack('t1')">
                  <button class="case-track-expand-btn open" id="tb1">▼</button>
                  <div class="case-track-name">李文雄</div>
                  <div class="case-track-meta">
                    <span class="badge badge-blue" style="font-size:10px">COPD</span>
                    <span class="case-track-tag">🏥 住院</span>
                    <span class="case-track-tag">開案 06/10</span>
                    <span class="case-track-tag">結案 07/05/2025</span>
                    <span class="case-track-tag">353 天</span>
                    <span class="disp-tag disp-home">居家醫療</span>
                  </div>
                  <button class="track-status done" onclick="event.stopPropagation()">✓ 已追蹤</button>
                </div>
                <div id="t1" class="case-track-detail">
                  <div class="case-track-contact">
                    <span style="font-size:12px;color:var(--gray-500)">聯絡方式：</span>
                    <span class="contact-chip">📞 個案 0923-456-789</span>
                    <span class="contact-chip">💬 家屬 李小華 0934-111-222</span>
                  </div>
                  <div class="case-track-questions">
                    <div class="case-track-q">
                      <span class="case-track-q-label">出院後30日內是否有急診？</span>
                      <div class="yn-toggle"><button class="yn-btn yes active">是</button><button
                          class="yn-btn no">否</button></div>
                    </div>
                    <div class="case-track-q">
                      <span class="case-track-q-label">出院後30日內是否有再入院？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button
                          class="yn-btn no active">否</button></div>
                    </div>
                    <div class="case-track-q">
                      <span class="case-track-q-label">出院後14日內是否有再入院？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button
                          class="yn-btn no active">否</button></div>
                    </div>
                    <div class="case-track-q">
                      <span class="case-track-q-label">出院後一年內是否有死亡？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button
                          class="yn-btn no active">否</button></div>
                    </div>
                    <div class="case-track-q">
                      <span class="case-track-q-label">管路是否移除？</span>
                      <div class="yn-toggle"><button class="yn-btn yes active">是</button><button
                          class="yn-btn no">否</button></div>
                    </div>
                    <div class="case-track-q">
                      <span class="case-track-q-label">是否有非計畫性管路滑脫？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button
                          class="yn-btn no active">否</button></div>
                    </div>
                  </div>
                  <div class="form-group" style="margin-bottom:12px">
                    <label style="font-size:12px;font-weight:500;color:var(--gray-600)">備註</label>
                    <input class="note-input"
                      style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px"
                      value="家屬說出院後有一次急診，已返家休養">
                  </div>
                  <div class="case-track-footer">
                    <span style="font-size:11px;color:var(--gray-400)">最後追蹤：2026/01/15・林美惠</span>
                    <button class="btn btn-secondary btn-sm">重新填寫</button>
                  </div>
                </div>
              </div>

              <!-- 個案 2：已追蹤・收合 -->
              <div class="case-track-item">
                <div class="case-track-row" onclick="toggleTrack('t2')">
                  <button class="case-track-expand-btn" id="tb2">▶</button>
                  <div class="case-track-name">鄭大偉</div>
                  <div class="case-track-meta">
                    <span class="badge badge-purple" style="font-size:10px">骨科</span>
                    <span class="case-track-tag">🏥 住院</span>
                    <span class="case-track-tag">開案 05/28</span>
                    <span class="case-track-tag">結案 07/12/2025</span>
                    <span class="case-track-tag">346 天</span>
                    <span class="disp-tag disp-ltc">長照</span>
                  </div>
                  <button class="track-status done" onclick="event.stopPropagation()">✓ 已追蹤</button>
                </div>
                <div id="t2" class="case-track-detail hidden">
                  <div class="case-track-contact">
                    <span style="font-size:12px;color:var(--gray-500)">聯絡方式：</span>
                    <span class="contact-chip">📞 個案 0912-345-678</span>
                    <span class="contact-chip">💬 家屬 鄭小姐 0923-222-333</span>
                  </div>
                  <div class="case-track-questions">
                    <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有急診？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button
                          class="yn-btn no active">否</button></div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有再入院？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button
                          class="yn-btn no active">否</button></div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">出院後14日內是否有再入院？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button
                          class="yn-btn no active">否</button></div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">出院後一年內是否有死亡？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button
                          class="yn-btn no active">否</button></div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">管路是否移除？</span>
                      <div class="yn-toggle"><button class="yn-btn yes active">是</button><button
                          class="yn-btn no">否</button></div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">是否有非計畫性管路滑脫？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button
                          class="yn-btn no active">否</button></div>
                    </div>
                  </div>
                  <div class="form-group" style="margin-bottom:12px">
                    <label style="font-size:12px;font-weight:500;color:var(--gray-600)">備註</label>
                    <input class="note-input"
                      style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px"
                      placeholder="點擊輸入備註…">
                  </div>
                  <div class="case-track-footer">
                    <span style="font-size:11px;color:var(--gray-400)">最後追蹤：2026/01/16・林美惠</span>
                    <button class="btn btn-secondary btn-sm">重新填寫</button>
                  </div>
                </div>
              </div>

              <!-- 個案 3：已追蹤・收合 -->
              <div class="case-track-item">
                <div class="case-track-row" onclick="toggleTrack('t3')">
                  <button class="case-track-expand-btn" id="tb3">▶</button>
                  <div class="case-track-name">吳麗珠</div>
                  <div class="case-track-meta">
                    <span class="badge badge-amber" style="font-size:10px">CVA</span>
                    <span class="case-track-tag">☀️ 日照</span>
                    <span class="case-track-tag">開案 06/05</span>
                    <span class="case-track-tag">結案 08/20/2025</span>
                    <span class="case-track-tag">307 天</span>
                    <span class="disp-tag disp-sw">社工轉介</span>
                  </div>
                  <button class="track-status done" onclick="event.stopPropagation()">✓ 已追蹤</button>
                </div>
                <div id="t3" class="case-track-detail hidden">
                  <div class="case-track-contact">
                    <span style="font-size:12px;color:var(--gray-500)">聯絡方式：</span>
                    <span class="contact-chip">📞 個案 0934-567-890</span>
                    <span class="contact-chip">💬 家屬 吳先生 0945-333-444</span>
                  </div>
                  <div class="case-track-questions">
                    <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有急診？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button
                          class="yn-btn no active">否</button></div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有再入院？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button
                          class="yn-btn no active">否</button></div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">出院後14日內是否有再入院？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button
                          class="yn-btn no active">否</button></div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">出院後一年內是否有死亡？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button
                          class="yn-btn no active">否</button></div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">管路是否移除？</span>
                      <div class="yn-toggle"><button class="yn-btn yes active">是</button><button
                          class="yn-btn no">否</button></div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">是否有非計畫性管路滑脫？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button
                          class="yn-btn no active">否</button></div>
                    </div>
                  </div>
                  <div class="form-group" style="margin-bottom:12px">
                    <label style="font-size:12px;font-weight:500;color:var(--gray-600)">備註</label>
                    <input class="note-input"
                      style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px"
                      placeholder="點擊輸入備註…">
                  </div>
                  <div class="case-track-footer">
                    <span style="font-size:11px;color:var(--gray-400)">最後追蹤：2026/01/18・林美惠</span>
                    <button class="btn btn-secondary btn-sm">重新填寫</button>
                  </div>
                </div>
              </div>

              <!-- 個案 4：待追蹤 -->
              <div class="case-track-item">
                <div class="case-track-row" onclick="toggleTrack('t4')">
                  <button class="case-track-expand-btn" id="tb4">▶</button>
                  <div class="case-track-name">陳志明</div>
                  <div class="case-track-meta">
                    <span class="badge badge-amber" style="font-size:10px">CVA</span>
                    <span class="case-track-tag">🏥 住院</span>
                    <span class="case-track-tag">開案 06/27</span>
                    <span class="case-track-tag">結案 09/05/2025</span>
                    <span class="case-track-tag">291 天</span>
                    <span class="disp-tag disp-none">無</span>
                  </div>
                  <button class="track-status pending" onclick="event.stopPropagation()">⏳ 待追蹤</button>
                </div>
                <div id="t4" class="case-track-detail hidden">
                  <div class="case-track-contact">
                    <span style="font-size:12px;color:var(--gray-500)">聯絡方式：</span>
                    <span class="contact-chip">📞 個案 0912-345-678</span>
                    <span class="contact-chip">💬 家屬 陳小明 0923-456-789</span>
                  </div>
                  <div class="case-track-questions">
                    <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有急診？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有再入院？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">出院後14日內是否有再入院？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">出院後一年內是否有死亡？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">管路是否移除？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">是否有非計畫性管路滑脫？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                  </div>
                  <div class="form-group" style="margin-bottom:12px">
                    <label style="font-size:12px;font-weight:500;color:var(--gray-600)">備註</label>
                    <input class="note-input"
                      style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px"
                      placeholder="點擊輸入備註…">
                  </div>
                  <div class="case-track-footer">
                    <span style="font-size:11px;color:var(--gray-400)">尚未追蹤</span>
                    <button class="btn btn-primary btn-sm" onclick="markDone('t4','tb4')">✓ 標記為已追蹤</button>
                  </div>
                </div>
              </div>

              <!-- 個案 5：無法聯繫 -->
              <div class="case-track-item">
                <div class="case-track-row" onclick="toggleTrack('t5')">
                  <button class="case-track-expand-btn" id="tb5">▶</button>
                  <div class="case-track-name">黃建國</div>
                  <div class="case-track-meta">
                    <span class="badge badge-teal" style="font-size:10px">脊髓損傷</span>
                    <span class="case-track-tag">🏡 居家</span>
                    <span class="case-track-tag">開案 07/15</span>
                    <span class="case-track-tag">結案 10/20/2025</span>
                    <span class="case-track-tag">246 天</span>
                    <span class="disp-tag disp-home">居家醫療</span>
                  </div>
                  <button class="track-status failed" onclick="event.stopPropagation()">✕ 無法聯繫</button>
                </div>
                <div id="t5" class="case-track-detail hidden">
                  <div class="case-track-contact">
                    <span style="font-size:12px;color:var(--gray-500)">聯絡方式：</span>
                    <span class="contact-chip">📞 個案 0934-567-890</span>
                    <span class="contact-chip">💬 家屬 黃太太 0945-678-901</span>
                  </div>
                  <div class="info-note amber" style="margin-bottom:12px">電話多次無人接聽，已寄掛號信。</div>
                  <div class="case-track-questions">
                    <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有急診？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有再入院？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">出院後14日內是否有再入院？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">出院後一年內是否有死亡？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">管路是否移除？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">是否有非計畫性管路滑脫？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                  </div>
                  <div class="form-group" style="margin-bottom:12px">
                    <label style="font-size:12px;font-weight:500;color:var(--gray-600)">備註</label>
                    <input class="note-input"
                      style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px"
                      value="電話多次無人接聽，已寄掛號信">
                  </div>
                  <div class="case-track-footer">
                    <span style="font-size:11px;color:var(--gray-400)">最後嘗試聯繫：2026/01/20</span>
                    <button class="btn btn-primary btn-sm" onclick="markDone('t5','tb5')">✓ 標記為已追蹤</button>
                  </div>
                </div>
              </div>

              <!-- 個案 6：未追蹤 -->
              <div class="case-track-item">
                <div class="case-track-row" onclick="toggleTrack('t6')">
                  <button class="case-track-expand-btn" id="tb6">▶</button>
                  <div class="case-track-name">王淑芬</div>
                  <div class="case-track-meta">
                    <span class="badge badge-purple" style="font-size:10px">骨科</span>
                    <span class="case-track-tag">☀️ 日照</span>
                    <span class="case-track-tag">開案 07/01</span>
                    <span class="case-track-tag">結案 09/15/2025</span>
                    <span class="case-track-tag">281 天</span>
                    <span class="disp-tag disp-none">無</span>
                  </div>
                  <button class="track-status not-started" onclick="event.stopPropagation()">— 未追蹤</button>
                </div>
                <div id="t6" class="case-track-detail hidden">
                  <div class="case-track-contact">
                    <span style="font-size:12px;color:var(--gray-500)">聯絡方式：</span>
                    <span class="contact-chip">📞 個案 0923-456-789</span>
                    <span class="contact-chip">💬 家屬 王小華 0934-789-012</span>
                  </div>
                  <div class="case-track-questions">
                    <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有急診？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">出院後30日內是否有再入院？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">出院後14日內是否有再入院？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">出院後一年內是否有死亡？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">管路是否移除？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                    <div class="case-track-q"><span class="case-track-q-label">是否有非計畫性管路滑脫？</span>
                      <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button>
                      </div>
                    </div>
                  </div>
                  <div class="form-group" style="margin-bottom:12px">
                    <label style="font-size:12px;font-weight:500;color:var(--gray-600)">備註</label>
                    <input class="note-input"
                      style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px"
                      placeholder="點擊輸入備註…">
                  </div>
                  <div class="case-track-footer">
                    <span style="font-size:11px;color:var(--gray-400)">尚未追蹤</span>
                    <button class="btn btn-primary btn-sm" onclick="markDone('t6','tb6')">✓ 標記為已追蹤</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div><!-- /tab-nhia -->

      <!-- ════ 院內指標 tab ════ -->
      <div id="tab-internal" class="hidden">

        <div class="filter-card">
          <div class="filter-card-header">
            <div class="filter-card-title">篩選條件</div>
          </div>
          <div class="filter-row">
            <div class="filter-group">
              <div class="filter-label">統計年度</div>
              <select class="filter-control">
                <option>2025 年</option>
                <option selected>2026 年</option>
              </select>
            </div>
            <div class="filter-group">
              <div class="filter-label">月份區間（起）</div>
              <select class="filter-control">
                <option selected>1 月</option>
                <option>2 月</option>
                <option>3 月</option>
                <option>4 月</option>
                <option>5 月</option>
                <option>6 月</option>
              </select>
            </div>
            <div class="filter-sep">～</div>
            <div class="filter-group">
              <div class="filter-label">月份區間（迄）</div>
              <select class="filter-control">
                <option>1 月</option>
                <option>2 月</option>
                <option>3 月</option>
                <option>4 月</option>
                <option>5 月</option>
                <option selected>6 月</option>
              </select>
            </div>
            <div class="filter-group">
              <div class="filter-label">疾病別</div>
              <select class="filter-control">
                <option selected>全部</option>
                <option>CVA</option>
                <option>骨科</option>
                <option>COPD</option>
              </select>
            </div>
            <div class="filter-group">
              <div class="filter-label">照護模式</div>
              <select class="filter-control">
                <option selected>全部</option>
                <option>住院</option>
                <option>日照</option>
                <option>居家</option>
              </select>
            </div>
            <div><button class="btn btn-primary btn-sm" style="margin-top:20px">套用篩選</button></div>
          </div>
          <div class="filter-result">
            <div class="filter-result-text">符合個案：</div>
            <div class="filter-result-count">89</div>
            <div class="filter-result-text">人（含進行中個案）</div>
          </div>
        </div>

        <!-- 院內指標勾選 -->
        <div class="section-card" style="margin-bottom:16px">
          <div class="sc-header">
            <div class="sc-title">選擇要顯示的指標</div>
            <span style="font-size:11px;color:var(--gray-400)">可依需求自由勾選</span>
          </div>
          <div class="sc-body" style="padding:16px">
            <div class="export-check-grid">
              <label class="export-check-item"><input type="checkbox" checked> 各疾病別個案數量</label>
              <label class="export-check-item"><input type="checkbox" checked> 各照護模式比例（住院/日照/居家）</label>
              <label class="export-check-item"><input type="checkbox" checked> 平均照護天數</label>
              <label class="export-check-item"><input type="checkbox" checked> 展延成功率</label>
              <label class="export-check-item"><input type="checkbox"> 平均巴氏量表進步分數</label>
              <label class="export-check-item"><input type="checkbox"> 轉介來源分佈</label>
              <label class="export-check-item"><input type="checkbox"> 結案後服務轉介比例</label>
              <label class="export-check-item"><input type="checkbox"> 各月份收案趨勢</label>
              <label class="export-check-item"><input type="checkbox"> 30日內再入院率</label>
              <label class="export-check-item"><input type="checkbox"> 一年內死亡率</label>
            </div>
          </div>
        </div>

        <!-- 院內指標結果 -->
        <div class="indicator-grid">
          <div class="indicator-card complete" onclick="openModal('modal-indicator-detail')">
            <div class="indicator-name">各疾病別個案數</div>
            <div class="indicator-value">89 <span>人</span></div>
            <div class="indicator-progress">
              <div class="indicator-progress-bar" style="width:100%"></div>
            </div>
            <div class="indicator-tracking">CVA 34・骨科 28・COPD 15・其他 12</div>
          </div>
          <div class="indicator-card complete" onclick="openModal('modal-indicator-detail')">
            <div class="indicator-name">各照護模式比例</div>
            <div class="indicator-value">住院 <span>62%</span></div>
            <div class="indicator-progress">
              <div class="indicator-progress-bar" style="width:100%"></div>
            </div>
            <div class="indicator-tracking">日照 28%・居家 10%</div>
          </div>
          <div class="indicator-card complete" onclick="openModal('modal-indicator-detail')">
            <div class="indicator-name">平均照護天數</div>
            <div class="indicator-value">38.2 <span>天</span></div>
            <div class="indicator-progress">
              <div class="indicator-progress-bar" style="width:100%"></div>
            </div>
            <div class="indicator-tracking">住院 42天・日照 35天・居家 28天</div>
          </div>
          <div class="indicator-card complete" onclick="openModal('modal-indicator-detail')">
            <div class="indicator-name">展延成功率</div>
            <div class="indicator-value">78.4 <span>%</span></div>
            <div class="indicator-progress">
              <div class="indicator-progress-bar" style="width:100%"></div>
            </div>
            <div class="indicator-tracking">申請 51 件・通過 40 件</div>
          </div>
        </div>
      </div><!-- /tab-internal -->

    </div><!-- /content -->
  </div><!-- /main -->


  <!-- ══ MODALS ══ -->

  <!-- 指標明細 -->
  <div id="modal-indicator-detail" class="modal-overlay hidden">
    <div class="modal modal-lg">
      <div class="modal-header">
        <div>
          <div class="modal-title">📊 30日內急診率・計算明細</div>
          <div style="font-size:12px;color:var(--gray-500);margin-top:2px">2026年 2–6月・PAC成功結案・全疾病別・全模式</div>
        </div>
        <button class="modal-close" onclick="closeModal('modal-indicator-detail')">✕</button>
      </div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px">
          <div style="background:var(--blue-light);border-radius:8px;padding:14px;text-align:center">
            <div style="font-size:11px;color:var(--blue-dark);margin-bottom:4px">分母（已追蹤個案）</div>
            <div style="font-size:28px;font-weight:700;color:var(--blue)">31</div>
          </div>
          <div style="background:var(--red-light);border-radius:8px;padding:14px;text-align:center">
            <div style="font-size:11px;color:var(--red);margin-bottom:4px">分子（出院後30日內急診）</div>
            <div style="font-size:28px;font-weight:700;color:var(--red)">4</div>
          </div>
          <div style="background:var(--amber-light);border-radius:8px;padding:14px;text-align:center">
            <div style="font-size:11px;color:var(--amber);margin-bottom:4px">目前計算結果</div>
            <div style="font-size:28px;font-weight:700;color:var(--amber)">12.9%</div>
          </div>
        </div>
        <div class="info-note amber">⚠️ 尚有 16 人未完成追蹤，最終數值待全數追蹤後才準確。</div>
        <div style="font-size:13px;font-weight:600;color:var(--gray-700);margin-bottom:10px">分子個案列表（出院後30日內有急診）</div>
        <table class="tracking-table" style="border:1px solid var(--gray-200);border-radius:8px;overflow:hidden">
          <thead>
            <tr>
              <th>姓名</th>
              <th>疾病別</th>
              <th>模式</th>
              <th>結案日</th>
              <th>急診日期</th>
              <th>備註</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>李文雄</strong></td>
              <td>COPD</td>
              <td>住院</td>
              <td>07/05</td>
              <td>07/18</td>
              <td>肺炎急性惡化</td>
            </tr>
            <tr>
              <td><strong>蔡美玲</strong></td>
              <td>帕金森氏症</td>
              <td>日照</td>
              <td>08/30</td>
              <td>09/10</td>
              <td>跌倒骨折</td>
            </tr>
            <tr>
              <td><strong>許○○</strong></td>
              <td>心衰竭</td>
              <td>住院</td>
              <td>07/01</td>
              <td>07/25</td>
              <td>心衰竭加重</td>
            </tr>
            <tr>
              <td><strong>謝○○</strong></td>
              <td>骨科</td>
              <td>住院</td>
              <td>07/03</td>
              <td>07/20</td>
              <td>傷口感染</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-indicator-detail')">關閉</button>
        <button class="btn btn-primary">匯出此指標明細</button>
      </div>
    </div>
  </div>

  <!-- 記錄追蹤 -->
  <div id="modal-log-track" class="modal-overlay hidden">
    <div class="modal">
      <div class="modal-header">
        <div class="modal-title">📞 記錄追蹤結果・陳志明</div>
        <button class="modal-close" onclick="closeModal('modal-log-track')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-note blue">個案電話：0912-345-678　家屬（陳小明）：0923-111-222</div>
        <div class="form-group">
          <label>追蹤狀態</label>
          <select class="form-control">
            <option>已成功聯繫</option>
            <option>無法聯繫（持續嘗試）</option>
            <option>無法聯繫（放棄）</option>
          </select>
        </div>
        <div class="form-group">
          <label>追蹤日期</label>
          <input class="form-control" type="date" value="2026-06-23">
        </div>
        <div style="font-size:13px;font-weight:600;color:var(--gray-700);margin-bottom:10px">追蹤問題填寫</div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px">
          <div
            style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1px solid var(--gray-200);border-radius:7px">
            <span style="font-size:13px;color:var(--gray-700)">出院後30日內是否有急診？</span>
            <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div>
          </div>
          <div
            style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1px solid var(--gray-200);border-radius:7px">
            <span style="font-size:13px;color:var(--gray-700)">出院後30日內是否有再入院？</span>
            <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div>
          </div>
          <div
            style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1px solid var(--gray-200);border-radius:7px">
            <span style="font-size:13px;color:var(--gray-700)">出院後14日內是否有再入院？</span>
            <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div>
          </div>
          <div
            style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1px solid var(--gray-200);border-radius:7px">
            <span style="font-size:13px;color:var(--gray-700)">出院後一年內是否有死亡？</span>
            <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div>
          </div>
          <div
            style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1px solid var(--gray-200);border-radius:7px">
            <span style="font-size:13px;color:var(--gray-700)">管路是否移除？</span>
            <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div>
          </div>
          <div
            style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1px solid var(--gray-200);border-radius:7px">
            <span style="font-size:13px;color:var(--gray-700)">是否有非計畫性管路滑脫？</span>
            <div class="yn-toggle"><button class="yn-btn yes">是</button><button class="yn-btn no">否</button></div>
          </div>
        </div>
        <div class="form-group">
          <label>備註</label>
          <textarea class="form-control" placeholder="填寫追蹤過程或其他備注…"></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-log-track')">取消</button>
        <button class="btn btn-primary" onclick="closeModal('modal-log-track')">儲存追蹤結果</button>
      </div>
    </div>
  </div>

  <!-- 管理追蹤欄位 -->
  <div id="modal-manage-fields" class="modal-overlay hidden">
    <div class="modal">
      <div class="modal-header">
        <div class="modal-title">⚙ 管理追蹤欄位</div>
        <button class="modal-close" onclick="closeModal('modal-manage-fields')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-note blue">系統欄位（藍色）為固定欄位，不可刪除。自訂欄位可新增、停用或刪除。</div>
        <div class="field-list">
          <div class="field-item system">
            <span class="field-drag">⠿</span>
            <span class="field-name">出院後30日內是否有急診？</span>
            <span class="field-type">是/否</span>
            <span class="field-badge-sys">健保署</span>
            <button class="field-toggle on"></button>
          </div>
          <div class="field-item system">
            <span class="field-drag">⠿</span>
            <span class="field-name">出院後30日內是否有再入院？</span>
            <span class="field-type">是/否</span>
            <span class="field-badge-sys">健保署</span>
            <button class="field-toggle on"></button>
          </div>
          <div class="field-item system">
            <span class="field-drag">⠿</span>
            <span class="field-name">出院後14日內是否有再入院？</span>
            <span class="field-type">是/否</span>
            <span class="field-badge-sys">健保署</span>
            <button class="field-toggle on"></button>
          </div>
          <div class="field-item system">
            <span class="field-drag">⠿</span>
            <span class="field-name">出院後一年內是否有死亡？</span>
            <span class="field-type">是/否</span>
            <span class="field-badge-sys">健保署</span>
            <button class="field-toggle on"></button>
          </div>
          <div class="field-item system">
            <span class="field-drag">⠿</span>
            <span class="field-name">管路是否移除？</span>
            <span class="field-type">是/否</span>
            <span class="field-badge-sys">健保署</span>
            <button class="field-toggle on"></button>
          </div>
          <div class="field-item system">
            <span class="field-drag">⠿</span>
            <span class="field-name">是否有非計畫性管路滑脫？</span>
            <span class="field-type">是/否</span>
            <span class="field-badge-sys">健保署</span>
            <button class="field-toggle on"></button>
          </div>
          <div class="field-item">
            <span class="field-drag">⠿</span>
            <span class="field-name">出院後是否有使用心衰竭治療指引用藥？</span>
            <span class="field-type">是/否</span>
            <button class="field-toggle on"></button>
            <button class="field-delete">🗑</button>
          </div>
          <div class="field-item">
            <span class="field-drag">⠿</span>
            <span class="field-name">個案目前生活自理狀況（自填）</span>
            <span class="field-type">文字</span>
            <button class="field-toggle off"></button>
            <button class="field-delete">🗑</button>
          </div>
        </div>
        <div style="border:1px dashed var(--gray-300);border-radius:7px;padding:14px">
          <div style="font-size:12px;font-weight:600;color:var(--gray-600);margin-bottom:10px">新增追蹤欄位</div>
          <div style="display:flex;gap:8px;align-items:flex-end">
            <div class="form-group" style="flex:1;margin-bottom:0">
              <label>欄位名稱</label>
              <input class="form-control" placeholder="例：出院後是否回診復健？">
            </div>
            <div class="form-group" style="margin-bottom:0">
              <label>類型</label>
              <select class="form-control" style="min-width:100px">
                <option>是/否</option>
                <option>文字</option>
                <option>數字</option>
              </select>
            </div>
            <button class="btn btn-primary btn-sm" style="flex-shrink:0">新增</button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-manage-fields')">取消</button>
        <button class="btn btn-primary" onclick="closeModal('modal-manage-fields')">儲存設定</button>
      </div>
    </div>
  </div>

  <!-- 管理篩選條件 -->
  <div id="modal-manage-filters" class="modal-overlay hidden">
    <div class="modal modal-sm">
      <div class="modal-header">
        <div class="modal-title">⚙ 管理篩選條件</div>
        <button class="modal-close" onclick="closeModal('modal-manage-filters')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-note amber">當健保署政策更新時，可在此新增或調整篩選條件。</div>
        <div class="field-list">
          <div class="field-item system">
            <span class="field-name">統計年度</span>
            <span class="field-badge-sys">必填</span>
            <button class="field-toggle on"></button>
          </div>
          <div class="field-item system">
            <span class="field-name">月份區間</span>
            <span class="field-badge-sys">必填</span>
            <button class="field-toggle on"></button>
          </div>
          <div class="field-item system">
            <span class="field-name">結案類型</span>
            <span class="field-badge-sys">必填</span>
            <button class="field-toggle on"></button>
          </div>
          <div class="field-item">
            <span class="field-name">疾病別</span>
            <button class="field-toggle on"></button>
            <button class="field-delete">🗑</button>
          </div>
          <div class="field-item">
            <span class="field-name">照護模式</span>
            <button class="field-toggle on"></button>
            <button class="field-delete">🗑</button>
          </div>
          <div class="field-item">
            <span class="field-name">負責個管師</span>
            <button class="field-toggle off"></button>
            <button class="field-delete">🗑</button>
          </div>
        </div>
        <div style="display:flex;gap:8px">
          <input class="form-control" placeholder="新增篩選條件名稱…" style="flex:1">
          <button class="btn btn-primary btn-sm">新增</button>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-manage-filters')">取消</button>
        <button class="btn btn-primary" onclick="closeModal('modal-manage-filters')">儲存</button>
      </div>
    </div>
  </div>

  <!-- 匯出報告 -->
  <div id="modal-export" class="modal-overlay hidden">
    <div class="modal modal-lg">
      <div class="modal-header">
        <div class="modal-title">📤 匯出成果報告</div>
        <button class="modal-close" onclick="closeModal('modal-export')">✕</button>
      </div>
      <div class="modal-body">
        <div class="info-note amber">⚠️ 目前尚有 16 位個案未完成追蹤，建議追蹤完畢後再匯出，以確保數值準確。</div>

        <div class="export-section">
          <div class="export-section-title">匯出類型</div>
          <div style="display:flex;gap:10px;margin-bottom:4px">
            <label
              style="display:flex;align-items:center;gap:7px;font-size:13px;cursor:pointer;padding:10px 14px;border:1px solid var(--gray-200);border-radius:7px;flex:1">
              <input type="radio" name="export-type" checked style="accent-color:var(--blue)">
              <div>
                <div style="font-weight:600">健保署版本</div>
                <div style="font-size:11px;color:var(--gray-400);margin-top:2px">固定格式，含全部9項品質指標</div>
              </div>
            </label>
            <label
              style="display:flex;align-items:center;gap:7px;font-size:13px;cursor:pointer;padding:10px 14px;border:1px solid var(--gray-200);border-radius:7px;flex:1">
              <input type="radio" name="export-type" style="accent-color:var(--blue)">
              <div>
                <div style="font-weight:600">院內版本</div>
                <div style="font-size:11px;color:var(--gray-400);margin-top:2px">自選指標，用於宣傳、演講或成果報告</div>
              </div>
            </label>
          </div>
        </div>

        <div class="export-section">
          <div class="export-section-title">匯出格式</div>
          <div style="display:flex;gap:8px">
            <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer"><input type="radio"
                name="export-fmt" checked style="accent-color:var(--blue)"> Word (.docx)</label>
            <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer"><input type="radio"
                name="export-fmt" style="accent-color:var(--blue)"> PDF</label>
            <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer"><input type="radio"
                name="export-fmt" style="accent-color:var(--blue)"> Excel (.xlsx)</label>
          </div>
        </div>

        <div class="export-section">
          <div class="export-section-title">報告內容預覽</div>
          <div style="background:var(--gray-50);border:1px solid var(--gray-200);border-radius:8px;padding:16px">
            <div style="font-size:13px;font-weight:700;text-align:center;margin-bottom:12px;color:var(--gray-700)">
              全民健康保險急性後期整合照護計劃・成果報告書</div>
            <div style="font-size:11px;color:var(--gray-500);text-align:center;margin-bottom:14px">
              統計期間：2026年2月～6月　員郭醫院　個管師：林美惠</div>
            <div class="divider" style="margin:10px 0"></div>
            <div class="indicator-detail-row">
              <div>
                <div class="indicator-detail-name">一年內死亡率</div>
                <div class="indicator-formula">4 / 31 已追蹤個案</div>
              </div>
              <div class="indicator-detail-val">4.8%</div>
            </div>
            <div class="indicator-detail-row">
              <div>
                <div class="indicator-detail-name">30日內急診率</div>
                <div class="indicator-formula">4 / 31 已追蹤個案（待完成 16 人）</div>
              </div>
              <div class="indicator-detail-val" style="color:var(--amber)">12.9% ⚠️</div>
            </div>
            <div class="indicator-detail-row">
              <div>
                <div class="indicator-detail-name">14日內再入院率</div>
                <div class="indicator-formula">2 / 31 已追蹤個案</div>
              </div>
              <div class="indicator-detail-val" style="color:var(--amber)">6.5% ⚠️</div>
            </div>
            <div class="indicator-detail-row">
              <div>
                <div class="indicator-detail-name">30日內再入院率</div>
                <div class="indicator-formula">3 / 31 已追蹤個案</div>
              </div>
              <div class="indicator-detail-val" style="color:var(--amber)">9.7% ⚠️</div>
            </div>
            <div class="indicator-detail-row">
              <div>
                <div class="indicator-detail-name">個案之功能進步情形</div>
                <div class="indicator-formula">從系統量表自動計算</div>
              </div>
              <div class="indicator-detail-val">72.3%</div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-export')">取消</button>
        <button class="btn btn-primary" onclick="closeModal('modal-export')">確認匯出</button>
      </div>
    </div>
  </div>

  <script>
    function toggleTrack(id) {
      const detail = document.getElementById(id);
      const num = id.replace('t', '');
      const btn = document.getElementById('tb' + num);
      const isHidden = detail.classList.contains('hidden');
      detail.classList.toggle('hidden', !isHidden);
      btn.textContent = isHidden ? '▼' : '▶';
      btn.classList.toggle('open', isHidden);
    }

    function markDone(detailId, btnId) {
      // Find the track-status button in this item
      const detail = document.getElementById(detailId);
      const item = detail.parentElement;
      const statusBtn = item.querySelector('.track-status');
      statusBtn.className = 'track-status done';
      statusBtn.textContent = '✓ 已追蹤';
      // Update footer
      const footer = detail.querySelector('.case-track-footer');
      const today = new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\\//g, '/');
      footer.querySelector('span').textContent = '最後追蹤：' + today + '・林美惠';
      footer.querySelector('button').outerHTML = '<button class="btn btn-secondary btn-sm">重新填寫</button>';
    }

    function switchTab(el, tab) {
      document.querySelectorAll('.tabs .tab').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
      document.getElementById('tab-nhia').classList.toggle('hidden', tab !== 'nhia');
      document.getElementById('tab-internal').classList.toggle('hidden', tab !== 'internal');
    }

    function openModal(id) { document.getElementById(id).classList.remove('hidden') }
    function closeModal(id) { document.getElementById(id).classList.add('hidden') }

    document.querySelectorAll('.modal-overlay').forEach(o => {
      o.addEventListener('click', function (e) { if (e.target === this) this.classList.add('hidden') });
    });

    // Yes/No toggle
    document.querySelectorAll('.yn-toggle').forEach(toggle => {
      toggle.querySelectorAll('.yn-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          toggle.querySelectorAll('.yn-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
        });
      });
    });

    // Field toggle
    document.querySelectorAll('.field-toggle').forEach(btn => {
      btn.addEventListener('click', function () {
        this.classList.toggle('on');
        this.classList.toggle('off');
      });
    });
  <\/script>
</body>

</html>`,bg=`<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PAC 個人資訊頁</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --blue:#2563EB;--blue-light:#EFF6FF;--blue-mid:#BFDBFE;--blue-dark:#1E40AF;
  --gray-50:#F8FAFC;--gray-100:#F1F5F9;--gray-200:#E2E8F0;--gray-300:#CBD5E1;
  --gray-400:#94A3B8;--gray-500:#64748B;--gray-600:#475569;--gray-700:#334155;--gray-900:#0F172A;
  --green:#16A34A;--green-light:#DCFCE7;--green-mid:#BBF7D0;
  --amber:#D97706;--amber-light:#FEF3C7;
  --red:#DC2626;--red-light:#FEE2E2;
  --purple:#7C3AED;--purple-light:#EDE9FE;
  --teal:#0D9488;--teal-light:#CCFBF1;
  --white:#FFFFFF;
}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans TC',sans-serif;background:var(--gray-50);color:var(--gray-900);height:100vh;display:flex;overflow:hidden;font-size:14px}

/* Sidebar */
.sidebar{width:192px;min-width:192px;background:var(--white);border-right:1px solid var(--gray-200);display:flex;flex-direction:column;z-index:10}
.sidebar-logo{padding:16px 16px 13px;border-bottom:1px solid var(--gray-200)}
.logo-text{font-size:14px;font-weight:700;color:var(--blue)}
.logo-sub{font-size:11px;color:var(--gray-400);margin-top:2px}
.sidebar-nav{padding:6px 0;flex:1}
.nav-item{display:flex;align-items:center;gap:8px;padding:9px 14px;font-size:13px;color:var(--gray-500);border-left:3px solid transparent;cursor:default}
.nav-item.active{background:var(--blue-light);color:var(--blue);font-weight:600;border-left-color:var(--blue)}
.nav-item.disabled{opacity:.38;cursor:not-allowed}
.sidebar-user{margin-top: auto;padding:11px 14px;border-top:1px solid var(--gray-200)}
.user-row{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.user-avatar{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0}
.av-mgr{background:var(--amber-light);color:var(--amber)}
.av-sup{background:var(--purple-light);color:var(--purple)}
.av-pt{background:var(--blue-light);color:var(--blue)}
.av-ot{background:#FCE7F3;color:#9D174D}
.av-st{background:var(--green-light);color:var(--green)}
.av-nur{background:var(--teal-light);color:var(--teal)}
.av-doc{background:#FEF3C7;color:#92400E}
.av-pha{background:var(--purple-light);color:var(--purple)}
.av-nut{background:var(--green-light);color:var(--green)}
.av-adm{background:var(--gray-100);color:var(--gray-600)}
.user-name{font-size:12px;font-weight:600;color:var(--gray-700)}
.user-role-label{font-size:11px;color:var(--gray-400)}
.role-switcher{position:relative}
.role-select{width:100%;padding:5px 24px 5px 8px;border:1px solid var(--gray-200);border-radius:6px;font-size:11px;font-weight:600;color:var(--gray-600);background:var(--white);cursor:pointer;appearance:none;outline:none}
.role-select:focus{border-color:var(--blue)}
.role-arrow{position:absolute;right:7px;top:50%;transform:translateY(-50%);font-size:9px;color:var(--gray-400);pointer-events:none}

/* Main */
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}
.topbar{background:var(--white);border-bottom:1px solid var(--gray-200);padding:0 20px;height:48px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.breadcrumb{font-size:12px;color:var(--gray-500)}
.content{flex:1;overflow-y:auto;padding:28px 32px}

/* Buttons */
.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .15s;white-space:nowrap}
.btn-primary{background:var(--blue);color:var(--white)}.btn-primary:hover{background:var(--blue-dark)}
.btn-secondary{background:var(--white);color:var(--gray-700);border:1px solid var(--gray-300)}.btn-secondary:hover{background:var(--gray-50)}
.btn-ghost{background:transparent;color:var(--blue);border:1px solid var(--blue-mid)}.btn-ghost:hover{background:var(--blue-light)}
.btn-danger{background:var(--white);color:var(--red);border:1px solid #FECACA}.btn-danger:hover{background:var(--red-light)}
.btn-sm{padding:5px 10px;font-size:12px}

/* Profile layout */
.profile-layout{display:grid;grid-template-columns:260px 1fr;gap:24px;max-width:960px}

/* Profile card */
.profile-card{background:var(--white);border:1px solid var(--gray-200);border-radius:12px;padding:24px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:14px;height:fit-content}
.profile-avatar-lg{width:72px;height:72px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:700;flex-shrink:0}
.profile-name{font-size:18px;font-weight:700;color:var(--gray-900)}
.profile-role-badge{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:6px;font-size:12px;font-weight:600;background:var(--gray-100);color:var(--gray-600)}
.profile-dept{font-size:12px;color:var(--gray-500)}
.profile-readonly-note{font-size:11px;color:var(--gray-400);padding:8px 10px;background:var(--gray-50);border-radius:6px;border:1px solid var(--gray-200);width:100%;text-align:left;line-height:1.5}
.profile-divider{width:100%;height:1px;background:var(--gray-100)}
.profile-stat-row{display:flex;gap:16px;width:100%;justify-content:center}
.profile-stat{text-align:center}
.profile-stat-val{font-size:18px;font-weight:700;color:var(--blue)}
.profile-stat-label{font-size:10px;color:var(--gray-400);margin-top:1px}

/* Right column */
.right-col{display:flex;flex-direction:column;gap:16px}

/* Section card */
.section-card{background:var(--white);border:1px solid var(--gray-200);border-radius:12px;overflow:hidden}
.section-header{padding:14px 20px;border-bottom:1px solid var(--gray-100);display:flex;align-items:center;justify-content:space-between}
.section-title{font-size:13px;font-weight:700;color:var(--gray-700);display:flex;align-items:center;gap:7px}
.section-body{padding:18px 20px}

/* Form */
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.form-group{display:flex;flex-direction:column;gap:5px}
.form-group.full{grid-column:span 2}
.form-group label{font-size:11px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.04em}
.form-control{padding:8px 11px;border:1px solid var(--gray-300);border-radius:7px;font-size:13px;color:var(--gray-800);background:var(--white);outline:none;transition:border-color .15s}
.form-control:focus{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}
.form-control[readonly]{background:var(--gray-50);color:var(--gray-500);cursor:default}
.form-control[readonly]:focus{border-color:var(--gray-300);box-shadow:none}
.readonly-hint{font-size:10px;color:var(--gray-400);margin-top:2px}
.form-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:6px}

/* Toggle switch */
.notif-group{display:flex;flex-direction:column;gap:0}
.notif-section-label{font-size:10px;font-weight:700;color:var(--gray-400);text-transform:uppercase;letter-spacing:.06em;padding:12px 0 7px;border-bottom:1px solid var(--gray-100);margin-bottom:2px}
.toggle-row{display:flex;align-items:center;justify-content:space-between;padding:11px 0;border-bottom:1px solid var(--gray-50)}
.toggle-row:last-child{border-bottom:none}
.toggle-info{flex:1;padding-right:16px}
.toggle-label{font-size:13px;font-weight:500;color:var(--gray-800)}
.toggle-desc{font-size:11px;color:var(--gray-400);margin-top:2px}
.toggle{position:relative;display:inline-block;width:38px;height:22px;flex-shrink:0}
.toggle input{opacity:0;width:0;height:0}
.slider{position:absolute;cursor:pointer;inset:0;background:var(--gray-300);border-radius:999px;transition:.2s}
.slider:before{position:absolute;content:'';height:16px;width:16px;left:3px;bottom:3px;background:var(--white);border-radius:50%;transition:.2s;box-shadow:0 1px 3px rgba(0,0,0,.2)}
input:checked+.slider{background:var(--blue)}
input:checked+.slider:before{transform:translateX(16px)}

/* Device list */
.device-list{display:flex;flex-direction:column;gap:10px}
.device-item{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border:1px solid var(--gray-200);border-radius:8px;background:var(--gray-50)}
.device-item.current{border-color:var(--blue-mid);background:var(--blue-light)}
.device-left{display:flex;align-items:center;gap:10px}
.device-icon{font-size:20px}
.device-name{font-size:13px;font-weight:600;color:var(--gray-800)}
.device-meta{font-size:11px;color:var(--gray-500);margin-top:1px}
.device-current-badge{font-size:10px;font-weight:700;color:var(--blue);background:var(--blue-light);border:1px solid var(--blue-mid);padding:2px 7px;border-radius:4px}

/* Password */
.pwd-row{display:flex;flex-direction:column;gap:12px}
.pwd-strength{display:flex;gap:4px;margin-top:4px}
.pwd-bar{height:4px;flex:1;border-radius:999px;background:var(--gray-200)}
.pwd-bar.filled.weak{background:var(--red)}
.pwd-bar.filled.medium{background:var(--amber)}
.pwd-bar.filled.strong{background:var(--green)}

/* Modal */
.modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);display:flex;align-items:center;justify-content:center;z-index:100;backdrop-filter:blur(2px)}
.modal{background:var(--white);border-radius:12px;width:420px;max-width:92vw;box-shadow:0 20px 60px rgba(0,0,0,.15)}
.modal-header{padding:16px 20px 13px;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;justify-content:space-between}
.modal-title{font-size:15px;font-weight:700}
.modal-close{width:25px;height:25px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}
.modal-close:hover{background:var(--gray-200)}
.modal-body{padding:16px 20px}
.modal-footer{padding:12px 20px;border-top:1px solid var(--gray-200);display:flex;justify-content:flex-end;gap:7px}
.hidden{display:none!important}
</style>
</head>
<body>

<!-- SIDEBAR -->
<aside class="sidebar">
<!--
  <div class="sidebar-logo">
    <div class="logo-text">PAC 管理系統</div>
    <div class="logo-sub">急性後期照護</div>
  </div>
  <nav class="sidebar-nav">
    <div class="nav-item disabled">🏠 個人儀表板</div>
    <div class="nav-item disabled">📋 個案管理</div>
    <div class="nav-item disabled">🛏 病床管理</div>
    <div class="nav-item disabled">📅 班表總覽頁</div>
    <div class="nav-item disabled">🏡 居家排班管理</div>
    <div class="nav-item disabled">📊 評估量表</div>
    <div class="nav-item disabled">💪 復健紀錄</div>
    <div class="nav-item disabled">📤 指標匯出</div>
    <div class="nav-item active">👤 個人資訊</div>
  </nav>
-->
  <div class="sidebar-user">
    <div class="user-row">
      <div class="user-avatar av-mgr" id="user-av">林</div>
      <div>
        <div class="user-name" id="user-name">林美惠</div>
        <div class="user-role-label" id="user-role-label">個案管理師</div>
      </div>
    </div>
    <div class="role-switcher">
      <select class="role-select" id="role-select" onchange="switchRole(this.value)">
        <option value="mgr">個管師</option>
        <option value="sup">復健主管</option>
        <option value="pt">PT（物理治療師）</option>
        <option value="ot">OT（職能治療師）</option>
        <option value="st">ST（語言治療師）</option>
        <option value="nur">護理師</option>
        <option value="doc">醫師</option>
        <option value="pha">藥師</option>
        <option value="nut">營養師</option>
        <option value="adm">行政</option>
      </select>
      <span class="role-arrow">▾</span>
    </div>
  </div>
</aside>

<!-- MAIN -->
<div class="main">
  <div class="topbar">
    <div class="breadcrumb">個人資訊</div>
    <div style="font-size:11px;color:var(--gray-400)">2026/06/25 週四</div>
  </div>
  <div class="content">
    <div class="profile-layout">

      <!-- 左側：個人卡片 -->
      <div>
        <div class="profile-card">
          <div class="profile-avatar-lg av-mgr" id="profile-av-lg">林</div>
          <div>
            <div class="profile-name" id="profile-name">林美惠</div>
            <div class="profile-dept" id="profile-dept">復健科・員郭醫院</div>
          </div>
          <div class="profile-role-badge" id="profile-role-badge">🔒 個案管理師</div>
          <div class="profile-readonly-note">ℹ️ 角色與所屬單位由系統管理員設定，如需變更請聯繫資訊部門。</div>
          <div class="profile-divider"></div>
          <div class="profile-stat-row">
            <div class="profile-stat">
              <div class="profile-stat-val" id="profile-stat-val">24</div>
              <div class="profile-stat-label" id="profile-stat-label">管理個案</div>
            </div>
            <div class="profile-stat">
              <div class="profile-stat-val" style="color:var(--green)">3年</div>
              <div class="profile-stat-label">在職年資</div>
            </div>
          </div>
          <div class="profile-divider"></div>
          <div style="width:100%;text-align:left">
            <div style="font-size:11px;color:var(--gray-400);margin-bottom:6px">最後登入</div>
            <div style="font-size:12px;color:var(--gray-600)">2026/06/25 08:34<br>Chrome・Mac</div>
          </div>
        </div>
      </div>

      <!-- 右側 -->
      <div class="right-col">

        <!-- 個人資料 -->
        <div class="section-card">
          <div class="section-header">
            <div class="section-title">👤 個人資料</div>
            <button class="btn btn-ghost btn-sm" id="edit-btn" onclick="toggleEdit()">✏️ 編輯</button>
          </div>
          <div class="section-body">
            <div class="form-grid">
              <div class="form-group">
                <label>姓名</label>
                <input class="form-control" id="f-name" value="林美惠" readonly>
              </div>
              <div class="form-group">
                <label>職稱</label>
                <input class="form-control" id="f-title" value="個案管理師" readonly>
              </div>
              <div class="form-group">
                <label>所屬單位</label>
                <input class="form-control" value="復健科" readonly>
                <div class="readonly-hint">由系統管理員設定，不可自行修改</div>
              </div>
              <div class="form-group">
                <label>角色</label>
                <input class="form-control" id="f-role" value="個管師" readonly>
                <div class="readonly-hint">由系統管理員設定，不可自行修改</div>
              </div>
              <div class="form-group">
                <label>電子郵件</label>
                <input class="form-control" id="f-email" value="lin.meihui@yuankuo.com.tw" readonly>
              </div>
              <div class="form-group">
                <label>電話號碼</label>
                <input class="form-control" id="f-phone" value="0912-345-678" readonly>
              </div>
            </div>
            <div class="form-actions hidden" id="edit-actions">
              <button class="btn btn-secondary btn-sm" onclick="cancelEdit()">取消</button>
              <button class="btn btn-primary btn-sm" onclick="saveEdit()">儲存變更</button>
            </div>
          </div>
        </div>

        <!-- 通知設定 -->
        <div class="section-card">
          <div class="section-header">
            <div class="section-title">🔔 通知設定</div>
            <span style="font-size:11px;color:var(--gray-400)">系統內推播</span>
          </div>
          <div class="section-body">
            <div class="notif-group" id="notif-settings">
              <!-- 由 JS 渲染 -->
            </div>
          </div>
        </div>

        <!-- 安全與登入 -->
        <div class="section-card">
          <div class="section-header">
            <div class="section-title">🔒 安全與登入</div>
          </div>
          <div class="section-body">
            <!-- 密碼變更 -->
            <div style="margin-bottom:20px">
              <div style="font-size:12px;font-weight:700;color:var(--gray-600);margin-bottom:12px">密碼變更</div>
              <div class="pwd-row">
                <div class="form-group">
                  <label>目前密碼</label>
                  <input class="form-control" type="password" placeholder="輸入目前密碼" id="pwd-current">
                </div>
                <div class="form-group">
                  <label>新密碼</label>
                  <input class="form-control" type="password" placeholder="至少 8 個字元" id="pwd-new" oninput="checkPwd(this.value)">
                  <div class="pwd-strength">
                    <div class="pwd-bar" id="pb1"></div>
                    <div class="pwd-bar" id="pb2"></div>
                    <div class="pwd-bar" id="pb3"></div>
                    <div class="pwd-bar" id="pb4"></div>
                  </div>
                  <div style="font-size:10px;color:var(--gray-400);margin-top:2px" id="pwd-hint">需包含大小寫字母與數字</div>
                </div>
                <div class="form-group">
                  <label>確認新密碼</label>
                  <input class="form-control" type="password" placeholder="再次輸入新密碼" id="pwd-confirm">
                </div>
              </div>
              <div style="display:flex;justify-content:flex-end;margin-top:10px">
                <button class="btn btn-primary btn-sm" onclick="alert('密碼已更新')">更新密碼</button>
              </div>
            </div>

            <!-- 登入裝置 -->
            <div style="border-top:1px solid var(--gray-100);padding-top:16px">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
                <div style="font-size:12px;font-weight:700;color:var(--gray-600)">登入裝置紀錄</div>
                <button class="btn btn-danger btn-sm" onclick="openModal('modal-logout-all')">全部登出</button>
              </div>
              <div class="device-list">
                <div class="device-item current">
                  <div class="device-left">
                    <div class="device-icon">💻</div>
                    <div>
                      <div class="device-name">Chrome・MacBook Pro</div>
                      <div class="device-meta">台灣・2026/06/25 08:34 登入</div>
                    </div>
                  </div>
                  <span class="device-current-badge">目前裝置</span>
                </div>
                <div class="device-item">
                  <div class="device-left">
                    <div class="device-icon">📱</div>
                    <div>
                      <div class="device-name">Safari・iPhone 15</div>
                      <div class="device-meta">台灣・2026/06/24 18:10 登入</div>
                    </div>
                  </div>
                  <button class="btn btn-secondary btn-sm" onclick="alert('已登出此裝置')">登出</button>
                </div>
                <div class="device-item">
                  <div class="device-left">
                    <div class="device-icon">💻</div>
                    <div>
                      <div class="device-name">Chrome・Windows PC（復健室電腦）</div>
                      <div class="device-meta">台灣・2026/06/23 14:20 登入</div>
                    </div>
                  </div>
                  <button class="btn btn-secondary btn-sm" onclick="alert('已登出此裝置')">登出</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<!-- Modal：全部登出確認 -->
<div id="modal-logout-all" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title">🔒 確認全部登出</div>
      <button class="modal-close" onclick="closeModal('modal-logout-all')">✕</button>
    </div>
    <div class="modal-body">
      <div style="font-size:13px;color:var(--gray-600);line-height:1.7">將登出所有裝置（包含目前裝置），需重新登入。確定繼續嗎？</div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-logout-all')">取消</button>
      <button class="btn btn-danger" onclick="closeModal('modal-logout-all');alert('已全部登出')">確認登出</button>
    </div>
  </div>
</div>

<script>
// ── 角色資料 ──
const ROLES = {
  mgr:  {name:'林美惠', label:'個案管理師', dept:'復健科', av:'av-mgr', ch:'林', role:'個管師', email:'lin.meihui@yuankuo.com.tw', phone:'0912-345-678', stat:24, statLabel:'管理個案'},
  sup:  {name:'王大明', label:'復健主管', dept:'復健科', av:'av-sup', ch:'王', role:'復健主管', email:'wang.daming@yuankuo.com.tw', phone:'0923-456-789', stat:12, statLabel:'管理治療師'},
  pt:   {name:'黃志豪', label:'PT（物理治療師）', dept:'復健科', av:'av-pt', ch:'黃', role:'復健治療師', email:'huang.zhihao@yuankuo.com.tw', phone:'0934-567-890', stat:8, statLabel:'負責個案'},
  ot:   {name:'李佳穎', label:'OT（職能治療師）', dept:'復健科', av:'av-ot', ch:'李', role:'復健治療師', email:'lee.jiaying@yuankuo.com.tw', phone:'0945-678-901', stat:6, statLabel:'負責個案'},
  st:   {name:'吳怡君', label:'ST（語言治療師）', dept:'復健科', av:'av-st', ch:'吳', role:'復健治療師', email:'wu.yijun@yuankuo.com.tw', phone:'0956-789-012', stat:4, statLabel:'負責個案'},
  nur:  {name:'陳玉玲', label:'護理師', dept:'護理部', av:'av-nur', ch:'陳', role:'護理師', email:'chen.yuling@yuankuo.com.tw', phone:'0967-890-123', stat:15, statLabel:'病房個案'},
  doc:  {name:'張宗達', label:'醫師', dept:'復健科', av:'av-doc', ch:'張', role:'醫師', email:'chang.zongda@yuankuo.com.tw', phone:'0978-901-234', stat:5, statLabel:'PAC 個案'},
  pha:  {name:'林建志', label:'藥師', dept:'藥劑科', av:'av-pha', ch:'林', role:'藥師', email:'lin.jianzhi@yuankuo.com.tw', phone:'0989-012-345', stat:3, statLabel:'本月評估'},
  nut:  {name:'周雅玲', label:'營養師', dept:'營養科', av:'av-nut', ch:'周', role:'營養師', email:'chou.yaling@yuankuo.com.tw', phone:'0990-123-456', stat:3, statLabel:'本月評估'},
  adm:  {name:'蔡書明', label:'行政', dept:'行政部', av:'av-adm', ch:'蔡', role:'行政', email:'tsai.shuming@yuankuo.com.tw', phone:'0901-234-567', stat:8, statLabel:'待批價'},
};

// ── 通知設定（各角色） ──
const NOTIF_SETTINGS = {
  mgr: [
    {section:'需要我處理', items:[
      {id:'n1',label:'展延截止提醒',desc:'個案展延日期前 N 天提醒（由期限設定決定）',on:true},
      {id:'n2',label:'新轉介待收案判斷',desc:'新個案轉介進來，待我判斷是否符合收案條件',on:true},
      {id:'n3',label:'評估量表逾期提醒',desc:'治療師有評估表逾期未填',on:true},
      {id:'n4',label:'待審核：評估修改申請',desc:'復健主管已審核，送我最終審核',on:true},
      {id:'n5',label:'待審核：居家批價',desc:'復健主管已審核批價，送我審核後轉行政',on:true},
    ]},
    {section:'狀態更新', items:[
      {id:'n6',label:'展延通過通知',desc:'健保署回覆展延通過',on:true},
      {id:'n7',label:'展延失敗通知',desc:'健保署回覆展延失敗',on:true},
      {id:'n8',label:'個案入院確認',desc:'行政完成建檔，個案正式入院',on:false},
    ]},
  ],
  sup: [
    {section:'需要我處理', items:[
      {id:'n1',label:'待審核：評估修改申請',desc:'治療師送出修改申請，待我初審',on:true},
      {id:'n2',label:'待審核：換班申請',desc:'治療師送出換班申請',on:true},
      {id:'n3',label:'待審核：居家批價',desc:'治療師確認批價，待我審核後送個管師',on:true},
      {id:'n4',label:'治療師評估逾期提醒',desc:'我管理的治療師有評估表逾期',on:true},
      {id:'n5',label:'居家個案待發佈',desc:'個管師建立新居家個案，待我發佈報名',on:true},
    ]},
    {section:'狀態更新', items:[
      {id:'n6',label:'審核結果通知',desc:'個管師對我送出的申請核准或拒絕',on:true},
      {id:'n7',label:'展延通過通知',desc:'個管師轉發展延通過結果',on:false},
    ]},
  ],
  pt: [
    {section:'需要我處理', items:[
      {id:'n1',label:'評估待填提醒',desc:'有評估量表應填日期即將到來',on:true},
      {id:'n2',label:'評估逾期提醒',desc:'有評估量表已逾期未填',on:true},
      {id:'n3',label:'新居家個案可報名',desc:'有新居家個案開放報名',on:true},
    ]},
    {section:'狀態更新', items:[
      {id:'n4',label:'修改申請核准通知',desc:'復健主管或個管師核准我的修改申請',on:true},
      {id:'n5',label:'修改申請拒絕通知',desc:'修改申請被拒絕',on:true},
      {id:'n6',label:'居家抽籤結果',desc:'居家個案報名抽籤結果出爐',on:true},
      {id:'n7',label:'展延通過通知',desc:'個管師轉發展延通過，療程可繼續',on:false},
    ]},
  ],
  ot: [
    {section:'需要我處理', items:[
      {id:'n1',label:'評估待填提醒',desc:'有評估量表應填日期即將到來',on:true},
      {id:'n2',label:'評估逾期提醒',desc:'有評估量表已逾期未填',on:true},
      {id:'n3',label:'新居家個案可報名',desc:'有新居家個案開放報名',on:true},
    ]},
    {section:'狀態更新', items:[
      {id:'n4',label:'修改申請核准通知',desc:'修改申請已通過',on:true},
      {id:'n5',label:'修改申請拒絕通知',desc:'修改申請被拒絕',on:true},
      {id:'n6',label:'居家抽籤結果',desc:'居家個案報名抽籤結果出爐',on:true},
      {id:'n7',label:'展延通過通知',desc:'療程可繼續',on:false},
    ]},
  ],
  st: [
    {section:'需要我處理', items:[
      {id:'n1',label:'評估待填提醒',desc:'有評估量表應填日期即將到來',on:true},
      {id:'n2',label:'評估逾期提醒',desc:'有評估量表已逾期未填',on:true},
    ]},
    {section:'狀態更新', items:[
      {id:'n3',label:'修改申請核准通知',desc:'修改申請已通過',on:true},
      {id:'n4',label:'修改申請拒絕通知',desc:'修改申請被拒絕',on:true},
      {id:'n5',label:'展延通過通知',desc:'療程可繼續',on:false},
    ]},
  ],
  nur: [
    {section:'需要我處理', items:[
      {id:'n1',label:'評估待填提醒',desc:'有護理評估量表應填',on:true},
      {id:'n2',label:'評估逾期提醒',desc:'有評估量表已逾期',on:true},
      {id:'n3',label:'PAC 收案判斷委託',desc:'個管師委託我協助判斷是否符合收案條件',on:true},
    ]},
    {section:'狀態更新', items:[
      {id:'n4',label:'今日入院通知',desc:'今日有新個案入院，病房請準備',on:true},
      {id:'n5',label:'今日出院通知',desc:'今日有個案出院',on:false},
    ]},
  ],
  doc: [
    {section:'需要我處理', items:[
      {id:'n1',label:'PAC 收案判斷委託',desc:'個管師委託我判斷個案是否符合 PAC 條件',on:true},
      {id:'n2',label:'醫囑待填寫',desc:'個案確認為 PAC，請提供復健治療方向醫囑',on:true},
      {id:'n3',label:'評估待填提醒',desc:'有醫師評估量表應填',on:true},
      {id:'n4',label:'評估逾期提醒',desc:'有評估量表已逾期',on:true},
    ]},
    {section:'狀態更新', items:[
      {id:'n5',label:'居家 PAC 交接提醒',desc:'居家醫療首次訪視後，提醒與 PAC 團隊交接',on:true},
    ]},
  ],
  pha: [
    {section:'需要我處理', items:[
      {id:'n1',label:'評估待填提醒',desc:'有藥師評估量表應填',on:true},
      {id:'n2',label:'評估逾期提醒',desc:'有評估量表已逾期',on:true},
    ]},
    {section:'狀態更新', items:[
      {id:'n3',label:'評估送出確認',desc:'評估量表送出後收到系統確認通知',on:false},
    ]},
  ],
  nut: [
    {section:'需要我處理', items:[
      {id:'n1',label:'評估待填提醒',desc:'有營養師評估量表應填',on:true},
      {id:'n2',label:'評估逾期提醒',desc:'有評估量表已逾期',on:true},
    ]},
    {section:'狀態更新', items:[
      {id:'n3',label:'評估送出確認',desc:'評估量表送出後收到系統確認通知',on:false},
    ]},
  ],
  adm: [
    {section:'需要我處理', items:[
      {id:'n1',label:'今日入院待建檔通知',desc:'今日有新個案入院，需於當日至杏翔系統建檔',on:true},
      {id:'n2',label:'居家批價待處理通知',desc:'個管師審核通過，需當日完成批價',on:true},
    ]},
    {section:'狀態更新', items:[
      {id:'n3',label:'月初獎金結算提醒',desc:'每月初提醒處理上月已結案個案的費用結算',on:true},
      {id:'n4',label:'個案出院確認',desc:'個案正式出院，可進行後續結算',on:false},
    ]},
  ],
};

let currentRole = 'mgr';
let isEditing = false;

function renderNotifSettings(role) {
  const settings = NOTIF_SETTINGS[role] || [];
  let html = '';
  settings.forEach(group => {
    html += \`<div class="notif-section-label">\${group.section}</div>\`;
    group.items.forEach(item => {
      html += \`
        <div class="toggle-row">
          <div class="toggle-info">
            <div class="toggle-label">\${item.label}</div>
            <div class="toggle-desc">\${item.desc}</div>
          </div>
          <label class="toggle">
            <input type="checkbox" \${item.on ? 'checked' : ''} onchange="this.checked">
            <span class="slider"></span>
          </label>
        </div>\`;
    });
  });
  document.getElementById('notif-settings').innerHTML = html;
}

function switchRole(role) {
  currentRole = role;
  const cfg = ROLES[role];

  // sidebar
  document.getElementById('user-av').textContent = cfg.ch;
  document.getElementById('user-av').className = 'user-avatar ' + cfg.av;
  document.getElementById('user-name').textContent = cfg.name;
  document.getElementById('user-role-label').textContent = cfg.label;

  // profile card
  const avLg = document.getElementById('profile-av-lg');
  avLg.textContent = cfg.ch;
  avLg.className = 'profile-avatar-lg ' + cfg.av;
  document.getElementById('profile-name').textContent = cfg.name;
  document.getElementById('profile-dept').textContent = cfg.dept + '・員郭醫院';
  document.getElementById('profile-role-badge').textContent = '🔒 ' + cfg.role;
  document.getElementById('profile-stat-val').textContent = cfg.stat;
  document.getElementById('profile-stat-label').textContent = cfg.statLabel;

  // form fields
  document.getElementById('f-name').value = cfg.name;
  document.getElementById('f-title').value = cfg.label;
  document.getElementById('f-role').value = cfg.role;
  document.getElementById('f-email').value = cfg.email;
  document.getElementById('f-phone').value = cfg.phone;

  // cancel any editing
  cancelEdit();

  // notif
  renderNotifSettings(role);
}

function toggleEdit() {
  isEditing = !isEditing;
  const fields = ['f-name','f-title','f-email','f-phone'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if(['f-title','f-role'].includes(id)) return;
    el.readOnly = !isEditing;
  });
  document.getElementById('edit-btn').textContent = isEditing ? '取消' : '✏️ 編輯';
  document.getElementById('edit-actions').classList.toggle('hidden', !isEditing);
}

function cancelEdit() {
  isEditing = false;
  const cfg = ROLES[currentRole];
  document.getElementById('f-name').value = cfg.name;
  document.getElementById('f-email').value = cfg.email;
  document.getElementById('f-phone').value = cfg.phone;
  ['f-name','f-email','f-phone'].forEach(id => document.getElementById(id).readOnly = true);
  document.getElementById('edit-btn').textContent = '✏️ 編輯';
  document.getElementById('edit-actions').classList.add('hidden');
}

function saveEdit() {
  alert('個人資料已儲存');
  cancelEdit();
}

function checkPwd(val) {
  const bars = [document.getElementById('pb1'),document.getElementById('pb2'),document.getElementById('pb3'),document.getElementById('pb4')];
  const hint = document.getElementById('pwd-hint');
  bars.forEach(b=>{ b.className='pwd-bar'; });
  if(!val){ hint.textContent='需包含大小寫字母與數字'; return; }
  let score = 0;
  if(val.length>=8) score++;
  if(/[A-Z]/.test(val)) score++;
  if(/[0-9]/.test(val)) score++;
  if(/[^A-Za-z0-9]/.test(val)) score++;
  const cls = score<=1?'weak':score<=2?'medium':'strong';
  const labels = {weak:'弱',medium:'普通',strong:'強'};
  for(let i=0;i<score;i++) bars[i].className='pwd-bar filled '+cls;
  hint.textContent = '密碼強度：' + labels[cls];
  hint.style.color = score<=1?'var(--red)':score<=2?'var(--amber)':'var(--green)';
}

function openModal(id){ document.getElementById(id).classList.remove('hidden') }
function closeModal(id){ document.getElementById(id).classList.add('hidden') }
document.querySelectorAll('.modal-overlay').forEach(o=>o.addEventListener('click',function(e){if(e.target===this)this.classList.add('hidden')}));

// Init
renderNotifSettings('mgr');
<\/script>
</body>
</html>`,gg=`<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PAC 後台設定管理</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --blue:#2563EB;--blue-light:#EFF6FF;--blue-mid:#BFDBFE;--blue-dark:#1E40AF;
  --gray-50:#F8FAFC;--gray-100:#F1F5F9;--gray-200:#E2E8F0;--gray-300:#CBD5E1;
  --gray-400:#94A3B8;--gray-500:#64748B;--gray-600:#475569;--gray-700:#334155;--gray-900:#0F172A;
  --green:#16A34A;--green-light:#DCFCE7;--green-mid:#BBF7D0;
  --amber:#D97706;--amber-light:#FEF3C7;
  --red:#DC2626;--red-light:#FEE2E2;
  --purple:#7C3AED;--purple-light:#EDE9FE;
  --teal:#0D9488;--teal-light:#CCFBF1;
  --white:#FFFFFF;
  --admin-dark:#1E293B;--admin-darker:#0F172A;
}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans TC',sans-serif;background:var(--gray-50);color:var(--gray-900);height:100vh;display:flex;overflow:hidden;font-size:14px}

/* ── 後台專用 Sidebar ── */
.sidebar{width:200px;min-width:200px;background:var(--admin-dark);display:flex;flex-direction:column;z-index:10}
.sidebar-logo{padding:18px 16px 14px;border-bottom:1px solid rgba(255,255,255,.08)}
.logo-text{font-size:13px;font-weight:700;color:var(--white);letter-spacing:.02em}
.logo-sub{font-size:10px;color:rgba(255,255,255,.4);margin-top:3px;text-transform:uppercase;letter-spacing:.06em}
.back-link{display:flex;align-items:center;gap:6px;padding:10px 16px;font-size:12px;color:rgba(255,255,255,.5);cursor:pointer;border-bottom:1px solid rgba(255,255,255,.06);transition:color .15s}
.back-link:hover{color:rgba(255,255,255,.85)}
.sidebar-nav{padding:8px 0;flex:1}
.nav-section-label{font-size:9px;font-weight:700;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.08em;padding:10px 16px 5px}
.nav-item{display:flex;align-items:center;gap:9px;padding:9px 16px;font-size:13px;color:rgba(255,255,255,.55);cursor:pointer;border-left:3px solid transparent;transition:all .15s}
.nav-item:hover{background:rgba(255,255,255,.06);color:rgba(255,255,255,.85)}
.nav-item.active{background:rgba(37,99,235,.25);color:var(--white);font-weight:600;border-left-color:var(--blue)}
.sidebar-user{padding:12px 16px;border-top:1px solid rgba(255,255,255,.08);display:flex;align-items:center;gap:8px}
.admin-avatar{width:28px;height:28px;border-radius:50%;background:rgba(37,99,235,.5);color:var(--white);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0}
.admin-name{font-size:12px;font-weight:600;color:rgba(255,255,255,.85)}
.admin-role{font-size:10px;color:rgba(255,255,255,.4)}

/* ── Main ── */
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}
.topbar{background:var(--white);border-bottom:1px solid var(--gray-200);padding:0 24px;height:48px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.breadcrumb{font-size:12px;color:var(--gray-500)}
.topbar-right{display:flex;align-items:center;gap:10px}
.content{flex:1;overflow-y:auto;padding:24px}

/* ── Buttons ── */
.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .15s;white-space:nowrap}
.btn-primary{background:var(--blue);color:var(--white)}.btn-primary:hover{background:var(--blue-dark)}
.btn-secondary{background:var(--white);color:var(--gray-700);border:1px solid var(--gray-300)}.btn-secondary:hover{background:var(--gray-50)}
.btn-ghost{background:transparent;color:var(--blue);border:1px solid var(--blue-mid)}.btn-ghost:hover{background:var(--blue-light)}
.btn-danger{background:var(--white);color:var(--red);border:1px solid #FECACA}.btn-danger:hover{background:var(--red-light)}
.btn-amber{background:var(--white);color:var(--amber);border:1px solid #FDE68A}.btn-amber:hover{background:var(--amber-light)}
.btn-sm{padding:5px 10px;font-size:12px}.btn-xs{padding:3px 8px;font-size:11px}

/* ── Badges ── */
.badge{display:inline-flex;align-items:center;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:600}
.badge-blue{background:var(--blue-light);color:var(--blue)}
.badge-green{background:var(--green-light);color:var(--green)}
.badge-amber{background:var(--amber-light);color:var(--amber)}
.badge-gray{background:var(--gray-100);color:var(--gray-500)}
.badge-red{background:var(--red-light);color:var(--red)}
.badge-purple{background:var(--purple-light);color:var(--purple)}

/* ── Page header ── */
.page-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:20px}
.page-title{font-size:18px;font-weight:700}
.page-subtitle{font-size:12px;color:var(--gray-500);margin-top:3px}

/* ── Stats strip ── */
.stats-row{display:flex;gap:10px;margin-bottom:20px}
.stat-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:14px 20px;flex:1}
.stat-label{font-size:10px;color:var(--gray-400);text-transform:uppercase;letter-spacing:.04em;margin-bottom:4px}
.stat-value{font-size:22px;font-weight:700;color:var(--gray-900)}
.stat-sub{font-size:11px;color:var(--gray-400);margin-top:2px}
.stat-card.s-blue .stat-value{color:var(--blue)}
.stat-card.s-green .stat-value{color:var(--green)}
.stat-card.s-amber .stat-value{color:var(--amber)}
.stat-card.s-red .stat-value{color:var(--red)}

/* ── Toolbar ── */
.toolbar{display:flex;gap:8px;margin-bottom:14px;align-items:center;justify-content:space-between;flex-wrap:wrap}
.toolbar-left{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.search-wrap{position:relative}
.search-wrap input{padding:7px 10px 7px 30px;border:1px solid var(--gray-300);border-radius:7px;font-size:12px;outline:none;width:220px}
.search-wrap input:focus{border-color:var(--blue)}
.search-icon{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:var(--gray-400);font-size:13px}
select.filter{padding:7px 10px;border:1px solid var(--gray-300);border-radius:7px;font-size:12px;color:var(--gray-700);background:var(--white);outline:none;cursor:pointer}

/* ── Member table ── */
.table-card{background:var(--white);border:1px solid var(--gray-200);border-radius:12px;overflow:hidden}
.data-table{width:100%;border-collapse:collapse;font-size:13px}
.data-table th{padding:10px 14px;background:var(--gray-50);border-bottom:1px solid var(--gray-200);font-size:11px;font-weight:700;color:var(--gray-500);text-align:left;white-space:nowrap;text-transform:uppercase;letter-spacing:.04em}
.data-table td{padding:12px 14px;border-bottom:1px solid var(--gray-100);vertical-align:middle}
.data-table tr:last-child td{border-bottom:none}
.data-table tr:hover td{background:var(--gray-50)}
.member-cell{display:flex;align-items:center;gap:10px}
.member-av{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0}
.member-name{font-size:13px;font-weight:600;color:var(--gray-900)}
.member-email{font-size:11px;color:var(--gray-400);margin-top:1px}
.role-tag{display:inline-flex;align-items:center;padding:3px 8px;border-radius:5px;font-size:11px;font-weight:600}
.status-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px}
.dot{width:7px;height:7px;border-radius:50%}
.dot-green{background:var(--green)}
.dot-gray{background:var(--gray-400)}
.dot-red{background:var(--red)}
.action-btns{display:flex;gap:5px}
.last-login{font-size:12px;color:var(--gray-600)}
.last-login-sub{font-size:10px;color:var(--gray-400)}

/* ── Permission matrix ── */
.perm-container{overflow-x:auto}
.perm-table{border-collapse:collapse;font-size:12px;min-width:900px;width:100%}
.perm-table th{padding:10px 8px;background:var(--gray-50);border:1px solid var(--gray-200);font-size:11px;font-weight:700;color:var(--gray-600);text-align:center;white-space:nowrap}
.perm-table th.module-col{text-align:left;padding:10px 14px;min-width:160px;position:sticky;left:0;z-index:2;background:var(--gray-50)}
.perm-table td{padding:10px 8px;border:1px solid var(--gray-100);text-align:center;vertical-align:middle}
.perm-table td.module-cell{text-align:left;padding:10px 14px;font-weight:500;color:var(--gray-700);position:sticky;left:0;z-index:1;background:var(--white);font-size:12px}
.perm-table td.module-cell .mod-icon{margin-right:6px}
.perm-table tr:hover td{background:var(--blue-light)}
.perm-table tr:hover td.module-cell{background:var(--blue-light)}
.perm-table thead th.role-header{min-width:72px}
.perm-table thead tr:first-child th{border-bottom:2px solid var(--gray-200)}
.perm-cb{width:16px;height:16px;accent-color:var(--blue);cursor:pointer}
.role-header-inner{display:flex;flex-direction:column;align-items:center;gap:3px}
.role-av-sm{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;margin:0 auto 2px}
.perm-legend{display:flex;align-items:center;gap:16px;margin-top:12px;font-size:11px;color:var(--gray-500)}
.perm-legend-item{display:flex;align-items:center;gap:5px}

/* ── Modal ── */
.modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);display:flex;align-items:center;justify-content:center;z-index:100;backdrop-filter:blur(2px)}
.modal{background:var(--white);border-radius:12px;width:520px;max-width:95vw;max-height:90vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.15)}
.modal-lg{width:640px}
.modal-header{padding:16px 20px 13px;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.modal-title{font-size:15px;font-weight:700}
.modal-close{width:25px;height:25px;border-radius:5px;border:none;background:var(--gray-100);color:var(--gray-500);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center}
.modal-close:hover{background:var(--gray-200)}
.modal-body{padding:16px 20px;overflow-y:auto;flex:1}
.modal-footer{padding:12px 20px;border-top:1px solid var(--gray-200);display:flex;justify-content:flex-end;gap:7px;flex-shrink:0}

/* ── Forms ── */
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.form-group{display:flex;flex-direction:column;gap:5px}
.form-group.full{grid-column:span 2}
.form-group label{font-size:11px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.04em}
.form-control{padding:8px 11px;border:1px solid var(--gray-300);border-radius:7px;font-size:13px;color:var(--gray-800);background:var(--white);outline:none;transition:border-color .15s}
.form-control:focus{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-light)}
select.form-control{cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%2394A3B8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;padding-right:24px}

/* HIS import */
.his-box{background:var(--gray-50);border:2px dashed var(--gray-300);border-radius:10px;padding:20px;text-align:center;margin-bottom:14px;cursor:pointer;transition:all .15s}
.his-box:hover{border-color:var(--blue);background:var(--blue-light)}
.his-box-icon{font-size:28px;margin-bottom:8px}
.his-box-text{font-size:13px;font-weight:600;color:var(--gray-700)}
.his-box-sub{font-size:11px;color:var(--gray-400);margin-top:3px}
.import-result{background:var(--white);border:1px solid var(--gray-200);border-radius:8px;overflow:hidden}
.import-result-header{padding:10px 14px;background:var(--gray-50);border-bottom:1px solid var(--gray-200);font-size:12px;font-weight:600;color:var(--gray-600)}
.import-row{display:flex;align-items:center;gap:10px;padding:9px 14px;border-bottom:1px solid var(--gray-100)}
.import-row:last-child{border-bottom:none}
.import-check{accent-color:var(--blue);width:15px;height:15px;cursor:pointer}
.import-name{font-size:13px;font-weight:600;flex:1}
.import-meta{font-size:11px;color:var(--gray-500)}

/* Info note */
.info-note{font-size:12px;padding:10px 12px;border-radius:6px;margin-bottom:12px;line-height:1.6}
.info-note.blue{background:var(--blue-light);color:var(--blue-dark)}
.info-note.amber{background:var(--amber-light);color:var(--amber)}
.info-note.red{background:var(--red-light);color:var(--red)}

/* Tabs */
.modal-tabs{display:flex;border-bottom:2px solid var(--gray-200);margin-bottom:16px}
.modal-tab{padding:8px 16px;font-size:13px;font-weight:500;color:var(--gray-500);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;transition:all .15s}
.modal-tab.active{color:var(--blue);border-bottom-color:var(--blue);font-weight:600}

.hidden{display:none!important}
.divider{height:1px;background:var(--gray-100);margin:14px 0}
</style>
</head>
<body>

<!-- 後台專用 SIDEBAR -->
<aside class="sidebar">
  <div class="sidebar-logo">
    <div class="logo-text">PAC 後台管理</div>
    <div class="logo-sub">System Administration</div>
  </div>
<!--
  <div class="back-link" onclick="alert('返回 → PAC 管理系統主畫面')">
    ← 返回系統
  </div>
-->
  <nav class="sidebar-nav">
    <div class="nav-section-label">帳號管理</div>
    <div class="nav-item active" onclick="showPage('members')">👥 成員管理</div>
    <div class="nav-section-label">權限設定</div>
    <div class="nav-item" onclick="showPage('permissions')">🔑 角色權限矩陣</div>
  </nav>
  <div class="sidebar-user">
    <div class="admin-avatar">資</div>
    <div>
      <div class="admin-name">王志偉</div>
      <div class="admin-role">系統管理員・資訊部</div>
    </div>
  </div>
</aside>

<!-- MAIN -->
<div class="main">
  <div class="topbar">
    <div class="breadcrumb" id="bc">後台設定管理 › 成員管理</div>
    <div class="topbar-right">
      <span style="font-size:11px;color:var(--gray-400)">員郭醫院・PAC 系統 v1.0</span>
    </div>
  </div>
  <div class="content">

    <!-- ══ 成員管理頁 ══ -->
    <div id="pg-members">
      <div class="page-header">
        <div>
          <div class="page-title">👥 成員管理</div>
          <div class="page-subtitle">管理所有 PAC 系統使用者帳號</div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-secondary" onclick="openModal('modal-import')">📥 從杏翔 HIS 匯入</button>
          <button class="btn btn-primary" onclick="openModal('modal-add')">＋ 新增成員</button>
        </div>
      </div>

      <!-- 統計 -->
      <div class="stats-row">
        <div class="stat-card s-blue"><div class="stat-label">總帳號數</div><div class="stat-value">24</div><div class="stat-sub">員郭醫院</div></div>
        <div class="stat-card s-green"><div class="stat-label">啟用中</div><div class="stat-value">21</div><div class="stat-sub">正常使用</div></div>
        <div class="stat-card s-amber"><div class="stat-label">停用</div><div class="stat-value">2</div><div class="stat-sub">已離職/暫停</div></div>
        <div class="stat-card s-red"><div class="stat-label">30天未登入</div><div class="stat-value">1</div><div class="stat-sub">待確認</div></div>
      </div>

      <!-- Toolbar -->
      <div class="toolbar">
        <div class="toolbar-left">
          <div class="search-wrap">
            <span class="search-icon">🔍</span>
            <input type="text" placeholder="搜尋姓名、信箱、員工編號">
          </div>
          <select class="filter">
            <option>全部角色</option>
            <option>個管師</option>
            <option>復健主管</option>
            <option>復健治療師</option>
            <option>護理師</option>
            <option>醫師</option>
            <option>藥師</option>
            <option>營養師</option>
            <option>行政</option>
          </select>
          <select class="filter">
            <option>全部狀態</option>
            <option>啟用中</option>
            <option>已停用</option>
          </select>
        </div>
        <span style="font-size:12px;color:var(--gray-400)">共 24 位成員</span>
      </div>

      <!-- 成員列表 -->
      <div class="table-card">
        <table class="data-table">
          <thead>
            <tr>
              <th>成員</th>
              <th>角色</th>
              <th>所屬單位</th>
              <th>帳號狀態</th>
              <th>最後登入</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody id="member-tbody">
          </tbody>
        </table>
      </div>
    </div>

    <!-- ══ 角色權限矩陣頁 ══ -->
    <div id="pg-permissions" class="hidden">
      <div class="page-header">
        <div>
          <div class="page-title">🔑 角色權限矩陣</div>
          <div class="page-subtitle">設定各角色可存取的功能模組・勾選代表「可存取」</div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-secondary btn-sm" onclick="resetToDefault()">↺ 還原預設值</button>
          <button class="btn btn-primary btn-sm" onclick="alert('權限設定已儲存')">儲存設定</button>
        </div>
      </div>

      <div class="info-note blue">ℹ️ 此為模組存取等級設定。各模組內的操作權限（填寫/審核/唯讀等）由各模組自身邏輯控制，將於開發階段細化。</div>

      <div class="table-card">
        <div class="perm-container">
          <table class="perm-table" id="perm-table">
            <!-- 由 JS 渲染 -->
          </table>
        </div>
        <div style="padding:12px 16px;border-top:1px solid var(--gray-100)">
          <div class="perm-legend">
            <div class="perm-legend-item"><input type="checkbox" checked disabled style="accent-color:var(--blue)"> 可存取此模組</div>
            <div class="perm-legend-item"><input type="checkbox" disabled> 無存取權限</div>
            <span style="color:var(--gray-300)">｜</span>
            <span style="color:var(--gray-400)">變更後請點「儲存設定」生效</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- ══ MODALS ══ -->

<!-- 新增成員 -->
<div id="modal-add" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title">＋ 新增成員</div>
      <button class="modal-close" onclick="closeModal('modal-add')">✕</button>
    </div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="form-group">
          <label>姓名 <span style="color:var(--red)">*</span></label>
          <input class="form-control" placeholder="e.g. 林美惠">
        </div>
        <div class="form-group">
          <label>員工編號</label>
          <input class="form-control" placeholder="e.g. E20240012">
        </div>
        <div class="form-group">
          <label>電子郵件 <span style="color:var(--red)">*</span></label>
          <input class="form-control" type="email" placeholder="e.g. lin@yuankuo.com.tw">
        </div>
        <div class="form-group">
          <label>電話號碼</label>
          <input class="form-control" placeholder="e.g. 0912-345-678">
        </div>
        <div class="form-group">
          <label>所屬單位 <span style="color:var(--red)">*</span></label>
          <select class="form-control">
            <option value="">請選擇</option>
            <option>復健科</option><option>護理部</option><option>醫師</option>
            <option>藥劑科</option><option>營養科</option><option>行政部</option>
          </select>
        </div>
        <div class="form-group">
          <label>系統角色 <span style="color:var(--red)">*</span></label>
          <select class="form-control">
            <option value="">請選擇</option>
            <option>個管師</option><option>復健主管</option><option>PT（物理治療師）</option>
            <option>OT（職能治療師）</option><option>ST（語言治療師）</option>
            <option>護理師</option><option>醫師</option><option>藥師</option>
            <option>營養師</option><option>行政</option>
          </select>
        </div>
        <div class="form-group full">
          <label>初始密碼設定</label>
          <select class="form-control">
            <option>系統自動產生（發送至電子郵件）</option>
            <option>手動設定</option>
          </select>
        </div>
      </div>
      <div class="info-note amber" style="margin-top:10px">⚠️ 建立帳號後將寄送啟用通知至填寫的電子郵件，請確認信箱無誤。</div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-add')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-add');alert('帳號已建立，啟用通知已發送')">建立帳號</button>
    </div>
  </div>
</div>

<!-- 從杏翔 HIS 匯入 -->
<div id="modal-import" class="modal-overlay hidden">
  <div class="modal modal-lg">
    <div class="modal-header">
      <div class="modal-title">📥 從杏翔 HIS 匯入成員</div>
      <button class="modal-close" onclick="closeModal('modal-import')">✕</button>
    </div>
    <div class="modal-body">
      <div class="info-note blue">連接至杏翔護理資訊系統，搜尋院內人員並直接匯入建立帳號。</div>
      <div class="modal-tabs">
        <div class="modal-tab active" onclick="switchImportTab(this,'search')">🔍 搜尋人員</div>
        <div class="modal-tab" onclick="switchImportTab(this,'batch')">📂 批次匯入</div>
      </div>
      <!-- 搜尋 -->
      <div id="import-tab-search">
        <div style="display:flex;gap:8px;margin-bottom:14px">
          <input class="form-control" style="flex:1" placeholder="輸入姓名或員工編號搜尋杏翔系統" id="his-search-input">
          <button class="btn btn-primary" onclick="showHisResults()">搜尋</button>
        </div>
        <div id="his-result-area">
          <div style="padding:24px;text-align:center;color:var(--gray-400);font-size:12px">輸入關鍵字搜尋院內人員</div>
        </div>
      </div>
      <!-- 批次 -->
      <div id="import-tab-batch" class="hidden">
        <div class="his-box" onclick="alert('模擬連接杏翔 HIS 系統中...\\n\\n實際開發時將呼叫 HIS API 取得人員清單')">
          <div class="his-box-icon">🏥</div>
          <div class="his-box-text">連接杏翔 HIS 系統</div>
          <div class="his-box-sub">點擊同步取得復健科、護理部等相關部門人員清單</div>
        </div>
        <div class="info-note amber">⚠️ 批次匯入將以 HIS 現有資料為準，匯入後仍可手動調整角色與單位。</div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-import')">取消</button>
      <button class="btn btn-primary" id="import-confirm-btn" onclick="closeModal('modal-import');alert('已匯入選取人員，請確認角色設定')">匯入選取（0）</button>
    </div>
  </div>
</div>

<!-- 編輯成員 -->
<div id="modal-edit" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title" id="modal-edit-title">✏️ 編輯成員</div>
      <button class="modal-close" onclick="closeModal('modal-edit')">✕</button>
    </div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="form-group">
          <label>姓名</label>
          <input class="form-control" id="edit-name">
        </div>
        <div class="form-group">
          <label>電子郵件</label>
          <input class="form-control" id="edit-email" type="email">
        </div>
        <div class="form-group">
          <label>所屬單位</label>
          <select class="form-control" id="edit-dept">
            <option>復健科</option><option>護理部</option><option>醫師</option>
            <option>藥劑科</option><option>營養科</option><option>行政部</option>
          </select>
        </div>
        <div class="form-group">
          <label>系統角色</label>
          <select class="form-control" id="edit-role">
            <option>個管師</option><option>復健主管</option><option>PT（物理治療師）</option>
            <option>OT（職能治療師）</option><option>ST（語言治療師）</option>
            <option>護理師</option><option>醫師</option><option>藥師</option>
            <option>營養師</option><option>行政</option>
          </select>
        </div>
        <div class="form-group">
          <label>帳號狀態</label>
          <select class="form-control" id="edit-status">
            <option value="active">啟用中</option>
            <option value="disabled">已停用</option>
          </select>
        </div>
        <div class="form-group">
          <label>密碼重設</label>
          <button class="btn btn-amber btn-sm" onclick="alert('密碼重設信已發送至使用者信箱')">📧 發送重設信</button>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-danger btn-sm" onclick="closeModal('modal-edit');alert('帳號已停用')">停用帳號</button>
      <button class="btn btn-secondary" onclick="closeModal('modal-edit')">取消</button>
      <button class="btn btn-primary" onclick="closeModal('modal-edit');alert('成員資料已更新')">儲存</button>
    </div>
  </div>
</div>

<!-- 確認停用 -->
<div id="modal-disable" class="modal-overlay hidden">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title">⚠️ 確認停用帳號</div>
      <button class="modal-close" onclick="closeModal('modal-disable')">✕</button>
    </div>
    <div class="modal-body">
      <div class="info-note red">停用後該帳號將無法登入系統，但資料與紀錄將完整保留。如需恢復可重新啟用。</div>
      <div style="font-size:13px;color:var(--gray-700)">確定停用 <strong id="disable-name"></strong> 的帳號嗎？</div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-disable')">取消</button>
      <button class="btn btn-danger" onclick="closeModal('modal-disable');alert('帳號已停用')">確認停用</button>
    </div>
  </div>
</div>

<script>
// ── 成員資料 ──
const MEMBERS = [
  {name:'林美惠', ch:'林', email:'lin.meihui@yuankuo.com.tw', av:'av-mgr', role:'個管師', dept:'復健科', status:'active', lastLogin:'2026/06/25 08:34', loginSub:'Chrome・Mac'},
  {name:'王大明', ch:'王', email:'wang.daming@yuankuo.com.tw', av:'av-sup', role:'復健主管', dept:'復健科', status:'active', lastLogin:'2026/06/25 07:50', loginSub:'Chrome・Windows'},
  {name:'黃志豪', ch:'黃', email:'huang.zhihao@yuankuo.com.tw', av:'av-pt', role:'PT', dept:'復健科', status:'active', lastLogin:'2026/06/24 16:20', loginSub:'Safari・Mac'},
  {name:'李佳穎', ch:'李', email:'lee.jiaying@yuankuo.com.tw', av:'av-ot', role:'OT', dept:'復健科', status:'active', lastLogin:'2026/06/24 15:45', loginSub:'Chrome・Windows'},
  {name:'吳怡君', ch:'吳', email:'wu.yijun@yuankuo.com.tw', av:'av-st', role:'ST', dept:'復健科', status:'active', lastLogin:'2026/06/24 14:10', loginSub:'Chrome・Windows'},
  {name:'陳建宏', ch:'陳', email:'chen.jianhong@yuankuo.com.tw', av:'av-pt', role:'PT', dept:'復健科', status:'active', lastLogin:'2026/06/23 17:30', loginSub:'Chrome・Windows'},
  {name:'張雅婷', ch:'張', email:'chang.yating@yuankuo.com.tw', av:'av-ot', role:'OT', dept:'復健科', status:'active', lastLogin:'2026/06/22 09:15', loginSub:'Safari・iPhone'},
  {name:'陳玉玲', ch:'陳', email:'chen.yuling@yuankuo.com.tw', av:'av-nur', role:'護理師', dept:'護理部', status:'active', lastLogin:'2026/06/25 07:00', loginSub:'Chrome・Windows'},
  {name:'林淑芬', ch:'林', email:'lin.shufen@yuankuo.com.tw', av:'av-nur', role:'護理師', dept:'護理部', status:'active', lastLogin:'2026/06/24 22:10', loginSub:'Chrome・Windows'},
  {name:'張宗達', ch:'張', email:'chang.zongda@yuankuo.com.tw', av:'av-doc', role:'醫師', dept:'復健科', status:'active', lastLogin:'2026/06/24 12:00', loginSub:'Chrome・Mac'},
  {name:'林建志', ch:'林', email:'lin.jianzhi@yuankuo.com.tw', av:'av-pha', role:'藥師', dept:'藥劑科', status:'active', lastLogin:'2026/06/20 09:30', loginSub:'Chrome・Windows'},
  {name:'周雅玲', ch:'周', email:'chou.yaling@yuankuo.com.tw', av:'av-nut', role:'營養師', dept:'營養科', status:'active', lastLogin:'2026/06/18 11:00', loginSub:'Chrome・Mac'},
  {name:'蔡書明', ch:'蔡', email:'tsai.shuming@yuankuo.com.tw', av:'av-adm', role:'行政', dept:'行政部', status:'active', lastLogin:'2026/06/25 08:00', loginSub:'Chrome・Windows'},
  {name:'黃怡真', ch:'黃', email:'huang.yizhen@yuankuo.com.tw', av:'av-adm', role:'行政', dept:'行政部', status:'active', lastLogin:'2026/06/24 17:50', loginSub:'Chrome・Windows'},
  {name:'李家豪', ch:'李', email:'lee.jiahao@yuankuo.com.tw', av:'av-pt', role:'PT', dept:'復健科', status:'disabled', lastLogin:'2026/04/10 09:00', loginSub:'已離職'},
  {name:'王小敏', ch:'王', email:'wang.xiaomin@yuankuo.com.tw', av:'av-nur', role:'護理師', dept:'護理部', status:'disabled', lastLogin:'2026/05/20 14:00', loginSub:'已停用'},
];

const AV_STYLE = {
  'av-mgr':'background:var(--amber-light);color:var(--amber)',
  'av-sup':'background:var(--purple-light);color:var(--purple)',
  'av-pt':'background:var(--blue-light);color:var(--blue)',
  'av-ot':'background:#FCE7F3;color:#9D174D',
  'av-st':'background:var(--green-light);color:var(--green)',
  'av-nur':'background:var(--teal-light);color:var(--teal)',
  'av-doc':'background:#FEF3C7;color:#92400E',
  'av-pha':'background:var(--purple-light);color:var(--purple)',
  'av-nut':'background:var(--green-light);color:var(--green)',
  'av-adm':'background:var(--gray-100);color:var(--gray-600)',
};
const ROLE_BADGE = {
  '個管師':'background:#FEF3C7;color:#92400E',
  '復健主管':'background:var(--purple-light);color:var(--purple)',
  'PT':'background:var(--blue-light);color:var(--blue)',
  'OT':'background:#FCE7F3;color:#9D174D',
  'ST':'background:var(--green-light);color:var(--green)',
  '護理師':'background:var(--teal-light);color:var(--teal)',
  '醫師':'background:#FEF3C7;color:#78350F',
  '藥師':'background:var(--purple-light);color:var(--purple)',
  '營養師':'background:var(--green-light);color:var(--green)',
  '行政':'background:var(--gray-100);color:var(--gray-600)',
};

function renderMembers() {
  const tbody = document.getElementById('member-tbody');
  tbody.innerHTML = MEMBERS.map((m,i) => {
    const st = m.status === 'active'
      ? \`<span class="status-dot"><span class="dot dot-green"></span> 啟用中</span>\`
      : \`<span class="status-dot"><span class="dot dot-gray"></span> <span style="color:var(--gray-400)">已停用</span></span>\`;
    const rowStyle = m.status === 'disabled' ? 'opacity:.55' : '';
    return \`<tr style="\${rowStyle}">
      <td>
        <div class="member-cell">
          <div class="member-av" style="\${AV_STYLE[m.av]||''}">\${m.ch}</div>
          <div>
            <div class="member-name">\${m.name}</div>
            <div class="member-email">\${m.email}</div>
          </div>
        </div>
      </td>
      <td><span class="role-tag" style="\${ROLE_BADGE[m.role]||''}">\${m.role}</span></td>
      <td style="font-size:12px;color:var(--gray-600)">\${m.dept}</td>
      <td>\${st}</td>
      <td><div class="last-login">\${m.lastLogin}</div><div class="last-login-sub">\${m.loginSub}</div></td>
      <td>
        <div class="action-btns">
          <button class="btn btn-ghost btn-xs" onclick="openEdit(\${i})">編輯</button>
          \${m.status==='active'?\`<button class="btn btn-danger btn-xs" onclick="confirmDisable('\${m.name}')">停用</button>\`:\`<button class="btn btn-secondary btn-xs" onclick="alert('帳號已重新啟用')">啟用</button>\`}
        </div>
      </td>
    </tr>\`;
  }).join('');
}

function openEdit(i) {
  const m = MEMBERS[i];
  document.getElementById('modal-edit-title').textContent = \`✏️ 編輯成員：\${m.name}\`;
  document.getElementById('edit-name').value = m.name;
  document.getElementById('edit-email').value = m.email;
  document.getElementById('edit-status').value = m.status;
  openModal('modal-edit');
}

function confirmDisable(name) {
  document.getElementById('disable-name').textContent = name;
  openModal('modal-disable');
}

// ── 權限矩陣 ──
const MODULES = [
  {icon:'🏠', name:'個人儀表板'},
  {icon:'📋', name:'個案管理'},
  {icon:'🛏', name:'病床管理'},
  {icon:'📅', name:'班表總覽'},
  {icon:'🏡', name:'居家排班管理'},
  {icon:'📊', name:'評估量表'},
  {icon:'💪', name:'復健紀錄'},
  {icon:'📤', name:'指標匯出'},
  {icon:'👤', name:'個人資訊頁'},
];

const ROLES_LIST = [
  {label:'個管師', av:'av-mgr', ch:'個'},
  {label:'復健主管', av:'av-sup', ch:'主'},
  {label:'PT', av:'av-pt', ch:'P'},
  {label:'OT', av:'av-ot', ch:'O'},
  {label:'ST', av:'av-st', ch:'S'},
  {label:'護理師', av:'av-nur', ch:'護'},
  {label:'醫師', av:'av-doc', ch:'醫'},
  {label:'藥師', av:'av-pha', ch:'藥'},
  {label:'營養師', av:'av-nut', ch:'營'},
  {label:'行政', av:'av-adm', ch:'行'},
];

// 預設權限矩陣 [模組][角色]
const DEFAULT_PERMS = [
//     個管  主管  PT   OT   ST  護理  醫師  藥師  營養  行政
  [true, true, true, true, true, true, true, true, true, true],  // 儀表板
  [true, false,false,false,false,false,false,false,false,false], // 個案管理
  [true, false,false,false,false,true, false,false,false,false], // 病床管理
  [true, true, true, true, true, false,false,false,false,false], // 班表
  [true, true, true, true, true, false,false,false,false,false], // 居家排班
  [true, true, true, true, true, true, true, true, true, false], // 評估量表
  [true, true, true, true, true, false,false,false,false,false], // 復健紀錄
  [true, false,false,false,false,false,false,false,false,false], // 指標匯出
  [true, true, true, true, true, true, true, true, true, true], // 個人資訊
];

let currentPerms = DEFAULT_PERMS.map(row=>[...row]);

function renderPermMatrix() {
  const table = document.getElementById('perm-table');
  let html = '<thead><tr><th class="module-col">功能模組</th>';
  ROLES_LIST.forEach((r,ri) => {
    html += \`<th class="role-header"><div class="role-header-inner"><div class="role-av-sm" style="\${AV_STYLE[r.av]||''}">\${r.ch}</div>\${r.label}</div></th>\`;
  });
  html += '</tr></thead><tbody>';
  MODULES.forEach((m,mi) => {
    html += \`<tr><td class="module-cell"><span class="mod-icon">\${m.icon}</span>\${m.name}</td>\`;
    ROLES_LIST.forEach((r,ri) => {
      html += \`<td><input type="checkbox" class="perm-cb" \${currentPerms[mi][ri]?'checked':''} onchange="currentPerms[\${mi}][\${ri}]=this.checked"></td>\`;
    });
    html += '</tr>';
  });
  html += '</tbody>';
  table.innerHTML = html;
}

function resetToDefault() {
  currentPerms = DEFAULT_PERMS.map(row=>[...row]);
  renderPermMatrix();
}

// ── 頁面切換 ──
function showPage(page) {
  document.getElementById('pg-members').classList.toggle('hidden', page!=='members');
  document.getElementById('pg-permissions').classList.toggle('hidden', page!=='permissions');
  document.querySelectorAll('.nav-item').forEach(el=>el.classList.remove('active'));
  event.currentTarget.classList.add('active');
  const bc = {members:'後台設定管理 › 成員管理', permissions:'後台設定管理 › 角色權限矩陣'};
  document.getElementById('bc').textContent = bc[page];
  if(page==='permissions') renderPermMatrix();
}

// ── HIS 搜尋示意 ──
const HIS_DATA = [
  {name:'陳志明', dept:'復健科', title:'物理治療師', emp:'E20240021'},
  {name:'謝佳慧', dept:'護理部', title:'護理師', emp:'E20240022'},
  {name:'劉建國', dept:'復健科', title:'職能治療師', emp:'E20240023'},
];
let selectedImport = new Set();

function showHisResults() {
  const area = document.getElementById('his-result-area');
  let html = \`<div class="import-result"><div class="import-result-header">找到 \${HIS_DATA.length} 筆結果（尚未在 PAC 系統建立帳號）</div>\`;
  HIS_DATA.forEach((p,i) => {
    html += \`<div class="import-row">
      <input type="checkbox" class="import-check" onchange="toggleImport(\${i},this.checked)">
      <div style="flex:1"><div class="import-name">\${p.name}</div><div class="import-meta">\${p.dept}・\${p.title}・員工編號 \${p.emp}</div></div>
    </div>\`;
  });
  html += '</div>';
  area.innerHTML = html;
}

function toggleImport(i, checked) {
  if(checked) selectedImport.add(i); else selectedImport.delete(i);
  document.getElementById('import-confirm-btn').textContent = \`匯入選取（\${selectedImport.size}）\`;
}

function switchImportTab(el, tab) {
  document.querySelectorAll('.modal-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('import-tab-search').classList.toggle('hidden', tab!=='search');
  document.getElementById('import-tab-batch').classList.toggle('hidden', tab!=='batch');
}

// ── Modal helpers ──
function openModal(id){document.getElementById(id).classList.remove('hidden')}
function closeModal(id){document.getElementById(id).classList.add('hidden')}
document.querySelectorAll('.modal-overlay').forEach(o=>o.addEventListener('click',function(e){if(e.target===this)this.classList.add('hidden')}));

// Init
renderMembers();
<\/script>
</body>
</html>`,uo=[{id:"personal-dashboard",file:"personal-dashboard.html",label:"個人儀表板",description:"Role-based personal dashboard with notifications and task summaries.",icon:"🏠",html:dg},{id:"case-management",file:"case-management.html",label:"個案管理",description:"PAC case list, case detail, intake review, and form fill workflows.",icon:"📋",html:og},{id:"bed-management",file:"bed-management.html",label:"病床管理",description:"Ward and bed availability management views.",icon:"🛏",html:rg},{id:"rehab-scheduling",file:"rehab-scheduling.html",label:"復健排班",description:"In-hospital rehabilitation scheduling and therapist assignment views.",icon:"📅",html:cg},{id:"home-care-scheduling",file:"home-care-scheduling.html",label:"居家排班管理",description:"Home PAC case publishing, therapist signup, scheduling, and bonus flows.",icon:"🏡",html:pg},{id:"assessment-forms",file:"assessment-forms.html",label:"評估量表填寫",description:"Assessment case selection, role-based forms, and submission states.",icon:"📊",html:vg},{id:"indicator-export",file:"indicator-export.html",label:"指標匯出",description:"PAC indicator tracking, validation, and export workflow.",icon:"📤",html:ug},{id:"user-profile",file:"user-profile.html",label:"個人資訊頁",description:"User profile, account security, notification preferences, and sessions.",icon:"👤",html:bg},{id:"admin-settings",file:"admin-settings.html",label:"後台設定管理",description:"Admin member management, HIS import, and role permission matrix.",icon:"⚙️",html:gg}];function Sv(z,O){return z.match(/<title>(.*?)<\/title>/is)?.[1]?.trim()||O}function mg(z){return{bytes:new Blob([z]).size,styles:(z.match(/<style\b/gi)||[]).length,scripts:(z.match(/<script\b/gi)||[]).length,functions:(z.match(/\bfunction\s+\w+/g)||[]).length,constants:(z.match(/\bconst\s+\w+/g)||[]).length}}const kl=[{code:"mgr",label:"個管師",name:"林美惠",ch:"林",av:"av-mgr",pages:["personal-dashboard","case-management","bed-management","rehab-scheduling","home-care-scheduling","assessment-forms","indicator-export","user-profile"]},{code:"sup",label:"復健主管",name:"王大明",ch:"王",av:"av-sup",pages:["personal-dashboard","rehab-scheduling","home-care-scheduling","assessment-forms","user-profile"]},{code:"pt",label:"PT (物理治療)",name:"黃志豪",ch:"黃",av:"av-pt",pages:["personal-dashboard","rehab-scheduling","home-care-scheduling","assessment-forms","user-profile"]},{code:"ot",label:"OT (職能治療)",name:"李佳穎",ch:"李",av:"av-ot",pages:["personal-dashboard","rehab-scheduling","home-care-scheduling","assessment-forms","user-profile"]},{code:"st",label:"ST (語言治療)",name:"吳怡君",ch:"吳",av:"av-st",pages:["personal-dashboard","rehab-scheduling","home-care-scheduling","assessment-forms","user-profile"]},{code:"nur",label:"護理師",name:"陳玉玲",ch:"陳",av:"av-nur",pages:["personal-dashboard","bed-management","assessment-forms","user-profile"]},{code:"doc",label:"醫師",name:"張宗達",ch:"張",av:"av-doc",pages:["personal-dashboard","assessment-forms","user-profile"]},{code:"pha",label:"藥師",name:"林建志",ch:"林",av:"av-pha",pages:["personal-dashboard","assessment-forms","user-profile"]},{code:"nut",label:"營養師",name:"周雅玲",ch:"周",av:"av-nut",pages:["personal-dashboard","assessment-forms","user-profile"]},{code:"adm",label:"行政",name:"蔡書明",ch:"蔡",av:"av-adm",pages:["personal-dashboard","user-profile"]},{code:"it",label:"IT（資訊人員）",name:"王志偉",ch:"資",av:"av-it",pages:["admin-settings"]}],Av=ya.createContext(null);function fg({children:z}){const[O,j]=ya.useState("mgr"),[b,B]=ya.useState("personal-dashboard"),[R,$]=ya.useState(!1),gn=ya.useMemo(()=>{const S=kl.find(D=>D.code===O)||kl[0],k=uo.filter(D=>S.pages.includes(D.id));let Y=k.find(D=>D.id===b);return!Y&&k.length>0&&(Y=k[0]),{currentRole:O,activeRole:S,roles:kl,activeId:Y?.id||"",activePage:Y,activeTitle:Y?Sv(Y.html,Y.label):"",pages:k,allPages:uo,setActiveId:B,selectRole:D=>{j(D);const rn=kl.find(Sn=>Sn.code===D)||kl[0],Ln=uo.filter(Sn=>rn.pages.includes(Sn.id));Ln.length>0&&(rn.pages.includes(b)||B(Ln[0].id))},showMap:R,toggleMap:()=>$(D=>!D)}},[O,b,R]);return q.jsx(Av.Provider,{value:gn,children:z})}function zl(){const z=ya.useContext(Av);if(!z)throw new Error("usePageContext must be used inside PageProvider");return z}function yg(){const{activeId:z,pages:O,setActiveId:j}=zl(),[b,B]=ya.useState(!1),R=()=>B($=>!$);return q.jsxs(q.Fragment,{children:[q.jsx("button",{className:"hamburger-toggle-btn",type:"button",onClick:R,"aria-label":"打開選單",children:"☰"}),q.jsxs("aside",{className:`app-sidebar ${b?"mobile-open":""}`,children:[q.jsxs("div",{className:"brand",children:[q.jsx("div",{className:"brand-title",children:"PAC 系統"}),q.jsx("button",{className:"sidebar-close-btn",type:"button",onClick:()=>B(!1),"aria-label":"關閉選單",children:"✕"})]}),q.jsx("nav",{className:"app-nav","aria-label":"PAC pages",children:O.map($=>q.jsxs("button",{className:`nav-button ${z===$.id?"active":""}`,type:"button",onClick:()=>{j($.id),B(!1)},children:[q.jsx("span",{className:"nav-icon",children:$.icon}),q.jsx("span",{className:"nav-label",children:$.label})]},$.id))})]}),b&&q.jsx("div",{className:"sidebar-overlay",onClick:()=>B(!1)})]})}function hg({pages:z,activeId:O}){return q.jsx("section",{className:"decomposition-panel","aria-label":"HTML decomposition",children:z.map(j=>q.jsxs("article",{className:`page-card ${O===j.id?"active":""}`,children:[q.jsxs("div",{className:"page-card-title",children:[q.jsx("span",{children:j.icon}),q.jsx("strong",{children:j.title})]}),q.jsx("div",{className:"page-card-file",children:j.file}),q.jsx("div",{className:"page-card-desc",children:j.description}),q.jsxs("div",{className:"page-card-grid",children:[q.jsxs("span",{children:[Math.round(j.stats.bytes/1024)," KB"]}),q.jsxs("span",{children:[j.stats.styles," style"]}),q.jsxs("span",{children:[j.stats.scripts," script"]}),q.jsxs("span",{children:[j.stats.functions," functions"]})]})]},j.id))})}function xg(){const{activePage:z,activeTitle:O}=zl();return q.jsx("header",{className:"workspace-topbar",children:q.jsxs("div",{children:[q.jsx("div",{className:"eyebrow",children:z.file}),q.jsx("h1",{children:O})]})})}function wg(z){return ya.useMemo(()=>z.map(O=>({...O,title:Sv(O.html,O.label),stats:mg(O.html)})),[z])}function kg(z,O){return z==="rehab-scheduling"?O==="mgr"||O==="sup"?"manager":"therapist":z==="home-care-scheduling"?O==="mgr"?"case":O==="sup"?"manager":"therapist":O}function zg({page:z,title:O}){const{currentRole:j}=zl(),b=ya.useMemo(()=>{if(!z.html)return z.html;let B=z.html;if(z.id!=="admin-settings"){const gn=`
        <style>
          .sidebar { display: none !important; }
        </style>
      `;B.includes("<head>")?B=B.replace("<head>",`<head>${gn}`):B=gn+B}const R=kg(z.id,j),$=/let\s+currentRole\s*=\s*['"][^'"]+['"]\s*;?/g;return B=B.replace($,`let currentRole = '${R}';`),B},[z.html,z.id,j]);return q.jsx("section",{className:"frame-wrap","aria-label":O,children:q.jsx("iframe",{className:"legacy-frame",title:O,srcDoc:b,sandbox:"allow-scripts allow-forms allow-modals allow-same-origin"})})}function Tg({page:z,title:O}){return q.jsx(zg,{page:z,title:O})}function Eg(){const{currentRole:z,activeRole:O,roles:j,selectRole:b}=zl(),[B,R]=ya.useState(!1),$=ya.useRef(null);ya.useEffect(()=>{function S(k){$.current&&!$.current.contains(k.target)&&R(!1)}return B&&document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}},[B]);const gn=()=>R(S=>!S);return q.jsxs("div",{className:"role-switcher-container",ref:$,children:[q.jsxs("button",{className:`fab-role-button active-role-${z}`,onClick:gn,"aria-label":"切換角色",type:"button",children:[q.jsx("span",{className:`fab-avatar ${O.av}`,children:O.ch}),q.jsx("span",{className:"fab-label",children:O.label})]}),B&&q.jsxs("div",{className:"role-panel",children:[q.jsxs("div",{className:"role-panel-header",children:[q.jsx("h3",{children:"切換系統角色"}),q.jsx("p",{children:"模擬不同醫護人員的操作介面與權限"})]}),q.jsx("div",{className:"role-list",children:j.map(S=>{const k=S.code===z;return q.jsxs("button",{className:`role-item ${k?"active":""}`,onClick:()=>{b(S.code),R(!1)},type:"button",children:[q.jsx("div",{className:`role-item-avatar ${S.av}`,children:S.ch}),q.jsxs("div",{className:"role-item-info",children:[q.jsx("div",{className:"role-item-label",children:S.label}),q.jsx("div",{className:"role-item-name",children:S.name})]}),k&&q.jsx("span",{className:"active-check",children:"✓"})]},S.code)})})]})]})}function Sg(){const{activeId:z,activePage:O,activeTitle:j,pages:b,showMap:B}=zl(),R=wg(b);return q.jsxs("div",{className:"app-shell",children:[q.jsx(yg,{}),q.jsxs("main",{className:"workspace",children:[q.jsx(xg,{}),B&&q.jsx(hg,{pages:R,activeId:z}),O&&q.jsx(Tg,{page:O,title:j},O.id)]}),q.jsx(Eg,{})]})}function Ag(){return q.jsx(fg,{children:q.jsx(Sg,{})})}sg.createRoot(document.getElementById("root")).render(q.jsx(Ag,{}));

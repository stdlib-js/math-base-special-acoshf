"use strict";var q=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(u){throw (a=0, u)}};};var s=q(function(T,n){
var o=require('@stdlib/math-base-assert-is-nanf/dist'),c=require('@stdlib/math-base-special-log1pf/dist'),v=require('@stdlib/math-base-special-sqrtf/dist'),N=require('@stdlib/constants-float32-ln-two/dist'),f=require('@stdlib/math-base-special-lnf/dist'),r=require('@stdlib/number-float64-base-to-float32/dist'),O=r(1<<28),p=r(0),i=r(1),t=r(2);function E(e){var a,u;return e=r(e),o(e)||e<i?NaN:e===i?p:e>=O?r(f(e)+N):e>t?(a=r(e*e),u=r(a-i),f(r(r(t*e)-r(i/r(e+v(u)))))):(a=r(e-i),c(r(a+v(r(r(t*a)+r(a*a))))))}n.exports=E
});var l=s();module.exports=l;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

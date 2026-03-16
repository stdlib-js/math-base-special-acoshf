"use strict";var q=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var s=q(function(T,n){
var o=require('@stdlib/math-base-assert-is-nanf/dist'),c=require('@stdlib/math-base-special-log1pf/dist'),v=require('@stdlib/math-base-special-sqrtf/dist'),N=require('@stdlib/constants-float32-ln-two/dist'),f=require('@stdlib/math-base-special-lnf/dist'),r=require('@stdlib/number-float64-base-to-float32/dist'),O=r(1<<28),p=r(0),i=r(1),u=r(2);function E(e){var a,t;return e=r(e),o(e)||e<i?NaN:e===i?p:e>=O?r(f(e)+N):e>u?(a=r(e*e),t=r(a-i),f(r(r(u*e)-r(i/r(e+v(t)))))):(a=r(e-i),c(r(a+v(r(r(u*a)+r(a*a))))))}n.exports=E
});var l=s();module.exports=l;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

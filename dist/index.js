"use strict";var C=function(o,a){return function(){try{return a||o((a={exports:{}}).exports,a),a.exports}catch(q){throw (a=0, q)}};};var O=C(function(N,E){
var G=require('@stdlib/ndarray-base-assert-is-column-major/dist'),R=require('@stdlib/strided-base-reinterpret-complex64/dist');function H(o,a,q,c,e,y,j,b,s,f,x,t){var i,g,h,w,u,p,n,v,l,r,m;if(o<=0||a<=0)return-1;if(i=R(q,0),g=R(j,0),c*=2,e*=2,y*=2,b*=2,s*=2,G([c,e])){for(u=o,p=a,m=0;m<p;m++){for(n=y+m*e,l=s,r=0;r<u&&!(i[n]!==g[l]||i[n+1]!==g[l+1]);r++)n+=c,l+=b;if(r===u)return m}return-1}for(u=a,p=o,h=e,w=c-u*e,v=t,r=0;r<u;r++)f[v]=1,v+=x;for(n=y,l=s,m=0;m<p;m++){for(v=t,r=0;r<u;r++)(i[n]!==g[l]||i[n+1]!==g[l+1])&&(f[v]=0),n+=h,v+=x;n+=w,l+=b}for(v=t,r=0;r<u&&f[v]!==1;r++)v+=x;return r===u?-1:r}E.exports=H
});var _=C(function(W,V){
var I=require('@stdlib/blas-base-layout-resolve-str/dist'),J=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),F=require('@stdlib/strided-base-stride2offset/dist'),K=require('@stdlib/math-base-special-fast-max/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),P=O();function Q(o,a,q,c,e,y,j,b,s){var f,x,t,i;if(i=I(o),i===null)throw new TypeError(S('2eXFx',o));if(J(i)?(t=q,f=e,x=1):(t=a,f=1,x=e),e<K(1,t))throw new RangeError(S('2eXIR',t,e));return P(a,q,c,f,x,0,y,j,F(a,j),b,s,F(q,s))}V.exports=Q
});var z=C(function(X,k){
var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=_(),Y=O();U(T,"ndarray",Y);k.exports=T
});var Z=require("path").join,$=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),M=z(),d,B=$(Z(__dirname,"./native.js"));L(B)?d=M:d=B;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

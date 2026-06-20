"use strict";var p=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(q){throw (a=0, q)}};};var O=p(function(W,d){
var H=require('@stdlib/ndarray-base-assert-is-column-major/dist'),E=require('@stdlib/strided-base-reinterpret-complex64/dist');function I(e,a,q,x,i,c,j,y,s,f,l,o){var b,g,w,R,u,C,n,v,t,r,m;if(e<=0||a<=0)return-1;if(b=E(q,0),g=E(j,0),x*=2,i*=2,c*=2,y*=2,s*=2,H([x,i])){for(u=e,C=a,m=0;m<C;m++){for(n=c+m*i,t=s,r=0;r<u&&!(b[n]!==g[t]||b[n+1]!==g[t+1]);r++)n+=x,t+=y;if(r===u)return m}return-1}for(u=a,C=e,w=i,R=x-u*i,v=o,r=0;r<u;r++)f[v]=1,v+=l;for(n=c,t=s,m=0;m<C;m++){for(v=o,r=0;r<u;r++)(b[n]!==g[t]||b[n+1]!==g[t+1])&&(f[v]=0),n+=w,v+=l;n+=R,t+=y}for(v=o,r=0;r<u&&f[v]!==1;r++)v+=l;return r===u?-1:r}d.exports=I
});var T=p(function(X,_){
var J=require('@stdlib/blas-base-assert-is-layout/dist'),K=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),P=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),F=require('@stdlib/strided-base-stride2offset/dist'),S=require('@stdlib/math-base-special-fast-max/dist'),V=require('@stdlib/error-tools-fmtprodmsg/dist'),Q=O();function U(e,a,q,x,i,c,j,y,s){var f,l,o;if(!J(e))throw new TypeError(V('2eXFx',e));if(K(e)?o=q:o=a,i<S(1,o))throw new RangeError(V('2eXIR',S(1,o),i));return P(e)?(f=1,l=i):(f=i,l=1),Q(a,q,x,f,l,0,c,j,F(a,j),y,s,F(q,s))}_.exports=U
});var B=p(function(A,z){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=T(),Z=O();Y(k,"ndarray",Z);z.exports=k
});var $=require("path").join,M=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=B(),h,G=M($(__dirname,"./native.js"));L(G)?h=D:h=G;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

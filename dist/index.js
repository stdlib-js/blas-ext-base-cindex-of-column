"use strict";var p=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var O=p(function(W,d){
var H=require('@stdlib/ndarray-base-assert-is-column-major/dist'),E=require('@stdlib/strided-base-reinterpret-complex64/dist');function I(e,a,s,l,i,c,j,y,x,q,f,o){var b,g,w,R,u,C,n,v,t,r,m;if(e<=0||a<=0)return-1;if(b=E(s,0),g=E(j,0),l*=2,i*=2,c*=2,y*=2,x*=2,H([l,i])){for(u=e,C=a,m=0;m<C;m++){for(n=c+m*i,t=x,r=0;r<u&&!(b[n]!==g[t]||b[n+1]!==g[t+1]);r++)n+=l,t+=y;if(r===u)return m}return-1}for(u=a,C=e,w=i,R=l-u*i,v=o,r=0;r<u;r++)q[v]=1,v+=f;for(n=c,t=x,m=0;m<C;m++){for(v=o,r=0;r<u;r++)(b[n]!==g[t]||b[n+1]!==g[t+1])&&(q[v]=0),n+=w,v+=f;n+=R,t+=y}for(v=o,r=0;r<u&&q[v]!==1;r++)v+=f;return r===u?-1:r}d.exports=I
});var T=p(function(X,_){
var J=require('@stdlib/blas-base-assert-is-layout/dist'),K=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),P=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),F=require('@stdlib/strided-base-stride2offset/dist'),S=require('@stdlib/math-base-special-fast-max/dist'),V=require('@stdlib/error-tools-fmtprodmsg/dist'),Q=O();function U(e,a,s,l,i,c,j,y,x){var q,f,o;if(!J(e))throw new TypeError(V('nullFx',e));if(K(e)?o=s:o=a,i<S(1,o))throw new RangeError(V('nullIR',S(1,o),i));return P(e)?(q=1,f=i):(q=i,f=1),Q(a,s,l,q,f,0,c,j,F(a,j),y,x,F(s,x))}_.exports=U
});var B=p(function(A,z){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=T(),Z=O();Y(k,"ndarray",Z);z.exports=k
});var $=require("path").join,M=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=B(),h,G=M($(__dirname,"./native.js"));L(G)?h=D:h=G;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

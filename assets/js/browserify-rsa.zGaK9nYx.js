import{B as h}from"./vite-plugin-node-polyfills.B4DYk75w.js";import{r as v}from"./bn.js.D0kDLt-Z.js";import{r as g}from"./randombytes.B9W2qcDI.js";var u,i;function k(){if(i)return u;i=1;var n=v(),l=g();function s(e){var r=m(e),o=r.toRed(n.mont(e.modulus)).redPow(new n(e.publicExponent)).fromRed();return{blinder:o,unblinder:r.invm(e.modulus)}}function m(e){var r=e.modulus.byteLength(),o;do o=new n(l(r));while(o.cmp(e.modulus)>=0||!o.umod(e.prime1)||!o.umod(e.prime2));return o}function d(e,r){var o=s(r),f=r.modulus.byteLength(),t=new n(e).mul(o.blinder).umod(r.modulus),b=t.toRed(n.mont(r.prime1)),c=t.toRed(n.mont(r.prime2)),w=r.coefficient,R=r.prime1,B=r.prime2,y=b.redPow(r.exponent1).fromRed(),a=c.redPow(r.exponent2).fromRed(),q=y.isub(a).imul(w).umod(R).imul(B);return a.iadd(q).imul(o.unblinder).umod(r.modulus).toArrayLike(h,"be",f)}return d.getr=m,u=d,u}export{k as r};

import{r as c}from"./safe-buffer.DM0JMpYF.js";import{r as g}from"./stream-browserify.BKiowhW5.js";import{r as m}from"./inherits.BICa84dG.js";var l,a;function k(){if(a)return l;a=1;var f=c().Buffer,u=g().Transform,_=m();function p(r,t){if(!f.isBuffer(r)&&typeof r!="string")throw new TypeError(t+" must be a string or a buffer")}function i(r){u.call(this),this._block=f.allocUnsafe(r),this._blockSize=r,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}return _(i,u),i.prototype._transform=function(r,t,e){var s=null;try{this.update(r,t)}catch(h){s=h}e(s)},i.prototype._flush=function(r){var t=null;try{this.push(this.digest())}catch(e){t=e}r(t)},i.prototype.update=function(r,t){if(p(r,"Data"),this._finalized)throw new Error("Digest already called");f.isBuffer(r)||(r=f.from(r,t));for(var e=this._block,s=0;this._blockOffset+r.length-s>=this._blockSize;){for(var h=this._blockOffset;h<this._blockSize;)e[h++]=r[s++];this._update(),this._blockOffset=0}for(;s<r.length;)e[this._blockOffset++]=r[s++];for(var n=0,o=r.length*8;o>0;++n)this._length[n]+=o,o=this._length[n]/4294967296|0,o>0&&(this._length[n]-=4294967296*o);return this},i.prototype._update=function(){throw new Error("_update is not implemented")},i.prototype.digest=function(r){if(this._finalized)throw new Error("Digest already called");this._finalized=!0;var t=this._digest();r!==void 0&&(t=t.toString(r)),this._block.fill(0),this._blockOffset=0;for(var e=0;e<4;++e)this._length[e]=0;return t},i.prototype._digest=function(){throw new Error("_digest is not implemented")},l=i,l}export{k as r};

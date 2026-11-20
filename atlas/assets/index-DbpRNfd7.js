(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={Float32Array,Float64Array,Int32Array,Uint32Array,Uint8Array};async function t(t,n,r){let i=await fetch(new URL(n,t),{signal:r});if(!i.ok||!i.body)throw Object.assign(Error(`Opening scene unavailable`),{status:i.status});let a=await new Response(i.body.pipeThrough(new DecompressionStream(`gzip`))).arrayBuffer();if(r?.throwIfAborted(),a.byteLength<12)throw Error(`Incomplete opening scene`);let o=new DataView(a),s=o.getUint32(4,!0),c=o.getUint32(8,!0),l=Math.ceil((12+s)/8)*8;if(o.getUint32(0,!0)!==827605315||l+c!==a.byteLength)throw Error(`Incorrect opening scene format`);let u=new TextDecoder(`utf-8`,{fatal:!0}).decode(new Uint8Array(a,12,s)),d=JSON.parse(u);function f(t){if(!t||typeof t!=`object`)return t;if(Array.isArray(t))return t.map(f);let n=t;if(n.$undefined!==!0){if(n.$negativeZero===!0)return-0;if(n.$typed){let t=String(n.$typed);if(!Object.hasOwn(e,t))throw Error(`Unknown opening array`);let r=e[t],i=Number(n.at),o=Number(n.n);if(!Number.isSafeInteger(i)||!Number.isSafeInteger(o)||i<0||o<0||i+o*r.BYTES_PER_ELEMENT>c||i%r.BYTES_PER_ELEMENT!==0)throw Error(`Invalid opening array bounds`);return new r(a,l+i,o)}for(let e of Object.keys(n))n[e]=f(n[e]);return n}}return f(d)}async function n(e,n){let r=await t(e,`startup-v126.bin`,n);if(r.projection.ids.length!==48936||r.projection.routes.length!==11886||r.projection.epoch!==13.8||r.projection.mode!==`lightcone`)throw Error(`Unexpected opening view`);return r}async function r(e,n){let r=await t(e,`startup-detail-v126.bin`,n);if(r.coarse.kind!==`coarse-ready`||r.coarse.root!==452677||r.structure.structure.root!==452677)throw Error(`Unexpected opening cluster`);return r}var i=1e3,a=1001,o=1002,s=1003,c=1004,l=1005,u=1006,d=1007,f=1008,p=1009,m=1010,h=1011,g=1012,_=1013,v=1014,y=1015,b=1016,x=1017,S=1018,C=1020,w=35902,T=35899,ee=1021,te=1022,E=1023,ne=1026,re=1027,ie=1028,ae=1029,D=1030,oe=1031,se=1033,ce=33776,le=33777,ue=33778,de=33779,fe=35840,pe=35841,me=35842,he=35843,ge=36196,_e=37492,ve=37496,ye=37488,be=37489,xe=37490,Se=37491,Ce=37808,we=37809,Te=37810,Ee=37811,De=37812,Oe=37813,ke=37814,Ae=37815,je=37816,Me=37817,Ne=37818,Pe=37819,Fe=37820,O=37821,Ie=36492,Le=36494,Re=36495,k=36283,ze=36284,A=36285,Be=36286,Ve=2300,He=2301,Ue=2302,We=2400,Ge=2401,Ke=2402,qe=3200,Je=`srgb`,Ye=`srgb-linear`,Xe=`linear`,Ze=`srgb`,Qe=7680,$e=35044,et=35048,tt=2e3;function nt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function rt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function it(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function at(){let e=it(`canvas`);return e.style.display=`block`,e}var ot={};function st(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function j(...e){let t=`THREE.`+e.shift();console.warn(t,...e)}function M(...e){let t=`THREE.`+e.shift();console.error(t,...e)}function ct(...e){let t=e.join(` `);t in ot||(ot[t]=!0,j(...e))}function lt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ut=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},dt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ft=1234567,pt=Math.PI/180,mt=180/Math.PI;function ht(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dt[e&255]+dt[e>>8&255]+dt[e>>16&255]+dt[e>>24&255]+`-`+dt[t&255]+dt[t>>8&255]+`-`+dt[t>>16&15|64]+dt[t>>24&255]+`-`+dt[n&63|128]+dt[n>>8&255]+`-`+dt[n>>16&255]+dt[n>>24&255]+dt[r&255]+dt[r>>8&255]+dt[r>>16&255]+dt[r>>24&255]).toLowerCase()}function N(e,t,n){return Math.max(t,Math.min(n,e))}function gt(e,t){return(e%t+t)%t}function _t(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function vt(e,t,n){return e===t?0:(n-e)/(t-e)}function yt(e,t,n){return(1-n)*e+n*t}function bt(e,t,n,r){return yt(e,t,1-Math.exp(-n*r))}function xt(e,t=1){return t-Math.abs(gt(e,t*2)-t)}function St(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Ct(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function wt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Tt(e,t){return e+Math.random()*(t-e)}function Et(e){return e*(.5-Math.random())}function Dt(e){e!==void 0&&(ft=e);let t=ft+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ot(e){return e*pt}function kt(e){return e*mt}function At(e){return!(e&e-1)&&e!==0}function jt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Mt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Nt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:j(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Pt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function Ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var It={DEG2RAD:pt,RAD2DEG:mt,generateUUID:ht,clamp:N,euclideanModulo:gt,mapLinear:_t,inverseLerp:vt,lerp:yt,damp:bt,pingpong:xt,smoothstep:St,smootherstep:Ct,randInt:wt,randFloat:Tt,randFloatSpread:Et,seededRandom:Dt,degToRad:Ot,radToDeg:kt,isPowerOfTwo:At,ceilPowerOfTwo:jt,floorPowerOfTwo:Mt,setQuaternionFromProperEuler:Nt,normalize:Ft,denormalize:Pt},Lt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=N(this.x,e.x,t.x),this.y=N(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=N(this.x,e,t),this.y=N(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(N(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(N(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o<=0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o>=1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:j(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(N(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=N(this.x,e.x,t.x),this.y=N(this.y,e.y,t.y),this.z=N(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=N(this.x,e,t),this.y=N(this.y,e,t),this.z=N(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(N(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zt.copy(this).projectOnVector(e),this.sub(zt)}reflect(e){return this.sub(zt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(N(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zt=new P,Bt=new Rt,Vt=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ht.makeScale(e,t)),this}rotate(e){return this.premultiply(Ht.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ht.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ht=new Vt,Ut=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wt=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gt(){let e={enabled:!0,workingColorSpace:Ye,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=qt(e.r),e.g=qt(e.g),e.b=qt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Jt(e.r),e.g=Jt(e.g),e.b=Jt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Xe:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ct(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ct(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ye]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:Ut,fromXYZ:Wt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:r,transfer:Ze,toXYZ:Ut,fromXYZ:Wt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),e}var Kt=Gt();function qt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Jt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Yt,Xt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yt===void 0&&(Yt=it(`canvas`)),Yt.width=e.width,Yt.height=e.height;let t=Yt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Yt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=it(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=qt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(qt(t[e]/255)*255):t[e]=qt(t[e]);return{data:t,width:e.width,height:e.height}}return j(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Zt=0,Qt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zt++}),this.uuid=ht(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push($t(r[t].image)):e.push($t(r[t]))}else e=$t(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function $t(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Xt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(j(`Texture: Unable to serialize Texture.`),{})}var en=0,tn=new P,nn=class e extends ut{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=a,i=a,o=u,s=f,c=E,l=p,d=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:en++}),this.uuid=ht(),this.name=``,this.source=new Qt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=s,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tn).x}get height(){return this.source.getSize(tn).y}get depth(){return this.source.getSize(tn).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){j(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?j(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case i:e.x-=Math.floor(e.x);break;case a:e.x=e.x<0?0:1;break;case o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case i:e.y-=Math.floor(e.y);break;case a:e.y=e.y<0?0:1;break;case o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null,nn.DEFAULT_MAPPING=300,nn.DEFAULT_ANISOTROPY=1;var rn=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=N(this.x,e.x,t.x),this.y=N(this.y,e.y,t.y),this.z=N(this.z,e.z,t.z),this.w=N(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=N(this.x,e,t),this.y=N(this.y,e,t),this.z=N(this.z,e,t),this.w=N(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(N(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},an=class extends ut{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:u,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t);let r=new nn({width:e,height:t,depth:n.depth});this.textures=[];let i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:u,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Qt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},on=class extends an{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},sn=class extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=s,this.minFilter=s,this.wrapR=a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},cn=class extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=s,this.minFilter=s,this.wrapR=a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ln=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,dn):dn.fromBufferAttribute(r,t),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),fn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),fn.copy(e.boundingBox)),fn.applyMatrix4(e.matrixWorld),this.union(fn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yn),bn.subVectors(this.max,yn),pn.subVectors(e.a,yn),mn.subVectors(e.b,yn),hn.subVectors(e.c,yn),gn.subVectors(mn,pn),_n.subVectors(hn,mn),vn.subVectors(pn,hn);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-vn.z,vn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,vn.z,0,-vn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-vn.y,vn.x,0];return!Cn(t,pn,mn,hn,bn)||(t=[1,0,0,0,1,0,0,0,1],!Cn(t,pn,mn,hn,bn))?!1:(xn.crossVectors(gn,_n),t=[xn.x,xn.y,xn.z],Cn(t,pn,mn,hn,bn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},un=[new P,new P,new P,new P,new P,new P,new P,new P],dn=new P,fn=new ln,pn=new P,mn=new P,hn=new P,gn=new P,_n=new P,vn=new P,yn=new P,bn=new P,xn=new P,Sn=new P;function Cn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Sn.fromArray(e,a);let o=i.x*Math.abs(Sn.x)+i.y*Math.abs(Sn.y)+i.z*Math.abs(Sn.z),s=t.dot(Sn),c=n.dot(Sn),l=r.dot(Sn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var wn=new ln,Tn=new P,En=new P,Dn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?wn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tn.subVectors(e,this.center);let t=Tn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Tn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(En.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tn.copy(e.center).add(En)),this.expandByPoint(Tn.copy(e.center).sub(En))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},On=new P,kn=new P,An=new P,jn=new P,Mn=new P,Nn=new P,Pn=new P,Fn=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){kn.copy(e).add(t).multiplyScalar(.5),An.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(kn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(An),o=jn.dot(this.direction),s=-jn.dot(An),c=jn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(kn).addScaledVector(An,d),f}intersectSphere(e,t){On.subVectors(e.center,this.origin);let n=On.dot(this.direction),r=On.dot(On)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,r,i){Mn.subVectors(t,e),Nn.subVectors(n,e),Pn.crossVectors(Mn,Nn);let a=this.direction.dot(Pn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,e);let s=o*this.direction.dot(Nn.crossVectors(jn,Nn));if(s<0)return null;let c=o*this.direction.dot(Mn.cross(jn));if(c<0||s+c>a)return null;let l=-o*jn.dot(Pn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},In=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ln.setFromMatrixColumn(e,0).length(),i=1/Ln.setFromMatrixColumn(e,1).length(),a=1/Ln.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zn,e,Bn)}lookAt(e,t,n){let r=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Vn.crossVectors(n,Un),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Vn.crossVectors(n,Un)),Vn.normalize(),Hn.crossVectors(Un,Vn),r[0]=Vn.x,r[4]=Hn.x,r[8]=Un.x,r[1]=Vn.y,r[5]=Hn.y,r[9]=Un.y,r[2]=Vn.z,r[6]=Hn.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],ee=r[5],te=r[9],E=r[13],ne=r[2],re=r[6],ie=r[10],ae=r[14],D=r[3],oe=r[7],se=r[11],ce=r[15];return i[0]=a*x+o*T+s*ne+c*D,i[4]=a*S+o*ee+s*re+c*oe,i[8]=a*C+o*te+s*ie+c*se,i[12]=a*w+o*E+s*ae+c*ce,i[1]=l*x+u*T+d*ne+f*D,i[5]=l*S+u*ee+d*re+f*oe,i[9]=l*C+u*te+d*ie+f*se,i[13]=l*w+u*E+d*ae+f*ce,i[2]=p*x+m*T+h*ne+g*D,i[6]=p*S+m*ee+h*re+g*oe,i[10]=p*C+m*te+h*ie+g*se,i[14]=p*w+m*E+h*ae+g*ce,i[3]=_*x+v*T+y*ne+b*D,i[7]=_*S+v*ee+y*re+b*oe,i[11]=_*C+v*te+y*ie+b*se,i[15]=_*w+v*E+y*ae+b*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let i=Ln.set(r[0],r[1],r[2]).length(),a=Ln.set(r[4],r[5],r[6]).length(),o=Ln.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),Rn.copy(this);let s=1/i,c=1/a,l=1/o;return Rn.elements[0]*=s,Rn.elements[1]*=s,Rn.elements[2]*=s,Rn.elements[4]*=c,Rn.elements[5]*=c,Rn.elements[6]*=c,Rn.elements[8]*=l,Rn.elements[9]*=l,Rn.elements[10]*=l,t.setFromRotationMatrix(Rn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=tt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=tt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ln=new P,Rn=new In,zn=new P(0,0,0),Bn=new P(1,1,1),Vn=new P,Hn=new P,Un=new P,Wn=new In,Gn=new Rt,Kn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(N(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-N(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(N(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-N(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(N(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-N(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:j(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gn.setFromEuler(this),this.setFromQuaternion(Gn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER=`XYZ`;var qn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Jn=0,Yn=new P,Xn=new Rt,Zn=new In,Qn=new P,$n=new P,er=new P,tr=new Rt,nr=new P(1,0,0),rr=new P(0,1,0),ir=new P(0,0,1),ar={type:`added`},or={type:`removed`},sr={type:`childadded`,child:null},cr={type:`childremoved`,child:null},lr=class e extends ut{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jn++}),this.uuid=ht(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new P,n=new Kn,r=new Rt,i=new P(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new In},normalMatrix:{value:new Vt}}),this.matrix=new In,this.matrixWorld=new In,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.premultiply(Xn),this}rotateX(e){return this.rotateOnAxis(nr,e)}rotateY(e){return this.rotateOnAxis(rr,e)}rotateZ(e){return this.rotateOnAxis(ir,e)}translateOnAxis(e,t){return Yn.copy(e).applyQuaternion(this.quaternion),this.position.add(Yn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nr,e)}translateY(e){return this.translateOnAxis(rr,e)}translateZ(e){return this.translateOnAxis(ir,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qn.copy(e):Qn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),$n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt($n,Qn,this.up):Zn.lookAt(Qn,$n,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),Xn.setFromRotationMatrix(Zn),this.quaternion.premultiply(Xn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(M(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ar),sr.child=e,this.dispatchEvent(sr),sr.child=null):M(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(or),cr.child=e,this.dispatchEvent(cr),cr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ar),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($n,e,er),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($n,tr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};lr.DEFAULT_UP=new P(0,1,0),lr.DEFAULT_MATRIX_AUTO_UPDATE=!0,lr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ur=new P,dr=new P,fr=new P,pr=new P,mr=new P,hr=new P,gr=new P,_r=new P,vr=new P,yr=new P,br=new rn,xr=new rn,Sr=new rn,Cr=class e{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ur.subVectors(e,t),r.cross(ur);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){ur.subVectors(r,t),dr.subVectors(n,t),fr.subVectors(e,t);let a=ur.dot(ur),o=ur.dot(dr),s=ur.dot(fr),c=dr.dot(dr),l=dr.dot(fr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pr)!==null&&pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,pr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,pr.x),s.addScaledVector(a,pr.y),s.addScaledVector(o,pr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return br.setScalar(0),xr.setScalar(0),Sr.setScalar(0),br.fromBufferAttribute(e,t),xr.fromBufferAttribute(e,n),Sr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(br,i.x),a.addScaledVector(xr,i.y),a.addScaledVector(Sr,i.z),a}static isFrontFacing(e,t,n,r){return ur.subVectors(n,t),dr.subVectors(e,t),ur.cross(dr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ur.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),ur.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;mr.subVectors(r,n),hr.subVectors(i,n),_r.subVectors(e,n);let s=mr.dot(_r),c=hr.dot(_r);if(s<=0&&c<=0)return t.copy(n);vr.subVectors(e,r);let l=mr.dot(vr),u=hr.dot(vr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(mr,a);yr.subVectors(e,i);let f=mr.dot(yr),p=hr.dot(yr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(hr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return gr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(gr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(mr,a).addScaledVector(hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Dr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Or=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Kt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Kt.workingColorSpace){if(e=gt(e,1),t=N(t,0,1),n=N(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Dr(i,r,e+1/3),this.g=Dr(i,r,e),this.b=Dr(i,r,e-1/3)}return Kt.colorSpaceToWorking(this,r),this}setStyle(e,t=Je){function n(t){t!==void 0&&parseFloat(t)<1&&j(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:j(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);j(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Je){let n=wr[e.toLowerCase()];return n===void 0?j(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qt(e.r),this.g=qt(e.g),this.b=qt(e.b),this}copyLinearToSRGB(e){return this.r=Jt(e.r),this.g=Jt(e.g),this.b=Jt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Je){return Kt.workingToColorSpace(kr.copy(this),e),Math.round(N(kr.r*255,0,255))*65536+Math.round(N(kr.g*255,0,255))*256+Math.round(N(kr.b*255,0,255))}getHexString(e=Je){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Kt.workingColorSpace){Kt.workingToColorSpace(kr.copy(this),t);let n=kr.r,r=kr.g,i=kr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Kt.workingColorSpace){return Kt.workingToColorSpace(kr.copy(this),t),e.r=kr.r,e.g=kr.g,e.b=kr.b,e}getStyle(e=Je){Kt.workingToColorSpace(kr.copy(this),e);let t=kr.r,n=kr.g,r=kr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(Er);let n=yt(Tr.h,Er.h,t),r=yt(Tr.s,Er.s,t),i=yt(Tr.l,Er.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kr=new Or;Or.NAMES=wr;var Ar=0,jr=class extends ut{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ar++}),this.uuid=ht(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Or(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qe,this.stencilZFail=Qe,this.stencilZPass=Qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){j(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?j(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Mr=class extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Or(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nr=Pr();function Pr(){let e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),r=new Uint32Array(512),i=new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[e|256]=32768,i[e]=24,i[e|256]=24):t<-14?(r[e]=1024>>-t-14,r[e|256]=1024>>-t-14|32768,i[e]=-t-1,i[e|256]=-t-1):t<=15?(r[e]=t+15<<10,r[e|256]=t+15<<10|32768,i[e]=13,i[e|256]=13):t<128?(r[e]=31744,r[e|256]=64512,i[e]=24,i[e|256]=24):(r[e]=31744,r[e|256]=64512,i[e]=13,i[e|256]=13)}let a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;!(t&8388608);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,a[e]=t|n}for(let e=1024;e<2048;++e)a[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)o[e]=e<<23;o[31]=1199570944,o[32]=2147483648;for(let e=33;e<63;++e)o[e]=2147483648+(e-32<<23);o[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(s[e]=1024);return{floatView:t,uint32View:n,baseTable:r,shiftTable:i,mantissaTable:a,exponentTable:o,offsetTable:s}}function Fr(e){Math.abs(e)>65504&&j(`DataUtils.toHalfFloat(): Value out of range.`),e=N(e,-65504,65504),Nr.floatView[0]=e;let t=Nr.uint32View[0],n=t>>23&511;return Nr.baseTable[n]+((t&8388607)>>Nr.shiftTable[n])}function Ir(e){let t=e>>10;return Nr.uint32View[0]=Nr.mantissaTable[Nr.offsetTable[t]+(e&1023)]+Nr.exponentTable[t],Nr.floatView[0]}var Lr=class{static toHalfFloat(e){return Fr(e)}static fromHalfFloat(e){return Ir(e)}},Rr=new P,zr=new Lt,Br=0,F=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Br++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=$e,this.updateRanges=[],this.gpuType=y,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix4(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyNormalMatrix(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.transformDirection(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Vr=class extends F{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Hr=class extends F{constructor(e,t,n){super(new Uint32Array(e),t,n)}},I=class extends F{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ur=0,Wr=new In,Gr=new lr,Kr=new P,qr=new ln,Jr=new ln,Yr=new P,Xr=class e extends ut{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ur++}),this.uuid=ht(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(nt(e)?Hr:Vr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Vt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wr.makeRotationFromQuaternion(e),this.applyMatrix4(Wr),this}rotateX(e){return Wr.makeRotationX(e),this.applyMatrix4(Wr),this}rotateY(e){return Wr.makeRotationY(e),this.applyMatrix4(Wr),this}rotateZ(e){return Wr.makeRotationZ(e),this.applyMatrix4(Wr),this}translate(e,t,n){return Wr.makeTranslation(e,t,n),this.applyMatrix4(Wr),this}scale(e,t,n){return Wr.makeScale(e,t,n),this.applyMatrix4(Wr),this}lookAt(e){return Gr.lookAt(e),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new I(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&j(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)M(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];qr.setFromBufferAttribute(n),this.morphTargetsRelative?(Yr.addVectors(this.boundingBox.min,qr.min),this.boundingBox.expandByPoint(Yr),Yr.addVectors(this.boundingBox.max,qr.max),this.boundingBox.expandByPoint(Yr)):(this.boundingBox.expandByPoint(qr.min),this.boundingBox.expandByPoint(qr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&M(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)M(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new P,1/0);else if(e){let n=this.boundingSphere.center;if(qr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Yr.addVectors(qr.min,Jr.min),qr.expandByPoint(Yr),Yr.addVectors(qr.max,Jr.max),qr.expandByPoint(Yr)):(qr.expandByPoint(Jr.min),qr.expandByPoint(Jr.max))}qr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Yr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Yr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Yr.fromBufferAttribute(a,t),o&&(Kr.fromBufferAttribute(e,t),Yr.add(Kr)),r=Math.max(r,n.distanceToSquared(Yr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&M(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){M(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new F(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new P,s[e]=new P;let c=new P,l=new P,u=new P,d=new Lt,f=new Lt,p=new Lt,m=new P,h=new P;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new P,y=new P,b=new P,x=new P;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new F(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new P,i=new P,a=new P,o=new P,s=new P,c=new P,l=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yr.fromBufferAttribute(e,t),Yr.normalize(),e.setXYZ(t,Yr.x,Yr.y,Yr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new F(a,r,i)}if(this.index===null)return j(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Zr=new In,Qr=new Fn,$r=new Dn,ei=new P,ti=new P,ni=new P,ri=new P,ii=new P,ai=new P,oi=new P,si=new P,ci=class extends lr{constructor(e=new Xr,t=new Mr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ai.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ii.fromBufferAttribute(s,e),a?ai.addScaledVector(ii,r):ai.addScaledVector(ii.sub(t),r))}t.add(ai)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),Qr.copy(e.ray).recast(e.near),$r.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere($r,ei)===null||Qr.origin.distanceToSquared(ei)>(e.far-e.near)**2)||(Zr.copy(i).invert(),Qr.copy(e.ray).applyMatrix4(Zr),(n.boundingBox===null||Qr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ui(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ui(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ui(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ui(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function li(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;si.copy(s),si.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(si);return l<n.near||l>n.far?null:{distance:l,point:si.clone(),object:e}}function ui(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ti),e.getVertexPosition(c,ni),e.getVertexPosition(l,ri);let u=li(e,t,n,r,ti,ni,ri,oi);if(u){let e=new P;Cr.getBarycoord(oi,ti,ni,ri,e),i&&(u.uv=Cr.getInterpolatedAttribute(i,s,c,l,e,new Lt)),a&&(u.uv1=Cr.getInterpolatedAttribute(a,s,c,l,e,new Lt)),o&&(u.normal=Cr.getInterpolatedAttribute(o,s,c,l,e,new P),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new P,materialIndex:0};Cr.getNormal(ti,ni,ri,t.normal),u.face=t,u.barycoord=e}return u}var di=class e extends Xr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new I(c,3)),this.setAttribute(`normal`,new I(l,3)),this.setAttribute(`uv`,new I(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,ee=0,te=new P;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)te[e]=(s*v-b)*r,te[t]=o*i,te[n]=S,c.push(te.x,te.y,te.z),te[e]=0,te[t]=0,te[n]=m>0?1:-1,l.push(te.x,te.y,te.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),ee+=6}o.addGroup(f,ee,_),f+=ee,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(j(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function pi(e){let t={};for(let n=0;n<e.length;n++){let r=fi(e[n]);for(let e in r)t[e]=r[e]}return t}function mi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function hi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var gi={clone:fi,merge:pi},_i=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yi=class extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_i,this.fragmentShader=vi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fi(e.uniforms),this.uniformsGroups=mi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bi=class extends lr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new In,this.projectionMatrix=new In,this.projectionMatrixInverse=new In,this.coordinateSystem=tt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xi=new P,Si=new Lt,Ci=new Lt,wi=class extends bi{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mt*2*Math.atan(Math.tan(pt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Si,Ci),t.subVectors(Ci,Si)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ti=-90,Ei=1,Di=class extends lr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wi(Ti,Ei,e,t);r.layers=this.layers,this.add(r);let i=new wi(Ti,Ei,e,t);i.layers=this.layers,this.add(i);let a=new wi(Ti,Ei,e,t);a.layers=this.layers,this.add(a);let o=new wi(Ti,Ei,e,t);o.layers=this.layers,this.add(o);let s=new wi(Ti,Ei,e,t);s.layers=this.layers,this.add(s);let c=new wi(Ti,Ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Oi=class extends nn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ki=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Oi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new di(5,5,5),i=new yi({name:`CubemapFromEquirect`,uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ci(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=u),new Di(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Ai=class extends lr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ji={type:`move`},Mi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ji)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ni=class extends lr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pi=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=$e,this.updateRanges=[],this.version=0,this.uuid=ht()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fi=new P,Ii=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fi.fromBufferAttribute(this,t),Fi.applyMatrix4(e),this.setXYZ(t,Fi.x,Fi.y,Fi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fi.fromBufferAttribute(this,t),Fi.applyNormalMatrix(e),this.setXYZ(t,Fi.x,Fi.y,Fi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fi.fromBufferAttribute(this,t),Fi.transformDirection(e),this.setXYZ(t,Fi.x,Fi.y,Fi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),i=Ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){st(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new F(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){st(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Li=class extends nn{constructor(e=null,t=1,n=1,r,i,a,o,c,l=s,u=s,d,f){super(null,a,o,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ri=class extends F{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zi=new P,Bi=new P,Vi=new Vt,Hi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=zi.subVectors(n,t).cross(Bi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(zi),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vi.getNormalMatrix(e),r=this.coplanarPoint(zi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new Dn,Wi=new Lt(.5,.5),Gi=new P,Ki=class{constructor(e=new Hi,t=new Hi,n=new Hi,r=new Hi,i=new Hi,a=new Hi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476+Wi.distanceTo(e.center),Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Gi.x=r.normal.x>0?e.max.x:e.min.x,Gi.y=r.normal.y>0?e.max.y:e.min.y,Gi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qi=class extends jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Or(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ji=new P,Yi=new P,Xi=new In,Zi=new Fn,Qi=new Dn,$i=new P,ea=new P,ta=class extends lr{constructor(e=new Xr,t=new qi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ji.fromBufferAttribute(t,e-1),Yi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ji.distanceTo(Yi);e.setAttribute(`lineDistance`,new I(n,1))}else j(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(r),Qi.radius+=i,e.ray.intersectsSphere(Qi)===!1)return;Xi.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(Xi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=na(this,e,Zi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=na(this,e,Zi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=na(this,e,Zi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=na(this,e,Zi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function na(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ji.fromBufferAttribute(s,i),Yi.fromBufferAttribute(s,a),n.distanceSqToSegment(Ji,Yi,$i,ea)>r)return;$i.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo($i);if(!(c<t.near||c>t.far))return{distance:c,point:ea.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ra=new P,ia=new P,aa=class extends ta{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ra.fromBufferAttribute(t,e),ia.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ra.distanceTo(ia);e.setAttribute(`lineDistance`,new I(n,1))}else j(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},oa=class extends ta{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},sa=class extends jr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Or(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ca=new In,la=new Fn,ua=new Dn,da=new P,fa=class extends lr{constructor(e=new Xr,t=new sa){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),ua.radius+=i,e.ray.intersectsSphere(ua)===!1)return;ca.copy(r).invert(),la.copy(e.ray).applyMatrix4(ca);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);da.fromBufferAttribute(l,n),pa(da,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)da.fromBufferAttribute(l,a),pa(da,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function pa(e,t,n,r,i,a,o){let s=la.distanceSqToPoint(e);if(s<n){let n=new P;la.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ma=class extends nn{constructor(e,t,n=v,r,i,a,o=s,c=s,l,u=ne,d=1){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ha=class extends ma{constructor(e,t=v,n=301,r,i,a=s,o=s,c,l=ne){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ga=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_a=class e extends Xr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new I(p,3)),this.setAttribute(`normal`,new I(m,3)),this.setAttribute(`uv`,new I(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},va=class e extends Xr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new P,p=new Lt;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new I(s,3)),this.setAttribute(`normal`,new I(c,3)),this.setAttribute(`uv`,new I(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ya=class e extends Xr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new P,d=new P,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new I(p,3)),this.setAttribute(`normal`,new I(m,3)),this.setAttribute(`uv`,new I(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ba=class extends Xr{constructor(e=null){if(super(),this.type=`WireframeGeometry`,this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new P,i=new P;if(e.index!==null){let a=e.attributes.position,o=e.index,s=e.groups;s.length===0&&(s=[{start:0,count:o.count,materialIndex:0}]);for(let e=0,c=s.length;e<c;++e){let c=s[e],l=c.start,u=c.count;for(let e=l,s=l+u;e<s;e+=3)for(let s=0;s<3;s++){let c=o.getX(e+s),l=o.getX(e+(s+1)%3);r.fromBufferAttribute(a,c),i.fromBufferAttribute(a,l),xa(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}}else{let a=e.attributes.position;for(let e=0,o=a.count/3;e<o;e++)for(let o=0;o<3;o++){let s=3*e+o,c=3*e+(o+1)%3;r.fromBufferAttribute(a,s),i.fromBufferAttribute(a,c),xa(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}this.setAttribute(`position`,new I(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function xa(e,t,n){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(r)===!0||n.has(i)===!0?!1:(n.add(r),n.add(i),!0)}var Sa=class extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ca=class extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=qe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wa=class extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ta(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var Ea=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Da=class extends Ea{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:We,endingEnd:We}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ge:i=e,o=2*t-n;break;case Ke:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ge:a=e,s=2*n-t;break;case Ke:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Oa=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ka=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Aa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ta(t,this.TimeBufferType),this.values=Ta(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ta(e.times,Array),values:Ta(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Da(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ve:t=this.InterpolantFactoryMethodDiscrete;break;case He:t=this.InterpolantFactoryMethodLinear;break;case Ue:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return j(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ve;case this.InterpolantFactoryMethodLinear:return He;case this.InterpolantFactoryMethodSmooth:return Ue}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(M(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(M(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){M(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){M(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&rt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){M(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ue,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Aa.prototype.ValueTypeName=``,Aa.prototype.TimeBufferType=Float32Array,Aa.prototype.ValueBufferType=Float32Array,Aa.prototype.DefaultInterpolation=He;var ja=class extends Aa{constructor(e,t,n){super(e,t,n)}};ja.prototype.ValueTypeName=`bool`,ja.prototype.ValueBufferType=Array,ja.prototype.DefaultInterpolation=Ve,ja.prototype.InterpolantFactoryMethodLinear=void 0,ja.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}};Ma.prototype.ValueTypeName=`color`;var Na=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}};Na.prototype.ValueTypeName=`number`;var Pa=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Rt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Fa=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Pa(this.times,this.values,this.getValueSize(),e)}};Fa.prototype.ValueTypeName=`quaternion`,Fa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends Aa{constructor(e,t,n){super(e,t,n)}};Ia.prototype.ValueTypeName=`string`,Ia.prototype.ValueBufferType=Array,Ia.prototype.DefaultInterpolation=Ve,Ia.prototype.InterpolantFactoryMethodLinear=void 0,Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}};La.prototype.ValueTypeName=`vector`;var Ra=class extends bi{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},za=class extends Xr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Ba=class extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Va=`\\[\\]\\.:\\/`,Ha=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ua=`[^\\[\\]\\.:\\/]`,Wa=`[^`+Va.replace(`\\.`,``)+`]`,Ga=`((?:WC+[\\/:])*)`.replace(`WC`,Ua),Ka=`(WCOD+)?`.replace(`WCOD`,Wa),qa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ua),Ja=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ua),Ya=RegExp(`^`+Ga+Ka+qa+Ja+`$`),Xa=[`material`,`materials`,`bones`,`map`],Za=class{constructor(e,t,n){let r=n||Qa.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qa=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ha,``)}static parseTrackName(e){let t=Ya.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Xa.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){j(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){M(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){M(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){M(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){M(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){M(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){M(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){M(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;M(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){M(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){M(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qa.Composite=Za,Qa.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Qa.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Qa.prototype.GetterByBindingType=[Qa.prototype._getValue_direct,Qa.prototype._getValue_array,Qa.prototype._getValue_arrayElement,Qa.prototype._getValue_toArray],Qa.prototype.SetterByBindingTypeAndVersioning=[[Qa.prototype._setValue_direct,Qa.prototype._setValue_direct_setNeedsUpdate,Qa.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qa.prototype._setValue_array,Qa.prototype._setValue_array_setNeedsUpdate,Qa.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qa.prototype._setValue_arrayElement,Qa.prototype._setValue_arrayElement_setNeedsUpdate,Qa.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qa.prototype._setValue_fromArray,Qa.prototype._setValue_fromArray_setNeedsUpdate,Qa.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $a=class extends Pi{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},eo=new In,to=class{constructor(e,t,n=0,r=1/0){this.ray=new Fn(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new qn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):M(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return eo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eo),this}intersectObject(e,t=!0,n=[]){return ro(e,this,n,t),n.sort(no),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)ro(e[r],this,n,t);return n.sort(no),n}};function no(e,t){return e.distance-t.distance}function ro(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)ro(r[e],t,n,!0)}}var io=new P,ao=new P,oo=new P,so=new P,co=new P,lo=new P,uo=new P,fo=class{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){io.subVectors(e,this.start),ao.subVectors(this.end,this.start);let n=ao.dot(ao),r=ao.dot(io)/n;return t&&(r=N(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=lo,n=uo){let r=1e-8*1e-8,i,a,o=this.start,s=e.start,c=this.end,l=e.end;oo.subVectors(c,o),so.subVectors(l,s),co.subVectors(o,s);let u=oo.dot(oo),d=so.dot(so),f=so.dot(co);if(u<=r&&d<=r)return t.copy(o),n.copy(s),t.sub(n),t.dot(t);if(u<=r)i=0,a=f/d,a=N(a,0,1);else{let e=oo.dot(co);if(d<=r)a=0,i=N(-e/u,0,1);else{let t=oo.dot(so),n=u*d-t*t;i=n===0?0:N((t*f-e*d)/n,0,1),a=(t*i+f)/d,a<0?(a=0,i=N(-e/u,0,1)):a>1&&(a=1,i=N((t-e)/u,0,1))}}return t.copy(o).add(oo.multiplyScalar(i)),n.copy(s).add(so.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function po(e,t,n,r){let i=mo(r);switch(n){case ee:return e*t;case ie:return e*t/i.components*i.byteLength;case ae:return e*t/i.components*i.byteLength;case D:return e*t*2/i.components*i.byteLength;case oe:return e*t*2/i.components*i.byteLength;case te:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case se:return e*t*4/i.components*i.byteLength;case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:case he:return Math.max(e,16)*Math.max(t,8)/4;case fe:case me:return Math.max(e,8)*Math.max(t,8)/2;case ge:case _e:case ye:case be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ve:case xe:case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case we:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Te:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ke:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ae:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ne:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Pe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Fe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case O:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ie:case Le:case Re:return Math.ceil(e/4)*Math.ceil(t/4)*16;case k:case ze:return Math.ceil(e/4)*Math.ceil(t/4)*8;case A:case Be:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function mo(e){switch(e){case p:case m:return{byteLength:1,components:1};case g:case h:case b:return{byteLength:2,components:1};case x:case S:return{byteLength:2,components:4};case v:case _:case y:return{byteLength:4,components:1};case w:case T:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`182`}})),typeof window<`u`&&(window.__THREE__?j(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`182`);function ho(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function go(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var _o={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},L={common:{diffuse:{value:new Or(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Or(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Or(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Or(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},vo={basic:{uniforms:pi([L.common,L.specularmap,L.envmap,L.aomap,L.lightmap,L.fog]),vertexShader:_o.meshbasic_vert,fragmentShader:_o.meshbasic_frag},lambert:{uniforms:pi([L.common,L.specularmap,L.envmap,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.fog,L.lights,{emissive:{value:new Or(0)}}]),vertexShader:_o.meshlambert_vert,fragmentShader:_o.meshlambert_frag},phong:{uniforms:pi([L.common,L.specularmap,L.envmap,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.fog,L.lights,{emissive:{value:new Or(0)},specular:{value:new Or(1118481)},shininess:{value:30}}]),vertexShader:_o.meshphong_vert,fragmentShader:_o.meshphong_frag},standard:{uniforms:pi([L.common,L.envmap,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.roughnessmap,L.metalnessmap,L.fog,L.lights,{emissive:{value:new Or(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_o.meshphysical_vert,fragmentShader:_o.meshphysical_frag},toon:{uniforms:pi([L.common,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.gradientmap,L.fog,L.lights,{emissive:{value:new Or(0)}}]),vertexShader:_o.meshtoon_vert,fragmentShader:_o.meshtoon_frag},matcap:{uniforms:pi([L.common,L.bumpmap,L.normalmap,L.displacementmap,L.fog,{matcap:{value:null}}]),vertexShader:_o.meshmatcap_vert,fragmentShader:_o.meshmatcap_frag},points:{uniforms:pi([L.points,L.fog]),vertexShader:_o.points_vert,fragmentShader:_o.points_frag},dashed:{uniforms:pi([L.common,L.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_o.linedashed_vert,fragmentShader:_o.linedashed_frag},depth:{uniforms:pi([L.common,L.displacementmap]),vertexShader:_o.depth_vert,fragmentShader:_o.depth_frag},normal:{uniforms:pi([L.common,L.bumpmap,L.normalmap,L.displacementmap,{opacity:{value:1}}]),vertexShader:_o.meshnormal_vert,fragmentShader:_o.meshnormal_frag},sprite:{uniforms:pi([L.sprite,L.fog]),vertexShader:_o.sprite_vert,fragmentShader:_o.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_o.background_vert,fragmentShader:_o.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:_o.backgroundCube_vert,fragmentShader:_o.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_o.cube_vert,fragmentShader:_o.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_o.equirect_vert,fragmentShader:_o.equirect_frag},distance:{uniforms:pi([L.common,L.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_o.distance_vert,fragmentShader:_o.distance_frag},shadow:{uniforms:pi([L.lights,L.fog,{color:{value:new Or(0)},opacity:{value:1}}]),vertexShader:_o.shadow_vert,fragmentShader:_o.shadow_frag}};vo.physical={uniforms:pi([vo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Or(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Or(0)},specularColor:{value:new Or(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:_o.meshphysical_vert,fragmentShader:_o.meshphysical_frag};var yo={r:0,b:0,g:0},bo=new Kn,xo=new In;function So(e,t,n,r,i,a,o){let s=new Or(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new ci(new di(1,1,1),new yi({name:`BackgroundCubeMaterial`,uniforms:fi(vo.backgroundCube.uniforms),vertexShader:vo.backgroundCube.vertexShader,fragmentShader:vo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),bo.copy(n.backgroundRotation),bo.x*=-1,bo.y*=-1,bo.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(bo.y*=-1,bo.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xo.makeRotationFromEuler(bo)),u.material.toneMapped=Kt.getTransfer(r.colorSpace)!==Ze,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new ci(new _a(2,2),new yi({name:`BackgroundMaterial`,uniforms:fi(vo.background.uniforms),vertexShader:vo.background.vertexShader,fragmentShader:vo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(r.colorSpace)!==Ze,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(yo,hi(e)),r.buffers.color.setClear(yo.r,yo.g,yo.b,n,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function Co(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function wo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function To(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(j(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Eo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Hi,s=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Do(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new ki(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Oo=4,ko=[.125,.215,.35,.446,.526,.582],Ao=20,jo=256,Mo=new Ra,No=new Or,Po=null,Fo=0,Io=0,Lo=!1,Ro=new P,zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ro}=i;Po=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Po,Fo,Io),this._renderer.xr.enabled=Lo,e.scissorTest=!1,Ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Po=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:u,minFilter:u,generateMipmaps:!1,type:b,format:E,colorSpace:Ye,depthBuffer:!1},r=Vo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bo(r)),this._blurMaterial=Wo(r,e,t),this._ggxMaterial=Uo(r,e,t)}return r}_compileMaterial(e){let t=new ci(new Xr,e);this._renderer.compile(t,Mo)}_sceneToCubeUV(e,t,n,r,i){let a=new wi(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(No),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new di,new Mr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(No),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ho(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Go());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ho(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Mo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Oo?n-d+Oo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ho(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Mo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ho(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Mo)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&M(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Ao;m>Ao&&j(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ao}`);let h=[],g=0;for(let e=0;e<Ao;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Ho(t,3*v*(r>_-Oo?r-_+Oo:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Mo)}};function Bo(e){let t=[],n=[],r=[],i=e,a=e-Oo+1+ko.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Oo?s=ko[o-e+Oo-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Xr;h.setAttribute(`position`,new F(f,3)),h.setAttribute(`uv`,new F(p,2)),h.setAttribute(`faceIndex`,new F(m,1)),r.push(new ci(h,null)),i>Oo&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Vo(e,t,n){let r=new on(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ho(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Uo(e,t,n){return new yi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:jo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wo(e,t,n){let r=new Float32Array(Ao),i=new P(0,1,0);return new yi({name:`SphericalGaussianBlur`,defines:{n:Ao,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Go(){return new yi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ko(){return new yi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jo(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new zo(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new zo(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Yo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ct(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Xo(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(nt(n)?Hr:Vr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Zo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Qo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:M(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function $o(e,t,n){let r=new WeakMap,i=new rn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new sn(h,p,m,u);g.type=y,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Lt(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function es(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var ts={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ns(e,t,n,r,i){let a=new on(t,n,{type:e,depthBuffer:r,stencilBuffer:i}),o=new on(t,n,{type:b,depthBuffer:!1,stencilBuffer:!1}),s=new Xr;s.setAttribute(`position`,new I([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute(`uv`,new I([0,2,0,0,2,0],2));let c=new Sa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new ci(s,c),u=new Ra(-1,1,1,-1,0,1),d=null,f=null,p=!1,m,h=null,g=[],_=!1;this.setSize=function(e,t){a.setSize(e,t),o.setSize(e,t);for(let n=0;n<g.length;n++){let r=g[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){g=e,_=g.length>0&&g[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<g.length;e++){let r=g[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(p||e.toneMapping===0&&g.length===0)return!1;if(h=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return _===!1&&e.setRenderTarget(a),m=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return _},this.end=function(e,t){e.toneMapping=m,p=!0;let n=a,r=o;for(let i=0;i<g.length;i++){let a=g[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(d!==e.outputColorSpace||f!==e.toneMapping){d=e.outputColorSpace,f=e.toneMapping,c.defines={},Kt.getTransfer(d)===`srgb`&&(c.defines.SRGB_TRANSFER=``);let t=ts[f];t&&(c.defines[t]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(h),e.render(l,u),h=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o.dispose(),s.dispose(),c.dispose()}}var rs=new nn,is=new ma(1,1),as=new sn,os=new cn,ss=new Oi,cs=[],ls=[],us=new Float32Array(16),ds=new Float32Array(9),fs=new Float32Array(4);function ps(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=cs[i];if(a===void 0&&(a=new Float32Array(i),cs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ms(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function hs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function gs(e,t){let n=ls[t];n===void 0&&(n=new Int32Array(t),ls[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function _s(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ms(n,t))return;e.uniform2fv(this.addr,t),hs(n,t)}}function ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ms(n,t))return;e.uniform3fv(this.addr,t),hs(n,t)}}function bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ms(n,t))return;e.uniform4fv(this.addr,t),hs(n,t)}}function xs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ms(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),hs(n,t)}else{if(ms(n,r))return;fs.set(r),e.uniformMatrix2fv(this.addr,!1,fs),hs(n,r)}}function Ss(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ms(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),hs(n,t)}else{if(ms(n,r))return;ds.set(r),e.uniformMatrix3fv(this.addr,!1,ds),hs(n,r)}}function Cs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ms(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),hs(n,t)}else{if(ms(n,r))return;us.set(r),e.uniformMatrix4fv(this.addr,!1,us),hs(n,r)}}function ws(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ms(n,t))return;e.uniform2iv(this.addr,t),hs(n,t)}}function Es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ms(n,t))return;e.uniform3iv(this.addr,t),hs(n,t)}}function Ds(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ms(n,t))return;e.uniform4iv(this.addr,t),hs(n,t)}}function Os(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ks(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ms(n,t))return;e.uniform2uiv(this.addr,t),hs(n,t)}}function As(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ms(n,t))return;e.uniform3uiv(this.addr,t),hs(n,t)}}function js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ms(n,t))return;e.uniform4uiv(this.addr,t),hs(n,t)}}function Ms(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(is.compareFunction=n.isReversedDepthBuffer()?518:515,a=is):a=rs,n.setTexture2D(t||a,i)}function Ns(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||os,i)}function Ps(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ss,i)}function Fs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||as,i)}function Is(e){switch(e){case 5126:return _s;case 35664:return vs;case 35665:return ys;case 35666:return bs;case 35674:return xs;case 35675:return Ss;case 35676:return Cs;case 5124:case 35670:return ws;case 35667:case 35671:return Ts;case 35668:case 35672:return Es;case 35669:case 35673:return Ds;case 5125:return Os;case 36294:return ks;case 36295:return As;case 36296:return js;case 35678:case 36198:case 36298:case 36306:case 35682:return Ms;case 35679:case 36299:case 36307:return Ns;case 35680:case 36300:case 36308:case 36293:return Ps;case 36289:case 36303:case 36311:case 36292:return Fs}}function Ls(e,t){e.uniform1fv(this.addr,t)}function Rs(e,t){let n=ps(t,this.size,2);e.uniform2fv(this.addr,n)}function zs(e,t){let n=ps(t,this.size,3);e.uniform3fv(this.addr,n)}function Bs(e,t){let n=ps(t,this.size,4);e.uniform4fv(this.addr,n)}function Vs(e,t){let n=ps(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Hs(e,t){let n=ps(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Us(e,t){let n=ps(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ws(e,t){e.uniform1iv(this.addr,t)}function Gs(e,t){e.uniform2iv(this.addr,t)}function Ks(e,t){e.uniform3iv(this.addr,t)}function qs(e,t){e.uniform4iv(this.addr,t)}function Js(e,t){e.uniform1uiv(this.addr,t)}function Ys(e,t){e.uniform2uiv(this.addr,t)}function Xs(e,t){e.uniform3uiv(this.addr,t)}function Zs(e,t){e.uniform4uiv(this.addr,t)}function Qs(e,t,n){let r=this.cache,i=t.length,a=gs(n,i);ms(r,a)||(e.uniform1iv(this.addr,a),hs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?is:rs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function $s(e,t,n){let r=this.cache,i=t.length,a=gs(n,i);ms(r,a)||(e.uniform1iv(this.addr,a),hs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||os,a[e])}function ec(e,t,n){let r=this.cache,i=t.length,a=gs(n,i);ms(r,a)||(e.uniform1iv(this.addr,a),hs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ss,a[e])}function tc(e,t,n){let r=this.cache,i=t.length,a=gs(n,i);ms(r,a)||(e.uniform1iv(this.addr,a),hs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||as,a[e])}function nc(e){switch(e){case 5126:return Ls;case 35664:return Rs;case 35665:return zs;case 35666:return Bs;case 35674:return Vs;case 35675:return Hs;case 35676:return Us;case 5124:case 35670:return Ws;case 35667:case 35671:return Gs;case 35668:case 35672:return Ks;case 35669:case 35673:return qs;case 5125:return Js;case 36294:return Ys;case 36295:return Xs;case 36296:return Zs;case 35678:case 36198:case 36298:case 36306:case 35682:return Qs;case 35679:case 36299:case 36307:return $s;case 35680:case 36300:case 36308:case 36293:return ec;case 36289:case 36303:case 36311:case 36292:return tc}}var rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Is(t.type)}},ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nc(t.type)}},ac=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},oc=/(\w+)(\])?(\[|\.)?/g;function sc(e,t){e.seq.push(t),e.map[t.id]=t}function cc(e,t,n){let r=e.name,i=r.length;for(oc.lastIndex=0;;){let a=oc.exec(r),o=oc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){sc(n,l===void 0?new rc(s,e,t):new ic(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ac(s),sc(n,e)),n=e}}}var lc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);cc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function uc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var dc=37297,fc=0;function pc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var mc=new Vt;function hc(e){Kt._getMatrix(mc,Kt.workingColorSpace,e);let t=`mat3( ${mc.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(e)){case Xe:return[t,`LinearTransferOETF`];case Ze:return[t,`sRGBTransferOETF`];default:return j(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function gc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+pc(e.getShaderSource(t),r)}return i}function _c(e,t){let n=hc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var vc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function yc(e,t){let n=vc[t];return n===void 0?(j(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var bc=new P;function xc(){return Kt.getLuminanceCoefficients(bc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${bc.x.toFixed(4)}, ${bc.y.toFixed(4)}, ${bc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Sc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Tc).join(`
`)}function Cc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function wc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Tc(e){return e!==``}function Ec(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Oc=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(e){return e.replace(Oc,jc)}var Ac=new Map;function jc(e,t){let n=_o[t];if(n===void 0){let e=Ac.get(t);if(e!==void 0)n=_o[e],j(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return kc(n)}var Mc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(e){return e.replace(Mc,Pc)}function Pc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Fc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ic={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Lc(e){return Ic[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Rc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function zc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Rc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Bc={302:`ENVMAP_MODE_REFRACTION`};function Vc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Bc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Hc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Uc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Hc[e.combine]||`ENVMAP_BLENDING_NONE`}function Wc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Gc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Lc(n),l=zc(n),u=Vc(n),d=Uc(n),f=Wc(n),p=Sc(n),m=Cc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Tc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Tc).join(`
`),_.length>0&&(_+=`
`)):(g=[Fc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Tc).join(`
`),_=[Fc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:_o.tonemapping_pars_fragment,n.toneMapping===0?``:yc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,_o.colorspace_pars_fragment,_c(`linearToOutputTexel`,n.outputColorSpace),xc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Tc).join(`
`)),o=kc(o),o=Ec(o,n),o=Dc(o,n),s=kc(s),s=Ec(s,n),s=Dc(s,n),o=Nc(o),s=Nc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=uc(i,i.VERTEX_SHADER,y),S=uc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=gc(i,x,`vertex`),n=gc(i,S,`fragment`);M(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):j(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new lc(i,h),T=wc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let ee=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ee===!1&&(ee=i.getProgramParameter(h,dc)),ee},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Kc=0,qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jc(e),t.set(e,n)),n}},Jc=class{constructor(e){this.id=Kc++,this.code=e,this.usedTimes=0}};function Yc(e,t,n,r,i,a,o){let s=new qn,c=new qc,l=new Set,u=[],d=new Map,f=i.logarithmicDepthBuffer,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,d,g){let _=d.fog,v=g.geometry,y=a.isMeshStandardMaterial?d.environment:null,b=(a.isMeshStandardMaterial?n:t).get(a.envMap||y),x=b&&b.mapping===306?b.image.height:null,S=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&j(`WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let C=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,w=C===void 0?0:C.length,T=0;v.morphAttributes.position!==void 0&&(T=1),v.morphAttributes.normal!==void 0&&(T=2),v.morphAttributes.color!==void 0&&(T=3);let ee,te,E,ne;if(S){let e=vo[S];ee=e.vertexShader,te=e.fragmentShader}else ee=a.vertexShader,te=a.fragmentShader,c.update(a),E=c.getVertexShaderID(a),ne=c.getFragmentShaderID(a);let re=e.getRenderTarget(),ie=e.state.buffers.depth.getReversed(),ae=g.isInstancedMesh===!0,D=g.isBatchedMesh===!0,oe=!!a.map,se=!!a.matcap,ce=!!b,le=!!a.aoMap,ue=!!a.lightMap,de=!!a.bumpMap,fe=!!a.normalMap,pe=!!a.displacementMap,me=!!a.emissiveMap,he=!!a.metalnessMap,ge=!!a.roughnessMap,_e=a.anisotropy>0,ve=a.clearcoat>0,ye=a.dispersion>0,be=a.iridescence>0,xe=a.sheen>0,Se=a.transmission>0,Ce=_e&&!!a.anisotropyMap,we=ve&&!!a.clearcoatMap,Te=ve&&!!a.clearcoatNormalMap,Ee=ve&&!!a.clearcoatRoughnessMap,De=be&&!!a.iridescenceMap,Oe=be&&!!a.iridescenceThicknessMap,ke=xe&&!!a.sheenColorMap,Ae=xe&&!!a.sheenRoughnessMap,je=!!a.specularMap,Me=!!a.specularColorMap,Ne=!!a.specularIntensityMap,Pe=Se&&!!a.transmissionMap,Fe=Se&&!!a.thicknessMap,O=!!a.gradientMap,Ie=!!a.alphaMap,Le=a.alphaTest>0,Re=!!a.alphaHash,k=!!a.extensions,ze=0;a.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ze=e.toneMapping);let A={shaderID:S,shaderType:a.type,shaderName:a.name,vertexShader:ee,fragmentShader:te,defines:a.defines,customVertexShaderID:E,customFragmentShaderID:ne,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:D,batchingColor:D&&g._colorsTexture!==null,instancing:ae,instancingColor:ae&&g.instanceColor!==null,instancingMorph:ae&&g.morphTexture!==null,outputColorSpace:re===null?e.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ye,alphaToCoverage:!!a.alphaToCoverage,map:oe,matcap:se,envMap:ce,envMapMode:ce&&b.mapping,envMapCubeUVHeight:x,aoMap:le,lightMap:ue,bumpMap:de,normalMap:fe,displacementMap:pe,emissiveMap:me,normalMapObjectSpace:fe&&a.normalMapType===1,normalMapTangentSpace:fe&&a.normalMapType===0,metalnessMap:he,roughnessMap:ge,anisotropy:_e,anisotropyMap:Ce,clearcoat:ve,clearcoatMap:we,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ee,dispersion:ye,iridescence:be,iridescenceMap:De,iridescenceThicknessMap:Oe,sheen:xe,sheenColorMap:ke,sheenRoughnessMap:Ae,specularMap:je,specularColorMap:Me,specularIntensityMap:Ne,transmission:Se,transmissionMap:Pe,thicknessMap:Fe,gradientMap:O,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Le,alphaHash:Re,combine:a.combine,mapUv:oe&&h(a.map.channel),aoMapUv:le&&h(a.aoMap.channel),lightMapUv:ue&&h(a.lightMap.channel),bumpMapUv:de&&h(a.bumpMap.channel),normalMapUv:fe&&h(a.normalMap.channel),displacementMapUv:pe&&h(a.displacementMap.channel),emissiveMapUv:me&&h(a.emissiveMap.channel),metalnessMapUv:he&&h(a.metalnessMap.channel),roughnessMapUv:ge&&h(a.roughnessMap.channel),anisotropyMapUv:Ce&&h(a.anisotropyMap.channel),clearcoatMapUv:we&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:Te&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&h(a.sheenRoughnessMap.channel),specularMapUv:je&&h(a.specularMap.channel),specularColorMapUv:Me&&h(a.specularColorMap.channel),specularIntensityMapUv:Ne&&h(a.specularIntensityMap.channel),transmissionMapUv:Pe&&h(a.transmissionMap.channel),thicknessMapUv:Fe&&h(a.thicknessMap.channel),alphaMapUv:Ie&&h(a.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(fe||_e),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:g.isPoints===!0&&!!v.attributes.uv&&(oe||Ie),fog:!!_,useFog:a.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:a.flatShading===!0&&a.wireframe===!1,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ie,skinning:g.isSkinnedMesh===!0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:ze,decodeVideoTexture:oe&&a.map.isVideoTexture===!0&&Kt.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:me&&a.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:k&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(k&&a.extensions.multiDraw===!0||D)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return A.vertexUv1s=l.has(1),A.vertexUv2s=l.has(2),A.vertexUv3s=l.has(3),l.clear(),A}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=vo[t];n=gi.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r=d.get(n);return r===void 0?(r=new Gc(e,n,t,a),u.push(r),d.set(n,r)):++r.usedTimes,r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Xc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Zc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Qc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function $c(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Zc),r.length>1&&r.sort(t||Qc),i.length>1&&i.sort(t||Qc)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function el(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new $c,e.set(t,[i])):n>=r.length?(i=new $c,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function tl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new P,color:new Or};break;case`SpotLight`:n={position:new P,direction:new P,color:new Or,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new P,color:new Or,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new P,skyColor:new Or,groundColor:new Or};break;case`RectAreaLight`:n={color:new Or,position:new P,halfWidth:new P,halfHeight:new P}}return e[t.id]=n,n}}}function nl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var rl=0;function il(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function al(e){let t=new tl,n=nl(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new P);let i=new P,a=new In,o=new In;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(il);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=L.LTC_FLOAT_1,r.rectAreaLTC2=L.LTC_FLOAT_2):(r.rectAreaLTC1=L.LTC_HALF_1,r.rectAreaLTC2=L.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=rl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function ol(e){let t=new al(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function sl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ol(e),t.set(n,[a])):r>=i.length?(a=new ol(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var cl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ll=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ul=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],dl=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],fl=new In,pl=new P,ml=new P;function hl(e,t,n){let r=new Ki,i=new Lt,a=new Lt,o=new rn,c=new Ca,l=new wa,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:cl,fragmentShader:ll}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new Xr;g.setAttribute(`position`,new F(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ci(g,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,c){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;t.type===2&&(j(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),t.type=1);let l=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,d=t.length;l<d;l++){let d=t[l],p=d.shadow;if(p===void 0){j(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();if(i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y)),p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){j(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new on(i.x,i.y,{format:D,type:b,minFilter:u,magFilter:u,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new ma(i.x,i.y,y),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=ne,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s}else{d.isPointLight?(p.map=new ki(i.x),p.map.depthTexture=new ha(i.x,v)):(p.map=new on(i.x,i.y),p.map.depthTexture=new ma(i.x,i.y,v)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=ne;let t=e.state.buffers.depth.getReversed();this.type===1?(p.map.depthTexture.compareFunction=t?518:515,p.map.depthTexture.minFilter=u,p.map.depthTexture.magFilter=u):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s)}p.camera.updateProjectionMatrix()}let _=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<_;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(o)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),pl.setFromMatrixPosition(d.matrixWorld),e.position.copy(pl),ml.copy(e.position),ml.add(ul[t]),e.up.copy(dl[t]),e.lookAt(ml),e.updateMatrixWorld(),n.makeTranslation(-pl.x,-pl.y,-pl.z),fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(fl,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);r=p.getFrustum(),T(n,c,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,c),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(l,d,p)};function C(n,r){let a=t.update(_);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new on(i.x,i.y,{format:D,type:b})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,ee)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function ee(e){e.target.removeEventListener(`dispose`,ee);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var gl={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function _l(e,t){function n(){let t=!1,n=new rn,r=null,i=new rn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?he(e.DEPTH_TEST):ge(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=gl[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?he(e.STENCIL_TEST):ge(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new Or(0,0,0),w=0,T=!1,ee=null,te=null,E=null,ne=null,re=null,ie=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ae=!1,D=0,oe=e.getParameter(e.VERSION);oe.indexOf(`WebGL`)===-1?oe.indexOf(`OpenGL ES`)!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),ae=D>=2):(D=parseFloat(/^WebGL (\d)/.exec(oe)[1]),ae=D>=1);let se=null,ce={},le=e.getParameter(e.SCISSOR_BOX),ue=e.getParameter(e.VIEWPORT),de=new rn().fromArray(le),fe=new rn().fromArray(ue);function pe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let me={};me[e.TEXTURE_2D]=pe(e.TEXTURE_2D,e.TEXTURE_2D,1),me[e.TEXTURE_CUBE_MAP]=pe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[e.TEXTURE_2D_ARRAY]=pe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),me[e.TEXTURE_3D]=pe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),he(e.DEPTH_TEST),o.setFunc(3),we(!1),Te(1),he(e.CULL_FACE),Se(0);function he(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ge(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function _e(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function ve(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ye(t){return m!==t&&(e.useProgram(t),m=t,!0)}let be={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};be[103]=e.MIN,be[104]=e.MAX;let xe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function Se(t,n,r,i,a,o,s,c,l,u){if(t===0)h===!0&&(ge(e.BLEND),h=!1);else if(h===!1&&(he(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:M(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:M(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:M(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:M(`WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}}else a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(be[n],be[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(xe[r],xe[i],xe[o],xe[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function Ce(t,n){t.side===2?ge(e.CULL_FACE):he(e.CULL_FACE);let r=t.side===1;n&&(r=!r),we(r),t.blending===1&&t.transparent===!1?Se(0):Se(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),De(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?he(e.SAMPLE_ALPHA_TO_COVERAGE):ge(e.SAMPLE_ALPHA_TO_COVERAGE)}function we(t){ee!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),ee=t)}function Te(t){t===0?ge(e.CULL_FACE):(he(e.CULL_FACE),t!==te&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),te=t}function Ee(t){t!==E&&(ae&&e.lineWidth(t),E=t)}function De(t,n,r){t?(he(e.POLYGON_OFFSET_FILL),(ne!==n||re!==r)&&(e.polygonOffset(n,r),ne=n,re=r)):ge(e.POLYGON_OFFSET_FILL)}function Oe(t){t?he(e.SCISSOR_TEST):ge(e.SCISSOR_TEST)}function ke(t){t===void 0&&(t=e.TEXTURE0+ie-1),se!==t&&(e.activeTexture(t),se=t)}function Ae(t,n,r){r===void 0&&(r=se===null?e.TEXTURE0+ie-1:se);let i=ce[r];i===void 0&&(i={type:void 0,texture:void 0},ce[r]=i),(i.type!==t||i.texture!==n)&&(se!==r&&(e.activeTexture(r),se=r),e.bindTexture(t,n||me[t]),i.type=t,i.texture=n)}function je(){let t=ce[se];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Me(){try{e.compressedTexImage2D(...arguments)}catch(e){M(`WebGLState:`,e)}}function Ne(){try{e.compressedTexImage3D(...arguments)}catch(e){M(`WebGLState:`,e)}}function Pe(){try{e.texSubImage2D(...arguments)}catch(e){M(`WebGLState:`,e)}}function Fe(){try{e.texSubImage3D(...arguments)}catch(e){M(`WebGLState:`,e)}}function O(){try{e.compressedTexSubImage2D(...arguments)}catch(e){M(`WebGLState:`,e)}}function Ie(){try{e.compressedTexSubImage3D(...arguments)}catch(e){M(`WebGLState:`,e)}}function Le(){try{e.texStorage2D(...arguments)}catch(e){M(`WebGLState:`,e)}}function Re(){try{e.texStorage3D(...arguments)}catch(e){M(`WebGLState:`,e)}}function k(){try{e.texImage2D(...arguments)}catch(e){M(`WebGLState:`,e)}}function ze(){try{e.texImage3D(...arguments)}catch(e){M(`WebGLState:`,e)}}function A(t){de.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),de.copy(t))}function Be(t){fe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),fe.copy(t))}function Ve(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function He(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},se=null,ce={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new Or(0,0,0),w=0,T=!1,ee=null,te=null,E=null,ne=null,re=null,de.set(0,0,e.canvas.width,e.canvas.height),fe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:he,disable:ge,bindFramebuffer:_e,drawBuffers:ve,useProgram:ye,setBlending:Se,setMaterial:Ce,setFlipSided:we,setCullFace:Te,setLineWidth:Ee,setPolygonOffset:De,setScissorTest:Oe,activeTexture:ke,bindTexture:Ae,unbindTexture:je,compressedTexImage2D:Me,compressedTexImage3D:Ne,texImage2D:k,texImage3D:ze,updateUBOMapping:Ve,uniformBlockBinding:He,texStorage2D:Le,texStorage3D:Re,texSubImage2D:Pe,texSubImage3D:Fe,compressedTexSubImage2D:O,compressedTexSubImage3D:Ie,scissor:A,viewport:Be,reset:Ue}}function vl(e,t,n,r,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new Lt,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):it(`canvas`)}function w(e,t,n){let r=1,i=k(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),j(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&j(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function T(e){return e.generateMipmaps}function ee(t){e.generateMipmap(t)}function te(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function E(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];j(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(s=e.R11F_G11F_B10F)),r===e.RGBA){let t=o?Xe:Kt.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function ne(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,j(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ie(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ae(e){let t=e.target;t.removeEventListener(`dispose`,ae),oe(t),t.isVideoTexture&&y.delete(t)}function D(e){let t=e.target;t.removeEventListener(`dispose`,D),ce(t)}function oe(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=x.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&se(e),Object.keys(i).length===0&&x.delete(n)}r.remove(e)}function se(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=x.get(i);delete a[n.__cacheKey],h.memory.textures--}function ce(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),r.remove(i[t])}r.remove(t)}let le=0;function ue(){le=0}function de(){let e=le;return e>=p.maxTextures&&j(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),le+=1,e}function fe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function pe(t,i){let a=r.get(t);if(t.isVideoTexture&&Le(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)j(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)j(`WebGLRenderer: Texture marked for update but image is incomplete`);else{we(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function me(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?we(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function he(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?we(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ge(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?Te(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let _e={[i]:e.REPEAT,[a]:e.CLAMP_TO_EDGE,[o]:e.MIRRORED_REPEAT},ve={[s]:e.NEAREST,[c]:e.NEAREST_MIPMAP_NEAREST,[l]:e.NEAREST_MIPMAP_LINEAR,[u]:e.LINEAR,[d]:e.LINEAR_MIPMAP_NEAREST,[f]:e.LINEAR_MIPMAP_LINEAR},ye={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function be(n,i){if(i.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(i.magFilter===1006||i.magFilter===1007||i.magFilter===1005||i.magFilter===1008||i.minFilter===1006||i.minFilter===1007||i.minFilter===1005||i.minFilter===1008)&&j(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,_e[i.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,_e[i.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,_e[i.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ve[i.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ve[i.minFilter]),i.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ye[i.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(i.magFilter===1003||i.minFilter!==1005&&i.minFilter!==1008||i.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(i.anisotropy>1||r.get(i).__currentAnisotropy){let a=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i.anisotropy,p.getMaxAnisotropy())),r.get(i).__currentAnisotropy=i.anisotropy}}}function xe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ae));let i=n.source,a=x.get(i);a===void 0&&(a={},x.set(i,a));let o=fe(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&se(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function Se(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ce(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Se(n.start,r.width,4),c=Se(t.start,r.width,4);n.start<=i+1&&a===c&&Se(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=e.getParameter(e.UNPACK_ROW_LENGTH),l=e.getParameter(e.UNPACK_SKIP_PIXELS),u=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;e.pixelStorei(e.UNPACK_SKIP_PIXELS,u),e.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,c),e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function we(t,i,a){let o=e.TEXTURE_2D;(i.isDataArrayTexture||i.isCompressedArrayTexture)&&(o=e.TEXTURE_2D_ARRAY),i.isData3DTexture&&(o=e.TEXTURE_3D);let s=xe(t,i),c=i.source;n.bindTexture(o,t.__webglTexture,e.TEXTURE0+a);let l=r.get(c);if(c.version!==l.__version||s===!0){n.activeTexture(e.TEXTURE0+a);let t=Kt.getPrimaries(Kt.workingColorSpace),r=i.colorSpace===``?null:Kt.getPrimaries(i.colorSpace),u=i.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,u);let d=w(i.image,!1,p.maxTextureSize);d=Re(i,d);let f=m.convert(i.format,i.colorSpace),h=m.convert(i.type),g=E(i.internalFormat,f,h,i.colorSpace,i.isVideoTexture);be(o,i);let _,v=i.mipmaps,y=i.isVideoTexture!==!0,b=l.__version===void 0||s===!0,x=c.dataReady,S=ie(i,d);if(i.isDepthTexture)g=ne(i.format===re,i.type),b&&(y?n.texStorage2D(e.TEXTURE_2D,1,g,d.width,d.height):n.texImage2D(e.TEXTURE_2D,0,g,d.width,d.height,0,f,h,null));else if(i.isDataTexture){if(v.length>0){y&&b&&n.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,r=v.length;t<r;t++)_=v[t],y?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):n.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data);i.generateMipmaps=!1}else y?(b&&n.texStorage2D(e.TEXTURE_2D,S,g,d.width,d.height),x&&Ce(i,d,f,h)):n.texImage2D(e.TEXTURE_2D,0,g,d.width,d.height,0,f,h,d.data)}else if(i.isCompressedTexture){if(i.isCompressedArrayTexture){y&&b&&n.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,d.depth);for(let t=0,r=v.length;t<r;t++)if(_=v[t],i.format!==1023){if(f!==null){if(y){if(x){if(i.layerUpdates.size>0){let r=po(_.width,_.height,i.format,i.type);for(let a of i.layerUpdates){let i=_.data.subarray(a*r/_.data.BYTES_PER_ELEMENT,(a+1)*r/_.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,a,_.width,_.height,1,f,i)}i.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,d.depth,f,_.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,d.depth,0,_.data,0,0)}else j(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?x&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,d.depth,f,h,_.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,d.depth,0,f,h,_.data)}else{y&&b&&n.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,r=v.length;t<r;t++)_=v[t],i.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):n.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data):f===null?j(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,_.data):n.compressedTexImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,_.data)}}else if(i.isDataArrayTexture){if(y){if(b&&n.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,d.width,d.height,d.depth),x){if(i.layerUpdates.size>0){let t=po(d.width,d.height,i.format,i.type);for(let r of i.layerUpdates){let i=d.data.subarray(r*t/d.data.BYTES_PER_ELEMENT,(r+1)*t/d.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,d.width,d.height,1,f,h,i)}i.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,d.width,d.height,d.depth,f,h,d.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,g,d.width,d.height,d.depth,0,f,h,d.data)}else if(i.isData3DTexture)y?(b&&n.texStorage3D(e.TEXTURE_3D,S,g,d.width,d.height,d.depth),x&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,d.width,d.height,d.depth,f,h,d.data)):n.texImage3D(e.TEXTURE_3D,0,g,d.width,d.height,d.depth,0,f,h,d.data);else if(i.isFramebufferTexture){if(b){if(y)n.texStorage2D(e.TEXTURE_2D,S,g,d.width,d.height);else{let t=d.width,r=d.height;for(let i=0;i<S;i++)n.texImage2D(e.TEXTURE_2D,i,g,t,r,0,f,h,null),t>>=1,r>>=1}}}else if(v.length>0){if(y&&b){let t=k(v[0]);n.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}for(let t=0,r=v.length;t<r;t++)_=v[t],y?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f,h,_):n.texImage2D(e.TEXTURE_2D,t,g,f,h,_);i.generateMipmaps=!1}else if(y){if(b){let t=k(d);n.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}x&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,f,h,d)}else n.texImage2D(e.TEXTURE_2D,0,g,f,h,d);T(i)&&ee(o),l.__version=c.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function Te(t,i,a){if(i.image.length!==6)return;let o=xe(t,i),s=i.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+a);let c=r.get(s);if(s.version!==c.__version||o===!0){n.activeTexture(e.TEXTURE0+a);let t=Kt.getPrimaries(Kt.workingColorSpace),r=i.colorSpace===``?null:Kt.getPrimaries(i.colorSpace),l=i.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=i.isCompressedTexture||i.image[0].isCompressedTexture,d=i.image[0]&&i.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!u&&!d?f[e]=w(i.image[e],!0,p.maxCubemapSize):f[e]=d?i.image[e].image:i.image[e],f[e]=Re(i,f[e]);let h=f[0],g=m.convert(i.format,i.colorSpace),_=m.convert(i.type),v=E(i.internalFormat,g,_,i.colorSpace),y=i.isVideoTexture!==!0,b=c.__version===void 0||o===!0,x=s.dataReady,S=ie(i,h);be(e.TEXTURE_CUBE_MAP,i);let C;if(u){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let a=C[r];i.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,_,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,a.width,a.height,0,g,_,a.data):g===null?j(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,a.width,a.height,0,a.data)}}}else{if(C=i.mipmaps,y&&b){C.length>0&&S++;let t=k(f[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(d){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}T(i)&&ee(e.TEXTURE_CUBE_MAP),c.__version=s.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function Ee(t,i,a,o,s,c){let l=m.convert(a.format,a.colorSpace),u=m.convert(a.type),d=E(a.internalFormat,l,u,a.colorSpace),f=r.get(i),p=r.get(a);if(p.__renderTarget=i,!f.__hasExternalTextures){let t=Math.max(1,i.width>>c),r=Math.max(1,i.height>>c);s===e.TEXTURE_3D||s===e.TEXTURE_2D_ARRAY?n.texImage3D(s,c,d,t,r,i.depth,0,l,u,null):n.texImage2D(s,c,d,t,r,0,l,u,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ie(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,o,s,p.__webglTexture,0,O(i)):(s===e.TEXTURE_2D||s>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&s<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,o,s,p.__webglTexture,c),n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ne(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ie(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,O(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,O(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=E(a.internalFormat,o,s,a.colorSpace);Ie(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,O(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,O(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Oe(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let s=r.get(i.depthTexture);if(s.__renderTarget=i,s.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),o){if(s.__webglInit===void 0&&(s.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,ae)),s.__webglTexture===void 0){s.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture),be(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=m.convert(i.depthTexture.format),r=m.convert(i.depthTexture.type),a;i.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,a,i.width,i.height,0,t,r,null)}}else pe(i.depthTexture,0);let c=s.__webglTexture,l=O(i),u=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,d=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ie(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else if(i.depthTexture.format===1027)Ie(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else throw Error(`Unknown depthTexture format`)}function ke(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Oe(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Oe(i.__webglFramebuffer[0],t,0):Oe(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),De(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),De(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(t,n,i){let a=r.get(t);n!==void 0&&Ee(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ke(t)}function je(t){let i=t.texture,a=r.get(t),o=r.get(i);t.addEventListener(`dispose`,D);let s=t.textures,c=t.isWebGLCubeRenderTarget===!0,l=s.length>1;if(l||(o.__webglTexture===void 0&&(o.__webglTexture=e.createTexture()),o.__version=i.version,h.memory.textures++),c){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)a.__webglFramebuffer[t][n]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(l)for(let t=0,n=s.length;t<n;t++){let n=r.get(s[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Ie(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<s.length;n++){let r=s[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=m.convert(r.format,r.colorSpace),o=m.convert(r.type),c=E(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),l=O(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),De(a.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(c){n.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture),be(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ee(a.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ee(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);T(i)&&ee(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(l){for(let i=0,o=s.length;i<o;i++){let o=s[i],c=r.get(o),l=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(l,c.__webglTexture),be(l,o),Ee(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+i,l,0),T(o)&&ee(l)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,o.__webglTexture),be(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ee(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ee(a.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);T(i)&&ee(r),n.unbindTexture()}t.depthBuffer&&ke(t)}function Me(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(T(a)){let t=te(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),ee(t),n.unbindTexture()}}}let Ne=[],Pe=[];function Fe(t){if(t.samples>0){if(Ie(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=r.get(t),u=i.length>1;if(u)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let d=t.texture.mipmaps;d&&d.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),u){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),_===!0&&(Ne.length=0,Pe.length=0,Ne.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Ne.push(c),Pe.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Pe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ne))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),u)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function O(e){return Math.min(p.maxSamples,e.samples)}function Ie(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Le(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Re(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Kt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&j(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):M(`WebGLTextures: Unsupported texture color space:`,n)),t}function k(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=de,this.resetTextureUnits=ue,this.setTexture2D=pe,this.setTexture2DArray=me,this.setTexture3D=he,this.setTextureCube=ge,this.rebindTextures=Ae,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function yl(e,t){function n(n,r=``){let i,a=Kt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var bl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Sl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yi({vertexShader:bl,fragmentShader:xl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ci(new _a(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cl=class extends ut{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,m=null,h=typeof XRWebGLBinding<`u`,g=new Sl,_={},y=t.getContextAttributes(),b=null,x=null,S=[],w=[],T=new Lt,ee=null,te=new wi;te.viewport=new rn;let ie=new wi;ie.viewport=new rn;let ae=[te,ie],D=new Ba,oe=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new Mi,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new Mi,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new Mi,S[e]=t),t.getHandSpace()};function ce(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function le(){r.removeEventListener(`select`,ce),r.removeEventListener(`selectstart`,ce),r.removeEventListener(`selectend`,ce),r.removeEventListener(`squeeze`,ce),r.removeEventListener(`squeezestart`,ce),r.removeEventListener(`squeezeend`,ce),r.removeEventListener(`end`,le),r.removeEventListener(`inputsourceschange`,ue);for(let e=0;e<S.length;e++){let t=w[e];t!==null&&(w[e]=null,S[e].disconnect(t))}oe=null,se=null,g.reset();for(let e in _)delete _[e];e.setRenderTarget(b),f=null,d=null,u=null,r=null,x=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(ee),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&j(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&j(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,ce),r.addEventListener(`selectstart`,ce),r.addEventListener(`selectend`,ce),r.addEventListener(`squeeze`,ce),r.addEventListener(`squeezestart`,ce),r.addEventListener(`squeezeend`,ce),r.addEventListener(`end`,le),r.addEventListener(`inputsourceschange`,ue),y.xrCompatible!==!0&&await t.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?re:ne,a=y.stencil?C:v);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new on(d.textureWidth,d.textureHeight,{format:E,type:p,depthTexture:new ma(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new on(f.framebufferWidth,f.framebufferHeight,{format:E,type:p,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ve.setContext(r),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ue(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}let de=new P,fe=new P;function pe(e,t,n){de.setFromMatrixPosition(t.matrixWorld),fe.setFromMatrixPosition(n.matrixWorld);let r=de.distanceTo(fe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function me(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),D.near=ie.near=te.near=t,D.far=ie.far=te.far=n,(oe!==D.near||se!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),oe=D.near,se=D.far),D.layers.mask=e.layers.mask|6,te.layers.mask=D.layers.mask&3,ie.layers.mask=D.layers.mask&5;let i=e.parent,a=D.cameras;me(D,i);for(let e=0;e<a.length;e++)me(a[e],i);a.length===2?pe(D,te,ie):D.projectionMatrix.copy(te.projectionMatrix),he(e,D,i)};function he(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=mt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(e){return _[e]};let ge=null;function _e(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=ae[n];o===void 0&&(o=new wi,o.layers.enable(n),o.viewport=new rn,ae[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),i===!0&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new ga,_[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=w[e],n=S[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ge&&ge(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let ve=new ho;ve.setAnimationLoop(_e),this.setAnimationLoop=function(e){ge=e},this.dispose=function(){}}},wl=new Kn,Tl=new In;function El(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,hi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,wl.copy(o),wl.x*=-1,wl.y*=-1,wl.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(wl.y*=-1,wl.z*=-1),e.envMapRotation.value.setFromMatrix4(Tl.makeRotationFromEuler(wl)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Dl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return M(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?j(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):j(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Ol=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kl=null;function Al(){return kl===null&&(kl=new Li(Ol,16,16,D,b),kl.name=`DFG_LUT`,kl.minFilter=u,kl.magFilter=u,kl.wrapS=a,kl.wrapT=a,kl.generateMipmaps=!1,kl.needsUpdate=!0),kl}var jl=class{constructor(e={}){let{canvas:t=at(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=p}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);h=n.getContextAttributes().alpha}else h=a;let _=m,y=new Set([se,oe,ae]),w=new Set([p,v,g,C,x,S]),T=new Uint32Array(4),ee=new Int32Array(4),te=null,E=null,ne=[],re=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,ce=!1;this._outputColorSpace=Je;let le=0,ue=0,de=null,fe=-1,pe=null,me=new rn,he=new rn,ge=null,_e=new Or(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new rn(0,0,ye,be),Te=new rn(0,0,ye,be),Ee=!1,De=new Ki,Oe=!1,ke=!1,Ae=new In,je=new P,Me=new rn,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return de===null?xe:1}let O=n;function Ie(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r182`),t.addEventListener(`webglcontextlost`,mt,!1),t.addEventListener(`webglcontextrestored`,ht,!1),t.addEventListener(`webglcontextcreationerror`,N,!1),O===null){let t=`webgl2`;if(O=Ie(t,e),O===null)throw Ie(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw M(`WebGLRenderer: `+e.message),e}let Le,Re,k,ze,A,Be,Ve,He,Ue,We,Ge,Ke,qe,Xe,Ze,Qe,$e,et,nt,rt,it,ot,ut,dt;function ft(){Le=new Yo(O),Le.init(),ot=new yl(O,Le),Re=new To(O,Le,e,ot),k=new _l(O,Le),Re.reversedDepthBuffer&&d&&k.buffers.depth.setReversed(!0),ze=new Qo(O),A=new Xc,Be=new vl(O,Le,k,A,Re,ot,ze),Ve=new Do(D),He=new Jo(D),Ue=new go(O),ut=new Co(O,Ue),We=new Xo(O,Ue,ze,ut),Ge=new es(O,We,Ue,ze),nt=new $o(O,Re,Be),Qe=new Eo(A),Ke=new Yc(D,Ve,He,Le,Re,ut,Qe),qe=new El(D,A),Xe=new el,Ze=new sl(Le),et=new So(D,Ve,He,k,Ge,h,s),$e=new hl(D,Ge,Re),dt=new Dl(O,ze,Re,k),rt=new wo(O,Le,ze),it=new Zo(O,Le,ze),ze.programs=Ke.programs,D.capabilities=Re,D.extensions=Le,D.properties=A,D.renderLists=Xe,D.shadowMap=$e,D.state=k,D.info=ze}ft(),_!==1009&&(ie=new ns(_,t.width,t.height,r,i));let pt=new Cl(D,O);this.xr=pt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){pt.isPresenting?j(`WebGLRenderer: Can't change size while VR device is presenting.`):(ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(_===1009)console.error(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){console.warn(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),k.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),k.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){k.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(de!==null){let t=de.texture.format;e=y.has(t)}if(e){let e=de.texture.type,t=w.has(e),n=et.getClearColor(),r=et.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,O.clearBufferuiv(O.COLOR,0,T)):(ee[0]=i,ee[1]=a,ee[2]=o,ee[3]=r,O.clearBufferiv(O.COLOR,0,ee))}else r|=O.COLOR_BUFFER_BIT}t&&(r|=O.DEPTH_BUFFER_BIT),n&&(r|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,mt,!1),t.removeEventListener(`webglcontextrestored`,ht,!1),t.removeEventListener(`webglcontextcreationerror`,N,!1),et.dispose(),Xe.dispose(),Ze.dispose(),A.dispose(),Ve.dispose(),He.dispose(),Ge.dispose(),ut.dispose(),dt.dispose(),Ke.dispose(),pt.dispose(),pt.removeEventListener(`sessionstart`,St),pt.removeEventListener(`sessionend`,Ct),wt.stop()};function mt(e){e.preventDefault(),st(`WebGLRenderer: Context Lost.`),ce=!0}function ht(){st(`WebGLRenderer: Context Restored.`),ce=!1;let e=ze.autoReset,t=$e.enabled,n=$e.autoUpdate,r=$e.needsUpdate,i=$e.type;ft(),ze.autoReset=e,$e.enabled=t,$e.autoUpdate=n,$e.needsUpdate=r,$e.type=i}function N(e){M(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function gt(e){let t=e.target;t.removeEventListener(`dispose`,gt),_t(t)}function _t(e){vt(e),A.remove(e)}function vt(e){let t=A.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=Nt(e,t,n,r,i);k.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ut.setup(i,r,s,n,c);let h,g=rt;if(c!==null&&(h=Ue.get(c),g=it,g.setIndex(h)),i.isMesh)r.wireframe===!0?(k.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(O.LINES)):g.setMode(O.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),k.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(O.LINES):i.isLineLoop?g.setMode(O.LINE_LOOP):g.setMode(O.LINE_STRIP)}else i.isPoints?g.setMode(O.POINTS):i.isSprite&&g.setMode(O.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)ct(`WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=A.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(O,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function yt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,At(e,t,n),e.side=0,e.needsUpdate=!0,At(e,t,n),e.side=2):At(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),E=Ze.get(n),E.init(t),re.push(E),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),E.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];yt(a,n,e),r.add(a)}else yt(t,n,e),r.add(t)}}),E=re.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){A.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let bt=null;function xt(e){bt&&bt(e)}function St(){wt.stop()}function Ct(){wt.start()}let wt=new ho;wt.setAnimationLoop(xt),typeof self<`u`&&wt.setContext(self),this.setAnimationLoop=function(e){bt=e,pt.setAnimationLoop(e),e===null?wt.stop():wt.start()},pt.addEventListener(`sessionstart`,St),pt.addEventListener(`sessionend`,Ct),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){M(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ce===!0)return;let n=pt.enabled===!0&&pt.isPresenting===!0,r=ie!==null&&(de===null||n)&&ie.begin(D,de);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(t),t=pt.getCamera()),e.isScene===!0&&e.onBeforeRender(D,e,t,de),E=Ze.get(e,re.length),E.init(t),re.push(E),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,tt,t.reversedDepth),ke=this.localClippingEnabled,Oe=Qe.init(this.clippingPlanes,ke),te=Xe.get(e,ne.length),te.init(),ne.push(te),pt.enabled===!0&&pt.isPresenting===!0){let e=D.xr.getDepthSensingMesh();e!==null&&Tt(e,t,-1/0,D.sortObjects)}Tt(e,t,0,D.sortObjects),te.finish(),D.sortObjects===!0&&te.sort(Se,Ce),Pe=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Pe&&et.addToRenderList(te,e),this.info.render.frame++,Oe===!0&&Qe.beginShadows();let i=E.state.shadowsArray;if($e.render(i,e,t),Oe===!0&&Qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&ie.hasRenderPass())===!1){let n=te.opaque,r=te.transmissive;if(E.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Dt(n,r,e,a)}Pe&&et.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Et(te,e,n,n.viewport)}}else r.length>0&&Dt(n,r,e,t),Pe&&et.render(e),Et(te,e,t)}de!==null&&ue===0&&(Be.updateMultisampleRenderTarget(de),Be.updateRenderTargetMipmap(de)),r&&ie.end(D),e.isScene===!0&&e.onAfterRender(D,e,t),ut.resetDefaultState(),fe=-1,pe=null,re.pop(),re.length>0?(E=re[re.length-1],Oe===!0&&Qe.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,ne.pop(),te=ne.length>0?ne[ne.length-1]:null};function Tt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)E.pushLight(e),e.castShadow&&E.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||De.intersectsSprite(e)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let t=Ge.update(e),i=e.material;i.visible&&te.push(e,t,i,n,Me.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||De.intersectsObject(e))){let t=Ge.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Me.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&te.push(e,t,s,n,Me.z,o)}}else i.visible&&te.push(e,t,i,n,Me.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Tt(i[e],t,n,r)}function Et(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;E.setupLightsView(n),Oe===!0&&Qe.setGlobalState(D.clippingPlanes,n),r&&k.viewport(me.copy(r)),i.length>0&&Ot(i,t,n),a.length>0&&Ot(a,t,n),o.length>0&&Ot(o,t,n),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Dt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);E.state.transmissionRenderTarget[r.id]=new on(1,1,{generateMipmaps:!0,type:e?b:p,minFilter:f,samples:Re.samples,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}let a=E.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*D.transmissionResolutionScale,o.w*D.transmissionResolutionScale);let s=D.getRenderTarget(),c=D.getActiveCubeFace(),l=D.getActiveMipmapLevel();D.setRenderTarget(a),D.getClearColor(_e),ve=D.getClearAlpha(),ve<1&&D.setClearColor(16777215,.5),D.clear(),Pe&&et.render(n);let u=D.toneMapping;D.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),E.setupLightsView(r),Oe===!0&&Qe.setGlobalState(D.clippingPlanes,r),Ot(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,kt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}D.setRenderTarget(s,c,l),D.setClearColor(_e,ve),d!==void 0&&(r.viewport=d),D.toneMapping=u}function Ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&kt(o,t,n,s,l,c)}}function kt(e,t,n,r,i,a){e.onBeforeRender(D,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(D,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=2):D.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(D,t,n,r,i,a)}function At(e,t,n){t.isScene!==!0&&(t=Ne);let r=A.get(e),i=E.state.lights,a=E.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?He:Ve).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,gt),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return Mt(e,s),u}else s.uniforms=Ke.getUniforms(e),e.onBeforeCompile(s,D),u=Ke.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Qe.uniform),Mt(e,s),r.needsLights=Ft(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function jt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=lc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=A.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Nt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=de===null?D.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ye,c=(r.isMeshStandardMaterial?He:Ve).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(m=D.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=A.get(r),v=E.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;Qe.setState(r,e,t)}let y=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==v.state.version?y=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?y=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Qe.numPlanes||_.numIntersection!==Qe.numIntersection)?y=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(y=!0):y=!0:y=!0:y=!0:(y=!0,_.__version=r.version);let b=_.currentProgram;y===!0&&(b=At(r,t,i));let x=!1,S=!1,C=!1,w=b.getUniforms(),T=_.uniforms;if(k.useProgram(b.program)&&(x=!0,S=!0,C=!0),r.id!==fe&&(fe=r.id,S=!0),x||pe!==e){k.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),w.setValue(O,`projectionMatrix`,e.projectionMatrix),w.setValue(O,`viewMatrix`,e.matrixWorldInverse);let t=w.map.cameraPosition;t!==void 0&&t.setValue(O,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&w.setValue(O,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&w.setValue(O,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,S=!0,C=!0)}if(_.needsLights&&(v.state.directionalShadowMap.length>0&&w.setValue(O,`directionalShadowMap`,v.state.directionalShadowMap,Be),v.state.spotShadowMap.length>0&&w.setValue(O,`spotShadowMap`,v.state.spotShadowMap,Be),v.state.pointShadowMap.length>0&&w.setValue(O,`pointShadowMap`,v.state.pointShadowMap,Be)),i.isSkinnedMesh){w.setOptional(O,i,`bindMatrix`),w.setOptional(O,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),w.setValue(O,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(w.setOptional(O,i,`batchingTexture`),w.setValue(O,`batchingTexture`,i._matricesTexture,Be),w.setOptional(O,i,`batchingIdTexture`),w.setValue(O,`batchingIdTexture`,i._indirectTexture,Be),w.setOptional(O,i,`batchingColorTexture`),i._colorsTexture!==null&&w.setValue(O,`batchingColorTexture`,i._colorsTexture,Be));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&nt.update(i,n,b),(S||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,w.setValue(O,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(T.envMap.value=c,T.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(T.envMapIntensity.value=t.environmentIntensity),T.dfgLUT!==void 0&&(T.dfgLUT.value=Al()),S&&(w.setValue(O,`toneMappingExposure`,D.toneMappingExposure),_.needsLights&&Pt(T,C),a&&r.fog===!0&&qe.refreshFogUniforms(T,a),qe.refreshMaterialUniforms(T,r,xe,be,E.state.transmissionRenderTarget[e.id]),lc.upload(O,jt(_),T,Be)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(lc.upload(O,jt(_),T,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&w.setValue(O,`center`,i.center),w.setValue(O,`modelViewMatrix`,i.modelViewMatrix),w.setValue(O,`normalMatrix`,i.normalMatrix),w.setValue(O,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];dt.update(n,b),dt.bind(n,b)}}return b}function Pt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(e,t,n){let r=A.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),A.get(e.texture).__webglTexture=t,A.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=A.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let It=O.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){de=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=A.get(e);if(o.__useDefaultFramebuffer!==void 0){k.bindFramebuffer(O.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,k.viewport(me),k.scissor(he),k.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,A.get(e.texture).__webglTexture,A.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&A.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=A.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?A.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=It),k.bindFramebuffer(O.FRAMEBUFFER,r)&&k.drawBuffers(e,r),k.viewport(me),k.scissor(he),k.setScissorTest(ge),i){let r=A.get(e.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=A.get(e.textures[t]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=A.get(e.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,t.__webglTexture,n)}fe=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){M(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=A.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){k.bindFramebuffer(O.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(!Re.textureFormatReadable(c)){M(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Re.textureTypeReadable(l)){M(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&(e.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+s),O.readPixels(t,n,r,i,ot.convert(c),ot.convert(l),a))}finally{let e=de===null?null:A.get(de).__webglFramebuffer;k.bindFramebuffer(O.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=A.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){k.bindFramebuffer(O.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(!Re.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Re.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,d),O.bufferData(O.PIXEL_PACK_BUFFER,a.byteLength,O.STREAM_READ),e.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+s),O.readPixels(t,n,r,i,ot.convert(l),ot.convert(u),0);let f=de===null?null:A.get(de).__webglFramebuffer;k.bindFramebuffer(O.FRAMEBUFFER,f);let p=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await lt(O,p,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,d),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,a),O.deleteBuffer(d),O.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),O.copyTexSubImage2D(O.TEXTURE_2D,n,0,0,o,s,i,a),k.unbindTexture()};let Lt=O.createFramebuffer(),Rt=O.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=null){a===null&&(i===0?a=0:(ct(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),a=i,i=0));let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ot.convert(t.format),_=ot.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=O.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=O.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,t.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,t.unpackAlignment);let y=O.getParameter(O.UNPACK_ROW_LENGTH),b=O.getParameter(O.UNPACK_IMAGE_HEIGHT),x=O.getParameter(O.UNPACK_SKIP_PIXELS),S=O.getParameter(O.UNPACK_SKIP_ROWS),C=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,h.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,h.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,l),O.pixelStorei(O.UNPACK_SKIP_ROWS,u),O.pixelStorei(O.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=A.get(e),r=A.get(t),h=A.get(n.__renderTarget),g=A.get(r.__renderTarget);k.bindFramebuffer(O.READ_FRAMEBUFFER,h.__webglFramebuffer),k.bindFramebuffer(O.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,A.get(e).__webglTexture,i,d+n),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,A.get(t).__webglTexture,a,m+n)),O.blitFramebuffer(l,u,o,s,f,p,o,s,O.DEPTH_BUFFER_BIT,O.NEAREST);k.bindFramebuffer(O.READ_FRAMEBUFFER,null),k.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||A.has(e)){let n=A.get(e),r=A.get(t);k.bindFramebuffer(O.READ_FRAMEBUFFER,Lt),k.bindFramebuffer(O.DRAW_FRAMEBUFFER,Rt);for(let e=0;e<c;e++)w?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,n.__webglTexture,i),T?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,r.__webglTexture,a),i===0?T?O.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):O.copyTexSubImage2D(v,a,f,p,l,u,o,s):O.blitFramebuffer(l,u,o,s,f,p,o,s,O.COLOR_BUFFER_BIT,O.NEAREST);k.bindFramebuffer(O.READ_FRAMEBUFFER,null),k.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?O.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?O.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):O.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):O.texSubImage2D(O.TEXTURE_2D,a,f,p,o,s,g,_,h);O.pixelStorei(O.UNPACK_ROW_LENGTH,y),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,b),O.pixelStorei(O.UNPACK_SKIP_PIXELS,x),O.pixelStorei(O.UNPACK_SKIP_ROWS,S),O.pixelStorei(O.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&O.generateMipmap(v),k.unbindTexture()},this.initRenderTarget=function(e){A.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),k.unbindTexture()},this.resetState=function(){le=0,ue=0,de=null,k.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return tt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Kt._getUnpackColorSpace()}};function Ml(e,t){let n=e/Math.max(1,t),r=120*n,i=10**Math.floor(Math.log10(Math.max(1e-15,r))),a=r/i;return{unitsPerPixel:n,raw:r,nice:(a>=5?5:a>=2?2:1)*i}}function Nl(e,t){let n=Ml(e,t).nice;return e>40||n>.5?`super`:n>.02?`cluster`:n>.001?`group`:`galaxy`}function Pl(e,t){let n=Ml(e,t).raw,r=Math.max(0,Math.min(1,Math.log(.2/Math.max(1e-15,n))/Math.LN10));return 1-r*r*(3-2*r)}function Fl(e,t){let n=Ml(e,t).raw,r=Math.max(0,Math.min(1,Math.log(5e-4/Math.max(1e-15,n))/Math.LN10));return 1-r*r*(3-2*r)}function Il(e,t){let n=Ml(e,t).raw,r=Math.max(0,Math.min(1,Math.log(5/Math.max(1e-15,n))/Math.log(5)));return r*r*(3-2*r)}function Ll(e,t){return 1-.82*Il(e,t)}function Rl(e,t){return(1-.92*Il(e,t))*Pl(e,t)}function zl(e,t){let n=Ml(e,t).raw;if(n>=.5)return 0;if(n<=.05)return 1;let r=Math.log(.5/n)/Math.log(10);return r*r*(3-2*r)}function Bl(e,t){if(e>40)return 0;let n=Ml(e,t).nice;return n>=.2?1:n>=.01?2:n>=2e-4?3:4}function Vl(e,t){return e<=40&&Ml(e,t).nice<=1}function Hl(e,t){return t>0?Math.max(.05,Math.min(1,e/t)):.04}function Ul(e,t=43){return 240*Math.tan(t*Math.PI/360)/Math.max(1,e)}function Wl(e,t,n=43){return Kl(Math.max(0,e)*Ul(t,n))}function Gl(e,t,n=43){return Kl(Math.max(0,e)*Ul(t,n)/4)}function Kl(e){if(e>=.5)return 0;if(e<=.05)return 1;let t=Math.log(.5/e)/Math.LN10;return t*t*(3-2*t)}function ql(e,t,n){let r=n.map((e,n)=>e-t[n]),i=r.reduce((e,t)=>e+t*t,0),a=i?Math.max(0,Math.min(1,e.reduce((e,n,i)=>e+(n-t[i])*r[i],0)/i)):0;return Math.hypot(...e.map((e,n)=>e-t[n]-a*r[n]))}var Jl=2.6;function Yl(e){Jl=e?28:2.6}function Xl(e,t,n,r=43){let i=Ul(n,r);return e.map(e=>({id:e.id,distance:Math.hypot(...e.position.map((e,n)=>e-t[n]))})).filter(e=>e.distance*i<Jl).sort((e,t)=>e.distance-t.distance||e.id-t.id).map(e=>e.id)}var Zl=`float objectReveal(float distance,float scaleFactor){float scale=distance*scaleFactor;float t=clamp(log(.5/max(scale,1e-12))/2.302585092994046,0.,1.);return t*t*(3.-2.*t);}`,Ql=.04;function $l(e,t,n,r=43){if(e<=0)return 0;if(t<=e)return 4;let i=e/(Math.sqrt(t*t-e*e)*Math.tan(r*Math.PI/360));return Math.min(4,Math.PI*i*i/(4*Math.max(.1,n)))}function eu(e){let t=Math.max(0,Math.min(1,(e-.3)/.45));return t*t*(3-2*t)}function tu(e,t,n,r,i=20,a=5,o=a){let s=t*n,c=e*r/Math.max(1e-15,t),l=Math.max(0,Math.min(1,Math.log(Math.max(1e-4,c)/.65)/Math.log(60/.65))),u=Math.max(0,Math.min(1,(i-s)/(i-o))),d=Math.max(0,Math.min(1,Math.log(i/Math.max(1e-15,s))/Math.log(i/a)));return Math.max(l*l*(3-2*l)*u*u*(3-2*u),d*d*(3-2*d))}function nu(e){let t=Math.max(0,Math.min(1,(e-.12)/.33));return t*t*(3-2*t)}function ru(e){if(!e.length)return{center:[0,0,0],radius:0};let t=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let r of e)for(let e=0;e<3;e++)t[e]=Math.min(t[e],r[e]),n[e]=Math.max(n[e],r[e]);let r=t.map((e,t)=>(e+n[t])/2);return{center:r,radius:Math.max(1e-9,...e.map(e=>Math.hypot(...e.map((e,t)=>e-r[t]))))}}var iu=128,R=new class{revision126=0;overviewGain=1;setOverviewGain(e){Math.abs(e-this.overviewGain)>1e-4&&(this.overviewGain=e,this.forceUpdate=!0)}jointMode=!1;setJointMode(e){this.jointMode=e,this.forceUpdate=!0}unresolvedMode=!1;unresolvedUniform={value:0};setUnresolvedMode(e){this.unresolvedMode=e,this.unresolvedUniform.value=Number(e),this.forceUpdate=!0}distanceMode=!1;scope=null;lastPosition=new P(1/0,1/0,1/0);nearestDistance=0;changed=new Set;forceUpdate=!0;order=[];parents=new Map;orderDirty=!0;dataDirty=!0;pose=``;setDistanceMode(e){this.distanceMode=e,this.dataDirty=!0,this.forceUpdate=!0}setScope(e){this.scope=e}strict=!1;strictUniform={value:0};setStrict(e){this.strict=e,this.strictUniform.value=Number(e),this.dataDirty=!0,this.forceUpdate=!0}body(e){return this.entries.get(e)?.body??0}contentAt(e){return this.pixels[e*4]??0}routeAt(e){return this.pixels[e*4+3]??0}route(e){return this.entries.get(e)?.route??0}textureSize=iu;nextSlot=1;freeSlots=[];children=new Map;entries=new Map;declaredParents=new Map;pixels=new Float32Array(65536);dirty=!0;texture=new Li(this.pixels,iu,iu,E,y);uniform={value:this.texture};sizeUniform={value:iu};ensureSlot(e){if(e<this.textureSize*this.textureSize)return;let t=this.textureSize;for(;e>=t*t;)t*=2;if(t>2048)throw Error(`屏幕结构预算耗尽`);let n=new Float32Array(t*t*4);n.set(this.pixels);let r=this.texture;this.pixels=n,this.textureSize=t,this.texture=new Li(n,t,t,E,y),this.uniform.value=this.texture,this.sizeUniform.value=t,this.texture.needsUpdate=!0,r.dispose(),this.dirty=!0}usage(){return{entries:this.entries.size,capacity:this.textureSize*this.textureSize}}constructor(){this.texture.needsUpdate=!0}clear(){this.revision126++,this.lastPosition.set(1/0,1/0,1/0),this.nearestDistance=0,this.changed.clear(),this.forceUpdate=!0,this.orderDirty=!0,this.dataDirty=!0,this.order=[],this.parents.clear(),this.children.clear(),this.entries.clear(),this.declaredParents.clear(),this.pixels.fill(0),this.nextSlot=1,this.freeSlots=[],this.dirty=!0}removeRoot(e){this.removeRoots([e])}removeRoots(e){let t=new Set(e);if(!t.size)return;this.revision126++,this.orderDirty=!0,this.dataDirty=!0;let n=e=>{if(!e.startsWith(`r:`)&&!e.startsWith(`g:`))return!1;let n=e.indexOf(`:`,2);return t.has(Number(e.slice(2,n<0?void 0:n)))};for(let[e,t]of this.entries)n(e)&&(this.entries.delete(e),t.parent&&this.children.get(t.parent)?.delete(e),this.children.delete(e),this.declaredParents.delete(e),this.pixels.fill(0,t.slot*4,t.slot*4+4),this.freeSlots.push(t.slot),this.dirty=!0);for(let e of this.declaredParents.keys())n(e)&&this.declaredParents.delete(e)}declareParent(e,t){this.declaredParents.get(e)!==t&&(this.declaredParents.set(e,t),this.entries.has(e)&&(this.orderDirty=!0))}set(e,t,n,r){let i=this.entries.get(e);if(i&&i.radius===n&&i.center.every((e,n)=>e===t[n])&&(!r||i.parent===r))return i.slot;if(this.dataDirty=!0,i&&r&&i.parent!==r&&(this.orderDirty=!0),i)r&&i.parent!==r&&i.parent&&this.children.get(i.parent)?.delete(e),Object.assign(i,{center:t,radius:n,...r?{parent:r}:{}});else{let a=this.freeSlots.pop()??this.nextSlot++;if(this.ensureSlot(a),i={key:e,slot:a,center:t,radius:n,parent:r,area:0,reveal:0,content:0},this.entries.set(e,i),!this.orderDirty){let t=this.physicalParent(e),n=t?this.entries.get(t):void 0;t&&!n||this.children.get(e)?.size?this.orderDirty=!0:(this.parents.set(i,n),this.order.push(i))}}return i.parent&&(this.children.has(i.parent)||this.children.set(i.parent,new Set),this.children.get(i.parent).add(e)),this.changed.add(i),this.dirty=!0,i.slot}slot(e){return this.entries.get(e)?.slot??0}get(e){return this.entries.get(e)}setContainer(e,t){let n=this.entries.get(e);n&&n.container!==t&&(n.container=t,this.orderDirty=!0,this.dataDirty=!0)}isContainer(e){return!!this.entries.get(e)?.container}physicalParent(e){let t=this.entries.get(e)?.parent??this.declaredParents.get(e),n=new Set;for(;t&&this.entries.get(t)?.container;){if(n.has(t))throw Error(`层级环`);n.add(t),t=this.entries.get(t)?.parent??this.declaredParents.get(t)}return t}content(e){return this.entries.get(e)?.content??0}carrier(e){return this.entries.get(e)?.carrier??0}canEnter(e){if(this.distanceMode&&e===ou(this.scope??-1))return!0;let t=this.entries.get(e);if(!t||t.area<.45)return!1;let n=this.physicalParent(e);return this.distanceMode||!this.strict||!n||this.canEnter(n)}update(e,t,n){let r=[t,n,e.fov].join(`:`),i=e.position.distanceTo(this.lastPosition)>Math.max(1e-13,this.nearestDistance*5e-5);if(!this.dataDirty&&!this.orderDirty&&!this.forceUpdate&&r===this.pose&&!i)return;this.revision126++;let a=this.forceUpdate||this.orderDirty||r!==this.pose||i||!this.distanceMode;if(this.pose=r,this.dataDirty=!1,this.forceUpdate=!1,a&&(this.lastPosition.copy(e.position),this.nearestDistance=1/0),this.orderDirty){this.order=[],this.parents.clear();let e=new Set,t=new Set,n=r=>{if(e.has(r))return;if(t.has(r))throw Error(`层级环`);t.add(r);let i=this.entries.get(this.physicalParent(r.key)??``);this.parents.set(r,i),i&&n(i),t.delete(r),e.add(r),this.order.push(r)};for(let e of this.entries.values())n(e);this.orderDirty=!1}let o=new Set(this.changed);if(!a){let e=[...o];for(let t=0;t<e.length;t++)for(let n of this.children.get(e[t].key)??[]){let t=this.entries.get(n);t&&!o.has(t)&&(o.add(t),e.push(t))}}let s=a?this.order:this.order.filter(e=>o.has(e)),c=Math.max(.1,t/n),l=Math.tan(e.fov*Math.PI/360),u=Ul(n,e.fov),d=n/(2*l);for(let t of s){let r=Math.hypot(e.position.x-t.center[0],e.position.y-t.center[1],e.position.z-t.center[2]),i=this.parents.get(t);if(this.nearestDistance=Math.min(this.nearestDistance,r),t.area=t.radius<=0?0:r<=t.radius?4:Math.min(4,Math.PI*(t.radius/(Math.sqrt(r*r-t.radius*t.radius)*l))**2/(4*c)),t.reveal=eu(t.area),!(this.distanceMode&&this.unresolvedMode&&this.jointMode)){if(this.distanceMode){let e=t.key.startsWith(`g:`),a=t.key.startsWith(`r:`),o=r*u;if(t.content=a?Kl(o/4):e?(i?.content??1)*Kl(o/Ql):t.reveal,t.body=a?1:i?.content??1,t.route=a?Kl(o):t.content,this.unresolvedMode&&(a||e)){let e=t.radius*n/(2*Math.max(1e-15,r)*l),s=Math.max(0,Math.min(1,Math.log(Math.max(1e-4,e)/.65)/Math.log(60/.65)));if(t.content=(a?1:i?.content??1)*s*s*(3-2*s),this.jointMode&&a){let e=Math.max(0,Math.min(1,(5-o)/2.5));t.content=Math.max(t.content*e*e*(3-2*e),Kl(o/10))}t.body=a?1:i?.content??1}}else{let e=Math.max(0,Math.min(1,(8-r)/6));t.content=this.strict?(i?.content??1)*t.reveal:Math.max(t.reveal,(i?.content??0)*.55*e*e*(3-2*e)),t.body=this.strict?i?.content??1:t.content,t.route=t.content}}if(this.distanceMode&&this.unresolvedMode&&this.jointMode){let e=t.key.startsWith(`r:`),a=t.key.startsWith(`g:`);if(!e&&!a&&(t.content=t.reveal,t.body=i?.content??1,t.route=t.reveal),e&&(t.body=1,t.content=tu(t.radius,r,u,d)),a){let e=t.radius*n/(2*Math.max(1e-15,r)*l),a=Math.max(0,Math.min(1,Math.log(Math.max(1e-4,e)/.65)/Math.log(60/.65)));t.body=tu(i?.radius??t.radius,r,u,d),t.content=t.body*a*a*(3-2*a)}if(e||a){let e=Math.max(Kl(r*u/(a?Hl(t.radius,i?.radius??0):1)),nu(t.area));t.route=a&&e>0?tu(i?.radius??t.radius,r,u,d,5,.5,2.5)*e:e}}this.jointMode&&(t.content*=this.overviewGain,t.key.startsWith(`g:`)&&(t.body*=this.overviewGain)),t.carrier=t.content;let a=t.slot*4;Math.abs(this.pixels[a]-t.content)>.001&&(this.pixels[a]=t.content,this.dirty=!0),Math.abs(this.pixels[a+1]-t.reveal)>.001&&(this.pixels[a+1]=t.reveal,this.dirty=!0),Math.abs(this.pixels[a+2]-t.body)>.001&&(this.pixels[a+2]=t.body,this.dirty=!0),Math.abs(this.pixels[a+3]-t.route)>.001&&(this.pixels[a+3]=t.route,this.dirty=!0)}if(a)for(let e=this.order.length-1;e>=0;e--){let t=this.order[e],n=this.parents.get(t);n&&(n.carrier=Math.max(n.carrier??0,t.carrier??0))}else{let e=new Set;for(let t of s){let n=this.parents.get(t);for(;n;)e.add(n),n=this.parents.get(n)}for(let t=this.order.length-1;t>=0;t--){let n=this.order[t];if(e.has(n)){n.carrier=n.content;for(let e of this.children.get(n.key)??[])n.carrier=Math.max(n.carrier,this.entries.get(e)?.carrier??0)}}}this.changed.clear(),this.dirty&&=(this.texture.needsUpdate=!0,!1)}snapshot(){return[...this.entries.values()].map(e=>({...e}))}},z=e=>`r:${e}`,au=(e,t)=>`g:${e}:${t}`,ou=e=>`s:${e}`,su=`uniform float hierarchyStrict;uniform sampler2D hierarchyLod;uniform float hierarchySize;float screenContent(float slot){return texture2D(hierarchyLod,(vec2(mod(slot,hierarchySize),floor(slot/hierarchySize))+.5)/hierarchySize).r;}float screenBody(float slot){return texture2D(hierarchyLod,(vec2(mod(slot,hierarchySize),floor(slot/hierarchySize))+.5)/hierarchySize).b;}float screenRoute(float slot){return texture2D(hierarchyLod,(vec2(mod(slot,hierarchySize),floor(slot/hierarchySize))+.5)/hierarchySize).a;}`;function cu(e,t,n,r){let i=n.filter(e=>e.coreMember!==!1),a=ru((i.length?i:n).map(e=>e.position));R.set(z(e),a.center.map((e,n)=>e+t[n]),Math.max(a.radius,...n.map(e=>e.radius)),r===void 0?void 0:ou(r));let o=new Map;for(let e of n)o.has(e.group)||o.set(e.group,[]),o.get(e.group).push(e);for(let[n,r]of o){let i=r.filter(e=>e.coreMember!==!1),a=ru((i.length?i:r).map(e=>e.position));R.set(au(e,n),a.center.map((e,n)=>e+t[n]),Math.max(a.radius,...r.map(e=>e.radius)),z(e))}}function lu(e,t,n,r,i){let a=()=>({lo:[1/0,1/0,1/0],hi:[-1/0,-1/0,-1/0],coreLo:[1/0,1/0,1/0],coreHi:[-1/0,-1/0,-1/0],hasCore:!1,radius:0,distance:0}),o=a(),s=new Map;for(let e=0;e<n.length;e+=8){let t=n[e+5],i=s.get(t);i||(i=a(),s.set(t,i));let c=!r||!!r[e/8];for(let t of[o,i]){t.hasCore||=c,t.radius=Math.max(t.radius,n[e+3]);for(let r=0;r<3;r++)t.lo[r]=Math.min(t.lo[r],n[e+r]),t.hi[r]=Math.max(t.hi[r],n[e+r]),c&&(t.coreLo[r]=Math.min(t.coreLo[r],n[e+r]),t.coreHi[r]=Math.max(t.coreHi[r],n[e+r]))}}for(let e of[o,...s.values()])e.center=(e.hasCore?e.coreLo:e.lo).map((t,n)=>(t+(e.hasCore?e.coreHi:e.hi)[n])/2);for(let e=0;e<n.length;e+=8)for(let t of[o,s.get(n[e+5])])t.hasCore&&r&&!r[e/8]||(t.distance=Math.max(t.distance,Math.hypot(n[e]-t.center[0],n[e+1]-t.center[1],n[e+2]-t.center[2])));if(!n.length)return;let c=(e,n,r)=>R.set(e,n.center.map((e,n)=>e+t[n]),Math.max(1e-9,n.distance,n.radius),r);c(z(e),o,i===void 0?void 0:ou(i));for(let[t,n]of s)c(au(e,t),n,z(e))}function uu(e,t,n){e.setAttribute(`overviewSlots126`,new Ri(Float32Array.from(n,e=>e<0?-1:R.slot(z(e))),2));let r=t.onBeforeCompile,i=t.customProgramCacheKey();t.onBeforeCompile=(e,n)=>{r.call(t,e,n),Object.assign(e.uniforms,{hierarchyLod:R.uniform,hierarchySize:R.sizeUniform,hierarchyStrict:R.strictUniform}),e.vertexShader=su+`attribute vec2 overviewSlots126;varying float overviewGain126;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`void main() {`,`void main() {
float slot126=position.y<.5?overviewSlots126.x:overviewSlots126.y;overviewGain126=slot126<0.?1.:1.-screenContent(slot126);`),e.fragmentShader=`varying float overviewGain126;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(/}\s*$/,`gl_FragColor.a*=overviewGain126;}`)},t.customProgramCacheKey=()=>i+`-stable-overview126`}var du=class{points;nodes=[];root;pendingNodes;pendingPlanes;packedTopology(){let e=new Int32Array(this.nodes.length*4);return this.nodes.forEach((t,n)=>e.set([t.id,t.axis,t.left,t.right],n*4)),{root:this.root,nodes:e}}materialEdges(e){let t=this.packedTopology();this.points,t.nodes,t.root}nearestBatch(e,t=1,n=!1,r=1/0){let i=this.packedTopology();this.points,i.nodes,i.root;let a=e.length/3,o=new Int32Array(a*t),s=new Float64Array(a*t),c=new Uint32Array(a);for(let i=0;i<a;i++){let a=this.nearest(e.subarray(i*3,i*3+3),t,n?i:-1,r);c[i]=a.length;for(let e=0;e<a.length;e++)o[i*t+e]=a[e].id,s[i*t+e]=a[e].d}return{ids:o,distances:s,sizes:c,stride:t}}constructor(e){this.points=e;let t=Array.from({length:e.length/3},(e,t)=>t),n=Math.ceil(Math.log2(t.length+1))+1;this.pendingNodes=new Int32Array(n),this.pendingPlanes=new Float64Array(n);let r=(n,r,i,a)=>{let o=(t,n)=>e[t*3+a]-e[n*3+a]||t-n;for(;n<r;){let e=t[n+r>>1],a=n,s=r;for(;a<=s;){for(;o(t[a],e)<0;)a++;for(;o(t[s],e)>0;)s--;if(a<=s){let e=t[a];t[a++]=t[s],t[s--]=e}}if(i<=s)r=s;else if(i>=a)n=a;else return}},i=(e,n,a)=>{if(e>=n)return-1;let o=a%3,s=e+(n-e>>1);r(e,n-1,s,o);let c=this.nodes.length;return this.nodes.push({id:t[s],axis:o,left:-1,right:-1}),this.nodes[c].left=i(e,s,a+1),this.nodes[c].right=i(s+1,n,a+1),c};this.root=i(0,t.length,0)}nearest(e,t=1,n=-1,r=1/0){if(t<=0)return[];let i=r*r,a=this.nodes,o=this.points,s=this.pendingNodes,c=this.pendingPlanes,l=this.root,u=0;if(t===1){let t=-1,r=i;for(;l>=0;){let i=a[l],d=i.id*3,f=o[d]-e[0],p=o[d+1]-e[1],m=o[d+2]-e[2],h=f*f+p*p+m*m;i.id!==n&&(h<r||h===r&&(t<0||i.id<t))&&(t=i.id,r=h);let g=e[i.axis]-o[d+i.axis],_=g<0?i.right:i.left,v=g*g;for(_>=0&&v<=r&&(s[u]=_,c[u++]=v),l=g<0?i.left:i.right;l<0&&u;)--u,c[u]<=r&&(l=s[u])}return t<0?[]:[{id:t,d:r}]}let d=[],f=i;for(;l>=0;){let r=a[l],p=r.id*3,m=o[p]-e[0],h=o[p+1]-e[1],g=o[p+2]-e[2],_=m*m+h*h+g*g,v=d[d.length-1];if(r.id!==n&&_<=i&&(d.length<t||_<v.d||_===v.d&&r.id<v.id)){let e=Math.min(d.length,t-1);for(;e>0&&(d[e-1].d>_||d[e-1].d===_&&d[e-1].id>r.id);)d[e]=d[e-1],e--;d[e]={id:r.id,d:_},f=Math.min(i,d.length<t?1/0:d[d.length-1].d)}let y=e[r.axis]-o[p+r.axis],b=y<0?r.right:r.left,x=y*y;for(b>=0&&x<=f&&(s[u]=b,c[u++]=x),l=y<0?r.left:r.right;l<0&&u;)--u,c[u]<=f&&(l=s[u])}return d}},fu=class{ids;positions;owners;buildMs;tree;rows=new Map;roots=new Map;owner=null;last=[1/0,1/0,1/0];constructor(e,t,n){this.ids=e,this.positions=t,this.owners=n;let r=performance.now();this.tree=new du(t);for(let t=0;t<e.length;t++){let r=n[t];this.rows.has(r)||(this.rows.set(r,[]),this.roots.set(r,new Set)),this.rows.get(r).push(t),this.roots.get(r).add(e[t])}this.buildMs=performance.now()-r}scope(e){if(this.last.every((t,n)=>t===e[n]))return this.owner;this.last=[...e];let t=this.tree.nearest(e)[0];if(!t)return null;let n=this.owners[t.id];if(this.owner===null||n===this.owner)return this.owner=n,this.owner;let r=1/0;for(let t of this.rows.get(this.owner)??[]){let n=t*3,i=(e[0]-this.positions[n])**2+(e[1]-this.positions[n+1])**2+(e[2]-this.positions[n+2])**2;r=Math.min(r,i)}return t.d<r*.64&&(this.owner=n),this.owner}members(e){return e===null?void 0:this.roots.get(e)}},pu=(e,t=0)=>t?`G-${e}/member-${t}`:`G-${e}`,mu=new Map,hu=new Map,gu=new WeakMap;function _u(e,t){let n=e.geometry.getAttribute(e.side?`instanceEnd`:`instanceStart`),r=[n.getX(e.index),n.getY(e.index),n.getZ(e.index)],i=t.map((t,n)=>Math.fround(t-e.anchor.getComponent(n)));i.some((e,t)=>e!==r[t])&&(n.setXYZ(e.index,...i),e.onMove?.(r,i,e.index,e.side,t)),n.data.addUpdateRange(e.index*6+e.side*3,3),n.data.needsUpdate=!0;let a=new P(...i);e.geometry.boundingSphere&&(e.geometry.boundingSphere.radius=Math.max(e.geometry.boundingSphere.radius,e.geometry.boundingSphere.center.distanceTo(a))),e.geometry.boundingBox?.expandByPoint(a)}function vu(e,t){return+!![e[t*2],e[t*2+1]].every(e=>e<0||mu.has(e))}function yu(e,t,n=new P,r){gu.get(e)?.(),e.setAttribute(`anchorReady126`,new Ri(Float32Array.from({length:t.length/2},(e,n)=>vu(t,n)),1));let i=[];for(let a=0;a<t.length;a++){let o=t[a];if(o<0)continue;let s={geometry:e,side:a%2,index:a>>1,anchor:n.clone(),roots:t,onMove:r},c=hu.get(o);c||(c=new Set,hu.set(o,c)),c.add(s),i.push([o,s]);let l=mu.get(o);l&&_u(s,l)}let a=()=>{for(let[e,t]of i){let n=hu.get(e);n?.delete(t),n?.size||hu.delete(e)}e.removeEventListener(`dispose`,a),gu.delete(e)};gu.set(e,a),e.addEventListener(`dispose`,a)}function bu(e){let t=e.onBeforeCompile,n=e.customProgramCacheKey();e.onBeforeCompile=(n,r)=>{t.call(e,n,r),n.vertexShader=`attribute float anchorReady126;varying float routeReady126;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace(`void main() {`,`void main() {
routeReady126=anchorReady126;`),n.fragmentShader=`varying float routeReady126;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace(`void main() {`,`void main() {
if(routeReady126<.5)discard;`)},e.customProgramCacheKey=()=>n+`-resolved-route126`}function xu(e,t){let n=mu.get(e);if(!(n&&n.every((e,n)=>e===t[n]))){mu.set(e,[...t]);for(let n of hu.get(e)??[]){_u(n,t);let e=n.geometry.getAttribute(`anchorReady126`);e.setX(n.index,vu(n.roots,n.index)),e.addUpdateRange(n.index,1),e.needsUpdate=!0}}}function Su(){mu.clear();for(let e of hu.values())for(let t of e){let e=t.geometry.getAttribute(`anchorReady126`);e.setX(t.index,0),e.needsUpdate=!0}}function Cu(e){return{galaxy:pu(e),resolved:mu.get(e),ready:[...hu.get(e)??[]].map(e=>e.geometry.getAttribute(`anchorReady126`).getX(e.index)),positions:[...hu.get(e)??[]].map(e=>{let t=e.geometry.getAttribute(e.side?`instanceEnd`:`instanceStart`);return[t.getX(e.index)+e.anchor.x,t.getY(e.index)+e.anchor.y,t.getZ(e.index)+e.anchor.z]})}}function wu(e){return mu.get(e)}function Tu(e){return e.updateMatrix(),e.matrixAutoUpdate=!1,e}var Eu=class{renderer;scene=Tu(new Ni);target=new on(1,1,{type:b,depthBuffer:!1,stencilBuffer:!1,minFilter:s,magFilter:s});composite=Tu(new Ni);camera=Tu(new bi);size=new Lt;clear=new Or;supported;constructor(e,t){this.renderer=e,this.supported=e.extensions.has(`EXT_color_buffer_float`),t.layers.set(1),this.scene.add(t);let n=new Xr;n.setAttribute(`position`,new I([-1,-1,0,3,-1,0,-1,3,0],3));let r=Tu(new ci(n,new yi({uniforms:{light:{value:this.target.texture}},depthTest:!1,depthWrite:!1,transparent:!0,blending:5,blendSrc:201,blendDst:201,blendEquation:100,vertexShader:`varying vec2 uv111;void main(){uv111=position.xy*.5+.5;gl_Position=vec4(position,1.);}`,fragmentShader:`uniform sampler2D light;varying vec2 uv111;void main(){vec3 c=texture2D(light,uv111).rgb;float l=max(c.r,max(c.g,c.b));float mapped=l<=.7?l:.7+.3*(l-.7)/(3.+l-.7);gl_FragColor=vec4(c*(mapped/max(.000001,l)),0.);}`})));r.frustumCulled=!1,this.composite.add(r)}prepare(e,t,n){let r=this.renderer,i=r.getRenderTarget();try{this.supported&&e.layers.mask&2&&r.setRenderTarget(this.target);let i=r.compileAsync(e,t,n);if(!this.supported||!e.children.length)return i;let a=[i];return r.setRenderTarget(this.target),e.traverse(e=>{e instanceof fa&&e.layers.mask&2&&a.push(r.compileAsync(e,t,n))}),Promise.all(a)}finally{r.setRenderTarget(i)}}render(e,t){let n=this.renderer,r=n.getRenderTarget(),i=n.autoClear,a=n.getClearAlpha(),o=e.layers.mask,s=t?.background,c=t?.matrixWorldAutoUpdate;n.getClearColor(this.clear),n.autoClear=!1,e.layers.set(1),t&&(t.background=null,t.matrixWorldAutoUpdate=!1);try{if(!this.supported){t&&n.render(t,e),n.render(this.scene,e);return}n.getDrawingBufferSize(this.size),(this.target.width!==this.size.x||this.target.height!==this.size.y)&&this.target.setSize(this.size.x,this.size.y),n.setRenderTarget(this.target),n.setClearColor(0,0),n.clear(!0,!1,!1),t&&n.render(t,e),n.render(this.scene,e),n.setRenderTarget(r),n.render(this.composite,this.camera)}finally{e.layers.mask=o,t&&(t.background=s??null,t.matrixWorldAutoUpdate=c??!0),n.setRenderTarget(r),n.setClearColor(this.clear,a),n.autoClear=i}}};function Du(e,t){let n=new za,r=e.getAttribute(`position`).count;for(let[t,r]of Object.entries(e.attributes)){if([`mass`,`age`,`previewRadius`].includes(t))continue;let e=r;n.setAttribute(t,new Ri(e.array,e.itemSize,e.normalized).setUsage(e.usage))}return n.setAttribute(`catalogueStyle110`,new Ri(Float32Array.from({length:r*3},(t,n)=>e.getAttribute([`mass`,`age`,`previewRadius`][n%3])?.getX(Math.floor(n/3))??0),3)),n.setAttribute(`sample110`,new I(Array.from({length:16},(e,t)=>t),1)),n.setAttribute(`proxyRadius110`,new Ri(Float32Array.from({length:r},(e,n)=>t?.[n]??.001),1)),n.setAttribute(`nearCover110`,new Ri(new Float32Array(r),1).setUsage(et)),n.instanceCount=r,n.setDrawRange(0,16),n.boundingSphere=e.boundingSphere,e.dispose(),n}var Ou=`attribute vec3 catalogueStyle110;attribute float sample110,proxyRadius110,nearCover110;
#define mass catalogueStyle110.x
#define age catalogueStyle110.y
#define previewRadius catalogueStyle110.z

float proxyHash110(float n){return fract(sin(n*.01731+catalogID*.0137)*43758.5453);}
vec3 proxyOffset110(){if(sample110<.5)return vec3(0.);float angle=proxyHash110(sample110*3.)*6.2831853;float height=proxyHash110(sample110*3.+1.)*2.-1.;float radius=pow(proxyHash110(sample110*3.+2.),.65);vec3 axis=normalize(vec3(proxyHash110(80.)-.5,proxyHash110(81.)-.5,proxyHash110(82.)-.5)+vec3(.0001));vec3 side=normalize(cross(axis,abs(axis.y)<.9?vec3(0.,1.,0.):vec3(1.,0.,0.)));vec3 up=cross(axis,side);return proxyRadius110*radius*(axis*height+sqrt(max(0.,1.-height*height))*(side*cos(angle)*.55+up*sin(angle)*.35));}
`;function ku(e,t){let n=Math.max(0,Math.min(1,e)),r=Math.max(0,Math.min(1,t));return{proxy:(1-n)*(1-r),actual:(1-n)*r,near:n}}var Au=`varying vec2 sprite126;
void preparePointSprite126(float logicalSize){sprite126=vec2(ceil(logicalSize)+2.,logicalSize);gl_PointSize=sprite126.x;}`,ju=`varying vec2 sprite126;
float pointErf126(float x){float a=abs(x),t=1./(1.+.3275911*a);return sign(x)*(1.-(((((1.061405429*t-1.453152027)*t+1.421413741)*t-.284496736)*t+.254829592)*t)*exp(-a*a));}
float pointSpriteLight126(){vec2 p=(gl_PointCoord-.5)*sprite126.x;float scale=3.4641016151377544/max(.000001,sprite126.y);vec2 lo=(p-.5)*scale,hi=(p+.5)*scale;float x=pointErf126(hi.x)-pointErf126(lo.x),y=pointErf126(hi.y)-pointErf126(lo.y);return max(0.,x*y)*(.06219129094503206*sprite126.y*sprite126.y);}`;function Mu(e,t){let n=Math.max(0,Math.min(1,(t-.8)/1.6)),r=n*n*(3-2*n),i=1/Math.max(1,e),a=Math.max(0,t)/2.4;return Math.max(i+(1-i)*r,Math.min(1,a*a))}var Nu=`float memberLight112(float weight,float pixels){float area=max(0.,pixels)/2.4;return max(mix(weight,1.,smoothstep(.8,2.4,pixels)),min(1.,area*area));}`;function Pu(e,t){let n=new Float32Array(t.length),r=new Map;for(let e=0;e<t.length;e++){let n=r.get(t[e]);n||(n=[],r.set(t[e],n)),n.push(e)}for(let t of r.values()){if(t.length===1){n[t[0]]=1e6;continue}let r=Float64Array.from(t.flatMap(t=>[e[t*3],e[t*3+1],e[t*3+2]])),i=new du(r);for(let e=0;e<t.length;e++){let a=i.nearest(r.subarray(e*3,e*3+3),Math.min(4,t.length-1),e);n[t[e]]=Math.sqrt(a.reduce((e,t)=>e+t.d,0)/a.length)}}return n}function Fu(e){let t=e.length/8,n=new Float64Array(t*3),r=new Float64Array(t);for(let i=0;i<t;i++)n.set(e.subarray(i*8,i*8+3),i*3),r[i]=e[i*8+5];return Pu(n,r)}var Iu=new WeakMap;function Lu(e,t){let n=Iu.get(e);if(n)return n;lu(e.root,e.center,e.points,e.core,t);let r=e.spacing114??Fu(e.points),i=Float32Array.from(r,(t,n)=>{let r=e.points[n*8+5],i=e.groups?.[r*5+4]??1;return Math.min(t,2*(R.get(au(e.root,r))?.radius??0)/Math.sqrt(Math.max(1,i)))});return Iu.set(e,i),i}function Ru(e){let t=new Map;for(let n of e){if(n.root===void 0||![`cluster`,`group`,`galaxy`].includes(n.kind))continue;let e=t.get(n.root);if(e||(e={root:n.root,all:!1,groups:[],members:[]},t.set(n.root,e)),n.kind===`cluster`)e.all=!0;else if(n.kind===`group`){let t=n.galaxy?.group??Number(n.id.match(/group-(\d+)$/)?.[1]);Number.isFinite(t)&&e.groups.push(t)}else{let t=Number(n.id.match(/member-(\d+)$/)?.[1]??0);e.members.push(t)}}return[...t.values()].sort((e,t)=>e.root-t.root).map(e=>({...e,groups:[...new Set(e.groups)].sort((e,t)=>e-t),members:[...new Set(e.members)].sort((e,t)=>e-t)}))}function zu(e,t,n,r){let i=e.find(e=>e.root===t);return!!i&&(i.all||i.groups.includes(n)||i.members.includes(r))}var Bu=1.65,Vu=.4,Hu=.04,Uu=.72;function Wu(e,t){return e?t?Bu:Vu:1}function Gu(e,t,n){return e?t&&n?Bu:t||n?Uu:Hu:1}function Ku(e,t){return Ru(e.map(e=>e.kind===`space`&&e.root!==void 0&&t(e.root)?{...e,kind:`cluster`}:e))}var qu=46.5,Ju=13.8,Yu=[{name:`原点`,position:[0,0,0],note:`初始观测地点`},{name:`北岸`,position:[24,15,-8],note:`同一宇宙 · 沿丝状结构的另一侧`},{name:`远汐`,position:[-25,-9,18],note:`同一宇宙 · 空洞边缘`}];function Xu(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}function Zu(e){let t=2166136261;for(let n of e)t=Math.imul(t^n.charCodeAt(0),16777619);return t>>>0}var Qu=.12;function $u(e,t=Ju){return Math.max(0,(t/Math.max(1e-9,e))**(1-Ju/qu)-1)}function ed(e){let t=(t,n,r)=>Math.exp(-.5*((e-t)*(e<t?n:r))**2);return[1.056*t(599.8,.0264,.0323)+.362*t(442,.0624,.0374)-.065*t(501.1,.049,.0382),.821*t(568.8,.0213,.0247)+.286*t(530.9,.0613,.0322),1.217*t(437,.0845,.0278)+.681*t(459,.0385,.0725)]}function td(e,t){return t<=0?0:1/(e**5*Math.expm1(14387768.77/(e*t)))}var nd=new Map;function rd(e){let t=Math.max(50,Math.round(e/25)*25),n=nd.get(t);if(n)return n;let r=[0,0,0];for(let e=380;e<=780;e+=5){let n=td(e,t),i=ed(e);for(let e=0;e<3;e++)r[e]+=n*i[e]}let[i,a,o]=r,s=[Math.max(0,3.2406*i-1.5372*a-.4986*o),Math.max(0,-.9689*i+1.8758*a+.0415*o),Math.max(0,.0557*i-.204*a+1.057*o)];return nd.set(t,s),s}function id(e,t=0){if(e<=0)return[0,0,0];let n=rd(e),r=rd(e/(1+t)),i=Math.max(...n,1e-40);return r.map(e=>e/i)}var ad=`vec3 redshiftBands(vec3 color,float emitted,float received,float enabled){float shift=pow(received/max(.0000001,emitted),1.-13.8/46.5);vec3 wl=vec3(650.,530.,460.);vec3 transfer=(exp(14387768.77/(wl*5800.))-1.)/max(vec3(1.),exp(min(vec3(80.),14387768.77*shift/(wl*5800.)))-1.);return color*mix(vec3(1.),transfer,enabled);}`;function od(e,t,n,r){let i=1-r;return(t**i+e*(n**i-t**i))**(1/i)}function sd(e,t=Ju,n=0,r=`disk`){let i=Xu(Zu(e)),a=i(),o=a<.76?od(a/.76,.08,.5,1.3):od((a-.76)/.24,.5,80,2.3),s=Qu+(n===1||r===`bulge`?3.3:13.65)*i()**(n===1||r===`bulge`?1.8:r===`arm`?.55:1.3),c=Math.max(0,t-s),l=Math.max(.003,10/o**2.5),u=Math.min(.15,.025/Math.max(o,.1)),d=c/l,f=`main`,p=Math.max(2600,Math.min(45e3,5772*o**.52)),m=.00465047*o**.8,h=`主序星`;t<s||c<u?(f=`protostar`,p=3100,m*=3,h=t<s?`待形成气体团`:`原恒星`):d>=1.13?o<8?(f=`white-dwarf`,p=Math.max(3800,42e3/(1+(c-l)*12)**.46),m=55e-6,h=`白矮星`):o<22?(f=`neutron`,p=12e4,m=12/149597870.7,h=`中子星`):(f=`black-hole`,p=0,m=2.953*Math.max(3,o*.3)/149597870.7,h=`恒星黑洞`):d>1&&(o>=8?(f=`supergiant`,p=i()<.5?3500:14e3,m*=80,h=`超巨星`):d<1.025?(f=`subgiant`,p*=.8,m*=3,h=`次巨星`):d<1.075?(f=`giant`,p=3600,m*=35,h=`红巨星`):d<1.105?(f=`helium`,p=4800+i()*6500,m*=10,h=`氦燃烧星`):(f=`agb`,p=3100,m*=75,h=`渐近巨星支`)),f===`main`&&(h=`${p>=3e4?`O`:p>=1e4?`B`:p>=7500?`A`:p>=6e3?`F`:p>=5200?`G`:p>=3700?`K`:`M`} 型主序星`);let g=(m/.00465047)**2*(p/5772)**4,_=id(p);return{radiusAU:m,mass:o,colour:_,type:h,temperature:p,luminosity:g,stage:f,birth:s}}function cd(e,t){return t<e.birth?0:e.stage===`black-hole`?.015:Math.max(3e-5,Math.min(16,Math.max(1e-10,e.luminosity)**.85))}var ld=38e-5,ud=1.5,dd={value:0},fd={value:0},pd={value:1};function md(e,t){return e&&!t?1:0}var hd={get value(){return md(!!pd.value,!!fd.value)}};function gd(e){return e<38e-5?`不透明等离子体`:e<.12?`暗时代气体`:e<.4?`宇宙黎明`:e<1.5?`年轻星系`:`成熟结构`}function _d(e){let t=Math.max(0,Math.min(1,(e-.35)/1.15));return t*t*(3-2*t)}function vd(e,t=Ju){let n=Ju/qu;return Math.max(0,qu*((t/Ju)**+n-(Math.max(0,e)/Ju)**+n))}var yd=`float primordial(vec4 q){return `+(()=>{let e=Xu(61803);return Array.from({length:32},()=>{let t=Array.from({length:4},()=>e()*2-1),n=Math.hypot(...t),r=12+e()*65;return{v:t.map(e=>e/n*r),phase:e()*Math.PI*2}})})().map(e=>`sin(dot(q,vec4(${e.v.map(e=>e.toFixed(8)).join(`,`)}))+${e.phase.toFixed(8)})*.15`).join(`+`)+`;}`,bd=`uniform float earlyMatter;float earlyMaturity(float t){return smoothstep(.35,${ud},t);}float earlySourceGain(float t){return t<${ld}?0.:t<${Qu}?earlyMatter*.20:mix(.3,1.,smoothstep(${Qu},.4,t));}`,xd=`vec3 earlyBandTint(vec3 color,float emitted,float received,float enabled){return color*(1.-enabled);}`;function Sd(){return dd.value?`超光速视野 · 全局当前 · 不含传播延迟`:fd.value?`接收可见光 · 早期气体与微波示意已隐藏`:pd.value?`源端示意：背景辐射与早期气体 · 非肉眼亮度`:`延迟观测 · 星光按源端颜色显示`}var Cd={pickCentre:{value:new P},pickRadius:{value:0},pickOwner:{value:-1},pickRoot:{value:-1},pickGroup:{value:-1},pickSeed:{value:-1},pickStar:{value:-1}};function wd(e,t,n=0){Cd.pickRadius.value=t?n:0,t&&Cd.pickCentre.value.copy(t).applyMatrix4(e.matrixWorldInverse)}function Td(e,t,n=!1){if(n||t<=0)return 1;let r=Math.max(0,Math.min(1,(e/t-.8)/.2));return .06+.94*r*r*(3-2*r)}function Ed(e,t,n,r=new P,i=!1){if(i||n<=0)return 1;let a=e.clone().sub(r),o=t.clone().sub(r),s=a.length();if(s<=1e-20)return 1;let c=a.clone().divideScalar(s),l=o.dot(c),u=Math.max(0,o.lengthSq()-l*l),d=n*n-u,f=Td(e.distanceTo(t),n);if(d>0&&l+Math.sqrt(d)>0&&s>Math.max(0,l-Math.sqrt(d))){let e=It.smoothstep(Math.sqrt(u)/n,.92,1);f=Math.min(f,.08+.92*e)}return f}var Dd=`float selectionShade(vec3 point,vec3 centre,float radius){if(radius<=0.)return 1.;float len=length(point);if(len<=1e-20)return 1.;vec3 ray=point/len;float t=dot(centre,ray),perp=max(0.,dot(centre,centre)-t*t),disc=radius*radius-perp;float gain=mix(.06,1.,smoothstep(.8,1.,length(point-centre)/radius));if(disc>0.&&t+sqrt(disc)>0.&&len>max(0.,t-sqrt(disc)))gain=min(gain,mix(.08,1.,smoothstep(.92,1.,sqrt(perp)/radius)));return gain;}`,Od=new WeakSet;function kd(e,t){e.userData.pickObject&&(e.userData.pickObject.value=+!!t)}function Ad(e,t=`pickObject`,n={},r=``){if(Od.has(e))return e;Od.add(e);let i={value:0};e.userData.pickObject=i;let a=e.onBeforeCompile,o=e.customProgramCacheKey();return e.onBeforeCompile=(o,s)=>{a.call(e,o,s),Object.assign(o.uniforms,Cd,{pickObject:i},n);let c=`uniform vec3 pickCentre;uniform float pickObject,pickRadius,pickOwner,pickRoot,pickGroup,pickSeed,pickStar;varying vec3 pickView;flat varying float pickKeep;`;o.vertexShader=c+r+`
`+o.vertexShader,o.vertexShader=o.vertexShader.replace(/}\s*$/,`pickView=vec3(gl_Position.x/projectionMatrix[0][0],gl_Position.y/projectionMatrix[1][1],-gl_Position.w);pickKeep=${t};}`),o.fragmentShader=c+(Dd+`void applyPickDimming(){if(pickKeep<.5)gl_FragColor.rgb*=selectionShade(pickView,pickCentre,pickRadius);}`)+`
`+o.fragmentShader.replace(/return;/g,`applyPickDimming();return;`).replace(/}\s*$/,`applyPickDimming();}`)},e.customProgramCacheKey=()=>o+`/sphere-dim-v33/`+t+`/`+r,e}function jd(e,t,n=0){return Math.max(n*2.4,e.position.distanceTo(t)*Math.tan(e.fov*Math.PI/360)*.55)}var Md=new Map,Nd=new Map,Pd=8388608;function Fd(e){if(e<8388608)return e;let t=Md.get(e);if(t===void 0){if(Pd>=16777216)throw Error(`本次会话绘制身份槽耗尽`);t=Pd++,Md.set(e,t),Nd.set(t,e)}return t}function Id(e){return Nd.get(e)??e}var Ld=65536,Rd=524288,zd=256;function Bd(e,t=8){let n=[Array.from({length:e.length/8},(e,t)=>t)];for(;n.length<t;){let t=-1,r=0,i=0;for(let a=0;a<n.length;a++){let o=n[a];if(!(o.length<2))for(let n=0;n<3;n++){let s=1/0,c=-1/0;for(let t of o)s=Math.min(s,e[t*8+n]),c=Math.max(c,e[t*8+n]);let l=(c-s)*Math.sqrt(o.length);l>i&&(i=l,t=a,r=n)}}if(t<0)break;let a=n[t].sort((t,n)=>e[t*8+r]-e[n*8+r]||t-n),o=a.length>>>1;n.splice(t,1,a.slice(0,o),a.slice(o))}return n.filter(e=>e.length).map(t=>{let n=[0,0,0];for(let r of t)for(let i=0;i<3;i++)n[i]+=e[r*8+i]/t.length;let r=t[0],i=1/0;for(let a of t){let t=0;for(let r=0;r<3;r++)t+=(e[a*8+r]-n[r])**2;t<i&&(i=t,r=a)}return{member:r,weight:t.length/(e.length/8)}})}var Vd=class{budget;object;roots=new Map;free=Array.from({length:Ld},(e,t)=>65535-t);ranges=[];end=0;selectionStamp=``;arrays={spacing:new Float32Array(Rd),screenSlot:new Float32Array(Rd),position:new Float32Array(Rd*3),weight:new Float32Array(Rd),extent:new Float32Array(Rd),emitted:new Float32Array(Rd),root:new Float32Array(Rd),slot:new Float32Array(Rd)};state=new Float32Array(Ld*4);texture=new Li(this.state.subarray(0,zd*4*4),zd,4,E,y);uniforms={hierarchyLod:R.uniform,hierarchySize:R.sizeUniform,hierarchyStrict:R.strictUniform,focus:{value:new P},span:{value:1},state111:{value:this.texture},stateShape112:{value:new Lt(zd,4)},height:{value:900},now:{value:0},received:{value:13.8},gain:{value:1},background:{value:1},pixelRatio:{value:1},selectionActive:{value:0},ageColour:fd,earlyMatter:hd};constructor(e=Rd){this.budget=e,this.ranges=[{offset:0,count:e}],this.texture.needsUpdate=!0;let t=new Xr;for(let[e,n]of Object.entries(this.arrays))t.setAttribute(e,new F(n,e===`position`?3:1).setUsage(et));t.setDrawRange(0,0);let n=new yi({uniforms:this.uniforms,transparent:!0,depthWrite:!1,depthTest:!1,blending:2,vertexShader:`${Au}${su}${Nu}${bd}${xd}${ad}attribute float weight,emitted,root,slot,extent,spacing,screenSlot;uniform sampler2D state111;uniform vec2 stateShape112;uniform vec3 focus;uniform float span,height,now,received,gain,background,pixelRatio,selectionActive,ageColour;varying float alpha;varying vec3 tint;void main(){vec4 state=texture2D(state111,(vec2(mod(slot,256.),floor(slot/256.))+.5)/stateShape112);float chosen=state.g;float child=screenContent(screenSlot);float farWeight=1.-child*state.r;if(weight<=0.||farWeight<.000001){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=1.;alpha=0.;tint=vec3(0.);return;}vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;float pixels=spacing*projectionMatrix[1][1]*height/max(1e-10,-p.z);float context=.28+.72/(1.+pow(length(position-focus)/max(.035,span*.7),1.4));alpha=memberLight112(weight,pixels)*farWeight*smoothstep(0.,1000.,now-state.b)*context*1.05;float pixelRadius=extent*projectionMatrix[1][1]*height/max(1e-10,-p.z);preparePointSprite126(mix(1.8,clamp(2.1+sqrt(pixelRadius)*.18,2.1,3.2),child)*pixelRatio);alpha*=earlySourceGain(emitted)*step(length(position),46.5);alpha*=chosen>.5?1.65:selectionActive>.5?${Vu}:1.;vec3 color=mix(vec3(.84,.90,1.),vec3(.92,1.,.69),chosen*.45)*gain*1.15;tint=emitted<${Qu}?earlyBandTint(color,emitted,received,ageColour):redshiftBands(color,emitted,received,ageColour);}`,fragmentShader:`${ju}varying float alpha;varying vec3 tint;void main(){float light=pointSpriteLight126();if(light<=0.||alpha<.00000001)discard;gl_FragColor=vec4(tint,light*alpha);}`});Ad(n,`state.g>.5||(pickOwner>=0.&&abs(state.a-pickOwner)<.1)||(pickRoot>=0.&&abs(root-pickRoot)<.1)?1.:0.`),this.object=Tu(new fa(t,n)),this.object.frustumCulled=!1}ensureState112(e){if(e<this.texture.image.width*this.texture.image.height)return;let t=this.texture.image.height;for(;e>=zd*t;)t*=2;let n=this.texture;this.texture=new Li(this.state.subarray(0,zd*t*4),zd,t,E,y),this.uniforms.state111.value=this.texture,this.uniforms.stateShape112.value.set(zd,t),this.texture.needsUpdate=!0,n.dispose()}view=new P;pixelFactor=900;frustum126=new Ki;matrix126=new In;sphere126=new Dn;pose126=``;hasView126=!1;retry126=!1;restore126=[];pending126=new Map;compacted126=0;restored126=0;protectedDrops126=0;visible126(e){return this.sphere126.center.copy(e.center),this.sphere126.radius=e.extent,this.hasView126&&this.frustum126.intersectsSphere(this.sphere126)}protected126(e){return e.score>1&&this.visible126(e)}makeRoom126(e,t=-1){if(e>this.budget)return!1;for(;!this.ranges.some(t=>t.count>=e);){if(this.ranges.reduce((e,t)=>e+t.count,0)>=e){this.packRanges112();break}let n,r=1/0;for(let[e,i]of this.roots)e!==t&&i.count>i.compact.length&&!this.protected126(i)&&i.score<r&&(n=e,r=i.score);if(n===void 0)return!1;this.compactRoot(n)}return!0}reserve126(e){let t=this.ranges.find(t=>t.count>=e),n=t.offset;return t.offset+=e,t.count-=e,t.count||this.ranges.splice(this.ranges.indexOf(t),1),n}restoreRoot126(e){let t=this.roots.get(e),n=t?.original.deref();if(!t||!n||t.count===t.fullCount||!this.protected126(t)||!this.makeRoom126(t.fullCount,e))return;let r=this.reserve126(t.fullCount);this.freeRange(t.offset,t.count),t.offset=r,t.source=n.points,t.spacing=Lu(n,t.owner),t.slots=Float32Array.from(t.spacing,(e,t)=>R.slot(n.groups&&n.groups[n.points[t*8+5]*5+4]>1?au(n.root,n.points[t*8+5]):z(n.root))),t.count=t.fullCount,t.compact=Bd(n.points),this.write(e,t,Array.from({length:t.count},(e,n)=>({member:n,weight:1/t.count}))),this.end=Math.max(this.end,r+t.count),this.object.geometry.setDrawRange(0,this.end),this.restored126++}importance(e,t){return t*this.pixelFactor/Math.max(1e-6,e.distanceTo(this.view))}freeRange(e,t){if(t<=0)return;this.arrays.weight.fill(0,e,e+t);let n=this.object.geometry.getAttribute(`weight`);n.addUpdateRange(e,t),n.needsUpdate=!0,this.ranges.push({offset:e,count:t}),this.ranges.sort((e,t)=>e.offset-t.offset);for(let e=this.ranges.length-1;e>0;e--)this.ranges[e-1].offset+this.ranges[e-1].count===this.ranges[e].offset&&(this.ranges[e-1].count+=this.ranges[e].count,this.ranges.splice(e,1))}write(e,t,n){for(let r=0;r<n.length;r++){let i=t.offset+r,a=n[r].member*8;this.arrays.weight[i]=n[r].weight,this.arrays.extent[i]=t.source[a+3],this.arrays.spacing[i]=t.spacing[n[r].member],this.arrays.screenSlot[i]=t.slots[n[r].member],this.arrays.root[i]=Fd(e),this.arrays.slot[i]=t.slot,this.arrays.emitted[i]=t.source[a+4];for(let e=0;e<3;e++)this.arrays.position[i*3+e]=t.center.getComponent(e)+t.source[a+e]}for(let e of Object.values(this.object.geometry.attributes))e.addUpdateRange(t.offset*e.itemSize,n.length*e.itemSize),e.needsUpdate=!0}packRanges112(){let e=this.end,t=0;for(let e of[...this.roots.values()].sort((e,t)=>e.offset-t.offset)){if(e.offset!==t)for(let[n,r]of Object.entries(this.arrays)){let i=n===`position`?3:1;r.copyWithin(t*i,e.offset*i,(e.offset+e.count)*i)}e.offset=t,t+=e.count}this.arrays.weight.fill(0,t,this.end),this.end=t,this.ranges=[{offset:t,count:this.budget-t}];for(let t of Object.values(this.object.geometry.attributes))t.clearUpdateRanges(),t.addUpdateRange(0,e*t.itemSize),t.needsUpdate=!0;this.object.geometry.setDrawRange(0,this.end)}compactRoot(e){let t=this.roots.get(e);this.protected126(t)&&this.protectedDrops126++,this.compacted126++,this.freeRange(t.offset+t.compact.length,t.count-t.compact.length),t.count=t.compact.length,this.write(e,t,t.compact),t.spacing=Float32Array.from(t.compact,e=>t.spacing[e.member]),t.slots=Float32Array.from(t.compact,e=>t.slots[e.member]),t.source=Float64Array.from(t.compact.flatMap(e=>Array.from(t.source.subarray(e.member*8,e.member*8+8)))),t.compact=t.compact.map((e,t)=>({member:t,weight:e.weight}))}add(e,t){if(this.roots.has(e.root)||!e.points.length||!this.free.length)return;let n=Lu(e,t),r=Float32Array.from(n,(t,n)=>R.slot(e.groups&&e.groups[e.points[n*8+5]*5+4]>1?au(e.root,e.points[n*8+5]):z(e.root))),i=e.points.length/8,a=new P(...e.center),o=0;for(let t=0;t<e.points.length;t+=8)o=Math.max(o,Math.hypot(e.points[t],e.points[t+1],e.points[t+2]));let s=Bd(e.points),c=this.importance(a,o),l=Array.from({length:i},(e,t)=>({member:t,weight:1/i}));if(!this.makeRoom126(l.length)&&(l=s,!this.makeRoom126(l.length))){for(this.pending126.set(e.root,{source:new WeakRef(e),owner:t});this.pending126.size>256;)this.pending126.delete(this.pending126.keys().next().value);return}this.pending126.delete(e.root);let u=this.reserve126(l.length),d=this.free.pop(),f=performance.now(),p={slot:d,offset:u,born:f,owner:t,count:l.length,fullCount:i,original:new WeakRef(e),coverage:0,ready:0,score:c,center:a,extent:o,compact:s,source:e.points,spacing:n,slots:r};this.roots.set(e.root,p),this.ensureState112(d),this.state.set([0,0,f,t],d*4),this.write(e.root,p,l),l.length<i&&(p.spacing=Float32Array.from(l,e=>n[e.member]),p.slots=Float32Array.from(l,e=>r[e.member]),p.source=Float64Array.from(l.flatMap(t=>Array.from(e.points.subarray(t.member*8,t.member*8+8)))),p.compact=l.map((e,t)=>({member:t,weight:e.weight}))),this.end=Math.max(this.end,u+l.length),this.object.geometry.setDrawRange(0,this.end),this.texture.needsUpdate=!0,this.selectionStamp=``}update(e,t,n,r,i,a,o=()=>0,s=900,c,l=o,u,d=1){if(u&&this.uniforms.focus.value.copy(u),this.uniforms.span.value=d,c){this.view.copy(c.position),this.pixelFactor=s/Math.tan(c.fov*Math.PI/360);let e=[...c.matrixWorld.elements,...c.projectionMatrix.elements,s].join(`:`);if(e!==this.pose126){this.pose126=e,this.retry126=!0,this.hasView126=!0,this.frustum126.setFromProjectionMatrix(this.matrix126.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse));for(let e of this.roots.values())e.score=this.importance(e.center,e.extent);this.restore126=[...this.roots].filter(([,e])=>e.count<e.fullCount&&this.protected126(e)&&e.original.deref()).sort((e,t)=>t[1].score-e[1].score).map(([e])=>e)}}this.uniforms.height.value=s,this.uniforms.now.value=e,this.uniforms.received.value=t,this.uniforms.gain.value=n,this.uniforms.background.value=r,this.uniforms.pixelRatio.value=i,this.uniforms.selectionActive.value=+!!a.length;let f=!1;for(let[e,t]of this.roots){t.score=this.importance(t.center,t.extent),t.coverage=Math.fround(Math.max(0,Math.min(1,o(e))));let n=Math.fround(Math.max(0,Math.min(1,l(e))));t.ready!==n&&(t.ready=n,this.state[t.slot*4]=n,f=!0)}let p=JSON.stringify(a);if(p!==this.selectionStamp){this.selectionStamp=p;for(let[e,t]of this.roots)this.state[t.slot*4+1]=Number(a.some(n=>n.kind===`super`?n.owner===t.owner:n.root===e));f=!0}f&&(this.texture.needsUpdate=!0);let m=this.restore126.shift();if(m!==void 0&&this.restoreRoot126(m),this.pending126.size&&(this.retry126||this.ranges.some(e=>e.count>=8))){this.retry126=!1;let[e,t]=this.pending126.entries().next().value;this.pending126.delete(e);let n=t.source.deref();n?this.add(n,t.owner):this.retry126=!0}}clear(){this.retry126=!1,this.pending126.clear(),this.restore126=[],this.pose126=``,this.hasView126=!1,this.compacted126=this.restored126=this.protectedDrops126=0,this.roots.clear(),this.free=Array.from({length:Ld},(e,t)=>65535-t),this.ranges=[{offset:0,count:this.budget}],this.end=0,this.object.geometry.setDrawRange(0,0),this.arrays.weight.fill(0),this.object.geometry.getAttribute(`weight`).needsUpdate=!0}snapshot(){return{roots:this.roots.size,points:[...this.roots.values()].reduce((e,t)=>e+t.count,0),capacity:this.budget,compacted:[...this.roots.values()].filter(e=>e.count<e.fullCount).length,compactions126:this.compacted126,restored126:this.restored126,protectedDrops126:this.protectedDrops126,pending126:this.pending126.size,visibleRoots:[...this.roots.values()].filter(e=>e.coverage<.99).length}}};function Hd(e,t){let n=0;for(let[r,i]of t)e.getX(r)!==i&&(e.setX(r,i),e.addUpdateRange(r,1),n++);return n&&(e.needsUpdate=!0),n}var Ud=()=>performance.timeOrigin+performance.now(),Wd=[];function Gd(e){Wd.push({...e,at:Ud()}),Wd.length>2e3&&Wd.splice(0,500)}function Kd(e,t,n,r){return!e||t<.45?`super`:e===`cluster`&&!n?`cluster`:e===`galaxy`||r?`galaxy`:`group`}function qd(e,t,n,r){return e===`galaxy`&&!n?`super`:Kd(e,t,n,r)}function Jd(e,t,n,r){if(e<38e-5)return 0;if(e<.12)return r&&!n?.2:0;if(!n)return 1;let i=(t/Math.max(1e-7,e))**(1-13.8/46.5);return Math.max(...[650,530,460].map(e=>(Math.exp(14387768.77/(e*5800))-1)/Math.max(1,Math.exp(Math.min(80,14387768.77*i/(e*5800)))-1)))}function Yd(e,t,n=0){return e*t>.001||n>.001}var Xd=e=>e.length===3?Math.round(e[0]*1e9)+`,`+Math.round(e[1]*1e9)+`,`+Math.round(e[2]*1e9):e.map(e=>Math.round(e*1e9)).join(`,`),Zd=class{parent;object;data;born=0;received=13.8;gain=1;material;constructor(e){this.parent=e}install(e){this.dispose(),this.data=e,this.born=performance.now();let t=new Xr;t.setAttribute(`position`,new F(e.positions,3)),t.setAttribute(`emitted`,new F(e.ages,1)),t.setAttribute(`ownerID`,new I(e.owners,1)),t.setAttribute(`weight`,new F(e.weights,1)),t.computeBoundingSphere();let n=new yi({uniforms:{earlyMatter:hd,redshiftMode:fd,received:{value:13.8},gain:{value:1},fade:{value:0},pixels:{value:1},selected:{value:-1}},transparent:!0,depthWrite:!1,depthTest:!1,blending:2,vertexShader:`attribute float emitted,ownerID,weight;uniform float received,gain,fade,pixels,redshiftMode,selected;varying vec3 tint;varying float alpha;${bd}${xd}${ad}void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;float chosen=abs(selected-ownerID)<.1?1.:0.;float nearScale=clamp(100./max(1.,-p.z),.65,2.);gl_PointSize=(1.27+weight*.55)*nearScale*pixels;vec3 neutral=mix(vec3(.50,.68,.85),vec3(.92,.94,.91),clamp(weight*.65,0.,1.));vec3 color=mix(neutral,vec3(.93,.98,.80),chosen*.6)*gain*1.35;tint=emitted<${Qu}?earlyBandTint(color,emitted,received,redshiftMode):redshiftBands(color,emitted,received,redshiftMode);alpha=.65*fade*earlySourceGain(emitted)*mix(selected<0.?1.:.45,1.5,chosen);}`,fragmentShader:`varying vec3 tint;varying float alpha;void main(){float d=dot(gl_PointCoord*2.-1.,gl_PointCoord*2.-1.);if(d>1.)discard;gl_FragColor=vec4(tint,exp(-d*4.5)*alpha);}`});Ad(n,`pickOwner>=0.&&abs(ownerID-pickOwner)<.1?1.:0.`),this.object=new fa(t,n),this.material=n,this.object.frustumCulled=!1,this.parent.add(this.object)}update(e,t,n,r){this.material&&(this.received=e,this.gain=t,Object.assign(this.material.uniforms.received,{value:e}),this.material.uniforms.gain.value=t,this.material.uniforms.pixels.value=n,this.material.uniforms.selected.value=r,this.material.uniforms.fade.value=It.smoothstep(performance.now()-this.born,0,900))}candidates(e,t,n,r,i){if(!this.data||performance.now()-this.born<60)return[];let a=this.data,o=new In().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).elements,s=new Map;for(let e=0;e<a.roots.length;e++){let c=a.positions[e*3],l=a.positions[e*3+1],u=a.positions[e*3+2],d=o[3]*c+o[7]*l+o[11]*u+o[15];if(d<=0)continue;let f=(o[2]*c+o[6]*l+o[10]*u+o[14])/d;if(f<-1||f>1)continue;let p=((o[0]*c+o[4]*l+o[8]*u+o[12])/d*.5+.5)*r-t,m=(.5-(o[1]*c+o[5]*l+o[9]*u+o[13])/d*.5)*i-n,h=p*p+m*m;if(h>36||!Yd(this.gain,Jd(a.ages[e],this.received,!!fd.value,!!hd.value)))continue;let g=s.get(a.owners[e]);(!g||h<g.distance)&&s.set(a.owners[e],{root:a.roots[e],owner:a.owners[e],distance:h,depth:d})}return[...s.values()].sort((e,t)=>e.distance-t.distance||e.depth-t.depth)}pick(e,t,n,r,i){return this.candidates(e,t,n,r,i)[0]??null}screens(e,t,n){let r=this.data;if(!r)return[];let i=[];for(let a=0;a<r.roots.length&&i.length<120;a+=Math.max(1,Math.floor(r.roots.length/1800))){if(!Yd(this.gain,Jd(r.ages[a],this.received,!!fd.value,!!hd.value)))continue;let o=new P(...r.positions.subarray(a*3,a*3+3)).project(e);o.z>=-1&&o.z<=1&&Math.abs(o.x)<.7&&Math.abs(o.y)<.7&&i.push({id:r.roots[a],x:(o.x*.5+.5)*t,y:(.5-o.y*.5)*n})}return i}snapshot(){return{visible:this.data?.roots.length??0,total:this.data?.total??0,ready:!!this.data,blend:this.data?It.smoothstep(performance.now()-this.born,0,900):0,method:this.data?.method}}dispose(){this.object&&(this.parent.remove(this.object),this.object.geometry.dispose(),this.material?.dispose()),this.object=void 0,this.material=void 0,this.data=void 0}};function Qd(e,t){if(e<0)return 1;let n=Math.max(0,Math.min(1,(t-e)/650));return n*n*(3-2*n)}function $d(e,t,n){return e<=0?0:Math.max(0,Math.min(1,t.reduce((e,[t,r])=>e+r*n(t),0)/e))}var ef=[[`directory.html`,`108 · 仅群目录对照`],[`emulator.html`,`86 · 共享核心与沿丝汇聚`],[`/versions/d0009-macro-7743f3d/emulator.html`,`85 · 基础场与融合核收缩`],[`/versions/d0009-macro-5ae20d7/emulator.html`,`84 · 实时参考与快速拟合`],[`/versions/d0009-macro-c13a095/emulator.html`,`83 · 原拟合与固定参考`],[`contrast.html`,`71 · 固定分层航道`],[`/versions/d0009-macro-dddd0a2/contrast.html`,`70 · 自适应前沿原图`],[`/versions/d0009-macro-4b4c5b1/contrast.html`,`69 · 原质量分层`],[`/versions/d0009-macro-da025c2/contrast.html`,`68 · 固定端口原图`],[`/versions/d0009-macro-8832846/contrast.html`,`67 · 下级结构原图`],[`/versions/d0009-macro-5dca146/contrast.html`,`66 · 主要纤维补连`],[`/versions/d0009-macro-69cd30d/contrast.html`,`65 · 原始近邻直连`],[`/versions/d0009-macro-7e01ac7/contrast.html`,`64 · 演化与密度对照`],[`remapped.html`,`63 · 三分之一尺度骨架`],[`cosmology.html`,`62 · 膨胀与初始谱`],[`coarse.html`,`61 · 曲率半径对照`],[`hierarchy.html`,`57 · 分层密度对照`],[`self-gravity.html`,`55 · 物质与航道`],[`structure.html`,`49 · 局部结构`],[`gravity.html`,`47 · 原始小样`]];function tf(e=``){return`<details class="study-menu"><summary>研究与对照<span aria-hidden="true">⌄</span></summary><nav aria-label="研究与对照">${ef.filter(([t])=>t!==e).map(([e,t])=>`<a href="${e}">${t}<span aria-hidden="true">↗</span></a>`).join(``)}</nav></details>`}function nf(){function e(e){if(!e.open)return;let t=e.querySelector(`summary`).getBoundingClientRect(),n=e.closest(`aside`)?.getBoundingClientRect(),r=n?.top??0,i=(n?.bottom??innerHeight)-t.bottom-10,a=t.top-r-10,o=i<180&&a>i;e.classList.toggle(`drop-up`,o),e.style.setProperty(`--menu-room`,Math.max(90,Math.min(400,o?a:i))+`px`)}document.addEventListener(`toggle`,t=>{t.target instanceof HTMLDetailsElement&&t.target.classList.contains(`study-menu`)&&e(t.target)},!0);let t=()=>document.querySelectorAll(`.study-menu[open]`).forEach(e);addEventListener(`resize`,t),document.addEventListener(`scroll`,t,!0),document.addEventListener(`pointerdown`,e=>{for(let t of document.querySelectorAll(`.study-menu[open]`))t.contains(e.target)||(t.open=!1)}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`)for(let e of document.querySelectorAll(`.study-menu[open]`))e.open=!1,e.querySelector(`summary`)?.focus()})}function rf(e,t){e.setColors(t.slice())}function af(e,t=3){let n=Number(new URL(e).searchParams.get(`pilot`)??0);return Number.isFinite(n)?Math.max(0,Math.min(Math.max(0,t-1),Math.trunc(n))):0}function of(e,t,n=3){let r=new URL(e);return r.searchParams.set(`pilot`,String(Math.max(0,Math.min(Math.max(0,n-1),Math.trunc(t))))),r.href}function sf(e){return e.parts?e.parts.reduce((e,t)=>e+sf(t),0):e.packed?e.packed.length/8:e.routes.length}function*cf(e){if(e.parts){for(let t of e.parts)yield*cf(t);return}if(!e.packed){yield*e.routes;return}let t=e.packed;for(let n=0;n<t.length;n+=8)yield{cluster:t[n],pa:[t[n+1],t[n+2],t[n+3]],pb:[t[n+4],t[n+5],t[n+6]],weight:t[n+7],kind:e.styles?.[n/8]??0,memberEnds:e.memberships?Array.from(e.memberships.slice(n/2,n/2+4)):void 0}}function lf(e,t){let n=new Set(e?.clusters.map(e=>e.root)),r=t.clusters.filter(e=>!n.has(e.root));if(!r.length)return{merged:e??t,added:void 0};let i=t;if(r.length!==t.clusters.length){let e=new Set(r.map(e=>e.root)),n=[],a=[],o=[];for(let r of cf(t))e.has(r.cluster)&&(n.push(r.cluster,...r.pa,...r.pb,r.weight),a.push(r.kind??0),o.push(...r.memberEnds??[-1,-1,-1,-1]));i={routes:[],clusters:r,packed:new Float64Array(n),styles:new Uint8Array(a),memberships:new Int32Array(o),clouds:[...df(t)].filter(t=>e.has(t.root))}}return{merged:e?{routes:[],clusters:[...e.clusters,...r],parts:[...e.parts??[e],i]}:i,added:i}}function uf(e,t){if(e.clusters.every(e=>t.has(e.root)))return e;let n=e.clusters.filter(e=>t.has(e.root)),r=[],i=[],a=[];for(let n of cf(e))t.has(n.cluster)&&(r.push(n.cluster,...n.pa,...n.pb,n.weight),i.push(n.kind??0),a.push(...n.memberEnds??[-1,-1,-1,-1]));return{clusters:n,routes:[],packed:new Float64Array(r),styles:new Uint8Array(i),memberships:new Int32Array(a),clouds:[...df(e)].filter(e=>t.has(e.root))}}function*df(e){if(e.parts)for(let t of e.parts)yield*df(t);else yield*e.clouds??[]}function ff(e,t){let n=Xu((Math.imul(e+1,2654435761)^Math.imul(t+17,2246822519))>>>0),r=n(),i=r<.62?0:r<.87?1:2,a=n(),o=a<.42?3e3*7**n():a<.93?22e3*8**n():18e4*3.3**n();return a>.93&&n()<.7&&(i=1),{kind:i,seed:n()*1e3,radius:o/2e9,angles:t===0?[-.8,.7,.15]:[n()*Math.PI,n()*Math.PI*2,n()*Math.PI*2]}}var pf=class{parent;owner;preparation;prepareAhead=!1;material126=null;materialUsers126=0;disposed126=!1;coverageCache126=new Map;localSpacing114=new Map;hitBounds111=new Map;coverageRows111=new Map;ownerSelected=!1;selection=new Set;members=[];selectionKey=``;buildOrder=[];queued=[];sources=new Map;layers=[];readyRoots=new Map;arrivals=[];uniforms={unresolvedMode:R.unresolvedUniform,hierarchyStrict:R.strictUniform,hierarchyLod:R.uniform,hierarchySize:R.sizeUniform,selectionActive:{value:0},pixelRatio:{value:1},now:{value:0},height:{value:900},factor:{value:1},focus:{value:new P},span:{value:1},gain:{value:1},received:{value:13.8},earlyMatter:hd,redshiftMode:fd,ids:{value:new rn(-1,-1,-1,-1)},fades:{value:new rn}};constructor(e,t,n){this.parent=e,this.owner=t,this.preparation=n}append(e){for(let t of df(e))if(!this.sources.has(t.root)){this.sources.set(t.root,t),this.localSpacing114.set(t.root,Lu(t,this.owner)),this.coverageRows111.set(t.root,Array.from({length:(t.groups?.length??0)/5},(e,n)=>({entry:R.get(au(t.root,n)),count:t.groups[n*5+4]})));let e=0;for(let n=0;n<t.points.length;n+=8)e=Math.max(e,Math.hypot(t.points[n],t.points[n+1],t.points[n+2]));this.hitBounds111.set(t.root,{center:new P(...t.center),radius:e}),this.queued.push(t)}}rebase(){for(let e of this.layers)e.object.position.copy(e.anchor).sub(this.parent.position),e.object.updateMatrix()}setDetails(e,t){this.uniforms.ids.value.fromArray(e.map(Fd)),this.uniforms.fades.value.fromArray(t)}has(e){return this.sources.has(e)}takeReady(){let e=this.arrivals;return this.arrivals=[],e}buildBatch(e,t){let n=[...this.queued].filter(e=>this.prepareAhead||(R.get(z(e.root))?.area??0)>.08||R.unresolvedMode&&R.carrier(z(e.root))>.03||!R.strict&&R.canEnter(ou(this.owner))).sort((t,n)=>e.position.distanceToSquared(new P(...t.center))-e.position.distanceToSquared(new P(...n.center))).slice(0,4),r=new Set(n.map(e=>e.root));if(this.queued=this.queued.filter(e=>!r.has(e.root)),!n.length)return;let i=n.reduce((e,t)=>e+t.points.length/8,0),a=this.layers.at(-1),o=a&&a.used+i<=a.capacity&&a.roots.length+n.length<=16?a:void 0,s=o?.anchor??new P(...n[0].center),c=new Float32Array(i*3),l=new Uint32Array(i),u=new Float32Array(i),d=new Float32Array(i),f=new Float32Array(i),p=new Float32Array(i),m=new Float32Array(i*3),h=new Float32Array(i),g=new Float32Array(i),_=new Float32Array(i),v=new Float32Array(i),y=0;for(let e of n)for(let t=0;t<e.points.length;t+=8){c.set([e.points[t]+e.center[0]-s.x,e.points[t+1]+e.center[1]-s.y,e.points[t+2]+e.center[2]-s.z],y*3);let n=e.groups?.slice(e.points[t+5]*5,e.points[t+5]*5+5);m.set(n?[n[0]+e.center[0]-s.x,n[1]+e.center[1]-s.y,n[2]+e.center[2]-s.z]:c.slice(y*3,y*3+3),y*3),h[y]=+(!n||n[3]===e.points[t+6]),g[y]=n?.[4]??1;let r=R.get(au(e.root,e.points[t+5]));_[y]=Math.min(this.localSpacing114.get(e.root)[t/8],2*(r?.radius??0)/Math.sqrt(Math.max(1,g[y]))),f[y]=e.points[t+5],p[y]=e.points[t+6],d[y]=this.ownerSelected||zu(this.members,e.root,f[y],p[y])?1:0,l[y]=e.root,v[y]=e.points[t+3],u[y]=e.points[t+4],y++}let b=new Xr;b.setAttribute(`rootShare`,new I(Array.from(l,e=>1/Math.max(1,this.sources.get(e)?.points.length?this.sources.get(e).points.length/8:1)),1)),b.setAttribute(`spacing112`,new F(_,1)),b.setAttribute(`screenSlots`,new F(new Float32Array(Array.from(l).flatMap((e,t)=>[R.slot(z(e)),R.slot(au(e,f[t]))])),2)),b.setAttribute(`position`,new F(c,3)),b.setAttribute(`groupCenter`,new F(m,3)),b.setAttribute(`isFirst`,new F(h,1)),b.setAttribute(`memberCount`,new F(g,1)),b.setAttribute(`selected`,new F(d,1)),b.setAttribute(`alive`,new F(new Float32Array(i).fill(1),1)),b.setAttribute(`groupId`,new F(f,1)),b.setAttribute(`memberIndex`,new F(p,1)),b.setAttribute(`root`,new F(Float32Array.from(l,Fd),1)),b.setAttribute(`emitted`,new F(u,1)),b.setAttribute(`radius`,new F(v,1)),b.setAttribute(`born`,new F(new Float32Array(i).fill(-1),1));let x=this.material126??=new yi({uniforms:this.uniforms,transparent:!0,depthWrite:!1,depthTest:!1,blending:2,vertexShader:`${Au}${Nu}attribute float rootShare,spacing112;uniform float unresolvedMode;attribute vec2 screenSlots;${su}attribute vec3 groupCenter;attribute float alive,isFirst,memberCount,selected;uniform float selectionActive;attribute float root,emitted,radius;attribute float born;uniform float now,height,factor,span,gain,received,redshiftMode,pixelRatio;uniform vec3 focus;uniform vec4 ids,fades;varying float alpha;varying vec3 tint;${Zl}${bd}${xd}${ad}void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;float reveal=unresolvedMode>.5?screenBody(screenSlots.y):screenContent(screenSlots.x);float ready=born>=0.?smoothstep(0.,300.,now-born):0.;vec3 world=(modelMatrix*vec4(position,1.)).xyz;float context=.28+.72/(1.+pow(length(world-focus)/max(.035,span*.7),1.4));float child=memberCount<1.5?reveal:screenContent(screenSlots.y);float detail=0.;for(int i=0;i<4;i++)if(abs(root-ids[i])<.1)detail=fades[i];float phase=child/max(.000001,reveal);float layer=hierarchyStrict>.5?reveal*(1.-phase)*isFirst+child:reveal*(1.-child)*.5+child;if(unresolvedMode>.5){float pixels112=spacing112*projectionMatrix[1][1]*height/max(1e-10,-p.z);layer=(1.-detail)*child*memberLight112(rootShare,pixels112);}else layer*=1.-detail;alpha=alive*ready*context*1.05*layer;alpha*=selected>.5?1.65:selectionActive>.5?${Vu}:1.;alpha*=earlySourceGain(emitted);float pixelRadius=radius*projectionMatrix[1][1]*height/max(1e-10,-p.z);preparePointSprite126(mix(1.8,clamp(2.1+sqrt(pixelRadius)*.18,2.1,3.2),child)*pixelRatio);vec3 color=mix(vec3(.84,.90,1.),vec3(.92,1.,.69),selected*.45)*gain*1.15;tint=emitted<${Qu}?earlyBandTint(color,emitted,received,redshiftMode):redshiftBands(color,emitted,received,redshiftMode);}`,fragmentShader:`${ju}varying float alpha;varying vec3 tint;void main(){float light=pointSpriteLight126();if(light<=0.||alpha<.00000001)discard;gl_FragColor=vec4(tint,light*alpha);}`});Ad(x,`(pickOwner>=0.&&abs(pickOwner-layerOwner112)<.1)||(pickOwner<0.&&pickRoot>=0.&&abs(root-pickRoot)<.1)?1.:0.`,{layerOwner112:{value:this.owner}},`uniform float layerOwner112;`);let S=o;if(!S){let e=new Xr,t=Math.max(i,Math.min(8192,i*3));for(let[n,r]of Object.entries(b.attributes))e.setAttribute(n,new F(new Float32Array(t*r.itemSize),r.itemSize).setUsage(et));let n=new fa(e,x);this.materialUsers126++,n.frustumCulled=!0,n.layers.set(1),n.visible=!1,n.position.copy(s).sub(this.parent.position),Tu(n),this.parent.add(n),S={object:n,anchor:s,roots:[],used:0,capacity:t,pendingBirths:[]},this.layers.push(S)}let C=S.used;for(let[e,t]of Object.entries(b.attributes)){let n=S.object.geometry.getAttribute(e);n.array.set(t.array,C*t.itemSize),n.addUpdateRange(C*t.itemSize,i*t.itemSize),n.needsUpdate=!0}b.dispose(),S.used+=i,S.roots.push(...n.map(e=>e.root)),S.pendingBirths.push({start:C,count:i,roots:n.map(e=>e.root)}),S.object.geometry.setDrawRange(0,S.used),S.object.geometry.computeBoundingSphere(),this.buildOrder.push(...n.map(e=>e.root)),this.buildOrder.length>1024&&this.buildOrder.splice(0,this.buildOrder.length-1024)}setSelection(e){this.setMemberSelection(e.map(e=>({root:e,all:!0,groups:[],members:[]})))}setMemberSelection(e,t=[],n=e.length>0||t.length>0){let r=t.includes(this.owner),i=JSON.stringify([e.filter(e=>this.sources.has(e.root)),r,n]);if(i!==this.selectionKey){this.selectionKey=i,this.ownerSelected=r,this.members=e,this.selection=new Set(e.map(e=>e.root)),this.uniforms.selectionActive.value=+!!n;for(let t of this.layers){let n=t.object.geometry,i=n.getAttribute(`root`),a=n.getAttribute(`groupId`),o=n.getAttribute(`memberIndex`),s=n.getAttribute(`selected`);for(let n=0;n<t.used;n++)s.setX(n,r||zu(e,Id(i.getX(n)),a.getX(n),o.getX(n))?1:0);s.needsUpdate=!0}}}pointWeight(e,t,n,r){let i=this.sources.get(e),a=this.readyRoots.get(e);if(!i||a===void 0)return 0;if(R.unresolvedMode){let n=i.points[t+5];if((!i.groups||i.groups[n*5+4]<2?R.content(z(e)):R.content(au(e,n)))<=0)return 0}let o=i.points,s=new P(i.center[0]+o[t],i.center[1]+o[t+1],i.center[2]+o[t+2]),c=i.groups?.slice(o[t+5]*5,o[t+5]*5+5),l=!c||c[4]<2?R.content(z(e)):R.content(au(e,o[t+5])),u=!c||c[3]===o[t+6],d=this.uniforms.ids.value.toArray().indexOf(Fd(e)),f=d<0?0:this.uniforms.fades.value.toArray()[d],p=R.unresolvedMode?R.body(au(e,o[t+5])):R.content(z(e)),m=p*(1-l/Math.max(1e-6,p))*Number(u),h=i.points.length/8,g=c?.[4]??1,_=R.get(au(e,o[t+5])),v=Math.min(this.localSpacing114.get(e)[t/8],2*(_?.radius??0)/Math.sqrt(Math.max(1,g))),y=-s.clone().applyMatrix4(n.matrixWorldInverse).z,b=v*n.projectionMatrix.elements[5]*r/Math.max(1e-10,y);return It.smoothstep(performance.now()-a,0,300)*(R.unresolvedMode?(1-f)*l*Mu(h,b):(1-f)*(R.strict?m+l:p*(1-l)*.5+l))}setAppearance(e,t,n=1){this.uniforms.pixelRatio.value=n,this.uniforms.gain.value=e,this.uniforms.received.value=t}update(e,t,n,r){let i=performance.now();this.uniforms.now.value=i,this.uniforms.height.value=t,this.uniforms.factor.value=Ul(t,e.fov),this.uniforms.focus.value.copy(n),this.uniforms.span.value=r,this.queued.length&&this.buildBatch(e,t);for(let e of this.layers){let t=this.preparation?.ready(e.object)??!0;if(e.object.visible=t&&e.roots.some(e=>R.unresolvedMode?(this.coverageRows111.get(e)??[]).some(e=>(e.entry?.content??0)>.001):R.carrier(z(e))>.001),t&&e.pendingBirths.length){let t=e.object.geometry.getAttribute(`born`);for(let n of e.pendingBirths){t.array.fill(i,n.start,n.start+n.count),t.addUpdateRange(n.start,n.count);for(let e of n.roots)this.sources.has(e)&&(this.readyRoots.set(e,i),this.arrivals.push([e,i]))}t.needsUpdate=!0,e.pendingBirths=[]}}}hits(e,t,n,r,i,a=7,o=new Set,s){let c=new In().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).elements,l=[],u=performance.now(),d=new P(0,0,-1).applyQuaternion(e.quaternion),f=new to;f.setFromCamera(new Lt(t/r*2-1,1-n/i*2),e);let p=2*Math.tan(e.fov*Math.PI/360)*a/i;for(let[m,h]of this.sources){let g=this.hitBounds111.get(m);if(g&&f.ray.distanceSqToPoint(g.center)>(g.radius+e.position.distanceTo(g.center)*p+1e-10)**2)continue;let _=this.readyRoots.get(m);if(_===void 0||u-_<20||o.has(m))continue;let v=h.points;for(let o=0;o<v.length;o+=8){let u=h.center[0]+v[o],f=h.center[1]+v[o+1],p=h.center[2]+v[o+2],g=c[3]*u+c[7]*f+c[11]*p+c[15];if(g<=0)continue;let _=(c[2]*u+c[6]*f+c[10]*p+c[14])/g;if(_<-1||_>1)continue;let y=((c[0]*u+c[4]*f+c[8]*p+c[12])/g*.5+.5)*r,b=(.5-(c[1]*u+c[5]*f+c[9]*p+c[13])/g*.5)*i,x=Math.hypot(y-t,b-n);if(x>a)continue;let S=new P(u,f,p);(Yd(this.pointWeight(m,o,e,i),Jd(v[o+4],this.uniforms.received.value,!!fd.value,!!hd.value)*this.uniforms.gain.value)||Yd(0,0,s?.(S)??0))&&l.push({root:m,index:v[o+6],group:v[o+5],radius:v[o+3],emitted:v[o+4],position:S,distance:x,depth:S.clone().sub(e.position).dot(d)})}}return l.sort((e,t)=>e.distance-t.distance||e.depth-t.depth)}galaxy(e){let t=this.sources.get(e.root);return{id:e.index===0?`G-${e.root}`:`G-${e.root}/member-${e.index}`,group:e.group,groupCount:t.groups?.[e.group*5+4],position:e.position.toArray().map((e,n)=>e-t.center[n]),...t.appearance?.[e.index]??ff(e.root,e.index),emitted:e.emitted,received:this.uniforms.received.value}}screens(e,t,n,r=new Set){let i=[];for(let[a,o]of this.sources)if(this.readyRoots.has(a)&&!r.has(a))for(let r=0;r<o.points.length;r+=8){let s=new P(o.center[0]+o.points[r],o.center[1]+o.points[r+1],o.center[2]+o.points[r+2]);if(!Yd(this.pointWeight(a,r,e,n),Jd(o.points[r+4],this.uniforms.received.value,!!fd.value,!!hd.value))||(s.project(e),s.z<-1||s.z>1||Math.abs(s.x)>.8||Math.abs(s.y)>.7))continue;let c=o.points[r+6];if(i.push({id:c===0?`G-${a}`:`G-${a}/member-${c}`,root:a,x:(s.x*.5+.5)*t,y:(.5-s.y*.5)*n}),i.length>=50)return i}return i}readiness126(e){let t=this.readyRoots.get(e);return!this.parent.visible||t===void 0?0:It.smoothstep(performance.now()-t,0,300)}coverage110(e){let t=this.sources.get(e),n=this.readyRoots.get(e);if(!t||n===void 0||!this.parent.visible)return 0;let r=R.revision126,i=this.coverageCache126.get(e);if(i?.revision===r)return i.value;let a=It.smoothstep(performance.now()-n,0,300),o;if(!t.groups?.length)o=a*R.content(z(e));else{let n=0;for(let t of this.coverageRows111.get(e)??[])n+=Math.max(0,Math.min(1,R.unresolvedMode?t.entry?.content??0:R.content(z(e))))*t.count;o=a*n/Math.max(1,t.points.length/8)}return a===1&&this.coverageCache126.set(e,{revision:r,value:o}),o}visibleLayerCount(){return this.layers.filter(e=>e.object.visible).length}snapshot(){return{bufferPoints126:this.layers.reduce((e,t)=>e+t.capacity,0),bufferBytes126:this.layers.reduce((e,t)=>e+Object.values(t.object.geometry.attributes).reduce((e,t)=>e+t.array.byteLength,0),0),ownerSelected:this.ownerSelected,selectionActive:this.uniforms.selectionActive.value,buildOrder:[...this.buildOrder],selectedRoots:[...this.selection],memberSelection:this.members,selectedMemberCount:this.layers.reduce((e,t)=>e+Array.from(t.object.geometry.getAttribute(`selected`).array).slice(0,t.used).filter(e=>e>.5).length,0),born:[...this.readyRoots],roots:this.sources.size,ready:this.readyRoots.size,pending:this.queued.length,points:[...this.sources.values()].reduce((e,t)=>e+t.points.length/8,0),layers:this.layers.length,visibleLayers:this.layers.filter(e=>e.object.visible).length}}retainRoots(e){for(let t of this.sources.keys())e.has(t)||(this.sources.delete(t),this.coverageCache126.delete(t),this.localSpacing114.delete(t),this.readyRoots.delete(t),this.coverageRows111.delete(t),this.hitBounds111.delete(t));this.queued=this.queued.filter(t=>e.has(t.root)),this.arrivals=this.arrivals.filter(([t])=>e.has(t));for(let t of this.layers){let n=t.object.geometry,r=n.getAttribute(`alive`),i=n.getAttribute(`root`);for(let t=0;t<r.count;t++)r.setX(t,r.getX(t)>0&&e.has(Id(i.getX(t)))?1:0);r.needsUpdate=!0,t.roots=t.roots.filter(t=>e.has(t))}for(let e of this.layers.filter(e=>!e.roots.length))this.parent.remove(e.object),this.release126(e.object);this.layers=this.layers.filter(e=>e.roots.length)}release126(e){let t=()=>{e.geometry.dispose(),this.materialUsers126--,this.disposed126&&!this.materialUsers126&&(this.material126?.dispose(),this.material126=null)};this.preparation?this.preparation.release(e,t):t()}dispose(){this.disposed126=!0;for(let e of this.layers)this.parent.remove(e.object),this.release126(e.object);this.materialUsers126||(this.material126?.dispose(),this.material126=null),this.layers=[],this.sources.clear(),this.coverageCache126.clear(),this.localSpacing114.clear(),this.coverageRows111.clear(),this.hitBounds111.clear(),this.queued=[],this.readyRoots.clear()}},mf={value:Ju};function hf(e){let t=e.onBeforeCompile,n=e.customProgramCacheKey();e.onBeforeCompile=(n,r)=>{t.call(e,n,r),n.uniforms.earlyReceived=mf,n.uniforms.currentView=dd,n.vertexShader=`varying vec3 earlyWorld;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace(/}\s*$/,`vec3 eview=vec3(gl_Position.x/projectionMatrix[0][0],gl_Position.y/projectionMatrix[1][1],-gl_Position.w);earlyWorld=transpose(mat3(viewMatrix))*eview+cameraPosition;}`),n.fragmentShader=`varying vec3 earlyWorld;uniform float earlyReceived,currentView;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace(/}\s*$/,`float ec=${qu}*pow(earlyReceived/${Ju},${Ju/qu});float et=currentView>.5?earlyReceived:${Ju}*pow(max(0.,(ec-length(earlyWorld))/${qu}),${qu/Ju});gl_FragColor.a*=smoothstep(${Qu},.2,et);}`)},e.customProgramCacheKey=()=>n+`/early-reference-v33`}function gf(e,t=Ju,n=!1){let r=qu*(t/Ju)**(Ju/qu),i=n?t:Ju*Math.max(0,(r-e)/qu)**(qu/Ju),a=Math.max(0,Math.min(1,(i-Qu)/(.2-Qu)));return a*a*(3-2*a)}var _f=[0,0,0,1];function vf(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function yf([e,t,n,r]){return[[r,n,-t,-e],[-n,r,e,-t],[t,-e,r,-n]]}function bf(e=60){if(!Number.isFinite(e)||e<=0)throw Error(`曲率半径必须是正数`);let t=e=>{let t=Math.hypot(...e);if(!Number.isFinite(t)||t===0)throw Error(`无效超球坐标`);return e.map(e=>e/t)},n=(t,n)=>{let r=Math.max(-1,Math.min(1,vf(t,n))),i=n.map((e,n)=>e-r*t[n]),a=Math.hypot(...i);if(a<1e-14)return r>0?[0,0,0]:[Math.PI*e,0,0];let o=e*Math.atan2(a,r)/a;return yf(t).map(e=>vf(i,e)*o)},r=(n,r)=>{let i=Math.hypot(...r);if(i<1e-15)return[...n];let a=yf(n),o=i/e,s=Math.cos(o),c=Math.sin(o)/i;return t(n.map((e,t)=>e*s+c*(a[0][t]*r[0]+a[1][t]*r[1]+a[2][t]*r[2])))};return{id:`s3-v1`,radius:e,normalize:t,log:n,exp:r,distance:(t,n)=>{let r=Math.max(-1,Math.min(1,vf(t,n))),i=Math.hypot(n[0]-r*t[0],n[1]-r*t[1],n[2]-r*t[2],n[3]-r*t[3]);return e*Math.atan2(i,r)},interpolate:(e,t,i)=>r(e,n(e,t).map(e=>e*i))}}var xf=bf();function Sf(e){return e.length===4?xf.normalize(e):xf.exp(_f,e)}var Cf=class{object;received=13.8;uniforms={colourMode:fd,sourceColour:{value:new P(...id(3e3))},earlyMatter:pd,observer:{value:new rn},basisX:{value:new rn},basisY:{value:new rn},basisZ:{value:new rn},angle:{value:0},opacity:{value:.11}};constructor(){let e=Ad(new yi({uniforms:this.uniforms,side:1,transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:`uniform vec4 observer,basisX,basisY,basisZ;uniform float angle;varying float contrast;varying vec3 normalDir;${yd}void main(){vec3 n=normalize(position);vec4 q=observer*cos(angle)+(basisX*n.x+basisY*n.y+basisZ*n.z)*sin(angle);contrast=primordial(q);normalDir=n;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying float contrast;varying vec3 normalDir;uniform float opacity;uniform vec3 sourceColour;void main(){vec3 c=sourceColour*(.72+contrast*.22);gl_FragColor=vec4(c,opacity);
#include <colorspace_fragment>
}`}));this.object=new ci(new ya(1,256,160),e),this.object.renderOrder=-100,this.object.frustumCulled=!1}update(e,t,n){this.received=t;let r=vd(ld,t),i=yf(e);this.uniforms.observer.value.fromArray(e),this.uniforms.basisX.value.fromArray(i[0]),this.uniforms.basisY.value.fromArray(i[1]),this.uniforms.basisZ.value.fromArray(i[2]),this.uniforms.angle.value=r/xf.radius,this.object.scale.setScalar(r),this.uniforms.opacity.value=n&&n.length()<r?.035:.11,this.object.visible=hd.value>0&&r>0&&!dd.value}snapshot(){return{view:dd.value?`current`:`lightcone`,colourMode:fd.value?`接收可见光：微波不可见`:`源端热辐射示意`,receivedTemperature:3e3/(1+$u(ld,this.received)),mode:pd.value?`多波段/物质示意`:`仅发光天体`,lastScatteringRadius:this.object.scale.x,visible:this.object.visible,observer:this.uniforms.observer.value.toArray(),emitted:ld}}};function wf(e,t,n,r=128){let i=e.clone().sub(t),a=[];if(!(n>0)||i.length()>n*(1+1e-10))return a;for(let o=0;o<3;o++){let s=(o+1)%3,c=(o+2)%3,l=i.getComponent(o),u=Math.sqrt(Math.max(0,n*n-l*l)),d=e=>t.clone().setComponent(o,t.getComponent(o)+l).setComponent(s,t.getComponent(s)+u*Math.cos(e)).setComponent(c,t.getComponent(c)+u*Math.sin(e));for(let e=0;e<r;e++)a.push({a:d(e*2*Math.PI/r),b:d((e+1)*2*Math.PI/r),axis:o,ring:!0});let f=Math.sqrt(Math.max(0,n*n-i.getComponent(s)**2-i.getComponent(c)**2));for(let n of[-1,1])a.push({a:e.clone(),b:e.clone().setComponent(o,t.getComponent(o)+n*f),axis:o,ring:!1})}return a}function Tf(e,t,n,r=3){if(n<=0)return[];let i=t.clone().normalize(),a=new P(+(Math.abs(i.x)<.8),Math.abs(i.x)<.8?0:1,0).cross(i).normalize(),o=i.clone().cross(a),s=t=>e.clone().addScaledVector(a,n*Math.cos(t*Math.PI/64)).addScaledVector(o,n*Math.sin(t*Math.PI/64));return Array.from({length:128},(e,t)=>({a:s(t),b:s(t+1),axis:r,ring:!0}))}function Ef(e,t,n,r){let i=e.distanceTo(n);if(i<=1e-15||i>t+r||i<Math.abs(t-r))return[];let a=e.clone().sub(n).divideScalar(i),o=(r*r-t*t+i*i)/(2*i);return Tf(n.clone().addScaledVector(a,o),a,Math.sqrt(Math.max(0,r*r-o*o)))}function Df(e,t,n,r){if(!(r>0))return null;let i=e.clone().sub(n).divideScalar(r),a=t.clone().sub(e).divideScalar(r),o=a.lengthSq(),s=i.dot(a),c=i.lengthSq()-1;if(o<1e-28)return c<=1e-12?[e.clone(),t.clone()]:null;let l=s*s-o*c;if(l<-1e-14*o)return null;let u=Math.sqrt(Math.max(0,l)),d=Math.max(0,(-s-u)/o),f=Math.min(1,(-s+u)/o);return d<=f?[e.clone().lerp(t,d),e.clone().lerp(t,f)]:null}var Of=class{element=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);paths=[];shadows=[];hole;box;key=``;segments=[];constructor(e){let t=`http://www.w3.org/2000/svg`;this.element.id=`selectionLocator`,this.element.setAttribute(`aria-hidden`,`true`),this.element.classList.add(`selection-locator`);let n=document.createElementNS(t,`defs`),r=document.createElementNS(t,`mask`);r.id=`selectionLocatorHole`,r.setAttribute(`maskUnits`,`userSpaceOnUse`),this.box=document.createElementNS(t,`rect`),this.box.setAttribute(`fill`,`white`),this.hole=document.createElementNS(t,`circle`),this.hole.setAttribute(`r`,`14`),this.hole.setAttribute(`fill`,`black`),r.append(this.box,this.hole),n.append(r),this.element.append(n);let i=document.createElementNS(t,`g`);i.setAttribute(`mask`,`url(#selectionLocatorHole)`),i.setAttribute(`fill`,`none`),i.setAttribute(`stroke-linecap`,`round`);for(let e=0;e<12;e++){let e=document.createElementNS(t,`path`);e.setAttribute(`stroke`,`#020a12`),e.setAttribute(`stroke-width`,`4.5`),e.setAttribute(`opacity`,`.8`),i.append(e),this.shadows.push(e)}for(let e=0;e<4;e++)for(let n=0;n<3;n++){let r=document.createElementNS(t,`path`);r.setAttribute(`stroke`,[`#ff725e`,`#48ffb7`,`#56b9ff`,`#b3f8ff`][e]),r.setAttribute(`stroke-width`,n===2?`1.8`:`1.4`),r.setAttribute(`opacity`,n===0?`.42`:n===1?`.9`:`1`),i.append(r),this.paths.push(r)}this.element.append(i),e.append(this.element),this.hide()}hide(){this.element.style.display=`none`}update(e,t,n,r,i,a,o=0){if(!t){this.hide();return}let s=[...t.toArray(),...n.toArray(),r,o].join(`|`);if(s!==this.key&&(this.key=s,this.segments=[...wf(t,n,r),...wf(t,t,o).filter(e=>e.ring),...Ef(t,o,n,r)]),!this.segments.length){this.hide();return}this.element.style.display=``,this.element.setAttribute(`viewBox`,`0 0 ${i} ${a}`),this.box.setAttribute(`width`,String(i)),this.box.setAttribute(`height`,String(a));let c=t.clone().project(e);this.hole.setAttribute(`cx`,String((c.x*.5+.5)*i)),this.hole.setAttribute(`cy`,String((-.5*c.y+.5)*a));let l=Array.from({length:12},()=>``),u=t.clone().applyMatrix4(e.matrixWorldInverse),d=-Math.max(e.near,1e-12),f=[...this.segments],p=e.position.distanceTo(t);if(o>0&&p>o){let n=e.position.clone().sub(t).divideScalar(p);f.push(...Tf(t.clone().addScaledVector(n,o*o/p),n,o*Math.sqrt(1-(o/p)**2)))}for(let t of f){let o=Df(t.a,t.b,n,r);if(!o)continue;let[s,c]=o;if(s.applyMatrix4(e.matrixWorldInverse),c.applyMatrix4(e.matrixWorldInverse),s.z>=d&&c.z>=d)continue;s.z>=d?s.lerp(c,(d-s.z)/(c.z-s.z)):c.z>=d&&c.lerp(s,(d-c.z)/(s.z-c.z));let f=t.ring?(s.z+c.z)*.5<u.z?0:1:2;s.applyMatrix4(e.projectionMatrix),c.applyMatrix4(e.projectionMatrix);let p=kf([(s.x*.5+.5)*i,(-s.y*.5+.5)*a,(c.x*.5+.5)*i,(-c.y*.5+.5)*a],i,a);p&&(l[t.axis*3+f]+=`M${p[0].toFixed(2)},${p[1].toFixed(2)}L${p[2].toFixed(2)},${p[3].toFixed(2)}`)}l.forEach((e,t)=>{this.paths[t].getAttribute(`d`)!==e&&this.paths[t].setAttribute(`d`,e),this.shadows[t].getAttribute(`d`)!==e&&this.shadows[t].setAttribute(`d`,e)})}};function kf(e,t,n){if(e.some(e=>!Number.isFinite(e)))return null;let[r,i,a,o]=e,s=a-r,c=o-i,l=0,u=1;for(let[e,a]of[[-s,r],[s,t-r],[-c,i],[c,n-i]])if(e===0){if(a<0)return null}else{let t=a/e;if(e<0?l=Math.max(l,t):u=Math.min(u,t),l>u)return null}return[r+l*s,i+l*c,r+u*s,i+u*c]}var Af=class{list=[];index=-1;x=NaN;y=NaN;key=``;accumulated=0;direction=0;active=!1;get target(){return this.hasTarget?this.list[this.index].target:null}matchesPointer(e,t){return this.active&&Math.hypot(e-this.x,t-this.y)<=6}get hasTarget(){return this.active&&this.index>=0&&this.list.length>0}reset(){this.active=!1,this.list=[],this.index=-1,this.key=``,this.accumulated=0,this.direction=0}step(e,t,n,r,i,a){if(!r)return null;let o=Math.sign(r);if(o!==this.direction&&(this.accumulated=0,this.direction=o),this.accumulated+=r,Math.abs(this.accumulated)<40)return null;if(this.accumulated=0,!this.active||n!==this.key||Math.hypot(e-this.x,t-this.y)>6){let r=new Map;for(let e of i())Number.isFinite(e.depth)&&e.depth>=0&&(!r.has(e.target.id)||e.depth<r.get(e.target.id).depth)&&r.set(e.target.id,e);this.list=[...r.values()].sort((e,t)=>e.depth-t.depth||e.target.id.localeCompare(t.target.id)),this.index=this.list.findIndex(e=>e.target.id===a),this.x=e,this.y=t,this.key=n,this.active=!0}return this.list.length?(this.index=this.index<0?0:(this.index+o+this.list.length)%this.list.length,{target:this.list[this.index].target,index:this.index+1,total:this.list.length}):{target:null,index:0,total:0}}snapshot(){return{active:this.active,index:this.index+1,ids:this.list.map(e=>e.target.id),depths:this.list.map(e=>e.depth)}}},jf=[0,0,0,0];function Mf(e,t=jf){let[n,r,i,a]=t,o=Math.cos(r),s=Math.sin(r),c=e[0]*o+e[1]*s,l=-e[0]*s+e[1]*o,u=c*(1+n*(c>=0?1:.35)*c*c),d=l*(1-.12*n)+i*c*c,f=e[2]+a*c*(c*c+l*l);return[u*o-d*s,u*s+d*o,f]}var Nf=`vec3 tidalDeform(vec3 p,vec4 t){float c=cos(t.y),sn=sin(t.y),u=p.x*c+p.y*sn,v=-p.x*sn+p.y*c,f=u>=0.?1.:.35;float U=u*(1.+t.x*f*u*u),V=v*(1.-.12*t.x)+t.z*u*u,Z=p.z+t.w*u*(u*u+v*v);return vec3(U*c-V*sn,U*sn+V*c,Z);}vec3 tidalInverse(vec3 p,vec4 t){float c=cos(t.y),sn=sin(t.y),U=p.x*c+p.y*sn,V=-p.x*sn+p.y*c,f=U>=0.?1.:.35,u=U;for(int i=0;i<7;i++)u-=(u+t.x*f*u*u*u-U)/(1.+3.*t.x*f*u*u);float v=(V-t.z*u*u)/(1.-.12*t.x),z=p.z-t.w*u*(u*u+v*v);return vec3(u*c-v*sn,u*sn+v*c,z);}`;function Pf(e=jf){return 1+e[0]+Math.abs(e[2])+Math.abs(e[3])}function Ff(e){let t=Xu(Zu(e.id+`/morphology`)),n=e.kind===1?t()<.28?4:1:e.kind===2?2:t()<.58?3:0;return{tidal:e.environment?.tidal??jf,family:n,name:[`旋涡星系`,`椭球星系`,`不规则星系`,`棒旋星系`,`近球状星系`][n],arms:2+Math.floor(t()*4),pitch:.28+t()*.3,phase:t()*Math.PI*2,bar:n===3?.22+t()*.22:0,bulge:Math.min(.65,.07+t()*.18+(e.environment?.tidal[0]??0)*.3),thickness:.012+t()*.035,axisY:n===4?.9+t()*.1:.55+t()*.4,axisZ:n===4?.88+t()*.12:.35+t()*.5,gas:n===1||n===4?.035+t()*.06:.45+t()*.5,dust:n===1||n===4?.015+t()*.04:.35+t()*.45}}function If(e,t,n){let r=t();if(e.family===1||e.family===4||r<e.bulge){let t=e.family===1||e.family===4?1:.25,r=Math.min(1,Math.abs(n())*.36)*t;return{position:[n()*r,n()*r*e.axisY,n()*r*e.axisZ],environment:`bulge`}}if(e.family===2){t()*6.283;let e=Math.floor(t()*3);return{position:[n()*.22+Math.cos(e*2.1)*.3,n()*.22+Math.sin(e*2.1)*.23,n()*.13],environment:t()<.55?`arm`:`disk`}}if(e.bar&&r<e.bulge+.15)return{position:[(t()-.5)*e.bar*2,n()*.045,n()*e.thickness],environment:`bulge`};let i=t()**.62*.98,a=t()<.73,o=a?Math.floor(t()*e.arms)*Math.PI*2/e.arms+Math.log(i+.1)/e.pitch+e.phase+n()*.13:t()*Math.PI*2;return{position:[Math.cos(o)*i,Math.sin(o)*i,n()*e.thickness*(1-i*.5)],environment:a?`arm`:`disk`}}function Lf(e,t){let n=Math.max(0,Math.min(1,(2.5-e/Math.max(1e-20,t))/1.8));return 1.8+.6*n*n*(3-2*n)}function Rf(e,t,n){let r=Math.max(0,Math.min(1,(2.5-e/Math.max(1e-20,t))/1.6)),i=r*r*(3-2*r),a=n===1||n===4;return{inside:i,exposure:1.8*(1-i)+(a?.18:n===2?.32:.48)*i,ceiling:a?.035:.055}}var zf=36525e7,Bf=class{base=Ju;whole=0;fraction=0;playing=!1;rate=1;get elapsedDays(){return this.whole+this.fraction}get epoch(){return this.base+this.elapsedDays/zf}advance(e){if(!Number.isFinite(e)||e<0)throw Error(`时间增量须为非负有限数`);let t=Math.floor(e),n=this.fraction+(e-t),r=Math.floor(n);this.whole+=t+r,this.fraction=n-r}tick(e){this.playing&&this.advance(Math.max(0,e)*this.rate)}setRate(e){if(!Number.isFinite(e)||e<=0)throw Error(`倍率须为正有限数`);this.rate=e}orbitalDays(e,t,n=0,r=Ju){let i=e*zf,a=Math.floor(i);return(a%t+(i-a)+(this.whole-(r-this.base)*zf)/(1+n)%t+this.fraction/(1+n))%t}snapshot(){return{epoch:this.epoch,elapsedWholeDays:this.whole,elapsedFraction:this.fraction,rate:this.rate,playing:this.playing}}},Vf=63241.0770843,Hf=149597870.7,Uf=22e3;function*Wf(e,t=Uf){if(!Number.isInteger(t)||t<1||t>22e3)throw Error(`恒星取样数量越界`);let n=Xu(Math.floor(e.seed*1e4)),r=()=>Math.sqrt(-2*Math.log(Math.max(1e-9,n())))*Math.cos(n()*Math.PI*2),i=Ff(e),a=Xu(Zu(e.id+`/extra-count`)),o=t===22e3?Math.floor(a()*33):0,s=t===22e3?t+1+o:t,c=new Float64Array(s*3),l=new Float32Array(s*3),u=new Float32Array(s*3),d=[];2+(e.seed%1>.5?2:0);let f=e.radius*1e9;for(let a=0;a<t;a++){let t=If(i,n,r);c.set(Mf(t.position,i.tidal).map(e=>e*f),a*3);let o=.65+n()*.35,s=sd(`${e.id}/star-${a}`,e.emitted,e.kind,t.environment);d.push(s);let p=o*cd(s,e.emitted);l.set(s.colour.map(e=>e*p),a*3),u.set(id(s.temperature,$u(e.emitted,e.received)).map(e=>e*p),a*3),a%256==255&&(yield)}if(s>t){let n=Xu(Zu(e.id+`/extras`)),r=1e6*(1+n()*30);d.push({radiusAU:2.953*r/Hf,mass:r,colour:[0,0,0],type:`核区黑洞 · 静默样本`,temperature:0,luminosity:0,stage:`black-hole`,birth:0});for(let e=0;e<o;e++){let r=t+1+e,a=n()*Math.PI*2,o=(.12+n()*.85)*f;c.set(Mf([Math.cos(a)*o/f,Math.sin(a)*o/f,(n()-.5)*.18],i.tidal).map(e=>e*f),r*3),d.push({radiusAU:(5e3+n()*25e3)/Hf,mass:.001,colour:[0,0,0],type:`流浪行星 · 无母恒星`,temperature:80,luminosity:0,stage:`main`,birth:0})}}return{galaxy:e,positions:c,colors:l,count:s,stellarCount:t,properties:d,redshiftColors:u,rogueCount:o,availability:qf(d.slice(0,t),e.emitted)}}function Gf(e,t=Uf){let n=Wf(e,t),r=n.next();for(;!r.done;)r=n.next();return r.value}async function Kf(e,t){let n=Wf(e),r=n.next();for(;!r.done;){if(await new Promise(e=>setTimeout(e,0)),t?.aborted)throw new DOMException(`目录准备已取消`,`AbortError`);let e=performance.now();do r=n.next();while(!r.done&&performance.now()-e<3)}return r.value}function qf(e,t){let n=0,r=0,i=0,a=1/0;for(let o of e)a=Math.min(a,o.birth),o.birth>t||(n++,o.temperature>0&&o.luminosity>0&&r++,o.stage===`main`&&i++);return{formed:n,luminous:r,main:i,earliestBirth:a}}function Jf(e,t=!1){for(let n of[!0,!1])for(let r=0;r<e.stellarCount;r++){let i=e.properties[r];if(!(i.birth>e.galaxy.emitted||i.temperature<=0||i.luminosity<=0||n&&i.stage!==`main`)&&(!t||rp(Yf(e,r)).bodies.some(e=>e.kind===`planet`)))return r}return-1}function Yf(e,t){if(!Number.isInteger(t)||t<0||t>=e.count)throw Error(`恒星索引越界`);let n=t<e.stellarCount?`star`:t===e.stellarCount?`core`:`rogue`;return{id:n===`star`?`${e.galaxy.id}/star-${t}`:n===`core`?`${e.galaxy.id}/core`:`${e.galaxy.id}/rogue-${t-e.stellarCount-1}`,index:t,position:Array.from(e.positions.slice(t*3,t*3+3)),...e.properties[t],objectKind:n}}function Xf(e,t){if(!t.startsWith(e.galaxy.id+`/`))return-1;let n=t.slice(e.galaxy.id.length+1);return n===`core`?e.stellarCount:n.startsWith(`rogue-`)?e.stellarCount+1+Number(n.slice(6)):Number(n.match(/^star-(\d+)/)?.[1]??-1)}var Zf=new Map,Qf=new Map,$f=e=>[e.id,e.emitted,e.received,e.seed,e.kind,e.radius,JSON.stringify(e.environment??null)].join(`|`);function ep(e,t){for(Zf.delete(e),Zf.set(e,t);Zf.size>2;)Zf.delete(Zf.keys().next().value);return t}function tp(e){let t=$f(e);return ep(t,Zf.get(t)??Gf(e))}function np(e,t){let n=$f(e),r=Zf.get(n);if(r)return Promise.resolve(ep(n,r));let i=Qf.get(n);if(i&&!i.signal?.aborted)return i.task;let a=Kf(e,t).then(e=>ep(n,e)).finally(()=>{Qf.get(n)?.task===a&&Qf.delete(n)});return Qf.set(n,{task:a,signal:t}),a}function rp(e){let t=Xu(Zu(e.id+`/system-v26`)),n=(e,n)=>e*(n/e)**t(),r=t(),i=t()*Math.PI*2,a=t()*Math.PI*2,o=[Math.sqrt(1-r)*Math.sin(i),Math.sqrt(1-r)*Math.cos(i),Math.sqrt(r)*Math.sin(a),Math.sqrt(r)*Math.cos(a)],s=[{id:e.id,kind:e.objectKind===`core`?`core`:e.objectKind===`rogue`?`rogue`:`star`,name:e.type,radius:e.radiusAU,orbit:0,period:1,phase:0,inclination:0,style:0,seed:t()*100}];if(e.objectKind!==`star`)return{star:e,bodies:s,orientation:o,outerRadius:e.radiusAU*(e.objectKind===`core`?100:12)};let c=t()<.26,l=c?n(Math.max(.08,e.radiusAU*12),80):0;c&&s.push({id:e.id+`/companion`,kind:`companion`,name:`伴星`,radius:e.radiusAU*n(.25,.95),orbit:l,period:365.25*Math.sqrt(l**3/e.mass),phase:t()*6.283,inclination:(t()-.5)*1.4,node:t()*6.283,eccentricity:t()*.45,style:0,seed:t()*100});let u=t()<.09?0:1+Math.floor(t()*11),d=[],f=Math.max(e.radiusAU*8,c?l*5:n(.035,1.8));for(let r=0;r<u;r++){let i=e.luminosity/(f*f),a=t(),o=i>.3&&i<2.5&&a<.3?1:i<.2?a<.4?3:a<.73?2:0:a<.14?2:0,c=(o===2?n(2e4,11e4):o===3?n(7e3,45e3):n(1500,15e3))/Hf,l=s.length,u=e.id+`/planet-${r}`,p=t()**2*.34;s.push({id:u,kind:`planet`,name:`行星 ${r+1} · ${[`岩石`,`海洋`,`气态巨行星`,`冰巨行星`][o]}`,radius:c,orbit:f,period:365.25*Math.sqrt(f**3/e.mass),phase:t()*6.283,inclination:(t()-.5)*(t()<.12?1.4:.3),node:t()*6.283,periapsis:t()*6.283,eccentricity:p,style:o,seed:t()*100}),d.push(f);let m=Math.floor(t()*(o>=2?6:3));for(let e=0;e<m;e++){let i=c*(6+e*8+t()*4);s.push({id:u+`/moon-${e}`,kind:`moon`,name:`行星 ${r+1} 的卫星 ${e+1}`,radius:c*n(.035,.28),orbit:i,period:n(2,65),phase:t()*6.283,inclination:(t()-.5)*(t()<.2?5:1),node:t()*6.283,eccentricity:t()*.2,style:t()<.4?4:0,parent:l,seed:t()*100})}f*=1.7+t()*1.2}let p=t()<.3?0:1+Math.floor(t()*3),m=0;for(let r=0;r<p;r++){let i=d.length?d[Math.floor(t()*d.length)]*(1.2+t()*.3):n(.5,30),a=5+Math.floor(t()*15);for(let o=0;o<a;o++){let a=i*n(.88,1.12),o=m++;s.push({id:e.id+`/asteroid-${o}`,kind:`asteroid`,name:`小行星 ${o+1} · 带 ${r+1}`,radius:n(.3,250)/Hf,orbit:a,period:365.25*Math.sqrt(a**3/e.mass),phase:t()*6.283,inclination:(t()-.5)*.65,node:t()*6.283,periapsis:t()*6.283,eccentricity:t()*.25,style:0,seed:t()*100,resource:t()<.3?`金属/硅酸盐候选`:`硅酸盐/含水矿物候选`})}}let h=Math.floor(t()*7);for(let r=0;r<h;r++){let i=Math.max(3,f)*n(.4,2.4);s.push({id:e.id+`/comet-${r}`,kind:`comet`,name:`彗星 ${r+1}`,radius:n(.5,30)/Hf,orbit:i,period:365.25*Math.sqrt(i**3/e.mass),phase:t()*6.283,inclination:Math.acos(2*t()-1),node:t()*6.283,periapsis:t()*6.283,eccentricity:.35+t()*.6,style:4,seed:t()*100,resource:`冰/挥发物/尘埃候选`})}return{star:e,bodies:s,orientation:o,outerRadius:Math.max(e.radiusAU*20,f*.5,...s.map(e=>e.orbit*(1+(e.eccentricity??0))))}}function ip(e,t){let[n,r,i]=e,[a,o,s,c]=t,l=2*(o*i-s*r),u=2*(s*n-a*i),d=2*(a*r-o*n);return[n+c*l+o*d-s*u,r+c*u+s*l-a*d,i+c*d+a*u-o*l]}function ap(e,t){let n=e.eccentricity??0,r=e.orbit*(Math.cos(t)-n),i=e.orbit*Math.sqrt(1-n*n)*Math.sin(t),a=e.periapsis??0,o=e.node??0,s=r*Math.cos(a)-i*Math.sin(a),c=r*Math.sin(a)+i*Math.cos(a),l=c*Math.sin(e.inclination),u=c*Math.cos(e.inclination);return[s*Math.cos(o)-u*Math.sin(o),l,s*Math.sin(o)+u*Math.cos(o)]}function op(e,t){let n=e.phase+t%e.period/e.period*Math.PI*2,r=e.eccentricity??0,i=n;for(let e=0;e<12;e++)i-=(i-r*Math.sin(i)-n)/(1-r*Math.cos(i));return i}function sp(e,t,n){let r=e.bodies[t],i=ip(ap(r,op(r,typeof n==`function`?n(r.period):n)),e.orientation);if(r.parent!==void 0){let t=sp(e,r.parent,n);return i.map((e,n)=>e+t[n])}return i}function cp(e,t,n,r=256){let i=e.bodies[t],a=op(i,typeof n==`function`?n(i.period):n),o=i.parent===void 0?[0,0,0]:sp(e,i.parent,n),s=new Float64Array((r+1)*3);for(let t=0;t<=r;t++){let n=ip(ap(i,a+t/r*Math.PI*2),e.orientation);for(let e=0;e<3;e++)s[t*3+e]=n[e]+o[e]}return s}function lp(e,t,n=new Float32Array(e.length)){for(let r=0;r<e.length;r++)n[r]=e[r]-t[r%3];return n}function up(e,t,n,r,i=256){return lp(cp(e,t,n,i),r)}function dp(e){if(e>=.01)return`${e.toLocaleString(`zh-CN`,{maximumFractionDigits:2})} 光年`;let t=e*Vf;return t>=.01?`${t.toLocaleString(`zh-CN`,{maximumFractionDigits:3})} AU`:`${(t*Hf).toLocaleString(`zh-CN`,{maximumFractionDigits:0})} 千米`}function fp(e,t){let[n,r,i]=e,[a,o,s]=t.map(Math.sin),[c,l,u]=t.map(Math.cos);return[l*u*n-l*s*r+o*i,(a*o*u+c*s)*n+(-a*o*s+c*u)*r-a*l*i,(-c*o*u+a*s)*n+(c*o*s+a*u)*r+c*l*i]}var pp=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function mp(e,t,n,r){return e*n/(2*Math.tan(r*Math.PI/360)*Math.max(1e-12,t))}function hp(e,t=!1){return{orbit:pp(e,2,28),marker:t?1:pp(e,9,46),label:t?1:pp(e,24,85)}}function gp(e,t,n=2160,r=43){return Math.max(2,e*n/(2*Math.tan(r*Math.PI/360)*.8)/t)}function _p(e,t=[]){let n=t=>{let n=e.properties[t];return n.birth<=e.galaxy.emitted&&n.temperature>0&&n.luminosity>0},r=Array.from({length:Math.min(128,e.stellarCount)},(t,n)=>Math.floor(n*e.stellarCount/Math.min(128,e.stellarCount))).filter(n),i=new Map;if(!r.length){let t=e.properties.slice(0,e.stellarCount).findIndex((e,t)=>n(t));t>=0&&r.push(t)}let a=r.map(t=>{let n=Yf(e,t);return i.set(n.id,n.position),n}),o=[],s=new Set;for(let e of a){let t=a.filter(t=>t.id!==e.id).map(t=>({b:t,d:e.position.reduce((e,n,r)=>e+(n-t.position[r])**2,0)})).sort((e,t)=>e.d-t.d).slice(0,2);for(let{b:n}of t){let t=[e.id,n.id].sort().join(`|`);s.has(t)||(s.add(t),o.push({a:e.id,b:n.id,external:!1}))}}let c=a[0];if(!c)return{edges:o,positions:i};for(let e of t)i.set(e.id,e.position),o.push({a:c.id,b:e.id,external:!0});return{edges:o,positions:i}}function vp(e,t=e.edges,n=[0,0,0],r=1){let i=new Float32Array(t.length*6);return t.forEach((t,a)=>[t.a,t.b].forEach((t,o)=>{let s=e.positions.get(t);if(!s)throw Error(`航道端点不存在：${t}`);for(let e=0;e<3;e++)i[a*6+o*3+e]=(s[e]-n[e])*r})),i}function yp(e,t){let n=Math.max(0,Math.min(1,(4.5-e/Math.max(t,1e-20))/2.5));return n*n*(3-2*n)}function bp(e,t,n,r,i,a){if(n<=r)return i*4;let o=n*n-r*r,s=Math.hypot(e,t);return i/(2*Math.tan(a*Math.PI/360))*(r*Math.sqrt(s*s+o)+s*r*r/n)/o}function xp(e,t,n=4){let r=Math.max(e.x,Math.min(e.x+e.width,t.x)),i=Math.max(e.y,Math.min(e.y+e.height,t.y));return Math.hypot(r-t.x,i-t.y)<t.radius+n}function Sp(e,t,n){let r=[];for(let i of[...e].sort((e,t)=>Number(t.selected)-Number(e.selected))){let a=i.labelWidth,o=i.radius+16,s=[[i.x+o,i.y-12],[i.x-o-a,i.y-12],[i.x-a/2,i.y-o-24],[i.x-a/2,i.y+o],[i.x+o*.75,i.y-o*.75-24],[i.x-o*.75-a,i.y+o*.75]];for(let[o,c]of s){let s={x:o,y:c,width:a,height:24};if(o<8||o+a>t-8||c<155||c+24>n-128||e.some(e=>xp(s,e))||r.some(e=>s.x<e.x+e.width+6&&s.x+s.width+6>e.x&&s.y<e.y+e.height+5&&s.y+s.height+5>e.y))continue;let l={x:Math.max(o,Math.min(o+a,i.x)),y:Math.max(c,Math.min(c+24,i.y))},u=l.x-i.x,d=l.y-i.y,f=Math.max(1,Math.hypot(u,d));r.push({id:i.id,...s,from:{x:i.x+u/f*i.radius,y:i.y+d/f*i.radius},to:l});break}}return r}function Cp(e=1){return Ad(new yi({vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!1,blending:2,uniforms:{pointScale:{value:1},redshiftMode:{value:0},hiddenIndex:{value:-1},fade:{value:1},gain:{value:1},lyPerUnit:{value:e}},vertexShader:`attribute vec3 redshiftColor;uniform float redshiftMode;attribute float starIndex;varying vec3 tint;varying float present;uniform float hiddenIndex;uniform float lyPerUnit;uniform float pointScale;void main(){present=step(.5,abs(starIndex-hiddenIndex));tint=mix(color,redshiftColor,redshiftMode);vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;float d=length(p.xyz)*lyPerUnit;gl_PointSize=clamp(2.2+18./max(d,1.),2.2,8.)*pointScale;}`,fragmentShader:`varying vec3 tint;varying float present;uniform float fade;uniform float gain;void main(){float r=length(gl_PointCoord*2.-1.);if(r>1.)discard;float core=exp(-r*r*8.),halo=exp(-r*r*2.)*.22;gl_FragColor=vec4(tint*gain,(core+halo)*fade*.82*present);
#include <colorspace_fragment>
}`}),`(abs(starIndex-pickStar)<.1||pickObject>.5)?1.:0.`)}var wp=`float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}float fbm(vec3 p){float n=0.,a=.52;for(int i=0;i<5;i++){n+=a*noise(p);p=p*2.03+vec3(7.1,3.4,1.7);a*=.49;}return n;}`,Tp=`varying vec3 vN;varying vec3 vP;varying vec3 vLocal;void main(){vLocal=normalize(position);vec4 w=modelViewMatrix*vec4(position,1.);vP=w.xyz;vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*w;}`;function Ep(e,t,n){return Ad(new yi({uniforms:{style:{value:e},seed:{value:t},lightDirection:{value:new P(1,0,0)},starColour:{value:n??new Or(1,.85,.55)},isStar:{value:+!!n}},vertexShader:Tp,fragmentShader:`precision highp float;varying vec3 vN;varying vec3 vP;varying vec3 vLocal;uniform float style;uniform float seed;uniform float isStar;uniform vec3 lightDirection;uniform vec3 starColour;${wp}
void main(){vec3 p=vLocal;float n=fbm(p*5.+seed),fine=fbm(p*45.+seed);vec3 color;float water=0.;
if(isStar>.5){float cells=fbm(p*36.+seed);color=starColour*(.65+cells*.65);gl_FragColor=vec4(color,1.);return;}
if(style<.5){float scars=smoothstep(.57,.66,fbm(p*18.+seed));color=mix(vec3(.18,.15,.12),vec3(.59,.49,.35),n)*(1.-scars*.38);color+=fine*.065;}
else if(style<1.5){water=1.-smoothstep(.48,.52,n);vec3 land=mix(vec3(.11,.23,.12),vec3(.46,.39,.22),smoothstep(.52,.72,n));color=mix(land,vec3(.018,.095,.20)+fine*.025,water);float ice=smoothstep(.79,.94,abs(p.y)+noise(p*12.)*.06);color=mix(color,vec3(.79,.88,.9),ice);float clouds=smoothstep(.54,.69,fbm(p*8.+vec3(seed,0,0)));color=mix(color,vec3(.83,.89,.94),clouds*.85);}
else if(style<2.5){float band=.5+.5*sin(p.y*65.+fbm(p*8.+seed)*9.);color=mix(vec3(.35,.22,.14),vec3(.88,.73,.51),band*.6+n*.4);float storm=exp(-pow((p.y+.22)*12.,2.))*pow(max(0.,p.x),15.);color=mix(color,vec3(.56,.24,.12),storm*.6);}
else if(style<3.5){float band=.5+.5*sin(p.y*45.+n*8.);color=mix(vec3(.07,.27,.37),vec3(.46,.75,.8),band*.4+n*.6);}
else{float cracks=smoothstep(.53,.62,fbm(p*19.+seed));color=mix(vec3(.24,.31,.33),vec3(.82,.88,.91),n)*(1.-cracks*.45);}
vec3 normal=normalize(vN),light=normalize(mat3(viewMatrix)*lightDirection),view=normalize(-vP);float day=max(0.,dot(normal,light));float spec=pow(max(0.,dot(normal,normalize(light+view))),60.)*water*day*.5;gl_FragColor=vec4(color*(.035+.965*day)+vec3(spec),1.);}`}))}function Dp(e,t=!1){return Ad(new yi({transparent:!0,depthWrite:!1,side:1,blending:2,uniforms:{tint:{value:e},lightDirection:{value:new P(1,0,0)},stellar:{value:+!!t}},vertexShader:Tp,fragmentShader:`varying vec3 vN;varying vec3 vP;uniform vec3 tint;uniform vec3 lightDirection;uniform float stellar;void main(){vec3 n=normalize(vN),view=normalize(-vP);float rim=pow(1.-abs(dot(n,view)),stellar>.5?2.:3.);float light=stellar>.5?1.:.08+.92*max(0.,dot(n,normalize(mat3(viewMatrix)*lightDirection)));gl_FragColor=vec4(tint,rim*light*(stellar>.5?.25:.55));}`}))}var Op=class{compile;failed;states=new WeakMap;started=!1;constructor(e,t){this.compile=e,this.failed=t}beginFrame(){this.started=!1}ready(e){let t=this.states.get(e);if(t)return t.ready&&!t.cancelled;if(this.started)return!1;this.started=!0;let n={ready:!1,cancelled:!1};this.states.set(e,n);try{Promise.resolve(this.compile(e)).then(()=>{n.ready=!0,n.dispose?.()},e=>{n.cancelled=!0,n.ready=!0,n.dispose?.(),this.failed(e)})}catch(e){n.cancelled=!0,n.ready=!0,this.failed(e)}return!1}release(e,t){let n=this.states.get(e);n&&(n.cancelled=!0,!n.ready)?n.dispose??=t:t()}},kp=e=>{let t=new Set,n=new Set;e.traverse(e=>{let r=e;if(r.geometry&&t.add(r.geometry),r.material)for(let e of Array.isArray(r.material)?r.material:[r.material])n.add(e)});for(let e of t)e.dispose();for(let e of n)e.dispose();e.clear()},Ap=class{renderer;viewport;hooks;skyReadyAt=0;active=!1;get parentLocked(){return this.hooks.selection.locked()&&!this.selection.size}blend=0;entryTime=0;network={edges:[],positions:new Map};routeLine=null;incidentLine=null;endpointCloud=null;precisionRoutes=null;labelLayout=[];rings=[];leaders=[];connectors=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);medium=null;cat;centre=new P;rotation=new Rt;get camera(){return this.hooks.navigation.camera}skyCamera=new wi(43,1,1e-5,1e7);get navigation(){return this.hooks.navigation}sky=new Ni;systemScene=new Ni;pointCloud=null;systemReadyAt=0;itemReveals=[];system=null;systemStar=null;au=!1;days=0;orbitLines=[];entryMs=0;pendingExits=null;selectionMarkers=new Map;meshes=[];markers=[];get selection(){let e=this.hooks.selection;return{get values(){return e.read()},get primary(){return e.read().at(-1)??null},get size(){return e.read().length},clear(){e.replace([])},click(t,n=!1){let r=e.read();e.replace(n?r.some(e=>e.id===t.id)?r.filter(e=>e.id!==t.id):[...r,t]:[t])}}}warm;get goal(){return this.hooks.navigation.goal}set goal(e){this.hooks.navigation.goal=e}get pivot(){return this.hooks.navigation.pivot}set pivot(e){this.hooks.navigation.pivot=e}emptyNotice;panel;nav;overlay;hover;status;unformedView=null;viewWidth=1;viewHeight=1;depthPreview=null;depthRadiusLY=0;primaryPosition=new P;follow=!1;constructor(e,t,n){this.renderer=e,this.viewport=t,this.hooks=n,this.viewWidth=t.clientWidth,this.viewHeight=t.clientHeight,this.warm=new Op(t=>e.compileAsync(t,this.camera,this.systemScene),e=>{this.status.textContent=`图形准备失败：${String(e)}`}),this.panel=document.createElement(`section`),this.panel.className=`panel-section stellar-panel`,this.panel.hidden=!0,this.panel.innerHTML=`<div class="section-heading"><span>04</span><h2>星系内探索</h2></div><p class="tiny">确定性恒星取样 · 航道之外仍可进入</p><b id="stellarName"></b><p id="stellarDescription" class="tiny"></p><button id="stellarFocus" class="primary wide">靠近所选天体 ↗</button><button id="stellarExample" class="wide quiet">定位示例恒星</button><div id="stellarBodies"></div><button id="stellarCore" class="wide quiet">定位核区黑洞</button><button id="stellarRogue" class="wide quiet">定位流浪行星样本</button><small class="tiny">轨道读取下方共同时间；远端系统读取迟延年代。资源仅为候选样本，未接采矿玩法。</small>`,document.querySelector(`aside`).append(this.panel);let r=document.createElement(`button`);r.id=`stellarInfoToggle`,r.textContent=`天体详情`,r.title=`主动打开近景天体列表；缩放不切换侧栏`,document.querySelector(`.view-tools`).append(r),r.onclick=()=>{this.panel.hidden=!this.panel.hidden,this.panel.hidden||(this.panel.scrollIntoView({block:`start`}),this.updateInfo())},this.nav=document.createElement(`div`),this.nav.className=`depth-navigation stellar-navigation`,this.nav.hidden=!0,this.nav.innerHTML=`<small id="stellarStructure"></small><button data-stellar="back" class="stellar-nav-back" aria-label="返回宏观" title="返回宏观">↥</button><div><button data-back-depth="0">宇宙</button><span>›</span><button data-back-depth="1">超星系团</button><span>›</span><button data-back-depth="2">星系团</button><span>›</span><button data-back-depth="3">星系群</button><span>›</span><button data-stellar="galaxy">星系</button><span>›</span><button data-stellar="system">恒星系</button><span>›</span><button data-stellar="planet">行星</button></div><small id="stellarStatus">点击任意星点选择；滚轮继续靠近</small>`,t.append(this.nav),this.status=this.nav.querySelector(`#stellarStatus`),this.overlay=document.createElement(`div`),this.overlay.className=`stellar-labels`,this.overlay.hidden=!0,this.connectors.classList.add(`stellar-leaders`),this.overlay.append(this.connectors),t.append(this.overlay),this.emptyNotice=document.createElement(`div`),this.emptyNotice.id=`stellarEmptyNotice`,this.emptyNotice.className=`stellar-empty-notice`,this.emptyNotice.hidden=!0,this.emptyNotice.innerHTML=`<b>早期物质区 · 尚无可选恒星</b><p></p><button id="stellarObserveLocal">以此为观测地点，重新查看结构</button>`,t.append(this.emptyNotice),this.emptyNotice.querySelector(`button`).onclick=()=>document.getElementById(`observeHere`).click(),this.hover=document.createElement(`div`),this.hover.className=`stellar-hover`,this.hover.hidden=!0,t.append(this.hover),this.panel.querySelector(`#stellarFocus`).addEventListener(`click`,()=>this.focus()),this.panel.querySelector(`#stellarExample`).addEventListener(`click`,()=>this.example(`system`)),this.panel.querySelector(`#stellarCore`).addEventListener(`click`,()=>{this.active&&(this.choose({id:Yf(this.cat,this.cat.stellarCount).id,kind:`star`,star:this.cat.stellarCount}),this.focus())}),this.panel.querySelector(`#stellarRogue`).addEventListener(`click`,()=>{this.active&&this.cat.rogueCount&&(this.choose({id:Yf(this.cat,this.cat.stellarCount+1).id,kind:`star`,star:this.cat.stellarCount+1}),this.focus())}),this.nav.querySelectorAll(`[data-stellar]`).forEach(e=>e.onclick=()=>{let t=e.dataset.stellar;t===`back`?this.leave():t===`galaxy`?this.showGalaxy():this.example(t)}),this.nav.querySelectorAll(`[data-back-depth]`).forEach(e=>e.onclick=()=>{this.leave(),document.querySelector(`[data-depth="${e.dataset.backDepth}"]`)?.click()})}selectAt(e,t,n=!1,r=!1){let i=this.pick(e,t);i&&(this.choose(i,n),r&&this.focus())}selectDepth(e){this.choose(e,!0,!0)}setDepthPreview(e){this.depthPreview=e;let t=this.previewPosition();this.depthRadiusLY=e&&t?jd(this.camera,t,this.radius(e)*4)/(this.au?Vf:1):0}previewPosition(){return this.depthPreview?this.position(this.depthPreview):null}previewScreen(){let e=this.depthPreview;if(e?.kind===`star`&&this.au&&e.star!==this.systemStar?.index)return this.screen(new P(...Yf(this.cat,e.star).position),this.skyCamera);let t=e?this.position(e):null;return t?this.screen(t):null}depthCandidates(e,t){let n=this.viewport.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=[];if(this.au&&this.system)for(let[e,t]of this.system.bodies.entries()){if(!this.systemReadyAt||!this.meshes[e]?.visible||e>0&&(this.itemReveals[e]?.marker??0)<.2)continue;let o=new P(...sp(this.system,e,this.orbitTime)),s=this.screen(o),c=o.clone().applyMatrix4(this.camera.matrixWorldInverse),l=bp(c.x,c.y,-c.z,t.radius,n.height,this.camera.fov);s.visible&&Math.hypot(s.x-r,s.y-i)<Math.max(6,l)&&a.push({target:{id:t.id,kind:t.kind,star:this.system.star.index,body:e},depth:Math.max(0,-c.z-t.radius)})}let o=!!(this.au&&this.system&&mp(this.system.outerRadius,this.camera.position.length(),n.height,this.camera.fov)>160),s=this.au?this.skyCamera:this.camera,c=new P;for(let e=0;e<this.cat.count;e++){if(!this.starPickVisible(e)||o&&this.routePickWeight(e)<=.001)continue;c.fromArray(this.cat.positions,e*3);let t=this.screen(c,s);if(!t.visible||Math.hypot(t.x-r,t.y-i)>6)continue;let n=Yf(this.cat,e),l=-c.clone().applyMatrix4(s.matrixWorldInverse).z*(this.au?Vf:1);a.push({target:{id:n.id,kind:`star`,star:e},depth:l})}return a}depthSphere(){let e=this.depthPreview,t=e?this.position(e):null;return!this.hooks.depthActive()||!t?null:{center:t,radius:this.depthRadiusLY*(this.au?Vf:1)}}depthSphereSnapshot(){let e=this.depthSphere();return e?{center:e.center.toArray(),radius:e.radius,unit:this.au?`AU`:`ly`}:null}depthWorldRadius(){return(this.depthSphere()?.radius??0)/(this.au?Vf:1)*1e-9}clearSelection(){this.unformedView=null,this.selection.clear(),this.follow=!1,this.updateInfo()}hoverAtPointer(e,t){let n=this.pick(e,t);if(this.hover.hidden=!n,n){let r=this.viewport.getBoundingClientRect();this.hover.textContent=this.name(n)+` · 点击选中`,this.hover.style.left=Math.min(r.width-240,e-r.left+14)+`px`,this.hover.style.top=t-r.top+16+`px`}}hideHover(){this.hover.hidden=!0}focusPosition(){return this.targetPosition()??this.navigation.target}wheelAnchor(e,t,n){let r=this.selection.primary??(!this.parentLocked&&n?this.pick(e,t):null);return r?.kind===`star`&&this.loadIfNeeded(r.star),{id:r?.id??this.cat.galaxy.id,position:r?this.position(r):this.parentLocked?new P:this.navigation.target.clone(),radius:r?this.radius(r):1e-10,limit:this.cat.galaxy.radius*1e9*12*(this.au?Vf:1)}}worldProxy(e){let t=this.position(e);return t?(this.au&&t.divideScalar(Vf).add(new P(...this.systemStar.position)),this.toWorld(t)):this.toWorld(new P(...Yf(this.cat,e.star).position))}captureViewState(){let e=this.unformedView?.selection??this.selection.values,t=e.at(-1),n=t?this.position(t)??new P(...this.unformedView?.anchor??this.navigation.target.toArray()):this.navigation.target.clone();return{frame:this.au?`au`:`ly`,star:this.systemStar?.index??null,selection:e.map(e=>({...e})),anchor:n.toArray(),cameraOffset:this.camera.position.clone().sub(n).toArray(),targetOffset:this.navigation.target.clone().sub(n).toArray(),quaternion:this.camera.quaternion.toArray(),up:this.camera.up.toArray()}}restoreViewState(e){let t=e=>e>=0&&e<this.cat.count&&(e<this.cat.stellarCount?this.cat.properties[e].birth<=this.cat.galaxy.emitted:this.cat.availability.formed>0);e.star!==null&&e.star<this.cat.count&&(t(e.star)?this.loadSystem(e.star):this.systemStar=Yf(this.cat,e.star),e.frame===`au`&&this.toSystem());let n=e.selection.flatMap(e=>{if(!t(e.star))return[];if(e.kind===`star`)return[{...e}];let n=this.system?.star.index===e.star?this.system.bodies.findIndex(t=>t.id===e.id):-1;return n!==void 0&&n>=0?[{...e,body:n}]:[]});this.hooks.selection.replace(n);let r=e.selection.at(-1),i=r?n.find(e=>e.id===r.id):null,a=i?this.position(i)??new P(...e.anchor):new P(...e.anchor);if(this.navigation.cancelMotion(),this.camera.position.copy(a).add(new P(...e.cameraOffset)),this.navigation.target.copy(a).add(new P(...e.targetOffset)),this.camera.quaternion.fromArray(e.quaternion),this.camera.up.fromArray(e.up),this.camera.updateMatrixWorld(),this.navigation.pivot=null,i){let e=this.radius(i)*1.4,t=this.camera.position.clone().sub(a);t.length()<e&&this.camera.position.copy(a).addScaledVector(t.length()?t.normalize():new P(0,0,1),e)}this.unformedView=r&&!i?e:null,this.follow=!!i;let o=this.targetPosition();o&&this.primaryPosition.copy(o),this.updateInfo(),this.unformedView&&(this.status.textContent=`所选天体在这个年代尚未形成 · 保留镜头位置`)}worldPose(){return{camera:this.toWorld(this.galacticPosition()).toArray(),rotation:this.rotation.clone().multiply(this.camera.quaternion).toArray()}}get galaxyRadius(){return this.cat?.galaxy.radius??5e-5}get galaxyId(){return this.cat?.galaxy.id}enter(e,t,n,r,i,a=[]){let o=performance.now();this.active&&this.closeResources(),this.skyReadyAt=0,this.cat=tp(e),this.medium=this.hooks.medium(),this.centre.copy(t),this.rotation.setFromEuler(new Kn(...e.angles));let s=this.rotation.clone().invert();this.hooks.navigation.rebase(t,1e9,s),this.entryTime=performance.now();let c=new Xr;c.setAttribute(`position`,new I(this.cat.positions,3)),c.setAttribute(`color`,new F(this.cat.colors,3)),c.setAttribute(`redshiftColor`,new F(this.cat.redshiftColors,3)),c.setAttribute(`starIndex`,new I(Array.from({length:this.cat.count},(e,t)=>t),1)),this.pointCloud=new fa(c,Cp()),this.pointCloud.frustumCulled=!1,this.sky.add(this.pointCloud),this.pendingExits=a,this.system=null,this.systemStar=null,this.au=!1,this.days=this.hooks.clock.elapsedDays,this.follow=!1,this.active=!0,document.body.classList.add(`stellar-mode`),this.nav.hidden=this.overlay.hidden=!1,this.hooks.enter();let l=i?Xf(this.cat,i):-1;if(l>=0&&l<this.cat.count&&this.cat.properties[l].birth<=this.cat.galaxy.emitted&&(l<this.cat.stellarCount||this.cat.availability.formed>0)){this.loadSystem(l);let e=this.system.bodies.findIndex(e=>e.id===i);this.selection.click(e>0?{id:i,kind:this.system.bodies[e].kind,star:l,body:e}:{id:Yf(this.cat,l).id,kind:`star`,star:l})}let u=this.cat.availability.luminous===0;if(this.emptyNotice.hidden=this.cat.galaxy.emitted>=1.5,this.cat.galaxy.emitted<1.5){this.emptyNotice.querySelector(`b`).textContent=gd(this.cat.galaxy.emitted)+(u?` · 尚无可选恒星`:` · `+this.cat.availability.luminous+`个已形成发光样本`);let e=this.cat.galaxy.emitted*1e9;this.emptyNotice.querySelector(`p`).textContent=`所见年代约为宇宙第${e<1e6?(e/1e4).toFixed(1)+`万`:(e/1e8).toFixed(2)+`亿`}年。${e<38e4?`早于透明化：微波层显示最后散射面，周围等离子体是程序物质示意，不能当作直接收到的光学影像。`:this.cat.galaxy.emitted<.12?`暗时代：蓝灰云是中性气体分布示意，尚无恒星。`:`不规则亮结、气体团与已出生恒星按所见年代显示；未出生地址不发光。`}拉近镜头不会改变观测年代，参考线不代表该年代已有文明交通。`}for(let e of[`stellarCore`,`stellarRogue`])this.panel.querySelector(`#`+e).disabled=u;this.entryMs=performance.now()-o,this.updateInfo()}prepareNetwork(){let e=this.pendingExits;if(!e)return;this.pendingExits=null,this.network=_p(this.cat,e.map(e=>({id:e.id,position:e.position.toArray()}))),this.routeLine=new aa(new Xr().setAttribute(`position`,new F(vp(this.network),3)),new qi({color:`#7daec0`,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1})),Ad(this.routeLine.material),this.sky.add(this.routeLine),this.incidentLine=new aa(new Xr,new qi({color:`#7daec0`,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1})),Ad(this.incidentLine.material),this.sky.add(this.incidentLine);let t=[...this.network.positions.entries()],n=new Xr;n.setAttribute(`position`,new I(t.flatMap(([,e])=>e),3)),n.setAttribute(`color`,new I(t.flatMap(()=>[.45,.8,.86]),3)),n.setAttribute(`starIndex`,new I(t.map(([e])=>e.startsWith(this.cat.galaxy.id+`/star-`)?Number(e.split(`/star-`)[1]):-2),1)),this.endpointCloud=new fa(n,Cp()),this.sky.add(this.endpointCloud),this.systemStar&&this.bindSystemRoutes()}orbitTime=e=>this.hooks.clock.orbitalDays(this.cat.galaxy.emitted,e,$u(this.cat.galaxy.emitted,this.cat.galaxy.received),this.cat.galaxy.received);galacticPosition(){return this.au?this.camera.position.clone().divideScalar(Vf).add(new P(...this.systemStar.position)):this.camera.position.clone()}galacticTarget(){return this.au?this.navigation.target.clone().divideScalar(Vf).add(new P(...this.systemStar.position)):this.navigation.target.clone()}toWorld(e){return e.clone().applyQuaternion(this.rotation).multiplyScalar(1e-9).add(this.centre)}leave(e=!1){if(!this.active)return;e||this.hooks.navigation.cancelMotion(),this.au&&this.toGalactic(),this.hooks.navigation.rebase(new P,1e-9,this.rotation,this.centre);let t=this.camera.position.clone(),n=this.navigation.target.clone(),r=this.camera.quaternion.clone();this.active=!1,this.nav.hidden=this.overlay.hidden=this.hover.hidden=!0,document.body.classList.remove(`stellar-mode`),this.closeResources(),this.hooks.exit(t,n,r,e)}closeResources(){this.unformedView=null,this.depthPreview=null,this.emptyNotice.hidden=!0,this.medium=null;let e=this.sky;this.warm.release(e,()=>kp(e)),this.sky=new Ni;let t=this.systemScene;this.warm.release(t,()=>kp(t)),this.systemScene=new Ni,this.pointCloud=null,this.routeLine=this.incidentLine=this.precisionRoutes=null,this.endpointCloud=null,this.network={edges:[],positions:new Map},this.pendingExits=null,this.meshes=[],this.orbitLines=[],this.overlay.replaceChildren(this.connectors),this.connectors.replaceChildren(),this.rings=[],this.leaders=[],this.selectionMarkers.clear(),this.markers=[]}position(e){if(e.kind===`star`)return this.au?new P(...Yf(this.cat,e.star).position).sub(new P(...this.systemStar.position)).multiplyScalar(Vf):new P(...Yf(this.cat,e.star).position);if(!this.system||e.star!==this.system.star.index)return null;let t=new P(...sp(this.system,e.body,this.orbitTime));return this.au?t:t.divideScalar(Vf).add(new P(...this.system.star.position))}targetPosition(){return this.selection.primary?this.position(this.selection.primary):null}radius(e){let t=e.kind===`star`?Yf(this.cat,e.star).radiusAU:this.system?.bodies[e.body]?.radius??1e-5;return this.au?t:t/Vf}name(e){return e.kind===`star`?`${Yf(this.cat,e.star).type}${Yf(this.cat,e.star).objectKind===`star`?` · S${e.star}`:``}`:this.system?.bodies[e.body]?.name??e.id}choose(e,t=!1,n=!1){this.unformedView=null,this.selection.click(e,t);let r=this.selection.primary;r&&!n&&this.system?.star.index!==r.star&&(this.au&&this.toGalactic(),this.loadSystem(r.star)),this.goal=null,this.pivot=null,this.follow=!!r;let i=this.targetPosition();i&&this.primaryPosition.copy(i),this.updateInfo()}loadSystem(e){this.orbitLines=[],this.systemReadyAt=0,this.itemReveals=[];let t=this.systemScene;this.warm.release(t,()=>kp(t)),this.systemScene=new Ni,this.meshes=[],this.overlay.replaceChildren(this.connectors),this.connectors.replaceChildren(),this.rings=[],this.leaders=[],this.selectionMarkers.clear(),this.markers=[],this.systemStar=Yf(this.cat,e),this.system=rp(this.systemStar);for(let[t,n]of this.system.bodies.entries()){let r=n.kind===`star`||n.kind===`companion`,i=n.kind===`core`||this.systemStar.stage===`black-hole`,a=n.kind===`asteroid`||n.kind===`comet`,o=new Or(...this.systemStar.colour),s=new Ai,c=new ci(new ya(n.radius,a?12:64,a?8:40),i?new Mr({color:0}):Ep(n.style,n.seed,r?o:void 0));if(s.add(c),n.kind===`asteroid`||n.kind===`comet`){let e=new Xr().setAttribute(`position`,new I([0,0,0],3));s.add(new fa(e,new sa({color:n.kind===`comet`?`#a6d2d6`:`#a9a59a`,size:2,sizeAttenuation:!1,transparent:!0,opacity:.5})))}if(r&&!i){let e=new Xr;e.setAttribute(`position`,new I([0,0,0],3)),e.setAttribute(`color`,new I(this.systemStar.colour,3)),e.setAttribute(`redshiftColor`,new I(id(this.systemStar.temperature,$u(this.cat.galaxy.emitted,this.cat.galaxy.received)),3)),e.setAttribute(`starIndex`,new I([0],1)),s.add(new fa(e,Cp(1/Vf)))}if(!i&&(r||n.style===1||n.style===2)){let e=new ci(new ya(n.radius*(r?1.65:1.035),48,32),Dp(r?o:new Or(.16,.43,.8),r));s.add(e)}if(n.kind===`planet`&&n.style===2){let e=new ci(new va(n.radius*1.55,n.radius*2.6,96),new Mr({color:`#b6a17f`,transparent:!0,opacity:.34,side:2,depthWrite:!1}));e.rotation.x=Math.PI*.43,s.add(e)}for(let e of s.children)Ad(e.material);if(this.systemScene.add(s),this.meshes.push(s),n.orbit){let e=new ta(new Xr().setAttribute(`position`,new F(up(this.system,t,this.orbitTime,[0,0,0]),3)),new qi({color:n.kind===`comet`?`#7293aa`:n.kind===`moon`?`#536b76`:`#506b68`,transparent:!0,opacity:.4,depthWrite:!1}));Ad(e.material),e.userData.orbit=t,e.frustumCulled=!1,this.systemScene.add(e),this.orbitLines.push(e)}let l=document.createElement(`div`);l.className=`stellar-body-ring`,l.dataset.bodyId=n.id,l.hidden=!0,this.overlay.append(l),this.rings.push(l);let u=document.createElementNS(`http://www.w3.org/2000/svg`,`line`);u.dataset.bodyId=n.id,u.style.display=`none`,this.connectors.append(u),this.leaders.push(u);let d=document.createElement(`button`);d.className=`stellar-body-label`,d.dataset.bodyId=n.id,d.hidden=!0,d.textContent=n.name,d.onclick=r=>{r.stopPropagation(),this.choose({id:n.id,kind:n.kind,star:e,body:t},r.ctrlKey||r.shiftKey)},this.overlay.append(d),this.markers.push(d)}this.routeLine&&this.bindSystemRoutes();let n=this.panel.querySelector(`#stellarBodies`);n.replaceChildren();for(let[t,r]of this.system.bodies.entries()){let i=document.createElement(`button`);i.className=`stellar-body-entry`,i.textContent=r.name,i.title=r.id+(r.resource?` · `+r.resource:``),i.onclick=()=>{this.choose({id:r.id,kind:r.kind,star:e,body:t}),this.focus()},n.append(i)}}bindSystemRoutes(){this.precisionRoutes&&(this.systemScene.remove(this.precisionRoutes),this.precisionRoutes.geometry.dispose(),this.precisionRoutes.material.dispose());let e=e=>e.a===this.systemStar.id||e.b===this.systemStar.id,t=this.network.edges.filter(e);for(let[n,r]of[[this.routeLine,this.network.edges.filter(t=>!e(t))],[this.incidentLine,t]])n.geometry.dispose(),n.geometry=new Xr().setAttribute(`position`,new F(vp(this.network,[...r]),3));this.precisionRoutes=new aa(new Xr().setAttribute(`position`,new F(vp(this.network,t,this.systemStar.position,Vf),3)),new qi({color:`#7daec0`,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1})),Ad(this.precisionRoutes.material),this.systemScene.add(this.precisionRoutes)}toSystem(){if(this.au||!this.systemStar)return;this.hooks.navigation.rebase(new P(...this.systemStar.position),Vf),this.au=!0;let e=this.targetPosition();e&&this.primaryPosition.copy(e)}toGalactic(){if(!this.au)return;this.hooks.navigation.rebase(new P,1/Vf,new Rt,new P(...this.systemStar.position)),this.au=!1;let e=this.targetPosition();e&&this.primaryPosition.copy(e)}moveTo(e,t){this.hover.hidden=!0,this.hooks.navigation.moveTo(e,t)}focus(){if(!this.active)return;let e=this.selection.primary;e?(e.kind===`star`?(this.loadIfNeeded(e.star),this.toSystem(),this.moveTo(new P,this.system.outerRadius*1.45)):(this.toSystem(),this.moveTo(this.position(e),this.radius(e)*5)),this.follow=!0,this.primaryPosition.copy(this.targetPosition())):this.example(`system`)}loadIfNeeded(e){this.system?.star.index!==e&&(this.toGalactic(),this.loadSystem(e))}example(e){if(!this.active)return;if(!this.system||this.system.star.objectKind!==`star`||e===`planet`&&!this.system.bodies.some(e=>e.kind===`planet`)){let t=-1;for(let n=0;n<128;n++){let r=(Math.floor(this.cat.stellarCount*.6)+n*113)%this.cat.stellarCount,i=new P().fromArray(this.cat.positions,r*3),a=this.galacticPosition();if((![0,3].includes(Ff(this.cat.galaxy).family)||Math.abs(i.z)<Ff(this.cat.galaxy).thickness*this.cat.galaxy.radius*1e9*.55)&&i.length()>this.cat.galaxy.radius*1e9*.16&&i.length()<this.cat.galaxy.radius*1e9*.66&&i.dot(a)>i.length()*a.length()*.2&&this.cat.properties[r].stage===`main`&&(e===`system`||rp(Yf(this.cat,r)).bodies.some(e=>e.kind===`planet`))){t=r;break}}if(t<0&&(t=Jf(this.cat,e===`planet`)),t<0){this.status.textContent=this.cat.availability.luminous===0?`所见早期尚无已形成恒星 · 可切换当地观测`:`当前样本没有符合条件的行星系统`,this.showGalaxy();return}this.choose({id:Yf(this.cat,t).id,kind:`star`,star:t})}let t=this.system.star;if(this.toSystem(),e===`system`)this.choose({id:t.id,kind:`star`,star:t.index}),this.moveTo(new P,this.system.outerRadius*1.45);else{let e=this.system.bodies.findIndex(e=>e.kind===`planet`&&e.style===1),n=e>=0?e:this.system.bodies.findIndex(e=>e.kind===`planet`),r=this.system.bodies[n];this.choose({id:r.id,kind:`planet`,star:t.index,body:n}),this.moveTo(this.position(this.selection.primary),r.radius*5)}}showGalaxy(){this.toGalactic(),this.moveTo(new P,this.cat.galaxy.radius*1e9*2.7),this.follow=!1}screen(e,t=this.camera){let n=e.clone().project(t);return{x:(n.x*.5+.5)*this.viewWidth,y:(-.5*n.y+.5)*this.viewHeight,visible:n.z>-1&&n.z<1&&Math.abs(n.x)<1&&Math.abs(n.y)<1}}routePickWeight(e){let t=e<this.cat.stellarCount?this.cat.galaxy.id+`/star-`+e:Yf(this.cat,e).id;if(!this.network.positions.has(t))return 0;let n=0;for(let e of this.network.edges)if(e.a===t||e.b===t){let t=this.systemStar&&(e.a===this.systemStar.id||e.b===this.systemStar.id);for(let e of t?[this.incidentLine,this.precisionRoutes]:[this.routeLine])e?.visible&&(n=Math.max(n,e.material.opacity))}return n}starPickVisible(e){let t=fd.value?this.cat.redshiftColors:this.cat.colors,n=this.pointCloud?.material?.uniforms,r=n?.hiddenIndex?.value===e,i=Math.max(t[e*3],t[e*3+1],t[e*3+2]);return Yd(this.pointCloud?.visible&&!r?(n?.gain?.value??1)*(n?.fade?.value??this.blend):0,i)||this.routePickWeight(e)>.001}pick(e,t){let n=this.viewport.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=11,o=null;if(this.au&&this.system){let e=1/0;for(let[t,n]of this.system.bodies.entries()){if(!this.systemReadyAt||!this.meshes[t]?.visible||t>0&&(this.itemReveals[t]?.marker??0)<.2)continue;let a=new P(...sp(this.system,t,this.orbitTime)),s=this.screen(a);if(!s.visible)continue;let c=n.radius*this.viewport.clientHeight/(Math.max(1e-10,a.distanceTo(this.camera.position))*.79),l=Math.hypot(s.x-r,s.y-i);l<Math.max(9,c)&&l/Math.max(9,c)<e&&(e=l/Math.max(9,c),o={id:n.id,kind:n.kind,star:this.system.star.index,body:t})}if(o)return o}let s=!!(this.au&&this.system&&mp(this.system.outerRadius,this.camera.position.length(),this.viewport.clientHeight,this.camera.fov)>160),c=this.cat.positions,l=new P;for(let e=0;e<this.cat.count;e++){if(!this.starPickVisible(e)||s&&this.routePickWeight(e)<=.001)continue;l.fromArray(c,e*3);let t=this.screen(l,this.au?this.skyCamera:this.camera);if(!t.visible)continue;let n=Math.hypot(t.x-r,t.y-i);n<a&&(a=n,o={id:Yf(this.cat,e).id,kind:`star`,star:e})}return o}updateInfo(){if(!this.cat)return;let e=this.selection.primary;this.panel.querySelector(`#stellarName`).textContent=e?this.name(e):this.cat.galaxy.id+` · `+(this.cat.galaxy.emitted<1.5?gd(this.cat.galaxy.emitted):Ff(this.cat.galaxy).name),this.panel.querySelector(`#stellarDescription`).textContent=this.cat.availability.luminous===0?`当前收到的历史影像尚无恒星，可更换观测地点或观察其它区域。`:e?`${e.id} · ${e.kind===`star`?`目录连线仅为测绘参考，不限制自由飞行`:`半径 ${(this.radius(e)*(this.au?1:Vf)*Hf).toLocaleString(`zh-CN`,{maximumFractionDigits:0})} km`}`:`本星系 ${this.cat.stellarCount.toLocaleString()} 份星族取样，另有核区黑洞和${this.cat.rogueCount}颗流浪行星。非实测人口。`,this.status.textContent=this.cat.availability.luminous===0?`所见早期尚无已形成恒星 · 可切换当地观测`:e?`已锁定 ${this.selection.size} 个 · 悬停不改锁定 · 右键单击解除`:this.parentLocked?`保持星系焦点 · 点击恒星切换锁定`:`点击任意星点选择；滚轮靠近，双击查看`}update(e){if(!this.active)return;this.viewWidth=this.viewport.clientWidth,this.viewHeight=this.viewport.clientHeight,this.warm.beginFrame(),this.days=this.hooks.clock.elapsedDays,this.pendingExits&&document.getElementById(`network`).checked&&this.prepareNetwork();let t=this.targetPosition();if(this.follow&&t){let e=t.clone().sub(this.primaryPosition);this.hooks.navigation.translate(e),this.primaryPosition.copy(t)}if(!this.hooks.depthActive()){let e=gp(this.system?.outerRadius??0,Vf,this.viewport.clientHeight,this.camera.fov);if(!this.au&&this.systemStar&&this.camera.position.distanceTo(new P(...this.systemStar.position))<e?this.toSystem():this.au&&this.camera.position.length()>63241.0770843*e*1.5&&this.toGalactic(),!this.au&&this.camera.position.length()>this.cat.galaxy.radius*1e9*4.5&&(!this.goal||this.goal.camera.length()>this.camera.position.length())){this.leave(!0);return}}let n=this.viewHeight,r=this.viewWidth,i=this.targetPosition()??this.navigation.target,a=Math.max(1e-12,this.camera.position.distanceTo(i));this.camera.aspect=r/n,this.camera.near=Math.max(1e-10,Math.min(this.au?.001:.01,a*1e-4)),this.camera.far=this.au?Math.max(1e4,a*4):Math.max(1e6,this.cat.galaxy.radius*1e9*8),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld();let o=this.galacticPosition(),s=this.rotation.clone().multiply(this.camera.quaternion),c=this.warm.ready(this.sky);c&&!this.skyReadyAt&&(this.skyReadyAt=e),this.blend=yp(o.length(),this.cat.galaxy.radius*1e9)*It.smoothstep(e-this.entryTime,0,350)*(c?It.smoothstep(e-this.skyReadyAt,0,260):0);let l=this.au?i.clone().divideScalar(Vf).add(new P(...this.systemStar.position)):i.clone(),u=document.getElementById(`earlyLegend`);u.textContent=(this.cat.galaxy.emitted<1.5?gd(this.cat.galaxy.emitted)+` · `:``)+Sd();let d=this.depthSphere(),f=d?this.au?d.center.clone().divideScalar(Vf).add(new P(...this.systemStar.position)):d.center:null,p=this.hooks.background(this.toWorld(o),s,this.toWorld(l),a*(this.au?1/Vf:1)*1e-9*2*Math.tan(this.camera.fov*Math.PI/360),this.blend,f?this.toWorld(f):null);this.skyCamera.position.copy(o),this.skyCamera.quaternion.copy(this.camera.quaternion),this.skyCamera.up.copy(this.camera.up),this.skyCamera.aspect=this.camera.aspect,this.skyCamera.near=1e-6,this.skyCamera.far=Math.max(1e6,this.cat.galaxy.radius*1e9*8),this.skyCamera.updateProjectionMatrix(),this.skyCamera.updateMatrixWorld();let m=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.clearDepth();let h=document.getElementById(`network`).checked,g=this.systemStar?o.distanceTo(new P(...this.systemStar.position)):1/0,_=this.au?1-It.smoothstep(g,1.2,2):0,v=It.smoothstep(g,.15,3);if(this.routeLine&&(this.routeLine.visible=h,this.routeLine.material.opacity=.23*this.blend*v),this.incidentLine&&(this.incidentLine.visible=h,this.incidentLine.material.opacity=.23*this.blend*(1-_)),this.precisionRoutes&&(this.precisionRoutes.visible=h&&this.au,this.precisionRoutes.material.opacity=.23*_),this.endpointCloud){this.endpointCloud.visible=h;let e=this.endpointCloud.material.uniforms;e.fade.value=this.blend*v,e.hiddenIndex.value=this.au?this.systemStar.index:-1}if(this.pointCloud){let e=this.pointCloud.material.uniforms;e.pointScale.value=1+this.blend,e.gain.value=p*Lf(o.length(),this.cat.galaxy.radius*1e9),e.fade.value=this.blend,e.hiddenIndex.value=this.au&&this.systemReadyAt?this.systemStar.index:-1,e.redshiftMode.value=+(fd.value>0)}let y=this.depthSphere(),b=y?this.au?y.center.clone().divideScalar(Vf).add(new P(...this.systemStar.position)):y.center:null,x=y?y.radius/(this.au?Vf:1):0;this.medium?.setPickSphere(b,x);let S=fd.value>0?id(6500,$u(this.cat.galaxy.emitted,this.cat.galaxy.received)):[1,1,1];if(this.medium?.render(this.skyCamera,r,n,1,new P(...S).multiplyScalar(p)),wd(this.skyCamera,b,x),c&&this.renderer.render(this.sky,this.skyCamera),this.system){let t=this.system.bodies.map((e,t)=>new P(...sp(this.system,t,this.orbitTime))),i=this.warm.ready(this.systemScene);i&&!this.systemReadyAt&&(this.systemReadyAt=e);let o=i?It.smoothstep(e-this.systemReadyAt,0,240):0,s=this.system.bodies.reduce((e,t)=>t.kind===`planet`?Math.max(e,t.orbit):e,0);this.itemReveals=this.system.bodies.map((e,r)=>{let i=t[r],a=this.camera.position.distanceTo(i),c=hp(mp(e.orbit||s||1,a,n,this.camera.fov),this.selection.values.some(t=>t.id===e.id));return{orbit:c.orbit*o,marker:c.marker*o,label:c.label*o}});for(let[e,n]of this.system.bodies.entries()){let r=this.meshes[e],i=t[e];r.position.copy(i),r.children[0].rotation.y=n.seed+this.orbitTime(1)*2*Math.PI;let a=i.clone().negate().normalize();for(let e of r.children){let t=e.material;if(kd(t,this.depthPreview?.id===n.id||this.selection.values.some(e=>e.id===n.id)),t.uniforms?.lightDirection&&t.uniforms.lightDirection.value.copy(a),t.uniforms?.redshiftMode&&(t.uniforms.redshiftMode.value=+(fd.value>0)),t.uniforms?.isStar?.value===1){let e=fd.value>0?$u(this.cat.galaxy.emitted,this.cat.galaxy.received):0;t.uniforms.starColour.value.setRGB(...id(this.systemStar.temperature,e))}}r.visible=this.au;for(let t of r.children){let r=t.material;r instanceof sa&&n.kind!==`star`&&n.kind!==`companion`&&(r.opacity=.5*this.itemReveals[e].marker)}}for(let e of this.orbitLines){let t=e.userData.orbit,n=this.system.bodies[t],r=this.selection.values.some(e=>e.id===n.id);if(e.material.opacity=.4*this.itemReveals[t].orbit,e.visible=this.au&&this.itemReveals[t].orbit>.001&&(n.kind!==`asteroid`||r)&&a>this.radius(this.selection.primary??{id:``,kind:`star`,star:this.system.star.index})*15,e.visible){let n=e.geometry.getAttribute(`position`);e.userData.days!==this.days&&(e.userData.points=cp(this.system,t,this.orbitTime),e.userData.days=this.days,e.userData.eye=null);let r=e.userData.eye;r&&r.equals(this.camera.position)||(lp(e.userData.points,this.camera.position.toArray(),n.array),n.needsUpdate=!0,e.position.copy(this.camera.position),e.userData.eye=this.camera.position.clone())}}this.au&&i&&(this.renderer.clearDepth(),wd(this.camera,y?.center??null,y?.radius??0),this.renderer.render(this.systemScene,this.camera));let c=[];for(let[e,r]of this.system.bodies.entries()){let i=t[e],a=this.screen(i),o=this.selection.values.some(e=>e.id===r.id),s=this.au&&a.visible&&this.itemReveals[e].marker>.001&&(r.kind!==`asteroid`||o);if(this.rings[e].hidden=!s,this.markers[e].hidden=!0,this.leaders[e].style.display=`none`,!s)continue;let l=i.clone().applyMatrix4(this.camera.matrixWorldInverse),u=Math.max(7,bp(l.x,l.y,-l.z,r.radius,n,this.camera.fov)+5),d=this.rings[e];d.style.left=a.x+`px`,d.style.top=a.y+`px`,d.style.width=d.style.height=u*2+`px`,d.classList.toggle(`selected`,o),d.style.opacity=String(this.itemReveals[e].marker*Ed(i,y?.center??i,y?.radius??0,this.camera.position,o)),this.itemReveals[e].label>.05&&c.push({id:r.id,x:a.x,y:a.y,radius:u,selected:o,labelWidth:Math.max(112,20+Array.from(r.name).reduce((e,t)=>e+(t.charCodeAt(0)<128?7:12),0))})}this.labelLayout=Sp(c,r,n);for(let e of this.labelLayout){let n=this.system.bodies.findIndex(t=>t.id===e.id),r=this.markers[n],i=this.leaders[n];r.hidden=!1;let a=t[n],o=Ed(a,y?.center??a,y?.radius??0,this.camera.position,this.selection.values.some(t=>t.id===e.id));r.style.opacity=String(this.itemReveals[n].label*o),i.style.opacity=String(this.itemReveals[n].label*o),r.style.pointerEvents=`auto`,r.style.left=e.x+`px`,r.style.top=e.y+`px`,r.style.width=e.width+`px`,r.classList.toggle(`selected`,this.selection.values.some(t=>t.id===e.id)),i.style.display=``,i.setAttribute(`x1`,String(e.from.x)),i.setAttribute(`y1`,String(e.from.y)),i.setAttribute(`x2`,String(e.to.x)),i.setAttribute(`y2`,String(e.to.y))}}let C=new Set(this.selection.values.map(e=>e.id));for(let[e,t]of this.selectionMarkers)C.has(e)||(t.remove(),this.selectionMarkers.delete(e));for(let e of this.selection.values){let t=this.selectionMarkers.get(e.id);if(!t){t=document.createElement(`div`),t.className=`stellar-selection-marker`;let n=document.createElement(`small`);n.textContent=this.name(e),t.append(n),this.overlay.append(t),this.selectionMarkers.set(e.id,t)}let n=this.position(e),r=n?this.screen(n):null;t.hidden=!r?.visible||this.au&&this.itemReveals[e.body??0]?.marker>.99,r&&(t.style.left=r.x+`px`,t.style.top=r.y+`px`)}this.renderer.autoClear=m;let w=2*(a*(this.au?1/Vf:1))*Math.tan(this.camera.fov*Math.PI/360)*120/n,T=10**Math.floor(Math.log10(Math.max(1e-24,w))),ee=(w/T>=5?5:w/T>=2?2:1)*T;document.getElementById(`scaleLabel`).textContent=dp(ee)+` · 焦点平面标尺`,document.getElementById(`scaleRule`).style.width=120*ee/w+`px`,document.getElementById(`viewLabel`).textContent=this.au?this.selection.primary?.kind===`planet`||this.selection.primary?.kind===`moon`?`行星与卫星近景`:`恒星系 · 真实相对尺度`:`星系内部 · 三维恒星取样`,this.nav.querySelector(`#stellarStructure`).textContent=`${this.cat.galaxy.id} · ${this.au?`恒星系`:this.cat.availability.luminous===0?`早期物质区`:`立体星系`}${this.hooks.clock.playing?` · 共同时间 +${this.days.toFixed(1)} 天`:``}`}get transitionBlend(){return this.blend}snapshot(){return{viewState:this.active?this.captureViewState():null,missingSelected:!!this.unformedView,availability:this.cat?.availability,observationMode:dd.value?`current`:`lightcone`,observedEpoch:this.cat?.galaxy.emitted,itemReveals:this.itemReveals,medium:this.medium?.snapshot(),hostStars:{count:this.cat?.stellarCount,visible:!!this.pointCloud?.visible,hiddenIndex:(this.pointCloud?.material)?.uniforms.hiddenIndex.value,gain:(this.pointCloud?.material)?.uniforms.gain.value},navigation:this.hooks.navigation.snapshot(),entryMs:this.entryMs,clock:this.hooks.clock.snapshot(),population:this.cat?Object.fromEntries([...new Set(this.cat.properties.map(e=>e.type))].map(e=>[e,this.cat.properties.filter(t=>t.type===e).length])):null,orbitErrors:this.orbitLines.filter(e=>e.visible).map(e=>{let t=e.geometry.getAttribute(`position`),n=new P().fromBufferAttribute(t,0).add(e.position),r=new P(...sp(this.system,e.userData.orbit,this.orbitTime));return{id:this.system.bodies[e.userData.orbit].id,errorAU:n.distanceTo(r)}}),ownedObjects:this.sky.children.length+this.systemScene.children.length,worldCamera:this.active?this.toWorld(this.galacticPosition()).toArray():null,worldTarget:this.active?this.toWorld(this.galacticTarget()).toArray():null,worldRotation:this.active?this.rotation.clone().multiply(this.camera.quaternion).toArray():null,blend:this.blend,parentLocked:this.parentLocked,labels:this.labelLayout,routes:this.routeSnapshot(),active:this.active,galaxy:this.cat?.galaxy.id,mode:this.au?`system`:`galaxy`,stars:this.cat?.count,selection:this.selection.values,system:this.system?{star:this.system.star.id,outerRadius:this.system.outerRadius,orientation:this.system.orientation,bodies:this.system.bodies.map((e,t)=>({id:e.id,kind:e.kind,radiusAU:e.radius,position:sp(this.system,t,this.orbitTime)}))}:null,days:this.days,camera:this.camera.position.toArray(),target:this.navigation.target.toArray(),screens:this.active?this.screens():[]}}routeSnapshot(){if(!this.active||!this.routeLine)return[];let e=this.au?this.precisionRoutes:this.routeLine;if(!e)return[];let t=this.au?this.network.edges.filter(e=>e.a===this.systemStar.id||e.b===this.systemStar.id):this.network.edges.filter(e=>!this.systemStar||e.a!==this.systemStar.id&&e.b!==this.systemStar.id),n=e.geometry.getAttribute(`position`),r=this.au?this.camera:this.skyCamera;return t.slice(0,24).map((e,t)=>({a:e.a,b:e.b,ends:[e.a,e.b].map((e,i)=>{let a=new P().fromBufferAttribute(n,t*2+i),o=new P(...this.network.positions.get(e));return this.au&&o.sub(new P(...this.systemStar.position)).multiplyScalar(Vf),{id:e,line:this.screen(a,r),star:this.screen(o,r)}})}))}screens(){if(this.au&&this.system)return this.system.bodies.map((e,t)=>({id:e.id,kind:e.kind,...this.screen(new P(...sp(this.system,t,this.orbitTime)))}));let e=[];for(let t=0;t<this.cat.count;t++){let n=this.screen(new P().fromArray(this.cat.positions,t*3));if(n.visible&&n.x>100&&n.x<this.viewport.clientWidth-100&&n.y>180&&n.y<this.viewport.clientHeight-190&&(e.push({id:Yf(this.cat,t).id,kind:`star`,...n}),e.length>=100))break}return e}},jp=0,Mp=class extends ut{element;camera=new wi(43,1,.005,1200);target=new P;pivot=null;goal=null;autoRotate=!1;autoRotateSpeed=.22;rotateSpeed=.6;enabled=!0;drag=null;momentum=new Lt;inputFrames=0;constructor(e){super(),this.element=e,jp++,e.addEventListener(`pointerdown`,t=>{t.button===0&&this.enabled&&(this.dispatchEvent({type:`start`}),this.momentum.set(0,0),this.drag={id:t.pointerId,x:t.clientX,y:t.clientY},e.setPointerCapture(t.pointerId))}),e.addEventListener(`pointermove`,t=>{if(!this.drag||this.drag.id!==t.pointerId)return;let n=t.clientX-this.drag.x,r=t.clientY-this.drag.y;this.drag.x=t.clientX,this.drag.y=t.clientY;let i=2*Math.PI/Math.max(1,e.clientHeight)*this.rotateSpeed;this.momentum.set(-n*i,-r*i),this.rotate(this.momentum.x,this.momentum.y),this.inputFrames++});let t=t=>{this.drag?.id===t.pointerId&&(this.drag=null,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId))};e.addEventListener(`pointerup`,t),e.addEventListener(`pointercancel`,t)}get zoomPose(){return this.goal?{camera:this.goal.camera.toArray(),target:this.goal.target.toArray()}:null}set zoomPose(e){this.goal=e?{camera:new P(...e.camera),target:new P(...e.target)}:null}getDistance(){return this.camera.position.distanceTo(this.target)}rotate(e,t,n=this.pivot??this.target){let r=new P(0,1,0).applyQuaternion(this.camera.quaternion),i=new P(1,0,0).applyQuaternion(this.camera.quaternion),a=new Rt().setFromAxisAngle(r,e).premultiply(new Rt().setFromAxisAngle(i,t));this.camera.position.sub(n).applyQuaternion(a).add(n),this.target.sub(n).applyQuaternion(a).add(n),this.camera.quaternion.premultiply(a),this.camera.up.applyQuaternion(a)}orbitPixels(e,t,n){this.cancelMotion();let r=2*Math.PI/Math.max(1,this.element.clientHeight)*this.rotateSpeed;this.rotate(-e*r,-t*r,n),this.inputFrames++}update(e=1/60){if(this.goal){let t=1-Math.exp(-e/.08);this.camera.position.lerp(this.goal.camera,t),this.target.lerp(this.goal.target,t),this.camera.position.distanceTo(this.goal.camera)<Math.max(1e-24,this.getDistance()*1e-6)&&(this.goal=null)}if(!this.drag&&this.momentum.lengthSq()>1e-12){let t=Math.exp(-e*13);this.rotate(this.momentum.x*e*60,this.momentum.y*e*60),this.momentum.multiplyScalar(t)}return this.autoRotate&&this.rotate(-this.autoRotateSpeed*e*.1,0),this.getDistance()>1e-25&&this.camera.lookAt(this.target),this.camera.updateMatrixWorld(),!0}stopInertia(){this.momentum.set(0,0)}cancelMotion(){this.goal=null,this.momentum.set(0,0)}moveTo(e,t){let n=this.camera.position.clone().sub(this.target).normalize();this.goal={camera:e.clone().addScaledVector(n,t),target:e.clone()},this.pivot=null,this.momentum.set(0,0)}translate(e){this.camera.position.add(e),this.target.add(e),this.pivot?.add(e),this.goal&&(this.goal.camera.add(e),this.goal.target.add(e))}rebase(e,t,n=new Rt,r=new P){let i=i=>i.sub(e).multiplyScalar(t).applyQuaternion(n).add(r);i(this.camera.position),i(this.target),this.pivot&&i(this.pivot),this.goal&&(i(this.goal.camera),i(this.goal.target)),this.camera.quaternion.premultiply(n),this.camera.up.applyQuaternion(n),this.camera.updateMatrixWorld()}snapshot(){return{controllerCount:jp,dragging:!!this.drag,inputFrames:this.inputFrames,goal:this.zoomPose}}},Np=new ln,Pp=new P,Fp=class extends za{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new I([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new I([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new $a(t,6,1);return this.setAttribute(`instanceStart`,new Ii(n,3,0)),this.setAttribute(`instanceEnd`,new Ii(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new $a(t,6,1);return this.setAttribute(`instanceColorStart`,new Ii(n,3,0)),this.setAttribute(`instanceColorEnd`,new Ii(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ba(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Np.setFromBufferAttribute(t),this.boundingBox.union(Np))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)Pp.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(Pp)),Pp.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(Pp));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}};L.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Lt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},vo.line={uniforms:gi.merge([L.common,L.fog,L.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Ip=class extends yi{constructor(e){super({type:`LineMaterial`,uniforms:gi.clone(vo.line.uniforms),vertexShader:vo.line.vertexShader,fragmentShader:vo.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}},Lp=new rn,Rp=new P,zp=new P,Bp=new rn,Vp=new rn,Hp=new rn,Up=new P,Wp=new In,Gp=new fo,Kp=new P,qp=new ln,Jp=new Dn,Yp=new rn,Xp,Zp;function Qp(e,t,n){return Yp.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),Yp.multiplyScalar(1/Yp.w),Yp.x=Zp/n.width,Yp.y=Zp/n.height,Yp.applyMatrix4(e.projectionMatrixInverse),Yp.multiplyScalar(1/Yp.w),Math.abs(Math.max(Yp.x,Yp.y))}function $p(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){Gp.start.fromBufferAttribute(i,r),Gp.end.fromBufferAttribute(a,r),Gp.applyMatrix4(n);let o=new P,s=new P;Xp.distanceSqToSegment(Gp.start,Gp.end,s,o),s.distanceTo(o)<Zp*.5&&t.push({point:s,pointOnLine:o,distance:Xp.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,uv1:null})}}function em(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;Xp.at(1,Hp),Hp.w=1,Hp.applyMatrix4(t.matrixWorldInverse),Hp.applyMatrix4(r),Hp.multiplyScalar(1/Hp.w),Hp.x*=i.x/2,Hp.y*=i.y/2,Hp.z=0,Up.copy(Hp),Wp.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(Bp.fromBufferAttribute(s,t),Vp.fromBufferAttribute(c,t),Bp.w=1,Vp.w=1,Bp.applyMatrix4(Wp),Vp.applyMatrix4(Wp),Bp.z>u&&Vp.z>u)continue;if(Bp.z>u){let e=Bp.z-Vp.z,t=(Bp.z-u)/e;Bp.lerp(Vp,t)}else if(Vp.z>u){let e=Vp.z-Bp.z,t=(Vp.z-u)/e;Vp.lerp(Bp,t)}Bp.applyMatrix4(r),Vp.applyMatrix4(r),Bp.multiplyScalar(1/Bp.w),Vp.multiplyScalar(1/Vp.w),Bp.x*=i.x/2,Bp.y*=i.y/2,Vp.x*=i.x/2,Vp.y*=i.y/2,Gp.start.copy(Bp),Gp.start.z=0,Gp.end.copy(Vp),Gp.end.z=0;let o=Gp.closestPointToPointParameter(Up,!0);Gp.at(o,Kp);let l=It.lerp(Bp.z,Vp.z,o),d=l>=-1&&l<=1,f=Up.distanceTo(Kp)<Zp*.5;if(d&&f){Gp.start.fromBufferAttribute(s,t),Gp.end.fromBufferAttribute(c,t),Gp.start.applyMatrix4(a),Gp.end.applyMatrix4(a);let r=new P,i=new P;Xp.distanceSqToSegment(Gp.start,Gp.end,i,r),n.push({point:i,pointOnLine:r,distance:Xp.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,uv1:null})}}}var tm=class extends ci{constructor(e=new Fp,t=new Ip({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)Rp.fromBufferAttribute(t,e),zp.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+Rp.distanceTo(zp);let i=new $a(r,2,1);return e.setAttribute(`instanceDistanceStart`,new Ii(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new Ii(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;Xp=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;Zp=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),Jp.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?Zp*.5:Qp(r,Math.max(r.near,Jp.distanceToPoint(Xp.origin)),s.resolution),Jp.radius+=c,Xp.intersectsSphere(Jp)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),qp.copy(o.boundingBox).applyMatrix4(a);let l;l=n?Zp*.5:Qp(r,Math.max(r.near,qp.distanceToPoint(Xp.origin)),s.resolution),qp.expandByScalar(l),Xp.intersectsBox(qp)!==!1&&(n?$p(this,t):em(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Lp),this.material.uniforms.resolution.value.set(Lp.z,Lp.w))}},nm=256,rm=class{data;dotBorn;preparation;object;material;geometry=new Xr;models=new Map;selected=new Set;capacity;at=0;attrs=new Map;builds=0;buildMs=0;maxSlice=0;lastPlan=0;lastCamera=new P(1/0,1/0,1/0);pending=[];constructor(e,t,n,r,i){this.data=e,this.dotBorn=r,this.preparation=i,this.capacity=Math.min(nm,e.galaxies.length);let a=this.capacity*512;for(let[e,t]of[[`position`,3],[`center`,3],[`color`,3],[`redshiftColor`,3],[`radius`,1],[`seed`,1],[`selectGroup`,1],[`groupSlot`,1],[`memberSelected`,1],[`born`,1]]){let n=new F(new Float32Array(a*t),t).setUsage(et);this.geometry.setAttribute(e,n),this.attrs.set(e,n)}this.geometry.setDrawRange(0,0),this.material=new yi({uniforms:t,transparent:!0,depthWrite:!1,depthTest:!1,blending:2,vertexColors:!0,vertexShader:`${su}attribute vec3 center,redshiftColor;attribute float radius,seed,selectGroup,groupSlot,memberSelected,born;uniform float viewportHeight,fade,parentReveal,redshiftMode,previewNow,resolvedSeed,resolvedFade,externalSeed,externalBlend;varying vec3 tint;varying float alpha,selected;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vec4 c=modelViewMatrix*vec4(center,1.);gl_Position=projectionMatrix*p;float pixels=radius*projectionMatrix[1][1]*viewportHeight/max(1e-12,-c.z)*.5;gl_PointSize=clamp(1.1+pixels*.015,1.1,2.2);tint=mix(color,redshiftColor,redshiftMode);selected=memberSelected;float groupDetail=min(1.,screenContent(groupSlot)/max(.000001,parentReveal));alpha=fade*groupDetail*smoothstep(.6,2.5,pixels)*smoothstep(0.,150.,previewNow-born);if(abs(seed-resolvedSeed)<.001)alpha*=1.-resolvedFade;if(abs(seed-externalSeed)<.001)alpha*=1.-externalBlend;}`,fragmentShader:`uniform float gain,memberSelectionActive;varying vec3 tint;varying float alpha,selected;void main(){float r=length(gl_PointCoord*2.-1.);if(r>1.)discard;float chosen=memberSelectionActive>.5?(selected>.5?1.65:${Vu}):1.;gl_FragColor=vec4(tint*gain*3.2,(exp(-r*r*8.)+exp(-r*r*2.)*.22)*alpha*.82*chosen);
#include <colorspace_fragment>
}`}),Ad(this.material,`(pickOwner>=0.&&abs(pickOwner-layerOwner)<.1)||(pickOwner<0.&&pickRoot>=0.&&abs(pickRoot-layerRoot)<.1&&(pickGroup<0.||abs(selectGroup-pickGroup)<.1)&&(pickSeed<0.||abs(seed-pickSeed)<.001))?1.:0.`,{layerRoot:{value:Fd(e.root)},layerOwner:n},`uniform float layerRoot,layerOwner;`),this.object=new fa(this.geometry,this.material),this.object.frustumCulled=!1,this.object.visible=!1}setSelection(e){this.selected=new Set(e);let t=this.attrs.get(`memberSelected`);for(let[n,r]of this.models)t.array.fill(Number(e.has(n)),r.slot*512,(r.slot+1)*512),t.addUpdateRange(r.slot*512,512);t.needsUpdate=!0}build(e,t,n){let r=this.at;if(this.at>=this.capacity){let e=[...this.models].find(([e])=>!n.has(e));if(!e)return;r=e[1].slot,this.dotBorn.setX(e[1].index,-1),this.dotBorn.addUpdateRange(e[1].index,1),this.models.delete(e[0])}else this.at++;let i=performance.now(),a=Gf(e,512),o=new Rt().setFromEuler(new Kn(...e.angles)),s=new P(...e.position),c=new P,l=performance.now(),u=r*512,d=this.attrs.get(`position`).array,f=this.attrs.get(`center`).array;for(let t=0;t<512;t++){c.fromArray(a.positions,t*3).multiplyScalar(1e-9).applyQuaternion(o).add(s);let n=(u+t)*3;d[n]=c.x,d[n+1]=c.y,d[n+2]=c.z,f.set(e.position,n)}this.attrs.get(`color`).array.set(a.colors,u*3),this.attrs.get(`redshiftColor`).array.set(a.redshiftColors,u*3);for(let[t,n]of[[`radius`,e.radius],[`seed`,e.seed],[`selectGroup`,e.group],[`groupSlot`,R.slot(au(this.data.root,e.group))],[`memberSelected`,Number(this.selected.has(e.id))],[`born`,l]])this.attrs.get(t).array.fill(n,u,u+512);for(let e of this.attrs.values())e.addUpdateRange(u*e.itemSize,512*e.itemSize),e.needsUpdate=!0;this.models.set(e.id,{slot:r,index:t,born:l}),this.dotBorn.setX(t,l),this.dotBorn.addUpdateRange(t,1),this.dotBorn.needsUpdate=!0,this.geometry.setDrawRange(0,this.at*512),this.builds++,this.buildMs+=performance.now()-i}update(e,t,n,r){let i=performance.now(),a=e.position.clone().sub(n);(i-this.lastPlan>120||a.distanceToSquared(this.lastCamera)>1e-8)&&(this.lastPlan=i,this.lastCamera.copy(a),this.pending=this.data.galaxies.map((e,t)=>({g:e,index:t,d:a.distanceTo(new P(...e.position))})).filter(e=>e.g.radius*t/(Math.max(1e-15,e.d)*.79)>.6).sort((e,t)=>Number(t.g.id===r)-Number(e.g.id===r)||t.g.radius/t.d-e.g.radius/e.d).slice(0,this.capacity));let o=performance.now(),s=new Set(this.pending.map(e=>e.g.id));for(let e of this.pending)if(!this.models.has(e.g.id)&&(this.build(e.g,e.index,s),performance.now()-o>=3))break;this.maxSlice=Math.max(this.maxSlice,performance.now()-o),this.object.visible=this.models.size>0&&(this.preparation?.ready(this.object)??!0)}snapshot(){return{kind:`same-stellar-model`,samplesPerGalaxy:512,models:this.models.size,builds:this.builds,buildMs:this.buildMs,maxSlice:this.maxSlice,ids:[...this.models.keys()]}}dispose(){let e=()=>{this.geometry.dispose(),this.material.dispose()};this.preparation?this.preparation.release(this.object,e):e(),this.models.clear()}},im=null,am=new WeakMap;function om(e){let t=am.get(e);if(t)return t.refs++,t.texture;if(!im){im=new Uint8Array(64**3*4);let e=197901;for(let t=0;t<im.length;t++)e=Math.imul(e,1664525)+1013904223>>>0,im[t]=e>>>24}let n=new cn(im,64,64,64);return n.format=E,n.minFilter=n.magFilter=u,n.wrapS=n.wrapT=n.wrapR=i,n.needsUpdate=!0,am.set(e,{texture:n,refs:1}),n}function sm(e,t){let n=am.get(e);n?.texture===t&&--n.refs===0&&(t.dispose(),am.delete(e))}var cm=class{renderer;galaxy;noiseTexture;target=new on(1,1,{type:b,depthBuffer:!1,stencilBuffer:!1});scene=new Ni;overlay=new Ni;camera=new bi;ready=!1;alive=!0;preparation;last=``;width=0;height=0;uniforms={tidal:{value:new rn},tidalBound:{value:1},earlyColour:fd,received:{value:13.8},earlyMatter:hd,emitted:{value:0},prestellar:{value:0},pickCenter:{value:new P},pickRadius:{value:0},inside:{value:0},ceiling:{value:.055},eye:{value:new P},rotation:{value:new Vt},aspect:{value:1},tanFov:{value:.4},family:{value:0},arms:{value:2},pitch:{value:.4},phase:{value:0},bar:{value:0},thickness:{value:.03},axis:{value:new Lt(.8,.6)},gas:{value:.5},dust:{value:.5},epochTint:{value:new P(1,1,1)}};material;composite;geometry=new _a(2,2);constructor(e,t,n){this.renderer=e,this.galaxy=t,this.noiseTexture=om(e);let r=Ff(t);this.uniforms.tidal.value.fromArray(t.environment?.tidal??jf),this.uniforms.tidalBound.value=Pf(t.environment?.tidal),this.uniforms.emitted.value=t.emitted,this.uniforms.received.value=t.received??13.8,this.uniforms.prestellar.value=+(t.emitted<.12);for(let e of[`family`,`arms`,`pitch`,`phase`,`bar`,`thickness`,`gas`,`dust`])this.uniforms[e].value=r[e];this.uniforms.axis.value.set(r.axisY,r.axisZ);let i=`varying vec2 xy;void main(){xy=uv*2.-1.;gl_Position=vec4(position.xy,0.,1.);}`;this.material=new yi({uniforms:{...this.uniforms,field:{value:this.noiseTexture}},depthTest:!1,depthWrite:!1,vertexShader:i,fragmentShader:`precision highp float;varying vec2 xy;uniform vec3 eye;uniform mat3 rotation;uniform float aspect,tanFov,family,arms,pitch,phase,bar,thickness,gas,dust;uniform vec2 axis;uniform vec3 epochTint;uniform float inside,ceiling,prestellar,earlyMatter,emitted,received,earlyColour;uniform vec3 pickCenter;uniform float pickRadius;
 uniform highp sampler3D field;uniform vec4 tidal;uniform float tidalBound;${Nf}${Dd}${xd}
 float noise(vec3 p){return texture(field,p/64.+vec3(phase*.13)).r;}
 float fbm(vec3 p){return noise(p)*.55+noise(p*2.07+13.)*.28+noise(p*4.19-7.)*.17;}
 void main(){
 if(earlyMatter<.5&&emitted<${Qu}){gl_FragColor=vec4(0.);return;}
 vec3 ray=normalize(rotation*vec3(xy.x*aspect*tanFov,xy.y*tanFov,-1.));
 vec3 bounds=(emitted<1.5||family==1.||family==4.||family==2.)?vec3(1.5):vec3(1.3,1.3,.44);
 bounds*=vec3(tidalBound,tidalBound,max(1.,tidalBound*1.6));vec3 e=eye/bounds,d=ray/bounds;float a=dot(d,d),b=dot(e,d),disc=b*b-a*(dot(e,e)-1.);if(disc<=0.){gl_FragColor=vec4(0.);return;}
 float begin=max(0.,(-b-sqrt(disc))/a),end=(-b+sqrt(disc))/a;if(end<=begin){gl_FragColor=vec4(0.);return;}
 float stepSize=(end-begin)/96.,trans=1.;vec3 light=vec3(0.),columnPosition=vec3(0.);float columnWeight=0.;
 for(int i=0;i<96;i++){
 vec3 observed=eye+ray*(begin+(float(i)+.5)*stepSize);vec3 p=tidalInverse(observed,tidal);float r=length(p.xy),s=length(p/vec3(1.,axis.x,axis.y)),bulge=exp(-s*14.);
 float disk=exp(-r*2.9-p.z*p.z/(thickness*thickness*.7));
 float warp=(noise(p*18.)-.5)*.55,wave=arms*(atan(p.y,p.x)-log(r+.1)/pitch-phase)+warp;
 float arm=pow(.5+.5*cos(wave),4.);float n=fbm(p*16.),fine=fbm(p*145.);
 float billow=smoothstep(.38,.69,n),cloud=disk*(.10+.90*arm)*billow;
 float dustArm=pow(.5+.5*cos(wave+.55),9.);
 float dustDisk=exp(-r*2.5-p.z*p.z/(thickness*thickness*3.));float lane=dustDisk*(.12+2.*dustArm)*smoothstep(.43,.59,n+.2*(fine-.5))*(.3+fine*1.6);
 float stars=disk*(.04+.96*arm)*(.15+billow*2.8)+bulge*.38;
 if(family==3.){float bridge=exp(-p.x*p.x/max(.005,bar*bar)-p.y*p.y/.003-p.z*p.z/.003);stars+=bridge*.25;cloud+=bridge*billow*.26;}
 if(family==1.||family==4.){stars=exp(-s*5.8);cloud=stars*n*.05;lane=cloud*.1;}
 if(family==2.){stars=exp(-dot(p,p)*4.)*(.13+billow*.8);cloud=stars*billow;lane=cloud*fine*.8;}
 float maturity=smoothstep(.35,1.5,emitted),earlyGas=0.,earlyKnots=0.;
 if(maturity<1.){float broad=fbm(p*3.+vec3(phase)),detail=fbm(p*19.+vec3(phase));float filaments=pow(max(0.,1.-abs(broad-.49)*7.),3.);earlyGas=exp(-dot(p,p)*1.8)*(.16+filaments*(.2+detail));for(int k=0;k<5;k++){float a=phase*3.+float(k)*2.4;vec3 c=vec3(sin(a),cos(a*1.7),sin(a*.83)*.7)*(.15+float(k)*.075);earlyKnots+=exp(-dot(p-c,p-c)*(70.+float(k)*19.));}
 float first=smoothstep(${Qu},.4,emitted);float primordial=emitted<${ld}?exp(-dot(p,p)*.7)*(.48+detail*.12):earlyGas;
 stars=mix(earlyKnots*first*.24,stars,maturity);cloud=mix(primordial*(earlyMatter>.5?1.:first*.35),cloud,maturity);lane=mix(earlyGas*first*.07,lane,maturity);}
 float optical=lane*dust*90.*stepSize;
 vec3 stellar=mix(vec3(.30,.52,1.),vec3(1.,.95,.86),clamp(bulge*7.,0.,1.));if(family==1.||family==4.)stellar=vec3(1.,.95,.87);
 float knots=smoothstep(.55,.72,n)*arm;
 vec3 nebula=mix(vec3(.22,.36,.65),vec3(.85,.26,.42),knots);
 nebula=mix(emitted<${ld}?vec3(.52,.38,.27):vec3(.19,.40,.61),nebula,maturity);stellar=mix(vec3(.55,.74,1.),stellar,maturity);vec3 starLight=stellar*stars*.95*(1.-prestellar),gasLight=cloud*mix(.75,gas,maturity)*nebula*.9;if(emitted<1.5){starLight*=epochTint;gasLight=earlyBandTint(gasLight,emitted,received,earlyColour)*mix(vec3(1.),epochTint,maturity);}vec3 emissive=starLight+gasLight;emissive*=selectionShade(observed-eye,pickCenter-eye,pickRadius);
 float traveled=begin+(float(i)+.5)*stepSize;float resolvedLocal=smoothstep(.025,.14,traveled);float weight=trans*dot(emissive,vec3(.2126,.7152,.0722))*stepSize*resolvedLocal;columnPosition+=p*weight;columnWeight+=weight;light+=trans*emissive*stepSize*resolvedLocal;trans*=exp(-optical);
 }
 if(emitted>=1.5&&columnWeight>.00001&&family!=1.&&family!=4.){vec3 locus=columnPosition/columnWeight;float coarse=fbm(locus*24.),detail=fbm(locus*190.+vec3(coarse*6.));float grain=noise(locus*870.);float strands=smoothstep(.34,.64,detail*.75+coarse*.25);vec3 decoration=(.3+strands*1.45)*(.7+.6*grain)*mix(vec3(.62,.78,1.),vec3(1.,.76,.88),smoothstep(.48,.68,coarse));light*=mix(decoration,vec3(1.),inside);}
 light*=emitted<1.5?vec3(1.):epochTint;
 // 高动态亮度压缩，保留白色核、蓝白盘与深色尘埃带，避免整屏灰雾。
 vec3 photographic=vec3(1.)-exp(-pow(light*2.3,vec3(1.45))*2.);light=mix(photographic,ceiling*(vec3(1.)-exp(-light/ceiling)),inside);
 if(emitted<${Qu})light=.065*(vec3(1.)-exp(-light/.065));
 float opacity=clamp(max(1.-trans,max(light.r,max(light.g,light.b))),0.,.98);
 gl_FragColor=vec4(light/max(.0001,opacity),opacity);}`}),this.scene.add(new ci(this.geometry,this.material)),this.composite=new yi({uniforms:{map:{value:this.target.texture},fade:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:i,fragmentShader:`varying vec2 xy;uniform sampler2D map;uniform float fade;void main(){vec4 p=texture2D(map,xy*.5+.5);gl_FragColor=vec4(p.rgb,p.a*fade);
#include <colorspace_fragment>
}`}),this.overlay.add(new ci(this.geometry,this.composite));let a=e.getRenderTarget(),o;try{e.setRenderTarget(this.target),o=e.compileAsync(this.scene,this.camera)}finally{e.setRenderTarget(a)}this.preparation=Promise.all([o,e.compileAsync(this.overlay,this.camera)]).then(()=>{this.ready=!0},e=>{n(e)})}setPickSphere(e,t=0){let n=this.galaxy.radius*1e9;this.uniforms.pickRadius.value=e?t/n:0,e&&this.uniforms.pickCenter.value.copy(e).divideScalar(n)}render(e,t,n,r,i){if(!this.ready||!this.alive)return;let a=Math.min(.7,960/Math.max(t,n)),o=Math.max(1,Math.ceil(t*a)),s=Math.max(1,Math.round(o*n/t));(this.width!==o||this.height!==s)&&(this.target.setSize(o,s),this.width=o,this.height=s,this.last=``);let c=e.position.clone().divideScalar(this.galaxy.radius*1e9),l=[...c.toArray(),...e.quaternion.toArray(),t,n,e.fov,...i.toArray(),...this.uniforms.pickCenter.value.toArray(),this.uniforms.pickRadius.value,pd.value,fd.value].map(e=>e.toPrecision(7)).join(`|`),u=Rf(c.length(),1,this.uniforms.family.value),d=this.renderer.getRenderTarget(),f=this.renderer.autoClear;l!==this.last&&(this.last=l,this.uniforms.eye.value.copy(c),this.uniforms.rotation.value.setFromMatrix4(new In().makeRotationFromQuaternion(e.quaternion)),this.uniforms.aspect.value=t/n,this.uniforms.tanFov.value=Math.tan(e.fov*Math.PI/360),this.uniforms.inside.value=u.inside,this.uniforms.ceiling.value=u.ceiling,this.uniforms.epochTint.value.copy(i).multiplyScalar(u.exposure),this.renderer.setRenderTarget(this.target),this.renderer.autoClear=!0,this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(d)),this.composite.uniforms.fade.value=r,this.renderer.autoClear=!1,this.renderer.render(this.overlay,this.camera),this.renderer.autoClear=f}snapshot(){return{eye:this.uniforms.eye.value.toArray(),rotation:this.uniforms.rotation.value.toArray(),appearance:Rf(this.uniforms.eye.value.length(),1,this.uniforms.family.value),ready:this.ready,pixels:this.width*this.height,steps:96,maturity:_d(this.galaxy.emitted),emitted:this.galaxy.emitted,mode:pd.value,colourMode:fd.value,profile:Ff(this.galaxy)}}dispose(){this.alive&&(this.alive=!1,this.preparation.finally(()=>{this.geometry.dispose(),this.material.dispose(),this.composite.dispose(),this.target.dispose(),sm(this.renderer,this.noiseTexture),this.scene.clear(),this.overlay.clear()}))}};function lm(e,t,n,r){let i=t.map((t,n)=>t-e[n]),a=i.reduce((e,t)=>e+t*t,0),o=a?Math.max(0,Math.min(1,n.reduce((t,n,r)=>t+(n-e[r])*i[r],0)/a)):0;return .18+.82/(1+(Math.hypot(...n.map((t,n)=>t-e[n]-i[n]*o))/Math.max(.035,r*.7))**1.4)}var um=class{renderer;group=new Ai;data;stellarTimings=null;catalogueAbort=null;starReadyAt=0;starReadiness=0;alive=!0;stellarPending=null;starWarm=null;dimOwner={value:-1};routeBuckets=new Map;builtRoutes=new Set;medium=null;mediumCamera=new wi(43,1,1e-6,1e6);modelPreview;dots;glowMaterial;routes=[];routeIndex=new Map;groupLinks=new Map;routeLayer={value:1};routeFocus={value:0};galaxiesById;stellar=null;stellarId=``;uniforms={memberWeight112:{value:1},previewNow:{value:0},parentReveal:{value:1},hierarchyLod:R.uniform,hierarchySize:R.sizeUniform,memberSelectionActive:{value:0},groupLodScale:{value:0},earlyMatter:hd,received:{value:13.8},redshiftMode:{value:0},viewportHeight:{value:900},fade:{value:0},gain:{value:1},resolvedSeed:{value:-1},resolvedFade:{value:0},externalSeed:{value:-1},externalBlend:{value:0}};highlightedIds=new Set;selectionKey=``;selectedMembers=0;emphasis=1;focused=``;lastRouteCounts={trunk:0,local:0};routeOpacity={min:0,max:0};constructor(e,t){this.renderer=t,this.starWarm=t?new Op(e=>t.compileAsync(e,this.mediumCamera),e=>console.error(e)):null,this.data=e,this.uniforms.memberWeight112.value=1/Math.max(1,e.galaxies.length),cu(e.root,e.center,e.galaxies),this.uniforms.received.value=e.galaxies[0]?.received??13.8,this.galaxiesById=new Map(e.galaxies.map(e=>[e.id,e])),this.group.position.fromArray(e.center);let n=e.galaxies.flatMap(e=>e.position),r=e.galaxies.map(e=>e.radius),i=e.galaxies.map(e=>e.kind),a=e.galaxies.map(e=>e.seed),o=e.galaxies.map(e=>e.emitted),s={layerRoot:{value:Fd(e.root)},layerOwner:this.dimOwner},c=new Xr;c.setAttribute(`spacing112`,new F(Pu(n,e.galaxies.map(e=>e.group)).map((t,n)=>Math.min(t,2*(R.get(au(e.root,e.galaxies[n].group))?.radius??0)/Math.sqrt(Math.max(1,e.groups[e.galaxies[n].group].members.length)))),1)),c.setAttribute(`lodScreen`,new I(e.galaxies.flatMap(t=>[R.slot(au(e.root,t.group)),e.groups[t.group].members.length]),2)),c.setAttribute(`memberSelected`,new F(new Float32Array(e.galaxies.length),1)),c.setAttribute(`position`,new I(n,3)),c.setAttribute(`radius`,new I(r,1)),c.setAttribute(`kind`,new I(i,1)),c.setAttribute(`seed`,new I(a,1)),c.setAttribute(`emissionTime`,new I(o,1)),c.setAttribute(`lodCenter`,new I(e.galaxies.flatMap(t=>e.groups[t.group].center),3)),c.setAttribute(`lodCount`,new I(e.galaxies.map(t=>e.groups[t.group].members.length),1)),c.setAttribute(`selectGroup`,new I(e.galaxies.map(e=>e.group),1)),c.setAttribute(`modelBorn`,new F(new Float32Array(e.galaxies.length).fill(-1),1).setUsage(et)),this.glowMaterial=new yi({uniforms:this.uniforms,transparent:!0,depthWrite:!1,depthTest:!1,blending:2,vertexShader:`${Nu}uniform float memberWeight112;attribute float spacing112;attribute float modelBorn;uniform float previewNow;attribute float emissionTime;uniform float received;uniform float redshiftMode;${bd}${xd}${ad}attribute float radius;attribute float kind;attribute float seed;uniform float externalSeed;uniform float externalBlend;uniform float viewportHeight;uniform float fade;varying float a;varying vec3 color;void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;float pix=radius*projectionMatrix[1][1]*viewportHeight/max(.0000001,-p.z)*.5;gl_PointSize=clamp(1.7+pix*1.6,1.7,10.);a=fade*(1.-smoothstep(1.,5.,pix)*(modelBorn<0.?0.:smoothstep(0.,150.,previewNow-modelBorn)))*(abs(seed-externalSeed)<.001?1.-externalBlend:1.);a*=earlySourceGain(emissionTime)*memberLight112(memberWeight112,spacing112*projectionMatrix[1][1]*viewportHeight/max(.0000001,-p.z));vec3 source=kind<.5?vec3(.64,.77,.94):vec3(.96,.90,.79);color=emissionTime<${Qu}?earlyBandTint(source,emissionTime,received,redshiftMode):redshiftBands(source,emissionTime,received,redshiftMode);}`,fragmentShader:`uniform float gain;varying float a;varying vec3 color;void main(){float d=length(gl_PointCoord*2.-1.);if(d>1.)discard;gl_FragColor=vec4(color*gain,exp(-d*d*4.)*a);
#include <colorspace_fragment>
}`}),Ad(this.glowMaterial,`(pickOwner>=0.&&abs(pickOwner-layerOwner)<.1)||(pickOwner<0.&&pickRoot>=0.&&abs(pickRoot-layerRoot)<.1&&(pickGroup<0.||abs(selectGroup-pickGroup)<.1)&&(pickSeed<0.||abs(seed-pickSeed)<.001))?1.:0.`,s,`uniform float layerRoot,layerOwner;attribute float selectGroup;`),this.dots=new fa(c,this.glowMaterial),this.dots.frustumCulled=!1,this.dots.layers.set(1),this.group.add(this.dots);for(let e of[this.glowMaterial])e.vertexShader=su+`uniform float parentReveal;attribute vec2 lodScreen;attribute float memberSelected;varying float chosenMember;attribute vec3 lodCenter;uniform float groupLodScale;varying float groupDetail;`+Zl+e.vertexShader,e.vertexShader=e.vertexShader.replace(/}\s*$/,`chosenMember=memberSelected;groupDetail=lodScreen.y<1.5?1.:min(1.,screenContent(lodScreen.x)/max(.000001,parentReveal));}`),e.fragmentShader=`uniform float memberSelectionActive;varying float chosenMember;varying float groupDetail;`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(/}\s*$/,`gl_FragColor.a*=groupDetail;if(memberSelectionActive>.5){gl_FragColor.a*=chosenMember>.5?1.65:`+Vu+`;if(chosenMember>.5)gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(.92,1.,.69),.45);}}`);this.modelPreview=new rm(e,this.uniforms,this.dimOwner,c.getAttribute(`modelBorn`),this.starWarm??void 0),this.group.add(this.modelPreview.object);let l=this.galaxiesById;for(let t of e.routes){let e=l.get(t.a).group,n=l.get(t.b).group;for(let t of new Set([e,n])){let r=this.groupLinks.get(t)??{touching:0,outgoing:0};r.touching++,e!==n&&r.outgoing++,this.groupLinks.set(t,r)}}for(let t of e.routes){let e=t.group<0?`outer:`+(t.kind??`bundle`):`local:`+t.group;this.routeBuckets.has(e)||this.routeBuckets.set(e,[]),this.routeBuckets.get(e).push(t)}for(let[e,t]of this.routeBuckets)(!this.lazyRoutes||e.startsWith(`outer:`))&&(this.buildRoutes(Number(e.split(`:`)[0]===`local`?e.split(`:`)[1]:-1),e.split(`:`)[0]===`local`?`local`:e.split(`:`)[1],t),this.builtRoutes.add(e))}get lazyRoutes(){return this.data.matterVersion===`directory96`}buildRoutes(e,t,n){let r=this.data,i=this.galaxiesById,a=[`#8db0dd`,`#8acec4`,`#c3a2e0`,`#e3be88`,`#92c7ab`],o=[];if(!n.length)return;for(let e of n)o.push(...i.get(e.a).position,...i.get(e.b).position);let s=new Fp;s.setPositions(o),s.setAttribute(`selectionGain`,new Ri(new Float32Array(n.length).fill(1),1)),s.setAttribute(`laneWeight`,new Ri(new Float32Array(n.map(e=>e.weight??1)),1));let c=new Float32Array(n.flatMap(e=>[i.get(e.a).group,i.get(e.b).group]));s.setAttribute(`routeGroups`,new Ri(c,2)),s.setAttribute(`screenSlots`,new Ri(new Float32Array(n.flatMap(e=>[R.slot(au(r.root,i.get(e.a).group)),R.slot(au(r.root,i.get(e.b).group))])),2)),s.setAttribute(`galaxySeeds`,new Ri(new Float32Array(n.flatMap(e=>[i.get(e.a).seed,i.get(e.b).seed])),2));for(let[r,i]of[[5,.05],[.85,e<0?.46:.65]]){let o=new Ip({color:e<0?`#adbbc3`:a[e%a.length],linewidth:r,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:2});o.onBeforeCompile=e=>{Object.assign(e.uniforms,{hierarchyLod:R.uniform,hierarchySize:R.sizeUniform,routeLodScale:this.uniforms.groupLodScale,groupRouteGain:this.routeLayer,focusGroup:this.routeFocus,externalSeed:this.uniforms.externalSeed,externalBlend:this.uniforms.externalBlend}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec2 screenSlots;varying vec2 screenRouteSlots;attribute float laneWeight,selectionGain;varying float laneGain;attribute vec2 routeGroups,galaxySeeds;uniform float routeLodScale,externalSeed,externalBlend,focusGroup;varying vec3 routeView;varying float externalRouteGain,directGroup;`),e.vertexShader=e.vertexShader.replace(`// clip space`,`screenRouteSlots=screenSlots;laneGain=laneWeight*selectionGain;routeView=(position.y<.5)?start.xyz:end.xyz;externalRouteGain=(abs(galaxySeeds.x-externalSeed)<.001||abs(galaxySeeds.y-externalSeed)<.001)?1.-externalBlend:1.;directGroup=focusGroup>=0.&&(abs(routeGroups.x-focusGroup)<.1||abs(routeGroups.y-focusGroup)<.1)?1.:0.;
// clip space`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
${su}varying vec2 screenRouteSlots;uniform float groupRouteGain,routeLodScale;varying vec3 routeView;varying float directGroup,externalRouteGain,laneGain;`).replace(`gl_FragColor = vec4( diffuseColor.rgb, alpha );`,`float routeDetail=max(${R.unresolvedMode?`screenRoute`:`screenContent`}(screenRouteSlots.x),${R.unresolvedMode?`screenRoute`:`screenContent`}(screenRouteSlots.y));alpha*=laneGain;alpha*=${t===`coarse`?`1.-routeDetail`:`routeDetail`};alpha*=mix(groupRouteGain,1.,directGroup)*externalRouteGain;if(alpha<.00001)discard;gl_FragColor=vec4(diffuseColor.rgb,alpha);`)},o.customProgramCacheKey=()=>`galaxy-group-links-distance-v42/`+t,Ad(o),hf(o);let l=new tm(s,o);this.group.add(l);let u=this.routes.length;this.routes.push({line:l,group:e,base:i,count:n.length,groups:new Set(c),kind:t,list:n});for(let e of n)for(let t of new Set([e.a,e.b]))this.routeIndex.has(t)||this.routeIndex.set(t,[]),this.routeIndex.get(t).push({batch:u,edge:e})}}setMemberSelection(e,t=[],n=e.length>0||t.length>0){let r=e.filter(e=>e.root===this.data.root),i=t.includes(this.dimOwner.value),a=JSON.stringify([r,i,n]);if(a===this.selectionKey)return;this.selectionKey=a,this.selectedMembers=0,this.uniforms.memberSelectionActive.value=+!!n;let o=this.dots.geometry.getAttribute(`memberSelected`),s=new Map;this.data.galaxies.forEach((e,t)=>{let n=i||zu(r,this.data.root,e.group,t);s.set(e.id,n),o.setX(t,Number(n)),this.selectedMembers+=Number(n)}),this.highlightedIds=new Set([...s].filter(([,e])=>e).map(([e])=>e)),this.modelPreview.setSelection(this.highlightedIds),o.needsUpdate=!0;for(let e of this.routes){let t=e.line.geometry.getAttribute(`selectionGain`);e.list.forEach((e,r)=>t.setX(r,Gu(n,!!s.get(e.a),!!s.get(e.b)))),t.needsUpdate=!0}}objectSelectionGain(e){return Wu(this.uniforms.memberSelectionActive.value>0,this.highlightedIds.has(e))}galaxy(e){return this.galaxiesById.get(e)}setDimOwner(e){this.dimOwner.value=e}setExternalDetail(e,t=0){this.uniforms.externalSeed.value=e?this.galaxiesById.get(e)?.seed??-1:-1,this.uniforms.externalBlend.value=t}get detailGain(){return this.uniforms.gain.value}get focusGroup(){return this.galaxiesById.get(this.focused)?.group??0}setFocus(e){this.focused!==e&&(this.focused=e)}shapeHandoff113(e,t){let n=0,r=t/(2*Math.tan(e.fov*Math.PI/360));for(let t of this.data.galaxies){let i=t.position,a=Math.hypot(e.position.x-this.group.position.x-i[0],e.position.y-this.group.position.y-i[1],e.position.z-this.group.position.z-i[2]);n=Math.max(n,t.radius*r/Math.max(1e-15,a))}return It.smoothstep(n,.35,1.4)}coverage110(){if(!this.group.visible)return 0;let e=0;for(let t of this.data.groups)e+=Math.min(1,R.content(au(this.data.root,this.data.groups.indexOf(t)))/Math.max(1e-6,this.uniforms.parentReveal.value))*t.members.length;return this.visibleFade*e/Math.max(1,this.data.galaxies.length)}get visibleFade(){return this.uniforms.fade.value}preparationSnapshot(){return{timings:this.stellarTimings,modelPreview:this.modelPreview.snapshot(),pending:this.stellarPending,readiness:this.starReadiness,readyAt:this.starReadyAt,pointsVisible:this.stellar?.visible??!1,resolvedFade:this.uniforms.resolvedFade.value}}get galacticMedium(){return this.medium}prepareGalaxy(e){return this.stellarId!==e.id&&this.createStellar(e),this.stellarId===e.id}createStellar(e){if(this.stellarPending===e.id)return;this.catalogueAbort?.abort(),this.catalogueAbort=new AbortController,this.stellarPending=e.id;let t=performance.now();this.stellarTimings={started:t},np(e,this.catalogueAbort.signal).then(n=>{if(!this.alive||this.stellarPending!==e.id)return;this.stellarPending=null,this.stellarTimings={started:t,catalogueMs:performance.now()-t};let r=performance.now();if(this.medium?.dispose(),this.medium=this.renderer?new cm(this.renderer,e,e=>console.error(e)):null,this.stellar){let e=this.stellar;this.group.remove(e);let t=()=>{e.geometry.dispose(),e.material.dispose()};this.starWarm?this.starWarm.release(e,t):t()}this.stellarId=e.id,this.starReadyAt=0,this.starReadiness=0;let i=new Xr;i.setAttribute(`position`,new I(Array.from(n.positions,e=>e*1e-9),3)),i.setAttribute(`color`,new F(n.colors,3)),i.setAttribute(`redshiftColor`,new F(n.redshiftColors,3)),i.setAttribute(`starIndex`,new I(Array.from({length:n.count},(e,t)=>t),1));let a=Cp(1e9);this.stellar=new fa(i,a),this.stellar.position.fromArray(e.position),this.stellar.quaternion.setFromEuler(new Kn(...e.angles)),this.stellar.visible=!1,this.group.add(this.stellar),this.stellarTimings.assemblyMs=performance.now()-r}).catch(t=>{t?.name!==`AbortError`&&(this.stellarPending===e.id&&(this.stellarPending=null),console.error(t))})}update(e,t,n,r,i,a=1,o=this.group.position,s=1,c=1,l=this.data.root,u=1){this.uniforms.parentReveal.value=R.carrier(z(this.data.root)),this.uniforms.groupLodScale.value=Ul(t,e.fov),this.starWarm?.beginFrame(),this.uniforms.redshiftMode.value=+(fd.value>0),this.emphasis=a,i*=a,this.routeLayer.value=Fl(s,t),this.routeFocus.value=l===this.data.root?this.focusGroup:-1;let d=e.position.clone().sub(this.group.position),f=d.length(),p=c*(R.unresolvedMode?this.shapeHandoff113(e,t):1)*It.smoothstep(this.data.extent*t/(Math.max(1e-5,f)*.79),.5,38);if(this.uniforms.previewNow.value=performance.now(),this.uniforms.viewportHeight.value=t,this.modelPreview.update(e,t,this.group.position,this.focused),this.uniforms.fade.value=p,this.uniforms.gain.value=i,this.lazyRoutes){let e=performance.now();for(let[t,n]of this.routeBuckets){if(this.builtRoutes.has(t))continue;let r=Number(t.split(`:`)[1]);if(!((R.get(au(this.data.root,r))?.area??0)<.08)){this.buildRoutes(r,`local`,n),this.builtRoutes.add(t);for(let e of this.routes.filter(e=>e.group===r)){let t=e.line.geometry.getAttribute(`selectionGain`);e.list.forEach((e,n)=>t.setX(n,Gu(this.uniforms.memberSelectionActive.value>0,this.highlightedIds.has(e.a),this.highlightedIds.has(e.b)))),t.needsUpdate=!0}if(performance.now()-e>2)break}}}this.lastRouteCounts={trunk:0,local:0};let m=this.worldPosition(this.focused),h=m?It.smoothstep(e.position.distanceTo(m),6e-4,.002):1;for(let e of this.routes){let i=e.group<0?f:d.distanceTo(new P(...this.data.groups[e.group].center)),c=e.group<0?It.smoothstep(.12/i,.05,.4):It.smoothstep(.006/i,.14,.5)*It.smoothstep(i,7e-4,.003);e.group<0&&(c*=It.smoothstep(f,.02,.08)),c*=h;let l=e.group<0?this.group.position:new P(...this.data.groups[e.group].center).add(this.group.position),m=lm(l.toArray(),l.toArray(),o.toArray(),s);c=(.32+.68*c)*(.5+.5*m),e.line.visible=(!this.lazyRoutes||e.group<0||R.content(au(this.data.root,e.group))>.001)&&r&&u>.001&&p>.01&&(this.routeLayer.value>.001||e.groups.has(this.routeFocus.value)),this.lazyRoutes&&e.line.visible&&this.starWarm&&(e.line.visible=this.starWarm.ready(e.line)),e.line.material.opacity=e.base*c*p*a*u,e.line.material.resolution.set(n,t),e.base>.5&&e.line.visible&&(this.lastRouteCounts[e.group<0?`trunk`:`local`]+=e.count)}let g=this.routes.filter(e=>e.base>.1&&e.line.visible).map(e=>e.line.material.opacity);this.routeOpacity={min:g.length?Math.min(...g):0,max:g.length?Math.max(...g):0};let _=this.galaxiesById.get(this.focused);if(_&&this.stellarId!==_.id&&c>0&&_.radius*t/(Math.max(1e-10,d.distanceTo(new P(..._.position)))*.79)>2&&this.createStellar(_),this.stellar){let e=this.galaxiesById.get(this.stellarId),n=d.distanceTo(new P(...e.position)),r=this.stellar.material,a=Cd;kd(r,a.pickOwner.value>=0?a.pickOwner.value===this.dimOwner.value:a.pickRoot.value===Fd(this.data.root)&&(a.pickGroup.value<0||a.pickGroup.value===e.group)&&(a.pickSeed.value<0||Math.abs(a.pickSeed.value-e.seed)<.001));let o=!this.starWarm||this.starWarm.ready(this.stellar);o&&!this.starReadyAt&&(this.starReadyAt=performance.now()),this.starReadiness=o?It.smoothstep(performance.now()-this.starReadyAt,0,260):0,r.uniforms.fade.value=c*It.smoothstep(e.radius*t/(n*.79),35,170)*this.starReadiness,r.uniforms.gain.value=i*1.8,r.uniforms.redshiftMode.value=+(fd.value>0),this.stellar.visible=r.uniforms.fade.value>.001&&o,this.uniforms.resolvedSeed.value=e.seed,this.uniforms.resolvedFade.value=r.uniforms.fade.value,r.uniforms.fade.value*=this.objectSelectionGain(e.id),Math.abs(e.seed-this.uniforms.externalSeed.value)<.001&&(r.uniforms.fade.value*=1-this.uniforms.externalBlend.value)}return p}renderMedium(e,t,n,r){if(!this.medium||!this.stellarId)return;let i=this.galaxiesById.get(this.stellarId),a=new Rt().setFromEuler(new Kn(...i.angles)).invert();this.mediumCamera.position.copy(e.position).sub(this.worldPosition(i.id)).multiplyScalar(1e9).applyQuaternion(a),this.mediumCamera.quaternion.copy(a).multiply(e.quaternion),this.mediumCamera.fov=e.fov;let o=fd.value>0?id(6500,$u(i.emitted,i.received)):[1,1,1];this.medium.setPickSphere(null),this.medium.render(this.mediumCamera,t,n,this.uniforms.resolvedFade.value*this.objectSelectionGain(i.id),new P(...o).multiplyScalar(r))}bodyWeight(e,t,n){let r=this.data.groups[e.group];return new P(...r.center).add(this.group.position),this.group.visible?this.visibleFade*(r.members.length<2?1:Math.min(1,R.content(au(this.data.root,e.group))/Math.max(1e-6,this.uniforms.parentReveal.value))):0}routeLodWeight(e){let t=au(this.data.root,e);return R.unresolvedMode?R.route(t):R.content(t)}routeWeight(e,t,n){if(!this.group.visible)return 0;let r=0;for(let{batch:t,edge:n}of this.routeIndex.get(e)??[]){let e=this.routes[t];if(!e.line.visible||this.routeLayer.value<=.001&&![this.galaxiesById.get(n.a).group,this.galaxiesById.get(n.b).group].includes(this.routeFocus.value))continue;this.worldPosition(n.a),this.worldPosition(n.b);let i=Math.max(this.routeLodWeight(this.galaxiesById.get(n.a).group),this.routeLodWeight(this.galaxiesById.get(n.b).group));r=Math.max(r,e.line.material.opacity*(e.kind===`coarse`?1-i:i))}return r*gf(this.worldPosition(e)?.length()??1/0,this.uniforms.received.value,!!dd.value)}canPick(e,t,n,r){return Yd(this.bodyWeight(e,t,n),Jd(e.emitted,e.received??13.8,!!fd.value,!!hd.value)*this.uniforms.gain.value,r?this.routeWeight(e.id,t,n):0)}pick(e,t,n,r,i){let a=100,o=null;for(let s of this.data.galaxies){let c=new P(...s.position).add(this.group.position).project(e);if(c.z<-1||c.z>1)continue;let l=((c.x*.5+.5)*r-t)**2+((-c.y*.5+.5)*i-n)**2;l<a&&(a=l,o=s)}return o}worldPosition(e){let t=this.galaxiesById.get(e);return t?new P(...t.position).add(this.group.position):null}snapshot(){let e=this.data.groups.map((e,t)=>({group:t,body:R.content(au(this.data.root,t)),route:R.route(au(this.data.root,t))})),t=this.groupLinks.get(this.routeFocus.value);return{modelPreview:this.modelPreview.snapshot(),routeGeometryBuffers:new Set(this.routes.map(e=>e.line.geometry)).size,routeDrawObjects:this.routes.length,routeLod:e,resolvedSelectionGain:this.objectSelectionGain(this.stellarId),stellarPreparation:{pending:this.stellarPending,readiness:this.starReadiness,readyAt:this.starReadyAt},directRoutes:t?.touching??0,outgoingRoutes:t?.outgoing??0,backgroundRoutes:this.data.routes.length-(t?.touching??0),focusGroup:this.focusGroup,backgroundRouteGain:this.routeLayer.value,directRouteBatches:this.routes.filter(e=>e.groups.has(this.routeFocus.value)&&e.line.visible).length,selectionRouteGains:[...new Set(this.routes.flatMap(e=>Array.from(e.line.geometry.getAttribute(`selectionGain`).array)))],selectionActive:this.uniforms.memberSelectionActive.value,routeOpacity:this.routeOpacity,emphasis:this.emphasis,selectedMembers:this.selectedMembers,aggregateKind:this.data.aggregateKind,matterVersion:this.data.matterVersion,filamentGalaxies:this.data.galaxies.filter(e=>e.materialContext===`filament`).length,diffuseSegments:this.data.diffuse?.length??0,root:this.data.root,center:this.data.center,morphology:this.data.morphology,extent:this.data.extent,members:this.data.galaxies.length,groups:this.data.groups.length,focused:this.focused,stellarVisible:this.stellar?.visible??!1,fade:this.uniforms.fade.value,routes:this.lastRouteCounts,galaxies:this.data.galaxies.slice(0,5)}}dispose(){this.catalogueAbort?.abort(),this.alive=!1,this.stellarPending=null,this.medium?.dispose(),this.medium=null,this.modelPreview.dispose(),this.dots.geometry.dispose(),this.glowMaterial.dispose();for(let e of new Set(this.routes.map(e=>e.line.geometry)))e.dispose();for(let e of this.routes)e.line.material.dispose();if(this.stellar){let e=this.stellar,t=()=>{e.geometry.dispose(),e.material.dispose()};this.starWarm?this.starWarm.release(e,t):t()}this.group.clear()}};function dm(e,t){let n=e.getAttribute(`routeSelectionOpacity`);n&&n.count===t.length?(n.array.set(t),n.needsUpdate=!0):e.setAttribute(`routeSelectionOpacity`,new Ri(t,1))}function fm(e){let t=e.onBeforeCompile,n=e.customProgramCacheKey();e.onBeforeCompile=(n,r)=>{t.call(e,n,r),n.vertexShader=`attribute float routeSelectionOpacity;varying float selectedRouteOpacity;
`+n.vertexShader.replace(/}\s*$/,`selectedRouteOpacity=routeSelectionOpacity;}`),n.fragmentShader=`varying float selectedRouteOpacity;
`+n.fragmentShader.replace(/}\s*$/,`gl_FragColor.a*=selectedRouteOpacity;}`)},e.customProgramCacheKey=()=>n+`/selection-opacity-v78`}function pm(e,t,n){let r=n(e);return r!==void 0&&r===n(t)}var mm=`float routeContextGain(vec4 ends,float root,float group,float outerGain,float innerGain,float atParentLevel){
 float a=root>=0.&&abs(ends.x-root)<.1?1.:0.;float b=root>=0.&&abs(ends.z-root)<.1?1.:0.;
 float c=max(a,b);float g=group>=0.?max(a*(abs(ends.y-group)<.1||(atParentLevel>.5&&ends.y<0.)?1.:0.),b*(abs(ends.w-group)<.1||(atParentLevel>.5&&ends.w<0.)?1.:0.)):0.;
 return mix(outerGain,1.,c)*mix(innerGain,1.,g);
}`;function hm(e){let t=new Set(e.endpoints.map(e=>e.id)),n=new Map;for(let r of e.edges)if(t.has(r.a)&&t.has(r.b)&&r.a!==r.b)for(let[e,t]of[[r.a,r.b],[r.b,r.a]])n.has(e)||n.set(e,[]),n.get(e).push({next:t,edge:r});let r=new Set,i=[];for(let a of[e.id,...t]){if(!t.has(a)||r.has(a))continue;r.add(a);let e=[a];for(let t=0;t<e.length;t++)for(let a of n.get(e[t])??[])r.has(a.next)||(r.add(a.next),e.push(a.next),i.push(a.edge))}return i}var gm=1024,_m=3,vm=new Map;function ym(e){return vm.get(e)}var bm=class{data;shaderPreparation;resolveOnly126;prepareAhead=!1;hasEndpointLines117=!1;portIds113=new Set;accessIds126=new Set;lodDirty113=!0;previewSettled111=new WeakSet;retainedRoots=null;directChildRoots=new Set;focusAtParent=!1;highlightActive=!1;highlighted=[];highlightedOwners=[];highlightKey=``;ownerOf=()=>-1;coarseSelections=[];clouds;geometryRootSlots=new WeakMap;endpointRoutes=new Map;uploadProgress=1;requiredRouteBatches=0;readyRouteBatches=0;geometryBuilds=0;routeActivatedAt=new WeakMap;newRouteBuffers=0;group=new Ai;detailsBuilt=!1;detailsBuilding=!1;buildTask=null;buildStarted=0;buildMs=0;maxBuildSliceMs=0;readyAt=0;pendingInternal=[];localLod={min:0,max:0,nearest:1/0,routeMax:0};lastLod=0;lastLodPosition=new P(1/0,1/0,1/0);lastLodFactor=0;selectedClusters=new Set;lines=[];outerGain=1;groupGain=1;focusRoot=-1;focusGroup=0;routeLayers={atParent:{value:0},outer:{value:1},inner:{value:1},root:{value:-1},group:{value:0}};coarseLines=[];coarseEdges;coarseNodes;anchor=new P;blend=0;activeRoot=-1;previewLayers=[];previewIds=new Set;contextRoots=[];accessCount=0;renderedAccess=0;joinedBridges=0;exits=[];internalCenters=new Map;detailFades=new Map;internalRoutes=0;internalTypes={};previewUniforms={hierarchyStrict:R.strictUniform,hierarchyLod:R.uniform,hierarchySize:R.sizeUniform,unresolvedMode:R.unresolvedUniform,arrivalNow:{value:0},selectionActive:{value:0},height:{value:900},fade:{value:0},ids:{value:new rn(-1,-1,-1,-1)},fades:{value:new rn},focus:{value:new P},focusWorld:{value:new P},span:{value:1},reveal:{value:0},activeOwner:{value:-1},localScale:{value:1},coarseReady:{value:0}};constructor(e,t){this.data=e,this.shaderPreparation=t,this.resolveOnly126=e.edges.some(e=>e.sampleRoots126!==void 0);let n=ru(e.members.map(e=>e.position));R.set(ou(e.id),n.center,n.radius+(e.previewSupport??0)),this.clouds=new pf(this.group,e.id,t),this.group.position.fromArray(e.center),Tu(this.group),this.coarseEdges=hm(e),this.coarseNodes=new Map(e.endpoints.map(e=>[e.id,e.position])),this.rebaseCoarse(this.group.position)}updateContext(e){let t=new Set(this.data.edges.map(e=>e.id)),n=e.members.length!==this.data.members.length||e.members.some((e,t)=>e.id!==this.data.members[t]?.id)||e.edges.length!==this.data.edges.length||e.edges.some(e=>!t.has(e.id));if(this.data=e,e.previewSupport){let t=ru(e.members.map(e=>e.position));R.set(ou(e.id),t.center,t.radius+e.previewSupport)}for(let t of e.endpoints)this.internalCenters.set(t.id,t.position);if(this.detailsBuilt||this.detailsBuilding){let t=(e.bridges??[]).filter(e=>!this.portIds113.has(e.id));if(t.length){for(let e of t)this.portIds113.add(e.id);this.addLines(`ports`,t.map(e=>({a:e.pa,b:e.pb,link:e.link??[parseInt(e.a.slice(2),10),-1,parseInt(e.b.slice(2),10),-1],density:1,length:Math.hypot(...e.pa.map((t,n)=>t-e.pb[n]))})),this.anchor),this.joinedBridges=this.portIds113.size}let n=(e.access??[]).filter(e=>!this.accessIds126.has(e.id));if(n.length){for(let e of n)this.accessIds126.add(e.id);this.addLines(`access`,n.map(e=>({a:e.pa,b:e.pb,cluster:e.cluster,memberEnds:e.memberEnds,density:1,length:Math.hypot(...e.pa.map((t,n)=>t-e.pb[n]))})),this.anchor),this.accessCount=this.accessIds126.size,this.renderedAccess+=n.length}}if(n&&(this.lodDirty113=!0,this.coarseEdges=hm(e),this.coarseNodes=new Map(e.endpoints.map(e=>[e.id,e.position])),this.rebaseCoarse(this.group.position),this.detailsBuilt||this.detailsBuilding))for(let n of[`bundle`,`branch`]){let r=[];for(let i of e.edges)if(i.kind===n&&!t.has(i.id)){let e=i.samples??[this.coarseNodes.get(i.a),this.coarseNodes.get(i.b)];for(let t=1;t<e.length;t++)r.push({anchorRoots126:[i.sampleRoots126?.[t-1]??(t===1?i.a:-1),i.sampleRoots126?.[t]??(t===e.length-1?i.b:-1)],a:e[t-1],b:e[t],link:[i.a,-1,i.b,-1],density:1,length:Math.hypot(...e[t].map((n,r)=>n-e[t-1][r]))})}for(let e=0;e<r.length;e+=gm)this.addLines(n,r.slice(e,e+gm),this.anchor)}}rebaseCoarse(e){this.coarseSelections=[];let t=[],n=[],r=[];for(let i of this.coarseEdges){let a=i.samples??[this.coarseNodes.get(i.a),this.coarseNodes.get(i.b)];for(let o=1;o<a.length;o++){this.coarseSelections.push([i.a,i.b]),r.push(i.sampleRoots126?.[o-1]??(o===1?i.a:-1),i.sampleRoots126?.[o]??(o===a.length-1?i.b:-1)),n.push(Fd(i.a),-1,Fd(i.b),-1);for(let n of[a[o-1],a[o]])t.push(n[0]-e.x,n[1]-e.y,n[2]-e.z)}}if(this.coarseLines.length)for(let e of this.coarseLines)e.geometry.setPositions(t),e.geometry.setColors(new Float32Array(t.length).fill(1)),e.geometry.setAttribute(`screenSlots`,new Ri(new Float32Array(this.coarseSelections.flatMap(([e,t])=>[R.slot(z(e)),R.slot(z(t)),0,0])),4)),e.geometry.setAttribute(`routeEndpoints`,new Ri(new Float32Array(n),4));else for(let[e,r]of[[3,.025],[.85,.48]]){let i=new Fp;i.setPositions(t),i.setColors(new Float32Array(t.length).fill(1)),i.setAttribute(`screenSlots`,new Ri(new Float32Array(this.coarseSelections.flatMap(([e,t])=>[R.slot(z(e)),R.slot(z(t)),0,0])),4)),i.setAttribute(`routeEndpoints`,new Ri(new Float32Array(n),4));let a=new Ip({vertexColors:!0,color:`#9cbfc3`,linewidth:e,transparent:!0,opacity:r,depthTest:!1,depthWrite:!1,blending:2}),o=Tu(new tm(i,a));o.visible=!1,this.coarseLines.push(o),this.attachLod(a,!0),this.resolveOnly126&&bu(a),this.group.add(o)}for(let t of this.coarseLines)yu(t.geometry,r,e);this.refreshCoarseSelection()}rebase(e,t=this.data.id,n=[this.data],r=[]){let i=new Map(n.filter(e=>e.id===this.data.id&&e.internal).map(e=>[e.id,e.internal])),a=new Set(n.flatMap(e=>e.bridges?.map(e=>e.id)??[]));this.detailsBuilt&&!this.detailsBuilding&&this.anchor.equals(e)&&this.activeRoot===t&&this.internalRoutes===[...i.values()].reduce((e,t)=>e+sf(t),0)&&this.joinedBridges===a.size&&this.contextRoots.join(`,`)===r.join(`,`)||(this.pendingInternal=[],this.detailsBuilt=!1,this.detailsBuilding=!0,this.buildStarted=performance.now(),this.maxBuildSliceMs=0,this.buildTask=this.build(e.clone(),t,n.map(e=>({...e})),[...r]))}*build(e,t,n,r){this.activeRoot=t;for(let t of this.previewLayers)t.object.position.copy(t.anchor).sub(e),t.object.updateMatrix();this.anchor.copy(e),this.group.position.copy(e),this.group.updateMatrix(),this.clouds.rebase(),this.rebaseCoarse(e);for(let{line:e}of this.lines)this.group.remove(e),this.releaseLine(e);this.lines=[],this.clearEndpointIndex117();let i=new Map(n.flatMap(e=>e.endpoints.map(e=>[e.id,e]))),a=new Map(n.flatMap(e=>e.edges.map(e=>[e.id,e]))),o=new Map(n.flatMap(e=>(e.bridges??[]).map(e=>[e.id,e]))),s=new Map(n.flatMap(e=>(e.access??[]).map(e=>[e.id,e])));this.internalCenters=new Map([...i.values()].map(e=>[e.id,e.position]));let c=[...new Map(n.filter(e=>e.internal&&e.id===this.data.id).map(e=>[e.id,e.internal])).entries()];this.internalRoutes=c.reduce((e,[,t])=>e+sf(t),0),this.internalTypes={};for(let[,e]of c)for(let t of e.clusters)this.internalTypes[t.morphology]=(this.internalTypes[t.morphology]??0)+1;this.portIds113=new Set(o.keys()),this.accessIds126=new Set(s.keys()),this.contextRoots=r,this.accessCount=s.size,this.renderedAccess=0,this.joinedBridges=o.size,this.exits=n.map(e=>e.exit);for(let e of n)e.internal&&this.clouds.append(e.internal);for(let t of[`bundle`,`branch`,`ports`,`access`,`internal`]){let n=[],r=gm,l=()=>{this.addLines(t,n,e),n=[]},u=(e,t,r,i,a=1,o,s=0,c,l)=>n.push({anchorRoots126:l,memberEnds:c,style:s,a:e,b:t,cluster:r,owner:i,link:o,weight:1,density:a,length:Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2])}),d=0;if(t===`internal`)for(let[e,t]of c)for(let i of cf(t))u(i.pa,i.pb,i.cluster,e,i.weight,void 0,i.kind,i.memberEnds),n.length>=r?(l(),yield):++d%512==0&&(yield);else if(t===`ports`)for(let e of o.values())u(e.pa,e.pb,void 0,void 0,1,e.link??[parseInt(e.a.slice(2),10),-1,parseInt(e.b.slice(2),10),-1]),n.length>=r?(l(),yield):++d%512==0&&(yield);else if(t===`access`)for(let e of s.values())u(e.pa,e.pb,e.cluster,void 0,1,void 0,0,e.memberEnds),this.renderedAccess++,n.length>=r?(l(),yield):++d%512==0&&(yield);else for(let e of a.values())if(e.kind===t){let t=e.samples??[i.get(e.a).position,i.get(e.b).position];for(let i=1;i<t.length;i++)u(t[i-1],t[i],void 0,void 0,1,[e.a,-1,e.b,-1],0,void 0,[e.sampleRoots126?.[i-1]??(i===1?e.a:-1),e.sampleRoots126?.[i]??(i===t.length-1?e.b:-1)]),n.length>=r?(l(),yield):++d%512==0&&(yield)}l(),yield}for(let e of n)e.internal&&this.clouds.append(e.internal);this.appendGroups([...new Map(n.flatMap(e=>(e.previews??[]).map(t=>[t.id,{...t,owner:e.id}]))).values()]),this.detailsBuilt=!0,this.detailsBuilding=!1,this.readyAt=performance.now(),this.buildMs=this.readyAt-this.buildStarted}overviewQueue=[];overviewOffset=0;overviewQueued=new Set;overviewPending=new Map;overviewReady=[];previewBorn=new Map;takeOverviewReady(){return this.overviewReady.splice(0)}overviewWeight(e){let t=this.previewBorn.get(e);return t===void 0?0:It.smoothstep(performance.now()-t,0,350)}appendOverview(e){for(let t of e)!this.previewIds.has(t.id)&&!this.overviewQueued.has(t.id)&&(this.overviewQueued.add(t.id),this.overviewPending.set(t.cluster,(this.overviewPending.get(t.cluster)??0)+1),this.overviewQueue.push(t))}appendGroups(e){let t=new Set;for(let n of e){if(this.clouds.has(n.cluster)||this.previewIds.has(n.id))continue;this.previewIds.add(n.id),R.set(au(n.cluster,n.galaxy.group),n.position,n.spread,z(n.cluster));let e=this.previewLayers.at(-1);if(!e||e.used>=1024){let t=new Xr;for(let[e,n]of[[`position`,3],[`cluster`,1],[`spread`,1],[`owner`,1],[`groupId`,1],[`memberIndex`,1],[`chosen`,1],[`alive`,1],[`arrivalBorn`,1],[`rootSlot`,1],[`groupSlot`,1],[`aggregateWeight`,1]])t.setAttribute(e,new F(new Float32Array(1024*n),n).setUsage(et));t.setDrawRange(0,0);let n=new yi({uniforms:this.previewUniforms,transparent:!0,depthWrite:!1,depthTest:!1,blending:2,vertexShader:`${su}attribute float rootSlot,groupSlot,aggregateWeight;uniform float unresolvedMode;attribute float alive,chosen,arrivalBorn;uniform float arrivalNow;uniform float selectionActive;attribute float cluster;attribute float spread;attribute float owner;uniform float height;uniform float fade;uniform vec4 ids;uniform vec4 fades;uniform vec3 focus;uniform vec3 focusWorld;uniform float span;uniform float reveal;uniform float activeOwner;uniform float localScale;varying float alpha;${Zl}void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;float pix=spread*projectionMatrix[1][1]*height/max(.0000001,-p.z);gl_PointSize=clamp(1.5+sqrt(pix)*.7,1.5,5.);vec3 world=(modelMatrix*vec4(position,1.)).xyz;float context=.18+.82/(1.+pow(length(world-focusWorld)/max(.035,span*.7),1.4));float individual=unresolvedMode>.5?screenBody(groupSlot):objectReveal(length(p.xyz),localScale*${1/4});float light=individual*(abs(owner-activeOwner)<.1?1.:0.);float base=.12+.48*smoothstep(.3,14.,pix);alpha=smoothstep(0.,350.,arrivalNow-arrivalBorn)*alive*fade*individual*mix(base,max(base,.62),light)*context*(selectionActive>.5?(chosen>.5?1.65:${Vu}):1.);if(unresolvedMode>.5){alpha*=mix(aggregateWeight,1.,smoothstep(.3,.9,individual));gl_PointSize=min(gl_PointSize,3.);}gl_PointSize+=light*.8;for(int i=0;i<4;i++)if(abs(cluster-ids[i])<.1&&unresolvedMode<.5)alpha*=1.-fades[i];if(unresolvedMode>.5)alpha*=1.-screenContent(groupSlot)/max(.000001,individual);}`,fragmentShader:`varying float alpha;void main(){float r=length(gl_PointCoord*2.-1.);if(r>1.)discard;gl_FragColor=vec4(.73,.79,.91,exp(-r*r*4.)*alpha);}`});Ad(n,`(pickOwner>=0.&&abs(owner-pickOwner)<.1)||(pickOwner<0.&&pickRoot>=0.&&abs(cluster-pickRoot)<.1)?1.:0.`);let r=new fa(t,n);r.frustumCulled=!1,r.layers.set(1),e={object:r,used:0,anchor:this.anchor.clone()},r.position.copy(e.anchor).sub(this.group.position),Tu(r),this.previewLayers.push(e),this.group.add(r)}this.previewSettled111.delete(e.object);let r=e.object.geometry,i=e.used++,a=performance.now();this.previewBorn.set(n.id,a),r.getAttribute(`arrivalBorn`).setX(i,a),r.getAttribute(`alive`).setX(i,1),r.getAttribute(`rootSlot`).setX(i,R.slot(z(n.cluster))),r.getAttribute(`groupSlot`).setX(i,R.slot(au(n.cluster,n.galaxy.group))),r.getAttribute(`aggregateWeight`).setX(i,n.aggregateWeight??1),r.getAttribute(`position`).setXYZ(i,n.position[0]-e.anchor.x,n.position[1]-e.anchor.y,n.position[2]-e.anchor.z),r.getAttribute(`cluster`).setX(i,Fd(n.cluster)),r.getAttribute(`spread`).setX(i,n.spread),r.getAttribute(`owner`).setX(i,n.owner??this.data.id),r.getAttribute(`groupId`).setX(i,n.galaxy.group),r.getAttribute(`memberIndex`).setX(i,Number(n.galaxyId.match(/member-(\d+)$/)?.[1]??0)),r.getAttribute(`chosen`).setX(i,Number(this.endpointSelected(n.cluster,n.galaxy.group,Number(n.galaxyId.match(/member-(\d+)$/)?.[1]??0)))),r.setDrawRange(0,e.used),t.add(e.object)}for(let e of t)for(let t of Object.values(e.geometry.attributes))t.needsUpdate=!0}releaseLine(e){let t=()=>{e.geometry.dispose(),e.material.dispose()};this.shaderPreparation?this.shaderPreparation.release(e,t):t()}addLines(e,t,n){if(!t.length)return;this.geometryBuilds++;let r=new Float32Array(t.length*6),i=new Float32Array(t.length*6),a=new Float32Array(t.length*3),o=new Float32Array(t.length*3),s=new Map;t.forEach((t,c)=>{for(let e=0;e<3;e++)r[c*6+e]=t.a[e]-n.getComponent(e),r[c*6+3+e]=t.b[e]-n.getComponent(e);let l=e===`internal`||e===`access`?1-(this.detailFades.get(t.cluster)??0):1;if(i.fill(l,c*6,c*6+6),t.cluster!==void 0){s.has(t.cluster)||s.set(t.cluster,[]),s.get(t.cluster).push(c);let e=this.internalCenters.get(t.cluster);for(let t=0;t<3;t++)a[c*3+t]=e[t]-n.getComponent(t);o.set([t.density,t.length,t.style??0],c*3)}});let c=new Fp;c.setAttribute(`screenSlots`,new Ri(new Float32Array(t.flatMap(e=>{let t=e.cluster??e.link?.[0]??-1,n=e.cluster??e.link?.[2]??-1;return[R.slot(z(t)),R.slot(z(n)),R.slot(au(t,e.memberEnds?.[0]??e.link?.[1]??-1)),R.slot(au(n,e.memberEnds?.[2]??e.link?.[3]??-1))]})),4)),c.setPositions(r),c.setColors(i),(e===`bundle`||e===`branch`)&&yu(c,t.flatMap(e=>e.anchorRoots126??[-1,-1]),n,(e,n,r,i,a)=>this.retargetEnd126(t[r],i,a)),dm(c,new Float32Array(t.map(e=>this.segmentGain(e))));let l=new Set,u=new Set;if(e!==`internal`&&e!==`access`){let e=new Float32Array(t.length*4);t.forEach((t,n)=>{let r=t.link??[-1,-1,-1,-1];e.set(r.map((e,t)=>t%2==0?Fd(e):e),n*4);for(let e of[0,2])r[e]>=0&&(l.add(r[e]),r[e+1]>=0&&u.add(`${r[e]}/${r[e+1]}`))}),c.setAttribute(`routeEndpoints`,new Ri(e,4))}e===`internal`&&(c.setAttribute(`routeCenter`,new Ri(a,3)),c.setAttribute(`densityLength`,new Ri(o,3)));for(let[n,r]of[[5,e===`internal`?.015:.06],[.85,e===`bundle`?.62:e===`ports`?.48:e===`access`?.42:e===`internal`?.22:.32]]){let i=new Ip({vertexColors:!0,linewidth:n,color:e===`bundle`?`#99c9bf`:e===`ports`||e===`access`||e===`internal`?`#b2b4d6`:`#8aabc8`,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:2});e===`internal`&&(i.onBeforeCompile=e=>{Object.assign(e.uniforms,{routeFocus:this.previewUniforms.focus,routeSpan:this.previewUniforms.span}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec3 routeCenter;attribute vec3 densityLength;varying float routeStyle;uniform vec3 routeFocus;uniform float routeSpan;`),e.vertexShader=e.vertexShader.replace(`vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;`,`vColor.xyz = instanceColorStart;routeStyle=densityLength.z;
              vec3 routeWorld=(modelMatrix*vec4(routeCenter,1.)).xyz;
              float ctx=.18+.82/(1.+pow(length(routeCenter-routeFocus)/max(.035,routeSpan*.7),1.4));
              float pixels=resolution.y/(max(1e-9,length(cameraPosition-routeWorld))*.79);
              vColor.xyz*=ctx*densityLength.x*smoothstep(.3,2.,densityLength.y*pixels);`)},i.customProgramCacheKey=()=>`macro-internal-context-v1`),e!==`internal`&&e!==`bundle`&&(i.onBeforeCompile=e=>{Object.assign(e.uniforms,{contextFocus:this.previewUniforms.focus,contextSpan:this.previewUniforms.span}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform vec3 contextFocus;uniform float contextSpan;`),e.vertexShader=e.vertexShader.replace(`vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;`,`vColor.xyz=instanceColorStart;vec3 delta=instanceEnd-instanceStart;float len2=dot(delta,delta);float along=len2>0.?clamp(dot(contextFocus-instanceStart,delta)/len2,0.,1.):0.;float dist=length(contextFocus-instanceStart-along*delta);vColor.xyz*=.18+.82/(1.+pow(dist/max(.035,contextSpan*.7),1.4));`)},i.customProgramCacheKey=()=>`macro-route-context-v2`),this.attachLod(i,!1,e===`internal`||e===`access`,e===`internal`),this.resolveOnly126&&(e===`bundle`||e===`branch`)&&bu(i);let a=Tu(new tm(c,i));if(a.visible=!1,this.group.add(a),this.lines.push({line:a,kind:e,base:r,segments:t,clusterIndices:s,linkRoots:l,linkGroups:u}),r>.1)for(let n of t)for(let t of[n.a,n.b]){let r=Xd(t);if(!this.endpointRoutes.has(r)){this.endpointRoutes.set(r,[]);let e=vm.get(r);e||(e=new Set,vm.set(r,e)),e.add(this)}this.endpointRoutes.get(r).push({line:a,segment:n,kind:e})}}}retargetEnd126(e,t,n){let r=Xd(t?e.b:e.a),i=Xd(n);if(t?e.b=[...n]:e.a=[...n],r===i)return;let a=this.endpointRoutes.get(r),o=a?.filter(t=>t.segment===e)??[];if(!o.length)return;let s=a.filter(t=>t.segment!==e);if(s.length)this.endpointRoutes.set(r,s);else{this.endpointRoutes.delete(r);let e=vm.get(r);e?.delete(this),e?.size||vm.delete(r)}this.endpointRoutes.set(i,[...this.endpointRoutes.get(i)??[],...o]);let c=vm.get(i);c||(c=new Set,vm.set(i,c)),c.add(this)}clearEndpointIndex117(){this.hasEndpointLines117=!1;for(let e of this.endpointRoutes.keys()){let t=vm.get(e);t?.delete(this),t?.size||vm.delete(e)}this.endpointRoutes.clear()}attachLod(e,t,n=!1,r=!1){let i=e.onBeforeCompile,a=e.customProgramCacheKey();e.onBeforeCompile=(a,o)=>{i.call(e,a,o),Object.assign(a.uniforms,{hierarchyLod:R.uniform,hierarchySize:R.sizeUniform,objectLodScale:this.previewUniforms.localScale,coarseReady:this.previewUniforms.coarseReady,outerRouteGain:this.routeLayers.outer,groupRouteGain:this.routeLayers.inner,focusRouteRoot:this.routeLayers.root,focusRouteGroup:this.routeLayers.group,focusAtParentLevel:this.routeLayers.atParent}),a.vertexShader=a.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec4 screenSlots;varying vec4 hierarchySlots;varying vec3 lodViewPosition;varying float routeLayer;`+(n?``:`attribute vec4 routeEndpoints;uniform float focusRouteRoot;uniform float focusRouteGroup;uniform float focusAtParentLevel;uniform float outerRouteGain;uniform float groupRouteGain;`+mm)).replace(`// clip space`,`hierarchySlots=screenSlots;routeLayer=${n?`1.`:`routeContextGain(routeEndpoints,focusRouteRoot,focusRouteGroup,outerRouteGain,groupRouteGain,focusAtParentLevel)`};lodViewPosition=(position.y<.5)?start.xyz:end.xyz;\n// clip space`),a.fragmentShader=a.fragmentShader.replace(`#include <common>`,`#include <common>
`+su+`
varying vec4 hierarchySlots;varying vec3 lodViewPosition;uniform float objectLodScale;uniform float coarseReady;uniform float groupRouteGain;varying float routeLayer;
`+(r?`varying float routeStyle;`:``)+Zl).replace(`gl_FragColor = vec4( diffuseColor.rgb, alpha );`,`float localGain=max(screenRoute(hierarchySlots.x),screenRoute(hierarchySlots.y));alpha*=${t?`1.-.88*localGain*coarseReady`:`localGain`};alpha*=${n?`groupRouteGain`:`routeLayer`};${r?`float groupReveal=max(`+(R.unresolvedMode?`screenRoute`:`screenContent`)+`(hierarchySlots.z),`+(R.unresolvedMode?`screenRoute`:`screenContent`)+`(hierarchySlots.w));alpha*=routeStyle>.5?(routeStyle<1.5?1.-groupReveal:groupReveal):1.;`:``}if(alpha<.00001)discard;gl_FragColor=vec4(diffuseColor.rgb,alpha);`)},e.customProgramCacheKey=()=>a+(t?`/coarse-local-v1`:n?`/cluster-local-4`:`/fine-local-v1`)+`/focus-links-parents-v82/`+r,Ad(e),hf(e),fm(e)}setFocus(e,t){this.focusRoot=e,this.focusGroup=t,this.routeLayers.root.value=Fd(e),this.routeLayers.group.value=t,this.refreshFocusParent()}directChild(e,t){return pm(z(e),au(e,t),e=>R.physicalParent(e))}refreshFocusParent(){this.focusAtParent=this.directChild(this.focusRoot,this.focusGroup)||this.highlighted.some(e=>e.root===this.focusRoot&&e.all),this.routeLayers.atParent.value=Number(this.focusAtParent)}get canAcceptPreview(){return this.pendingInternal.length<4}appendInternal(e,t=[]){this.clouds.append(e),this.appendGroups(t),sf(e)&&(this.pendingInternal.push(e),this.detailsBuilding=!0)}*buildPatch(e){this.internalRoutes+=sf(e);for(let t of e.clusters)this.internalTypes[t.morphology]=(this.internalTypes[t.morphology]??0)+1;let t=[],n=0;for(let r of cf(e))t.push({a:r.pa,b:r.pb,cluster:r.cluster,owner:this.data.id,style:r.kind,memberEnds:r.memberEnds,density:r.weight,length:Math.hypot(...r.pa.map((e,t)=>e-r.pb[t]))}),t.length>=gm?(this.addLines(`internal`,t,this.anchor),t=[],yield):++n%512==0&&(yield);this.addLines(`internal`,t,this.anchor),yield}endpointSelected(e,t=-1,n=-1){return this.highlightedOwners.includes(this.ownerOf(e))||t<0&&n<0&&this.directChildRoots.has(e)||zu(this.highlighted,e,t,n)}segmentGain(e){if(e.retired||this.retainedRoots&&[e.cluster,...e.link?[e.link[0],e.link[2]]:[]].some(e=>e!==void 0&&e>=8388608&&!this.retainedRoots.has(e)))return 0;let t=this.highlightActive;if(!t)return 1;let n=e.link?.[0]??e.cluster??-1,r=e.link?.[2]??e.cluster??-1,i=e.memberEnds?.[0]??e.link?.[1]??-1,a=e.memberEnds?.[2]??e.link?.[3]??-1;return Gu(t,this.endpointSelected(n,i,e.memberEnds?.[1]??-1),this.endpointSelected(r,a,e.memberEnds?.[3]??-1))}refreshCoarseSelection(){for(let e of this.coarseLines)dm(e.geometry,new Float32Array(this.coarseSelections.map(([e,t])=>this.segmentGain({a:[0,0,0],b:[0,0,0],link:[e,-1,t,-1],density:1,length:1}))))}setSelection(e){this.setHighlight(e.map(e=>({root:e,all:!0,groups:[],members:[]})),[],()=>-1)}setHighlight(e,t,n,r=e.length>0||t.length>0){let i=new Set(e.filter(e=>e.groups.some(t=>this.directChild(e.root,t))).map(e=>e.root)),a=JSON.stringify([e,t,r,[...i]]);if(this.ownerOf=n,a!==this.highlightKey){this.highlightKey=a,this.highlightActive=r,this.highlighted=e,this.highlightedOwners=t,this.directChildRoots=i,this.refreshFocusParent(),this.selectedClusters=new Set(e.map(e=>e.root)),this.previewUniforms.selectionActive.value=+!!r,this.refreshInternalColors(),this.refreshCoarseSelection();for(let e of this.previewLayers){let t=e.object.geometry,n=t.getAttribute(`chosen`),r=t.getAttribute(`cluster`),i=t.getAttribute(`groupId`),a=t.getAttribute(`memberIndex`);for(let t=0;t<e.used;t++)n.setX(t,Number(this.endpointSelected(Id(r.getX(t)),i.getX(t),a.getX(t))));n.needsUpdate=!0}}}refreshInternalColors(e){let t=new Set;for(let n of this.lines){if(t.has(n.line.geometry)||e&&n.kind!==`internal`&&n.kind!==`access`)continue;t.add(n.line.geometry);let r=n.line.geometry.getAttribute(`instanceColorStart`),i=n.line.geometry.getAttribute(`instanceColorEnd`),a=e?e.flatMap(e=>n.clusterIndices.get(e)??[]):n.segments.map((e,t)=>t);for(let e of a){let t=n.segments[e],a=n.kind===`internal`||n.kind===`access`?1-(this.detailFades.get(t.cluster)??0):1;r.setXYZ(e,a,a,a),i.setXYZ(e,a,a,a)}a.length&&(r.needsUpdate=!0,i.needsUpdate=!0),e||dm(n.line.geometry,new Float32Array(n.segments.map(e=>this.segmentGain(e))))}}setDetails(e,t){this.clouds.setDetails(e,t),this.previewUniforms.ids.value.fromArray(e.map(Fd)),this.previewUniforms.fades.value.fromArray(t);let n=new Map(e.map((e,n)=>[e,t[n]]).filter(([e])=>e>=0)),r=[...new Set([...this.detailFades.keys(),...n.keys()])].filter(e=>Math.abs((this.detailFades.get(e)??0)-(n.get(e)??0))>1e-6);this.detailFades=n,r.length&&this.refreshInternalColors(r)}update(e,t,n,r,i,a,o=1){if(this.overviewOffset<this.overviewQueue.length){let e=Math.min(this.overviewOffset+64,this.overviewQueue.length),t=this.overviewQueue.slice(this.overviewOffset,e);this.appendGroups(t);for(let e of t){this.overviewQueued.delete(e.id);let t=(this.overviewPending.get(e.cluster)??1)-1;t<=0?(this.overviewPending.delete(e.cluster),this.overviewReady.push([e.cluster,performance.now()])):this.overviewPending.set(e.cluster,t)}this.overviewOffset=e,e===this.overviewQueue.length&&(this.overviewQueue=[],this.overviewOffset=0)}this.previewUniforms.arrivalNow.value=performance.now();let s=Ul(t,e.fov);if(this.previewUniforms.localScale.value=s,this.clouds.update(e,t,a,i),this.lodDirty113||s!==this.lastLodFactor||e.position.distanceToSquared(this.lastLodPosition)>Math.max(.001,this.localLod.nearest*.03)**2){this.lodDirty113=!1,this.lastLod=performance.now(),this.lastLodPosition.copy(e.position),this.lastLodFactor=s;let n=e.position.toArray(),r=1,i=0,a=1/0,o=0;for(let o of this.data.members){let s=Math.hypot(...o.position.map((e,t)=>e-n[t])),c=Gl(s,t,e.fov);r=Math.min(r,c),i=Math.max(i,c),a=Math.min(a,s)}for(let r of this.coarseEdges){let i=r.samples??[this.coarseNodes.get(r.a),this.coarseNodes.get(r.b)];for(let r=1;r<i.length;r++){let s=ql(n,i[r-1],i[r]);a=Math.min(a,s),o=Math.max(o,Wl(s,t,e.fov))}}this.localLod={min:r,max:i,nearest:a,routeMax:o}}if(this.group.visible=this.localLod.max>.001||this.localLod.routeMax>.001||R.unresolvedMode&&this.data.members.some(e=>R.carrier(z(e.id))>.001),!this.group.visible&&!this.prepareAhead){this.hasEndpointLines117=!1;for(let e of this.lines)e.line.visible=!1;for(let e of this.coarseLines)e.visible=!1;return}if(!this.buildTask&&this.pendingInternal.length&&(this.buildTask=this.buildPatch(this.pendingInternal.shift())),this.buildTask&&(this.prepareAhead||R.canEnter(ou(this.data.id))||this.data.members.some(e=>(R.get(z(e.id))?.area??0)>.08||R.jointMode&&R.carrier(z(e.id))>.03))){let e=performance.now(),t=this.geometryBuilds;do if(this.buildTask.next().done){this.buildTask=null;break}while(performance.now()-e<_m&&this.geometryBuilds===t);this.maxBuildSliceMs=Math.max(this.maxBuildSliceMs,performance.now()-e)}this.detailsBuilding=!!this.buildTask||this.pendingInternal.length>0;let c=e.position.distanceTo(new P(...this.data.center)),l=this.data.radius*t/(Math.max(1e-5,c)*.79);this.blend=It.smoothstep(l,65,240),this.previewUniforms.coarseReady.value=this.detailsBuilt?It.smoothstep(performance.now()-this.readyAt,0,250):0,this.outerGain=Pl(i,t),this.groupGain=Fl(i,t),this.routeLayers.outer.value=this.outerGain,this.routeLayers.inner.value=this.groupGain,this.coarseLines.forEach((e,i)=>{e.visible=r&&o>.001&&this.blend>.001&&(this.groupGain>.001||this.focusAtParent&&this.coarseNodes.has(this.focusRoot))&&(this.outerGain>.001||this.coarseNodes.has(this.focusRoot)),e.visible=e.visible&&(this.shaderPreparation?.ready(e)??!0),e.material.opacity=[.025,.48][i]*this.blend*o*(1-It.smoothstep(this.localLod.nearest,2,8)),e.material.resolution.set(n,t)});let u=It.lerp(.3,1,It.smoothstep(i,.008,1)),d=1-It.smoothstep(i,.15,8);this.previewUniforms.height.value=t,this.previewUniforms.fade.value=1,this.previewUniforms.focus.value.copy(a).sub(this.anchor),this.previewUniforms.focusWorld.value.copy(a),this.previewUniforms.span.value=i,this.previewUniforms.reveal.value=this.localLod.max,this.previewUniforms.activeOwner.value=this.data.id;let f=new Set,p=new Set,m=new Map,h=performance.now();this.newRouteBuffers=0,this.hasEndpointLines117=!1;for(let e of this.lines){if(!r&&!this.prepareAhead){e.line.visible=!1;continue}let i=e.line.geometry,a=e.kind===`bundle`||e.kind===`branch`||e.kind===`ports`?(this.outerGain>.001||e.linkRoots.has(this.focusRoot))&&(this.groupGain>.001||e.linkGroups.has(`${this.focusRoot}/${this.focusGroup}`)||this.focusAtParent&&e.linkRoots.has(this.focusRoot)):this.groupGain>.001;if(!m.has(i)){let t=this.geometryRootSlots.get(i);t||(t=[...new Set([...e.clusterIndices.keys(),...e.linkRoots])].map(e=>R.slot(z(e))),this.geometryRootSlots.set(i,t));let n=r&&o>.001&&t.some(e=>R.routeAt(e)>.001)&&a;n&&f.add(i),(n||this.prepareAhead)&&!this.routeActivatedAt.has(i)&&(this.newRouteBuffers>=1?n=!1:(this.routeActivatedAt.set(i,h),this.newRouteBuffers++)),m.set(i,n)}let s=this.prepareAhead||m.get(i)?this.shaderPreparation?.ready(e.line)??!0:!1;e.line.visible=m.get(i)&&s,e.line.visible&&(p.add(i),e.base>.1&&(this.hasEndpointLines117=!0));let c=e.kind===`ports`||e.kind===`access`?.12+.88*d:e.kind===`branch`?1-d*.6:1;e.line.material.opacity=e.base*u*c*o*It.smoothstep(h-(this.routeActivatedAt.get(i)??h),0,180),e.line.material.resolution.set(n,t)}this.requiredRouteBatches=f.size,this.readyRouteBatches=p.size,this.uploadProgress=f.size?p.size/f.size:1,this.previewUniforms.coarseReady.value*=this.uploadProgress;for(let e of this.previewLayers)if(this.previewSettled111.has(e.object))e.object.visible=!1;else if(e.object.visible=this.shaderPreparation?.ready(e.object)??!0,R.unresolvedMode){let t=e.object.geometry,n=t.getAttribute(`cluster`),r=t.getAttribute(`alive`),i=!1;for(let t=0;t<e.used;t++){let e=this.clouds.readyRoots.get(Id(n.getX(t)));if(e===void 0)continue;let a=1-It.smoothstep(performance.now()-e,0,300);Math.abs(r.getX(t)-a)>.001&&(r.setX(t,a),i=!0)}i&&(r.needsUpdate=!0);let a=!1;for(let t=0;t<e.used;t++)if(r.getX(t)>.001){a=!0;break}!a&&e.used&&(this.previewSettled111.add(e.object),e.object.visible=!1)}}previewRootState(e){let t=0,n=0,r=Fd(e);for(let e of this.previewLayers){let i=e.object.geometry,a=i.getAttribute(`cluster`),o=i.getAttribute(`alive`);for(let i=0;i<e.used;i++)a.getX(i)===r&&(t++,o.getX(i)>0&&n++)}return{root:e,members:t,alive:n,visible:this.group.visible,fade:this.previewUniforms.fade.value}}get previewFade(){return this.previewLayers.length?this.previewUniforms.fade.value:0}endpointWeight(e,t,n,r,i=Xd(e.toArray())){let a=0;if(r!==void 0&&(!this.resolveOnly126||wu(r))&&this.coarseNodes.has(r))for(let e of this.coarseLines)e.visible&&(a=Math.max(a,e.material.opacity*.12));for(let e of this.endpointRoutes.get(i)??[]){if(!e.line.visible||this.resolveOnly126&&e.segment.anchorRoots126?.some(e=>e>=0&&!wu(e)))continue;let i=e.segment.cluster??e.segment.link?.[0]??r??-1,o=e.segment.cluster??e.segment.link?.[2]??i,s=e.segment.memberEnds?.[0]??e.segment.link?.[1]??-1,c=e.segment.memberEnds?.[2]??e.segment.link?.[3]??-1,l=Math.max(R.route(z(i)),R.route(z(o))),u=R.unresolvedMode?Math.max(R.route(au(i,s)),R.route(au(o,c))):Math.max(R.content(au(i,s)),R.content(au(o,c))),d=e.segment.style??0;a=Math.max(a,e.line.material.opacity*this.segmentGain(e.segment)*l*(d===1?1-u:d===2?u:1)*(e.kind===`internal`?(1-(this.detailFades.get(e.segment.cluster)??0))*It.smoothstep(e.segment.length*n/(Math.max(1e-9,t.position.distanceTo(new P(...this.internalCenters.get(e.segment.cluster)??e.segment.a)))*.79),.3,2)*e.segment.density:1))}return a}snapshot(){return{routeBufferIds126:this.lines.map(e=>e.line.geometry.uuid),highlight:{opacityMode:`alpha`,actualOpacity:[...new Set(this.lines.flatMap(e=>Array.from(e.line.geometry.getAttribute(`routeSelectionOpacity`).array)))],active:this.highlightActive,owners:this.highlightedOwners,members:this.highlighted,routeGains:[...new Set(this.lines.flatMap(e=>e.segments.map(e=>this.segmentGain(e))))]},clouds:this.clouds.snapshot(),uploadProgress:this.uploadProgress,requiredRouteBatches:this.requiredRouteBatches,readyRouteBatches:this.readyRouteBatches,routeBatchSegments:gm,canAcceptPreview:this.canAcceptPreview,newRouteBuffers:this.newRouteBuffers,geometryBuilds:this.geometryBuilds,focusRoot:this.focusRoot,focusGroup:this.focusGroup,groupRouteGain:this.groupGain,directOutgoingBatches:this.lines.filter(e=>e.line.visible&&e.linkRoots.has(this.focusRoot)&&(this.groupGain>.001||e.linkGroups.has(`${this.focusRoot}/${this.focusGroup}`)||this.focusAtParent&&e.linkRoots.has(this.focusRoot))).length,outerRouteGain:this.outerGain,outerLinesVisible:this.lines.some(e=>(e.kind===`bundle`||e.kind===`branch`||e.kind===`ports`)&&e.line.visible),localLod:{...this.localLod},queuedBatches:this.pendingInternal.length,previewBuffers:this.previewLayers.length,previewObjects:this.previewIds.size,detailsBuilding:this.detailsBuilding,buildMs:this.buildMs,maxBuildSliceMs:this.maxBuildSliceMs,routeRelation:{atParentLevel:this.focusAtParent,parent:R.physicalParent(au(this.focusRoot,this.focusGroup)),directChildRoots:[...this.directChildRoots]},coarse:{directSelectionGains:[...new Set(this.coarseSelections.flatMap(([e,t],n)=>e===this.focusRoot||t===this.focusRoot?[this.coarseLines[0]?.geometry.getAttribute(`routeSelectionOpacity`).getX(n)??0]:[]))],edges:this.coarseEdges.length,visible:this.coarseLines.some(e=>e.visible),opacity:this.coarseLines[1]?.material.opacity??0},detailsBuilt:this.detailsBuilt,selectedClusters:[...this.selectedClusters],bundleVisible:this.localLod.routeMax>0&&this.lines.some(e=>e.kind===`bundle`&&e.line.visible),internal:{clusters:this.data.internal?.clusters.length??0,routes:this.internalRoutes,weight:this.previewUniforms.reveal.value,types:this.internalTypes,linesVisible:this.localLod.max>0&&this.lines.some(e=>e.kind===`internal`&&e.line.visible)},clusterReveal:this.previewUniforms.reveal.value,contextRoots:this.contextRoots,access:this.accessCount,renderedAccess:this.renderedAccess,joinedBridges:this.joinedBridges,exits:this.exits,id:this.data.id,activeRoot:this.activeRoot,members:this.data.members.length,radius:this.data.radius,parents:this.data.parentEdges,edges:this.data.edges.length,bundles:this.data.edges.filter(e=>e.kind===`bundle`).length,blend:this.blend,previews:this.data.previews?.length??0,bridges:this.data.bridges?.length??0,previewFade:this.previewFade,anchor:this.anchor.toArray()}}retainRoots(e){this.retainedRoots=e,this.clouds.retainRoots(e);for(let t of this.lines)for(let n of t.segments)[n.cluster,...n.link?[n.link[0],n.link[2]]:[]].some(t=>t!==void 0&&t>=8388608&&!e.has(t))&&(n.retired=!0);this.refreshInternalColors();for(let t of this.previewLayers){let n=t.object.geometry,r=n.getAttribute(`alive`),i=n.getAttribute(`cluster`);for(let n=0;n<t.used;n++)r.setX(n,r.getX(n)>0&&e.has(Id(i.getX(n)))?1:0);r.needsUpdate=!0}}dispose(){this.overviewQueue=[],this.overviewPending.clear(),this.overviewQueued.clear(),this.overviewReady=[],this.previewBorn.clear(),this.clearEndpointIndex117(),this.clouds.dispose(),this.buildTask=null,this.pendingInternal=[],this.detailsBuilding=!1;for(let e of this.coarseLines)this.releaseLine(e);for(let{line:e}of this.lines)this.releaseLine(e);for(let e of this.previewLayers){let t=()=>{e.object.geometry.dispose(),e.object.material.dispose()};this.shaderPreparation?this.shaderPreparation.release(e.object,t):t()}this.previewLayers=[],this.previewIds.clear(),this.group.clear()}};function xm(e){return e.selected?{anchor:e.selected,reason:`selection-lock`}:!e.outside&&e.inward&&e.hovered?{anchor:e.hovered,reason:`hover`}:!e.inside&&e.outside&&e.central?{anchor:e.central,reason:`center-fallback`}:{anchor:e.focus,reason:`view-focus`}}function Sm(e,t,n,r,i={minimum:1e-8,maximum:450}){let a=Math.hypot(...e.camera.map((e,n)=>e-t[n]));if(a<1e-25)return e;let o=Math.exp(Math.max(-600,Math.min(600,r))*.0025),s=Math.max(Math.max(i.minimum,n*(i.surfaceFactor??1.35)),Math.min(i.maximum,a*o))/a;return{camera:e.camera.map((e,n)=>t[n]+(e-t[n])*s),target:e.target.map((e,n)=>t[n]+(e-t[n])*s)}}function Cm(e,t,n){return 2*Math.max(1e-10,Math.hypot(...e.map((e,n)=>e-t[n])))*Math.tan(n*Math.PI/360)}function wm(e,t,n){return e===0||n!==null&&t===n}var Tm={super:`超星系团`,cluster:`星系团`,group:`星系群`,galaxy:`星系`};function Em(e){return`${e.count>0?`已锁定 ${e.count} 个 · 滚轮保持 ${e.primary} · 右键单击解锁`:e.network?`航道叠层 · 悬浮预览，左键选择整体`:`悬浮预览 · 左键选择当前结构`} · 当前选取：${Tm[e.tier]}${e.error?` · `+e.error:e.pending?` · 正在展开…`:``}`}var Dm=class{items=new Map;get values(){return[...this.items.values()]}get primary(){return this.values.at(-1)??null}get size(){return this.items.size}click(e,t=!1){t||this.items.clear(),t&&this.items.has(e.id)?this.items.delete(e.id):this.items.set(e.id,e)}replace(e){this.items.has(e.id)&&this.items.set(e.id,e)}resolve(e,t){if(!this.items.has(e))return;let n=new Map;for(let[r,i]of this.items){let a=r===e?t:i;n.has(a.id)&&n.delete(a.id),n.set(a.id,a)}this.items=n}clear(){this.items.clear()}};function Om(e,t,n,r,i){return r.map((r,a)=>(-e*r+t*i[a])*n)}function km(e,t){return t===`cluster`?{id:`cluster-${e}`,kind:`cluster`}:t===`group`?{id:`G-${e}/group-0`,kind:`group`}:t===`galaxy`?{id:`G-${e}`,kind:`galaxy`}:{id:`mass-${e}`,kind:`space`}}var Am=()=>new URL(`./pilot-data/`,location.href).href,jm=await fetch(new URL(`./atlas-display.json`,location.href)).then(e=>{if(!e.ok)throw Error(`Display descriptor unavailable`);return e.json()});if(!/^\.\/[a-z0-9-]+\/$/.test(jm.preparedPath))throw Error(`Invalid display path`);var Mm=await fetch(new URL(jm.preparedPath+`index.json`,location.href)).then(e=>{if(!e.ok)throw Error(`Display index unavailable`);return e.json()});if(Mm.key!==jm.cacheKey)throw Error(`Incorrect display index`);var Nm=new Set(Mm.blocks.flatMap(e=>e.roots)),B=await fetch(new URL(`./pilot-data/manifest.json`,location.href)).then(e=>{if(!e.ok)throw Error(`样区目录读取失败`);return e.json()}),Pm=af(location.href,B?.examples.length??3),Fm=!!B?.hierarchy99,Im=!!(B?.directory96||Fm);R.setStrict(Im),R.setDistanceMode(Im),R.setUnresolvedMode(Fm),R.setJointMode(!!B?.hierarchy100),Yl(!!B?.hierarchy100),B&&B.examples.forEach((e,t)=>{Yu[t]={name:e.label,position:xf.log(_f,e.observer),note:B.hierarchy100?`固定团目录 · 共同邻域生成；天体提前，航道近距展开`:Fm?`固定全景团目录 · 同源拟合按需展开；密度与总量后续校准`:B.version>=87?`全域36.88亿 · 分尺度拟合按需展开；各地点共用同一宇宙`:B.calibration?`全域36.88亿 · ${B.version>=76?`半径4.5亿光年取样窗（不是天体边界） · `:``}可按需展开${B.calibration.regions[t].count}个星系；样区外仅宏观目录`:`71共享物质场 · 三个相邻跨界样区之一；样区外仅宏观目录`}});var Lm=Pm,Rm=Pm,zm=!1,V=new Map(B?.roots.map(e=>[e.id,e])??[]),Bm=null,Vm=!!B&&B.version>=87,Hm=new Map,Um=new Map,Wm=-1,Gm=new Map,Km=new Map,qm=new Map;document.querySelector(`#app`).innerHTML=`
<header><a class="brand" href="#">◉ <span>宇宙图景<small>D0009 / MACRO VISUAL STUDY</small></span></a><div class="header-note"><i></i> 独立视效样板<span>126 · 统一缓存与只读预取</span></div><button id="helpButton" class="quiet">说明</button></header>
<main><section id="viewport" aria-label="可旋转的球形宇宙"><div class="scene-title"><p class="eyebrow">OBSERVABLE UNIVERSE</p><h1>织成宇宙的光</h1><p>丝状体、星系群与空洞，存在于同一个三维空间。</p></div><div class="view-tools"><button id="tour" class="tour-button">连续推近示范</button><button id="home">全景 <kbd>H</kbd></button><button id="rotate" aria-pressed="false">缓慢旋转</button><button id="clean" aria-pressed="false">纯净视图</button></div><div id="groupLabels"></div><div id="superLabels"></div><div class="depth-navigation"><small id="structureLabel">同一个宇宙 · 连续尺度</small><div><button data-depth="0" class="active">宇宙</button><span>›</span><button data-depth="1">超星系团</button><span>›</span><button data-depth="2">星系团</button><span>›</span><button data-depth="3">星系群</button><span>›</span><button data-depth="4">星系</button><span>›</span><button data-stellar-entry="system">恒星系</button><span>›</span><button data-stellar-entry="planet">行星</button></div><small id="detailStatus">滚轮连续推进，近景逐渐展开</small></div><div id="extraSelections"></div><div id="reticle" hidden><span></span><small id="reticleLabel"></small></div><div id="hover" hidden></div><div class="scale"><b id="sphereDiameter">观测球直径 930 亿光年</b><span id="scaleLabel">焦点平面标尺</span><div class="scale-rule" id="scaleRule"></div><small id="viewLabel">球体全景</small></div><div class="view-caption"><b>每一个光点，都有自己的位置。</b><span>左键选中 · 右键解锁/拖动 · Ctrl＋滚轮穿透</span></div><div id="earlyLegend" class="early-legend">源端示意：背景辐射与早期气体</div><div id="loading"><i></i><b>展开宇宙结构</b><span>建立星系目录与当前观测窗…</span></div></section>
<aside><section class="panel-section">${tf()}${B?.hierarchy104?`<label class="toggle">局部生成 <select id="detailGrid104" aria-label="局部生成方案"><option value="4">4³ 对照</option><option value="8">8³ 优化</option></select></label><label class="toggle">计算后端 <select id="numeric126" aria-label="计算后端"><option value="cpu">CPU 参考</option><option value="cuda">CUDA 双精度</option></select></label><small id="numericStatus126" class="tiny"></small>`:``}</section><section class="panel-section"><div class="section-heading"><span>01</span><h2>观测地点</h2></div><p class="muted">观测窗以当前位置为中心；世界是曲率半径${xf.radius*10}亿光年的三维超球面。</p><div class="site-buttons">${Yu.map((e,t)=>`<button data-site="${t}" class="${t===Pm?`active`:``}">${e.name}</button>`).join(``)}</div><button id="stepSphere" class="wide quiet" title="视效观测位置工具，不是飞船移动或超光速航行">沿大圆换位 45°</button><div class="site-info"><i></i><div><b id="siteName">原点观测站</b><small id="siteCoordinates">0.0 / 0.0 / 0.0 十亿光年</small></div></div><svg id="windowMap" viewBox="0 0 260 110" aria-label="观测窗在共同空间中的位置"><defs><pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M16 0H0V16" fill="none" stroke="#243332" stroke-width=".5"/></pattern></defs><rect x="0" y="0" width="260" height="110" fill="url(#grid)"/><ellipse cx="130" cy="55" rx="47" ry="47" fill="none" stroke="#788c8c" stroke-dasharray="2 5" opacity=".45"/><circle id="windowCircle" cx="130" cy="55" r="47" fill="#a4d6c10b" stroke="#87b59f"/><circle id="windowCenter" cx="130" cy="55" r="2" fill="#a3d7c0"/><text x="10" y="101" fill="#778581" font-size="11">超球位置 · X/W 投影</text></svg><p id="siteNote" class="tiny">初始观测地点</p></section>
<section class="panel-section"><div class="section-heading"><span>02</span><h2>显示图层</h2></div><label class="toggle"><span>球形观测边界<small>辅助轮廓，非宇宙外墙</small></span><input id="boundary" type="checkbox" checked></label><label class="toggle"><span>航道参考叠层<small>布局预览，不表示已有文明或交通</small></span><input id="network" type="checkbox"></label><label class="slider-label" for="visionMode">视野时间</label><select id="visionMode"><option value="lightcone">光行时视野 · 接收过去</option><option value="current">超光速视野 · 全局当前</option></select><p class="tiny" id="visionNote">第六阶段视效预览；同一空间范围内比较历史与当前。</p><label class="toggle"><span>光行时着色<small>接收可见光 · 隐藏早期气体／微波示意</small></span><input id="ageColor" type="checkbox"></label><label class="toggle"><span>早期物质与微波示意<small>仅关闭红移时显示，非肉眼亮度</small></span><input id="earlyMatter" type="checkbox" checked></label><label class="slider-label" for="generator">宇宙生成</label><select id="generator"><option value="pilot71">固定团目录 · 同源邻域生成</option><option value="density-field">旧密度场比较</option><option value="legacy">旧版骨架 · 同规则对照</option></select><p class="tiny">切换会重新打开另一套宇宙，原版本仍可对照。</p><div class="early-examples"><button data-early=".00003">透明化前</button><button data-early=".03">暗时代</button><button data-early=".22">宇宙黎明</button><button data-early=".7">年轻星系</button></div><label class="slider-label" for="galaxyExample">查看附近已生成的星系</label><select id="galaxyExample"><option value="3">棒旋星系</option><option value="0">旋涡星系</option><option value="1">椭球星系</option><option value="4">近球状星系</option><option value="2">不规则星系</option><option value="5">环境扰动较强</option></select><button id="showGalaxyExample" class="wide quiet">定位这一形态</button><label class="slider-label" for="exposure">光点亮度 <output id="exposureValue">100%</output></label><input id="exposure" type="range" min="0.5" max="2.1" value="1" step=".05"></section>
<section class="panel-section"><label><input id="background109" type="checkbox" checked> 空闲时继续准备其它区域</label><p id="backgroundStatus109" class="tiny">正在建立准备仓库</p></section><section class="panel-section selection"><div class="section-heading"><span>03</span><h2>所选结构</h2></div><div id="emptySelection"><span class="target-icon">⌖</span><p>点击选择当前尺度的结构</p><small>查看身份、位置和收到的光来自何时。</small></div><div id="selection" hidden><p id="selectionCount" class="tiny"></p><div class="object-name"><b id="objectId"></b><small id="objectKind">星系目录对象 · 宏观取样</small></div><dl><div><dt>相对距离</dt><dd id="objectDistance"></dd></div><div><dt>光线发出年代</dt><dd id="objectEpoch"></dd></div><div><dt>回望时间</dt><dd id="objectAge"></dd></div></dl><p id="objectPosition" class="tiny"></p><button id="focus" class="primary wide">靠近所选光点 <span>↗</span></button><button id="observeHere" class="wide quiet">以此为观测地点</button></div><p id="outside" class="tiny" hidden>所选对象在这个地点的观测窗外。</p><button id="matterSample" class="wide quiet">查看团间纤维中的星系</button><small id="matterSampleNote" class="tiny">团间天体独立存在，关闭航道也可探索。</small></section>
</aside></main><footer><div><i></i><b id="count">生成目录中</b><span id="total"></span></div><div><span>共同时间</span><b id="clock">138.00 亿年</b><button id="timePlay">▶ 时间</button><select id="timeRate" aria-label="时间倍率"><option value="1">1天/秒</option><option value="30">30天/秒</option><option value="365.25">1年/秒</option><option value="365250">千年/秒</option></select><input id="customTimeRate" aria-label="自定天数每秒" type="number" min="0.000001" step="any" placeholder="天/秒"><button id="advance" title="推进简化历史采样的共同时间">+ 1000 万年</button></div></footer>
<dialog id="help"><button id="closeHelp" class="close">×</button><p class="eyebrow">只确认这一层的视觉</p><h2>同一个宇宙，不同地点的过去</h2><p>左键拖动旋转；左键单击替换并锁定目标，Ctrl / Shift 加点击增减多选，最后加入者是镜头主目标。Ctrl＋滚轮在鼠标下重叠目标间按前后切换（下滚更远、上滚更近、首尾循环），预览目标周围暂时调暗；Ctrl＋左键才切换加入/移出多选，移开鼠标仍保留预览，下次滚轮才重新取目标；Ctrl＋左键拖动围绕预览目标旋转。松开Ctrl只取消未提交的预览。普通滚轮缩放、Ctrl点击多选保持。点击按当前尺度选取整体，细层成员在更近尺度才可单独选择；点击其它星系团先选中全团。各星系团与航道按自身到摄像头的距离逐渐展开，近处先显示；内部网络按靠近顺序分批准备。悬停仅预览，滚轮双向保持锁定；没有锁定时向悬停对象靠近。右键单击解除全部锁定，右键拖动按当前标尺平移且不解锁。按 H 返回全景并保留选中。</p><p>所有显示光点有稳定目录身份，观测地点读取同一个三维超球面；沿大圆换位八次会回到原处。每个点的位置按其光线发出年代采样；镜头移动不改变观测主体。未显示的点仍存在于共同目录。</p><p>这是程序生成的视效样板，不是实测宇宙地图。采用简化膨胀与光行时模型作演示，未模拟真实星系演化；外圈是本次观测窗，不是整个超球的边界。距离使用球面测地长度；画面是以观测者为中心的三维径向展开，航道仅用于确认叠层样式。“超光速全局当前”使用同一空间范围，重新读取同一当前年代的位置和星族，不推进世界时钟；这是第六阶段视效预览，不给普通主体开放世界真值。切换视野时间保留原有恒星系/行星层级与相对镜头；该年代尚未形成的天体只保留位置说明。当前视野隐藏过去的最后散射壳，不表示今天没有背景辐射。可连续展开由原全局光点组成的超星系团，再展开星系团、星系群和星系形态，23版增加同源三维恒星取样与恒星系/行星近景。每个星系22,000颗取样恒星均可选择，行星按稳定种子展开；这不是正式版恒星数量上限。25版轨道接共同时间，缩放不再切换右侧界面；用“天体详情”主动打开列表。增加有限非共面小天体、核区黑洞及流浪行星。星族比例是形成史/质量/年龄近似，非校准星表；红移对恒星黑体连续谱移频和衰减，宏观星系仅用有效谱近似，尚无完整谱线/尘埃/引力红移模型。未接探索建设玩法。</p><p class="tiny">网页只绘制当前观测窗中的目录对象。远景点的尺寸放大以便选择；靠近后按声明的视效尺度展示星系外形。新增邻域是确定性的程序取样，不是实测星表。</p></dialog>`,nf();var Jm=document.querySelector(`#numeric126`);Jm&&(Jm.disabled=!0,Jm.value=`cuda`);var Ym=document.querySelector(`#detailGrid104`);Ym&&(Ym.value=new URL(location.href).searchParams.get(`detailGrid`)===`4`?`4`:`8`,Ym.onchange=()=>{let e=new URL(location.href);e.searchParams.set(`detailGrid`,Ym.value),location.assign(e.href)});var H=e=>document.getElementById(e);function Xm(e,t){let n=H(e);n.textContent!==t&&(n.textContent=t)}var U=H(`viewport`),Zm=document.createElement(`div`);Zm.className=`published-coverage`,Zm.setAttribute(`role`,`status`),Zm.textContent=`Detailed view unavailable outside the published region.`,Zm.hidden=!0,U.append(Zm);var Qm=Tu(new Ni);Qm.background=new Or(`#010304`);var W=new jl({antialias:!0,powerPreference:`high-performance`});W.setPixelRatio(Math.min(devicePixelRatio,1.75)),W.outputColorSpace=Je,W.info.autoReset=!1,U.prepend(W.domElement),W.domElement.setAttribute(`aria-label`,`三维宇宙光点`),W.domElement.tabIndex=0;var G=new Mp(W.domElement),K=G.camera,$m=G,eh=new wi(43,1,1e-10,1200);K.position.set(82,49,102).normalize().multiplyScalar(140),K.lookAt($m.target);var th=Tu(new Ai);Qm.add(th);var nh=new Vd,rh=new Eu(W,nh.object),ih={},ah=new Cf;th.add(ah.object);var oh=null,sh=new P,ch=-1,lh=!1,uh=null,dh=new Map,fh=new Map,ph={coarse:0,full:0,internalBuilds:0,previewRequests:0},mh=null,hh=null,gh=new Op(e=>rh.prepare(e,K,Qm),e=>{mh=`图形程序准备失败：${String(e)}`}),_h=new Bf,vh=0,yh=Ju,bh=null,q=null,xh=null,Sh=-1,Ch=0,wh=0,Th=Ju,Eh=[..._f],Dh=null,Oh=[],J=null,kh=0,Ah=!1,jh=null,Mh=!1,Nh=null,Ph=null,Fh=null,Ih=[],Lh=!1,Rh=0,zh=[],Y=new Map,X=null,Bh=(B?.version??0)>=88,Vh=new Map,Hh=()=>Bh?[...Vh.values()]:X?[X]:[],Uh=e=>{let t=V.get(e)?.owner??q?.owners[fh.get(e)??-1];return(t===void 0?void 0:Vh.get(t))??Hh().find(t=>t.clouds.has(e)||t.data.members.some(t=>t.id===e))},Wh=0,Gh=!1,Kh=0;function qh(e){for(let t of e.previews??[])t.galaxy.group===0&&xu(t.cluster,t.position);e.internal=lg.get(e.id)??e.internal,e.previews=cg.get(e.id)??e.previews;let t=Vh.get(e.id);B?.hierarchy104&&t&&(e={...e,members:[...new Map([...t.data.members,...e.members].map(e=>[e.id,e])).values()],endpoints:[...new Map([...t.data.endpoints,...e.endpoints].map(e=>[e.id,e])).values()],edges:[...new Map([...t.data.edges,...e.edges].map(e=>[e.id,e])).values()],bridges:[...new Map([...t.data.bridges??[],...e.bridges??[]].map(e=>[e.id,e])).values()],access:[...new Map([...t.data.access??[],...e.access??[]].map(e=>[e.id,e])).values()],internal:lg.get(e.id)??t.data.internal??e.internal});let n=t===X;if(!B?.hierarchy104&&t&&t.data.members!==e.members){let n=new Set(e.members.map(e=>e.id));t.data.members.some(e=>!n.has(e.id))&&t.retainRoots(n)}t?t.updateContext(e):(t=new bm(e,gh),th.add(t.group),Vh.set(e.id,t),e.internal&&t.rebase(new P(...e.center),J?.data.root??e.id,[e],[...Y.keys()]));for(let[t,n]of pg)n.id===e.id&&pg.set(t,e);return n&&(X=t),t}var Jh=!1,Yh=0,Xh=new Set,Zh=new Set,Qh=[],$h=``,eg=0,tg=null,ng=null,rg=new Map,ig=0;function ag(){let e=Z.primary?.root;if(e!==void 0&&!Nm.has(e)||!B?.hierarchy104||nv||wh!==Ch||e===void 0)return;let t=[Ch,e].join(`:`);if($h===t||tg?.key===t&&tg.complete)return;tg?.key!==t&&(tg={key:t,at:Ud()}),$h=t,eg++;let n=p_();B_({knownWorldRevision:Wm,knownPreviewRoots:(lg.get(Nv(e)??-1)??Vh.get(Nv(e)??-1)?.data.internal)?.clusters.map(e=>e.root)??[],kind:`prepare-groups106`,started106:tg.at,seq:eg,viewSeq:Ch,root:e,pilotBase:Am(),generator:Yg,generatorParameters:Xg,origin:Eh,epoch:q?.epoch??Th,mode:dd.value?`current`:`lightcone`,camera:{position:K.position.toArray(),planes:n.planes.map(e=>[...e.normal.toArray(),e.constant]),fov:K.fov,aspect:U.clientWidth/U.clientHeight,radius:1}})}function og(){tg=null,$h&&($h=``,eg++,ng=null,B_({kind:`stop-groups106`}))}var sg=[],cg=new Map,lg=new Map,ug=!1,dg=0,fg=new Set,pg=new Map,mg=[],hg=new WeakMap,gg=new Set,_g=null,vg=``,yg=0,bg=NaN,xg=NaN,Sg=new Af,Cg=!1,wg=null,Tg=null,Eg=new Of(U),Dg=document.createElement(`div`);Dg.className=`depth-preview-marker`,Dg.hidden=!0,Dg.innerHTML=`<small></small>`,U.append(Dg);var Og=document.createElement(`div`);Og.id=`depthPickHint`,Og.className=`depth-pick-hint`,Og.hidden=!0,U.append(Og);var Z=new Dm,kg=new Map,Ag=null,jg=null,Mg=null,Ng=null,Pg=null,Fg=null,Ig=null;function Lg(e){let t=Q.active?Q.galaxyId:Ph,n=t?J?.galaxy(t):void 0,r=n?J?.worldPosition(n.id):null;return!n||!r?1:.04+.96*It.smoothstep(e.distanceTo(r)/n.radius,3,12)}var Q=new Ap(W,U,{clock:_h,navigation:G,medium:()=>J?.galacticMedium??null,depthActive:()=>Sg.hasTarget&&Cg,selection:{read:()=>Z.values.flatMap(e=>e.near?[e.near]:[]),locked:()=>!!Z.size,replace:e=>{let t=J?.data.galaxies.find(e=>e.id===Q.galaxyId);if(t&&J){Z.clear();for(let n of e)Z.click({id:n.id,near:n,kind:`galaxy`,root:J.data.root,galaxy:t,position:Q.worldProxy(n),radius:t.radius,reason:`stellar-child`},!0);Q_()}}},enter:()=>{sv=null,lv(),H(`reticle`).hidden=!0,H(`hover`).hidden=!0},exit:(e,t,n,r)=>{let i=Q.galaxyRadius;!r&&e.distanceTo(t)<i*2&&K.position.copy(t).add(new P(0,0,i*3).applyQuaternion(n)),sh.copy(t),lh=!0,_g=Z.primary??null,vg=Z.primary?.id??``,yg=performance.now();for(let e of Y.values())e.setExternalDetail(null)},background:(e,t,n,r,i,a)=>{let o=eh,s=$.uniforms.gain.value;$.uniforms.gain.value=s*Lg(e),o.aspect=U.clientWidth/U.clientHeight,o.position.copy(e),o.quaternion.copy(t),o.near=1e-10,o.far=1200,o.updateProjectionMatrix(),o.updateMatrixWorld(),$.uniforms.objectLodScale.value=Ul(U.clientHeight,o.fov),$.uniforms.contextFocus.value.copy(n),$.uniforms.viewSpan.value=r,$.uniforms.hoverOwner.value=-1;for(let e of Y.values())e.setExternalDetail(Q.galaxyId??null,i);return gy(r,Z.primary?.root??J?.data.root,n,1-i,o),Kg.visible=!1,Ug.visible=H(`boundary`).checked,Gg.visible=o.position.length()>qu*1.01,wd(o,Sg.hasTarget&&Cg?a:null,Q.depthWorldRadius()),W.autoClear=!0,W.render(Qm,o),rh.render(o,Qm),Eg.update(o,Sg.hasTarget&&Cg?a:null,new P,qu,U.clientWidth,U.clientHeight,Q.depthWorldRadius()),$.uniforms.gain.value=s,s}}),Rg=null;function zg(e,t,n){let r=J?.worldPosition(e.id);if(!r||!J)return;if(!J.prepareGalaxy(e)){(Rg?.galaxy.id!==e.id||t||n)&&(Rg={galaxy:e,mode:t,restore:n,root:J.data.root});return}Rg=null;let i=new Rt().setFromEuler(new Kn(...e.angles)).invert(),a=J.data.routes.filter(t=>t.a===e.id||t.b===e.id).flatMap(t=>{let n=t.a===e.id?t.b:t.a,a=J.data.galaxies.find(e=>e.id===n),o=Yf(Gf(a,1),0),s=new P(...fp(o.position,a.angles));return o.temperature<=0||o.luminosity<=0?[]:[{id:o.id,position:J.worldPosition(n).sub(r).multiplyScalar(1e9).add(s).applyQuaternion(i)}]});Q.enter(e,r,K,$m.target,Z.primary?.id,a),t&&Q.example(t),n&&Q.restoreViewState(n)}function Bg(e){if(!J){Ag=e,mv(),xh!==null&&F_(xh,!0);return}let t=e===5?[...J.data.galaxies].sort((e,t)=>(t.environment?.tidal[0]??0)-(e.environment?.tidal[0]??0))[0]:J.data.galaxies.find(t=>Ff(t).family===e);if(!t){H(`detailStatus`).textContent=`当前展开目录未找到此形态，可换另一地区`;return}Q.active&&Q.leave();let n=J.worldPosition(t.id);Jv({id:t.id,kind:`galaxy`,root:J.data.root,galaxy:t,position:n,radius:t.radius}),cv(n,t.radius*4.9,1400)}document.querySelectorAll(`[data-early]`).forEach(e=>e.onclick=()=>{if(!q||(Q.active&&Q.leave(),dd.value))return;let t=Number(e.dataset.early),n=0,r=1/0;for(let e=0;e<q.ids.length;e++){let i=Th-q.ages[e],a=Math.abs(Math.log(Math.max(1e-9,i)/t));a<r&&(r=a,n=e)}ov(q.ids[n]),jg=q.ids[n],F_(jg,!0)}),H(`showGalaxyExample`).onclick=()=>Bg(Number(H(`galaxyExample`).value)),document.querySelectorAll(`[data-stellar-entry]`).forEach(e=>e.onclick=()=>{mv(),Ig=e.dataset.stellarEntry,xh!==null&&F_(xh,!0)});var $=new yi({transparent:!0,depthWrite:!1,depthTest:!1,blending:2,uniforms:{hierarchyStrict:R.strictUniform,fixedHierarchy:{value:+!!Fm},sourceLayerBlend:{value:0},hierarchyLod:R.uniform,hierarchySize:R.sizeUniform,earlyMatter:hd,previewNow:{value:0},pixelRatio:{value:W.getPixelRatio()},height111:{value:900},gain:{value:1},ageColour:{value:0},now:{value:Th},detailIDs:{value:new rn(-1,-1,-1,-1)},detailFades:{value:new rn},backgroundFade:{value:1},hoverOwner:{value:-1},selectionActive:{value:0},ownerSelection:{value:0},activeOwner:{value:-1},clusterReveal:{value:0},objectLodScale:{value:1},contextFocus:{value:new P},viewSpan:{value:100}},vertexShader:`${su}attribute float retainedBorn109;attribute float screenSlot;attribute float cloudBorn;attribute float arrivalBorn;attribute float summaryGain;uniform float fixedHierarchy;uniform float sourceLayerBlend;uniform float previewNow;attribute float chosen;attribute float catalogID;attribute float ownerID;uniform float pixelRatio;uniform float height111;uniform float gain;uniform float ageColour;uniform float now;uniform vec4 detailIDs;uniform vec4 detailFades;uniform float backgroundFade;uniform float hoverOwner;uniform float selectionActive;uniform float ownerSelection;uniform float activeOwner;uniform float clusterReveal;uniform vec3 contextFocus;uniform float viewSpan;uniform float objectLodScale;varying vec3 tint;varying float alpha;varying float pointSpread;${Ou}${ad}${bd}${xd}${Zl}void main(){bool proxy110=fixedHierarchy>.5&&now-age>=${Qu};vec4 centre111=modelViewMatrix*vec4(position,1.);float radiusPixels111=proxyRadius110*projectionMatrix[1][1]*height111/max(1e-10,-centre111.z);float resolve111=smoothstep(.25,2.,radiusPixels111);if(proxy110&&sample110>.5&&resolve111<=0.){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=1.;alpha=0.;pointSpread=1.;tint=vec3(0.);return;}vec3 proxyPosition110=position+(proxy110?proxyOffset110():vec3(0.));vec4 mv=modelViewMatrix*vec4(proxyPosition110,1.);gl_Position=projectionMatrix*mv;float nearFactor=clamp(105./max(1.,-mv.z),.6,4.);gl_PointSize=clamp((1.4+mass*.8)*nearFactor*pixelRatio,1.4,12.*pixelRatio);if(previewRadius>0.&&fixedHierarchy<.5)gl_PointSize=max(gl_PointSize,clamp(previewRadius*projectionMatrix[1][1]*900./max(1e-9,-mv.z),3.,7.)*pixelRatio);float d=length(position)/46.5;vec3 neutral=mix(vec3(.62,.71,.76),vec3(.92,.94,.91),clamp(mass*.65,0.,1.));float shift=pow(now/max(.0000001,now-age),1.-13.8/46.5);vec3 wl=vec3(650.,530.,460.);vec3 ratio=(exp(14387768.77/(wl*5800.))-1.)/max(vec3(1.),exp(min(vec3(80.),14387768.77*shift/(wl*5800.)))-1.);tint=neutral*gain*1.35;alpha=(.38+mass*.45)*mix(1.,.62,d*d);float catalogGain=fixedHierarchy>.5?mix(backgroundFade,1.,step(.5,chosen)):mix(backgroundFade,1.,step(.5,chosen)*step(.5,ownerSelection)*(1.-clusterReveal));alpha*=catalogGain;if(activeOwner>=0.&&abs(ownerID-activeOwner)<.1){float context=.18+.82/(1.+pow(length(position-contextFocus)/max(.035,viewSpan*.7),1.4));float ownReveal=objectReveal(length(mv.xyz),objectLodScale*${1/4});alpha=mix(alpha,max(alpha,.72*context),ownReveal);if(fixedHierarchy<.5)gl_PointSize=max(gl_PointSize,3.2*pixelRatio*ownReveal);}float cloudHandoff=cloudBorn>=0.?smoothstep(0.,300.,previewNow-cloudBorn)*(screenSlot>.5?screenContent(screenSlot):objectReveal(length(mv.xyz),objectLodScale*${1/4})):0.;alpha*=(fixedHierarchy>.5?1.-nearCover110:1.-cloudHandoff)*(retainedBorn109>=0.?1.-smoothstep(0.,1000.,previewNow-retainedBorn109):1.);for(int i=0;i<4;i++){if(abs(catalogID-detailIDs[i])<.1)alpha*=1.-detailFades[i];}if(chosen>.5){tint=mix(tint,vec3(.94,1.,.73),.55);alpha*=1.65;gl_PointSize*=1.22;}else if(selectionActive>.5)alpha*=${Vu};if(hoverOwner>=0.){if(abs(ownerID-hoverOwner)<.1&&chosen<.5){tint=mix(tint,vec3(.88,1.,.77),.5);alpha*=1.8;gl_PointSize*=1.22;}else if(chosen<.5&&ownerSelection<.5)alpha*=.72;}pointSpread=1.+1.1*(1.-smoothstep(.18,.65,catalogGain));gl_PointSize*=pointSpread;float emitted=now-age;float maturity=earlyMaturity(emitted);if(emitted<${Qu}){tint=mix(vec3(.14,.32,.55),vec3(.30,.62,.68),clamp(mass*.4,0.,1.))*gain;tint=earlyBandTint(tint,emitted,now,ageColour);pointSpread=2.7;gl_PointSize=max(gl_PointSize,4.*pixelRatio);}else{tint=mix(vec3(.50,.72,1.)*gain,tint,maturity);tint*=mix(vec3(1.),ratio,ageColour);}alpha*=catalogID<8388608.?1.-sourceLayerBlend:1.;alpha*=(previewRadius>0.?(hierarchyStrict>.5?1.:screenContent(screenSlot)):1.)*earlySourceGain(emitted)*summaryGain*(arrivalBorn<0.?1.:smoothstep(0.,650.,previewNow-arrivalBorn));if(proxy110){gl_PointSize=2.7*pixelRatio*pointSpread;alpha*=(sample110<.5?1.-resolve111:1./15.*resolve111)*mix(1.,4.,smoothstep(1.,12.,proxyRadius110*projectionMatrix[1][1]*900./max(1e-10,-mv.z)));alpha*=step(length(proxyPosition110),46.5);tint=redshiftBands(mix(vec3(.82,.89,.96),vec3(.94,1.,.73),chosen*.55)*gain,emitted,now,ageColour);}else alpha*=sample110<.5?1.:0.;}`,fragmentShader:`varying vec3 tint;varying float alpha;varying float pointSpread;void main(){vec2 p=gl_PointCoord*2.-1.;float d=dot(p,p);if(d>1.)discard;float halo=exp(-d*3.);gl_FragColor=vec4(tint,halo*alpha);}`});Ad($,`chosen>.5||(pickOwner>=0.&&abs(ownerID-pickOwner)<.1)||(pickRoot>=0.&&abs(catalogID-pickRoot)<.1)?1.:0.`);var Vg=new Zd(th),Hg=null,Ug=new Ai;th.add(Ug);var Wg=Array.from({length:257},(e,t)=>new P(Math.cos(t/256*Math.PI*2)*qu,Math.sin(t/256*Math.PI*2)*qu,0)),Gg=new oa(new Xr().setFromPoints(Wg),new qi({color:`#9aafab`,transparent:!0,opacity:.35}));Ug.add(Gg);for(let e=0;e<2;e++){let t=new oa(new Xr().setFromPoints(Wg),new qi({color:`#7a9990`,transparent:!0,opacity:e===0?.1:.06,depthWrite:!1}));t.rotation.x=Math.PI/2,e&&(t.rotation.y=Math.PI/2),Ug.add(t)}var Kg=new aa(new Xr().setFromPoints([new P(-.6,0,0),new P(.6,0,0),new P(0,-.6,0),new P(0,.6,0),new P(0,0,-.6),new P(0,0,.6)]),new qi({color:`#abcab6`,transparent:!0,opacity:.6}));th.add(Kg);function qg(){let e=U.getBoundingClientRect();W.setSize(e.width,e.height),K.aspect=e.width/e.height,K.updateProjectionMatrix();for(let t of Oh)t.material.resolution.set(e.width,e.height)}new ResizeObserver(qg).observe(U),qg();var Jg=new URLSearchParams(location.search),Yg=Jg.get(`generator`)??`pilot71`,Xg=Jg.has(`contrast`)?{contrast:Number(Jg.get(`contrast`))}:{};[...H(`generator`).options].some(e=>e.value===Yg)||H(`generator`).add(new Option(`Mod · `+Yg,Yg)),H(`generator`).value=Yg,H(`generator`).onchange=e=>{let t=new URL(location.href),n=e.target.value;t.searchParams.set(`generator`,n),n===`legacy`&&t.searchParams.delete(`contrast`),location.href=t.href};var Zg=new URL(`./`,location.href),Qg=452677,$g=!1,e_,t_,n_,r_,i_=new Set([`camera-motion126`,`background-policy109`,`cancel`,`release`,`stop-groups106`]),a_={onmessage:null,postMessage(e){if(!e.kind&&e.seq===1&&Pm===0&&e.epoch===13.8&&e.mode===`lightcone`)$g=!0,n(Zg).then(t=>{Ch===e.seq&&a_.onmessage?.(new MessageEvent(`message`,{data:{...t,seq:e.seq}}))}).catch(()=>{Ch===e.seq&&(a_.onmessage?.(new MessageEvent(`message`,{data:{seq:e.seq,error:`Opening scene unavailable`}})),window.dispatchEvent(new Event(`atlas-display-error`)))});else if(e.kind||($g=!1),e.kind===`structure`&&$g&&e.root===Qg){let t=Number(e.seq),n=e=>{if(t===kh&&e_===Qg)for(let n of[e.coarse,e.structure])a_.onmessage?.(new MessageEvent(`message`,{data:{...structuredClone(n),seq:t}}))};if(t_){queueMicrotask(()=>n(t_));return}n_?.abort();let i=new AbortController;n_=i,r(Zg,i.signal).then(e=>{t_=e,n(e)}).catch(e=>{if(i.signal.aborted||t!==kh)return;let n=e.status,r=n===404||n===410?null:Math.min(3e4,1e3*2**Math.min(5,o_++));a_.onmessage?.(new MessageEvent(`message`,{data:{kind:`display-block-failure`,file:`startup-detail-v126.bin`,roots:[Qg],retryAfterMs:r}})),a_.onmessage?.(new MessageEvent(`message`,{data:{kind:`structure`,seq:t,requestedRoot:Qg,error:`Published detail unavailable.`}}))}).finally(()=>{n_===i&&(n_=void 0)})}else{if(e.kind===`cancel`&&(n_?.abort(),n_=void 0),!r_){if(i_.has(String(e.kind)))return;r_=new Worker(new URL(new URL(`catalogue.worker-C9G4XRdJ.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),r_.onmessage=e=>a_.onmessage?.(e),e.kind&&(Wm=-1,e={...e,knownWorldRevision:-1})}r_.postMessage(e)}}},o_=0;if(Jm?.value===`cuda`&&new URL(location.href).searchParams.get(`cudaBatch`)!==`4`){let e=-1/0,t=()=>{let t=performance.now();t-e>=80&&(e=t,a_.postMessage({kind:`camera-motion126`}))};document.querySelector(`.site-buttons`)?.addEventListener(`click`,t,!0),U.addEventListener(`wheel`,t,{capture:!0,passive:!0}),U.addEventListener(`pointerdown`,t,!0),U.addEventListener(`pointermove`,e=>{e.buttons&&t()},!0)}function s_(e,t,n){nh.clear(),$h=``,ng=null,y_.clear(),Hv(),l_(),R.clear(),Eh=Sf(e),Ch++,H(`loading`).hidden=!1,H(`loading`).querySelector(`b`).textContent=q?`读取这个地点收到的星光`:`展开宇宙结构`,H(`siteName`).textContent=t,H(`siteCoordinates`).textContent=Eh.map(e=>(e*xf.radius).toFixed(2)).join(` / `)+` Gly · 四维位置`,H(`siteNote`).textContent=n;let r=130+Eh[0]*47,i=55-Eh[3]*47;H(`windowCenter`).setAttribute(`cx`,String(r)),H(`windowCenter`).setAttribute(`cy`,String(i)),B_({knownWorldRevision:Wm,pilotBase:Am(),generator:Yg,generatorParameters:Xg,seq:Ch,origin:Eh,epoch:Th,mode:dd.value?`current`:`lightcone`,selection:Z.values.map(e=>({id:e.id,root:e.root,kind:e.kind}))})}function c_(){for(let e of zh)e.remove();zh.length=0}function l_(){Yh++,Jh=!1,Wh++,Gh=!1,Kh=0,Rg=null,Ng=null,Pg=null,Fg=null,Mg=null,jg=null,Ag=null,Ig=null,Q.active&&Q.leave(),G.pivot=null,oh=null,cg.clear(),lg.clear(),ug=!1,dg++,fg.clear(),mh=null,hh=null,c_();for(let e of mg)e.remove();mg.length=0,kh++,Ah=!1,jh=null,Nh=null,G.zoomPose=null,_g=null;for(let e of Y.values())th.remove(e.group),gh.release(e.group,()=>e.dispose());if(Y.clear(),pg.clear(),J=null,Bh){for(let e of Vh.values())th.remove(e.group),e.dispose();Vh.clear(),X=null}else X&&=(th.remove(X.group),X.dispose(),null);$.uniforms.detailFades.value.set(0,0,0,0)}function u_(e){if(q&&!B?.hierarchy104)for(let t of Oh){let n=Array.from(q.routes,(t,n)=>t-e.getComponent(n%3));t.geometry.setPositions(n),t.position.copy(e),t.updateMatrix()}}function d_(){if(!(B?.hierarchy104&&X&&(X.detailsBuilt||X.detailsBuilding))&&X?.data.internal&&X.data.bridges){let e=J&&pg.get(J.data.root)?.id===X.data.id?J.group.position:new P(...X.data.center);X.rebase(e,J?.data.root??X.data.id,[...pg.values()],[...Y.keys()])}}function f_(e,t,n){let r=V.get(e)?.extent??.1;return n.planes.every(e=>e.normal.x*t[0]+e.normal.y*t[1]+e.normal.z*t[2]+e.constant>=-r*1.15)}function p_(){return new Ki().setFromProjectionMatrix(new In().multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse))}function m_(e=X){if(!e)return[];let t=p_(),n=R.canEnter(ou(e.data.id));return e.data.members.filter(e=>Nm.has(e.id)&&V.has(e.id)).filter(e=>Im?f_(e.id,e.position,t)&&((R.get(z(e.id))?.area??0)>.08||Fm&&R.content(z(e.id))>.03):n||(R.get(z(e.id))?.area??0)>.08).sort((e,t)=>K.position.distanceToSquared(new P(...e.position))-K.position.distanceToSquared(new P(...t.position))).map(e=>e.id)}var h_=null;function g_(e){let t=[Ch,e,X?.data.id,U.clientHeight,K.fov].join(`:`),n=performance.now();if(h_?.key===t&&n-h_.time<80&&h_.camera.distanceToSquared(K.position)<.0025)return h_.value;let r=__(e);return h_={key:t,time:n,camera:K.position.clone(),value:r},r}function __(e){if(e!==void 0&&Y.has(e))return!0;if(Vm&&e!==void 0&&(e=Hm.get(e)??e),Bh&&e!==void 0&&!V.has(e)){let t=fh.get(e);return t!==void 0&&K.position.distanceTo(new P(...q.positions.subarray(t*3,t*3+3)))*Ul(U.clientHeight,K.fov)<Jl}return e!==void 0&&V.has(e)&&((R.get(z(e))?.area??0)>.08||m_().includes(e))}function v_(e,t,n=[]){for(let e of n)e.galaxy.group===0&&xu(e.cluster,e.position);if(B?.hierarchy104)for(let n of df(t))nh.add(n,e);let r=[...pg.values()].find(t=>t.id===e&&t.internal),i=new Map((cg.get(e)??r?.previews??[]).map(e=>[e.id,e]));for(let e of n)i.set(e.id,e);let a=[...i.values()];cg.set(e,a);let o=lf(lg.get(e)??Vh.get(e)?.data.internal??r?.internal,t);for(lg.delete(e),lg.set(e,o.merged);lg.size>(Bh?64:8);){let t=[...lg.keys()].find(t=>t!==e);if(t===void 0)break;lg.delete(t),cg.delete(t)}for(let t of pg.values())t.id===e&&(t.internal=o.merged,t.previews=a);for(let t of Hh())t.data.id===e&&(t.data.internal=o.merged,t.data.previews=a);return X_(),o}var y_=new Map;function b_(e){let t=y_.get(e);y_.delete(e);let n=Dh?.geometry.getAttribute(`cloudBorn`);if(t&&n){for(let e of t){let t=fh.get(e);t!==void 0&&(n.setX(t,-1),n.addUpdateRange(t,1)),C_.delete(e)}n.needsUpdate=!0}}function x_(e){let t=(lg.get(e.data.id)??e.data.internal)?.clusters.map(e=>e.root)??[],n=new Set(t),r=p_();return{known:t,missing:Xl(e.data.members.filter(e=>Nm.has(e.id)&&!n.has(e.id)&&f_(e.id,e.position,r)),K.position.toArray(),U.clientHeight,K.fov).filter(e=>!n.has(e))}}function S_(){let e=Z.primary?.owner??X?.data.id,t=Hh().find(t=>t.data.id===e);return{view:t,...t?x_(t):{known:[],missing:[]}}}var C_=new Set,w_=new Set;function T_(){let e=Dh?.geometry.getAttribute(`cloudBorn`);if(e){for(let t of C_){let n=fh.get(t);n!==void 0&&e.setX(n,-1)}e.clearUpdateRanges(),e.needsUpdate=!0}C_.clear()}function E_(){if(q)for(let[e,t]of Um){let n=V.get(t),r=fh.get(t);n&&r!==void 0&&(R.set(z(e),Array.from(q.positions.subarray(r*3,r*3+3)),B?.navigationVersion===94?n.coreExtent??n.extent:n.extent,ou(n.owner)),R.setContainer(z(e),n.physicalKind===`extended-region`||!Im&&n.physicalKind!==`cluster`))}}var D_=new URLSearchParams(location.search).has(`probe112`),O_={macro:!0,far:!0,cloud:!0,detail:!0},k_=new Map,A_=new Map;function j_(){let e=performance.now();k_.clear(),A_.clear();for(let e of Hh())if(e.group.visible)for(let t of e.clouds.readyRoots.keys())k_.set(t,Math.max(k_.get(t)??0,e.clouds.coverage110(t))),A_.set(t,e.clouds.readiness126(t));for(let e of Y.values())e.group.visible&&k_.set(e.data.root,Math.max(k_.get(e.data.root)??0,e.coverage110()));let t=Dh?.geometry.getAttribute(`nearCover110`);if(t)for(let e of new Set([...w_,...k_.keys()])){let n=fh.get(e);if(n!==void 0){let r=Math.fround(k_.get(e)??0);t.getX(n)!==r&&(t.setX(n,r),t.addUpdateRange(n,1),t.needsUpdate=!0)}}nh.update(e,Th,$.uniforms.gain.value,$.uniforms.backgroundFade.value,W.getPixelRatio(),Z.values.map(e=>({root:e.root,owner:e.owner,kind:e.kind})),e=>k_.get(e)??0,U.clientHeight,K,e=>A_.get(e)??0,sh,fv());let n=Dh?.geometry.getAttribute(`retainedBorn109`);if(n){for(let e of w_){if(nh.roots.has(e))continue;let t=fh.get(e);t!==void 0&&(n.setX(t,-1),n.addUpdateRange(t,1),n.needsUpdate=!0),w_.delete(e)}for(let[e,t]of nh.roots){let r=fh.get(e);r!==void 0&&n.getX(r)!==Math.fround(t.born)&&(n.setX(r,t.born),n.addUpdateRange(r,1),n.needsUpdate=!0,w_.add(e))}}$.uniforms.height111.value=U.clientHeight,$.uniforms.previewNow.value=e;let r=Dh?.geometry.getAttribute(`cloudBorn`);if(!r)return;for(let[e,t]of Hh().flatMap(e=>[...e.clouds.takeReady(),...e.takeOverviewReady()])){let n=fh.get(e);if(!(n===void 0||r.getX(n)>=0)&&(r.setX(n,t),r.addUpdateRange(n,1),r.needsUpdate=!0,C_.add(e),!Bh)){for(let[n,i]of Um)if(i===e){let e=fh.get(n);e!==void 0&&(r.setX(e,t),r.addUpdateRange(e,1),C_.add(n))}}}let i=Dh.geometry.getAttribute(`summaryGain`),a=new Map;for(let[t,n]of qm){if(t<8388608&&$.uniforms.sourceLayerBlend.value>=1)continue;let r=fh.get(t);if(r===void 0)continue;let o=1-$d(n.total,n.shares,t=>{if(a.has(t))return a.get(t);let n=fh.get(t);if(n===void 0)return 0;let r=Qd(Km.get(t)??-1,e),i=Jd(q.epoch-q.ages[n],q.epoch,!!fd.value,!!hd.value)>0?r*R.content(z(t)):0;return a.set(t,i),i});Math.abs(i.getX(r)-o)>1e-4&&(i.setX(r,o),i.addUpdateRange(r,1),i.needsUpdate=!0)}}function M_(e){if(Bh){X=qh(e);return}if(e.bridges||(e=[...pg.values()].find(t=>t.id===e.id&&t.bridges)??e),X?.data.id===e.id){e.internal&&(X.data=e);return}T_(),X&&(th.remove(X.group),X.dispose()),X=new bm(e,gh),th.add(X.group);for(let e of mg)e.remove();mg.length=0;let t=[...e.members].sort((t,n)=>new P(...t.position).distanceToSquared(new P(...e.center))-new P(...n.position).distanceToSquared(new P(...e.center))).slice(0,60);for(let e of t){let t=document.createElement(`button`);t.className=`cluster-label`,t.textContent=`${V.get(e.id)?.physicalKind===`cluster`?`星系团`:V.get(e.id)?.physicalKind===`group`?`星系群`:V.get(e.id)?.physicalKind===`galaxy`?`孤立星系`:`结构`} G-${e.id}`,t.dataset.root=String(e.id),t.hidden=!0,t.onclick=t=>{ov(e.id,t.ctrlKey||t.shiftKey)},H(`superLabels`).append(t),mg.push(t),hg.set(t,new P(...e.position))}}function N_(e,t){J=e,X_();for(let t of Z.values)if(t.root===e.data.root&&(t.kind===`galaxy`||t.kind===`group`)){let n=t.kind===`group`?e.data.groups.find(e=>e.id===t.id)?.members[0]:t.id,r=e.data.galaxies.find(e=>e.id===n);r&&Z.replace({...t,kind:t.kind,galaxy:r,position:e.worldPosition(r.id),radius:r.radius})}Q_(),e.setFocus(Z.primary?.root===e.data.root?Z.primary.galaxy?.id??`G-${e.data.root}`:_g?.root===e.data.root&&_g.galaxy?_g.galaxy.id:`G-${e.data.root}`),c_(),M_(t),d_(),u_(e.group.position),J.data.groups.forEach((e,t)=>{let n=document.createElement(`button`);n.className=`cluster-label`,n.textContent=`${e.members.length===1?`孤立星系`:J.galaxy(e.members[0])?.materialContext===`filament`?`纤维星系群`:`星系群`} ${String(t+1).padStart(2,`0`)} · ${e.members.length}${V.get(J.data.root)?.groups[t]?.peripheralCount?` · 外围`+V.get(J.data.root).groups[t].peripheralCount:``}`,n.dataset.group=String(t),n.hidden=!0,n.onclick=t=>{let n=J.galaxy(e.members[0]),r=e.members.length===1;Jv({id:r?n.id:e.id,kind:r?`galaxy`:`group`,position:J.worldPosition(n.id),radius:r?n.radius:1e-9,root:J.data.root,galaxy:n},t.ctrlKey||t.shiftKey)},H(`groupLabels`).append(n),zh.push(n)}),ev()}var P_=[];function F_(e,t=g_(e),n=!1){if(e!==e_||!t||Bl(fv(),U.clientHeight)===0)return;if(t&&!Nm.has(e)){Z.primary?.root===e&&(hh=e,Zm.textContent=H_.has(e)?`This display block is unavailable.`:`Detailed view unavailable outside the published region.`,mh=Zm.textContent,Zm.hidden=!1);return}if(Zm.hidden=!0,Vm&&t&&Hm.has(e)){let t=e;e=Hm.get(e);let n=jv(e);if(n&&Z.primary?.root===t){let e=Z.primary.kind===`super`?{...Z.primary,root:n.root,position:n.position}:n;Z.resolve(Z.primary.id,e),_g=e,sh.copy(e.position),Q_()}}if(t&&!Bh&&Bm&&!Bm.has(e)){mh=`此处只有71宏观数据；请用观测地点进入三个已细化样区`;return}if(wh!==Ch||(Nh=e,hh===e))return;hh!==null&&(hh=null,mh=null);let r=fh.get(e);if(r===void 0)return;let i=q.owners[r];if(t&&J?.data.root===e&&pg.get(e)?.internal)Ah&&jh!==e&&(kh++,Ah=!1,jh=null),!X?.detailsBuilt&&!X?.detailsBuilding&&d_();else{if(!t){let e=[...pg.values()].find(e=>e.id===i);if(e){Ah&&!Mh&&(kh++,Ah=!1,jh=null),M_(e);return}}(!Ah||jh!==e||!Mh&&Mh!==t)&&(t&&B?.hierarchy100&&e===Z.primary?.root&&(n=!0,(Gh||ug)&&iv()),kh++,jh=e,Mh=t,t&&Y.has(e)&&pg.get(e)?.internal?(Ah=!1,jh=null,N_(Y.get(e),pg.get(e))):(Ah=!0,P_.push({root:e,full:t,priority:n,issued:performance.now(),seq:kh}),P_.length>64&&P_.shift(),B_({knownWorldRevision:Wm,pilotBase:Am(),generator:Yg,generatorParameters:Xg,kind:t?`structure`:`coarse`,priority:n,root:e,seq:kh,origin:Eh,epoch:q?.epoch??Th,mode:dd.value?`current`:`lightcone`,previewRoots:[],knownPreviewRoots:(lg.get(i)??Vh.get(i)?.data.internal)?.clusters.map(e=>e.root)??[]})))}}function I_(e,t){if(Fm&&e.delta&&!e.removed?.length&&!e.points.length&&!e.aliases.length&&!e.coverage.length&&!e.handoffs?.length){if(Wm>=e.revision&&t)return;Wm=e.revision,B.examples=e.examples;for(let t of e.roots)V.set(t.id,t);if(B.roots=[...V.values()],t&&q&&Dh){let t=Dh.geometry.getAttribute(`screenSlot`),n=[];for(let t of e.roots){let e=fh.get(t.id);e!==void 0&&(!Vh.get(t.owner)?.clouds.has(t.id)&&!Y.has(t.id)&&R.set(z(t.id),Array.from(q.positions.subarray(e*3,e*3+3)),t.coreExtent??t.extent,ou(t.owner)),t.groups.forEach((e,n)=>R.declareParent(au(t.id,n),z(t.id))),n.push([e,R.slot(z(t.id))]))}Hd(t,n),Bm=new Set(V.keys())}return}if(!Vm||!B)return;B.examples=e.examples,Hm.clear();for(let[t,n]of e.aliases)Hm.set(t,n);if(Wm>=e.revision&&t)return;Wm=e.revision,e.delta||(Gm.clear(),qm.clear());for(let t of e.removed??[])Gm.delete(t),Km.delete(t);for(let t of e.points)Gm.set(t.id,t),Km.has(t.id)||Km.set(t.id,performance.now());if(e.handoffs){qm.clear();for(let[t,n,r]of e.handoffs)qm.set(t,{total:n,shares:r})}if(e.delta){let t=new Set(e.removed),n=new Map(V);for(let e of t)n.delete(e);for(let t of e.roots)n.set(t.id,t);e={...e,roots:[...n.values()],points:[...Gm.values()]}}let n=new Set(e.coverage.map(e=>e[0])),r=[...Um.keys()].filter(e=>!n.has(e));for(let e of r){let t=fh.get(e);t!==void 0&&Dh&&Dh.geometry.getAttribute(`cloudBorn`).setX(t,-1),C_.delete(e)}let i=new Set(e.roots.map(e=>e.id));R.removeRoots([...r,...[...V.keys()].filter(e=>!i.has(e))]),Um.clear();for(let[t,n]of e.coverage)Um.set(t,n);for(let[e,t]of lg)lg.set(e,uf(t,i));for(let[e,t]of cg)cg.set(e,t.filter(e=>i.has(e.cluster)));for(let e of pg.keys())e>=8388608&&!i.has(e)&&pg.delete(e);for(let e of V.keys())if(!i.has(e)){let t=Y.get(e);t&&(th.remove(t.group),gh.release(t.group,()=>t.dispose()),Y.delete(e),J===t&&(J=null))}B.roots=e.roots,V.clear();for(let t of e.roots)V.set(t.id,t);if(!t||!q||!Dh)return;if(Fm){let t=Dh.geometry.getAttribute(`screenSlot`),n=[];for(let t of e.roots){let e=fh.get(t.id);if(e===void 0)continue;let r=Array.from(q.positions.subarray(e*3,e*3+3));!Vh.get(t.owner)?.clouds.has(t.id)&&!Y.has(t.id)&&R.set(z(t.id),r,t.coreExtent??t.extent,ou(t.owner)),t.groups.forEach((e,n)=>R.declareParent(au(t.id,n),z(t.id))),n.push([e,R.slot(z(t.id))])}Hd(t,n),Bm=new Set(V.keys());return}let a=q,o=Array.from(a.ids,(e,t)=>t).filter(e=>a.ids[e]<8388608),s=e.points.filter(e=>Math.hypot(...e.position)<=46.5&&Th-e.age>0),c=o.length,l=c+s.length,u=new Uint32Array(l),d=new Int32Array(l),f=new Float32Array(l*3),p=new Float32Array(l),m=new Float32Array(l),h=new Float32Array(l).fill(-1),g=new Float32Array(l),_=Dh.geometry.getAttribute(`cloudBorn`),v=Dh.geometry.getAttribute(`chosen`),y=new Map(Array.from(a.ids,(e,t)=>[e,t]));o.forEach((e,t)=>{u[t]=a.ids[e],d[t]=a.owners[e],f.set(a.positions.subarray(e*3,e*3+3),t*3),p[t]=a.ages[e],m[t]=a.mass[e],h[t]=_.getX(e),g[t]=v.getX(e)}),s.forEach((e,t)=>{let n=c+t;u[n]=e.id,d[n]=e.owner,f.set(e.position,n*3),p[n]=e.age,m[n]=e.mass;let r=y.get(e.id);r!==void 0&&(h[n]=_.getX(r),g[n]=v.getX(r));let i=V.get(e.id);R.set(z(e.id),e.position,B?.navigationVersion===94?i.coreExtent??i.extent:i.extent,ou(i.owner)),R.setContainer(z(e.id),i.physicalKind===`extended-region`||!Im&&i.physicalKind!==`cluster`),i.groups.forEach((e,t)=>R.declareParent(au(i.id,t),z(i.id)))}),Object.assign(q,{ids:u,owners:d,positions:f,ages:p,mass:m,detailRoots:e.roots.map(e=>e.id)}),Bm=new Set(e.roots.map(e=>e.id)),fh.clear();for(let e=0;e<l;e++)fh.set(u[e],e);E_();let b=Dh.geometry,x=new Xr;x.setAttribute(`previewRadius`,new I(Array.from(u,e=>(V.get(e)?.extent??0)*.12),1)),x.setAttribute(`position`,new F(f,3)),x.setAttribute(`ownerID`,new I(Array.from(d),1)),x.setAttribute(`catalogID`,new I(Array.from(u,Fd),1)),x.setAttribute(`mass`,new F(m,1)),x.setAttribute(`age`,new F(p,1)),x.setAttribute(`cloudBorn`,new F(h,1).setUsage(et)),x.setAttribute(`retainedBorn109`,new F(new Float32Array(x.getAttribute(`cloudBorn`).count).fill(-1),1).setUsage(et)),x.setAttribute(`arrivalBorn`,new I(Array.from(u,e=>Km.get(e)??-1),1)),x.setAttribute(`summaryGain`,new F(new Float32Array(l).fill(1),1).setUsage(et)),x.setAttribute(`chosen`,new F(g,1)),x.setAttribute(`screenSlot`,new I(Array.from(u,e=>R.slot(z(e))),1)),x.computeBoundingSphere(),b.dispose(),Dh.geometry=Du(x,q?.proxyRadii110);let S=!1,C=Z.primary?.id;for(let e of Z.values){if(e.kind!==`space`&&e.kind!==`cluster`&&e.kind!==`super`||e.root===void 0)continue;let t=Hm.get(e.root);if(t===void 0||t===e.root)continue;let n=jv(t);if(!n)continue;let r=e.kind===`super`?{...e,root:n.root,position:n.position}:n;Z.resolve(e.id,r),e.id===C&&(_g=r,sh.copy(r.position)),S=!0}S&&Q_(),Bh||(pg.clear(),X&&=(th.remove(X.group),X.dispose(),null),T_())}var L_=null,R_=null,z_=new URLSearchParams(location.search).has(`profileDelivery`);function B_(e){if(z_){let t={kind:String(e.kind??`view`),root:e.root,seq:Number(e.seq),sent:Ud(),stages:[]};e={...e,delivery105:t},Gd({name:`send`,root:t.root,seq:t.seq,kind:t.kind})}a_.postMessage(e)}var V_=new Map,H_=new Set;a_.onmessage=e=>{let t=performance.now();try{let t=e.data;if(t.kind===`display-block-failure`&&t.file&&t.roots){let{file:e,roots:n,retryAfterMs:r}=t;window.clearTimeout(V_.get(e)),V_.delete(e);for(let e of n)Nm.delete(e),H_.add(e);if(typeof r==`number`){let t=window.setTimeout(()=>{V_.delete(e);for(let e of n){Nm.add(e),H_.delete(e);let t=fh.get(e);t!==void 0&&q&&fg.delete(q.owners[t])}hh!==null&&n.includes(hh)&&(hh=null,mh=null),Z.primary?.root!==void 0&&n.includes(Z.primary.root)&&($h=``,tg=null)},r);V_.set(e,t)}return}if(t.kind===`background-status109`){ih=t;let e=ih,n=e.store;Xm(`backgroundStatus109`,n?.errors&&!n.available?`持久存储不可用，空闲准备暂停`:n?.full?`准备仓库已满，空闲准备暂停`:e.enabled?e.paused?`交互优先，空闲准备暂缓`:n?.available?`已保存 ${n.count} 个区域 · ${(n.bytes/1024**2).toFixed(1)} MiB`:`正在建立准备仓库`:`空闲准备已暂停`);return}if(z_&&Gd({name:`receive`,root:t.root??t.structure?.root,seq:t.seq,kind:t.kind??`view`,profile:t.delivery105}),t.error&&(R_=t),t.kind===`prepared-context106`){if(t.seq!==eg||t.viewSeq!==Ch||nv)return;let e=t.supercluster,n=qh(e);!n.detailsBuilt&&!n.detailsBuilding&&n.rebase(n.group.position.clone(),J?.data.root??e.id,[n.data],[...Y.keys()]);return}if(t.kind===`prepared-preview106`){if(t.seq!==eg||t.viewSeq!==Ch||nv)return;t.worldPatch&&I_(t.worldPatch,!0);let e=Hh().find(e=>e.data.id===t.owner);!e&&t.supercluster&&(e=qh(t.supercluster));let{added:n}=v_(t.owner,t.preview,t.groups);n&&e&&(e.detailsBuilt||e.detailsBuilding?e.appendInternal(n,t.groups):e.rebase(new P(...e.data.center),J?.data.root??e.data.id,[e.data],[...Y.keys()]));return}if(t.kind===`groups-ready106`){t.seq===eg&&t.viewSeq===Ch&&(ng=t,ng.complete&&tg&&(tg.complete=!0),t.stats&&Object.assign(ph,t.stats));return}if(t.kind===`export-groups106`||t.kind===`import-groups106`||t.kind===`flush-cache126`||t.kind===`export-full126`||t.kind===`identity126`||t.kind===`world-state126`){let e=rg.get(t.seq);rg.delete(t.seq),t.error?e?.reject(Error(t.error)):e?.resolve(t);return}if(t.kind===`prewarm`){if(t.seq===Yh&&t.viewSeq===Ch){if(Jh=!1,t.error&&t.root!==void 0&&Zh.add(t.root),!t.error&&t.root!==void 0){for(Xh.add(t.root);Xh.size>128;)Xh.delete(Xh.values().next().value);let e=Qh.findLast(e=>e.root===t.root&&!e.received);e&&(e.received=performance.now())}t.stats&&Object.assign(ph,t.stats)}return}if(t.kind===`work-progress`){L_={...t,received:performance.now()};return}if(t.kind===`structure`||t.kind===`coarse`){let e=P_.find(e=>e.seq===t.seq);e&&(e.received=performance.now())}if(!(t.kind===`release`?t.seq===tv:t.kind===`vicinity`?t.seq===Wh&&t.viewSeq===Ch:t.kind===`preview`||t.kind===`overview`?t.seq===dg&&t.viewSeq===Ch:t.kind?t.seq===kh:t.seq===Ch))return;if(t.worldPatch&&I_(t.worldPatch,!t.projection),e.data.stats&&Object.assign(ph,e.data.stats),z_&&Gd({name:`patch-ready`,root:t.root??t.structure?.root,seq:t.seq,kind:t.kind}),t.kind===`release`){if(B?.hierarchy104)return;let e=new Set(V.keys()),t=Z.primary?.owner??q?.owners[fh.get(Z.primary?.root??-1)??-1];for(let[n,r]of Vh)if(r.retainRoots(e),!(B?.hierarchy104&&n===t)&&(nv&&!(Im&&Bl(fv(),U.clientHeight)>0&&K.position.length()<46.5&&(!sv||sv.distanceTo<46.5))||n!==t&&(!r.data.members.some(t=>e.has(t.id))||!r.group.visible))){th.remove(r.group),r.dispose(),Vh.delete(n),lg.delete(n),cg.delete(n),b_(n),X===r&&(X=null);for(let[e,t]of pg)t.id===n&&pg.delete(e)}return}if(t.kind===`coarse-ready`){let e=t.supercluster;pg.set(t.root,e),M_(e),ev();return}if(t.kind===`vicinity`){if(Gh=!1,t.error){mh=t.error,Kh=0;return}Kh=t.vicinity?.pending??0;let e=new Set([...V.values()].map(e=>e.owner));for(let[t,n]of Vh)!B?.hierarchy104&&!e.has(t)&&n!==X&&(th.remove(n.group),n.dispose(),Vh.delete(t),lg.delete(t),cg.delete(t),b_(t));for(let e of t.contexts??[]){let t=qh(e),n=e.members.find(e=>V.has(e.id));n&&pg.set(n.id,e),X||=t}return}if(e.data.kind===`overview`){if(ug=!1,t.error){mh=t.error;return}let e=t.owner,n=y_.get(e)??new Set;for(let e of t.overviewRoots??[])n.add(e);y_.set(e,n);let r=t.groups??[],i=new Map((cg.get(e)??[]).map(e=>[e.id,e]));for(let e of r)i.set(e.id,e);cg.set(e,[...i.values()]);for(let t of pg.values())t.id===e&&(t.previews=cg.get(e));Hh().find(t=>t.data.id===e)?.appendOverview(r);return}if(e.data.kind===`preview`){if(e.data.seq!==dg||e.data.viewSeq!==Ch)return;if(ug=!1,e.data.error){X&&fg.add(X.data.id),mh=e.data.error;return}let t=e.data.owner,{added:n}=v_(t,e.data.preview,e.data.groups),r=Hh().find(e=>e.data.id===t);n&&r&&(r.detailsBuilt||r.detailsBuilding?r.appendInternal(n,e.data.groups):r.rebase(new P(...r.data.center),J?.data.root??r.data.id,[r.data],[...Y.keys()]));return}if(e.data.kind===`coarse`){if(e.data.seq!==kh)return;if(Ah=!1,jh=null,e.data.error){mh=e.data.error,hh=e.data.root??null;return}let t=e.data.root,n=pg.get(t)?.internal?pg.get(t):e.data.supercluster;for(pg.set(t,n);pg.size>8;){let e=[...pg.keys()].find(e=>e!==t&&!Y.has(e));if(e===void 0)break;pg.delete(e)}M_(n),ev();return}if(e.data.kind===`structure`){if(e.data.seq!==kh)return;if(e.data.error){hh=jh,mh=e.data.error,Ah=!1,jh=null;return}Ah=!1,jh=null;let t=e.data.supercluster;if(t.internal&&=v_(t.id,t.internal,t.previews).merged,t.previews=cg.get(t.id)??[],!t.internal){hh=e.data.structure.root,mh=`内部航道预览未能接续，请重新选择`;return}z_&&Gd({name:`renderer-start`,root:e.data.structure.root,seq:e.data.seq});let n=new um(e.data.structure,W);if(z_){Gd({name:`renderer-ready`,root:n.data.root,seq:e.data.seq});let t=!1;n.group.traverse(r=>{if(!(r instanceof ci||r instanceof fa))return;let i=r.onAfterRender;r.onAfterRender=(...a)=>{i.apply(r,a),t||(t=!0,Gd({name:`first-draw-submitted`,root:n.data.root,seq:e.data.seq}))}})}Y.set(n.data.root,n),pg.set(n.data.root,e.data.supercluster),th.add(n.group),N_(n,e.data.supercluster);let r=!1;for(;Y.size>4;){let e=Y.keys().next().value,t=Y.get(e);if(t===J)break;th.remove(t.group),gh.release(t.group,()=>t.dispose()),Y.delete(e),pg.delete(e),r=!0}r&&d_();return}if(e.data.seq!==Ch)return;if(e.data.error){H(`loading`).innerHTML=`<b>未能生成样板</b><span>`+e.data.error+`</span>`;return}let n=e.data.projection;if(q=n,bh=Fm?new fu(n.ids,n.positions,n.owners):null,Vg.dispose(),Bm=n.detailRoots?new Set(n.detailRoots):null,Su(),$g&&jm.openingAnchor?.root===Qg){let e=jm.openingAnchor.position;Array.isArray(e)&&e.length===3&&e.every(Number.isFinite)&&xu(Qg,e)}xv.clear();for(let e=0;e<n.routes.length;e+=3){let t=Xd(Array.from(n.routes.slice(e,e+3)));xv.add(t)}wh=e.data.seq,h_=null,uh=null;let r=1/0;for(let e=0;e<n.ids.length;e++){let t=e*3,i=n.positions[t]**2+n.positions[t+1]**2+n.positions[t+2]**2;(Bh||!Bm||Bm.has(n.ids[e]))&&i<r&&(r=i,uh=n.ids[e])}dh.clear(),fh.clear();for(let e=0;e<n.ids.length;e++)fh.set(n.ids[e],e),dh.has(n.owners[e])&&n.ids[e]!==n.owners[e]||dh.set(n.owners[e],n.ids[e]);Dh&&(th.remove(Dh),Dh.geometry.dispose());for(let e=0;e<n.ids.length;e++){let t=V.get(n.ids[e]);t&&(R.set(z(t.id),Array.from(n.positions.slice(e*3,e*3+3)),B?.navigationVersion===94?t.coreExtent??t.extent:t.extent,ou(t.owner)),R.setContainer(z(t.id),t.physicalKind===`extended-region`||!Im&&t.physicalKind!==`cluster`),t.groups.forEach((e,n)=>R.declareParent(au(t.id,n),z(t.id))))}E_();let i=new Xr;if(i.setAttribute(`screenSlot`,new I(Array.from(n.ids,e=>R.slot(z(e))),1)),i.setAttribute(`cloudBorn`,new F(new Float32Array(n.ids.length).fill(-1),1).setUsage(et)),i.setAttribute(`retainedBorn109`,new F(new Float32Array(i.getAttribute(`cloudBorn`).count).fill(-1),1).setUsage(et)),i.setAttribute(`arrivalBorn`,new I(Array.from(n.ids,e=>Km.get(e)??-1),1)),i.setAttribute(`summaryGain`,new F(new Float32Array(n.ids.length).fill(1),1).setUsage(et)),C_.clear(),i.setAttribute(`chosen`,new F(new Float32Array(n.ids.length),1)),i.setAttribute(`previewRadius`,new I(Array.from(n.ids,e=>(V.get(e)?.extent??0)*.12),1)),i.setAttribute(`position`,new F(n.positions,3)),i.setAttribute(`ownerID`,new I(Array.from(n.owners),1)),i.setAttribute(`catalogID`,new I(Array.from(n.ids,Fd),1)),i.setAttribute(`mass`,new F(n.mass,1)),i.setAttribute(`age`,new F(n.ages,1)),i.computeBoundingSphere(),Dh=new fa(Du(i,n.proxyRadii110),$),Tu(Dh),Dh.frustumCulled=!1,Dh.layers.set(1),th.add(Dh),!window.__atlasDisplayReady){let e=Dh;e.onAfterRender=()=>{!oy&&H(`loading`).hidden&&U.clientWidth&&U.clientHeight&&(e.onAfterRender=()=>{},requestAnimationFrame(()=>{oy||e!==Dh||(window.__atlasDisplayReady=!0,window.dispatchEvent(new Event(`atlas-display-ready`)))}))}}for(let e of Oh)th.remove(e),e.geometry.dispose(),e.material.dispose();Oh=[];for(let[e,t]of[[7,.045],[2.6,.11],[.85,.7]]){let r=new Fp;r.setPositions(n.routes.slice()),rf(r,n.routeColors);let i=new Ip({linewidth:e,transparent:!0,opacity:t,vertexColors:!0,depthWrite:!1,blending:2});Ad(i),hf(i),Fm&&n.routeAnchorRoots126&&uu(r,i,n.routeAnchorRoots126);let a=Tu(new tm(r,i));a.visible=H(`network`).checked,Oh.push(a),th.add(a)}qg(),H(`count`).textContent=n.ids.length.toLocaleString()+(dd.value?` 个光点在当前显示球`:` 个光点在当前观测窗`),H(`total`).textContent=Fm?`全域固定 ${B.pointCount.toLocaleString()} 个星系团 · 群与星系按需生成 · 总量待校准`:Vm?`密度预览采样 ${B.world.sourceIndex.count.toLocaleString()} · 导航结点 ${B.pointCount.toLocaleString()} · 星系总量 3,688,377,540`:B?.calibration?`宏观摘要 ${B.pointCount.toLocaleString()} · 样区可生成星系 ${B.galaxyCount} · 全域目标36.88亿`:`共同目录 `+n.total.toLocaleString(),H(`loading`).hidden=!0,Fh=W_();for(let t of e.data.selectionProjection??[])Z.replace({...t,position:new P(...t.position)});for(let e of Z.values)if(e.kind===`super`){let t=fh.get(e.root),r=B?.navigationVersion===94&&t!==void 0?J_({...e,position:new P(...n.positions.subarray(t*3,t*3+3))}):Mv(e.owner);r&&Z.replace(r)}else if(e.kind===`cluster`||e.kind===`space`){let t=jv(e.root);t&&Z.replace(t)}if(B&&Rm!==null&&(Lm=Rm,Rm=null,ov(B.examples[Lm].root),Fh=W_(),zm)){zm=!1;let e=Z_();e&&cv(e,1.6,1800)}if(Q_(),Ng){let e=Ng;if(Ng=null,Sh>=0&&Z.primary){let t=Z.primary.position.clone().sub(e.anchor);G.translate(t),sh.add(t),Pg=e.host,Fg=e.view??null,F_(e.root,!0)}}Sh>=0&&F_(xh,!!Pg||g_(xh)),$.uniforms.now.value=Th}finally{let n=performance.now()-t;z_&&Gd({name:`handled`,root:e.data.root??e.data.structure?.root,seq:e.data.seq,kind:e.data.kind??`view`,ms:n}),n>8&&dy&&(py.push({kind:e.data.kind??`projection`,ms:n}),py.length>60&&py.shift())}},a_.onerror=()=>{H(`loading`).hidden=!1,H(`loading`).innerHTML=`<b>图形样板载入失败</b><span>请保留此页面并反馈；没有自动重试。</span>`};var U_=e=>e.toLocaleString(`zh-CN`,{maximumFractionDigits:2});function W_(){if(!q)return null;if(B){let e=B.examples[Lm]?.root;return e!==void 0&&fh.has(e)?e:B.roots.find(e=>e.physicalKind===`cluster`&&fh.has(e.id))?.id??null}let e=1/0,t=q.ids[0];for(let n=0;n<q.ids.length;n++){if(q.mass[n]<1.2)continue;let r=n*3,i=Math.hypot(...q.positions.slice(r,r+3));i<e&&(e=i,t=q.ids[n])}return t}function G_(e){let t=Z.primary;if(!t||t.root===void 0)return null;if(t.kind===`space`){let n=V.get(t.root);return{name:n?`物质连接区 R-${t.root} · ${n.groups.filter(e=>e.count>=4).length} 群 / ${n.count} 星系`:`宏观密度预览 M-${t.root} · 未细化，非单一天体`,level:e}}if(B?.navigationVersion===94){let e=J_(t);if(t.kind===`cluster`&&(e===t||e.position.distanceToSquared(t.position)>1e-16))return{name:`星系团 G-${t.root}`,level:2};let n=t.galaxy??Y.get(t.root)?.data.galaxies[0],r=Fv({...t,galaxy:n});return{level:{super:1,cluster:2,group:3,galaxy:4}[r],name:r===`super`?`超星系团 SC-${t.owner??q?.owners[fh.get(t.root)??-1]}`:r===`cluster`?`星系团 G-${t.root}`:r===`group`?`星系群 ${String((n?.group??0)+1).padStart(2,`0`)} · G-${t.root}`:`星系 ${n?.id??`G-${t.root}`}`}}let n=Math.max(e,{super:1,cluster:2,group:3,galaxy:4,space:0}[t.kind]);if(n<2)return{name:`超星系团 SC-${t.owner}`,level:n};if(n<3)return{name:`${V.get(t.root)?.physicalKind===`group`?`星系群`:V.get(t.root)?.physicalKind===`galaxy`?`孤立星系`:`星系团`} G-${t.root}`,level:n};let r=t.galaxy??Y.get(t.root)?.data.galaxies[0];return{name:r?.groupCount===1?`孤立星系 ${r.id}`:n<4?`星系群 ${String((r?.group??0)+1).padStart(2,`0`)} · G-${t.root}`:`星系 ${r?.id??`G-${t.root}`}`,level:n}}function K_(e,t){if(e.textContent!==t){for(let t of e.getAnimations())t.cancel();e.textContent=t,e.animate([{opacity:.25},{opacity:1}],{duration:180,easing:`ease-out`})}}var q_=new Map;function J_(e,t=e.kind===`group`?e.galaxy?.group??0:0){if(!Fm||e.root===void 0||e.kind!==`super`&&e.kind!==`cluster`&&e.kind!==`group`)return e;let n=Y.get(e.root),r=n?.data.groups[t]?.members[0],i=r?n.galaxy(r):void 0,a=e.owner??Nv(e.root),o=(a===void 0?[]:cg.get(a)??[]).find(n=>n.cluster===e.root&&n.galaxy.group===t),s=t===0?wu(e.root):void 0,c=r?n.worldPosition(r):o?new P(...o.position):s?new P(...s):null;return c?{...e,position:c,...e.kind===`group`&&(i??o?.galaxy)?{galaxy:i??o.galaxy}:{}}:e}function Y_(e){return Z.primary?.id===e.id?Z.primary:e}function X_(){let e=!1;for(let t of Z.values){let n=q_.get(t.id);if(n===void 0)continue;let r=J_(t,n);r!==t&&(q_.delete(t.id),Z.replace(r),e=!0)}e&&ev()}function Z_(){return Sh>=0?Z.primary?.position.clone()??null:null}function Q_(){Zm.hidden=!0;for(let e of q_.keys())Z.values.some(t=>t.id===e)||q_.delete(e);let e=Z.primary;xh=e?.root??null,Sh=q&&xh!==null?q.ids.indexOf(xh):-1,Ph=e?.kind===`galaxy`?e.id:null;let t=Sh>=0;H(`selection`).hidden=!t,H(`emptySelection`).hidden=Z.size>0,H(`outside`).hidden=!Z.size||t,H(`reticle`).hidden=!t||!!e&&q_.has(e.id),H(`selectionCount`).textContent=`已锁定 ${Z.size} 个 · 最后选中为主目标 · 右键单击解锁`;for(let[t,n]of kg)Z.values.some(e=>e.id===t)&&t!==e?.id||(n.remove(),kg.delete(t));for(let t of Z.values)if(t.id!==e?.id&&!kg.has(t.id)){let e=document.createElement(`div`);e.className=`selection-marker`,e.dataset.id=t.id,e.title=t.id,H(`extraSelections`).append(e),kg.set(t.id,e)}$_(),ev()}function $_(){if($.uniforms.selectionActive.value=Z.size&&(Bl(fv(),U.clientHeight)>0||Z.values.some(e=>e.kind===`super`))?1:0,$.uniforms.ownerSelection.value=+!!Z.values.some(e=>e.kind===`super`),!Dh||!q)return;let e=new Set(Z.values.filter(e=>e.kind===`super`).map(e=>e.owner)),t=new Set(Z.values.filter(e=>e.kind===`cluster`||e.kind===`space`||e.root!==void 0&&V.get(e.root)?.physicalKind===e.kind).map(e=>e.root)),n=Dh.geometry.getAttribute(`chosen`);for(let r=0;r<q.ids.length;r++)n.setX(r,e.has(q.owners[r])||t.has(q.ids[r])?1:0);n.needsUpdate=!0}function ev(){if(!q||Sh<0)return;let e=Z_(),t=Z.primary?.galaxy,n=dd.value?0:t?Th-t.emitted:q.ages[Sh],r=Z.primary.id;H(`observeHere`).textContent=Z.primary.kind===`galaxy`?`以此为观测地点`:`以中心为观测地点`,H(`objectId`).textContent=r,H(`objectDistance`).textContent=U_(e.length()*10)+` 亿光年`,H(`objectEpoch`).textContent=(Th-n)*10<.01?`早期取样（未模拟演化）`:U_((Th-n)*10)+` 亿年`,H(`objectAge`).textContent=U_(n*10)+` 亿年`,H(`objectPosition`).textContent=`球面历史位置：`+xf.exp(Eh,e.toArray()).map(e=>(e*xf.radius).toFixed(6)).join(` / `)+` Gly`,H(`reticleLabel`).textContent=r,H(`objectKind`).textContent=Z.primary.kind===`space`?V.has(Z.primary.root)?`物质连接区 · 保留独立成员，不标为星系团`:`上级密度预览 · 本轮未细化，不是单一天体`:Z.primary.kind===`super`?`超星系团 · ${q.supernodes.find(e=>e.id===Z.primary.owner)?.count??0} 处成员预览`:Z.primary.kind===`cluster`?(J&&J.data.root===Z.primary.root?J.data.morphology:`聚合结构`)+` · 含团间纤维邻域`:Z.primary.kind===`group`?`星系群整体`:t?(t.materialContext===`filament`?`纤维中的星系 · `:``)+(t.emitted<1.5?gd(t.emitted)+`（年代示意）`:Ff(t).name)+` · 直径 `+U_(t.radius*2e9)+` 光年`+(t.environment?` · 环境扰动 ${(t.environment.tidal[0]*100).toFixed(0)}%（示意）`:``):`星系目录对象 · 可展开邻域`}var tv=0,nv=!1,rv=!1;function iv(e=Z.values.filter(e=>e.root!==void 0)){Bh&&wh===Ch&&($h=``,eg++,tg?.complete||(ng=null),tv++,Yh++,Jh=!1,kh++,dg++,Wh++,Ah=!1,jh=null,ug=!1,Gh=!1,Kh=0,oh=null,B_({kind:`cancel`,seq:tv,viewSeq:Ch,knownWorldRevision:Wm,pilotBase:Am(),generator:Yg,generatorParameters:Xg,origin:Eh,epoch:q?.epoch??Th,mode:dd.value?`current`:`lightcone`,selection:e.map(e=>({id:e.id,root:e.root,kind:e.kind}))}))}function av(e,t=!1){Rg=null,mh=null,hh=null;let n=e.root??J?.data.root;if(n===void 0)return;let r={...e,root:n,position:e.position.clone()},i=J_(r);i===r&&Fm&&(r.kind===`super`||r.kind===`cluster`||r.kind===`group`)?q_.set(r.id,r.kind===`group`?r.galaxy?.group??0:0):q_.delete(r.id);let a=Z.primary?.root;Z.click(i,t),a!==Z.primary?.root&&(e_=void 0),!t&&a!==Z.primary?.root&&iv(),nv=!1,G.zoomPose=null,_g=null,vg=``,Q_();let o=Z.primary;o&&(F_(o.root,Im?g_(o.root):Bh||g_(o.root),!0),J&&J.data.root===o.root&&J.setFocus(o.galaxy?.id??`G-${o.root}`))}function ov(e,t=!1){if(e===null){og(),Rg=null,Z.clear(),G.zoomPose=null,_g=null,vg=``,ch=-1,H(`hover`).hidden=!0,Q_();return}let n=jv(e);n&&av(n,t)}var sv=null;function cv(e,t,n=1700){t<$m.getDistance()&&(nv=!1),Rg=null,G.pivot=null,lh=t>K.position.distanceTo(e),G.zoomPose=null,_g=null,sh.copy(e),ch=-1;let r=K.position.clone().sub($m.target).normalize();sv={start:performance.now(),duration:n,distanceFrom:$m.getDistance(),distanceTo:t,direction:r,targetFrom:$m.target.clone(),targetTo:e},$m.autoRotate=!1,H(`rotate`).setAttribute(`aria-pressed`,`false`)}function lv(){Ih=[],Lh=!1,H(`tour`).textContent=`连续推近示范`}function uv(){e_=void 0,Zm.hidden=!0,tg=null,ng=null,iv(),nv=!0,Rg=null,jg=null,Mg=null,Hv(),Q.active&&Q.leave(),Ig=null,lv(),cv(new P,140)}function dv(){let e=J?.data.galaxies.find(e=>e.id===(Ph??Z.primary?.galaxy?.id??`G-${xh}`));return Math.max(8e-6,(e?.radius??4e-5)*4.8)}function fv(){return Q.active?2*K.position.distanceTo(Q.focusPosition())*Math.tan(K.fov*Math.PI/360):Cm(K.position.toArray(),sh.toArray(),K.fov)}function pv(){let e=Z_();if(!e)return;let t=K.position.distanceTo(e);cv(e,t>30?(X?.data.radius??4)*2.9:t>.4?.22:t>.012?.006:dv())}function mv(){return(xh===null||Sh<0)&&ov(J?.data.root??Fh),Z_()}H(`tour`).onclick=()=>{if(Lh){lv(),sv=null;return}ov(Fh);let e=Z_();e&&(Lh=!0,H(`tour`).textContent=`停止推近`,H(`network`).checked=!0,Ih=[{distance:5,duration:3200},{distance:.22,duration:4300},{distance:.006,duration:4e3},{distance:-1,duration:4800}],cv(e,30,2300))},document.querySelectorAll(`[data-depth]`).forEach(e=>e.onclick=()=>{let t=Number(e.dataset.depth);if(lv(),!t){uv();return}let n=mv();if(n){if(t===1){if(Fm){let e=Z.primary?.owner??X?.data.id,t=e===void 0?null:Mv(e);t&&av(t)}cv(new P(...X?.data.center??n.toArray()),(X?.data.radius??5)*2.9,2300)}else if(t===2||t===3){let e=n;if(J&&J.data.root===xh){let r=J.data.galaxies.find(e=>e.id===Ph)??Z.primary?.galaxy,i=t===2?`G-${J.data.root}`:J.data.groups[r?.group??0].members[0];J.setFocus(i),e=J.worldPosition(i)??n}let r=V.get(xh),i=r?.groups[J?.galaxy(Ph??``)?.group??0],a=t===2?r?.coreExtent??r?.extent:i?.coreSpread??i?.spread;Z.primary&&(Z.primary.kind===`cluster`||Z.primary.kind===`group`)&&Z.replace({...Z.primary,position:e.clone()}),cv(e,Im&&a?Math.max(5e-5,a*2.4):t===2?.22:.006,2200)}else cv(n,dv(),2200)}});function hv(){G.pivot=Q.active?Q.focusPosition().clone():Z_()??(Bl(fv(),U.clientHeight)===0?new P:sh.clone()),sh.copy(G.pivot)}$m.addEventListener(`start`,()=>{nv=!1,Rg=null,jg=null,Mg=null,hv(),sv=null,G.zoomPose=null,_g=null,vg=``,lh=!1,lv()}),H(`matterSample`).onclick=()=>{if(!J){H(`matterSampleNote`).textContent=`先选择一个区域，再查看它的团间纤维。`;return}let e=J.data.galaxies.filter(e=>e.materialContext===`filament`&&e.emitted>=.12).sort((e,t)=>Math.hypot(...t.position)-Math.hypot(...e.position))[0];if(!e){H(`matterSampleNote`).textContent=`这个区域没有可选的纤维星系，可换一个区域查看。`;return}let t=J.worldPosition(e.id);Jv({id:e.id,kind:`galaxy`,root:J.data.root,galaxy:e,position:t,radius:e.radius}),cv(t,Math.min(.03,Math.max(e.radius*24,Math.hypot(...e.position)*.65)),1500),H(`matterSampleNote`).textContent=`已定位团间星系，可继续用滚轮靠近；航道仅为叠层。`},H(`home`).onclick=uv,H(`focus`).onclick=pv,H(`rotate`).onclick=()=>{$m.autoRotate=!$m.autoRotate,$m.autoRotate&&hv(),H(`rotate`).setAttribute(`aria-pressed`,String($m.autoRotate))},H(`clean`).onclick=()=>{document.body.classList.toggle(`clean`),H(`clean`).setAttribute(`aria-pressed`,String(document.body.classList.contains(`clean`)))},H(`boundary`).onchange=e=>{Ug.visible=e.target.checked},H(`network`).onchange=e=>{for(let t of Oh)t.visible=e.target.checked},H(`earlyMatter`).onchange=e=>{pd.value=+!!e.target.checked,Xm(`earlyLegend`,Sd())},H(`visionMode`).onchange=()=>{G.cancelMotion(),sv=null,lv();let e=null,t;if(Q.active&&J){let n=J.data.galaxies.find(e=>e.id===Q.galaxyId);if(n){let r=J.worldPosition(n.id);t=Q.captureViewState(),Q.leave(!0),e=n.id,Jv({id:n.id,kind:`galaxy`,root:J.data.root,galaxy:n,position:r,radius:n.radius})}}let n=Z.primary,r=n?.root===void 0?null:{anchor:n.position.clone(),root:n.root,host:e,view:t};dd.value=+(H(`visionMode`).value===`current`),document.querySelector(`.scene-title .eyebrow`).textContent=dd.value?`GLOBAL PRESENT`:`OBSERVABLE UNIVERSE`;let i=H(`ageColor`);i.disabled=!!dd.value,fd.value=i.checked&&!dd.value?1:0,$.uniforms.ageColour.value=fd.value,document.querySelectorAll(`[data-early]`).forEach(e=>{e.disabled=!!dd.value,e.title=dd.value?`当前视野不读取早期历史影像`:`定位当前光行时视野里的相应年代`}),Xm(`sphereDiameter`,dd.value?`当前显示球直径 930 亿光年`:`观测球直径 930 亿光年`),Xm(`visionNote`,dd.value?`全局同一当前年代；显示球只限定取景范围，不是光速边界。`:`收到各地过去的光；着色开关不改变读取年代。`),H(`objectEpoch`).previousElementSibling.textContent=dd.value?`状态年代`:`光线发出年代`,H(`objectAge`).previousElementSibling.textContent=dd.value?`传播延迟`:`回望时间`,H(`boundary`).closest(`label`).querySelector(`span`).firstChild.textContent=dd.value?`球形显示边界`:`球形观测边界`,s_([...Eh],H(`siteName`).textContent,H(`siteNote`).textContent),Ng=r},H(`ageColor`).onchange=e=>{fd.value=e.target.checked&&!dd.value?1:0,$.uniforms.ageColour.value=fd.value,Xm(`earlyLegend`,Sd())},H(`exposure`).oninput=e=>{let t=Number(e.target.value);$.uniforms.gain.value=t,H(`exposureValue`).textContent=Math.round(t*100)+`%`};function gv(e,t=`push`){if(!B)return;if(G.cancelMotion(),lv(),sv=null,Q.active&&Q.leave(),ov(null),Nh=null,Rm=e,Lm=e,zm=!0,document.querySelectorAll(`[data-site]`).forEach(t=>t.classList.toggle(`active`,Number(t.dataset.site)===e)),t===`push`){let t=of(location.href,e,B.examples.length);t===location.href?history.replaceState({pilot:e},``,t):history.pushState({pilot:e},``,t)}let n=Yu[e];s_([...n.position],n.name+`观测站`,n.note)}document.querySelectorAll(`[data-site]`).forEach(e=>e.onclick=()=>{let t=Number(e.dataset.site);if(B){gv(t);return}document.querySelectorAll(`[data-site]`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let n=Yu[t];s_([...n.position],n.name+`观测站`,n.note),uv()}),window.addEventListener(`popstate`,()=>{B&&gv(af(location.href,B.examples.length),`none`)}),B&&history.replaceState({pilot:Lm},``,of(location.href,Lm,B.examples.length)),H(`observeHere`).onclick=()=>{if(!q||Sh<0)return;let e=xf.exp(Eh,Z_().toArray());document.querySelectorAll(`[data-site]`).forEach(e=>e.classList.remove(`active`)),s_(e,`G · `+String(xh).padStart(7,`0`),`以所选历史位置作为观测地点 · 球面测地观测`),uv()},H(`stepSphere`).onclick=()=>{let e=xf.exp(Eh,[Math.PI*xf.radius/4,0,0]);document.querySelectorAll(`[data-site]`).forEach(e=>e.classList.remove(`active`)),s_(e,`大圆观测点`,`沿同一大圆换位45° · 八步回到原位置；这是观测工具`),uv()},H(`advance`).onclick=()=>{_h.advance(.01*zf),Th=_h.epoch,yh=Th,H(`clock`).textContent=(Th*10).toFixed(2)+` 亿年`,s_([...Eh],H(`siteName`).textContent,H(`siteNote`).textContent)},H(`timePlay`).onclick=()=>{_h.playing=!_h.playing,H(`timePlay`).textContent=_h.playing?`Ⅱ 暂停`:`▶ 时间`},H(`timeRate`).onchange=e=>{_h.setRate(Number(e.target.value)),H(`customTimeRate`).value=``},H(`customTimeRate`).onchange=e=>{let t=e.target,n=Number(t.value);Number.isFinite(n)&&n>0?(_h.setRate(n),t.setCustomValidity(``)):t.setCustomValidity(`请输入正的有限天数/秒`)},H(`helpButton`).onclick=()=>H(`help`).showModal(),H(`closeHelp`).onclick=()=>H(`help`).close(),window.addEventListener(`keydown`,e=>{e.target.matches(`input,textarea,select`)||H(`help`).open||e.key.toLowerCase()===`h`&&uv()});var _v={x:0,y:0},vv=0,yv=null,bv=new to,xv=new Set,Sv=null;function Cv(){let e=Hh();return{height:U.clientHeight,network:H(`network`).checked,views:e,active:new Set(e),detailed:e.some(e=>e.hasEndpointLines117),macroOpacity:Oh.reduce((e,t)=>t.visible?Math.max(e,t.material.opacity):e,0)}}function wv(e){let t=Sv;Sv??=Cv();try{return e()}finally{Sv=t}}function Tv(e,t){let n=Sv??Cv();if(!n.network||t===void 0&&!n.detailed&&n.macroOpacity===0)return 0;let r=Xd(e.toArray()),i=0,a=t===void 0?n.detailed?ym(r)??[]:[]:n.views;for(let o of a)(t!==void 0||n.active.has(o)&&o.hasEndpointLines117)&&(i=Math.max(i,o.endpointWeight(e,K,n.height,t,r)));return!Fm&&n.macroOpacity&&xv.has(r)&&(i=Math.max(i,n.macroOpacity)),i===0?0:i*gf(e.length(),Th,!!dd.value)}function Ev(e){if(!q||!Dh)return!1;let t=q.ids[e],n=new P(...Fm?wu(t)??Array.from(q.positions.subarray(e*3,e*3+3)):Array.from(q.positions.subarray(e*3,e*3+3))),r=Dh.geometry.getAttribute(`cloudBorn`).getX(e),i=r<0?0:It.smoothstep(performance.now()-r,0,300)*(R.get(z(t))?R.content(z(t)):Gl(K.position.distanceTo(n),U.clientHeight,K.fov)),a=Jd(q.epoch-q.ages[e],q.epoch,!!fd.value,!!hd.value);return Yd((t<8388608?1-$.uniforms.sourceLayerBlend.value:1)*(V.has(t)?R.body(z(t)):1)*(1-i)*$.uniforms.backgroundFade.value*Dh.geometry.getAttribute(`summaryGain`).getX(e)*Qd(Km.get(t)??-1,performance.now()),a)||Yd(0,0,Tv(n,t))}function Dv(e,t){let n=t.id.includes(`/member-`)?Number(t.id.split(`/member-`)[1]):0;return e.canPick(t,K,U.clientHeight,H(`network`).checked)||Yd(Uh(e.data.root)?.clouds.pointWeight(e.data.root,n*8,K,U.clientHeight)??0,Jd(t.emitted,t.received??Th,!!fd.value,!!hd.value),Tv(e.worldPosition(t.id),e.data.root))}function Ov(e,t,n){if(!Dh||!q)return null;let r=W.domElement.getBoundingClientRect(),i=new Lt((e-r.left)/r.width*2-1,-(t-r.top)/r.height*2+1);bv.setFromCamera(i,K);let a=q.positions,o=bv.ray,s=o.origin,c=o.direction,l=2*Math.tan(K.fov*Math.PI/360)/r.height,u=49,d=null,f=new P;for(let i=0;i<q.ids.length;i++){if(n&&!n.has(q.ids[i]))continue;let o=i*3,p=Fm?wu(q.ids[i]):void 0,m=p?.[0]??a[o],h=p?.[1]??a[o+1],g=p?.[2]??a[o+2],_=m-s.x,v=h-s.y,y=g-s.z,b=_*c.x+v*c.y+y*c.z;if(b<0||_*_+v*v+y*y-b*b>(b*l*8)**2||(f.set(m,h,g).project(K),f.z<-1||f.z>1))continue;let x=(f.x*.5+.5)*r.width,S=(-f.y*.5+.5)*r.height,C=(x-(e-r.left))**2+(S-(t-r.top))**2;C<u&&Ev(i)&&(u=C,d=q.ids[i])}if(d===null&&Bh&&(!Im||Pv()===null)){let n=Vg.pick(K,e-r.left,t-r.top,r.width,r.height);n&&(d=fh.has(n.root)?n.root:dh.get(n.owner)??null)}return d}function kv(e,t,n=!1){return wv(()=>Av(e,t,n))}function Av(e,t,n=!1){let r=U.getBoundingClientRect(),i=e-r.left,a=t-r.top,o=Bl(fv(),U.clientHeight),s=e=>{let t=e.clone().project(K);return{x:(t.x*.5+.5)*r.width,y:(-t.y*.5+.5)*r.height,valid:t.z>-1&&t.z<1}},c=r=>{let i=Ov(e,t,r);if(i===null||!q)return null;let a=q.ids.indexOf(i);return!n&&!wm(o,q.owners[a],Pv())?null:jv(i)};if(!n&&(o===0||!X))return c();let l=bh?.members(Pv())??new Set(X?.data.members.map(e=>e.id)??[]);if(o===1&&!n)return c(l);let u=[...Y.values()].filter(e=>e.visibleFade>.015),d=1/0,f=null;if(o>=3||n)for(let e of u)for(let t of e.data.galaxies){if(Pv()!==null&&Nv(e.data.root)!==Pv())continue;let n=e.worldPosition(t.id),o=s(n),c=K.position.distanceTo(n),l=t.radius*r.height/(Math.max(1e-10,c)*.79);if(!o.valid)continue;let u=Math.hypot(o.x-i,o.y-a);u<Math.max(7,Math.min(40,l*.7))&&u<d&&Dv(e,t)&&(d=u,f={id:t.id,kind:`galaxy`,position:n,radius:t.radius,galaxy:t,root:e.data.root,owner:pg.get(e.data.root)?.id})}for(let e of Hh().filter(e=>Pv()===null||e.data.id===Pv()))for(let t of e.clouds.hits(K,i,a,r.width,r.height,7,new Set,e=>Tv(e))){if(t.distance>=d)continue;let n=e.clouds.galaxy(t);d=t.distance,f={id:n.id,kind:`galaxy`,position:t.position,radius:n.radius,galaxy:n,root:t.root,owner:e.data.id}}let p=new Map([...pg.values()].flatMap(e=>(e.previews??[]).map(e=>[e.id,e]))),m=n;for(let e of p.values()){if(Pv()!==null&&Nv(e.cluster)!==Pv()||Y.has(e.cluster)||Uh(e.cluster)?.clouds.has(e.cluster)||(Uh(e.cluster)?.overviewWeight(e.id)??0)<.015)continue;let t=new P(...e.position),o=s(t),c=K.position.distanceTo(t),u=e.spread*r.height/(Math.max(1e-10,c)*.79),p=Gl(c,r.height,K.fov),h=m&&l.has(e.cluster)&&p>.1;if(!Yd(p,Jd(e.galaxy.emitted,e.galaxy.received??Th,!!fd.value,!!hd.value),Tv(t))||!o.valid||!h&&u<(n?1:8)||(Uh(e.cluster)?.previewFade??X?.previewFade??0)<.015)continue;let g=Math.hypot(o.x-i,o.y-a);g<(n?6:14)&&g<d&&(d=g,f={id:n?e.galaxyId:e.id,kind:n?`galaxy`:`group`,position:t,radius:e.galaxy.radius,galaxy:e.galaxy,root:e.cluster})}if(f)return f;for(let e of u)if((Pv()===null||Nv(e.data.root)===Pv())&&!Uh(e.data.root)?.clouds.has(e.data.root))for(let t of e.data.groups){let n=e.worldPosition(t.members[0]),o=s(n),c=K.position.distanceTo(n),l=.006*r.height/(c*.79);if(!o.valid||l<8)continue;let u=Math.hypot(o.x-i,o.y-a);u<Math.max(14,Math.min(34,l*.4))&&u<d&&(d=u,f={id:t.id,kind:`group`,position:n,radius:2e-6,galaxy:e.galaxy(t.members[0]),root:e.data.root,owner:pg.get(e.data.root)?.id})}return f||c(n?Im&&Pv()!==null?l:void 0:new Set((X?.data.members??[]).filter(e=>K.position.distanceTo(new P(...e.position))<Math.max(.3,fv()*3)).map(e=>e.id)))}function jv(e){let t=fh.get(e);if(t===void 0||!q)return null;let{kind:n,id:r}=Bh&&!Fm&&!V.has(e)?{kind:`super`,id:`SC-${q.owners[t]}`}:km(e,Fm?`cluster`:V.get(e)?.physicalKind);return J_({id:r,kind:n,root:e,owner:q.owners[t],position:new P(...q.positions.slice(t*3,t*3+3)),radius:n===`galaxy`?V.get(e)?.radiusHint??ff(e,0).radius:1e-9})}function Mv(e){let t=dh.get(e),n=t===void 0?null:jv(t);return n?{...n,id:`SC-${e}`,kind:`super`,owner:e,radius:ff(n.root,0).radius}:null}function Nv(e){return q?.owners[fh.get(e)??-1]}function Pv(){return!Im||!(Fm?Vl(fv(),U.clientHeight):Bl(fv(),U.clientHeight)>0)?null:bh?.scope($m.target.toArray())??Z.primary?.owner??X?.data.id??null}function Fv(e){if(Fm&&!Vl(fv(),U.clientHeight))return`super`;let t=e.root;if(t===void 0)return Nl(fv(),U.clientHeight);let n=e.owner??q?.owners[fh.get(t)??-1],r=q?.supernodes.find(e=>e.id===n),i=R.get(ou(n??-1))?.area??(r?$l(r.radius,K.position.distanceTo(new P(...r.center)),U.clientWidth/U.clientHeight,K.fov):0);return B?.navigationVersion===94?(Im?qd:Kd)(Fm?`cluster`:V.get(t)?.physicalKind,Im&&Pv()!==null?1:i,R.canEnter(z(t)),R.canEnter(au(t,e.galaxy?.group??0))):e.galaxy&&R.canEnter(au(t,e.galaxy.group))?`galaxy`:R.isContainer(z(t))&&e.galaxy&&R.content(au(t,e.galaxy.group))>.015?e.galaxy.groupCount===1?`galaxy`:`group`:i<.45?`super`:R.canEnter(z(t))?`group`:`cluster`}function Iv(){let e=Z.primary?.root??Nh??J?.data.root;return e===void 0?Nl(fv(),U.clientHeight):Fv({id:`scope`,kind:`cluster`,root:e,position:new P,radius:0})}function Lv(e){let t=Pv(),n=e.owner??(e.root===void 0?void 0:q?.owners[fh.get(e.root)??-1]);if(t!==null&&n!==t)return null;let r=e.root??J?.data.root;Z.primary?.root??Nh??J?.data.root;let i=Fv(e);if(i===`super`){let t=r===void 0?void 0:fh.get(r),n=Mv(e.owner??(t===void 0?-1:q.owners[t]));return B?.navigationVersion===94&&n&&t!==void 0?J_({...n,root:r,position:e.position.clone(),radius:e.radius}):n}if(r===void 0)return null;if(i===`cluster`||!e.galaxy&&e.kind===`cluster`)return jv(r);if(i===`group`&&!Im&&e.galaxy?.groupCount===1)return{...e,id:e.galaxy.id,kind:`galaxy`,radius:e.galaxy.radius};if(i===`group`&&e.galaxy){let t=e.galaxy.group,n=Y.get(r),i=n?.data.groups[t],a=i?n.data.galaxies.find(e=>e.id===i.members[0]):void 0,o=pg.get(r)?.previews?.find(e=>e.cluster===r&&e.galaxy.group===t)??[...pg.values()].flatMap(e=>e.previews??[]).find(e=>e.cluster===r&&e.galaxy.group===t),s=a?n.worldPosition(a.id):o?new P(...o.position):e.position;return{id:`G-${r}/group-${t}`,kind:`group`,root:r,position:s,radius:1e-9,galaxy:a??o?.galaxy??e.galaxy}}return e}function Rv(e,t,n=!1){if(Iv()===`super`){let n=kv(e,t,!!X);return n?Lv(n):null}let r=kv(e,t,!0);return!r||r.kind===`cluster`&&X&&r.owner!==Pv()&&!Y.has(r.root)&&Tv(r.position,r.root)<=.001?null:Lv(r)}function zv(e,t,n=!1){let r=Rv(e,t,!0);if(r&&!n)return r;let i=U.getBoundingClientRect(),a=12,o=null;for(let n of Z.values){if(q_.has(n.id)||!q?.ids.includes(n.root))continue;let r=n.position.clone().project(K);if(r.z<-1||r.z>1)continue;let s=Math.hypot(i.left+(r.x*.5+.5)*i.width-e,i.top+(-r.y*.5+.5)*i.height-t),c=n.id===Z.primary?.id?12:9;(s<2||Math.abs(s-c)<1.5)&&s<a&&(a=s,o=n)}return o??r}function Bv(e,t){return wv(()=>Vv(e,t))}function Vv(e,t){let n=U.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=[];if(Q.active)return Q.depthCandidates(e,t).map(e=>({depth:e.depth,target:{id:e.target.id,near:e.target,kind:`galaxy`,position:Q.worldProxy(e.target),radius:0,root:J?.data.root}}));if(!q)return a;K.updateMatrixWorld(),bv.setFromCamera(new Lt(r/n.width*2-1,-i/n.height*2+1),K);let o=bv.ray;Iv();let s=(e,t)=>{let s=e.position.clone().project(K);if(s.z<-1||s.z>1||Math.hypot((s.x*.5+.5)*n.width-r,(-s.y*.5+.5)*n.height-i)>Math.min(6,t))return;let c=Lv(e),l=c?{...c,reason:`depth-ray`}:null,u=e.position.clone().sub(o.origin).dot(o.direction);l&&u>=0&&a.push({target:l,depth:u})};for(let e of Y.values())if(!(e.visibleFade<.015)){for(let t of e.data.galaxies){if(!Dv(e,t))continue;let r=e.worldPosition(t.id),i=K.position.distanceTo(r);s({id:t.id,kind:`galaxy`,root:e.data.root,owner:pg.get(e.data.root)?.id,galaxy:t,position:r,radius:t.radius},Math.max(8,Math.min(40,t.radius*n.height/(i*.79)*.7)))}if(!Uh(e.data.root)?.clouds.has(e.data.root))for(let t of e.data.groups)s({id:t.id,kind:`group`,root:e.data.root,position:e.worldPosition(t.members[0]),radius:2e-6,galaxy:e.galaxy(t.members[0])},14)}for(let e of pg.values())for(let t of e.previews??[]){if(Y.has(t.cluster)||Uh(t.cluster)?.clouds.has(t.cluster)||(Uh(t.cluster)?.overviewWeight(t.id)??0)<.015)continue;let r=new P(...t.position);Yd(Gl(K.position.distanceTo(r),n.height,K.fov)*(X?.previewFade??0),Jd(t.galaxy.emitted,t.galaxy.received??Th,!!fd.value,!!hd.value),Tv(r))&&s({id:t.galaxyId,kind:`galaxy`,root:t.cluster,owner:e.id,position:r,radius:t.galaxy.radius,galaxy:t.galaxy},8)}for(let e of Hh().filter(e=>Pv()===null||e.data.id===Pv()))for(let t of e.clouds.hits(K,r,i,n.width,n.height,6,new Set,e=>Tv(e))){let n=e.clouds.galaxy(t);s({id:n.id,kind:`galaxy`,root:t.root,owner:e.data.id,galaxy:n,position:t.position,radius:n.radius},6)}{let e=q.positions,t=2*Math.tan(K.fov*Math.PI/360)/n.height;for(let n=0;n<q.ids.length;n++){let r=n*3,i=Fm?wu(q.ids[n]):void 0,a=(i?.[0]??e[r])-o.origin.x,c=(i?.[1]??e[r+1])-o.origin.y,l=(i?.[2]??e[r+2])-o.origin.z,u=a*o.direction.x+c*o.direction.y+l*o.direction.z;if(u<=0||a*a+c*c+l*l-u*u>(u*t*8)**2||!Ev(n))continue;let d=jv(q.ids[n]);d&&s(d,8)}}if(Bh&&Pv()===null)for(let e of Vg.candidates(K,r,i,n.width,n.height)){let t=B?.navigationVersion===94?jv(e.root):null,n=t?Lv(t):Mv(e.owner);n&&a.push({target:{...n,reason:`depth-ray`},depth:e.depth})}return a}function Hv(){wg&&W.domElement.hasPointerCapture(wg.id)&&W.domElement.releasePointerCapture(wg.id),wg=null,Eg.hide(),Sg.reset(),Q.setDepthPreview(null),Tg=null,Dg.hidden=!0,Og.hidden=!0,Cd.pickRadius.value=0}function Uv(){let e=Sg.target;if(!e||!Cg){Dg.hidden=!0;return}let t=e.near?Q.previewScreen():(()=>{let t=e.position.clone().project(K);return{x:(t.x*.5+.5)*U.clientWidth,y:(-.5*t.y+.5)*U.clientHeight,visible:t.z>-1&&t.z<1}})();Dg.hidden=!t?.visible,t&&(Dg.style.left=t.x+`px`,Dg.style.top=t.y+`px`,Dg.querySelector(`small`).textContent=(Z.values.some(t=>t.id===e.id)?`已选 · Ctrl点击移出`:`预览 · Ctrl点击加入`)+` · `+e.id)}function Wv(e){for(let e of[`pickOwner`,`pickRoot`,`pickGroup`,`pickSeed`,`pickStar`])Cd[e].value=-1;if(e.near){Cd.pickStar.value=e.near.kind===`star`?e.near.star:-1,Tg=null;return}e.kind===`super`?Cd.pickOwner.value=e.owner??-1:(Cd.pickRoot.value=Fd(e.root??-1),e.kind===`group`&&(Cd.pickGroup.value=e.galaxy?.group??-1),e.kind===`galaxy`&&(Cd.pickSeed.value=e.galaxy?.seed??-1));let t=e.radius;if(e.kind===`super`){let n=q?.supernodes.find(t=>t.id===e.owner);n&&(t=n.radius+new P(...n.center).distanceTo(e.position))}else e.kind===`cluster`?t=Y.get(e.root)?.data.extent??.06:e.kind===`group`&&(t=.004);Tg={center:e.position.clone(),radius:jd(K,e.position,t)}}function Gv(e){Kv(e.clientX,e.clientY,e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?U.clientHeight:1))}function Kv(e,t,n,r=!0){jg=null,Mg=null,Cg=!0,W.domElement.focus({preventScroll:!0}),G.cancelMotion(),G.pivot=null,_g=null,sv=null,lv(),$m.autoRotate=!1,H(`rotate`).setAttribute(`aria-pressed`,`false`);let i=Q.active?Q.worldPose():{camera:K.position.toArray(),rotation:K.quaternion.toArray()},a=[Q.active?Q.galaxyId:`macro`,Q.active?_h.elapsedDays:0,Ch,U.clientWidth,U.clientHeight,...i.camera.map(e=>e.toPrecision(11)),...i.rotation.map(e=>e.toPrecision(10))].join(`|`),o=Sg.step(e,t,a,n,()=>Bv(e,t),r?Sg.target?.id??Z.primary?.id??null:null);if(!o)return;Q.setDepthPreview(o.target?.near??null),o.target?Wv(o.target):Tg=null,Q.hideHover(),H(`hover`).hidden=!0,ch=-1,Og.hidden=!1,Og.textContent=o.target?`穿透预览 ${o.index} / ${o.total} · ${o.target.id}\nCtrl＋单击加入／移出 · 左拖旋转 · 松键退出`:`鼠标射线附近没有可选目标`;let s=U.getBoundingClientRect();Og.style.left=Math.max(8,Math.min(s.width-320,e-s.left+18))+`px`,Og.style.top=Math.max(8,Math.min(s.height-78,t-s.top+18))+`px`,Uv()}var qv=e=>!!e?.closest(`.view-tools,.depth-navigation,.stellar-empty-notice`);window.addEventListener(`keyup`,e=>{e.key===`Control`&&(Cg=!1,Hv())}),window.addEventListener(`blur`,()=>{Cg=!1,Hv()}),window.addEventListener(`resize`,Hv),U.addEventListener(`pointerdown`,e=>{if(e.button===0&&e.ctrlKey&&!qv(e.target)&&(Sg.active||!e.target.closest(`.stellar-body-label,.cluster-label`))){_v={x:1/0,y:1/0},Sg.hasTarget||Kv(e.clientX,e.clientY,40,!1);let t=Sg.target;if(e.preventDefault(),e.stopImmediatePropagation(),t){G.cancelMotion();let n=t.near?Q.previewPosition():t.position.clone();n&&(wg={id:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,pivot:n,target:t,moved:!1},W.domElement.setPointerCapture(e.pointerId))}}else Hv()},!0),U.addEventListener(`pointermove`,e=>{if(!wg||wg.id!==e.pointerId)return;e.preventDefault(),e.stopImmediatePropagation();let t=wg;!t.moved&&Math.hypot(e.clientX-t.x,e.clientY-t.y)<=4||(t.moved=!0,G.orbitPixels(e.clientX-t.lastX,e.clientY-t.lastY,t.pivot),t.lastX=e.clientX,t.lastY=e.clientY)},!0),U.addEventListener(`pointerup`,e=>{if(!wg||wg.id!==e.pointerId)return;e.preventDefault(),e.stopImmediatePropagation();let t=wg;wg=null,W.domElement.hasPointerCapture(e.pointerId)&&W.domElement.releasePointerCapture(e.pointerId),!t.moved&&e.ctrlKey&&(t.target.near?Q.selectDepth(t.target.near):Jv(t.target,!0),Uv())},!0),U.addEventListener(`pointercancel`,()=>Hv(),!0);for(let e of[`click`,`dblclick`])U.addEventListener(e,e=>{Cg&&Sg.active&&!qv(e.target)&&(e.preventDefault(),e.stopImmediatePropagation())},!0);function Jv(e,t=!1){av(e,t)}function Yv(e){e.root!==void 0&&F_(e.root),e.galaxy&&(!e.root||J?.data.root===e.root)&&J?.setFocus(e.galaxy.id)}function Xv(){return Sh>=0?Z.primary:null}function Zv(e,t,n){if(Z.primary&&q_.has(Z.primary.id))return{anchor:{id:`view-focus`,kind:`space`,position:sh.clone(),radius:1e-9},reason:`view-focus`};let r=$v(e,t);return xm({inward:n,outside:r,inside:K.position.length()<46.5||Bl(fv(),U.clientHeight)>0,hovered:n&&!r?Rv(e,t):null,selected:Xv(),central:Qv(),focus:{id:`view-focus`,kind:`space`,position:sh.clone(),radius:1e-9}})}function Qv(){if(!q||uh===null)return null;let e=q.ids.indexOf(uh);return{id:`cluster-${uh}`,kind:`cluster`,position:new P(...q.positions.slice(e*3,e*3+3)),radius:2e-6,root:uh}}function $v(e,t){let n=U.getBoundingClientRect();return bv.setFromCamera(new Lt((e-n.left)/n.width*2-1,-(t-n.top)/n.height*2+1),K),!bv.ray.intersectsSphere(new Dn(new P,qu))}U.addEventListener(`pointerdown`,()=>{e_!==void 0&&(e_=void 0,iv())},!0),U.addEventListener(`wheel`,e=>{if(e.target.closest(`.view-tools,.depth-navigation`))return;if(e.preventDefault(),e.stopPropagation(),e.ctrlKey){Gv(e);return}if(e.deltaY<0&&(nv=!1),Hv(),Rg=null,G.stopInertia(),G.pivot=null,sv=null,lv(),$m.autoRotate=!1,H(`rotate`).setAttribute(`aria-pressed`,`false`),Q.active){let t=Q.wheelAnchor(e.clientX,e.clientY,e.deltaY<0),n=G.zoomPose??{camera:K.position.toArray(),target:$m.target.toArray()},r=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?U.clientHeight:1);G.zoomPose=Sm(n,t.position.toArray(),t.radius,r,{minimum:1e-10,maximum:t.limit,surfaceFactor:1.4}),vg=t.id,yg=performance.now();return}let t=e.deltaY<0,n=$v(e.clientX,e.clientY);lh=!t,!t&&e_!==void 0&&(e_=void 0,nv=!0,iv());let r=Zv(e.clientX,e.clientY,t);if(!r)return;let i={...r.anchor,reason:r.reason};if(t){let e=Z.primary?.root??i.root;e_!==void 0&&e_!==e&&iv(),e_=e}if(r.reason===`hover`&&i.kind===`group`&&i.galaxy&&(i={...i,id:i.galaxy.id,kind:`galaxy`,radius:i.galaxy.radius}),t&&!n&&r.reason===`hover`&&_g?.kind===`galaxy`&&Math.hypot(e.clientX-bg,e.clientY-xg)<4&&performance.now()-yg<600){let t=_g.position.clone().project(K),n=U.getBoundingClientRect();t.z>-1&&t.z<1&&Math.hypot(n.left+(t.x*.5+.5)*n.width-e.clientX,n.top+(-t.y*.5+.5)*n.height-e.clientY)<20&&(i=_g)}t?(Yv(i),sh.copy(i.position),H(`hover`).textContent={super:`超星系团`,cluster:`星系团`,group:`星系群`,galaxy:`星系`,space:V.has(i.root)?`物质连接区`:`超星系团预览`}[i.kind]+(Z.size?` · 预览（滚轮保持锁定）`:` · 滚轮靠近`)):(sh.copy(i.position),ch=-1,H(`hover`).hidden=!0);let a=G.zoomPose&&vg===i.id&&performance.now()-yg<500?G.zoomPose:{camera:K.position.toArray(),target:$m.target.toArray()},o=e.deltaMode===1?e.deltaY*16:e.deltaMode===2?e.deltaY*U.clientHeight:e.deltaY;G.zoomPose=Sm(a,i.position.toArray(),i.radius,o),_g=i,vg=i.id,yg=performance.now(),bg=e.clientX,xg=e.clientY},{passive:!1,capture:!0});var ey=null;U.addEventListener(`pointerdown`,e=>{e.button!==2||e.target.closest(`.view-tools,.depth-navigation`)||(e.preventDefault(),e.stopImmediatePropagation(),G.cancelMotion(),G.pivot=null,sv=null,G.zoomPose=null,_g=null,lv(),$m.autoRotate=!1,H(`rotate`).setAttribute(`aria-pressed`,`false`),K.updateMatrixWorld(),ey={id:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,moved:!1,scale:fv()/U.clientHeight,right:new P().setFromMatrixColumn(K.matrixWorld,0).toArray(),up:new P().setFromMatrixColumn(K.matrixWorld,1).toArray()},W.domElement.setPointerCapture(e.pointerId))},!0),U.addEventListener(`pointermove`,e=>{if(!ey||ey.id!==e.pointerId)return;e.preventDefault(),e.stopImmediatePropagation();let t=ey;if(!t.moved&&Math.hypot(e.clientX-t.x,e.clientY-t.y)<4)return;t.moved=!0;let n=new P(...Om(e.clientX-t.lastX,e.clientY-t.lastY,t.scale,t.right,t.up));K.position.add(n),$m.target.add(n),sh.add(n),t.lastX=e.clientX,t.lastY=e.clientY},!0),U.addEventListener(`pointerup`,e=>{if(!ey||ey.id!==e.pointerId)return;e.preventDefault(),e.stopImmediatePropagation();let t=!ey.moved&&Math.hypot(e.clientX-ey.x,e.clientY-ey.y)<4;ey=null,W.domElement.releasePointerCapture(e.pointerId),t&&(ov(null),Q.active&&Q.clearSelection())},!0),U.addEventListener(`pointercancel`,()=>{ey=null}),W.domElement.addEventListener(`pointerdown`,e=>{jg=null,Mg=null,_v={x:e.clientX,y:e.clientY},yv=e.button===0&&!Q.active?zv(e.clientX,e.clientY,e.ctrlKey||e.shiftKey):null},!0),W.domElement.addEventListener(`pointerup`,e=>{if(e.button!==0||Math.hypot(e.clientX-_v.x,e.clientY-_v.y)>=4)return;if(Q.active){Q.selectAt(e.clientX,e.clientY,e.ctrlKey||e.shiftKey);return}let t=yv;yv=null,t&&Jv(t,e.ctrlKey||e.shiftKey)}),W.domElement.addEventListener(`dblclick`,e=>{if(Q.active){Q.selectAt(e.clientX,e.clientY,!1,!0);return}let t=zv(e.clientX,e.clientY);t&&(Jv(t),cv(Y_(t).position,t.kind===`galaxy`?t.radius*4.8:t.kind===`group`?.006:t.kind===`super`?(q?.supernodes.find(e=>e.id===t.owner)?.radius??5)*2.9:.22,2200))});var ty=null,ny=0,ry=``,iy=null;function ay(){if(!ty||ny||Sg.active&&Cg)return;let{x:e,y:t}=ty;if(Q.active){Q.hoverAtPointer(e,t);return}let n=Rv(e,t),r=H(`hover`);if(ch=n?.kind===`super`?n.owner??-1:-1,r.hidden=!n,iy=n?{id:n.id,kind:n.kind}:null,n){let i=U.getBoundingClientRect();r.style.left=Math.min(i.width-260,e-i.left+14)+`px`,r.style.top=t-i.top+16+`px`,r.textContent=`${{super:`超星系团`,cluster:`星系团`,group:`星系群`,galaxy:`星系`,space:`物质连接区`}[n.kind]} · ${n.id}`+(Z.size?` · 预览（滚轮保持锁定）`:` · 滚轮靠近`)}}W.domElement.addEventListener(`pointermove`,e=>{ty={x:e.clientX,y:e.clientY},ny=e.buttons,e.buttons||performance.now()-vv<80||(vv=performance.now(),ay())}),W.domElement.addEventListener(`pointerleave`,()=>{ty=null,iy=null,H(`hover`).hidden=!0}),W.domElement.addEventListener(`pointerdown`,e=>{ny=e.buttons}),W.domElement.addEventListener(`pointerup`,()=>{ny=0,ry=``}),W.domElement.addEventListener(`pointerleave`,()=>{Cg||Hv(),Q.hideHover(),H(`hover`).hidden=!0,ch=-1}),U.addEventListener(`contextmenu`,e=>e.preventDefault());var oy=!1;W.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),oy=!0,H(`loading`).hidden=!1,H(`loading`).innerHTML=`<b>图形上下文已中断</b><span>已停止渲染，请保留现场反馈；不会自动重试。</span>`});var sy=new URLSearchParams(location.search).has(`fixedScene126`),cy=new URLSearchParams(location.search).has(`probeRotation126`),ly=0,uy=new WeakMap,dy=new URLSearchParams(location.search).has(`profile98`),fy=[],py=[],my=[],hy=performance.now();function gy(e,t,n,r=1,i=K){let a=performance.now();R.setScope(Pv()),R.setOverviewGain(1-It.smoothstep(e,40,100)),R.update(i,U.clientWidth,U.clientHeight);let o=H(`network`).checked;ah.update(Eh,Th,i.position),mf.value=Th;let s=performance.now(),c=Ku(Z.values,e=>V.has(e)),l=Z.values.filter(e=>e.kind===`super`).map(e=>e.owner),u=e=>q?.owners[fh.get(e)??-1]??-1,d=[-1,-1,-1,-1],f=[0,0,0,0],p=0;for(let a of Y.values())a.setDimOwner(u(a.data.root)),a.setMemberSelection(c,l,Z.size>0),d[p]=a.data.root,f[p]=a.update(i,U.clientHeight,U.clientWidth,o,$.uniforms.gain.value,1,n,e,R.carrier(z(a.data.root))*(Uh(a.data.root)?.clouds.has(a.data.root)?It.smoothstep(performance.now()-(Uh(a.data.root).clouds.readyRoots.get(a.data.root)??1/0),0,300):1),t??-1,r),a.setDimOwner(q?.owners[fh.get(a.data.root)??-1]??-1),a.group.visible=gh.ready(a.group)&&a.visibleFade>.001,a.group.visible?f[p]/=Math.max(1e-9,R.carrier(z(a.data.root))):f[p]=0,p++;$.uniforms.detailIDs.value.fromArray(d.map(Fd)),$.uniforms.detailFades.value.fromArray(d.map((e,t)=>Uh(e)?.clouds.has(e)?0:f[t])),$.uniforms.sourceLayerBlend.value=B?.densityField94?Vg.snapshot().blend??0:0,$.uniforms.backgroundFade.value=Ll(e,U.clientHeight);let m=performance.now();for(let a of Hh())a.prepareAhead=!!B?.hierarchy104&&!nv&&a.data.id===(Z.primary?.owner??Nv(t??-1)),a.clouds.prepareAhead=a.prepareAhead,a.clouds.setMemberSelection(c,l,Z.size>0),a.clouds.setAppearance($.uniforms.gain.value,Th,W.getPixelRatio()),a.setFocus(t??-1,Y.get(t??-1)?.focusGroup??0),a.setHighlight(c,l,u,Z.size>0),a.setDetails(d,f),a.update(i,U.clientHeight,U.clientWidth,o,e,n,r);let h=performance.now();j_(),Vg.update(Th,Math.max(.035,$.uniforms.backgroundFade.value)*$.uniforms.gain.value,W.getPixelRatio(),Z.primary?.owner??-1);let g=Rl(e,U.clientHeight);Oh.forEach((e,t)=>{e.visible=o&&g*r>.001,e.material.opacity=[.045,.11,.7][t]*g*r}),dy&&fy.push({hierarchy:s-a,structures:m-s,views:h-m,tail:performance.now()-h}),fy.length>180&&fy.shift()}function _y(e){cy&&ly++,W.info.reset();let t=performance.now();if(oy)return;if(requestAnimationFrame(_y),_h.tick(Math.max(0,(e-hy)/1e3)),Th=_h.epoch,e-vh>100&&(Xm(`clock`,(Th*10).toFixed(4)+` 亿年 · +`+_h.elapsedDays.toFixed(2)+`天`),vh=e),!Q.active&&Th-yh>=.001&&Ch===wh&&(yh=Th,s_([...Eh],H(`siteName`).textContent,H(`siteNote`).textContent)),gh.beginFrame(),Rg&&!Q.active){let e=Rg,t=e.galaxy,n=J?.worldPosition(t.id);J?.data.root!==e.root||!n?Rg=null:e.mode||e.restore||K.position.distanceTo(n)<t.radius*4.1?zg(t,e.mode,e.restore):Rg=null}if(Ag!==null&&J){let e=Ag;Ag=null,Bg(e)}if(jg!==null&&J?.data.root===jg&&J.data.galaxies.length>1){let e=J.data.galaxies[0],t=J.worldPosition(e.id);jg=null,Mg=e.id,Jv({id:e.id,kind:`galaxy`,root:J.data.root,galaxy:e,position:t,radius:e.radius}),cv(t,e.radius*2.8,1800)}if(Mg&&!sv){let e=Mg;Mg=null;let t=J?.data.galaxies.find(t=>t.id===e),n=t?J?.worldPosition(t.id):null;t&&n&&K.position.distanceTo(n)<t.radius*3.1&&zg(t)}if(Pg&&J?.data.root===xh){let e=Pg;Pg=null;let t=J.data.galaxies.find(t=>t.id===e);t&&zg(t,void 0,Fg??void 0),Fg=null}if(Ig&&J?.data.root===xh){let e=Ig;Ig=null,zg(Z.primary?.galaxy??J.data.galaxies[0],e)}if(G.update(Math.min(.08,Math.max(0,(e-hy)/1e3))),!Q.active&&G.goal){let e=Z.primary?.galaxy??_g?.galaxy??J?.data.galaxies.find(e=>e.id===Ph||e.id===`G-${xh}`),t=e?J?.worldPosition(e.id):null;e&&t&&K.position.distanceTo(t)<e.radius*4&&G.goal.camera.distanceTo(t)<K.position.distanceTo(t)&&zg(e)}if(Q.active){my.push(e-hy),my.length>1800&&my.shift(),Q.update(e),Uv(),hy=e;return}if(Xm(`earlyLegend`,Sd()),Kg.visible=$m.getDistance()>1,Math.min(80,e-hy),my.push(e-hy),my.length>1800&&my.shift(),hy=e,sv){let t=Math.min(1,(e-sv.start)/sv.duration),n=t*t*(3-2*t),r=Math.exp(Math.log(sv.distanceFrom)*(1-n)+Math.log(sv.distanceTo)*n),i=sv.distanceTo>sv.distanceFrom*20?It.smoothstep(t,.55,1):n;if($m.target.lerpVectors(sv.targetFrom,sv.targetTo,i),K.position.copy($m.target).addScaledVector(sv.direction,r),t===1){if(sv=null,Ih.length){let e=Ih.shift();cv(Z_(),e.distance<0?dv():e.distance,e.duration)}else Lh&&lv()}}K.lookAt($m.target),K.updateMatrixWorld(),K.near=Math.max(1e-9,Math.min(.005,$m.getDistance()*2e-4)),K.far=1200,K.updateProjectionMatrix(),Ug.visible=H(`boundary`).checked,Gg.quaternion.copy(K.quaternion);let n=K.position.length();if(Gg.visible=n>qu*1.01,Gg.visible){let e=qu*qu/n;Gg.position.copy(K.position).normalize().multiplyScalar(e),Gg.scale.setScalar(Math.sqrt(1-(qu/n)**2)),Gg.lookAt(K.position)}if(q&&Sh>=0){let e=Z_().clone().project(K),t=!q_.has(Z.primary.id)&&e.z>-1&&e.z<1&&Math.abs(e.x)<1&&Math.abs(e.y)<1;H(`reticle`).hidden=!t,t&&(H(`reticle`).style.left=(e.x*.5+.5)*U.clientWidth+`px`,H(`reticle`).style.top=(-e.y*.5+.5)*U.clientHeight+`px`)}for(let[e,t]of kg){let n=Z.values.find(t=>t.id===e),r=n.position.clone().project(K);t.hidden=q_.has(n.id)||!q?.ids.includes(n.root)||r.z<-1||r.z>1||Math.abs(r.x)>1||Math.abs(r.y)>1,t.style.left=(r.x*.5+.5)*U.clientWidth+`px`,t.style.top=(-r.y*.5+.5)*U.clientHeight+`px`}let r=fv(),i=Ml(r,U.clientHeight),a=i.unitsPerPixel,o=i.nice,s=K.position.length()<qu;Bh&&rv&&!s&&!sv&&(iv(),nv=!0),rv=s;let c=Z.primary?.root??_g?.root??Nh??J?.data.root;if(Bh&&lh&&!sv&&!nv&&c!==void 0&&!g_(c)&&(iv(),nv=!0),ag(),!nv&&e_!==void 0&&Bl(r,U.clientHeight)>0){let e=fh.get(e_);if(e!==void 0&&q){let t=new P().fromArray(q.positions,e*3);K.position.distanceTo(t)*Ul(U.clientHeight,K.fov)<Jl&&F_(e_,!0,!0)}}H(`scaleRule`).style.width=o/a+`px`,H(`scaleRule`).dataset.gly=String(o),H(`scaleRule`).dataset.unitsPerPixel=String(a);let l=o*1e9;Xm(`scaleLabel`,(l>=1e8?U_(l/1e8)+` 亿光年`:l>=1e4?U_(l/1e4)+` 万光年`:U_(l)+` 光年`)+` · 焦点平面标尺`);let u=Im&&Bl(r,U.clientHeight)>0?{super:1,cluster:2,group:3,galaxy:4}[Iv()]??2:Bl(r,U.clientHeight);Xm(`viewLabel`,[`球体全景`,`超星系团 · 宏观航道`,`星系团结构`,`星系群成员`,`单个星系形态`][u]),$.uniforms.objectLodScale.value=Ul(U.clientHeight,K.fov),$.uniforms.activeOwner.value=X?.data.id??-1,$.uniforms.clusterReveal.value=X?zl(r,U.clientHeight):0,$.uniforms.contextFocus.value.copy(sh),$.uniforms.viewSpan.value=r;let d=Bl(r,U.clientHeight);$.uniforms.selectionActive.value=Z.size&&(d>0||Z.values.some(e=>e.kind===`super`))?1:0,d>0&&(ch=-1),$.uniforms.hoverOwner.value=ch,document.querySelectorAll(`[data-depth]`).forEach(e=>e.classList.toggle(`active`,Number(e.dataset.depth)===u)),gy(r,c,sh);let f=H(`network`).checked;if(X&&!Z.primary&&(!J||d<=1))Xm(`structureLabel`,`超星系团 SC-${X.data.id} · ${X.data.members.length} 处成员预览`);else if(J&&!Z.primary){let e=J.data;Xm(`structureLabel`,d===0?`宇宙观测窗 · ${q?.supernodes.length??0} 个超星系团`:`${{cluster:`星系团`,group:`星系群`,galaxy:`孤立星系`,"extended-region":`物质连接区`}[V.get(e.root)?.physicalKind??`extended-region`]} G-${e.root} · ${e.groups.filter(e=>e.members.length>=4).length} 个星系群 / ${e.galaxies.length} 个成员`)}let p=G_(d);if(p&&(H(`objectId`).textContent!==p.name&&ev(),K_(H(`reticleLabel`),p.name),K_(H(`objectId`),p.name),K_(H(`structureLabel`),p.name),p.level>{super:1,cluster:2,group:3,galaxy:4,space:0}[Z.primary.kind])){let e=`当前缩放焦点 · 保持锁定 ${Z.primary.id}`;H(`objectKind`).textContent!==e&&(H(`objectKind`).textContent=e)}oh=Ah||X?.detailsBuilding&&!X.detailsBuilt?oh??e:null;let m=Em({tier:Nl(r,U.clientHeight),count:Z.size,primary:Z.primary?.id,pending:oh!==null&&e-oh>300,error:mh,network:f});if(H(`detailStatus`).textContent!==m&&(H(`detailStatus`).textContent=m,H(`detailStatus`).title=m),e-Rh>100){Rh=e;let t=[];zh.forEach((e,n)=>{if(e.hidden=!0,t.length>=6||d>=4&&Z.primary?.root===J?.data.root&&n===(Z.primary?.galaxy?.group??0)||!J||!R.isContainer(z(J.data.root))&&!R.canEnter(z(J.data.root)))return;let r=J.data.groups[n],i=J.galaxy(r.members[0]),a=new P(...r.center).add(J.group.position).project(K),o=(a.x*.5+.5)*U.clientWidth,s=(-a.y*.5+.5)*U.clientHeight;a.z<-1||a.z>1||o<90||o>U.clientWidth-90||s<185||s>U.clientHeight-215||t.length>=6||t.some(e=>Math.abs(e.x-o)<130&&Math.abs(e.y-s)<42)||Dv(J,i)&&(t.push({x:o,y:s}),e.hidden=!1,e.style.left=o+`px`,e.style.top=s+12+`px`)})}let h=zh.filter(e=>!e.hidden).map(e=>({x:parseFloat(e.style.left),y:parseFloat(e.style.top)})),g=new Set,_=[],v=U.clientWidth,y=U.clientHeight;if(X&&R.canEnter(ou(X.data.id)))for(let e of mg){let t=hg.get(e);if(!t)continue;let n=Number(e.dataset.root),r=fh.get(n);if(r===void 0)continue;let i=t.clone().project(K),a=(i.x*.5+.5)*v,o=(-i.y*.5+.5)*y;if(i.z<-1||i.z>1||a<90||a>v-90||o<190||o>y-215||h.some(e=>Math.abs(e.x-a)<180&&Math.abs(e.y-o)<36)||_.some(e=>Math.abs(e.x-a)<100&&Math.abs(e.y-o)<35)||!Ev(r)&&!(X.clouds.has(n)&&Jd(q.epoch-q.ages[r],q.epoch,!!fd.value,!!hd.value)>.001))continue;_.push({x:a,y:o}),g.add(e),e.hidden&&=!1;let s=a+`px`,c=o+`px`;if(e.style.left!==s&&(e.style.left=s),e.style.top!==c&&(e.style.top=c),g.size>=8)break}for(let e of gg)g.has(e)||(e.hidden=!0);if(gg=g,ty&&!ny&&e-vv>120){let t=[Wm,Ch,xh,J?.data.root,Y.size,dg,Hh().reduce((e,t)=>e+t.clouds.readyRoots.size,0),...K.position.toArray(),...K.quaternion.toArray()].join(`:`);t!==ry&&(ry=t,vv=e,ay())}if(D_){if(Dh&&(Dh.visible=O_.macro),nh.object.visible=O_.far,!O_.cloud)for(let e of Hh())e.group.traverse(e=>{e instanceof fa&&(e.visible=!1)});if(!O_.detail)for(let e of Y.values())e.group.visible=!1}ph.lazy?.cuda126,Jm?.value===`cuda`&&Xm(`numericStatus126`,`Precomputed display catalogue`);let b=$.uniforms.gain.value;$.uniforms.gain.value=b*Lg(K.position),wd(K,Sg.active?Tg?.center??null:null,Tg?.radius??0),W.render(Qm,K),rh.render(K,Qm),$.uniforms.gain.value=b,J?.renderMedium(K,U.clientWidth,U.clientHeight,b),dy&&fy.length&&(fy[fy.length-1].cpu=performance.now()-t),Eg.update(K,Sg.hasTarget&&Cg?Tg?.center??null:null,new P,qu,U.clientWidth,U.clientHeight,Tg?.radius??0),Uv()}requestAnimationFrame(_y),s_([...Yu[Pm].position],Yu[Pm].name+`观测站`,Yu[Pm].note),Object.assign(window,{__macroRead:()=>{let e=Q.active?eh:G.camera;return{navigation:G.snapshot(),observationMode:q?.mode??`lightcone`,frame:Q.active?`precision`:`macro`,clock:_h.snapshot(),networkGain:Q.active?1-Q.transitionBlend:1,quaternion:e.quaternion.toArray(),seq:Ch,completedSeq:wh,topology:q?.topology??null,orbitPivot:G.pivot?.toArray()??null,boundary:{enabled:H(`boundary`).checked,shellVisible:Ug.visible,outlineVisible:Ug.visible&&Gg.visible,distance:e.position.length(),aimDistance:$m.getDistance()},viewFocus:sh.toArray(),viewSpan:fv(),viewportHeight:U.clientHeight,cameraFov:e.fov,level:Bl(fv(),U.clientHeight),hoverOwner:ch,pickTier:Nl(fv(),U.clientHeight),ruler:Ml(fv(),U.clientHeight),workerStats:{...ph},previewPending:ug,previewLoaded:lg.get(X?.data.id??-1)?.clusters.map(e=>e.root)??[],navigationRoot:Nh,detailError:mh,failedRoot:hh,chosenOwners:Z.values.filter(e=>e.kind===`super`).map(e=>e.owner),chosenRoots:Z.values.filter(e=>e.kind===`cluster`).map(e=>e.root),reveal:{owner:$.uniforms.activeOwner.value,weight:$.uniforms.clusterReveal.value,memberCount:q?.supernodes.find(e=>e.id===$.uniforms.activeOwner.value)?.count??0},selection:Z.values.map(e=>({id:e.id,kind:e.kind,root:e.root,owner:e.owner,position:e.position.toArray()})),primarySelection:Z.primary?.id??null,unitsPerPixel:fv()/U.clientHeight,panActive:!!ey,centralId:uh,centralPosition:Qv()?.position.toArray()??null,universeScreen:new P().project(e).toArray(),zoomingOut:lh,reticleVisible:!H(`reticle`).hidden,backgroundGain:$.uniforms.backgroundFade.value,selectedCatalogGain:$.uniforms.ownerSelection.value>.5?It.lerp($.uniforms.backgroundFade.value,1,1-$.uniforms.clusterReveal.value):$.uniforms.backgroundFade.value,selectedId:xh,selectedIndex:Sh,origin:[...Eh],epoch:Th,count:q?.ids.length,total:q?.total,visibleIds:q?Array.from(q.ids.slice(0,30)):[],sample:q?{id:q.ids[0],position:Array.from(q.positions.slice(0,3)),age:q.ages[0]}:null,camera:e.position.toArray(),target:$m.target.toArray(),routes:q?q.routes.length/6:0,externalRoutes:Oh.map(e=>({visible:e.visible,opacity:e.material.opacity})),structure:J?.snapshot()??null,supercluster:X?.snapshot()??null,cacheRoots:[...Y.keys()],cachedDetails:[...Y.values()].map(e=>e.snapshot()),zoom:_g?{id:_g.id,kind:_g.kind,reason:_g.reason,position:_g.position.toArray(),distance:e.position.distanceTo(_g.position),radius:_g.radius,active:!!G.zoomPose}:null,detailPending:Ah,touring:Lh,selectedGalaxy:Ph,frames:[...my],lost:oy}},__macroScreenSamples:()=>{let e=Q.active?eh:G.camera;if(!q)return[];let t=W.domElement.getBoundingClientRect(),n=[];for(let r=0;r<q.ids.length&&n.length<80;r+=Math.max(1,Math.floor(q.ids.length/1e3))){let i=r*3,a=new P(...q.positions.slice(i,i+3)).project(e);Math.abs(a.x)<.6&&Math.abs(a.y)<.6&&a.z>-1&&a.z<1&&n.push({id:q.ids[r],x:t.left+(a.x*.5+.5)*t.width,y:t.top+(-a.y*.5+.5)*t.height})}return n}}),Object.assign(window,{__macroGalaxyScreens:()=>J?.data.galaxies.map(e=>{let t=J.worldPosition(e.id).project(K),n=U.getBoundingClientRect();return{id:e.id,x:n.left+(t.x*.5+.5)*n.width,y:n.top+(-t.y*.5+.5)*n.height,visible:t.z>-1&&t.z<1&&Math.abs(t.x)<.8&&Math.abs(t.y)<.8}}).filter(e=>e.visible)??[]}),Object.assign(window,{__macroTargetScreens:()=>{let e=[],t=U.getBoundingClientRect(),n=(n,r,i,a,o)=>{let s=i.clone().project(K);s.z>-1&&s.z<1&&Math.abs(s.x)<.8&&Math.abs(s.y)<.7&&e.push({id:n,kind:r,root:o,x:t.left+(s.x*.5+.5)*t.width,y:t.top+(-s.y*.5+.5)*t.height,position:i.toArray(),radius:a})};for(let e of X?.data.members??[])n(`cluster-${e.id}`,`cluster`,new P(...e.position),.08,e.id);for(let e of J?.data.groups??[])n(e.id,`group`,new P(...e.center).add(J.group.position),.006);for(let e of J?.data.galaxies??[])n(e.id,`galaxy`,J.worldPosition(e.id),e.radius);return e}}),Object.assign(window,{__macroTargetAt:(e,t)=>{let n=Rv(e,t);return n?{id:n.id,kind:n.kind,root:n.root,owner:n.owner,position:n.position.toArray(),radius:n.radius}:null}}),Object.assign(window,{__macroPreciseAt:(e,t)=>{let n=Rv(e,t,!0);return n?{id:n.id,kind:n.kind,root:n.root,owner:n.owner,position:n.position.toArray()}:null},__macroSuperScreens:()=>{let e=U.getBoundingClientRect();return q?.supernodes.map(t=>{let n=new P(...t.center).project(K);return{...t,x:e.left+(n.x*.5+.5)*e.width,y:e.top+(-n.y*.5+.5)*e.height,visible:n.z>-1&&n.z<1&&Math.abs(n.x)<.85&&Math.abs(n.y)<.75}}).filter(e=>e.visible)??[]}}),Object.assign(window,{__macroZoomChoiceAt:(e,t,n=!0)=>{let r=Zv(e,t,n);return{outside:$v(e,t),reason:r.reason,id:r.anchor.id,position:r.anchor.position.toArray(),radius:r.anchor.radius}}}),Object.assign(window,{__macroPointScreen:e=>{if(!q)return null;let t=q.ids.indexOf(e);if(t<0)return null;let n=U.getBoundingClientRect(),r=new P(...q.positions.slice(t*3,t*3+3)).project(K);return{id:e,x:n.left+(r.x*.5+.5)*n.width,y:n.top+(-r.y*.5+.5)*n.height,visible:r.z>-1&&r.z<1&&Math.abs(r.x)<1&&Math.abs(r.y)<1}},__macroCachedTargets:()=>{let e=U.getBoundingClientRect();return[...Y.values()].flatMap(t=>t.data.galaxies.map(n=>{let r=t.worldPosition(n.id).project(K);return{id:n.id,root:t.data.root,owner:pg.get(t.data.root)?.id,x:e.left+(r.x*.5+.5)*e.width,y:e.top+(-r.y*.5+.5)*e.height,visible:r.z>-1&&r.z<1&&Math.abs(r.x)<.9&&Math.abs(r.y)<.75,fade:t.visibleFade,pixelRadius:n.radius*e.height/(Math.max(1e-10,K.position.distanceTo(t.worldPosition(n.id)))*.79)}}).filter(e=>e.visible))}}),Object.assign(window,{__macroNetworkRead:()=>X?.snapshot()??null}),Object.assign(window,{__macroPreviewScreens:()=>{let e=U.getBoundingClientRect();return[...new Map([...pg.values()].flatMap(e=>(e.previews??[]).map(e=>[e.id,e]))).values()].filter(e=>!Y.has(e.cluster)).map(t=>{let n=new P(...t.position),r=n.clone().project(K);return{id:t.galaxyId,root:t.cluster,x:e.left+(r.x*.5+.5)*e.width,y:e.top+(-r.y*.5+.5)*e.height,size:t.spread*e.height/(Math.max(1e-10,K.position.distanceTo(n))*.79),visible:r.z>-1&&r.z<1&&Math.abs(r.x)<.8&&Math.abs(r.y)<.65}}).filter(e=>e.visible&&e.size>1)}}),Object.assign(window,{__macroRawAt:(e,t)=>{let n=kv(e,t,!0);return n?{id:n.id,kind:n.kind,root:n.root,owner:n.owner}:null}}),Object.assign(window,{__macroPointChosen:e=>{let t=fh.get(e);return t===void 0||!Dh?null:Dh.geometry.getAttribute(`chosen`).getX(t)}}),Object.assign(window,{__macroResources:()=>({geometries:W.info.memory.geometries,textures:W.info.memory.textures,programs:W.info.programs?.length??0,drawCalls:W.info.render.calls,structureCache:Y.size,superCache:pg.size,ownerInternals:lg.size,ownerGroups:cg.size})}),Object.assign(window,{__stellarRead:()=>Q.snapshot(),__navigationRead:()=>({frame:Q.active?`precision`:`macro`,...G.snapshot(),worldCamera:Q.active?Q.worldPose().camera:K.position.toArray(),worldQuaternion:Q.active?Q.worldPose().rotation:K.quaternion.toArray(),selection:Z.values.map(e=>e.id)})}),Object.assign(window,{__earlyRead:()=>ah.snapshot(),__depthRead:()=>({...Sg.snapshot(),preview:Sg.target?.id??null,selected:Z.values.map(e=>e.id),sphere:Tg?{center:Tg.center.toArray(),radius:Tg.radius,unit:`Gly`}:Q.active?Q.depthSphereSnapshot():null}),__depthCandidatesAt:(e,t)=>Bv(e,t).map(n=>{let r=n.target.near?null:n.target.position.clone().project(K),i=U.getBoundingClientRect();return{id:n.target.id,kind:n.target.kind,depth:n.depth,offset:r?Math.hypot(i.left+(r.x*.5+.5)*i.width-e,i.top+(-r.y*.5+.5)*i.height-t):null}})}),Object.assign(window,{__matterRead:()=>{if(!J)return null;let e=Q.active?eh:K,t=U.getBoundingClientRect();return{root:J.data.root,version:J.data.matterVersion,kind:J.data.aggregateKind,diffuseSegments:J.data.diffuse?.length??0,fieldFeatures:J.data.fieldFeatures??[],galaxies:J.data.galaxies.map(n=>{let r=J.worldPosition(n.id),i=r.clone().project(e);return{id:n.id,group:n.group,radius:n.radius,angles:n.angles,environment:n.environment,context:n.materialContext,pair:n.sourcePair,materialKey:n.materialKey,density:n.densityProxy,position:r.toArray(),x:t.left+(i.x*.5+.5)*t.width,y:t.top+(-i.y*.5+.5)*t.height,visible:i.z>-1&&i.z<1&&Math.abs(i.x)<1&&Math.abs(i.y)<1}})}}}),Object.assign(window,{__stellarTransitionRead:()=>({macro:J?.preparationSnapshot()??null,local:{active:Q.active,blend:Q.transitionBlend}})}),Object.assign(window,{__hierarchyRead:()=>{let e=performance.now(),t=Q.active?eh:K,n=Dh?.geometry.getAttribute(`cloudBorn`);return{stats:X?.clouds.snapshot(),roots:[...C_].map(r=>{let i=fh.get(r),a=n?.getX(i)??-1,o=new P(...q.positions.slice(i*3,i*3+3)),s=Gl(t.position.distanceTo(o),U.clientHeight,t.fov),c=a<0?0:It.smoothstep(e-a,0,300),l=Y.get(r),u=l?.group.visible?l.visibleFade:0;return{root:r,born:a,reveal:s,parent:1-s*c,cloud:s*c,detail:0,fullRendererWeight:u}})}}}),Object.assign(window,{__hierarchySamples:()=>{let e=U.getBoundingClientRect();return(X?.clouds.screens(K,e.width,e.height,new Set(Y.keys()))??[]).map(t=>({...t,x:t.x+e.left,y:t.y+e.top}))}}),Object.assign(window,{__pickAt:(e,t)=>({normal:(()=>{let n=kv(e,t,!0);return n?{id:n.id,root:n.root,kind:n.kind}:null})(),depth:Bv(e,t).map(e=>({id:e.target.id,root:e.target.root}))}),__visibilityRead:()=>{if(!J)return[];let e=U.getBoundingClientRect();return J.data.galaxies.map(t=>{let n=J.worldPosition(t.id).clone().project(K);return{id:t.id,root:J.data.root,group:t.group,aggregate:J.data.groups[t.group].members[0]===t.id,context:t.materialContext,body:J.bodyWeight(t,K,e.height),light:Jd(t.emitted,t.received??Th,!!fd.value,!!hd.value),route:J.routeWeight(t.id,K,e.height),allowed:Dv(J,t),x:e.left+(n.x*.5+.5)*e.width,y:e.top+(.5-n.y*.5)*e.height,onscreen:n.z>-1&&n.z<1&&Math.abs(n.x)<.8&&Math.abs(n.y)<.7}})},__catalogVisibilitySamples:()=>{if(!q)return[];let e=U.getBoundingClientRect(),t=[];for(let n=0;n<q.ids.length&&t.length<15;n++){let r=Jd(q.epoch-q.ages[n],q.epoch,!!fd.value,!!hd.value);if(r>8e-4)continue;let i=new P(...q.positions.slice(n*3,n*3+3)),a=i.clone().project(K);if(a.z<-1||a.z>1||Math.abs(a.x)>.75||Math.abs(a.y)>.6)continue;let o=Tv(i,q.ids[n]);o<=.003||t.push({id:q.ids[n],x:e.left+(a.x*.5+.5)*e.width,y:e.top+(.5-a.y*.5)*e.height,body:r,route:o,allowed:Ev(n)})}return t}}),Object.assign(window,{__pilotRead:()=>({active:Lm,pending:Rm,url:location.href,selected:xh,expected:B?.examples[Lm].root,seq:Ch,completedSeq:wh})}),Object.assign(window,{__cosmicRouteRead:()=>({pointIsolation:$.uniforms.selectionActive.value,lines:Oh.map(e=>{let t=e.geometry.getAttribute(`instanceColorStart`),n=e.geometry.getAttribute(`instanceColorEnd`),r=0;for(let e=0;e<t.count;e++)for(let i=0;i<3;i++)r=Math.max(r,Math.abs(t.getComponent(e,i)-(q?.routeColors[e*6+i]??0)),Math.abs(n.getComponent(e,i)-(q?.routeColors[e*6+3+i]??0)));return{visible:e.visible,opacity:e.material.opacity,hasSelectionOpacity:!!e.geometry.getAttribute(`routeSelectionOpacity`),maxColorError:r}})})}),Object.assign(window,{__screenHierarchyRead:()=>({entries:R.snapshot(),pick:Iv(),width:U.clientWidth,height:U.clientHeight})}),Object.assign(window,{__worldRead:()=>({enabled:Vm,continuous:Bh,vicinityPending:Gh,vicinityBacklog:Kh,contexts:Hh().map(e=>({id:e.data.id,clouds:e.clouds.snapshot()})),revision:Wm,aliases:[...Hm],roots:[...V.values()].map(e=>({id:e.id,kind:e.physicalKind,count:e.count,groups:e.groups.length,source:e.source,crossPages:e.crossPages})),stats:ph})}),Object.assign(window,{__physicalScreens:()=>{let e=U.getBoundingClientRect();return[...V.values()].filter(e=>e.crossPages.length>1).flatMap(t=>{let n=fh.get(t.id);if(n===void 0||!q)return[];let r=new P(...q.positions.subarray(n*3,n*3+3)).project(K);return Math.abs(r.x)<.8&&Math.abs(r.y)<.65&&r.z>-1&&r.z<1?[{root:t.id,kind:t.physicalKind,count:t.count,pages:t.crossPages,x:e.left+(r.x*.5+.5)*e.width,y:e.top+(.5-r.y*.5)*e.height}]:[]})}}),Object.assign(window,{__loadingRead:()=>({requests:P_.map(e=>({...e})),births:[...Km],handoffs:[...qm].map(([e,t])=>({source:e,total:t.total,shares:t.shares,gain:Dh?.geometry.getAttribute(`summaryGain`).getX(fh.get(e)??0)}))})}),Object.assign(window,{__densityRead:()=>({...Vg.snapshot(),error:Hg})}),Object.assign(window,{__unloadedSamples91:()=>{if(!q)return[];let e=U.getBoundingClientRect(),t=[];for(let n=0;n<q.ids.length&&t.length<60;n++){let r=q.ids[n];if(r>=8388608||Hm.has(r))continue;let i=new P(...q.positions.subarray(n*3,n*3+3)),a=i.length();if(a<2||a>25)continue;let o=i.project(K);o.z<-1||o.z>1||Math.abs(o.x)>.65||Math.abs(o.y)>.65||t.push({root:r,owner:q.owners[n],x:e.x+(o.x*.5+.5)*e.width,y:e.y+(.5-o.y*.5)*e.height})}return t}}),Object.assign(window,{__hoverRead94:()=>({target:iy,text:H(`hover`).textContent,hidden:H(`hover`).hidden,pointer:ty})}),Object.assign(window,{__hierarchy94Read:()=>({selected:V.get(xh??-1),navigationVersion:B?.navigationVersion,hover:iy})}),Object.assign(window,{__densityScreens:()=>{let e=U.getBoundingClientRect();return Vg.screens(K,e.width,e.height).map(t=>({...t,x:t.x+e.left,y:t.y+e.top}))}}),Object.assign(window,{__workRead94:()=>L_}),Object.assign(window,{__retirement94Read:()=>({paused:nv,flight:!!sv,contexts:Hh().map(e=>({owner:e.data.id,visibleLayers:e.clouds.visibleLayerCount()})),details:[...Y.values()].map(e=>({root:e.data.root,fade:e.visibleFade})),frames:my.slice(-120),resources:{...W.info.memory,drawCalls:W.info.render.calls}})}),Object.assign(window,{__batch95Read:()=>({selected:xh,detail:J?.data.root,fade:J?.visibleFade??0,flight:!!sv,pending:Ah||Gh||ug,vicinityPending:Gh,previewPending:ug,detailPending:Ah,backlog:Kh,lastError:R_,hierarchy:R.usage(),error:mh,stats:ph.lazy,contexts:Vh.size,visibleLayers:Hh().reduce((e,t)=>e+t.clouds.visibleLayerCount(),0),frames:my.slice(-120)})}),Object.assign(window,{__overview97Read:e=>Hh().map(t=>t.previewRootState(e))}),Object.assign(window,{__neighborhood98Read:()=>({scope:Pv(),selected:Z.values.map(e=>({id:e.id,root:e.root,owner:e.owner,kind:e.kind})),known:V.size,owners:[452926,1047911].map(e=>({owner:e,roots:[...V.values()].filter(t=>t.owner===e).map(e=>({id:e.id,kind:e.physicalKind,count:e.count,crossPages:e.crossPages}))})),contexts:Hh().map(e=>({id:e.data.id,members:e.data.members.length,previews:e.snapshot().previewObjects})),pending:Ah||ug||Gh,error:mh})}),Object.assign(window,{__costs98Read:()=>({frames:fy,messages:py,entries:R.usage()})}),Object.assign(window,{__unfold101Read:()=>({job:null,requests:sg.map(e=>({...e}))})}),Object.assign(window,{__prewarm102Read:()=>({pending:Jh,trace:Qh.map(e=>({...e}))})}),Object.assign(window,{__loading103Read:()=>({active:S_().view?.data.id,missing:S_().missing,views:Hh().map(e=>({id:e.data.id,building:e.detailsBuilding,known:lg.get(e.data.id)?.clusters.map(e=>e.root)??[]})),requests:sg.map(e=>({...e}))})}),Object.assign(window,{__delivery105Read:()=>Wd.map(e=>({...e}))}),Object.assign(window,{__groups106Read:()=>ng,__groupCache106:(e,t,n)=>new Promise((r,i)=>{let a=++ig;rg.set(a,{resolve:r,reject:i}),B_({kind:e,seq:a,cacheRoot106:t,cacheBytes106:n,pilotBase:Am(),generator:Yg,generatorParameters:Xg,origin:Eh,epoch:Th,mode:dd.value?`current`:`lightcone`})})}),Object.assign(window,{__preview106Read:()=>({owner:Z.primary?.owner??Nv(Z.primary?.root??-1),received:[...lg].map(([e,t])=>({owner:e,roots:t.clusters.map(e=>e.root)})),views:Hh().map(e=>({id:e.data.id,ready:e.clouds.readyRoots.size,clouds:e.clouds.snapshot(),geometry:e.snapshot()}))})});var vy=H(`background109`);vy.checked=!1,vy.disabled=!0;function yy(){let e=my.slice(-45),t=e.reduce((e,t)=>e+t,0)/Math.max(1,e.length);a_.postMessage({kind:`background-policy109`,backgroundEnabled109:vy.checked,backgroundPaused109:document.hidden||t>38||Ah||ug})}if(vy.onchange=yy,document.addEventListener(`visibilitychange`,yy),setInterval(yy,1e3),yy(),Object.assign(window,{__background109Read:()=>({...ih,far:nh.snapshot()})}),Object.assign(window,{__handoff110Read:()=>({proxyRoots:q?.ids.length??0,proxySamples:16,detail:J?.data.root,roots:[...k_].map(([e,t])=>({root:e,near:t,weights:ku(t,nh.roots.has(e)?Math.min(1,Math.max(0,(performance.now()-nh.roots.get(e).born)/1e3)):0)})),reuse:ph.lazy?.reuse110}),__handoff110Probe:e=>{if(!Number.isFinite(e)||e<=0)throw Error(`无效探针距离`);nv=!1;let t=Z.primary?.position??sh;G.cancelMotion(),K.position.copy(t.clone().add(K.position.clone().sub(t).normalize().multiplyScalar(e))),G.target.copy(t),K.lookAt(t),K.updateMatrixWorld()}}),Object.assign(window,{__render111Read:()=>({floatingLight:rh.supported,calls:W.info.render.calls,points:W.info.render.points,triangles:W.info.render.triangles,geometries:W.info.memory.geometries,textures:W.info.memory.textures,contexts:Vh.size,far:nh.snapshot()})}),new URLSearchParams(location.search).has(`probe112`)&&Object.assign(window,{__layers112:e=>Object.assign(O_,e),__continuity112:()=>({far:[...nh.roots].map(([e,t])=>({root:e,born:t.born,count:t.count,coverage:t.coverage})),views:Hh().map(e=>({id:e.data.id,visible:e.group.visible,roots:[...e.clouds.readyRoots.keys()]})),selection:Z.values.map(e=>({id:e.id,owner:e.owner,root:e.root,kind:e.kind})),camera:K.position.toArray(),focus:sh.toArray(),span:fv(),particles:Dh?Array.from(fh).filter(([e])=>w_.has(e)).slice(0,40).map(([e,t])=>({id:e,retained:Dh.geometry.getAttribute(`retainedBorn109`).getX(t),coverage:Dh.geometry.getAttribute(`nearCover110`).getX(t)})):[]})}),new URLSearchParams(location.search).has(`probe113`)&&Object.assign(window,{__select113:(e,t=`cluster`)=>{let n=jv(e);if(!n)throw Error(`测试目标不在当前观测窗`);av(t===`super`?{...n,id:`SC-`+n.owner,kind:`super`}:n)},__selection113:()=>({time:performance.now(),selected:Z.values.map(e=>({root:e.root,owner:e.owner,kind:e.kind})),views:Hh().map(e=>({owner:e.data.id,cloud:e.clouds.snapshot(),geometry:e.snapshot()})),far:[...nh.roots].map(([e,t])=>({root:e,born:t.born,coverage:t.coverage,owner:t.owner})),camera:K.position.toArray(),span:fv(),details:[...Y.values()].map(e=>({root:e.data.root,fade:e.visibleFade}))})}),sy&&Object.assign(window,{__frameTargets126:()=>q?.supernodes.filter(e=>{let t=new P(...e.center).project(K);return fh.has(e.id)&&Math.abs(t.x)<1.1&&Math.abs(t.y)<1.1&&t.z>-1&&t.z<1}).sort((e,t)=>t.count-e.count||e.id-t.id).slice(0,6).map(e=>e.id)??[],__framePose126:e=>(e&&(G.cancelMotion(),K.position.fromArray(e.camera),G.target.fromArray(e.target),K.lookAt(G.target),K.updateMatrixWorld()),{camera:K.position.toArray(),target:G.target.toArray()})}),new URLSearchParams(location.search).has(`probe113`)&&Object.assign(window,{__focus126Read:e=>{let t=Nv(e),n=t===void 0?void 0:lg.get(t),r=n?[...cf(n)].filter(t=>t.cluster===e):[];return{root:e,macroAnchors:q?.routeAnchorRoots126?.filter(t=>t===e).length??0,endpoint:Cu(e),access:t===void 0?[]:Vh.get(t)?.data.access?.filter(t=>t.cluster===e),preview:n?.clusters.find(t=>t.root===e),routeWeights:r.map(t=>Math.max(Tv(new P(...t.pa),e),Tv(new P(...t.pb),e)))}}}),new URLSearchParams(location.search).has(`probe113`)&&Object.assign(window,{__pan126Pose:(e,t)=>{G.cancelMotion(),sv=null,K.position.fromArray(e),$m.target.fromArray(t),sh.fromArray(t),K.lookAt($m.target),K.updateMatrixWorld()},__pan126Read:e=>{let t=U.getBoundingClientRect(),n=e===void 0?void 0:fh.get(e),r=e===void 0?null:jv(e),i=r?.position.clone().project(K);return{scope:Pv(),indexMs:bh?.buildMs,pending:[...q_.keys()],catalogue:n===void 0?null:Array.from(q.positions.subarray(n*3,n*3+3)),actual:r?.position.toArray(),owner:r?.owner,screen:i?{x:t.left+(i.x*.5+.5)*t.width,y:t.top+(.5-i.y*.5)*t.height,visible:i.z>-1&&i.z<1&&Math.abs(i.x)<1&&Math.abs(i.y)<1}:null,right:new P().setFromMatrixColumn(K.matrixWorld,0).toArray(),up:new P().setFromMatrixColumn(K.matrixWorld,1).toArray()}},__pan126Background:()=>{if(!q)return[];let e=U.getBoundingClientRect(),t=Pv(),n=new P(0,0,-1).applyQuaternion(K.quaternion),r=[];for(let i=0;i<q.ids.length;i++){if(q.owners[i]===t)continue;let a=new P(...wu(q.ids[i])??Array.from(q.positions.subarray(i*3,i*3+3))),o=a.clone().sub(K.position).dot(n);if(o<$m.getDistance()*3)continue;let s=a.project(K);if(!(s.z<-1||s.z>1||Math.abs(s.x)>.65||Math.abs(s.y)>.5)&&(r.push({root:q.ids[i],owner:q.owners[i],x:e.left+(s.x*.5+.5)*e.width,y:e.top+(.5-s.y*.5)*e.height,depth:o}),r.length===12))break}return r}}),new URLSearchParams(location.search).has(`probe113`)&&Object.assign(window,{__anchors126Select:(e,t,n=0)=>{let r=jv(e);if(!r)throw Error(`目标不在观测窗`);let i=Nv(e),a=cg.get(i)?.find(t=>t.cluster===e&&t.galaxy.group===n),o=Y.get(e),s=o?.data.galaxies.find(e=>e.group===n);av(t===`super`?{...r,kind:t,id:`SC-`+r.owner}:t===`cluster`?r:{...r,kind:t,id:t===`group`?`G-${e}/group-${n}`:s?.id??a.galaxyId,galaxy:s??a.galaxy,position:s?o.worldPosition(s.id):new P(...a.position)})},__anchors126Read:e=>{let t=Nv(e),n=Y.get(e),r=cg.get(t)?.filter(t=>t.cluster===e)??[],i=[...df(lg.get(t)??{routes:[],clusters:[]})].find(t=>t.root===e),a=(e,t)=>Math.hypot(...e.map((e,n)=>e-t[n])),o=0,s=0,c=0;for(let e of n?.routes??[])for(let[t,r]of e.list.entries())for(let[i,c]of[r.a,r.b].entries()){let r=e.line.geometry.getAttribute(i?`instanceEnd`:`instanceStart`),l=[r.getX(t),r.getY(t),r.getZ(t)].map((e,t)=>e+n.group.position.getComponent(t));o=Math.max(o,a(l,n.worldPosition(c).toArray())),s++}if(n&&i)for(let[e,t]of n.data.galaxies.entries())c=Math.max(c,a(i.center.map((t,n)=>t+i.points[e*8+n]),n.worldPosition(t.id).toArray()));return{selected:Z.values.map(e=>({id:e.id,kind:e.kind,root:e.root,position:e.position.toArray(),pending:q_.has(e.id)})),endpoint:Cu(e),full:!!n,routeError:o,routeEnds:s,cloudError:c,groups:r.map(e=>({id:e.id,galaxy:e.galaxyId,position:e.position,full:n?.worldPosition(e.galaxyId)?.toArray(),screen:new P(...e.position).project(K).toArray()}))}},__anchors126Depth:(e,t)=>Bv(e,t).map(e=>({id:e.target.id,kind:e.target.kind,root:e.target.root,position:e.target.position.toArray()}))}),new URLSearchParams(location.search).has(`probe113`)&&Object.assign(window,{__overview126Read:e=>{let t=nh.roots.get(e),n=nh.object.geometry,r=t?Array.from(n.getAttribute(`position`).array.subarray(t.offset*3,(t.offset+t.count)*3)):[],i=U.getBoundingClientRect();return{far:t?{count:t.count,born:t.born,ready:t.ready,coverage:t.coverage,positions:r,slots:Array.from(t.slots),spacing:Array.from(t.spacing)}:null,viewport:{left:i.left,top:i.top,width:i.width,height:i.height},routes:Oh.map(e=>{let t=e.geometry.getAttribute(`overviewSlots126`),n=e.geometry.getAttribute(`instanceStart`),r=0;for(let e=0;e<(t?.count??0);e++)(t.getX(e)<0||t.getY(e)<0||R.content(z(q.routeAnchorRoots126[e*2]))<.999||R.content(z(q.routeAnchorRoots126[e*2+1]))<.999)&&r++;let i=2166136261;for(let e of new Uint32Array(n.data.array.buffer,n.data.array.byteOffset,n.data.array.byteLength/4))i=Math.imul(i^e,16777619);return{segments:n.count,visible:r,waiting:!!e.geometry.getAttribute(`anchorReady126`),coordinateHash:i>>>0}})}},__overview126Only:e=>{let t=nh.roots.get(e);if(!t)throw Error(`缩略图尚未到货`);Object.assign(O_,{macro:!1,far:!0,cloud:!1,detail:!1}),nh.object.geometry.setDrawRange(t.offset,t.count)}}),cy&&Object.assign(window,{__rotation126Read:(e,t=!1)=>{let n=new Map,r=e=>{if(uy.has(e))return;uy.set(e,-1);let t=e.onAfterRender;e.onAfterRender=(...n)=>{uy.set(e,ly),t.apply(e,n)}};r(nh.object);for(let e of Hh())for(let t of e.clouds.layers){r(t.object);let i=0;for(let r of t.roots)n.set(r,{view:e,layer:t,offset:i}),i+=(e.clouds.sources.get(r)?.points.length??0)/8}let i=(e??[...new Set([...n.keys(),...nh.roots.keys()])]).map(i=>{let a=n.get(i),o=nh.roots.get(i),s=(a?.view.clouds)?.sources.get(i),c=s?new P(s.center[0]+s.points[0],s.center[1]+s.points[1],s.center[2]+s.points[2]):o?new P(o.center.x+o.source[0],o.center.y+o.source[1],o.center.z+o.source[2]):void 0,l=c?.clone().project(K),u=s?.points[5]??0,d=a?.view.clouds?.uniforms,f=null,p,m=Y.get(i),h=a?.layer.object.geometry.getAttribute(`screenSlots`).getY(a.offset);m&&m.group.traverse(e=>{(e instanceof fa||e instanceof ci)&&r(e)});let g=-1;m?.group.traverse(e=>{g=Math.max(g,uy.get(e)??-1)});let _=a?.layer.object.geometry.boundingSphere?.clone().applyMatrix4(a.layer.object.matrixWorld);if(t&&l&&Math.abs(l.x)<.9&&Math.abs(l.y)<.85&&l.z>-1&&l.z<1){let t=rh.target,n=new Uint16Array(324),r=Math.floor((l.x*.5+.5)*t.width)-4,i=Math.floor((l.y*.5+.5)*t.height)-4;W.readRenderTargetPixels(t,r,i,9,9,n),f=0,e?.length===1&&(p=[]);for(let e=0;e<n.length;e+=4){let t=Lr.fromHalfFloat(n[e])+Lr.fromHalfFloat(n[e+1])+Lr.fromHalfFloat(n[e+2]);f+=t,p?.push(t)}}return{root:i,signal:f,signalGrid:p,memberInParent:a?.view.data.members.some(e=>e.id===i),localLod:a?.view?.localLod,cloudGpuSlot:h,cloudGpuContent:h===void 0?null:R.contentAt(h),pointInBound:_&&c?c.distanceTo(_.center)<=_.radius+1e-5:null,dim:c?Ed(c.clone().applyMatrix4(K.matrixWorldInverse),Cd.pickCentre.value,Cd.pickRadius.value,new P,Cd.pickOwner.value>=0&&Cd.pickOwner.value===(a?.view.data.id??o?.owner)||Cd.pickRoot.value>=0&&Cd.pickRoot.value===Fd(i)):1,full:m?{visible:m.group.visible,fade:m.visibleFade,drawn:g}:null,gpuContent:o?R.contentAt(o.slots[0]):null,slot:o?.slots[0],bounds:a?.layer.object.geometry.boundingSphere?{center:a.layer.object.geometry.boundingSphere.center.toArray(),radius:a.layer.object.geometry.boundingSphere.radius,world:a.layer.object.matrixWorld.elements.slice(12,15)}:null,owner:a?.view.data.id??o?.owner,point:c?.toArray(),screen:l?.toArray(),count:s?.points.length/8,cloudBorn:a?.view.clouds.readyRoots.get(i)??-1,parentVisible:a?.view.group.visible??!1,layer:a?.layer.object.id??-1,layerVisible:a?.layer.object.visible??!1,drawn:a?uy.get(a.layer.object):-1,weight:a?a.view.clouds.pointWeight(i,0,K,U.clientHeight):0,rootContent:R.content(z(i)),groupContent:R.content(au(i,u)),detailIds:d?.ids.value.toArray(),detailFades:d?.fades.value.toArray(),far:o?{count:o.count,born:o.born,ready:o.ready,coverage:o.coverage,drawn:uy.get(nh.object)}:null}});return{time:performance.now(),frame:ly,camera:K.position.toArray(),quaternion:K.quaternion.toArray(),target:$m.target.toArray(),span:fv(),rows:i,far:nh.snapshot(),selected:Z.values.map(e=>e.id),scope:Pv(),groups:ng?{...ng,stats:void 0}:null,dimming:{radius:Cd.pickRadius.value,center:Cd.pickCentre.value.toArray(),owner:Cd.pickOwner.value,root:Cd.pickRoot.value,depthControl:Cg,depthActive:Sg.active},render:{...W.info.render},lost:oy}}}),cy&&Object.assign(window,{__rotation126Isolate:e=>{let t=nh.roots.get(e);if(!t)throw Error(`诊断根尚未到货`);return Object.assign(O_,{macro:!1,far:!0,cloud:!1,detail:!1}),nh.object.geometry.setDrawRange(t.offset,1),{position:Array.from(nh.object.geometry.getAttribute(`position`).array.subarray(t.offset*3,t.offset*3+3)),root:e,weight:nh.object.geometry.getAttribute(`weight`).getX(t.offset),spacing:t.spacing[0],slot:t.slots[0]}}}),cy){let e={packs:0,audits:0,failures:[],events:[]},t=!1,n=nh,r=n.packRanges112.bind(n);n.packRanges112=()=>{r(),e.packs++,t=!0};let i=nh.object.geometry.getAttribute(`position`),a=i.onUploadCallback;i.onUpload(()=>{if(a(),!t)return;t=!1,e.audits++;let n=W.getContext(),r=[...nh.roots],o=Math.max(1,Math.floor(r.length/48)),s=0;for(let t=0;t<r.length;t+=o){let[a,o]=r[t],c=new Float32Array(3);n.getBufferSubData(n.ARRAY_BUFFER,o.offset*12,c);let l=Array.from(i.array.subarray(o.offset*3,o.offset*3+3));l.some((e,t)=>e!==c[t])&&(s++,e.failures.length<96&&e.failures.push({time:performance.now(),frame:ly,root:a,offset:o.offset,expected:l,actual:Array.from(c)}))}e.events.push({time:performance.now(),frame:ly,roots:r.length,mismatches:s})}),Object.assign(window,{__rotation126Audit:()=>e})}
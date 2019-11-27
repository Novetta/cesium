/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["./defined-2a4f2d00","./Check-e5651467","./freezeObject-a51e076f","./defaultValue-29c9b1af","./Math-7782f09e","./Cartesian2-ba70b51f","./defineProperties-c817531e","./Transforms-a1114ddf","./RuntimeError-51c34ab4","./WebGLConstants-90dbfe2f","./ComponentDatatype-418b1c61","./GeometryAttribute-646466d8","./when-1faa3867","./GeometryAttributes-f8548d3f","./IndexDatatype-2bcfc06b","./IntersectionTests-c4c46981","./Plane-477e42da","./ArcType-e0f1982f","./EllipsoidRhumbLine-d5a5f3d0","./EllipsoidGeodesic-666ad0d2","./PolylinePipeline-b2509cd5","./Color-82a2897e"],function(S,e,o,f,I,O,r,R,t,a,M,U,l,N,F,i,n,z,s,p,H,W){"use strict";function Y(e,o,r,t,a,l,i){var n,s=H.PolylinePipeline.numberOfPoints(e,o,a),p=r.red,d=r.green,f=r.blue,c=r.alpha,y=t.red,u=t.green,h=t.blue,C=t.alpha;if(W.Color.equals(r,t)){for(n=0;n<s;n++)l[i++]=W.Color.floatToByte(p),l[i++]=W.Color.floatToByte(d),l[i++]=W.Color.floatToByte(f),l[i++]=W.Color.floatToByte(c);return i}var T=(y-p)/s,g=(u-d)/s,m=(h-f)/s,v=(C-c)/s,b=i;for(n=0;n<s;n++)l[b++]=W.Color.floatToByte(p+n*T),l[b++]=W.Color.floatToByte(d+n*g),l[b++]=W.Color.floatToByte(f+n*m),l[b++]=W.Color.floatToByte(c+n*v);return b}function c(e){var o=(e=f.defaultValue(e,f.defaultValue.EMPTY_OBJECT)).positions,r=e.colors,t=f.defaultValue(e.colorsPerVertex,!1);this._positions=o,this._colors=r,this._colorsPerVertex=t,this._arcType=f.defaultValue(e.arcType,z.ArcType.GEODESIC),this._granularity=f.defaultValue(e.granularity,I.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=f.defaultValue(e.ellipsoid,O.Ellipsoid.WGS84),this._workerName="createSimplePolylineGeometry";var a=1+o.length*O.Cartesian3.packedLength;a+=S.defined(r)?1+r.length*W.Color.packedLength:1,this.packedLength=a+O.Ellipsoid.packedLength+3}c.pack=function(e,o,r){var t;r=f.defaultValue(r,0);var a=e._positions,l=a.length;for(o[r++]=l,t=0;t<l;++t,r+=O.Cartesian3.packedLength)O.Cartesian3.pack(a[t],o,r);var i=e._colors;for(l=S.defined(i)?i.length:0,o[r++]=l,t=0;t<l;++t,r+=W.Color.packedLength)W.Color.pack(i[t],o,r);return O.Ellipsoid.pack(e._ellipsoid,o,r),r+=O.Ellipsoid.packedLength,o[r++]=e._colorsPerVertex?1:0,o[r++]=e._arcType,o[r]=e._granularity,o},c.unpack=function(e,o,r){var t;o=f.defaultValue(o,0);var a=e[o++],l=new Array(a);for(t=0;t<a;++t,o+=O.Cartesian3.packedLength)l[t]=O.Cartesian3.unpack(e,o);var i=0<(a=e[o++])?new Array(a):void 0;for(t=0;t<a;++t,o+=W.Color.packedLength)i[t]=W.Color.unpack(e,o);var n=O.Ellipsoid.unpack(e,o);o+=O.Ellipsoid.packedLength;var s=1===e[o++],p=e[o++],d=e[o];return S.defined(r)?(r._positions=l,r._colors=i,r._ellipsoid=n,r._colorsPerVertex=s,r._arcType=p,r._granularity=d,r):new c({positions:l,colors:i,ellipsoid:n,colorsPerVertex:s,arcType:p,granularity:d})};var j=new Array(2),q=new Array(2),J={positions:j,height:q,ellipsoid:void 0,minDistance:void 0,granularity:void 0};return c.createGeometry=function(e){var o,r,t,a,l,i=e._positions,n=e._colors,s=e._colorsPerVertex,p=e._arcType,d=e._granularity,f=e._ellipsoid,c=I.CesiumMath.chordLength(d,f.maximumRadius),y=S.defined(n)&&!s,u=i.length,h=0;if(p===z.ArcType.GEODESIC||p===z.ArcType.RHUMB){var C,T,g;g=p===z.ArcType.GEODESIC?(C=I.CesiumMath.chordLength(d,f.maximumRadius),T=H.PolylinePipeline.numberOfPoints,H.PolylinePipeline.generateArc):(C=d,T=H.PolylinePipeline.numberOfPointsRhumbLine,H.PolylinePipeline.generateRhumbArc);var m=H.PolylinePipeline.extractHeights(i,f),v=J;if(p===z.ArcType.GEODESIC?v.minDistance=c:v.granularity=d,v.ellipsoid=f,y){var b=0;for(o=0;o<u-1;o++)b+=T(i[o],i[o+1],C)+1;r=new Float64Array(3*b),a=new Uint8Array(4*b),v.positions=j,v.height=q;var P=0;for(o=0;o<u-1;++o){j[0]=i[o],j[1]=i[o+1],q[0]=m[o],q[1]=m[o+1];var _=g(v);if(S.defined(n)){var B=_.length/3;l=n[o];for(var A=0;A<B;++A)a[P++]=W.Color.floatToByte(l.red),a[P++]=W.Color.floatToByte(l.green),a[P++]=W.Color.floatToByte(l.blue),a[P++]=W.Color.floatToByte(l.alpha)}r.set(_,h),h+=_.length}}else if(v.positions=i,v.height=m,r=new Float64Array(g(v)),S.defined(n)){for(a=new Uint8Array(r.length/3*4),o=0;o<u-1;++o){h=Y(i[o],i[o+1],n[o],n[o+1],c,a,h)}var E=n[u-1];a[h++]=W.Color.floatToByte(E.red),a[h++]=W.Color.floatToByte(E.green),a[h++]=W.Color.floatToByte(E.blue),a[h++]=W.Color.floatToByte(E.alpha)}}else{t=y?2*u-2:u,r=new Float64Array(3*t),a=S.defined(n)?new Uint8Array(4*t):void 0;var k=0,G=0;for(o=0;o<u;++o){var w=i[o];if(y&&0<o&&(O.Cartesian3.pack(w,r,k),k+=3,l=n[o-1],a[G++]=W.Color.floatToByte(l.red),a[G++]=W.Color.floatToByte(l.green),a[G++]=W.Color.floatToByte(l.blue),a[G++]=W.Color.floatToByte(l.alpha)),y&&o===u-1)break;O.Cartesian3.pack(w,r,k),k+=3,S.defined(n)&&(l=n[o],a[G++]=W.Color.floatToByte(l.red),a[G++]=W.Color.floatToByte(l.green),a[G++]=W.Color.floatToByte(l.blue),a[G++]=W.Color.floatToByte(l.alpha))}}var D=new N.GeometryAttributes;D.position=new U.GeometryAttribute({componentDatatype:M.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r}),S.defined(n)&&(D.color=new U.GeometryAttribute({componentDatatype:M.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:4,values:a,normalize:!0}));var L=2*((t=r.length/3)-1),V=F.IndexDatatype.createTypedArray(t,L),x=0;for(o=0;o<t-1;++o)V[x++]=o,V[x++]=o+1;return new U.Geometry({attributes:D,indices:V,primitiveType:U.PrimitiveType.LINES,boundingSphere:R.BoundingSphere.fromPoints(i)})},function(e,o){return S.defined(o)&&(e=c.unpack(e,o)),e._ellipsoid=O.Ellipsoid.clone(e._ellipsoid),c.createGeometry(e)}});

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
define(["./defined-2a4f2d00","./Check-e5651467","./freezeObject-a51e076f","./defaultValue-29c9b1af","./Math-7782f09e","./Cartesian2-ba70b51f","./defineProperties-c817531e","./Transforms-a1114ddf","./RuntimeError-51c34ab4","./WebGLConstants-90dbfe2f","./ComponentDatatype-418b1c61","./GeometryAttribute-646466d8","./when-1faa3867","./GeometryAttributes-f8548d3f","./IndexDatatype-2bcfc06b","./GeometryOffsetAttribute-fa4e7a11","./CylinderGeometryLibrary-f35c6b75"],function(h,e,t,f,i,v,a,A,r,n,O,R,o,G,V,C,L){"use strict";var g=new v.Cartesian2;function d(e){var t=(e=f.defaultValue(e,f.defaultValue.EMPTY_OBJECT)).length,i=e.topRadius,a=e.bottomRadius,r=f.defaultValue(e.slices,128),n=Math.max(f.defaultValue(e.numberOfVerticalLines,16),0);this._length=t,this._topRadius=i,this._bottomRadius=a,this._slices=r,this._numberOfVerticalLines=n,this._offsetAttribute=e.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}d.packedLength=6,d.pack=function(e,t,i){return i=f.defaultValue(i,0),t[i++]=e._length,t[i++]=e._topRadius,t[i++]=e._bottomRadius,t[i++]=e._slices,t[i++]=e._numberOfVerticalLines,t[i]=f.defaultValue(e._offsetAttribute,-1),t};var b={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return d.unpack=function(e,t,i){t=f.defaultValue(t,0);var a=e[t++],r=e[t++],n=e[t++],o=e[t++],u=e[t++],s=e[t];return h.defined(i)?(i._length=a,i._topRadius=r,i._bottomRadius=n,i._slices=o,i._numberOfVerticalLines=u,i._offsetAttribute=-1===s?void 0:s,i):(b.length=a,b.topRadius=r,b.bottomRadius=n,b.slices=o,b.numberOfVerticalLines=u,b.offsetAttribute=-1===s?void 0:s,new d(b))},d.createGeometry=function(e){var t=e._length,i=e._topRadius,a=e._bottomRadius,r=e._slices,n=e._numberOfVerticalLines;if(!(t<=0||i<0||a<0||0===i&&0===a)){var o,u=2*r,s=L.CylinderGeometryLibrary.computePositions(t,i,a,r,!1),f=2*r;if(0<n){var d=Math.min(n,r);o=Math.round(r/d),f+=d}var b,l=V.IndexDatatype.createTypedArray(u,2*f),c=0;for(b=0;b<r-1;b++)l[c++]=b,l[c++]=b+1,l[c++]=b+r,l[c++]=b+1+r;if(l[c++]=r-1,l[c++]=0,l[c++]=r+r-1,l[c++]=r,0<n)for(b=0;b<r;b+=o)l[c++]=b,l[c++]=b+r;var m=new G.GeometryAttributes;m.position=new R.GeometryAttribute({componentDatatype:O.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:s}),g.x=.5*t,g.y=Math.max(a,i);var p=new A.BoundingSphere(v.Cartesian3.ZERO,v.Cartesian2.magnitude(g));if(h.defined(e._offsetAttribute)){t=s.length;var y=new Uint8Array(t/3),_=e._offsetAttribute===C.GeometryOffsetAttribute.NONE?0:1;C.arrayFill(y,_),m.applyOffset=new R.GeometryAttribute({componentDatatype:O.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:y})}return new R.Geometry({attributes:m,indices:l,primitiveType:R.PrimitiveType.LINES,boundingSphere:p,offsetAttribute:e._offsetAttribute})}},function(e,t){return h.defined(t)&&(e=d.unpack(e,t)),d.createGeometry(e)}});

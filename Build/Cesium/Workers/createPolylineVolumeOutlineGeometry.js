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
define(["./defined-2a4f2d00","./Check-e5651467","./freezeObject-a51e076f","./defaultValue-29c9b1af","./Math-7782f09e","./Cartesian2-ba70b51f","./defineProperties-c817531e","./Transforms-a1114ddf","./RuntimeError-51c34ab4","./WebGLConstants-90dbfe2f","./ComponentDatatype-418b1c61","./GeometryAttribute-646466d8","./when-1faa3867","./GeometryAttributes-f8548d3f","./IndexDatatype-2bcfc06b","./IntersectionTests-c4c46981","./Plane-477e42da","./arrayRemoveDuplicates-33a93436","./BoundingRectangle-9a6873bf","./EllipsoidTangentPlane-dd0adef9","./EllipsoidRhumbLine-d5a5f3d0","./PolygonPipeline-61f7c787","./PolylineVolumeGeometryLibrary-7daee49a","./EllipsoidGeodesic-666ad0d2","./PolylinePipeline-b2509cd5"],function(d,e,i,c,t,u,a,y,n,r,f,h,o,g,m,l,s,p,v,E,P,_,b,k,C){"use strict";function L(e){var i=(e=c.defaultValue(e,c.defaultValue.EMPTY_OBJECT)).polylinePositions,a=e.shapePositions;this._positions=i,this._shape=a,this._ellipsoid=u.Ellipsoid.clone(c.defaultValue(e.ellipsoid,u.Ellipsoid.WGS84)),this._cornerType=c.defaultValue(e.cornerType,b.CornerType.ROUNDED),this._granularity=c.defaultValue(e.granularity,t.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";var n=1+i.length*u.Cartesian3.packedLength;n+=1+a.length*u.Cartesian2.packedLength,this.packedLength=n+u.Ellipsoid.packedLength+2}L.pack=function(e,i,a){var n;a=c.defaultValue(a,0);var t=e._positions,r=t.length;for(i[a++]=r,n=0;n<r;++n,a+=u.Cartesian3.packedLength)u.Cartesian3.pack(t[n],i,a);var o=e._shape;for(r=o.length,i[a++]=r,n=0;n<r;++n,a+=u.Cartesian2.packedLength)u.Cartesian2.pack(o[n],i,a);return u.Ellipsoid.pack(e._ellipsoid,i,a),a+=u.Ellipsoid.packedLength,i[a++]=e._cornerType,i[a]=e._granularity,i};var T=u.Ellipsoid.clone(u.Ellipsoid.UNIT_SPHERE),D={polylinePositions:void 0,shapePositions:void 0,ellipsoid:T,height:void 0,cornerType:void 0,granularity:void 0};L.unpack=function(e,i,a){var n;i=c.defaultValue(i,0);var t=e[i++],r=new Array(t);for(n=0;n<t;++n,i+=u.Cartesian3.packedLength)r[n]=u.Cartesian3.unpack(e,i);t=e[i++];var o=new Array(t);for(n=0;n<t;++n,i+=u.Cartesian2.packedLength)o[n]=u.Cartesian2.unpack(e,i);var l=u.Ellipsoid.unpack(e,i,T);i+=u.Ellipsoid.packedLength;var s=e[i++],p=e[i];return d.defined(a)?(a._positions=r,a._shape=o,a._ellipsoid=u.Ellipsoid.clone(l,a._ellipsoid),a._cornerType=s,a._granularity=p,a):(D.polylinePositions=r,D.shapePositions=o,D.cornerType=s,D.granularity=p,new L(D))};var G=new v.BoundingRectangle;return L.createGeometry=function(e){var i=e._positions,a=p.arrayRemoveDuplicates(i,u.Cartesian3.equalsEpsilon),n=e._shape;if(n=b.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(n),!(a.length<2||n.length<3)){_.PolygonPipeline.computeWindingOrder2D(n)===_.WindingOrder.CLOCKWISE&&n.reverse();var t=v.BoundingRectangle.fromPoints(n,G);return function(e,i){var a=new g.GeometryAttributes;a.position=new h.GeometryAttribute({componentDatatype:f.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e});var n,t,r=i.length,o=a.position.values.length/3,l=e.length/3/r,s=m.IndexDatatype.createTypedArray(o,2*r*(1+l)),p=0,d=(n=0)*r;for(t=0;t<r-1;t++)s[p++]=t+d,s[p++]=t+d+1;for(s[p++]=r-1+d,s[p++]=d,d=(n=l-1)*r,t=0;t<r-1;t++)s[p++]=t+d,s[p++]=t+d+1;for(s[p++]=r-1+d,s[p++]=d,n=0;n<l-1;n++){var c=r*n,u=c+r;for(t=0;t<r;t++)s[p++]=t+c,s[p++]=t+u}return new h.Geometry({attributes:a,indices:m.IndexDatatype.createTypedArray(o,s),boundingSphere:y.BoundingSphere.fromVertices(e),primitiveType:h.PrimitiveType.LINES})}(b.PolylineVolumeGeometryLibrary.computePositions(a,n,t,e,!1),n)}},function(e,i){return d.defined(i)&&(e=L.unpack(e,i)),e._ellipsoid=u.Ellipsoid.clone(e._ellipsoid),L.createGeometry(e)}});

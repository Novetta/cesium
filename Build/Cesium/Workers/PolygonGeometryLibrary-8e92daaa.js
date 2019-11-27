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
define(["exports","./defined-2a4f2d00","./defaultValue-29c9b1af","./Math-7782f09e","./Cartesian2-ba70b51f","./defineProperties-c817531e","./Transforms-a1114ddf","./ComponentDatatype-418b1c61","./GeometryAttribute-646466d8","./GeometryAttributes-f8548d3f","./GeometryPipeline-70062613","./IndexDatatype-2bcfc06b","./arrayRemoveDuplicates-33a93436","./ArcType-e0f1982f","./EllipsoidRhumbLine-d5a5f3d0","./PolygonPipeline-61f7c787"],function(e,I,c,x,E,t,y,P,A,_,d,G,L,M,v,D){"use strict";function S(){this._array=[],this._offset=0,this._length=0}t.defineProperties(S.prototype,{length:{get:function(){return this._length}}}),S.prototype.enqueue=function(e){this._array.push(e),this._length++},S.prototype.dequeue=function(){if(0!==this._length){var e=this._array,t=this._offset,r=e[t];return e[t]=void 0,10<++t&&2*t>e.length&&(this._array=e.slice(t),t=0),this._offset=t,this._length--,r}},S.prototype.peek=function(){if(0!==this._length)return this._array[this._offset]},S.prototype.contains=function(e){return-1!==this._array.indexOf(e)},S.prototype.clear=function(){this._array.length=this._offset=this._length=0},S.prototype.sort=function(e){0<this._offset&&(this._array=this._array.slice(this._offset),this._offset=0),this._array.sort(e)};var R={computeHierarchyPackedLength:function(e){for(var t=0,r=[e];0<r.length;){var i=r.pop();if(I.defined(i)){t+=2;var n=i.positions,a=i.holes;if(I.defined(n)&&(t+=n.length*E.Cartesian3.packedLength),I.defined(a))for(var o=a.length,s=0;s<o;++s)r.push(a[s])}}return t},packPolygonHierarchy:function(e,t,r){for(var i=[e];0<i.length;){var n=i.pop();if(I.defined(n)){var a=n.positions,o=n.holes;if(t[r++]=I.defined(a)?a.length:0,t[r++]=I.defined(o)?o.length:0,I.defined(a))for(var s=a.length,u=0;u<s;++u,r+=3)E.Cartesian3.pack(a[u],t,r);if(I.defined(o))for(var l=o.length,h=0;h<l;++h)i.push(o[h])}}return r},unpackPolygonHierarchy:function(e,t){for(var r=e[t++],i=e[t++],n=new Array(r),a=0<i?new Array(i):void 0,o=0;o<r;++o,t+=E.Cartesian3.packedLength)n[o]=E.Cartesian3.unpack(e,t);for(var s=0;s<i;++s)a[s]=R.unpackPolygonHierarchy(e,t),t=a[s].startingIndex,delete a[s].startingIndex;return{positions:n,holes:a,startingIndex:t}}},g=new E.Cartesian3;R.subdivideLineCount=function(e,t,r){var i=E.Cartesian3.distance(e,t)/r,n=Math.max(0,Math.ceil(x.CesiumMath.log2(i)));return Math.pow(2,n)};var m=new E.Cartographic,C=new E.Cartographic,b=new E.Cartographic,T=new E.Cartesian3;R.subdivideRhumbLineCount=function(e,t,r,i){var n=e.cartesianToCartographic(t,m),a=e.cartesianToCartographic(r,C),o=new v.EllipsoidRhumbLine(n,a,e).surfaceDistance/i,s=Math.max(0,Math.ceil(x.CesiumMath.log2(o)));return Math.pow(2,s)},R.subdivideLine=function(e,t,r,i){var n=R.subdivideLineCount(e,t,r),a=E.Cartesian3.distance(e,t),o=a/n;I.defined(i)||(i=[]);var s=i;s.length=3*n;for(var u,l,h,f,c=0,p=0;p<n;p++){var d=(u=e,l=t,h=p*o,f=a,E.Cartesian3.subtract(l,u,g),E.Cartesian3.multiplyByScalar(g,h/f,g),E.Cartesian3.add(u,g,g),[g.x,g.y,g.z]);s[c++]=d[0],s[c++]=d[1],s[c++]=d[2]}return s},R.subdivideRhumbLine=function(e,t,r,i,n){var a=e.cartesianToCartographic(t,m),o=e.cartesianToCartographic(r,C),s=new v.EllipsoidRhumbLine(a,o,e),u=s.surfaceDistance/i,l=Math.max(0,Math.ceil(x.CesiumMath.log2(u))),h=Math.pow(2,l),f=s.surfaceDistance/h;I.defined(n)||(n=[]);var c=n;c.length=3*h;for(var p=0,d=0;d<h;d++){var y=s.interpolateUsingSurfaceDistance(d*f,b),g=e.cartographicToCartesian(y,T);c[p++]=g.x,c[p++]=g.y,c[p++]=g.z}return c};var p=new E.Cartesian3,w=new E.Cartesian3,N=new E.Cartesian3,O=new E.Cartesian3;R.scaleToGeodeticHeightExtruded=function(e,t,r,i,n){i=c.defaultValue(i,E.Ellipsoid.WGS84);var a=p,o=w,s=N,u=O;if(I.defined(e)&&I.defined(e.attributes)&&I.defined(e.attributes.position))for(var l=e.attributes.position.values,h=l.length/2,f=0;f<h;f+=3)E.Cartesian3.fromArray(l,f,s),i.geodeticSurfaceNormal(s,a),u=i.scaleToGeodeticSurface(s,u),o=E.Cartesian3.multiplyByScalar(a,r,o),o=E.Cartesian3.add(u,o,o),l[f+h]=o.x,l[f+1+h]=o.y,l[f+2+h]=o.z,n&&(u=E.Cartesian3.clone(s,u)),o=E.Cartesian3.multiplyByScalar(a,t,o),o=E.Cartesian3.add(u,o,o),l[f]=o.x,l[f+1]=o.y,l[f+2]=o.z;return e},R.polygonOutlinesFromHierarchy=function(e,t,r){var i,n,a,o=[],s=new S;for(s.enqueue(e);0!==s.length;){var u=s.dequeue(),l=u.positions;if(t)for(a=l.length,i=0;i<a;i++)r.scaleToGeodeticSurface(l[i],l[i]);if(!((l=L.arrayRemoveDuplicates(l,E.Cartesian3.equalsEpsilon,!0)).length<3)){var h=u.holes?u.holes.length:0;for(i=0;i<h;i++){var f=u.holes[i],c=f.positions;if(t)for(a=c.length,n=0;n<a;++n)r.scaleToGeodeticSurface(c[n],c[n]);if(!((c=L.arrayRemoveDuplicates(c,E.Cartesian3.equalsEpsilon,!0)).length<3)){o.push(c);var p=0;for(I.defined(f.holes)&&(p=f.holes.length),n=0;n<p;n++)s.enqueue(f.holes[n])}}o.push(l)}}return o},R.polygonsFromHierarchy=function(e,t,r,i){var n=[],a=[],o=new S;for(o.enqueue(e);0!==o.length;){var s,u,l=o.dequeue(),h=l.positions,f=l.holes;if(r)for(u=h.length,s=0;s<u;s++)i.scaleToGeodeticSurface(h[s],h[s]);if(!((h=L.arrayRemoveDuplicates(h,E.Cartesian3.equalsEpsilon,!0)).length<3)){var c=t(h);if(I.defined(c)){var p=[],d=D.PolygonPipeline.computeWindingOrder2D(c);d===D.WindingOrder.CLOCKWISE&&(c.reverse(),h=h.slice().reverse());var y,g=h.slice(),v=I.defined(f)?f.length:0,m=[];for(s=0;s<v;s++){var C=f[s],b=C.positions;if(r)for(u=b.length,y=0;y<u;++y)i.scaleToGeodeticSurface(b[y],b[y]);if(!((b=L.arrayRemoveDuplicates(b,E.Cartesian3.equalsEpsilon,!0)).length<3)){var T=t(b);if(I.defined(T)){(d=D.PolygonPipeline.computeWindingOrder2D(T))===D.WindingOrder.CLOCKWISE&&(T.reverse(),b=b.slice().reverse()),m.push(b),p.push(g.length),g=g.concat(b),c=c.concat(T);var w=0;for(I.defined(C.holes)&&(w=C.holes.length),y=0;y<w;y++)o.enqueue(C.holes[y])}}}n.push({outerRing:h,holes:m}),a.push({positions:g,positions2D:c,holes:p})}}}return{hierarchy:n,polygons:a}};var q=new E.Cartesian2,B=new E.Cartesian3,H=new y.Quaternion,k=new y.Matrix3;R.computeBoundingRectangle=function(e,t,r,i,n){for(var a=y.Quaternion.fromAxisAngle(e,i,H),o=y.Matrix3.fromQuaternion(a,k),s=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,l=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY,f=r.length,c=0;c<f;++c){var p=E.Cartesian3.clone(r[c],B);y.Matrix3.multiplyByVector(o,p,p);var d=t(p,q);I.defined(d)&&(s=Math.min(s,d.x),u=Math.max(u,d.x),l=Math.min(l,d.y),h=Math.max(h,d.y))}return n.x=s,n.y=l,n.width=u-s,n.height=h-l,n},R.createGeometryFromPositions=function(e,t,r,i,n,a){var o=D.PolygonPipeline.triangulate(t.positions2D,t.holes);o.length<3&&(o=[0,1,2]);var s=t.positions;if(i){for(var u=s.length,l=new Array(3*u),h=0,f=0;f<u;f++){var c=s[f];l[h++]=c.x,l[h++]=c.y,l[h++]=c.z}var p=new A.Geometry({attributes:{position:new A.GeometryAttribute({componentDatatype:P.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:l})},indices:o,primitiveType:A.PrimitiveType.TRIANGLES});return n.normal?d.GeometryPipeline.computeNormal(p):p}return a===M.ArcType.GEODESIC?D.PolygonPipeline.computeSubdivision(e,s,o,r):a===M.ArcType.RHUMB?D.PolygonPipeline.computeRhumbLineSubdivision(e,s,o,r):void 0};var z=[],W=new E.Cartesian3,F=new E.Cartesian3;R.computeWallGeometry=function(e,t,r,i,n){var a,o,s,u,l,h=e.length,f=0;if(i)for(o=3*h*2,a=new Array(2*o),s=0;s<h;s++)u=e[s],l=e[(s+1)%h],a[f]=a[f+o]=u.x,a[++f]=a[f+o]=u.y,a[++f]=a[f+o]=u.z,a[++f]=a[f+o]=l.x,a[++f]=a[f+o]=l.y,a[++f]=a[f+o]=l.z,++f;else{var c=x.CesiumMath.chordLength(r,t.maximumRadius),p=0;if(n===M.ArcType.GEODESIC)for(s=0;s<h;s++)p+=R.subdivideLineCount(e[s],e[(s+1)%h],c);else if(n===M.ArcType.RHUMB)for(s=0;s<h;s++)p+=R.subdivideRhumbLineCount(t,e[s],e[(s+1)%h],c);for(o=3*(p+h),a=new Array(2*o),s=0;s<h;s++){var d;u=e[s],l=e[(s+1)%h],n===M.ArcType.GEODESIC?d=R.subdivideLine(u,l,c,z):n===M.ArcType.RHUMB&&(d=R.subdivideRhumbLine(t,u,l,c,z));for(var y=d.length,g=0;g<y;++g,++f)a[f]=d[g],a[f+o]=d[g];a[f]=l.x,a[f+o]=l.x,a[++f]=l.y,a[f+o]=l.y,a[++f]=l.z,a[f+o]=l.z,++f}}h=a.length;var v=G.IndexDatatype.createTypedArray(h/3,h-6*e.length),m=0;for(h/=6,s=0;s<h;s++){var C=s,b=C+1,T=C+h,w=T+1;u=E.Cartesian3.fromArray(a,3*C,W),l=E.Cartesian3.fromArray(a,3*b,F),E.Cartesian3.equalsEpsilon(u,l,x.CesiumMath.EPSILON10,x.CesiumMath.EPSILON10)||(v[m++]=C,v[m++]=T,v[m++]=b,v[m++]=b,v[m++]=T,v[m++]=w)}return new A.Geometry({attributes:new _.GeometryAttributes({position:new A.GeometryAttribute({componentDatatype:P.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:a})}),indices:v,primitiveType:A.PrimitiveType.TRIANGLES})},e.PolygonGeometryLibrary=R});

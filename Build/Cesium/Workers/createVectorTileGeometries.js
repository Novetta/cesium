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
define(["./defined-2a4f2d00","./Check-e5651467","./freezeObject-a51e076f","./defaultValue-29c9b1af","./Math-7782f09e","./Cartesian2-ba70b51f","./defineProperties-c817531e","./Transforms-a1114ddf","./RuntimeError-51c34ab4","./WebGLConstants-90dbfe2f","./ComponentDatatype-418b1c61","./GeometryAttribute-646466d8","./when-1faa3867","./GeometryAttributes-f8548d3f","./IndexDatatype-2bcfc06b","./createTaskProcessorWorker","./GeometryOffsetAttribute-fa4e7a11","./VertexFormat-e2e35139","./BoxGeometry-7834c96b","./CylinderGeometryLibrary-f35c6b75","./CylinderGeometry-b8606965","./EllipsoidGeometry-920d298b","./Color-82a2897e"],function(Z,e,t,n,r,D,a,q,i,o,d,s,f,c,W,l,u,h,_,b,j,z,S){"use strict";function V(e){this.offset=e.offset,this.count=e.count,this.color=e.color,this.batchIds=e.batchIds}var p=new D.Cartesian3,y=q.Matrix4.packedLength+D.Cartesian3.packedLength,x=q.Matrix4.packedLength+2,g=q.Matrix4.packedLength+D.Cartesian3.packedLength,v=D.Cartesian3.packedLength+1,C={modelMatrix:new q.Matrix4,boundingVolume:new q.BoundingSphere};function N(e,t){var n=t*y,r=D.Cartesian3.unpack(e,n,p);n+=D.Cartesian3.packedLength;var a=q.Matrix4.unpack(e,n,C.modelMatrix);q.Matrix4.multiplyByScale(a,r,a);var i=C.boundingVolume;return D.Cartesian3.clone(D.Cartesian3.ZERO,i.center),i.radius=Math.sqrt(3),C}function Y(e,t){var n=t*x,r=e[n++],a=e[n++],i=D.Cartesian3.fromElements(r,r,a,p),o=q.Matrix4.unpack(e,n,C.modelMatrix);q.Matrix4.multiplyByScale(o,i,o);var d=C.boundingVolume;return D.Cartesian3.clone(D.Cartesian3.ZERO,d.center),d.radius=Math.sqrt(2),C}function H(e,t){var n=t*g,r=D.Cartesian3.unpack(e,n,p);n+=D.Cartesian3.packedLength;var a=q.Matrix4.unpack(e,n,C.modelMatrix);q.Matrix4.multiplyByScale(a,r,a);var i=C.boundingVolume;return D.Cartesian3.clone(D.Cartesian3.ZERO,i.center),i.radius=1,C}function J(e,t){var n=t*v,r=e[n++],a=D.Cartesian3.unpack(e,n,p),i=q.Matrix4.fromTranslation(a,C.modelMatrix);q.Matrix4.multiplyByUniformScale(i,r,i);var o=C.boundingVolume;return D.Cartesian3.clone(D.Cartesian3.ZERO,o.center),o.radius=1,C}var T=new D.Cartesian3;function K(e,t,n,r,a){if(Z.defined(t)){for(var i=n.length,o=r.attributes.position.values,d=r.indices,s=e.positions,f=e.vertexBatchIds,c=e.indices,l=e.batchIds,u=e.batchTableColors,h=e.batchedIndices,b=e.indexOffsets,p=e.indexCounts,y=e.boundingVolumes,x=e.modelMatrix,g=e.center,v=e.positionOffset,C=e.batchIdIndex,m=e.indexOffset,I=e.batchedIndicesOffset,k=0;k<i;++k){var M=a(t,k),B=M.modelMatrix;q.Matrix4.multiply(x,B,B);for(var w=n[k],A=o.length,O=0;O<A;O+=3){var L=D.Cartesian3.unpack(o,O,T);q.Matrix4.multiplyByPoint(B,L,L),D.Cartesian3.subtract(L,g,L),D.Cartesian3.pack(L,s,3*v+O),f[C++]=w}for(var E=d.length,U=0;U<E;++U)c[m+U]=d[U]+v;var G=k+I;h[G]=new V({offset:m,count:E,color:S.Color.fromRgba(u[w]),batchIds:[w]}),l[G]=w,b[G]=m,p[G]=E,y[G]=q.BoundingSphere.transform(M.boundingVolume,B),v+=A/3,m+=E}e.positionOffset=v,e.batchIdIndex=C,e.indexOffset=m,e.batchedIndicesOffset+=i}}var Q=new D.Cartesian3,X=new q.Matrix4;function $(e,t,n){var r=n.length,a=2+r*q.BoundingSphere.packedLength+1+function(e){for(var t=e.length,n=0,r=0;r<t;++r)n+=S.Color.packedLength+3+e[r].batchIds.length;return n}(t),i=new Float64Array(a),o=0;i[o++]=e,i[o++]=r;for(var d=0;d<r;++d)q.BoundingSphere.pack(n[d],i,o),o+=q.BoundingSphere.packedLength;var s=t.length;i[o++]=s;for(var f=0;f<s;++f){var c=t[f];S.Color.pack(c.color,i,o),o+=S.Color.packedLength,i[o++]=c.offset,i[o++]=c.count;var l=c.batchIds,u=l.length;i[o++]=u;for(var h=0;h<u;++h)i[o++]=l[h]}return i}return l(function(e,t){var n=Z.defined(e.boxes)?new Float32Array(e.boxes):void 0,r=Z.defined(e.boxBatchIds)?new Uint16Array(e.boxBatchIds):void 0,a=Z.defined(e.cylinders)?new Float32Array(e.cylinders):void 0,i=Z.defined(e.cylinderBatchIds)?new Uint16Array(e.cylinderBatchIds):void 0,o=Z.defined(e.ellipsoids)?new Float32Array(e.ellipsoids):void 0,d=Z.defined(e.ellipsoidBatchIds)?new Uint16Array(e.ellipsoidBatchIds):void 0,s=Z.defined(e.spheres)?new Float32Array(e.spheres):void 0,f=Z.defined(e.sphereBatchIds)?new Uint16Array(e.sphereBatchIds):void 0,c=Z.defined(n)?r.length:0,l=Z.defined(a)?i.length:0,u=Z.defined(o)?d.length:0,h=Z.defined(s)?f.length:0,b=_.BoxGeometry.getUnitBox(),p=j.CylinderGeometry.getUnitCylinder(),y=z.EllipsoidGeometry.getUnitEllipsoid(),x=b.attributes.position.values,g=p.attributes.position.values,v=y.attributes.position.values,C=x.length*c;C+=g.length*l,C+=v.length*(u+h);var m=b.indices,I=p.indices,k=y.indices,M=m.length*c;M+=I.length*l,M+=k.length*(u+h);var B,w,A,O=new Float32Array(C),L=new Uint16Array(C/3),E=W.IndexDatatype.createTypedArray(C/3,M),U=c+l+u+h,G=new Uint16Array(U),S=new Array(U),V=new Uint32Array(U),T=new Uint32Array(U),F=new Array(U);B=e.packedBuffer,w=new Float64Array(B),A=0,D.Cartesian3.unpack(w,A,Q),A+=D.Cartesian3.packedLength,q.Matrix4.unpack(w,A,X);var R={batchTableColors:new Uint32Array(e.batchTableColors),positions:O,vertexBatchIds:L,indices:E,batchIds:G,batchedIndices:S,indexOffsets:V,indexCounts:T,boundingVolumes:F,positionOffset:0,batchIdIndex:0,indexOffset:0,batchedIndicesOffset:0,modelMatrix:X,center:Q};K(R,n,r,b,N),K(R,a,i,p,Y),K(R,o,d,y,H),K(R,s,f,y,J);var P=$(E.BYTES_PER_ELEMENT,S,F);return t.push(O.buffer,L.buffer,E.buffer),t.push(G.buffer,V.buffer,T.buffer),t.push(P.buffer),{positions:O.buffer,vertexBatchIds:L.buffer,indices:E.buffer,indexOffsets:V.buffer,indexCounts:T.buffer,batchIds:G.buffer,packedBuffer:P.buffer}})});

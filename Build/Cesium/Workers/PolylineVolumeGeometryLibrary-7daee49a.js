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
define(["exports","./freezeObject-a51e076f","./Math-7782f09e","./Cartesian2-ba70b51f","./Transforms-a1114ddf","./EllipsoidTangentPlane-dd0adef9","./PolylinePipeline-b2509cd5"],function(a,e,I,L,P,E,Q){"use strict";var F=e.freezeObject({ROUNDED:0,MITERED:1,BEVELED:2}),U=[new L.Cartesian3,new L.Cartesian3],_=new L.Cartesian3,q=new L.Cartesian3,Y=new L.Cartesian3,Z=new L.Cartesian3,k=new L.Cartesian3,H=new L.Cartesian3,J=new L.Cartesian3,K=new L.Cartesian3,W=new L.Cartesian3,X=new L.Cartesian3,p=new L.Cartesian3,$={},aa=new L.Cartographic;function ea(a,e,r,n){var t,i=a[0],s=a[1],o=L.Cartesian3.angleBetween(i,s),l=Math.ceil(o/n),C=new Array(l);if(e===r){for(t=0;t<l;t++)C[t]=e;return C.push(r),C}var c=(r-e)/l;for(t=1;t<l;t++){var u=e+t*c;C[t]=u}return C[0]=e,C.push(r),C}var M=new L.Cartesian3,T=new L.Cartesian3;var B=new L.Cartesian3(-1,0,0),z=new P.Matrix4,b=new P.Matrix4,S=new P.Matrix3,A=P.Matrix3.IDENTITY.clone(),D=new L.Cartesian3,O=new P.Cartesian4,N=new L.Cartesian3;function ra(a,e,r,n,t,i,s,o){var l=D,C=O;z=P.Transforms.eastNorthUpToFixedFrame(a,t,z),l=P.Matrix4.multiplyByPointAsVector(z,B,l),l=L.Cartesian3.normalize(l,l);var c,u,y,d,f,m,p,g,w=(c=l,u=e,y=a,d=t,f=new E.EllipsoidTangentPlane(y,d),m=f.projectPointOntoPlane(L.Cartesian3.add(y,c,M),M),p=f.projectPointOntoPlane(L.Cartesian3.add(y,u,T),T),g=L.Cartesian2.angleBetween(m,p),0<=p.x*m.y-p.y*m.x?-g:g);S=P.Matrix3.fromRotationZ(w,S),N.z=i,z=P.Matrix4.multiplyTransformation(z,P.Matrix4.fromRotationTranslation(S,N,b),z);var h=A;h[0]=s;for(var v=0;v<o;v++)for(var x=0;x<r.length;x+=3)C=L.Cartesian3.fromArray(r,x,C),C=P.Matrix3.multiplyByVector(h,C,C),C=P.Matrix4.multiplyByPoint(z,C,C),n.push(C.x,C.y,C.z);return n}var l=new L.Cartesian3;function na(a,e,r,n,t,i,s){for(var o=0;o<a.length;o+=3){n=ra(L.Cartesian3.fromArray(a,o,l),e,r,n,t,i[o/3],s,1)}return n}function ta(a,e){for(var r=a.length,n=new Array(3*r),t=0,i=e.x+e.width/2,s=e.y+e.height/2,o=0;o<r;o++)n[t++]=a[o].x-i,n[t++]=0,n[t++]=a[o].y-s;return n}var g=new P.Quaternion,w=new L.Cartesian3,h=new P.Matrix3;function ia(a,e,r,n,t,i,s,o,l,C){var c,u,y=L.Cartesian3.angleBetween(L.Cartesian3.subtract(e,a,X),L.Cartesian3.subtract(r,a,p)),d=n===F.BEVELED?0:Math.ceil(y/I.CesiumMath.toRadians(5));if(c=t?P.Matrix3.fromQuaternion(P.Quaternion.fromAxisAngle(L.Cartesian3.negate(a,X),y/(d+1),g),h):P.Matrix3.fromQuaternion(P.Quaternion.fromAxisAngle(a,y/(d+1),g),h),e=L.Cartesian3.clone(e,w),0<d)for(var f=C?2:1,m=0;m<d;m++)e=P.Matrix3.multiplyByVector(c,e,e),u=L.Cartesian3.subtract(e,a,X),u=L.Cartesian3.normalize(u,u),t||(u=L.Cartesian3.negate(u,u)),s=ra(i.scaleToGeodeticSurface(e,p),u,o,s,i,l,1,f);else u=L.Cartesian3.subtract(e,a,X),u=L.Cartesian3.normalize(u,u),t||(u=L.Cartesian3.negate(u,u)),s=ra(i.scaleToGeodeticSurface(e,p),u,o,s,i,l,1,1),r=L.Cartesian3.clone(r,w),u=L.Cartesian3.subtract(r,a,X),u=L.Cartesian3.normalize(u,u),t||(u=L.Cartesian3.negate(u,u)),s=ra(i.scaleToGeodeticSurface(r,p),u,o,s,i,l,1,1);return s}$.removeDuplicatesFromShape=function(a){for(var e=a.length,r=[],n=e-1,t=0;t<e;n=t++){var i=a[n],s=a[t];L.Cartesian2.equals(i,s)||r.push(s)}return r},$.angleIsGreaterThanPi=function(a,e,r,n){var t=new E.EllipsoidTangentPlane(r,n),i=t.projectPointOntoPlane(L.Cartesian3.add(r,a,M),M),s=t.projectPointOntoPlane(L.Cartesian3.add(r,e,T),T);return 0<=s.x*i.y-s.y*i.x};var sa=new L.Cartesian3,oa=new L.Cartesian3;$.computePositions=function(a,e,r,n,t){var i=n._ellipsoid,s=function(a,e){for(var r=new Array(a.length),n=0;n<a.length;n++){var t=a[n];aa=e.cartesianToCartographic(t,aa),r[n]=aa.height,a[n]=e.scaleToGeodeticSurface(t,t)}return r}(a,i),o=n._granularity,l=n._cornerType,C=t?function(a,e){var r=a.length,n=new Array(6*r),t=0,i=e.x+e.width/2,s=e.y+e.height/2,o=a[0];n[t++]=o.x-i,n[t++]=0,n[t++]=o.y-s;for(var l=1;l<r;l++){var C=(o=a[l]).x-i,c=o.y-s;n[t++]=C,n[t++]=0,n[t++]=c,n[t++]=C,n[t++]=0,n[t++]=c}return o=a[0],n[t++]=o.x-i,n[t++]=0,n[t++]=o.y-s,n}(e,r):ta(e,r),c=t?ta(e,r):void 0,u=r.height/2,y=r.width/2,d=a.length,f=[],m=t?[]:void 0,p=_,g=q,w=Y,h=Z,v=k,x=H,P=J,E=K,M=W,T=a[0],B=a[1];h=i.geodeticSurfaceNormal(T,h),p=L.Cartesian3.subtract(B,T,p),p=L.Cartesian3.normalize(p,p),E=L.Cartesian3.cross(h,p,E),E=L.Cartesian3.normalize(E,E);var z,b=s[0],S=s[1];t&&(m=ra(T,E,c,m,i,b+u,1,1)),M=L.Cartesian3.clone(T,M),T=B,g=L.Cartesian3.negate(p,g);for(var A=1;A<d-1;A++){var D=t?2:1;B=a[A+1],p=L.Cartesian3.subtract(B,T,p),p=L.Cartesian3.normalize(p,p),w=L.Cartesian3.add(p,g,w),w=L.Cartesian3.normalize(w,w),h=i.geodeticSurfaceNormal(T,h);var O=L.Cartesian3.multiplyByScalar(h,L.Cartesian3.dot(p,h),sa);L.Cartesian3.subtract(p,O,O),L.Cartesian3.normalize(O,O);var N=L.Cartesian3.multiplyByScalar(h,L.Cartesian3.dot(g,h),oa);if(L.Cartesian3.subtract(g,N,N),L.Cartesian3.normalize(N,N),!I.CesiumMath.equalsEpsilon(Math.abs(L.Cartesian3.dot(O,N)),1,I.CesiumMath.EPSILON7)){w=L.Cartesian3.cross(w,h,w),w=L.Cartesian3.cross(h,w,w),w=L.Cartesian3.normalize(w,w);var V=1/Math.max(.25,L.Cartesian3.magnitude(L.Cartesian3.cross(w,g,X))),G=$.angleIsGreaterThanPi(p,g,T,i);M=(G?(v=L.Cartesian3.add(T,L.Cartesian3.multiplyByScalar(w,V*y,w),v),x=L.Cartesian3.add(v,L.Cartesian3.multiplyByScalar(E,y,x),x),U[0]=L.Cartesian3.clone(M,U[0]),U[1]=L.Cartesian3.clone(x,U[1]),z=ea(U,b+u,S+u,o),f=na(Q.PolylinePipeline.generateArc({positions:U,granularity:o,ellipsoid:i}),E,C,f,i,z,1),E=L.Cartesian3.cross(h,p,E),E=L.Cartesian3.normalize(E,E),P=L.Cartesian3.add(v,L.Cartesian3.multiplyByScalar(E,y,P),P),l===F.ROUNDED||l===F.BEVELED?ia(v,x,P,l,G,i,f,C,S+u,t):f=ra(T,w=L.Cartesian3.negate(w,w),C,f,i,S+u,V,D)):(v=L.Cartesian3.add(T,L.Cartesian3.multiplyByScalar(w,V*y,w),v),x=L.Cartesian3.add(v,L.Cartesian3.multiplyByScalar(E,-y,x),x),U[0]=L.Cartesian3.clone(M,U[0]),U[1]=L.Cartesian3.clone(x,U[1]),z=ea(U,b+u,S+u,o),f=na(Q.PolylinePipeline.generateArc({positions:U,granularity:o,ellipsoid:i}),E,C,f,i,z,1),E=L.Cartesian3.cross(h,p,E),E=L.Cartesian3.normalize(E,E),P=L.Cartesian3.add(v,L.Cartesian3.multiplyByScalar(E,-y,P),P),l===F.ROUNDED||l===F.BEVELED?ia(v,x,P,l,G,i,f,C,S+u,t):f=ra(T,w,C,f,i,S+u,V,D)),L.Cartesian3.clone(P,M)),g=L.Cartesian3.negate(p,g)}else f=ra(M,E,C,f,i,b+u,1,1),M=T;b=S,S=s[A+1],T=B}U[0]=L.Cartesian3.clone(M,U[0]),U[1]=L.Cartesian3.clone(T,U[1]),z=ea(U,b+u,S+u,o),f=na(Q.PolylinePipeline.generateArc({positions:U,granularity:o,ellipsoid:i}),E,C,f,i,z,1),t&&(m=ra(T,E,c,m,i,S+u,1,1)),d=f.length;var R=t?d+m.length:d,j=new Float64Array(R);return j.set(f),t&&j.set(m,d),j},a.CornerType=F,a.PolylineVolumeGeometryLibrary=$});

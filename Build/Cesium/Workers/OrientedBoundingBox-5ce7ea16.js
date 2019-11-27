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
define(["exports","./defined-2a4f2d00","./Check-e5651467","./defaultValue-29c9b1af","./Math-7782f09e","./Cartesian2-ba70b51f","./Transforms-a1114ddf","./Plane-477e42da","./EllipsoidTangentPlane-dd0adef9"],function(a,E,t,A,e,P,L,O,v){"use strict";function I(a,t){this.center=P.Cartesian3.clone(A.defaultValue(a,P.Cartesian3.ZERO)),this.halfAxes=L.Matrix3.clone(A.defaultValue(t,L.Matrix3.ZERO))}I.packedLength=P.Cartesian3.packedLength+L.Matrix3.packedLength,I.pack=function(a,t,e){return e=A.defaultValue(e,0),P.Cartesian3.pack(a.center,t,e),L.Matrix3.pack(a.halfAxes,t,e+P.Cartesian3.packedLength),t},I.unpack=function(a,t,e){return t=A.defaultValue(t,0),E.defined(e)||(e=new I),P.Cartesian3.unpack(a,t,e.center),L.Matrix3.unpack(a,t+P.Cartesian3.packedLength,e.halfAxes),e};var S=new P.Cartesian3,V=new P.Cartesian3,z=new P.Cartesian3,T=new P.Cartesian3,R=new P.Cartesian3,U=new P.Cartesian3,B=new L.Matrix3,k={unitary:new L.Matrix3,diagonal:new L.Matrix3};I.fromPoints=function(a,t){if(E.defined(t)||(t=new I),!E.defined(a)||0===a.length)return t.halfAxes=L.Matrix3.ZERO,t.center=P.Cartesian3.ZERO,t;var e,n=a.length,r=P.Cartesian3.clone(a[0],S);for(e=1;e<n;e++)P.Cartesian3.add(r,a[e],r);var i=1/n;P.Cartesian3.multiplyByScalar(r,i,r);var s,u=0,C=0,o=0,d=0,l=0,c=0;for(e=0;e<n;e++)u+=(s=P.Cartesian3.subtract(a[e],r,V)).x*s.x,C+=s.x*s.y,o+=s.x*s.z,d+=s.y*s.y,l+=s.y*s.z,c+=s.z*s.z;u*=i,C*=i,o*=i,d*=i,l*=i,c*=i;var h=B;h[0]=u,h[1]=C,h[2]=o,h[3]=C,h[4]=d,h[5]=l,h[6]=o,h[7]=l,h[8]=c;var x=L.Matrix3.computeEigenDecomposition(h,k),M=L.Matrix3.clone(x.unitary,t.halfAxes),m=L.Matrix3.getColumn(M,0,T),f=L.Matrix3.getColumn(M,1,R),g=L.Matrix3.getColumn(M,2,U),p=-Number.MAX_VALUE,w=-Number.MAX_VALUE,y=-Number.MAX_VALUE,b=Number.MAX_VALUE,A=Number.MAX_VALUE,O=Number.MAX_VALUE;for(e=0;e<n;e++)s=a[e],p=Math.max(P.Cartesian3.dot(m,s),p),w=Math.max(P.Cartesian3.dot(f,s),w),y=Math.max(P.Cartesian3.dot(g,s),y),b=Math.min(P.Cartesian3.dot(m,s),b),A=Math.min(P.Cartesian3.dot(f,s),A),O=Math.min(P.Cartesian3.dot(g,s),O);m=P.Cartesian3.multiplyByScalar(m,.5*(b+p),m),f=P.Cartesian3.multiplyByScalar(f,.5*(A+w),f),g=P.Cartesian3.multiplyByScalar(g,.5*(O+y),g);var v=P.Cartesian3.add(m,f,t.center);P.Cartesian3.add(v,g,v);var N=z;return N.x=p-b,N.y=w-A,N.z=y-O,P.Cartesian3.multiplyByScalar(N,.5,N),L.Matrix3.multiplyByScale(t.halfAxes,N,t.halfAxes),t};var N=new P.Cartesian3,D=new P.Cartesian3;var W=new P.Cartographic,q=new P.Cartesian3,_=[new P.Cartographic,new P.Cartographic,new P.Cartographic,new P.Cartographic,new P.Cartographic,new P.Cartographic,new P.Cartographic,new P.Cartographic],X=[new P.Cartesian3,new P.Cartesian3,new P.Cartesian3,new P.Cartesian3,new P.Cartesian3,new P.Cartesian3,new P.Cartesian3,new P.Cartesian3],Z=[new P.Cartesian2,new P.Cartesian2,new P.Cartesian2,new P.Cartesian2,new P.Cartesian2,new P.Cartesian2,new P.Cartesian2,new P.Cartesian2];I.fromRectangle=function(a,t,e,n,r){t=A.defaultValue(t,0),e=A.defaultValue(e,0),n=A.defaultValue(n,P.Ellipsoid.WGS84);var i=P.Rectangle.center(a,W),s=n.cartographicToCartesian(i,q),u=new v.EllipsoidTangentPlane(s,n),C=u.plane,o=_[0],d=_[1],l=_[2],c=_[3],h=_[4],x=_[5],M=_[6],m=_[7],f=i.longitude,g=a.south<0&&0<a.north?0:i.latitude;M.latitude=x.latitude=h.latitude=a.south,m.latitude=c.latitude=g,o.latitude=d.latitude=l.latitude=a.north,M.longitude=m.longitude=o.longitude=a.west,x.longitude=d.longitude=f,h.longitude=c.longitude=l.longitude=a.east,l.height=d.height=o.height=m.height=M.height=x.height=h.height=c.height=e,n.cartographicArrayToCartesianArray(_,X),u.projectPointsToNearestOnPlane(X,Z);var p=Math.min(Z[6].x,Z[7].x,Z[0].x),w=Math.max(Z[2].x,Z[3].x,Z[4].x),y=Math.min(Z[4].y,Z[5].y,Z[6].y),b=Math.max(Z[0].y,Z[1].y,Z[2].y);return l.height=o.height=h.height=M.height=t,n.cartographicArrayToCartesianArray(_,X),function(a,t,e,n,r,i,s,u){E.defined(u)||(u=new I);var C=u.halfAxes;L.Matrix3.setColumn(C,0,a.xAxis,C),L.Matrix3.setColumn(C,1,a.yAxis,C),L.Matrix3.setColumn(C,2,a.zAxis,C);var o=N;o.x=(t+e)/2,o.y=(n+r)/2,o.z=(i+s)/2;var d=D;d.x=(e-t)/2,d.y=(r-n)/2,d.z=(s-i)/2;var l=u.center;return o=L.Matrix3.multiplyByVector(C,o,o),P.Cartesian3.add(a.origin,o,l),L.Matrix3.multiplyByScale(C,d,C),u}(u,p,w,y,b,Math.min(O.Plane.getPointDistance(C,X[0]),O.Plane.getPointDistance(C,X[2]),O.Plane.getPointDistance(C,X[4]),O.Plane.getPointDistance(C,X[6])),e,r)},I.clone=function(a,t){if(E.defined(a))return E.defined(t)?(P.Cartesian3.clone(a.center,t.center),L.Matrix3.clone(a.halfAxes,t.halfAxes),t):new I(a.center,a.halfAxes)},I.intersectPlane=function(a,t){var e=a.center,n=t.normal,r=a.halfAxes,i=n.x,s=n.y,u=n.z,C=Math.abs(i*r[L.Matrix3.COLUMN0ROW0]+s*r[L.Matrix3.COLUMN0ROW1]+u*r[L.Matrix3.COLUMN0ROW2])+Math.abs(i*r[L.Matrix3.COLUMN1ROW0]+s*r[L.Matrix3.COLUMN1ROW1]+u*r[L.Matrix3.COLUMN1ROW2])+Math.abs(i*r[L.Matrix3.COLUMN2ROW0]+s*r[L.Matrix3.COLUMN2ROW1]+u*r[L.Matrix3.COLUMN2ROW2]),o=P.Cartesian3.dot(n,e)+t.distance;return o<=-C?L.Intersect.OUTSIDE:C<=o?L.Intersect.INSIDE:L.Intersect.INTERSECTING};var x=new P.Cartesian3,M=new P.Cartesian3,m=new P.Cartesian3,h=new P.Cartesian3;I.distanceSquaredTo=function(a,t){var e=P.Cartesian3.subtract(t,a.center,N),n=a.halfAxes,r=L.Matrix3.getColumn(n,0,x),i=L.Matrix3.getColumn(n,1,M),s=L.Matrix3.getColumn(n,2,m),u=P.Cartesian3.magnitude(r),C=P.Cartesian3.magnitude(i),o=P.Cartesian3.magnitude(s);P.Cartesian3.normalize(r,r),P.Cartesian3.normalize(i,i),P.Cartesian3.normalize(s,s);var d=h;d.x=P.Cartesian3.dot(e,r),d.y=P.Cartesian3.dot(e,i),d.z=P.Cartesian3.dot(e,s);var l,c=0;return d.x<-u?c+=(l=d.x+u)*l:d.x>u&&(c+=(l=d.x-u)*l),d.y<-C?c+=(l=d.y+C)*l:d.y>C&&(c+=(l=d.y-C)*l),d.z<-o?c+=(l=d.z+o)*l:d.z>o&&(c+=(l=d.z-o)*l),c};var f=new P.Cartesian3,g=new P.Cartesian3;I.computePlaneDistances=function(a,t,e,n){E.defined(n)||(n=new L.Interval);var r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=a.center,u=a.halfAxes,C=L.Matrix3.getColumn(u,0,x),o=L.Matrix3.getColumn(u,1,M),d=L.Matrix3.getColumn(u,2,m),l=P.Cartesian3.add(C,o,f);P.Cartesian3.add(l,d,l),P.Cartesian3.add(l,s,l);var c=P.Cartesian3.subtract(l,t,g),h=P.Cartesian3.dot(e,c);return r=Math.min(h,r),i=Math.max(h,i),P.Cartesian3.add(s,C,l),P.Cartesian3.add(l,o,l),P.Cartesian3.subtract(l,d,l),P.Cartesian3.subtract(l,t,c),h=P.Cartesian3.dot(e,c),r=Math.min(h,r),i=Math.max(h,i),P.Cartesian3.add(s,C,l),P.Cartesian3.subtract(l,o,l),P.Cartesian3.add(l,d,l),P.Cartesian3.subtract(l,t,c),h=P.Cartesian3.dot(e,c),r=Math.min(h,r),i=Math.max(h,i),P.Cartesian3.add(s,C,l),P.Cartesian3.subtract(l,o,l),P.Cartesian3.subtract(l,d,l),P.Cartesian3.subtract(l,t,c),h=P.Cartesian3.dot(e,c),r=Math.min(h,r),i=Math.max(h,i),P.Cartesian3.subtract(s,C,l),P.Cartesian3.add(l,o,l),P.Cartesian3.add(l,d,l),P.Cartesian3.subtract(l,t,c),h=P.Cartesian3.dot(e,c),r=Math.min(h,r),i=Math.max(h,i),P.Cartesian3.subtract(s,C,l),P.Cartesian3.add(l,o,l),P.Cartesian3.subtract(l,d,l),P.Cartesian3.subtract(l,t,c),h=P.Cartesian3.dot(e,c),r=Math.min(h,r),i=Math.max(h,i),P.Cartesian3.subtract(s,C,l),P.Cartesian3.subtract(l,o,l),P.Cartesian3.add(l,d,l),P.Cartesian3.subtract(l,t,c),h=P.Cartesian3.dot(e,c),r=Math.min(h,r),i=Math.max(h,i),P.Cartesian3.subtract(s,C,l),P.Cartesian3.subtract(l,o,l),P.Cartesian3.subtract(l,d,l),P.Cartesian3.subtract(l,t,c),h=P.Cartesian3.dot(e,c),r=Math.min(h,r),i=Math.max(h,i),n.start=r,n.stop=i,n};var n=new L.BoundingSphere;I.isOccluded=function(a,t){var e=L.BoundingSphere.fromOrientedBoundingBox(a,n);return!t.isBoundingSphereVisible(e)},I.prototype.intersectPlane=function(a){return I.intersectPlane(this,a)},I.prototype.distanceSquaredTo=function(a){return I.distanceSquaredTo(this,a)},I.prototype.computePlaneDistances=function(a,t,e){return I.computePlaneDistances(this,a,t,e)},I.prototype.isOccluded=function(a){return I.isOccluded(this,a)},I.equals=function(a,t){return a===t||E.defined(a)&&E.defined(t)&&P.Cartesian3.equals(a.center,t.center)&&L.Matrix3.equals(a.halfAxes,t.halfAxes)},I.prototype.clone=function(a){return I.clone(this,a)},I.prototype.equals=function(a){return I.equals(this,a)},a.OrientedBoundingBox=I});

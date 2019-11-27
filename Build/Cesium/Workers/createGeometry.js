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
define(["./defined-2a4f2d00","./Check-e5651467","./freezeObject-a51e076f","./defaultValue-29c9b1af","./Math-7782f09e","./Cartesian2-ba70b51f","./defineProperties-c817531e","./Transforms-a1114ddf","./RuntimeError-51c34ab4","./WebGLConstants-90dbfe2f","./ComponentDatatype-418b1c61","./GeometryAttribute-646466d8","./when-1faa3867","./GeometryAttributes-f8548d3f","./AttributeCompression-5601f533","./GeometryPipeline-70062613","./EncodedCartesian3-623e414d","./IndexDatatype-2bcfc06b","./IntersectionTests-c4c46981","./Plane-477e42da","./PrimitivePipeline-bb8dd5b4","./WebMercatorProjection-1ecca5ba","./createTaskProcessorWorker"],function(d,e,r,t,n,a,i,o,f,s,c,u,b,m,l,p,y,P,k,v,C,h,G){"use strict";var W={};function A(e){var r=W[e];return d.defined(r)||("object"==typeof exports?W[r]=r=require("Workers/"+e):require(["Workers/"+e],function(e){W[r=e]=e})),r}return G(function(e,r){for(var t=e.subTasks,n=t.length,a=new Array(n),i=0;i<n;i++){var o=t[i],f=o.geometry,s=o.moduleName;if(d.defined(s)){var c=A(s);a[i]=c(f,o.offset)}else a[i]=f}return b.when.all(a,function(e){return C.PrimitivePipeline.packCreateGeometryResults(e,r)})})});

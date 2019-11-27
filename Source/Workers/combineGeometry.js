/* This file is automatically rebuilt by the Cesium build process. */
define(['./defined-26bd4a03', './Check-da037458', './freezeObject-2d83f591', './defaultValue-f2e68450', './Math-fa6e45cb', './Cartesian2-2a723276', './defineProperties-6f7a50f2', './Transforms-c7268e1a', './RuntimeError-ad75c885', './WebGLConstants-497deb20', './ComponentDatatype-69643096', './GeometryAttribute-5518ee1b', './when-ee12a2cb', './GeometryAttributes-eecc9f43', './AttributeCompression-87682214', './GeometryPipeline-b401a0aa', './EncodedCartesian3-340abdd4', './IndexDatatype-3de60176', './IntersectionTests-50fa63e6', './Plane-3381347d', './PrimitivePipeline-7c060d4f', './WebMercatorProjection-f2dc467d', './createTaskProcessorWorker'], function (defined, Check, freezeObject, defaultValue, _Math, Cartesian2, defineProperties, Transforms, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, when, GeometryAttributes, AttributeCompression, GeometryPipeline, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, PrimitivePipeline, WebMercatorProjection, createTaskProcessorWorker) { 'use strict';

    function combineGeometry(packedParameters, transferableObjects) {
            var parameters = PrimitivePipeline.PrimitivePipeline.unpackCombineGeometryParameters(packedParameters);
            var results = PrimitivePipeline.PrimitivePipeline.combineGeometry(parameters);
            return PrimitivePipeline.PrimitivePipeline.packCombineGeometryResults(results, transferableObjects);
        }
    var combineGeometry$1 = createTaskProcessorWorker(combineGeometry);

    return combineGeometry$1;

});

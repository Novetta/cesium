// This file is automatically rebuilt by the Cesium build process.
define(['./defined-2a4f2d00', './Check-e5651467', './freezeObject-a51e076f', './defaultValue-29c9b1af', './Math-9620d065', './Cartesian2-8defcb50', './defineProperties-c817531e', './Transforms-004fdb1a', './RuntimeError-51c34ab4', './WebGLConstants-90dbfe2f', './ComponentDatatype-30d0acd7', './GeometryAttribute-7a52d284', './when-1faa3867', './GeometryAttributes-f8548d3f', './AttributeCompression-bb5cef3d', './GeometryPipeline-5f618cad', './EncodedCartesian3-7fb2f5be', './IndexDatatype-85d10a10', './IntersectionTests-403b8d09', './Plane-ded824e4', './PrimitivePipeline-02bb586f', './WebMercatorProjection-2a43d110', './createTaskProcessorWorker'], function (defined, Check, freezeObject, defaultValue, _Math, Cartesian2, defineProperties, Transforms, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, when, GeometryAttributes, AttributeCompression, GeometryPipeline, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, PrimitivePipeline, WebMercatorProjection, createTaskProcessorWorker) { 'use strict';

    function combineGeometry(packedParameters, transferableObjects) {
            var parameters = PrimitivePipeline.PrimitivePipeline.unpackCombineGeometryParameters(packedParameters);
            var results = PrimitivePipeline.PrimitivePipeline.combineGeometry(parameters);
            return PrimitivePipeline.PrimitivePipeline.packCombineGeometryResults(results, transferableObjects);
        }
    var combineGeometry$1 = createTaskProcessorWorker(combineGeometry);

    return combineGeometry$1;

});

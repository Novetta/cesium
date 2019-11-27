// This file is automatically rebuilt by the Cesium build process.
define(['./defined-2a4f2d00', './Check-e5651467', './freezeObject-a51e076f', './defaultValue-29c9b1af', './Math-9620d065', './Cartesian2-8defcb50', './defineProperties-c817531e', './Transforms-004fdb1a', './RuntimeError-51c34ab4', './WebGLConstants-90dbfe2f', './ComponentDatatype-30d0acd7', './GeometryAttribute-7a52d284', './when-1faa3867', './GeometryAttributes-f8548d3f', './IndexDatatype-85d10a10', './GeometryOffsetAttribute-37c3dade', './VertexFormat-ba88c609', './EllipsoidGeometry-d84ea08c'], function (defined, Check, freezeObject, defaultValue, _Math, Cartesian2, defineProperties, Transforms, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, when, GeometryAttributes, IndexDatatype, GeometryOffsetAttribute, VertexFormat, EllipsoidGeometry) { 'use strict';

    function createEllipsoidGeometry(ellipsoidGeometry, offset) {
            if (defined.defined(offset)) {
                ellipsoidGeometry = EllipsoidGeometry.EllipsoidGeometry.unpack(ellipsoidGeometry, offset);
            }
            return EllipsoidGeometry.EllipsoidGeometry.createGeometry(ellipsoidGeometry);
        }

    return createEllipsoidGeometry;

});

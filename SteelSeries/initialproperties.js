// ---------------------------------------------------------------------------------------
// Initial Properties
// ---------------------------------------------------------------------------------------

define([], function () {
    'use strict';
    return {
        version: 1.0,
        qHyperCubeDef: {
            qDimensions: [],
            qMeasures: [],

            qInitialDataFetch: [{
                qTop: 0,
                qLeft: 0,
                qHeight: 300,
                qWidth: 3
            }]
        },
        fontSize: {
            min: 8,
            max: 24
        }
    };
});

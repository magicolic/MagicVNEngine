;define([], function () {
    'use strict';
    
    return function (canvasId, canvasWidth, canvasHeight) {
        this.canvasId = canvasId;
        this.canvas = null;
        
        this.width = canvasWidth;
        this.height = canvasHeight;
        
        this.stage = null;
        
        this.initialize = function () {
            this.canvas = document.getElementById(this.canvasId);
            this.stage = new createjs.Stage(this.canvasId);
        };
        
        this.initialize();
    };
});

;define([], function () {
    'use strict';
    
    return function () {            
        this.play = function (info, callback) {
            createjs.Sound.play(info.sound);
            
            if (callback) {
                callback();
            }
        };
    };
});

;define([], function () {
    'use strict';
    
    return function () {     
        var soundInstance = null;
        
        this.play = function (info, callback) {
            this.stop();
            
            // loop -1 is use for infinite playback
            soundInstance = createjs.Sound.play(info.music, { loop: -1 });
            
            if (callback) {
                callback();
            }
        };
        
        this.stop = function () {
            if (soundInstance) {
                soundInstance.stop();
                soundInstance.destroy();
                soundInstance = null;
            }
        };
    };
});

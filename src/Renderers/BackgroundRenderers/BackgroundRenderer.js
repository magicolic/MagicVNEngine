;define([], function () {
    'use strict';

    return { 
        BITMAP_CONTROL_ID: 'BackgroundRenderer.Bitmap',
        
        initialize: function (screen) {
            var bitmap = new createjs.Bitmap();
            bitmap.name = this.BITMAP_CONTROL_ID;
            screen.stage.addChild(bitmap);
            screen.stage.update();
        },
        
        render: function (screen, info, callback) {
            var bitmap = screen.stage.getChildByName(this.BITMAP_CONTROL_ID);
            bitmap.image = info.image;            
            screen.stage.update();
            
            if (callback) {
                callback();
            }
        }
    };
});

;require([
    '/src/Screen.js',
    '/src/Renderers/BackgroundRenderers/BackgroundRenderingInfo.js',
    '/src/Renderers/BackgroundRenderers/BackgroundRenderer.js'
], function (Screen, BackgroundRenderingInfo, BackgroundRenderer) {
    'use strict';
    
    var screen = new Screen('Canvas', 1024, 768);
    BackgroundRenderer.initialize(screen);
    
    document.body.className = 'loading';
    var queue = new createjs.LoadQueue();
    queue.on('complete', function () {
        document.body.className = '';
    });
    queue.loadManifest([
        { id: 'bg1', src: 'bg1.jpg' },
        { id: 'bg2', src: 'bg2.jpg' },
        { id: 'bg3', src: 'bg3.jpg' }
    ]);
    
    document.getElementById('RenderButton').onclick = function () {
        var selectedBGRadio = document.querySelector('input[name="background"]:checked');
        if (selectedBGRadio) {
            var info = new BackgroundRenderingInfo();
            info.image = queue.getResult(selectedBGRadio.value);
            BackgroundRenderer.render(screen, info);
        }
    };
});

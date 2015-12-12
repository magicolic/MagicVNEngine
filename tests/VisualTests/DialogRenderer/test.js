;require([
    '/src/Screen.js',
    '/src/Renderers/DialogRenderers/DialogRenderingInfo.js',
    '/src/Renderers/DialogRenderers/DialogRenderer.js'
], function (Screen, DialogRenderingInfo, DialogRenderer) {
    'use strict';
    
    var screen = new Screen('Canvas', 1024, 768);
    document.getElementById('Canvas').onclick = function () { DialogRenderer.tick(screen); };
    DialogRenderer.initialize(screen);
    
    function finishCallback() {
        alert('END!');
    };
    
    document.getElementById('ButtonShortTextWithoutSpeaker').onclick = function () {
        var info = new DialogRenderingInfo();
        info.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        DialogRenderer.render(screen, info, finishCallback);
    };
    
    document.getElementById('ButtonLongTextWithoutSpeaker').onclick = function () {
        var info = new DialogRenderingInfo();
        info.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel massa non sapien tempor sollicitudin a vel mauris. Sed hendrerit quam ut elit efficitur, in aliquet nibh elementum. Vivamus eleifend tellus sed sem scelerisque maximus. Phasellus tincidunt velit ut dolor cursus tempor a accumsan tortor. Nam a pulvinar purus. Aliquam ornare odio nec purus porttitor, ac sodales odio feugiat. Maecenas non euismod diam. Nullam porttitor elit vel elit porttitor, vitae tincidunt dolor vehicula. In hac habitasse platea dictumst. Vivamus scelerisque tincidunt molestie. Proin mauris lacus, luctus a dapibus nec, luctus at purus. Donec congue turpis eget est facilisis, sit amet euismod lacus interdum. Vivamus dui velit, accumsan a ipsum quis, sodales dignissim nisi. Quisque sed justo eu ex molestie semper. Praesent gravida mattis libero in blandit. ';
        DialogRenderer.render(screen, info, finishCallback);
    };
    
    document.getElementById('ButtonShortTextWithSpeaker').onclick = function () {
        var info = new DialogRenderingInfo();
        info.speaker = 'Latin dude';
        info.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        DialogRenderer.render(screen, info, finishCallback);
    };
    
    document.getElementById('ButtonLongTextWithSpeaker').onclick = function () {
        var info = new DialogRenderingInfo();
        info.speaker = 'Latin dude';
        info.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel massa non sapien tempor sollicitudin a vel mauris. Sed hendrerit quam ut elit efficitur, in aliquet nibh elementum. Vivamus eleifend tellus sed sem scelerisque maximus. Phasellus tincidunt velit ut dolor cursus tempor a accumsan tortor. Nam a pulvinar purus. Aliquam ornare odio nec purus porttitor, ac sodales odio feugiat. Maecenas non euismod diam. Nullam porttitor elit vel elit porttitor, vitae tincidunt dolor vehicula. In hac habitasse platea dictumst. Vivamus scelerisque tincidunt molestie. Proin mauris lacus, luctus a dapibus nec, luctus at purus. Donec congue turpis eget est facilisis, sit amet euismod lacus interdum. Vivamus dui velit, accumsan a ipsum quis, sodales dignissim nisi. Quisque sed justo eu ex molestie semper. Praesent gravida mattis libero in blandit. ';
        DialogRenderer.render(screen, info, finishCallback);
    };
});

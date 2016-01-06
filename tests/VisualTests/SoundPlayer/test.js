;require([
    '/src/AudioPlayers/SoundPlayers/SoundPlayingInfo.js',
    '/src/AudioPlayers/SoundPlayers/SoundPlayer.js'
], function (SoundPlayingInfo, SoundPlayer) {
    'use strict';
    
    var soundPlayer = new SoundPlayer();
    
    document.body.className = 'loading';
    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on('complete', function () {
        document.body.className = '';
    });
    queue.loadManifest([
        { id: 'sound-cash-register', src: 'sound-cash-register.wav' },
        { id: 'sound-phone', src: 'sound-phone.wav' },
        { id: 'sound-thunder', src: 'sound-thunder.mp3' }
    ]);
    
    document.getElementById('PlayButton').onclick = function () {
        var selectedRadio = document.querySelector('input[name="sound"]:checked');
        if (selectedRadio) {
            var info = new SoundPlayingInfo();
            info.sound = selectedRadio.value;
            soundPlayer.play(info);
        }
    };
});

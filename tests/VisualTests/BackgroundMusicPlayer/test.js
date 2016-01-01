;require([
    '/src/AudioPlayers/BackgroundMusicPlayers/BackgroundMusicPlayingInfo.js',
    '/src/AudioPlayers/BackgroundMusicPlayers/BackgroundMusicPlayer.js'
], function (BackgroundMusicPlayingInfo, BackgroundMusicPlayer) {
    'use strict';
    
    var backgroundMusicPlayer = new BackgroundMusicPlayer();
    
    document.body.className = 'loading';
    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on('complete', function () {
        document.body.className = '';
    });
    queue.loadManifest([
        { id: 'music1', src: 'music1.mp3' },
        { id: 'music2', src: 'music2.mp3' },
        { id: 'music3', src: 'music3.mp3' }
    ]);
    
    document.getElementById('PlayButton').onclick = function () {
        var selectedMusicRadio = document.querySelector('input[name="music"]:checked');
        if (selectedMusicRadio) {
            var info = new BackgroundMusicPlayingInfo();
            info.music = selectedMusicRadio.value;
            backgroundMusicPlayer.play(info);
        }
    };
    
    document.getElementById('StopButton').onclick = function () {
        backgroundMusicPlayer.stop();
    };
});

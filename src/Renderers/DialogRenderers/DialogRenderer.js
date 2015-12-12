;define([], function () {
    'use strict';

    return {
        initialize: function (screen) {
            var rect = new createjs.Shape();
            rect.graphics.beginFill('blue').drawRect(0, screen.height - 200, screen.width, 200);
            screen.stage.addChild(rect);
            
            var speaker = new createjs.Text('', '30px Arial', 'white');
            speaker.name = 'DialogRenderer.Speaker';
            speaker.x = 60;
            speaker.y = screen.height - 200 + 20;
            screen.stage.addChild(speaker);
            
            var text = new createjs.Text('', '30px Arial', 'white');
            text.name = 'DialogRenderer.Text';
            text.x = 20;
            text.y = speaker.y + 40;
            text.lineWidth = screen.width - 40;
            text.lineHeight = 40;
            screen.stage.addChild(text);
            
            screen.stage.update();
        },
        
        render: function (screen, dialogInfo, callback) {
            var speaker = screen.stage.getChildByName('DialogRenderer.Speaker');
            if (dialogInfo.speaker) {
                speaker.text = dialogInfo.speaker;
            } else {
                speaker.text = '';
            }
            
            var text = screen.stage.getChildByName('DialogRenderer.Text');
            text.callback = callback;
            text.words = dialogInfo.text.split(' ');
            text.wordIncrement = 0;
            this.scrollText(text);
            
            screen.stage.update();
        },
        
        scrollText: function (text) {
            var textMaxHeight = text.lineHeight * 3;
            
            text.text = '';
            
            do {
                text.text += text.words[text.wordIncrement++] + ' ';
            } while (text.wordIncrement < text.words.length && text.getMeasuredHeight() <= textMaxHeight);
            
            if (text.getMeasuredHeight() > textMaxHeight) {
                text.text = text.text.substring(text.text.lastIndexOf(text.words[--text.wordIncrement]), 0);
            }
        },
        
        tick: function (screen) {
            var text = screen.stage.getChildByName('DialogRenderer.Text');
            
            if (text.wordIncrement === text.words.length) {
                if (text.callback) {
                    text.callback();
                }
            } else {
                this.scrollText(text);
                screen.stage.update();
            }
        }
    };
});

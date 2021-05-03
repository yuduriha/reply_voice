"use strict";
var FILE_LIST = [
    "./sound/sound001.wav",
    "./sound/sound002.wav",
    "./sound/sound003.wav",
    "./sound/sound004.wav",
    "./sound/sound005.wav",
    "./sound/sound006.wav",
];
var audioList = [];
window.onload = function () {
    FILE_LIST.forEach(function (file) {
        var audio = new Audio();
        audio.preload = "auto";
        audio.src = file;
        audio.load();
        audioList.push(audio);
    });
};
function onReplyButton(index) {
    audioList.forEach(function (audio) {
        audio.pause();
        audio.currentTime = 0;
    });
    audioList[index].play();
}

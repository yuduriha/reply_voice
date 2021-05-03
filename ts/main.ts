var FILE_LIST = [
	"./sound/sound001.wav",
	"./sound/sound002.wav",
	"./sound/sound003.wav",
	"./sound/sound004.wav",
	"./sound/sound005.wav",
	"./sound/sound006.wav",
];
var audioList: Array<HTMLAudioElement> = [];
window.onload = () => {
	FILE_LIST.forEach((file: string) => {
		let audio = new Audio();
		audio.preload = "auto";
		audio.src = file;
		audio.load();
		audioList.push(audio);
	});
}

function onReplyButton(index: number) : void {
	audioList.forEach((audio) => {
		audio.pause();
		audio.currentTime = 0;
	});
	audioList[index].play();
}

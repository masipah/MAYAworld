function playPause() {
	var myVideo = document.getElementsByTagName('video')[0];
	if (myVideo.paused)
		myVideo.play();
	else
		myVideo.pause();
}
let video;


window.addEventListener("load", function() {
	
	video =  document.querySelector("#player1");
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;



});



document.querySelector("#play").addEventListener("click", function() {
 	
		video.play();
		console.log("PLAY BUTTON ACTIVATED");
		document.querySelector("#volume").innerHTML = (video.volume*100)+ "%";
	

});


document.querySelector("#pause").addEventListener("click", function(){

	console.log("PAUSE BUTTON ACTIVATED");
	video.pause();


})

document.querySelector("#mute").addEventListener("click", function(){

	if (video.muted){

		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		

	}else {

		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";

	}

})

document.querySelector("#slower").addEventListener("click" , function(){

	video.playbackRate = video.playbackRate * .9;

	console.log(video.playbackRate);

})

document.querySelector("#faster").addEventListener("click" , function(){

	video.playbackRate = video.playbackRate * 1.1;


})

document.querySelector("#skip").addEventListener("click" , function(){

	skippedTime = video.currentTime + 10;
	console.log(video.currentTime);

	if(skippedTime > video.duration){

		video.currentTime = 0;

	}else{

		video.currentTime += 10;

	}

})

document.querySelector("#slider").addEventListener("change" , function(){

	video.volume = document.querySelector("#slider").value * .01;
	document.querySelector("#volume").innerHTML = (video.volume * 100) + '%';

})


document.querySelector("#vintage").addEventListener("click" , function(){

	video.classList = "oldSchool";

})

document.querySelector("#orig").addEventListener("click" , function(){

	video.classList = "video";

})


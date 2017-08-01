

//variables
var wins = 0;
var losses = 0;
var score = 0;

//random number generator 19-120
function updateRandomNumber() {
numberguess = (Math.floor(Math.random() * ((120-19)+1))) + 19;
$("#scoreToGuess").html("<div>" + numberguess + "</div>");
};

//update total score
updateRandomNumber();
//update score
function updateScore () {
$("#totalScore").html("Your total score is: " + score)

}


//random number generator for images
$(document).ready(function() {
function updateImageNumber() {
	redNumber = (Math.floor(Math.random() * (12)+1));

	blueNumber = (Math.floor(Math.random() * (12)+1));

	greenNumber = (Math.floor(Math.random() * (12)+1));

	purpleNumber = (Math.floor(Math.random() * (12)+1));
};
updateImageNumber();

//click and update score
$(".imagesRed").on("click", function onClickButtonRed() {
score =redNumber+ score;
updateScore();
if (score === numberguess) {
		wins++;
		$("#wins").html("Wins: " + wins);
		reset();
	}

	else if (score > numberguess){
		losses++;
		$("#losses").html("losses: " + losses);
		reset();
	}
});
$(".imagesBlue").on("click", function onClickButtonBlue() {
score =blueNumber+ score;
if (score === numberguess) {
		wins++;
		$("#wins").html("Wins: " + wins);
		reset();
	}

	else if (score > numberguess){
		losses++;
		$("#losses").html("losses: " + losses);
		reset();
	}
updateScore();
});
$(".imagesGreen").on("click", function onClickButtonGreen() {
score =greenNumber+ score;
if (score === numberguess) {
		wins++;
		$("#wins").html("Wins: " + wins);
		reset();
	}

	else if (score > numberguess){
		losses++;
		$("#losses").html("losses: " + losses);
		reset();
	}
updateScore();
});
$(".imagesPurple").on("click", function onClickButtonPurple() {
score =purpleNumber+ score;
if (score === numberguess) {
		wins++;
		$("#wins").html("Wins: " + wins);
		reset();
	}

	else if (score > numberguess){
		losses++;
		$("#losses").html("losses: " + losses);
		reset();
	}
updateScore();
}); 
});

//reset
function reset() {
score = 0;
updateRandomNumber();
updateScore();
redNumber = (Math.floor(Math.random() * (12)+1));

	blueNumber = (Math.floor(Math.random() * (12)+1));

	greenNumber = (Math.floor(Math.random() * (12)+1));

	purpleNumber = (Math.floor(Math.random() * (12)+1));
};











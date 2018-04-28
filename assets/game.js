var random_result; //this is the value you need to match with your total
var win = 0; // win
var lost = 0; // lost
var previous = 0; // this is the total value that adding in your list
//game starts here with function
var startGame = function () {
	//clearing out donuts value
	$(".crystals").empty();
	//donuts images
	var images = ["assets/images/1.png", "assets/images/2.png", "assets/images/3.png", "assets/images/4.png", "assets/images/6.png", "assets/images/7.png", "assets/images/5.png", "assets/images/8.png"];
	//random result value
	random_result = Math.floor(Math.random()*70)+30;
	//adding that value on html
	$("#result").html('Buyer wants to pay $' + random_result);
	//creating 4 div with random value in it
	for (var i=0; i<4; i++){
		var random = Math.floor(Math.random()*11)+1; //less then 12
		var crystal = $("<div>"); //adding divs
			//adding css and random value that generate into the div
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
//			crystal.html(random); //showing actual value in it
		//images with random generator
		for(var j=0; j<images.length; j++){
//		var randomImages = images[Math.floor(Math.random()*images.length)];
		var k = Math.floor(Math.random()*7)+1; //got 8 total images that randomly plass into the placeholder
	}
		//images put into the div html and making sure size is adjustable with all devices
		// here k k k k are four random numbers jenerator
		crystal.html("<img src=" + images[k, k, k, k] + " width='135px'>");
		$(".crystals").append(crystal);
	}
	//showing value of the total in html
	$("#previous").html('$'+previous);
};
//once game restart you need to zero out
startGame();
//while you click donuts you get value
$(document).on('click', ".crystal", function() {
	//using parseInt to make sure getting right value
	var num = parseInt($(this).attr('data-random'));
	//adding value together by +=
	previous+=num;	
	//again adding value at html
	$("#previous").html('$'+previous);
	//if and else for win and lost
	if(previous>random_result)
		{lost++;
		 $(".lost").html('Your losses: '+lost);
		 previous=0; //make sure new game start with zero
		 startGame(); // game start over
	} else if(previous===random_result)
		{win++;
		 $(".win").html('Your wins: '+win);
		 previous=0;
		 startGame();
	}
});

//adding how to play game via alert
$(".question").click(function(){
    alert("First: you will be given a random number of money at the start of the game");
	alert("Second: there are four donuts below. by clicking on a donut you will sell a specific amount of donut and earn money to cash register");
    alert("Third: you win the game by matching your total score to random number, you lose the game if your total money number goes above the random number");
	alert("Forth: the value of each donut is hidden from you until you click on it");
    alert("Fifts: each time when the game starts, the game will change the values of each donut");
	alert("Let's Play!");
});
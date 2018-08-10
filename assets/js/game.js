/* 

Game Structure

1.	between user and computer
		- win
		- lost

2.	Computer set up
		1.	- random_result
				- let computer generate random number
				- this is the value you need to match with your total
		2.	- Donuts Setup with random data in it
			- adding for loop for 4 donuts
				- random
					- generating random number between 1 and 12 for donuts data
				- crystal <DIV>
					- generating 4 divs where donuts image gose
					- adding class
					- adding data
				- images
					- adding 8 images
				- k
					- generate random image in between 8
					- put them in crystal div
				- .crystals
					- append crystal one by one
					- make sure .crystals gets empty everytime once function start
	- run function

3.	User
		- num
			- when user clicks on any donut, save the value of that donut's random data number
		- previous
			- keep adding num clicks value in previous
		- #previous
			- put that into preview
		- if
			- previous value is greater then random_result
				- lost
					- lost ++
					- put that into preview
					- make previous value 0
					- restart game
		- else
			- previous is equal
				- win
					- win ++
					- put that into preview
					- make previous value 0
					- restart game


*/

//1

var win = 0;
var lost = 0;



//2

var previous = 0; // this is the total value that adding in your list


//2.1

var random_result;

var startGame = function() {

    $(".crystals").empty();

    random_result = Math.floor(Math.random() * 70) + 30;

    $("#result").html('Buyer wants to pay <span class="text-danger">$' + random_result + '</span>');

    //2.2

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 11) + 1; //value between 1 and 12
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        console.log(random);
        var images = ["assets/images/1.svg", "assets/images/2.svg", "assets/images/3.svg", "assets/images/4.svg", "assets/images/6.svg", "assets/images/7.svg", "assets/images/5.svg", "assets/images/8.svg"];

        for (var j = 0; j < images.length; j++) {
            var k = Math.floor(Math.random() * 7) + 1; //got 8 total images 
        }

        crystal.html("<img src=" + images[k] + " />");

        $(".crystals").append(crystal);

        $("#previous").html('$' + previous);
    }

};


startGame();

//3

$(document).on('click', ".crystal", function() {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html('$' + previous);

    if (previous > random_result) {
        lost++;
        $(".lost").html('Your losses: ' + lost);
        previous = 0;
        startGame();
    } else if (previous === random_result) {
        win++;
        $(".win").html('Your wins: ' + win);
        previous = 0;
        startGame();
    }
});


//4 - How To Play?

$(".question").click(function() {
    alert("First: you will be given a random number of money at the start of the game");
    alert("Second: there are four donuts below. by clicking on a donut you will sell a specific amount of donut and earn money to cash register");
    alert("Third: you win the game by matching your total score to random number, you lose the game if your total money number goes above the random number");
    alert("Forth: the value of each donut is hidden from you until you click on it");
    alert("Fifth: each time when the game starts, the game will change the values of each donut");
    alert("Let's Play!");
});
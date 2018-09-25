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
var randomValue = [];
console.log(randomValue);

//2

var previous = 0; // this is the total value that adding in your list


//2.1

var random_result;

var startGame = function() {

    $(".crystals").empty();

    random_result = Math.floor(Math.random() * 70) + 30;

    $("#result").html('Buyer wants to pay <span class="text-danger">$' + random_result + '</span>');

	//2.2
	
	//randomly generate number between 1 and 8 but never reapeat again and store in ranNums array.
	var nums = [0,1,2,3,4,5,6,7],
		ranNums = [],
		l = nums.length,
		m= 0;

	while (l--) {
		m = Math.floor(Math.random() * (l+1));
		ranNums.push(nums[m]);
		nums.splice(m,1);
	}
	console.log(ranNums);

    for (var i = 0; i < 4; i++) {
		var random = Math.floor(Math.random() * 11) + 1; //value between 1 and 12
		randomValue.push(random);
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
		});
		
        var images = ["assets/images/1.svg", "assets/images/2.svg", "assets/images/3.svg", "assets/images/4.svg", "assets/images/6.svg", "assets/images/7.svg", "assets/images/5.svg", "assets/images/8.svg"];

		var k = [ranNums[1],ranNums[3],ranNums[5],ranNums[7]]
		console.log("k " + k);
		
		crystal.html("<img src=" + images[k[i]] + " />");
		$(".crystals").append(crystal);

		//easy mode set up
			// var randomValue2;
			// randomValue2=randomValue[i];
			// $(".crystals").append(randomValue2);
			// console.log(randomValue2);
        
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
		randomValue = [];
		startGame();
    } else if (previous === random_result) {
        win++;
        $(".win").html('Your wins: ' + win);
		previous = 0;
		randomValue = [];
        startGame();
    }
});


//4 - How To Play?

//5 - Easy mode

//6 - Hard mode
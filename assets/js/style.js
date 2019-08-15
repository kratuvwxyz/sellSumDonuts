//ground zero
let wins = 0;
let loss = 0;
let totalSell = 0;
let compGenNum = 0;

$(document).ready(function() {

  //function reset
  function reset() {
    totalSell = 0;
    $(donutDiv).empty();
    $(userDiv).empty();
    numberGenrator();
  }

  //create layouts
  //#game
        //one gameDiv
            //onedotone compGenNumber
                //onedotonedotone compGenSent
        //two donutDiv
            //twodotone donut
                //-donutSplice
                //donutIn
        //three userDiv

//#game
  //one
  let gameDiv = $("<div>");
  $(gameDiv).addClass("one gamediv container-fluid p-1 bg-dark ");
  $("#game").append(gameDiv);

    //onedotone main computer generated number div
    let compGenNumber = $("<div>");
    $(compGenNumber).addClass(
        "onedotone compNum jumbotron text-center m-2 bg-light text-info display-4"
    );
    $(gameDiv).append(compGenNumber);

  //two create div for adding donuts
  let donutDiv = $("<div>");
  $(donutDiv).addClass("two donutDiv row p-2 bg-dark m-auto");
  $("#game").append(donutDiv);
  
  //three create div for user paying
  let userDiv = $("<div>");
  $(userDiv).addClass("three userDiv jumbotron text-center m-2 bg-info");
  $("#game").append(userDiv);

  //let's create a game
  //title
  let title = "Sell Some Donuts at the Price of $";
  //computer generate reandom number
  compGenNum = Math.floor(Math.random() * 18) + 30;
  console.log("compGenNum: " + compGenNum);
  //onedotonedotone
  let compGenSent = title + compGenNum;
  $(compGenNumber).html(compGenSent);
  //
  //you need an array with price to select
  let price = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //
  let donutArray = [];
  console.log(donutArray);
  //
  //create 4 different div donut boxes
  function numberGenrator() {
    for (let i = 0; i < 4; i++) {
      //main donut div
      let donut = $("<div>");
      $(donut).addClass("twodotone donut p-1 m-1");
      //clickable donut
      let donutIn = $("<div>");
      $(donutIn).addClass("p-5 bg-danger m-2");
      //append
      $(donutDiv).append(donut);
      $(donut).append(donutIn);
      //generate value per donut that is not reapeating again -- using splice
      let randomIndex = Math.floor(Math.random() * price.length);
      let donutSplice = parseInt(price[randomIndex]);
      price.splice(randomIndex, 1)[0];
      //add that value as an attribute
      $(donut).attr("value", donutSplice);
      $(donutIn).text(donutSplice);
      donutArray.push(donutSplice);
      console.log(donutArray);
    }
  }

  if(wins === 0 && loss === 0){
    numberGenrator();
  } 
  //click donut function
  $(".donut").on("click", function() {
    console.log('it clicked');
    //x has the value you click on the donut
    let x = parseInt($(this).attr("value"));
    totalSell += x;
    $(userDiv)
      .text(totalSell)
      .addClass("display-4");
    //if and else game
    console.log(compGenNum);
    console.log(totalSell);
    if (totalSell === compGenNum) {
      wins++;
      console.log(wins);
      reset();
    } else if (totalSell > compGenNum) {
      loss++;
      console.log(loss);
      reset();
    }
  });

  //end of document ready
});

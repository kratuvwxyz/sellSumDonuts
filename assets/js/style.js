//ground zero
let wins = 0;
let loss = 0;
let totalSell = 0;
let compGenNum = 0;

//function reset
function reset(){
    totalSell = 0;
}

$(document).ready(function(){



//create layouts
    //#game
        //gameDiv
            //compGenNumber
                //compGenSent
            //donutDiv
                //donut
                    //-donutSplice
                    //donutIn
            //userDiv
    //game div
    let gameDiv = $("<div>");
    $(gameDiv).addClass('gamediv container-fluid p-1 bg-dark ');
    $('#game').append(gameDiv);
    //main computer generated number div
    let compGenNumber = $("<div>");
    $(compGenNumber).addClass('compNum jumbotron text-center m-2 bg-light text-info display-4');
    $(gameDiv).append(compGenNumber);
    //create div for adding donuts
    let donutDiv = $("<div>");
    $(donutDiv).addClass('donutDiv row p-2 bg-dark m-auto');
    $('#game').append(donutDiv);
    //create div for user paying
    let userDiv = $("<div>");
    $(userDiv).addClass('userDiv jumbotron text-center m-2 bg-info');
    $('#game').append(userDiv);

//let's create a game
    //computer generate reandom number
    let title = "Sell Some Donuts at the Price of $";
    compGenNum = (Math.floor(Math.random() * 18) + 30);
    console.log('compGenNum: '+compGenNum);
    let compGenSent = title + compGenNum;
    $(compGenNumber).html(compGenSent);
    //you need an array with price to select
    let price = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let donutArray = [];
    console.log(donutArray);
    //create 4 different div donut boxes
        for (let i=0; i<4; i++){
            //main donut div
            let donut = $("<div>");
            $(donut).addClass('donut p-1 m-1');
            //clickable donut
            let donutIn = $("<div>");
            $(donutIn).addClass('p-5 bg-danger m-2');
            //append
            $(donutDiv).append(donut);
            $(donut).append(donutIn);
            //generate value per donut that is not reapeating again -- using splice
            let randomIndex = Math.floor(Math.random() * price.length);
            let donutSplice = parseInt(price[randomIndex]);
            price.splice(randomIndex, 1)[0];
            //add that value as an attribute
            $(donut).attr('value', donutSplice);
            $(donutIn).text(donutSplice);  
            donutArray.push(donutSplice);
            console.log(donutArray);          
        }

    //click donut function
    $('.donut').on('click', function(){
        //x has the value you click on the donut
        let x = parseInt($(this).attr('value'));
        totalSell += x;
        $(userDiv).text(totalSell).addClass('display-4');
        //if and else game
        console.log(compGenNum);
        console.log(totalSell);
        if(totalSell===compGenNum){
            wins++;
            console.log(wins);
            reset();
        } else if (totalSell>compGenNum){
            loss++;
            console.log(loss);
            reset();
        }
    });



//end of document ready
});


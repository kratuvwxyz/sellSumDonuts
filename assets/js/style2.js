//#div
    //Instruction div
        //paragraph append
        //let's play button append
        //button to toggle instruction
        
    //heading div
        //generate number to match div

    //donuts div
        //container that holds number

    //result div
        //when click donut show the total

    //score div
        //win
        //loss
        //game played
        //game mode

let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;

//l = computer generate reandom number
l = Math.floor(Math.random() * 18) + 30;
console.log(l);

//run JQuery
$(document).ready(function(){
    
    //a = instruction div
    a = $('<div></div>').addClass('p-5 m-auto bg-dark').appendTo('#game');

    //b = ul regarding instruction
    b = $('<ul></ul>').appendTo(a);
    b.append("<li>Let's sell some donuts.</li>");
    b.append('<li>This memory game help you to improve your math.</li>');
    b.append('<li>Easy to play and fun to compete yourself!</li>');
    b.append("<li>First, buyer wants to buy some donuts with some amount of money! (Remember this change every game!)</li>");
    b.append("<li>Second, you see four donuts that carries different prices. Once you click them, you sell that donut with that price.</li>");
    b.append("<li>Match exact amount buyer wants to pay with selling your donuts to win this game.</li>");
    b.addClass('p-3 text-light border border-light');
    b.children().addClass('p-2 text-monospace');

    //c = play button
    c = $('<button></button>').appendTo(a).text('NOW PLAY').addClass('btn btn-light').click(function(){
        z();
        b.hide('slow');
        c.hide('slow');
        a.hide('slow');
    });

    //x = close button when instruction visible
    x = $('<button></button>').appendTo(a).text('CLOSE');
    //hide it until they click instruction
    x.hide();
    
    //function z game structure
    function z(){
        //d = header for navigation
        d = $('<header></header>').addClass('bg-light p-5').appendTo('#game');  
            //y = show instruction button
            y = $('<button></button>').appendTo(d).text('INSTRUCTION').addClass('btn btn-info mr-3').click(function(){
                b.show('slow');
                a.show('slow');
                //x = close instruction
                x.show('slow').addClass('btn btn-danger').click(function(){
                    x.hide('slow');
                    b.hide('slow');
                    a.hide('slow');
                });
            });

            //game modes
            e = $('<span></span>').appendTo(d).text('Game Modes: ');
                //f = low button
                f = $('<button></button>').appendTo(d).text('LOW').addClass('btn btn-outline-success ml-2').click(function(){console.log('low button clicked')});
                //g = midium button
                g = $('<button></button>').appendTo(d).text('MIDIUM').addClass('btn btn-outline-warning ml-2').click(function(){console.log('midum button clicked')});
                //h = low button
                h = $('<button></button>').appendTo(d).text('HIGH').addClass('btn btn-outline-danger ml-2').click(function(){console.log('high button clicked')});

        //j = game div
        j = $('<section></section>').addClass('bg-secondary w-100 p-5').appendTo('#game'); 
            //k = title with l = computer randomly generate number (buyer's price)
            k = $('<p></p>').text("Sell Donuts at the Price of $"+l).appendTo(j).addClass('text-center display-4 text-light');

        
            

        
    //game structure ends here
    }

//document ready ends here
});

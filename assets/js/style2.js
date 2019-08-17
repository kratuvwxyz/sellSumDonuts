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

let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk, ll, mm, nn, oo, pp, qq, rr, ss, tt, uu, vv, ww, xx, yy, zz;

//ll = computer generate reandom number
ll = Math.floor(Math.random() * 18) + 30;
console.log(ll);

//r = total of your sell
r = 0;
console.log(r);

t = [];
console.log(t);


//score
ii = 0; //wins
jj = 0; //loss


//run JQuery
$(document).ready(function(){

    //#game adding background color
    $('#game').addClass('bg-light');
    
    //a = instruction div
    a = $('<div></div>').addClass('p-5 m-auto bg-dark').appendTo('#game');

    //b = ul regarding instruction
    b = $('<ul></ul>').appendTo(a).append("<li>Let's sell some donuts.</li>").append('<li>This memory game help you to improve your math.</li>').append('<li>Easy to play and fun to compete yourself!</li>').append("<li>First, buyer wants to buy some donuts with some amount of money! (Remember this change every game!)</li>").append("<li>Second, you see four donuts that carries different prices. Once you click them, you sell that donut with that price.</li>").append("<li>Match exact amount buyer wants to pay with selling your donuts to win this game.</li>").addClass('p-3 text-light border border-light').children().addClass('p-2 text-monospace');

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
                f = $('<button></button>').appendTo(d).text('EASY').addClass('btn btn-outline-success mx-2 my-3').click(function(){console.log('low button clicked')});
                //g = midium button
                g = $('<button></button>').appendTo(d).text('NORMAL').addClass('btn btn-outline-warning mx-2 my-3').click(function(){console.log('midum button clicked')});
                //h = low button
                h = $('<button></button>').appendTo(d).text('EXPERT').addClass('btn btn-outline-danger mx-2 my-3').click(function(){console.log('high button clicked')});

            //wins and losses

            //wins
            let wins = $('<button></button>').addClass('btn btn-secondary my-3 mx-2').text('WINS ').appendTo(d);
            //result = u
            let uWins = $('<span></span>').addClass('wins badge badge-light ml-1').text(ii).appendTo(wins);//console.log(u);

            //loss = v
            let loss = $('<button></button>').addClass('btn btn-secondary my-3 mx-2').text('LOSS ').appendTo(d);
            //result = w
            let uLoss = $('<span></span>').addClass('loss badge badge-light ml-1').text(jj).appendTo(loss);//console.log(w);

        //game start
        function startGame(){

            //this div reset to make things zero out
            oo = $('<div></div>').addClass('gameReset').appendTo('#game');

            //--top

            //j = game div
            j = $('<section></section>').addClass('bg-secondary w-100 p-5').appendTo(oo);

                //k = title with l = computer randomly generate number (buyer's price)
                k = $('<p></p>').text("Sell Donuts at the Price of $"+ll).appendTo(j).addClass('text-center text-light');

            //--middle top
            //l = donuts div
            l = $('<section></section>').addClass('container p-5').appendTo(oo);
        
                //m = creating row and make sure it refresh
                m = $('<div></div>').addClass('row').appendTo(l);

                //n = you need an array with price to select
                n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                //nc = bootstrap background colors
                nc = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];

                //for loop
                for(i=0;i<4;i++){
                    
                    //p = generate value per donut that is not reapeating again -- using splice
                    p = Math.floor(Math.random() * n.length);
                    //pc = colors
                    pc = Math.floor(Math.random() * nc.length);
                    
                    //q = splice value
                    q = parseInt(n[p]);
                    console.log(q);
                    //qc = random color
                    qc = nc[pc];
                    console.log(qc);

                    //taking out "q" value from "n" so it never repeats
                    n.splice(p, 1)[0];
                    //remove color that alredy used from nc
                    nc.splice(pc, 1)[0];

                    //o = creating a individual div for 4 donuts
                    o = $('<button></button>').addClass('donut btn btn-lg-circle p-5 mx-auto btn-'+qc).attr('value', q).text(q).appendTo(m);
                    console.log(o);

                }

                //--middle bottom
                //kk = what is the solution you get when you click the buttons
                kk = $('<section></section>').addClass('bg-secondary w-100 p-5 text-center text-light').appendTo(oo).text('Your total sell is $'+r);
                
        }
        //calling this frunction for the first time if wins or losses are zero
        if(ii===0 && jj===0){
            startGame();    
        }

        //when you click the ".donut" class button
        $(document).on('click', '.donut', function(){
            console.log('you just clicked');
            
            //zz = value you store when you click the button
            zz = parseInt($(this).attr("value"));
            console.log(zz);
            

            //r = add that value to the global "r"
            r+=zz;
            console.log(r);
            t.push(r);
            console.log(t);
            console.log(t.length);
            console.log(t.length-1);
            console.log(t[t.length-1]);
            yy = t[t.length-1];

            //kk = game div
            kk.text('Your total sell is $'+yy);

            //match this value with buyers amount
            console.log(r); 
            console.log(ll); 
            if(yy>ll){
                jj++;
                console.log('you loss');
                console.log('loss:' + jj);
                console.log('we need to reset this');
                uLoss.text(jj);
                //reset
                r = 0;
                console.log(r);
                t = [];
                ll = Math.floor(Math.random() * 18) + 30;
                console.log(ll);
                $('.gameReset').empty();
                startGame();
            } else if (yy===ll) {
                ii++;
                console.log('you win');
                console.log('win:' + ii);
                console.log('we need to reset this');
                uWins.text(ii);
                //reset
                r = 0;
                console.log(r);
                t = [];
                console.log(t);
                ll = Math.floor(Math.random() * 18) + 30;
                console.log(ll);
                $('.gameReset').empty();
                startGame();
            }
        });

        // //s = total section to visible value
        // s = $('<section></section>').appendTo('#game').addClass('bg-secondary text-light');
        // //when you click the donut
        // $('.donut').click(function test(){
        //     //when this button click add value into "r"
        //     r += parseInt($(this).attr("value"));
        //     console.log(r);
        //     t.push(r);
        //     console.log(t);
            
        //     //aa = show the section
        //     aa = $('<div></div>').addClass('display-4').text('Your total sell is $'+ r).appendTo(s);
        // });

        

        

        
    //game structure ends here
    }

//document ready ends here
});



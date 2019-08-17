let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk, ll, mm, nn, oo, pp, qq, rr, ss, tt, uu, vv, ww, xx, yy, zz;

//computer generate random number = a
a = 0;
function aaa(x, y){
    a = Math.floor(Math.random()*x)+y;//console.log(a);
}
aaa(18, 30);
//console.log(a);
//user wins = b or losses = c
b = 0;//console.log(b); wins
c = 0;//console.log(c); loss
//needs to compair total sell with "a" = d
d = 0;//console.log(d);
//manage how many clicks it takes to get an answer to find an average = e
e = [];console.log(e);
//run jQuery
$(document).ready(function(){
    //f = instruction div
    f = $('<div></div>').addClass('p-5 m-auto bg-dark').appendTo('#game');//console.log(f);
    //title
    tt = $('<h1></h1>').addClass('text-light display4').text("Let's Sell Some Donuts!").appendTo(f);
    //uu = image
    uu = $('<div></div>').html('<img src="assets/images/heroImgLg.jpg" width="100%"/>').appendTo(f);
    //g = ul regarding instruction
    g = $('<ul></ul>').appendTo(f).append("<li>Let's sell some donuts.</li>").append('<li>This memory game helps  you to improve your math.</li>').append('<li>Easy to play and fun to compete yourself!</li>').append("<li>First, buyer wants to buy some donuts with some amount of money! (Remember this change every game!)</li>").append("<li>Second, you see four donuts that carries different prices. Once you click them, you sell that donut with that price.</li>").append("<li>Match exact amount buyer wants to pay with selling your donuts to win this game.</li>").addClass('p-3 border border-light list-group').children().addClass('p-2 text-monospace list-group-item');//console.log(g);
    //h = play button
    h = $('<button></button>').appendTo(f).text('NOW PLAY').addClass('btn btn-light m-3').click(function(){
        g.hide();
        h.hide();
        f.hide();
        m.show();
    });//console.log(h);
    //l = close button when instruction visible
    l = $('<button></button>').appendTo(f).text('CLOSE').addClass('btn btn-danger m-3').click(function(){
        g.hide();
        l.hide();
        f.hide();
    }).hide();
    //game div = m
    m = $('<div></div>').addClass('container-fluid').appendTo('#game').hide();
    //game structure = m
        //header = n
            //instruction = o
            //game modes = button group
                //easy
                //normal
                //expert
            //wins
            //loss
            //average
        //buy/sell section
            //what buyer want
        //**//> = < signs pop up
            //what seller's total
        //donuts to clicks
            //for loop > 4
                //value to sell
        //footer
            //text
    //--**--//
    //--header = n
    n = $('<header></header>').addClass('row bg-light p-3').appendTo(m);
    //instruction button = o
    o = $('<button></button>').appendTo(n).text('INSTRUCTION').addClass('btn btn-info m-3').click(function(){
        tt.hide();
        uu.hide();
        f.show();
        g.show();
        l.show();
    });
    //game modes = p
    p = $('<div></div>').addClass('btn-group m-3').appendTo(n);
    //buttons with easy, normal and expert modes
    q = $('<button></button>').addClass('btn btn-success').text('EASY').appendTo(p).click(function(){//console.log('easy button clicked');
    });//easy
    r = $('<button></button>').addClass('btn btn-warning active').text('NORMAL').appendTo(p).click(function(){//console.log('normal button clicked');
    });//normal
    s = $('<button></button>').addClass('btn btn-danger').text('EXPERT').appendTo(p).click(function(){//console.log('expert button clicked');
    });//expert
    //wins = t
    t = $('<button></button>').addClass('btn btn-secondary m-3').text('WINS ').appendTo(n);
        //result = u
        u = $('<span></span>').addClass('wins badge badge-light ml-1').text(b).appendTo(t);//console.log(u);
    //loss = v
    v = $('<button></button>').addClass('btn btn-secondary m-3').text('LOSS ').appendTo(n);
        //result = w
        w = $('<span></span>').addClass('loss badge badge-light ml-1').text(c).appendTo(v);//console.log(w);
    //average = x
    x = $('<button></button>').addClass('btn btn-secondary m-3').text('AVERAGE ').appendTo(n);
        //result = y
        y = $('<span></span>').addClass('avrg badge badge-light ml-1').text('0').appendTo(x);//console.log(y);
    //--**--//  
    //--buy and sell section = aa
    aa = $('<section></section>').addClass('row p-3 m-1').appendTo(m);
    //buy & Sell = bb
    bb = $('<h1></h1>').addClass('p-3 m-1').text('Buyer wants to pay $'+a+'. You are selling $'+d+'.').appendTo(aa);
    //--**--//
    //--create donuts to sell = cc
    cc = $('<div></div>').addClass('row p-1 m-1').appendTo(m);
    //start game = dd
    let dd = function() {
        //empty div before fill it up
        if(b!==0 || c!==0){
            cc.empty();    
        }
        //generating number between 18 and 48
        aaa(18, 30);
        //console.log(a);
        //ee = you need an array with price to select
        ee = [1,2,3,4,5,6,7,8,9];//console.log(ee);
		gg = [];//console.log(gg);
		kk = ee.length;//console.log(kk);
		ii = 0;//console.log(ii);
        while (kk--) {
            ii = Math.floor(Math.random() * (kk+1));//console.log(ii);
            gg.push(ee[ii]);//console.log(gg);
            ee.splice(ii,1);//console.log(ee);
            //console.log(ii);
        }
        //ww = this is for an image
        ww = [1,2,3,4,5,6,7,8];//console.log(ww);
		xx = [];//console.log(xx);
		yy = ww.length;//console.log(yy);
		zz = 0;//console.log(zz);
        while (yy--) {
            zz = Math.floor(Math.random() * (yy+1));//console.log(zz);
            xx.push(ww[zz]);//console.log(xx);
            ww.splice(zz,1);//console.log(ww);
            //console.log(zz);
        }

        //for loop
        for(i = 0; i < 4; i++){
            oo = $('<div></div>').addClass('button col-6 col-sm-3 p-2 mx-auto my-2').attr('value', gg[i]).html('<img src="assets/images/'+xx[i]+'.svg" />').appendTo(cc);
        }

    }
    //return function
    dd();
    //when clicking donuts 
    $(document).on('click', '.button', function(){
        //pp = take value out of the donut
        pp = parseInt($(this).attr('value'));//console.log(pp);
        //add this value to "d"
        d += pp;//console.log(d);
        e.push(d);console.log(e);
        bb.text('Buyer wants to pay $'+a+'. You are selling $'+d+'.');
        //if d > a => loss else d = a => win
        if(d>a){
            c++;//loss
            w.text(c);
            //formula
            vv = Math.floor(e.length/(b+c));
            y.text(vv);
            //reset
            d = 0;
            dd();
        } else if(d===a){
            b++;//win
            u.text(b);
            //formula
            vv = Math.floor(e.length/(b+c));
            y.text(vv);
            //reset
            d = 0;
            dd();
        }
    });
//document ready ends here
});

        // //ff = bootstrap background colors
        // ff = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];//console.log(ff);
        // ll = [];//console.log(ll);
        // mm = ff.length;//console.log(mm);
        // nn = 0;//console.log(nn);
        // while(mm--){
        //     nn = Math.floor(Math.random() * (mm+1));//console.log(nn);
        //     ll.push(ff[nn]);//console.log(ll);
        //     ff.splice(nn,1);//console.log(ff);
        //     //console.log(nn);
        // }



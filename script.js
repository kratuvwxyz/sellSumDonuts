/* Functions */

// randomly generate number
function mathRandom(t, e) {
  return Math.floor(Math.random() * t) + e;
}
// randomly update an array
function mathArrayRandom(t, e) {
  let c = t.length;
  let a = t;
  let b = [];
  for (let i = 0; i < c; i++) {
    let c = a[mathRandom(a.length, e)];
    b.push(c);
    a.splice(a.indexOf(c), 1);
  }
  return b;
}
// win and loss
let winPoint = 0;
let lossPoint = 0;
// starting donut selling prices
let kk = 0,
  aa = 0;

/* Structure */

dom("<div>", "#game", null, "bg-dark pt-2 pb-5 mainHeader text-center lh-lg");
// title
dom("<h1>", ".mainHeader", "Let's Sell Sum Donuts!", "text-light fs-1 ms-3");
// hero image
dom("<div>", ".mainHeader", null, "heroImage");
dom("<img>", ".heroImage", null, null, null, "src", "./images/heroImgLg.jpg", "width", "100%");
// unorder list-group
dom("<ul>", ".mainHeader", null, "p-3 border border-light list-group ulInfo");
dom("<li>", ".ulInfo", "Let's sell some donuts.", "p-2 text-monospace list-group-item");
dom("<li>", ".ulInfo", "This memory game helps  you to improve your math.", "p-2 text-monospace list-group-item");
dom("<li>", ".ulInfo", "Easy to play and fun to compete yourself!", "p-2 text-monospace list-group-item");
dom("<li>", ".ulInfo", "First, buyer wants to buy some donuts with some amount of money! (Remember this change every game!)", "p-2 text-monospace list-group-item");
dom("<li>", ".ulInfo", "Second, you see four donuts that carries different prices. Once you click them, you sell that donut with that price.", "p-2 text-monospace list-group-item");
dom("<li>", ".ulInfo", "Match exact amount buyer wants to pay with selling your donuts to win this game.", "p-2 text-monospace list-group-item");
// play button
dom("<button>", ".mainHeader", "PLAY NOW&#160; &#9654;", "btn btn-sm btn-light mt-5 mb-5 playNow", () => {
  $(".mainHeader").hide(), $(".gameStructure").removeClass("d-none"), startGame();
});
// close button
dom("<button>", ".mainHeader", "CLOSE&#160; &#9587;", "btn btn-sm btn-danger mt-3 mb-3 d-none clsBtn", () => {
  $(".mainHeader").hide(), $(".clsBtn").addClass("d-none");
});

/* game structure */
dom("<div>", "#game", null, "gameStructure d-none");
// navigation bar
dom("<nav>", ".gameStructure", null, "navbar  navbar-expand-lg navbar-light bg-light navbar-a p-2");
dom("<a>", ".navbar-a", "Do-Nuts", "navbar-brand ms-2", null, "href", "#!");
badgebtn(".navbar-a", "Profit ", "bg-light", "proBadge", winPoint, "wins bg-success");
badgebtn(".navbar-a", "Loss ", "bg-light", "losBadge", lossPoint, "loss bg-danger");
dom("<a>", ".navbar-a", "Instruction", "nav-link instructionbutton", () => {
  $(".mainHeader").show(), $(".playNow").addClass("d-none"), $(".heroImage").hide(), $(".clsBtn").removeClass("d-none");
});
// game container
dom("<div>", ".gameStructure", null, "gameContainer");
// modal
dom("<div>", ".gameStructure", null, "modalGame");
modal("lossModal", "You Lost Money and Donuts", "lossNewModal", ".modalGame");
modal("winModal", "You Sold Exactly!", "winNewModal", ".modalGame");

startGame = () => {
  $(".gameContainer").empty();
  // generate value for buyer
  aa = mathRandom(18, 30);
  // reset donut selling to zero everytime
  kk = 0;
  // random generate array for price
  let bb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let cc = mathArrayRandom(bb, 0);
  // random generate array for image
  let dd = [1, 2, 3, 4, 5, 6, 7, 8];
  let ee = mathArrayRandom(dd, 0);
  // buyer wants to pay...
  container(".gameContainer", "profitLoss", "rowPL", "p-3");
  column("#rowPL", "col buySellCol");
  dom("<h2>", ".buySellCol", `Buyer wants $${aa} amount of donuts!`, "text-center fs-2 alert alert-success my-3");
  // donuts
  container(".gameContainer", "fourdonuts", "rowDonuts", "p-3");
  for (let i = 0; i < 4; i++) {
    dom("<div>", "#rowDonuts", null, `button${i} button col-6 col-sm-3 p-2`, null, "value", cc[i]);
    dom("<img>", `.button${i}`, null, "p-1", null, "src", `./images/${ee[i]}.svg`);
  }
  // selling...
  container(".gameContainer", "selldonuts", "rowSellDonuts", "p-3 mb-5");
  column("#rowSellDonuts", "col sellDonuts");
  dom("<h2>", ".sellDonuts", null, "text-center fs-2 alert alert-danger my-3 totalValue");
  $(".totalValue").html(`You're selling $${kk} amount of donuts!`);
  dom("<p>", ".sellDonuts", "Click donuts to sell to buyer.", "text-small text-secondary text-center mt-3 text-uppercase fw-bold");
};

$(document).on("click", ".button", function () {
  let ll = parseInt($(this).attr("value"));
  console.log(ll);
  kk += ll;
  $(".totalValue").html(`You're selling $${kk} amount of donuts!`);
  checkGame();
});

checkGame = () => {
  kk > aa ? [lossPoint++, $(".loss").text(lossPoint), $("#lossNewModal").text(`$${aa} < $${kk}`), $("#lossModal").modal("show"), startGame()] : kk == aa ? [winPoint++, $(".wins").text(winPoint), $("#winNewModal").text(`$${aa} = $${kk}`), $("#winModal").modal("show"), startGame()] : console.log("Play continue!");
};

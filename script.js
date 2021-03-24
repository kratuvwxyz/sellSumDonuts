function mathRandom(t, o) {
  return Math.floor(Math.random() * t) + o;
}
function mathArrayRandom(t, o) {
  let e = t.length,
    a = t,
    n = [];
  for (let t = 0; t < e; t++) {
    let t = a[mathRandom(a.length, o)];
    n.push(t), a.splice(a.indexOf(t), 1);
  }
  return n;
}
let winPoint = 0,
  lossPoint = 0,
  kk = 0,
  aa = 0;
dom("<div>", "#game", null, "bg-dark pt-2 pb-5 mainHeader text-center lh-lg"),
  dom("<h1>", ".mainHeader", "Let's Sell Sum Donuts!", "text-light fs-1 ms-3"),
  dom("<div>", ".mainHeader", null, "heroImage"),
  dom("<img>", ".heroImage", null, null, null, "src", "./images/heroImgLg.jpg", "width", "100%"),
  dom("<ul>", ".mainHeader", null, "p-3 border border-light list-group ulInfo"),
  dom("<li>", ".ulInfo", "Let's sell some donuts.", "p-2 text-monospace list-group-item"),
  dom("<li>", ".ulInfo", "This memory game helps  you to improve your math.", "p-2 text-monospace list-group-item"),
  dom("<li>", ".ulInfo", "Easy to play and fun to compete yourself!", "p-2 text-monospace list-group-item"),
  dom("<li>", ".ulInfo", "First, buyer wants to buy some donuts with some amount of money! (Remember this change every game!)", "p-2 text-monospace list-group-item"),
  dom("<li>", ".ulInfo", "Second, you see four donuts that carries different prices. Once you click them, you sell that donut with that price.", "p-2 text-monospace list-group-item"),
  dom("<li>", ".ulInfo", "Match exact amount buyer wants to pay with selling your donuts to win this game.", "p-2 text-monospace list-group-item"),
  dom("<button>", ".mainHeader", "PLAY NOW&#160; &#9654;", "btn btn-sm btn-light mt-5 mb-5 playNow", () => {
    $(".mainHeader").hide(), $(".gameStructure").removeClass("d-none"), startGame();
  }),
  dom("<button>", ".mainHeader", "CLOSE&#160; &#9587;", "btn btn-sm btn-danger mt-3 mb-3 d-none clsBtn", () => {
    $(".mainHeader").hide(), $(".clsBtn").addClass("d-none");
  }),
  dom("<div>", "#game", null, "gameStructure d-none"),
  dom("<nav>", ".gameStructure", null, "navbar  navbar-expand-lg navbar-light bg-light navbar-a p-2"),
  dom("<a>", ".navbar-a", "Do-Nuts", "navbar-brand ms-2", null, "href", "#!"),
  badgebtn(".navbar-a", "Profit ", "bg-light", "proBadge", winPoint, "wins bg-success"),
  badgebtn(".navbar-a", "Loss ", "bg-light", "losBadge", lossPoint, "loss bg-danger"),
  dom("<a>", ".navbar-a", "Instruction", "nav-link instructionbutton", () => {
    $(".mainHeader").show(), $(".playNow").addClass("d-none"), $(".heroImage").hide(), $(".clsBtn").removeClass("d-none");
  }),
  dom("<div>", ".gameStructure", null, "gameContainer container-fluid"),
  dom("<div>", ".gameStructure", null, "modalGame"),
  modal("lossModal", "You Lost Money and Donuts", "lossNewModal", ".modalGame"),
  modal("winModal", "You Sold Exactly!", "winNewModal", ".modalGame"),
  (startGame = () => {
    $(".gameContainer").empty(), (aa = mathRandom(18, 30)), (kk = 0);
    let t = mathArrayRandom([1, 2, 3, 4, 5, 6, 7, 8, 9], 0),
      o = mathArrayRandom([1, 2, 3, 4, 5, 6, 7, 8], 0);
    container(".gameContainer", "profitLoss", "rowPL", "p-3"), column("#rowPL", "col buySellCol"), dom("<h2>", ".buySellCol", `Buyer wants <strong style="font-family:var(--bs-font-sans-serif); font-weight:700;">$${aa}</strong> amount of donuts!`, "text-center fs-2 alert alert-success my-3"), containerFluid(".gameContainer", "fourdonuts", "rowDonuts", "p-3");
    for (let e = 0; e < 4; e++) dom("<div>", "#rowDonuts", null, `button${e} button col-6 col-sm-3 p-2`, null, "value", t[e]), dom("<img>", `.button${e}`, null, "p-1", null, "src", `./images/${o[e]}.svg`);
    container(".gameContainer", "selldonuts", "rowSellDonuts", "p-3 mb-5"), column("#rowSellDonuts", "col sellDonuts"), dom("<h2>", ".sellDonuts", null, "text-center fs-2 alert alert-danger my-3 totalValue"), $(".totalValue").html(`You're selling <strong style="font-family:var(--bs-font-sans-serif); font-weight:700;">$${kk}</strong> amount of donuts!`), dom("<p>", ".sellDonuts", "Click donuts to sell to buyer.", "text-small text-secondary text-center mt-3 text-uppercase fw-bold");
  }),
  $(document).on("click", ".button", function () {
    let t = parseInt($(this).attr("value"));
    (kk += t), $(".totalValue").html(`You're selling $${kk} amount of donuts!`), checkGame();
  }),
  (checkGame = () => {
    kk > aa ? (lossPoint++, $(".loss").text(lossPoint), $("#lossNewModal").text(`$${aa} < $${kk}`), $("#lossModal").modal("show"), startGame()) : kk == aa && (winPoint++, $(".wins").text(winPoint), $("#winNewModal").text(`$${aa} = $${kk}`), $("#winModal").modal("show"), startGame());
  });

/*  
        ╥╥  DESIGNED AND DEVELOPED BY...
        ║║ 
        ║║ ╓╓──╖╖ ╓╓──── ────╖╖ ╓╖ ╓╓──╖╖ ╓╓──╖╖ TM
        ║║ ║║  ║║ ║║         ║║ ╙╜ ║║  ║║ ║║  ║║
    ╓╓──╫╫ ╫╫──╜╜ ╙╙──╖╖ ╓╓──╫╫ ╖╖ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ╙╙──── ────╜╜ ╙╙──╜╜ ║║ ╙╙──╫╫ ╜╜  ║║
    ║║  ║║  HTTPS://DESAIGN.APP ║║     ║║     ╙╙ LLC
    ╙╙──╜╜  SINCE TWENTYELEVEN  ╙╙─ ───╜╜
            Copyright © 2021
            ALL RIGHTS RESERVED
            --
            Call: 1-860-DESAIGN
            Mail: MEET@DESAIGN.STUDIO
            Post: PO BOX 200001, AUSTIN TX 78720
            --
            Book an appointment with us at
            https://calendly.com/desaignstudio
            --
            Follow us: #desaignstudio
*/
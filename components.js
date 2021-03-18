/* 
dom = dom element
a = append to
b = text
c = classes
d = click function
e = attribute
f = attribute value
g = attribute
h = attribute value
*/

dom = (dom, a, b, c, d, e, f, g, h) => {
    $(dom).appendTo(a).html(b).addClass(c).click(d).attr(e, f).attr(g, h)
}

/* 
container
a = append to
b = container id
c = row id
d = row classes
*/
container = (a, b, c, d) => {
    $("<div>").appendTo(a).addClass("container").attr("id", b);
    $("<div>").appendTo("#"+b).addClass("row").attr("id", c).addClass(d);
}

/* 
column
a = append to
b = classes
c = attribute
d = attribute value
*/
column = (a, b, c, d) => {
    $("<div>").appendTo(a).addClass(b).attr(c, d)
}

/* 
button with badges
a = button append to
b = button text
c = button classes
d = button id
e = badge text
f = badge classes
*/
badgebtn = (a, b, c, d, e, f, g) => {
    $("<button>").appendTo(a).text(b).addClass("btn btn-sm").addClass(c).attr("id", d);
    $("<span>").appendTo("#" + d).text(e).addClass("badge badge-light").addClass(f);
}

/* 
modal
*/

modal = (i, a, b, c) => {
    let x = `
    <div class="modal fade" id=${i} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">${a}</h5>
        </div>
        <div class="modal-body">
            <h2 class="display-1 text-center" id=${b}></h2>
            <hr/>
            <h6 class="text-center">Buyer paid VS. You sold</h6>
        </div>
        </div>
    </div>
    </div>
    `
    $('<div>').appendTo(c).html(x)
}
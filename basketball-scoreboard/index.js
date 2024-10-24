


function home(value) {

    let home = document.querySelector("#homeScore");

    home.textContent = +home.textContent + +value;
   
}

function guest(value) {
    let guest = document.querySelector("#guestScore");

    guest.textContent = +guest.textContent + +value;

}

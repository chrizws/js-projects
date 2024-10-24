const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generate = document.querySelector("#generate");

generate.addEventListener("click", function() {

    let saved = document.querySelector(".saved");
    saved.textContent = "";

    let length = document.querySelector("#passLength");
    let pass1 = document.querySelector("#pass1");
    let pass2 = document.querySelector("#pass2");
    
    pass1.textContent = "";
    pass2.textContent = "";

    if (length != null && +length.value > 0) {
        pass1.textContent = generatePassword(+length.value);
        pass2.textContent = generatePassword(+length.value);
    } else {
        pass1.textContent = generatePassword(15);
        pass2.textContent = generatePassword(15);
    }
});

function generatePassword(length) {

    let password = "";

    for (let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * characters.length);
        password += characters[rand];
    }

    return password;
}

let pass1 = document.querySelector("#pass1");
let pass2 = document.querySelector("#pass2");

pass1.addEventListener("click", function() {
    let saved = document.querySelector(".saved");
    saved.textContent = pass1.textContent + " saved";
});

pass2.addEventListener("click", function() {
    let saved = document.querySelector(".saved");
    saved.textContent = pass2.textContent + " saved";
})
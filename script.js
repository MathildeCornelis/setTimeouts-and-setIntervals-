/*Exercise 1
let prout = ['p', 'r', 'o', 'u', 't'];
let myInterval = setInterval(afficherProut, 1000); 
let i = 0;


function afficherProut() {
    if (i < prout.length){
        document.getElementById('prout').innerHTML += (prout[i]);
        i++;
    }else if (i == prout.length){
        document.getElementById('prout').textContent = "";
        i=0;
    };
    setTimeout(afficherProut, speed);
};
window.addEventListener("load", afficherProut);
*/

/*Exercise 2*/

let seconds = 0;

function addSeconds() {
    seconds += 1;
    document.getElementById('second-counter').innerText = "You have been here for " + seconds + " seconds.";
};

let setIntervalSeconds = setInterval(addSeconds, 1000);

let minutes = 0;

function addMinutes() {
    minutes += 1;
    document.getElementById('minute-counter').innerText = minutes + " minute" + (minutes > 1 ? "s" : "") + " have passed.";
}

let setIntervalMinutes = setInterval(addMinutes, 60000);

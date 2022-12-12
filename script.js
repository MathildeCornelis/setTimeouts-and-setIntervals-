/*Exercise 1*/
let prout = ['p', 'r', 'o', 'u', 't'];
let myInterval = setInterval(afficherProut, 1000); 
let i = 0;


function afficherProut() {
    if (i < prout.length){
        document.getElementById('demo').innerHTML += (prout[i]);
        i++;
    }else if (i == prout.length){
        document.getElementById('demo').textContent = "";
        i=0;
    };
    setTimeout(afficherProut, speed);
};
window.addEventListener("load", afficherProut);

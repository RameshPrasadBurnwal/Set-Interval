let setIntervalBtnEl = document.getElementById("setIntervalBtn");
let clearIntervalBtnEl = document.getElementById("clearIntervalBtn");
let paragraphIntervalEl = document.getElementById("paragraphInterval");
let uniqueId = null;

setIntervalBtnEl.onclick = function(){
    let counter = 0;
    uniqueId = setInterval(function(){
        paragraphIntervalEl.textContent = counter;
        console.log(counter);
        counter += 1;
    },1000);
};

clearIntervalBtnEl.onclick = function(){
    clearInterval(uniqueId);
    paragraphIntervalEl.textContent = "";

};
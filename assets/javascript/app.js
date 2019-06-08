
var audio = new Audio("http://music.ogg" ) ;
var clickCounter = 0;

function fart(){
    document.getElementById("farter").style.color="yellow";
    clickCounter= clickCounter + 1;
    console.log(clickCounter);
    document.getElementById("counter").innerHTML = clickCounter;

};



console.log(clickCounter);

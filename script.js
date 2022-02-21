function myFunc (){
alert("You are good")
};

document.addEventListener("click", myFunc)


let clockEvent = document.getElementById("clock");

function myTime(){
    const d = new Date();
    let hourTime = d.getHours();
    let minuteTime = d.getMinutes();
    let secondTime = d.getSeconds();

    clockEvent.innerHTML = `${hourTime}:${minuteTime}:${secondTime}!`

}

setInterval(myTime,1000);


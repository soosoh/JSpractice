var clickcount = 0;

counter = document.querySelector("#counter");

frame = document.querySelector("#frame");
ctx = frame.getContext("2d");

time = document.querySelector("#time");

counter.onclick = () => {
    clickcount++;
    counter.innerHTML = "click count: " + clickcount;
}

function updateCanvas(){
    ctx.fillRect(0,0,10,10);
}

setInterval(updateCanvas()
,1000);
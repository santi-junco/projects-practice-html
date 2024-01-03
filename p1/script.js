let hr = min = sc = ms = "0" + 0, startTimer;

const startBtn = document.querySelector(".start"),
    stopBtn = document.querySelector(".stop"),
    resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start(){
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");

    startTimer = setInterval(() => {
        ms++;
        ms = ms < 10 ? "0" + ms : ms; 
        
        if (ms == 100){
            sc ++;
            sc = sc < 10 ? "0" + sc : sc; 
            ms = "0" + 0;
        }
        if (sc == 60){
            min ++;
            min = min < 10 ? "0" + min : min; 
            sc = "0" + 0;
        }
        if (min == 60){
            hr ++;
            hr = hr < 10 ? "0" + hr : hr; 
            min = "0" + 0;
        }

        putValue();
        
    }, 10);

}

function stop(){
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    startBtn.textContent = "Continue"
}

function reset(){
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    startBtn.textContent = "Start"
    clearInterval(startTimer);
    hr = min = sc = ms = "0" + 0;
    putValue();
}

function putValue(){
    document.querySelector(".millisecond").innerHTML = ms;
    document.querySelector(".second").innerHTML = sc;
    document.querySelector(".minute").innerHTML = min;
    document.querySelector(".hour").innerHTML = hr;
}
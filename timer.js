let time=document.getElementById("time");
let istimerunning=false
let sec=0;
let min=0;
let hr=0;
let clock;

function startBtn(){
    if(istimerunning){
        return
       }
       istimerunning=true 
     clock=setInterval(function(){
        if(min==60){
            hr++;
            min=0;
        }
       if(sec==60){
         min++;
         sec=0;
       }
       let minutes;
       let seconds;
       let hours;
       if(sec<10){
        seconds="0"+sec;
       }else{
        seconds=sec;
       }
       if(min<10){
        minutes="0"+min;
       }else{
        minutes=min
       }
       if(hr<10){
       hours="0"+hr;
       }else{
        hours=hr
       }
       time.textContent=hours+":"+minutes+":"+seconds;
       sec++;
     },1000)
}
function stopBtn(){
   clearInterval(clock)
   istimerunning=false
}

function resetBtn(){
    min=0
    sec=0
    hr=0
    time.textContent="00:00:00";
    clearInterval(clock);
    istimerunning=false
}
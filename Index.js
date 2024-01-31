/* Variables for Timers */

let MinLabel = document.getElementById('Minutes');
let SecLabel = document.getElementById('Seconds');
let MiliLabel = document.getElementById('Miliseconds');

 /* Variables for button */

 let StartBtn = document.getElementById('Start');
 let StopBtn = document.getElementById('Stop');
 let PauseBtn = document.getElementById('Pause');
 let RestartBtn = document.getElementById('Restart');

 /* Variable for LapTime */

 let LapList = document.getElementById('Laptime');

 /* Variables for Stopwatch */

 let Minutes = 0;
 let Seconds = 0;
 let Miliseconds = 0;
 let Interval;

 /* Now Creating Functions */

 StartBtn.addEventListener('click', startTimer);
 StopBtn.addEventListener('click', stopTimer);
 PauseBtn.addEventListener('click', pauseTimer);
 RestartBtn.addEventListener('click', restartTimer);

 function startTimer(){

   Interval = setInterval(updateTimer, 10);
    StartBtn.disabled = true; //You can't use Start Button anymore.
    PauseBtn.disabled = false;
 }

 function stopTimer(){

    clearInterval(Interval);
    addToLapList(); 
    restartTimerData();
    StartBtn.disabled = false;
    
 }

 function pauseTimer(){

    clearInterval(Interval); 
    PauseBtn.disabled = true;
    StartBtn.disabled = false;
     
 }

 function restartTimer(){

    clearInterval(Interval);
    restartTimerData();
    StartBtn.disabled = false;
    PauseBtn.disabled = false;
    
 }

 function updateTimer(){

     Miliseconds++;

     if(Miliseconds === 100)
     {
        Miliseconds = 0;
        Seconds++;
     }

     if(Seconds==60)
     {
        Seconds=0;
        Minutes++;
     }

     displayTimer();
 }

 function displayTimer(){

    MiliLabel.textContent = padTime(Miliseconds);
    SecLabel.textContent = padTime(Seconds);
    MinLabel.textContent = padTime(Minutes);
 }

 function padTime(time){

    return time.toString().padStart(2, '0'); 

    //padStart(Length of String, Padding with 0) -> 00 00 00
 }


 function restartTimerData() {

    Minutes = 0;
    Seconds = 0;
    Miliseconds = 0;
    displayTimer();
 }


 function addToLapList(){

    const LapTime = `${padTime(Minutes)}:${padTime(Seconds)}:${padTime(Miliseconds)}`;

    const ListItem = document.createElement('li');
    
    ListItem.innerHTML = `<span> Lap ${LapList.childElementCount + 1}: </span>${LapTime}`;

    LapList.appendChild(ListItem);

 }


 
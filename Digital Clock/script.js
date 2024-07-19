function displayTime(){
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let seconds = time.getSeconds();
   
   if(hrs>12){
      hrs = hrs-12
   }
   document.getElementById('hours').innerHTML =hrs
   document.getElementById('mins').innerHTML = mins
   document.getElementById('seconds').innerHTML =seconds
}
setInterval(displayTime,700)
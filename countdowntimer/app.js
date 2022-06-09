const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');

const currentYear=new Date().getFullYear();
const newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);
function updateCount(){
    const currentTime=new Date();
    const d =Math.floor((newYear-currentTime)/1000/60/60/24);
    const h =Math.floor((newYear-currentTime)/1000/60/60)%24;
    const m =Math.floor((newYear-currentTime)/1000/60)%60;
    const s =Math.floor((newYear-currentTime)/1000)%60;
    days.innerHTML=d;
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
   

}
setInterval(updateCount,1000);

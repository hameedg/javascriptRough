const set =[adore,enlighten,configure,pursue,enrich,rogue,endeavour,ecosport,figo];
const msg =document.getElementById('msg');
const typed=document.getElementById('text');
const btn=document.getElementById('btn');
let startTime,endTime;
const playGame(){
    let r=Math.floor(math.random()*set.length);
    typed.disabled=false;
    msg.innerText=set[r];

}
btn.addEventListener('click',function(){
    if(this.innerText=='Start'){
        playGame();
    }
})

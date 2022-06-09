const change=document.getElementById('color');
const btn=document.getElementById('btn');
const body=document.body;
btn.addEventListener('click',changeBG);
function changeBG(){

    const col1=random();
    const col2=random();
    const col3=random();

const colorstr =`rgb(${col1},${col2},${col3})`;
console.log( colorstr);
body.style.background=colorstr;
color.innerText=colorstr;
}
function random(){
 return Math.floor(Math.random()*256);
}


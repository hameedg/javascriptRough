let display =document.getElementsByClassName('display');
const number=document.getElementsByClassName('number');
const operator=document.getElementsByClassName('operator');
const btn=document.getElementsByTagName('button');
for(var i=0;i<btn.length;i++){
    btn.addeventListener('click',(e)=>{
         let buttontext =e.target.innerText;
         console.log('buttontext')
    })
}

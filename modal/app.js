const openbtn=document.getElementById('open');
const closebtn=document.getElementById('close');
const modal=document.getElementById('modal');
openbtn.addEventListener('click',() =>{
    modal.style.display='block';
})
closebtn.addEventListener('click',() =>{
    modal.style.display='none';
})
window.addEventListener('click',(e) =>{
    if(e.target== modal){

        modal.style.display='none';
    }
})





const tagM=document.getElementById('tags')
const textarea=document.getElementById('textarea')
textarea.focus()

textarea.addEventListener('keyup',(e) =>{
    createTags(e.target.value)
    if(e.key ==='Enter'){
        setTimeout(()=>{
            e.target.value=''
        },30)
        randomSelect()
    }
})
 function createTags(input){
     const text=input.split(',').filter(tag =>tag.trim()!=='').map(tag => tag.trim())
     
     tagM.innerHTML=''
     text.forEach(tag => {
         const tagS=document.createElement('span')
         tagS.classList.add('tag')
         tagS.innerHTML= tag
         tagM.appendChild(tagS)         
     });
}

function randomSelect(){
     const times =30
     const interval =setInterval(() => {
         const randomTag = pickRandomTag()
         highlighttag(randomTag)
         setTimeout(() => {
             unhighlighttag(randomTag)
         }, 100);
     }, 100);
     setTimeout(() => {
         clearInterval(interval)
         setTimeout(() => {
            const randomTag=pickRandomTag()
            highlighttag(randomTag)

            
         }, 100);
     }, times*100);
     
    
}
function pickRandomTag(){
    const tagS=document.querySelectorAll('.tag')
    return tagS[Math.floor(Math.random()*tagS.length)]

}
function highlighttag(tag){
    tag.classList.add('tag-highlight')
}
function unhighlighttag(tag){
    tag.classList.remove('tag-highlight')
}
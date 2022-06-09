const slidercontainer=document.querySelector('.slider-container')
const slideRight=document.querySelector('.right-slide')
const slideLeft=document.querySelector('.left-slide')
const upButton=document.querySelector('.up-button')
const downButton=document.querySelector('.down-button')
const sliderLength=slideRight.querySelectorAll('div').length

let activeSlideindex=0
slideLeft.style.top =`-${(sliderLength-1)*100}vh`
upButton.addEventListener('click',()=> changeSlide('up'))
downButton.addEventListener('click',()=> changeSlide('down'))

const changeSlide = (direction) =>{
    const slideheight=slidercontainer.clientHeight
    if(direction==='up'){
        activeSlideindex++
        if(activeSlideindex > (sliderLength-1)){
            activeSlideindex=0
        }
    }
    else if(direction==='down'){
        activeSlideindex--
        if(activeSlideindex < 0){
            activeSlideindex=sliderLength -1
            
        
    }
}
    slideRight.style.transform=`translateY(-${activeSlideindex *slideheight}px)`
    slideLeft.style.transform=`translateY(${activeSlideindex *slideheight}px)`
}




const button=document.querySelector('.button')
const addpopup=document.querySelector("body > div > div")
const open=document.querySelector('.open')
const cut=document.querySelector('.cut')
const overlay=document.querySelector('.overlay')
const buttonBox=document.querySelector('.button-box')
const SUBSCRIBE=document.querySelector('.SUBSCRIBE')



button.addEventListener('click',(e)=>{
    e.stopPropagation()
    addpopup.classList.add('open') 
    overlay.classList.add('open')
    buttonBox.classList.add('open')

    cut.addEventListener('click',(e)=>{
        e.stopPropagation()
        addpopup.classList.remove('open')
        overlay.classList.remove('open') 
        buttonBox.classList.remove('open')
    })
   
})

window.addEventListener('click',(e)=>{
    addpopup.classList.remove('open')
    overlay.classList.remove('open') 
    buttonBox.classList.remove('open')
})

addpopup.addEventListener('click',(e)=>{
    e.stopPropagation()
    
})

SUBSCRIBE.addEventListener('click',(e)=>{
    addpopup.classList.remove('open')
    overlay.classList.remove('open') 
    buttonBox.classList.remove('open')
})
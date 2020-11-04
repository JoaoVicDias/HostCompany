const backdrop = document.querySelector('.backdrop')
const modalHtml = document.querySelector('.modal')
const buttons = document.querySelectorAll('.plan button')
const closeButton = document.querySelector('.modal__action--negative')
const toggleButton = document.querySelector('.toggle-button')
const mobileNav = document.querySelector('.mobile-nav')



for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener('click',modal)
}
backdrop.addEventListener('click',closeBackdrop)
if(closeButton){
    closeButton.addEventListener('click',closeModal)
}
toggleButton.addEventListener('click',openMobile)




function modal(){
    /*backdrop.style.display = 'block'
    modalHtml.style.display = 'block'*/
    backdrop.style.display = "block";
    modalHtml.style.display = "block";
    setTimeout(function(){
      backdrop.classList.add('open')
      modalHtml.classList.add('open')
      },100)
      

}

function closeBackdrop(){
    /*backdrop.style.display = 'none'
    modalHtml.style.display = 'none'
    mobileNav.style.display = 'none'*/
    backdrop.classList.remove('open')
    if(modalHtml){
        modalHtml.classList.remove('open')
    }
    mobileNav.classList.remove('open')
    setTimeout(function(){
        backdrop.style.display = 'none'
    },100)
}

function closeModal(){
    /*backdrop.style.display = 'none'
    modalHtml.style.display = 'none'*/
    backdrop.classList.remove('open')
    modalHtml.classList.remove('open')
    setTimeout(function(){
        backdrop.style.display = 'none'
    },200)
}

function openMobile(){
    /*backdrop.style.display = 'block'
    mobileNav.style.display = 'block'*/
    backdrop.style.display = 'block'
    mobileNav.classList.add('open')

    setTimeout(function(){
        backdrop.classList.add('open')
       
    },10)
    
    


}
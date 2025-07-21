let startMenu=document.querySelector('.start-menu');
let windowsLogo=document.querySelector('.windows-logo');
windowsLogo.addEventListener('click',()=>{
    if(startMenu.style.bottom==='-700px'){
        startMenu.style.bottom='65px';
    }else{
        startMenu.style.bottom='-700px'
    }
})
let startMenu=document.querySelector('.start-menu');
let windowsLogo=document.querySelector('.windows-logo');
let shutDownButton=document.querySelector('.shutdown-button');
let windowsShutdownPage=document.querySelector('.windows-shutdown');
let windowsOffPage=document.querySelector('.windows-off-main');
let windowsOpeningTimePage=document.querySelector('.windows-opening')
windowsLogo.addEventListener('click',()=>{
    if(startMenu.style.bottom==='-1000px'){
        startMenu.style.bottom='65px';
    }else{
        startMenu.style.bottom='-1000px'
    }
})
// shutting down stuff
shutDownButton.addEventListener('click',()=>{
    windowsShutdownPage.style.display='flex';
    setTimeout(()=>{
        windowsShutdownPage.style.display='none';
        windowsOffPage.style.display='flex';
        if(startMenu.style.bottom==='65px'){
            startMenu.style.bottom='-1000px'
        }
    },5000);
})
document.querySelector('.power-button').addEventListener('click',()=>{
    windowsOffPage.style.display='none';
    windowsOpeningTimePage.style.display='flex';
    setTimeout(()=>{
        
        windowsOpeningTimePage.style.display='none';
    },3500);
})
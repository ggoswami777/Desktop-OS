let startMenu=document.querySelector('.start-menu');
let windowsLogo=document.querySelector('.windows-logo');
let shutDownButton=document.querySelector('.shutdown-button');
let windowsShutdownPage=document.querySelector('.windows-shutdown');
let windowsOffPage=document.querySelector('.windows-off-main');
let windowsOpeningTimePage=document.querySelector('.windows-opening');

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
//apps
//calculator
let calculatorIcon=document.querySelector('.calculatorIcon');
let calculatorWindow=document.querySelector('.calculator-window');
let navigations=document.querySelector('.navigations')
calculatorIcon.addEventListener('dblclick',()=>{
    navigations.style.display='block';
    navigations.style.zIndex=++window.maxZ || (windowsLogo.maxZ=2);


})
document.querySelector('.red-circle').addEventListener('click',()=>{
    
    navigations.style.display='none';
})
document.querySelector('.green-circle').addEventListener('click',()=>{
    console.log('clicked')
    navigations.style.top='0px';
    navigations.style.left='0px';
    navigations.style.height='90%';
    navigations.style.width='100%';
    

})
document.querySelector('.yellow-circle').addEventListener('click',()=>{
    navigations.style.top='100px';
    navigations.style.left='100px';
    navigations.style.height='71%';
    navigations.style.width='41%';
})
let startMenu = document.querySelector(".start-menu");
let windowsLogo = document.querySelector(".windows-logo");
let shutDownButton = document.querySelector(".shutdown-button");
let windowsShutdownPage = document.querySelector(".windows-shutdown");
let windowsOffPage = document.querySelector(".windows-off-main");
let windowsOpeningTimePage = document.querySelector(".windows-opening");

let icons = [
  {
    id: Date.now(),
    image: "footer images/chrome.png",
    name: "Google Chrome",
    iconName: "GoogleChromeIcon",
  },
  {
    id: Date.now(),
    image: "footer images/calculator.png",
    name: "Calculator",
    iconName: "calculatorIcon",
  },
  {
    id: Date.now(),
    image: "footer images/notepad.png",
    name: "Notepad",
    iconName: "notepadIcon",
  },
  {
    id: Date.now(),
    image: "footer images/weather.png",
    name: "Weather",
    iconName: "weatherIcon",
  },
  {
    id: Date.now(),
    image: "footer images/camera.png",
    name: "Camera",
    iconName: "cameraIcon",
  },
  {
    id: Date.now(),
    image: "footer images/list-icon-1423.png",
    name: " List",
    iconName: "todoListIcon",
  },
  
];

renderIconList();

function renderIconList() {
  let iconsHTML = "";
  icons.forEach((icon) => {
    iconsHTML += `
            <div class="icons ${icon.iconName} ">
          <div class="icon-image flex justify-center">
            <img src="${icon.image}" width="45px" alt="" />
          </div>

          <p>${icon.name}</p>
        </div>
        `;
  });
  document.querySelector(".desktop-icons-div").innerHTML = iconsHTML;
}

windowsLogo.addEventListener("click", () => {
  if (startMenu.style.bottom === "-1000px") {
    startMenu.style.bottom = "65px";
  } else {
    startMenu.style.bottom = "-1000px";
  }
});
// shutting down stuff
shutDownButton.addEventListener("click", () => {
  windowsShutdownPage.style.display = "flex";
  setTimeout(() => {
    windowsShutdownPage.style.display = "none";
    windowsOffPage.style.display = "flex";
    if (startMenu.style.bottom === "65px") {
      startMenu.style.bottom = "-1000px";
    }
  }, 5000);
});
document.querySelector(".power-button").addEventListener("click", () => {
  windowsOffPage.style.display = "none";
  windowsOpeningTimePage.style.display = "flex";
  setTimeout(() => {
    windowsOpeningTimePage.style.display = "none";
  }, 3500);
});
//apps
//calculator
let calculatorIcon = document.querySelector(".calculatorIcon");
let calculatorWindow = document.querySelector(".calculator-window");
let navigations = document.querySelector(".navigations");
let appWindow = document.querySelector(".app-window");
calculatorIcon.addEventListener("click", () => {
  navigations.style.display = "block";
  navigations.style.zIndex = ++window.maxZ || (windowsLogo.maxZ = 2);
});
document.querySelector(".red-circle").addEventListener("click", () => {
  navigations.style.display = "none";

});
document.querySelector(".green-circle").addEventListener("click", () => {
  console.log("clicked");
  navigations.style.top = "0px";
  navigations.style.left = "0px";
  navigations.style.height = "96%";
  navigations.style.width = "100vw";
  appWindow.style.width = "100%";
  appWindow.style.height = "96%";

  appWindow.style.resize = "none";
});
document.querySelector(".yellow-circle").addEventListener("click", () => {
  navigations.style.top = "100px";
  navigations.style.left = "100px";
  navigations.style.height = "71%";
  navigations.style.width = "41%";
  appWindow.style.resize = "both";

});

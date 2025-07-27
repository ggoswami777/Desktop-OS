const BASE_URL =
  "https://api.weatherapi.com/v1/current.json?key=1db180f23cb943889dd53144252707&q=delhi";
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
    name: "Chrome",
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
    name: " TODOList",
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
  //   document.querySelectorAll('.icons').forEach((icon)=>{
  //   icon.addEventListener('click',()=>{
  //     console.log(icon.iconName);
  //   })
  // })
  icons.forEach((icon) => {
    document
      .querySelector(`.${icon.iconName}`)
      .addEventListener("click", () => {
        openingWindow(icon.iconName);
      });
  });
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

generatingWindows();
function generatingWindows() {
  let windowHTML = "";
  icons.forEach((icon) => {
    let iconLowerName = icon.name.trim().toLowerCase();
    console.log(`opening ${iconLowerName}`);
    windowHTML += `
        <div class="navigations ${iconLowerName}-nav " style="position:absolute;
    height:71%;
 
    width: 41%;
    top: 100px;
    left: 100px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    display:none;">
        
        <div class="app-window ${iconLowerName}-window" style="width: 100%;
    height: 100%;
    background-color: white;
   
    z-index: 1;
    resize: none;
    overflow: hidden;
    resize: both;
    border-radius: 8px
    ">
          <div class="circles-div">
          <div class="red-circle"></div>
          <div class="yellow-circle"></div>
          <div class="green-circle"></div>
        </div>
          <iframe src="apps/${iconLowerName}/index.html" frameborder="0" scrolling="no" style="height: 100%;
    width: 100%;
    border: none;
    overflow: hidden;"></iframe>
        </div>
      </div>
      `;
  });
  document.querySelector(".main").insertAdjacentHTML("beforeend", windowHTML);
}
function openingWindow(iconName) {
  icons.forEach((icon) => {
    if (icon.iconName === iconName) {
      let iconLowerName = icon.name.trim().toLowerCase();
      const navWindow = document.querySelector(`.${iconLowerName}-nav`);
      const appWindow = document.querySelector(`.${iconLowerName}-window`);
      if (navWindow) {
        navWindow.style.display = "block";
        const dragHandle = navWindow.querySelector(".circles-div");
        makeDraggable(dragHandle, navWindow);
        navWindow.style.zIndex = ++window.maxZ || (window.maxZ = 2);
        // navWindow.style.height='fit-content';
        // navWindow.style.minHeight='69%';
      }

      const closeBtn = navWindow.querySelector(".red-circle");
      const maximizeBtn = navWindow.querySelector(".green-circle");
      const minimizeBtn = navWindow.querySelector(".yellow-circle");
      closeBtn.addEventListener("click", () => {
        navWindow.style.display = "none";
      });
      maximizeBtn.addEventListener("click", () => {
        console.log("clicked");
        navWindow.style.top = "0px";
        navWindow.style.left = "0px";
        navWindow.style.height = "96%";
        navWindow.style.width = "100vw";
        appWindow.style.width = "100%";
        appWindow.style.height = "96%";

        appWindow.style.resize = "none";
      });
      minimizeBtn.addEventListener("click", () => {
        navWindow.style.top = "100px";
        navWindow.style.left = "100px";
        navWindow.style.height = "71%";
        navWindow.style.width = "41%";
        appWindow.style.resize = "both";
      });
    }
  });
}
function makeDraggable(dragHandle, el) {
  let isDragging = false;

  let offsetX, offsetY;

  el.addEventListener("mousedown", (e) => {
    isDragging = true;
    console.log("clientX=", e.clientX);
    console.log("clientY=", e.clientY);

    const rect = el.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    el.style.position = "absolute";
    el.style.zIndex = ++window.maxZ || (window.maxZ = 2);
  });
  dragHandle.addEventListener("mousemove", (e) => {
    if (isDragging) {
      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${e.clientY - offsetY}px`;
      e.stopPropagation();
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
}
//footer works
const footerWeather = async () => {
  let response = await fetch(BASE_URL);
  let data = await response.json();
  let icon = data.current.condition.icon;
  let text = data.current.condition.text;
  let temp_c = data.current.temp_c;
  let HTML=`
    <div class="weather-image-div">
            <img
              src="${icon}"
              alt=""
            />
          </div>
          <div class="weather-details flex flex-coloumn justify-center">
            <p class="temperature">${temp_c}°C
</p>
            <p class="temperature-details">${text}</p>
          </div>
  `
  document.querySelector('.left-section-footer').innerHTML=HTML;
};
footerWeather();

const BASE_URL =
  "https://api.weatherapi.com/v1/current.json?key=1db180f23cb943889dd53144252707&q=delhi";
const originalfunction = async () => {
    let response = await fetch(BASE_URL);
        let data = await response.json();
        let icon = data.current.condition.icon;
        let text = data.current.condition.text;
        let temp_c = data.current.temp_c;
        let wind_kph = data.current.wind_kph;
        let humidity = data.current.humidity;
        let last_updated = data.current.last_updated;
        let country = data.location.country;
        let name = data.location.name;
  let originalHTML = `
  <div class="header">
        <input
          class="input-bar"
          type="text"
          placeholder="Search city (e.g. Delhi)"
        />
        <div class="location-name">📍 ${name},${country}</div>
      </div>
      <div class="weather-content">
        <div class="left-section">
          <div class="temperature">${temp_c}°C
</div>
          <div class="weather-condition">${text}</div>
          <div class="other-weather-details">
            <p>Wind:${wind_kph} <br>Humidity:${humidity} <br>Last updated: ${last_updated}</p>
          </div>
        </div>
        <div class="right-section">
          <img id="weather-icon" src="${icon}" alt="Weather Icon">
        </div>
      </div>
  `;
  document.querySelector('.weatherContainer').innerHTML=originalHTML;
  updateWeather();
};
originalfunction();

const updateWeather = () => {
  let inputValue = document.querySelector(".input-bar");
  inputValue.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      console.log(inputValue.value);
      const URL =
        `https://api.weatherapi.com/v1/current.json?key=1db180f23cb943889dd53144252707&q=` +
        inputValue.value;

      inputValue.value = "";

      console.log(URL);
      try {
        let response = await fetch(URL);
        let data = await response.json();
        let icon = data.current.condition.icon;
        let text = data.current.condition.text;
        let temp_c = data.current.temp_c;
        let wind_kph = data.current.wind_kph;
        let humidity = data.current.humidity;
        let last_updated = data.current.last_updated;
        let country = data.location.country;
        let name = data.location.name;
        let weatherHTML = `
            <div class="header">
        <input
          class="input-bar"
          type="text"
          placeholder="Search city (e.g. Delhi)"
        />
        <div class="location-name">📍 ${name},${country}</div>
      </div>
      <div class="weather-content">
        <div class="left-section">
          <div class="temperature">${temp_c}</div>
          <div class="weather-condition">${text}</div>
          <div class="other-weather-details">
            <p>Wind:${wind_kph} <br>Humidity:${humidity} <br>Last updated: ${last_updated}</p>
          </div>
        </div>
        <div class="right-section">
          <img id="weather-icon" src="${icon}" alt="Weather Icon">
        </div>
      </div>
        `;
        document.querySelector(".weatherContainer").innerHTML = weatherHTML;
        console.log(data);
      } catch (err) {
        let erroredHTML = `
            <div class="header">
        <input
          class="input-bar"
          type="text"
          placeholder="Search city (e.g. Delhi)"
        />
        <div class="location-name">📍 undefined</div>
      </div>
      <div class="weather-content">
        <div class="left-section">
          <div class="temperature">Undefined</div>
          <div class="weather-condition">404</div>
          <div class="other-weather-details">
            <p>Wind:unable <br>Humidity:to<br>Last updated: fetch data</p>
          </div>
        </div>
        <div class="right-section">
          <img id="weather-icon" src="" alt="Weather Icon">
        </div>
      </div>
        `;
      }
      updateWeather();
    }
  });
};
updateWeather();

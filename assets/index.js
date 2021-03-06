const searchForm = document.querySelector(".search-location")
const cityValue = document.querySelector(".search-location input")
const cityName = document.querySelector(".city-name p")
const cardBody = document.querySelector(".card-body")
const timeImage = document.querySelector(".card-top img")
const cardInfo = document.querySelector(".back-card")

const spitOutCelcius = (kelvin) => {
   celcius = Math.round(kelvin - 273.15)
   return celcius
}

const isDayTime = (icon) => {
   if (icon.includes('d')) {
      return true
   } else {
      return false
   }
}

updateWeatherApp = (city) => {
  console.log(city)
  const imgName = city.weather[0].icon
  const iconSrc = `http://openweathermap.org/img/wn/${imgName}@2x.png`
  cityName.textContent = city.name;
  cardBody.innerHTML = `
   <div class="card-mid row">
      <div class="col text-center temp">
         <span>${spitOutCelcius(city.main.temp)}&deg;C</span>
      </div>
      <div class="col-4 condition-temp">
         <p class="condition">${city.weather[0].description}</p>
         <p class="high">${spitOutCelcius(city.main.temp_max)}&deg;C</p>
         <p class="low">${spitOutCelcius(city.main.temp_min)}&deg;C</p>
      </div>
   </div>
   <div class="icon-container card shadow mx-auto">
      <img src="${iconSrc}" alt="" />
   </div>
   <div class="card-bottom px-5 py-4 row">
      <div class="col text-center">
         <p>${spitOutCelcius(city.main.feels_like)}&deg;C</p>
         <span>Feels like</span>
      </div>
      <div class="col text-center">
         <p>${city.main.humidity}%</p>
      <span>Humidity</span>
      </div>
   </div>
   `;

   if(isDayTime(imgName)) {
      console.log('Day')
      timeImage.setAttribute('src', 'images/day_image.svg')
      if (cityName.classList.contains('text-white')) {
         cityName.classList.remove('text-white')
         cityName.classList.add('text-dark')
      } else {
         cityName.classList.add('text-dark')
      }
   }
   else {
      console.log('Night')
      timeImage.setAttribute('src', 'images/night_image.svg')
      if (cityName.classList.contains('text-dark')) {
         cityName.classList.remove('text-dark')
         cityName.classList.add('text-white')
      } else {
         cityName.classList.add('text-white')
      }
   }
   cardInfo.classList.remove('d-none')
};

// add an event listener to the form
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const citySearched = cityValue.value.trim();
  console.log(citySearched);
  searchForm.reset();

  requestCity(citySearched)
    .then((data) => {
      updateWeatherApp(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

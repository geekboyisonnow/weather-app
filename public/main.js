// INSTRUCTIONS
// Create a bunch of Functions for each type of weather data

/*const addCityNameWeatherToUL = weather => {
  // Find the UL
  let theUL = document.querySelector('ul')

  // Create a new LI
  let newLI = document.createElement('li')

  // make the text content of the LI the NAME of the person
  newLI.textContent = `${weather.name}`
  // add the LI to the UL
  theUL.appendChild(newLI)
}*/

const addMainTempWeatherToUL = weather => {
  // Find the UL
  let theUL = document.querySelector('ul')

  // Create a new LI
  let newLI = document.createElement('li')

  // make the text content of the LI the NAME of the person
  newLI.textContent = `${weather.main.temp}`
  // add the LI to the UL
  theUL.appendChild(newLI)
}

/*const addMainHumidityWeatherToUL = weather => {
  // Find the UL
  let theUL = document.querySelector('ul')

  // Create a new LI
  let newLI = document.createElement('li')

  // make the text content of the LI the NAME of the person
  newLI.textContent = `${weather.main.humidity}`
  // add the LI to the UL
  theUL.appendChild(newLI)
}*/

// Display data from site

const button = () => {
  // Target search bar to find the city
  let cityInput = document.querySelector('.the-city-name').value

  let inputUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=cbb5b6537cd4a6eccd9aee04f4400e4e&units=imperial`

  // Pull the data from the weather site

  /*fetch(inputUrl)
    .then(response => {
      return response.json()
    })
    .then(weatherData => {
      addCityNameWeatherToUL(weatherData)
    })
}*/

  fetch(inputUrl)
    .then(response => {
      return response.json()
    })
    .then(weatherData => {
      addMainTempWeatherToUL(weatherData)
    })
}

/*fetch(inputUrl)
    .then(response => {
      return response.json()
    })
    .then(weatherData => {
      addMainHumidityWeatherToUL(weatherData)
    })
}*/

const main = () => {
  document.querySelector('.search').addEventListener('click', button)
}
document.addEventListener('DOMContentLoaded', main)

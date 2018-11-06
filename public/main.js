// INSTRUCTIONS
// Creat a bunch of Functions for each type of weather data

const addWeatherToUL = weather => {
  // Find the UL
  let theUL = document.querySelector('ul')

  // Create a new LI
  let newLI = document.createElement('li')

  // make the text content of the LI the NAME of the person
  newLI.textContent = `${weather.main.temp}`
  // add the LI to the UL
  theUL.appendChild(newLI)
}
// Pull the data from the weather site
// Display data from site
const button = () => {
  // Target search bar to find the city
  let cityInput = document.querySelector('.the-city-name').value

  let inputUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=cbb5b6537cd4a6eccd9aee04f4400e4e&units=imperial`

  fetch(inputUrl)
    .then(response => {
      return response.json()
    })
    .then(weatherData => {
      console.log(weatherData.main.temp)
      addWeatherToUL(weatherData)
    })
}
const main = () => {
  document.querySelector('.search').addEventListener('click', button)
}
document.addEventListener('DOMContentLoaded', main)

// INSTRUCTIONS

const button = () => {
  // Target search bar to find the city
  let cityInput = document.querySelector('.the-city-name').value

  let inputUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&appid=fa15d8cccc9cad319bc4d2d3f8beacfc`

  const addWeatherToUL = weather => {
    // Find the UL
    let theUL = document.querySelector('ul')

    // Create a new LI
    let newLI = document.createElement('li')

    // make the text content of the LI the NAME of the person
    newLI.textContent = weather.main
    // add the LI to the UL
    theUL.appendChild(newLI)

    // Pull the data from the weather site

    fetch(inputUrl)
      .then(response => {
        return response.json()
      })
      .then(weatherData => {
        addWeatherToUL()
      })
  }
}

document.querySelector('.search').addEventListener('click', button)
// Display data from site

const main = () => {}

document.addEventListener('DOMContentLoaded', main)

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
}

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

const addMainHumidityWeatherToUL = weather => {
  // Find the UL
  let theUL = document.querySelector('ul')

  // Create a new LI
  let newLI = document.createElement('li')

  // make the text content of the LI the NAME of the person
  newLI.textContent = `${weather.main.humidity}`
  // add the LI to the UL
  theUL.appendChild(newLI)
}

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
}

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

class WeatherAPI {
  getWeatherForCity(city) {
    let inputUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cbb5b6537cd4a6eccd9aee04f4400e4e&units=imperial`

    fetch(inputUrl)
      .then(response => {
        return response.json()
      })
      .then(weatherData => {
        let temp = weatherData.main.temp
        let humidity = weatherData.main.humidity

        let windSpeed = weatherData.wind.speed

        let dom = new DocumentObjectModel()
        dom.substitute(temp, humidity, windSpeed)
      })
  }
}

class DocumentObjectModel {
  substitute(temp, humidity, windSpeed) {
    this.appendLI(temp)
    this.appendLI(humidity)
    this.appendLI(windSpeed)
    // let newLI

    // newLI = document.createElement('li')
    // newLI.textContent = temp
    // theUL.appendChild(newLI)

    // newLI = document.createElement('li')
    // newLI.textContent = humidity
    // theUL.appendChild(newLI)
  }

  appendLI(value) {
    let theUL = document.querySelector('ul')

    let newLI = document.createElement('li')
    newLI.textContent = value
    theUL.appendChild(newLI)
  }

  city() {
    let theInput = document.querySelector('.the-city-name').value
    return theInput
  }
}

handleUserClickedSearch = () => {
  let dom = new DocumentObjectModel()
  let city = dom.city()

  let weatherAPI = new WeatherAPI()
  weatherAPI.getWeatherForCity(city)
}

const main = () => {
  document
    .querySelector('.search')
    .addEventListener('click', handleUserClickedSearch)
}
document.addEventListener('DOMContentLoaded', main)

/*class Data {
  constructor() {
    let inputUrl = `https://api.openweathermap.org/data/2.5/weather?q=${theInput}&APPID=cbb5b6537cd4a6eccd9aee04f4400e4e&units=imperial`

    fetch(inputUrl)
      .then(response => {
        return response.json()
      })
      .then(weatherData => {
        addToUL(weatherData)
      })
  }

  city() {
    let theInput = document.querySelector('.the-city-name').value
  }

  substitute() {
    let theUL = document.querySelector('ul')

    let newLI = document.createElement('li')
    newLI.textContent = `${weather.main.temp}`

    theUL.appendChild(newLI)

    let newLI = document.createElement('li')
    newLI.textContent = `${weather.main.sunrise}`

    theUL.appendChild(newLI)

    let newLI = document.createElement('li')
    newLI.textContent = `${weather.main.sunset}`

    theUL.appendChild(newLI)
  }
}
*/

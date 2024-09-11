const config = {
   name: 'Weather API',
   baseUrl: 'https://www.weatherapi.com/confirm.aspx?api_key=',
   apiKey: '4a93a1d9-add9-4224-8772-4a7b2966f40f',
   
}

const cityInput = document.querySelector('#cityInput')
const getWeatherBtn = document.querySelector('#getWeatherBtn')
const weather = document.querySelector('#weather')

getWeatherBtn.addEventListener('click', getWeatherData)



async function getWeatherData() {
   const city = cityInput.value 
   if (!city) {
      alert('Seher daxil et')
      return
   }

   try {
      const response = await fetch(`${config.baseUrl}${config.apiKey}&q=${city}`)
      if (!response.ok) {
         throw new Error('Hava durumu tapilmadi')
      }

      const data = await response.json()
      displayWeatherData(data)
   } catch (error) {
      alert('Hava durumu tapilmadi') 
   }
}

function displayWeatherData(data) {
   weather.textContent = `Seher: ${data.location.name}, Temperatur: ${data.current.temp_c}°C`
}
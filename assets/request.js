const key = 'e5e73ae9a6cd67b5a7258cb9819364d2'

// const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=e5e73ae9a6cd67b5a7258cb9819364d2'

// fetch(baseURL)
//    .then((data) => {
//       console.log('Response', data.json)
//    })
//    .catch((error) => {
//       console.log('Error')
//    })

const requestCity = async (city) => {
   const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
   const query = `?q=${city}&appid=${key}`

   // make fetch call (promise call)
   const response = await fetch(baseURL + query)

   // promise data
   const data = await response.json();
   // console.log(data)
   return data
}
// requestCity('Mumbai')

export async function getCurrentForecast(url) {

    const response = await fetch(url)
    
    const result = await response.json()
    return result
}





            //let icon = obj.weather.icon
          //  img.setAttribute('src', `https://www.weatherbit.io/static/img/icons/${icon}.png`)
          //  p.innerHTML = `${obj.city_name} : ${obj.temp} &#x2103;` 







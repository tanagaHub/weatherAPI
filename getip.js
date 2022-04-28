async function getIP() {
    const ip = '';
    const ur = `https://ipapi.co/${ip}/json/`;
    const response = await fetch(ur)
    const data = await response.json()
    console.log(data);
    
    return [data.region, data.country_code ] 
}

export let [city, countryCode] = await getIP()  



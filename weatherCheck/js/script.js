document.addEventListener("DOMContentLoaded", () => {
    const today = new Date(); 
        const tomorrow = new Date(today); 
        tomorrow.setDate(today.getDate() + 1); 

        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }; 
        const formattedDate = tomorrow.toLocaleDateString('ja-JP', options);

        document.getElementById('date').innerText = `${formattedDate}`;

    const place = document.getElementById("place");
    const prefecture = document.getElementById("prefecture");
    const weatherCheckBtn = document.getElementById("weatherCheckBtn");
    const API_URL = "https://weather.tsukumijima.net/api/forecast/city/";

    place.addEventListener("submit", (e) =>{
        e.preventDefault();
        const id = prefecture.value;

        async function fetchWeatherData() {
            if(id) {
                try {
                    const response = await fetch(`${API_URL}${id}`);
                    const data = await response.json();
                    const tomorrowForecast = data.forecasts[1];
    
                    const updateElement = (id, content) => {
                        document.getElementById(id).innerHTML = content;
                    };

                    updateElement("noId", ``);
    
                    updateElement("weatherImg", `<img src="${tomorrowForecast.image.url}">`);
                    updateElement("weatherTelop", `<p>${tomorrowForecast.telop}</p>`);
                    updateElement("max", tomorrowForecast.temperature.max.celsius || "N/A");
                    updateElement("min", tomorrowForecast.temperature.min.celsius || "N/A");
    
                    const rainTimes = ['T00_06', 'T06_12', 'T12_18', 'T18_24'];
                    rainTimes.forEach((time, index) => {
                        updateElement(`rain${index + 1}`, tomorrowForecast.chanceOfRain[time] || "N/A");
                    });
    
                    updateElement("weatherComment", data.description.bodyText || "No comment available");
               
                } catch (error) {
                    console.error("Error fetching weather data", error);
                }
            } else {
                const noId = document.getElementById("noId");
                noId.innerHTML = `都道府県を選択してください。`;
            }
        }
        fetchWeatherData();
    });
});
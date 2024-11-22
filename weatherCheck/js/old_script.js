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

        if(id) {

            fetch(`${API_URL}${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const tomorrowForecast = data.forecasts[1]
                
                const Img = tomorrowForecast.image.url;
                const weatherImg = document.getElementById("weatherImg");
                weatherImg.innerHTML = `<img src="${Img}">`;

                const weather = tomorrowForecast.telop;
                const weatherTelop = document.getElementById("weatherTelop");
                weatherTelop.innerHTML = `<p>${weather}</p>`;

                const temperatureMax = tomorrowForecast.temperature.max.celsius;
                const max = document.getElementById("max");
                max.innerHTML = `${temperatureMax}`;

                const temperatureMin = tomorrowForecast.temperature.min.celsius;
                const min = document.getElementById("min");
                min.innerHTML = `${temperatureMin}`;

                const  rain1Text= tomorrowForecast.chanceOfRain.T00_06;
                const rain1 = document.getElementById("rain1");
                rain1.innerHTML = `${rain1Text}`;

                const  rain2Text= tomorrowForecast.chanceOfRain.T06_12;
                const rain2 = document.getElementById("rain2");
                rain2.innerHTML = `${rain2Text}`;

                const  rain3Text= tomorrowForecast.chanceOfRain.T12_18;
                const rain3 = document.getElementById("rain3");
                rain3.innerHTML = `${rain3Text}`;

                const  rain4Text= tomorrowForecast.chanceOfRain.T18_24;
                const rain4 = document.getElementById("rain4");
                rain4.innerHTML = `${rain4Text}`;

                const commentText= data.description.bodyText;
                const comment = document.getElementById("weatherComment");
                comment.innerHTML = `${commentText}`;
            });
        }
    });
});
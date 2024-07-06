document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
            document.getElementById('weather').innerText = `Weather: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('City not found');
        });
});

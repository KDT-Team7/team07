const apiKey = "1114bcc2faec7334042e3c7b932dc4a2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

fetch(`${apiUrl}?q=seoul&appid=${apiKey}&units=metric&lang=kr`)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.main.temp.toFixed(1);
    const feels_like = data.main.feels_like.toFixed(1);
    const max_temp = data.main.temp_max.toFixed(1);
    const min_temp = data.main.temp_min.toFixed(1);
    const humidity = data.main.humidity.toFixed(1);
    const wind_speed = data.wind.speed.toFixed(1);
    const description = data.weather[0].description;
    const id = data.weather[0].id;
    비 
    //const id = 300;
    //번개 
    //const id = 1;
    //안개 
    //const id = 700;
    //맑음 
    //const id = 800;
    

    let iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    console.log("Current: ", data);

    $(".iconDes").html(`
        <img src="${iconURL}" alt="weatherIcon" style ="width:200px; height:200px">
        <p>${description}</p>
        `);

    $(".tempFeels").html(`
          <h1>${temperature}°C</h1>
          <p>체감온도: ${feels_like}°C</p>
          `);

    $(".misc").html(`
          <p>습도: ${humidity}%</p>
          <p>최고온도: ${max_temp}°C</p>
          <p>최저온도: ${min_temp}°C</p>
          <p>풍속: ${wind_speed}m/s</p>
          
          
        `);

    weatherBackground(id);

    function weatherBackground(id) {
      console.log("hi!");
      if (id >= 300 && id < 532) {
        if (matchMedia("screen and (min-width: 1510px)").matches) {
          $("video").html(`
                  <source src="./weather/rain.mp4" type="video/mp4" />
                  <strong>Your browser does not support the video tag.</strong>`);
        } else {
          $("video").html(`
                  <source src="./weather/vertRainy.mp4" type="video/mp4" />
                  <strong>Your browser does not support the video tag.</strong>`);
        }
      } else if (id == 800) {
        if (matchMedia("screen and (min-width: 1510px)").matches) {
          $("video").html(`
                  <source src="./weather/sunny.mp4" type="video/mp4" />
                  <strong>Your browser does not support the video tag.</strong>`);
        } else {
          $("video").html(`
                  <source src="./weather/vertSunny.mp4" type="video/mp4" />
                  <strong>Your browser does not support the video tag.</strong>`);
        }
      } else if (id < 250) {
        $("video").html(`
                <source src="./weather/thunder.mp4" type="video/mp4" />
                <strong>Your browser does not support the video tag.</strong>`);
      } else if (id >= 700 && id < 800) {
        if (matchMedia("screen and (min-width: 1510px)").matches) {
          $("video").html(`
                  <source src="./weather/mist.mp4" type="video/mp4" />
                  <strong>Your browser does not support the video tag.</strong>`);
        } else {
          $("video").html(`
                  <source src="./weather/vertMist.mp4" type="video/mp4" />
                  <strong>Your browser does not support the video tag.</strong>`);
        }
      } else if (id > 800) {
        if (matchMedia("screen and (min-width: 1510px)").matches) {
          $("video").html(`
                  <source src="./weather/Cloudy.mp4" type="video/mp4" />
                  <strong>Your browser does not support the video tag.</strong>`);
        } else {
          $("video").html(`
                  <source src="./weather/vertCloudy.mp4" type="video/mp4" />
                  <strong>Your browser does not support the video tag.</strong>`);
        }
      }
    }
  })

  .catch((error) => {
    // Handle any errors
    console.error("Error:", error);
  });

$.getJSON(
  `https://api.openweathermap.org/data/2.5/forecast?q=seoul&appid=${apiKey}&lang=kr`,
  function (forecastData) {
    for (let i = 0; i < 8; i++) {
      let newTd = document.createElement("td");
      $(newTd).html(`
            <p>${(i + 1) * 3}시</p>
            <img src="https://openweathermap.org/img/wn/${
              forecastData.list[i].weather[0].icon
            }@2x.png" alt="weatherIcon" >
              <p>${forecastData.list[i].weather[0].description}</p>
              `);
      if (i < 4) {
        $(".row1").append(newTd);
      } else {
        $(".row2").append(newTd);
      }
    }
    console.log("Forecast: ", forecastData);
  }
);

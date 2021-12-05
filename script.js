const form = document.querySelector(".top-banner form");
var currentWeatherDiv = document.querySelector("#current_weather")
var inputVal;


form.addEventListener("submit", e => {
  e.preventDefault();
   inputVal = searchInput.value.trim();
   fetchCoords (inputVal);
});
const apiKey = '766e3a461e7c5c1aeb62f9f790ebd774';
var searchInput = document.getElementById("search-input")
//const inputVal = input.value;
 
 function appendToHistory(search){
  //to be coded
}
function renderWeatherItems(city,data){
  //to be coded
  console.log (data)
  var temp = data.current.temp
  var wind_speed = data.current.wind_speed
  var humidity = data.current.humidity 
  var uvi = data.current.uvi
  console.log (temp)
  // var current_box = document.createElement ("div")
  var title = document.createElement ("h2")
  var tempEl = document.createElement ("p")
  var windEl = document.createElement ("p")
  var humidityEl = document.createElement ("p")
  var uviEl = document.createElement ("p")
  tempEl.textContent = `temp: ${temp}`;
  windEl.textContent = `wind speed: ${wind_speed}`
  humidityEl.textContent = `humidity: ${humidity}`
  uviEl.textContent = `uvi: ${uvi}`
  currentWeatherDiv.append(tempEl,windEl,humidityEl,uviEl)
  
}


function fetchWeather(search){
  //to be coded
  let { lat } = search;
  let { lon } = search;
  let city = search.name; 
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
  fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log("data", data);
  renderWeatherItems(city,data)
  })
  .catch(function (err) {
    console.error(err);
  });
}
function fetchCoords(search) {
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`;
  var url = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${apiKey}`; 
console.log ("url",url);
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log("data", data);
      if (!data[0]) {
        alert('Location not found');
      } else {
        appendToHistory(search);
        fetchWeather(data[0]);
      }
    })
    .catch(function (err) {
      console.error(err);
    });
  }


//     //const { main, name, sys, weather } = data;
//    /*
//     const icon = `https://openweathermap.org/img/wn/${
//       weather[0]["icon"]
//     }@2x.png`;
//      */
//     const li = document.createElement("li");
//     li.classList.add("city");
//     const markup = `
//       // <h2 class="city-name" data-name="${name},${sys.country}">
//         <span>${name}</span>
//         <sup>${sys.country}</sup>
//       </h2>
//       <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
//       </div>
//       <figure>
//         <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
//         <figcaption>${weather[0]["description"]}</figcaption>
//       </figure>
//     `;
//     li.innerHTML = markup;
//     list.appendChild(li);
//     msg.textContent = "";
//     form.reset();
//     input.focus();

//     //BEFORE
// const icon = `https://openweathermap.org/img/wn/${
//   weather[0]["icon"]
// }@2x.png`;
 
// //AFTER
//  icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
//   weather[0]["icon"]
// }.svg`;

// const listItems = list.querySelectorAll(".ajax-section .city");
// const listItemsArray = Array.from(listItems);
 
// if (listItemsArray.length > 0) {
//   //2
//   const filteredArray = listItemsArray.filter(el => {
//     let content = "";
//     //athens,gr
//     if (inputVal.includes(",")) {
//       //athens,grrrrrr->invalid country code, so we keep only the first part of inputVal
//       if (inputVal.split(",")[1].length > 2) {
//         inputVal = inputVal.split(",")[0];
//         content = el.querySelector(".city-name span").textContent.toLowerCase();
//       } else {
//         content = el.querySelector(".city-name").dataset.name.toLowerCase();
//       }
//     } else {
//       //athens
//       content = el.querySelector(".city-name span").textContent.toLowerCase();
//     }
//     return content == inputVal.toLowerCase();
//   });
   
//   //3
//   if (filteredArray.length > 0) {
//     msg.textContent = `You already know the weather for ${
//       filteredArray[0].querySelector(".city-name span").textContent
//     } ...otherwise be more specific by providing the country code as well 😉`;
//     form.reset();
//     input.focus();
//     //return;
//   }
// }

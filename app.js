let input = document.getElementById('input_text');
let main = document.getElementById('name');
let temp = document.getElementById('temp');
let desc = document.getElementById('desc');
let button = document.getElementById('submit');
let weatherIcon = document.getElementById('icon');


document.getElementById("card").style.display = "none";
  
button.addEventListener('click', async () => {
  try {
    document.getElementById("firstLoader").style.display = "block";
    document.getElementById("card").style.display = "none";

    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q='
     +input.value+
     '&units=metric&appid=50a7aa80fa492fa92e874d23ad061374');
    const data = await res.json();

   
    main.innerHTML = data.name;
    desc.innerHTML = data.weather[0].description;
    temp.innerHTML = "Temp - " + data.main.temp + "<sup>°C</sup>";
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    input.value = "";

    document.getElementById("card").style.display = "block";
    document.getElementById("firstLoader").style.display = "none";
  }
   catch (e) {
    alert("Wrong city name!")
  }
})

  
async function onloadPage() {
  try {
   
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q='
     +'iran'+
     '&units=metric&appid=50a7aa80fa492fa92e874d23ad061374');

    const data = await res.json();
       
    main.innerHTML = data.name;
    desc.innerHTML = data.weather[0].description;
    temp.innerHTML = "Temp - " + data.main.temp + "<sup>°C</sup>";
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    input.value = "";

    document.getElementById("card").style.display = "block";
    document.getElementById("firstLoader").style.display = "none";
  }
   catch (e) {
    alert("Wrong city name!")
  }
}
button.onload = onloadPage();

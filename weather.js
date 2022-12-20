//Complete the Weather API Backend part using openweathermap api
const main = document.getElementById('main');
// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=warangal&appid=7ff4e1d65f46658866cc0d6cdbcad714'
)
  .then((res) => res.json())
  .then((data) => {
    let articles = data;
    let report = document.createElement('div');
    let abc = document.createElement('div');
    abc.innerText = articles.name;
    abc.setAttribute('class', 'name');
    let city = document.createElement('div');
    city.innerText = articles.name + ',' + articles.sys.country;
    city.setAttribute('class', 'set');
    let date = document.createElement('div');
    date.innerText = new Date();
    let temp = document.createElement('div');
    temp.innerText = Math.floor(articles.main.temp - 273) + '°C';
    temp.setAttribute('class', 'temp');
    let status = document.createElement('div');
    status.innerText = articles.weather[0].main;
    status.setAttribute('class', 'state');
    let max_min = document.createElement('div');
    max_min.innerText =
      Math.floor(articles.main.temp_max - 273) +
      '°C' +
      '/' +
      Math.floor(articles.main.temp_min - 273) +
      '°C';
    max_min.setAttribute('class', 'last');
    console.log(articles);

    report.append(abc);
    report.append(city);
    report.append(date);
    report.append(temp);
    report.append(status);
    report.append(max_min);
    main.append(report);
  });

//m1
// async function F(city) {
//   const url =
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//     city +
//     "&appid=740857a220614055cc6f1db9838f7f65";

//   const fetchedData = await fetch(url);
//   const data = await fetchedData.json();

//   console.log(data);

//   return { name: `${data.name}`, temp: `${data.main.temp}` };
// }

//m2
function F(city) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=740857a220614055cc6f1db9838f7f65";

  let data = fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return { name: `${data?.name}`, temp: `${data.main?.temp}` };
    });

  return data;
}

//m1
// document.getElementById("i2").addEventListener("click", async () => {
//   const city = document.getElementById("i1").value;
//   const { name, temp } = await F(city);

//   document.getElementById("insidew").innerHTML = `${name}`;
//   document.getElementById("insidet").innerHTML =
//     Math.round(`${temp}` - 273.15) + "deg Celcius";
// });

//m2
document.getElementById("i2").addEventListener("click", () => {
  const city = document.getElementById("i1").value;

  F(city)
    .then(({ name, temp }) => {
      document.getElementById("insidew").innerHTML = `${name}`;
      document.getElementById("insidet").innerHTML =
        Math.round(`${temp}` - 273.15) + "deg Celsius";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

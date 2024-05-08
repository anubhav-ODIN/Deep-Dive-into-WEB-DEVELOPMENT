async function fetchCityData(cityname) {
    let data = await fetch("http://api.weatherapi.com/v1/current.json?key=4a12569480b0417f9cd154529240404&q=" + cityname + "&aqi=no");

    return await data.json();
 }

 const input_field = document.querySelector("#city_name");
 const submit_button = document.querySelector("#button");
 

 const cn = document.querySelector("#cn");
 const cl = document.querySelector("#cl");
 const ct = document.querySelector("#ct");
 const fl = document.querySelector("#fl");

 submit_button.addEventListener("click", async () => {
     let data = await fetchCityData(input_field.value);
     cn.innerText = input_field.value;
     cl.innerText=data.location.country;
     ct.innerText=data.current.temp_c+"deg C";
     fl.innerText=data.current.feelslike_c+"deg C";
     console.log(data);
 });


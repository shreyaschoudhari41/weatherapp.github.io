var input = document.querySelector('.input_text');
var button = document.querySelector('.submit');
var Name = document.querySelector('#cityname');
var position = document.querySelector('.position');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var clouds = document.querySelector('.clouds');
var desc = document.querySelector('.desc');
var result = document.querySelector('.result');

button.addEventListener('click',()=>{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=3c79009554eeb4dd7cd8c5ff03b866c6')
  .then(response => response.json())
  .then(data =>
    {
      Name.innerHTML= data['name'] ;
      position.innerHTML = "location ("+data['coord']['lon']+","+ data['coord']['lat']+" )";
      temp.innerHTML = "Temperature : "+data['main']['temp'];
      humidity.innerHTML = "Humidity : "+data['main']['humidity'];
      desc.innerHTML = data['weather'][0]['description'];
       console.log(data);
    })
    .catch(err => alert("Wrong City Name"));
});
button.addEventListener('click',()=>{

  let width = screen.width;
  if(width>1020)
  {
    result.classList.toggle('animate');
  }
})





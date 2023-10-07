var inputs=document.getElementsByClassName("inputs")
var email=document.getElementById("email");
var password=document.getElementById("password");
var btnLogIn=document.getElementById("btn-logIn");
var btnSignUp=document.getElementById("btn-signUp")
var firstName=document.getElementById("first-Name");
var lastName=document.getElementById("last-Name");
var emailsignUp=document.getElementById("email-signUp")
var passwordSignUp=document.getElementById("password-signUp")
var age=document.getElementById("age")
var inputSearch=document.getElementById("input-Search");
var btnSearch=document.getElementById("btn-Search");
var temp=document.getElementById("temp");
var city=document.getElementById("city"); 
var humidity=document.getElementById("humidity");
var wind=document.getElementById("wind");
var weatherIcon=document.getElementById("weatherIcon")
var text=document.getElementById("text-Error");
var btnText=document.getElementById("btn-text");
var errorWeather=document.querySelector(".error-Weather");
var stars1=document.getElementById("main-stars")
var moon=document.getElementById("main-moon");
var mountains3=document.getElementById("main-mountains3");
var mountains4=document.getElementById("main-mountains4");
var river=document.getElementById("main-river");
var boat=document.getElementById("main-boat");
var nouvil=document.getElementById("nouvil");
var main=document.querySelector(".main-home");

window.onscroll=function()
{
  let value =scrollY;
  stars1.style.left=value +"px";
  moon.style.top=value *4 +"px";
  mountains3.style.top=value *2 +"px";
  mountains4.style.top=value *1.5 +"px";
  river.style.top=value + "px";
  boat.style.top=value + "px";
  boat.style.left=value * 3 +"px";
  nouvil.style.fontSize=value +"px";
  if(scrollY>=53){
    nouvil.style.fontSize=53 +"px";
    nouvil.style.position="fixed";
    if(scrollY>=360){
      nouvil.style.display="none";
    }
    else
    {
      nouvil.style.display="block";
    }
  }
if(scrollY>=125){
 main.style.background="linear-gradient(#376281,#10001f)";
}
else{
  main.style.background="#1a0818";
}
}

$(".nav-Two").hide();
$(".signIn").hide();
$(".signUp").hide();
$(".home").hide();
$('.weathers').hide();
$(".text-Error").hide();


$(".email").click(function(){
  $(".email").css({"background":"#772d62d0"});
})    
$(".password").click(function(){
  $(".password").css({"background":"#772d62d0"});
})
$(".email-signUp").click(function(){
  $(".email-signUp").css({"background":"#772d62d0"});
}) 
$(".password-signUp").click(function(){
  $(".password-signUp").css({"background":"#772d62d0"});
})
$(".first-Name").click(function(){
  $(".first-Name").css({"background":"#772d62d0"});
})    
$(".last-Name").click(function(){
  $(".last-Name").css({"background":"#772d62d0"});
})
$(".age").click(function(){
  $(".age").css({"background":"#772d62d0"});
})
$(".btn-nav-signIn").click(function(){
  $(".signIn").show();
  $(".My-could").hide();
  $(".signUp").hide();
  $(".btn-nav-signUp").css({"font-weight":"500"})
  $(".btn-nav-signIn").css({"font-weight":"900"})
})
$(".btn-nav-signUp").click(function(){
  $(".signIn").hide();
  $(".My-could").hide();
  $(".signUp").show();
  $(".btn-nav-signUp").css({"font-weight":"900"})
  $(".btn-nav-signIn").css({"font-weight":"500"})
})
$(".btn-nav-My-Could").click(function(){
  $(".signIn").hide();
  $(".My-could").show();
  $(".signUp").hide();
  $(".btn-nav-signUp").css({"font-weight":"500"})
  $(".btn-nav-signIn").css({"font-weight":"500"})


})
$(".btn-Register").click(function(){
  $(".signIn").hide();
  $(".My-could").hide();
  $(".signUp").show();
})
$(".btn-nav-Home").click(function(){
  $(".signIn").hide();
  $(".My-could").hide();
  $(".signUp").hide();
  $(".home").show();
  $('.weathers').hide();
  $(".btn-nav-Home").css({"font-weight":"900"})
  $(".btn-nav-Weather").css({"font-weight":"100"})
})
$(".btn-nav-Weather").click(function(){
  $(".signIn").hide();
  $(".My-could").hide();
  $(".signUp").hide();
  $(".home").hide();
  $('.weathers').show();
  $(".btn-nav-Home").css({"font-weight":"100"})
  $(".btn-nav-Weather").css({"font-weight":"900"})
})
$('.slide').hiSlide();
$('#mySlide').hiSlide({
  interval: 3000,
  speed: 500
});

function clearSignUp(){
  for(var i=0; i<inputs.length; i++)
  {
   inputs[i].value="";
  }
 }

 async function chackSignUp()
{
  product={
    first_name:firstName.value,
    last_name:lastName.value,
    email:emailsignUp.value,
    password:passwordSignUp.value,
    age:age.value,
  }

let response = await axios.post("https://movies-api.routemisr.com/signup",product);
  console.log(response)
  if(response.data.message=="success"){
  alert("The account was created successfully")
  $(".signIn").show();
  $(".My-could").hide();
  $(".signUp").hide();
  $(".text-Error").hide();
  clearSignUp();
}
else{
  $(".text-Error").show();
  text.innerHTML=response.data.message;
  $(".text-Error").fadeOut(5000);
}
}
btnSignUp.addEventListener("click",chackSignUp)


async function chacklogin(){

  product={
  email:email.value,
  password:password.value,
}
 let response = await axios.post("https://movies-api.routemisr.com/signin",product);
  if(response.data.message=="success"){
    $(".signIn").hide();
    $(".My-could").hide();
    $(".signUp").hide();
    $(".nav-one").hide();
    $(".home").show();
    $(".nav-Two").show();
    btnText.innerHTML=email.value.charAt(0);
  }
  else{
    $(".text-Error").show();
    text.innerHTML=response.data.message;
    $(".text-Error").fadeOut(5000);

  }
}
btnLogIn.addEventListener("click",chacklogin)



async function chackWeather(){
  var response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputSearch.value}&appid=eb8e86b4eea9b5e3bb00f71d87e19d79&units=metric`)
if(response.status==404) 
{
  $(".weather").css({"display":"none"})
  $(".error-Weather").show();
  errorWeather.innerHTML="city not found";
}
else 
{
  $(".weather").css({"display":"block"})
  $(".error-Weather").hide();
}
 var data=await response.json();
  city.innerHTML=data.name;
  humidity.innerHTML=data.main.humidity +"%";
  temp.innerHTML=Math.round(data.main.temp)+"C";
  wind.innerHTML=data.wind.speed + "km/h";
  console.log(data)

  if(data.weather[0].main=='Clouds'){
    weatherIcon.src="imges/clouds.png";
    weatherIcon.alt="cloud";
  }
  else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="imges/drizzle.png";
    weatherIcon.alt="drizzle";

  }
 else if(data.weather[0].main=="Mist"){
    weatherIcon.src="imges/mist.png";
    weatherIcon.alt="mist";
  }
  else if(data.weather[0].main=="Rain"){
    weatherIcon.src="imges/rain.png";
    weatherIcon.alt="rain";

  }
  else if(data.weather[0].main=="Snow"){
    weatherIcon.src="imges/snow.png";
    weatherIcon.alt="snow";
  }
}

btnSearch.addEventListener("click",chackWeather)








































	
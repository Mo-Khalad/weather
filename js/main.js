var inputs=document.getElementsByClassName("inputs")
var email=document.getElementById("email");
var password=document.getElementById("password");
var btnLogIn=document.getElementById("btn-logIn");
var btnSignUp=document.getElementById("btn-signUp")
var first_name=document.getElementById("name");
var rePassword=document.getElementById("rePassword");
var emailSignUp=document.getElementById("email-signUp")
var passwordSignUp=document.getElementById("password-signUp")
var phone=document.getElementById("phone")
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
var My_Cloud=document.getElementById("My-Cloud");
var main=document.querySelector(".main-home");
var btnLogOut =document.getElementById("btn-logOut")

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
  My_Cloud.style.fontSize=value +"px";
  if(scrollY>=53){
    My_Cloud.style.fontSize=53 +"px";
    My_Cloud.style.position="fixed";
    if(scrollY>=360){
      My_Cloud.style.display="none";
    }
    else
    {
      My_Cloud.style.display="block";
    }
  }
if(scrollY>=125){
 main.style.background="linear-gradient(#376281,#10001f)";
}
else{
  main.style.background="#1a0818";
}
}

$(".text-Error").hide();
$("#email").click(function(){
  $("#email").css({"background":"#772d62d0"});
})    
$("#password").click(function(){
  $("#password").css({"background":"#772d62d0"});
})
$("#email-signUp").click(function(){
  $("#email-signUp").css({"background":"#772d62d0"});
}) 
$("#password-signUp").click(function(){
  $("#password-signUp").css({"background":"#772d62d0"});
})
$("#name").click(function(){
  $("#name").css({"background":"#772d62d0"});
})    
$("#phone btn-Register").click(function(){
  $("#phone").css({"background":"#772d62d0"});
})
$("#phone").click(function(){
  $("#phone").css({"background":"#772d62d0"});
})
$(".btn-nav-signIn").click(function(){
  $(".signIn").show();
  $(".My-could").hide();
  $(".signUp").hide();
  $(".btn-nav-signUp").css({"font-weight":"500"})
  $(".btn-nav-signIn").css({"font-weight":"900"})
  clearSignUp();
})
$(".btn-nav-signUp").click(function(){
  $(".signIn").hide();
  $(".My-could").hide();
  $(".signUp").show();
  $(".btn-nav-signUp").css({"font-weight":"900"})
  $(".btn-nav-signIn").css({"font-weight":"500"})
  clearSignUp();
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
  $(".btn-nav-signUp").css({"font-weight":"900"})
  $(".btn-nav-signIn").css({"font-weight":"500"})
})
$(".btn-nav-Home").click(function(){
  $(".signIn").hide();
  $(".My-could").hide();
  $("card").hide()
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
  speed: 500 })

var token = JSON.parse(localStorage.getItem("success"))
var character = JSON.parse(localStorage.getItem("email"))

if((token!==null)){  
    $(".signIn").hide();
    $(".My-could").hide();
    $(".signUp").hide();
    $(".nav-one").hide();
    $(".home").show();
    $(".nav-Two").show();
    $(".weathers").hide();
    $(".btn-nav-Home").css({"font-weight":"900"})
    $(".btn-nav-Weather").css({"font-weight":"100"})
    btnText.innerHTML= character?.data.user.email.charAt(0)
}
else{
$(".nav-Two").hide();
$(".signIn").hide();
$(".signUp").hide();
$(".home").hide();
$('.weathers').hide();
};

btnLogOut.addEventListener( "click" , function(){
localStorage.removeItem("success")
  $(".signIn").hide();
  $(".My-could").show();
  $(".signUp").hide();
  $(".nav-Two").hide();   
  $(".home").hide();
  $(".nav-one").show();
  $(".btn-nav-signUp").css({"font-weight":"500"})
  $(".btn-nav-signIn").css({"font-weight":"500"})
  $(".card").hide()
})

function clearSignUp(){
  for(var i=0; i<inputs.length; i++)
  {
   inputs[i].value="";
   inputs[i].style.background = "#2a0828"
  }
 }

 async function checkSignUp()
{
  product={
    name:first_name.value,
    email:emailSignUp.value,
    password:passwordSignUp.value,
    rePassword:rePassword.value,
    phone:phone.value,
  }

try {
$("#btn-signUp").attr("disabled" , true)
let response = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", product);
$("#btn-signUp").attr("disabled" , false)
if(response.data.message=="success"){
  $(".signIn").show();
  $(".My-could").hide();
  $(".signUp").hide();
  $(".text-Error").hide();
}
} catch (error){
  $("#btn-signUp").attr("disabled" , false)
  $(".text-Error").show();
  text.innerHTML= error?.response?.data.errors.msg ;
  $(".text-Error").fadeOut(5000);
} 
}

btnSignUp.addEventListener("click",checkSignUp)
async function checkLogin(){
 if(email.value ==='' || password.value ===""){
    $("#text-Error").show();
    text.innerHTML="Make sure you enter all valid data";
    $("#text-Error").fadeOut(5000);
} 
else{  
  product={
  email:email.value,
  password:password.value,
}

 try{
  $("#btn-logIn").attr("disabled" , true)
  let response = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin" , product);
  $("#btn-logIn").attr("disabled" , false)

  if(response.data.message==="success"){
    localStorage.setItem("success" , JSON.stringify(response.data.token))
    $(".signIn").hide();
    $(".My-could").hide();
    $(".signUp").hide();
    $(".nav-one").hide();
    $(".home").show();
    $(".nav-Two").show();   
    $(".card").hide();  
    btnText.innerHTML = email.value.charAt(0);
    clearSignUp();
  } 
} catch (error){  
   $("#btn-logIn").attr("disabled" , false)
   $(".text-Error").show();  
   text.innerHTML= error?.response.data.message;
   $(".text-Error").fadeOut(5000);
}
 }
}

btnLogIn.addEventListener("click",checkLogin)

async function checkWeather(){
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

  if(data.weather[0].main=='Clouds'){    
    weatherIcon.src="images/clouds.png";
    weatherIcon.alt="cloud";
  }
  else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/drizzle.png";
    weatherIcon.alt="drizzle";
  }
 else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/mist.png";
    weatherIcon.alt="mist";
  }
  else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/rain.png";
    weatherIcon.alt="rain";

  }
  else if(data.weather[0].main=="Snow"){
    weatherIcon.src="images/snow.png";
    weatherIcon.alt="snow";
  }
}

btnSearch.addEventListener("click",checkWeather)








































	
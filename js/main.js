/*Navbar */
var userCharacter=document.getElementById("user-character");
var main=document.querySelector(".main-home");
var btnLogOut=document.getElementById("btn-logOut");

/* Authentication */
var inputs=document.getElementsByClassName("inputs");
var email=document.getElementById("email");
var password=document.getElementById("password");
var btnLogIn=document.getElementById("btn-logIn");
var btnSignUp=document.getElementById("btn-signUp");
var first_name=document.getElementById("name");
var rePassword=document.getElementById("rePassword");
var emailSignUp=document.getElementById("email-signUp")
var passwordSignUp=document.getElementById("password-signUp");
var phone=document.getElementById("phone");
var textError=document.getElementById("text-Error");

/* Animation Images */
var My_Cloud=document.getElementById("My-Cloud");
var temp=document.getElementById("temp");
var city=document.getElementById("city"); 
var humidity=document.getElementById("humidity");
var wind=document.getElementById("wind");
var weatherIcon=document.getElementById("weatherIcon");
var stars1=document.getElementById("main-stars");
var moon=document.getElementById("main-moon");
var mountains3=document.getElementById("main-mountains3");
var mountains4=document.getElementById("main-mountains4");
var river=document.getElementById("main-river");
var boat=document.getElementById("main-boat");

/* Weather Page */
var searchInput=document.getElementById("search-input");
var btnSearch=document.getElementById("btn-Search");
var errorWeather=document.querySelector(".error-Weather");

/* Get Items on localStorage */
var token = JSON.parse(localStorage.getItem("success"));
var storedCharacter= JSON.parse(localStorage.getItem("email"));

// Display pages if an account exists 
if((token!==null)){  
  $(".signIn-page").hide();
  $(".My-could-page").hide();
  $(".signUp-page").hide();
  $(".nav-one").hide();
  $(".weather-page").show();
  $(".home-page").show();
  $(".nav-Two").show();
  $(".btn-nav-Home").css({"font-weight":"900"})
  $(".btn-nav-Weather").css({"font-weight":"100"})

  if(storedCharacter!==null){
    userCharacter.innerHTML= storedCharacter
  }else userCharacter.innerHTML= character?.data.user.email.charAt(0)
}
// Display pages if For a first visit.
else{
  $(".nav-Two").hide();
  $(".signIn-page").hide();
  $(".signUp-page").hide();
  $(".home-page").hide();
  $('.weather-page').hide();
  $(".My-could-page").show()
  $(".nav-one").show();
};

// Clear Fields Function
function clearFields(){
  for(var i=0; i<inputs.length; i++){
   inputs[i].value="";
   inputs[i].style.background = "#2a0828"
  }
}

// smooth scroll function
$(".smooth").click(function (e) {
  e.preventDefault();

  $("html, body").stop().animate({
    scrollTop: $($(this).attr("href")).offset().top
  }, 2000, "linear");
});

// Scroll Images Animation Function
window.onscroll=function(){
  let value =scrollY;
  stars1.style.left=value +"px";
  moon.style.top=value *4 +"px";
  mountains3.style.top=value *2 +"px";
  mountains4.style.top=value *1.5 +"px";
  river.style.top=value + "px";
  boat.style.top=value + "px";
  boat.style.left=value * 3 +"px";
  My_Cloud.style.fontSize=value +"px";
 
  if(scrollY>=54){
    My_Cloud.style.fontSize=53 +"px";
    My_Cloud.style.position="fixed";
    if(scrollY>=360){
      My_Cloud.style.display="none";
    }
    else{
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

// Change The Background Color When Clicking On The Field Functions
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
$("#rePassword").click(function(){
  $("#rePassword").css({"background":"#772d62d0"});
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

// Display Pages function
function displayPage(showPage , hidePage1 , hidePage2 , buttonFocus , buttonNormal){ 
  $(`.${showPage}`).show();
  $(`.${hidePage1}`).hide();
  $(`.${hidePage2}`).hide();
  $(`.${buttonFocus}`).css({"font-weight":"900"});
  $(`.${buttonNormal}`).css({"font-weight":"500"});
  clearFields();
}

// Display Sign In Page //
$(".btn-nav-signIn").click( function (){
  displayPage(
    showPage='signIn-page',
    hidePage1='signUp-page',
    hidePage2='My-could-page',
    buttonFocus='btn-nav-signIn',
    buttonNormal= "btn-nav-signUp"
)});

// Display Sign Up Page //
$(".btn-nav-signUp").click( function (){
  displayPage(
    showPage='signUp-page',
    hidePage1='signIn-page',
    hidePage2='My-could-page',
    buttonFocus='btn-nav-signUp',
    buttonNormal= "btn-nav-signIn",
)})  

$(".btn-Register").click( function(){
   displayPage(
    showPage='signUp-page',
    hidePage1='signIn-page',
    hidePage2='My-could-page',
    buttonFocus='btn-nav-signUp',
    buttonNormal= "btn-nav-signIn",
   )
})

// Display My-Could Page 
$(".btn-nav-My-Could").click( function(){
  displayPage(
    showPage='My-could-page',
    hidePage1='signIn-page',
    hidePage2='signUp-page',
    buttonFocus="btn-nav-My-Could",
    buttonNormal="btn-nav-signIn",
  )
  $(".btn-nav-signUp").css({"font-weight":"500"});
})  

// Display Home Page
$(".btn-nav-Home").click(function(){
  $(".btn-nav-Home").css({"font-weight":"900"});
  $(".btn-nav-Weather").css({"font-weight":"100"});
})

// Display Weather Page
$(".btn-nav-Weather").click(function(){
  $(".btn-nav-Home").css({"font-weight":"100"});
  $(".btn-nav-Weather").css({"font-weight":"900"});  
})

// LogOut Function
btnLogOut.addEventListener( "click" , function(){
localStorage.removeItem("success")
  $(".signIn-page").hide();
  $(".My-could-page").show();
  $(".signUp-page").hide();
  $(".nav-Two").hide();   
  $(".home-page").hide();
  $('.weather-page').hide();
  $(".nav-one").show();
  $(".btn-nav-signUp").css({"font-weight":"500"})
  $(".btn-nav-signIn").css({"font-weight":"500"})
  $(".card").hide()
})

// Sign Up Function 
async function checkSignUp(){
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
  $(".signIn-page").show();
  $(".My-could-page").hide();
  $(".signUp-page").hide();
  $(".text-Error").hide();
  $('.weather-page').hide();
}
} catch (error){
  $("#btn-signUp").attr("disabled" , false)
  $(".text-Error").show();
  
  textError.innerHTML= error?.response ? error?.response?.data.errors.msg :'Something went wrong, try again later!'
  $(".text-Error").fadeOut(5000);
} 
}
btnSignUp.addEventListener("click",checkSignUp)

// LogIn Function
async function checkLogin(){
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
    localStorage.setItem("email" , JSON.stringify(email.value.charAt(0)))    
    $(".signIn-page").hide();
    $(".My-could-page").hide();
    $(".signUp-page").hide();
    $(".nav-one").hide();
    $(".home-page").show();
    $(".nav-Two").show();   
    $(".card").hide();
    $(".weather-page").show();  
    $(".card").show();
    $(".btn-nav-Weather").css({"font-weight":"100"});
    $(".btn-nav-Home").css({"font-weight" :"900"});
   
    userCharacter.innerHTML = email.value.charAt(0);
    clearFields();
  } 
} catch (error){  
   $("#btn-logIn").attr("disabled" , false)
   $(".text-Error").show();  
     textError.innerHTML= error?.response ? error?.response?.data.errors.msg :'Something went wrong, try again later!'
   $(".text-Error").fadeOut(5000);
}
}
btnLogIn.addEventListener("click",checkLogin)

// weather Forecaster function
async function checkWeather(){
   var response =''
   
 response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=eb8e86b4eea9b5e3bb00f71d87e19d79&units=metric`)

 if(searchInput.value === ''){
    $(".weather").css({"display":"none"})
    $(".error-Weather").show();
    errorWeather.innerHTML="Enter The City Name";
}
else if(response.status === 404 || response.status === undefined) {
  $(".weather").css({"display":"none"})
  $(".error-Weather").show();
  errorWeather.innerHTML="City Not Found";
}

else {
  $(".weather").css({"display":"block"})
  $(".error-Weather").hide();
   var data=await response.json();
  city.innerHTML=data.name;
  humidity.innerHTML=data.main.humidity +"%";
  temp.innerHTML=Math.round(data.main.temp)+"C";
  wind.innerHTML=data.wind.speed + "km/h";
console.log(data.weather[0].main);

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
  else if ( data.weather[0].main== "Clear"){
     weatherIcon.src="images/clear.png";
    weatherIcon.alt="clear";
  }
}
}
btnSearch.addEventListener("click",checkWeather)

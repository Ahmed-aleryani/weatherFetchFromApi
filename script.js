let weatherImg = {
  rainy : 'https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'  ,
  windy : 'https://images.pexels.com/photos/4406175/pexels-photo-4406175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200' ,
  snowy : 'https://images.pexels.com/photos/735987/pexels-photo-735987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200' ,
  sunny : 'https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200' 
}

let cityWetherDetails = {
  cityName : '' ,
  degree : '' , 
  weatherStateName : '' ,
  weatherStateAbbr  : '' ,
  day:'',

  currentTime : ''  
} 


//this is the view DOM
let view = document.getElementById('view');
let daysOfWeek=new Array();

var proxy="https://cors-anywhere.herokuapp.com/";

window.addEventListener("DOMContentLoaded",function(){

  var searchForm=document.getElementById("searchForm");

  searchForm.addEventListener("submit",function(event){
    event.preventDefault();
    let cityName=document.getElementById("city");
    if(cityName.value!="")
    queryCity(cityName.value);
    else{
      alert("City name can not be empty");
      return;
    }
  })

  function queryCity(cityName){
      let city=fetch(proxy+`metaweather.com/api/location/search/?query=${cityName}`).then(data=>data.json())
      .then(element=>{
        // console.log(element)
        // return element[0];
         _cityWether(element[0] , getTheDate(Date.now()) );
      })
      .catch(error=>
      alert(error));
      
     
  }
  // getTheImages(cityWetherDetails.weatherStateName);
// id="searchForm">
//       <input type="text" id='city'

  // queryCity("tokyo")
})

_cityWether  = ( cityData , date) =>{
  url=proxy+`metaweather.com/api/location/${cityData.woeid}/${date}/`;
  // console.log(url);
  
  fetch(url)
  .then(respnse => respnse.json())
  .then(data => {
  
    data=data[0]
      // console.log(data)

   for(let i=0;i<7;i++){
       let holdObject=cityWetherDetails;
     daysOfWeek[i]= cityWetherDetails;
     daysOfWeek[i].cityName=cityData.title;
     daysOfWeek[i].degree=data.the_temp;
     daysOfWeek[i].weatherStateName=data.weather_state_name;
     daysOfWeek[i].weatherStateAbbr=data.weather_state_abbr;
     daysOfWeek[i].day=date;
      cityWetherDetails=holdObject;
   holdObject=null;
   }
   //map the daysOfWeek array
   console.log(daysOfWeek);
  }).catch(e => {
    console.log(e)
  })

}

function getTheDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('/');
}

function createElements(weather){
let wDiv = document.getElementById("display");
let pw= document.createElement("p");
  // weather.forEach(e=>)
}
// give the date format like 2013/2/20 
// getTheDate = (date) =>{
// console.log(date)
// //const d = new Date('2010-08-05')
// let d = Date(date)
// const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
// const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
// const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

// console.log(`${da}-${mo}-${ye}`)

// }


// console.log(formatDate(Date.now()))

//this is for bacground image changing


// getTheImages = (state) => {
//   switch (state) {
//       case 'Clear':
//            view.style.bacground = url(weatherImg.sunny)
//           break;
//   case 'Snow':
//            view.style.bacground = url(weatherImg.snowy)
//           break;
  
//   case 'Light Rain':
//   case 'Heavy Rain':
//            view.style.bacground = url(weatherImg.rainy)
//           break;
  
//   case 'Thunderstorm':
//    case 'light Cloud' :
//            view.style.bacground = url(weatherImg.windy)
//           break;
  
//       default:
//            view.style.bacground = url(weatherImg.sunny)
//           break;
//   }
  
   
// }


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
      fetch(`https://www.metaweather.com/api/location/search/?query=${cityName}`).then(data=>data.json())
      .then(element=>console.log(element.woeid))
  }
// id="searchForm">
//       <input type="text" id='city'

  queryCity("tokyo")
})

_cityWether  = ( cityId , date) =>{
  fetch(`https://www.metaweather.com/api/location/${cityId}/${data}/`)
  .then(respnse => respnse.json())
  .then(data => {
   //fill the city wether array
  }).catch(e => {
    console.log(e)
  })

}
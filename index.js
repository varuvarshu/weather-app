function getData()
{
    let city = document.getElementById("query").value
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${query},uk&APPID=a519077335b624ff5ddbb43379599b83`
       fetch(url).then(function(res){
        console.log(res)
       })

}
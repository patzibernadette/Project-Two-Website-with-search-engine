// https://api.giphy.com/v1/gifs/search?api_key=KquNNPgL1wOABIWN5FsFVOhbUUGfS4mM&q=${keyword}&limit=12

// $(document).ready(()=>{


// $("#submit").click(()=>{
//     let userInput = $("#search").val()
//     alert(userInpunt)
//     $.ajax({
//     url:"https://api.giphy.com/v1/gifs/search?api_key=KquNNPgL1wOABIWN5FsFVOhbUUGfS4mM&q=${keyword}&limit=12"
// })
// })    
// $.ajax({
//     url:"https://api.giphy.com/v1/gifs/search?api_key=KquNNPgL1wOABIWN5FsFVOhbUUGfS4mM&q=${keyword}&limit=12"
// })

// })

$.get('https://api.giphy.com/v1/gifs/search?api_key=KquNNPgL1wOABIWN5FsFVOhbUUGfS4mM&q=${keyword}&limit=12').then((data)=>{
    console.log(data)
})
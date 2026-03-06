let results = document.getElementById("results");
let form = document.getElementById("searchForm");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    let keyword = document.getElementById("searchInput").values;

    if (keyword === "") {
        alert("Please enter a search keyword");
        return;
    }
    results.innerHTML = "Loading...";
    fetch('https://api.giphy.com/v1/gifs/search?api_key=KquNNPgL1wOABIWN5FsFVOhbUUGfS4mM&q=${keyword}&limit=12')
     .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        results.innerHTML = ""; 

        data.data.forEach(function (gif){
            let img = document.createElement("img");
            img.src = gif.images.fixed_height.url;
            results.appendChild(img);
        });

    })
    .catch(function (error) {
        results.innerHTML = "Something went wrong.";
        console.log("Error:", error);
    });
});


// https://api.giphy.com/v1/gifs/search?api_key=KquNNPgL1wOABIWN5FsFVOhbUUGfS4mM&q=${keyword}&limit=12




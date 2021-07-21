const searchinput = document.querySelector("#search-input");

searchinput.addEventListener("keydown",function(event){
    if(event.code === "Enter"){
        search();
    }
});

function search(){
    const input = searchinput.value;
    window.location.href = "https://www.google.com/search?q="+ input +"&oq="+ input +"&aqs=chrome..69i57.2240j0j1&sourceid=chrome&ie=UTF-8";
}

// alert("Ajay");
const apiUrl = "https://jsonplaceholder.typicode.com/comments";

function fetchdata(apiUrl) {
   return  fetch(apiUrl)
       .then(response => {

           if (!response.ok) {

               throw new Error(`HTTP error! Status: ${response.status}`);

           }
           return response.json(); 
            } )
}
function filterfirst20comment(data) {
    console.log(data)
    return data.sort((a, b) => a.id - b.id).slice(0, 20);
}
function addlocalstorage(params) {
    if (typeof localStorage !== "undefined") {
        localStorage.setItem("comments", JSON.stringify(params));
        console.log("params", params);
        document.getElementById('output').innerHTML = `<p>added data in local storage successfully${JSON.stringify(params)}</p>`
    } else { 
    console.error("Local storage is not available"); 
  } 
}

fetchdata(apiUrl)
    .then(data => filterfirst20comment(data))
    .then(data => addlocalstorage(data))
    .then(data => console.log('added data in local storage successfully ', data))
.catch(error => console.error("errrorr",error))
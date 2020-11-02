const apiUrl = "https://sv443.net/jokeapi/v2/joke/Any?";
async function getJoke() {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.joke)
    document.getElementById("mydiv").innerHTML=data.joke;

    else
    document.getElementById("mydiv").innerHTML=data.setup;
}

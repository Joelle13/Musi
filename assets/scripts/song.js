//On récupère la div qui va contenir notre lyrics
const lyricsContainer = document.querySelector("#lyrics");
//On stock l'url de base de l'api
const baseUrl = 'https://api.lyrics.ovh/v1/';
//Test d'une url en dur
const testUrl = 'Coldplay/Adventure of a Lifetime';
//On recupère toute la query dans notre url
let queryString = window.location.search;
//on instancie une variable pour traiter la query
let urlParameters = new URLSearchParams(queryString);
//on stock le paramètre song venant de l'inputSong de la page index
let songName = urlParameters.get('song');

//des console log pour checks
console.log('je suis sur la page song');
console.log(songName);

// baseUrl + inputSong.value OR baseUrl + '/' + inputArtist.value + '/' + inputSong.value


//on va fetch nos données en prenant la base url puis en concaténant ce que nous avons besoin
fetch(baseUrl + testUrl, {
    headers: {
        'accept': 'application/json'
    },
}) 
.then(res => res.json())
.then((data) => {
    console.log(data)
    let lyrics = replaceLineBreaks(data.lyrics)
    lyricsContainer.insertAdjacentHTML("beforeend", "<p>"+ lyrics +"</p>")
})


//fonction qui gère les sauts de lignes venant de notre data
function replaceLineBreaks(str){
    return str.replace(/(?:\r\n|\n)/g, '<br>');
   }
// On récupère le formulaire
const searchForm = document.querySelector("#searchForm");
// On récupère l'input
const inputSong = document.querySelector("#songName");

function redirectSong()
{
window.location.href = "song.html?song=" + inputSong.value;    
return false;
}
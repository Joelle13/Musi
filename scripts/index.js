// On récupère le formulaire
const searchForm = document.querySelector("#searchForm");
// On récupère l'input
const inputSong = document.querySelector("#songName");


//on crée un évènement sur le submit du formulaire
searchForm.addEventListener('submit', () => {
    // A FAIRE : doit redirect sur la même window et non en ouvrir une autre
   // window.open("http://127.0.0.1:5500/song.html?song=" + inputSong.value); // on passe en parametre de l'url les informations à traiter dans l'autre page
})

function redirectSong()
{
window.location.href = "song.html?song=" + inputSong.value;    
return false;
}
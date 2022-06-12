let queryString = window.location.search;
//on instancie une variable pour traiter la query
let urlParameters = new URLSearchParams(queryString);
//on stock le paramètre song venant de l'inputSong de la page index
let songName = urlParameters.get('song');




find_music(songName) //A remplacer par la valeur de l'input de la première page
.then((res) => {
  get_video(res).then(url => document.getElementById("video").src = url);
  get_lyrics(res.snippet.title).then(
    (lyrics) =>  {
      document.getElementById("lyrics").innerHTML = replaceLineBreaks(lyrics);
      get_translate(lyrics)
      .then(translate => document.getElementById("traduction").innerHTML = translate);
    });
  }
);
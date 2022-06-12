const api_lyrics = "https://api.lyrics.ovh/v1/";

const google_api_key = "AIzaSyBkwmvDCw0IM5bT9-_aoAS1xO5xD4n-xmI";
const api_ytb = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=" + google_api_key + "&q="

const api_traduction = "https://lingva.ml/api/v1/en/fr/";

const traductionLoader = document.getElementById("traductionLoader");
const lyricsLoader = document.getElementById("lyricsLoader");

async function find_music(q) {
  var query = encodeURI(api_ytb + q);
  const res = await fetch(query);
  const data = await res.json();
  return data.items[0];
}

async function find_lyrics(artist, title) {
  var query = encodeURI(api_lyrics + artist + "/" + title);
  const res = await fetch(query);
  const data = await res.json();
  return data.lyrics;
}

async function find_translate(str){
  if (str) {
    const res = await fetch(api_traduction + str)
    const data = await res.json();
    return data.translation;
  }
  return "";
}

async function get_video(video) {
  return "https://www.youtube.com/embed/" + video.id.videoId;
}

function get_title(video) {
  return video.snippet.title;
}

async function get_lyrics(video) {
  let res = get_artist_title(video);
  lyricsLoader.remove();
  return find_lyrics(res[0], res[1]);
}

async function get_translate(lyrics) {
  let trad = "";

  let split_lyrics = lyrics.split(/(?:\r\n|\n)/g);

  for (const str of split_lyrics) {
    const res = await find_translate(str);
    trad += res + "<br>";
  }
  traductionLoader.remove();
  return trad;
}



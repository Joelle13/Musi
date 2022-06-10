const api_lyrics = "https://api.lyrics.ovh/v1/";

const google_api_key = "AIzaSyARtkUkEvaC8P0FoR6_AQKmQL_jKdqcpL0";
const api_ytb = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=" + google_api_key + "&q="

const api_traduction = "https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7Cfr&mt=1&onlyprivate=0&de=a%40b.c&q=";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c6f710156msh2e4976576a6f568p1ba809jsncb8decf50f08',
		'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
	}
};

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

async function find_translate(lyrics){
  const res = await fetch(api_traduction + lyrics, options)
	const data = await res.json();
  return data.responseData.translatedText;
}

async function get_video(video) {
  return "https://www.youtube.com/embed/" + video.id.videoId;
}

function get_title(video) {
  return video.snippet.title;
}

async function get_lyrics(video) {
  let res = get_artist_title(video);
  return find_lyrics(res[0], res[1]);
}





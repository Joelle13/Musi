/**
 * Remplace les fins de lignes
 * @param {*} str chaine à modifier
 * @returns chaine modifiée
 */
function replaceLineBreaks(str){
  return str.replace(/(?:\r\n|\n)/g, '<br>');
}

function get_artist_title(ytb_title) {
  return ytb_title.split(" - ");
}
Commencez par rechercher la musique que vous souhaitez puis Musi de chargera du reste ! ;)

EQUIPE : Alexis, Joëlle, Louise, Guillaume, Linda

Objectif : 
Musi permet de visionner le clip d'une musique, afficher les paroles de celles-ci et de traduire les musiques anglaises en français !

API utilisée : 
- Youtube DATA API
- Lyrics OVH
- Lingva

Fonctionnement :
- Une recherche est initiée avec l'API Youtube à partir de l'input de recherche remplie par l'utilisateur
- Le 1er résultat de la recherche est utilisé comme référence et permet l'obtenir la vidéo
- Le titre de la vidéo est utilisé pour retrouver les paroles à l'aide de l'API Lyrics OVH
- Les lyrics sont ensuite envoyé à l'API de traduction Lingva qui traduit ligne par ligne les paroles

Limites :
- Clips en visibilité limité au site youtube. Donc la vidéo ne s'affiche pas dans ces cas précis
- Lyrics OVH nécessite un titre et un artiste précis pour retrouver les paroles
  En cas d'erreur de saisie, les paroles ne sont pas retrouvées. Nous avons utilisés le titre des vidéos Youtube pour palier ce problème
  Cependant ce titre doit respecter la forme suivante : "Artiste - Nom du Morceau"
  En cas de non respect les lyrics ne sont pas retrouvées
- Une traduction ligne par ligne est effectuée sur l'API Lingva ce qui retarde énormément l'obtention des paroles
  Cette solution a été choisie car seule solution trouvée pour garder la mise en page des paroles
  Si toutes les paroles sont envoyées en une seule requette, tous les retours à la lignes se font supprimer 
- Toutes les musiques ne sont pas disponibles sur Youtube et encore moins sur Lyrics OVH
  Donc certaines recherches peuvent ne pas aboutir

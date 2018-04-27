let french = ['du coup', 'ouais', 'putain', 'baguette', 'croissant', 'vin', 'camembert', 'du coup', 'frenchtech', "merde", "fais chier", "apéro", "boulangerie", "car", "et aussi", "parce que", "voila", "et paf le chien", "à la", "évidemment", "quand même", "carrément", "comme même", "omelette", "du", "fromage", "guillotine", "meilleur", "épicé", "révolution", "saucisson", "grève", "manger", "biere"]

let top_common_words = [
  "le", 
  "de", 
  "un", 
  "à", 
  "être", 
  "et", 
  "en", 
  "avoir", 
  "que", 
  "pour", 
  "dans", 
  "ce", 
  "il", 
  "qui", 
  "ne", 
  "sur", 
  "se", 
  "pas", 
  "plus", 
  "pouvoir", 
  "par", 
  "je", 
  "avec", 
  "tout",
  "faire",
  "son",
  "mettre",
  "autre",
  "on",
  "mais",
  "nous",
  "comme",
  "ou",
  "si",
  "leur",
  "y",
  "dire",
  "elle",
  "devoir",
  "avant",
  "deux",
  "même",
  "prendre",
  "aussi",
  "celui",
  "donner",
  "bien",
  "où",
  "fois",
  "vous",
  "encore",
  "nouveau",
  "aller",
  "cela",
  "entre",
  "premier",
  "vouloir",
  "déjà",
  "grand",
  "mon",
  "me",
  "moins",
  "aucun",
  "lui",
  "temps",
  "très",
  "savoir",
  "falloir",
  "voir",
  "quelque",
  "sans",
  "raison",
  "notre",
  "dont",
  "non",
  "an",
  "monde",
  "jour",
  "monsieur",
  "demander",
  "alors",
  "après",
  "trouver",
  "personne",
  "rendre",
  "part",
  "dernier",
  "venir",
  "pendant",
  "passer",
  "peu",
  "lequel",
  "suite",
  "bon",
  "comprendre",
  "depuis",
  "point",
  "ainsi",
  "heure",
  "rester"
]

function addSentences(){
  var text = "";
  
  for(var i = 0; i<Math.floor((Math.random() * 10) + 1); i++){
    var sentence = "";
    for(var j=0; j<Math.floor((Math.random() * 20) + 1); j++){
      var word = french[Math.floor((Math.random() * french.length))];
      word = randomlyConcatACommonWordWithProbability(word, 0.4);
      if(j == 0){
        word = capitalizeFirstLetter(word);
      }
      else{
        sentence = sentence.concat(' ');
      }
      sentence = sentence.concat(word);
    }
    sentence = sentence.concat('. ');
    text = text.concat(sentence);
  }
  $("#french-text").after("<p>" + text + "</p>");
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function randomlyConcatACommonWordWithProbability(originalWord, percentageOfRandomWords){
  if(Math.random() < percentageOfRandomWords){
    return top_common_words[Math.floor((Math.random() * top_common_words.length))] + " " + originalWord;
  }
  else{
    return originalWord;
  }
}
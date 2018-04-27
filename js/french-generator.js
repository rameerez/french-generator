let french = ['du coup', 'ouais', 'putain', 'baguette', 'croissant', 'vin', 'camembert', 'du coup', 'frenchtech', "merde", "fais chier", "apéro", "boulangerie", "car", "et aussi", "parce que", "voila", "et paf le chien", "à la", "évidemment", "quand même", "carrément", "comme même", "omelette", "du", "fromage", "guillotine", "meilleur", "épicé", "révolution", "saucisson", "grève", "manger", "biere"]


function addSentences(){
  var text = "";
  
  for(var i = 0; i<Math.floor((Math.random() * 10) + 1); i++){
    var sentence = "";
    for(var j=0; j<Math.floor((Math.random() * 30) + 1); j++){
      var word = french[Math.floor((Math.random() * french.length))];
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
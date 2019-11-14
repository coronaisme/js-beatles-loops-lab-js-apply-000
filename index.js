// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++){
   array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}


function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while(facts[i]){
   array.push(facts[i] + "!!!");
   i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  var string = 'I love the Beatles!';
  var i = 0;
  var diff = Math.abs(number - 15)
  
  do {
    array.push(string);
    i+= number;
  }
  while (i < 15);
  return array;
}









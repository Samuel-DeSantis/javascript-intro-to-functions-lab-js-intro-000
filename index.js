function shout(string) {return string.toUpperCase();}
function logShout(string) {console.log(shout(string));}
function whisper(string) {return string.toLowerCase();}
function logWhisper(string) {console.log(whisper(string));}
function sayHiToGrandma(string) {
  if (string === whisper(string)) {return "I can't hear you!";}
  else if (string === shout(string)) {return "YES INDEED!"}
  else if (string === "I love you, Grandma.") {return "I love you, too."}
  else {return "none of the following"}
}

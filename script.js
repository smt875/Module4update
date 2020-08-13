var names = ["Ya", "Mon", "Nee", "Mason", "Austin", "Aye", "Su", "Mya", "Lin", "Kyaw"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].toLowerCase().charAt(0)

  if (firstLetter=='j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
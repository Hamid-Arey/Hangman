var images = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/6.png",
  "images/7.png"
];

var wordOne = words[Math.floor(Math.random() * words.length)];
wordOne = wordOne.toUpperCase();
console.log(wordOne)

var dashArray = new Array(wordOne.length);
dashArray.fill("_");

var dashText = dashArray.join(" ");

var numWrongGuesses = 0;
var maxWrongGuesses = 7;

function createButtons() {
  document.getElementById("theDashes").innerHTML = dashText;

  for (var x = 65; x <= 90; x++) {
    var letter = String.fromCharCode(x);
    var btn = document.createElement("button");
    btn.id = letter;
    btn.textContent = letter;
    
    btn.addEventListener("click", checkLetter);
    
    document.body.appendChild(btn);
    if (x % 8 == 0) {
      var br = document.createElement("br");
      document.body.appendChild(br);
    }
  }
  
  const reload = document.createElement("button");
  reload.innerHTML = "Reload";
  document.body.appendChild(reload);
  reload.addEventListener("click", () => {
    location.reload()
  })
  reload.style.width = "400px"
  reload.style.borderRadius = "200px"
  
  document.getElementById("begin").style.display = "none";
  document.getElementById("p1").style.display = "inline-block";
  document.getElementById("picBox").style.display = "inline-block";
  var br = document.createElement("br");
  document.body.appendChild(br);
  var br = document.createElement("br");
  document.body.appendChild(br);
}

function checkLetter() {
  var letter = this.id;
  this.disabled = true;
  this.style.zIndex = "5";
  var correct = false;
  if (wordOne.includes(letter)) {
    for (var i = 0; i < wordOne.length; i++) {
      if (wordOne.charAt(i) == letter) {
        dashArray[i] = letter;
        correct = true;
      }
    }
  }
  if (correct) {
    var dashText = dashArray.join(" ");
    document.getElementById("theDashes").innerHTML = dashText;
    if (!dashText.includes("_")) {
      document.write("<center><h1>YOU WIN");
      document.write("<br>The word was " + wordOne.toLowerCase());
      document.write("<br><img src=\"images/pepe-happy.gif\">")
      document.write("<br><br><br><button onclick=\"reload()\" style=\" height: 100px; width: 400px; background-color: orange; color: #0099FF; border: none; font-size:50px;\">Play Again</button></h1></center>")
    }
  } else {
    numWrongGuesses++;
    var pic = document.getElementsByClassName("hangman")[numWrongGuesses - 1];
    if (pic) {
      pic.style.opacity = "1";
      pic.style.display = "inline-block";
    }
    document.getElementById("p1").innerHTML += letter + " ";
    if (numWrongGuesses >= maxWrongGuesses) {
      document.write("<center><h1>YOU LOSE");
      document.write("<br>The word was " + wordOne.toLowerCase());
      document.write("<br><img src=\"images/pepe.gif\">");
      document.write("<br><br><br><button onclick=\"reload()\" style=\" height: 100px; width: 400px; background-color: orange; color: #0099FF; border: none; font-size:50px;\">Play Again</button></h1></center>")
    }
  }
}
function reload() {
  location.reload();
}
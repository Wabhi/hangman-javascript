const wordElm = document.getElementById("word");
const wrongLettersElm = document.getElementById(
  "wrong-letters"
);
const playAgainBtn = document.getElementById(
  "play-button"
);
const popup = document.getElementById(
  "popup-container"
);
const notification = document.getElementById(
  "notify-container"
);
const finalMssg = document.getElementById(
  "final-massage"
);
const figurParts = document.querySelectorAll(
  ".figure-part"
);
const popout = document.getElementById("popup");
const words = [
  "application",
  "programming",
  "interface",
  "wizard",
  "principal",
  "football",
];

let selectedWord =
  words[Math.floor(Math.random() * words.length)];
const correctLetters = ["a"];
const wrongLetters = [];

function displayWord() {
  wordElm.innerHTML = `
   ${selectedWord
     .split("")
     .map(
       (letter) =>
         `<span class="letter">${
           correctLetters.includes(letter)
             ? letter
             : ""
         }</span>`
     )
     .join("")}
`;
  const innerWord = wordElm.innerText.replace(
    /\n/g,
    ""
  );
  if (innerWord == selectedWord) {
    //window.alert("joo");
    //document.write("jiii");
    finalMssg.innerText =
      "Congratulations ! You Won 😀";
    popout.style.display = "flex";
  }
}

function updateWrongLetterelm() {
  wrongLettersElm.innerHTML = `
    ${
      wrongLetters.length > 0
        ? "<p>Wrong</p>"
        : ""
    }
    ${wrongLetters.map(
      (letter) => `<span>${letter}`
    )}
    `;
  figurParts.forEach((part, index) => {
    const error = wrongLetters.length;
    if (index < error) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  if (wrongLetters.length === figurParts.length) {
    finalMssg.innerText =
      "Unfortunately ! You Lost 😥";
    popout.style.display = "flex";
  }
}

function showNotification() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

window.addEventListener("keydown", (e) => {
  //console.log(e.keyCode); ----random numbers
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    //console.log(letter); -----hitted letters
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes()) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLetterelm();
      } else {
        showNotification();
      }
    }
  }
});

displayWord();


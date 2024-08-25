// Global Variables
let cardsHidden = false;
let displayAllowed = false;

// generate random display card on window load
window.onload = randomCard();
// generate complete card list on window load
window.onload = generateCardList();
// print total number of cards in console
console.log("There are " + cardList.length + " total cards.");



// this function reformats a text to a standard format
function reformatText(text) {
  // array of special characters to replace
  const specialChars = ["'", "-", "_", ".", "!", "?", ":", "(", ")", "[", "]", "{", "}", "\\", "|", "/", "ñ", " "];
  // make text lowercase
  text = text.toLowerCase();
  // replace characters in text
  specialChars.forEach(function(specialChar) {
    text = text.replace("/" + specialChar + "/g", "");
  });
  return text;
}

// this function changes the currently displayed card into the previous one in the card list
function prevCard() {
  // get currently displayed card
  let displayCard = document.getElementById("display-card");
  let currentCard = reformatText(displayCard.alt);

  // get previous card from card list
  let prevIndex = cardList.findIndex(arr => arr.includes(currentCard)) - 1;
  if (prevIndex < 0) {
    prevIndex = cardList.length - 1;
  }
  newSrc = "images/cards/" + cardList[prevIndex][0] + ".png";

  // update displayed card
  displayCard.src = newSrc;
  displayCard.alt = cardList[prevIndex][1];
}

// this function changes the currently displayed card into a random different one
function randomCard() {
  // get currently displayed card
  let displayCard = document.getElementById("display-card");
  let currentSrc = displayCard.src;
  let randomNum, newSrc;

  // get random card from card list until the currently displayed card and new card don't match
  do {
    randomNum = Math.floor(Math.random() * cardList.length);
    newSrc = "images/cards/" + cardList[randomNum][0] + ".png";
  } while (currentSrc === newSrc);

  // update displayed card
  displayCard.src = newSrc;
  displayCard.alt = cardList[randomNum][1];
}

// this function changes the currently displayed card into the previous one in the card list
function nextCard() {
  // get currently displayed card
  let displayCard = document.getElementById("display-card");
  let currentCard = reformatText(displayCard.alt);

  // get next card from card list
  let nextIndex = cardList.findIndex(arr => arr.includes(currentCard)) + 1;
  if (nextIndex >= cardList.length) {
    nextIndex = 0;
  }
  newSrc = "images/cards/" + cardList[nextIndex][0] + ".png";

  // update displayed card
  displayCard.src = newSrc;
  displayCard.alt = cardList[nextIndex][1];
}

// this function generates the complete list of cards into the browser
function generateCardList() {
  // get card list section
  let cardListSection = document.getElementById("card-list");
  for (let i = 0; i < cardList.length; i++) {
    // create image element
    const img = document.createElement("img");

    // update image properties
    img.src = "images/cards/" + cardList[i][0] + ".png";
    img.className = "card";
    img.id = cardList[i][0];
    img.alt = cardList[i][1];

    // add image to document
    cardListSection.appendChild(img);

    // add view card functionality
    cardListSection.lastChild.addEventListener("click", viewCard);
  }
  // update global variable
  displayAllowed = true;
}

// this function displays cards matching the input of the search bar and hides the rest
function searchCard() {
  // get search input
  let searchInput = document.getElementById("search-input");
  // get value from search bar
  if (searchInput != null) {
    // reformat inputted value
    let input = reformatText(searchInput.value);

    // display and hide cards in the complete card list
    for (let i = 0; i < cardList.length; i++) {
      let cardName = cardList[i][0];
      let currentCard = document.getElementById(cardName);
      if (cardList[i][0].includes(input) || reformatText(cardList[i][2]).includes(input) ||
        reformatText(cardList[i][3]).includes(input)) {
        currentCard.className = "card";
      } else if (cardsHidden) {
        currentCard.className = "card hidden";
      } else {
        currentCard.className = "card hidden visible";
      }
    }
  }
}

// this function makes all hidden cards visible or invisible
function hideCards() {
  let hiddenCardList = document.getElementsByClassName("card hidden");
  for (let i = 0; i < hiddenCardList.length; i++) {
    hiddenCardList[i].classList.toggle("visible");
  }
}

// this function updates the visibility of all hidden cards
function updateHiddenCards() {
  // update hide button text
  let hideButton = document.getElementById("hide-button");
  if (cardsHidden) {
    hideButton.innerText = "Hide Cards";
  } else {
    hideButton.innerText = "Show Hidden Cards";
  }

  // hide/unhide cards
  hideCards();

  // update global variable
  cardsHidden = !cardsHidden;
}

// this function updates the currently displayed card to be the clicked card
function viewCard() {
  // prevent function from working before complete card list is generated
  if (!displayAllowed) {
    console.log(displayAllowed);
    return;
  }

  // update currently displayed card
  let displayCard = document.getElementById("display-card");
  let src = "images/cards/" + this.id + ".png";
  displayCard.src = src;
  displayCard.alt = this.alt;

  // scroll to top of the page
  window.scrollTo(0, 0);
}
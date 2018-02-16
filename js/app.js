/*
 * Create a list that holds all of your cards
 */
var cards=['fa fa-diamond','fa fa-paper-plane-o','fa fa-anchor','fa fa-bolt','fa fa-cube','fa fa-leaf','fa fa-bicycle','fa fa-bomb','fa fa-diamond','fa fa-paper-plane-o','fa fa-anchor','fa fa-bolt','fa fa-cube','fa fa-leaf','fa fa-bicycle','fa fa-bomb']
var empty_cards=[]
var count=0;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function generateCards(){
  cards=shuffle(cards);
  for(i=0;i<cards.length;i++)
  {
    createCards(cards[i]);
  }
}

function incrementMoves()
{
  count++;
  var w=document.getElementsByClassName("moves");
  w[0].innerHTML=count;
  if(count==8 || count==12 || count==16)
  {
    rating();
  }
}

function rating()
{
  var u=document.getElementsByClassName("stars");
  u[0].removeChild(u[0].lastElementChild);
}

function createCards(card){
  var x=document.getElementsByClassName('deck');
  var y=document.createElement("li");
  y.className="card";
  x[0].appendChild(y);
  var z=document.createElement("i");
  z.className=card;
  y.appendChild(z);
}



function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

generateCards();

card_ref=document.getElementsByClassName("card");
for(i=0;i<card_ref.length;i++)
{
    card_ref[i].addEventListener('click',function(){
    this.className="card open show";
    this.style.pointerEvents='none';
    empty_cards.push(this);
    if(empty_cards.length==2)
    {
      incrementMoves();
      setTimeout(function(){
        if(empty_cards[0].firstChild.className!=empty_cards[1].firstChild.className)
        {
          empty_cards[0].className="card";
          empty_cards[1].className="card";
          empty_cards[0].style.pointerEvents='auto';
          empty_cards[1].style.pointerEvents='auto';
        }
        else
        {
          empty_cards[0].className="card match";
          empty_cards[1].className="card match";
        }
        empty_cards=[];
     }, 400);
    }

  })
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

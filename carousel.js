var scheight = screen.height;
console.log(scheight);
if(scheight > 1000){

}
else{
    console.log("here");
  var cards = document.getElementsByClassName('figure-caption');
  console.log(cards);
  for (var i = 0; i < cards.length; i++) { 
      console.log("there");
        cards[i].style.fontSize = '10px';
    }
}
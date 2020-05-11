const Card = require('./card');

const suitArr = ['spades','clubs','hearts','diamonds'];

var cards = []
var hand = []
var limit = null
var deck_type = deck_type

module.exports = class Deck {

    constructor(deck_type, limit) {
        
        this.cards = []
        this.hand = []
        this.limit = null
        this.deck_type = deck_type

        if(deck_type == "pack"){
            for(var s = 0; s < suitArr.length; s++){
                for(var n = 1; n <= 13; n++){
                    this.cards.push(new Card(suitArr[s],n));
                }
            }
        }
        else if(deck_type == "hand"){
            this.limit = limit;
        }
        else{
            console.log("This is neither a deck or hand.")
        }
        // console.log(this.cards);
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    shuffle() {
        for(var i = 0; i < this.cards.length; i++){
            var rVal = this.getRndInteger(0, this.cards.length);
            this.cards[i] = this.cards[rVal];
            this.cards[rVal] = this.cards[i];
        }
    }

    dealCard(position) {
        if(position == "top"){
            return this.cards.shift();
        }
        else if(position == "bottom"){
            return this.cards.pop();
        }
        else{
            var pos = this.getRndInteger(0, this.cards.length);
            return this.cards.splice(pos);
        }
    }

    returnCard(card, posiiton){
        if((this.limit != null && (this.cards.length() < this.limit) || this.limit == null)) {
            if(position == "top"){
                this.cards.unshift(card);
            }
            else if(position == "bottom"){
                this.cards.push(card);
            }
            else{
                var pos = this.getRndInteger(0, this.cards.length());
                this.cards.splice(pos, 0, card);
            }
        }
        else
        {
                console.log("The Deck limit has been Exceeded.");
        }
    }

    show(){
        var cardLength = this.cards.length;

        if(cardLength > 0){
            for(var i = 0; i < cardLength; i++){
                this.card = this.cards[i];
                if((this.card[i].number < 1) && (this.card[i].number < 11)){
                    console.log(this.card.value + " of " + this.card.suit);
                    // console.log(this.cards[i].value + " of " + this.cards[i].suit);
                }
                else {
                    console.log(this.card.face + " of " + this.card.suit);
                    // console.log(this.cards[i].face + " of " + this.cards[i].suit);
                }
            }
        }
        else{
            console.log("There are no cards in the deck of")
        }
    }

}

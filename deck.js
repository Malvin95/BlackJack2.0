import { Card } from './card.js'

const suitArr = ['spades','clubs','hearts','diamonds'];

class Deck {

    constructor(self, deck_type, limit) {
        
        self.cards = []
        self.limit = null
        self.deck_type = deck.type

        try{
            if(deck_type == "pack"){
                for(var s = 0; s < suitArr.length; s++){
                    for(var n = 1; n <= 13; n++){
                        self.cards.push(Card(s,n));
                    }
                }
            }
            else if(deck_type == "hand"){
                self.limit = limit;
            }
        } 
        catch(err) {
            console.log("This is neither a deck or hand.")
        }

    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    shuffle(self) {
        for(var i = 0; i < self.cards.length(); i++){
            rVal = this.getRndInteger(0, i);
            self.cards[i], self.cards(rVal) = self.cards[rVal], self.cards[i];
        }
    }

    dealCard(self, position) {
        if(position == "top"){
            return self.cards.shift();
        }
        else if(position == "bottom"){
            return self.cards.pop();
        }
        else{
            var pos = this.getRndInteger(0, self.cards.length());
            return self.cards.splice(pos);
        }
    }

    returnCard(self, card, posiiton){
        try{
            if((self.limit != null && (self.cards.length() < self.limit) || self.limit == null){
                if(position == "top"){
                    self.cards.unshift(card);
                }
                else if(position == "bottom"){
                    self.cards.push(card);
                }
                else{
                    var pos = this.getRndInteger(0, self.cards.length());
                    self.card.splice(pos, 0, card);
                }
            }
        }
        catch(err){
            console.log("The Deck limit has been Exceeded.");
        }
    }

    show(self){
        if(self.cards.length() > 0){
            for(var i = 0; i < self.cards.length(); i++){
                if(self.cards[i].number < 1 && self.cards[i].number <= 10){
                    console.log(self.cards[i].number + " of " + self.cards[i].suit);
                }
                else {
                    console.log(self.cards[i].face + " of " + self.cards[i].suit);
                }
            }
        }
        else{
            console.log("There are no cards in the deck of type " + self.deck_type);
        }
    }

}
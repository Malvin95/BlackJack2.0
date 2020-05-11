module.exports = class Card {

    constructor(suit, number) {

        var lowerSuit = suit.toLowerCase();

        if(lowerSuit == 'hearts'||'diamonds'||'spades'||'clubs') {
            this.suit = lowerSuit;
        }
        else {
            console.log("The suit provided is not a suit.")
        }
        
        if((number >= 0) && (number <= 13)) {
            this.number = number;
            
            if(number > 10) {
                this.value = [10]
                if(number == 11){
                    this.face = "Jack"
                }
                else if(number == 12){
                    this.face = "Queen"
                }
                else if(number == 13){
                    this.face = "King"
                }
            }
            else if(number == 1){
                this.value = [1,11]
                this.face = "Ace"
            }
            else{
                this.value = [number]
            }
        }
        else {
            console.log("The Number is out of bounds.");
        }
    }

}

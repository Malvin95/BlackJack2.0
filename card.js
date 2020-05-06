class Card {

    constructor(self, suit, number) {
        try{
            if(suit.toLowerCase() == ('hearts'||'diamonds'||'spades'||'clubs')){
                self.suit = suit;
            }
        }
        catch(err){
            console.log("The suit provided is not a suit.")
        }

        try{
            if(number >= 0 && number <= 13){
                self.number = number;
                
                if(number > 10){
                    self.value = [10]
                    if(number == 11){
                        self.face = "Jack"
                    }
                    else if(number == 12){
                        self.face = "Queen"
                    }
                    else if(number == 13){
                        self.face == "King"
                    }
                }
                else if(number == 1) {
                    self.value = [1,11]
                    self.face == "Ace"
                }
                else{
                    self.value = [number]
                }
            }
        }
        catch(err){
            console.log("The Number is out of bounds.")
        }
    }

}
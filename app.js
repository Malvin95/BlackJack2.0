const express = require('express')
const Deck = require('./deck');
const app = express()
const port = 4200

const pack = new Deck('pack')

// console.log(pack.show());

// app.get('/', (req, res) => res.send('Hello World!'))

app.get('/getPack', (req, res) => {
    res.send(pack.cards)
});

app.get('/getHand', (req, res) => {
    var hand = new Deck('hand');
    res.send(hand.cards)
});

app.get('/shuffle', (req, res) => {
    pack.shuffle();
    res.send(pack.cards);
});

app.get('/deal', (req, res) => {
    var card = pack.dealCard("top");
    res.send(card);
});

app.get('/show', (req, res) => {
    res.send(pack.show);
})

app.listen(port, () => console.log(`Blackjack app listening at http://localhost:${port}`))
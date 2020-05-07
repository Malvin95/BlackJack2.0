const express = require('express')
const Deck = require('./deck');
const app = express()
const port = 3000

const pack = new Deck('pack')

console.log(pack.show());

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Blackjack app listening at http://localhost:${port}`))
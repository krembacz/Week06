class Card {
    constructor(rank, suit, value) {
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }
}

class Player {
    constructor(playerName, hand) {
        this.playerName = playerName;
        this.hand = hand;
        this.score = 0;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    createDeck() {
        let suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        for (let i = 0; i < rank.length; i++) {
            for (let x = 0; x < suit.length; x++) {
                this.cards.push(new Card(rank[i], suit[x], i));
            }
        }

    }

    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const shuffle = Math.floor(Math.random() * i);
            const shuffle2 = this.cards[i];
            this.cards[i] = this.cards[shuffle];
            this.cards[shuffle] = shuffle2;
        }
        console.log('Deck has been shuffled.');
    }
}

class GameOfWars {

    constructor() {
        this.players = [];
    }

    start(p1, p2) {
        console.log('Time to play!');
        this.players.push(new Player(p1, playerDeck.cards.slice(0, 26)));
        this.players.push(new Player(p2, playerDeck.cards.slice(26)));

        for (let i = 0; i < 26; i++) {
            if (i < 25) {
                console.log('____________' + ' Round ' + [i + 1] + ' _____________');
            }
            else { console.log('____________' + 'FINAL ROUND' + ' _____________'); }
            const p1Card = this.players[0].hand.pop();
            const p2Card = this.players[1].hand.pop();
            console.log(`${this.players[0].playerName}'s card: ${p1Card.rank} of ${p1Card.suit}`);
            console.log(`${this.players[1].playerName}'s card: ${p2Card.rank} of ${p2Card.suit}`);

            if (p1Card.value > p2Card.value) {
                this.players[0].score++;
                console.log(`${this.players[0].playerName} wins this round!`)
            }
            else if (p1Card.value < p2Card.value) {
                this.players[1].score++;
                console.log(`${this.players[1].playerName} wins this round!`)
            }
            else if (p1Card.value === p2Card.value) {
                console.log('It\'s a tie!');
            }
            console.log('');
            if (i < 25) {
                console.log('Current Score');
            }
            else { console.log('FINAL SCORE'); }
            console.log(`${this.players[0].playerName} - ${this.players[0].score}` + ` | ${this.players[1].playerName} - ${this.players[1].score}`)
            console.log('');
        }

        if (this.players[0].score > this.players[1].score) {
            console.log(`${this.players[0].playerName} WINS !!`)
        }
        else if (this.players[0].score < this.players[1].score) {
            console.log(`${this.players[1].playerName} WINS !!`)
        }
        else {
            console.log('Draw...')
        }
    }
}

let playerDeck = new Deck();
playerDeck.createDeck();
playerDeck.shuffleDeck();
let newGame = new GameOfWars();
newGame.start('Mark', 'Steve');

/*frankly, I wanted to make this far more neat through utilizing more methods, however
I ran out of time and will be continuing to practice and refine this code as a personal project*/

//created four classes: card, player, deck, and game classes
//card and plkayer classes contain parameters to later refer to specific instances of respective classes 
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

//this class contains an array to hold all the cards that will make up a full deck 
class Deck {
    constructor() {
        this.cards = [];
    }


    //a method to develop a new deck when called. Consists of two const arrays (as the suits and ranks cannot be changed)
    //used a for loop to loop through both rank length and suit length from arrays to assign and push generated cards into this.cards array
    createDeck() {
        let suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        for (let i = 0; i < rank.length; i++) {
            for (let x = 0; x < suit.length; x++) {
                this.cards.push(new Card(rank[i], suit[x], i));
            }
        }

    }

    //second method inside the deck class. Used for loop to loop through a generated deck in the this.cards array
    //assigned variable shuffle to round down on integers, choose random integer limited by the index specified 
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

//class to finish setting up game and the bulk of the actual play
//this.players array will contain all players and player info including their deck/cards 
class GameOfWars {

    constructor() {
        this.players = [];
    }

    //method accepts two players as parameters, and can be declared when calling the method. 
    //slice() is used to distribute a newly generated and shuffled deck evenly between the two players
    start(p1, p2) {
        console.log('Time to play!');
        this.players.push(new Player(p1, playerDeck.cards.slice(0, 26)));
        this.players.push(new Player(p2, playerDeck.cards.slice(26)));

        //for loop to create the rounds. I < 26 since both players only have 26 cards each 
        for (let i = 0; i < 26; i++) {

            //first if else statement are extra formatting and flair for when rounds are ongoing and when game is over
            if (i < 25) {
                console.log('____________' + ' Round ' + [i + 1] + ' _____________');
            }
            else {
                console.log('____________' + 'FINAL ROUND' + ' _____________');
            }

            //const variables will ensure that players will play their cards each turn- specifically last card in array
            const p1Card = this.players[0].hand.pop();
            const p2Card = this.players[1].hand.pop();

            //flairs to show what is happening as the game is played to announce player names, card and suit played each round 
            console.log(`${this.players[0].playerName}'s card: ${p1Card.rank} of ${p1Card.suit}`);
            console.log(`${this.players[1].playerName}'s card: ${p2Card.rank} of ${p2Card.suit}`);


            //if/else if statements determine three things: which player wins a round, if it's a tie, and when game is finished 
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
            console.log(' ');
            if (i < 25) {
                console.log('Current Score');
            }
            else { console.log('FINAL SCORE'); }
            console.log(`${this.players[0].playerName} - ${this.players[0].score}` + ` | ${this.players[1].playerName} - ${this.players[1].score}`)
            console.log(' ');
        }

        //if else if statement displays which player wins the game, or if it ends in a draw. 
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

//need to create a new instance of a deck for players to use 
let playerDeck = new Deck();

//using methods embedded in the deck class to generate and shuffle deck for play
playerDeck.createDeck();
playerDeck.shuffleDeck();

//assigning variable to initialize the actual game and passed through two player names as parameters. 
let newGame = new GameOfWars();
newGame.start('Mark', 'Steve');

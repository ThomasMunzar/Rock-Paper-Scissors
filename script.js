var wins = 0;
var losses = 0;
var ties = 0;
alert(wins, losses, ties)


var rockPaperScissor = ['rock', 'paper', 'scissor'];
var user = window.prompt('select rock, paper or scissor');
var computer =Math.floor(Math.random()*rockPaperScissor.length);

if (user === computer) {
    window.alert('it is a tie!')
    ties+= 1
}
else if (user === 'rock' && computer === 'paper'){
    window.alert('You lose')
    losses+= 1
}
else if (user === 'paper' && computer === 'rock') {
    window.alert('You win')
    wins+= 1
}
else if (user === 'rock' && computer === 'scissor') {
    window.alert('You win')
    wins+= 1
}
else if (user === 'scissor' && computer === 'rock') {
    window.alert('You lose')
    losses+= 1
}
else if (user === 'scissor' && computer === 'paper') {
    window.alert('You win')
    wins+= 1
}
else if (user === 'paper' && computer === 'scissor') {
    window.alert('You lose')
    losses+= 1
}

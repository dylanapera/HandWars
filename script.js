// Game state
let userScore = 0;
let computerScore = 0;
let ties = 0;

// DOM elements
const choiceBtns = document.querySelectorAll('.choice-btn');
const userScoreEl = document.getElementById('userScore');
const computerScoreEl = document.getElementById('computerScore');
const tiesEl = document.getElementById('ties');
const userChoiceDisplay = document.getElementById('userChoiceDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const resultMessage = document.getElementById('resultMessage');
const resetBtn = document.getElementById('resetBtn');

// Choice emojis
const choiceEmojis = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

// Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Determine winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    }

    const winningCombinations = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (winningCombinations[userChoice] === computerChoice) {
        return 'user';
    } else {
        return 'computer';
    }
}

// Update display
function updateDisplay(userChoice, computerChoice, result) {
    // Update choice displays
    userChoiceDisplay.textContent = choiceEmojis[userChoice];
    computerChoiceDisplay.textContent = choiceEmojis[computerChoice];

    // Update result message
    resultMessage.classList.remove('win', 'lose', 'tie');
    
    if (result === 'tie') {
        resultMessage.textContent = "It's a tie!";
        resultMessage.classList.add('tie');
        ties++;
        tiesEl.textContent = ties;
    } else if (result === 'user') {
        resultMessage.textContent = '🎉 You win!';
        resultMessage.classList.add('win');
        userScore++;
        userScoreEl.textContent = userScore;
    } else {
        resultMessage.textContent = '💻 Computer wins!';
        resultMessage.classList.add('lose');
        computerScore++;
        computerScoreEl.textContent = computerScore;
    }

    // Add animation
    userChoiceDisplay.style.animation = 'none';
    computerChoiceDisplay.style.animation = 'none';
    setTimeout(() => {
        userChoiceDisplay.style.animation = 'pop 0.3s ease';
        computerChoiceDisplay.style.animation = 'pop 0.3s ease';
    }, 10);
}

// Play game
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    updateDisplay(userChoice, computerChoice, result);
}

// Reset scores
function resetScores() {
    userScore = 0;
    computerScore = 0;
    ties = 0;
    
    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;
    tiesEl.textContent = ties;
    
    userChoiceDisplay.textContent = '?';
    computerChoiceDisplay.textContent = '?';
    
    resultMessage.textContent = 'Make your choice!';
    resultMessage.classList.remove('win', 'lose', 'tie');
}

// Event listeners
choiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const choice = btn.getAttribute('data-choice');
        playGame(choice);
    });
});

resetBtn.addEventListener('click', resetScores);

// Add pop animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pop {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

import random

def get_computer_choice():
    """Randomly select rock, paper, or scissors for the computer."""
    choices = ['rock', 'paper', 'scissors']
    return random.choice(choices)

def get_user_choice():
    """Get the user's choice with input validation."""
    while True:
        user_input = input("\nEnter your choice (rock/paper/scissors) or 'quit' to exit: ").lower().strip()
        
        if user_input == 'quit':
            return None
        
        if user_input in ['rock', 'paper', 'scissors']:
            return user_input
        
        print("Invalid choice! Please enter 'rock', 'paper', or 'scissors'.")

def determine_winner(user_choice, computer_choice):
    """Determine the winner of the game."""
    if user_choice == computer_choice:
        return "tie"
    
    winning_combinations = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    }
    
    if winning_combinations[user_choice] == computer_choice:
        return "user"
    else:
        return "computer"

def display_result(user_choice, computer_choice, result):
    """Display the game result."""
    print(f"\nYou chose: {user_choice}")
    print(f"Computer chose: {computer_choice}")
    print("-" * 30)
    
    if result == "tie":
        print("It's a tie!")
    elif result == "user":
        print("🎉 You win!")
    else:
        print("💻 Computer wins!")

def play_game():
    """Main game loop."""
    print("=" * 40)
    print("Welcome to Rock, Paper, Scissors!")
    print("=" * 40)
    
    user_score = 0
    computer_score = 0
    ties = 0
    
    while True:
        user_choice = get_user_choice()
        
        if user_choice is None:
            break
        
        computer_choice = get_computer_choice()
        result = determine_winner(user_choice, computer_choice)
        display_result(user_choice, computer_choice, result)
        
        # Update scores
        if result == "user":
            user_score += 1
        elif result == "computer":
            computer_score += 1
        else:
            ties += 1
        
        # Display current score
        print(f"\nScore - You: {user_score} | Computer: {computer_score} | Ties: {ties}")
    
    # Display final results
    print("\n" + "=" * 40)
    print("Game Over! Final Score:")
    print(f"You: {user_score} | Computer: {computer_score} | Ties: {ties}")
    print("=" * 40)
    print("Thanks for playing!")

if __name__ == "__main__":
    play_game()

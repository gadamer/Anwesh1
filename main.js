// Immediately invoked function to avoid global scope pollution
(function() {
  // Function to set up the quote display functionality
  function setupQuoteDisplay() {
    const sparkButton = document.getElementById('spark-button');
    const quoteDisplay = document.getElementById('quote-display');
    
    if (!sparkButton || !quoteDisplay) {
      console.error('Required elements not found');
      return;
    }
    
    const quotes = [
      "The best way to predict the future is to create it.",
      "Innovation distinguishes between a leader and a follower.",
      "Strive not to be a success, but rather to be of value.",
      "The mind is everything. What you think you become.",
      "Your time is limited, so don't waste it living someone else's life."
    ];
    
    // Function to display a random quote
    function displayRandomQuote() {
      // Remove the show class to trigger fade out
      quoteDisplay.classList.remove('show');
      
      // Wait for the fade out transition
      setTimeout(() => {
        // Get a random quote
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
        
        // Add the show class to trigger fade in
        quoteDisplay.classList.add('show');
      }, 300);
    }
    
    // Add click event listener
    sparkButton.addEventListener('click', displayRandomQuote);
    
    // Log successful setup
    console.log('Quote display functionality initialized');
  }
  
  // Run setup when DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupQuoteDisplay);
  } else {
    // DOM is already ready, call the function directly
    setupQuoteDisplay();
  }
})();

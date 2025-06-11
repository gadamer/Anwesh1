// Use multiple approaches to ensure the script runs properly
document.addEventListener('DOMContentLoaded', initializeApp);
window.addEventListener('load', initializeApp);

// Track if we've already initialized to prevent duplicate setup
let initialized = false;

function initializeApp() {
  // Only run once
  if (initialized) return;
  initialized = true;
  
  console.log('Initializing app...');
  setupQuoteDisplay();
}

// Function to set up the quote display functionality
function setupQuoteDisplay() {
  const sparkButton = document.getElementById('spark-button');
  const quoteDisplay = document.getElementById('quote-display');
  
  console.log('Button element:', sparkButton);
  console.log('Quote display element:', quoteDisplay);
  
  if (!sparkButton || !quoteDisplay) {
    console.error('Required elements not found');
    // Try again after a short delay as a fallback
    setTimeout(setupQuoteDisplay, 100);
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
    console.log('Button clicked!');
    
    // Remove the show class to trigger fade out
    quoteDisplay.classList.remove('show');
    
    // Wait for the fade out transition
    setTimeout(() => {
      // Get a random quote
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const selectedQuote = quotes[randomIndex];
      console.log('Selected quote:', selectedQuote);
      
      quoteDisplay.textContent = selectedQuote;
      
      // Add the show class to trigger fade in
      quoteDisplay.classList.add('show');
    }, 300);
  }
  
  // Add click event listener with both approaches
  sparkButton.addEventListener('click', displayRandomQuote);
  sparkButton.onclick = displayRandomQuote; // Backup approach
  
  // Removed initial quote display
  // No longer automatically displaying a quote on page load
  
  console.log('Quote display functionality initialized successfully');
}

// Run setup immediately if DOM is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  console.log('DOM already ready, initializing immediately');
  setTimeout(initializeApp, 0);
}

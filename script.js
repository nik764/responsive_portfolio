const buttons = document.querySelectorAll('div.kl a.button');

buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Determine which button was clicked
    const spanText = this.querySelector('span').textContent;
    
    if (spanText.includes('Linkedin')) {
      window.location.href = "https://linkedin.com/in/yourprofile";
    } else if (spanText.includes('Github')) {
      window.location.href = "https://github.com/yourusername";
    } else if (spanText.includes('myAssignment')) {
      window.location.href = "mailto:myAssignment@explorin.io";
    }
  });
});
// Get all project cards
const projectCards = document.querySelectorAll('.video-container'); // or whatever class your project cards have

// Add click event to each project card
projectCards.forEach((card, index) => {
  card.addEventListener('click', function() {
    // Navigate to the specific project page
    window.location.href = `project${index + 1}.html`; // or your specific project URL
  });
  
  // Make the cursor change to a pointer when hovering over the card
  card.style.cursor = 'pointer';
});
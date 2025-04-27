document.addEventListener('DOMContentLoaded', function() {
  
  // Social buttons (LinkedIn, GitHub, Email)
  const buttons = document.querySelectorAll('div.kl a.button');
  if (buttons.length > 0) {
    console.log("Found " + buttons.length + " social buttons");
    buttons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Determine which button was clicked
        const spanText = this.querySelector('span').textContent;
        console.log("Button clicked: " + spanText);
        
        if (spanText.includes('Linkedin')) {
          window.location.href ="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiwp5vkw_eMAxVHp2YCHQ0PNuIYABAAGgJzbQ&co=1&ase=2&gclid=Cj0KCQjwiLLABhCEARIsAJYS6ulx5GTSATPoG25xdRow3-itPr9D6hhsgCgVh38LGBZRr7o5X2rYSxoaAqHVEALw_wcB&ohost=www.google.com&cid=CAESV-D2OqeV_XamPUsI4uhJVSEO0nxMymKlfCsaazJ1WwPpNuNmADs7MYdNQaApYNLYdXzegQFQ__YtcUy7ChQVNz9R5SggxZ_U6WOR0cgFoxz1jAdMkqjEqg&sig=AOD64_2mIvz49K3uuhtwdFQwJYDg3M-Y5w&q&nis=4&adurl&ved=2ahUKEwjNxpXkw_eMAxVaSGwGHVMxFD0Q0Qx6BAgJEAE";
        } else if (spanText.includes('Github')) {
          window.location.href = "https://github.com/";
        } else if (spanText.includes('myAssignment')) {
          window.location.href = "mailto:myAssignment@explorin.io";
        }
      });
    });
  } else {
    console.log("No social buttons found with selector 'div.kl a.button'");
  }
});
  // Project cards
  const projectCards = document.querySelectorAll('.video-container');
  if (projectCards.length > 0) {
    console.log("Found " + projectCards.length + " project cards");
    projectCards.forEach((card, index) => {
      card.addEventListener('click', function() {
        console.log("Project " + (index + 1) + " clicked");
        window.location.href = `project${index + 1}.html`;
      });
      
      card.style.cursor = 'pointer';
    });
  } else {
    console.log("No project cards found with selector '.video-container'");
  }

  // LinkedIn button
  document.getElementById('linkedin-btn').addEventListener('click', function() {
    window.location.href = "https://linkedin.com/in/yourprofile";
  });

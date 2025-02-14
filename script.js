// script.js

// Grab the button
const surpriseBtn = document.getElementById('surpriseBtn');

// Add event listener for clicks
surpriseBtn.addEventListener('click', createHearts);

function createHearts() {
  // Create a heart element
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Randomize position on the screen
  // We'll place the heart at a random horizontal position
  heart.style.left = Math.random() * 100 + 'vw';
  
  // Randomize the size
  const size = Math.random() * 50 + 20; // 20px to 70px
  heart.style.fontSize = size + 'px';
  
  // Use heart symbol or an emoji
  heart.innerText = '❤';
  
  // Add it to the body
  document.body.appendChild(heart);
  
  // Remove the heart after 5s (to clean up)
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

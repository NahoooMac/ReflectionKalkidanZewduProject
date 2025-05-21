
  const titles = [
    "Visual Designer",
    "Digital Marketer", 
    "Content Creator",
    "Social Media Strategist"
  ];
  
  const typewriterElement = document.getElementById('typewriter');
  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function typeWriter() {
    const currentTitle = titles[currentIndex];
    
    if (isDeleting) {
      // Erasing text
      typewriterElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Faster when deleting
    } else {
      // Typing text
      typewriterElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100; // Normal typing speed
    }
    
    // When full word is typed, pause, then start deleting
    if (!isDeleting && charIndex === currentTitle.length) {
      typingSpeed = 1500; // Pause before deleting
      isDeleting = true;
    } 
    // When word is fully erased, move to next word
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % titles.length; // Loop back to first title
      typingSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(typeWriter, typingSpeed);
  }
  
  // Start the effect
  typeWriter();

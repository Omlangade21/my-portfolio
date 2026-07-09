function validateForm() {
  const form = document.forms["contactForm"];
  let name = form["name"].value;
  let email = form["email"].value;
  let message = form["message"].value;

  name = name.trim();
  email = email.trim();
  message = message.trim();

  form["name"].value = name;
  form["email"].value = email;
  form["message"].value = message;

  if (!name) {
    alert("Name cannot be empty.");
    return false;
  }
  if (!email) {
    alert("Email cannot be empty.");
    return false;
  }
  if (!message) {
    alert("Message cannot be empty.");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const contact = { name, email, message, date, time };

  const key = "portfolioContacts";
  let existing = [];
  try {
    const raw = localStorage.getItem(key);
    if (raw) existing = JSON.parse(raw);
    if (!Array.isArray(existing)) existing = [];
  } catch (e) {
    existing = [];
  }

  existing.push(contact);
  localStorage.setItem(key, JSON.stringify(existing));

  alert("Thank you! Your message has been saved successfully.");

  form["name"].value = "";
  form["email"].value = "";
  form["message"].value = "";

  return false;
}

function typeWriter() {
  const typingText = document.getElementById('typing-text');
  if (!typingText) return;
  
  const phrases = [
    "Full-Stack Developer",
    "AI Automation Specialist",
    "Cinematic Editor"
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500;
    }
    
    setTimeout(type, typingSpeed);
  }
  
  type();
}

function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const animatedElements = document.querySelectorAll('.fade-in-up');
  animatedElements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', function() {
  typeWriter();
  initScrollAnimations();
});

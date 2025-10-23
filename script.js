const menuToggle = document.getElementById('mobile-menu');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-menu');
const cards = document.querySelectorAll('.cards');
const container = document.querySelector('.card-container');
const dotsContainer = document.querySelector('.dots');
const P1content = document.getElementById("P1")
const P1btn= document.getElementById("P1btn");
  let index = 0;
  let interval;
  
  
  // Create dots dynamically
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dots span');

  function showCard(i) {
    // Clamp index
    index = i % cards.length;

    // Remove active states
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active state
    cards[index].classList.add('active');
    dots[index].classList.add('active');

    // Smooth scroll to card
    container.scrollTo({
      left: cards[index].offsetLeft - container.offsetLeft-16,
      behavior: 'smooth'
    });
  }

  function nextCard() {
    showCard(index + 1);
  }

  // Auto slide
  function startAutoSlide() {
    interval = setInterval(nextCard, 3000); // every 4s
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  // Pause on hover
  container.addEventListener('mouseenter', stopAutoSlide);
  container.addEventListener('mouseleave', startAutoSlide);
  container.addEventListener('touchstart', stopAutoSlide);
container.addEventListener('touchend', startAutoSlide);


  // Dot click control
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showCard(i);
      stopAutoSlide();
      startAutoSlide();
    });
  });

  // Start autoplay
  startAutoSlide();



menuToggle.addEventListener('click', () => {
  sideMenu.style.right = '0';
});

closeBtn.addEventListener('click', () => {
  sideMenu.style.right = '-100%';
});


P1btn.addEventListener( "OnToggle", ()=>{
        P1content.style.display = 'flex';
})


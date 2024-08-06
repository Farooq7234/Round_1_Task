document.addEventListener('DOMContentLoaded', () => {
    const storiesCards = document.querySelector('.stories-cards');
    const leftArrow = document.getElementById('left');
    const rightArrow = document.getElementById('right');
  
    const cardWidth = storiesCards.querySelector('.stories-card').offsetWidth;
    const margin = 16; // margin between cards
    const step = cardWidth + margin;
  
    let currentPosition = 0;
  
    rightArrow.addEventListener('click', () => {
      currentPosition -= step;
      storiesCards.style.transform = `translateX(${currentPosition}px)`;
      setTimeout(() => {
        const firstCard = storiesCards.querySelector('.stories-card');
        storiesCards.appendChild(firstCard);
        currentPosition += step;
        storiesCards.style.transition = 'none';
        storiesCards.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(() => {
          storiesCards.style.transition = 'transform 0.5s ease-in-out';
        });
      }, 500); // Duration of the transition
    });
  
    leftArrow.addEventListener('click', () => {
      const lastCard = storiesCards.querySelector('.stories-card:last-child');
      storiesCards.insertBefore(lastCard, storiesCards.firstChild);
      currentPosition -= step;
      storiesCards.style.transition = 'none';
      storiesCards.style.transform = `translateX(${currentPosition}px)`;
      requestAnimationFrame(() => {
        currentPosition += step;
        storiesCards.style.transition = 'transform 0.5s ease-in-out';
        storiesCards.style.transform = `translateX(${currentPosition}px)`;
      });
    });
  });

  
  document.addEventListener('DOMContentLoaded', () => {
    const rightArrow = document.getElementById('filter-right');
    const blogFilterBox = document.querySelector('.blog-filter-box');
    const items = blogFilterBox.getElementsByTagName('a');

    rightArrow.addEventListener('click', () => {
        const firstItem = items[0];
        blogFilterBox.appendChild(firstItem);
        updateArrows();
    });


    function updateArrows() {
        rightArrow.style.display = items.length > 1 ? 'block' : 'none';
    }

    updateArrows(); // Initial check
});


const hamBurger = document.getElementById('hamburger')
const mobileNav = document.querySelector(".mobile-nav")
hamBurger.addEventListener("click", ()=>{
  mobileNav.classList.toggle("toggle")
})
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

window.addEventListener('scroll', function() {
  let sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    let position = section.getBoundingClientRect().top;
    let windowHeight = window.innerHeight - animation.revealDistance;

    if (position < windowHeight) {
      section.style.opacity = 1;
      section.style.transition = `${animation.transitionProperty} ${animation.transitionDuration} ${animation.transitionTimingFunction} ${animation.transitionDelay}`;
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card img');

  cards.forEach(card => {
    card.addEventListener('click', function () {
      const link = this.parentElement.href;
      window.open(link, '_blank');
    });
  });
});

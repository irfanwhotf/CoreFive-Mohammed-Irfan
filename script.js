document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Form submitted! (This is a demo.)');
      console.log('Form data:', new FormData(contactForm));
    });
  }

  function updateHomePage() {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      const newParagraph = document.createElement('p');
      newParagraph.textContent = "Welcome to our project!  We are excited to showcase our collaborative work.";
      homeSection.appendChild(newParagraph);
    }
  }
  updateHomePage();

  function createNavLink(sectionId, text) {
    const nav = document.querySelector('header nav ul');
    if (nav) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${sectionId}`;
      a.textContent = text;
      li.appendChild(a);
      nav.appendChild(li);
    }
  }
  createNavLink('new-section', 'New Section');
});


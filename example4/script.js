document.addEventListener("DOMContentLoaded", function() {

  function createParagraph() {
      let paragraph = document.createElement('p');
      paragraph.textContent = 'You clicked the button!';
      document.body.appendChild(paragraph);
  }
    document.addEventListener('click', createParagraph);
});

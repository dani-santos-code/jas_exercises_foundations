document.addEventListener("DOMContentLoaded", function() {

  function createParagraph() {
      let paragraph = document.createElement('p');
      paragraph.textContent = 'You clicked the button!';
      document.getElementById("main").appendChild(paragraph);
  }
    document.addEventListener('click', createParagraph);
});

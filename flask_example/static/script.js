document.addEventListener("DOMContentLoaded", function() {

  function createParagraph() {
      var paragraphEl = document.createElement('p');
      paragraphEl.textContent = 'You clicked the button!';
      document.getElementById("main").appendChild(paragraphEl);
  }
    document.addEventListener('click', createParagraph);
    
});

document.addEventListener("DOMContentLoaded", function() {

    function createParagraph() {
        let paragraph = document.createElement('p');
        paragraph.textContent = 'You clicked the button!';
        if (document.querySelector('p') === null) {
          document.getElementById("main").appendChild(paragraph);
        } else {
          alert("You can only create one paragraph!")
        }
    }
      document.addEventListener('click', createParagraph);
});

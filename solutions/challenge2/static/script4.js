document.addEventListener("DOMContentLoaded", function() {

  const buttonEl = document.querySelector('button');
  buttonEl.addEventListener('click', deleteAll);

  function deleteAll() {
    const listEl = document.querySelector('ul');

    if (listEl) {
      listEl.remove();
    }

    buttonEl.textContent = "No Pokes Left";
  }
});

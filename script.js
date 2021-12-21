// listen for clicks on the navbar
document.querySelector('.navbar').addEventListener('click', (e) => {

  // ignore it if the click isn't on an anchor element
    if (e.target.tagName.toLowerCase() === 'a') {

    // remove the 'active' class from all of the nav anchors
      document.querySelectorAll('.navbar a')
      .forEach(e => e.classList.remove('active'));

    // add the 'active' class to the clicked element
      e.target.classList.add('active');
  }
});

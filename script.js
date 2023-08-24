window.addEventListener('scroll', function() {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var rect = section.getBoundingClientRect();
      var isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    }
  });



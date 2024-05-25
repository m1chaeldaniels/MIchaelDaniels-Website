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

  $(document).ready(function() {
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > lastScrollTop) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
        lastScrollTop = currentScroll;
    });
});

function toggleNavbar() {
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var toggler = document.querySelector('.navbar-toggler');
    toggler.classList.toggle('change');
    if (navbarCollapse.style.display === 'block') {
        navbarCollapse.style.display = 'none';
    } else {
        navbarCollapse.style.display = 'block';
    }
}
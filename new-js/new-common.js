document.addEventListener("DOMContentLoaded", function() {
  // put it into $(document).ready if repack

  let headerLine = document.querySelector('.header-line');
  function calcHeaderBot(){
    document.documentElement.style.setProperty('--menu-top-h', `${headerLine.offsetHeight + headerLine.offsetTop}px`);
  }
  window.addEventListener('resize', calcHeaderBot)
  calcHeaderBot();

  //new menu
  $('.header-menu-cat > a').click(function (){
    window.scrollTo(0,0);
    $('body').toggleClass('fixed2');
  });
  $('.menu-dd-mob--js').click(function (){
    $(this.parentElement).find('.menu-dd--js').toggleClass('active');
  });
  $('.mob-back-js').click(function (){
    $(this).closest('.menu-dd--js').toggleClass('active');
  });

});
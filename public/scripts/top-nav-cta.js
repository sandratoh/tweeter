/* global $ */
/* global document */

$(document).ready(() => {
  $('.nav-cta').on('click', () => {
    $('textarea').focus();
    
    const tweetArea = document.getElementById('tweet-area');
    tweetArea.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });

  $('span').on('click', () => {
    $('html, body').animate({
      scrollTop: $('main').offset().top
    }, 1000);
  });
});
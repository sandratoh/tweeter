$(document).ready(() => {

  $('#tweet-text').on('input', function(event) {
    const tweetLength = $('#tweet-text').val().length;
    const counter = $(this).closest('form').find('.counter');
    const maxChar = 140;

    counter.text(maxChar - tweetLength);

    if (tweetLength >= 120) {
      counter.addClass('char-warning');
    }
    
    if (tweetLength > 140) {
      counter.removeClass('char-warning');
      counter.addClass('char-invalid');
    }

    if (tweetLength < 120) {
      counter.removeClass(['char-warning', 'char-invalid']);
    }
  });
});
$(document).ready(() => {

  $('#tweet-text').on('input', function(event) {
    const tweetLength = $('#tweet-text').val().length;
    const counter = $(this).closest('form').find('.counter');
    const maxChar = 140;

    counter.text(maxChar - tweetLength);
  });
});
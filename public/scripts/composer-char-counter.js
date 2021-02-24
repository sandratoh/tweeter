$(document).ready(() => {

  $('#tweet-text').on('input', function(event) {
    let count = $('#tweet-text').val();
    console.log(count.length);
    console.log($(this).closest('form').find('.counter'));
  });
  
});
$(document).ready(() => {

  $('textarea').on('input', function(event) {
    this.style.height = '';
    this.style.height = this.scrollHeight + 'px';
  });
});
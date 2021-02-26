/* global $ */
/* global document */
/* global timeInterval */

$(document).ready(() => {
  /* Create tweet html syntax*/
  const createTweetElement = tweet => {
    let header = $(
      `<header>
        <img src=${tweet.user.avatars}>
        <div class="user-meta">
          <p>${tweet.user.name}</p>
          <p class="tweeter-handle">${tweet.user.handle}</p>
        </div>
      </header>`
    );
    let safeChar = $('<p>').text(tweet.content.text);
    let footer = $(
      `<footer>
        <p>${timeInterval(tweet.created_at)}</p>
        <div class="icons">
          <i class="tweet-icon fas fa-flag"></i>
          <i class="tweet-icon fas fa-retweet"></i>
          <i class="tweet-icon far fa-heart"></i>
        </div>
      </footer>`
    );
    let $tweet = $('<article>');

    $tweet
      .addClass('tweet')
      .append(header)
      .append(safeChar)
      .append(footer);
    
    return $tweet;
  };
  
  /* Add tweet to correct section in descending order */
  const renderTweets = tweets => {
    $('#tweets-container').empty();

    let sortedTweets = tweets.sort((a, b) => b.created_at - a.created_at);
    
    for (let tweet of sortedTweets) {
      $('#tweets-container').append(createTweetElement(tweet));
    }
  };

  /* Load tweet from json database */
  const loadTweets = () => {
    $.get({
      url: '/tweets/',
      dataType: 'json'
    })
      .then(res => renderTweets(res))
      .catch(err => console.log(err));
  };

  loadTweets();

  /* Client-side form validation behaviour */
  $('form').on('submit', event => {
    event.preventDefault();

    const input = $('textarea').val();

    if (!input || input.length > 140) {
      $('textarea').addClass('invalid-input');
      $('.form-msg').addClass('error-msg');
      return !input ? $('.form-msg').text('Tweet, tweet, something is empty!') : $('.form-msg').text('Tweet. Characters. Overload!');
    }

    $.post({
      url: '/tweets/',
      data: $('form').serialize()
    })
      .then(res => {
        loadTweets();
        $('form').trigger('reset');
        $('.counter').val('140').removeClass(['char-warning', 'char-invalid']);
        $('.form-msg').removeClass('error-msg');
        $('.form-msg').text('ฅ^•ﻌ•^ฅ');
        $('textarea').height('54');
        return;
      })
      .catch(err => console.log(err));
  });

  $('textarea').on("keydown", () => {
    $('textarea').removeClass('invalid-input');
  });

});
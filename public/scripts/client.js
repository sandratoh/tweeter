/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };
  
  
  
  
  const timeInterval = postTime => {
    
    const currentTime = Date.now();
    const numOfDays = (currentTime - postTime) / (1000 * 3600 * 24);
    
    let num = numOfDays;
    let unit = 'day';
    let result = '';
    
    if (numOfDays >= 365) {
      num /= 365;
      unit = 'year';

    } else if (numOfDays >= 30) {
      num /= 30;
      unit = 'month';

    } else if (numOfDays >= 7 && numOfDays < 1) {
      num /= 7;
      unit = 'week';

    } else if (numOfDays === 0) {
      return 'Today';
    }

    let roundedNum = Math.floor(num);
    
    if (roundedNum > 1) {
      unit += 's';
    }
    
    result = `${roundedNum} ${unit} ago`;

    return result;
  };

  const $tweet = $(
    `<article class="tweet">
      <header>
        <img src=${tweetData.user.avatars}>
        <div class="user-meta">
          <p>${tweetData.user.name}</p>
          <p class="tweeter-handle">${tweetData.user.handle}</p>
        </div>
      </header>
      <p>${tweetData.content.text}</p>
      <footer>
        <p>${timeInterval(tweetData.created_at)}</p>
        <div class="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
        </div>
      </footer>
    </article>`
  );

  // const footer = $('<footer>')

  // $tweet.append(footer);

  // const name = $('<p>').text(tweetData.user.name);
  // const avatar = $('<img>').attr('src', tweetData.user.avatars);
  // const post = $('<article>').text('Hello world');
  // post.addClass('tweet');
  // const $tweet = post.append(name);
  
  // const renderTweets = tweets => {
  
  // };
  
  // const createTweetElement = tweet => {
  //   let $tweet = 
  //   // ...
  //   return $tweet;
  // };
  
  // createTweetElement();
  
  // renderTweets(data);
  
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  
});


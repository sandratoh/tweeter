/*
 * Client-side JS logic goes here
 */

$(document).ready(() => {

  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1614025805444
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1614111969553
    }
  ];
  
  const timeInterval = postTime => {
    const currentTime = Date.now();
    const numOfDays = (currentTime - postTime) / (1000 * 3600 * 24);
    
    let num = numOfDays;
    let unit = 'day';
    
    if (numOfDays >= 365) {
      num /= 365;
      unit = 'year';

    } else if (numOfDays >= 30) {
      num /= 30;
      unit = 'month';

    } else if (numOfDays >= 7) {
      num /= 7;
      unit = 'week';

    } else if (Math.floor(numOfDays) === 0) {
      return 'Today';
    }

    let roundedNum = Math.floor(num);
    
    if (roundedNum > 1) {
      unit += 's';
    }
    
    return `${roundedNum} ${unit} ago`;
  };

  const renderTweets = tweets => {
    for (let tweet of tweets) {
      $('#tweets-container').append(createTweetElement(tweet));
    }
  };
  
  const createTweetElement = tweet => {
    let $tweet = $(
      `<article class="tweet">
        <header>
          <img src=${tweet.user.avatars}>
          <div class="user-meta">
            <p>${tweet.user.name}</p>
            <p class="tweeter-handle">${tweet.user.handle}</p>
          </div>
        </header>
        <p>${tweet.content.text}</p>
        <footer>
          <p>${timeInterval(tweet.created_at)}</p>
          <div class="icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="far fa-heart"></i>
          </div>
        </footer>
      </article>`
    );
    return $tweet;
  };
  
  renderTweets(tweetData);
  
  $('form').on('submit', event => {
    event.preventDefault();

    $.ajax({
      url: '/tweets/',
      method: 'POST',
      data: $('form').serialize()
    })
      .then(res => console.log('It works!'))
      .catch(err => console.log(err));
  });
  
});
const timeInterval = postTime => {
  const currentTime = Date.now();
  const msPerMin = 1000 * 60;
  const msPerHour = msPerMin * 60;
  const msPerDay = msPerHour * 24;
  const msTimeDiff = currentTime - postTime;

  let num = msTimeDiff;
  let unit = '';

  if (msTimeDiff < msPerMin) {
    num /= 1000;
    unit = 'second';
    
  } else if (msTimeDiff < msPerHour) {
    num /= msPerMin;
    unit = 'minute';

  } else if (msTimeDiff < msPerDay) {
    num /= msPerHour;
    unit = 'hour';

  } else {
    const numOfDays = (msTimeDiff) / (msPerDay);
    
    num = numOfDays;
    unit = 'day';
    
    if (numOfDays >= 365) {
      num /= 365;
      unit = 'year';

    } else if (numOfDays >= 30) {
      num /= 30;
      unit = 'month';

    } else if (numOfDays >= 7) {
      num /= 7;
      unit = 'week';
    }
    
  }
  let roundedNum = Math.floor(num);
  
  if (roundedNum > 1) {
    unit += 's';
  }
  
  return `${roundedNum} ${unit} ago`;
};
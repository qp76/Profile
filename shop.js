var clicks = [];

function trackClicks() {
  clicks.push(number);

  if (clicks.length > 10) {
    clicks.shift();
  }

  console.log("Top 10 Clicks:", clicks);
}

function increaseNumber() {
  number++;
  updateNumberDisplay();
  animateButton(this);
  trackClicks();
}

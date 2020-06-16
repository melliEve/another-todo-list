
function smoothScroll(target, duration) {
  var target = document.querySelector(target); //section2
  var targetPosition = target.getBoundingClientRect().top; //elements relative posiion to the top of the screen
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    console.log(startTime);

    var elapsedTime = currentTime - startTime;
    // console.log(elapsedTime);

    var run = ease(elapsedTime, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (elapsedTime < duration) requestAnimationFrame(animation);
    // console.log('timeElapsed: ' + elapsedTime + ' duration: ' + duration);

  }

  // gizma.com/easing
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }



  requestAnimationFrame(animation);
}

var section1 = document.querySelector('.section1');
section1.addEventListener('click', function () {
  smoothScroll('.section2', 1000);
})

var section2 = document.querySelector('.section2');
section2.addEventListener('click', function () {
  smoothScroll('.section1', 1000);
})
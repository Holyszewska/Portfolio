(function () {
  "use strict";

  var animateCountUp = function animateCountUp(el) {
    el.classList.add("animated");
  }; // Run the animation on all elements with a class of animate-show

  var runAnimations = function runAnimations() {
    var countupEls = document.querySelectorAll(".animate-show");
    countupEls.forEach(animateCountUp);
  };

  // this is the target which is observed
  var target = document.querySelector(".animate-show");

  // configure the intersection observer instance
  var intersectionObserverOptions = {
    root: null, // default is the viewport
    threshold: 0.5, // percentage of the taregt visible area which will trigger "onIntersection"
  };

  var observer = new IntersectionObserver(
    onIntersection,
    intersectionObserverOptions
  );

  // called when target is fully visible
  function onIntersection(entries, opts) {
    entries.forEach((entry) => {
      var visible = entry.intersectionRatio >= opts.thresholds[0];

      if (visible) {
        runAnimations();

        // To stop watching
        observer.unobserve(entry.target);
      }
    });
  }

  // provide the observer with a target
  observer.observe(target);
})();

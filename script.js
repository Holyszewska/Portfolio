function hidePreloader() {
  let pocetSekund = 1;
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hidden");
  }, pocetSekund * 1000);
}

function showDotsAbout() {
  const flyingDots = document.getElementById("flying-dots");
  flyingDots.classList.add("flying-dots-animation");

  const dots = flyingDots.querySelectorAll(".dot");
  document.addEventListener("mousemove", (event) => {
    dots.forEach((dot, index) => {
      const x = event.clientX;
      const y = event.clientY;

      if (dot.classList.contains("big")) {
        dot.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
        return;
      }

      if (dot.classList.contains("small")) {
        dot.style.transform = `translate(${x / 20}px, ${y / 20}px)`;
        return;
      }

      dot.style.transform = `translate(${x / 10}px, ${y / 10}px)`;
    });
  });
}

function galleries() {
  let gallery1 = new PhotoSwipeLightbox({
    gallery: ".game-posters_pictures",
    children: "a",
    pswpModule: PhotoSwipe,
  });
  gallery1.init();

  let gallery2 = new PhotoSwipeLightbox({
    gallery: ".moodboard_pictures",
    children: "a",
    pswpModule: PhotoSwipe,
  });
  gallery2.init();

  let gallery3 = new PhotoSwipeLightbox({
    gallery: ".wireframes_pictures",
    children: "a",
    pswpModule: PhotoSwipe,
  });
  gallery3.init();

  let gallery4 = new PhotoSwipeLightbox({
    gallery: ".prototypes_pictures",
    children: "a",
    pswpModule: PhotoSwipe,
  });
  gallery4.init();
}

(function () {
  hidePreloader();
  showDotsAbout();
  galleries();
})();

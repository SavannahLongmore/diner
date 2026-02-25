window.addEventListener("load", function () {

  document.querySelectorAll(".carousel3").forEach((carousel) => {
    const track = carousel.querySelector(".track");
    const prev = carousel.querySelector('.arrow[data-dir="-1"]');
    const next = carousel.querySelector('.arrow[data-dir="1"]');

    if (!track || !prev || !next) return;

    function getStep() {
      const slide = track.querySelector(".slide");
      if (!slide) return 0;

      const gapStr = getComputedStyle(track).gap || "0px";
      const gap = parseFloat(gapStr) || 0;

      return slide.getBoundingClientRect().width + gap;
    }

    function maxScrollLeft() {
      return track.scrollWidth - track.clientWidth;
    }

    function atStart() {
      return track.scrollLeft <= 1;
    }

    function atEnd() {
      return track.scrollLeft >= maxScrollLeft() - 1;
    }

    prev.addEventListener("click", () => {
      if (atStart()) {
        // jump to end (no animation so it feels instant)
        track.scrollTo({ left: maxScrollLeft(), behavior: "auto" });
        return;
      }
      track.scrollBy({ left: -getStep(), behavior: "smooth" });
    });

    next.addEventListener("click", () => {
      if (atEnd()) {
        // jump to start
        track.scrollTo({ left: 0, behavior: "auto" });
        return;
      }
      track.scrollBy({ left: getStep(), behavior: "smooth" });
    });
  });

});

// FOOTER YEAR
const todaysDate = new Date();
document.querySelector('#year').textContent = todaysDate.getFullYear();

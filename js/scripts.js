window.addEventListener("load", () => {
  const nav = document.getElementById("mobileNav");
  const overlay = document.getElementById("navOverlay");
  const openBtn = document.getElementById("navOpen");
  const closeBtn = document.getElementById("navClose");

  function openNav() {
    nav.classList.add("isOpen");
    nav.setAttribute("aria-hidden", "false");
    openBtn.setAttribute("aria-expanded", "true");
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    nav.classList.remove("isOpen");
    nav.setAttribute("aria-hidden", "true");
    openBtn.setAttribute("aria-expanded", "false");
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  openBtn.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);
  overlay.addEventListener("click", closeNav);

  // notes: Close when you tap a link
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") closeNav();
  });

  // notes: ESC closes
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
});

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

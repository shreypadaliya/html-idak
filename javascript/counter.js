document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".perfomance-count-number");

  const animateCount = (counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / 100;
    let count = 0;

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.textContent = `${Math.ceil(count)}+`;
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = `${target}+`;
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          animateCount(counter);
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

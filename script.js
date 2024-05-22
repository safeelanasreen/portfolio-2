const header = document.querySelector(".header");
let floatingLabel = document.querySelector(".floating-label");
document.addEventListener("scroll", (ev) => {
  if (window.scrollY > 150) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("scroll", (ev) => {
  if (window.scrollY < 200) {
    floatingLabel.classList.add("float-show");
  } else {
    floatingLabel.classList.remove("float-show");
  }
});

let toolButton = document.querySelector(".tool-btn");

toolButton.addEventListener("click", () => {
  floatingLabel.classList.toggle("float-open");
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all img_item elements
  const imgItems = document.querySelectorAll(".img_item");

  // Initialize index to track the active item
  let currentIndex = 0;

  // Function to toggle active class on img_item elements
  function toggleActiveItem() {
    // Remove 'active' class from all img_item elements
    imgItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Add 'active' class to the current img_item
    imgItems[currentIndex].classList.add("active");

    // Increment index for the next item (loop back to the start if at the end)
    currentIndex = (currentIndex + 1) % imgItems.length;
  }

  // Initial call to toggleActiveItem
  toggleActiveItem();

  // Set interval to toggle active class every 40 seconds
  setInterval(toggleActiveItem, 5000); // 40 seconds = 40000 milliseconds
});

//anim class visible at viewport
window.addEventListener("load", () => {
  function isInViewport(el, gap) {
      let top = el.offsetTop;
      let left = el.offsetLeft;
      let height = el.offsetHeight;
      // console.log(el.offsetParent);
      while (el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
      }
      return (
          (window.pageYOffset + window.innerHeight - gap) >= (top) &&
          (window.pageYOffset) <= (height + top)
      );
  }
  let getElem = document.querySelectorAll('.anim');
  //please change as per the design
  const breakPoints = {
      desktop: 250,
      laptop: 80,
      tab: 50,
      mobile: 30
  };
  let targetGap;
  window.innerWidth >= 1200 ? targetGap = breakPoints.desktop :
      window.innerWidth >= 1024 ? targetGap = breakPoints.laptop :
      window.innerWidth >= 768 ? targetGap = breakPoints.tab :
      targetGap = breakPoints.mobile;

  function anim() {
      getElem.forEach(element => {
          isInViewport(element, targetGap) ? element.classList.add("visible") : null;
      })
  }
  getElem.length > 0 ? (window.addEventListener('scroll', anim, false)) : null;
  getElem.length > 0 ? anim() : null;
}, false);

const Banner = document.querySelector(".banner-section");
window.addEventListener("load", function () {
  Banner?.classList.add("loaded");
});


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        let endValue = '0' + counter.textContent;
        let startValue = 0 ;
        let updating = setInterval(() => {
          startValue += endValue / 200;
          counter.textContent = '0'+ startValue.toFixed(0);
          if (startValue > endValue) {
            counter.textContent =   endValue;
            clearInterval(updating);
            observer.unobserve(counter);
          }
        }, 5);
      }
    });
  },
  { threshold: 1 }
);
document
  .querySelectorAll(".counter")
  .forEach((counter) => observer.observe(counter));


 
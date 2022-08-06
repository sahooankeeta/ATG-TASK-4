console.log("hi");

const colorsRight = [
  "#e7daa3",
  "#3c0945",
  "rgb(11 16 67)",
  "black",
  "#00c9d4",
  "grey",
  "#24d924",
];
const colorsLeft = [
  "#a5327e",
  "purple",
  "#0b0b2b",
  "#152a29",
  "#2a5e64",
  "#19195f",
  "#136413",
];
const figures = document.querySelectorAll(".figure");
const captions = document.querySelectorAll(".caption");
figures.forEach((f, i) => {
  f.style.backgroundColor = colorsRight[i];
});
captions.forEach((c, i) => {
  c.style.backgroundColor = colorsLeft[i];
});
const sectionHeadings = document.querySelectorAll(".section-heading");
const sectionHeadingContents = document.querySelectorAll(
  ".section-heading-content"
);

const leftContents = document.querySelectorAll(".left-content");
const leftHeadings = document.querySelectorAll(".left-heading");
console.log(leftContents[0].getElementsByTagName("p"));
const dots = gsap.utils.toArray(".dotsst");
gsap.defaults({ ease: "none" });
gsap.set(".section", { backgroundColor: gsap.utils.wrap(colorsRight) });
const sections = gsap.utils.toArray(".section");
const smallsections = gsap.utils.toArray(".owl-dot");
smallsections.forEach((small, index) => {
  ScrollTrigger.create({
    trigger: section,

    animation: gsap.to(".owl-nav", {
      duration: 1,
      backgroundColor: colorsLeft[index],
      immediateRender: false,
    }),
    toggleActions: "restart none none reverse",
  });
});
sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top 70%",
    end: "bottom 70%",

    animation: gsap.to(".left", {
      duration: 1,
      backgroundColor: colorsLeft[index],
      immediateRender: false,
    }),
    toggleActions: "restart none none reverse",
  });
  ScrollTrigger.create({
    trigger: section,
    start: "top 70%",
    end: "bottom 70%",

    animation: gsap.to("svg", {
      duration: 1,
      backgroundColor: colorsLeft[index],
      immediateRender: false,
    }),
    toggleActions: "restart none none reverse",
  });

  ScrollTrigger.create({
    trigger: section,
    start: "top 70%",
    end: "bottom 70%",

    toggleClass: {
      targets: sectionHeadings[index],
      className: "active",
    },
  });
  ScrollTrigger.create({
    trigger: section,
    start: "top 70%",
    end: "bottom 70%",

    toggleClass: {
      targets: leftContents[index],
      className: "active",
    },
  });
  ScrollTrigger.create({
    trigger: section,
    start: "top 70%",
    end: "bottom 70%",

    toggleClass: {
      targets: leftHeadings[index],
      className: "active",
    },
  });
  ScrollTrigger.create({
    trigger: section,
    start: "top 70%",
    end: "bottom 70%",

    toggleClass: {
      targets: sectionHeadingContents[index],
      className: "slide-down",
    },
  });
  ScrollTrigger.create({
    trigger: section,
    start: "top 70%",
    end: "bottom 70%",

    toggleClass: {
      targets: leftHeadings[index],
      className: "slide-down",
    },
  });
  ScrollTrigger.create({
    trigger: section,
    start: "top 70%",
    end: "bottom 70%",

    toggleClass: {
      targets: leftContents[index].getElementsByTagName("p"),
      className: "slide-up",
    },
  });
  ScrollTrigger.create({
    trigger: section,
    start: "top 10%",
    end: "bottom 10%",

    toggleClass: { targets: dots.slice(0, index + 1), className: "active" },
  });
  if (index == 0 || index === 6)
    ScrollTrigger.create({
      trigger: section,
      start: "top 70%",
      end: "bottom 70%",

      toggleClass: {
        targets: `.section-heading-img-${index + 1}`,
        className: "active",
      },
    });
});

let path = document.getElementById("Transparent_Ring");
let pathlength = path.getTotalLength();

let pathmove = document.getElementById("Opaque_Ring");

pathmove.style.strokeDasharray = pathlength + " " + pathlength;
pathmove.style.strokeDashoffset = pathlength;
window.addEventListener("scroll", () => {
  let scrollper =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  let draw = pathlength * scrollper;
  pathmove.style.strokeDashoffset = pathlength - draw;
});
gsap.to(
  Array.from(
    document.querySelector(".section-content-1").getElementsByTagName("img")
  ),
  {
    scrollTrigger: {
      trigger: Array.from(
        document.querySelector(".section-content-1").getElementsByTagName("img")
      ),
      start: "20% 0%",
      end: "30% 100%",
      scrub: 1,
    },
    y: 250,
    duration: 0.5,
  }
);
gsap.to(
  Array.from(
    document.querySelector(".section-content-2").getElementsByTagName("img")
  )[0],
  {
    scrollTrigger: {
      trigger: Array.from(
        document.querySelector(".section-content-2").getElementsByTagName("img")
      )[0],
      start: "0% 100%",
      end: "30% 100%",
      scrub: 1,
      //markers: true,
    },
    y: -250,
    duration: 0.5,
  }
);
gsap.to(
  Array.from(
    document.querySelector(".section-content-2").getElementsByTagName("img")
  )[1],
  {
    scrollTrigger: {
      trigger: Array.from(
        document.querySelector(".section-content-2").getElementsByTagName("img")
      )[1],
      start: "top 50%",
      end: "30% 50%",
      scrub: 1,
      //markers: true,
    },
    y: 250,
    duration: 0.5,
  }
);
gsap.to(
  Array.from(
    document.querySelector(".section-content-3").getElementsByTagName("img")
  )[0],
  {
    scrollTrigger: {
      trigger: Array.from(
        document.querySelector(".section-content-3").getElementsByTagName("img")
      )[0],
      start: "top 100%",
      end: "100px 75%",
      scrub: 1,
      toggleActions: "restart none restart none",
    },
    y: -300,
    duration: 0.5,
  }
);
gsap.to(
  Array.from(
    document.querySelector(".section-content-3").getElementsByTagName("img")
  )[1],
  {
    scrollTrigger: {
      trigger: Array.from(
        document.querySelector(".section-content-3").getElementsByTagName("img")
      )[1],
      start: "20% 0%",
      end: "30% 100%",
      scrub: 1,
      //markers: true,
    },
    y: 250,
    duration: 0.5,
  }
);
gsap.to(document.querySelector(".section-content-4-top"), {
  scrollTrigger: {
    trigger: document.querySelector(".section-content-4-top"),
    start: "20% 50%",
    end: "30% 100%",
    scrub: 1,
  },
  y: 100,
  duration: 0.5,
});
gsap.to(document.querySelector(".section-content-4-bottom"), {
  scrollTrigger: {
    trigger: document.querySelector(".section-content-4-bottom"),
    start: "0% 100%",
    end: "0% 80%",
    scrub: 1,
  },
  y: -250,
  duration: 0.5,
});
gsap.to(
  Array.from(
    document.querySelector(".section-content-5").getElementsByTagName("img")
  ).slice(0, 3),
  {
    scrollTrigger: {
      trigger: Array.from(
        document.querySelector(".section-content-5").getElementsByTagName("img")
      ).slice(0, 3),
      start: "top 10",
      end: "bottom 100",
      scrub: 1,
    },
    y: 100,
    duration: 0.5,
  }
);
gsap.to(
  Array.from(
    document.querySelector(".section-content-5").getElementsByTagName("img")
  ).slice(3),
  {
    scrollTrigger: {
      trigger: Array.from(
        document.querySelector(".section-content-5").getElementsByTagName("img")
      ).slice(3),
      start: "top 80%",
      end: "bottom 95%",
      scrub: 1,
    },
    y: -100,
    duration: 0.5,
  }
);
gsap.to(
  document.querySelector(".section-content-7").getElementsByTagName("img"),
  {
    scrollTrigger: {
      trigger: document
        .querySelector(".section-content-7")
        .getElementsByTagName("img"),
      start: "20% 80%",
      end: "50% 95%",
      scrub: 1,
    },
    y: -200,
    duration: 0.5,
  }
);
$(() => {
  $.scrollify({
    section: ".section",
  });
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: true,
      loop: false,
    },
  },
});

// ============================================
// PCM EMPLOYMENT AGENCIES - MAIN.JS
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  // --------------------------------------------
  // 1. CONTACT DETAILS FROM config.js
  // --------------------------------------------

  const c = PCM_CONFIG;

  const tel = (phone) =>
    "tel:" + phone.replace(/[^\d+]/g, "");

  const html = {
    licence: c.licence,

    address: c.address,

    phones: c.phones
      .map(
        (phone) =>
          `<p class="mb-1">
            <a href="${tel(phone)}">${phone}</a>
          </p>`
      )
      .join(""),

    emails: c.emails
      .map(
        (email) =>
          `<p class="mb-1">
            <a href="mailto:${email}">${email}</a>
          </p>`
      )
      .join(""),

    "contact-list":
      c.phones
        .map(
          (phone) =>
            `<a href="${tel(phone)}">${phone}</a><br>`
        )
        .join("") +
      c.emails
        .map(
          (email) =>
            `<a href="mailto:${email}">${email}</a><br>`
        )
        .join("")
  };

  document.querySelectorAll("[data-cfg]").forEach((element) => {
    const key = element.dataset.cfg;

    if (Object.prototype.hasOwnProperty.call(html, key)) {
      element.innerHTML = html[key];
    }
  });

  // --------------------------------------------
  // 2. WHATSAPP CONTACT BUTTON
  // --------------------------------------------

  const whatsappButton = document.getElementById("whatsapp");

  if (whatsappButton && c.whatsapp) {
    const whatsappNumber = c.whatsapp.replace(/\D/g, "");

    whatsappButton.innerHTML = `
      <a
        class="btn btn-success w-100"
        href="https://wa.me/${whatsappNumber}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="bi bi-whatsapp"></i>
        WhatsApp Enquiry
      </a>
    `;
  }

  // --------------------------------------------
  // 3. FOOTER YEAR
  // --------------------------------------------

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // --------------------------------------------
  // 4. NAVBAR SCROLL, PROGRESS & BACK TO TOP
  // --------------------------------------------

  const nav = document.getElementById("mainNav");
  const progressBar = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backTop");

  function handleScroll() {
    const page = document.documentElement;
    const scrollPosition = page.scrollTop;

    if (nav) {
      nav.classList.toggle("scrolled", scrollPosition > 40);
    }

    if (progressBar) {
      const scrollableHeight =
        page.scrollHeight - page.clientHeight;

      const progress =
        scrollableHeight > 0
          ? (scrollPosition / scrollableHeight) * 100
          : 0;

      progressBar.style.width = progress + "%";
    }

    if (backToTop) {
      backToTop.classList.toggle("show", scrollPosition > 500);
    }
  }

  window.addEventListener("scroll", handleScroll, {
    passive: true
  });

  handleScroll();

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // --------------------------------------------
  // 5. SCROLL REVEAL ANIMATION
  // --------------------------------------------

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    revealElements.forEach(function (element) {
      observer.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add("in");
    });
  }
});


function EnquiryFun() {
  let name = document.getElementById("name").value.trim();
  let company = document.getElementById("company").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let workers = document.getElementById("workers").value;
  let service = document.getElementById("service").value;

  if (!name || !email || !phone || !service) {
    alert("Please fill in all required fields.");
    return;
  }

  let message = `New Enquiry

Name: ${name}
Company: ${company || "Not provided"}
Email: ${email}
Phone: ${phone}
Number of Workers: ${workers || "Not specified"}
Service Required: ${service}`;

  let whatsappNumber = "9884634074";

  let whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}



// cursor

  if (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const count = 12;
    const dots = [];
    const mouse = { x: -100, y: -100 };

    for (let i = 0; i < count; i++) {
      const dot = document.createElement("div");
      dot.className = "cursor-tail";

      const size = 10 - (i / count) * 8;

      dot.style.width = size + "px";
      dot.style.height = size + "px";
      dot.style.opacity = 1 - i / count;

      document.body.appendChild(dot);

      dots.push({
        element: dot,
        x: -100,
        y: -100
      });
    }

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function animate() {
      let targetX = mouse.x;
      let targetY = mouse.y;

      dots.forEach((dot) => {
        dot.x += (targetX - dot.x) * 0.35;
        dot.y += (targetY - dot.y) * 0.35;

        dot.element.style.transform =
          `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%)`;

        targetX = dot.x;
        targetY = dot.y;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }
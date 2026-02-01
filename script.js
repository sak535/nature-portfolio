// SEE ALL BUTTON
const seeAllBtn = document.getElementById("seeAllBtn");
const hiddenImages = document.querySelectorAll(".gallery .hidden");

seeAllBtn.addEventListener("click", () => {
    hiddenImages.forEach(img => {
    img.style.display = "block";
    });
    seeAllBtn.style.display = "none";
});

// ABOUT OVERLAY
const aboutLink = document.getElementById("aboutLink");
const aboutOverlay = document.getElementById("aboutOverlay");
const closeAbout = document.getElementById("closeAbout");

aboutLink.addEventListener("click", (e) => {
    e.preventDefault();
    aboutOverlay.classList.remove("hidden");
});

closeAbout.addEventListener("click", () => {
    aboutOverlay.classList.add("hidden");
});

// click background to close
aboutOverlay.addEventListener("click", (e) => {
    if (e.target === aboutOverlay) {
    aboutOverlay.classList.add("hidden");
    }
});

// LIGHTBOX
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
    img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.add("hidden");
});

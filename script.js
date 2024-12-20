const videoIntro = document.getElementById("video-intro");
const mainContent = document.querySelectorAll("header, main");
const video = videoIntro.querySelector("video");

// Bloquer le scroll pendant l'intro
document.body.style.overflow = "hidden";

// Attendre la fin de la vidéo
video.addEventListener("ended", () => {
  videoIntro.style.display = "none"; // Masquer l'intro
  mainContent.forEach((section) => {
    section.style.display = "block"; // Afficher le contenu principal
  });
  document.body.style.overflow = "auto"; // Permettre le défilement
});

// Sécurité : Skip si la vidéo échoue
video.addEventListener("error", () => {
  videoIntro.style.display = "none";
  mainContent.forEach((section) => {
    section.style.display = "block";
  });
  document.body.style.overflow = "auto";
});

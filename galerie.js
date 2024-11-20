console.log("JavaScript chargé");

function initializeGallery() {
    console.log("Galerie initialisée");

    // Ajout de tabindex à toutes les figures
    const figures = document.querySelectorAll("figure");
    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute("tabindex", "0");
    }
}

function upDate(previewPic) {
    const imageDiv = document.getElementById("image");

    // Mise à jour de l'image de fond et du texte
    const imgSrc = previewPic.querySelector("img").src;
    const imgCaptionElement = previewPic.querySelector("figcaption");
    const imgCaption = imgCaptionElement ? imgCaptionElement.textContent : "Image sans légende";

    imageDiv.style.backgroundImage = `url('${imgSrc}')`;
    imageDiv.innerHTML = imgCaption;

    // Mise à jour de l'attribut ARIA
    imageDiv.setAttribute("aria-label", imgCaption);
}

function unDo() {
    const imageDiv = document.getElementById("image");

    // Réinitialisation de l'image et du texte
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerHTML = "Passez la souris ou utilisez le clavier pour afficher ici.";
    imageDiv.setAttribute("aria-label", "Aucune image sélectionnée");
}

// Initialisation de la galerie et ajout des écouteurs d'événements
document.addEventListener("DOMContentLoaded", () => {
    initializeGallery();

    const figures = document.querySelectorAll("figure");

    figures.forEach((figure) => {
        figure.addEventListener("mouseover", () => upDate(figure));
        figure.addEventListener("mouseout", unDo);
        figure.addEventListener("focus", () => upDate(figure));
        figure.addEventListener("blur", unDo);
    });
});

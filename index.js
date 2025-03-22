const testimonials = [
    {
        name: "Ana",
        photo: "./pics/ana.webp",
        text:  `<strong>Parfait !</strong> Je recomende Laurent. Il prends le temps d'expliquer correctement. Excellent prof. Merci beaucoup pour ta disponibilité. Ana`
    },
    {
        name: "Clara",
        photo: "./pics/clara.avif",
        text:  `Je suis étudiante en école d'ingénieur et Laurent m'a permis de faire beaucoup de progrès en statistiques et d'aborder plus sereinement les examens. Il est très disponible et impliqué, je le recommande vivement!`
    },    
    {
        name: "Gwénaëlle",
        photo: "./pics/gwen.avif",
        text: `<strong>Excellent !</strong> Dans le cadre d'une évolution professionnelle, Laurent m'a aidé à préparer l'épreuve de statistiques pour un concours administratif. Il m'a proposé des cours sur mesure adaptés à mon besoin et qui tenait compte de ma nécessaire remise à niveau sur des notions de base.
J'en suis très satisfaite.`
    },
    {
        name: "Isabelle",
        photo: "./pics/isabelle.avif",
        text:  `<strong>Excellent !</strong> Laurent est pédagogue, patient & à l'écoute des difficultés.
Grande disponibilité appréciable !`
    },
    {
        name: "Jean Christophe",
        photo: "./pics/jc.avif",
        text:  `<strong>Parfait !</strong> Laurent est a l'ecoute des besoins de ses etudiants, pragmatique il a la capacite de proposer une methodoogie ludique et serieuse pour un apprentissage rapide.`
    },
    {
        name: "Nour",
        photo: "./pics/nour.avif",
        text:  `Laurent est un Superprof, à l'écoute et très clair dans ses explications.

Je recommande fortement !`
    },
    {
        name: "Raphaëlle",
        photo: "./pics/raphaelle.avif",
        text: `Laurent est un très bon professeur. Fiable et disponible, j'ai pu compter sur lui pour m'aider en probabilités et biostatistiques durant mon cursus de Master. Je le recommande vivement!`
    },
    {
        name: "Rebekah",
        photo: "./pics/rebekah.avif",
        text: `<strong>Parfait !</strong> I had a hard time solving statistics problems by using R, but Laurent was very professional and patient he knows exactly what the difficulty I was facing and helped me with R coding. I received a very good grade on my R assignment! Thank you again Laurent! Highly recommended if you're struggling with R coding like I was before.`
    },
    {
        name: "Sandrine",
        photo: "./pics/sandrine.avif",
        text:  `<strong>Parfait !</strong> Laurent prends beaucoup de temps à ce que l'élève comprenne. Et c'est agréable d'avoir un professeur comme lui.`
    },
]


const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photo, text } = testimonials[idx];
    imgEl.src = photo;
    textEl.innerHTML = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) idx = 0;
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
}
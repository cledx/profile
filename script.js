const ninetiesBtn = document.getElementById("90s");
const normalBtn = document.getElementById("normal");
const fancyBtn = document.getElementById("fancy");
const pageContent = document.getElementById("page-content");

// const boundaries = Array.from(document.querySelectorAll(".boundary"));
// const boundaryCardPairs = new Map();
// boundaries.forEach((boundary) => {
//     boundaryCardPairs.set(boundary, boundary.nextElementSibling);
// })
// // console.log(boundaryCardPairs);

// const observer = new IntersectionObserver((cards) => {
//     cards.forEach((card) => {
//         console.log(card);
//         console.log(card.isIntersecting);
//         console.log(boundaryCardPairs.get(card.target));
//         !card.isIntersecting ? boundaryCardPairs.get(card.target).classList.add("hidden") : boundaryCardPairs.get(card.target).classList.remove("hidden");
//     });
// });

// document.querySelectorAll(".boundary").forEach((card) => {
//     observer.observe(card);
// });

const changeHTML = (event, type) => {
    event.preventDefault();
    document.querySelectorAll(".fa-regular").forEach(btn => btn.classList.remove("selected"));
    event.target.classList.add("selected");
    fetch(`${type}.html`)
        .then(response => response.text())
        .then(html => {
            console.log(html);
            pageContent.innerHTML = html;
        });
}

ninetiesBtn.addEventListener("click", event => changeHTML(event, "90s"));
normalBtn.addEventListener("click", event => changeHTML(event, "normal"));
fancyBtn.addEventListener("click", event => changeHTML(event, "fancy"));
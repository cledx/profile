
// const observer = new IntersectionObserver((cards) => {
//     cards.forEach(card => {
//         console.log(card);
//         !card.isIntersecting ? card.target.classList.add("hidden") : card.target.classList.remove("hidden");
//     });
// });
// document.querySelectorAll(".card-purple").forEach((card) => {
//     observer.observe(card);
// });

const boundaries = Array.from(document.querySelectorAll(".boundary"));
// console.log(boundaries);
const boundaryCardPairs = new Map();
boundaries.forEach((boundary) => {
    boundaryCardPairs.set(boundary, boundary.nextElementSibling);
})
// console.log(boundaryCardPairs);

const observer = new IntersectionObserver((cards) => {
    cards.forEach((card) => {
        // console.log(card);
        // console.log(card.isIntersecting);
        // console.log(boundaryCardPairs.get(card.target));
        !card.isIntersecting ? boundaryCardPairs.get(card.target).classList.add("hidden") : boundaryCardPairs.get(card.target).classList.remove("hidden");
    });
});

document.querySelectorAll(".boundary").forEach((card) => {
    observer.observe(card);
});
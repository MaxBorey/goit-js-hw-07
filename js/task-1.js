const quantityCategories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${quantityCategories.length}`);

quantityCategories.forEach(category => {
const title = category.querySelector("h2").textContent;
const itemsCount = category.querySelectorAll("ul li").length;

console.log(`Category: ${title}`);
console.log(`Elements: ${itemsCount}`);
});
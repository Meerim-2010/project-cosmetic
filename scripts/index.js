let links = document.querySelectorAll(".menu-item > a");

for (let i = 0; i < links.length; i++) {
  links[i].onclict = function (event) {
    event.preventDefault();
    document
      .querySelector(links[i].getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  }
}

const products = [
  {
    id:1,
    name:"Cosmetic products",
    descrtion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    Image:"./assets/image/products1.png",
    price:120,
  },

  {
    id:2,
    name:"Cosmetic products",
    descrtion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    image:"./assets/image/products2.png",
    price:120,
  }
];

const productsBox = document.querySelector(".products-box");
const productsMap = products.map((el) => {
  return `
  <div class="card1">
                <img src="${el.image}" alt="products1 png" loading="lazy">
                <h2>${el.name}</h2>
                <p>${el.descrtion}</p>
                <div class="card-actions1">
                <button>Buy Now</button>
                </div>
                <div class="card-action1">
                <button>Add To Cart</button>
                </div>
                <div class="card-span1">
                <span>${el.price}</span>
                </div>
              </div>
  `;
});

console.log(productsMap);
productsBox.innerHTML = productsMap.join("");
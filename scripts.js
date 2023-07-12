// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Iphone 7-PLus",
    thumb: "images/products/iphone-7-plus.png",
    preço:"R$:1000,00 - R$:2000,00",
  },
  {
    title: "Iphone 8-Plus",
    thumb: "images/products/iphone-8-plus.png",
    preço:"R$:1000,00 - R$:2000,00",
  },
  {
    title: "Iphone X",
    thumb: "images/products/iphone-x.png",
    preço:"R$:1000,00 - R$:2000,00",
  },
  {
    title: "Iphone XR",
    thumb: "images/products/iphone-xr.png",
    preço:"R$:1500,00 - R$:3000,00",
  },
  {
    title: "Iphone XS",
    thumb: "images/products/iphone-xs.png",
    preço:"R$:1000,00 - R$:2000,00",
  },
  {
    title: "Iphone 11",
    thumb: "images/products/iphone-11.png",
    preço:"R$:2000,00 - R$:3500,00",
  },
  {
    title: "Iphone 11 Pro",
    thumb: "images/products/iphone-11-pro.png",
    preço:"R$:3000,00 - R$:4000,00",
  },
  {
    title: "Iphone 11 Pro-max",
    thumb: "images/products/iphone-11-pro-max.png",
    preço:"R$:4000,00 - R$:5000,00",
  },
  {
    title: "Iphone 12",
    thumb: "images/products/iphone-12.png",
    preço:"R$:4000,00 - R$:6000,00",
  },
  {
    title: "Iphone 12 Mini",
    thumb: "images/products/iphone-12-mini.png",
    preço:"R$:4000,00 - R$:5000,00",
  },
  {
    title: "Iphone 12 Pro-max",
    thumb: "images/products/iphone-12-pro-max.png",
    preço:"R$:4000,00 - R$:5000,00",
  },
  {
    title: "Iphone 13",
    thumb: "images/products/iphone-13.png",
    preço:"R$:4000,00 - R$:5000,00",
  },
  {
    title: "Iphone 13 Mini",
    thumb: "images/products/iphone-13-mini.png",
    preço:"R$:4500,00 - R$:5000,00",
  },
  {
    title: "Iphone 13 Pro",
    thumb: "images/products/iphone-13-pro.png",
    preço:"R$:4500 - R$:6000,00",
  },
  {
    title: "Iphone 13-Pro-Max",
    thumb: "images/products/iphone-13-pro-max.png",
    preço:"R$:5500,00 - R$:6500,00",
  },
  {
    title: "Iphone 14",
    thumb: "images/products/iphone-14.png",
    preço:"R$:6800,00 - R$:7500,00",
  },
  {
    title: "Iphone 14-Pro",
    thumb: "images/products/iphone-14-pro.png",
    preço:"R$:7500,00 - R$:8000,00",
  },
  {
    title: "Iphone 14-Pro-Max",
    thumb: "images/products/iphone-14-pro-max.png",
    preço:"R$:8500,00 - R$:10000,00",
  },
  
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.imagens);
  cardClone.querySelector(".price").innerHTML = video.preço;
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "img"
    ).src = `images/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});




const productsData = [
    {
        name: "Batiki Dress",
        price: "Retail: TZS 35,000<br><span class='wholesale'>Wholesale (≥3): TZS 32,000</span>",
        images: [
            "images/batiki.jpg",
            "images/batiki-2.jpg",
            "images/batiki-3.jpg",
            "images/batiki-4.jpg"
        ]
    },
    {
        name: "Casual Dress",
        price: "Retail: TZS 30,000<br><span class='wholesale'>Wholesale (≥3): TZS 27,000</span>",
        images: [
            "images/casual.jpg",
            "images/casual-2.jpg",
            "images/casual-3.jpg",
            "images/casual-4.jpg"
        ]
    },
    {
        name: "Two Piece Outfit",
        price: "Retail: TZS 38,000<br><span class='wholesale'>Wholesale (≥3): TZS 35,000</span>",
        images: [
            "images/two-piece.jpg",
            "images/two-piece-2.jpg",
            "images/two-piece-3.jpg"
        ]
    },
    {
        name: "Rica Dress",
        price: "Retail: TZS 40,000<br><span class='wholesale'>Wholesale (≥3): TZS 37,000</span>",
        images: [
            "images/ricadress.jpg",
            "images/ricadress-2.jpg",
            "images/ricadress-3.jpg"
        ]
    }
];

const productsContainer = document.getElementById("products");
const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");

let slideInterval;
let currentImages = [];
let currentIndex = 0;

/* RENDER PRODUCTS */
productsData.forEach(product => {
    const card = document.createElement("div");
    card.className = "product";
    card.dataset.name = product.name;

    card.innerHTML = `
        <img src="${product.images[0]}" loading="lazy">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <button class="btn">Order Now</button>
    `;

    card.querySelector("img").onclick = () => openViewer(product.images);
    card.querySelector("button").onclick = () => orderNow(product.name, product.images[0]);

    productsContainer.appendChild(card);
});

/* FULLSCREEN AUTOSLIDE */
function openViewer(images) {
    clearInterval(slideInterval);

    currentImages = images;
    currentIndex = 0;

    viewerImage.src = currentImages[0];
    viewer.classList.remove("hidden");

    slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % currentImages.length;
        viewerImage.src = currentImages[currentIndex];
    }, 2000);
}

function closeViewer() {
    clearInterval(slideInterval);
    viewer.classList.add("hidden");
}

/* WHATSAPP ORDER */
function orderNow(name, image) {
    const msg = `NEW ORDER 🛍️%0AProduct: ${name}%0AImage: ${image}`;
    window.open(`https://wa.me/255748863304?text=${msg}`, "_blank");
}

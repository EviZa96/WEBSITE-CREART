let cardData = [
    {
        id: 1,
        imgFile1: 'images/products/Majestic Stag in the Wild 1.JPG',
        imgFile2: 'images/products/Majestic Stag in the Wild 2.JPG',
        imgFile3: 'images/products/Majestic Stag in the Wild 3.JPG',
        imgFile4: 'images/products/Majestic Stag in the Wild 4.JPG',
        imgFile5: 'images/products/Majestic Stag in the Wild 5.JPG',
        heading: "Original Deer Oil Painting 'Majestic Stag In The Wild'| 30X25 on Canvas board",
        body: "Capture the untamed beauty of nature with this striking hand-painted depiction of a stag standing proudly amidst lush greenery. The vibrant green background and bold brushstrokes bring a sense of vitality and movement to the piece, while the stag's majestic antlers command attention. Perfect for nature enthusiasts or anyone looking to add a touch of wilderness to their space, this original artwork conveys a serene and powerful connection to the outdoors. Signed by the artist, this one-of-a-kind painting makes an excellent addition to your art collection or a thoughtful gift for animal lovers.",
        price: 70,
        category: 'animals',
        url:''


    },
    {
        id: 2,
        imgFile1: 'images/products/The Spring Brook 1.JPG',
        imgFile2: 'images/products/The Spring Brook 2.JPG',
        imgFile3: 'images/products/The Spring Brook 3.JPG',
        imgFile4: 'images/products/The Spring Brook 4.JPG',
        imgFile5: 'images/products/The Spring Brook 5.JPG',
        heading: '"The Spring Brook" Original Oil Painting | 20x20cm On Canvas',
        body: 'Bring the beauty of nature indoors with this stunning original painting of a serene river landscape. Capturing a tranquil stream winding through lush greenery, this piece showcases vibrant shades of green, yellow, and blue in a lively impressionistic style. Textured brushstrokes create a sense of movement in the water and depth in the foliage, evoking the peaceful ambiance of a walk by the riverside.',
        price: 50,
        category: 'landscapes'

    },
    {
        id: 3,
        imgFile1: 'images/products/Golden Hour Waves 1.jpg',
        imgFile2: 'images/products/Golden Hour Waves 2.JPG',
        imgFile3: 'images/products/Golden Hour Waves 3.JPG',
        imgFile4: 'images/products/Golden Hour Waves 4.JPG',
        imgFile5: 'images/products/Golden Hour Waves 5.JPG',
        heading: '"Golden Hour Waves" Original Acrylic Painting | 20x20cm On Canvas ',
        body: 'Bring the serene beauty of a beach sunset into your space with this original hand-painted canvas. This piece captures a stunning seaside scene bathed in warm golden light, with gentle waves rolling onto the shore and an expansive sunset casting vibrant orange and yellow hues across the sky. The delicate texture of the water and sandy shore adds depth, creating an immersive experience that brings the peaceful, rejuvenating atmosphere of the ocean to any room. Perfect for beach lovers and art enthusiasts alike, this unique artwork makes a calming yet captivating addition to your decor.',
        price: 50,
        category: 'seascapes',
        url:'https://buy.stripe.com/bIY5km2Y91bpaxG5kk'

    },
    {
        id: 4,
        imgFile1: 'images/products/Koules boat 1.JPG',
        imgFile2: 'images/products/Koules boat 2.JPG',
        imgFile3: 'images/products/Koules boat 3.JPG',
        imgFile4: 'images/products/Koules boat 4.JPG',
        imgFile5: 'images/products/Koules boat 5.JPG',
        heading:"'Traditional boat in Koule's port Original Oil Painting| 20x20cm On Canvas board",
        body: "This captivating acrylic painting depicts a classic Greek fishing boat gently gliding on the shimmering turquoise waters, set against the backdrop of a historic harbor wall. The intricate details of the aged stone fortress, paired with the vibrant blues of the boat and sea, evoke the charm of Mediterranean coastal life.The lively brushstrokes capture the motion of the water and the timeless beauty of the scene, making it a perfect piece for lovers of nautical themes and travel-inspired art. Hand-painted on durable canvas, this artwork is an original creation, signed by the artist, and ready to enhance any space with its sunny, maritime ambiance.",
        price: 60,
        category: 'boats'

    },
    {
        id: 5,
        imgFile1: 'images/products/tranquilwaters 1.JPG',
        imgFile2: 'images/products/tranquilwaters 2.JPG',
        imgFile3: 'images/products/tranquilwaters 3.JPG',
        imgFile4: 'images/products/tranquilwaters 4.JPG',
        imgFile5: 'images/products/tranquilwaters 5.JPG',
        heading:"'Tranquil Waters: Anchored by the Shore'| 30x20cm On Canvas board",
        body: "Escape to a serene coastal getaway with this vibrant hand-painted artwork. Featuring a small boat gently anchored in calm turquoise waters, the painting evokes a sense of peace and simplicity. The background showcases a lush shoreline under a clear blue sky, completing the idyllic scene. This piece is perfect for enhancing any space with its calming and summery vibe. Signed by the artist, it’s an original work that brings the beauty of the seaside into your home.",
        price: 55,
        category: 'boats'
    },

];

// const cardContainer = document.querySelector('.card-container');

// function fetchJSONData() {
//     fetch('./products.json')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();  
//         })
//         .then(cardData => console.log(cardData))  
//         .catch(error => console.error('Failed to fetch data:', error)); 

// }


const createCard = () => {


    // fetchJSONData();
    let cardContainer = document.querySelector('.card-parent');
    cardContainer.innerHTML = ''; // Clear the grid first

    cardData.forEach((data) => {
        //create product card
        let card = document.createElement('div');
        // card.classList.add('card-body');
        // card.classList.add('col-md-4', 'mb-4');
        card.setAttribute('data-product-id', data.id);

        // Add content inside the product card
        let content = `<div class="col">
                        <div class="card">
                            <img class="card-img-top img-fit " style="height:30rem;" id="productImg" src="${data.imgFile1}" alt="Card image cap" onmouseover="this.src='${data.imgFile2}'" onmouseout="this.src='${data.imgFile1}';">
                                <div class="card-body>
                                    <div class=" product-details" id="details-${data.id}">
                                        <h5 class="card-title mb-3 fw-bold  ">${data.heading}</h5>
                                        
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="product-price fw-bold">$${data.price}</span>
                                            <button class="view-details-btn text-white px-4 py-2 rounded-pill" data-product-id="${data.id}"">View Details</button>
                                        </div>
                                   
                            
                                    </div>     
                                </div>
                        </div> 
                    </div>     
                `;

        // onmouseover="this.src='${data.imgFile2}';"

        cardContainer.innerHTML += content;
        // Append product card to container
        //cardContainer.appendChild(card);

        // <p class="card-text text-muted ">${data.body}</p>

    });



    document.querySelectorAll('.view-details-btn').forEach((button) => { // Here i used View Details button class instead of card class
        button.addEventListener('click', function () {
            let productId = this.getAttribute('data-product-id');
            window.location.href = `ProductDetails1.html?id=${productId}`;
        });
    });

    // return card;  

}

// Call the function to generate products on page load
createCard(cardData);

// -----------display products when click the category--------------------------------------------------

const cardContainer = document.querySelector(".card-container");
const lists = document.querySelectorAll(".list");


// Function to display products as cards
function displayCards(filteredProducts) {

    cardContainer.innerHTML = ''; // Clear previous cards



    if (filteredProducts.length === 0) {
        cardContainer.innerHTML = "<p>No products available in this category.</p>";
        return;
    }

    
     console.log("products for the selected category"+products);

    filteredProducts.forEach(item => {
        const card = document.createElement("div");
        // card.classList.add("card");
        card.innerHTML = `<div class="col">
                        <div class="card">
                            <img class="card-img-top img-fit " style="height:30rem;" id="productImg" src="${item.imgFile1}" alt="Card image cap" onmouseover="this.src='${item.imgFile2}'" onmouseout="this.src='${item.imgFile1}';">
                                <div class="card-body>
                                    <div class=" product-details" id="details-${item.id}">
                                        <h5 class="card-title mb-3 fw-bold  ">${item.heading}</h5>
                                        
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="product-price fw-bold">$${item.price}</span>
                                            <button class="view-details-btn text-white px-4 py-2 rounded-pill" data-product-id="${item.id}"">View Details</button>
                                        </div>
                                   
                            
                                    </div>     
                                </div>
                                </div>
                                </div>
                </div>`;

        cardContainer.appendChild(card);
    });
}


// Add event listeners to lists
lists.forEach(listcategory => {
    listcategory.addEventListener("click", function () {
        const category =this.getAttribute('data-category');
        console.log("clicked category"+category);
        const filteredProducts = category === "all"
            ? cardData
            : cardData.filter(product => product.category === category);
        displayCards(filteredProducts);
    });
});


// --------------display products when search product ------------------------///


const btnsearch = document.querySelector(".btn_search");

// Search functionality
btnsearch.addEventListener("click", () => {
    const searchText = btnsearch.value.toLowerCase();
    console.log(searchText);
    const filteredProducts = cardData.filter(product =>
        product.heading.toLowerCase().includes(searchText)
    );
    displayCards(filteredProducts);
});

















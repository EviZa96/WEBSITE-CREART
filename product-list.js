let cardData = [
    {
        id: 1,
        imgFile1: 'images/products/Majestic Stag in the Wild 1.JPG',
        imgFile2: 'images/products/Majestic Stag in the Wild 2.JPG',
        imgFile3: 'images/products/Majestic Stag in the Wild 3.JPG',
        imgFile4: 'images/products/Majestic Stag in the Wild 4.JPG',
        imgFile5: 'images/products/Majestic Stag in the Wild 5.JPG',
        heading: 'Majestic Stag in the Wild',
        body: 'this is card body',
        price: 150,
        category: 'all'


    },
    {
        id: 2,
        imgFile1: 'images/products/The Spring Brook 1.JPG',
        imgFile2: 'images/products/The Spring Brook 2.JPG',
        imgFile3: 'images/products/The Spring Brook 3.JPG',
        imgFile4: 'images/products/The Spring Brook 4.JPG',
        imgFile5: 'images/products/The Spring Brook 5.JPG',
        heading: 'The Spring Brook',
        body: 'this is card body',
        price: 200,
        category: 'landscapes'

    },
    {
        id: 3,
        imgFile1: 'images/products/Golden Hour Waves 1.jpg',
        imgFile2: 'images/products/Golden Hour Waves 2.JPG',
        imgFile3: 'images/products/Golden Hour Waves 3.JPG',
        imgFile4: 'images/products/Golden Hour Waves 4.JPG',
        imgFile5: 'images/products/Golden Hour Waves 5.JPG',
        heading: 'Golden Hour Waves',
        body: 'this is card body',
        price: 400,
        category: 'seascapes'

    },
    {
        id: 4,
        imgFile1: 'images/products/Koules boat 1.JPG',
        imgFile2: 'images/products/Koules boat 2.JPG',
        imgFile3: 'images/products/Koules boat 3.JPG',
        imgFile4: 'images/products/Koules boat 4.JPG',
        imgFile5: 'images/products/Koules boat 5.JPG',
        heading: 'Koules boat',
        body: 'this is card body',
        price: 300,
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

        console.log("--------------------mpike");

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
const categoryList = document.getElementById("category-list");
const cardContainer = document.querySelector(".card-container");
const lists = document.querySelectorAll(".list");

// Event delegation for list items
categoryList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const category = event.target.dataset.category;
        displayCards(category);
    }
});


// Function to display products as cards
function displayCards(filteredProducts) {

    cardContainer.innerHTML = ''; // Clear previous cards



    if (filteredProducts.length === 0) {
        cardContainer.innerHTML = "<p>No products available in this category.</p>";
        return;
    }


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
        const category = this.getAttribute("data-category");
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


















const createCard = (cardData) => {


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
                                            <span class="product-price fw-bold">${data.price} €</span>
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

// Fetch JSON data and call the function to generate products on page load
fetch('./products.json')
    .then(response => response.json())
    .then(cardData => {
        createCard(cardData);
    })
    .catch(error => console.error('Error loading JSON:', error));


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


    console.log("products for the selected category" + products);

    filteredProducts.forEach(item => {
        const card = document.createElement("div");
        // card.classList.add("card");
        card.innerHTML = `
                        <div class="col">
                        <div class="card">
                            <img class="card-img-top img-fit " style="height:30rem;" id="productImg" src="${item.imgFile1}" alt="Card image cap" onmouseover="this.src='${item.imgFile2}'" onmouseout="this.src='${item.imgFile1}';">
                                <div class="card-body>
                                    <div class=" product-details" id="details-${item.id}">
                                        <h5 class="card-title mb-3 fw-bold  ">${item.heading}</h5>
                                        
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="product-price fw-bold">${item.price} € </span>
                                            <button class="view-details-btn text-white px-4 py-2 rounded-pill" data-product-id="${item.id}">View Details</button>
                                        </div>
                                   
                            
                                    </div>     
                                </div>
                                </div>
                                </div>
                                
                </div>`;

        cardContainer.appendChild(card);
    });

    document.querySelectorAll('.view-details-btn').forEach((button) => { // Here i used View Details button class instead of card class
        button.addEventListener('click', function () {
            let productId = this.getAttribute('data-product-id');
            window.location.href = `ProductDetails1.html?id=${productId}`;
        });
    });
}

let cardData = [];

// Fetch data from an external JSON file
fetch('./products.json')
    .then(response => response.json())
    .then(data => {
        cardData = data; // Assign fetched JSON data to cardData


        // Add event listeners to lists
        lists.forEach(listcategory => {
            listcategory.addEventListener("click", function () {
                const category = this.getAttribute('data-category');
                console.log("clicked category" + category);
                const filteredProducts = category === "all"
                    ? cardData
                    : cardData.filter(product => product.category === category);
                displayCards(filteredProducts);
            });
        });

    })
    .catch(error => console.error('Error loading JSON data:', error));


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

















let cardData = [
    {
        id: 1,
        imgFile: 'images/products/marievi5.jpg',
        heading: 'Marievi the Influencer',
        body: 'this is card body',
        price: 150,


    },
    {
        id: 2,
        imgFile: 'images/products/rock1.jpg',
        heading: 'card 2',
        body: 'this is card body',
        price: 200,

    },
    {
        id: 3,
        imgFile: 'images/products/marievi5.jpg',
        heading: 'card 3',
        body: 'this is card body',
        price: 400,

    },
    {
        id: 4,
        imgFile: 'images/products/marievi5.jpg',
        heading: 'card 4',
        body: 'this is card body',
        price: 300,

    },
];

// Function to get query parameter by name (to extract product ID)
function getQueryParam(param) {
    // const urlParams = new URLSearchParams(window.location.search);
    // return urlParams.get(param);

    //Get the full URL
    let url = window.location.href;

    // Create a URL object
    let urlObj = new URL(url);

    // Get the query parameter by name
    return urlObj.searchParams.get(param);
}

function displayProductDetails() {
    // Get the product ID from the URL
    let productId = getQueryParam('id');
    let productDetailsDiv = document.getElementById('product-details');
    console.log(`Redirecting to ProductDetails.html?id=${productId}`);  // Check if productId is correct

    // Find the product by ID
    let product = cardData.find(p => p.id == productId);

    // Display product details if the product is found
    if (product) {
        let productDetails = document.getElementById('product-details');

        let content = `<div class="card-container  py-5">
        <div class="row ">
           <div class="col">
                   
               <div class="card-body product-card" data-product-id="${data.id}">
                   <a href="ProductDetails.html"  title=""><img class="card-img-top " id="productImg" src="${data.imgFile}" alt="Card image cap"></a>

                       <div class=" product-details" id="details-${data.id}">
                           <h5 class="card-title mb-3 fw-bold ">${data.heading}</h5>
                           <p class="card-text text-muted mb-4">${data.body}</p>
                           <div class="d-flex justify-content-between align-items-center">
                           <span class="product-price">Price:${data.price}</span>
                       </div>
                       <button class="btn btn-custom text-white px-4 py-2 rounded-pill" data-product-id="${data.id}"btn btn-primary">Add to Cart</button>
               </div>
               </div>
           </div>
       </div>     
   </div>`;
        productDetails.innerHTML += content;
    } else {
        // If product not found, show an error message
        document.getElementById('product-details').innerHTML = '<p>Product not found!</p>';
    }


}

// Call the function to display product details on page load
displayProductDetails();





// $(function () {
//     $("#nav-placeholder").load("nav.html");
// });

// var mainImg = document.getElementById('MainImg');
// var smallimg = document.getElementsByClassName('small-img');

// smallimg[0].onclick = function () {
//     MainImg.src = smallimg[0].src;
// }
// smallimg[1].onclick = function () {
//     MainImg.src = smallimg[1].src;
// }
// smallimg[2].onclick = function () {
//     MainImg.src = smallimg[2].src;
// }
// smallimg[3].onclick = function () {
//     MainImg.src = smallimg[3].src;
// }


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

        const content = `
         <div class="row mt-5">
            <div class="col-lg-5 col-md-12 col-12">
                <img class="img-fluid w-100 pb-1" id="MainImg" src="images/products/marievi2.jpg" alt="">
                <div class="small-img-group">
                    <div class="small-img-col">
                        <img src="images/products/marievi2.jpg" width="100%" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="images/products/marievi3.jpg" width="100%" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="images/products/marievi4.jpg" width="100%" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="images/products/marievi5.jpg" width="100%" class="small-img" alt="">
                    </div>




                </div>

            </div>
            <div class="col-lg-6 col-md-12 col-12">
                <h1 class="py-4">${product.heading}</h1>
                <h4>${product.price}</h4>
                <h3>Original oil painting</h3>
                <h3>Oil paint on canvas</h3>
                <h4 class="mt-5 mb-5">Product Details</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vel eius ratione? Harum commodi
                    itaque
                    fuga. Reprehenderit vero nobis non assumenda ut, optio officia explicabo ullam, libero accusamus
                    saepe
                    eum!</p>
                <button href="" class="buy-btn">Add to Cart</button>
            </div>
        </div>
    `;
        productDetails.innerHTML += content;
    } else {
        // If product not found, show an error message
        document.getElementById('product-details').innerHTML = '<p>Product not found!</p>';
    }


}

// Call the function to display product details on page load
displayProductDetails();





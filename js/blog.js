
/// Just to show how to pull items from wordpress ///



const url = "https://piyushsharma.one/wp-json/wc/store/products/";
const productContainer = document.querySelector(".products");




async function getProducts() {
    try {
        // Fetch posts
        const response = await fetch(url);
        const getResults = await response.json();
        creatHTML(getResults);
    }
    catch (error) {
        console.log(error);
    }

}

getProducts();

function creatHTML(products) {
    products.forEach(function (product) {
        console.log(product);
        productContainer.innerHTML += `<div class="post-box-blog">
        <a class="post-title"> ${product.name} </a >
    <img class="post-img" src="${product.images[0].src}" alt="${product.name}">
    </div>`;
    })
}


// Task 2:  Fetch Products with .then()
function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(products => {
            products.forEach(product => console.log(product.fields.name)); //Logs Product Name
        })
        .catch(error => console.error("Fetch error:", error)); // Catches Errors
}
fetchProductsThen();
// Task 3: Fetch Products with async/await
async function fetchProductsAsync() {
    try {
        const response = await fetch("https://www.course-api.com/javascript-store-products");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}
function displayProducts(products) {
    const container = document.getElementById("products-container");// Display Products
    if (!container) return;

    container.innerHTML = products
        .map(product => `<p>${product.fields.name}</p>`)
        .join("");
}
function handleError(error) {
    console.error("Fetch error:", error); // Handles Error
}
fetchProductsAsync();
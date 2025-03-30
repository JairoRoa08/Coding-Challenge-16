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
// Task 4: Display the Products
function displayProducts(products) {
    const container = document.getElementById("products-container");
    if (!container) return;

    container.innerHTML = ""; // Clear existing content

    products.slice(0, 5).forEach(product => {
        const { name, price, image } = product.fields;
        const productElement = document.createElement("div"); // Create product element
        productElement.classList.add("product");
        const imgElement = document.createElement("img"); // Creating image element
        imgElement.src = image[0].url;
        imgElement.alt = name;
        const nameElement = document.createElement("h3"); // Creating name element
        nameElement.textContent = name;
        const priceElement = document.createElement("p"); // Creating price element
        priceElement.textContent = `$${(price / 100).toFixed(2)}`;
        productElement.appendChild(imgElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);
        container.appendChild(productElement);
    });
}

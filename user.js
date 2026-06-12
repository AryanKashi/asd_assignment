
let products = [
    { id: 1, name: 'Laptop', price: 65000 },
    { id: 2, name: 'Smartphone', price: 25000 },
    { id: 3, name: 'Pen', price: 10 },
    { id: 4, name: 'Notebook', price: 80 },
    { id: 5, name: 'Wireless Mouse', price: 1200 },
    { id: 6, name: 'Mechanical Keyboard', price: 5500 },
    { id: 7, name: 'Monitor', price: 4500 }
];


const getQuality = (price) => price >= 5000 ? 'Good Quality' : 'Low Quality';

// 1.
function searchByName(name) {
    return products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
}

// 2. 
function searchByPrice(price) {
    return products.filter(p => p.price === price);
}

// 3.
function getProductsAbove5000() {
    return products.filter(p => p.price > 5000);
}

// 4. 
function getProductsBelow5000() {
    return products.filter(p => p.price < 5000);
}

// 5. 
function countTotalProducts() {
    return products.length;
}

// 6. 
function getMostExpensive() {
    if (products.length === 0) return null;
    return products.reduce((max, p) => p.price > max.price ? p : max, products[0]);
}

// 7. Find the cheapest product
function getCheapest() {
    if (products.length === 0) return null;
    return products.reduce((min, p) => p.price < min.price ? p : min, products[0]);
}

// 8. 
function addProduct(newProduct) {
    products.push(newProduct);
    return products;
}

// 9.
function deleteByName(name) {
    const initialLength = products.length;
    products = products.filter(p => p.name.toLowerCase() !== name.toLowerCase());
    return products.length < initialLength; // Returns true if deleted
}

// 10.
function updatePriceByName(name, newPrice) {
    const product = products.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (product) {
        product.price = newPrice;
        return product;
    }
    return null;
}

// 11. 
function getProductNames() {
    return products.map(p => p.name);
}

// 12. 
function getProductPrices() {
    return products.map(p => p.price);
}

// 13.
function checkProductExists(name) {
    return products.some(p => p.name.toLowerCase() === name.toLowerCase());
}

// 14. 
function groupByQuality() {
    return {
        goodQuality: products.filter(p => getQuality(p.price) === 'Good Quality'),
        lowQuality: products.filter(p => getQuality(p.price) === 'Low Quality')
    };
}

// 15.
function searchBetweenRange(min, max) {
    return products.filter(p => p.price >= min && p.price <= max);
}

// 16. 
function sortByPriceAsc() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 17. 
function sortByPriceDesc() {
    return [...products].sort((a, b) => b.price - a.price);
}

// 18. 
function getProductsWithGst() {
    return products.map(p => ({
        ...p,
        priceWithGst: parseFloat((p.price * 1.18).toFixed(2))
    }));
}

// 19. 
function getTotalInventoryValue() {
    return products.reduce((sum, p) => sum + p.price, 0);
}

// 20.
function generateProductReport() {
    return products.map(p => ({
        name: p.name,
        price: p.price,
        quality: getQuality(p.price)
    }));
}

module.exports = {
    searchByName,
    searchByPrice,
    getProductsAbove5000,
    getProductsBelow5000,
    countTotalProducts,
    getMostExpensive,
    getCheapest,
    addProduct,
    deleteByName,
    updatePriceByName,
    getProductNames,
    getProductPrices,
    checkProductExists,
    groupByQuality,
    searchBetweenRange,
    sortByPriceAsc,
    sortByPriceDesc,
    getProductsWithGst,
    getTotalInventoryValue,
    generateProductReport
};
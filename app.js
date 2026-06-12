
const pm = require('./user');

console.log('=== PRODUCT MANAGEMENT SYSTEM TESTS ===\n');

// 1. 
console.log('1. Search "pen":', pm.searchByName('pen'));

// 2. 
console.log('\n2. Search price 25000:', pm.searchByPrice(25000));

// 3. 
console.log('\n3. Products above ₹5000:', pm.getProductsAbove5000());

// 4.
console.log('\n4. Products below ₹5000:', pm.getProductsBelow5000());

// 5.
console.log('\n5. Total Product Count:', pm.countTotalProducts());

// 6.
console.log('\n6. Most Expensive Product:', pm.getMostExpensive());

// 7. 
console.log('\n7. Cheapest Product:', pm.getCheapest());

// 8
console.log('\n8. Adding "Wireless Headphones"...');
pm.addProduct({ id: 8, name: 'Wireless Headphones', price: 4800 });
console.log('New Total Count:', pm.countTotalProducts());

// 9.
console.log('\n9. Deleting "Pen"... Success:', pm.deleteByName('Pen'));

// 10.
console.log('\n10. Updating "Monitor" price to 4999:');
console.log(pm.updatePriceByName('Monitor', 4999));

// 11
console.log('\n11. Product Names List:', pm.getProductNames());

// 12.
console.log('\n12. Product Prices List:', pm.getProductPrices());

// 13.
console.log('\n13. Does "Laptop" exist?:', pm.checkProductExists('Laptop'));
console.log('    Does "Eraser" exist?:', pm.checkProductExists('Eraser'));

// 14.
console.log('\n14. Categorized by Quality:', pm.groupByQuality());

// 15. 
console.log('\n15. Products between ₹5000 and ₹50000:', pm.searchBetweenRange(5000, 50000));

// 16.
console.log('\n16. Sorted by Price (Ascending):', pm.sortByPriceAsc());

// 17.
console.log('\n17. Sorted by Price (Descending):', pm.sortByPriceDesc());

// 18.
console.log('\n18. Products with 18% GST:', pm.getProductsWithGst());

// 19.
console.log('\n19. Total Inventory Valuation: ₹' + pm.getTotalInventoryValue());

// 20.
console.log('\n20. --- FINAL PRODUCT REPORT ---');
console.table(pm.generateProductReport());
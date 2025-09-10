// ["Shoes", "Shirts", "Pants", "Socks"]
let inventory = [{ 
    name: "Super Shoes", 
    sku: "SKU-001",
    price: 45,
    stock: 230
},{
    name: "Super Shirts",
    sku: "SKU-002",
    price: 25,
    stock: 300
}, { 
    name: "Super Pants",
    sku: "SKU-003",
    price: 60,
    stock: 150
}, {
    name: "Super Socks",
    sku: "SKU-004",
    price: 15, 
    stock: 120
}]; 

// inventory.forEach(obj => console.log(
//`SKU: ${obj.sku}`, 
//`| Name: ${obj.name}`,
//`| Price: ${obj.price}`,
//`| Stock: ${obj.stock}`));

inventory.push({name: "Super Jackets",
    sku: "SKU-005",
    price: 70, 
    stock: 340})

inventory.forEach(obj => console.log(
    `SKU: ${obj.sku}`, 
    `| Name: ${obj.name}`,
    `| Price: ${obj.price}`,
    `| Stock: ${obj.stock}`
));

my_pop = inventory.pop()
console.log(my_pop);

inventory[0].price = 50
inventory[2].stock = 300

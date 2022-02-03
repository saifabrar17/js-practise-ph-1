const products = [
  { name: 'laptop', price: 5000, quantity: 3 },
  { name: 'shirt', price: 5000, quantity: 1  },
  { name: 'bodySpray', price: 5000, quantity: 2  },
  { name: 'watch', price: 5000, quantity: 1 }
];

let totalPrice = 0;

for (const product of products){
  totalPrice +=  product.price * product.quantity;
//error khailam eikhane. totalprice er sathe for e declare kora const var
//er por . diye object k call korte hobe 
};
console.log(totalPrice);
document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { name: 'Product 1', price: '$10', image: 'https://img.freepik.com/free-photo/close-up-hands-holding-shopping-bags_23-2148721174.jpg' },
    { name: 'Product 2', price: '$20', image: 'https://img.freepik.com/free-photo/close-up-hands-holding-shopping-bags_23-2148721174.jpg' },
    { name: 'Product 3', price: '$30', image: 'https://img.freepik.com/free-photo/close-up-hands-holding-shopping-bags_23-2148721174.jpg' },
    { name: 'Product 4', price: '$40', image: 'https://img.freepik.com/free-photo/close-up-hands-holding-shopping-bags_23-2148721174.jpg' },
    { name: 'Product 5', price: '$50', image: 'https://img.freepik.com/free-photo/close-up-hands-holding-shopping-bags_23-2148721174.jpg' },
  ];

  const productList = document.querySelector('.product-list');

  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: ${product.price}</p>
    `;
    productList.appendChild(productItem);
  });
});

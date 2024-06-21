document.addEventListener('DOMContentLoaded', function() {
  const productListDiv = document.getElementById('product-list');

  fetch('http://45.66.230.112:5005/products')
    .then(response => response.json())
    .then(data => {
      // Iterate over each product in the JSON response
      Object.keys(data).forEach(key => {
        const product = data[key];
        // Create a card div for each product
        const card = document.createElement('div');
        card.classList.add('card', 'mb-4');

        card.innerHTML = `
          <div class="card-img-top mb-2 image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <button class="btn btn-primary w-100" data-sellpass-product-path="${key}" data-sellpass-domain="robberyy.sellpass.io">
              Purchase | $${product.price}
            </button>
          </div>
        `;

        productListDiv.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching products:', error);
      productListDiv.innerHTML = '<p class="text-danger">Error fetching products. Please try again later.</p>';
    });
});

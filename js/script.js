document.addEventListener('DOMContentLoaded', function () {
  const productListElement = document.getElementById('product-list');

  fetch('http://45.66.230.112:5005/products')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Assuming data is in the format { product_1: {...}, product_2: {...}, ... }
      Object.values(data).forEach(product => {
        const card = createProductCard(product);
        productListElement.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching products:', error);
      productListElement.innerHTML = '<p>Error fetching products. Please try again later.</p>';
    });

  function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-img-top', 'mb-2', 'image');
    const img = document.createElement('img');
    img.src = product.image; // Assuming product.image contains the URL of the image
    img.alt = 'Product Image';
    cardImage.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = product.name; // Assuming product.name is the name of the product
    cardBody.appendChild(cardTitle);

    const purchaseButton = document.createElement('button');
    purchaseButton.classList.add('btn', 'btn-primary', 'w-100');
    purchaseButton.textContent = `Purchase | $${product.price.toFixed(2)}`; // Assuming product.price is the price of the product
    purchaseButton.setAttribute('data-sellpass-product-path', product.name); // Assuming product.name is used for product path
    purchaseButton.setAttribute('data-sellpass-domain', 'robberyy.sellpass.io');
    cardBody.appendChild(purchaseButton);

    card.appendChild(cardImage);
    card.appendChild(cardBody);

    return card;
  }
});

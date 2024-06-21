document.addEventListener('DOMContentLoaded', function() {
  const productList = document.getElementById('product-list');

  // Fetch data from API
  fetch('http://45.66.230.112:5005/products')
    .then(response => response.json())
    .then(data => {
      // Iterate over each product in the response
      Object.keys(data).forEach(key => {
        const product = data[key];
        const { image, name, price } = product;

        // Create HTML elements for product card
        const card = document.createElement('div');
        card.classList.add('card');

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('card-img-top', 'mb-2', 'image');
        const img = document.createElement('img');
        img.setAttribute('src', image);
        img.setAttribute('alt', 'product image');
        imageDiv.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = name;
        cardBody.appendChild(title);

        const button = document.createElement('button');
        button.classList.add('btn', 'btn-primary', 'w-100');
        button.setAttribute('data-sellpass-product-path', name.replace(/\s+/g, '-'));
        button.setAttribute('data-sellpass-domain', 'robberyy.sellpass.io');
        button.textContent = `Purchase | $${price}`;
        cardBody.appendChild(button);

        // Append image and body to card
        card.appendChild(imageDiv);
        card.appendChild(cardBody);

        // Append card to product list
        productList.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
});

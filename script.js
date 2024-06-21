document.addEventListener('DOMContentLoaded', function() {
    const productListElement = document.getElementById('product-list');

    // Fetch products.json from your API
    fetch('http://45.66.230.112:5005/products')
        .then(response => response.json())
        .then(products => {
            // Loop through each product and create HTML
            products.forEach(product => {
                // Create card element
                const card = document.createElement('div');
                card.classList.add('card', 'mb-3');

                // Card image
                const cardImage = document.createElement('div');
                cardImage.classList.add('card-img-top', 'mb-2', 'image');
                const image = document.createElement('img');
                image.setAttribute('alt', 'product image');
                image.setAttribute('data-src', product.image);
                image.setAttribute('src', product.image); // Assuming image URL is provided in products.json
                cardImage.appendChild(image);
                card.appendChild(cardImage);

                // Card body
                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');
                const title = document.createElement('h5');
                title.classList.add('card-title');
                title.textContent = product.name;
                const purchaseButton = document.createElement('button');
                purchaseButton.classList.add('btn', 'btn-primary', 'w-100');
                purchaseButton.textContent = `Purchase | $${product.price.toFixed(2)}`; // Assuming price is provided in products.json
                // Assuming you want to use SellPass data attributes for customization
                purchaseButton.setAttribute('data-sellpass-product-path', product.name);
                purchaseButton.setAttribute('data-sellpass-domain', 'robberyy.sellpass.io');
                cardBody.appendChild(title);
                cardBody.appendChild(purchaseButton);
                card.appendChild(cardBody);

                // Append card to product list
                productListElement.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            productListElement.innerHTML = '<p>Error fetching products.</p>';
        });
});

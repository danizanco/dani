const products = [
    // Zapatillas Deportivas
    { id: 1, name: "Zapatillas Running Profesionales", price: 120 * 3.75, image: "zapatillas_running_profesionales.jpg", category: "Zapatillas Deportivas", brand: "Nike" },
    { id: 2, name: "Zapatillas de Entrenamiento", price: 100 * 3.75, image: "zapatillas_entrenamiento.jpg", category: "Zapatillas Deportivas", brand: "Adidas" },
    { id: 3, name: "Zapatillas Trail Running", price: 130 * 3.75, image: "zapatillas_trail_running.jpg", category: "Zapatillas Deportivas", brand: "Salomon" },
    { id: 4, name: "Zapatillas de Básquetbol", price: 150 * 3.75, image: "zapatillas_basquetbol.jpg", category: "Zapatillas Deportivas", brand: "Under Armour" },
    { id: 5, name: "Zapatillas para Tenis", price: 110 * 3.75, image: "zapatillas_tenis.jpg", category: "Zapatillas Deportivas", brand: "Wilson" },
    { id: 6, name: "Zapatillas para CrossFit", price: 140 * 3.75, image: "zapatillas_crossfit.jpg", category: "Zapatillas Deportivas", brand: "Reebok" },

    // Zapatillas Casual
    { id: 7, name: "Zapatillas Urbanas", price: 80 * 3.75, image: "zapatillas_urbanas.jpg", category: "Zapatillas Casual", brand: "Vans" },
    { id: 8, name: "Zapatillas de Lona", price: 70 * 3.75, image: "zapatillas_lona.jpg", category: "Zapatillas Casual", brand: "Converse" },
    { id: 9, name: "Zapatillas Retro", price: 85 * 3.75, image: "zapatillas_retro.jpg", category: "Zapatillas Casual", brand: "Reebok" },
    { id: 10, name: "Zapatillas Slip-On", price: 65 * 3.75, image: "zapatillas_slip_on.jpg", category: "Zapatillas Casual", brand: "Toms" },
    { id: 11, name: "Zapatillas Altas", price: 90 * 3.75, image: "zapatillas_altas.jpg", category: "Zapatillas Casual", brand: "Puma" },
    { id: 12, name: "Zapatillas Minimalistas", price: 75 * 3.75, image: "zapatillas_minimalistas.jpg", category: "Zapatillas Casual", brand: "New Balance" },

    // Zapatillas de Moda
    { id: 13, name: "Zapatillas de Diseñador", price: 200 * 3.75, image: "zapatillas_disenador.jpg", category: "Zapatillas de Moda", brand: "Gucci" },
    { id: 14, name: "Zapatillas de Cuero Premium", price: 180 * 3.75, image: "zapatillas_cuero_premium.jpg", category: "Zapatillas de Moda", brand: "Prada" },
    { id: 15, name: "Zapatillas de Alta Costura", price: 250 * 3.75, image: "zapatillas_alta_costura.jpg", category: "Zapatillas de Moda", brand: "Balenciaga" },
    { id: 16, name: "Zapatillas Edición Limitada", price: 300 * 3.75, image: "zapatillas_edicion_limitada.jpg", category: "Zapatillas de Moda", brand: "Louis Vuitton" },
    { id: 17, name: "Zapatillas Vintage", price: 220 * 3.75, image: "zapatillas_vintage.jpg", category: "Zapatillas de Moda", brand: "Dior" },
    { id: 18, name: "Zapatillas Exclusivas", price: 350 * 3.75, image: "zapatillas_exclusivas.jpg", category: "Zapatillas de Moda", brand: "Yeezy" },

    // Zapatillas para Niños
    { id: 19, name: "Zapatillas Deportivas Infantiles", price: 50 * 3.75, image: "zapatillas_deportivas_infantiles.jpg", category: "Zapatillas para Niños", brand: "Nike" },
    { id: 20, name: "Zapatillas con Luces", price: 45 * 3.75, image: "zapatillas_luces.jpg", category: "Zapatillas para Niños", brand: "Skechers" },
    { id: 21, name: "Zapatillas para Escuela", price: 40 * 3.75, image: "zapatillas_escuela.jpg", category: "Zapatillas para Niños", brand: "Adidas" },
    { id: 22, name: "Zapatillas Infantiles de Tela", price: 35 * 3.75, image: "zapatillas_infantiles_tela.jpg", category: "Zapatillas para Niños", brand: "Carter's" },
    { id: 23, name: "Zapatillas Resistentes", price: 55 * 3.75, image: "zapatillas_resistentes.jpg", category: "Zapatillas para Niños", brand: "Puma" },
    { id: 24, name: "Zapatillas de Colores", price: 38 * 3.75, image: "zapatillas_colores.jpg", category: "Zapatillas para Niños", brand: "Disney" },

    // Zapatillas para Mujeres
    { id: 25, name: "Zapatillas Deportivas para Mujeres", price: 90 * 3.75, image: "zapatillas_deportivas_mujeres.jpg", category: "Zapatillas para Mujeres", brand: "Nike" },
    { id: 26, name: "Zapatillas de Plataforma", price: 110 * 3.75, image: "zapatillas_plataforma.jpg", category: "Zapatillas para Mujeres", brand: "Adidas" },
    { id: 27, name: "Zapatillas de Cuero para Mujeres", price: 150 * 3.75, image: "zapatillas_cuero_mujeres.jpg", category: "Zapatillas para Mujeres", brand: "Reebok" },
    { id: 28, name: "Zapatillas con Tacos", price: 130 * 3.75, image: "zapatillas_tacos.jpg", category: "Zapatillas para Mujeres", brand: "Puma" },
    { id: 29, name: "Zapatillas Elegantes", price: 200 * 3.75, image: "zapatillas_elegantes.jpg", category: "Zapatillas para Mujeres", brand: "Gucci" },
    { id: 30, name: "Zapatillas Deportivas Elegantes", price: 180 * 3.75, image: "zapatillas_deportivas_elegantes.jpg", category: "Zapatillas para Mujeres", brand: "Balenciaga" }
];





// Mostrar productos organizados por categorías
function displayProductsByCategory() {
    const categories = ["Maquillaje", "Cuidado del Cabello", "Cuidado de la Piel", "Fragancias", "Accesorios"];
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar la lista de productos antes de agregarla nuevamente

    categories.forEach(category => {
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryTitle.classList.add('category-title'); // Aplicar la clase para el estilo
        productList.appendChild(categoryTitle);

        const filteredProducts = products.filter(product => product.category === category);
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
            `;
            productList.appendChild(productElement);
        });
    });
}

// Llamar a la función para mostrar los productos al cargar la página
document.addEventListener('DOMContentLoaded', displayProductsByCategory);



// Carrito de compras (arreglo para almacenar productos seleccionados)
let cart = [];

// Mostrar los productos filtrados
function displayFilteredProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar productos anteriores

    if (filteredProducts.length === 0) {
        productList.innerHTML = '<p>No se encontraron productos.</p>';
    } else {
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
            `;
            productList.appendChild(productElement);
        });
    }
}

// Buscar productos
function searchProducts() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) || product.brand.toLowerCase().includes(searchTerm)
    );
    displayFilteredProducts(filteredProducts);
}

// Inicializar productos al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    displayFilteredProducts(products);
});

// Función para agregar productos al carrito
function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    updateCartModal();
}

// Abrir y cerrar el modal del carrito
function openCartModal() {
    document.getElementById("cart-modal").style.display = "block";
}

function closeCartModal() {
    document.getElementById("cart-modal").style.display = "none";
}

// Abrir y cerrar el modal de pago
function openPaymentModal() {
    document.getElementById("payment-modal").style.display = "block";
}

function closePaymentModal() {
    document.getElementById("payment-modal").style.display = "none";
}

// Función para eliminar productos del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartModal();
}

// Función para actualizar el contador de productos en el carrito
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Función para actualizar el contenido del carrito en el modal
function updateCartModal() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div>
                    <p>${item.name}</p>
                    <p>Precio: $${item.price}</p>
                    <p>Cantidad: ${item.quantity}</p>
                </div>
                <button onclick="removeFromCart(${item.id})" class="remove-item-btn">Eliminar</button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const totalElement = document.createElement('div');
        totalElement.classList.add('cart-total');
        totalElement.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
        cartItemsContainer.appendChild(totalElement);
    }
}

// Función para abrir el modal de pago y proceder con el formulario
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pago procesado exitosamente');
});

// Funciones para los modales de login y contacto
function openLoginModal() {
    document.getElementById('login-modal').style.display = "block";
}

function closeLoginModal() {
    document.getElementById('login-modal').style.display = "none";
}

function openContactForm() {
    document.getElementById('contact-modal').style.display = "block";
}

function closeContactForm() {
    document.getElementById('contact-modal').style.display = "none";
}

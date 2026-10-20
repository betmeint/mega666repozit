const products = [
  { id: 1, title: 'Ноутбук 15"',       category: 'Компьютеры', price: 85000 },
  { id: 2, title: 'Монитор 27"',       category: 'Компьютеры', price: 28000 },
  { id: 3, title: 'Клавиатура',        category: 'Аксессуары', price: 6500 },
  { id: 4, title: 'Мышь беспроводная', category: 'Аксессуары', price: 2500 },
  { id: 5, title: 'Клавиатура механическая', category: 'Аксессуары', price: 9900 },
  { id: 6, title: 'Наушники', category: 'Аксессуары', price: 7400 },
  { id: 7, title: 'USB микрофон', category: 'Аксессуары', price: 5500 }
];

const catalog = document.getElementById('catalog');


function renderProducts() {
    catalog.innerHTML = products.map(p => `
        <div class="card">
            <div class="category">${p.category}</div>
            <h3>${p.title}</h3>
            <div class="price">${p.price.toLocaleString('ru-RU')} ₽</div>
            <button onclick="addToCart(${p.id})">В корзину</button>
        </div>
    `).join('');
}


function addToCart(id) {
    const product = products.find(p => p.id === id);
    console.log(product.title);
}

renderProducts();
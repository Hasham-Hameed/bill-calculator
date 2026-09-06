
const priceEl = document.getElementById('price');
const qtyEl = document.getElementById('quantity');
const discountEl = document.getElementById('discount');

const subtotalEl = document.getElementById('subtotal');
const discountAmountEl = document.getElementById('discountAmount');
const totalDueEl = document.getElementById('totalDue');

function fmt(n) {
    return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function calculate() {
    const price = parseFloat(priceEl.value) || 0;
    const quantity = parseFloat(qtyEl.value) || 0;
    const discount = parseFloat(discountEl.value) || 0;

    const subtotal = price * quantity;
    const discountAmount = subtotal * (discount / 100);
    const total = subtotal - discountAmount;

    subtotalEl.textContent = fmt(subtotal);
    discountAmountEl.textContent = '−' + fmt(discountAmount);
    totalDueEl.textContent = fmt(total);
}

[priceEl, qtyEl, discountEl].forEach(el => el.addEventListener('input', calculate));
calculate();

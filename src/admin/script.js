  // JavaScript to handle stock value changes
  document.addEventListener('DOMContentLoaded', (event) => {
    let stockValue = 0;

    const stockValueElement = document.getElementById('stock-value');
    const increaseBtn = document.getElementById('increase-btn');
    const decreaseBtn = document.getElementById('decrease-btn');

    increaseBtn.addEventListener('click', () => {
        stockValue++;
        stockValueElement.textContent = stockValue;
    });

    decreaseBtn.addEventListener('click', () => {
        if (stockValue > 0) {
            stockValue--;
            stockValueElement.textContent = stockValue;
        }
    });
});
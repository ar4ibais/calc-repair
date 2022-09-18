// Элементы формы
const squareInput = document.querySelector('#square-input'),
      squareRange = document.querySelector('#square-range'),
      totalPrice = document.querySelector('#total-price'),
      basePrice = 6000;

// Связка ползунка с тексовым значением
squareRange.addEventListener('input', () => {
    squareInput.value = squareRange.value;
    setCost();
});

squareInput.addEventListener('input', () => {
    squareRange.value = squareInput.value;
    setCost();
});

//Указываем финальную стоимость без всяких опций
function setCost() {
    const formatter = new Intl.NumberFormat('ru-RU');
    let price = parseInt(squareInput.value) * basePrice;

    totalPrice.innerText = formatter.format(price);
}

setCost();
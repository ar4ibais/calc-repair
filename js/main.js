// Элементы формы
const squareInput = document.querySelector('#square-input'),
      squareRange = document.querySelector('#square-range'),
      totalPrice = document.querySelector('#total-price'),
      basePrice = 6000;

// Связка ползунка с тексовым значением
squareRange.addEventListener('input', () => {
    squareInput.value = squareRange.value;
});

squareInput.addEventListener('input', () => {
    squareRange.value = squareInput.value;
});

//Указываем финальную стоимость без всяких опций
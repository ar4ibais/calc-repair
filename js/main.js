// Элементы формы
const squareInput = document.querySelector('#square-input'),
      squareRange = document.querySelector('#square-range'),
      basePrice = 6000,
      totalPriceElement = document.querySelector('#total-price'),
      inputs = document.querySelectorAll('input'),
      radiosType = document.querySelectorAll('input[name="type"]'),
      radioBuild = document.querySelectorAll('input[name="building"]'),
      radioRooms = document.querySelectorAll('input[name="rooms"]'),
      ceilings = document.querySelector('input[name="ceiling"]'),
      walls = document.querySelector('input[name="walls"]'),
      floor = document.querySelector('input[name="floor"]');

// Связка ползунка с тексовым значением
squareRange.addEventListener('input', () => {
    squareInput.value = squareRange.value;
});

squareInput.addEventListener('input', () => {
    squareRange.value = squareInput.value;
});

//Указываем финальную стоимость
function calculate() {
    let totalPrice = basePrice * parseInt(squareInput.value);

    for (let radio of radiosType) {
        if (radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }

    for (let radio of radioBuild) {
        if (radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }

    for (let radio of radioRooms) {
        if (radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }

    if (ceilings.checked) {
        totalPrice *= parseFloat(ceilings.value);
    }

    if (walls.checked) {
        totalPrice *= parseFloat(walls.value);
    }

    if (floor.checked) {
        totalPrice *= parseFloat(floor.value);
    }
    
    const formatter = new Intl.NumberFormat('ru');

    totalPriceElement.textContent = formatter.format(totalPrice);
}

calculate();

//Навешиваем функцию расчета стоимости для каждого инпута при изменении

for (let input of inputs) {
    input.addEventListener('input', () => {
        calculate();
    });
}
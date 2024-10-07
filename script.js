const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const celsiusToFahrenheitBtn = document.getElementById('celsiusToFahrenheit');
const fahrenheitToCelsiusBtn = document.getElementById('fahrenheitToCelsius');

celsiusToFahrenheitBtn.addEventListener('click', () => {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
    }
});

fahrenheitToCelsiusBtn.addEventListener('click', () => {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        celsiusInput.value = celsius.toFixed(2);
    }
});

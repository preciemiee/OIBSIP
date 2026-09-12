const tempInput = document.getElementById('tempValue');
const unitSelect = document.getElementById('fromUnit');
const convertBtn = document.getElementById('convertBtn');
const celsiusResult = document.getElementById('celsiusResult');
const fahrenheitResult = document.getElementById('fahrenheitResult');
const kelvinResult = document.getElementById('kelvinResult');

convertBtn.addEventListener('click', function () {
  const value = parseFloat(tempInput.value);
  const unit = unitSelect.value;

  if (isNaN(value)) {
    alert('Please enter a valid number');
    return;
  }

    let celsius;
  if (unit === 'celsius') celsius = value;
  else if (unit === 'fahrenheit') celsius = (value - 32) * 5/9;
  else if (unit === 'kelvin') celsius = value - 273.15;

  if (celsius < -273.15) {
    alert('Temperature cannot be below absolute zero');
    return;
  }

    const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  celsiusResult.textContent = celsius.toFixed(2) + ' °C';
  fahrenheitResult.textContent = fahrenheit.toFixed(2) + ' °F';
  kelvinResult.textContent = kelvin.toFixed(2) + ' K';
});
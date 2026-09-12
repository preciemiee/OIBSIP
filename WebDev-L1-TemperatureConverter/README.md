# Temperature Converter

A simple, responsive web app that converts temperature values between Celsius, Fahrenheit, and Kelvin in real time.

**Track:** Web Development & Designing — Level 1
**Internship:** Oasis Infobyte

## Features
- Input field for entering a temperature value
- Dropdown to select the input unit (Celsius, Fahrenheit, or Kelvin)
- Instantly displays the converted value in all three units
- Validates input — shows an error message if the value is empty or not a number
- Rejects temperatures below absolute zero (−273.15°C) with a clear error message
- Clean, centered glassmorphism UI design

## Tech Stack
- HTML5
- CSS3 (glassmorphism styling with backdrop blur)
- JavaScript (Vanilla)

## How It Works
1. The user types a temperature value and selects the unit it's in.
2. On clicking **Convert**, the app first converts the entered value into Celsius as a common reference point.
3. From Celsius, it calculates the equivalent Fahrenheit and Kelvin values.
4. All three results are displayed at once.
5. If the input is invalid (empty, non-numeric, or below absolute zero), an alert explains what went wrong instead of showing incorrect results.

## Files
- `index.html` — page structure
- `style.css` — styling (glassmorphism card, gradient background, layout)
- `script.js` — conversion logic and input validation

## How to Run
Open `index.html` in any web browser — no installation or build steps required.

## Screenshots
*(Add a screenshot of the working app here before submitting)*

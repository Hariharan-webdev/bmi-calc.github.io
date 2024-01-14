let w = document.getElementById("weight");
let h = document.getElementById("height");
let calc = document.getElementById("calc");
let msg = document.getElementById("msg");
let result = document.getElementById("result");

calc.addEventListener("click", calculateBMI);

function calculateBMI() {
  try {
    let weight = parseFloat(w.value);
    let heightInCm = parseFloat(h.value);
    if (weight === 0 || heightInCm === 0 || isNaN(weight) || isNaN(heightInCm)) {
      result.textContent = "Invalid input. Weight and height cannot be zero.";
    } else {
      let height = heightInCm / 100;
      let bmi = weight / (height * height);

      if (bmi < 18.5) {
        msg.textContent =
          "According to the World Health Organization (WHO), you are in the underweight category.";
        result.textContent = "Your Body Mass Index (BMI) is " + bmi.toFixed(2);
      } else if (18.5 <= bmi && bmi <= 24.99) {
        msg.textContent =
          "Congratulations! According to the World Health Organization (WHO), your weight is normal.";
        result.textContent = "Your Body Mass Index (BMI) is " + bmi.toFixed(2);
      } else if (25.0 <= bmi && bmi <= 29.99) {
        msg.textContent =
          "According to the World Health Organization (WHO), you are in the pre-obesity level.";
        result.textContent = "Your Body Mass Index (BMI) is " + bmi.toFixed(2);
      } else if (30.0 <= bmi && bmi <= 34.99) {
        msg.textContent =
          "According to the World Health Organization (WHO), you are in obesity class 1.";
        result.textContent = "Your Body Mass Index (BMI) is " + bmi.toFixed(2);
      } else if (35.0 <= bmi && bmi <= 39.99) {
        msg.textContent =
          "According to the World Health Organization (WHO), you are in obesity class 2.";
        result.textContent = "Your Body Mass Index (BMI) is " + bmi.toFixed(2);
      } else {
        msg.textContent =
          "According to the World Health Organization (WHO), you are in obesity class 3.";
        result.textContent = "Your Body Mass Index (BMI) is " + bmi.toFixed(2);
      }
    }
  } catch (error) {
    msg.textContent =
      "Invalid input. Please enter numeric values for weight and height.";
  }
}
document
  .getElementById("conversionType")
  .addEventListener("change", function () {
    var conversionType = this.value;
    if (conversionType === "celsiusToFahrenheit") {
      document.getElementById("celsius").value = ""; // Clear Celsius input
      document.getElementById("celsius").disabled = false;
      document.getElementById("fahrenheit").value = "";
      document.getElementById("fahrenheit").disabled = true;
    } else if (conversionType === "fahrenheitToCelsius") {
      document.getElementById("fahrenheit").value = ""; // Clear Fahrenheit input
      document.getElementById("fahrenheit").disabled = false;
      document.getElementById("celsius").value = "";
      document.getElementById("celsius").disabled = true;
    }
  });

document.getElementById("convertBtn").addEventListener("click", function () {
  var conversionType = document.getElementById("conversionType").value;
  if (conversionType === "celsiusToFahrenheit") {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  } else if (conversionType === "fahrenheitToCelsius") {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById("celsius").value = celsius.toFixed(2);
  }
});

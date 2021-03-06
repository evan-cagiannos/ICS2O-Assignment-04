// Created by: Evan Cagiannos
// Created on: April 2022
// This file contains the JS functions for index.html


/**
 * Input
 */
function pizzaOrder() {
  var price = 0;
  var top = 0;
  var total = 0;
  var tax = 0;

  var largePizza = document.getElementById("largePizza");
  var extraLargePizza = document.getElementById("extraLargePizza");

  if (largePizza.checked == true) {
    price = 6.0;
    document.getElementById("s_result").innerHTML = "Large";
  } else if (extraLargePizza.checked == true) {
    price = 10.0;
    document.getElementById("s_result").innerHTML = "Extra large";
  }

  document.getElementById("p_result").innerHTML = "$" + price;

  var topping1 = document.getElementById("topping-1");
  var topping2 = document.getElementById("topping-2");
  var topping3 = document.getElementById("topping-3");
  var topping4 = document.getElementById("topping-4");

  if (topping1.checked == true) {
    topping = 1.0;
    document.getElementById("t_options").innerHTML = "1 Topping";
  }

  if (topping2.checked == true) {
    topping = 1.75;
    document.getElementById("t_options").innerHTML = "2 Toppings";
  }

  if (topping3.checked == true) {
    topping = 2.5;
    document.getElementById("t_options").innerHTML = "3 Toppings";
  }

  if (topping4.checked == true) {
    topping = 3.35;
    document.getElementById("t_options").innerHTML = "4 Toppings";
  }

  document.getElementById("t_result").innerHTML = "$" + top;

  tax = (price + topping) * 0.13;
  total = tax + (price + topping);

  document.getElementById("answers").innerHTML =
    "Your Current Total is $ " + total.toFixed(2);
}

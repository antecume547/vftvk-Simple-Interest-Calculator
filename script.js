"use strict";

/**
 * Function to compute the interest.
 * */

function compute() {
  let principal,
    principalValue,
    rate,
    years,
    interest,
    actualYear,
    resultValueContainer,
    error;

  /**
   *Get the principal value ('amount')
   * */
  principal = document.getElementById("principal");

  /**
   *get validation message
   * */
  error = document.getElementById("error01");

  /**
   *Check if the principal input value is empty string
   */
  if (
    principal.value === "" ||
    principal.value === undefined ||
    principal.value === null
  ) {
    /**
     *If the validation message is still there
     * */
    if (error) {
      principal.focus();
      return;
    }

    principal.insertAdjacentHTML(
      "afterend",
      '<div id="error01",  class="valMessage">Please enter the ammount.</div>'
    );

    principal.focus();

    return;
  } else {
    /**
     *If all right parse the principal value
     * */
    principalValue = parseFloat(principal.value);
  }

  /**
   *Check if the entered amount is positive number and isn't zero
   * */
  if (principalValue === 0 || principalValue < 0) {
    alert("The amount should be a positive number.");
    principal.value = "";
    principal.focus();
    return;
  }

  /**
   *Get the input values and parse those
   * */
  rate = parseFloat(document.getElementById("rate").value);
  years = parseInt(document.getElementById("years").value);

  /**
   *Calculate the interest
   * */
  interest = (principalValue * rate * years) / 100;

  /**
   * Calculate the year when the overdraft will be finished
   * */
  actualYear = new Date().getFullYear() + years;

  /**
   * Template for the result
   * @const
   */
  const retval = `If you deposit <span class="highLight">${principalValue}</span>,<br>
at an interest rate of <span class="highLight">${rate}%</span>.<br>
You will receive an amount of <span class="highLight">${interest}</span>,<br>
in the year <span class="highLight">${actualYear}</span>.`;

  /**
   *If the validation message still there, delete it
   * */
  if (error) {
    error.remove();
  }

  /**
   * Put the template with the result into its place
   * */
  resultValueContainer = document.getElementById("result");
  resultValueContainer.innerHTML = retval;

  /**
   *Put again the focus into the 'amount' input field
   * */
  principal.focus();
}

/**
 *function to display the slider's actual values in the input range field (id=rate)
 * */
function updateRate() {
  let rate = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rate;
}

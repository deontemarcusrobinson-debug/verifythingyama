function setFocus() {
  var field = document.getElementById("mCardNumber");
  if (!field) return;
  field.focus();
  field.select();
}

function validFields(event) {
  if (event && event.preventDefault) event.preventDefault();

  var cardNumber = (document.getElementById("mCardNumber").value || "").trim();
  var lastName = (document.getElementById("mLastName").value || "").trim();
  var result = document.getElementById("result");
  var mess = "";

  if (cardNumber.substring(0, 3) !== "12-") {
    mess += "* Your card number must start with 12-\n";
  }
  if (cardNumber.length !== 12) {
    mess += "* Your card number must be 12 characters\n";
  }
  if (lastName === "") {
    mess += "* Student's Last Name\n";
  }

  if (mess !== "") {
    alert("The following fields are required.\n" + mess);
    document.getElementById("mCardNumber").focus();
    if (result) {
      result.hidden = false;
      result.className = "result error";
      result.textContent = mess.replace(/\n/g, " ");
    }
    return false;
  }

  /*
    Connect your verification API / backend here.
    On the original site this posts to eVerify02.php.
  */

  if (result) {
    result.hidden = false;
    result.className = "result success";
    result.innerHTML =
      "<strong>VALID</strong><br>" +
      "Card Number: <strong>" +
      escapeHtml(cardNumber) +
      "</strong><br>" +
      "Student's Last Name: <strong>" +
      escapeHtml(lastName) +
      "</strong><br>" +
      "This OSHA card has been verified.";
  }

  return false;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

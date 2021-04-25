var currentCustomer = 0;
var totalCharge = 0;

function calculateCharges(h) {
    var charges = 2;
    if (h > 3) {
        charges += Math.ceil(h - 3) * 0.5;
    }
    if (charges > 10) {
        charges = 10;
    }
    totalCharge += charges;
    return charges;
}
document.querySelector("button").addEventListener("click", function() {
    if (totalCharge === 0) {
        document.querySelector("table").innerHTML = "<th>Customer</th><th>Hours Parked</th><th>Charges</th>"
    }
    var addCustomer = "Y";
    while (addCustomer === "Y") {
        currentCustomer++;
        var hParked = prompt("Please enter the hours parked for customer: ", "");
        var charges = calculateCharges(hParked);
        document.querySelector("table").insertRow(currentCustomer).innerHTML = ("<td align= 'center'>Customer " + currentCustomer.toString() + "</td><td align='center'>" + hParked.toString() + "</td><td align='center'>" + charges.toString() + "</td>");
        addCustomer = prompt("Add a Customer? ", "Y");
    }
    document.querySelector(".currentCustomer").innerHTML = "The Current Charge: " + "<b>" + charges + "</b><br>";
    document.querySelector(".total").innerHTML = "Total Collections: " + "<b>$" + totalCharge + "</b>";
    if (document.querySelector("table").rows[currentCustomer + 1] === undefined) {
        document.querySelector("table").insertRow(currentCustomer + 1).innerHTML = ("<td/><td/><td align='center'><b>$" + totalCharge.toString() + "</b></td>")
    } else {
        document.querySelector("table").rows[currentCustomer + 1].innerHTML = ("<td/><td/><td align='center'><b>$" + totalCharge.toString() + "</b></td>")
    }
});
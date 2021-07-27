// $(function () {});
$(document).ready(function() {

    $("#submit").click(function () {
        var loanAmount = $("#loan-amount").val();
        var apr = $("#apr").val();
        
        // parseFloat let numbers include decimals, but parseInt converts numbers to intiger without decimals.
        loanAmount = parseFloat(loanAmount);
        apr = parseFloat(apr); // SHOULD BE FLOAT to include "pennies".

        console.log(apr);

        var interestPrice = loanAmount * ((apr / 100) / 12);

        interestPrice = interestPrice.toFixed(2);

        var resultsText = "You will owe an extra $" + interestPrice + " after 1 month.<br />(Monthly Compounding Interest)";

        $("#result-value").html(resultsText);
    });

});


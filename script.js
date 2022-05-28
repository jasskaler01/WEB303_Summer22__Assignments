/*
	WEB 303 Assignment 1 - jQuery
	{Jaskaran singh}
*/
$(document).ready(function() {
    $("#price").keyup(function() {
        let getPrice = $("#price").val();
        let tax = getPrice * 0.13;
       

	
	$("#tax").text("$" + tax.toFixed(2));
 });
 });